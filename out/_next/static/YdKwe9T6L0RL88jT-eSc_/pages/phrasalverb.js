(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{bzxN:function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),i=t.n(r),o=t("h9Ui"),u=i.a.createElement;e.default=function(){var n=Object(r.useState)(),e=n[0],t=n[1],i=[["koannw","diurh"],["longw","diurh"]],a=i.filter((function(n){return n.join(" ")===e})),l=new o.TonalPhrasalInflector,c=l.inflectToProceeding("","");a[0]&&(c=l.inflectToProceeding(a[0][0],a[0][1]));var s=c.getForms();return u("div",null,u("label",null,"\u62cd\u7f85\u99ac\u5b57, \u8f38\u51fa\u7e7c\u7e8c\u5f62",u("br",null),u("input",{type:"text",list:"verbs",onChange:function(n){t(n.target.value)}})),u("datalist",{id:"verbs"},i.map((function(n){return u("option",{key:n[0]+n[1],value:n[0]+" "+n[1]})}))),s.map((function(n){return u("a",null,n.literal," ")})))}},n6U1:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/phrasalverb",function(){return t("bzxN")}])}},[["n6U1",0,1,2]]]);