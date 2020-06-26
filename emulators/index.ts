import EmulatorPlugin from './lib/EmulatorPlugin';
import EmulatorPluginStatics, { IEmulatorPluginStatics } from './lib/EmulatorPluginStatics';
import Utils from './lib/Utils';
import UserAgents from './lib/UserAgents';
import Chrome79 from '@secret-agent/emulate-chrome-79';
import Chrome80 from '@secret-agent/emulate-chrome-80';
import Safari13_0 from '@secret-agent/emulate-safari-13-0';
import Browsers from './data/browsers.json';
import Log from '@secret-agent/commons/Logger';

const { log } = Log(module);

export default class Emulators {
  private static readonly pluginsById: { [emulatorId: string]: IEmulatorPluginStatics } = {};
  private static readonly pluginUsagePct: { [emulatorId: string]: number } = {};

  // tslint:disable-next-line:variable-name
  public static load(EmulatorPluginImpl: IEmulatorPluginStatics) {
    this.pluginsById[EmulatorPluginImpl.emulatorId] = EmulatorPluginImpl;

    const statCounterUsage = Browsers.browsers.find(y => y.browser === EmulatorPluginImpl.browser);

    // if we can't find the browser percents, set to 10%;
    const usagePct = statCounterUsage?.usage;

    if (!usagePct) {
      log.warn(
        "Browser plugin doesn't have a usage percent in the wild!",
        EmulatorPluginImpl.emulatorId,
      );
    }

    this.pluginUsagePct[EmulatorPluginImpl.emulatorId] = usagePct ?? 0;
  }

  public static get(emulatorId: string) {
    return new this.pluginsById[emulatorId]();
  }

  public static getRandom(): EmulatorPlugin {
    const plugins: IEmulatorPluginStatics[] = [];
    // Create a distribution matching the percents each is seen in the wild
    for (const [emulatorId, usage] of Object.entries(this.pluginUsagePct)) {
      for (let i = 0; i < usage; i += 1) {
        plugins.push(this.pluginsById[emulatorId]);
      }
    }
    const plugin = Utils.pickRandom(plugins);
    return new plugin();
  }
}

export { EmulatorPlugin, EmulatorPluginStatics, Utils, UserAgents };

Emulators.load(Chrome80);
Emulators.load(Chrome79);
Emulators.load(Safari13_0);
