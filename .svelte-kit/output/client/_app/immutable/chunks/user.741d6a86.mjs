import"./index.ec65748e.mjs";import{r as b}from"./responseService.f5e06976.mjs";const c={page:1,pageSize:12,field:"searchPoint",order:"desc",keyword:"",budget:"",city:null,county:null,subject:null,level:null,category:null,lessonType:null,gender:null};async function w(t={}){var o,i,d,l,p,u,y;let e={...c,...t};return(await(await fetch("http://api.nd.io/user/search",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},method:"POST",body:JSON.stringify({page:e==null?void 0:e.page,pageSize:e==null?void 0:e.pageSize,field:e==null?void 0:e.field,order:e==null?void 0:e.order,keyword:e==null?void 0:e.keyword,budget:parseInt(e==null?void 0:e.budget),cityId:(o=e==null?void 0:e.city)==null?void 0:o.id,countyId:(i=e==null?void 0:e.county)==null?void 0:i.id,subjectId:(d=e==null?void 0:e.subject)==null?void 0:d.id,levelId:(l=e==null?void 0:e.level)==null?void 0:l.id,categoryId:(p=e==null?void 0:e.category)==null?void 0:p.id,lessonTypeId:(u=e==null?void 0:e.lessonType)==null?void 0:u.id,genderId:(y=e==null?void 0:e.gender)==null?void 0:y.id})})).json()).result}async function I(t){const e=new URLSearchParams(t).toString(),n=await(await fetch("http://api.nd.io/user/is_exists?"+e,{headers:{"Content-Type":"application/json"},method:"GET"})).json();return b(n)}export{I as a,w as g,c as s};
