import{r}from"./index-b593c33b.js";import{u as o}from"./userStore-7d0e6609.js";const s=!1,a=async({parent:t})=>{const{user:e}=await t();if(Object.entries(e).length>0)o.set(e);else throw r(307,"/auth/login")},c=Object.freeze(Object.defineProperty({__proto__:null,prerender:s,load:a},Symbol.toStringTag,{value:"Module"}));export{c as _,a as l,s as p};