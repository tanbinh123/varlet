var n=Object.defineProperty,e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,a=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,o=(n,o)=>{for(var s in o||(o={}))r.call(o,s)&&a(n,s,o[s]);if(e)for(var s of e(o))t.call(o,s)&&a(n,s,o[s]);return n};import{r as s,x as i,G as c,H as u,I as l,p as d,J as f,b as v,K as p,z as m,D as h,C as b,L as y,M as w,N as g}from"./vendor.bac705d4.js";import{b as O,r as x}from"./shared.6d6b25a1.js";function P(n,e){return Array.isArray(e)?e.reduce(((e,r)=>(e[r]=n[r],e)),{}):n[e]}function E(n,e={},r={}){const t={setup:()=>()=>w(n,o(o({},e),r))},{unmount:a}=function(n){const e=b(n),r=document.createElement("div");return document.body.appendChild(r),{instance:e.mount(r),unmount(){e.unmount(),document.body.removeChild(r)}}}(t);return{unmountInstance:a}}function j(n){const e=d([]),r=h(),t=()=>{const n=function(n){const e=[],r=n=>{(null==n?void 0:n.component)?r(null==n?void 0:n.component.subTree):Array.isArray(null==n?void 0:n.children)&&n.children.forEach((n=>{g(n)&&(e.push(n),r(n))}))};return r(n),e}(r.subTree);e.sort(((e,r)=>n.indexOf(e.vnode)-n.indexOf(r.vnode)))};f(n,{collect:n=>{e.push(n),t()},clear:n=>{x(e,n)},instances:e});return{length:v((()=>e.length))}}function L(n){if(!I(n))return{index:null};const e=p(n),{collect:r,clear:t,instances:a}=e,o=h();i((()=>{m().then((()=>r(o)))})),c((()=>{m().then((()=>t(o)))}));return{index:v((()=>a.indexOf(o)))}}function A(n){const e=[],r=n=>{e.push(n)},t=n=>{x(e,n)};return{childProviders:e,bindChildren:e=>{f(n,o({collect:r,clear:t},e))}}}function C(n){if(!I(n))return{parentProvider:null,bindParent:null};const a=p(n),{collect:o,clear:s}=a;return{parentProvider:((n,a)=>{var o={};for(var s in n)r.call(n,s)&&a.indexOf(s)<0&&(o[s]=n[s]);if(null!=n&&e)for(var s of e(n))a.indexOf(s)<0&&t.call(n,s)&&(o[s]=n[s]);return o})(a,["collect","clear"]),bindParent:n=>{i((()=>o(n))),y((()=>s(n)))}}}function I(n){return n in h().provides}function T(){const n=s(""),e=async(e,r,t)=>{if(!O(e)||!e.length)return!0;return!(await Promise.all(e.map((n=>n(r,t))))).some((e=>!0!==e&&(n.value=String(e),!0)))};return{errorMessage:n,validate:e,resetValidation:()=>{n.value=""},validateWithTrigger:async(r,t,a,o,s)=>{r.includes(t)&&await e(a,o,s)&&(n.value="")}}}function M(n){i((()=>{window.addEventListener("hashchange",n),window.addEventListener("popstate",n)})),c((()=>{window.removeEventListener("hashchange",n),window.removeEventListener("popstate",n)}))}function S(){const n=s(!1);return u((()=>{n.value=!1})),l((()=>{n.value=!0})),{disabled:n}}export{M as a,T as b,A as c,j as d,C as e,L as f,E as m,P as p,S as u};
