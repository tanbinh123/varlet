import{I as b}from"./index.ef3db56c.js";import{h as P,c as M}from"./elements.0f1b5e0a.js";import{t as y}from"./shared.5973ad73.js";import{_ as C}from"./IconSfc.8e5067c1.js";import{q as O,r as u,b as _,y as x,x as T,d as g,o as p,c as w,a as A,h as F,m as N,n as U,O as z,L as Y,k as R,w as D,j as q,l as X,t as G,F as H}from"./vendor.cfbfc887.js";import{C as E}from"./index.8eaa0051.js";const J={modelValue:{type:Boolean},disabled:{type:Boolean,default:!1},animationDuration:{type:[Number,String],default:300},successDuration:{type:[Number,String],default:2e3},bgColor:{type:String},successBgColor:{type:String},color:{type:String},successColor:{type:String},onRefresh:{type:Function},"onUpdate:modelValue":{type:Function}};const f=100,v=-50;let V=window;const K=O({name:"VarPullRefresh",components:{[b.name]:b},props:J,setup(e){const o=u(null),c=u(0),a=u(v),l=u("arrow-down"),n=u("default"),r=u(!1),t=_(()=>n.value!=="loading"&&n.value!=="success"&&!e.disabled),i=_(()=>({"var-pull-refresh__icon":!0,"var-pull-refresh__animation":n.value==="loading"})),h=_(()=>({transform:`translate3d(0px, ${a.value}px, 0px) translate(-50%, 0)`,transition:r.value?`transform ${e.animationDuration}ms`:null,background:e.successBgColor||e.bgColor,color:e.successColor||e.color})),B=_(()=>n.value==="success"),$=s=>{!t.value||(n.value="pulling",c.value=s.touches[0].clientY)},k=s=>{const d=M(V);if(d>0||!t.value)return;d===0&&a.value>v&&s.cancelable&&s.preventDefault();const S=(s.touches[0].clientY-c.value)/2+v;a.value=S>=f?f:S,l.value=a.value>=f*.2?"refresh":"arrow-down"},L=()=>{var s,d;!t.value||(r.value=!0,a.value>=f*.2?(n.value="loading",a.value=f*.3,(s=e["onUpdate:modelValue"])==null||s.call(e,!0),(d=e.onRefresh)==null||d.call(e)):(n.value="loosing",l.value="arrow-down",a.value=v,setTimeout(()=>{r.value=!1},y(e.animationDuration))))},j=()=>{setTimeout(()=>{n.value="default",l.value="arrow-down",r.value=!1},y(e.animationDuration))};return x(()=>e.modelValue,s=>{s===!1&&(r.value=!0,n.value="success",l.value="checkbox-marked-circle",setTimeout(()=>{a.value=v,j()},y(e.successDuration)))}),T(()=>{V=P(o.value)}),{freshNode:o,touchStart:$,touchMove:k,touchEnd:L,iconName:l,iconClass:i,controlStyle:h,isSuccess:B}}});function Q(e,o,c,a,l,n){const r=g("var-icon");return p(),w("div",{ref:"freshNode",class:"var-pull-refresh",onTouchstart:o[0]||(o[0]=(...t)=>e.touchStart&&e.touchStart(...t)),onTouchmove:o[1]||(o[1]=(...t)=>e.touchMove&&e.touchMove(...t)),onTouchend:o[2]||(o[2]=(...t)=>e.touchEnd&&e.touchEnd(...t)),onTouchcancel:o[3]||(o[3]=(...t)=>e.touchEnd&&e.touchEnd(...t))},[A("div",{class:N(["var-pull-refresh__control var-elevation--2",[e.isSuccess?"var-pull-refresh__control-success":null]]),style:U(e.controlStyle)},[F(r,{name:e.iconName,transition:200,class:N(e.iconClass),"var-pull-refresh-cover":""},null,8,["name","class"])],6),z(e.$slots,"default")],544)}var m=C(K,[["render",Q]]);m.install=function(e){e.component(m.name,m)};const I=Array(10).fill("List Item"),W=Array(10).fill("This is new List Item"),Z={name:"PullRefreshExample",components:{[m.name]:m,[E.name]:E},setup(){const e=u(!1),o=u(I),c=()=>{setTimeout(()=>{o.value=o.value[0]==="List Item"?W:I,e.value=!1},2e3)},a=l=>{l.preventDefault()};return T(()=>{document.body.addEventListener("touchmove",a,{passive:!1})}),Y(()=>{document.body.removeEventListener("touchmove",a)}),{refresh:c,isRefresh:e,data:o}}};function ee(e,o,c,a,l,n){const r=g("var-cell"),t=g("var-pull-refresh");return p(),R(t,{onRefresh:a.refresh,modelValue:a.isRefresh,"onUpdate:modelValue":o[0]||(o[0]=i=>a.isRefresh=i),"success-duration":"2000"},{default:D(()=>[(p(!0),w(H,null,q(a.data,(i,h)=>(p(),R(r,{key:h,border:""},{default:D(()=>[X(G(i+" "+(h+1)),1)]),_:2},1024))),128))]),_:1},8,["onRefresh","modelValue"])}var re=C(Z,[["render",ee],["__scopeId","data-v-ac011012"]]);export{re as default};