import"./index-a92439aa.js";import{s as g}from"./searchModel-bf53469d.js";import{r as b}from"./responseService-43341243.js";async function c(e={}){var n,i,d,p,l,u;let t={...g,...e};return(await(await fetch("http://api.nd.io/user/search",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},method:"POST",body:JSON.stringify({page:t==null?void 0:t.page,pageSize:t==null?void 0:t.pageSize,field:t==null?void 0:t.field,order:t==null?void 0:t.order,keyword:t==null?void 0:t.keyword,budget:parseInt(t==null?void 0:t.budget),cityId:(n=t==null?void 0:t.cityObject)==null?void 0:n.id,countyId:(i=t==null?void 0:t.countyObject)==null?void 0:i.id,subjectId:(d=t==null?void 0:t.subjectObject)==null?void 0:d.id,levelId:(p=t==null?void 0:t.levelObject)==null?void 0:p.id,lessonTypeId:(l=t==null?void 0:t.lessonTypeObject)==null?void 0:l.id,genderId:(u=t==null?void 0:t.genderObject)==null?void 0:u.id})})).json()).result}async function w(e){const t=new URLSearchParams(e).toString(),o=await(await fetch("http://api.nd.io/user/is_exists?"+t,{headers:{"Content-Type":"application/json"},method:"GET"})).json();return b(o)}export{w as a,c as g};
