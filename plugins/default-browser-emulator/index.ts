import BrowserEmulatorBase from '@secret-agent/plugin-utils/lib/BrowserEmulatorBase';
import IHttpResourceLoadDetails from '@secret-agent/interfaces/IHttpResourceLoadDetails';
import IDnsSettings from '@secret-agent/interfaces/IDnsSettings';
import ITcpSettings from '@secret-agent/interfaces/ITcpSettings';
import ITlsSettings from '@secret-agent/interfaces/ITlsSettings';
import { IPuppetPage } from '@secret-agent/interfaces/IPuppetPage';
import {
  BrowserEmulatorClassDecorator,
  IBrowserEmulatorConfig,
} from '@secret-agent/interfaces/IPluginBrowserEmulator';
import { IPuppetWorker } from '@secret-agent/interfaces/IPuppetWorker';
import IViewport from '@secret-agent/interfaces/IViewport';
import IPluginCreateOptions from '@secret-agent/interfaces/IPluginCreateOptions';
import IUserAgentOption from '@secret-agent/interfaces/IUserAgentOption';
import BrowserEngine from '@secret-agent/plugin-utils/lib/BrowserEngine';
import IGeolocation from '@secret-agent/interfaces/IGeolocation';
import { randomBytes } from 'crypto';
import Viewports from './lib/Viewports';
import setWorkerDomOverrides from './lib/setWorkerDomOverrides';
import setPageDomOverrides from './lib/setPageDomOverrides';
import setUserAgent from './lib/helpers/setUserAgent';
import setScreensize from './lib/helpers/setScreensize';
import setTimezone from './lib/helpers/setTimezone';
import setLocale from './lib/helpers/setLocale';
import setActiveAndFocused from './lib/helpers/setActiveAndFocused';
import selectUserAgentOption from './lib/helpers/selectUserAgentOption';
import modifyHeaders from './lib/helpers/modifyHeaders';
import configureSessionDns from './lib/helpers/configureSessionDns';
import configureSessionTcp from './lib/helpers/configureSessionTcp';
import configureSessionTls from './lib/helpers/configureSessionTls';
import FirstPartyCookiesPlugin from './lib/plugins/FirstPartyCookiesPlugin';
import DataLoader from './lib/DataLoader';
import IBrowserData from './interfaces/IBrowserData';
import selectBrowserEngineOption from './lib/helpers/selectBrowserEngineOption';
import setGeolocation from './lib/helpers/setGeolocation';
import { configureBrowserLaunchArgs } from './lib/helpers/configureBrowserLaunchArgs';

const dataLoader = new DataLoader(__dirname);
export const latestBrowserEngineId = 'chrome-88-0';
export const latestChromeBrowserVersion = { major: '88', minor: '0' };

@BrowserEmulatorClassDecorator
export default class DefaultBrowserEmulator extends BrowserEmulatorBase {
  public static id = dataLoader.pkg.name.replace('@secret-agent/', '');

  public timezoneId: string;
  public locale: string;
  public viewport: IViewport;
  public geolocation: IGeolocation;

  protected readonly data: IBrowserData;

  constructor(createOptions: IPluginCreateOptions, userAgentOption: IUserAgentOption) {
    super(createOptions, userAgentOption);
    this.data = dataLoader.as(userAgentOption) as any;

    this.data.deviceMemory = Math.ceil(Math.random() * 4) * 2;
    this.data.videoDevice = {
      deviceId: randomBytes(32).toString('hex'),
      groupId: randomBytes(32).toString('hex'),
    };
    this.data.webGLParameters = {
      // UNMASKED_VENDOR_WEBGL
      37445: 'Intel Inc.',
      // UNMASKED_RENDERER_WEBGL
      37446: 'Intel Iris OpenGL Engine',
    };

    if (this.data.browserConfig.features.includes('FirstPartyCookies')) {
      createOptions.plugins.use(FirstPartyCookiesPlugin);
    }
  }

  configure(config: IBrowserEmulatorConfig): void {
    if (!config) return;

    config.locale = config.locale || this.locale || this.data.browserConfig.defaultLocale;
    config.viewport =
      config.viewport ||
      this.viewport ||
      Viewports.getDefault(this.data.windowBaseFraming, this.data.windowFraming);
    config.timezoneId =
      config.timezoneId || this.timezoneId || Intl.DateTimeFormat().resolvedOptions().timeZone;
    config.geolocation = config.geolocation || this.geolocation;

    this.locale = config.locale;
    this.viewport = config.viewport;
    this.timezoneId = config.timezoneId;
    this.geolocation = config.geolocation;
  }

  public onDnsConfiguration(settings: IDnsSettings): void {
    configureSessionDns(this, settings);
  }

  public onTcpConfiguration(settings: ITcpSettings): void {
    configureSessionTcp(this, settings);
  }

  public onTlsConfiguration(settings: ITlsSettings): void {
    configureSessionTls(this, settings);
  }

  public beforeHttpRequest(resource: IHttpResourceLoadDetails): void {
    modifyHeaders(this, this.data, resource);
  }

  public onNewPuppetPage(page: IPuppetPage): Promise<any> {
    // Don't await here! we want to queue all these up to run before the debugger resumes
    const devtools = page.devtoolsSession;
    return Promise.all([
      setUserAgent(this, devtools),
      setTimezone(this, devtools),
      setLocale(this, devtools),
      setScreensize(this, devtools),
      setActiveAndFocused(this, devtools),
      setPageDomOverrides(this, this.data, page),
      setGeolocation(this, page),
    ]);
  }

  public onNewPuppetWorker(worker: IPuppetWorker): Promise<any> {
    const devtools = worker.devtoolsSession;
    return Promise.all([
      setUserAgent(this, devtools),
      setWorkerDomOverrides(this, this.data, worker),
    ]);
  }

  public static selectBrowserMeta(
    userAgentSelector?: string,
  ): { browserEngine: BrowserEngine; userAgentOption: IUserAgentOption } {
    const userAgentOption = selectUserAgentOption(userAgentSelector, dataLoader.userAgentOptions);

    const { browserName, browserVersion } = userAgentOption;
    const browserEngineId = `${browserName}-${browserVersion.major}-${browserVersion.minor}`;
    const browserEngineOption = selectBrowserEngineOption(
      browserEngineId,
      dataLoader.browserEngineOptions,
    );
    const browserEngine = new BrowserEngine(this, browserEngineOption);
    return { browserEngine, userAgentOption };
  }

  public static onBrowserWillLaunch(
    browserEngine: BrowserEngine,
    options: {
      showBrowser?: boolean;
      disableGpu?: boolean;
      disableDevtools?: boolean;
    },
  ): void {
    configureBrowserLaunchArgs(browserEngine, options);
  }
}
