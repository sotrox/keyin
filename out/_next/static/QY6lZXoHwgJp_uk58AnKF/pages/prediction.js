(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{U1BG:function(n,t,e){"use strict";e.r(t);var u=e("q1tI"),r=e.n(u),i=e("h9Ui"),l=r.a.createElement;t.default=function(){var n=Object(u.useState)(""),t=n[0],e=n[1],r=Object(i.graphAnalyzeTonal)(t),a=Object(i.predict)(r.map((function(n){return n.letter})).map((function(n){return n.literal})));return l("div",null,"\u62cd\u7f85\u99ac\u5b57, \u8f38\u51fa prediction",l("label",null,l("br",null),l("input",{type:"text",value:t,onChange:function(n){e(n.target.value)}})),l("br",null),"tuples",a.map((function(n){return l("li",null,n[0]+", "+n[1])})))}},n0T5:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/prediction",function(){return e("U1BG")}])}},[["n0T5",0,1,2]]]);