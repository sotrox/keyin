(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{U1BG:function(n,t,e){"use strict";e.r(t);var i=e("q1tI"),u=e.n(i),r=e("h9Ui"),l=u.a.createElement;t.default=function(){var n=Object(i.useState)(""),t=n[0],e=n[1],u=new r.TonalLemmatizationAnalyzer,a=new r.Prediction,o=u.graphAnalyze(t),c=a.predict(o.map((function(n){return n.letter})).map((function(n){return n.literal})));return l("div",null,"\u62cd\u7f85\u99ac\u5b57, \u8f38\u51fa prediction",l("label",null,l("br",null),l("input",{type:"text",value:t,onChange:function(n){e(n.target.value)}})),l("br",null),"tuples",c.map((function(n){return l("li",null,n[0]+", "+n[1])})))}},n0T5:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/prediction",function(){return e("U1BG")}])}},[["n0T5",0,1,2]]]);