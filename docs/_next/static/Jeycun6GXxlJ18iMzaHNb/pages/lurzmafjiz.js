(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9GDg":function(n,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lurzmafjiz",function(){return l("hgZi")}])},hgZi:function(n,e,l){"use strict";l.r(e);var t=l("q1tI"),r=l.n(t),u=l("h9Ui");var i=r.a.createElement;e.default=function(){var n=Object(t.useState)(),e=n[0],l=n[1],r=new u.TonalLemmatizationAnalyzer,a=r.graphAnalyze(e).map((function(n){return n.letter&&n.letter.literal})),o=function(n){var e=[];for(var l in n)for(var t in n[l]){var r=n[l][t];e.push([r.toString(),r.name])}return e}(r.morphAnalyze(e).map((function(n){return n.sounds}))),c=r.analyze(e),f=function(n,e){var l=n,t=e,r=[];return l.length-t.length!=0?(r.push(l.substr(0,l.length-t.length)),r):r}(c.word.literal,c.getInflectionalEnding()),s=function(n){var e=[];return n?(e.push(n),e):e}(c.getInflectionalEnding()),m=c.getLemmata().map((function(n){return n.literal})),p=(new u.TonalInflectionAnalyzer).analyze(e,new u.TonalCombiningForms,new u.TonalDesinenceInflection).otherForms.map((function(n){return n.literal}));return i("div",null,"\u62cd\u7f85\u99ac\u5b57, \u8f38\u51fa lemmas, stem, inflectional suffix, proceeding forms, sound sequences, \u7532 letters",i("label",null,i("br",null),i("input",{type:"text",value:e,onChange:function(n){l(n.target.value)}})),i("br",null),"lemmas",m.map((function(n){return i("li",null,n)})),i("br",null),"stem",f.map((function(n){return i("li",null,n)})),i("br",null),"inflectional suffix",s.map((function(n){return i("li",null,n)})),i("br",null),"proceeding forms",p.map((function(n){return i("li",null,n)})),i("br",null),"sound sequences",o.map((function(n){return i("li",null,n[0]+" - "+n[1])})),i("br",null),"letters: ",a.join(", "),i("br",null))}}},[["9GDg",0,1,4]]]);