(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{fGnW:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/eadjective",function(){return t("j8RI")}])},j8RI:function(n,e,t){"use strict";t.r(e);var i=t("q1tI"),a=t.n(i),l=t("h9Ui"),o=a.a.createElement;e.default=function(){var n=Object(i.useState)(""),e=n[0],t=n[1],a=[["sin","e"],["quz","ez"],["soew","ew"]],u=a.filter((function(n){return n.join(" ")===e})),r=new l.TonalPhrasalInflector,c=r.inflectEToAdnominal("","");u[0]&&(c=r.inflectEToAdnominal(u[0][0],u[0][1]));var f=c.getForms();return o("div",null,o("label",null,"\u62cd\u7f85\u99ac\u5b57, \u8f38\u51fa\u7e7c\u7e8c\u5f62",o("br",null),o("input",{type:"text",list:"adjectives",onChange:function(n){t(n.target.value)}})),o("datalist",{id:"adjectives"},a.map((function(n){return o("option",{key:n[0]+n[1],value:n[0]+" "+n[1]})}))),f.map((function(n){return o("a",null,n.literal," ")})))}}},[["fGnW",0,1,2]]]);