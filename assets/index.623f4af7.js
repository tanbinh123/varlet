var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,s=(e,t)=>{for(var o in t||(t={}))n.call(t,o)&&l(e,o,t[o]);if(r)for(var o of r(t))i.call(t,o)&&l(e,o,t[o]);return e},a=(e,r)=>t(e,o(r));import{p as c}from"./vendor.bac705d4.js";const p={locks:{},zIndex:2e3,touchmoveForbid:!0};c(p);var d=c(p);function u(e){const t=this._ripple;if(t.removeRipple(),t.disabled||t.tasker)return;t.tasker=window.setTimeout((()=>{var o;t.tasker=null;const{x:r,y:n,centerX:i,centerY:l,size:s}=function(e,t){const{top:o,left:r}=e.getBoundingClientRect(),{clientWidth:n,clientHeight:i}=e,l=Math.sqrt(n**2+i**2)/2,s=2*l;return{x:t.touches[0].clientX-r-l,y:t.touches[0].clientY-o-l,centerX:(n-2*l)/2,centerY:(i-2*l)/2,size:s}}(this,e),a=document.createElement("div");a.classList.add("var-ripple"),a.style.opacity="0",a.style.transform=`translate(${r}px, ${n}px) scale3d(.3, .3, .3)`,a.style.width=`${s}px`,a.style.height=`${s}px`,a.style.backgroundColor=null!=(o=t.color)?o:"currentColor",a.dataset.createdAt=String(performance.now()),function(e){const{zIndex:t,position:o}=window.getComputedStyle(e);e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden","static"===o&&(e.style.position="relative"),"auto"===t&&(e.style.zIndex="1")}(this),this.appendChild(a),window.setTimeout((()=>{a.style.transform=`translate(${i}px, ${l}px) scale3d(1, 1, 1)`,a.style.opacity=".25"}),20)}),60)}function v(){const e=()=>{const e=this.querySelectorAll(".var-ripple");if(!e.length)return;const t=e[e.length-1],o=250-performance.now()+Number(t.dataset.createdAt);setTimeout((()=>{t.style.opacity="0",setTimeout((()=>{var e;return null==(e=t.parentNode)?void 0:e.removeChild(t)}),250)}),o)};this._ripple.tasker?setTimeout(e,60):e()}function m(){const e=this._ripple;e.touchmoveForbid&&(e.tasker&&window.clearTimeout(e.tasker),e.tasker=null)}const h={mounted:function(e,t){var o,r,n;e._ripple=a(s({tasker:null},null!=(o=t.value)?o:{}),{touchmoveForbid:null!=(n=null==(r=t.value)?void 0:r.touchmoveForbid)?n:d.touchmoveForbid,removeRipple:v.bind(e)}),e.addEventListener("touchstart",u,{passive:!0}),e.addEventListener("touchmove",m,{passive:!0}),e.addEventListener("dragstart",v,{passive:!0}),document.addEventListener("touchend",e._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",e._ripple.removeRipple,{passive:!0})},unmounted:function(e){e.removeEventListener("touchstart",u),e.removeEventListener("touchmove",m),e.removeEventListener("dragstart",v),document.removeEventListener("touchend",e._ripple.removeRipple),document.removeEventListener("touchcancel",e._ripple.removeRipple)},updated:function(e,t){var o,r,n;e._ripple=a(s(s({},e._ripple),null!=(o=t.value)?o:{}),{touchmoveForbid:null!=(n=null==(r=t.value)?void 0:r.touchmoveForbid)?n:d.touchmoveForbid,tasker:null})},install(e){e.directive("ripple",this)}};export{h as R,d as c};