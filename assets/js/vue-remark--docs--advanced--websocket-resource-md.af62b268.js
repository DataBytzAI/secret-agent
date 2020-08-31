(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{Qn4J:function(e,r,t){"use strict";t.r(r);var s=t("Ow4o"),a=t("vu0Y"),o=t("pLV6");function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o.a.config.optionMergeStrategies;var i={VueRemarkRoot:a.a},c=function(e){var r=e.options.components=e.options.components||{},t=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===n(i[e])&&"function"==typeof i[e].render||"function"==typeof i[e]&&"function"==typeof i[e].options.render?r[e]=i[e]:t[e]=function(){return i[e]}}))},d=o.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",v={excerpt:null,title:"WebsocketResource"};var m=function(e){e.options[u]&&(e.options[u]=v),o.a.util.defineReactive(e.options,u,v),e.options.computed=d.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},p=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("VueRemarkRoot",[t("h1",{attrs:{id:"websocketresource"}},[t("a",{attrs:{href:"#websocketresource","aria-hidden":"true"}},[e._v("#")]),e._v("WebsocketResource")]),t("blockquote",[t("p",[e._v("Websocket Resources are core websocket connections between a client and server.")])]),t("p",[e._v("The WebsocketResource class is returned from "),t("code",{pre:!0},[e._v("window.waitForResource")]),e._v(". It contains all properties of a "),t("code",{pre:!0},[e._v("Resource")]),e._v(" in addition to an ability to subscribe to messages sent back and forth.")]),t("h2",{attrs:{id:"properties"}},[t("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),t("h3",{attrs:{id:"request"}},[t("a",{attrs:{href:"#request","aria-hidden":"true"}},[e._v("#")]),e._v("request")]),t("p",[e._v("The Http Upgrade request used to create this Websocket.")]),t("h4",{attrs:{id:"returns-resourcerequest"}},[t("a",{attrs:{href:"#returns-resourcerequest","aria-hidden":"true"}},[e._v("#")]),t("strong",[e._v("Returns")]),t("code",{pre:!0},[e._v("ResourceRequest")])]),t("h3",{attrs:{id:"response"}},[t("a",{attrs:{href:"#response","aria-hidden":"true"}},[e._v("#")]),e._v("response")]),t("p",[e._v("A simulation of an HTTP response pieced together from the socket headers returned during a normal HTTP upgrade.")]),t("h4",{attrs:{id:"returns-resourceresponse"}},[t("a",{attrs:{href:"#returns-resourceresponse","aria-hidden":"true"}},[e._v("#")]),t("strong",[e._v("Returns")]),t("code",{pre:!0},[e._v("ResourceResponse")])]),t("h3",{attrs:{id:"url"}},[t("a",{attrs:{href:"#url","aria-hidden":"true"}},[e._v("#")]),e._v("url")]),t("p",[e._v("The Http Upgrade url.")]),t("h4",{attrs:{id:"returns-string"}},[t("a",{attrs:{href:"#returns-string","aria-hidden":"true"}},[e._v("#")]),t("strong",[e._v("Returns")]),t("code",{pre:!0},[e._v("string")])]),t("h3",{attrs:{id:"type"}},[t("a",{attrs:{href:"#type","aria-hidden":"true"}},[e._v("#")]),e._v("type")]),t("p",[e._v("The type of resource.")]),t("h4",{attrs:{id:"returns-resourcetypewebsocket"}},[t("a",{attrs:{href:"#returns-resourcetypewebsocket","aria-hidden":"true"}},[e._v("#")]),t("strong",[e._v("Returns")]),t("code",{pre:!0},[e._v("ResourceType=WebSocket")])]),t("h3",{attrs:{id:"isredirect"}},[t("a",{attrs:{href:"#isredirect","aria-hidden":"true"}},[e._v("#")]),e._v("isRedirect")]),t("p",[e._v("Was this request redirected")]),t("h4",{attrs:{id:"returns-boolean"}},[t("a",{attrs:{href:"#returns-boolean","aria-hidden":"true"}},[e._v("#")]),t("strong",[e._v("Returns")]),t("code",{pre:!0},[e._v("boolean")])]),t("h3",{attrs:{id:"data"}},[t("a",{attrs:{href:"#data","aria-hidden":"true"}},[e._v("#")]),e._v("data")]),t("p",[e._v("Invalid call. Throws an Error. To subscribe to messages, see "),t("code",{pre:!0},[e._v("on('message', callback)")])]),t("h4",{attrs:{id:"returns-promisebuffer"}},[t("a",{attrs:{href:"#returns-promisebuffer","aria-hidden":"true"}},[e._v("#")]),t("strong",[e._v("Returns")]),t("code",{pre:!0},[e._v("Promise<Buffer>")])]),t("h2",{attrs:{id:"methods"}},[t("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),t("h3",{attrs:{id:"onemmessage-callback-websocketmessage--anyem"}},[t("a",{attrs:{href:"#onemmessage-callback-websocketmessage--anyem","aria-hidden":"true"}},[e._v("#")]),e._v("on"),t("em",[e._v("('message', callback: "),t("code",{pre:!0},[e._v("WebsocketMessage")]),e._v(" => any)")])]),t("p",[e._v("Called on each websocket message returned.")]),t("p",[t("code",{pre:!0},[e._v("WebsocketMessages")]),e._v(" contain:")]),t("ul",[t("li",[e._v("message "),t("code",{pre:!0},[e._v("string | Buffer")]),e._v(" - the contents of the message")]),t("li",[e._v("source "),t("code",{pre:!0},[e._v("server | client")]),e._v(" - where the message originated")])]),t("h4",{attrs:{id:"returns-promisevoid"}},[t("a",{attrs:{href:"#returns-promisevoid","aria-hidden":"true"}},[e._v("#")]),t("strong",[e._v("Returns")]),t("code",{pre:!0},[e._v("Promise<void>")])]),t("h3",{attrs:{id:"offemmessage-callback-websocketmessage--anyem"}},[t("a",{attrs:{href:"#offemmessage-callback-websocketmessage--anyem","aria-hidden":"true"}},[e._v("#")]),e._v("off"),t("em",[e._v("('message', callback: "),t("code",{pre:!0},[e._v("WebsocketMessage")]),e._v(" => any)")])]),t("p",[e._v("Unsubscribe to messages.")]),t("h4",{attrs:{id:"returns-promisevoid-1"}},[t("a",{attrs:{href:"#returns-promisevoid-1","aria-hidden":"true"}},[e._v("#")]),t("strong",[e._v("Returns")]),t("code",{pre:!0},[e._v("Promise<void>")])]),t("h3",{attrs:{id:"onceemmessage-callback-websocketmessage--anyem"}},[t("a",{attrs:{href:"#onceemmessage-callback-websocketmessage--anyem","aria-hidden":"true"}},[e._v("#")]),e._v("once"),t("em",[e._v("('message', callback: "),t("code",{pre:!0},[e._v("WebsocketMessage")]),e._v(" => any)")])]),t("p",[e._v("Subscribe to a single websocket message")]),t("h4",{attrs:{id:"returns-promisevoid-2"}},[t("a",{attrs:{href:"#returns-promisevoid-2","aria-hidden":"true"}},[e._v("#")]),t("strong",[e._v("Returns")]),t("code",{pre:!0},[e._v("Promise<void>")])]),t("h3",{attrs:{id:"addeventlisteneremmessage-callback-websocketmessage--anyem"}},[t("a",{attrs:{href:"#addeventlisteneremmessage-callback-websocketmessage--anyem","aria-hidden":"true"}},[e._v("#")]),e._v("addEventListener"),t("em",[e._v("('message', callback: "),t("code",{pre:!0},[e._v("WebsocketMessage")]),e._v(" => any)")])]),t("p",[e._v("Alias for "),t("code",{pre:!0},[e._v("on('message', callback')")])]),t("h4",{attrs:{id:"returns-promisevoid-3"}},[t("a",{attrs:{href:"#returns-promisevoid-3","aria-hidden":"true"}},[e._v("#")]),t("strong",[e._v("Returns")]),t("code",{pre:!0},[e._v("Promise<void>")])]),t("h3",{attrs:{id:"removeeventlisteneremmessage-callback-websocketmessage--anyem"}},[t("a",{attrs:{href:"#removeeventlisteneremmessage-callback-websocketmessage--anyem","aria-hidden":"true"}},[e._v("#")]),e._v("removeEventListener"),t("em",[e._v("('message', callback: "),t("code",{pre:!0},[e._v("WebsocketMessage")]),e._v(" => any)")])]),t("p",[e._v("Alias for "),t("code",{pre:!0},[e._v("off('message', callback')")])]),t("h4",{attrs:{id:"returns-promisevoid-4"}},[t("a",{attrs:{href:"#returns-promisevoid-4","aria-hidden":"true"}},[e._v("#")]),t("strong",[e._v("Returns")]),t("code",{pre:!0},[e._v("Promise<void>")])]),t("h3",{attrs:{id:"textemem"}},[t("a",{attrs:{href:"#textemem","aria-hidden":"true"}},[e._v("#")]),e._v("text"),t("em",[e._v("()")])]),t("p",[e._v("Invalid call. Throws an Error. To subscribe to messages, see "),t("code",{pre:!0},[e._v("on('message', callback)")])]),t("h4",{attrs:{id:"returns-promisestring"}},[t("a",{attrs:{href:"#returns-promisestring","aria-hidden":"true"}},[e._v("#")]),t("strong",[e._v("Returns")]),t("code",{pre:!0},[e._v("Promise<string>")])]),t("h3",{attrs:{id:"jsonemem"}},[t("a",{attrs:{href:"#jsonemem","aria-hidden":"true"}},[e._v("#")]),e._v("json"),t("em",[e._v("()")])]),t("p",[e._v("Invalid call. Throws an Error. To subscribe to messages, see "),t("code",{pre:!0},[e._v("on('message', callback)")])]),t("h4",{attrs:{id:"returns-promisejson"}},[t("a",{attrs:{href:"#returns-promisejson","aria-hidden":"true"}},[e._v("#")]),t("strong",[e._v("Returns")]),t("code",{pre:!0},[e._v("Promise<json>")])])])}),[],!1,null,null,null);"function"==typeof c&&c(p),"function"==typeof m&&m(p);r.default=p.exports},vu0Y:function(e,r,t){"use strict";r.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);