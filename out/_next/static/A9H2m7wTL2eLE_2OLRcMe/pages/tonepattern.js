(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/h46":function(t,n,e){e("cHUd")("Map")},"8iia":function(t,n,e){var r=e("QMMT"),i=e("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},LX0d:function(t,n,e){t.exports=e("UDep")},PRuI:function(t,n,e){"use strict";e.r(n);var r=e("LX0d"),i=e.n(r),o=e("q1tI"),a=e.n(o),s=e("h9Ui"),u=a.a.createElement;n.default=function(){var t=Object(o.useState)(""),n=t[0],e=t[1],r=(new i.a).set(s.TonalLetterTags.f,1).set(s.TonalLetterTags.y,2).set(s.TonalLetterTags.w,3).set(s.TonalLetterTags.x,5).set(s.TonalLetterTags.z,7),a=(new i.a).set(s.TonalLetterTags.zero,1).set(s.TonalLetterTags.p,4).set(s.TonalLetterTags.t,4).set(s.TonalLetterTags.k,4).set(s.TonalLetterTags.h,4).set(s.TonalLetterTags.pp,8).set(s.TonalLetterTags.tt,8).set(s.TonalLetterTags.kk,8).set(s.TonalLetterTags.hh,8),f=(new s.TonalInflectionAnalyzer).morphAnalyze(n,new s.TonalCombiningForms).map((function(t){return r.has(t.allomorph.tonal.toString())?r.get(t.allomorph.tonal.toString()):a.get(t.allomorph.toString())}));return u("div",null,u("label",null,"\u62cd\u7f85\u99ac\u5b57, \u8f38\u51fa\u8072\u8abf\u6a21\u5f0f",u("br",null),u("input",{type:"text",list:"entries",onChange:function(t){e(t.target.value)}})),u("datalist",{id:"entries"},["chongwtaiwgiy","pannypannyqiurw","angfangwangx","siurfsiurzsiur","liyleyqiurw"].map((function(t){return u("option",{key:t,value:t})}))),f)}},"RRc/":function(t,n,e){var r=e("oioR");t.exports=function(t,n){var e=[];return r(t,!1,e.push,e,n),e}},UDep:function(t,n,e){e("wgeU"),e("FlQf"),e("bBy9"),e("g33z"),e("XLbu"),e("/h46"),e("dVTT"),t.exports=e("WEpk").Map},Wu5q:function(t,n,e){"use strict";var r=e("2faE").f,i=e("oVml"),o=e("XJU/"),a=e("2GTP"),s=e("EXMj"),u=e("oioR"),f=e("MPFp"),l=e("UO39"),p=e("TJWN"),c=e("jmDH"),h=e("6/1s").fastKey,T=e("n3ko"),g=c?"_s":"size",_=function(t,n){var e,r=h(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,f){var l=t((function(t,r){s(t,l,n,"_i"),t._t=n,t._i=i(null),t._f=void 0,t._l=void 0,t[g]=0,void 0!=r&&u(r,e,t[f],t)}));return o(l.prototype,{clear:function(){for(var t=T(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[g]=0},delete:function(t){var e=T(this,n),r=_(e,t);if(r){var i=r.n,o=r.p;delete e._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),e._f==r&&(e._f=i),e._l==r&&(e._l=o),e[g]--}return!!r},forEach:function(t){T(this,n);for(var e,r=a(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!_(T(this,n),t)}}),c&&r(l.prototype,"size",{get:function(){return T(this,n)[g]}}),l},def:function(t,n,e){var r,i,o=_(t,n);return o?o.v=e:(t._l=o={i:i=h(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[g]++,"F"!==i&&(t._i[i]=o)),t},getEntry:_,setStrong:function(t,n,e){f(t,n,(function(t,e){this._t=T(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?l(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,l(1))}),e?"entries":"values",!e,!0),p(n)}}},XLbu:function(t,n,e){var r=e("Y7ZC");r(r.P+r.R,"Map",{toJSON:e("8iia")("Map")})},dVTT:function(t,n,e){e("aPfg")("Map")},g33z:function(t,n,e){"use strict";var r=e("Wu5q"),i=e("n3ko");t.exports=e("raTm")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=r.getEntry(i(this,"Map"),t);return n&&n.v},set:function(t,n){return r.def(i(this,"Map"),0===t?0:t,n)}},r,!0)},ihUy:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tonepattern",function(){return e("PRuI")}])}},[["ihUy",0,1,2,3]]]);