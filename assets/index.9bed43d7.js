import{S as u}from"./index.996c6efc.js";import{B as m}from"./index.c4813cf9.js";import{A as f}from"./AppType.84afabc3.js";import{w as y}from"./utils.43b02c52.js";import{u as k,a as d,_ as v,b as S,c as b}from"./en-US.fd4fd1d9.js";import{_ as x}from"./elevation.6f2b205f.js";import{e as n,o as h,c as j,i as a,j as s,a as _,Y as U,Z as C,m as c,t as o}from"./vendor.8243c41e.js";import"./index.b947dc5d.js";import"./index.15644cea.js";import"./index.b4c2ba7d.js";import"./components.d08fc2fc.js";var g={basicUsage:"\u57FA\u672C\u4F7F\u7528",localSticky:"\u5C40\u90E8\u5438\u9876"},N={basicUsage:"Basic Usage",localSticky:"Local Sticky"};const{add:l,use:B,pack:V,packs:W,merge:X}=k(),w=e=>{b(e),B(e)};d("zh-CN",v);d("en-US",S);l("zh-CN",g);l("en-US",N);const z={name:"StickyExample",components:{VarSticky:u,VarButton:m,AppType:f},setup(){return y(w),{pack:V}}},A=e=>(U("data-v-15a225b6"),e=e(),C(),e),I={class:"example"},E={class:"scroller"},F=A(()=>_("div",{class:"block"},null,-1));function L(e,T,$,t,D,Y){const p=n("app-type"),r=n("var-button"),i=n("var-sticky");return h(),j("div",I,[a(p,null,{default:s(()=>[c(o(t.pack.basicUsage),1)]),_:1}),a(i,{"offset-top":54},{default:s(()=>[a(r,{type:"primary"},{default:s(()=>[c(o(t.pack.basicUsage),1)]),_:1})]),_:1}),a(p,null,{default:s(()=>[c(o(t.pack.localSticky),1)]),_:1}),_("div",E,[a(i,null,{default:s(()=>[a(r,{type:"success"},{default:s(()=>[c(o(t.pack.localSticky),1)]),_:1})]),_:1}),F])])}var ee=x(z,[["render",L],["__scopeId","data-v-15a225b6"]]);export{ee as default};