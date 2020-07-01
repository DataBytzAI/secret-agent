(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{695:function(e,t,n){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},977:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n(695),r=n(0);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.a.config.optionMergeStrategies;var i={VueRemarkRoot:a.a},c=function(e){var t=e.options.components=e.options.components||{},n=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===s(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:n[e]=function(){return i[e]}}))},u=r.a.config.optionMergeStrategies,f="__vueRemarkFrontMatter",p={excerpt:null,title:"[AwaitedDOM](/docs/basic-interfaces/awaited-dom) <span>/</span> DocumentFragment"};var d=function(e){e.options[f]&&(e.options[f]=p),r.a.util.defineReactive(e.options,f,p),e.options.computed=u.computed({$frontmatter:function(){return e.options[f]}},e.options.computed)},m=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VueRemarkRoot",[n("h1",{attrs:{id:"awaiteddom-spanspan-documentfragment"}},[n("a",{attrs:{href:"#awaiteddom-spanspan-documentfragment","aria-hidden":"true"}},[e._v("#")]),n("a",{attrs:{href:"/docs/basic-interfaces/awaited-dom"}},[e._v("AwaitedDOM")]),n("span",[e._v("/")]),e._v(" DocumentFragment")]),n("div",{staticClass:"overview"},[n("span",{staticClass:"seoSummary"},[e._v("The "),n("strong",[n("code",[e._v("DocumentFragment")])]),e._v(" interface represents a minimal document object that has no parent. It is used as a lightweight version of "),n("a",{attrs:{href:"/en-US/docs/Web/API/Document",title:"The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree."}},[n("code",[e._v("Document")])]),e._v(" that stores a segment of a document structure comprised of nodes just like a standard document.")]),e._v(" The key difference is due to the fact that the document fragment isn't part of the active document tree structure. Changes made to the fragment don't affect the document (even on "),n("a",{staticClass:"glossaryLink",attrs:{href:"/en-US/docs/Glossary/reflow",title:"reflow: Reflow&nbsp;happens when a browser must process and draw part or all of a webpage again, such as after an update on an interactive site."}},[e._v("reflow")]),e._v(") or incur any performance impact when changes are made.")])])}),[],!1,null,null,null);"function"==typeof c&&c(m),"function"==typeof d&&d(m);t.default=m.exports}}]);