(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/eQG":function(e,n,t){t("v5Dd");var r=t("WEpk").Object;e.exports=function(e,n){return r.getOwnPropertyDescriptor(e,n)}},"2Eek":function(e,n,t){e.exports=t("W7oM")},"4mXO":function(e,n,t){e.exports=t("7TPF")},"7TPF":function(e,n,t){t("AUvm"),e.exports=t("WEpk").Object.getOwnPropertySymbols},"7m0m":function(e,n,t){var r=t("Y7ZC"),i=t("uplh"),o=t("NsO/"),l=t("vwuL"),a=t("IP1Z");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var n,t,r=o(e),u=l.f,c=i(r),s={},f=0;c.length>f;)void 0!==(t=u(r,n=c[f++]))&&a(s,n,t);return s}})},"9XFl":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/composition",function(){return t("kZZT")}])},IP1Z:function(e,n,t){"use strict";var r=t("2faE"),i=t("rr1i");e.exports=function(e,n,t){n in e?r.f(e,n,i(0,t)):e[n]=t}},"Jo+v":function(e,n,t){e.exports=t("/eQG")},Mqbl:function(e,n,t){var r=t("JB68"),i=t("w6GO");t("zn7N")("keys",(function(){return function(e){return i(r(e))}}))},W7oM:function(e,n,t){t("nZgG");var r=t("WEpk").Object;e.exports=function(e,n){return r.defineProperties(e,n)}},XoMD:function(e,n,t){e.exports=t("hYAz")},hYAz:function(e,n,t){t("7m0m"),e.exports=t("WEpk").Object.getOwnPropertyDescriptors},iq4v:function(e,n,t){t("Mqbl"),e.exports=t("WEpk").Object.keys},kZZT:function(e,n,t){"use strict";t.r(n);var r=t("hfKm"),i=t.n(r),o=t("2Eek"),l=t.n(o),a=t("XoMD"),u=t.n(a),c=t("Jo+v"),s=t.n(c),f=t("4mXO"),p=t.n(f),d=t("pLtp"),v=t.n(d);function m(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),i()(e,r.key,r)}}function g(e,n,t){return n in e?i()(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var h=t("q1tI"),w=t.n(h),y=t("h9Ui"),b=w.a.createElement;function k(e,n){var t=v()(e);if(p.a){var r=p()(e);n&&(r=r.filter((function(n){return s()(e,n).enumerable}))),t.push.apply(t,r)}return t}var O=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,"literal",""),this.literal=n}var n,t,r;return n=e,(t=[{key:"isBaseForm",value:function(e){return e===this.literal}},{key:"isProceedingForm",value:function(e){return(new y.TonalInflector).inflectDesinence(this.literal).getForms().filter((function(n){return n.literal===e})).length>0}},{key:"includes",value:function(e){return!(!this.isBaseForm(e)&&!this.isProceedingForm(e))}}])&&m(n.prototype,t),r&&m(n,r),e}(),T=new O("pah"),F=new O("jiz"),P=new O("sek"),x=["daizgiy","kana"],E=["blue","green","red"],j=[{segment:T,options:["type"]},{segment:F,options:x},{segment:P,options:E}],D=new y.Client;function Z(e,n){return e==x[1]?D.processKana(n).blockSequences.filter((function(e){return e.length>0})):e==x[0]?D.processTonal(n).word.syllables.flatMap((function(e){return e.literal})):[]}var C=[],z="",X={},q=new y.TonalInflector,M=q.inflectDesinence(j[0].segment.literal),W=q.inflectDesinence(j[1].segment.literal),N=[M.word.literal,M.getForms()[1].literal+W.word.literal,M.getForms()[1].literal+W.getForms()[0].literal+j[2].segment.literal];n.default=function(){var e=Object(h.useReducer)((function(e,n){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){g(e,n,t[n])})):u.a?l()(e,u()(t)):k(Object(t)).forEach((function(n){i()(e,n,s()(t,n))}))}return e}({},e,{},n)}),{scanned:"",selectedOne:"",typed:"",selectedTwo:"",selectedThree:""}),n=e[0],t=e[1],r=function(e){var n=e.target.name,r=e.target.value;t(g({},n,r))},o=-1,a=-1,c=-1,f=(new y.TonalLemmatizationAnalyzer).morphAnalyze(n.scanned);if(f)for(var p=0;p<f.length;p++)if(f[p]&&j[p]){if(!(p<j.length-1&&j[p].segment.isProceedingForm(f[p].syllable.literal)||p==j.length-1&&j[p].segment.isBaseForm(f[p].syllable.literal)))break;a=p}for(var d=0;d<j.length;d++)f&&f[d]&&j[d]&&j[d].segment.includes(f[d].syllable.literal)&&(o=d);var v=[];if(o>=0&&(a<o?(v=j[a+1].options,c=a+1):(v=j[o].options,c=o)),x.filter((function(e){return e.includes(n.selectedTwo)})).length>0?(z=n.selectedTwo,C=Z(z,n.typed)):C=Z(z,n.typed),E.filter((function(e){return e.includes(n.selectedThree)})).length>0){var m=n.selectedThree;X={color:m}}var w=!0;return c>0&&(w=!1),b("div",null,b("input",{type:"text",list:"words",value:n.scanned,name:"scanned",onChange:r}),b("datalist",{id:"words"},N.map((function(e){return b("option",{key:e,value:e})}))),b("br",null),b("div",null,0==c&&v.map((function(e,t){return b("div",{key:t},b("input",{type:"radio",checked:n.selectedOne===e,name:"selectedOne",onChange:r,value:e}),e)})),1==c&&v.map((function(e,t){return b("div",{key:t},b("input",{type:"radio",checked:n.selectedTwo===e,name:"selectedTwo",onChange:r,value:e}),e)})),2==c&&v.map((function(e,t){return b("div",{key:t},b("input",{type:"radio",checked:n.selectedThree===e,name:"selectedThree",onChange:r,value:e}),e)}))),b("div",{style:X},c>0&&b("input",{type:"text",disabled:w,value:n.typed,name:"typed",onChange:r}),C.map((function(e){return b("li",null," ",e," ")}))))}},nZgG:function(e,n,t){var r=t("Y7ZC");r(r.S+r.F*!t("jmDH"),"Object",{defineProperties:t("fpC5")})},pLtp:function(e,n,t){e.exports=t("iq4v")},uplh:function(e,n,t){var r=t("ar/p"),i=t("mqlF"),o=t("5K7Z"),l=t("5T2Y").Reflect;e.exports=l&&l.ownKeys||function(e){var n=r.f(o(e)),t=i.f;return t?n.concat(t(e)):n}},v5Dd:function(e,n,t){var r=t("NsO/"),i=t("vwuL").f;t("zn7N")("getOwnPropertyDescriptor",(function(){return function(e,n){return i(r(e),n)}}))}},[["9XFl",0,1,2,3]]]);