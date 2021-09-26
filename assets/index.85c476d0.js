import{F as e,u as a}from"./provide.ce8c5054.js";import{R as l}from"./index.623f4af7.js";import{I as r}from"./index.6d61c9e3.js";import{P as o}from"./index.679add02.js";import{I as t}from"./index.8ce4b8b3.js";import{q as n,r as s,b as i,y as d,p as u,z as p,d as v,e as c,o as m,c as f,a as y,F as g,j as h,i as b,m as w,t as _,V as x,h as V,f as R,n as P,O as F,w as j}from"./vendor.bac705d4.js";import{m as C,n as k,f as S,e as B,t as T}from"./shared.6d6b25a1.js";import{b as U}from"./components.fc1d8498.js";import{_ as A}from"./IconSfc.addeaf96.js";const M={modelValue:{type:Array,default:()=>[]},accept:{type:String,default:"image/*"},capture:{type:String},multiple:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},removable:{type:Boolean,default:!0},maxlength:{type:[Number,String]},maxsize:{type:[Number,String]},previewed:{type:Boolean,default:!0},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange","onRemove"]},rules:{type:Array},onBeforeRead:{type:Function},onAfterRead:{type:Function},onOversize:{type:Function},onRemove:{type:Function},"onUpdate:modelValue":{type:Function}};const z=n({name:"VarUploader",directives:{Ripple:l},components:{[r.name]:r,[o.name]:o,[e.name]:e},props:M,setup(e){const l=s(!1),r=s(null),o=i((()=>{const{maxlength:a,modelValue:{length:l}}=e;return S(a)?`${l} / ${a}`:""})),{form:n,bindForm:v}=a(),{errorMessage:c,validateWithTrigger:m,validate:f,resetValidation:y}=U(),g=e=>({url:"",cover:"",name:e.name,file:e}),h=e=>new Promise((a=>{const l=new FileReader;l.onload=()=>{const r=l.result;e.file.type.startsWith("image")&&(e.cover=r),e.url=r,a(e)},l.readAsDataURL(e.file)})),b=()=>e.modelValue.filter((e=>"success"===e.state)),w=()=>e.modelValue.filter((e=>"error"===e.state)),_=()=>e.modelValue.filter((e=>"loading"===e.state)),x={getSuccess:b,getError:w,getLoading:_},V=a=>{p((()=>{const{validateTrigger:l,rules:r,modelValue:o}=e;m(l,a,r,o,x)}))};let R=!1;const P=()=>f(e.rules,e.modelValue,x),F=()=>{var a;R=!0,null==(a=e["onUpdate:modelValue"])||a.call(e,[]),y()};return null==v||v({validate:P,resetValidation:y,reset:F}),d((()=>e.modelValue),(()=>{!R&&V("onChange"),R=!1}),{deep:!0}),{showPreview:l,currentPreview:r,errorMessage:c,maxlengthText:o,isHTMLSupportVideo:C,isHTMLSupportImage:k,formDisabled:null==n?void 0:n.disabled,formReadonly:null==n?void 0:n.readonly,preview:a=>{const{disabled:o,readonly:s,previewed:i}=e;if((null==n?void 0:n.disabled.value)||(null==n?void 0:n.readonly.value)||o||s||!i)return;const{url:d}=a;B(d)&&k(d)?t(d):B(d)&&C(d)&&(r.value=a,l.value=!0)},handleChange:async a=>{var l;const{maxsize:r,maxlength:o,modelValue:t,onOversize:s,onAfterRead:i,readonly:d,disabled:p}=e;if((null==n?void 0:n.disabled.value)||(null==n?void 0:n.readonly.value)||p||d)return;let v=(e=>{const a=e.target,{files:l}=a;return Array.from(l)})(a).map(g);v=null!=r?v.filter((e=>!(e.file.size>T(r)&&(null==s||s(u(e)),1)))):v,v=null!=o?(e=>{const a=Math.min(e.length,T(o)-t.length);return e.slice(0,a)})(v):v;const c=await Promise.all((e=>e.map(h))(v)),m=(await Promise.all((a=>{const{onBeforeRead:l}=e;return a.map((e=>new Promise((a=>{const r=!l||l(u(e));Promise.resolve(r).then((l=>a({valid:l,varFile:e})))}))))})(c))).filter((({valid:e})=>e)).map((({varFile:e})=>e));null==(l=e["onUpdate:modelValue"])||l.call(e,[...t,...m]),a.target.value="",m.forEach((e=>null==i?void 0:i(u(e))))},handleRemove:a=>{var l;const{disabled:r,readonly:o,modelValue:t,onRemove:s}=e;(null==n?void 0:n.disabled.value)||(null==n?void 0:n.readonly.value)||r||o||(null==(l=e["onUpdate:modelValue"])||l.call(e,t.filter((e=>e!==a))),null==s||s(a),V("onRemove"))},getSuccess:b,getError:w,getLoading:_,validate:P,resetValidation:y,reset:F}}}),D={class:"var-uploader var--box"},L={class:"var-uploader__file-list"},$=["onClick"],I={class:"var-uploader__file-name"},E=["onClick"],H=["src","alt"],O=["multiple","accept","capture","disabled"],N=["src"];var W=A(z,[["render",function(e,a,l,r,o,t){const n=v("var-icon"),s=v("var-form-details"),i=v("var-popup"),d=c("ripple");return m(),f("div",D,[y("div",L,[(m(!0),f(g,null,h(e.modelValue,(a=>b((m(),f("div",{class:w(["var-uploader__file var-elevation--2",["loading"===a.state?"var-uploader--loading":null]]),key:a,onClick:l=>e.preview(a)},[y("div",I,_(a.name||a.url),1),e.removable?(m(),f("div",{key:0,class:"var-uploader__file-close",onClick:x((l=>e.handleRemove(a)),["stop"])},[V(n,{class:"var-uploader__file-close-icon","var-uploader-cover":"",name:"delete"})],8,E)):R("v-if",!0),a.cover?(m(),f("img",{key:1,class:"var-uploader__file-cover",style:P({objectFit:a.fit}),src:a.cover,alt:a.name},null,12,H)):R("v-if",!0),y("div",{class:w(["var-uploader__file-indicator",["success"===a.state?"var-uploader--success":null,"error"===a.state?"var-uploader--error":null]])},null,2)],10,$)),[[d,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple}]]))),128)),!e.maxlength||e.modelValue.length<e.maxlength?b((m(),f("div",{key:0,class:w(["var--relative",[e.$slots.default?null:"var-uploader__action var-elevation--2",e.disabled||e.formDisabled?"var-uploader--disabled":null]])},[y("input",{class:"var-uploader__action-input",type:"file",multiple:e.multiple,accept:e.accept,capture:e.capture,disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly,onChange:a[0]||(a[0]=(...a)=>e.handleChange&&e.handleChange(...a))},null,40,O),F(e.$slots,"default",{},(()=>[V(n,{class:"var-uploader__action-icon","var-uploader-cover":"",name:"plus"})]))],2)),[[d,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple||e.$slots.default}]]):R("v-if",!0)]),V(s,{"error-message":e.errorMessage,"maxlength-text":e.maxlengthText},null,8,["error-message","maxlength-text"]),V(i,{class:"var-uploader__preview","var-uploader-cover":"",position:"center",show:e.showPreview,"onUpdate:show":a[1]||(a[1]=a=>e.showPreview=a),onClosed:a[2]||(a[2]=a=>e.currentPreview=null)},{default:j((()=>{var a,l;return[e.currentPreview&&e.isHTMLSupportVideo(null==(a=e.currentPreview)?void 0:a.url)?(m(),f("video",{key:0,class:"var-uploader__preview-video",playsinline:"true","webkit-playsinline":"true","x5-playsinline":"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"false",controls:"",src:null==(l=e.currentPreview)?void 0:l.url},null,8,N)):R("v-if",!0)]})),_:1},8,["show"])])}]]);W.install=function(e){e.component(W.name,W)};export{W as U};
