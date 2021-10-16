import{a as Q}from"./provide.84cb89b2.js";import{_ as V}from"./elevation.703f44d6.js";import{q as X,b as F,o as C,c as M,B as Z,p as $,r as y,H as ee,d as s,h as r,w as l,F as ae,V as oe,W as re,l as t,t as d,a as E}from"./vendor.ea41cd30.js";import{I as j}from"./index.72b9d3ad.js";import{S as D}from"./index.b0c16e73.js";import{O as U}from"./index.c948a14f.js";import{C as h}from"./index.d2fce9cb.js";import{C as B}from"./index.b1074012.js";import{R as w,a as A}from"./index.91316993.js";import{B as S}from"./index.b61caeba.js";import{S as I}from"./index.bce3b3b0.js";import{S as T}from"./index.3982c5f0.js";import{U as P}from"./index.50c90e95.js";import{C as N}from"./index.978fab22.js";import{R as z}from"./index.be415320.js";import{A as le}from"./AppType.405a4099.js";import{c as x}from"./index.510439cf.js";import{u as ne,a as R,_ as se,b as te,c as de,d as me,w as ue}from"./en-US.fc126591.js";import"./components.c996eb06.js";import"./shared.2d2ec151.js";import"./index.94e058ff.js";import"./elements.fbcbc1e3.js";import"./index.a20a8359.js";import"./zIndex.c624737f.js";import"./index.13a36bd3.js";import"./index.931337ba.js";import"./index.bfdc3a12.js";import"./index.039c4175.js";import"./lock.67e58c2a.js";import"./index.e974d7b7.js";import"./index.9a67075a.js";import"./provide.3855cf48.js";import"./index.1d3da9bd.js";const ce={disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}};const ie=X({name:"VarForm",props:ce,setup(n){const o=F(()=>n.disabled),f=F(()=>n.readonly),{formItems:e,bindFormItems:b}=Q(),m=async()=>(await Promise.all(e.map(({validate:p})=>p()))).every(p=>p===!0),u=()=>e.forEach(({reset:i})=>i()),_=()=>e.forEach(({resetValidation:i})=>i());return b({disabled:o,readonly:f}),{validate:m,reset:u,resetValidation:_}}}),pe={class:"var-form"};function fe(n,o,f,e,b,m){return C(),M("div",pe,[Z(n.$slots,"default")])}var v=V(ie,[["render",fe]]);v.install=function(n){n.component(v.name,v)};var be={example:"\u8868\u5355\u793A\u4F8B",username:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",usernameMessage:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",password:"\u8BF7\u8F93\u5165\u5BC6\u7801",passwordMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801",department:"\u8BF7\u9009\u62E9\u90E8\u95E8",departmentMessage:"\u5FC5\u987B\u9009\u4E00\u4E2A\u90E8\u95E8",eat:"\u5403\u996D",sleep:"\u7761\u89C9",play:"\u6253\u6E38\u620F",departmentUnit:"\u90E8",group:"\u8BF7\u9009\u62E9\u7EC4\u7EC7",groupMessage:"\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7EC4\u7EC7",groupUnit:"\u7EC4",genderMessage:"\u5FC5\u987B\u9009\u62E9\u4E00\u4E2A\u6027\u522B",male:"\u7537",female:"\u5973",rateMessage:"\u5FC5\u987B\u5927\u4E8E2",likeMessage:"\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7231\u597D",licenseMessage:"\u60A8\u5FC5\u987B\u5F00\u542F",countMessage:"\u5FC5\u987B\u5927\u4E8E10",rangeMessage:"\u5FC5\u987B\u5927\u4E8E10",filesMessage:"\u81F3\u5C11\u4E0A\u4F20\u4E00\u5F20\u56FE\u7247",controller:"\u8868\u5355\u63A7\u5236",reset:"\u6E05\u7A7A\u8868\u5355",resetValidation:"\u6E05\u7A7A\u9A8C\u8BC1",validate:"\u89E6\u53D1\u9A8C\u8BC1",disabled:"\u8868\u5355\u7981\u7528",readonly:"\u8868\u5355\u53EA\u8BFB"},ge={example:"Form Example",username:"Please input username",usernameMessage:"The username cannot be empty",password:"Please input password",passwordMessage:"The password cannot be empty",department:"Please select department",departmentMessage:"The select cannot be empty",eat:"Eat",sleep:"Sleep",play:"Play game",departmentUnit:" department",group:"Please select group",groupMessage:"The select cannot be empty",groupUnit:" group",genderMessage:"The gender cannot be empty",male:"Male",female:"Female",rateMessage:"It has to be greater than 2",likeMessage:"The select cannot be empty",licenseMessage:"You must turn on",countMessage:"It has to be greater than 10",rangeMessage:"It has to be greater than 10",filesMessage:"Upload at least one picture",controller:"Form control",reset:"Empty form",resetValidation:"Empty the validation",validate:"Trigger validation",disabled:"Form disabled",readonly:"Form readonly"};const{add:G,use:ve,pack:_e,packs:na,merge:sa}=ne(),ke=n=>{de(n),ve(n)};R("zh-CN",se);R("en-US",te);G("zh-CN",be);G("en-US",ge);const ye={name:"FormExample",components:{[v.name]:v,[j.name]:j,[D.name]:D,[h.name]:h,[B.name]:B,[w.name]:w,[A.name]:A,[U.name]:U,[I.name]:I,[T.name]:T,[S.name]:S,[P.name]:P,[N.name]:N,[z.name]:z,AppType:le},setup(){const n=$({username:"",password:"",department:"",gender:void 0,license:!1,range:0,count:0,group:[],score:0,like:[],files:[]}),o=y(null),f=y(!1),e=y(!1),b=x.touchmoveForbid;return me(m=>{m==="pc"&&(x.touchmoveForbid=!1)}),ee(()=>{x.touchmoveForbid=b}),ue(m=>{var u;ke(m),(u=o.value)==null||u.reset()}),{pack:_e,form:o,formData:n,disabled:f,readonly:e}}},Ee=n=>(oe("data-v-5e9de94e"),n=n(),re(),n),xe={class:"row mb"},Ve={class:"row mb"},Fe=Ee(()=>E("div",{class:"space"},null,-1));function Ce(n,o,f,e,b,m){const u=s("app-type"),_=s("var-input"),c=s("var-option"),i=s("var-select"),p=s("var-radio"),L=s("var-radio-group"),k=s("var-checkbox"),O=s("var-checkbox-group"),q=s("var-rate"),H=s("var-switch"),W=s("var-counter"),Y=s("var-slider"),J=s("var-uploader"),K=s("var-form"),g=s("var-button");return C(),M(ae,null,[r(u,null,{default:l(()=>[t(d(e.pack.example),1)]),_:1}),r(K,{ref:"form",disabled:e.disabled,readonly:e.readonly},{default:l(()=>[r(_,{class:"mb",placeholder:e.pack.username,rules:[a=>!!a||e.pack.usernameMessage],modelValue:e.formData.username,"onUpdate:modelValue":o[0]||(o[0]=a=>e.formData.username=a)},null,8,["placeholder","rules","modelValue"]),r(_,{class:"mb",type:"password",placeholder:e.pack.password,rules:[a=>!!a||e.pack.passwordMessage],modelValue:e.formData.password,"onUpdate:modelValue":o[1]||(o[1]=a=>e.formData.password=a)},null,8,["placeholder","rules","modelValue"]),r(i,{class:"mb",placeholder:e.pack.department,rules:[a=>!!a||e.pack.departmentMessage],modelValue:e.formData.department,"onUpdate:modelValue":o[2]||(o[2]=a=>e.formData.department=a)},{default:l(()=>[r(c,{label:`${e.pack.eat}${e.pack.departmentUnit}`},null,8,["label"]),r(c,{label:`${e.pack.sleep}${e.pack.departmentUnit}`},null,8,["label"]),r(c,{label:`${e.pack.play}${e.pack.departmentUnit}`},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),r(i,{class:"mb",multiple:"",placeholder:e.pack.group,rules:[a=>a.length>=1||e.pack.groupMessage],modelValue:e.formData.group,"onUpdate:modelValue":o[3]||(o[3]=a=>e.formData.group=a)},{default:l(()=>[r(c,{label:`${e.pack.eat}${e.pack.groupUnit}`},null,8,["label"]),r(c,{label:`${e.pack.sleep}${e.pack.groupUnit}`},null,8,["label"]),r(c,{label:`${e.pack.play}${e.pack.groupUnit}`},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),r(L,{class:"mb",rules:[a=>!!a||e.pack.genderMessage],modelValue:e.formData.gender,"onUpdate:modelValue":o[4]||(o[4]=a=>e.formData.gender=a)},{default:l(()=>[r(p,{"checked-value":1},{default:l(()=>[t(d(e.pack.male),1)]),_:1}),r(p,{"checked-value":2},{default:l(()=>[t(d(e.pack.female),1)]),_:1})]),_:1},8,["rules","modelValue"]),r(O,{class:"mb",rules:[a=>a.length>0||e.pack.likeMessage],modelValue:e.formData.like,"onUpdate:modelValue":o[5]||(o[5]=a=>e.formData.like=a)},{default:l(()=>[r(k,{"checked-value":1},{default:l(()=>[t(d(e.pack.eat),1)]),_:1}),r(k,{"checked-value":2},{default:l(()=>[t(d(e.pack.sleep),1)]),_:1}),r(k,{"checked-value":3},{default:l(()=>[t(d(e.pack.play),1)]),_:1})]),_:1},8,["rules","modelValue"]),r(q,{class:"mb",rules:[a=>a>=3||e.pack.rateMessage],modelValue:e.formData.score,"onUpdate:modelValue":o[6]||(o[6]=a=>e.formData.score=a)},null,8,["rules","modelValue"]),E("div",xe,[r(H,{rules:[a=>!!a||e.pack.licenseMessage],modelValue:e.formData.license,"onUpdate:modelValue":o[7]||(o[7]=a=>e.formData.license=a)},null,8,["rules","modelValue"])]),E("div",Ve,[r(W,{rules:[a=>a>10||e.pack.countMessage],modelValue:e.formData.count,"onUpdate:modelValue":o[8]||(o[8]=a=>e.formData.count=a)},null,8,["rules","modelValue"])]),r(Y,{class:"mb",rules:[a=>a>10||e.pack.rangeMessage],modelValue:e.formData.range,"onUpdate:modelValue":o[9]||(o[9]=a=>e.formData.range=a)},null,8,["rules","modelValue"]),r(J,{class:"mb",rules:[a=>a.length>=1||e.pack.filesMessage],modelValue:e.formData.files,"onUpdate:modelValue":o[10]||(o[10]=a=>e.formData.files=a)},null,8,["rules","modelValue"])]),_:1},8,["disabled","readonly"]),r(u,null,{default:l(()=>[t(d(e.pack.controller),1)]),_:1}),r(g,{class:"mt",block:"",type:"danger",onClick:o[11]||(o[11]=a=>e.form.reset())},{default:l(()=>[t(d(e.pack.reset),1)]),_:1}),r(g,{class:"mt",block:"",type:"warning",onClick:o[12]||(o[12]=a=>e.form.resetValidation())},{default:l(()=>[t(d(e.pack.resetValidation),1)]),_:1}),r(g,{class:"mt",block:"",type:"success",onClick:o[13]||(o[13]=a=>e.form.validate())},{default:l(()=>[t(d(e.pack.validate),1)]),_:1}),r(g,{class:"mt",block:"",type:"info",onClick:o[14]||(o[14]=a=>e.disabled=!e.disabled)},{default:l(()=>[t(d(e.pack.disabled),1)]),_:1}),r(g,{class:"mt",block:"",type:"primary",onClick:o[15]||(o[15]=a=>e.readonly=!e.readonly)},{default:l(()=>[t(d(e.pack.readonly),1)]),_:1}),Fe],64)}var ta=V(ye,[["render",Ce],["__scopeId","data-v-5e9de94e"]]);export{ta as default};