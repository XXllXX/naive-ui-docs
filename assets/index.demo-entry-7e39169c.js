import{j as y,l as E,_ as v,r,o as D,i as h,w as n,g as t,e as o,f as e,u as $,a as M,b as G,c as F,d as b,n as w,h as N}from"./index-09f026e5.js";const z=y({setup(){return{showRail:E(!0),showBackground:E(!0)}}}),U={class:"demo-card__view"};function j(i,c,s,l,f,_){const d=r("n-switch"),m=r("n-space"),u=r("n-anchor-link"),C=r("n-anchor"),g=r("component-demo");return D(),h(g,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/anchor/demos/enUS/basic.demo.vue",title:"Basic","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20style%3D%22margin-bottom%3A%2012px%22%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22showRail%22%20%2F%3E%20Show%20Rail%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22showBackground%22%20%2F%3E%20Show%20Background%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%20%20%3Cn-anchor%20%3Ashow-rail%3D%22showRail%22%20%3Ashow-background%3D%22showBackground%22%3E%0D%0A%20%20%20%20%3Cn-anchor-link%20title%3D%22Demos%22%20href%3D%22%23Demos%22%3E%0D%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Basic%22%20href%3D%22%23basic.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Ignore-Gap%22%20href%3D%22%23ignore-gap.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Affix%22%20href%3D%22%23affix.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Scroll%20To%22%20href%3D%22%23scrollto.vue%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-anchor-link%3E%0D%0A%20%20%20%20%3Cn-anchor-link%20title%3D%22API%22%20href%3D%22%23API%22%20%2F%3E%0D%0A%20%20%3C%2Fn-anchor%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20showRail%3A%20ref(true)%2C%0D%0A%20%20%20%20%20%20showBackground%3A%20ref(true)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20style%3D%22margin-bottom%3A%2012px%22%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22showRail%22%20%2F%3E%20Show%20Rail%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22showBackground%22%20%2F%3E%20Show%20Background%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%20%20%3Cn-anchor%20%3Ashow-rail%3D%22showRail%22%20%3Ashow-background%3D%22showBackground%22%3E%0D%0A%20%20%20%20%3Cn-anchor-link%20title%3D%22Demos%22%20href%3D%22%23Demos%22%3E%0D%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Basic%22%20href%3D%22%23basic.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Ignore-Gap%22%20href%3D%22%23ignore-gap.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Affix%22%20href%3D%22%23affix.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Scroll%20To%22%20href%3D%22%23scrollto.vue%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-anchor-link%3E%0D%0A%20%20%20%20%3Cn-anchor-link%20title%3D%22API%22%20href%3D%22%23API%22%20%2F%3E%0D%0A%20%20%3C%2Fn-anchor%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20showRail%3A%20ref(true)%2C%0A%20%20%20%20%20%20showBackground%3A%20ref(true)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[t(" Basic ")]),content:n(()=>[]),demo:n(()=>[o("div",U,[e(m,{style:{"margin-bottom":"12px"}},{default:n(()=>[e(d,{value:i.showRail,"onUpdate:value":c[0]||(c[0]=A=>i.showRail=A)},null,8,["value"]),t(" Show Rail "),e(d,{value:i.showBackground,"onUpdate:value":c[1]||(c[1]=A=>i.showBackground=A)},null,8,["value"]),t(" Show Background ")]),_:1}),e(C,{"show-rail":i.showRail,"show-background":i.showBackground},{default:n(()=>[e(u,{title:"Demos",href:"#Demos"},{default:n(()=>[e(u,{title:"Basic",href:"#basic.vue"}),e(u,{title:"Ignore-Gap",href:"#ignore-gap.vue"}),e(u,{title:"Affix",href:"#affix.vue"}),e(u,{title:"Scroll To",href:"#scrollto.vue"})]),_:1}),e(u,{title:"API",href:"#API"})]),_:1},8,["show-rail","show-background"])])]),_:1})}const L=v(z,[["render",j]]),O={},W={class:"demo-card__view"},H={style:{height:"200px"}},q=o("div",null,null,-1),J=o("div",null,null,-1),K={style:{width:"160px"}},Q={style:{width:"160px"}};function X(i,c){const s=r("n-col"),l=r("n-anchor-link"),f=r("n-anchor"),_=r("n-row"),d=r("component-demo");return D(),h(d,{"demo-file-name":"ignore-gap.vue","relative-url":"D:/Code/naive-ui/src/anchor/demos/enUS/ignore-gap.demo.vue",title:"Ignore gap","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20style%3D%22height%3A%20200px%22%3E%0D%0A%20%20%20%20%3Cn-row%20%3Agutter%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-col%20%3Aspan%3D%226%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cdiv%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%20%20%20%20%3Cn-col%20%3Aspan%3D%226%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cdiv%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%20%20%20%20%3Cn-col%20%3Aspan%3D%226%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22width%3A%20160px%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-anchor%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20affix%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Atrigger-top%3D%2224%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Atop%3D%2288%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%22z-index%3A%201%22%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20ignore-gap%0D%0A%20%20%20%20%20%20%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Demos%22%20href%3D%22%23Demos%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Basic%22%20href%3D%22%23basic.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Ignore-Gap%22%20href%3D%22%23ignore-gap.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Affix%22%20href%3D%22%23affix.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Scroll%20To%22%20href%3D%22%23scrollto.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fn-anchor-link%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22API%22%20href%3D%22%23API%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fn-anchor%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%20%20%20%20%3Cn-col%20%3Aspan%3D%226%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22width%3A%20160px%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-anchor%20affix%20%3Atrigger-top%3D%2224%22%20%3Atop%3D%2288%22%20style%3D%22z-index%3A%201%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Demos%22%20href%3D%22%23Demos%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Basic%22%20href%3D%22%23basic.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Ignore-Gap%22%20href%3D%22%23ignore-gap.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Affix%22%20href%3D%22%23affix.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Scroll%20To%22%20href%3D%22%23scrollto.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fn-anchor-link%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22API%22%20href%3D%22%23API%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fn-anchor%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%20%20%3C%2Fn-row%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[t(" Ignore gap ")]),content:n(()=>[]),demo:n(()=>[o("div",W,[o("div",H,[e(_,{gutter:12},{default:n(()=>[e(s,{span:6},{default:n(()=>[q]),_:1}),e(s,{span:6},{default:n(()=>[J]),_:1}),e(s,{span:6},{default:n(()=>[o("div",K,[e(f,{affix:"","trigger-top":24,top:88,style:{"z-index":"1"},"ignore-gap":""},{default:n(()=>[e(l,{title:"Demos",href:"#Demos"},{default:n(()=>[e(l,{title:"Basic",href:"#basic.vue"}),e(l,{title:"Ignore-Gap",href:"#ignore-gap.vue"}),e(l,{title:"Affix",href:"#affix.vue"}),e(l,{title:"Scroll To",href:"#scrollto.vue"})]),_:1}),e(l,{title:"API",href:"#API"})]),_:1})])]),_:1}),e(s,{span:6},{default:n(()=>[o("div",Q,[e(f,{affix:"","trigger-top":24,top:88,style:{"z-index":"1"}},{default:n(()=>[e(l,{title:"Demos",href:"#Demos"},{default:n(()=>[e(l,{title:"Basic",href:"#basic.vue"}),e(l,{title:"Ignore-Gap",href:"#ignore-gap.vue"}),e(l,{title:"Affix",href:"#affix.vue"}),e(l,{title:"Scroll To",href:"#scrollto.vue"})]),_:1}),e(l,{title:"API",href:"#API"})]),_:1})])]),_:1})]),_:1})])])]),_:1})}const Y=v(O,[["render",X]]),Z={},e2={class:"demo-card__view"},o2={style:{height:"200px"}};function n2(i,c){const s=r("n-p"),l=r("n-anchor-link"),f=r("n-anchor"),_=r("component-demo");return D(),h(_,{"demo-file-name":"affix.vue","relative-url":"D:/Code/naive-ui/src/anchor/demos/enUS/affix.demo.vue",title:"Affix","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20style%3D%22height%3A%20200px%22%3E%0D%0A%20%20%20%20%3Cn-anchor%0D%0A%20%20%20%20%20%20affix%0D%0A%20%20%20%20%20%20listen-to%3D%22.document-scroll-container%22%0D%0A%20%20%20%20%20%20%3Atrigger-top%3D%2224%22%0D%0A%20%20%20%20%20%20%3Atop%3D%2288%22%0D%0A%20%20%20%20%20%20style%3D%22z-index%3A%201%22%0D%0A%20%20%20%20%20%20%3Abound%3D%2224%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Demos%22%20href%3D%22%23Demos%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Basic%22%20href%3D%22%23basic.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Ignore-Gap%22%20href%3D%22%23ignore-gap.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Affix%22%20href%3D%22%23affix.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Scroll%20To%22%20href%3D%22%23scrollto.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-anchor-link%3E%0D%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22API%22%20href%3D%22%23API%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-anchor%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[t(" Affix ")]),content:n(()=>[e(s,null,{default:n(()=>[t("When in affix mode, Anchor can recieve addition props as same as Affix.")]),_:1})]),demo:n(()=>[o("div",e2,[o("div",o2,[e(f,{affix:"","listen-to":".document-scroll-container","trigger-top":24,top:88,style:{"z-index":"1"},bound:24},{default:n(()=>[e(l,{title:"Demos",href:"#Demos"},{default:n(()=>[e(l,{title:"Basic",href:"#basic.vue"}),e(l,{title:"Ignore-Gap",href:"#ignore-gap.vue"}),e(l,{title:"Affix",href:"#affix.vue"}),e(l,{title:"Scroll To",href:"#scrollto.vue"})]),_:1}),e(l,{title:"API",href:"#API"})]),_:1})])])]),_:1})}const t2=v(Z,[["render",n2]]),l2=y({setup(){const i=E(null);return{anchorRef:i,scrollTo:s=>{var l;(l=i.value)==null||l.scrollTo(s)}}}}),r2={class:"demo-card__view"},i2={style:{height:"200px","padding-left":"200px"}};function a2(i,c,s,l,f,_){const d=r("n-anchor-link"),m=r("n-anchor"),u=r("n-button"),C=r("n-space"),g=r("component-demo");return D(),h(g,{"demo-file-name":"scrollto.vue","relative-url":"D:/Code/naive-ui/src/anchor/demos/enUS/scrollto.demo.vue",title:"Scroll to","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20style%3D%22height%3A%20200px%3B%20padding-left%3A%20200px%22%3E%0D%0A%20%20%20%20%3Cn-anchor%0D%0A%20%20%20%20%20%20ref%3D%22anchorRef%22%0D%0A%20%20%20%20%20%20affix%0D%0A%20%20%20%20%20%20%3Atrigger-top%3D%2224%22%0D%0A%20%20%20%20%20%20%3Atop%3D%2288%22%0D%0A%20%20%20%20%20%20%3Abound%3D%2224%22%0D%0A%20%20%20%20%20%20style%3D%22z-index%3A%201%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Demos%22%20href%3D%22%23Demos%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Basic%22%20href%3D%22%23basic.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Ignore-Gap%22%20href%3D%22%23ignore-gap.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Affix%22%20href%3D%22%23affix.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Scroll%20To%22%20href%3D%22%23scrollto.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-anchor-link%3E%0D%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22API%22%20href%3D%22%23API%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-anchor%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%20%20%3Cn-space%20style%3D%22padding-left%3A%20400px%22%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22scrollTo('%23basic.vue')%22%3E%0D%0A%20%20%20%20%20%20Basic%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22scrollTo('%23affix.vue')%22%3E%0D%0A%20%20%20%20%20%20Affix%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20AnchorInst%20%7D%20from%20'naive-ui'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20anchorRef%20%3D%20ref%3CAnchorInst%20%7C%20null%3E(null)%0D%0A%20%20%20%20const%20scrollTo%20%3D%20(href%3A%20string)%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20anchorRef.value%3F.scrollTo(href)%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20anchorRef%2C%0D%0A%20%20%20%20%20%20scrollTo%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20style%3D%22height%3A%20200px%3B%20padding-left%3A%20200px%22%3E%0D%0A%20%20%20%20%3Cn-anchor%0D%0A%20%20%20%20%20%20ref%3D%22anchorRef%22%0D%0A%20%20%20%20%20%20affix%0D%0A%20%20%20%20%20%20%3Atrigger-top%3D%2224%22%0D%0A%20%20%20%20%20%20%3Atop%3D%2288%22%0D%0A%20%20%20%20%20%20%3Abound%3D%2224%22%0D%0A%20%20%20%20%20%20style%3D%22z-index%3A%201%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Demos%22%20href%3D%22%23Demos%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Basic%22%20href%3D%22%23basic.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Ignore-Gap%22%20href%3D%22%23ignore-gap.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Affix%22%20href%3D%22%23affix.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22Scroll%20To%22%20href%3D%22%23scrollto.vue%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-anchor-link%3E%0D%0A%20%20%20%20%20%20%3Cn-anchor-link%20title%3D%22API%22%20href%3D%22%23API%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-anchor%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%20%20%3Cn-space%20style%3D%22padding-left%3A%20400px%22%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22scrollTo('%23basic.vue')%22%3E%0D%0A%20%20%20%20%20%20Basic%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22scrollTo('%23affix.vue')%22%3E%0D%0A%20%20%20%20%20%20Affix%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20anchorRef%20%3D%20ref(null)%3B%0A%20%20%20%20const%20scrollTo%20%3D%20(href)%20%3D%3E%20%7B%0A%20%20%20%20%20%20anchorRef.value%3F.scrollTo(href)%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20anchorRef%2C%0A%20%20%20%20%20%20scrollTo%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[t(" Scroll to ")]),content:n(()=>[]),demo:n(()=>[o("div",r2,[o("div",i2,[e(m,{ref:"anchorRef",affix:"","trigger-top":24,top:88,bound:24,style:{"z-index":"1"}},{default:n(()=>[e(d,{title:"Demos",href:"#Demos"},{default:n(()=>[e(d,{title:"Basic",href:"#basic.vue"}),e(d,{title:"Ignore-Gap",href:"#ignore-gap.vue"}),e(d,{title:"Affix",href:"#affix.vue"}),e(d,{title:"Scroll To",href:"#scrollto.vue"})]),_:1}),e(d,{title:"API",href:"#API"})]),_:1},512)]),e(C,{style:{"padding-left":"400px"}},{default:n(()=>[e(u,{onClick:c[0]||(c[0]=A=>i.scrollTo("#basic.vue"))},{default:n(()=>[t(" Basic ")]),_:1}),e(u,{onClick:c[1]||(c[1]=A=>i.scrollTo("#affix.vue"))},{default:n(()=>[t(" Affix ")]),_:1})]),_:1})])]),_:1})}const c2=v(l2,[["render",a2]]),s2={components:{basicVueDemo:L,ignoreGapVueDemo:Y,affixVueDemo:t2,scrolltoVueDemo:c2},setup(){const i=$(),c=M(()=>!i.value),s=i;return{showAnchor:c,displayMode:G(),wrapperStyle:F(()=>s.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:F(()=>c.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/anchor/demos/enUS/index.demo-entry.md"}}},d2={class:"md-table-wrapper"},D2=o("thead",null,[o("tr",null,[o("th",null,"Name"),o("th",null,"Type"),o("th",null,"Default"),o("th",null,"Description")])],-1),u2=o("td",null,"affix",-1),h2=o("td",null,"bound",-1),f2=o("td",null,"The height of the border when scrolling.",-1),A2=o("td",null,"ignore-gap",-1),p2=o("td",null,"offset-target",-1),_2=o("td",null,"The element or selector used to calc offset of link elements. If you are not scrolling the entire document but only a part of it, you may need to set this.",-1),m2=o("td",null,"show-rail",-1),C2=o("td",null,"Whether to show the sider rail.",-1),g2=o("td",null,"show-background",-1),v2=o("td",null,"Whether to show background of links.",-1),E2=o("td",null,"type",-1),x2=o("td",null,"The type to use.",-1),k2={class:"md-table-wrapper"},F2=o("thead",null,[o("tr",null,[o("th",null,"Name"),o("th",null,"Type"),o("th",null,"Description")])],-1),b2=o("td",null,"scrollTo",-1),w2=o("td",null,"Manually scroll to the specific position.",-1),y2={key:0,style:{width:"192px"}};function B2(i,c,s,l,f,_){const d=r("edit-on-github-header"),m=r("n-p"),u=r("n-h2"),C=r("basicVueDemo"),g=r("ignoreGapVueDemo"),A=r("affixVueDemo"),B=r("scrolltoVueDemo"),I=r("component-demos"),x=r("n-h3"),a=r("n-text"),T=r("n-a"),S=r("router-link"),k=r("n-table"),p=r("n-anchor-link"),P=r("n-anchor");return D(),b("div",{class:"doc",style:w(l.wrapperStyle)},[o("div",{style:w(l.contentStyle)},[e(d,{"relative-url":"D:/Code/naive-ui/src/anchor/demos/enUS/index.demo-entry.md",text:"Anchor"}),e(m,null,{default:n(()=>[t("Tell you where you are.")]),_:1}),e(u,{id:"Demos"},{default:n(()=>[t("Demos")]),_:1}),e(I,{span:1},{default:n(()=>[e(C),e(g),e(A),e(B)]),_:1}),e(u,{id:"API"},{default:n(()=>[t("API")]),_:1}),e(x,{id:"Anchor-Props"},{default:n(()=>[t("Anchor Props")]),_:1}),o("div",d2,[e(k,{"single-column":"",class:"md-table"},{default:n(()=>[D2,o("tbody",null,[o("tr",null,[u2,o("td",null,[e(a,{code:""},{default:n(()=>[t("boolean")]),_:1})]),o("td",null,[e(a,{code:""},{default:n(()=>[t("false")]),_:1})]),o("td",null,[t("If it works like an affix. If set to "),e(a,{code:""},{default:n(()=>[t("true")]),_:1}),t(", it will receive props from "),e(S,{to:"affix#Affix-Props",custom:""},{default:n(({navigate:R,href:V})=>[e(T,{href:V,onClick:R},{default:n(()=>[t("affix")]),_:2},1032,["href","onClick"])]),_:1}),t(".")])]),o("tr",null,[h2,o("td",null,[e(a,{code:""},{default:n(()=>[t("number")]),_:1})]),o("td",null,[e(a,{code:""},{default:n(()=>[t("12")]),_:1})]),f2]),o("tr",null,[A2,o("td",null,[e(a,{code:""},{default:n(()=>[t("boolean")]),_:1})]),o("td",null,[e(a,{code:""},{default:n(()=>[t("false")]),_:1})]),o("td",null,[t("If set to "),e(a,{code:""},{default:n(()=>[t("true")]),_:1}),t(", it will be displayed on the exact href.")])]),o("tr",null,[p2,o("td",null,[e(a,{code:""},{default:n(()=>[t("string | HTMLElement | Window | Document | (() => HTMLElement)")]),_:1})]),o("td",null,[e(a,{code:""},{default:n(()=>[t("document")]),_:1})]),_2]),o("tr",null,[m2,o("td",null,[e(a,{code:""},{default:n(()=>[t("boolean")]),_:1})]),o("td",null,[e(a,{code:""},{default:n(()=>[t("true")]),_:1})]),C2]),o("tr",null,[g2,o("td",null,[e(a,{code:""},{default:n(()=>[t("boolean")]),_:1})]),o("td",null,[e(a,{code:""},{default:n(()=>[t("true")]),_:1})]),v2]),o("tr",null,[E2,o("td",null,[e(a,{code:""},{default:n(()=>[t("'rail' | 'block'")]),_:1})]),o("td",null,[e(a,{code:""},{default:n(()=>[t("'rail'")]),_:1})]),x2])])]),_:1})]),e(x,{id:"Anchor-Methods"},{default:n(()=>[t("Anchor Methods")]),_:1}),o("div",k2,[e(k,{"single-column":"",class:"md-table"},{default:n(()=>[F2,o("tbody",null,[o("tr",null,[b2,o("td",null,[e(a,{code:""},{default:n(()=>[t("(href: string) => void")]),_:1})]),w2])])]),_:1})])],4),l.showAnchor?(D(),b("div",y2,[e(P,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:n(()=>[(l.displayMode,D(),h(p,{key:0,title:"Basic\r",href:"#basic.vue"})),(l.displayMode,D(),h(p,{key:1,title:"Ignore gap\r",href:"#ignore-gap.vue"})),(l.displayMode,D(),h(p,{key:2,title:"Affix\r",href:"#affix.vue"})),(l.displayMode,D(),h(p,{key:3,title:"Scroll to\r",href:"#scrollto.vue"})),(l.displayMode,D(),h(p,{key:4,title:"API",href:"#API"})),(l.displayMode,D(),h(p,{key:5,title:"Anchor Props",href:"#Anchor-Props"})),(l.displayMode,D(),h(p,{key:6,title:"Anchor Methods",href:"#Anchor-Methods"}))]),_:1})])):N("",!0)],4)}const T2=v(s2,[["render",B2]]);export{T2 as default};
