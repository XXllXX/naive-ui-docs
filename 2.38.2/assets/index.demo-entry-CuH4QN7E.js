import{_ as C,r as l,o as a,i,w as t,g as o,f as n,e,j as S,l as z,u as B,a as V,b as M,c as k,d as E,n as y,h as N}from"./index-DxZkTPDs.js";const P={},U={class:"demo-card__view"};function $(c,u){const r=l("n-text"),s=l("n-p"),_=l("n-skeleton"),p=l("component-demo");return a(),i(p,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/skeleton/demos/enUS/basic.demo.vue",title:"Basic usage","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-skeleton%20text%20%3Arepeat%3D%222%22%20%2F%3E%20%3Cn-skeleton%20text%20style%3D%22width%3A%2060%25%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[o(" Basic usage ")]),content:t(()=>[n(s,null,{default:t(()=>[o("Use "),n(r,{code:""},{default:t(()=>[o("text")]),_:1}),o(" to create text skeleton.")]),_:1})]),demo:t(()=>[e("div",U,[n(_,{text:"",repeat:2}),o(),n(_,{text:"",style:{width:"60%"}})])]),_:1})}const T=C(P,[["render",$]]),j={},I={class:"demo-card__view"};function L(c,u){const r=l("n-p"),s=l("n-skeleton"),_=l("n-space"),p=l("component-demo");return a(),i(p,{"demo-file-name":"box.vue","relative-url":"D:/Code/naive-ui/src/skeleton/demos/enUS/box.demo.vue",title:"Box","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-skeleton%20height%3D%2240px%22%20width%3D%2233%25%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-skeleton%20height%3D%2240px%22%20width%3D%2266%25%22%20%3Asharp%3D%22false%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-skeleton%20height%3D%2240px%22%20round%20%2F%3E%0D%0A%20%20%20%20%3Cn-skeleton%20height%3D%2240px%22%20circle%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[o(" Box ")]),content:t(()=>[n(r,null,{default:t(()=>[o("Use it as a box.")]),_:1})]),demo:t(()=>[e("div",I,[n(_,{vertical:""},{default:t(()=>[n(s,{height:"40px",width:"33%"}),n(s,{height:"40px",width:"66%",sharp:!1}),n(s,{height:"40px",round:""}),n(s,{height:"40px",circle:""})]),_:1})])]),_:1})}const R=C(j,[["render",L]]),W=S({setup(){return{loading:z(!0)}}}),O={class:"demo-card__view"};function q(c,u,r,s,_,p){const g=l("n-text"),x=l("n-p"),A=l("n-switch"),m=l("n-space"),h=l("n-skeleton"),D=l("n-button"),v=l("component-demo");return a(),i(v,{"demo-file-name":"size.vue","relative-url":"D:/Code/naive-ui/src/skeleton/demos/enUS/size.demo.vue",title:"Size","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-space%3E%3Cn-switch%20v-model%3Avalue%3D%22loading%22%20%2F%3ELoading%3C%2Fn-space%3E%0D%0A%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%3Cn-skeleton%20v-if%3D%22loading%22%20%3Awidth%3D%22146%22%20%3Asharp%3D%22false%22%20size%3D%22medium%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20v-else%3E%0D%0A%20%20%20%20%20%20%20%20Won't%20you%20fly%20high%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-skeleton%20v-if%3D%22loading%22%20%3Awidth%3D%22132%22%20round%20size%3D%22medium%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20v-else%20round%3E%0D%0A%20%20%20%20%20%20%20%20free%20bird%2C%20yeah%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-skeleton%20v-if%3D%22loading%22%20circle%20size%3D%22medium%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20v-else%20circle%3E%0D%0A%20%20%20%20%20%20%20%20%3F%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20loading%3A%20ref(true)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-space%3E%3Cn-switch%20v-model%3Avalue%3D%22loading%22%20%2F%3ELoading%3C%2Fn-space%3E%0D%0A%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%3Cn-skeleton%20v-if%3D%22loading%22%20%3Awidth%3D%22146%22%20%3Asharp%3D%22false%22%20size%3D%22medium%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20v-else%3E%0D%0A%20%20%20%20%20%20%20%20Won't%20you%20fly%20high%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-skeleton%20v-if%3D%22loading%22%20%3Awidth%3D%22132%22%20round%20size%3D%22medium%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20v-else%20round%3E%0D%0A%20%20%20%20%20%20%20%20free%20bird%2C%20yeah%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-skeleton%20v-if%3D%22loading%22%20circle%20size%3D%22medium%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20v-else%20circle%3E%0D%0A%20%20%20%20%20%20%20%20%3F%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20loading%3A%20ref(true)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[o(" Size ")]),content:t(()=>[n(x,null,{default:t(()=>[o("Use "),n(g,{code:""},{default:t(()=>[o("size")]),_:1}),o(" to make its height the same as other components.")]),_:1})]),demo:t(()=>[e("div",O,[n(m,{vertical:""},{default:t(()=>[n(m,null,{default:t(()=>[n(A,{value:c.loading,"onUpdate:value":u[0]||(u[0]=b=>c.loading=b)},null,8,["value"]),o("Loading")]),_:1}),n(m,null,{default:t(()=>[c.loading?(a(),i(h,{key:0,width:146,sharp:!1,size:"medium"})):(a(),i(D,{key:1},{default:t(()=>[o(" Won't you fly high ")]),_:1})),c.loading?(a(),i(h,{key:2,width:132,round:"",size:"medium"})):(a(),i(D,{key:3,round:""},{default:t(()=>[o(" free bird, yeah ")]),_:1})),c.loading?(a(),i(h,{key:4,circle:"",size:"medium"})):(a(),i(D,{key:5,circle:""},{default:t(()=>[o(" ? ")]),_:1}))]),_:1})]),_:1})])]),_:1})}const G=C(W,[["render",q]]),H={components:{basicVueDemo:T,boxVueDemo:R,sizeVueDemo:G},setup(){const c=B(),u=V(()=>!c.value),r=c;return{showAnchor:u,displayMode:M(),wrapperStyle:k(()=>r.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:k(()=>u.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/skeleton/demos/enUS/index.demo-entry.md"}}},J={class:"md-table-wrapper"},K=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Description")])],-1),Q=e("td",null,"text",-1),X=e("td",null,"Text skeleton.",-1),Y=e("td",null,"round",-1),Z=e("td",null,"Round skeleton.",-1),ee=e("td",null,"circle",-1),te=e("td",null,"Circle skeleton.",-1),ne=e("td",null,"height",-1),oe=e("td",null,"Skeleton height.",-1),le=e("td",null,"width",-1),de=e("td",null,"Skeleton width.",-1),se=e("td",null,"size",-1),ae=e("td",null,"Skeleton size.",-1),ie=e("td",null,"repeat",-1),ce=e("td",null,"Repeat frequency.",-1),ue=e("td",null,"animated",-1),re=e("td",null,"Whether to enable animation.",-1),_e=e("td",null,"sharp",-1),pe=e("td",null,"Whether to display as a right angled skeleton.",-1),me={key:0,style:{width:"192px"}};function he(c,u,r,s,_,p){const g=l("edit-on-github-header"),x=l("n-p"),A=l("n-h2"),m=l("basicVueDemo"),h=l("boxVueDemo"),D=l("sizeVueDemo"),v=l("component-demos"),b=l("n-h3"),d=l("n-text"),w=l("n-table"),f=l("n-anchor-link"),F=l("n-anchor");return a(),E("div",{class:"doc",style:y(s.wrapperStyle)},[e("div",{style:y(s.contentStyle)},[n(g,{"relative-url":"D:/Code/naive-ui/src/skeleton/demos/enUS/index.demo-entry.md",text:"Skeleton"}),n(x,null,{default:t(()=>[o("A twinkle placeholder.")]),_:1}),n(A,{id:"Demos"},{default:t(()=>[o("Demos")]),_:1}),n(v,{span:2},{default:t(()=>[n(m),n(h),n(D)]),_:1}),n(A,{id:"API"},{default:t(()=>[o("API")]),_:1}),n(b,{id:"Skeleton-Props"},{default:t(()=>[o("Skeleton Props")]),_:1}),e("div",J,[n(w,{"single-column":"",class:"md-table"},{default:t(()=>[K,e("tbody",null,[e("tr",null,[Q,e("td",null,[n(d,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[o("false")]),_:1})]),X]),e("tr",null,[Y,e("td",null,[n(d,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[o("false")]),_:1})]),Z]),e("tr",null,[ee,e("td",null,[n(d,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[o("false")]),_:1})]),te]),e("tr",null,[ne,e("td",null,[n(d,{code:""},{default:t(()=>[o("string | number")]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[o("undefined")]),_:1})]),oe]),e("tr",null,[le,e("td",null,[n(d,{code:""},{default:t(()=>[o("string | number")]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[o("undefined")]),_:1})]),de]),e("tr",null,[se,e("td",null,[n(d,{code:""},{default:t(()=>[o("'small' | 'medium' | 'large'")]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[o("undefined")]),_:1})]),ae]),e("tr",null,[ie,e("td",null,[n(d,{code:""},{default:t(()=>[o("string | number")]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[o("1")]),_:1})]),ce]),e("tr",null,[ue,e("td",null,[n(d,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[o("true")]),_:1})]),re]),e("tr",null,[_e,e("td",null,[n(d,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[o("true")]),_:1})]),pe])])]),_:1})])],4),s.showAnchor?(a(),E("div",me,[n(F,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(s.displayMode,a(),i(f,{key:0,title:"Basic usage\r",href:"#basic.vue"})),(s.displayMode,a(),i(f,{key:1,title:"Box\r",href:"#box.vue"})),(s.displayMode,a(),i(f,{key:2,title:"Size\r",href:"#size.vue"})),(s.displayMode,a(),i(f,{key:3,title:"API",href:"#API"})),(s.displayMode,a(),i(f,{key:4,title:"Skeleton Props",href:"#Skeleton-Props"}))]),_:1})])):N("",!0)],4)}const fe=C(H,[["render",he]]);export{fe as default};