import{Q as u}from"./index-90af3250.js";import{t as y,v as l}from"./userStore-6d41f702.js";async function j(t={}){var n,i,d,s,c,p;const e=Object.entries(t).length>0?t:u(y);return(await(await fetch("http://api.nd.io/user/teachers",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({page:e==null?void 0:e.page,pageSize:e==null?void 0:e.pageSize,keyword:e==null?void 0:e.keyword,budget:e==null?void 0:e.budget,cityId:(n=e==null?void 0:e.cityObject)==null?void 0:n.id,countyId:(i=e==null?void 0:e.countyObject)==null?void 0:i.id,subjectId:(d=e==null?void 0:e.subjectObject)==null?void 0:d.id,levelId:(s=e==null?void 0:e.levelObject)==null?void 0:s.id,lessonTypeId:(c=e==null?void 0:e.lessonTypeObject)==null?void 0:c.id,genderId:(p=e==null?void 0:e.genderObject)==null?void 0:p.id})})).json()).result}async function f(t=[]){return await(await fetch("http://api.nd.io/user/login",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({login:t==null?void 0:t.login,password:t==null?void 0:t.password,rememberMe:t==null?void 0:t.rememberMe})})).json()}async function h(t){return(await(await fetch("http://api.nd.io/user/photo/"+t,{headers:{"Content-Type":"application/json"},method:"GET"})).json()).result}async function w(t=[]){const o=await(await fetch("http://api.nd.io/user/gtsspbsp",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({query:t==null?void 0:t.query})})).json();return y.set(o.result),o.result}async function T(t){const o=await(await fetch("http://api.nd.io/user/one_teacher/"+t,{headers:{"Content-Type":"application/json"},method:"GET"})).json();return l.set(o.result),o}async function S(t){return await(await fetch("http://api.nd.io/user/locations/"+t,{headers:{"Content-Type":"application/json"},method:"GET"})).json()}export{S as a,T as b,w as c,j as g,f as l,h as p};
