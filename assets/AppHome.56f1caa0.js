import{_ as H,c as r,j as V,E as q,i as z,k as E}from"./elevation.6f2b205f.js";import{r as o,q as F,u as I,e as B,f as L,o as _,c as N,a,t as p,F as A,k as P,w as T,l as M,j as D,i as R,m as S}from"./vendor.8243c41e.js";const G={name:"AppHome",setup(){var i,h,g,x,C,k,w,y,b,j;const m=o((h=(i=r)==null?void 0:i.title)!=null?h:""),v=o((x=(g=r)==null?void 0:g.logo)!=null?x:""),d=o((w=(k=(C=r)==null?void 0:C.mobile)==null?void 0:k.title)!=null?w:{}),u=o((j=(b=(y=r)==null?void 0:y.pc)==null?void 0:b.menu)!=null?j:[]).value.filter(e=>e.type===2),f=F(u),s=o("zh-CN"),n=o("mobile"),l=I();return V(e=>{s.value=e}),q(e=>{n.value=e}),{components:f,lang:s,toComponent:e=>{l.push({path:`/${e.doc}`,query:{language:s.value,platform:n.value,replace:e.doc}}),!z()&&E()&&window.top.scrollToMenu(e.doc)},logo:v,title:m,description:d}}},J={class:"logo"},K={class:"varlet-home__title"},O=["src"],Q={class:"varlet-home__desc"};function U(m,v,d,t,u,f){const s=B("var-site-icon"),n=B("var-site-cell"),l=L("ripple");return _(),N(A,null,[a("div",J,[a("h1",K,[a("img",{class:"varlet-home__image",src:t.logo},null,8,O),a("span",null,p(t.title),1)]),a("h2",Q,p(t.description[t.lang]),1)]),(_(!0),N(A,null,P(t.components,c=>T((_(),M(n,{key:c.text,onClick:i=>t.toComponent(c)},{extra:D(()=>[R(s,{name:"chevron-right",size:"14"})]),default:D(()=>[S(p(c.text[t.lang]),1)]),_:2},1032,["onClick"])),[[l]])),128))],64)}var Y=H(G,[["render",U],["__scopeId","data-v-7f91be68"]]);export{Y as default};