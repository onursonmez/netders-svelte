import{e as i}from"./env-public-6aa99648.js";import{Z as b}from"./index-fd37714b.js";import{w as s}from"./index-571ab9cb.js";const p=s({page:1,pageSize:12,keyword:"",budget:"",cityObject:void 0,countyObject:void 0,subjectObject:void 0,levelObject:void 0,lessonTypeObject:void 0,genderObject:void 0}),l=s([]),y=s(0),f=s([{id:1,title:"Erkek"},{id:2,title:"Kad\u0131n"}]);async function O(){var n,o,a,r,c,d;const e=b(p),t=await(await fetch(i.PUBLIC_API_URL+"user/teachers",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({page:e.page,pageSize:e.pageSize,keyword:e.keyword,budget:e.budget,cityId:(n=e.cityObject)==null?void 0:n.id,countyId:(o=e.countyObject)==null?void 0:o.id,subjectId:(a=e.subjectObject)==null?void 0:a.id,levelId:(r=e.levelObject)==null?void 0:r.id,lessonTypeId:(c=e.lessonTypeObject)==null?void 0:c.id,genderId:(d=e.genderObject)==null?void 0:d.id})})).json();return l.set(t.result.items),y.set(t.result.total),t.result}async function m(e){return(await(await fetch(i.PUBLIC_API_URL+"user/photo/"+e,{headers:{"Content-Type":"application/json"},method:"GET"})).json()).result}export{y as a,l as b,f as c,O as g,m as p,p as t};
