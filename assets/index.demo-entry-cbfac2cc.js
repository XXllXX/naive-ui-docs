import{j as b,l as g,_ as h,r as l,o as d,i as m,w as n,g as o,e,f as t,u as j,a as P,b as I,c as w,d as $,n as S,h as O}from"./index-9afb4b71.js";import{_ as W}from"./AnimalCat24Regular-40e5b4b0.js";const G=b({setup(){return{value:g(50)}}}),L={class:"demo-card__view"};function Y(a,s,_,r,C,f){const A=l("n-slider"),p=l("n-input-number"),c=l("n-space"),D=l("component-demo");return d(),m(D,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/enUS/basic.demo.vue",title:"Basic","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Astep%3D%2210%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(50)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Astep%3D%2210%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(50)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" Basic ")]),content:n(()=>[]),demo:n(()=>[e("div",L,[t(c,{vertical:""},{default:n(()=>[t(A,{value:a.value,"onUpdate:value":s[0]||(s[0]=i=>a.value=i),step:10},null,8,["value"]),t(p,{value:a.value,"onUpdate:value":s[1]||(s[1]=i=>a.value=i),size:"small"},null,8,["value"])]),_:1})])]),_:1})}const q=h(G,[["render",Y]]),H=b({setup(){return{value:g([50,70])}}}),J={class:"demo-card__view"};function K(a,s,_,r,C,f){const A=l("n-slider"),p=l("n-input-number"),c=l("n-space"),D=l("component-demo");return d(),m(D,{"demo-file-name":"range.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/enUS/range.demo.vue",title:"Range","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20range%20%3Astep%3D%221%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%5B0%5D%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%5B1%5D%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(%5B50%2C%2070%5D)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20range%20%3Astep%3D%221%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%5B0%5D%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%5B1%5D%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(%5B50%2C%2070%5D)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" Range ")]),content:n(()=>[]),demo:n(()=>[e("div",J,[t(c,{vertical:""},{default:n(()=>[t(A,{value:a.value,"onUpdate:value":s[0]||(s[0]=i=>a.value=i),range:"",step:1},null,8,["value"]),t(c,null,{default:n(()=>[t(p,{value:a.value[0],"onUpdate:value":s[1]||(s[1]=i=>a.value[0]=i),size:"small"},null,8,["value"]),t(p,{value:a.value[1],"onUpdate:value":s[2]||(s[2]=i=>a.value[1]=i),size:"small"},null,8,["value"])]),_:1})]),_:1})])]),_:1})}const Q=h(H,[["render",K]]),X=b({setup(){return{value:g([50,70]),marks:{34:"Amazing",75:"Good"}}}}),Z={class:"demo-card__view"};function ee(a,s,_,r,C,f){const A=l("n-slider"),p=l("n-input-number"),c=l("n-space"),D=l("component-demo");return d(),m(D,{"demo-file-name":"mark.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/enUS/mark.demo.vue",title:"Mark","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20range%20%3Amarks%3D%22marks%22%20%3Astep%3D%2210%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%5B0%5D%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%5B1%5D%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(%5B50%2C%2070%5D)%2C%0D%0A%20%20%20%20%20%20marks%3A%20%7B%0D%0A%20%20%20%20%20%20%20%2034%3A%20'Amazing'%2C%0D%0A%20%20%20%20%20%20%20%2075%3A%20'Good'%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20range%20%3Amarks%3D%22marks%22%20%3Astep%3D%2210%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%5B0%5D%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%5B1%5D%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(%5B50%2C%2070%5D)%2C%0A%20%20%20%20%20%20marks%3A%20%7B%0A%20%20%20%20%20%20%20%2034%3A%20%22Amazing%22%2C%0A%20%20%20%20%20%20%20%2075%3A%20%22Good%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" Mark ")]),content:n(()=>[]),demo:n(()=>[e("div",Z,[t(c,{vertical:""},{default:n(()=>[t(A,{value:a.value,"onUpdate:value":s[0]||(s[0]=i=>a.value=i),range:"",marks:a.marks,step:10},null,8,["value","marks"]),t(c,null,{default:n(()=>[t(p,{value:a.value[0],"onUpdate:value":s[1]||(s[1]=i=>a.value[0]=i),size:"small"},null,8,["value"]),t(p,{value:a.value[1],"onUpdate:value":s[2]||(s[2]=i=>a.value[1]=i),size:"small"},null,8,["value"])]),_:1})]),_:1})])]),_:1})}const te=h(X,[["render",ee]]),ne=b({setup(){return{value:g(0),marks:{0:"0°C",20:"20°C",37:"37°C",100:"100°C"}}}}),le={class:"demo-card__view"};function oe(a,s,_,r,C,f){const A=l("n-text"),p=l("n-p"),c=l("n-slider"),D=l("n-space"),i=l("component-demo");return d(),m(i,{"demo-file-name":"restrict-selectable-values.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/enUS/restrict-selectable-values.demo.vue",title:"Restrict selectable values","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Amarks%3D%22marks%22%20step%3D%22mark%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(0)%2C%0D%0A%20%20%20%20%20%20marks%3A%20%7B%0D%0A%20%20%20%20%20%20%20%200%3A%20'0%C2%B0C'%2C%0D%0A%20%20%20%20%20%20%20%2020%3A%20'20%C2%B0C'%2C%0D%0A%20%20%20%20%20%20%20%2037%3A%20'37%C2%B0C'%2C%0D%0A%20%20%20%20%20%20%20%20100%3A%20'100%C2%B0C'%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Amarks%3D%22marks%22%20step%3D%22mark%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(0)%2C%0A%20%20%20%20%20%20marks%3A%20%7B%0A%20%20%20%20%20%20%20%200%3A%20%220%C2%B0C%22%2C%0A%20%20%20%20%20%20%20%2020%3A%20%2220%C2%B0C%22%2C%0A%20%20%20%20%20%20%20%2037%3A%20%2237%C2%B0C%22%2C%0A%20%20%20%20%20%20%20%20100%3A%20%22100%C2%B0C%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" Restrict selectable values ")]),content:n(()=>[t(p,null,{default:n(()=>[o("Set "),t(A,{code:""},{default:n(()=>[o('step="mark"')]),_:1}),o(" to restrict the selectable values to those provided by the mark prop.")]),_:1})]),demo:n(()=>[e("div",le,[t(D,{vertical:""},{default:n(()=>[t(c,{value:a.value,"onUpdate:value":s[0]||(s[0]=E=>a.value=E),marks:a.marks,step:"mark"},null,8,["value","marks"])]),_:1})])]),_:1})}const ae=h(ne,[["render",oe]]),se={},ue={class:"demo-card__view"};function re(a,s){const _=l("n-slider"),r=l("component-demo");return d(),m(r,{"demo-file-name":"disabled.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/enUS/disabled.demo.vue",title:"Disabled","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-slider%20%3Adefault-value%3D%2250%22%20disabled%20%2F%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[o(" Disabled ")]),content:n(()=>[]),demo:n(()=>[e("div",ue,[t(_,{"default-value":50,disabled:""})])]),_:1})}const de=h(se,[["render",re]]),ie={},me={class:"demo-card__view"};function ce(a,s){const _=l("n-text"),r=l("n-p"),C=l("n-slider"),f=l("component-demo");return d(),m(f,{"demo-file-name":"disable-tooltip.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/enUS/disable-tooltip.demo.vue",title:"Disable tooltip","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-slider%20%3Astep%3D%2210%22%20%3Atooltip%3D%22false%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[o(" Disable tooltip ")]),content:n(()=>[t(r,null,{default:n(()=>[o("Set "),t(_,{code:""},{default:n(()=>[o(':tooltip="false"')]),_:1}),o(" to disabled the tooltip.")]),_:1})]),demo:n(()=>[e("div",me,[t(C,{step:10,tooltip:!1})])]),_:1})}const pe=h(ie,[["render",ce]]),Ae=b({setup(){return{formatTooltip:a=>`${a}%`}}}),_e={class:"demo-card__view"};function De(a,s,_,r,C,f){const A=l("n-slider"),p=l("component-demo");return d(),m(p,{"demo-file-name":"format.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/enUS/format.demo.vue",title:"Format tooltip","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-slider%20%3Adefault-value%3D%2250%22%20%3Astep%3D%2210%22%20%3Aformat-tooltip%3D%22formatTooltip%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20formatTooltip%3A%20(value%3A%20number)%20%3D%3E%20%60%24%7Bvalue%7D%25%60%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-slider%20%3Adefault-value%3D%2250%22%20%3Astep%3D%2210%22%20%3Aformat-tooltip%3D%22formatTooltip%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20formatTooltip%3A%20(value)%20%3D%3E%20%60%24%7Bvalue%7D%25%60%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" Format tooltip ")]),content:n(()=>[]),demo:n(()=>[e("div",_e,[t(A,{"default-value":50,step:10,"format-tooltip":a.formatTooltip},null,8,["format-tooltip"])])]),_:1})}const ve=h(Ae,[["render",De]]),Ce=b({setup(){return{value:g(0)}}}),fe={class:"demo-card__view"};function he(a,s,_,r,C,f){const A=l("n-text"),p=l("n-p"),c=l("n-slider"),D=l("n-input-number"),i=l("n-space"),E=l("component-demo");return d(),m(E,{"demo-file-name":"reverse.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/enUS/reverse.demo.vue",title:"Reverse","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Astep%3D%2210%22%20reverse%20%2F%3E%0D%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(0)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Astep%3D%2210%22%20reverse%20%2F%3E%0D%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(0)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" Reverse ")]),content:n(()=>[t(p,null,{default:n(()=>[o("Set "),t(A,{code:""},{default:n(()=>[o("reverse")]),_:1}),o(" to invert the track.")]),_:1})]),demo:n(()=>[e("div",fe,[t(i,{vertical:""},{default:n(()=>[t(c,{value:a.value,"onUpdate:value":s[0]||(s[0]=B=>a.value=B),step:10,reverse:""},null,8,["value"]),t(D,{value:a.value,"onUpdate:value":s[1]||(s[1]=B=>a.value=B),size:"small"},null,8,["value"])]),_:1})])]),_:1})}const Ee=h(Ce,[["render",he]]),be=b({setup(){return{value:g([20,70]),marks:{0:"0°C",20:"20°C",37:"37°C",100:"100°C"}}}}),Be={class:"demo-card__view"};function ge(a,s,_,r,C,f){const A=l("n-text"),p=l("n-p"),c=l("n-slider"),D=l("n-space"),i=l("component-demo");return d(),m(i,{"demo-file-name":"vertical.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/enUS/vertical.demo.vue",title:"Vertical","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20style%3D%22height%3A%20300px%3B%20justify-content%3A%20center%22%3E%0D%0A%20%20%20%20%3Cn-slider%20%3Adefault-value%3D%2277%22%20vertical%20%2F%3E%0D%0A%20%20%20%20%3Cn-slider%20%3Adefault-value%3D%2220%22%20vertical%20reverse%20%2F%3E%0D%0A%20%20%20%20%3Cn-slider%20%3Adefault-value%3D%2230%22%20vertical%20disabled%20%2F%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Amarks%3D%22marks%22%20vertical%20range%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(%5B20%2C%2070%5D)%2C%0D%0A%20%20%20%20%20%20marks%3A%20%7B%0D%0A%20%20%20%20%20%20%20%200%3A%20'0%C2%B0C'%2C%0D%0A%20%20%20%20%20%20%20%2020%3A%20'20%C2%B0C'%2C%0D%0A%20%20%20%20%20%20%20%2037%3A%20'37%C2%B0C'%2C%0D%0A%20%20%20%20%20%20%20%20100%3A%20'100%C2%B0C'%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20style%3D%22height%3A%20300px%3B%20justify-content%3A%20center%22%3E%0D%0A%20%20%20%20%3Cn-slider%20%3Adefault-value%3D%2277%22%20vertical%20%2F%3E%0D%0A%20%20%20%20%3Cn-slider%20%3Adefault-value%3D%2220%22%20vertical%20reverse%20%2F%3E%0D%0A%20%20%20%20%3Cn-slider%20%3Adefault-value%3D%2230%22%20vertical%20disabled%20%2F%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Amarks%3D%22marks%22%20vertical%20range%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(%5B20%2C%2070%5D)%2C%0A%20%20%20%20%20%20marks%3A%20%7B%0A%20%20%20%20%20%20%20%200%3A%20%220%C2%B0C%22%2C%0A%20%20%20%20%20%20%20%2020%3A%20%2220%C2%B0C%22%2C%0A%20%20%20%20%20%20%20%2037%3A%20%2237%C2%B0C%22%2C%0A%20%20%20%20%20%20%20%20100%3A%20%22100%C2%B0C%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" Vertical ")]),content:n(()=>[t(p,null,{default:n(()=>[o("Set "),t(A,{code:""},{default:n(()=>[o("vertical")]),_:1}),o(" to enable the vertical mode. Its height depends on the height of the container by default, and you can also customize the height.")]),_:1})]),demo:n(()=>[e("div",Be,[t(D,{style:{height:"300px","justify-content":"center"}},{default:n(()=>[t(c,{"default-value":77,vertical:""}),t(c,{"default-value":20,vertical:"",reverse:""}),t(c,{"default-value":30,vertical:"",disabled:""}),t(c,{value:a.value,"onUpdate:value":s[0]||(s[0]=E=>a.value=E),marks:a.marks,vertical:"",range:""},null,8,["value","marks"])]),_:1})])]),_:1})}const Fe=h(be,[["render",ge]]),ye={},ke={class:"demo-card__view"};function Ve(a,s){const _=l("n-text"),r=l("n-p"),C=l("n-slider"),f=l("component-demo");return d(),m(f,{"demo-file-name":"show-tooltip.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/enUS/show-tooltip.demo.vue",title:"Always show tooltip","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-slider%20show-tooltip%20%2F%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[o(" Always show tooltip ")]),content:n(()=>[t(r,null,{default:n(()=>[o("Set "),t(_,{code:""},{default:n(()=>[o("show-tooltip")]),_:1}),o(" to always show tooltip.")]),_:1})]),demo:n(()=>[e("div",ke,[t(C,{"show-tooltip":""})])]),_:1})}const we=h(ye,[["render",Ve]]),$e=b({setup(){return{AnimalCat24Regular:W,value:g(50)}}}),Se={class:"demo-card__view"};function xe(a,s,_,r,C,f){const A=l("n-text"),p=l("n-p"),c=l("n-icon"),D=l("n-icon-wrapper"),i=l("n-slider"),E=l("n-input-number"),B=l("n-space"),y=l("component-demo");return d(),m(y,{"demo-file-name":"custom-thumb.vue","relative-url":"D:/Code/naive-ui/src/slider/demos/enUS/custom-thumb.demo.vue",title:"Customize handle","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Astep%3D%2210%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23thumb%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-icon-wrapper%20%3Asize%3D%2224%22%20%3Aborder-radius%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%20%3Asize%3D%2218%22%20%3Acomponent%3D%22AnimalCat24Regular%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-icon-wrapper%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-slider%3E%0D%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20AnimalCat24Regular%20from%20'%40vicons%2Ffluent%2FAnimalCat24Regular'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20AnimalCat24Regular%2C%0D%0A%20%20%20%20%20%20value%3A%20ref(50)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-slider%20v-model%3Avalue%3D%22value%22%20%3Astep%3D%2210%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23thumb%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-icon-wrapper%20%3Asize%3D%2224%22%20%3Aborder-radius%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%20%3Asize%3D%2218%22%20%3Acomponent%3D%22AnimalCat24Regular%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-icon-wrapper%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-slider%3E%0D%0A%20%20%20%20%3Cn-input-number%20v-model%3Avalue%3D%22value%22%20size%3D%22small%22%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20AnimalCat24Regular%20from%20%22%40vicons%2Ffluent%2FAnimalCat24Regular%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20AnimalCat24Regular%2C%0A%20%20%20%20%20%20value%3A%20ref(50)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" Customize handle ")]),content:n(()=>[t(p,null,{default:n(()=>[o("You can use "),t(A,{code:""},{default:n(()=>[o("handle")]),_:1}),o(" slot to customize handle button.")]),_:1})]),demo:n(()=>[e("div",Se,[t(B,{vertical:""},{default:n(()=>[t(i,{value:a.value,"onUpdate:value":s[0]||(s[0]=F=>a.value=F),step:10},{thumb:n(()=>[t(D,{size:24,"border-radius":12},{default:n(()=>[t(c,{size:18,component:a.AnimalCat24Regular},null,8,["component"])]),_:1})]),_:1},8,["value"]),t(E,{value:a.value,"onUpdate:value":s[1]||(s[1]=F=>a.value=F),size:"small"},null,8,["value"])]),_:1})])]),_:1})}const ze=h($e,[["render",xe]]),Ue={components:{basicVueDemo:q,rangeVueDemo:Q,markVueDemo:te,restrictSelectableValuesVueDemo:ae,disabledVueDemo:de,disableTooltipVueDemo:pe,formatVueDemo:ve,reverseVueDemo:Ee,verticalVueDemo:Fe,showTooltipVueDemo:we,customThumbVueDemo:ze},setup(){const a=j(),s=P(()=>!a.value),_=a;return{showAnchor:s,displayMode:I(),wrapperStyle:w(()=>_.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:w(()=>s.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/slider/demos/enUS/index.demo-entry.md"}}},Me={class:"md-table-wrapper"},Te=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Description"),e("th",null,"Version")])],-1),Re=e("td",null,"default-value",-1),Ne=e("td",null,"Default value.",-1),je=e("td",null,null,-1),Pe=e("td",null,"disabled",-1),Ie=e("td",null,"Whether the slider is disabled.",-1),Oe=e("td",null,null,-1),We=e("td",null,"format-tooltip",-1),Ge=e("td",null,"Format tooltip.",-1),Le=e("td",null,null,-1),Ye=e("td",null,"keyboard",-1),qe=e("td",null,"Whether the slider can be controlled keyboard.",-1),He=e("td",null,"2.33.0",-1),Je=e("td",null,"marks",-1),Ke=e("td",null,"Marks of the slider.",-1),Qe=e("td",null,null,-1),Xe=e("td",null,"max",-1),Ze=e("td",null,"Max value of the slider.",-1),e0=e("td",null,null,-1),t0=e("td",null,"min",-1),n0=e("td",null,"Min value of the slider.",-1),l0=e("td",null,null,-1),o0=e("td",null,"placement",-1),a0=e("td",null,"Tooltip's placement",-1),s0=e("td",null,"2.25.0",-1),u0=e("td",null,"range",-1),r0=e("td",null,"Whether the slider uses range value.",-1),d0=e("td",null,null,-1),i0=e("td",null,"reverse",-1),m0=e("td",null,"Whether to reverse the track.",-1),c0=e("td",null,null,-1),p0=e("td",null,"show-tooltip",-1),A0=e("td",null,"Whether to always show tooltip. Only work with non-range slider.",-1),_0=e("td",null,"2.24.2",-1),D0=e("td",null,"step",-1),v0=e("td",null,"Step of the slider.",-1),C0=e("td",null,null,-1),f0=e("td",null,"tooltip",-1),h0=e("td",null,"Whether to show tooltip.",-1),E0=e("td",null,null,-1),b0=e("td",null,"vertical",-1),B0=e("td",null,"Whether to enable vertical mode.",-1),g0=e("td",null,null,-1),F0=e("td",null,"value",-1),y0=e("td",null,"Value of the slider.",-1),k0=e("td",null,null,-1),V0=e("td",null,"on-update:value",-1),w0=e("td",null,"Callback on value update.",-1),$0=e("td",null,null,-1),S0={class:"md-table-wrapper"},x0=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Parameters"),e("th",null,"Description"),e("th",null,"Version")])],-1),z0=e("td",null,"thumb",-1),U0=e("td",null,"Thumb of the slider.",-1),M0=e("td",null,"2.30.4",-1),T0={key:0,style:{width:"192px"}};function R0(a,s,_,r,C,f){const A=l("edit-on-github-header"),p=l("n-p"),c=l("n-h2"),D=l("basicVueDemo"),i=l("rangeVueDemo"),E=l("markVueDemo"),B=l("restrictSelectableValuesVueDemo"),y=l("disabledVueDemo"),F=l("disableTooltipVueDemo"),x=l("formatVueDemo"),z=l("reverseVueDemo"),U=l("verticalVueDemo"),M=l("showTooltipVueDemo"),T=l("customThumbVueDemo"),R=l("component-demos"),k=l("n-h3"),u=l("n-text"),V=l("n-table"),v=l("n-anchor-link"),N=l("n-anchor");return d(),$("div",{class:"doc",style:S(r.wrapperStyle)},[e("div",{style:S(r.contentStyle)},[t(A,{"relative-url":"D:/Code/naive-ui/src/slider/demos/enUS/index.demo-entry.md",text:"Slider"}),t(p,null,{default:n(()=>[o("As far as I know, it is always used as a volume control.")]),_:1}),t(c,{id:"Demos"},{default:n(()=>[o("Demos")]),_:1}),t(R,{span:2},{default:n(()=>[t(D),t(i),t(E),t(B),t(y),t(F),t(x),t(z),t(U),t(M),t(T)]),_:1}),t(c,{id:"API"},{default:n(()=>[o("API")]),_:1}),t(k,{id:"Slider-Props"},{default:n(()=>[o("Slider Props")]),_:1}),e("div",Me,[t(V,{"single-column":"",class:"md-table"},{default:n(()=>[Te,e("tbody",null,[e("tr",null,[Re,e("td",null,[t(u,{code:""},{default:n(()=>[o("number | [number, number] | null")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[o("null")]),_:1})]),Ne,je]),e("tr",null,[Pe,e("td",null,[t(u,{code:""},{default:n(()=>[o("boolean")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[o("false")]),_:1})]),Ie,Oe]),e("tr",null,[We,e("td",null,[t(u,{code:""},{default:n(()=>[o("(value: number) => string | number")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[o("undefined")]),_:1})]),Ge,Le]),e("tr",null,[Ye,e("td",null,[t(u,{code:""},{default:n(()=>[o("boolean")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[o("true")]),_:1})]),qe,He]),e("tr",null,[Je,e("td",null,[t(u,{code:""},{default:n(()=>[o("{ [markValue: number]: string }")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[o("undefined")]),_:1})]),Ke,Qe]),e("tr",null,[Xe,e("td",null,[t(u,{code:""},{default:n(()=>[o("number")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[o("100")]),_:1})]),Ze,e0]),e("tr",null,[t0,e("td",null,[t(u,{code:""},{default:n(()=>[o("number")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[o("0")]),_:1})]),n0,l0]),e("tr",null,[o0,e("td",null,[t(u,{code:""},{default:n(()=>[o("'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end'")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[o("undefined")]),_:1})]),a0,s0]),e("tr",null,[u0,e("td",null,[t(u,{code:""},{default:n(()=>[o("boolean")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[o("false")]),_:1})]),r0,d0]),e("tr",null,[i0,e("td",null,[t(u,{code:""},{default:n(()=>[o("boolean")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[o("false")]),_:1})]),m0,c0]),e("tr",null,[p0,e("td",null,[t(u,{code:""},{default:n(()=>[o("boolean")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[o("false")]),_:1})]),A0,_0]),e("tr",null,[D0,e("td",null,[t(u,{code:""},{default:n(()=>[o("number | 'mark'")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[o("1")]),_:1})]),v0,C0]),e("tr",null,[f0,e("td",null,[t(u,{code:""},{default:n(()=>[o("boolean")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[o("true")]),_:1})]),h0,E0]),e("tr",null,[b0,e("td",null,[t(u,{code:""},{default:n(()=>[o("boolean")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[o("false")]),_:1})]),B0,g0]),e("tr",null,[F0,e("td",null,[t(u,{code:""},{default:n(()=>[o("number | [number, number] | null")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[o("undefined")]),_:1})]),y0,k0]),e("tr",null,[V0,e("td",null,[t(u,{code:""},{default:n(()=>[o("(value: number | [number, number]) => void")]),_:1})]),e("td",null,[t(u,{code:""},{default:n(()=>[o("undefined")]),_:1})]),w0,$0])])]),_:1})]),t(k,{id:"Slider-Slots"},{default:n(()=>[o("Slider Slots")]),_:1}),e("div",S0,[t(V,{"single-column":"",class:"md-table"},{default:n(()=>[x0,e("tbody",null,[e("tr",null,[z0,e("td",null,[t(u,{code:""},{default:n(()=>[o("()")]),_:1})]),U0,M0])])]),_:1})])],4),r.showAnchor?(d(),$("div",T0,[t(N,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:n(()=>[(r.displayMode,d(),m(v,{key:0,title:"Basic\r",href:"#basic.vue"})),(r.displayMode,d(),m(v,{key:1,title:"Range\r",href:"#range.vue"})),(r.displayMode,d(),m(v,{key:2,title:"Mark\r",href:"#mark.vue"})),(r.displayMode,d(),m(v,{key:3,title:"Restrict selectable values\r",href:"#restrict-selectable-values.vue"})),(r.displayMode,d(),m(v,{key:4,title:"Disabled\r",href:"#disabled.vue"})),(r.displayMode,d(),m(v,{key:5,title:"Disable tooltip\r",href:"#disable-tooltip.vue"})),(r.displayMode,d(),m(v,{key:6,title:"Format tooltip\r",href:"#format.vue"})),(r.displayMode,d(),m(v,{key:7,title:"Reverse\r",href:"#reverse.vue"})),(r.displayMode,d(),m(v,{key:8,title:"Vertical\r",href:"#vertical.vue"})),(r.displayMode,d(),m(v,{key:9,title:"Always show tooltip\r",href:"#show-tooltip.vue"})),(r.displayMode,d(),m(v,{key:10,title:"Customize handle\r",href:"#custom-thumb.vue"})),(r.displayMode,d(),m(v,{key:11,title:"API",href:"#API"})),(r.displayMode,d(),m(v,{key:12,title:"Slider Props",href:"#Slider-Props"})),(r.displayMode,d(),m(v,{key:13,title:"Slider Slots",href:"#Slider-Slots"}))]),_:1})])):O("",!0)],4)}const P0=h(Ue,[["render",R0]]);export{P0 as default};
