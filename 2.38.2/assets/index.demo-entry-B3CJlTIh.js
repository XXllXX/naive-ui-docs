import{_ as h,r as s,o as c,i as a,w as t,g as o,f as n,e,j as w,l as v,t as z,u as N,a as M,b as R,c as g,d as S,n as x,h as L}from"./index-DxZkTPDs.js";import{R as P}from"./Reload-BA6csuhn.js";const j={},I={class:"demo-card__view"};function O(l,i){const p=s("n-text"),d=s("n-p"),_=s("n-spin"),B=s("n-space"),E=s("component-demo");return c(),a(E,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/spin/demos/zhCN/basic.demo.vue",title:"基础用法","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%3E%0D%0A%20%20%20%20%3Cn-spin%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-spin%20size%3D%22medium%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-spin%20size%3D%22large%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[o(" 基础用法 ")]),content:t(()=>[n(d,null,{default:t(()=>[o("有 "),n(p,{code:""},{default:t(()=>[o("small")]),_:1}),o("、"),n(p,{code:""},{default:t(()=>[o("medium")]),_:1}),o(" 和 "),n(p,{code:""},{default:t(()=>[o("large")]),_:1}),o(" 的 Spin.")]),_:1})]),demo:t(()=>[e("div",I,[n(B,null,{default:t(()=>[n(_,{size:"small"}),n(_,{size:"medium"}),n(_,{size:"large"})]),_:1})])]),_:1})}const T=h(j,[["render",O]]),q=w({setup(){return{show:v(!1)}}}),G={class:"demo-card__view"};function H(l,i,p,d,_,B){const E=s("n-p"),D=s("n-alert"),r=s("n-spin"),A=s("n-button"),C=s("n-space"),f=s("component-demo");return c(),a(f,{"demo-file-name":"wrap.vue","relative-url":"D:/Code/naive-ui/src/spin/demos/zhCN/wrap.demo.vue",title:"填充内容","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-spin%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Cn-alert%20title%3D%22%E5%95%A6%E5%95%A6%E5%95%A6%22%20type%3D%22success%22%3E%0D%0A%20%20%20%20%20%20%20%20%E6%98%8E%E5%A4%A9%E5%86%8D%E6%89%93%E5%BC%80%E8%A1%8C%E6%9D%8E%E7%AE%B1%E3%80%82%E5%AE%9D%E8%B4%9D%EF%BC%8C%E6%8C%82%E7%94%B5%E8%AF%9D%E5%95%A6%E3%80%82%0D%0A%20%20%20%20%20%20%3C%2Fn-alert%3E%0D%0A%20%20%20%20%3C%2Fn-spin%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22show%20%3D%20!show%22%3E%0D%0A%20%20%20%20%20%20%E7%82%B9%E5%87%BB%E6%9D%A5%E8%BD%AC%E5%9C%88%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20show%3A%20ref(false)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-spin%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Cn-alert%20title%3D%22%E5%95%A6%E5%95%A6%E5%95%A6%22%20type%3D%22success%22%3E%0D%0A%20%20%20%20%20%20%20%20%E6%98%8E%E5%A4%A9%E5%86%8D%E6%89%93%E5%BC%80%E8%A1%8C%E6%9D%8E%E7%AE%B1%E3%80%82%E5%AE%9D%E8%B4%9D%EF%BC%8C%E6%8C%82%E7%94%B5%E8%AF%9D%E5%95%A6%E3%80%82%0D%0A%20%20%20%20%20%20%3C%2Fn-alert%3E%0D%0A%20%20%20%20%3C%2Fn-spin%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22show%20%3D%20!show%22%3E%0D%0A%20%20%20%20%20%20%E7%82%B9%E5%87%BB%E6%9D%A5%E8%BD%AC%E5%9C%88%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20show%3A%20ref(false)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[o(" 填充内容 ")]),content:t(()=>[n(E,null,{default:t(()=>[o("你可以把其他内容包裹在 Spin 中。")]),_:1})]),demo:t(()=>[e("div",G,[n(C,{vertical:""},{default:t(()=>[n(r,{show:l.show},{default:t(()=>[n(D,{title:"啦啦啦",type:"success"},{default:t(()=>[o(" 明天再打开行李箱。宝贝，挂电话啦。 ")]),_:1})]),_:1},8,["show"]),n(A,{onClick:i[0]||(i[0]=F=>l.show=!l.show)},{default:t(()=>[o(" 点击来转圈 ")]),_:1})]),_:1})])]),_:1})}const J=h(q,[["render",H]]),K=w({setup(){return{show:v(!1)}}}),Q={class:"demo-card__view"};function U(l,i,p,d,_,B){const E=s("n-p"),D=s("n-alert"),r=s("n-spin"),A=s("n-button"),C=s("n-space"),f=s("component-demo");return c(),a(f,{"demo-file-name":"description.vue","relative-url":"D:/Code/naive-ui/src/spin/demos/zhCN/description.demo.vue",title:"文字信息","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-spin%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Cn-alert%20title%3D%22%E5%95%A6%E5%95%A6%E5%95%A6%22%20type%3D%22success%22%3E%0D%0A%20%20%20%20%20%20%20%20%E6%98%8E%E5%A4%A9%E5%86%8D%E6%89%93%E5%BC%80%E8%A1%8C%E6%9D%8E%E7%AE%B1%E3%80%82%E5%AE%9D%E8%B4%9D%EF%BC%8C%E6%8C%82%E7%94%B5%E8%AF%9D%E5%95%A6%E3%80%82%0D%0A%20%20%20%20%20%20%3C%2Fn-alert%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23description%3E%0D%0A%20%20%20%20%20%20%20%20%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E4%BD%A0%E6%9C%89%E5%A4%9A%E5%B9%B8%E8%BF%90%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-spin%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22show%20%3D%20!show%22%3E%0D%0A%20%20%20%20%20%20%E7%82%B9%E5%87%BB%E6%9D%A5%E8%BD%AC%E5%9C%88%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20show%3A%20ref(false)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-spin%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Cn-alert%20title%3D%22%E5%95%A6%E5%95%A6%E5%95%A6%22%20type%3D%22success%22%3E%0D%0A%20%20%20%20%20%20%20%20%E6%98%8E%E5%A4%A9%E5%86%8D%E6%89%93%E5%BC%80%E8%A1%8C%E6%9D%8E%E7%AE%B1%E3%80%82%E5%AE%9D%E8%B4%9D%EF%BC%8C%E6%8C%82%E7%94%B5%E8%AF%9D%E5%95%A6%E3%80%82%0D%0A%20%20%20%20%20%20%3C%2Fn-alert%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23description%3E%0D%0A%20%20%20%20%20%20%20%20%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E4%BD%A0%E6%9C%89%E5%A4%9A%E5%B9%B8%E8%BF%90%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-spin%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22show%20%3D%20!show%22%3E%0D%0A%20%20%20%20%20%20%E7%82%B9%E5%87%BB%E6%9D%A5%E8%BD%AC%E5%9C%88%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20show%3A%20ref(false)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[o(" 文字信息 ")]),content:t(()=>[n(E,null,{default:t(()=>[o("你可以在圈圈的下面放一点文字信息。")]),_:1})]),demo:t(()=>[e("div",Q,[n(C,{vertical:""},{default:t(()=>[n(r,{show:l.show},{description:t(()=>[o(" 你不知道你有多幸运 ")]),default:t(()=>[n(D,{title:"啦啦啦",type:"success"},{default:t(()=>[o(" 明天再打开行李箱。宝贝，挂电话啦。 ")]),_:1})]),_:1},8,["show"]),n(A,{onClick:i[0]||(i[0]=F=>l.show=!l.show)},{default:t(()=>[o(" 点击来转圈 ")]),_:1})]),_:1})])]),_:1})}const W=h(K,[["render",U]]),X=w({components:{Reload:P},setup(){return{show:v(!1)}}}),Y={class:"demo-card__view"};function Z(l,i,p,d,_,B){const E=s("Reload"),D=s("n-icon"),r=s("n-spin"),A=s("component-demo");return c(),a(A,{"demo-file-name":"customize-icon.vue","relative-url":"D:/Code/naive-ui/src/spin/demos/zhCN/customize-icon.demo.vue",title:"自定义图标","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-spin%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3CReload%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-spin%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%2C%20defineComponent%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20Reload%20%7D%20from%20'%40vicons%2Fionicons5'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20components%3A%20%7B%0D%0A%20%20%20%20Reload%0D%0A%20%20%7D%2C%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20show%3A%20ref(false)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-spin%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3CReload%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-spin%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20ref%2C%20defineComponent%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20Reload%20%7D%20from%20%22%40vicons%2Fionicons5%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20Reload%0A%20%20%7D%2C%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20show%3A%20ref(false)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[o(" 自定义图标 ")]),content:t(()=>[]),demo:t(()=>[e("div",Y,[n(r,{show:l.show},{icon:t(()=>[n(D,null,{default:t(()=>[n(E)]),_:1})]),_:1},8,["show"])])]),_:1})}const e0=h(X,[["render",Z]]),t0=w({setup(){return{show:v(!1)}}}),n0={class:"demo-card__view"};function o0(l,i,p,d,_,B){const E=s("n-p"),D=s("n-alert"),r=s("n-spin"),A=s("n-button"),C=s("n-space"),f=s("component-demo");return c(),a(f,{"demo-file-name":"delay.vue","relative-url":"D:/Code/naive-ui/src/spin/demos/zhCN/delay.demo.vue",title:"延迟","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-spin%20%3Ashow%3D%22show%22%20%3Adelay%3D%221000%22%3E%0D%0A%20%20%20%20%20%20%3Cn-alert%20title%3D%22La%20La%20La%22%20type%3D%22success%22%3E%0D%0A%20%20%20%20%20%20%20%20%E6%98%8E%E5%A4%A9%E5%86%8D%E6%89%93%E5%BC%80%E8%A1%8C%E6%9D%8E%E7%AE%B1%E3%80%82%E5%AE%9D%E8%B4%9D%EF%BC%8C%E6%8C%82%E7%94%B5%E8%AF%9D%E5%95%A6%E3%80%82%0D%0A%20%20%20%20%20%20%3C%2Fn-alert%3E%0D%0A%20%20%20%20%3C%2Fn-spin%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22show%20%3D%20!show%22%3E%0D%0A%20%20%20%20%20%20%7B%7B%20show%20%3F%20'%E4%B8%8D%E8%A6%81%E5%86%8D%E8%BD%AC%E5%95%A6'%20%3A%20'%E7%82%B9%E5%87%BB%E6%9D%A5%E8%BD%AC%E5%9C%88'%20%7D%7D%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20show%3A%20ref(false)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-spin%20%3Ashow%3D%22show%22%20%3Adelay%3D%221000%22%3E%0D%0A%20%20%20%20%20%20%3Cn-alert%20title%3D%22La%20La%20La%22%20type%3D%22success%22%3E%0D%0A%20%20%20%20%20%20%20%20%E6%98%8E%E5%A4%A9%E5%86%8D%E6%89%93%E5%BC%80%E8%A1%8C%E6%9D%8E%E7%AE%B1%E3%80%82%E5%AE%9D%E8%B4%9D%EF%BC%8C%E6%8C%82%E7%94%B5%E8%AF%9D%E5%95%A6%E3%80%82%0D%0A%20%20%20%20%20%20%3C%2Fn-alert%3E%0D%0A%20%20%20%20%3C%2Fn-spin%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22show%20%3D%20!show%22%3E%0D%0A%20%20%20%20%20%20%7B%7B%20show%20%3F%20'%E4%B8%8D%E8%A6%81%E5%86%8D%E8%BD%AC%E5%95%A6'%20%3A%20'%E7%82%B9%E5%87%BB%E6%9D%A5%E8%BD%AC%E5%9C%88'%20%7D%7D%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20show%3A%20ref(false)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[o(" 延迟 ")]),content:t(()=>[n(E,null,{default:t(()=>[o("你可以设置一个显示延迟时间。在延迟时间到达前结束，Spin 将不会显示")]),_:1})]),demo:t(()=>[e("div",n0,[n(C,{vertical:""},{default:t(()=>[n(r,{show:l.show,delay:1e3},{default:t(()=>[n(D,{title:"La La La",type:"success"},{default:t(()=>[o(" 明天再打开行李箱。宝贝，挂电话啦。 ")]),_:1})]),_:1},8,["show"]),n(A,{onClick:i[0]||(i[0]=F=>l.show=!l.show)},{default:t(()=>[o(z(l.show?"不要再转啦":"点击来转圈"),1)]),_:1})]),_:1})])]),_:1})}const s0=h(t0,[["render",o0]]),u0={components:{basicVueDemo:T,wrapVueDemo:J,descriptionVueDemo:W,customizeIconVueDemo:e0,delayVueDemo:s0},setup(){const l=N(),i=M(()=>!l.value),p=l;return{showAnchor:i,displayMode:R(),wrapperStyle:g(()=>p.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:g(()=>i.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/spin/demos/zhCN/index.demo-entry.md"}}},l0={class:"md-table-wrapper"},d0=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"类型"),e("th",null,"默认值"),e("th",null,"说明"),e("th",null,"版本")])],-1),c0=e("td",null,"content-class",-1),i0=e("td",null,"Spin 内容的类名",-1),a0=e("td",null,"2.36.0",-1),E0=e("td",null,"content-style",-1),p0=e("td",null,"Spin 内容的样式",-1),r0=e("td",null,"2.36.0",-1),D0=e("td",null,"description",-1),A0=e("td",null,"Spin 的文字信息",-1),_0=e("td",null,null,-1),m0=e("td",null,"rotate",-1),C0=e("td",null,"自定义的加载图标是否有旋转动画",-1),f0=e("td",null,null,-1),B0=e("td",null,"size",-1),h0=e("td",null,"Spin 的尺寸",-1),F0=e("td",null,null,-1),w0=e("td",null,"show",-1),v0=e("td",null,"在填入内容的情况下 Spin 是否激活，直接使用 Spin 时不生效",-1),y0=e("td",null,null,-1),b0=e("td",null,"stroke-width",-1),g0=e("td",null,"Spin 边缘的相对宽度，假定 Spin 的外侧半径是 100",-1),S0=e("td",null,null,-1),x0=e("td",null,"stroke",-1),k0=e("td",null,"Spin 的颜色",-1),V0=e("td",null,null,-1),$0=e("td",null,"delay",-1),z0=e("td",null,"延迟显示加载效果的时间, 单位为毫秒（避免闪烁）",-1),N0=e("td",null,null,-1),M0={class:"md-table-wrapper"},R0=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"参数"),e("th",null,"说明")])],-1),L0=e("td",null,"default",-1),P0=e("td",null,"如果填入，Spin 会包裹填入的内容",-1),j0=e("td",null,"description",-1),I0=e("td",null,"Spin 的文字信息",-1),O0=e("td",null,"icon",-1),T0=e("td",null,"自定义的加载图标",-1),q0={key:0,style:{width:"192px"}};function G0(l,i,p,d,_,B){const E=s("edit-on-github-header"),D=s("n-p"),r=s("n-h2"),A=s("basicVueDemo"),C=s("wrapVueDemo"),f=s("descriptionVueDemo"),F=s("customizeIconVueDemo"),k=s("delayVueDemo"),V=s("component-demos"),y=s("n-h3"),u=s("n-text"),b=s("n-table"),m=s("n-anchor-link"),$=s("n-anchor");return c(),S("div",{class:"doc",style:x(d.wrapperStyle)},[e("div",{style:x(d.contentStyle)},[n(E,{"relative-url":"D:/Code/naive-ui/src/spin/demos/zhCN/index.demo-entry.md",text:"加载 Spin"}),n(D,null,{default:t(()=>[o("按理说它叫做 Loading 也可以，但是为啥叫 Spin 呢？因为还有一个属性更少的内部组件叫 Loading。")]),_:1}),n(r,{id:"演示"},{default:t(()=>[o("演示")]),_:1}),n(V,{span:2},{default:t(()=>[n(A),n(C),n(f),n(F),n(k)]),_:1}),n(r,{id:"API"},{default:t(()=>[o("API")]),_:1}),n(y,{id:"Spin-Props"},{default:t(()=>[o("Spin Props")]),_:1}),e("div",l0,[n(b,{"single-column":"",class:"md-table"},{default:t(()=>[d0,e("tbody",null,[e("tr",null,[c0,e("td",null,[n(u,{code:""},{default:t(()=>[o("string")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("undefined")]),_:1})]),i0,a0]),e("tr",null,[E0,e("td",null,[n(u,{code:""},{default:t(()=>[o("string | Object")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("undefined")]),_:1})]),p0,r0]),e("tr",null,[D0,e("td",null,[n(u,{code:""},{default:t(()=>[o("string")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("undefined")]),_:1})]),A0,_0]),e("tr",null,[m0,e("td",null,[n(u,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("true")]),_:1})]),C0,f0]),e("tr",null,[B0,e("td",null,[n(u,{code:""},{default:t(()=>[o("'small' | 'medium' | 'large' | number")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("'medium'")]),_:1})]),h0,F0]),e("tr",null,[w0,e("td",null,[n(u,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("true")]),_:1})]),v0,y0]),e("tr",null,[b0,e("td",null,[n(u,{code:""},{default:t(()=>[o("number")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("undefined")]),_:1})]),g0,S0]),e("tr",null,[x0,e("td",null,[n(u,{code:""},{default:t(()=>[o("string")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("undefined")]),_:1})]),k0,V0]),e("tr",null,[$0,e("td",null,[n(u,{code:""},{default:t(()=>[o("number")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("undefined")]),_:1})]),z0,N0])])]),_:1})]),n(y,{id:"Spin-Slots"},{default:t(()=>[o("Spin Slots")]),_:1}),e("div",M0,[n(b,{"single-column":"",class:"md-table"},{default:t(()=>[R0,e("tbody",null,[e("tr",null,[L0,e("td",null,[n(u,{code:""},{default:t(()=>[o("()")]),_:1})]),P0]),e("tr",null,[j0,e("td",null,[n(u,{code:""},{default:t(()=>[o("()")]),_:1})]),I0]),e("tr",null,[O0,e("td",null,[n(u,{code:""},{default:t(()=>[o("()")]),_:1})]),T0])])]),_:1})])],4),d.showAnchor?(c(),S("div",q0,[n($,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(d.displayMode,c(),a(m,{key:0,title:"基础用法\r",href:"#basic.vue"})),(d.displayMode,c(),a(m,{key:1,title:"填充内容\r",href:"#wrap.vue"})),(d.displayMode,c(),a(m,{key:2,title:"文字信息\r",href:"#description.vue"})),(d.displayMode,c(),a(m,{key:3,title:"自定义图标\r",href:"#customize-icon.vue"})),(d.displayMode,c(),a(m,{key:4,title:"延迟\r",href:"#delay.vue"})),(d.displayMode,c(),a(m,{key:5,title:"API",href:"#API"})),(d.displayMode,c(),a(m,{key:6,title:"Spin Props",href:"#Spin-Props"})),(d.displayMode,c(),a(m,{key:7,title:"Spin Slots",href:"#Spin-Slots"}))]),_:1})])):L("",!0)],4)}const K0=h(u0,[["render",G0]]);export{K0 as default};
