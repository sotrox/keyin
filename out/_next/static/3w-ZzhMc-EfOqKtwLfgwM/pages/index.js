(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),l=o.a.createElement;t.default=function(){return l("ul",null,l("li",null,l(i.a,{href:"word"},l("a",null,"\u55ae\u8a9e"))),l("li",null,l(i.a,{href:"replacive"},l("a",null,"replacive"))),l("li",null,l(i.a,{href:"additive"},l("a",null,"additive"))),l("li",null,l(i.a,{href:"phrasalverb"},l("a",null,"phrasal verb"))),l("li",null,l(i.a,{href:"surfaceform"},l("a",null,"surface form"))),l("li",null,l(i.a,{href:"eadjective"},l("a",null,"e-adjective"))),l("li",null,l(i.a,{href:"composition"},l("a",null,"composition"))),l("li",null,l(i.a,{href:"prediction"},l("a",null,"prediction"))),l("li",null,l(i.a,{href:"tonepattern"},l("a",null,"tone pattern"))),l("li",null,l(i.a,{href:"tonepatternwords"},l("a",null,"tone pattern - words"))),l("li",null,l(i.a,{href:"kana"},l("a",null,"kana"))),l("li",null,l(i.a,{href:"hint"},l("a",null,"hint"))),l("li",null,l(i.a,{href:"taikana"},l("a",null,"taiwanese kana"))),l("li",null,l(i.a,{href:"daizjitt"},l("a",null,"\u81fa\u65e5"))),l("li",null,l(i.a,{href:"jittwdaix"},l("a",null,"\u65e5\u81fa"))),l("li",null,l(i.a,{href:"qoaxay"},l("a",null,"\u6b4c\u4ed4"))),l("li",null,l(i.a,{href:"tokenizer"},l("a",null,"\u7f85\u99ac\u5b57 tokenizer"))))}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("7W2i"),i=n("a1gu"),l=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var f=n("TqRt"),c=n("284h");t.__esModule=!0,t.default=void 0;var s,p=c(n("q1tI")),h=n("QmWs"),v=n("g/15"),d=f(n("nOHt")),y=n("elyg");function w(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var b=new Map,g=window.IntersectionObserver,m={};function k(){return s||(g?s=new g((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var j=function(e){a(n,e);var t=u(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:(0,y.addBasePath)(w(e)),as:t?(0,y.addBasePath)(w(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),i=a.href,l=a.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var u=window.location.pathname;i=(0,h.resolve)(u,i),l=l?(0,h.resolve)(u,l):i,e.preventDefault();var f=o.props.scroll;null==f&&(f=l.indexOf("#")<0),d.default[o.props.replace?"replace":"push"](i,l,{shallow:o.props.shallow}).then((function(e){e&&f&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,h.resolve)(e,n);return[o,r?(0,h.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),m[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=k();return n?(n.observe(e),b.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();d.default.prefetch(t[0],t[1],e).catch((function(e){0})),m[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),p.default.cloneElement(a,i)}}]),n}(p.Component);t.default=j}},[["/EDR",0,1,3]]]);