import{j as ie,o as ae,d as de,e as j}from"./index-09f026e5.js";const ue={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ce=j("path",{d:"M80 152v256a40.12 40.12 0 0 0 40 40h272a40.12 40.12 0 0 0 40-40V152",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),le=j("rect",{x:"48",y:"64",width:"416",height:"80",rx:"28",ry:"28",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),fe=j("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M320 304l-64 64l-64-64"},null,-1),pe=j("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 345.89V224"},null,-1),he=[ce,le,fe,pe],Te=ie({name:"ArchiveOutline",render:function(n,d){return ae(),de("svg",ue,he)}});var c;(function(e){e.NETWORK="NETWORK",e.ABORTED="ABORTED",e.INVALID_JSON="INVALID_JSON",e.INVALID_CONVERSION="INVALID_CONVERSION",e.TIMEOUT="TIMEOUT",e.HTTP="HTTP",e.BAD_REQUEST="BAD_REQUEST",e.BROKEN_ON_AFTER_RESPONSE="BROKEN_ON_AFTER_RESPONSE",e.BROKEN_ON_BEFORE_REQUEST="BROKEN_ON_BEFORE_REQUEST",e.BROKEN_ON_INIT="BROKEN_ON_INIT",e.BROKEN_ON_RESPONSE_ERROR="BROKEN_ON_RESPONSE_ERROR",e.BROKEN_ON_DATA_CONVERSION_ERROR="BROKEN_ON_DATA_CONVERSION_ERROR"})(c||(c={}));function Ee(){const e=new Error;return e.__lylaError=!0,e}function p(e,n){const d=Ee();return d.name=`LylaError[${e.type}]`,n&&(d.stack+=n),Object.assign(d,e)}function ye(e){return typeof e=="object"&&!!e&&"__lylaError"in e}function _e(e,n){return Ne(n)?n:n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e}function Ne(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ee(e){return e&&typeof e=="object"}function F(e,n){if(!n)return e;for(const[d,i]of Object.entries(n))i===void 0?delete e[d]:e[d.toLowerCase()]=typeof i=="string"?i:`${i}`;return e}function H(...e){let n={};for(const d of e)if(Array.isArray(d))Array.isArray(n)||(n=[]),n.push(...d);else if(ee(d))for(let[i,y]of Object.entries(d))ee(y)&&i in n&&(y=H(n[i],y)),n[i]=y;return n}const Oe={100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Upprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway TImeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"INsufficient Storage",508:"Loop Detected",510:"Not Extended",511:"Network Authentication Required"};function me(e){return Oe[e]||""}function Re(e){return 200<=e&&e<300}function ge(e,n,...d){const i=H(n,...d);async function y(a){var R,v,S,u,s,k,q,D;const U=a.context===void 0?i.context:a.context;let m=Object.assign(a,{context:typeof U=="object"?JSON.parse(JSON.stringify(U)):U});try{if(!((R=i==null?void 0:i.hooks)===null||R===void 0)&&R.onInit)for(const o of i.hooks.onInit){const r=o(m);r instanceof Promise?m=await r:m=r}if(!((v=a==null?void 0:a.hooks)===null||v===void 0)&&v.onInit)for(const o of a.hooks.onInit){const r=o(m);r instanceof Promise?m=await r:m=r}}catch{throw p({type:c.BROKEN_ON_INIT,message:"`onInit` hook throws error",detail:void 0,error:void 0,response:void 0,context:m.context},void 0)}let t=H(i,m);t.method=(S=t.method)===null||S===void 0?void 0:S.toUpperCase(),t.responseType=a.responseType||"text",t.url=t.url||"",t.baseUrl&&(t.url=_e(t.baseUrl,t.url));let w;try{w=(u=new Error().stack)===null||u===void 0?void 0:u.replace(/^Error/,"")}catch{}if(t.query){const r=new URLSearchParams(t.query).toString();if(t.url.includes("?"))throw p({type:c.BAD_REQUEST,message:"`options.query` can't be set if `options.url` contains '?'",detail:void 0,error:void 0,response:void 0,context:t.context},void 0);r.length&&(t.url=t.url+"?"+r)}if(!((s=t.hooks)===null||s===void 0)&&s.onBeforeRequest)try{for(const o of(k=t.hooks)===null||k===void 0?void 0:k.onBeforeRequest){const r=o(t);r instanceof Promise?t=await r:t=r}}catch{throw p({type:c.BROKEN_ON_BEFORE_REQUEST,message:"`onBeforeRequest` hook throws error",detail:void 0,error:void 0,response:void 0,context:m.context},void 0)}if(t.json!==void 0){if(t.body!==void 0)throw p({type:c.BAD_REQUEST,message:"`options.json` can't be used together with `options.body`. If you want to use `options.json`, you should left `options.body` as `undefined`",detail:void 0,error:void 0,response:void 0,context:t.context},void 0);t.body=JSON.stringify(t.json)}const{timeout:I,url:te="",method:L="get",body:J,responseType:K="text",withCredentials:oe=!1,signal:P,onUploadProgress:ne,onDownloadProgress:re}=t;async function $(o,r,E){var _,N;if(!((_=t.hooks)===null||_===void 0)&&_.onDataConversionError)try{for(const O of(N=t.hooks)===null||N===void 0?void 0:N.onDataConversionError){const b=O(o);b instanceof Promise&&await b}}catch(O){g(p({type:c.BROKEN_ON_DATA_CONVERSION_ERROR,error:O,message:"`onDataConversionError` hook throws error",detail:void 0,response:E,context:r},void 0));return}}async function C(o,r){var E,_;if(!((E=t.hooks)===null||E===void 0)&&E.onResponseError)try{for(const N of(_=t.hooks)===null||_===void 0?void 0:_.onResponseError){const O=N(o,M);O instanceof Promise&&await O}}catch(N){g(p({type:c.BROKEN_ON_RESPONSE_ERROR,error:N,message:"`onResponseError` hook throws error",detail:void 0,response:void 0,context:r},void 0));return}}let Q,g,M;const x={};F(x,i.headers),F(x,a.headers),t.json!==void 0&&(x["content-type"]=(q=x["content-type"])!==null&&q!==void 0?q:"application/json"),x.accept=(D=x.accept)!==null&&D!==void 0?D:"*/*",t.headers=x;let A=!1,W=!1;function G(){A=!0,W||V()}function V(){W=!0,P&&P.removeEventListener("abort",z)}const se=new Promise((o,r)=>{Q=o,g=E=>{A||(G(),r(E))},M=E=>{A||(G(),r(E))}});let B=!1;function z(){if(B)return;B=!0;const o=p({type:c.ABORTED,message:"Request aborted",detail:void 0,error:void 0,response:void 0,context:t.context},w);C(o,t.context),g(o),Z.abort()}P&&P.addEventListener("abort",z);let X=!1;const Z=e({url:te,method:L,body:J,json:t.json,headers:x,responseType:K,withCredentials:oe,onNetworkError(o){X=!0,V();const r=p({type:c.NETWORK,message:"Network error",detail:o,error:void 0,response:void 0,context:t.context},w);C(r,t.context),g(r)},onDownloadProgress:re,onUploadProgress:ne,async onResponse(o,r){var E;if(B||X)return;V();let _,N=!1,O,b;const Y=me(o.status);let l={context:t.context,requestOptions:t,status:o.status,statusText:Y,headers:F({},o.headers),body:o.body,detail:r,set json(f){N=!0,_=f},get json(){if(N)return _;if(K!=="text"){const f=p({type:c.INVALID_CONVERSION,message:`Can not convert ${K} to JSON`,detail:void 0,error:void 0,response:l,context:l.context},void 0);throw $(f,l.context,l),f}if(O===void 0)try{return O=JSON.parse(o.body)}catch(f){b=f}else return O;if(b){const f=p({type:c.INVALID_JSON,message:b.message,detail:void 0,error:b,context:l.context,response:l},void 0);throw $(f,l.context,l),f}}};if(!Re(o.status)){const f=`${o.status} ${Y}`,T=p({type:c.HTTP,message:`Request failed with ${f}`,detail:void 0,error:void 0,response:l,context:t.context},w);C(T,t.context),g(T);return}if(!((E=t.hooks)===null||E===void 0)&&E.onAfterResponse)try{for(const f of t.hooks.onAfterResponse){const T=f(l,M);T instanceof Promise?l=await T:l=T}}catch(f){g(p({type:c.BROKEN_ON_AFTER_RESPONSE,message:"`onAfterResponse` hook throws error",detail:void 0,response:l,error:f,context:l.context},void 0));return}Q(l)}});if(I&&setTimeout(()=>{if(A)return;Z.abort(),B=!0;const o=p({type:c.TIMEOUT,message:I?`Timeout of ${I}ms exceeded`:"Timeout exceeded",detail:void 0,error:void 0,response:void 0,context:t.context},w);C(o,t.context),g(o)},I),L==="GET"&&J)throw p({type:c.BAD_REQUEST,message:"Can not send a request with body in 'GET' method.",error:void 0,response:void 0,detail:void 0,context:t.context},void 0);return se}function h(a){return(R,v)=>y(Object.assign(Object.assign({},v),{method:a,url:R}))}return{lyla:Object.assign(y,{get:h("get"),post:h("post"),put:h("put"),patch:h("patch"),head:h("head"),delete:h("delete"),options:h("options"),trace:h("trace"),connect:h("connect")}),isLylaError(a){return ye(a)}}}function xe(e){if(!e)return{};const n={};return e.trim().split(/[\r\n]+/).forEach(function(i){const y=i.split(":"),h=(y[0]||"").trim(),a=(y[1]||"").trim();n[h]=a}),n}const ve=({url:e,method:n,headers:d,body:i,responseType:y,withCredentials:h,onDownloadProgress:a,onUploadProgress:R,onResponse:v,onNetworkError:S})=>{const u=new XMLHttpRequest;u.open(n,e),u.withCredentials=h,u.responseType=y;for(const[s,k]of Object.entries(d))u.setRequestHeader(s,k);return R&&u.upload.addEventListener("progress",s=>{R({lengthComputable:s.lengthComputable,percent:s.lengthComputable?s.loaded/s.total*100:0,loaded:s.loaded,total:s.total})}),a&&u.addEventListener("progress",s=>{a({lengthComputable:s.lengthComputable,percent:s.lengthComputable?s.loaded/s.total*100:0,loaded:s.loaded,total:s.total})}),u.addEventListener("loadend",s=>{v({status:u.status,headers:xe(u.getAllResponseHeaders()),body:u.response},s)}),u.addEventListener("error",s=>{S(s)}),u.send(i),{abort(){u.abort()}}},{lyla:Se,isLylaError:ke}=ge(ve,{context:void 0});export{Te as A,Se as l};
