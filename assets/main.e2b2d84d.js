import{_ as e,c as t,r as _,g as n,M as o,s as a,i as p,a as s,m,P as i,C as r,R as c,I as h}from"./IconSfc.addeaf96.js";import{o as l,c as E,a as d,r as u,g as C,u as N,b as T,d as z,e as I,f as A,t as O,h as L,w as b,i as P,v as S,n as j,F as D,j as R,k as V,l as g,m as U,T as f,p as v,q as y,s as k,x as w,y as M,z as $,A as x,B as q,C as G}from"./vendor.bac705d4.js";const B={class:"varlet-site-mobile var-elevation--3"},F={class:"varlet-site-mobile-content"},H=["src"];const W={class:"varlet-site-header"},J={class:"varlet-site-header__lead"},K=["src"],Q={key:1,class:"varlet-site-header__title"},X={class:"varlet-site-header__tail"},Y=["href"];const Z={class:"varlet-site-sidebar var-elevation--3"},ee={key:0,class:"varlet-site-sidebar__item--title"},te={key:1,class:"varlet-site-sidebar__item--link"};const _e=y({components:{AppMobile:e({name:"AppMobile",props:{componentName:{type:String},language:{type:String},replace:{type:String}}},[["render",function(e,t,_,n,o,a){return l(),E("div",B,[d("div",F,[d("iframe",{src:`./mobile.html#/${_.componentName}?language=${_.language}&platform=pc&replace=${_.replace}`},null,8,H)])])}],["__scopeId","data-v-64a53243"]]),AppHeader:e({name:"AppHeader",props:{language:{type:String}},setup(){const e=u(C(t,"title")),o=u(C(t,"logo")),a=u(C(t,"pc.header.i18n")),p=u(C(t,"pc.header.github")),s=u(!1),m=N(),i=T((()=>_(a.value)));return{logo:o,title:e,languages:a,nonEmptyLanguages:i,github:p,isOpenMenu:s,handleLanguageChange:e=>{const{menuName:t}=n();m.replace(`/${e}/${t}`),s.value=!1}}}},[["render",function(e,t,_,n,o,a){const p=z("var-icon"),s=z("var-cell"),m=I("ripple");return l(),E("div",W,[d("div",J,[n.logo?(l(),E("img",{key:0,class:"varlet-site-header__logo",src:n.logo,alt:"logo"},null,8,K)):A("v-if",!0),n.title?(l(),E("div",Q,O(n.title),1)):A("v-if",!0)]),d("div",X,[n.languages?(l(),E("div",{key:0,class:"varlet-site-header__language",onMouseenter:t[0]||(t[0]=e=>n.isOpenMenu=!0),onMouseleave:t[1]||(t[1]=e=>n.isOpenMenu=!1)},[L(p,{name:"translate",size:"26px",color:"#666"}),L(p,{name:"chevron-down",color:"#666"}),L(f,{name:"fade"},{default:b((()=>[P(d("div",{class:"varlet-site-header__language-list var-elevation--5",style:j({pointerEvents:n.isOpenMenu?"auto":"none"})},[(l(!0),E(D,null,R(n.nonEmptyLanguages,((e,t)=>P((l(),V(s,{key:t,class:U({"varlet-site-header__language-list--active":_.language===t}),onClick:e=>n.handleLanguageChange(t)},{default:b((()=>[g(O(e),1)])),_:2},1032,["class","onClick"])),[[m]]))),128))],4),[[S,n.isOpenMenu]])])),_:1})],32)):A("v-if",!0),n.github?(l(),E("a",{key:1,class:"varlet-site-header__link",target:"_blank",href:n.github},[L(p,{name:"github",color:"#666",size:28})],8,Y)):A("v-if",!0)])])}],["__scopeId","data-v-15d54e16"]]),AppSidebar:e({name:"AppSidebar",props:{menu:{type:Array},menuName:{type:String},language:{type:String}},emits:["change"],setup:(e,{emit:_})=>({menuTypes:v(o),themes:u(C(t,"themes")),changeRoute:t=>{t.type!==o.TITLE&&e.menuName!==t.doc&&_("change",t)}})},[["render",function(e,t,_,n,o,a){const p=z("var-cell"),s=I("ripple");return l(),E("div",Z,[(l(!0),E(D,null,R(_.menu,((e,t)=>P((l(),V(p,{class:U(["varlet-site-sidebar__item",{"varlet-site-sidebar__item--active":e.doc===_.menuName,"varlet-site-sidebar__link":e.type!==n.menuTypes.TITLE,"varlet-site-sidebar__title":e.type===n.menuTypes.TITLE}]),key:t,onClick:t=>n.changeRoute(e)},{default:b((()=>[e.type===n.menuTypes.TITLE?(l(),E("span",ee,O(e.text[_.language]),1)):(l(),E("span",te,O(e.text[_.language]),1))])),_:2},1032,["class","onClick"])),[[s,{touchmoveForbid:!1,disabled:e.type===n.menuTypes.TITLE,color:n.themes["color-side-bar"]}]]))),128))])}],["__scopeId","data-v-251bcda4"]])},setup(){const e=C(t,"defaultLanguage"),_=u(C(t,"pc.menu",[])),s=u(C(t,"useMobile")),m=C(t,"mobile.redirect"),i=u(""),r=u(null),c=u(""),h=u(null),l=k(),E=e=>{const t=_.value.find((t=>t.doc===e));return(null==t?void 0:t.type)===o.COMPONENT?e:m.slice(1)};return w((()=>(()=>{const{language:t,menuName:o}=n();p()&&s.value?window.location.href=`./mobile.html#/${o}?language=${t||e}&platform=mobile`:$((()=>{const e=document.querySelector(".varlet-site-sidebar").getElementsByClassName("var-cell"),t=_.value.findIndex((e=>e.doc===o));-1!==t&&e[t].scrollIntoView({block:"center",inline:"start"})}))})())),M((()=>l.path),(()=>{const{language:e,menuName:_}=n();e&&_&&(r.value=E(_),c.value=_,i.value=e,document.title=C(t,"pc.title")[e])}),{immediate:!0}),a(t),{menu:_,language:i,componentName:r,menuName:c,doc:h,useMobile:s,handleSidebarChange:e=>{h.value.scrollTop=0,r.value=E(e.doc),c.value=e.doc}}}}),ne={class:"varlet-site"},oe={class:"varlet-site-content"};var ae=e(_e,[["render",function(e,t,_,n,o,a){const p=z("app-header"),s=z("app-sidebar"),m=z("router-view"),i=z("app-mobile");return l(),E("div",ne,[L(p,{language:e.language},null,8,["language"]),d("div",oe,[L(s,{language:e.language,menu:e.menu,"menu-name":e.menuName,onChange:e.handleSidebarChange},null,8,["language","menu","menu-name","onChange"]),d("div",{class:U(["varlet-site-doc-container",[!e.useMobile&&"varlet-site-doc-container--pc-only"]]),ref:"doc"},[L(m)],2),P(L(i,{"component-name":e.componentName,language:e.language,replace:e.menuName},null,8,["component-name","language","replace"]),[[S,e.useMobile]])])])}]]),pe=[{path:"/en-US/action-sheet",component:()=>s((()=>import("./en-US.7a87c8e0.js")),["assets/en-US.7a87c8e0.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/action-sheet",component:()=>s((()=>import("./zh-CN.cd96d38f.js")),["assets/zh-CN.cd96d38f.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/app-bar",component:()=>s((()=>import("./en-US.a9d07342.js")),["assets/en-US.a9d07342.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/app-bar",component:()=>s((()=>import("./zh-CN.3daaf67c.js")),["assets/zh-CN.3daaf67c.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/back-top",component:()=>s((()=>import("./en-US.c474a645.js")),["assets/en-US.c474a645.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/back-top",component:()=>s((()=>import("./zh-CN.474d844c.js")),["assets/zh-CN.474d844c.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/badge",component:()=>s((()=>import("./en-US.64a55b90.js")),["assets/en-US.64a55b90.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/badge",component:()=>s((()=>import("./zh-CN.730109ea.js")),["assets/zh-CN.730109ea.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/button",component:()=>s((()=>import("./en-US.e83a84a2.js")),["assets/en-US.e83a84a2.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/button",component:()=>s((()=>import("./zh-CN.289e18b4.js")),["assets/zh-CN.289e18b4.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/card",component:()=>s((()=>import("./en-US.11aa08c7.js")),["assets/en-US.11aa08c7.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/card",component:()=>s((()=>import("./zh-CN.0795f47f.js")),["assets/zh-CN.0795f47f.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/cell",component:()=>s((()=>import("./en-US.063e118e.js")),["assets/en-US.063e118e.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/cell",component:()=>s((()=>import("./zh-CN.60e9ba1d.js")),["assets/zh-CN.60e9ba1d.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/checkbox",component:()=>s((()=>import("./zh-CN.333a1e19.js")),["assets/zh-CN.333a1e19.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/checkbox-group",component:()=>s((()=>import("./en-US.af48e65f.js")),["assets/en-US.af48e65f.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/checkbox-group",component:()=>s((()=>import("./zh-CN.60f0a71d.js")),["assets/zh-CN.60f0a71d.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/chip",component:()=>s((()=>import("./en-US.aad7cb8b.js")),["assets/en-US.aad7cb8b.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/chip",component:()=>s((()=>import("./zh-CN.22e7b888.js")),["assets/zh-CN.22e7b888.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/col",component:()=>s((()=>import("./zh-CN.0b6792f8.js")),["assets/zh-CN.0b6792f8.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/collapse",component:()=>s((()=>import("./en-US.15a8e5bb.js")),["assets/en-US.15a8e5bb.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/collapse",component:()=>s((()=>import("./zh-CN.6a57657b.js")),["assets/zh-CN.6a57657b.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/collapse-item",component:()=>s((()=>import("./zh-CN.422aebe6.js")),["assets/zh-CN.422aebe6.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/countdown",component:()=>s((()=>import("./en-US.2de5fb49.js")),["assets/en-US.2de5fb49.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/countdown",component:()=>s((()=>import("./zh-CN.1ed96071.js")),["assets/zh-CN.1ed96071.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/counter",component:()=>s((()=>import("./en-US.f46be5ae.js")),["assets/en-US.f46be5ae.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/counter",component:()=>s((()=>import("./zh-CN.5dcb52b5.js")),["assets/zh-CN.5dcb52b5.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/date-picker",component:()=>s((()=>import("./en-US.4a47ab37.js")),["assets/en-US.4a47ab37.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/date-picker",component:()=>s((()=>import("./zh-CN.a1a86940.js")),["assets/zh-CN.a1a86940.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/dialog",component:()=>s((()=>import("./en-US.1db3c077.js")),["assets/en-US.1db3c077.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/dialog",component:()=>s((()=>import("./zh-CN.df7e4e88.js")),["assets/zh-CN.df7e4e88.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/divider",component:()=>s((()=>import("./en-US.29a240f2.js")),["assets/en-US.29a240f2.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/divider",component:()=>s((()=>import("./zh-CN.8d26b636.js")),["assets/zh-CN.8d26b636.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/form",component:()=>s((()=>import("./en-US.8a1dbb0d.js")),["assets/en-US.8a1dbb0d.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/form",component:()=>s((()=>import("./zh-CN.a94e4f71.js")),["assets/zh-CN.a94e4f71.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/form-details",component:()=>s((()=>import("./en-US.aef6cebb.js")),["assets/en-US.aef6cebb.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/form-details",component:()=>s((()=>import("./zh-CN.936f7f31.js")),["assets/zh-CN.936f7f31.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/icon",component:()=>s((()=>import("./en-US.3b000bd7.js")),["assets/en-US.3b000bd7.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/icon",component:()=>s((()=>import("./zh-CN.2ccb0a50.js")),["assets/zh-CN.2ccb0a50.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/image",component:()=>s((()=>import("./en-US.29e404bf.js")),["assets/en-US.29e404bf.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/image",component:()=>s((()=>import("./zh-CN.235911c4.js")),["assets/zh-CN.235911c4.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/image-preview",component:()=>s((()=>import("./en-US.f739b472.js")),["assets/en-US.f739b472.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/image-preview",component:()=>s((()=>import("./zh-CN.8061bcd0.js")),["assets/zh-CN.8061bcd0.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/index-anchor",component:()=>s((()=>import("./zh-CN.6b3717d2.js")),["assets/zh-CN.6b3717d2.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/index-bar",component:()=>s((()=>import("./en-US.31bd7ca4.js")),["assets/en-US.31bd7ca4.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/index-bar",component:()=>s((()=>import("./zh-CN.ac9765ad.js")),["assets/zh-CN.ac9765ad.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/input",component:()=>s((()=>import("./en-US.edc73832.js")),["assets/en-US.edc73832.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/input",component:()=>s((()=>import("./zh-CN.f688398f.js")),["assets/zh-CN.f688398f.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/lazy",component:()=>s((()=>import("./en-US.e617963a.js")),["assets/en-US.e617963a.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/lazy",component:()=>s((()=>import("./zh-CN.21589d20.js")),["assets/zh-CN.21589d20.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/list",component:()=>s((()=>import("./en-US.55340b3f.js")),["assets/en-US.55340b3f.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/list",component:()=>s((()=>import("./zh-CN.dbd17ab9.js")),["assets/zh-CN.dbd17ab9.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/loading",component:()=>s((()=>import("./en-US.72792846.js")),["assets/en-US.72792846.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/loading",component:()=>s((()=>import("./zh-CN.496f8b5a.js")),["assets/zh-CN.496f8b5a.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/locale",component:()=>s((()=>import("./en-US.498b9b0a.js")),["assets/en-US.498b9b0a.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/locale",component:()=>s((()=>import("./zh-CN.6ee649bd.js")),["assets/zh-CN.6ee649bd.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/menu",component:()=>s((()=>import("./en-US.194a8151.js")),["assets/en-US.194a8151.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/menu",component:()=>s((()=>import("./zh-CN.8502a352.js")),["assets/zh-CN.8502a352.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/option",component:()=>s((()=>import("./zh-CN.50ead06e.js")),["assets/zh-CN.50ead06e.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/picker",component:()=>s((()=>import("./en-US.0d9ac47c.js")),["assets/en-US.0d9ac47c.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/picker",component:()=>s((()=>import("./zh-CN.75c9afcd.js")),["assets/zh-CN.75c9afcd.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/popup",component:()=>s((()=>import("./en-US.264e4267.js")),["assets/en-US.264e4267.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/popup",component:()=>s((()=>import("./zh-CN.bf691c01.js")),["assets/zh-CN.bf691c01.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/progress",component:()=>s((()=>import("./en-US.738674f5.js")),["assets/en-US.738674f5.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/progress",component:()=>s((()=>import("./zh-CN.95f17182.js")),["assets/zh-CN.95f17182.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/pull-refresh",component:()=>s((()=>import("./en-US.d3107e14.js")),["assets/en-US.d3107e14.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/pull-refresh",component:()=>s((()=>import("./zh-CN.06c99519.js")),["assets/zh-CN.06c99519.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/radio",component:()=>s((()=>import("./zh-CN.8a86b128.js")),["assets/zh-CN.8a86b128.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/radio-group",component:()=>s((()=>import("./en-US.a148999e.js")),["assets/en-US.a148999e.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/radio-group",component:()=>s((()=>import("./zh-CN.8cd091a1.js")),["assets/zh-CN.8cd091a1.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/rate",component:()=>s((()=>import("./en-US.8c58e4e4.js")),["assets/en-US.8c58e4e4.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/rate",component:()=>s((()=>import("./zh-CN.7c59fd79.js")),["assets/zh-CN.7c59fd79.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/ripple",component:()=>s((()=>import("./en-US.fc3d90b2.js")),["assets/en-US.fc3d90b2.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/ripple",component:()=>s((()=>import("./zh-CN.5604fdf2.js")),["assets/zh-CN.5604fdf2.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/row",component:()=>s((()=>import("./en-US.6b7aac5c.js")),["assets/en-US.6b7aac5c.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/row",component:()=>s((()=>import("./zh-CN.9844cb36.js")),["assets/zh-CN.9844cb36.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/select",component:()=>s((()=>import("./en-US.388707fd.js")),["assets/en-US.388707fd.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/select",component:()=>s((()=>import("./zh-CN.1dee8b15.js")),["assets/zh-CN.1dee8b15.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/skeleton",component:()=>s((()=>import("./en-US.383ea2a2.js")),["assets/en-US.383ea2a2.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/skeleton",component:()=>s((()=>import("./zh-CN.af9a933d.js")),["assets/zh-CN.af9a933d.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/slider",component:()=>s((()=>import("./en-US.6d85758a.js")),["assets/en-US.6d85758a.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/slider",component:()=>s((()=>import("./zh-CN.3a4a94fb.js")),["assets/zh-CN.3a4a94fb.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/snackbar",component:()=>s((()=>import("./en-US.142e32d9.js")),["assets/en-US.142e32d9.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/snackbar",component:()=>s((()=>import("./zh-CN.1cc6a8e4.js")),["assets/zh-CN.1cc6a8e4.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/step",component:()=>s((()=>import("./zh-CN.8f41b4d9.js")),["assets/zh-CN.8f41b4d9.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/steps",component:()=>s((()=>import("./en-US.d2da33fc.js")),["assets/en-US.d2da33fc.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/steps",component:()=>s((()=>import("./zh-CN.f7609474.js")),["assets/zh-CN.f7609474.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/sticky",component:()=>s((()=>import("./en-US.012c3138.js")),["assets/en-US.012c3138.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/sticky",component:()=>s((()=>import("./zh-CN.fe65f2e0.js")),["assets/zh-CN.fe65f2e0.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/style-provider",component:()=>s((()=>import("./en-US.9a252899.js")),["assets/en-US.9a252899.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/style-provider",component:()=>s((()=>import("./zh-CN.8ebd0ca7.js")),["assets/zh-CN.8ebd0ca7.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/styles",component:()=>s((()=>import("./en-US.6989c8c6.js")),["assets/en-US.6989c8c6.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/styles",component:()=>s((()=>import("./zh-CN.2647a9d8.js")),["assets/zh-CN.2647a9d8.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/swipe",component:()=>s((()=>import("./en-US.c6fd7edb.js")),["assets/en-US.c6fd7edb.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/swipe",component:()=>s((()=>import("./zh-CN.4d835e83.js")),["assets/zh-CN.4d835e83.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/swipe-item",component:()=>s((()=>import("./zh-CN.219cfcf8.js")),["assets/zh-CN.219cfcf8.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/switch",component:()=>s((()=>import("./en-US.7385de91.js")),["assets/en-US.7385de91.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/switch",component:()=>s((()=>import("./zh-CN.3e0d6c83.js")),["assets/zh-CN.3e0d6c83.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/tab",component:()=>s((()=>import("./zh-CN.57daa8b8.js")),["assets/zh-CN.57daa8b8.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/tab-item",component:()=>s((()=>import("./zh-CN.b1730606.js")),["assets/zh-CN.b1730606.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/tabs",component:()=>s((()=>import("./en-US.0dc968d3.js")),["assets/en-US.0dc968d3.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/tabs",component:()=>s((()=>import("./zh-CN.5c46a651.js")),["assets/zh-CN.5c46a651.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/tabs-items",component:()=>s((()=>import("./zh-CN.36762bd1.js")),["assets/zh-CN.36762bd1.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/time-picker",component:()=>s((()=>import("./en-US.8030b004.js")),["assets/en-US.8030b004.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/time-picker",component:()=>s((()=>import("./zh-CN.17b2845c.js")),["assets/zh-CN.17b2845c.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/uploader",component:()=>s((()=>import("./en-US.14528d0a.js")),["assets/en-US.14528d0a.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/uploader",component:()=>s((()=>import("./zh-CN.e3b1678b.js")),["assets/zh-CN.e3b1678b.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/browserAdaptation",component:()=>s((()=>import("./browserAdaptation.en-US.b095955a.js")),["assets/browserAdaptation.en-US.b095955a.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/browserAdaptation",component:()=>s((()=>import("./browserAdaptation.zh-CN.4d2b9334.js")),["assets/browserAdaptation.zh-CN.4d2b9334.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/cli",component:()=>s((()=>import("./cli.en-US.ff325063.js")),["assets/cli.en-US.ff325063.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/cli",component:()=>s((()=>import("./cli.zh-CN.a1badc9e.js")),["assets/cli.zh-CN.a1badc9e.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/customTheme",component:()=>s((()=>import("./customTheme.en-US.96a69aec.js")),["assets/customTheme.en-US.96a69aec.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/customTheme",component:()=>s((()=>import("./customTheme.zh-CN.2f6d42c6.js")),["assets/customTheme.zh-CN.2f6d42c6.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/home",component:()=>s((()=>import("./home.en-US.d8327e37.js")),["assets/home.en-US.d8327e37.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/home",component:()=>s((()=>import("./home.zh-CN.bbabd1b9.js")),["assets/home.zh-CN.bbabd1b9.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/ide",component:()=>s((()=>import("./ide.en-US.27b18923.js")),["assets/ide.en-US.27b18923.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/ide",component:()=>s((()=>import("./ide.zh-CN.807892ab.js")),["assets/ide.zh-CN.807892ab.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/importOnDemand",component:()=>s((()=>import("./importOnDemand.en-US.4d2fc487.js")),["assets/importOnDemand.en-US.4d2fc487.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/importOnDemand",component:()=>s((()=>import("./importOnDemand.zh-CN.5e1816fb.js")),["assets/importOnDemand.zh-CN.5e1816fb.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/openSourceGuide",component:()=>s((()=>import("./openSourceGuide.en-US.fef0737a.js")),["assets/openSourceGuide.en-US.fef0737a.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/openSourceGuide",component:()=>s((()=>import("./openSourceGuide.zh-CN.4b1a2c35.js")),["assets/openSourceGuide.zh-CN.4b1a2c35.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/en-US/quickstart",component:()=>s((()=>import("./quickstart.en-US.e8d8b563.js")),["assets/quickstart.en-US.e8d8b563.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/quickstart",component:()=>s((()=>import("./quickstart.zh-CN.1796fce9.js")),["assets/quickstart.zh-CN.1796fce9.js","assets/IconSfc.addeaf96.js","assets/IconSfc.3669b3f5.css","assets/vendor.bac705d4.js"])}];const se=C(t,"defaultLanguage"),me=C(t,"pc.redirect"),ie=C(t,"mobile.redirect");me&&pe.push({path:"/:pathMatch(.*)*",redirect:`/${se}${me}`});const re=x({history:q(),routes:pe});let ce=!0;const{start:he,end:le}=function(){const e=v({style:{position:"fixed",width:"100%",left:0,top:0,zIndex:10086},trackColor:"#fff",color:C(t,"themes.color-progress"),lineWidth:3,value:0});let _;const n=()=>{_=window.setTimeout((()=>{if(e.value>=95)return;let t=Math.random();e.value<70&&(t=Math.round(5*Math.random())),e.value+=t,n()}),200)};return m(i,e),{start:()=>{e.value=0,setTimeout((()=>e.color="#3594d9"),200),n()},end:()=>{e.value=100,setTimeout((()=>e.color="#fff"),300),window.clearTimeout(_)}}}();re.beforeEach(((e,t)=>{if(e.path===t.path)return!1;ce=!1,setTimeout((()=>!ce&&he()),200),window._hmt&&e.path&&window._hmt.push(["_trackPageview",`/#${e.fullPath}`])})),re.afterEach((()=>{ce=!0,le()})),Object.defineProperty(window,"onMobileRouteChange",{value:(e,t,_)=>{e!==ie?re.replace(`/${t}${e}`):re.replace(`/${t}/${_}`)}}),G(ae).use(re).use(r).use(c).use(h).mount("#app");
