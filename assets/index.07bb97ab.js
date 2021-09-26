import{I as e}from"./index.6d61c9e3.js";import{h as a,c as o}from"./elements.f945da86.js";import{t as s}from"./shared.6d6b25a1.js";import{_ as l}from"./IconSfc.addeaf96.js";import{q as t,r,b as n,y as u,x as c,d as i,o as d,c as v,a as m,h as f,m as h,n as p,O as y,L as b,k as g,w as S,j as _,l as w,t as x,F as C}from"./vendor.bac705d4.js";import{C as R}from"./index.89af044b.js";const T={modelValue:{type:Boolean},disabled:{type:Boolean,default:!1},animationDuration:{type:[Number,String],default:300},successDuration:{type:[Number,String],default:2e3},bgColor:{type:String},successBgColor:{type:String},color:{type:String},successColor:{type:String},onRefresh:{type:Function},"onUpdate:modelValue":{type:Function}};let D=window;var E=l(t({name:"VarPullRefresh",components:{[e.name]:e},props:T,setup(e){const l=r(null),t=r(0),i=r(-50),d=r("arrow-down"),v=r("default"),m=r(!1),f=n((()=>"loading"!==v.value&&"success"!==v.value&&!e.disabled)),h=n((()=>({"var-pull-refresh__icon":!0,"var-pull-refresh__animation":"loading"===v.value}))),p=n((()=>({transform:`translate3d(0px, ${i.value}px, 0px) translate(-50%, 0)`,transition:m.value?`transform ${e.animationDuration}ms`:null,background:e.successBgColor||e.bgColor,color:e.successColor||e.color}))),y=n((()=>"success"===v.value));return u((()=>e.modelValue),(a=>{!1===a&&(m.value=!0,v.value="success",d.value="checkbox-marked-circle",setTimeout((()=>{i.value=-50,setTimeout((()=>{v.value="default",d.value="arrow-down",m.value=!1}),s(e.animationDuration))}),s(e.successDuration)))})),c((()=>{D=a(l.value)})),{freshNode:l,touchStart:e=>{f.value&&(v.value="pulling",t.value=e.touches[0].clientY)},touchMove:e=>{const a=o(D);if(a>0||!f.value)return;0===a&&i.value>-50&&e.cancelable&&e.preventDefault();const s=(e.touches[0].clientY-t.value)/2-50;i.value=s>=100?100:s,d.value=i.value>=20?"refresh":"arrow-down"},touchEnd:()=>{var a,o;f.value&&(m.value=!0,i.value>=20?(v.value="loading",i.value=30,null==(a=e["onUpdate:modelValue"])||a.call(e,!0),null==(o=e.onRefresh)||o.call(e)):(v.value="loosing",d.value="arrow-down",i.value=-50,setTimeout((()=>{m.value=!1}),s(e.animationDuration))))},iconName:d,iconClass:h,controlStyle:p,isSuccess:y}}}),[["render",function(e,a,o,s,l,t){const r=i("var-icon");return d(),v("div",{ref:"freshNode",class:"var-pull-refresh",onTouchstart:a[0]||(a[0]=(...a)=>e.touchStart&&e.touchStart(...a)),onTouchmove:a[1]||(a[1]=(...a)=>e.touchMove&&e.touchMove(...a)),onTouchend:a[2]||(a[2]=(...a)=>e.touchEnd&&e.touchEnd(...a)),onTouchcancel:a[3]||(a[3]=(...a)=>e.touchEnd&&e.touchEnd(...a))},[m("div",{class:h(["var-pull-refresh__control var-elevation--2",[e.isSuccess?"var-pull-refresh__control-success":null]]),style:p(e.controlStyle)},[f(r,{name:e.iconName,transition:200,class:h(e.iconClass),"var-pull-refresh-cover":""},null,8,["name","class"])],6),y(e.$slots,"default")],544)}]]);E.install=function(e){e.component(E.name,E)};const V=Array(10).fill("List Item"),j=Array(10).fill("This is new List Item");var I=l({name:"PullRefreshExample",components:{[E.name]:E,[R.name]:R},setup(){const e=r(!1),a=r(V),o=e=>{e.preventDefault()};return c((()=>{document.body.addEventListener("touchmove",o,{passive:!1})})),b((()=>{document.body.removeEventListener("touchmove",o)})),{refresh:()=>{setTimeout((()=>{a.value="List Item"===a.value[0]?j:V,e.value=!1}),2e3)},isRefresh:e,data:a}}},[["render",function(e,a,o,s,l,t){const r=i("var-cell"),n=i("var-pull-refresh");return d(),g(n,{onRefresh:s.refresh,modelValue:s.isRefresh,"onUpdate:modelValue":a[0]||(a[0]=e=>s.isRefresh=e),"success-duration":"2000"},{default:S((()=>[(d(!0),v(C,null,_(s.data,((e,a)=>(d(),g(r,{key:a,border:""},{default:S((()=>[w(x(e+" "+(a+1)),1)])),_:2},1024)))),128))])),_:1},8,["onRefresh","modelValue"])}],["__scopeId","data-v-2ac96559"]]);export{I as default};
