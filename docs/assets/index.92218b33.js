import{M as ut,f as he,s as fe,g as ge,G as dt,d as mt,o as pt,a as ht,c as ft,p as gt,b as Ne,e as vt,h as yt,i as wt,v as bt}from"./vendor.870df48c.js";const Lt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}};Lt();const xt="modulepreload",ze={},Et="/",S=function(n,t){return!t||t.length===0?n():Promise.all(t.map(r=>{if(r=`${Et}${r}`,r in ze)return;ze[r]=!0;const a=r.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":xt,a||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),a)return new Promise((s,l)=>{i.addEventListener("load",s),i.addEventListener("error",l)})})).then(()=>n())},C=document.querySelector("canvas"),yn=document.querySelector(".menu"),wn=document.querySelector("main"),$e=document.querySelector(".details"),B=document.querySelector(".posterize"),St=document.querySelector("[for=posterize]"),ve=document.querySelector(".color"),Ot=document.querySelector("[for=color]"),De=document.querySelector(".monochrome"),kt=document.querySelector("[for=monochrome]"),ye=document.querySelector(".consider-dpr"),Ct=document.querySelector('[for="consider-dpr"]'),H=document.querySelector(".optimize-curves"),_t=document.querySelector('[for="optimize-curves"]'),V=document.querySelector(".show-advanced"),Tt=document.querySelector('[for="show-advanced"]'),f=document.querySelector("img"),we=document.querySelector(".reset-all"),Z=document.querySelector(".open"),ee=document.querySelector(".save"),te=document.querySelector(".copy"),ne=document.querySelector(".paste"),re=document.querySelector(".install"),u=document.querySelector("output"),Pt=document.querySelector(".debug"),ae=document.querySelector("progress"),oe=document.querySelector(".toast"),ie=document.documentElement,be=document.querySelector("details.main"),Le=document.querySelector("summary"),We=document.querySelector(".close-options-button"),z=window.devicePixelRatio;function Mt(e){switch(e){case"../i18n/de-DE.js":return S(()=>import("./de-DE.6b3781d0.js"),[]);case"../i18n/el-GR.js":return S(()=>import("./el-GR.3c26ab21.js"),[]);case"../i18n/en-US.js":return S(()=>import("./en-US.98cef5dc.js"),[]);default:return new Promise(function(n,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function It(e){switch(e){case"../i18n/de-DE.js":return S(()=>import("./de-DE.6b3781d0.js"),[]);case"../i18n/el-GR.js":return S(()=>import("./el-GR.3c26ab21.js"),[]);case"../i18n/en-US.js":return S(()=>import("./en-US.98cef5dc.js"),[]);default:return new Promise(function(n,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const qe="language",xe=["en","de","el"],Rt=["en-US","de-DE","el-GR"];class jt{constructor(){this.currentLanguageAndLocale=this.detectLanguageAndLocal(),this.defaultLanguage=xe[0],this.defaultLocale=Rt[0],this.translations=null}detectLanguageAndLocal(){const n=localStorage.getItem(qe);if(n)return JSON.parse(n);let[t,r=null]=navigator.language?.split("-");r&&(r=r.toUpperCase()),(!t||!xe.includes(t))&&(t=xe[0]);const a={language:t,locale:r};return localStorage.setItem(qe,JSON.stringify(a)),a}async getTranslations(){const{language:n,locale:t}=this.currentLanguageAndLocale;this.translations=(await It(`../i18n/${n}${t?`-${t}`:""}.js`).catch(()=>Mt(`../i18n/${this.defaultLocale}.js`))).default}t(n){return this.translations[n]}}const p=new jt;let Ee=0,Se=0,_=1,m={};const Ue=e=>(e.preventDefault(),!1),Be=e=>{const n=u.querySelector("svg");if(!!n){n.classList.add("interactive");for(let t=0;t<x.length;t++)if(e.pointerId===x[t].pointerId){x[t]=e;break}if(x.length===2){const t=Math.abs(x[0].clientX-x[1].clientX);G>0&&(t>G&&(_*=.995,ke(_)),t<G&&(_*=1.005,ke(_))),G=t}else if(x.length===1){const t=Math.floor(e.offsetX-Ee),r=Math.floor(e.offsetY-Se);n.setAttribute("viewBox",`${-1*t} ${-1*r} ${m.width} ${m.height}`)}}};u.addEventListener("pointerdown",e=>{!u.querySelector("svg")||(x.push(e),u.addEventListener("dragstart",Ue),E(),Ee=Math.floor(e.offsetX+m.x),Se=Math.floor(e.offsetY+m.y),u.addEventListener("pointermove",Be),u.style.cursor="grabbing")});const Oe=e=>{u.removeEventListener("pointermove",Be),u.removeEventListener("dragstart",Ue),At(e),x.length<2&&(G=-1),E(),u.style.cursor="grab";const n=u.querySelector("svg");!n||n.classList.remove("interactive")};u.addEventListener("pointerup",e=>{Oe(e)});u.addEventListener("pointercancel",e=>{Oe(e)});u.addEventListener("pointerleave",e=>{Oe(e)});const E=()=>{const e=u.querySelector("svg");if(!e)return;const n=e.getAttribute("viewBox"),[t,r,a,o]=n.split(" ");m.x=Number(t),m.y=Number(r),m.width=Number(a),m.height=Number(o)},ke=e=>{const n=u.querySelector("svg");if(!n)return;L(`${p.t("zoom")}: ${(1/e).toFixed(1)}\xD7`,2e3),m.width===void 0&&E();const t=Math.ceil(m.width*e),r=Math.ceil(m.height*e);if(t<=0||r<=0)return;const a=Math.floor(m.x+(m.width-t)/2),o=Math.floor(m.y+(m.height-r)/2);n.setAttribute("viewBox",`${a} ${o} ${t} ${r}`)};let Ce=null;u.addEventListener("wheel",e=>{const n=u.querySelector("svg");!n||(n.classList.add("interactive"),_=Math.max(.1,Math.min(_*(1+e.deltaY*.005),10)),ke(_),Ce&&clearTimeout(Ce),Ce=setTimeout(()=>{n.classList.remove("interactive")},1e3))},{passive:!0});const x=[];let G=-1;const At=e=>{for(let n=0;n<x.length;n++)if(x[n].pointerId===e.pointerId){x.splice(n,1);break}},He=()=>{Ee=0,Se=0,_=1,m={}},se=(e,n)=>{let t;return function(...a){const o=()=>{clearTimeout(t),e(...a)};clearTimeout(t),t=setTimeout(o,n)}};/*!
 * canvas-size
 * v1.2.5
 * https://github.com/jhildenbiddle/canvas-size
 * (c) 2015-2021 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */function Ve(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Ve(Object(t),!0).forEach(function(r){Nt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ve(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Nt(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function zt(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function $t(e,n){if(e==null)return{};var t=zt(e,n),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(n.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(t[r]=e[r]))}return t}function Ge(e,n){return Wt(e)||Ut(e,n)||Fe(e,n)||Ht()}function ce(e){return Dt(e)||qt(e)||Fe(e)||Bt()}function Dt(e){if(Array.isArray(e))return _e(e)}function Wt(e){if(Array.isArray(e))return e}function qt(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ut(e,n){var t=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],a=!0,o=!1,i,s;try{for(t=t.call(e);!(a=(i=t.next()).done)&&(r.push(i.value),!(n&&r.length===n));a=!0);}catch(l){o=!0,s=l}finally{try{!a&&t.return!=null&&t.return()}finally{if(o)throw s}}return r}}function Fe(e,n){if(!!e){if(typeof e=="string")return _e(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _e(e,n)}}function _e(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Bt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ht(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F(e){var n=e.sizes.shift(),t=Math.max(Math.ceil(n[0]),1),r=Math.max(Math.ceil(n[1]),1),a=[t-1,r-1,1,1],o=Date.now(),i=typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope,s,l;i?(s=new OffscreenCanvas(1,1),l=new OffscreenCanvas(t,r)):(s=document.createElement("canvas"),s.width=1,s.height=1,l=document.createElement("canvas"),l.width=t,l.height=r);var d=s.getContext("2d"),c=l.getContext("2d");c&&(c.fillRect.apply(c,a),d.drawImage(l,t-1,r-1,1,1,0,0,1,1));var v=d&&d.getImageData(0,0,1,1).data[3]!==0,y=Date.now()-o;return i?(postMessage({width:t,height:r,benchmark:y,isTestPass:v}),!v&&e.sizes.length&&F(e)):v?e.onSuccess(t,r,y):(e.onError(t,r,y),e.sizes.length&&F(e)),v}var Te={area:[16384,14188,11402,11180,10836,8192,4096,1],height:[8388607,65535,32767,16384,8192,4096,1],width:[4194303,65535,32767,16384,8192,4096,1]},Vt=["onError","onSuccess"],$={max:null,min:1,sizes:[],step:1024,usePromise:!1,useWorker:!1,onError:Function.prototype,onSuccess:Function.prototype},X={};function Pe(e){var n=e.width===e.height,t=e.height===1,r=e.width===1,a=[];if(!e.width||!e.height)e.sizes.forEach(function(c){var v=n||t?c:1,y=n||r?c:1;a.push([v,y])});else for(var o=e.min||$.min,i=e.step||$.step,s=Math.max(e.width,e.height);s>=o;){var l=n||t?s:1,d=n||r?s:1;a.push([l,d]),s-=i}return a}function le(e){var n=window&&"HTMLCanvasElement"in window,t=window&&"OffscreenCanvas"in window,r=Date.now(),a=e.onError,o=e.onSuccess,i=$t(e,Vt),s=null;if(!n)return!1;if(e.useWorker&&t){var l=`
            var canvasTest = `.concat(F.toString(),`;
            onmessage = function(e) {
                canvasTest(e.data);
            };
        `),d=new Blob([l],{type:"application/javascript"}),c=URL.createObjectURL(d);s=new Worker(c),URL.revokeObjectURL(c),s.onmessage=function(v){var y=v.data,j=y.width,K=y.height,Q=y.benchmark,me=y.isTestPass;me?(X[r].onSuccess(j,K,Q),delete X[r]):X[r].onError(j,K,Q)}}if(e.usePromise)return new Promise(function(v,y){var j=b(b({},e),{},{onError:function(A,N,U){var pe;if(e.sizes.length===0)pe=!0;else{var it=e.sizes.slice(-1),st=Ge(it,1),Ae=Ge(st[0],2),ct=Ae[0],lt=Ae[1];pe=A===ct&&N===lt}a(A,N,U),pe&&y({width:A,height:N,benchmark:U})},onSuccess:function(A,N,U){o(A,N,U),v({width:A,height:N,benchmark:U})}});if(s){var K=j.onError,Q=j.onSuccess;X[r]={onError:K,onSuccess:Q},s.postMessage(i)}else F(j)});if(s)X[r]={onError:a,onSuccess:o},s.postMessage(i);else return F(e)}var Gt={maxArea:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=Pe({width:n.max,height:n.max,min:n.min,step:n.step,sizes:ce(Te.area)}),r=b(b(b({},$),n),{},{sizes:t});return le(r)},maxHeight:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=Pe({width:1,height:n.max,min:n.min,step:n.step,sizes:ce(Te.height)}),r=b(b(b({},$),n),{},{sizes:t});return le(r)},maxWidth:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=Pe({width:n.max,height:1,min:n.min,step:n.step,sizes:ce(Te.width)}),r=b(b(b({},$),n),{},{sizes:t});return le(r)},test:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=b(b({},$),n);return t.sizes=ce(t.sizes),t.width&&t.height&&(t.sizes=[[t.width,t.height]]),le(t)}};let Xe,Ye;const Je="OffscreenCanvas"in window&&"CanvasFilter"in window;if(Je)S(()=>import("./preprocessworker.faa146aa.js"),[]).then(e=>{const n=e.default;let t=null;const r=C.getContext("2d");Xe=async()=>{t&&t.terminate(),t=new n;const a=C.cloneNode().transferControlToOffscreen();return t.postMessage({offscreen:a},[a]),new Promise(async o=>{const{width:i,height:s}=Ke();let l;try{l=await createImageBitmap(f)}catch{try{l=await createImageBitmap(f,0,0,i,s)}catch(c){console.error(c.name,c.message),u.innerHTML="",L(c.message);return}}const d=new MessageChannel;d.port1.onmessage=({data:c})=>{d.port1.close(),t.terminate(),t=null,C.width=i,C.height=s,r.putImageData(c.result,0,0),o(c.result)},t.postMessage({inputImageBitmap:l,posterize:B.checked,rgba:{r:T(h[w.red]),g:T(h[w.green]),b:T(h[w.blue]),a:T(h[w.alpha])},cssFilters:Qe(),width:i,height:s,dpr:z},[d.port2])})}});else{const e=C.getContext("2d",{desynchronized:!0});e.scale(z,z),e.imageSmoothingEnabled=!0,Ye=()=>{let{width:n,height:t}=Ke();const r=ye.checked?z:1;let a=1;for(;!Gt.test({width:n,height:t});)n=Math.floor(n/2),t=Math.floor(t/2),a/=2;return C.width=n,C.height=t,e.clearRect(0,0,n,t),e.filter=Xt(),e.drawImage(f,0,0,r*f.naturalWidth*a,r*f.naturalHeight*a,0,0,n,t),e.getImageData(0,0,n,t)}}const Ke=()=>{const e=Number(h[tt.scale].value)/100;return{width:Math.ceil(z*f.naturalWidth*e),height:Math.ceil(z*f.naturalHeight*e)}},T=e=>{const n=Number(e.value),t=[];for(let r=0;r<=n;r++)t[r]=Number((1/n*r).toFixed(1));return t},Ft=()=>`data:image/svg+xml;utf8,<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <filter id="posterize">
        <feComponentTransfer>
          <feFuncR type="discrete" tableValues="${T(h[w.red]).join(",")}" />
          <feFuncG type="discrete" tableValues="${T(h[w.green]).join(",")}" />
          <feFuncB type="discrete" tableValues="${T(h[w.blue]).join(",")}" />
          <feFuncA type="discrete" tableValues="${T(h[w.alpha])}" />
        </feComponentTransfer>
      </filter>
    </svg>`.replace(/[\r\n]/g,"").replace(/\s+/g," ").trim(),Qe=()=>{let e="";for(const[n,t]of Object.entries(nt)){const r=h[n];t.initial!==Number(r.value)&&(e+=`${n}(${r.value}${r.dataset.unit}) `)}return e},Xt=()=>{let e=`${B.checked?`url('${Ft()}#posterize') `:""}`;return e+=Qe(),e.trim()||"none"};function Yt(){return new Worker("/assets/monochromeworker.a3227215.js",{type:"module"})}let D=null;const Jt=async e=>(D&&D.terminate(),D=new Yt,new Promise(async n=>{const t=new MessageChannel;t.port1.onmessage=({data:a})=>{t.port1.close(),D.terminate(),D=null,n(a.result)};const r={turdsize:Number(h[g.turdsize].value),alphamax:Number(h[g.alphamax].value),turnpolicy:Number(h[g.turnpolicy].value),opttolerance:Number(h[g.opttolerance].value),opticurve:H.checked?1:0};D.postMessage({imageData:e,params:r},[t.port2])}));function Kt(){return new Worker("/assets/colorworker.f69ea41a.js",{type:"module"})}let W=null;const k={},Qt=async e=>(W&&W.terminate(),W=new Kt,new Promise(async n=>{const t=new MessageChannel;t.port1.onmessage=({data:d})=>{t.port1.close(),W.terminate(),W=null,n(d.result)},ae.value=0;let r="",a="",o="",i=0;k.current&&(clearInterval(k.current),k.current=null),k.current=setInterval(()=>{const d=`${r}${o}${a}`;d.length!==i&&(u.innerHTML=d,i=d.length)},500);const s=new MessageChannel;s.port1.onmessage=({data:d})=>{const c=Math.floor(d.processed/d.total*100);ae.value=c,d.svg&&(r||(r=d.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$1").replace(/\s+width="\d+(?:\.\d+)?"/,"").replace(/\s+height="\d+(?:\.\d+)"/,""),a=d.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$3"),m.width&&(r=r.replace(/viewBox="([^"]+)"/,`viewBox="${m.x} ${m.y} ${m.width} ${m.height}"`))),o+=d.svg.replace(/(.*?<svg[^>]+>)(.*?)(<\/svg>)/,"$2")),d.processed===d.total&&(clearInterval(k.current),k.current=null,s.port1.close(),ae.value=0)};const l={minPathSegments:Number(h[g.minPathLenght].value),strokeWidth:Number(h[g.strokeWidth].value),turdsize:Number(h[g.turdsize].value),alphamax:Number(h[g.alphamax].value),turnpolicy:Number(h[g.turnpolicy].value),opttolerance:Number(h[g.opttolerance].value),opticurve:H.checked?1:0};W.postMessage({imageData:e,params:l},[t.port2,s.port2])}));var Zt='<svg viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"/></circle></g></svg>';const Me="color",Ie="monochrome",Ze=(e,n,t)=>{!e||(e=e.replace(/\s+width="\d+(?:\.\d+)?"/,"").replace(/\s+height="\d+(?:\.\d+)"/,""),u.dataset.originalViewBox=/viewBox="([^"]+)"/.exec(e)[1],t.width&&(e=e.replace(/viewBox="([^"]+)"/,`viewBox="${t.x} ${t.y} ${t.width} ${t.height}"`)),u.classList.remove(Me),u.classList.remove(Ie),u.classList.add(n),u.innerHTML=e,L(`${p.t("svgSize")}: ${e.length} ${p.t("bytes")}`,3e3))},O=async(e={})=>{u.innerHTML="",u.classList.remove(Me,Ie),k.current&&(clearInterval(k.current),k.current=null);let n=u.querySelector("img");n||(n=document.createElement("img"),n.classList.add("spinner"),n.src=URL.createObjectURL(new Blob([Zt],{type:"image/svg+xml"})),u.append(n)),n.style.display="block";const t=Je?await Xe():Ye();if(ve.checked){const r=await Qt(t);Ze(r,Me,e)}else{const r=await Jt(t);Ze(r,Ie,e)}n.style.display="none"};function en(){return new Worker("/assets/svgoworker.4755cfed.js",{type:"module"})}let q=null;const ue=async e=>(q&&q.terminate(),q=new en,new Promise(n=>{const t=new MessageChannel;t.port1.onmessage=({data:r})=>{t.port1.close(),q.terminate(),q=null,n(r.result)},q.postMessage({svg:e,originalViewBox:u.dataset.originalViewBox},[t.port2])})),Y="fileHandle",tn=e=>e?e.name.replace(/\.[^\.]+$/,""):"";Z.addEventListener("click",async()=>{try{const e=await ut({mimeTypes:["image/*"],description:"Image files"}),n=URL.createObjectURL(e);f.addEventListener("load",()=>{URL.revokeObjectURL(n)},{once:!0}),f.src=n,he&&await fe(Y,e.handle)}catch(e){console.error(e.name,e.message),L(e.message)}});document.addEventListener("dragover",e=>{e.preventDefault()});document.addEventListener("dragenter",e=>{e.preventDefault(),ie.classList.add("dropenter")});document.addEventListener("dragleave",e=>{e.preventDefault(),e.target===document.documentElement&&ie.classList.remove("dropenter")});document.addEventListener("drop",async e=>{e.preventDefault(),e.stopPropagation(),ie.classList.remove("dropenter");const n=e.dataTransfer.items[0];if(n.kind==="file"){let t;if(f.addEventListener("load",()=>{URL.revokeObjectURL(t)},{once:!0}),he){const a=await n.getAsFileSystemHandle();if(a.kind!=="file")return;const o=await a.getFile();t=URL.createObjectURL(o),f.src=t,await fe(Y,a);return}const r=n.getAsFile();t=URL.createObjectURL(r),f.src=t}});ee.addEventListener("click",async()=>{try{let e="",n=u.innerHTML,t=null;he&&(e=tn(await ge(Y)),t=await showSaveFilePicker({suggestedName:e,types:[{description:"SVG file",accept:{"image/svg+xml":[".svg"]}}]})),L(p.t("optimizingSVG"),1/0),n=await ue(n),L(p.t("savedSVG"));const r=new Blob([n],{type:"image/svg+xml"});await dt(r,{fileName:e,description:"SVG file"},t)}catch(e){console.error(e.name,e.message),L(e.message)}});ne.addEventListener("click",async()=>{try{const e=await navigator.clipboard.read();for(const n of e)for(const t of n.types)if(t.startsWith("image/")){const r=await n.getType(t);if(!r)return;const a=URL.createObjectURL(r);f.src=a;return}}catch(e){console.error(e.name,e.message),L(e.message)}});document.addEventListener("paste",e=>{try{if(!e.clipboardData.files.length)return;const n=e.clipboardData.files[0];if(n.type.startsWith("image/")){const t=URL.createObjectURL(n);f.src=t;return}}catch(n){console.error(n.name,n.message),L(n.message)}});te.addEventListener("click",async()=>{let e=u.innerHTML;L(p.t("optimizingSVG"),1/0);try{await navigator.clipboard.write([new ClipboardItem({"text/plain":new Promise(async n=>{e=await ue(e),n(new Blob([e],{type:"text/plain"}))}),"image/svg+xml":new Promise(async n=>{e=await ue(e),n(new Blob([e],{type:"image/svg+xml"}))})})])}catch(n){console.warn(n.name,n.message),e=await ue(e);const t=new Blob([e],{type:"text/plain"}),r=new Blob([e],{type:"image/svg+xml"});try{await navigator.clipboard.write([new ClipboardItem({[r.type]:r,[t.type]:t})])}catch(a){console.warn(a.name,a.message);try{await navigator.clipboard.write([new ClipboardItem({[t.type]:t})])}catch(o){console.error(o.name,o.message),L(o.message);return}}}L(p.t("copiedSVG"))});var nn='<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="none"/><path d="m20 17h-16v-12h8v-2h-8c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-3h-2z"/><path d="m17 14 5-5-1.41-1.41-2.59 2.58v-7.17h-2v7.17l-2.59-2.58-1.41 1.41z"/></svg>';const P="%",rn="deg",J="steps",et="pixels",Re="",an="segments",M={brightness:"brightness",contrast:"contrast",grayscale:"grayscale",hueRotate:"hue-rotate",invert:"invert",opacity:"opacity",saturate:"saturate",sepia:"sepia"},w={red:"red",green:"green",blue:"blue",alpha:"alpha"},tt={scale:"scale"},g={minPathLenght:"minPathSegments",strokeWidth:"strokeWidth",turdsize:"turdsize",alphamax:"alphamax",turnpolicy:"turnpolicy",opticurve:"opticurve",opttolerance:"opttolerance"},nt={[M.brightness]:{unit:P,initial:100,min:0,max:200},[M.contrast]:{unit:P,initial:100,min:0,max:200},[M.grayscale]:{unit:P,initial:0,min:0,max:100},[M.hueRotate]:{unit:rn,initial:0,min:0,max:360},[M.invert]:{unit:P,initial:0,min:0,max:100},[M.opacity]:{unit:P,initial:100,min:0,max:100},[M.saturate]:{unit:P,initial:100,min:0,max:200},[M.sepia]:{unit:P,initial:0,min:0,max:100}},on={[w.red]:{unit:J,initial:5,min:1,max:20},[w.green]:{unit:J,initial:5,min:1,max:20},[w.blue]:{unit:J,initial:5,min:1,max:20},[w.alpha]:{unit:J,initial:1,min:1,max:10}},sn={[tt.scale]:{unit:P,initial:100,min:1,max:200}},cn={[g.turdsize]:{unit:et,initial:2,min:0,max:50},[g.alphamax]:{unit:Re,initial:1,min:0,max:1.3334},[g.turnpolicy]:{unit:J,initial:4,min:0,max:6},[g.opttolerance]:{unit:Re,initial:.2,min:0,max:1},[g.minPathLenght]:{unit:an,initial:0,min:0,max:30},[g.strokeWidth]:{unit:et,initial:0,min:0,max:100}},ln=[{name:"svgOptions",icon:Ne},{name:"colorChannels",icon:vt},{name:"imageSize",icon:yt},{name:"imagePreprocessing",icon:wt}],rt=[Object.entries(cn),Object.entries(on),Object.entries(sn),Object.entries(nt)],h={},at={},I={},de=(e,n)=>{const t=p.t(e);return` (${e?`${n}${t.length===1?t:` ${t}`}`:n})`},R=e=>{const n=document.createElement("span");return n.classList.add("icon"),n.innerHTML=e,n},un=(e,n)=>{const t=document.createElement("details");I[e]=t;const r=document.createElement("summary"),a=R(n);return r.append(a),r.append(document.createTextNode(p.t(e))),t.append(r),t},dn=["alphamax","turnpolicy","optimize-curves","opttolerance","minPathSegments"],mn=(e,n,t)=>{const{unit:r,min:a,max:o,initial:i}=n,s=document.createElement("div");s.classList.add("preprocess-input"),dn.includes(e)&&s.classList.add("advanced");const l=document.createElement("label");l.textContent=p.t(e)||e,l.htmlFor=e;const d=document.createElement("span");at[e]=d,d.textContent=de(r,i);const c=document.createElement("input");h[e]=c,c.id=e,c.type="range",c.class=e,r&&(c.dataset.unit=r),r===Re&&(c.step=.01),c.min=a,c.max=o,c.value=i,c.addEventListener("input",()=>{d.textContent=de(r,c.value)}),Object.keys(w).includes(e)?c.addEventListener("change",se(async()=>{E(),await O(m)},250)):Object.keys(g).includes(e)?c.addEventListener("change",se(async()=>{E(),await O(m)},250)):c.addEventListener("change",se(async()=>{E(),await O(m)},250));const v=document.createElement("button");v.type="button",v.textContent=p.t("reset"),v.addEventListener("click",async()=>{c.value=i,d.textContent=de(r,i),c.dispatchEvent(new Event("change"))}),l.append(d),s.append(l);const y=document.createElement("div");s.append(y),y.append(c),y.append(v),t.append(s)};B.addEventListener("change",async()=>{const e=!B.checked;Object.keys(w).forEach(n=>{h[n].disabled=e}),E(),await O(m)});ve.addEventListener("change",async()=>{E(),await O(m)});De.addEventListener("change",async()=>{E(),await O(m)});ye.addEventListener("change",async()=>{E(),await O(m)});H.addEventListener("change",async()=>{h.opttolerance.disabled=!H.checked,E(),await O(m)});const pn=async()=>{await p.getTranslations(),fn();const e=window.matchMedia("(max-width: 414px)"),n=()=>{if(e.matches){be.open=!1;return}be.open=!0};n(),e.addEventListener("change",n),rt.forEach((t,r)=>{const{name:a,icon:o}=ln[r],i=un(a,o);r<2&&(i.open=!0),a==="colorChannels"?I.colorChannels.append(B.parentNode):a==="svgOptions"?(I.svgOptions.append(ve.parentNode),I.svgOptions.append(De.parentNode)):a==="imageSize"&&I.imageSize.append(ye.parentNode);for(const[s,l]of t)s==="opttolerance"&&I.svgOptions.append(H.parentNode),mn(s,l,i),a==="svgOptions"&&I.svgOptions.append(V.parentNode);$e.append(i)}),$e.append(we.parentNode),V.checked=await ge("showAdvancedControls"),ot(),f.addEventListener("load",async()=>{if(f.width=f.naturalWidth,f.height=f.naturalHeight,f.src!==new URL("/favicon.png",location.href).toString())setTimeout(async()=>{He(),await O()},200);else{const t=await fetch("/potraced.svg").then(r=>r.text());u.innerHTML=t,u.dataset.originalViewBox=/viewBox="([^"]+)"/.exec(t)[1]}}),f.complete&&f.dispatchEvent(new Event("load")),ae.hidden=!1;try{const t=await ge(Y);if(t&&await hn(t)){const r=await t.getFile(),a=URL.createObjectURL(r);f.src=a}}catch(t){console.error(t.name,t.message),await mt(Y)}},hn=async e=>{const n={mode:"read"};return await e.queryPermission(n)==="granted"||await e.requestPermission(n)==="granted"},fn=()=>{we.textContent=p.t("resetAll"),St.textContent=p.t("posterizeInputImage"),Ot.textContent=p.t("colorSVG"),kt.textContent=p.t("monochromeSVG"),Ct.textContent=p.t("considerDPR"),_t.textContent=p.t("opticurve"),Tt.textContent=p.t("showAdvancedControls"),Z.innerHTML="",Z.append(R(pt)),Z.append(document.createTextNode(p.t("openImage"))),ee.innerHTML="",ee.append(R(ht)),ee.append(document.createTextNode(p.t("saveSVG"))),te.innerHTML="",te.append(R(ft)),te.append(document.createTextNode(p.t("copySVG"))),ne.innerHTML="",ne.append(R(gt)),ne.append(document.createTextNode(p.t("pasteImage"))),re.innerHTML="",re.append(R(nn)),re.append(document.createTextNode(p.t("install"))),ie.dataset.dropText=p.t("dropFileHere"),Le.innerHTML="",Le.append(R(Ne)),Le.append(document.createTextNode(p.t("tweak"))),We.ariaLabel=p.t("closeOptions")};we.addEventListener("click",async()=>{const e=(n,t,r)=>{h[n].value=r,at[n].textContent=de(t,r)};rt.forEach(n=>{for(const[t,r]of n)e(t,r.unit,r.initial)}),He(),await O()});Pt.addEventListener("click",()=>{C.classList.toggle("debug")});let je=null;const L=(e,n=5e3)=>{if(oe.innerHTML=e,oe.hidden=!1,je&&clearTimeout(je),n!==1/0){je=setTimeout(()=>{oe.hidden=!0,oe.textContent=""},n);return}},ot=()=>{fe("showAdvancedControls",V.checked),document.querySelectorAll(".advanced").forEach(e=>{V.checked?e.style.display="block":e.style.display="none"})};V.addEventListener("change",ot);document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`);window.addEventListener("resize",se(()=>{document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`)},250));We.addEventListener("click",()=>{be.open=!1});function gn(e={}){const{immediate:n=!1,onNeedRefresh:t,onOfflineReady:r,onRegistered:a,onRegisterError:o}=e;let i;const s=async(l=!0)=>{};return"serviceWorker"in navigator&&(i=new bt("/sw.js",{scope:"/"}),i.addEventListener("activated",l=>{l.isUpdate?window.location.reload():r==null||r()}),i.register({immediate:n}).then(l=>{a==null||a(l)}).catch(l=>{o==null||o(l)})),s}"launchQueue"in window&&S(()=>import("./filehandling.dd9317ae.js"),["assets/filehandling.dd9317ae.js","assets/vendor.870df48c.js"]);"windowControlsOverlay"in navigator&&S(()=>import("./windowcontrols.5119ccd5.js"),["assets/windowcontrols.5119ccd5.js","assets/vendor.870df48c.js"]);"onbeforeinstallprompt"in window&&"onappinstalled"in window?S(()=>import("./install.6e62516e.js"),["assets/install.6e62516e.js","assets/vendor.870df48c.js"]):re.style.display="none";(async()=>{pn(),gn({onOfflineReady(){L(p.t("readyToWorkOffline"))},onNeedRefresh(){location.reload()}})()})();export{Y as F,wn as a,re as b,se as d,f as i,yn as m};
