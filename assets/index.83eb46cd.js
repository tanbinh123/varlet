import{S as e}from"./index.889d261a.js";import{u as a}from"./provide.bd3151a0.js";import{_ as n}from"./IconSfc.addeaf96.js";import{q as t,r as o,y as s,d as l,o as i,k as r,w as u,O as d}from"./vendor.bac705d4.js";const p={active:{type:[String,Number],default:0},canSwipe:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},"onUpdate:active":{type:Function}};var c=n(t({name:"VarTabsItems",components:{[e.name]:e},props:p,setup(e){const n=o(null),{tabItemList:t,bindTabItem:l,length:i}=a(),r=e=>(e=>t.find((({name:a})=>e===a.value)))(e)||(e=>t.find((({index:a})=>e===a.value)))(e),u=e=>{var a;const o=r(e);o&&(t.forEach((({setCurrent:e})=>e(!1))),o.setCurrent(!0),null==(a=n.value)||a.to(o.index.value))};return l({}),s((()=>e.active),u),s((()=>i.value),(()=>u(e.active))),{swipe:n,handleSwipeChange:a=>{var n,o;const s=t.find((({index:e})=>e.value===a)),l=null!=(n=s.name.value)?n:s.index.value;null==(o=e["onUpdate:active"])||o.call(e,l)}}}}),[["render",function(e,a,n,t,o,s){const p=l("var-swipe");return i(),r(p,{class:"var-tabs-items",ref:"swipe",loop:e.loop,touchable:e.canSwipe,indicator:!1,onChange:e.handleSwipeChange},{default:u((()=>[d(e.$slots,"default")])),_:3},8,["loop","touchable","onChange"])}]]);c.install=function(e){e.component(c.name,c)};export{c as T};