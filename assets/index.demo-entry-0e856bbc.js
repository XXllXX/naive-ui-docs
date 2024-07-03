import{j as B,k as w,l as y,_ as v,r as l,o as s,i as u,w as t,g as e,f as n,e as o,a4 as P,c as T,t as U,a5 as j,a6 as R,u as Z,a as W,b as Y,d as N,n as x,h as q}from"./index-9afb4b71.js";const G=B({setup(){return{darkTheme:w,theme:y(null)}}}),K={class:"demo-card__view"};function H(a,i,m,c,D,h){const r=l("n-text"),p=l("n-p"),_=l("n-button"),f=l("n-space"),A=l("n-card"),g=l("n-config-provider"),k=l("component-demo");return s(),u(k,{"demo-file-name":"theme.vue","relative-url":"D:/Code/naive-ui/src/config-provider/demos/enUS/theme.demo.vue",title:"Theme","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-config-provider%20%3Atheme%3D%22theme%22%3E%0D%0A%20%20%20%20%3Cn-card%3E%0D%0A%20%20%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20%40click%3D%22theme%20%3D%20darkTheme%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20Dark%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20%40click%3D%22theme%20%3D%20null%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20Light%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%20%20%3C%2Fn-card%3E%0D%0A%20%20%3C%2Fn-config-provider%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20darkTheme%20%7D%20from%20'naive-ui'%0D%0Aimport%20type%20%7B%20GlobalTheme%20%7D%20from%20'naive-ui'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20darkTheme%2C%0D%0A%20%20%20%20%20%20theme%3A%20ref%3CGlobalTheme%20%7C%20null%3E(null)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-config-provider%20%3Atheme%3D%22theme%22%3E%0D%0A%20%20%20%20%3Cn-card%3E%0D%0A%20%20%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20%40click%3D%22theme%20%3D%20darkTheme%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20Dark%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20%40click%3D%22theme%20%3D%20null%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20Light%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%20%20%3C%2Fn-card%3E%0D%0A%20%20%3C%2Fn-config-provider%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20darkTheme%20%7D%20from%20%22naive-ui%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20darkTheme%2C%0A%20%20%20%20%20%20theme%3A%20ref(null)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[e(" Theme ")]),content:t(()=>[n(p,null,{default:t(()=>[e("Set theme of inner components of "),n(r,{code:""},{default:t(()=>[e("n-config-provider")]),_:1}),e(".")]),_:1})]),demo:t(()=>[o("div",K,[n(g,{theme:a.theme},{default:t(()=>[n(A,null,{default:t(()=>[n(f,null,{default:t(()=>[n(_,{onClick:i[0]||(i[0]=F=>a.theme=a.darkTheme)},{default:t(()=>[e(" Dark ")]),_:1}),n(_,{onClick:i[1]||(i[1]=F=>a.theme=null)},{default:t(()=>[e(" Light ")]),_:1})]),_:1})]),_:1})]),_:1},8,["theme"])])]),_:1})}const J=v(G,[["render",H]]),Q=B({setup(){return{ns:y("custom-app-namespace1"),isActive:y(!1)}}}),X={class:"demo-card__view"},ee=o("span",null,"Detached Part",-1);function te(a,i,m,c,D,h){const r=l("n-text"),p=l("n-p"),_=l("n-button"),f=l("n-tooltip"),A=l("n-config-provider"),g=l("component-demo");return s(),u(g,{"demo-file-name":"namespace.vue","relative-url":"D:/Code/naive-ui/src/config-provider/demos/enUS/namespace.demo.vue",title:"Namespace (class on detached DOM)","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-config-provider%20%3Anamespace%3D%22ns%22%3E%0D%0A%20%20%20%20%3Cn-tooltip%20placement%3D%22bottom%22%20trigger%3D%22click%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20%40click%3D%22isActive%20%3D%20true%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20Activate%20Component%20with%20Detached%20Content%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3Cspan%3EDetached%20Part%3C%2Fspan%3E%0D%0A%20%20%20%20%3C%2Fn-tooltip%3E%0D%0A%20%20%3C%2Fn-config-provider%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20ns%3A%20ref('custom-app-namespace1')%2C%0D%0A%20%20%20%20%20%20isActive%3A%20ref(false)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-config-provider%20%3Anamespace%3D%22ns%22%3E%0D%0A%20%20%20%20%3Cn-tooltip%20placement%3D%22bottom%22%20trigger%3D%22click%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20%40click%3D%22isActive%20%3D%20true%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20Activate%20Component%20with%20Detached%20Content%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3Cspan%3EDetached%20Part%3C%2Fspan%3E%0D%0A%20%20%20%20%3C%2Fn-tooltip%3E%0D%0A%20%20%3C%2Fn-config-provider%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20ns%3A%20ref(%22custom-app-namespace1%22)%2C%0A%20%20%20%20%20%20isActive%3A%20ref(false)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[e(" Namespace (class on detached DOM) ")]),content:t(()=>[n(p,null,{default:t(()=>[e("Some parts of component are detached to "),n(r,{code:""},{default:t(()=>[e("document.body")]),_:1}),e(". If you want to add a class to those detached elements, use "),n(r,{code:""},{default:t(()=>[e("namespace")]),_:1}),e(" prop of "),n(r,{code:""},{default:t(()=>[e("n-config-provider")]),_:1}),e(". Open devtools to see detached part.")]),_:1})]),demo:t(()=>[o("div",X,[n(A,{namespace:a.ns},{default:t(()=>[n(f,{placement:"bottom",trigger:"click"},{trigger:t(()=>[n(_,{onClick:i[0]||(i[0]=k=>a.isActive=!0)},{default:t(()=>[e(" Activate Component with Detached Content ")]),_:1})]),default:t(()=>[ee]),_:1})]),_:1},8,["namespace"])])]),_:1})}const ne=v(Q,[["render",te]]),oe={},le={class:"demo-card__view"};function de(a,i){const m=l("n-text"),c=l("n-p"),D=l("n-tag"),h=l("n-config-provider"),r=l("component-demo");return s(),u(r,{"demo-file-name":"inherit-theme.vue","relative-url":"D:/Code/naive-ui/src/config-provider/demos/enUS/inherit-theme.demo.vue",title:"Inherit theme","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-config-provider%3E%0D%0A%20%20%20%20%3Cn-tag%3EOops%3C%2Fn-tag%3E%0D%0A%20%20%3C%2Fn-config-provider%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[e(" Inherit theme ")]),content:t(()=>[n(c,null,{default:t(()=>[e("If you don't set theme of "),n(m,{code:""},{default:t(()=>[e("n-config-provider")]),_:1}),e(", the theme of "),n(m,{code:""},{default:t(()=>[e("n-config-provider")]),_:1}),e(" is inherited by default.")]),_:1})]),demo:t(()=>[o("div",le,[n(h,null,{default:t(()=>[n(D,null,{default:t(()=>[e("Oops")]),_:1})]),_:1})])]),_:1})}const ae=v(oe,[["render",de]]),ce=B({setup(){const a=P();return{theme:T(()=>a.value==="dark"?w:null),osTheme:a}}}),ie={class:"demo-card__view"};function re(a,i,m,c,D,h){const r=l("n-text"),p=l("n-p"),_=l("n-card"),f=l("n-config-provider"),A=l("component-demo");return s(),u(A,{"demo-file-name":"os-theme.vue","relative-url":"D:/Code/naive-ui/src/config-provider/demos/enUS/os-theme.demo.vue",title:"Use OS theme","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-config-provider%20%3Atheme%3D%22theme%22%3E%0D%0A%20%20%20%20%3Cn-card%3E%20Your%20current%20system%20theme%20is%20%7B%7B%20osTheme%20%7D%7D.%20%3C%2Fn-card%3E%0D%0A%20%20%3C%2Fn-config-provider%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20computed%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20useOsTheme%2C%20darkTheme%20%7D%20from%20'naive-ui'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20osThemeRef%20%3D%20useOsTheme()%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20theme%3A%20computed(()%20%3D%3E%20(osThemeRef.value%20%3D%3D%3D%20'dark'%20%3F%20darkTheme%20%3A%20null))%2C%0D%0A%20%20%20%20%20%20osTheme%3A%20osThemeRef%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-config-provider%20%3Atheme%3D%22theme%22%3E%0D%0A%20%20%20%20%3Cn-card%3E%20Your%20current%20system%20theme%20is%20%7B%7B%20osTheme%20%7D%7D.%20%3C%2Fn-card%3E%0D%0A%20%20%3C%2Fn-config-provider%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20computed%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20useOsTheme%2C%20darkTheme%20%7D%20from%20%22naive-ui%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20osThemeRef%20%3D%20useOsTheme()%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20theme%3A%20computed(()%20%3D%3E%20osThemeRef.value%20%3D%3D%3D%20%22dark%22%20%3F%20darkTheme%20%3A%20null)%2C%0A%20%20%20%20%20%20osTheme%3A%20osThemeRef%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[e(" Use OS theme ")]),content:t(()=>[n(p,null,{default:t(()=>[e("Naive UI provides "),n(r,{code:""},{default:t(()=>[e("useOsTheme")]),_:1}),e(" to get the current theme of your OS.")]),_:1})]),demo:t(()=>[o("div",ie,[n(f,{theme:a.theme},{default:t(()=>[n(_,null,{default:t(()=>[e(" Your current system theme is "+U(a.osTheme)+". ",1)]),_:1})]),_:1},8,["theme"])])]),_:1})}const se=v(ce,[["render",re]]),ue=B({setup(){return{zhCN:j,dateZhCN:R,locale:y(null),dateLocale:y(null)}}}),me={class:"demo-card__view"};function pe(a,i,m,c,D,h){const r=l("n-button"),p=l("n-space"),_=l("n-date-picker"),f=l("n-config-provider"),A=l("component-demo");return s(),u(A,{"demo-file-name":"language.vue","relative-url":"D:/Code/naive-ui/src/config-provider/demos/enUS/language.demo.vue",title:"Locale","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%3Cn-button%0D%0A%20%20%20%20%20%20%20%20%40click%3D%22%0D%0A%20%20%20%20%20%20%20%20%20%20()%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20locale%20%3D%20null%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20dateLocale%20%3D%20null%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%22%0D%0A%20%20%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%20%20en-US%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%0D%0A%20%20%20%20%20%20%20%20%40click%3D%22%0D%0A%20%20%20%20%20%20%20%20%20%20()%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20locale%20%3D%20zhCN%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20dateLocale%20%3D%20dateZhCN%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%22%0D%0A%20%20%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%20%20zh-CN%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%20%20%3Cn-config-provider%20%3Alocale%3D%22locale%22%20%3Adate-locale%3D%22dateLocale%22%3E%0D%0A%20%20%20%20%20%20%3Cn-date-picker%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-config-provider%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20zhCN%2C%20dateZhCN%20%7D%20from%20'naive-ui'%0D%0Aimport%20type%20%7B%20NLocale%2C%20NDateLocale%20%7D%20from%20'naive-ui'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20zhCN%2C%0D%0A%20%20%20%20%20%20dateZhCN%2C%0D%0A%20%20%20%20%20%20locale%3A%20ref%3CNLocale%20%7C%20null%3E(null)%2C%0D%0A%20%20%20%20%20%20dateLocale%3A%20ref%3CNDateLocale%20%7C%20null%3E(null)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%3Cn-button%0D%0A%20%20%20%20%20%20%20%20%40click%3D%22%0D%0A%20%20%20%20%20%20%20%20%20%20()%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20locale%20%3D%20null%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20dateLocale%20%3D%20null%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%22%0D%0A%20%20%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%20%20en-US%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3Cn-button%0D%0A%20%20%20%20%20%20%20%20%40click%3D%22%0D%0A%20%20%20%20%20%20%20%20%20%20()%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20locale%20%3D%20zhCN%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20dateLocale%20%3D%20dateZhCN%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%22%0D%0A%20%20%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%20%20zh-CN%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%20%20%3Cn-config-provider%20%3Alocale%3D%22locale%22%20%3Adate-locale%3D%22dateLocale%22%3E%0D%0A%20%20%20%20%20%20%3Cn-date-picker%20%2F%3E%0D%0A%20%20%20%20%3C%2Fn-config-provider%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20zhCN%2C%20dateZhCN%20%7D%20from%20%22naive-ui%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20zhCN%2C%0A%20%20%20%20%20%20dateZhCN%2C%0A%20%20%20%20%20%20locale%3A%20ref(null)%2C%0A%20%20%20%20%20%20dateLocale%3A%20ref(null)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[e(" Locale ")]),content:t(()=>[]),demo:t(()=>[o("div",me,[n(p,{vertical:""},{default:t(()=>[n(p,null,{default:t(()=>[n(r,{onClick:i[0]||(i[0]=()=>{a.locale=null,a.dateLocale=null})},{default:t(()=>[e(" en-US ")]),_:1}),n(r,{onClick:i[1]||(i[1]=()=>{a.locale=a.zhCN,a.dateLocale=a.dateZhCN})},{default:t(()=>[e(" zh-CN ")]),_:1})]),_:1}),n(f,{locale:a.locale,"date-locale":a.dateLocale},{default:t(()=>[n(_)]),_:1},8,["locale","date-locale"])]),_:1})])]),_:1})}const _e=v(ue,[["render",pe]]),fe={},De={class:"demo-card__view"};function he(a,i){const m=l("n-text"),c=l("n-p"),D=l("n-tag"),h=l("n-card"),r=l("n-config-provider"),p=l("component-demo");return s(),u(p,{"demo-file-name":"transparent.vue","relative-url":"D:/Code/naive-ui/src/config-provider/demos/enUS/transparent.demo.vue",title:"No wrapper DOM","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-config-provider%20abstract%3E%0D%0A%20%20%20%20%3Cn-card%3E%0D%0A%20%20%20%20%20%20%3Cn-tag%3ENo%20Wrapper%20DOM%3C%2Fn-tag%3E%0D%0A%20%20%20%20%3C%2Fn-card%3E%0D%0A%20%20%3C%2Fn-config-provider%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[e(" No wrapper DOM ")]),content:t(()=>[n(c,null,{default:t(()=>[e("If you don't need wrapper DOM, set "),n(m,{code:""},{default:t(()=>[e("abstract")]),_:1}),e(" on it.")]),_:1})]),demo:t(()=>[o("div",De,[n(r,{abstract:""},{default:t(()=>[n(h,null,{default:t(()=>[n(D,null,{default:t(()=>[e("No Wrapper DOM")]),_:1})]),_:1})]),_:1})])]),_:1})}const Ae=v(fe,[["render",he]]),Ce={},ve={class:"demo-card__view"};function ge(a,i){const m=l("n-text"),c=l("n-p"),D=l("n-button"),h=l("n-config-provider"),r=l("component-demo");return s(),u(r,{"demo-file-name":"inline-theme-disabled.vue","relative-url":"D:/Code/naive-ui/src/config-provider/demos/enUS/inline-theme-disabled.demo.vue",title:"Disable inline theme","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-config-provider%20inline-theme-disabled%3E%0D%0A%20%20%20%20%3Cn-button%3ENo%20inline%20CSS%20variable%20on%20the%20button%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-config-provider%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[e(" Disable inline theme ")]),content:t(()=>[n(c,null,{default:t(()=>[e("By default, naive-ui uses inline style to hold theme variables, so every component is bound with large amount of inline CSS. If you need SSR, or just make your devtools clear, you can enable "),n(m,{code:""},{default:t(()=>[e("inline-theme-disabled")]),_:1}),e(" prop.")]),_:1}),n(c,null,{default:t(()=>[e("Note that if you will change "),n(m,{code:""},{default:t(()=>[e("theme-overrides")]),_:1}),e(" frequently, it's not recommended to enable the prop. Many outdated style elements will be keeped after "),n(m,{code:""},{default:t(()=>[e("theme-overrides")]),_:1}),e(" changes.")]),_:1}),n(c,null,{default:t(()=>[e("The prop is not responsive.")]),_:1})]),demo:t(()=>[o("div",ve,[n(h,{"inline-theme-disabled":""},{default:t(()=>[n(D,null,{default:t(()=>[e("No inline CSS variable on the button")]),_:1})]),_:1})])]),_:1})}const Ee=v(Ce,[["render",ge]]),be={components:{themeVueDemo:J,namespaceVueDemo:ne,inheritThemeVueDemo:ae,osThemeVueDemo:se,languageVueDemo:_e,transparentVueDemo:Ae,inlineThemeDisabledVueDemo:Ee},setup(){const a=Z(),i=W(()=>!a.value),m=a;return{showAnchor:i,displayMode:Y(),wrapperStyle:T(()=>m.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:T(()=>i.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/config-provider/demos/enUS/index.demo-entry.md"}}},ye={class:"md-table-wrapper"},ke=o("thead",null,[o("tr",null,[o("th",null,"Name"),o("th",null,"Type"),o("th",null,"Default"),o("th",null,"Description"),o("th",null,"Version")])],-1),Be=o("td",null,"abstract",-1),Fe=o("td",null,null,-1),Te=o("td",null,"breakpoints",-1),Ne=o("td",null,null,-1),xe=o("td",null,"cls-prefix",-1),we=o("td",null,"The class prefix of all inner components. It's applied in the first time.",-1),Se=o("td",null,null,-1),Ve=o("td",null,"date-locale",-1),$e=o("td",null,null,-1),Oe=o("td",null,"inline-theme-disabled",-1),Le=o("td",null,"Whether to disabled inline theme CSS variables. If you won't change theme overrides frequently in client side, and need SSR or make devtools looks clear. You can enable the prop. Note that the prop is not responsive.",-1),Ie=o("td",null,"2.26.0",-1),Me=o("td",null,"katex",-1),ze=o("td",null,"2.34.0",-1),Pe=o("td",null,"locale",-1),Ue=o("td",null,null,-1),je=o("td",null,"namespace",-1),Re=o("td",null,null,-1),Ze=o("td",null,"preflight-style-disabled",-1),We=o("td",null,"2.29.0",-1),Ye=o("td",null,"tag",-1),qe=o("td",null,null,-1),Ge=o("td",null,"theme",-1),Ke=o("td",null,null,-1),He=o("td",null,"theme-overrides",-1),Je=o("td",null,null,-1),Qe={key:0,style:{width:"192px"}};function Xe(a,i,m,c,D,h){const r=l("edit-on-github-header"),p=l("n-p"),_=l("n-a"),f=l("router-link"),A=l("n-h2"),g=l("themeVueDemo"),k=l("namespaceVueDemo"),F=l("inheritThemeVueDemo"),S=l("osThemeVueDemo"),V=l("languageVueDemo"),$=l("transparentVueDemo"),O=l("inlineThemeDisabledVueDemo"),L=l("component-demos"),I=l("n-h3"),d=l("n-text"),M=l("n-table"),C=l("n-anchor-link"),z=l("n-anchor");return s(),N("div",{class:"doc",style:x(c.wrapperStyle)},[o("div",{style:x(c.contentStyle)},[n(r,{"relative-url":"D:/Code/naive-ui/src/config-provider/demos/enUS/index.demo-entry.md",text:"Config Provider"}),n(p,null,{default:t(()=>[e("Config Provider is used to set global theme, set global language and set namespace for components (detached parts).")]),_:1}),n(p,null,{default:t(()=>[e("For more info about theming, see "),n(f,{to:"../docs/customize-theme",custom:""},{default:t(({navigate:E,href:b})=>[n(_,{href:b,onClick:E},{default:t(()=>[e("Customizing Theme")]),_:2},1032,["href","onClick"])]),_:1}),e(".")]),_:1}),n(A,{id:"Demos"},{default:t(()=>[e("Demos")]),_:1}),n(L,{span:2},{default:t(()=>[n(g),n(k),n(F),n(S),n(V),n($),n(O)]),_:1}),n(A,{id:"API"},{default:t(()=>[e("API")]),_:1}),n(I,{id:"ConfigProvider-Props"},{default:t(()=>[e("ConfigProvider Props")]),_:1}),o("div",ye,[n(M,{"single-column":"",class:"md-table"},{default:t(()=>[ke,o("tbody",null,[o("tr",null,[Be,o("td",null,[n(d,{code:""},{default:t(()=>[e("boolean")]),_:1})]),o("td",null,[n(d,{code:""},{default:t(()=>[e("false")]),_:1})]),o("td",null,[e("If "),n(d,{code:""},{default:t(()=>[e("n-config-provider")]),_:1}),e(" has no wrapper DOM")]),Fe]),o("tr",null,[Te,o("td",null,[n(d,{code:""},{default:t(()=>[e("{ [k: string]: number }")]),_:1})]),o("td",null,[n(d,{code:""},{default:t(()=>[e("{ xs: 0, s: 640, m: 1024, l: 1280, xl: 1536, xxl: 1920 }")]),_:1})]),o("td",null,[e("Responsive breakpoints, it will be used in "),n(d,{code:""},{default:t(()=>[e("n-grid")]),_:1}),e(". The prop is not responsive, you need to set it on its first mount.")]),Ne]),o("tr",null,[xe,o("td",null,[n(d,{code:""},{default:t(()=>[e("string")]),_:1})]),o("td",null,[n(d,{code:""},{default:t(()=>[e("n")]),_:1})]),we,Se]),o("tr",null,[Ve,o("td",null,[n(d,{code:""},{default:t(()=>[e("DateLocale | null")]),_:1})]),o("td",null,[n(d,{code:""},{default:t(()=>[e("undefined")]),_:1})]),o("td",null,[e("The date locale object to be consumed by its child. If set to "),n(d,{code:""},{default:t(()=>[e("null")]),_:1}),e(" it will use the default "),n(d,{code:""},{default:t(()=>[e("dateEnUS")]),_:1}),e(" locale. If set to "),n(d,{code:""},{default:t(()=>[e("undefined")]),_:1}),e(" it will inherit its parent "),n(d,{code:""},{default:t(()=>[e("n-config-provider")]),_:1}),e(".")]),$e]),o("tr",null,[Oe,o("td",null,[n(d,{code:""},{default:t(()=>[e("boolean")]),_:1})]),o("td",null,[n(d,{code:""},{default:t(()=>[e("false")]),_:1})]),Le,Ie]),o("tr",null,[Me,o("td",null,[n(d,{code:""},{default:t(()=>[e("object")]),_:1})]),o("td",null,[n(d,{code:""},{default:t(()=>[e("undefined")]),_:1})]),o("td",null,[e("Katex object for "),n(d,{code:""},{default:t(()=>[e("n-equation")]),_:1}),e(".")]),ze]),o("tr",null,[Pe,o("td",null,[n(d,{code:""},{default:t(()=>[e("Locale | null")]),_:1})]),o("td",null,[n(d,{code:""},{default:t(()=>[e("undefined")]),_:1})]),o("td",null,[e("The locale object to be consumed by its child. If set to "),n(d,{code:""},{default:t(()=>[e("null")]),_:1}),e(" it will use the default "),n(d,{code:""},{default:t(()=>[e("enUS")]),_:1}),e(" locale. If set to "),n(d,{code:""},{default:t(()=>[e("undefined")]),_:1}),e(" it will inherit its parent "),n(d,{code:""},{default:t(()=>[e("n-config-provider")]),_:1}),e(".")]),Ue]),o("tr",null,[je,o("td",null,[n(d,{code:""},{default:t(()=>[e("string")]),_:1})]),o("td",null,[n(d,{code:""},{default:t(()=>[e("undefined")]),_:1})]),o("td",null,[e("Class name of detached parts of components inside "),n(d,{code:""},{default:t(()=>[e("n-config-provider")]),_:1})]),Re]),o("tr",null,[Ze,o("td",null,[n(d,{code:""},{default:t(()=>[e("boolean")]),_:1})]),o("td",null,[n(d,{code:""},{default:t(()=>[e("false")]),_:1})]),o("td",null,[e("Whether to disabled preflight style of naive-ui. If you disable it, you can take control of all global css. Also you can use "),n(d,{code:""},{default:t(()=>[e("n-global-style")]),_:1}),e(" to apply global style (which is recommend since global style will be reactive).")]),We]),o("tr",null,[Ye,o("td",null,[n(d,{code:""},{default:t(()=>[e("string")]),_:1})]),o("td",null,[n(d,{code:""},{default:t(()=>[e("'div'")]),_:1})]),o("td",null,[e("What tag "),n(d,{code:""},{default:t(()=>[e("n-config-provider")]),_:1}),e(" will be rendered as")]),qe]),o("tr",null,[Ge,o("td",null,[n(d,{code:""},{default:t(()=>[e("Theme | null")]),_:1})]),o("td",null,[n(d,{code:""},{default:t(()=>[e("undefined")]),_:1})]),o("td",null,[e("The theme object to be consumed by its child. If set to "),n(d,{code:""},{default:t(()=>[e("null")]),_:1}),e(" it will use the default light theme. If set to "),n(d,{code:""},{default:t(()=>[e("undefined")]),_:1}),e(" it will inherit its parent "),n(d,{code:""},{default:t(()=>[e("n-config-provider")]),_:1}),e(". For more details please see "),n(f,{to:"../docs/customize-theme",custom:""},{default:t(({navigate:E,href:b})=>[n(_,{href:b,onClick:E},{default:t(()=>[e("Customizing Theme")]),_:2},1032,["href","onClick"])]),_:1}),e(".")]),Ke]),o("tr",null,[He,o("td",null,[n(d,{code:""},{default:t(()=>[e("ThemeOverrides | null")]),_:1})]),o("td",null,[n(d,{code:""},{default:t(()=>[e("undefined")]),_:1})]),o("td",null,[e("The theme vars overrides to be consumed by its child. If set to "),n(d,{code:""},{default:t(()=>[e("null")]),_:1}),e(" it will clear all theme vars. If set to "),n(d,{code:""},{default:t(()=>[e("undefined")]),_:1}),e(" it will inherit its parent "),n(d,{code:""},{default:t(()=>[e("n-config-provider")]),_:1}),e(". For more details please see "),n(f,{to:"../docs/customize-theme",custom:""},{default:t(({navigate:E,href:b})=>[n(_,{href:b,onClick:E},{default:t(()=>[e("Customizing Theme")]),_:2},1032,["href","onClick"])]),_:1}),e(".")]),Je])])]),_:1})])],4),c.showAnchor?(s(),N("div",Qe,[n(z,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(c.displayMode,s(),u(C,{key:0,title:"Theme\r",href:"#theme.vue"})),(c.displayMode,s(),u(C,{key:1,title:"Namespace (class on detached DOM)\r",href:"#namespace.vue"})),(c.displayMode,s(),u(C,{key:2,title:"Inherit theme\r",href:"#inherit-theme.vue"})),(c.displayMode,s(),u(C,{key:3,title:"Use OS theme\r",href:"#os-theme.vue"})),(c.displayMode,s(),u(C,{key:4,title:"Locale\r",href:"#language.vue"})),(c.displayMode,s(),u(C,{key:5,title:"No wrapper DOM\r",href:"#transparent.vue"})),(c.displayMode,s(),u(C,{key:6,title:"Disable inline theme\r",href:"#inline-theme-disabled.vue"})),(c.displayMode,s(),u(C,{key:7,title:"API",href:"#API"})),(c.displayMode,s(),u(C,{key:8,title:"ConfigProvider Props",href:"#ConfigProvider-Props"}))]),_:1})])):q("",!0)],4)}const t0=v(be,[["render",Xe]]);export{t0 as default};
