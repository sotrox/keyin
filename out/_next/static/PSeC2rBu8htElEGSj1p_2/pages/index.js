(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/EDR":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("23aj")}])},"/h46":function(t,n,e){e("cHUd")("Map")},"23aj":function(t,n,e){"use strict";e.r(n);var r=e("q1tI"),o=e.n(r),i=e("YFqc"),f=e.n(i),u=o.a.createElement;n.default=function(){return u("ul",null,u("li",null,u(f.a,{href:"/word"},u("a",null,"\u55ae\u8a9e"))),u("li",null,u(f.a,{href:"/replacive"},u("a",null,"replacive"))),u("li",null,u(f.a,{href:"/additive"},u("a",null,"additive"))),u("li",null,u(f.a,{href:"/kana"},u("a",null,"kana"))))}},"8iia":function(t,n,e){var r=e("QMMT"),o=e("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},LX0d:function(t,n,e){t.exports=e("UDep")},"RRc/":function(t,n,e){var r=e("oioR");t.exports=function(t,n){var e=[];return r(t,!1,e.push,e,n),e}},UDep:function(t,n,e){e("wgeU"),e("FlQf"),e("bBy9"),e("g33z"),e("XLbu"),e("/h46"),e("dVTT"),t.exports=e("WEpk").Map},Wu5q:function(t,n,e){"use strict";var r=e("2faE").f,o=e("oVml"),i=e("XJU/"),f=e("2GTP"),u=e("EXMj"),a=e("oioR"),s=e("MPFp"),c=e("UO39"),l=e("TJWN"),p=e("jmDH"),h=e("6/1s").fastKey,v=e("n3ko"),d=p?"_s":"size",_=function(t,n){var e,r=h(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,s){var c=t((function(t,r){u(t,c,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&a(r,e,t[s],t)}));return i(c.prototype,{clear:function(){for(var t=v(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var e=v(this,n),r=_(e,t);if(r){var o=r.n,i=r.p;delete e._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),e._f==r&&(e._f=o),e._l==r&&(e._l=i),e[d]--}return!!r},forEach:function(t){v(this,n);for(var e,r=f(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!_(v(this,n),t)}}),p&&r(c.prototype,"size",{get:function(){return v(this,n)[d]}}),c},def:function(t,n,e){var r,o,i=_(t,n);return i?i.v=e:(t._l=i={i:o=h(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:_,setStrong:function(t,n,e){s(t,n,(function(t,e){this._t=v(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?c(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,c(1))}),e?"entries":"values",!e,!0),l(n)}}},XLbu:function(t,n,e){var r=e("Y7ZC");r(r.P+r.R,"Map",{toJSON:e("8iia")("Map")})},YFqc:function(t,n,e){t.exports=e("cTJO")},cTJO:function(t,n,e){"use strict";var r=e("/HRN"),o=e("WaGi"),i=e("ZDA2"),f=e("/+P4"),u=e("N9n2"),a=e("5Uuq"),s=e("KI45");n.__esModule=!0,n.default=void 0;var c,l=s(e("LX0d")),p=e("QmWs"),h=a(e("q1tI")),v=s(e("nOHt")),d=e("g/15");function _(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var g=new l.default,k=window.IntersectionObserver,y={};function w(){return c||(k?c=new k((function(t){t.forEach((function(t){if(g.has(t.target)){var n=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(c.unobserve(t.target),g.delete(t.target),n())}}))}),{rootMargin:"200px"}):void 0)}var m=function(t){function n(t){var e;return r(this,n),(e=i(this,f(n).call(this,t))).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var n=null,e=null,r=null;return function(o,i){if(r&&o===n&&i===e)return r;var f=t(o,i);return n=o,e=i,r=f,f}}((function(t,n){return{href:_(t),as:n?_(n):n}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),f=i.href,u=i.as;if(function(t){var n=(0,p.parse)(t,!1,!0),e=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===e.protocol&&n.host===e.host}(f)){var a=window.location.pathname;f=(0,p.resolve)(a,f),u=u?(0,p.resolve)(a,u):f,t.preventDefault();var s=e.props.scroll;null==s&&(s=u.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](f,u,{shallow:e.props.shallow}).then((function(t){t&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return u(n,t),o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var t=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href;return(0,p.resolve)(t,n)}},{key:"handleRef",value:function(t){var n=this,e=y[this.getHref()];this.p&&k&&t&&t.tagName&&(this.cleanUpListeners(),e||(this.cleanUpListeners=function(t,n){var e=w();return e?(e.observe(t),g.set(t,n),function(){try{e.unobserve(t)}catch(n){console.error(n)}g.delete(t)}):function(){}}(t,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var t=this.getHref();v.default.prefetch(t),y[t]=!0}}},{key:"render",value:function(){var t=this,n=this.props.children,e=this.formatUrls(this.props.href,this.props.as),r=e.href,o=e.as;"string"===typeof n&&(n=h.default.createElement("a",null,n));var i=h.Children.only(n),f={ref:function(n){t.handleRef(n),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(n):"object"===typeof i.ref&&(i.ref.current=n))},onMouseEnter:function(n){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(n),t.prefetch()},onClick:function(n){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(n),n.defaultPrevented||t.linkClicked(n)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(f.href=o||r),h.default.cloneElement(i,f)}}]),n}(h.Component);n.default=m},dVTT:function(t,n,e){e("aPfg")("Map")},g33z:function(t,n,e){"use strict";var r=e("Wu5q"),o=e("n3ko");t.exports=e("raTm")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=r.getEntry(o(this,"Map"),t);return n&&n.v},set:function(t,n){return r.def(o(this,"Map"),0===t?0:t,n)}},r,!0)}},[["/EDR",0,1,3,4]]]);