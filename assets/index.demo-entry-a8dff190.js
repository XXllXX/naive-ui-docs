import{j as B,l as k,_ as g,r as o,o as a,i as d,w as t,g as l,e,f as n,u as S,a as T,b as F,c as w,d as y,n as v,h as V}from"./index-09f026e5.js";const N=B({setup(){return{show:k(!0)}}}),P={class:"demo-card__view"};function M(i,r,m,s,b,x){const h=o("n-switch"),_=o("n-collapse-transition"),p=o("n-space"),A=o("component-demo");return a(),d(A,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/collapse-transition/demos/enUS/basic.demo.vue",title:"Basic","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23checked%3E%0D%0A%20%20%20%20%20%20%20%20Show%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23unchecked%3E%0D%0A%20%20%20%20%20%20%20%20Hide%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-switch%3E%0D%0A%20%20%20%20%3Cn-collapse-transition%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%22There%20is%20no%20single%20development%2C%20in%20either%20technology%20or%20management%0D%0A%20%20%20%20%20%20technique%2C%20which%20by%20itself%20promises%20even%20one%20order%20of%20magnitude%20%5Btenfold%5D%0D%0A%20%20%20%20%20%20improvement%20within%20a%20decade%20in%20productivity%2C%20in%20reliability%2C%20in%0D%0A%20%20%20%20%20%20simplicity.%22%0D%0A%20%20%20%20%3C%2Fn-collapse-transition%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20show%3A%20ref(true)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23checked%3E%0D%0A%20%20%20%20%20%20%20%20Show%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23unchecked%3E%0D%0A%20%20%20%20%20%20%20%20Hide%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-switch%3E%0D%0A%20%20%20%20%3Cn-collapse-transition%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%22There%20is%20no%20single%20development%2C%20in%20either%20technology%20or%20management%0D%0A%20%20%20%20%20%20technique%2C%20which%20by%20itself%20promises%20even%20one%20order%20of%20magnitude%20%5Btenfold%5D%0D%0A%20%20%20%20%20%20improvement%20within%20a%20decade%20in%20productivity%2C%20in%20reliability%2C%20in%0D%0A%20%20%20%20%20%20simplicity.%22%0D%0A%20%20%20%20%3C%2Fn-collapse-transition%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20show%3A%20ref(true)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[l(" Basic ")]),content:t(()=>[]),demo:t(()=>[e("div",P,[n(p,{vertical:""},{default:t(()=>[n(h,{value:i.show,"onUpdate:value":r[0]||(r[0]=f=>i.show=f)},{checked:t(()=>[l(" Show ")]),unchecked:t(()=>[l(" Hide ")]),_:1},8,["value"]),n(_,{show:i.show},{default:t(()=>[l(' "There is no single development, in either technology or management technique, which by itself promises even one order of magnitude [tenfold] improvement within a decade in productivity, in reliability, in simplicity." ')]),_:1},8,["show"])]),_:1})])]),_:1})}const I=g(N,[["render",M]]),U={components:{basicVueDemo:I},setup(){const i=S(),r=T(()=>!i.value),m=i;return{showAnchor:r,displayMode:F(),wrapperStyle:w(()=>m.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:w(()=>r.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/collapse-transition/demos/enUS/index.demo-entry.md"}}},$={class:"md-table-wrapper"},q=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Description")])],-1),H=e("td",null,"appear",-1),R=e("td",null,"Whether to play animation on first mounted.",-1),j=e("td",null,"show",-1),W=e("td",null,"Whether to show content.",-1),z={class:"md-table-wrapper"},G=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Parameters"),e("th",null,"Description")])],-1),J=e("td",null,"default",-1),K=e("td",null,"The content inside the transition.",-1),L={key:0,style:{width:"192px"}};function O(i,r,m,s,b,x){const h=o("edit-on-github-header"),_=o("n-p"),p=o("n-h2"),A=o("basicVueDemo"),f=o("component-demos"),D=o("n-h3"),c=o("n-text"),C=o("n-table"),u=o("n-anchor-link"),E=o("n-anchor");return a(),y("div",{class:"doc",style:v(s.wrapperStyle)},[e("div",{style:v(s.contentStyle)},[n(h,{"relative-url":"D:/Code/naive-ui/src/collapse-transition/demos/enUS/index.demo-entry.md",text:"Collapse Transition"}),n(_,null,{default:t(()=>[l("A collapse item without any form of encapsulation.")]),_:1}),n(p,{id:"Demos"},{default:t(()=>[l("Demos")]),_:1}),n(f,{span:2},{default:t(()=>[n(A)]),_:1}),n(p,{id:"API"},{default:t(()=>[l("API")]),_:1}),n(D,{id:"CollapseTransition-Props"},{default:t(()=>[l("CollapseTransition Props")]),_:1}),e("div",$,[n(C,{"single-column":"",class:"md-table"},{default:t(()=>[q,e("tbody",null,[e("tr",null,[H,e("td",null,[n(c,{code:""},{default:t(()=>[l("boolean")]),_:1})]),e("td",null,[n(c,{code:""},{default:t(()=>[l("false")]),_:1})]),R]),e("tr",null,[j,e("td",null,[n(c,{code:""},{default:t(()=>[l("boolean")]),_:1})]),e("td",null,[n(c,{code:""},{default:t(()=>[l("true")]),_:1})]),W])])]),_:1})]),n(D,{id:"CollapseTransition-Slots"},{default:t(()=>[l("CollapseTransition Slots")]),_:1}),e("div",z,[n(C,{"single-column":"",class:"md-table"},{default:t(()=>[G,e("tbody",null,[e("tr",null,[J,e("td",null,[n(c,{code:""},{default:t(()=>[l("()")]),_:1})]),K])])]),_:1})])],4),s.showAnchor?(a(),y("div",L,[n(E,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(s.displayMode,a(),d(u,{key:0,title:"Basic\r",href:"#basic.vue"})),(s.displayMode,a(),d(u,{key:1,title:"API",href:"#API"})),(s.displayMode,a(),d(u,{key:2,title:"CollapseTransition Props",href:"#CollapseTransition-Props"})),(s.displayMode,a(),d(u,{key:3,title:"CollapseTransition Slots",href:"#CollapseTransition-Slots"}))]),_:1})])):V("",!0)],4)}const X=g(U,[["render",O]]);export{X as default};