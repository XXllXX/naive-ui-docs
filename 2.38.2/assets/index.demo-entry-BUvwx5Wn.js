import{M as k,a as $,L as T}from"./MdRemove-CWOsqUq5.js";import{j as M,l as y,_ as h,r as t,o as s,i,w as n,g as a,e as o,f as e,u as U,a as L,b as I,c as S,d as R,n as O,h as Z}from"./index-DxZkTPDs.js";const W=M({components:{MdAdd:k,MdRemove:$},setup(){return{value:y(5)}}}),q={class:"demo-card__view"};function G(l,d,A,u,p,_){const m=t("n-avatar"),c=t("n-badge"),r=t("md-add"),D=t("n-icon"),v=t("n-button"),E=t("md-remove"),f=t("n-button-group"),b=t("n-space"),F=t("component-demo");return s(),i(F,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/enUS/basic.demo.vue",title:"Basic","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2215%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20dot%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20'%40vicons%2Fionicons4'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20components%3A%20%7B%0D%0A%20%20%20%20MdAdd%2C%0D%0A%20%20%20%20MdRemove%0D%0A%20%20%7D%2C%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(5)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2215%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20dot%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20%22%40vicons%2Fionicons4%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20MdAdd%2C%0A%20%20%20%20MdRemove%0A%20%20%7D%2C%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(5)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[a(" Basic ")]),content:n(()=>[]),demo:n(()=>[o("div",q,[e(b,{size:24,align:"center"},{default:n(()=>[e(c,{value:l.value,max:15},{default:n(()=>[e(m)]),_:1},8,["value"]),e(c,{value:l.value,dot:""},{default:n(()=>[e(m)]),_:1},8,["value"]),e(f,null,{default:n(()=>[e(v,{onClick:d[0]||(d[0]=B=>l.value=Math.min(16,l.value+1))},{icon:n(()=>[e(D,null,{default:n(()=>[e(r)]),_:1})]),_:1}),e(v,{onClick:d[1]||(d[1]=B=>l.value=Math.max(0,l.value-1))},{icon:n(()=>[e(D,null,{default:n(()=>[e(E)]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})}const H=h(W,[["render",G]]),J={},K={class:"demo-card__view"};function Q(l,d){const A=t("n-text"),u=t("n-p"),p=t("n-avatar"),_=t("n-badge"),m=t("n-space"),c=t("component-demo");return s(),i(c,{"demo-file-name":"type.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/enUS/type.demo.vue",title:"Type","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20dot%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20dot%20type%3D%22error%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20dot%20type%3D%22info%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20dot%20type%3D%22success%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20dot%20type%3D%22warning%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[a(" Type ")]),content:n(()=>[e(u,null,{default:n(()=>[a("Badge has "),e(A,{code:""},{default:n(()=>[a("default")]),_:1}),a(", "),e(A,{code:""},{default:n(()=>[a("error")]),_:1}),a(", "),e(A,{code:""},{default:n(()=>[a("info")]),_:1}),a(", "),e(A,{code:""},{default:n(()=>[a("success")]),_:1}),a(", "),e(A,{code:""},{default:n(()=>[a("warning")]),_:1}),a(" types.")]),_:1})]),demo:n(()=>[o("div",K,[e(m,{size:24,align:"center"},{default:n(()=>[e(_,{dot:""},{default:n(()=>[e(p)]),_:1}),e(_,{dot:"",type:"error"},{default:n(()=>[e(p)]),_:1}),e(_,{dot:"",type:"info"},{default:n(()=>[e(p)]),_:1}),e(_,{dot:"",type:"success"},{default:n(()=>[e(p)]),_:1}),e(_,{dot:"",type:"warning"},{default:n(()=>[e(p)]),_:1})]),_:1})])]),_:1})}const X=h(J,[["render",Q]]),Y={},e0={class:"demo-card__view"};function n0(l,d){const A=t("n-text"),u=t("n-p"),p=t("n-avatar"),_=t("n-badge"),m=t("n-space"),c=t("component-demo");return s(),i(c,{"demo-file-name":"processing.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/enUS/processing.demo.vue",title:"Processing","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20dot%20processing%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%2220%22%20processing%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20dot%20type%3D%22info%22%20processing%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[a(" Processing ")]),content:n(()=>[e(u,null,{default:n(()=>[a("Set "),e(A,{code:""},{default:n(()=>[a("processing")]),_:1}),a(" prop to indicate it is processing.")]),_:1})]),demo:n(()=>[o("div",e0,[e(m,{size:24,align:"center"},{default:n(()=>[e(_,{dot:"",processing:""},{default:n(()=>[e(p)]),_:1}),e(_,{value:20,processing:""},{default:n(()=>[e(p)]),_:1}),e(_,{dot:"",type:"info",processing:""},{default:n(()=>[e(p)]),_:1})]),_:1})])]),_:1})}const t0=h(Y,[["render",n0]]),o0=M({components:{MdAdd:k,MdRemove:$},setup(){return{value:y(0)}}}),a0={class:"demo-card__view"};function l0(l,d,A,u,p,_){const m=t("n-text"),c=t("n-p"),r=t("n-avatar"),D=t("n-badge"),v=t("md-add"),E=t("n-icon"),f=t("n-button"),b=t("md-remove"),F=t("n-button-group"),B=t("n-space"),w=t("component-demo");return s(),i(w,{"demo-file-name":"show-zero.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/enUS/show-zero.demo.vue",title:"Show zero","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20show-zero%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20'%40vicons%2Fionicons4'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20components%3A%20%7B%0D%0A%20%20%20%20MdAdd%2C%0D%0A%20%20%20%20MdRemove%0D%0A%20%20%7D%2C%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(0)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20show-zero%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20%22%40vicons%2Fionicons4%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20MdAdd%2C%0A%20%20%20%20MdRemove%0A%20%20%7D%2C%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(0)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[a(" Show zero ")]),content:n(()=>[e(c,null,{default:n(()=>[a("Set "),e(m,{code:""},{default:n(()=>[a("show-zero")]),_:1}),a(" prop to display zero.")]),_:1})]),demo:n(()=>[o("div",a0,[e(B,{size:24,align:"center"},{default:n(()=>[e(D,{value:l.value},{default:n(()=>[e(r)]),_:1},8,["value"]),e(D,{value:l.value,"show-zero":""},{default:n(()=>[e(r)]),_:1},8,["value"]),e(F,null,{default:n(()=>[e(f,{onClick:d[0]||(d[0]=x=>l.value=Math.min(16,l.value+1))},{icon:n(()=>[e(E,null,{default:n(()=>[e(v)]),_:1})]),_:1}),e(f,{onClick:d[1]||(d[1]=x=>l.value=Math.max(0,l.value-1))},{icon:n(()=>[e(E,null,{default:n(()=>[e(b)]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})}const d0=h(o0,[["render",l0]]),u0=M({components:{MdAdd:k,MdRemove:$},setup(){return{value:y(101)}}}),s0={class:"demo-card__view"};function c0(l,d,A,u,p,_){const m=t("n-text"),c=t("n-p"),r=t("n-avatar"),D=t("n-badge"),v=t("md-add"),E=t("n-icon"),f=t("n-button"),b=t("md-remove"),F=t("n-button-group"),B=t("n-space"),w=t("component-demo");return s(),i(w,{"demo-file-name":"overflow.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/enUS/overflow.demo.vue",title:"Overflow","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20show-zero%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2299%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20show-zero%20%3Amax%3D%22100%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20show-zero%20%3Amax%3D%2210%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20'%40vicons%2Fionicons4'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20components%3A%20%7B%0D%0A%20%20%20%20MdAdd%2C%0D%0A%20%20%20%20MdRemove%0D%0A%20%20%7D%2C%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(101)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20show-zero%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2299%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20show-zero%20%3Amax%3D%22100%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20show-zero%20%3Amax%3D%2210%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20%22%40vicons%2Fionicons4%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20MdAdd%2C%0A%20%20%20%20MdRemove%0A%20%20%7D%2C%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(101)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[a(" Overflow ")]),content:n(()=>[e(c,null,{default:n(()=>[a("Set "),e(m,{code:""},{default:n(()=>[a("max")]),_:1}),a(" prop to handle overflow situation.")]),_:1})]),demo:n(()=>[o("div",s0,[e(B,{size:24,align:"center"},{default:n(()=>[e(D,{value:l.value,"show-zero":""},{default:n(()=>[e(r)]),_:1},8,["value"]),e(D,{value:l.value,max:99},{default:n(()=>[e(r)]),_:1},8,["value"]),e(D,{value:l.value,"show-zero":"",max:100},{default:n(()=>[e(r)]),_:1},8,["value"]),e(D,{value:l.value,"show-zero":"",max:10},{default:n(()=>[e(r)]),_:1},8,["value"]),e(F,null,{default:n(()=>[e(f,{onClick:d[0]||(d[0]=x=>l.value=Math.min(16,l.value+1))},{icon:n(()=>[e(E,null,{default:n(()=>[e(v)]),_:1})]),_:1}),e(f,{onClick:d[1]||(d[1]=x=>l.value=Math.max(0,l.value-1))},{icon:n(()=>[e(E,null,{default:n(()=>[e(b)]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})}const r0=h(u0,[["render",c0]]),i0=M({components:{MdAdd:k,MdRemove:$},setup(){return{value:y(5),show:y(!0)}}}),m0={class:"demo-card__view"};function D0(l,d,A,u,p,_){const m=t("n-avatar"),c=t("n-badge"),r=t("md-add"),D=t("n-icon"),v=t("n-button"),E=t("md-remove"),f=t("n-button-group"),b=t("n-switch"),F=t("n-space"),B=t("component-demo");return s(),i(B,{"demo-file-name":"manual.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/enUS/manual.demo.vue",title:"Controlled visibility","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%20item-style%3D%22display%3A%20flex%3B%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2215%22%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20dot%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22show%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20'%40vicons%2Fionicons4'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20components%3A%20%7B%0D%0A%20%20%20%20MdAdd%2C%0D%0A%20%20%20%20MdRemove%0D%0A%20%20%7D%2C%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(5)%2C%0D%0A%20%20%20%20%20%20show%3A%20ref(true)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%20item-style%3D%22display%3A%20flex%3B%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2215%22%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20dot%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22show%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20%22%40vicons%2Fionicons4%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20MdAdd%2C%0A%20%20%20%20MdRemove%0A%20%20%7D%2C%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(5)%2C%0A%20%20%20%20%20%20show%3A%20ref(true)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[a(" Controlled visibility ")]),content:n(()=>[]),demo:n(()=>[o("div",m0,[e(F,{size:24,align:"center","item-style":"display: flex;"},{default:n(()=>[e(c,{value:l.value,max:15,show:l.show},{default:n(()=>[e(m)]),_:1},8,["value","show"]),e(c,{value:l.value,dot:"",show:l.show},{default:n(()=>[e(m)]),_:1},8,["value","show"]),e(f,null,{default:n(()=>[e(v,{onClick:d[0]||(d[0]=w=>l.value=Math.min(16,l.value+1))},{icon:n(()=>[e(D,null,{default:n(()=>[e(r)]),_:1})]),_:1}),e(v,{onClick:d[1]||(d[1]=w=>l.value=Math.max(0,l.value-1))},{icon:n(()=>[e(D,null,{default:n(()=>[e(E)]),_:1})]),_:1})]),_:1}),e(b,{value:l.show,"onUpdate:value":d[2]||(d[2]=w=>l.show=w)},null,8,["value"])]),_:1})])]),_:1})}const A0=h(i0,[["render",D0]]),p0=M({setup(){return{LockClosedOutline:T}}}),C0={class:"demo-card__view"};function _0(l,d,A,u,p,_){const m=t("n-p"),c=t("n-avatar"),r=t("n-badge"),D=t("n-icon"),v=t("n-space"),E=t("component-demo");return s(),i(E,{"demo-file-name":"custom-content.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/enUS/custom-content.demo.vue",title:"Customizing content","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20value%3D%22new%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20value%3D%22hot%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20processing%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23value%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-icon%20%3Acomponent%3D%22LockClosedOutline%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20LockClosedOutline%20%7D%20from%20'%40vicons%2Fionicons5'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20LockClosedOutline%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%3E%0D%0A%20%20%20%20%3Cn-badge%20value%3D%22new%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20value%3D%22hot%22%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%20%20%3Cn-badge%20processing%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23value%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-icon%20%3Acomponent%3D%22LockClosedOutline%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-badge%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20LockClosedOutline%20%7D%20from%20%22%40vicons%2Fionicons5%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20LockClosedOutline%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[a(" Customizing content ")]),content:n(()=>[e(m,null,{default:n(()=>[a("Insert some custom content in it.")]),_:1})]),demo:n(()=>[o("div",C0,[e(v,{size:24,align:"center"},{default:n(()=>[e(r,{value:"new"},{default:n(()=>[e(c)]),_:1}),e(r,{value:"hot"},{default:n(()=>[e(c)]),_:1}),e(r,{processing:""},{value:n(()=>[e(D,{component:l.LockClosedOutline},null,8,["component"])]),default:n(()=>[e(c)]),_:1})]),_:1})])]),_:1})}const v0=h(p0,[["render",_0]]),E0={},f0={class:"demo-card__view"};function g0(l,d){const A=t("n-avatar"),u=t("n-badge"),p=t("component-demo");return s(),i(p,{"demo-file-name":"color.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/enUS/color.demo.vue",title:"Customizing color","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-badge%20value%3D%2215%22%20color%3D%22grey%22%3E%0D%0A%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%3C%2Fn-badge%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[a(" Customizing color ")]),content:n(()=>[]),demo:n(()=>[o("div",f0,[e(u,{value:"15",color:"grey"},{default:n(()=>[e(A)]),_:1})])]),_:1})}const b0=h(E0,[["render",g0]]),F0=M({components:{MdAdd:k,MdRemove:$},setup(){return{value:y(5)}}}),h0={class:"demo-card__view"};function B0(l,d,A,u,p,_){const m=t("n-badge"),c=t("md-add"),r=t("n-icon"),D=t("n-button"),v=t("md-remove"),E=t("n-button-group"),f=t("n-space"),b=t("component-demo");return s(),i(b,{"demo-file-name":"raw.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/enUS/raw.demo.vue",title:"Raw","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%20item-style%3D%22display%3A%20flex%3B%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2215%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20dot%20%2F%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20'%40vicons%2Fionicons4'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20components%3A%20%7B%0D%0A%20%20%20%20MdAdd%2C%0D%0A%20%20%20%20MdRemove%0D%0A%20%20%7D%2C%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(5)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20%3Asize%3D%2224%22%20align%3D%22center%22%20item-style%3D%22display%3A%20flex%3B%22%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2215%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20dot%20%2F%3E%0D%0A%20%20%20%20%3Cn-button-group%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.min(16%2C%20value%20%2B%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-add%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22value%20%3D%20Math.max(0%2C%20value%20-%201)%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%3Cmd-remove%20%2F%3E%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-button-group%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20MdAdd%2C%20MdRemove%20%7D%20from%20%22%40vicons%2Fionicons4%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20MdAdd%2C%0A%20%20%20%20MdRemove%0A%20%20%7D%2C%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(5)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[a(" Raw ")]),content:n(()=>[]),demo:n(()=>[o("div",h0,[e(f,{size:24,align:"center","item-style":"display: flex;"},{default:n(()=>[e(m,{value:l.value,max:15},null,8,["value"]),e(m,{value:l.value,dot:""},null,8,["value"]),e(E,null,{default:n(()=>[e(D,{onClick:d[0]||(d[0]=F=>l.value=Math.min(16,l.value+1))},{icon:n(()=>[e(r,null,{default:n(()=>[e(c)]),_:1})]),_:1}),e(D,{onClick:d[1]||(d[1]=F=>l.value=Math.max(0,l.value-1))},{icon:n(()=>[e(r,null,{default:n(()=>[e(v)]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})}const w0=h(F0,[["render",B0]]),y0=M({setup(){return{value:y(5),offset:[-17,17]}}}),M0={class:"demo-card__view"};function x0(l,d,A,u,p,_){const m=t("n-avatar"),c=t("n-badge"),r=t("component-demo");return s(),i(r,{"demo-file-name":"offset.vue","relative-url":"D:/Code/naive-ui/src/badge/demos/enUS/offset.demo.vue",title:"Offset","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2215%22%20%3Aoffset%3D%22offset%22%3E%0D%0A%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%3C%2Fn-badge%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(5)%2C%0D%0A%20%20%20%20%20%20offset%3A%20%5B-17%2C%2017%5D%20as%20const%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-badge%20%3Avalue%3D%22value%22%20%3Amax%3D%2215%22%20%3Aoffset%3D%22offset%22%3E%0D%0A%20%20%20%20%3Cn-avatar%20%2F%3E%0D%0A%20%20%3C%2Fn-badge%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(5)%2C%0A%20%20%20%20%20%20offset%3A%20%5B-17%2C%2017%5D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[a(" Offset ")]),content:n(()=>[]),demo:n(()=>[o("div",M0,[e(c,{value:l.value,max:15,offset:l.offset},{default:n(()=>[e(m)]),_:1},8,["value","offset"])])]),_:1})}const k0=h(y0,[["render",x0]]),$0={components:{basicVueDemo:H,typeVueDemo:X,processingVueDemo:t0,showZeroVueDemo:d0,overflowVueDemo:r0,manualVueDemo:A0,customContentVueDemo:v0,colorVueDemo:b0,rawVueDemo:w0,offsetVueDemo:k0},setup(){const l=U(),d=L(()=>!l.value),A=l;return{showAnchor:d,displayMode:I(),wrapperStyle:S(()=>A.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:S(()=>d.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/badge/demos/enUS/index.demo-entry.md"}}},z0={class:"md-table-wrapper"},V0=o("thead",null,[o("tr",null,[o("th",null,"Name"),o("th",null,"Type"),o("th",null,"Default"),o("th",null,"Description"),o("th",null,"Version")])],-1),S0=o("td",null,"color",-1),R0=o("td",null,"Badge color.",-1),O0=o("td",null,null,-1),N0=o("td",null,"dot",-1),j0=o("td",null,"Show badge as dot.",-1),P0=o("td",null,null,-1),T0=o("td",null,"max",-1),U0=o("td",null,"The maximum number of the badge when its value overflows.",-1),L0=o("td",null,null,-1),I0=o("td",null,"offset",-1),Z0=o("td",null,"Offset of the badge from the left and top of the default position.",-1),W0=o("td",null,"2.34.3",-1),q0=o("td",null,"processing",-1),G0=o("td",null,"Show processing status.",-1),H0=o("td",null,null,-1),J0=o("td",null,"show-zero",-1),K0=o("td",null,"Whether to display the badge, even if provided value equals 0.",-1),Q0=o("td",null,null,-1),X0=o("td",null,"show",-1),Y0=o("td",null,"Whether the badge should be shown altogether.",-1),e2=o("td",null,null,-1),n2=o("td",null,"type",-1),t2=o("td",null,"Type of the badge.",-1),o2=o("td",null,null,-1),a2=o("td",null,"value",-1),l2=o("td",null,"Badge's value.",-1),d2=o("td",null,null,-1),u2={class:"md-table-wrapper"},s2=o("thead",null,[o("tr",null,[o("th",null,"Name"),o("th",null,"Parameters"),o("th",null,"Description")])],-1),c2=o("td",null,"default",-1),r2=o("td",null,"Badge's content.",-1),i2={key:0,style:{width:"192px"}};function m2(l,d,A,u,p,_){const m=t("edit-on-github-header"),c=t("n-p"),r=t("n-h2"),D=t("basicVueDemo"),v=t("typeVueDemo"),E=t("processingVueDemo"),f=t("showZeroVueDemo"),b=t("overflowVueDemo"),F=t("manualVueDemo"),B=t("customContentVueDemo"),w=t("colorVueDemo"),x=t("rawVueDemo"),N=t("offsetVueDemo"),j=t("component-demos"),z=t("n-h3"),C=t("n-text"),V=t("n-table"),g=t("n-anchor-link"),P=t("n-anchor");return s(),R("div",{class:"doc",style:O(u.wrapperStyle)},[o("div",{style:O(u.contentStyle)},[e(m,{"relative-url":"D:/Code/naive-ui/src/badge/demos/enUS/index.demo-entry.md",text:"Badge"}),e(c,null,{default:n(()=>[a("I bet you have seen it and know how it should be applied.")]),_:1}),e(r,{id:"Demos"},{default:n(()=>[a("Demos")]),_:1}),e(j,{span:2},{default:n(()=>[e(D),e(v),e(E),e(f),e(b),e(F),e(B),e(w),e(x),e(N)]),_:1}),e(r,{id:"API"},{default:n(()=>[a("API")]),_:1}),e(z,{id:"Badge-Props"},{default:n(()=>[a("Badge Props")]),_:1}),o("div",z0,[e(V,{"single-column":"",class:"md-table"},{default:n(()=>[V0,o("tbody",null,[o("tr",null,[S0,o("td",null,[e(C,{code:""},{default:n(()=>[a("string")]),_:1})]),o("td",null,[e(C,{code:""},{default:n(()=>[a("undefined")]),_:1})]),R0,O0]),o("tr",null,[N0,o("td",null,[e(C,{code:""},{default:n(()=>[a("boolean")]),_:1})]),o("td",null,[e(C,{code:""},{default:n(()=>[a("false")]),_:1})]),j0,P0]),o("tr",null,[T0,o("td",null,[e(C,{code:""},{default:n(()=>[a("number")]),_:1})]),o("td",null,[e(C,{code:""},{default:n(()=>[a("undefined")]),_:1})]),U0,L0]),o("tr",null,[I0,o("td",null,[e(C,{code:""},{default:n(()=>[a("[string | number, string | number]")]),_:1})]),o("td",null,[e(C,{code:""},{default:n(()=>[a("undefined")]),_:1})]),Z0,W0]),o("tr",null,[q0,o("td",null,[e(C,{code:""},{default:n(()=>[a("boolean")]),_:1})]),o("td",null,[e(C,{code:""},{default:n(()=>[a("false")]),_:1})]),G0,H0]),o("tr",null,[J0,o("td",null,[e(C,{code:""},{default:n(()=>[a("boolean")]),_:1})]),o("td",null,[e(C,{code:""},{default:n(()=>[a("false")]),_:1})]),K0,Q0]),o("tr",null,[X0,o("td",null,[e(C,{code:""},{default:n(()=>[a("boolean")]),_:1})]),o("td",null,[e(C,{code:""},{default:n(()=>[a("true")]),_:1})]),Y0,e2]),o("tr",null,[n2,o("td",null,[e(C,{code:""},{default:n(()=>[a("'default' | 'success' | 'error' | 'warning' | 'info'")]),_:1})]),o("td",null,[e(C,{code:""},{default:n(()=>[a("'default'")]),_:1})]),t2,o2]),o("tr",null,[a2,o("td",null,[e(C,{code:""},{default:n(()=>[a("string | number")]),_:1})]),o("td",null,[e(C,{code:""},{default:n(()=>[a("undefined")]),_:1})]),l2,d2])])]),_:1})]),e(z,{id:"Badge-Slots"},{default:n(()=>[a("Badge Slots")]),_:1}),o("div",u2,[e(V,{"single-column":"",class:"md-table"},{default:n(()=>[s2,o("tbody",null,[o("tr",null,[c2,o("td",null,[e(C,{code:""},{default:n(()=>[a("()")]),_:1})]),r2])])]),_:1})])],4),u.showAnchor?(s(),R("div",i2,[e(P,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:n(()=>[(u.displayMode,s(),i(g,{key:0,title:"Basic\r",href:"#basic.vue"})),(u.displayMode,s(),i(g,{key:1,title:"Type\r",href:"#type.vue"})),(u.displayMode,s(),i(g,{key:2,title:"Processing\r",href:"#processing.vue"})),(u.displayMode,s(),i(g,{key:3,title:"Show zero\r",href:"#show-zero.vue"})),(u.displayMode,s(),i(g,{key:4,title:"Overflow\r",href:"#overflow.vue"})),(u.displayMode,s(),i(g,{key:5,title:"Controlled visibility\r",href:"#manual.vue"})),(u.displayMode,s(),i(g,{key:6,title:"Customizing content\r",href:"#custom-content.vue"})),(u.displayMode,s(),i(g,{key:7,title:"Customizing color\r",href:"#color.vue"})),(u.displayMode,s(),i(g,{key:8,title:"Raw\r",href:"#raw.vue"})),(u.displayMode,s(),i(g,{key:9,title:"Offset\r",href:"#offset.vue"})),(u.displayMode,s(),i(g,{key:10,title:"API",href:"#API"})),(u.displayMode,s(),i(g,{key:11,title:"Badge Props",href:"#Badge-Props"})),(u.displayMode,s(),i(g,{key:12,title:"Badge Slots",href:"#Badge-Slots"}))]),_:1})])):Z("",!0)],4)}const p2=h($0,[["render",m2]]);export{p2 as default};
