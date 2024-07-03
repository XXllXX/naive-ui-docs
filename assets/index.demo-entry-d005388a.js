import{_ as C,r as l,o as c,i as u,w as t,g as o,f as n,e,j as z,l as B,u as V,a as S,b as N,c as x,d as y,n as k,h as M}from"./index-09f026e5.js";const P={},$={class:"demo-card__view"};function j(a,i){const r=l("n-text"),s=l("n-p"),_=l("n-skeleton"),p=l("component-demo");return c(),u(p,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/skeleton/demos/zhCN/basic.demo.vue",title:"基础用法","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-skeleton%20text%20%3Arepeat%3D%222%22%20%2F%3E%20%3Cn-skeleton%20text%20style%3D%22width%3A%2060%25%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[o(" 基础用法 ")]),content:t(()=>[n(s,null,{default:t(()=>[o("使用 "),n(r,{code:""},{default:t(()=>[o("text")]),_:1}),o(" 设定文本骨架。")]),_:1})]),demo:t(()=>[e("div",$,[n(_,{text:"",repeat:2}),o(),n(_,{text:"",style:{width:"60%"}})])]),_:1})}const I=C(P,[["render",j]]),T={},O={class:"demo-card__view"};function R(a,i){const r=l("n-p"),s=l("n-skeleton"),_=l("n-space"),p=l("component-demo");return c(),u(p,{"demo-file-name":"box.vue","relative-url":"D:/Code/naive-ui/src/skeleton/demos/zhCN/box.demo.vue",title:"盒子","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-skeleton%20height%3D%2240px%22%20width%3D%2233%25%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-skeleton%20height%3D%2240px%22%20width%3D%2266%25%22%20%3Asharp%3D%22false%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-skeleton%20height%3D%2240px%22%20round%20%2F%3E%0D%0A%20%20%20%20%3Cn-skeleton%20height%3D%2240px%22%20circle%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[o(" 盒子 ")]),content:t(()=>[n(r,null,{default:t(()=>[o("把它当成个块用。")]),_:1})]),demo:t(()=>[e("div",O,[n(_,{vertical:""},{default:t(()=>[n(s,{height:"40px",width:"33%"}),n(s,{height:"40px",width:"66%",sharp:!1}),n(s,{height:"40px",round:""}),n(s,{height:"40px",circle:""})]),_:1})])]),_:1})}const W=C(T,[["render",R]]),L=z({setup(){return{loading:B(!0)}}}),U={class:"demo-card__view"};function q(a,i,r,s,_,p){const E=l("n-text"),g=l("n-p"),A=l("n-switch"),m=l("n-space"),h=l("n-skeleton"),D=l("n-button"),v=l("component-demo");return c(),u(v,{"demo-file-name":"size.vue","relative-url":"D:/Code/naive-ui/src/skeleton/demos/zhCN/size.demo.vue",title:"尺寸","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-space%3E%3Cn-switch%20v-model%3Avalue%3D%22loading%22%20%2F%3E%E5%8A%A0%E8%BD%BD%3C%2Fn-space%3E%0D%0A%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%3Cn-skeleton%20v-if%3D%22loading%22%20%3Awidth%3D%22146%22%20%3Asharp%3D%22false%22%20size%3D%22medium%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20v-else%3E%0D%0A%20%20%20%20%20%20%20%20Won't%20you%20fly%20high%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-skeleton%20v-if%3D%22loading%22%20%3Awidth%3D%22132%22%20round%20size%3D%22medium%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20v-else%20round%3E%0D%0A%20%20%20%20%20%20%20%20free%20bird%2C%20yeah%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-skeleton%20v-if%3D%22loading%22%20circle%20size%3D%22medium%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20v-else%20circle%3E%0D%0A%20%20%20%20%20%20%20%20%3F%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20loading%3A%20ref(true)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-space%3E%3Cn-switch%20v-model%3Avalue%3D%22loading%22%20%2F%3E%E5%8A%A0%E8%BD%BD%3C%2Fn-space%3E%0D%0A%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%3Cn-skeleton%20v-if%3D%22loading%22%20%3Awidth%3D%22146%22%20%3Asharp%3D%22false%22%20size%3D%22medium%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20v-else%3E%0D%0A%20%20%20%20%20%20%20%20Won't%20you%20fly%20high%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-skeleton%20v-if%3D%22loading%22%20%3Awidth%3D%22132%22%20round%20size%3D%22medium%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20v-else%20round%3E%0D%0A%20%20%20%20%20%20%20%20free%20bird%2C%20yeah%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-skeleton%20v-if%3D%22loading%22%20circle%20size%3D%22medium%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20v-else%20circle%3E%0D%0A%20%20%20%20%20%20%20%20%3F%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20loading%3A%20ref(true)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[o(" 尺寸 ")]),content:t(()=>[n(g,null,{default:t(()=>[o("使用 "),n(E,{code:""},{default:t(()=>[o("size")]),_:1}),o(" 装成其他组件。")]),_:1})]),demo:t(()=>[e("div",U,[n(m,{vertical:""},{default:t(()=>[n(m,null,{default:t(()=>[n(A,{value:a.loading,"onUpdate:value":i[0]||(i[0]=b=>a.loading=b)},null,8,["value"]),o("加载")]),_:1}),n(m,null,{default:t(()=>[a.loading?(c(),u(h,{key:0,width:146,sharp:!1,size:"medium"})):(c(),u(D,{key:1},{default:t(()=>[o(" Won't you fly high ")]),_:1})),a.loading?(c(),u(h,{key:2,width:132,round:"",size:"medium"})):(c(),u(D,{key:3,round:""},{default:t(()=>[o(" free bird, yeah ")]),_:1})),a.loading?(c(),u(h,{key:4,circle:"",size:"medium"})):(c(),u(D,{key:5,circle:""},{default:t(()=>[o(" ? ")]),_:1}))]),_:1})]),_:1})])]),_:1})}const G=C(L,[["render",q]]),H={components:{basicVueDemo:I,boxVueDemo:W,sizeVueDemo:G},setup(){const a=V(),i=S(()=>!a.value),r=a;return{showAnchor:i,displayMode:N(),wrapperStyle:x(()=>r.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:x(()=>i.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/skeleton/demos/zhCN/index.demo-entry.md"}}},J={class:"md-table-wrapper"},K=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"类型"),e("th",null,"默认值"),e("th",null,"说明")])],-1),Q=e("td",null,"text",-1),X=e("td",null,"文本骨架",-1),Y=e("td",null,"round",-1),Z=e("td",null,"圆角骨架",-1),ee=e("td",null,"circle",-1),te=e("td",null,"圆形骨架",-1),ne=e("td",null,"height",-1),oe=e("td",null,"骨架高度",-1),le=e("td",null,"width",-1),de=e("td",null,"骨架宽度",-1),se=e("td",null,"size",-1),ce=e("td",null,"骨架大小",-1),ue=e("td",null,"repeat",-1),ae=e("td",null,"重复次数",-1),ie=e("td",null,"animated",-1),re=e("td",null,"是否启用动画",-1),_e=e("td",null,"sharp",-1),pe=e("td",null,"是否显示为直角骨架",-1),me={key:0,style:{width:"192px"}};function he(a,i,r,s,_,p){const E=l("edit-on-github-header"),g=l("n-p"),A=l("n-h2"),m=l("basicVueDemo"),h=l("boxVueDemo"),D=l("sizeVueDemo"),v=l("component-demos"),b=l("n-h3"),d=l("n-text"),F=l("n-table"),f=l("n-anchor-link"),w=l("n-anchor");return c(),y("div",{class:"doc",style:k(s.wrapperStyle)},[e("div",{style:k(s.contentStyle)},[n(E,{"relative-url":"D:/Code/naive-ui/src/skeleton/demos/zhCN/index.demo-entry.md",text:"骨架屏 Skeleton"}),n(g,null,{default:t(()=>[o("可以闪的占位符。")]),_:1}),n(A,{id:"演示"},{default:t(()=>[o("演示")]),_:1}),n(v,{span:2},{default:t(()=>[n(m),n(h),n(D)]),_:1}),n(A,{id:"API"},{default:t(()=>[o("API")]),_:1}),n(b,{id:"Skeleton-Props"},{default:t(()=>[o("Skeleton Props")]),_:1}),e("div",J,[n(F,{"single-column":"",class:"md-table"},{default:t(()=>[K,e("tbody",null,[e("tr",null,[Q,e("td",null,[n(d,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[o("false")]),_:1})]),X]),e("tr",null,[Y,e("td",null,[n(d,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[o("false")]),_:1})]),Z]),e("tr",null,[ee,e("td",null,[n(d,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[o("false")]),_:1})]),te]),e("tr",null,[ne,e("td",null,[n(d,{code:""},{default:t(()=>[o("string | number")]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[o("undefined")]),_:1})]),oe]),e("tr",null,[le,e("td",null,[n(d,{code:""},{default:t(()=>[o("string | number")]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[o("undefined")]),_:1})]),de]),e("tr",null,[se,e("td",null,[n(d,{code:""},{default:t(()=>[o("'small' | 'medium' | 'large'")]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[o("undefined")]),_:1})]),ce]),e("tr",null,[ue,e("td",null,[n(d,{code:""},{default:t(()=>[o("string | number")]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[o("1")]),_:1})]),ae]),e("tr",null,[ie,e("td",null,[n(d,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[o("true")]),_:1})]),re]),e("tr",null,[_e,e("td",null,[n(d,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(d,{code:""},{default:t(()=>[o("true")]),_:1})]),pe])])]),_:1})])],4),s.showAnchor?(c(),y("div",me,[n(w,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(s.displayMode,c(),u(f,{key:0,title:"基础用法\r",href:"#basic.vue"})),(s.displayMode,c(),u(f,{key:1,title:"盒子\r",href:"#box.vue"})),(s.displayMode,c(),u(f,{key:2,title:"尺寸\r",href:"#size.vue"})),(s.displayMode,c(),u(f,{key:3,title:"API",href:"#API"})),(s.displayMode,c(),u(f,{key:4,title:"Skeleton Props",href:"#Skeleton-Props"}))]),_:1})])):M("",!0)],4)}const fe=C(H,[["render",he]]);export{fe as default};
