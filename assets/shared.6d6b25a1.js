const e=e=>null==e?0:a(e)?(e=parseFloat(e),e=Number.isNaN(e)?0:e):n(e)?Number(e):e,t=e=>e.startsWith("data:image")||/\.(png|jpg|gif|jpeg|svg)$/.test(e),s=e=>e.startsWith("data:video")||/\.(mp4|webm|ogg)$/.test(e),a=e=>"string"==typeof e,n=e=>"boolean"==typeof e,c=e=>"number"==typeof e,r=e=>"[object Object]"===Object.prototype.toString.call(e),i=e=>Array.isArray(e),l=e=>/^(http)|(\.*\/)/.test(e),o=e=>null==e||""===e||Array.isArray(e)&&!e.length,h=(e,t)=>{if(e.length){const s=e.indexOf(t);if(s>-1)return e.splice(s,1)}},p=(e,t=200)=>{let s,a;return function n(...c){const r=Date.now();a||(a=r),s&&window.clearTimeout(s),r-a>=t?(e.apply(this,c),a=r):s=window.setTimeout((()=>{n.apply(this,c)}),50)}},u=e=>{const t=[];return{cache:t,has(e){return this.cache.includes(e)},add(s){this.has(s)||(this.cache.length===e&&t.shift(),this.cache.push(s))},remove(e){this.has(e)&&h(this.cache,e)},clear(){this.cache.length=0}}},d=e=>e,g=e=>e**3,S=e=>e<.5?g(2*e)/2:1-g(2*(1-e))/2;function f(e,t){const s=Object.values(t),a=[24,60,60,1e3];if(["DD","HH","mm","ss"].forEach(((t,n)=>{e.includes(t)?e=e.replace(t,String(s[n]).padStart(2,"0")):s[n+1]+=s[n]*a[n]})),e.includes("S")){const t=String(s[s.length-1]).padStart(3,"0");e=e.includes("SSS")?e.replace("SSS",t):e.includes("SS")?e.replace("SS",t.slice(0,2)):e.replace("S",t.slice(0,1))}return e}const m=(e,t)=>null==e?t:e,y="undefined"!=typeof window,b=e=>[...new Set(e)];function w(e){const t=/([^-])([A-Z])/g;return e.replace(t,"$1-$2").replace(t,"$1-$2").toLowerCase()}export{r as a,i as b,l as c,m as d,a as e,c as f,S as g,p as h,y as i,n as j,w as k,o as l,s as m,t as n,u as o,f as p,d as q,h as r,e as t,b as u};