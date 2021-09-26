var a=Object.defineProperty,e=Object.defineProperties,o=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(e,o,t)=>o in e?a(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;import{S as i}from"./index.1d93d7b8.js";import{B as l}from"./index.8e2826b3.js";import{A as r}from"./AppType.cf12e473.js";import{u as p,a as d,_ as k,b as u,c as m}from"./en-US.41252e02.js";import{_ as b,w as f,f as h}from"./IconSfc.addeaf96.js";import{c as w}from"./index.623f4af7.js";import{p as y,G as g,a2 as C,d as _,o as v,c as j,a as x,h as S,w as U,F as O,l as D,t as T}from"./vendor.bac705d4.js";import"./index.8654e037.js";import"./index.6d61c9e3.js";import"./shared.6d6b25a1.js";import"./elements.f945da86.js";import"./zIndex.779be491.js";import"./components.fc1d8498.js";import"./lock.f9d85b9f.js";const{add:F,use:I,pack:L,packs:V,merge:P}=p(),z=a=>{m(a),I(a)};d("zh-CN",k),d("en-US",u),F("zh-CN",{functionCall:"函数调用",componentCall:"组件调用",type:"Snackbar 类型",success:"成功",info:"消息",warning:"警告",error:"错误",loading:"加载",text:"这是一个消息条！！",loaded:"加载成功！！",wait:"等待中...",close:"关闭",basicUsage:"基本使用",multiLine:"垂直排列",bottomDisplay:"底部显示",hiddenTime:"显示时长",forbidClick:"禁止穿透点击"}),F("en-US",{functionCall:"Function Call",componentCall:"Component Call",type:"Snackbar Type",success:"Success",warning:"Warning",info:"Info",error:"Error",loading:"Loading",text:"Hello, I'm a snackbar",loaded:"Loaded",wait:"waiting...",close:"Close",basicUsage:"Basic Usage",multiLine:"Multi-Line",bottomDisplay:"Bottom Display",hiddenTime:"Display Duration",forbidClick:"Forbid Click"});const A={name:"SnackbarExample",components:{[i.Component.name]:i.Component,[l.name]:l,AppType:r},setup(){const a=y({show1:!1,show2:!1,show3:!1,show4:!1,show9:!1});f(z);const l=w.touchmoveForbid;return h((a=>{"pc"===a&&(w.touchmoveForbid=!1)})),g((()=>{w.touchmoveForbid=l})),r=((a,e)=>{for(var o in e||(e={}))c.call(e,o)&&s(a,o,e[o]);if(t)for(var o of t(e))n.call(e,o)&&s(a,o,e[o]);return a})({},C(a)),e(r,o({pack:L,createSnackbar:a=>{"time"===a&&i({content:L.value.text,duration:1e3}),"position"===a&&i({content:L.value.text,position:"bottom"}),a||i(L.value.text)},changeValue:e=>{a[e]=!a[e]},create:a=>{const e="loading"===a?L.value.wait:L.value.text;i[a](e),"loading"===a&&setTimeout((()=>{i.success(L.value.loaded)}),2e3)}}));var r}},B={class:"snackbar-demo"},E={class:"snackbar-demo"},N={class:"snackbar-demo"},G={class:"snackbar-demo__type-block"},H={class:"snackbar-demo"};var M=b(A,[["render",function(a,e,o,t,c,n){const s=_("app-type"),i=_("var-button"),l=_("var-snackbar");return v(),j(O,null,[x("div",B,[S(s,null,{default:U((()=>[D(T(t.pack.componentCall),1)])),_:1}),S(i,{type:"primary",block:"",onClick:e[0]||(e[0]=a=>t.changeValue("show1"))},{default:U((()=>[D(T(t.pack.basicUsage),1)])),_:1}),S(i,{type:"primary",block:"",onClick:e[1]||(e[1]=a=>t.changeValue("show3"))},{default:U((()=>[D(T(t.pack.multiLine),1)])),_:1}),S(i,{type:"primary",block:"",onClick:e[2]||(e[2]=a=>t.changeValue("show2"))},{default:U((()=>[D(T(t.pack.bottomDisplay),1)])),_:1}),S(i,{type:"primary",block:"",onClick:e[3]||(e[3]=a=>t.changeValue("show4"))},{default:U((()=>[D(T(t.pack.hiddenTime),1)])),_:1}),S(i,{type:"primary",block:"",onClick:e[4]||(e[4]=a=>t.changeValue("show9"))},{default:U((()=>[D(T(t.pack.forbidClick),1)])),_:1})]),x("div",E,[S(s,null,{default:U((()=>[D(T(t.pack.functionCall),1)])),_:1}),S(i,{type:"warning",block:"",onClick:e[5]||(e[5]=a=>t.createSnackbar())},{default:U((()=>[D(T(t.pack.basicUsage),1)])),_:1}),S(i,{type:"warning",block:"",onClick:e[6]||(e[6]=a=>t.createSnackbar("time"))},{default:U((()=>[D(T(t.pack.hiddenTime),1)])),_:1}),S(i,{type:"warning",block:"",onClick:e[7]||(e[7]=a=>t.createSnackbar("position"))},{default:U((()=>[D(T(t.pack.bottomDisplay),1)])),_:1})]),x("div",N,[S(s,null,{default:U((()=>[D(T(t.pack.type),1)])),_:1}),x("div",G,[S(i,{type:"success",block:"",onClick:e[8]||(e[8]=a=>t.create("success"))},{default:U((()=>[D(T(t.pack.success),1)])),_:1}),S(i,{type:"warning",block:"",onClick:e[9]||(e[9]=a=>t.create("warning"))},{default:U((()=>[D(T(t.pack.warning),1)])),_:1}),S(i,{type:"info",block:"",onClick:e[10]||(e[10]=a=>t.create("info"))},{default:U((()=>[D(T(t.pack.info),1)])),_:1}),S(i,{type:"danger",block:"",onClick:e[11]||(e[11]=a=>t.create("error"))},{default:U((()=>[D(T(t.pack.error),1)])),_:1}),S(i,{type:"primary",block:"",onClick:e[12]||(e[12]=a=>t.create("loading"))},{default:U((()=>[D(T(t.pack.loading),1)])),_:1})])]),x("div",H,[S(l,{show:a.show1,"onUpdate:show":e[13]||(e[13]=e=>a.show1=e)},{default:U((()=>[D(T(t.pack.text),1)])),_:1},8,["show"]),S(l,{show:a.show2,"onUpdate:show":e[15]||(e[15]=e=>a.show2=e),position:"bottom"},{action:U((()=>[S(i,{type:"primary",onClick:e[14]||(e[14]=e=>a.show2=!1)},{default:U((()=>[D(T(t.pack.close),1)])),_:1})])),default:U((()=>[D(T(t.pack.text)+" ",1)])),_:1},8,["show"]),S(l,{show:a.show3,"onUpdate:show":e[17]||(e[17]=e=>a.show3=e),vertical:!0},{action:U((()=>[S(i,{type:"primary",onClick:e[16]||(e[16]=e=>a.show3=!1)},{default:U((()=>[D(T(t.pack.close),1)])),_:1})])),default:U((()=>[D(T(t.pack.text)+" ",1)])),_:1},8,["show"]),S(l,{show:a.show4,"onUpdate:show":e[18]||(e[18]=e=>a.show4=e),duration:1e3},{default:U((()=>[D(T(t.pack.text),1)])),_:1},8,["show"]),S(l,{show:a.show9,"onUpdate:show":e[19]||(e[19]=e=>a.show9=e),"forbid-click":!0},{default:U((()=>[D(T(t.pack.text),1)])),_:1},8,["show"])])],64)}],["__scopeId","data-v-d97b3344"]]);export{M as default};
