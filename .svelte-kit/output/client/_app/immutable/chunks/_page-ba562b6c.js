import{d as o}from"./environment-b04a8a58.js";import{a as t}from"./price-53e82af7.js";import{e as s}from"./index-e9ed3a62.js";const l=o,n=!1;async function a({params:r}){if(r&&r.slug){let e=await t(r.slug);if(Object.entries(e.errors).length)throw s(e.code,e.errors);return e.result}}const p=Object.freeze(Object.defineProperty({__proto__:null,csr:l,prerender:n,load:a},Symbol.toStringTag,{value:"Module"}));export{p as _,l as c,a as l,n as p};