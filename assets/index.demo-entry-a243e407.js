import{_ as w,r as s,o as a,i as p,w as t,g as o,f as n,e,j as y,l as v,t as $,u as z,a as N,b as R,c as k,d as b,n as g,h as M}from"./index-9afb4b71.js";import{R as I}from"./Reload-61f76939.js";const H={},P={class:"demo-card__view"};function j(i,d){const u=s("n-text"),c=s("n-p"),D=s("n-spin"),C=s("n-space"),r=s("component-demo");return a(),p(r,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/spin/demos/enUS/basic.demo.vue",title:"Basic","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%3E%0D%0A%20%20%20%20%3Cn-spin%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-spin%20size%3D%22medium%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-spin%20size%3D%22large%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[o(" Basic ")]),content:t(()=>[n(c,null,{default:t(()=>[o("Here are "),n(u,{code:""},{default:t(()=>[o("small")]),_:1}),o(", "),n(u,{code:""},{default:t(()=>[o("medium")]),_:1}),o(" and "),n(u,{code:""},{default:t(()=>[o("large")]),_:1}),o(" spins.")]),_:1})]),demo:t(()=>[e("div",P,[n(C,null,{default:t(()=>[n(D,{size:"small"}),n(D,{size:"medium"}),n(D,{size:"large"})]),_:1})])]),_:1})}const U=w(H,[["render",j]]),Y=y({setup(){return{show:v(!1)}}}),T={class:"demo-card__view"};function W(i,d,u,c,D,C){const r=s("n-p"),l=s("n-alert"),_=s("n-spin"),m=s("n-button"),f=s("n-space"),h=s("component-demo");return a(),p(h,{"demo-file-name":"wrap.vue","relative-url":"D:/Code/naive-ui/src/spin/demos/enUS/wrap.demo.vue",title:"Wrap","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-spin%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Cn-alert%20title%3D%22La%20La%20La%22%20type%3D%22success%22%3E%0D%0A%20%20%20%20%20%20%20%20Leave%20it%20till%20tomorrow%20to%20unpack%20my%20case.%20Honey%20disconnect%20the%20phone.%0D%0A%20%20%20%20%20%20%3C%2Fn-alert%3E%0D%0A%20%20%20%20%3C%2Fn-spin%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22show%20%3D%20!show%22%3E%0D%0A%20%20%20%20%20%20Click%20to%20Spin%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20show%3A%20ref(false)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-spin%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Cn-alert%20title%3D%22La%20La%20La%22%20type%3D%22success%22%3E%0D%0A%20%20%20%20%20%20%20%20Leave%20it%20till%20tomorrow%20to%20unpack%20my%20case.%20Honey%20disconnect%20the%20phone.%0D%0A%20%20%20%20%20%20%3C%2Fn-alert%3E%0D%0A%20%20%20%20%3C%2Fn-spin%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22show%20%3D%20!show%22%3E%0D%0A%20%20%20%20%20%20Click%20to%20Spin%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20show%3A%20ref(false)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[o(" Wrap ")]),content:t(()=>[n(r,null,{default:t(()=>[o("You can wrap a component inside spin.")]),_:1})]),demo:t(()=>[e("div",T,[n(f,{vertical:""},{default:t(()=>[n(_,{show:i.show},{default:t(()=>[n(l,{title:"La La La",type:"success"},{default:t(()=>[o(" Leave it till tomorrow to unpack my case. Honey disconnect the phone. ")]),_:1})]),_:1},8,["show"]),n(m,{onClick:d[0]||(d[0]=E=>i.show=!i.show)},{default:t(()=>[o(" Click to Spin ")]),_:1})]),_:1})])]),_:1})}const O=w(Y,[["render",W]]),q=y({setup(){return{show:v(!1)}}}),G={class:"demo-card__view"};function J(i,d,u,c,D,C){const r=s("n-p"),l=s("n-alert"),_=s("n-spin"),m=s("n-button"),f=s("n-space"),h=s("component-demo");return a(),p(h,{"demo-file-name":"description.vue","relative-url":"D:/Code/naive-ui/src/spin/demos/enUS/description.demo.vue",title:"Description","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-spin%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Cn-alert%20title%3D%22La%20La%20La%22%20type%3D%22success%22%3E%0D%0A%20%20%20%20%20%20%20%20Leave%20it%20till%20tomorrow%20to%20unpack%20my%20case.%20Honey%20disconnect%20the%20phone.%0D%0A%20%20%20%20%20%20%3C%2Fn-alert%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23description%3E%0D%0A%20%20%20%20%20%20%20%20You%20know%20how%20lucky%20you%20are.%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-spin%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22show%20%3D%20!show%22%3E%0D%0A%20%20%20%20%20%20Click%20to%20Spin%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20show%3A%20ref(false)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-spin%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Cn-alert%20title%3D%22La%20La%20La%22%20type%3D%22success%22%3E%0D%0A%20%20%20%20%20%20%20%20Leave%20it%20till%20tomorrow%20to%20unpack%20my%20case.%20Honey%20disconnect%20the%20phone.%0D%0A%20%20%20%20%20%20%3C%2Fn-alert%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23description%3E%0D%0A%20%20%20%20%20%20%20%20You%20know%20how%20lucky%20you%20are.%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-spin%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22show%20%3D%20!show%22%3E%0D%0A%20%20%20%20%20%20Click%20to%20Spin%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20show%3A%20ref(false)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[o(" Description ")]),content:t(()=>[n(r,null,{default:t(()=>[o("You can add some description under the spin.")]),_:1})]),demo:t(()=>[e("div",G,[n(f,{vertical:""},{default:t(()=>[n(_,{show:i.show},{description:t(()=>[o(" You know how lucky you are. ")]),default:t(()=>[n(l,{title:"La La La",type:"success"},{default:t(()=>[o(" Leave it till tomorrow to unpack my case. Honey disconnect the phone. ")]),_:1})]),_:1},8,["show"]),n(m,{onClick:d[0]||(d[0]=E=>i.show=!i.show)},{default:t(()=>[o(" Click to Spin ")]),_:1})]),_:1})])]),_:1})}const K=w(q,[["render",J]]),Q=y({components:{Reload:I},setup(){return{show:v(!1)}}}),X={class:"demo-card__view"};function Z(i,d,u,c,D,C){const r=s("Reload"),l=s("n-icon"),_=s("n-spin"),m=s("component-demo");return a(),p(m,{"demo-file-name":"customize-icon.vue","relative-url":"D:/Code/naive-ui/src/spin/demos/enUS/customize-icon.demo.vue",title:"Customize icon","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-spin%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3CReload%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-spin%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%2C%20defineComponent%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20Reload%20%7D%20from%20'%40vicons%2Fionicons5'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20components%3A%20%7B%0D%0A%20%20%20%20Reload%0D%0A%20%20%7D%2C%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20show%3A%20ref(false)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-spin%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3CReload%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-spin%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20ref%2C%20defineComponent%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20Reload%20%7D%20from%20%22%40vicons%2Fionicons5%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20Reload%0A%20%20%7D%2C%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20show%3A%20ref(false)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[o(" Customize icon ")]),content:t(()=>[]),demo:t(()=>[e("div",X,[n(_,{show:i.show},{icon:t(()=>[n(l,null,{default:t(()=>[n(r)]),_:1})]),_:1},8,["show"])])]),_:1})}const e0=w(Q,[["render",Z]]),t0=y({setup(){return{show:v(!1)}}}),n0={class:"demo-card__view"};function o0(i,d,u,c,D,C){const r=s("n-p"),l=s("n-alert"),_=s("n-spin"),m=s("n-button"),f=s("n-space"),h=s("component-demo");return a(),p(h,{"demo-file-name":"delay.vue","relative-url":"D:/Code/naive-ui/src/spin/demos/enUS/delay.demo.vue",title:"Delay","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-spin%20%3Ashow%3D%22show%22%20%3Adelay%3D%221000%22%3E%0D%0A%20%20%20%20%20%20%3Cn-alert%20title%3D%22La%20La%20La%22%20type%3D%22success%22%3E%0D%0A%20%20%20%20%20%20%20%20Leave%20it%20till%20tomorrow%20to%20unpack%20my%20case.%20Honey%20disconnect%20the%20phone.%0D%0A%20%20%20%20%20%20%3C%2Fn-alert%3E%0D%0A%20%20%20%20%3C%2Fn-spin%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22show%20%3D%20!show%22%3E%0D%0A%20%20%20%20%20%20%7B%7B%20show%20%3F%20'Click%20to%20stop%20Spin'%20%3A%20'Click%20to%20Spin'%20%7D%7D%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20show%3A%20ref(false)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-spin%20%3Ashow%3D%22show%22%20%3Adelay%3D%221000%22%3E%0D%0A%20%20%20%20%20%20%3Cn-alert%20title%3D%22La%20La%20La%22%20type%3D%22success%22%3E%0D%0A%20%20%20%20%20%20%20%20Leave%20it%20till%20tomorrow%20to%20unpack%20my%20case.%20Honey%20disconnect%20the%20phone.%0D%0A%20%20%20%20%20%20%3C%2Fn-alert%3E%0D%0A%20%20%20%20%3C%2Fn-spin%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22show%20%3D%20!show%22%3E%0D%0A%20%20%20%20%20%20%7B%7B%20show%20%3F%20'Click%20to%20stop%20Spin'%20%3A%20'Click%20to%20Spin'%20%7D%7D%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20show%3A%20ref(false)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[o(" Delay ")]),content:t(()=>[n(r,null,{default:t(()=>[o("You can specify a delay for displaying spin. If spinning ends during delay, spin won't appear.")]),_:1})]),demo:t(()=>[e("div",n0,[n(f,{vertical:""},{default:t(()=>[n(_,{show:i.show,delay:1e3},{default:t(()=>[n(l,{title:"La La La",type:"success"},{default:t(()=>[o(" Leave it till tomorrow to unpack my case. Honey disconnect the phone. ")]),_:1})]),_:1},8,["show"]),n(m,{onClick:d[0]||(d[0]=E=>i.show=!i.show)},{default:t(()=>[o($(i.show?"Click to stop Spin":"Click to Spin"),1)]),_:1})]),_:1})])]),_:1})}const s0=w(t0,[["render",o0]]),l0={components:{basicVueDemo:U,wrapVueDemo:O,descriptionVueDemo:K,customizeIconVueDemo:e0,delayVueDemo:s0},setup(){const i=z(),d=N(()=>!i.value),u=i;return{showAnchor:d,displayMode:R(),wrapperStyle:k(()=>u.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:k(()=>d.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/spin/demos/enUS/index.demo-entry.md"}}},i0={class:"md-table-wrapper"},c0=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Description")])],-1),a0=e("td",null,"description",-1),d0=e("td",null,"Description of the spin.",-1),p0=e("td",null,"rotate",-1),r0=e("td",null,"Specify whether icon rotates, only working for custom icon.",-1),u0=e("td",null,"size",-1),m0=e("td",null,"Size of the spin.",-1),_0=e("td",null,"show",-1),D0=e("td",null,"Specify whether spin is active when spin has content inside. It won't work if you just use spin itself.",-1),A0=e("td",null,"stroke-width",-1),f0=e("td",null,"Relative width of spin's stroke, assuming the outer radius of spin is 100.",-1),h0=e("td",null,"stroke",-1),C0=e("td",null,"Color of the spin.",-1),w0=e("td",null,"delay",-1),E0=e("td",null,"Specifies a delay in milliseconds for loading state (prevent flush).",-1),y0={class:"md-table-wrapper"},v0=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Parameters"),e("th",null,"Description")])],-1),B0=e("td",null,"default",-1),F0=e("td",null,"If set, spin will wrap the content.",-1),k0=e("td",null,"description",-1),b0=e("td",null,"Description of the spin.",-1),g0=e("td",null,"icon",-1),S0=e("td",null,"Customize the spin icon.",-1),L0={key:0,style:{width:"192px"}};function x0(i,d,u,c,D,C){const r=s("edit-on-github-header"),l=s("n-text"),_=s("n-p"),m=s("n-h2"),f=s("basicVueDemo"),h=s("wrapVueDemo"),E=s("descriptionVueDemo"),S=s("customizeIconVueDemo"),L=s("delayVueDemo"),x=s("component-demos"),B=s("n-h3"),F=s("n-table"),A=s("n-anchor-link"),V=s("n-anchor");return a(),b("div",{class:"doc",style:g(c.wrapperStyle)},[e("div",{style:g(c.contentStyle)},[n(r,{"relative-url":"D:/Code/naive-ui/src/spin/demos/enUS/index.demo-entry.md",text:"Spin"}),n(_,null,{default:t(()=>[o("It could've been called "),n(l,{code:""},{default:t(()=>[o("loading")]),_:1}),o(", but why is it called "),n(l,{code:""},{default:t(()=>[o("spin")]),_:1}),o("? Because there is another internal component with less props already named "),n(l,{code:""},{default:t(()=>[o("loading")]),_:1}),o(".")]),_:1}),n(m,{id:"Demos"},{default:t(()=>[o("Demos")]),_:1}),n(x,{span:2},{default:t(()=>[n(f),n(h),n(E),n(S),n(L)]),_:1}),n(m,{id:"API"},{default:t(()=>[o("API")]),_:1}),n(B,{id:"Spin-Props"},{default:t(()=>[o("Spin Props")]),_:1}),e("div",i0,[n(F,{"single-column":"",class:"md-table"},{default:t(()=>[c0,e("tbody",null,[e("tr",null,[a0,e("td",null,[n(l,{code:""},{default:t(()=>[o("string")]),_:1})]),e("td",null,[n(l,{code:""},{default:t(()=>[o("undefined")]),_:1})]),d0]),e("tr",null,[p0,e("td",null,[n(l,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(l,{code:""},{default:t(()=>[o("true")]),_:1})]),r0]),e("tr",null,[u0,e("td",null,[n(l,{code:""},{default:t(()=>[o("'small' | 'medium' | 'large' | number")]),_:1})]),e("td",null,[n(l,{code:""},{default:t(()=>[o("'medium'")]),_:1})]),m0]),e("tr",null,[_0,e("td",null,[n(l,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(l,{code:""},{default:t(()=>[o("true")]),_:1})]),D0]),e("tr",null,[A0,e("td",null,[n(l,{code:""},{default:t(()=>[o("number")]),_:1})]),e("td",null,[n(l,{code:""},{default:t(()=>[o("undefined")]),_:1})]),f0]),e("tr",null,[h0,e("td",null,[n(l,{code:""},{default:t(()=>[o("string")]),_:1})]),e("td",null,[n(l,{code:""},{default:t(()=>[o("undefined")]),_:1})]),C0]),e("tr",null,[w0,e("td",null,[n(l,{code:""},{default:t(()=>[o("number")]),_:1})]),e("td",null,[n(l,{code:""},{default:t(()=>[o("undefined")]),_:1})]),E0])])]),_:1})]),n(B,{id:"Spin-Slots"},{default:t(()=>[o("Spin Slots")]),_:1}),e("div",y0,[n(F,{"single-column":"",class:"md-table"},{default:t(()=>[v0,e("tbody",null,[e("tr",null,[B0,e("td",null,[n(l,{code:""},{default:t(()=>[o("()")]),_:1})]),F0]),e("tr",null,[k0,e("td",null,[n(l,{code:""},{default:t(()=>[o("()")]),_:1})]),b0]),e("tr",null,[g0,e("td",null,[n(l,{code:""},{default:t(()=>[o("()")]),_:1})]),S0])])]),_:1})])],4),c.showAnchor?(a(),b("div",L0,[n(V,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(c.displayMode,a(),p(A,{key:0,title:"Basic\r",href:"#basic.vue"})),(c.displayMode,a(),p(A,{key:1,title:"Wrap\r",href:"#wrap.vue"})),(c.displayMode,a(),p(A,{key:2,title:"Description\r",href:"#description.vue"})),(c.displayMode,a(),p(A,{key:3,title:"Customize icon\r",href:"#customize-icon.vue"})),(c.displayMode,a(),p(A,{key:4,title:"Delay\r",href:"#delay.vue"})),(c.displayMode,a(),p(A,{key:5,title:"API",href:"#API"})),(c.displayMode,a(),p(A,{key:6,title:"Spin Props",href:"#Spin-Props"})),(c.displayMode,a(),p(A,{key:7,title:"Spin Slots",href:"#Spin-Slots"}))]),_:1})])):M("",!0)],4)}const z0=w(l0,[["render",x0]]);export{z0 as default};
