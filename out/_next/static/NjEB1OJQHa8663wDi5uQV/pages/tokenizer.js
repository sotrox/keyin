(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{peKW:function(n,e,t){"use strict";t.r(e);var u=t("q1tI"),l=t.n(u),i=t("h9Ui"),r=l.a.createElement;e.default=function(){var n=Object(u.useState)(""),e=n[0],t=n[1],l=new i.Client,a=l.processTonal(e).blockSequences.filter((function(n){return n.length>0})),o=l.processKana(e).blockSequences.filter((function(n){return n.length>0}));return r("div",null,"\u7f85\u99ac\u5b57 tokenizer",r("label",null,r("br",null),r("input",{type:"text",value:e,onChange:function(n){t(n.target.value)}})),a.map((function(n){return r("li",null," ",n+"(taikana)"," ")})),o.map((function(n){return r("li",null," ",n+" (kana)"," ")})))}},zzEy:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tokenizer",function(){return t("peKW")}])}},[["zzEy",0,1,2]]]);