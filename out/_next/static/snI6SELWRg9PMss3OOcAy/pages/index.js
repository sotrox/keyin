(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("YFqc"),a=n.n(i),l=o.a.createElement;t.default=function(){return l("ul",null,l("li",null,l(a.a,{href:"/word"},l("a",null,"\u55ae\u8a9e"))),l("li",null,l(a.a,{href:"/replacive"},l("a",null,"replacive"))),l("li",null,l(a.a,{href:"/additive"},l("a",null,"additive"))),l("li",null,l(a.a,{href:"/phrasalverb"},l("a",null,"phrasal verb"))),l("li",null,l(a.a,{href:"/surfaceform"},l("a",null,"surface form"))),l("li",null,l(a.a,{href:"/eadjective"},l("a",null,"e-adjective"))),l("li",null,l(a.a,{href:"/composition"},l("a",null,"composition"))),l("li",null,l(a.a,{href:"/prediction"},l("a",null,"prediction"))),l("li",null,l(a.a,{href:"/tonepattern"},l("a",null,"tone pattern"))),l("li",null,l(a.a,{href:"/tonepatternwords"},l("a",null,"tone pattern - words"))),l("li",null,l(a.a,{href:"/kana"},l("a",null,"kana"))),l("li",null,l(a.a,{href:"/hint"},l("a",null,"hint"))))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("a1gu"),a=n("Nsbk"),l=n("7W2i");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var s=n("TqRt"),c=n("284h");t.__esModule=!0,t.default=void 0;var f,p=c(n("q1tI")),h=n("QmWs"),v=n("g/15"),d=s(n("nOHt"));function w(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var y=new Map,m=window.IntersectionObserver,g={};function k(){return f||(m?f=new m((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var E=function(e){l(s,e);var t,n=(t=s,function(){var e,n=a(t);if(u()){var r=a(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return i(this,e)});function s(e){var t;return r(this,s),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}((function(e,t){return{href:w(e),as:t?w(t):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=t.formatUrls(t.props.href,t.props.as),a=i.href,l=i.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var u=window.location.pathname;a=(0,h.resolve)(u,a),l=l?(0,h.resolve)(u,l):a,e.preventDefault();var s=t.props.scroll;null==s&&(s=l.indexOf("#")<0),d.default[t.props.replace?"replace":"push"](a,l,{shallow:t.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return o(s,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,h.resolve)(e,n);return[o,r?(0,h.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&m&&e&&e.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=k();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();d.default.prefetch(t[0],t[1],e).catch((function(e){0})),g[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),p.default.cloneElement(i,a)}}]),s}(p.Component);t.default=E}},[["/EDR",0,1,3]]]);