(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8hF3":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/surfaceform",function(){return e("uie3")}])},PI58:function(n,t,e){"use strict";function r(n){var t=[];return n?(t.push(n),t):t}function u(n,t){var e=n,r=t,u=[];return e.length-r.length!=0?(u.push(e.substr(0,e.length-r.length)),u):u}function i(n){var t=[];for(var e in n)for(var r in n[e]){var u=n[e][r];t.push([u.toString(),u.name])}return t}function a(n,t){var e=[];return n&&t&&n!==t?(e.push(t),e):e}e.d(t,"a",(function(){return r})),e.d(t,"c",(function(){return u})),e.d(t,"b",(function(){return i})),e.d(t,"d",(function(){return a}))},uie3:function(n,t,e){"use strict";e.r(t);var r=e("q1tI"),u=e.n(r),i=e("PI58"),a=e("h9Ui"),o=u.a.createElement;t.default=function(){var n=Object(r.useState)(),t=n[0],e=n[1],u=(new a.TonalAssimilator).assimilateRegressive(t),l=Object(i.d)(u.word.literal,u.getForms().length>0&&u.getForms()[0]?u.getForms()[0].literal:"");return o("div",null,"\u62cd\u7f85\u99ac\u5b57, \u8f38\u51fa\u8868\u9762\u5f62",o("label",null,o("br",null),o("input",{type:"text",list:"words",value:t,onChange:function(n){e(n.target.value)}}),o("datalist",{id:"words"},["lakkwex","hietfkiw","qapfay","chappwex","cutfmiax","qutflatt"].map((function(n){return o("option",{key:n,value:n})})))),o("br",null),l.map((function(n){return o("li",null,n)})))}}},[["8hF3",0,1,2]]]);