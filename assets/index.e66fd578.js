var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{U as d}from"./index.85c476d0.js";import{B as i}from"./index.8e2826b3.js";import{A as p}from"./AppType.cf12e473.js";import{_ as n,w as u}from"./IconSfc.addeaf96.js";import{u as f,a as m,_ as c,b as v,c as g}from"./en-US.41252e02.js";import{p as j,a2 as b,d as h,o as V,c as y,h as U,w as x,F as _,S as k,U as R,l as z,t as w,a as O}from"./vendor.bac705d4.js";import"./provide.ce8c5054.js";import"./components.fc1d8498.js";import"./shared.6d6b25a1.js";import"./index.623f4af7.js";import"./index.6d61c9e3.js";import"./elements.f945da86.js";import"./index.679add02.js";import"./lock.f9d85b9f.js";import"./zIndex.779be491.js";import"./index.8ce4b8b3.js";import"./index.889d261a.js";import"./provide.609f1ae4.js";import"./index.be018264.js";import"./index.8654e037.js";const{add:A,use:S,pack:P,packs:B,merge:F}=f(),I=e=>{g(e),S(e)};m("zh-CN",c),m("en-US",v),A("zh-CN",{basicUsage:"基本使用",preview:"文件预览",state:"上传状态",maxlength:"文件数量限制",maxsize:"文件大小限制",beforeRead:"上传预处理",disabled:"禁用",readonly:"只读",validate:"字段校验",validateMessage:"存在上传失败的文件",style:"自定义上传样式",upload:"上传"}),A("en-US",{basicUsage:"Basic Usage",preview:"File Preview",state:"Upload State",maxlength:"File Maxlength",maxsize:"File Size Limit",beforeRead:"Upload Preprocessing",disabled:"Disabled",readonly:"Readonly",validate:"Validate",validateMessage:"There is a file that failed to upload",style:"Customize upload styles",upload:"Upload"});const M={name:"UploaderExample",components:{[d.name]:d,[i.name]:i,AppType:p},setup(){const e=j({files:[],files2:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg"},{url:"https://www.runoob.com/try/demo_source/mov_bbb.mp4",cover:"https://varlet.gitee.io/varlet-ui/cover.jpg"}],files3:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"loading"},{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"success"},{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"error"}],files4:[],files5:[],files6:[],files7:[],files8:[],files9:[],files10:[{url:"https://varlet.gitee.io/varlet-ui/cat.jpg",cover:"https://varlet.gitee.io/varlet-ui/cat.jpg",state:"error"}]});return u(I),d=((e,a)=>{for(var l in a||(a={}))o.call(a,l)&&r(e,l,a[l]);if(t)for(var l of t(a))s.call(a,l)&&r(e,l,a[l]);return e})({pack:P},b(e)),a(d,l({handleAfterRead:e=>console.log(e),handleAfterRead2:e=>{e.state="loading",setTimeout((()=>{e.state="success"}),1e3)},handleOversize:e=>console.log(e),handleBeforeRead:e=>e.file.size<=10240}));var d}},T=(e=>(k("data-v-0edf3d51"),e=e(),R(),e))((()=>O("div",{class:"space"},null,-1)));var C=n(M,[["render",function(e,a,l,t,o,s){const r=h("app-type"),d=h("var-uploader"),i=h("var-button");return V(),y(_,null,[U(r,null,{default:x((()=>[z(w(t.pack.basicUsage),1)])),_:1}),U(d,{modelValue:e.files,"onUpdate:modelValue":a[0]||(a[0]=a=>e.files=a),onAfterRead:t.handleAfterRead},null,8,["modelValue","onAfterRead"]),U(r,null,{default:x((()=>[z(w(t.pack.preview),1)])),_:1}),U(d,{modelValue:e.files2,"onUpdate:modelValue":a[1]||(a[1]=a=>e.files2=a)},null,8,["modelValue"]),U(r,null,{default:x((()=>[z(w(t.pack.state),1)])),_:1}),U(d,{modelValue:e.files3,"onUpdate:modelValue":a[2]||(a[2]=a=>e.files3=a),onAfterRead:t.handleAfterRead2},null,8,["modelValue","onAfterRead"]),U(r,null,{default:x((()=>[z(w(t.pack.maxlength),1)])),_:1}),U(d,{modelValue:e.files4,"onUpdate:modelValue":a[3]||(a[3]=a=>e.files4=a),maxlength:1},null,8,["modelValue"]),U(r,null,{default:x((()=>[z(w(t.pack.maxsize),1)])),_:1}),U(d,{modelValue:e.files5,"onUpdate:modelValue":a[4]||(a[4]=a=>e.files5=a),maxsize:1024,onOversize:t.handleOversize},null,8,["modelValue","onOversize"]),U(r,null,{default:x((()=>[z(w(t.pack.beforeRead),1)])),_:1}),U(d,{modelValue:e.files7,"onUpdate:modelValue":a[5]||(a[5]=a=>e.files7=a),onBeforeRead:t.handleBeforeRead},null,8,["modelValue","onBeforeRead"]),U(r,null,{default:x((()=>[z(w(t.pack.disabled),1)])),_:1}),U(d,{disabled:"",modelValue:e.files8,"onUpdate:modelValue":a[6]||(a[6]=a=>e.files8=a)},null,8,["modelValue"]),U(r,null,{default:x((()=>[z(w(t.pack.readonly),1)])),_:1}),U(d,{readonly:"",modelValue:e.files9,"onUpdate:modelValue":a[7]||(a[7]=a=>e.files9=a)},null,8,["modelValue"]),U(r,null,{default:x((()=>[z(w(t.pack.validate),1)])),_:1}),U(d,{rules:[(e,a)=>0===a.getError(e).length||t.pack.validateMessage],modelValue:e.files10,"onUpdate:modelValue":a[8]||(a[8]=a=>e.files10=a)},null,8,["rules","modelValue"]),U(r,null,{default:x((()=>[z(w(t.pack.style),1)])),_:1}),U(d,{modelValue:e.files6,"onUpdate:modelValue":a[9]||(a[9]=a=>e.files6=a)},{default:x((()=>[U(i,{type:"primary"},{default:x((()=>[z(w(t.pack.upload),1)])),_:1})])),_:1},8,["modelValue"]),T],64)}],["__scopeId","data-v-0edf3d51"]]);export{C as default};
