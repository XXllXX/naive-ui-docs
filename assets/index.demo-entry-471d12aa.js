import{j as B,l as f,_ as h,r as o,o as r,i as l,w as n,g as s,f as t,e,v as b,u as V,a as M,b as N,c as R,d as S,n as k,h as P}from"./index-09f026e5.js";const I=B({setup(){return{active:f(!1)}}}),U={class:"demo-card__view"},z={style:{"font-variant-numeric":"tabular-nums"}};function T(a,i,A,c,w,E){const D=o("n-p"),d=o("n-countdown"),p=o("n-switch"),m=o("n-space"),_=o("component-demo");return r(),l(_,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/countdown/demos/enUS/basic.demo.vue",title:"Basic","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%3E%0D%0A%20%20%20%20%3Cspan%20style%3D%22font-variant-numeric%3A%20tabular-nums%22%3E%0D%0A%20%20%20%20%20%20%3Cn-countdown%20%3Aduration%3D%225000%22%20%3Aactive%3D%22active%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22active%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20active%3A%20ref(false)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%3E%0D%0A%20%20%20%20%3Cspan%20style%3D%22font-variant-numeric%3A%20tabular-nums%22%3E%0D%0A%20%20%20%20%20%20%3Cn-countdown%20%3Aduration%3D%225000%22%20%3Aactive%3D%22active%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22active%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20active%3A%20ref(false)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[s(" Basic ")]),content:n(()=>[t(D,null,{default:n(()=>[s("A countdown string.")]),_:1})]),demo:n(()=>[e("div",U,[t(m,null,{default:n(()=>[e("span",z,[t(d,{duration:5e3,active:a.active},null,8,["active"])]),t(p,{value:a.active,"onUpdate:value":i[0]||(i[0]=C=>a.active=C)},null,8,["value"])]),_:1})])]),_:1})}const j=h(I,[["render",T]]),W=B({setup(){return{active:f(!1)}}}),q={class:"demo-card__view"},G={style:{"font-variant-numeric":"tabular-nums","white-space":"nowrap"}},H={style:{"font-variant-numeric":"tabular-nums","white-space":"nowrap"}},J={style:{"font-variant-numeric":"tabular-nums","white-space":"nowrap"}},K={style:{"font-variant-numeric":"tabular-nums","white-space":"nowrap"}};function L(a,i,A,c,w,E){const D=o("n-p"),d=o("n-countdown"),p=o("n-switch"),m=o("n-space"),_=o("component-demo");return r(),l(_,{"demo-file-name":"precision.vue","relative-url":"D:/Code/naive-ui/src/countdown/demos/enUS/precision.demo.vue",title:"Precision","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%3E%0D%0A%20%20%20%20%3Cspan%20style%3D%22font-variant-numeric%3A%20tabular-nums%3B%20white-space%3A%20nowrap%22%3E%0D%0A%20%20%20%20%20%20%3Cn-countdown%20%3Aduration%3D%223600%20*%201000%22%20%3Aactive%3D%22active%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20style%3D%22font-variant-numeric%3A%20tabular-nums%3B%20white-space%3A%20nowrap%22%3E%0D%0A%20%20%20%20%20%20%3Cn-countdown%20%3Aduration%3D%223600%20*%201000%22%20%3Aactive%3D%22active%22%20%3Aprecision%3D%221%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20style%3D%22font-variant-numeric%3A%20tabular-nums%3B%20white-space%3A%20nowrap%22%3E%0D%0A%20%20%20%20%20%20%3Cn-countdown%20%3Aduration%3D%223600%20*%201000%22%20%3Aactive%3D%22active%22%20%3Aprecision%3D%222%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20style%3D%22font-variant-numeric%3A%20tabular-nums%3B%20white-space%3A%20nowrap%22%3E%0D%0A%20%20%20%20%20%20%3Cn-countdown%20%3Aduration%3D%223600%20*%201000%22%20%3Aactive%3D%22active%22%20%3Aprecision%3D%223%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22active%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20active%3A%20ref(false)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%3E%0D%0A%20%20%20%20%3Cspan%20style%3D%22font-variant-numeric%3A%20tabular-nums%3B%20white-space%3A%20nowrap%22%3E%0D%0A%20%20%20%20%20%20%3Cn-countdown%20%3Aduration%3D%223600%20*%201000%22%20%3Aactive%3D%22active%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20style%3D%22font-variant-numeric%3A%20tabular-nums%3B%20white-space%3A%20nowrap%22%3E%0D%0A%20%20%20%20%20%20%3Cn-countdown%20%3Aduration%3D%223600%20*%201000%22%20%3Aactive%3D%22active%22%20%3Aprecision%3D%221%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20style%3D%22font-variant-numeric%3A%20tabular-nums%3B%20white-space%3A%20nowrap%22%3E%0D%0A%20%20%20%20%20%20%3Cn-countdown%20%3Aduration%3D%223600%20*%201000%22%20%3Aactive%3D%22active%22%20%3Aprecision%3D%222%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20style%3D%22font-variant-numeric%3A%20tabular-nums%3B%20white-space%3A%20nowrap%22%3E%0D%0A%20%20%20%20%20%20%3Cn-countdown%20%3Aduration%3D%223600%20*%201000%22%20%3Aactive%3D%22active%22%20%3Aprecision%3D%223%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22active%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20active%3A%20ref(false)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[s(" Precision ")]),content:n(()=>[t(D,null,{default:n(()=>[s("🧐🧐🧐")]),_:1})]),demo:n(()=>[e("div",q,[t(m,null,{default:n(()=>[e("span",G,[t(d,{duration:3600*1e3,active:a.active},null,8,["active"])]),e("span",H,[t(d,{duration:3600*1e3,active:a.active,precision:1},null,8,["active"])]),e("span",J,[t(d,{duration:3600*1e3,active:a.active,precision:2},null,8,["active"])]),e("span",K,[t(d,{duration:3600*1e3,active:a.active,precision:3},null,8,["active"])]),t(p,{value:a.active,"onUpdate:value":i[0]||(i[0]=C=>a.active=C)},null,8,["value"])]),_:1})])]),_:1})}const O=h(W,[["render",L]]),Q=B({setup(){return{renderCountdown:({hours:i,minutes:A,seconds:c})=>[b("span",{style:"display: inline-block; transform: rotate(90deg);"},[String(i).padStart(2,"0")]),":",b("span",{style:"display: inline-block; transform: rotate(180deg);"},[String(A).padStart(2,"0")]),":",b("span",{style:"display: inline-block; transform: rotate(270deg);"},[String(c).padStart(2,"0")])],active:f(!1)}}}),X={class:"demo-card__view"};function Y(a,i,A,c,w,E){const D=o("n-p"),d=o("n-countdown"),p=o("n-statistic"),m=o("n-switch"),_=o("n-space"),C=o("component-demo");return r(),l(C,{"demo-file-name":"render.vue","relative-url":"D:/Code/naive-ui/src/countdown/demos/enUS/render.demo.vue",title:"Customizing countdown","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20item-style%3D%22display%3A%20flex%3B%20align-items%3A%20center%3B%22%3E%0D%0A%20%20%20%20%3Cn-statistic%20label%3D%22I'm%20free%20to%20be%20whatever%20I%22%20tabular-nums%3E%0D%0A%20%20%20%20%20%20%3Cn-countdown%0D%0A%20%20%20%20%20%20%20%20%3Arender%3D%22renderCountdown%22%0D%0A%20%20%20%20%20%20%20%20%3Aduration%3D%22996%20*%201000%22%0D%0A%20%20%20%20%20%20%20%20%3Aactive%3D%22active%22%0D%0A%20%20%20%20%20%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-statistic%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22active%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%2C%20h%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20CountdownProps%20%7D%20from%20'naive-ui'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20renderCountdown%3A%20CountdownProps%5B'render'%5D%20%3D%20(%7B%0D%0A%20%20%20%20%20%20hours%2C%0D%0A%20%20%20%20%20%20minutes%2C%0D%0A%20%20%20%20%20%20seconds%0D%0A%20%20%20%20%7D)%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20return%20%5B%0D%0A%20%20%20%20%20%20%20%20h(%0D%0A%20%20%20%20%20%20%20%20%20%20'span'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3A%20'display%3A%20inline-block%3B%20transform%3A%20rotate(90deg)%3B'%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%5BString(hours).padStart(2%2C%20'0')%5D%0D%0A%20%20%20%20%20%20%20%20)%2C%0D%0A%20%20%20%20%20%20%20%20'%3A'%2C%0D%0A%20%20%20%20%20%20%20%20h(%0D%0A%20%20%20%20%20%20%20%20%20%20'span'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3A%20'display%3A%20inline-block%3B%20transform%3A%20rotate(180deg)%3B'%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%5BString(minutes).padStart(2%2C%20'0')%5D%0D%0A%20%20%20%20%20%20%20%20)%2C%0D%0A%20%20%20%20%20%20%20%20'%3A'%2C%0D%0A%20%20%20%20%20%20%20%20h(%0D%0A%20%20%20%20%20%20%20%20%20%20'span'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3A%20'display%3A%20inline-block%3B%20transform%3A%20rotate(270deg)%3B'%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%5BString(seconds).padStart(2%2C%20'0')%5D%0D%0A%20%20%20%20%20%20%20%20)%0D%0A%20%20%20%20%20%20%5D%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20renderCountdown%2C%0D%0A%20%20%20%20%20%20active%3A%20ref(false)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20item-style%3D%22display%3A%20flex%3B%20align-items%3A%20center%3B%22%3E%0D%0A%20%20%20%20%3Cn-statistic%20label%3D%22I'm%20free%20to%20be%20whatever%20I%22%20tabular-nums%3E%0D%0A%20%20%20%20%20%20%3Cn-countdown%0D%0A%20%20%20%20%20%20%20%20%3Arender%3D%22renderCountdown%22%0D%0A%20%20%20%20%20%20%20%20%3Aduration%3D%22996%20*%201000%22%0D%0A%20%20%20%20%20%20%20%20%3Aactive%3D%22active%22%0D%0A%20%20%20%20%20%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-statistic%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22active%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%2C%20h%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20renderCountdown%20%3D%20(%7B%0A%20%20%20%20%20%20hours%2C%0A%20%20%20%20%20%20minutes%2C%0A%20%20%20%20%20%20seconds%0A%20%20%20%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20%20%20return%20%5B%0A%20%20%20%20%20%20%20%20h(%0A%20%20%20%20%20%20%20%20%20%20%22span%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3A%20%22display%3A%20inline-block%3B%20transform%3A%20rotate(90deg)%3B%22%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5BString(hours).padStart(2%2C%20%220%22)%5D%0A%20%20%20%20%20%20%20%20)%2C%0A%20%20%20%20%20%20%20%20%22%3A%22%2C%0A%20%20%20%20%20%20%20%20h(%0A%20%20%20%20%20%20%20%20%20%20%22span%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3A%20%22display%3A%20inline-block%3B%20transform%3A%20rotate(180deg)%3B%22%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5BString(minutes).padStart(2%2C%20%220%22)%5D%0A%20%20%20%20%20%20%20%20)%2C%0A%20%20%20%20%20%20%20%20%22%3A%22%2C%0A%20%20%20%20%20%20%20%20h(%0A%20%20%20%20%20%20%20%20%20%20%22span%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3A%20%22display%3A%20inline-block%3B%20transform%3A%20rotate(270deg)%3B%22%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5BString(seconds).padStart(2%2C%20%220%22)%5D%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%5D%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20renderCountdown%2C%0A%20%20%20%20%20%20active%3A%20ref(false)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[s(" Customizing countdown ")]),content:n(()=>[t(D,null,{default:n(()=>[s("Do whatever you want.")]),_:1})]),demo:n(()=>[e("div",X,[t(_,{"item-style":"display: flex; align-items: center;"},{default:n(()=>[t(p,{label:"I'm free to be whatever I","tabular-nums":""},{default:n(()=>[t(d,{render:a.renderCountdown,duration:996*1e3,active:a.active},null,8,["render","active"])]),_:1}),t(m,{value:a.active,"onUpdate:value":i[0]||(i[0]=y=>a.active=y)},null,8,["value"])]),_:1})])]),_:1})}const Z=h(Q,[["render",Y]]),e0=B({setup(){const a=f(!0),i=f();function A(){var c;(c=i.value)==null||c.reset()}return{active:a,countdown:i,handleReset:A}}}),t0={class:"demo-card__view"},n0={style:{"font-variant-numeric":"tabular-nums"}};function o0(a,i,A,c,w,E){const D=o("n-countdown"),d=o("n-button"),p=o("n-switch"),m=o("n-space"),_=o("component-demo");return r(),l(_,{"demo-file-name":"reset.vue","relative-url":"D:/Code/naive-ui/src/countdown/demos/enUS/reset.demo.vue",title:"Reset","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%3E%0D%0A%20%20%20%20%3Cspan%20style%3D%22font-variant-numeric%3A%20tabular-nums%22%3E%0D%0A%20%20%20%20%20%20%3Cn-countdown%20ref%3D%22countdown%22%20%3Aduration%3D%2286400000%22%20%3Aactive%3D%22active%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cn-button%20size%3D%22tiny%22%20%40click%3D%22handleReset%22%3E%0D%0A%20%20%20%20%20%20Reset%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22active%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20CountdownInst%20%7D%20from%20'naive-ui'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20activeRef%20%3D%20ref(true)%0D%0A%20%20%20%20const%20countdownRef%20%3D%20ref%3CCountdownInst%20%7C%20null%3E()%0D%0A%20%20%20%20function%20handleReset%20()%20%7B%0D%0A%20%20%20%20%20%20countdownRef.value%3F.reset()%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20active%3A%20activeRef%2C%0D%0A%20%20%20%20%20%20countdown%3A%20countdownRef%2C%0D%0A%20%20%20%20%20%20handleReset%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%3E%0D%0A%20%20%20%20%3Cspan%20style%3D%22font-variant-numeric%3A%20tabular-nums%22%3E%0D%0A%20%20%20%20%20%20%3Cn-countdown%20ref%3D%22countdown%22%20%3Aduration%3D%2286400000%22%20%3Aactive%3D%22active%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cn-button%20size%3D%22tiny%22%20%40click%3D%22handleReset%22%3E%0D%0A%20%20%20%20%20%20Reset%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22active%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20activeRef%20%3D%20ref(true)%3B%0A%20%20%20%20const%20countdownRef%20%3D%20ref()%3B%0A%20%20%20%20function%20handleReset()%20%7B%0A%20%20%20%20%20%20countdownRef.value%3F.reset()%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20active%3A%20activeRef%2C%0A%20%20%20%20%20%20countdown%3A%20countdownRef%2C%0A%20%20%20%20%20%20handleReset%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[s(" Reset ")]),content:n(()=>[]),demo:n(()=>[e("div",t0,[t(m,null,{default:n(()=>[e("span",n0,[t(D,{ref:"countdown",duration:864e5,active:a.active},null,8,["active"])]),t(d,{size:"tiny",onClick:a.handleReset},{default:n(()=>[s(" Reset ")]),_:1},8,["onClick"]),t(p,{value:a.active,"onUpdate:value":i[0]||(i[0]=C=>a.active=C)},null,8,["value"])]),_:1})])]),_:1})}const a0=h(e0,[["render",o0]]),s0={components:{basicVueDemo:j,precisionVueDemo:O,renderVueDemo:Z,resetVueDemo:a0},setup(){const a=V(),i=M(()=>!a.value),A=a;return{showAnchor:i,displayMode:N(),wrapperStyle:R(()=>A.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:R(()=>i.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/countdown/demos/enUS/index.demo-entry.md"}}},i0={class:"md-table-wrapper"},c0=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Description"),e("th",null,"Version")])],-1),r0=e("td",null,"active",-1),d0=e("td",null,"Whether countdown is active.",-1),u0=e("td",null,"2.23.2",-1),l0=e("td",null,"duration",-1),A0=e("td",null,"The duration of the countdown (unit is millisecond). Not reactive.",-1),p0=e("td",null,"2.23.2",-1),D0=e("td",null,"precision",-1),m0=e("td",null,"The precision of the second.",-1),_0=e("td",null,"2.23.2",-1),C0=e("td",null,"render",-1),v0=e("td",null,"Time's render function",-1),f0=e("td",null,"2.23.2",-1),h0=e("td",null,"on-finish",-1),w0=e("td",null,"The callback on countdown is finished.",-1),E0=e("td",null,"2.23.2",-1),B0={class:"md-table-wrapper"},y0=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description"),e("th",null,"Version")])],-1),b0=e("td",null,"reset",-1),F0=e("td",null,"Reset countdown.",-1),g0=e("td",null,"2.31.0",-1),R0={key:0,style:{width:"192px"}};function S0(a,i,A,c,w,E){const D=o("edit-on-github-header"),d=o("n-p"),p=o("n-h2"),m=o("basicVueDemo"),_=o("precisionVueDemo"),C=o("renderVueDemo"),y=o("resetVueDemo"),x=o("component-demos"),F=o("n-h3"),u=o("n-text"),g=o("n-table"),v=o("n-anchor-link"),$=o("n-anchor");return r(),S("div",{class:"doc",style:k(c.wrapperStyle)},[e("div",{style:k(c.contentStyle)},[t(D,{"relative-url":"D:/Code/naive-ui/src/countdown/demos/enUS/index.demo-entry.md",text:"Countdown"}),t(d,null,{default:n(()=>[s("A second is passed after a second has passed.")]),_:1}),t(p,{id:"Demos"},{default:n(()=>[s("Demos")]),_:1}),t(x,{span:2},{default:n(()=>[t(m),t(_),t(C),t(y)]),_:1}),t(p,{id:"API"},{default:n(()=>[s("API")]),_:1}),t(F,{id:"Countdown-Props"},{default:n(()=>[s("Countdown Props")]),_:1}),e("div",i0,[t(g,{"single-column":"",class:"md-table"},{default:n(()=>[c0,e("tbody",null,[e("tr",null,[r0,e("td",null,[t(u,{code:""},{default:n(()=>[s("boolean")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[s("true")]),_:1})]),d0,u0]),e("tr",null,[l0,e("td",null,[t(u,{code:""},{default:n(()=>[s("number")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[s("0")]),_:1})]),A0,p0]),e("tr",null,[D0,e("td",null,[t(u,{code:""},{default:n(()=>[s("0 | 1 | 2 | 3")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[s("0")]),_:1})]),m0,_0]),e("tr",null,[C0,e("td",null,[t(u,{code:""},{default:n(()=>[s("(props: { hours: number, minutes: number, seconds: number, milliseconds: number }) => VNodeChild")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[s("undefined")]),_:1})]),v0,f0]),e("tr",null,[h0,e("td",null,[t(u,{code:""},{default:n(()=>[s("() => void")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[s("undefined")]),_:1})]),w0,E0])])]),_:1})]),t(F,{id:"Countdown-Methods"},{default:n(()=>[s("Countdown Methods")]),_:1}),e("div",B0,[t(g,{"single-column":"",class:"md-table"},{default:n(()=>[y0,e("tbody",null,[e("tr",null,[b0,e("td",null,[t(u,{code:""},{default:n(()=>[s("() => void")]),_:1})]),F0,g0])])]),_:1})])],4),c.showAnchor?(r(),S("div",R0,[t($,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:n(()=>[(c.displayMode,r(),l(v,{key:0,title:"Basic\r",href:"#basic.vue"})),(c.displayMode,r(),l(v,{key:1,title:"Precision\r",href:"#precision.vue"})),(c.displayMode,r(),l(v,{key:2,title:"Customizing countdown\r",href:"#render.vue"})),(c.displayMode,r(),l(v,{key:3,title:"Reset\r",href:"#reset.vue"})),(c.displayMode,r(),l(v,{key:4,title:"API",href:"#API"})),(c.displayMode,r(),l(v,{key:5,title:"Countdown Props",href:"#Countdown-Props"})),(c.displayMode,r(),l(v,{key:6,title:"Countdown Methods",href:"#Countdown-Methods"}))]),_:1})])):P("",!0)],4)}const x0=h(s0,[["render",S0]]);export{x0 as default};
