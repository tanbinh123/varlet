import{S as p}from"./index.c80c5b3b.js";import{b as _,f as u}from"./components.d08fc2fc.js";import{T as f,a as b}from"./provide.e07c6b97.js";import{_ as d}from"./elevation.6f2b205f.js";import{d as l,r as c,b as v,e as I,o as T,l as S,j as C,G as B,h as E,p as j}from"./vendor.8243c41e.js";function w(){const{parentProvider:e,bindParent:s}=_(f),{index:t}=u(b);if(!e||!s||!t)throw Error("<var-tab-item/> must in <var-tabs-items/>");return{index:t,tabsItems:e,bindTabsItems:s}}const x={name:{type:[String,Number]}};const P=l({name:"VarTabItem",components:{VarSwipeItem:p},props:x,setup(e){const s=c(!1),t=c(!1),r=v(()=>e.name),{index:n,bindTabsItems:o}=w();return o({index:n,name:r,setCurrent:m=>{!t.value&&m&&(t.value=!0),s.value=m}}),{current:s,initSlot:t}}});function A(e,s,t,r,n,o){const i=I("var-swipe-item");return T(),S(i,{class:j(["var-tab-item",[!e.current&&"var-tab-item--inactive"]]),"var-tab-item-cover":""},{default:C(()=>[e.initSlot?B(e.$slots,"default",{key:0}):E("v-if",!0)]),_:3},8,["class"])}var a=d(P,[["render",A]]);a.install=function(e){e.component(a.name,a)};export{a as T};