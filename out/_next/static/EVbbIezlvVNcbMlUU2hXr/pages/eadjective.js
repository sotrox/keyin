(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{fGnW:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/eadjective",function(){return t("j8RI")}])},j8RI:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),i=t.n(a),l=t("h9Ui"),u=i.a.createElement;e.default=function(){var n=Object(a.useState)(),e=n[0],t=n[1],i=[["sin","e"],["quz","ez"],["soew","ew"]],o=i.filter((function(n){return n.join(" ")===e})),r=new l.TonalPhrasalInflector,c=r.analyzeAdjective("","",new l.Adnominal);o[0]&&(c=r.analyzeAdjective(o[0][0],o[0][1],new l.Adnominal));var d=c.getProceedingForms();return u("div",null,u("label",null,"\u62cd\u7f85\u99ac\u5b57, \u8f38\u51fa\u7e7c\u7e8c\u5f62",u("br",null),u("input",{type:"text",list:"adjectives",onChange:function(n){t(n.target.value)}})),u("datalist",{id:"adjectives"},i.map((function(n){return u("option",{key:n[0]+n[1],value:n[0]+" "+n[1]})}))),d.map((function(n){return u("a",null,n.literal," ")})))}}},[["fGnW",0,1,19]]]);