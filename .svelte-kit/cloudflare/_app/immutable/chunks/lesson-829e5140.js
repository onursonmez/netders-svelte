import{w as s}from"./singletons-f9f2b139.js";import{ah as a}from"./index-a92439aa.js";import{r as n}from"./responseService-43341243.js";const d=s([]),u=s([]),y=s([{id:1,title:"Y\xFCz Y\xFCze"},{id:2,title:"Uzaktan (Webcam)"}]),i=s({page:1,pageSize:24,keyword:""});async function g(){const e=await(await fetch("http://api.nd.io/lesson/subjects",{headers:{"Content-Type":"application/json"},method:"GET"})).json();return n(e)}async function h(t=[]){const o=await(await fetch("http://api.nd.io/lesson/levels/"+t.subjectId,{headers:{"Content-Type":"application/json"},method:"GET"})).json();return n(o)}async function S(t={}){const e=Object.entries(t).length>0?t:a(i);return(await(await fetch("http://api.nd.io/lesson/search",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({page:e==null?void 0:e.page,pageSize:e==null?void 0:e.pageSize,keyword:e==null?void 0:e.keyword})})).json()).result}export{g as a,y as b,S as c,h as g,u as l,d as s};
