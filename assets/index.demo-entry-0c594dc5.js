import{j as E,l as B,_ as b,r as i,o as u,i as c,w as n,g as o,e,f as t,A as w,u as V,a as $,b as M,c as I,d as g,n as R,h as S}from"./index-9afb4b71.js";const U=E({setup(){const a=B(null);return{numberAnimationInstRef:a,handleClick(){var l;(l=a.value)==null||l.play()}}}}),T={class:"demo-card__view"};function j(a,l,p,s,C,h){const A=i("n-number-animation"),d=i("n-statistic"),m=i("n-button"),D=i("component-demo");return u(),c(D,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/number-animation/demos/enUS/basic.demo.vue",title:"Basic","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-statistic%20label%3D%22Well%22%20tabular-nums%3E%0D%0A%20%20%20%20%3Cn-number-animation%0D%0A%20%20%20%20%20%20ref%3D%22numberAnimationInstRef%22%0D%0A%20%20%20%20%20%20%3Afrom%3D%229.96%22%0D%0A%20%20%20%20%20%20%3Ato%3D%220.07%22%0D%0A%20%20%20%20%20%20%3Aactive%3D%22false%22%0D%0A%20%20%20%20%20%20%3Aprecision%3D%222%22%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%3C%2Fn-statistic%3E%0D%0A%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0D%0A%20%20%20%20Play%0D%0A%20%20%3C%2Fn-button%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20NumberAnimationInst%20%7D%20from%20'naive-ui'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref%3CNumberAnimationInst%20%7C%20null%3E(null)%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0D%0A%20%20%20%20%20%20handleClick%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-statistic%20label%3D%22Well%22%20tabular-nums%3E%0D%0A%20%20%20%20%3Cn-number-animation%0D%0A%20%20%20%20%20%20ref%3D%22numberAnimationInstRef%22%0D%0A%20%20%20%20%20%20%3Afrom%3D%229.96%22%0D%0A%20%20%20%20%20%20%3Ato%3D%220.07%22%0D%0A%20%20%20%20%20%20%3Aactive%3D%22false%22%0D%0A%20%20%20%20%20%20%3Aprecision%3D%222%22%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%3C%2Fn-statistic%3E%0D%0A%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0D%0A%20%20%20%20Play%0D%0A%20%20%3C%2Fn-button%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref(null)%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0A%20%20%20%20%20%20handleClick()%20%7B%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" Basic ")]),content:n(()=>[]),demo:n(()=>[e("div",T,[t(d,{label:"Well","tabular-nums":""},{default:n(()=>[t(A,{ref:"numberAnimationInstRef",from:9.96,to:.07,active:!1,precision:2},null,512)]),_:1}),t(m,{onClick:a.handleClick},{default:n(()=>[o(" Play ")]),_:1},8,["onClick"])])]),_:1})}const W=b(U,[["render",j]]),J=E({setup(){const a=B(null);return{numberAnimationInstRef:a,handleClick(){var l;(l=a.value)==null||l.play()}}}}),z={class:"demo-card__view"};function G(a,l,p,s,C,h){const A=i("n-text"),d=i("n-p"),m=i("n-number-animation"),D=i("n-statistic"),f=i("n-button"),v=i("component-demo");return u(),c(v,{"demo-file-name":"precision.vue","relative-url":"D:/Code/naive-ui/src/number-animation/demos/enUS/precision.demo.vue",title:"Precision","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-statistic%20label%3D%22JNM%22%20tabular-nums%3E%0D%0A%20%20%20%20%3Cn-number-animation%0D%0A%20%20%20%20%20%20ref%3D%22numberAnimationInstRef%22%0D%0A%20%20%20%20%20%20%3Afrom%3D%220.0%22%0D%0A%20%20%20%20%20%20%3Ato%3D%2224.0%22%0D%0A%20%20%20%20%20%20%3Aactive%3D%22false%22%0D%0A%20%20%20%20%20%20%3Aprecision%3D%222%22%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%3C%2Fn-statistic%3E%0D%0A%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0D%0A%20%20%20%20Play%0D%0A%20%20%3C%2Fn-button%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20NumberAnimationInst%20%7D%20from%20'naive-ui'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref%3CNumberAnimationInst%20%7C%20null%3E(null)%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0D%0A%20%20%20%20%20%20handleClick%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-statistic%20label%3D%22JNM%22%20tabular-nums%3E%0D%0A%20%20%20%20%3Cn-number-animation%0D%0A%20%20%20%20%20%20ref%3D%22numberAnimationInstRef%22%0D%0A%20%20%20%20%20%20%3Afrom%3D%220.0%22%0D%0A%20%20%20%20%20%20%3Ato%3D%2224.0%22%0D%0A%20%20%20%20%20%20%3Aactive%3D%22false%22%0D%0A%20%20%20%20%20%20%3Aprecision%3D%222%22%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%3C%2Fn-statistic%3E%0D%0A%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0D%0A%20%20%20%20Play%0D%0A%20%20%3C%2Fn-button%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref(null)%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0A%20%20%20%20%20%20handleClick()%20%7B%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" Precision ")]),content:n(()=>[t(d,null,{default:n(()=>[o("Use "),t(A,{code:""},{default:n(()=>[o("precision")]),_:1}),o(" to set precision.")]),_:1})]),demo:n(()=>[e("div",z,[t(D,{label:"JNM","tabular-nums":""},{default:n(()=>[t(m,{ref:"numberAnimationInstRef",from:0,to:24,active:!1,precision:2},null,512)]),_:1}),t(f,{onClick:a.handleClick},{default:n(()=>[o(" Play ")]),_:1},8,["onClick"])])]),_:1})}const O=b(J,[["render",G]]),L=E({setup(){const a=B(null);return{numberAnimationInstRef:a,handleClick(){var l;(l=a.value)==null||l.play()}}}}),q={class:"demo-card__view"};function H(a,l,p,s,C,h){const A=i("n-p"),d=i("n-number-animation"),m=i("n-statistic"),D=i("n-button"),f=i("component-demo");return u(),c(f,{"demo-file-name":"separator.vue","relative-url":"D:/Code/naive-ui/src/number-animation/demos/enUS/separator.demo.vue",title:"Separator","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-statistic%20label%3D%22A%20little%20goal%22%20tabular-nums%3E%0D%0A%20%20%20%20%3Cn-number-animation%0D%0A%20%20%20%20%20%20ref%3D%22numberAnimationInstRef%22%0D%0A%20%20%20%20%20%20show-separator%0D%0A%20%20%20%20%20%20%3Afrom%3D%220%22%0D%0A%20%20%20%20%20%20%3Ato%3D%22100000000%22%0D%0A%20%20%20%20%20%20%3Aactive%3D%22false%22%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%3C%2Fn-statistic%3E%0D%0A%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0D%0A%20%20%20%20Play%0D%0A%20%20%3C%2Fn-button%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20NumberAnimationInst%20%7D%20from%20'naive-ui'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref%3CNumberAnimationInst%20%7C%20null%3E(null)%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0D%0A%20%20%20%20%20%20handleClick%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-statistic%20label%3D%22A%20little%20goal%22%20tabular-nums%3E%0D%0A%20%20%20%20%3Cn-number-animation%0D%0A%20%20%20%20%20%20ref%3D%22numberAnimationInstRef%22%0D%0A%20%20%20%20%20%20show-separator%0D%0A%20%20%20%20%20%20%3Afrom%3D%220%22%0D%0A%20%20%20%20%20%20%3Ato%3D%22100000000%22%0D%0A%20%20%20%20%20%20%3Aactive%3D%22false%22%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%3C%2Fn-statistic%3E%0D%0A%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0D%0A%20%20%20%20Play%0D%0A%20%20%3C%2Fn-button%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref(null)%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0A%20%20%20%20%20%20handleClick()%20%7B%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" Separator ")]),content:n(()=>[t(A,null,{default:n(()=>[o("The number is too large to count the digits.")]),_:1})]),demo:n(()=>[e("div",q,[t(m,{label:"A little goal","tabular-nums":""},{default:n(()=>[t(d,{ref:"numberAnimationInstRef","show-separator":"",from:0,to:1e8,active:!1},null,512)]),_:1}),t(D,{onClick:a.handleClick},{default:n(()=>[o(" Play ")]),_:1},8,["onClick"])])]),_:1})}const K=b(L,[["render",H]]),Q=E({setup(){const a=B(null);return{numberAnimationInstRef:a,handleClick(){var l;(l=a.value)==null||l.play()}}}}),X={class:"demo-card__view"};function Y(a,l,p,s,C,h){const A=i("n-text"),d=i("n-p"),m=i("n-a"),D=i("n-number-animation"),f=i("n-statistic"),v=i("n-button"),y=i("component-demo");return u(),c(y,{"demo-file-name":"intl.vue","relative-url":"D:/Code/naive-ui/src/number-animation/demos/enUS/intl.demo.vue",title:"I18n","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-statistic%20label%3D%22ru-RU%22%20tabular-nums%3E%0D%0A%20%20%20%20%3Cn-number-animation%0D%0A%20%20%20%20%20%20ref%3D%22numberAnimationInstRef%22%0D%0A%20%20%20%20%20%20%3Afrom%3D%220.0%22%0D%0A%20%20%20%20%20%20%3Ato%3D%22699700.699%22%0D%0A%20%20%20%20%20%20%3Aactive%3D%22false%22%0D%0A%20%20%20%20%20%20%3Aprecision%3D%223%22%0D%0A%20%20%20%20%20%20locale%3D%22ru-RU%22%0D%0A%20%20%20%20%20%20show-separator%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%3C%2Fn-statistic%3E%0D%0A%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0D%0A%20%20%20%20Play%0D%0A%20%20%3C%2Fn-button%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20NumberAnimationInst%20%7D%20from%20'naive-ui'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref%3CNumberAnimationInst%20%7C%20null%3E(null)%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0D%0A%20%20%20%20%20%20handleClick%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-statistic%20label%3D%22ru-RU%22%20tabular-nums%3E%0D%0A%20%20%20%20%3Cn-number-animation%0D%0A%20%20%20%20%20%20ref%3D%22numberAnimationInstRef%22%0D%0A%20%20%20%20%20%20%3Afrom%3D%220.0%22%0D%0A%20%20%20%20%20%20%3Ato%3D%22699700.699%22%0D%0A%20%20%20%20%20%20%3Aactive%3D%22false%22%0D%0A%20%20%20%20%20%20%3Aprecision%3D%223%22%0D%0A%20%20%20%20%20%20locale%3D%22ru-RU%22%0D%0A%20%20%20%20%20%20show-separator%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%3C%2Fn-statistic%3E%0D%0A%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0D%0A%20%20%20%20Play%0D%0A%20%20%3C%2Fn-button%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref(null)%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0A%20%20%20%20%20%20handleClick()%20%7B%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" I18n ")]),content:n(()=>[t(d,null,{default:n(()=>[o("Use "),t(A,{code:""},{default:n(()=>[o("locale")]),_:1}),o(" to set i18n language.")]),_:1}),t(d,null,{default:n(()=>[o("Please note that, the feature uses "),t(A,{code:""},{default:n(()=>[o("Intl")]),_:1}),o(" API. For compitability refers to "),t(m,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format",target:"_blank"},{default:n(()=>[o("format")]),_:1}),o(" and "),t(m,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts",target:"_blank"},{default:n(()=>[o("formatToParts")]),_:1}),o(".")]),_:1})]),demo:n(()=>[e("div",X,[t(f,{label:"ru-RU","tabular-nums":""},{default:n(()=>[t(D,{ref:"numberAnimationInstRef",from:0,to:699700.699,active:!1,precision:3,locale:"ru-RU","show-separator":""},null,512)]),_:1}),t(v,{onClick:a.handleClick},{default:n(()=>[o(" Play ")]),_:1},8,["onClick"])])]),_:1})}const Z=b(Q,[["render",Y]]),e0=E({setup(){const a=B(null),l=w();return{numberAnimationInstRef:a,handleClick(){var p;(p=a.value)==null||p.play()},handleFinish(){l.success("Finished")}}}}),n0={class:"demo-card__view"};function t0(a,l,p,s,C,h){const A=i("n-number-animation"),d=i("n-statistic"),m=i("n-button"),D=i("component-demo");return u(),c(D,{"demo-file-name":"finish.vue","relative-url":"D:/Code/naive-ui/src/number-animation/demos/enUS/finish.demo.vue",title:"Finish callback","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-statistic%20label%3D%22Post%20message%20on%20finish%22%20tabular-nums%3E%0D%0A%20%20%20%20%3Cn-number-animation%0D%0A%20%20%20%20%20%20ref%3D%22numberAnimationInstRef%22%0D%0A%20%20%20%20%20%20show-separator%0D%0A%20%20%20%20%20%20%3Afrom%3D%220%22%0D%0A%20%20%20%20%20%20%3Ato%3D%22100000000%22%0D%0A%20%20%20%20%20%20%3Aactive%3D%22false%22%0D%0A%20%20%20%20%20%20%40finish%3D%22handleFinish%22%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%3C%2Fn-statistic%3E%0D%0A%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0D%0A%20%20%20%20Play%0D%0A%20%20%3C%2Fn-button%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20NumberAnimationInst%2C%20useMessage%20%7D%20from%20'naive-ui'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref%3CNumberAnimationInst%20%7C%20null%3E(null)%0D%0A%20%20%20%20const%20message%20%3D%20useMessage()%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0D%0A%20%20%20%20%20%20handleClick%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20handleFinish%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20message.success('Finished')%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-statistic%20label%3D%22Post%20message%20on%20finish%22%20tabular-nums%3E%0D%0A%20%20%20%20%3Cn-number-animation%0D%0A%20%20%20%20%20%20ref%3D%22numberAnimationInstRef%22%0D%0A%20%20%20%20%20%20show-separator%0D%0A%20%20%20%20%20%20%3Afrom%3D%220%22%0D%0A%20%20%20%20%20%20%3Ato%3D%22100000000%22%0D%0A%20%20%20%20%20%20%3Aactive%3D%22false%22%0D%0A%20%20%20%20%20%20%40finish%3D%22handleFinish%22%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%3C%2Fn-statistic%3E%0D%0A%20%20%3Cn-button%20%40click%3D%22handleClick%22%3E%0D%0A%20%20%20%20Play%0D%0A%20%20%3C%2Fn-button%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20useMessage%20%7D%20from%20%22naive-ui%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20numberAnimationInstRef%20%3D%20ref(null)%3B%0A%20%20%20%20const%20message%20%3D%20useMessage()%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20numberAnimationInstRef%2C%0A%20%20%20%20%20%20handleClick()%20%7B%0A%20%20%20%20%20%20%20%20numberAnimationInstRef.value%3F.play()%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20handleFinish()%20%7B%0A%20%20%20%20%20%20%20%20message.success(%22Finished%22)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[o(" Finish callback ")]),content:n(()=>[]),demo:n(()=>[e("div",n0,[t(d,{label:"Post message on finish","tabular-nums":""},{default:n(()=>[t(A,{ref:"numberAnimationInstRef","show-separator":"",from:0,to:1e8,active:!1,onFinish:a.handleFinish},null,8,["onFinish"])]),_:1}),t(m,{onClick:a.handleClick},{default:n(()=>[o(" Play ")]),_:1},8,["onClick"])])]),_:1})}const o0=b(e0,[["render",t0]]),i0={components:{basicVueDemo:W,precisionVueDemo:O,separatorVueDemo:K,intlVueDemo:Z,finishVueDemo:o0},setup(){const a=V(),l=$(()=>!a.value),p=a;return{showAnchor:l,displayMode:M(),wrapperStyle:I(()=>p.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:I(()=>l.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/number-animation/demos/enUS/index.demo-entry.md"}}},a0={class:"md-table-wrapper"},l0=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Description"),e("th",null,"Version")])],-1),s0=e("td",null,"active",-1),r0=e("td",null,"Whether to play the animation.",-1),u0=e("td",null,"2.23.2",-1),m0=e("td",null,"duration",-1),c0=e("td",null,"The duration of",-1),A0=e("td",null,"2.23.2",-1),d0=e("td",null,"from",-1),D0=e("td",null,"Start value of the animation",-1),p0=e("td",null,"2.23.2",-1),_0=e("td",null,"locale",-1),f0=e("td",null,"Follows config provider.",-1),b0=e("td",null,"Language of the number.",-1),C0=e("td",null,"2.24.2",-1),h0=e("td",null,"precision",-1),v0=e("td",null,"Decimal precision of the displayed value.",-1),E0=e("td",null,"2.23.2",-1),B0=e("td",null,"show-separator",-1),y0=e("td",null,"Whether to show separator.",-1),F0=e("td",null,"2.23.2",-1),k0=e("td",null,"to",-1),I0=e("td",null,"Target value.",-1),g0=e("td",null,"2.23.2",-1),R0=e("td",null,"on-finish",-1),x0=e("td",null,"The callback on animation is finished.",-1),N0=e("td",null,"2.31.0",-1),P0={class:"md-table-wrapper"},w0=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Parameters"),e("th",null,"Description"),e("th",null,"Version")])],-1),V0=e("td",null,"play",-1),$0=e("td",null,"Play the animation.",-1),M0=e("td",null,"2.23.2",-1),S0={key:0,style:{width:"192px"}};function U0(a,l,p,s,C,h){const A=i("edit-on-github-header"),d=i("n-p"),m=i("n-h2"),D=i("basicVueDemo"),f=i("precisionVueDemo"),v=i("separatorVueDemo"),y=i("intlVueDemo"),x=i("finishVueDemo"),N=i("component-demos"),F=i("n-h3"),r=i("n-text"),k=i("n-table"),_=i("n-anchor-link"),P=i("n-anchor");return u(),g("div",{class:"doc",style:R(s.wrapperStyle)},[e("div",{style:R(s.contentStyle)},[t(A,{"relative-url":"D:/Code/naive-ui/src/number-animation/demos/enUS/index.demo-entry.md",text:"Number Animation"}),t(d,null,{default:n(()=>[o("Tween the number.")]),_:1}),t(m,{id:"Demos"},{default:n(()=>[o("Demos")]),_:1}),t(N,{span:2},{default:n(()=>[t(D),t(f),t(v),t(y),t(x)]),_:1}),t(m,{id:"API"},{default:n(()=>[o("API")]),_:1}),t(F,{id:"NumberAnimation-Props"},{default:n(()=>[o("NumberAnimation Props")]),_:1}),e("div",a0,[t(k,{"single-column":"",class:"md-table"},{default:n(()=>[l0,e("tbody",null,[e("tr",null,[s0,e("td",null,[t(r,{code:""},{default:n(()=>[o("boolean")]),_:1})]),e("td",null,[t(r,{code:""},{default:n(()=>[o("true")]),_:1})]),r0,u0]),e("tr",null,[m0,e("td",null,[t(r,{code:""},{default:n(()=>[o("number")]),_:1})]),e("td",null,[t(r,{code:""},{default:n(()=>[o("3000")]),_:1})]),c0,A0]),e("tr",null,[d0,e("td",null,[t(r,{code:""},{default:n(()=>[o("number")]),_:1})]),e("td",null,[t(r,{code:""},{default:n(()=>[o("0")]),_:1})]),D0,p0]),e("tr",null,[_0,e("td",null,[t(r,{code:""},{default:n(()=>[o("string")]),_:1})]),f0,b0,C0]),e("tr",null,[h0,e("td",null,[t(r,{code:""},{default:n(()=>[o("number")]),_:1})]),e("td",null,[t(r,{code:""},{default:n(()=>[o("0")]),_:1})]),v0,E0]),e("tr",null,[B0,e("td",null,[t(r,{code:""},{default:n(()=>[o("boolean")]),_:1})]),e("td",null,[t(r,{code:""},{default:n(()=>[o("false")]),_:1})]),y0,F0]),e("tr",null,[k0,e("td",null,[t(r,{code:""},{default:n(()=>[o("number")]),_:1})]),e("td",null,[t(r,{code:""},{default:n(()=>[o("undefined")]),_:1})]),I0,g0]),e("tr",null,[R0,e("td",null,[t(r,{code:""},{default:n(()=>[o("() => void")]),_:1})]),e("td",null,[t(r,{code:""},{default:n(()=>[o("undefined")]),_:1})]),x0,N0])])]),_:1})]),t(F,{id:"NumberAnimation-Methods"},{default:n(()=>[o("NumberAnimation Methods")]),_:1}),e("div",P0,[t(k,{"single-column":"",class:"md-table"},{default:n(()=>[w0,e("tbody",null,[e("tr",null,[V0,e("td",null,[t(r,{code:""},{default:n(()=>[o("()")]),_:1})]),$0,M0])])]),_:1})])],4),s.showAnchor?(u(),g("div",S0,[t(P,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:n(()=>[(s.displayMode,u(),c(_,{key:0,title:"Basic\r",href:"#basic.vue"})),(s.displayMode,u(),c(_,{key:1,title:"Precision\r",href:"#precision.vue"})),(s.displayMode,u(),c(_,{key:2,title:"Separator\r",href:"#separator.vue"})),(s.displayMode,u(),c(_,{key:3,title:"I18n\r",href:"#intl.vue"})),(s.displayMode,u(),c(_,{key:4,title:"Finish callback\r",href:"#finish.vue"})),(s.displayMode,u(),c(_,{key:5,title:"API",href:"#API"})),(s.displayMode,u(),c(_,{key:6,title:"NumberAnimation Props",href:"#NumberAnimation-Props"})),(s.displayMode,u(),c(_,{key:7,title:"NumberAnimation Methods",href:"#NumberAnimation-Methods"}))]),_:1})])):S("",!0)],4)}const j0=b(i0,[["render",U0]]);export{j0 as default};
