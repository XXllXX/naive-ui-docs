import{j as h,l as b,_ as E,r as l,o as r,i as m,w as n,g as o,e,f as t,u as R,a as P,b as O,c as $,d as w,n as z,h as I}from"./index-09f026e5.js";import{_ as L}from"./AnimalCat24Regular-fc277e36.js";const q=h({setup(){return{value:b(50)}}}),G={class:"demo-card__view"};function H(u,a,_,d,C,f){const A=l("n-slider"),p=l("n-input-number"),c=l("n-space"),D=l("component-demo");return r(),m(D,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/zhCN/basic.demo.vue",title:"基础用法","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Astep%3D%2210%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(50)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Astep%3D%2210%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(50)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" 基础用法 ")]),content:n(()=>[]),demo:n(()=>[e("div",G,[t(c,{vertical:""},{default:n(()=>[t(A,{value:u.value,"onUpdate:value":a[0]||(a[0]=i=>u.value=i),step:10},null,8,["value"]),t(p,{value:u.value,"onUpdate:value":a[1]||(a[1]=i=>u.value=i),size:"small"},null,8,["value"])]),_:1})])]),_:1})}const J=E(q,[["render",H]]),K=h({setup(){return{value:b([50,70])}}}),Q={class:"demo-card__view"};function W(u,a,_,d,C,f){const A=l("n-slider"),p=l("n-input-number"),c=l("n-space"),D=l("component-demo");return r(),m(D,{"demo-file-name":"range.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/zhCN/range.demo.vue",title:"范围","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20range%20%3Astep%3D%221%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%5B0%5D%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%5B1%5D%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(%5B50%2C%2070%5D)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20range%20%3Astep%3D%221%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%5B0%5D%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%5B1%5D%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(%5B50%2C%2070%5D)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" 范围 ")]),content:n(()=>[]),demo:n(()=>[e("div",Q,[t(c,{vertical:""},{default:n(()=>[t(A,{value:u.value,"onUpdate:value":a[0]||(a[0]=i=>u.value=i),range:"",step:1},null,8,["value"]),t(c,null,{default:n(()=>[t(p,{value:u.value[0],"onUpdate:value":a[1]||(a[1]=i=>u.value[0]=i),size:"small"},null,8,["value"]),t(p,{value:u.value[1],"onUpdate:value":a[2]||(a[2]=i=>u.value[1]=i),size:"small"},null,8,["value"])]),_:1})]),_:1})])]),_:1})}const X=E(K,[["render",W]]),Y=h({setup(){return{value:b([50,70]),marks:{34:"太棒了",75:"不错"}}}}),Z={class:"demo-card__view"};function e0(u,a,_,d,C,f){const A=l("n-slider"),p=l("n-input-number"),c=l("n-space"),D=l("component-demo");return r(),m(D,{"demo-file-name":"mark.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/zhCN/mark.demo.vue",title:"标记","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20range%20%3Amarks%3D%22marks%22%20%3Astep%3D%2210%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%5B0%5D%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%5B1%5D%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(%5B50%2C%2070%5D)%2C%0D%0A%20%20%20%20%20%20marks%3A%20%7B%0D%0A%20%20%20%20%20%20%20%2034%3A%20'%E5%A4%AA%E6%A3%92%E4%BA%86'%2C%0D%0A%20%20%20%20%20%20%20%2075%3A%20'%E4%B8%8D%E9%94%99'%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20range%20%3Amarks%3D%22marks%22%20%3Astep%3D%2210%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%5B0%5D%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%5B1%5D%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(%5B50%2C%2070%5D)%2C%0A%20%20%20%20%20%20marks%3A%20%7B%0A%20%20%20%20%20%20%20%2034%3A%20%22%E5%A4%AA%E6%A3%92%E4%BA%86%22%2C%0A%20%20%20%20%20%20%20%2075%3A%20%22%E4%B8%8D%E9%94%99%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" 标记 ")]),content:n(()=>[]),demo:n(()=>[e("div",Z,[t(c,{vertical:""},{default:n(()=>[t(A,{value:u.value,"onUpdate:value":a[0]||(a[0]=i=>u.value=i),range:"",marks:u.marks,step:10},null,8,["value","marks"]),t(c,null,{default:n(()=>[t(p,{value:u.value[0],"onUpdate:value":a[1]||(a[1]=i=>u.value[0]=i),size:"small"},null,8,["value"]),t(p,{value:u.value[1],"onUpdate:value":a[2]||(a[2]=i=>u.value[1]=i),size:"small"},null,8,["value"])]),_:1})]),_:1})])]),_:1})}const t0=E(Y,[["render",e0]]),n0=h({setup(){return{value:b(0),marks:{0:"0°C",20:"20°C",37:"37°C",100:"100°C"}}}}),l0={class:"demo-card__view"};function o0(u,a,_,d,C,f){const A=l("n-text"),p=l("n-p"),c=l("n-slider"),D=l("n-space"),i=l("component-demo");return r(),m(i,{"demo-file-name":"restrict-selectable-values.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/zhCN/restrict-selectable-values.demo.vue",title:"限制可选值","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Amarks%3D%22marks%22%20step%3D%22mark%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(0)%2C%0D%0A%20%20%20%20%20%20marks%3A%20%7B%0D%0A%20%20%20%20%20%20%20%200%3A%20'0%C2%B0C'%2C%0D%0A%20%20%20%20%20%20%20%2020%3A%20'20%C2%B0C'%2C%0D%0A%20%20%20%20%20%20%20%2037%3A%20'37%C2%B0C'%2C%0D%0A%20%20%20%20%20%20%20%20100%3A%20'100%C2%B0C'%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Amarks%3D%22marks%22%20step%3D%22mark%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(0)%2C%0A%20%20%20%20%20%20marks%3A%20%7B%0A%20%20%20%20%20%20%20%200%3A%20%220%C2%B0C%22%2C%0A%20%20%20%20%20%20%20%2020%3A%20%2220%C2%B0C%22%2C%0A%20%20%20%20%20%20%20%2037%3A%20%2237%C2%B0C%22%2C%0A%20%20%20%20%20%20%20%20100%3A%20%22100%C2%B0C%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" 限制可选值 ")]),content:n(()=>[t(p,null,{default:n(()=>[o("设定 "),t(A,{code:""},{default:n(()=>[o('step="mark"')]),_:1}),o(" 将可选值限制为标记属性所提供的值。")]),_:1})]),demo:n(()=>[e("div",l0,[t(D,{vertical:""},{default:n(()=>[t(c,{value:u.value,"onUpdate:value":a[0]||(a[0]=B=>u.value=B),marks:u.marks,step:"mark"},null,8,["value","marks"])]),_:1})])]),_:1})}const u0=E(n0,[["render",o0]]),a0={},s0={class:"demo-card__view"};function d0(u,a){const _=l("n-slider"),d=l("component-demo");return r(),m(d,{"demo-file-name":"disabled.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/zhCN/disabled.demo.vue",title:"禁用","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-slider%20%3Adefault-value%3D%2250%22%20disabled%20%2F%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[o(" 禁用 ")]),content:n(()=>[]),demo:n(()=>[e("div",s0,[t(_,{"default-value":50,disabled:""})])]),_:1})}const r0=E(a0,[["render",d0]]),i0={},m0={class:"demo-card__view"};function c0(u,a){const _=l("n-text"),d=l("n-p"),C=l("n-slider"),f=l("component-demo");return r(),m(f,{"demo-file-name":"disable-tooltip.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/zhCN/disable-tooltip.demo.vue",title:"禁用 Tooltip","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-slider%20%3Astep%3D%2210%22%20%3Atooltip%3D%22false%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[o(" 禁用 Tooltip ")]),content:n(()=>[t(d,null,{default:n(()=>[o("设定 "),t(_,{code:""},{default:n(()=>[o(':tooltip="false"')]),_:1}),o(" 来禁用 tooltip。")]),_:1})]),demo:n(()=>[e("div",m0,[t(C,{step:10,tooltip:!1})])]),_:1})}const p0=E(i0,[["render",c0]]),A0=h({setup(){return{formatTooltip:u=>`${u}%`}}}),_0={class:"demo-card__view"};function D0(u,a,_,d,C,f){const A=l("n-slider"),p=l("component-demo");return r(),m(p,{"demo-file-name":"format.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/zhCN/format.demo.vue",title:"格式化弹出提示","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-slider%20%3Adefault-value%3D%2250%22%20%3Astep%3D%2210%22%20%3Aformat-tooltip%3D%22formatTooltip%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20formatTooltip%3A%20(value%3A%20number)%20%3D%3E%20%60%24%7Bvalue%7D%25%60%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-slider%20%3Adefault-value%3D%2250%22%20%3Astep%3D%2210%22%20%3Aformat-tooltip%3D%22formatTooltip%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20formatTooltip%3A%20(value)%20%3D%3E%20%60%24%7Bvalue%7D%25%60%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" 格式化弹出提示 ")]),content:n(()=>[]),demo:n(()=>[e("div",_0,[t(A,{"default-value":50,step:10,"format-tooltip":u.formatTooltip},null,8,["format-tooltip"])])]),_:1})}const v0=E(A0,[["render",D0]]),C0=h({setup(){return{value:b(0)}}}),f0={class:"demo-card__view"};function E0(u,a,_,d,C,f){const A=l("n-text"),p=l("n-p"),c=l("n-slider"),D=l("n-input-number"),i=l("n-space"),B=l("component-demo");return r(),m(B,{"demo-file-name":"reverse.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/zhCN/reverse.demo.vue",title:"倒转","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Astep%3D%2210%22%20reverse%20%2F%3E%0D%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(0)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Astep%3D%2210%22%20reverse%20%2F%3E%0D%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(0)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" 倒转 ")]),content:n(()=>[t(p,null,{default:n(()=>[o("设定 "),t(A,{code:""},{default:n(()=>[o("reverse")]),_:1}),o(" 可以将轨道倒转过来。")]),_:1})]),demo:n(()=>[e("div",f0,[t(i,{vertical:""},{default:n(()=>[t(c,{value:u.value,"onUpdate:value":a[0]||(a[0]=F=>u.value=F),step:10,reverse:""},null,8,["value"]),t(D,{value:u.value,"onUpdate:value":a[1]||(a[1]=F=>u.value=F),size:"small"},null,8,["value"])]),_:1})])]),_:1})}const B0=E(C0,[["render",E0]]),h0=h({setup(){return{value:b([20,70]),marks:{0:"0°C",20:"20°C",37:"37°C",100:"100°C"}}}}),F0={class:"demo-card__view"};function b0(u,a,_,d,C,f){const A=l("n-text"),p=l("n-p"),c=l("n-slider"),D=l("n-space"),i=l("component-demo");return r(),m(i,{"demo-file-name":"vertical.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/zhCN/vertical.demo.vue",title:"垂直","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20style%3D%22height%3A%20300px%3B%20justify-content%3A%20center%22%3E%0D%0A%20%20%20%20%3Cn-slider%20%3Adefault-value%3D%2277%22%20vertical%20%2F%3E%0D%0A%20%20%20%20%3Cn-slider%20%3Adefault-value%3D%2220%22%20vertical%20reverse%20%2F%3E%0D%0A%20%20%20%20%3Cn-slider%20%3Adefault-value%3D%2230%22%20vertical%20disabled%20%2F%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Amarks%3D%22marks%22%20vertical%20range%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(%5B20%2C%2070%5D)%2C%0D%0A%20%20%20%20%20%20marks%3A%20%7B%0D%0A%20%20%20%20%20%20%20%200%3A%20'0%C2%B0C'%2C%0D%0A%20%20%20%20%20%20%20%2020%3A%20'20%C2%B0C'%2C%0D%0A%20%20%20%20%20%20%20%2037%3A%20'37%C2%B0C'%2C%0D%0A%20%20%20%20%20%20%20%20100%3A%20'100%C2%B0C'%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20style%3D%22height%3A%20300px%3B%20justify-content%3A%20center%22%3E%0D%0A%20%20%20%20%3Cn-slider%20%3Adefault-value%3D%2277%22%20vertical%20%2F%3E%0D%0A%20%20%20%20%3Cn-slider%20%3Adefault-value%3D%2220%22%20vertical%20reverse%20%2F%3E%0D%0A%20%20%20%20%3Cn-slider%20%3Adefault-value%3D%2230%22%20vertical%20disabled%20%2F%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Amarks%3D%22marks%22%20vertical%20range%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(%5B20%2C%2070%5D)%2C%0A%20%20%20%20%20%20marks%3A%20%7B%0A%20%20%20%20%20%20%20%200%3A%20%220%C2%B0C%22%2C%0A%20%20%20%20%20%20%20%2020%3A%20%2220%C2%B0C%22%2C%0A%20%20%20%20%20%20%20%2037%3A%20%2237%C2%B0C%22%2C%0A%20%20%20%20%20%20%20%20100%3A%20%22100%C2%B0C%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" 垂直 ")]),content:n(()=>[t(p,null,{default:n(()=>[o("设定 "),t(A,{code:""},{default:n(()=>[o("vertical")]),_:1}),o(" 来启用垂直模式，它的高度默认依赖于容器的高度，你也可以自定义高度。")]),_:1})]),demo:n(()=>[e("div",F0,[t(D,{style:{height:"300px","justify-content":"center"}},{default:n(()=>[t(c,{"default-value":77,vertical:""}),t(c,{"default-value":20,vertical:"",reverse:""}),t(c,{"default-value":30,vertical:"",disabled:""}),t(c,{value:u.value,"onUpdate:value":a[0]||(a[0]=B=>u.value=B),marks:u.marks,vertical:"",range:""},null,8,["value","marks"])]),_:1})])]),_:1})}const g0=E(h0,[["render",b0]]),y0={},k0={class:"demo-card__view"};function V0(u,a){const _=l("n-text"),d=l("n-p"),C=l("n-slider"),f=l("component-demo");return r(),m(f,{"demo-file-name":"show-tooltip.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/zhCN/show-tooltip.demo.vue",title:"始终显示 Tooltip","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-slider%20show-tooltip%20%2F%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[o(" 始终显示 Tooltip ")]),content:n(()=>[t(d,null,{default:n(()=>[o("设定 "),t(_,{code:""},{default:n(()=>[o("show-tooltip")]),_:1}),o(" 来让 Tooltip 被一直显示。")]),_:1})]),demo:n(()=>[e("div",k0,[t(C,{"show-tooltip":""})])]),_:1})}const $0=E(y0,[["render",V0]]),w0=h({setup(){return{AnimalCat24Regular:L,value:b(50)}}}),z0={class:"demo-card__view"};function x0(u,a,_,d,C,f){const A=l("n-text"),p=l("n-p"),c=l("n-icon"),D=l("n-icon-wrapper"),i=l("n-slider"),B=l("n-input-number"),F=l("n-space"),y=l("component-demo");return r(),m(y,{"demo-file-name":"custom-thumb.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/zhCN/custom-thumb.demo.vue",title:"自定义标识","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Astep%3D%2210%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23thumb%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-icon-wrapper%20%3Asize%3D%2224%22%20%3Aborder-radius%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%20%3Asize%3D%2218%22%20%3Acomponent%3D%22AnimalCat24Regular%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-icon-wrapper%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-slider%3E%0D%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20AnimalCat24Regular%20from%20'%40vicons%2Ffluent%2FAnimalCat24Regular'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20AnimalCat24Regular%2C%0D%0A%20%20%20%20%20%20value%3A%20ref(50)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Astep%3D%2210%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23thumb%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-icon-wrapper%20%3Asize%3D%2224%22%20%3Aborder-radius%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%20%3Asize%3D%2218%22%20%3Acomponent%3D%22AnimalCat24Regular%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-icon-wrapper%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-slider%3E%0D%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20AnimalCat24Regular%20from%20%22%40vicons%2Ffluent%2FAnimalCat24Regular%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20AnimalCat24Regular%2C%0A%20%20%20%20%20%20value%3A%20ref(50)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" 自定义标识 ")]),content:n(()=>[t(p,null,{default:n(()=>[o("可以使用 "),t(A,{code:""},{default:n(()=>[o("thumb")]),_:1}),o(" 插槽自定义滑块按钮。")]),_:1})]),demo:n(()=>[e("div",z0,[t(F,{vertical:""},{default:n(()=>[t(i,{value:u.value,"onUpdate:value":a[0]||(a[0]=g=>u.value=g),step:10},{thumb:n(()=>[t(D,{size:24,"border-radius":12},{default:n(()=>[t(c,{size:18,component:u.AnimalCat24Regular},null,8,["component"])]),_:1})]),_:1},8,["value"]),t(B,{value:u.value,"onUpdate:value":a[1]||(a[1]=g=>u.value=g),size:"small"},null,8,["value"])]),_:1})])]),_:1})}const N0=E(w0,[["render",x0]]),T0={components:{basicVueDemo:J,rangeVueDemo:X,markVueDemo:t0,restrictSelectableValuesVueDemo:u0,disabledVueDemo:r0,disableTooltipVueDemo:p0,formatVueDemo:v0,reverseVueDemo:B0,verticalVueDemo:g0,showTooltipVueDemo:$0,customThumbVueDemo:N0},setup(){const u=R(),a=P(()=>!u.value),_=u;return{showAnchor:a,displayMode:O(),wrapperStyle:$(()=>_.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:$(()=>a.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/slider/demos/zhCN/index.demo-entry.md"}}},S0={class:"md-table-wrapper"},M0=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"类型"),e("th",null,"默认值"),e("th",null,"说明"),e("th",null,"版本")])],-1),j0=e("td",null,"default-value",-1),U0=e("td",null,"默认值",-1),R0=e("td",null,null,-1),P0=e("td",null,"disabled",-1),O0=e("td",null,"是否禁用",-1),I0=e("td",null,null,-1),L0=e("td",null,"format-tooltip",-1),q0=e("td",null,"格式化 tooltip",-1),G0=e("td",null,null,-1),H0=e("td",null,"keyboard",-1),J0=e("td",null,"是否可键盘控制",-1),K0=e("td",null,"2.33.0",-1),Q0=e("td",null,"marks",-1),W0=e("td",null,"Slider 上的标记",-1),X0=e("td",null,null,-1),Y0=e("td",null,"max",-1),Z0=e("td",null,"最大值",-1),e2=e("td",null,null,-1),t2=e("td",null,"min",-1),n2=e("td",null,"最小值",-1),l2=e("td",null,null,-1),o2=e("td",null,"placement",-1),u2=e("td",null,"Tooltip 的弹出位置",-1),a2=e("td",null,"2.25.0",-1),s2=e("td",null,"range",-1),d2=e("td",null,"是否选择范围值",-1),r2=e("td",null,null,-1),i2=e("td",null,"reverse",-1),m2=e("td",null,"是否倒转轨道",-1),c2=e("td",null,null,-1),p2=e("td",null,"show-tooltip",-1),A2=e("td",null,"是否一直显示 tooltip，仅对非 range 生效",-1),_2=e("td",null,"2.24.2",-1),D2=e("td",null,"step",-1),v2=e("td",null,"步长",-1),C2=e("td",null,null,-1),f2=e("td",null,"tooltip",-1),E2=e("td",null,"是否展示 tooltip",-1),B2=e("td",null,null,-1),h2=e("td",null,"vertical",-1),F2=e("td",null,"是否启用垂直模式",-1),b2=e("td",null,null,-1),g2=e("td",null,"value",-1),y2=e("td",null,"值",-1),k2=e("td",null,null,-1),V2=e("td",null,"on-update:value",-1),$2=e("td",null,"值更新的回调",-1),w2=e("td",null,null,-1),z2={class:"md-table-wrapper"},x2=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"参数"),e("th",null,"说明"),e("th",null,"版本")])],-1),N2=e("td",null,"thumb",-1),T2=e("td",null,"滑块按钮",-1),S2=e("td",null,"2.30.4",-1),M2={key:0,style:{width:"192px"}};function j2(u,a,_,d,C,f){const A=l("edit-on-github-header"),p=l("n-p"),c=l("n-h2"),D=l("basicVueDemo"),i=l("rangeVueDemo"),B=l("markVueDemo"),F=l("restrictSelectableValuesVueDemo"),y=l("disabledVueDemo"),g=l("disableTooltipVueDemo"),x=l("formatVueDemo"),N=l("reverseVueDemo"),T=l("verticalVueDemo"),S=l("showTooltipVueDemo"),M=l("customThumbVueDemo"),j=l("component-demos"),k=l("n-h3"),s=l("n-text"),V=l("n-table"),v=l("n-anchor-link"),U=l("n-anchor");return r(),w("div",{class:"doc",style:z(d.wrapperStyle)},[e("div",{style:z(d.contentStyle)},[t(A,{"relative-url":"D:/Code/naive-ui/src/slider/demos/zhCN/index.demo-entry.md",text:"滑动选择 Slider"}),t(p,null,{default:n(()=>[o("就我所知，这东西一般就用来控制音量。")]),_:1}),t(c,{id:"演示"},{default:n(()=>[o("演示")]),_:1}),t(j,{span:2},{default:n(()=>[t(D),t(i),t(B),t(F),t(y),t(g),t(x),t(N),t(T),t(S),t(M)]),_:1}),t(c,{id:"API"},{default:n(()=>[o("API")]),_:1}),t(k,{id:"Slider-Props"},{default:n(()=>[o("Slider Props")]),_:1}),e("div",S0,[t(V,{"single-column":"",class:"md-table"},{default:n(()=>[M0,e("tbody",null,[e("tr",null,[j0,e("td",null,[t(s,{code:""},{default:n(()=>[o("number | [number, number] | null")]),_:1})]),e("td",null,[t(s,{code:""},{default:n(()=>[o("null")]),_:1})]),U0,R0]),e("tr",null,[P0,e("td",null,[t(s,{code:""},{default:n(()=>[o("boolean")]),_:1})]),e("td",null,[t(s,{code:""},{default:n(()=>[o("false")]),_:1})]),O0,I0]),e("tr",null,[L0,e("td",null,[t(s,{code:""},{default:n(()=>[o("(value: number) => string | number")]),_:1})]),e("td",null,[t(s,{code:""},{default:n(()=>[o("undefined")]),_:1})]),q0,G0]),e("tr",null,[H0,e("td",null,[t(s,{code:""},{default:n(()=>[o("boolean")]),_:1})]),e("td",null,[t(s,{code:""},{default:n(()=>[o("true")]),_:1})]),J0,K0]),e("tr",null,[Q0,e("td",null,[t(s,{code:""},{default:n(()=>[o("{ [markValue: number]: string }")]),_:1})]),e("td",null,[t(s,{code:""},{default:n(()=>[o("undefined")]),_:1})]),W0,X0]),e("tr",null,[Y0,e("td",null,[t(s,{code:""},{default:n(()=>[o("number")]),_:1})]),e("td",null,[t(s,{code:""},{default:n(()=>[o("100")]),_:1})]),Z0,e2]),e("tr",null,[t2,e("td",null,[t(s,{code:""},{default:n(()=>[o("number")]),_:1})]),e("td",null,[t(s,{code:""},{default:n(()=>[o("0")]),_:1})]),n2,l2]),e("tr",null,[o2,e("td",null,[t(s,{code:""},{default:n(()=>[o("'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end'")]),_:1})]),e("td",null,[t(s,{code:""},{default:n(()=>[o("undefined")]),_:1})]),u2,a2]),e("tr",null,[s2,e("td",null,[t(s,{code:""},{default:n(()=>[o("boolean")]),_:1})]),e("td",null,[t(s,{code:""},{default:n(()=>[o("false")]),_:1})]),d2,r2]),e("tr",null,[i2,e("td",null,[t(s,{code:""},{default:n(()=>[o("boolean")]),_:1})]),e("td",null,[t(s,{code:""},{default:n(()=>[o("false")]),_:1})]),m2,c2]),e("tr",null,[p2,e("td",null,[t(s,{code:""},{default:n(()=>[o("boolean")]),_:1})]),e("td",null,[t(s,{code:""},{default:n(()=>[o("false")]),_:1})]),A2,_2]),e("tr",null,[D2,e("td",null,[t(s,{code:""},{default:n(()=>[o("number | 'mark'")]),_:1})]),e("td",null,[t(s,{code:""},{default:n(()=>[o("1")]),_:1})]),v2,C2]),e("tr",null,[f2,e("td",null,[t(s,{code:""},{default:n(()=>[o("boolean")]),_:1})]),e("td",null,[t(s,{code:""},{default:n(()=>[o("true")]),_:1})]),E2,B2]),e("tr",null,[h2,e("td",null,[t(s,{code:""},{default:n(()=>[o("boolean")]),_:1})]),e("td",null,[t(s,{code:""},{default:n(()=>[o("false")]),_:1})]),F2,b2]),e("tr",null,[g2,e("td",null,[t(s,{code:""},{default:n(()=>[o("number | [number, number] | null")]),_:1})]),e("td",null,[t(s,{code:""},{default:n(()=>[o("undefined")]),_:1})]),y2,k2]),e("tr",null,[V2,e("td",null,[t(s,{code:""},{default:n(()=>[o("(value: number | [number, number]) => void")]),_:1})]),e("td",null,[t(s,{code:""},{default:n(()=>[o("undefined")]),_:1})]),$2,w2])])]),_:1})]),t(k,{id:"Slider-Slots"},{default:n(()=>[o("Slider Slots")]),_:1}),e("div",z2,[t(V,{"single-column":"",class:"md-table"},{default:n(()=>[x2,e("tbody",null,[e("tr",null,[N2,e("td",null,[t(s,{code:""},{default:n(()=>[o("()")]),_:1})]),T2,S2])])]),_:1})])],4),d.showAnchor?(r(),w("div",M2,[t(U,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:n(()=>[(d.displayMode,r(),m(v,{key:0,title:"基础用法\r",href:"#basic.vue"})),(d.displayMode,r(),m(v,{key:1,title:"范围\r",href:"#range.vue"})),(d.displayMode,r(),m(v,{key:2,title:"标记\r",href:"#mark.vue"})),(d.displayMode,r(),m(v,{key:3,title:"限制可选值\r",href:"#restrict-selectable-values.vue"})),(d.displayMode,r(),m(v,{key:4,title:"禁用\r",href:"#disabled.vue"})),(d.displayMode,r(),m(v,{key:5,title:"禁用 Tooltip\r",href:"#disable-tooltip.vue"})),(d.displayMode,r(),m(v,{key:6,title:"格式化弹出提示\r",href:"#format.vue"})),(d.displayMode,r(),m(v,{key:7,title:"倒转\r",href:"#reverse.vue"})),(d.displayMode,r(),m(v,{key:8,title:"垂直\r",href:"#vertical.vue"})),(d.displayMode,r(),m(v,{key:9,title:"始终显示 Tooltip\r",href:"#show-tooltip.vue"})),(d.displayMode,r(),m(v,{key:10,title:"自定义标识\r",href:"#custom-thumb.vue"})),(d.displayMode,r(),m(v,{key:11,title:"API",href:"#API"})),(d.displayMode,r(),m(v,{key:12,title:"Slider Props",href:"#Slider-Props"})),(d.displayMode,r(),m(v,{key:13,title:"Slider Slots",href:"#Slider-Slots"}))]),_:1})])):I("",!0)],4)}const P2=E(T0,[["render",j2]]);export{P2 as default};
