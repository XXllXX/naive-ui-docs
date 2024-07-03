import{M as k,a as $,L as P}from"./MdRemove-b7a1cccc.js";import{j as w,l as y,_ as h,r as t,o as c,i as D,w as n,g as a,e as o,f as e,u as T,a as I,b as Z,c as N,d as R,n as S,h as U}from"./index-9afb4b71.js";const q=w({components:{MdAdd:k,MdRemove:$},setup(){return{value:y(5)}}}),G={class:"demo-card__view"};function H(l,u,i,d,p,_){const r=t("n-avatar"),s=t("n-badge"),A=t("md-add"),m=t("n-icon"),v=t("n-button"),E=t("md-remove"),f=t("n-button-group"),F=t("n-space"),b=t("component-demo");return c(),D(b,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/zhCN/basic.demo.vue",title:"基础用法","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2215%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20dot%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20'%40vicons%2Fionicons4'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20components%3A%20%7B%0D%0A%20%20%20%20MdAdd%2C%0D%0A%20%20%20%20MdRemove%0D%0A%20%20%7D%2C%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(5)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2215%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20dot%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20%22%40vicons%2Fionicons4%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20MdAdd%2C%0A%20%20%20%20MdRemove%0A%20%20%7D%2C%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(5)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[a(" 基础用法 ")]),content:n(()=>[]),demo:n(()=>[o("div",G,[e(F,{size:24,align:"center"},{default:n(()=>[e(s,{value:l.value,max:15},{default:n(()=>[e(r)]),_:1},8,["value"]),e(s,{value:l.value,dot:""},{default:n(()=>[e(r)]),_:1},8,["value"]),e(f,null,{default:n(()=>[e(v,{onClick:u[0]||(u[0]=B=>l.value=Math.min(16,l.value+1))},{icon:n(()=>[e(m,null,{default:n(()=>[e(A)]),_:1})]),_:1}),e(v,{onClick:u[1]||(u[1]=B=>l.value=Math.max(0,l.value-1))},{icon:n(()=>[e(m,null,{default:n(()=>[e(E)]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})}const J=h(q,[["render",H]]),K={},Q={class:"demo-card__view"};function W(l,u){const i=t("n-text"),d=t("n-p"),p=t("n-avatar"),_=t("n-badge"),r=t("n-space"),s=t("component-demo");return c(),D(s,{"demo-file-name":"type.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/zhCN/type.demo.vue",title:"类型","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20dot%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20dot%20type%3D%22error%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20dot%20type%3D%22info%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20dot%20type%3D%22success%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20dot%20type%3D%22warning%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[a(" 类型 ")]),content:n(()=>[e(d,null,{default:n(()=>[a("标记有 "),e(i,{code:""},{default:n(()=>[a("default")]),_:1}),a("、"),e(i,{code:""},{default:n(()=>[a("error")]),_:1}),a("、"),e(i,{code:""},{default:n(()=>[a("info")]),_:1}),a("、"),e(i,{code:""},{default:n(()=>[a("success")]),_:1}),a("、"),e(i,{code:""},{default:n(()=>[a("warning")]),_:1}),a(" 类型。")]),_:1})]),demo:n(()=>[o("div",Q,[e(r,{size:24,align:"center"},{default:n(()=>[e(_,{dot:""},{default:n(()=>[e(p)]),_:1}),e(_,{dot:"",type:"error"},{default:n(()=>[e(p)]),_:1}),e(_,{dot:"",type:"info"},{default:n(()=>[e(p)]),_:1}),e(_,{dot:"",type:"success"},{default:n(()=>[e(p)]),_:1}),e(_,{dot:"",type:"warning"},{default:n(()=>[e(p)]),_:1})]),_:1})])]),_:1})}const X=h(K,[["render",W]]),Y={},e0={class:"demo-card__view"};function n0(l,u){const i=t("n-text"),d=t("n-p"),p=t("n-avatar"),_=t("n-badge"),r=t("n-space"),s=t("component-demo");return c(),D(s,{"demo-file-name":"processing.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/zhCN/processing.demo.vue",title:"处理中","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20dot%20processing%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%2220%22%20processing%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20dot%20type%3D%22info%22%20processing%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[a(" 处理中 ")]),content:n(()=>[e(d,null,{default:n(()=>[a("设定 "),e(i,{code:""},{default:n(()=>[a("processing")]),_:1}),a(" 来表明正在处理。")]),_:1})]),demo:n(()=>[o("div",e0,[e(r,{size:24,align:"center"},{default:n(()=>[e(_,{dot:"",processing:""},{default:n(()=>[e(p)]),_:1}),e(_,{value:20,processing:""},{default:n(()=>[e(p)]),_:1}),e(_,{dot:"",type:"info",processing:""},{default:n(()=>[e(p)]),_:1})]),_:1})])]),_:1})}const t0=h(Y,[["render",n0]]),o0=w({components:{MdAdd:k,MdRemove:$},setup(){return{value:y(0)}}}),a0={class:"demo-card__view"};function l0(l,u,i,d,p,_){const r=t("n-text"),s=t("n-p"),A=t("n-avatar"),m=t("n-badge"),v=t("md-add"),E=t("n-icon"),f=t("n-button"),F=t("md-remove"),b=t("n-button-group"),B=t("n-space"),M=t("component-demo");return c(),D(M,{"demo-file-name":"show-zero.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/zhCN/show-zero.demo.vue",title:"显示 0","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20show-zero%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20'%40vicons%2Fionicons4'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20components%3A%20%7B%0D%0A%20%20%20%20MdAdd%2C%0D%0A%20%20%20%20MdRemove%0D%0A%20%20%7D%2C%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(0)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20show-zero%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20%22%40vicons%2Fionicons4%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20MdAdd%2C%0A%20%20%20%20MdRemove%0A%20%20%7D%2C%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(0)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[a(" 显示 0 ")]),content:n(()=>[e(s,null,{default:n(()=>[a("设定 "),e(r,{code:""},{default:n(()=>[a("show-zero")]),_:1}),a(" 来显示 0。")]),_:1})]),demo:n(()=>[o("div",a0,[e(B,{size:24,align:"center"},{default:n(()=>[e(m,{value:l.value},{default:n(()=>[e(A)]),_:1},8,["value"]),e(m,{value:l.value,"show-zero":""},{default:n(()=>[e(A)]),_:1},8,["value"]),e(b,null,{default:n(()=>[e(f,{onClick:u[0]||(u[0]=x=>l.value=Math.min(16,l.value+1))},{icon:n(()=>[e(E,null,{default:n(()=>[e(v)]),_:1})]),_:1}),e(f,{onClick:u[1]||(u[1]=x=>l.value=Math.max(0,l.value-1))},{icon:n(()=>[e(E,null,{default:n(()=>[e(F)]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})}const u0=h(o0,[["render",l0]]),d0=w({components:{MdAdd:k,MdRemove:$},setup(){return{value:y(101)}}}),c0={class:"demo-card__view"};function s0(l,u,i,d,p,_){const r=t("n-text"),s=t("n-p"),A=t("n-avatar"),m=t("n-badge"),v=t("md-add"),E=t("n-icon"),f=t("n-button"),F=t("md-remove"),b=t("n-button-group"),B=t("n-space"),M=t("component-demo");return c(),D(M,{"demo-file-name":"overflow.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/zhCN/overflow.demo.vue",title:"溢出","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20show-zero%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2299%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20show-zero%20%3Amax%3D%22100%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20show-zero%20%3Amax%3D%2210%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20'%40vicons%2Fionicons4'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20components%3A%20%7B%0D%0A%20%20%20%20MdAdd%2C%0D%0A%20%20%20%20MdRemove%0D%0A%20%20%7D%2C%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(101)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20show-zero%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2299%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20show-zero%20%3Amax%3D%22100%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20show-zero%20%3Amax%3D%2210%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20%22%40vicons%2Fionicons4%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20MdAdd%2C%0A%20%20%20%20MdRemove%0A%20%20%7D%2C%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(101)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[a(" 溢出 ")]),content:n(()=>[e(s,null,{default:n(()=>[a("设定 "),e(r,{code:""},{default:n(()=>[a("max")]),_:1}),a(" 来处理溢出情况。")]),_:1})]),demo:n(()=>[o("div",c0,[e(B,{size:24,align:"center"},{default:n(()=>[e(m,{value:l.value,"show-zero":""},{default:n(()=>[e(A)]),_:1},8,["value"]),e(m,{value:l.value,max:99},{default:n(()=>[e(A)]),_:1},8,["value"]),e(m,{value:l.value,"show-zero":"",max:100},{default:n(()=>[e(A)]),_:1},8,["value"]),e(m,{value:l.value,"show-zero":"",max:10},{default:n(()=>[e(A)]),_:1},8,["value"]),e(b,null,{default:n(()=>[e(f,{onClick:u[0]||(u[0]=x=>l.value=Math.min(16,l.value+1))},{icon:n(()=>[e(E,null,{default:n(()=>[e(v)]),_:1})]),_:1}),e(f,{onClick:u[1]||(u[1]=x=>l.value=Math.max(0,l.value-1))},{icon:n(()=>[e(E,null,{default:n(()=>[e(F)]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})}const A0=h(d0,[["render",s0]]),D0=w({components:{MdAdd:k,MdRemove:$},setup(){return{value:y(5),show:y(!0)}}}),r0={class:"demo-card__view"};function m0(l,u,i,d,p,_){const r=t("n-avatar"),s=t("n-badge"),A=t("md-add"),m=t("n-icon"),v=t("n-button"),E=t("md-remove"),f=t("n-button-group"),F=t("n-switch"),b=t("n-space"),B=t("component-demo");return c(),D(B,{"demo-file-name":"manual.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/zhCN/manual.demo.vue",title:"受控显示","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%20item-style%3D%22display%3A%20flex%3B%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2215%22%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20dot%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22show%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20'%40vicons%2Fionicons4'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20components%3A%20%7B%0D%0A%20%20%20%20MdAdd%2C%0D%0A%20%20%20%20MdRemove%0D%0A%20%20%7D%2C%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(5)%2C%0D%0A%20%20%20%20%20%20show%3A%20ref(true)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%20item-style%3D%22display%3A%20flex%3B%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2215%22%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20dot%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22show%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20%22%40vicons%2Fionicons4%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20MdAdd%2C%0A%20%20%20%20MdRemove%0A%20%20%7D%2C%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(5)%2C%0A%20%20%20%20%20%20show%3A%20ref(true)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[a(" 受控显示 ")]),content:n(()=>[]),demo:n(()=>[o("div",r0,[e(b,{size:24,align:"center","item-style":"display: flex;"},{default:n(()=>[e(s,{value:l.value,max:15,show:l.show},{default:n(()=>[e(r)]),_:1},8,["value","show"]),e(s,{value:l.value,dot:"",show:l.show},{default:n(()=>[e(r)]),_:1},8,["value","show"]),e(f,null,{default:n(()=>[e(v,{onClick:u[0]||(u[0]=M=>l.value=Math.min(16,l.value+1))},{icon:n(()=>[e(m,null,{default:n(()=>[e(A)]),_:1})]),_:1}),e(v,{onClick:u[1]||(u[1]=M=>l.value=Math.max(0,l.value-1))},{icon:n(()=>[e(m,null,{default:n(()=>[e(E)]),_:1})]),_:1})]),_:1}),e(F,{value:l.show,"onUpdate:value":u[2]||(u[2]=M=>l.show=M)},null,8,["value"])]),_:1})])]),_:1})}const i0=h(D0,[["render",m0]]),p0=w({setup(){return{LockClosedOutline:P}}}),C0={class:"demo-card__view"};function _0(l,u,i,d,p,_){const r=t("n-p"),s=t("n-avatar"),A=t("n-badge"),m=t("n-icon"),v=t("n-space"),E=t("component-demo");return c(),D(E,{"demo-file-name":"custom-content.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/zhCN/custom-content.demo.vue",title:"自定义内容","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20value%3D%22%E6%96%B0%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20value%3D%22%E7%81%AB%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20processing%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23value%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-icon%20%3Acomponent%3D%22LockClosedOutline%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20LockClosedOutline%20%7D%20from%20'%40vicons%2Fionicons5'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20LockClosedOutline%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20value%3D%22%E6%96%B0%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20value%3D%22%E7%81%AB%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20processing%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23value%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-icon%20%3Acomponent%3D%22LockClosedOutline%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20LockClosedOutline%20%7D%20from%20%22%40vicons%2Fionicons5%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20LockClosedOutline%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[a(" 自定义内容 ")]),content:n(()=>[e(r,null,{default:n(()=>[a("在里面插入一些自定义内容。")]),_:1})]),demo:n(()=>[o("div",C0,[e(v,{size:24,align:"center"},{default:n(()=>[e(A,{value:"新"},{default:n(()=>[e(s)]),_:1}),e(A,{value:"火"},{default:n(()=>[e(s)]),_:1}),e(A,{processing:""},{value:n(()=>[e(m,{component:l.LockClosedOutline},null,8,["component"])]),default:n(()=>[e(s)]),_:1})]),_:1})])]),_:1})}const v0=h(p0,[["render",_0]]),E0={},f0={class:"demo-card__view"};function g0(l,u){const i=t("n-avatar"),d=t("n-badge"),p=t("component-demo");return c(),D(p,{"demo-file-name":"color.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/zhCN/color.demo.vue",title:"自定义颜色","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-badge%20value%3D%2215%22%20color%3D%22grey%22%3E%0D%0A%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%3C%2Fn-badge%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[a(" 自定义颜色 ")]),content:n(()=>[]),demo:n(()=>[o("div",f0,[e(d,{value:"15",color:"grey"},{default:n(()=>[e(i)]),_:1})])]),_:1})}const F0=h(E0,[["render",g0]]),b0=w({components:{MdAdd:k,MdRemove:$},setup(){return{value:y(5)}}}),h0={class:"demo-card__view"};function B0(l,u,i,d,p,_){const r=t("n-badge"),s=t("md-add"),A=t("n-icon"),m=t("n-button"),v=t("md-remove"),E=t("n-button-group"),f=t("n-space"),F=t("component-demo");return c(),D(F,{"demo-file-name":"raw.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/zhCN/raw.demo.vue",title:"直接使用","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%20item-style%3D%22display%3A%20flex%3B%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2215%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20dot%20%2F%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20'%40vicons%2Fionicons4'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20components%3A%20%7B%0D%0A%20%20%20%20MdAdd%2C%0D%0A%20%20%20%20MdRemove%0D%0A%20%20%7D%2C%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(5)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%20item-style%3D%22display%3A%20flex%3B%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2215%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20dot%20%2F%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20%22%40vicons%2Fionicons4%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20MdAdd%2C%0A%20%20%20%20MdRemove%0A%20%20%7D%2C%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(5)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[a(" 直接使用 ")]),content:n(()=>[]),demo:n(()=>[o("div",h0,[e(f,{size:24,align:"center","item-style":"display: flex;"},{default:n(()=>[e(r,{value:l.value,max:15},null,8,["value"]),e(r,{value:l.value,dot:""},null,8,["value"]),e(E,null,{default:n(()=>[e(m,{onClick:u[0]||(u[0]=b=>l.value=Math.min(16,l.value+1))},{icon:n(()=>[e(A,null,{default:n(()=>[e(s)]),_:1})]),_:1}),e(m,{onClick:u[1]||(u[1]=b=>l.value=Math.max(0,l.value-1))},{icon:n(()=>[e(A,null,{default:n(()=>[e(v)]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})}const M0=h(b0,[["render",B0]]),y0=w({setup(){return{value:y(5),offset:[-17,17]}}}),w0={class:"demo-card__view"};function x0(l,u,i,d,p,_){const r=t("n-avatar"),s=t("n-badge"),A=t("component-demo");return c(),D(A,{"demo-file-name":"offset.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/zhCN/offset.demo.vue",title:"自定义位置偏移","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2215%22%20%3Aoffset%3D%22offset%22%3E%0D%0A%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%3C%2Fn-badge%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(5)%2C%0D%0A%20%20%20%20%20%20offset%3A%20%5B-17%2C%2017%5D%20as%20const%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2215%22%20%3Aoffset%3D%22offset%22%3E%0D%0A%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%3C%2Fn-badge%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(5)%2C%0A%20%20%20%20%20%20offset%3A%20%5B-17%2C%2017%5D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[a(" 自定义位置偏移 ")]),content:n(()=>[]),demo:n(()=>[o("div",w0,[e(s,{value:l.value,max:15,offset:l.offset},{default:n(()=>[e(r)]),_:1},8,["value","offset"])])]),_:1})}const k0=h(y0,[["render",x0]]),$0={components:{basicVueDemo:J,typeVueDemo:X,processingVueDemo:t0,showZeroVueDemo:u0,overflowVueDemo:A0,manualVueDemo:i0,customContentVueDemo:v0,colorVueDemo:F0,rawVueDemo:M0,offsetVueDemo:k0},setup(){const l=T(),u=I(()=>!l.value),i=l;return{showAnchor:u,displayMode:Z(),wrapperStyle:N(()=>i.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:N(()=>u.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/badge/demos/zhCN/index.demo-entry.md"}}},z0={class:"md-table-wrapper"},V0=o("thead",null,[o("tr",null,[o("th",null,"名称"),o("th",null,"类型"),o("th",null,"默认值"),o("th",null,"说明"),o("th",null,"版本")])],-1),N0=o("td",null,"color",-1),R0=o("td",null,"标记的颜色",-1),S0=o("td",null,null,-1),j0=o("td",null,"dot",-1),O0=o("td",null,"标记是否显示为点",-1),L0=o("td",null,null,-1),P0=o("td",null,"max",-1),T0=o("td",null,"标记最大数来处理溢出情况",-1),I0=o("td",null,null,-1),Z0=o("td",null,"offset",-1),U0=o("td",null,"距默认位置左侧、上方的偏移量",-1),q0=o("td",null,"2.34.3",-1),G0=o("td",null,"processing",-1),H0=o("td",null,"标记显示进度",-1),J0=o("td",null,null,-1),K0=o("td",null,"show-zero",-1),Q0=o("td",null,"标记为 0 时是否显示",-1),W0=o("td",null,null,-1),X0=o("td",null,"show",-1),Y0=o("td",null,"标记受控显示",-1),e2=o("td",null,null,-1),n2=o("td",null,"type",-1),t2=o("td",null,"标记显示类型",-1),o2=o("td",null,null,-1),a2=o("td",null,"value",-1),l2=o("td",null,"标记数量",-1),u2=o("td",null,null,-1),d2={class:"md-table-wrapper"},c2=o("thead",null,[o("tr",null,[o("th",null,"名称"),o("th",null,"参数"),o("th",null,"说明")])],-1),s2=o("td",null,"default",-1),A2=o("td",null,"标记内填充的内容",-1),D2={key:0,style:{width:"192px"}};function r2(l,u,i,d,p,_){const r=t("edit-on-github-header"),s=t("n-p"),A=t("n-h2"),m=t("basicVueDemo"),v=t("typeVueDemo"),E=t("processingVueDemo"),f=t("showZeroVueDemo"),F=t("overflowVueDemo"),b=t("manualVueDemo"),B=t("customContentVueDemo"),M=t("colorVueDemo"),x=t("rawVueDemo"),j=t("offsetVueDemo"),O=t("component-demos"),z=t("n-h3"),C=t("n-text"),V=t("n-table"),g=t("n-anchor-link"),L=t("n-anchor");return c(),R("div",{class:"doc",style:S(d.wrapperStyle)},[o("div",{style:S(d.contentStyle)},[e(r,{"relative-url":"D:/Code/naive-ui/src/badge/demos/zhCN/index.demo-entry.md",text:"标记 Badge"}),e(s,null,{default:n(()=>[a("我敢说你肯定见过这玩意而且知道怎么用它。")]),_:1}),e(A,{id:"演示"},{default:n(()=>[a("演示")]),_:1}),e(O,{span:2},{default:n(()=>[e(m),e(v),e(E),e(f),e(F),e(b),e(B),e(M),e(x),e(j)]),_:1}),e(A,{id:"API"},{default:n(()=>[a("API")]),_:1}),e(z,{id:"Badge-Props"},{default:n(()=>[a("Badge Props")]),_:1}),o("div",z0,[e(V,{"single-column":"",class:"md-table"},{default:n(()=>[V0,o("tbody",null,[o("tr",null,[N0,o("td",null,[e(C,{code:""},{default:n(()=>[a("string")]),_:1})]),o("td",null,[e(C,{code:""},{default:n(()=>[a("undefined")]),_:1})]),R0,S0]),o("tr",null,[j0,o("td",null,[e(C,{code:""},{default:n(()=>[a("boolean")]),_:1})]),o("td",null,[e(C,{code:""},{default:n(()=>[a("false")]),_:1})]),O0,L0]),o("tr",null,[P0,o("td",null,[e(C,{code:""},{default:n(()=>[a("number")]),_:1})]),o("td",null,[e(C,{code:""},{default:n(()=>[a("undefined")]),_:1})]),T0,I0]),o("tr",null,[Z0,o("td",null,[e(C,{code:""},{default:n(()=>[a("[string | number, string | number]")]),_:1})]),o("td",null,[e(C,{code:""},{default:n(()=>[a("undefined")]),_:1})]),U0,q0]),o("tr",null,[G0,o("td",null,[e(C,{code:""},{default:n(()=>[a("boolean")]),_:1})]),o("td",null,[e(C,{code:""},{default:n(()=>[a("false")]),_:1})]),H0,J0]),o("tr",null,[K0,o("td",null,[e(C,{code:""},{default:n(()=>[a("boolean")]),_:1})]),o("td",null,[e(C,{code:""},{default:n(()=>[a("false")]),_:1})]),Q0,W0]),o("tr",null,[X0,o("td",null,[e(C,{code:""},{default:n(()=>[a("boolean")]),_:1})]),o("td",null,[e(C,{code:""},{default:n(()=>[a("true")]),_:1})]),Y0,e2]),o("tr",null,[n2,o("td",null,[e(C,{code:""},{default:n(()=>[a("'default' | 'success' | 'error' | 'warning' | 'info'")]),_:1})]),o("td",null,[e(C,{code:""},{default:n(()=>[a("'default'")]),_:1})]),t2,o2]),o("tr",null,[a2,o("td",null,[e(C,{code:""},{default:n(()=>[a("string | number")]),_:1})]),o("td",null,[e(C,{code:""},{default:n(()=>[a("undefined")]),_:1})]),l2,u2])])]),_:1})]),e(z,{id:"Badge-Slots"},{default:n(()=>[a("Badge Slots")]),_:1}),o("div",d2,[e(V,{"single-column":"",class:"md-table"},{default:n(()=>[c2,o("tbody",null,[o("tr",null,[s2,o("td",null,[e(C,{code:""},{default:n(()=>[a("()")]),_:1})]),A2])])]),_:1})])],4),d.showAnchor?(c(),R("div",D2,[e(L,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:n(()=>[(d.displayMode,c(),D(g,{key:0,title:"基础用法\r",href:"#basic.vue"})),(d.displayMode,c(),D(g,{key:1,title:"类型\r",href:"#type.vue"})),(d.displayMode,c(),D(g,{key:2,title:"处理中\r",href:"#processing.vue"})),(d.displayMode,c(),D(g,{key:3,title:"显示 0\r",href:"#show-zero.vue"})),(d.displayMode,c(),D(g,{key:4,title:"溢出\r",href:"#overflow.vue"})),(d.displayMode,c(),D(g,{key:5,title:"受控显示\r",href:"#manual.vue"})),(d.displayMode,c(),D(g,{key:6,title:"自定义内容\r",href:"#custom-content.vue"})),(d.displayMode,c(),D(g,{key:7,title:"自定义颜色\r",href:"#color.vue"})),(d.displayMode,c(),D(g,{key:8,title:"直接使用\r",href:"#raw.vue"})),(d.displayMode,c(),D(g,{key:9,title:"自定义位置偏移\r",href:"#offset.vue"})),(d.displayMode,c(),D(g,{key:10,title:"API",href:"#API"})),(d.displayMode,c(),D(g,{key:11,title:"Badge Props",href:"#Badge-Props"})),(d.displayMode,c(),D(g,{key:12,title:"Badge Slots",href:"#Badge-Slots"}))]),_:1})])):U("",!0)],4)}const p2=h($0,[["render",r2]]);export{p2 as default};
