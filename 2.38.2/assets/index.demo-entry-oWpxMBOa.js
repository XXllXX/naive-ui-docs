import{_ as C,j as y,k as B,l as $,r as n,o as d,i as _,w as e,g as o,f as t,e as v,t as V,u as F,a as N,b as U,c as T,d as x,n as b,h as M}from"./index-DxZkTPDs.js";import{u as j}from"./use-theme-vars-BBpfVnY0.js";const I=y({setup(){return{darkTheme:B,theme:$(null)}}}),L={class:"demo-card__view"};function O(r,a,h,s,D,E){const i=n("n-text"),m=n("n-p"),c=n("n-button"),f=n("n-space"),l=n("n-card"),u=n("n-config-provider"),A=n("component-demo");return d(),_(A,{"demo-file-name":"provide-theme","relative-url":"D:/Code/naive-ui/demo/pages/docs/theme/enUS/provide-theme.demo.md",title:"Provide Theme","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0A%20%20%3Cn-config-provider%20%3Atheme%3D%22theme%22%3E%0A%20%20%20%20%3Cn-card%3E%0A%20%20%20%20%20%20%3Cn-space%3E%0A%20%20%20%20%20%20%20%20%3Cn-button%20%40click%3D%22theme%20%3D%20darkTheme%22%3EDark%3C%2Fn-button%3E%0A%20%20%20%20%20%20%20%20%3Cn-button%20%40click%3D%22theme%20%3D%20null%22%3ELight%3C%2Fn-button%3E%0A%20%20%20%20%20%20%3C%2Fn-space%3E%0A%20%20%20%20%3C%2Fn-card%3E%0A%20%20%3C%2Fn-config-provider%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20darkTheme%20%7D%20from%20'naive-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20darkTheme%2C%0A%20%20%20%20%20%20theme%3A%20ref(null)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E","language-type":"js"},{title:e(()=>[o(" Provide Theme ")]),content:e(()=>[t(m,null,{default:e(()=>[o("Use "),t(i,{code:""},{default:e(()=>[o("n-config-provider")]),_:1}),o(" to set the theme of all its descendant components.")]),_:1})]),demo:e(()=>[v("div",L,[t(u,{theme:r.theme},{default:e(()=>[t(l,null,{default:e(()=>[t(f,null,{default:e(()=>[t(c,{onClick:a[0]||(a[0]=p=>r.theme=r.darkTheme)},{default:e(()=>[o("Dark")]),_:1}),t(c,{onClick:a[1]||(a[1]=p=>r.theme=null)},{default:e(()=>[o("Light")]),_:1})]),_:1})]),_:1})]),_:1},8,["theme"])])]),_:1})}const P=C(I,[["render",O]]),z=y({setup(){return{darkTheme:B,theme:$(null)}}}),R={class:"demo-card__view"};function Y(r,a,h,s,D,E){const i=n("n-text"),m=n("n-a"),c=n("router-link"),f=n("n-p"),l=n("n-button"),u=n("n-space"),A=n("n-el"),p=n("n-card"),g=n("n-config-provider"),w=n("component-demo");return d(),_(w,{"demo-file-name":"element","relative-url":"D:/Code/naive-ui/demo/pages/docs/theme/enUS/element.demo.md",title:"Use Naive Element","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0A%20%20%3Cn-space%20vertical%3E%0A%20%20%20%20%3Cn-space%3E%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22theme%20%3D%20darkTheme%22%3EDark%3C%2Fn-button%3E%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22theme%20%3D%20null%22%3ELight%3C%2Fn-button%3E%0A%20%20%20%20%3C%2Fn-space%3E%0A%20%20%20%20%3Cn-config-provider%20%3Atheme%3D%22theme%22%3E%0A%20%20%20%20%20%20%3Cn-card%3E%0A%20%20%20%20%20%20%20%20%3Cn-el%0A%20%20%20%20%20%20%20%20%20%20tag%3D%22span%22%0A%20%20%20%20%20%20%20%20%20%20style%3D%22color%3A%20var(--primary-color)%3B%20transition%3A%20.3s%20var(--cubic-bezier-ease-in-out)%3B%22%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20I%20am%20a%20Span.%0A%20%20%20%20%20%20%20%20%3C%2Fn-el%3E%0A%20%20%20%20%20%20%3C%2Fn-card%3E%0A%20%20%20%20%3C%2Fn-config-provider%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20darkTheme%20%7D%20from%20'naive-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20darkTheme%2C%0A%20%20%20%20%20%20theme%3A%20ref(null)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E","language-type":"js"},{title:e(()=>[o(" Use Naive Element ")]),content:e(()=>[t(f,null,{default:e(()=>[o("Naive UI has "),t(i,{code:""},{default:e(()=>[o("n-element")]),_:1}),o(" component. See "),t(c,{to:"../components/element",custom:""},{default:e(({navigate:k,href:S})=>[t(m,{href:S,onClick:k},{default:e(()=>[o("Element")]),_:2},1032,["href","onClick"])]),_:1}),o(".")]),_:1})]),demo:e(()=>[v("div",R,[t(u,{vertical:""},{default:e(()=>[t(u,null,{default:e(()=>[t(l,{onClick:a[0]||(a[0]=k=>r.theme=r.darkTheme)},{default:e(()=>[o("Dark")]),_:1}),t(l,{onClick:a[1]||(a[1]=k=>r.theme=null)},{default:e(()=>[o("Light")]),_:1})]),_:1}),t(g,{theme:r.theme},{default:e(()=>[t(p,null,{default:e(()=>[t(A,{tag:"span",style:{color:"var(--primary-color)",transition:".3s var(--cubic-bezier-ease-in-out)"}},{default:e(()=>[o(" I am a Span. ")]),_:1})]),_:1})]),_:1},8,["theme"])]),_:1})])]),_:1})}const q=C(z,[["render",Y]]),G=y({setup(){return{themeVars:j()}}}),H={class:"demo-card__view"},J={style:{overflow:"auto"}};function K(r,a,h,s,D,E){const i=n("n-text"),m=n("n-p"),c=n("component-demo");return d(),_(c,{"demo-file-name":"use-theme-vars","relative-url":"D:/Code/naive-ui/demo/pages/docs/theme/enUS/use-theme-vars.demo.md",title:"useThemeVars","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0A%20%20%3Cpre%20style%3D%22overflow%3A%20auto%3B%22%3E%7B%7B%20themeVars%20%7D%7D%3C%2Fpre%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0Aimport%20%7B%20useThemeVars%20%7D%20from%20'naive-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20themeVars%3A%20useThemeVars()%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E","language-type":"js"},{title:e(()=>[o(" useThemeVars ")]),content:e(()=>[t(m,null,{default:e(()=>[o("Naive UI provides "),t(i,{code:""},{default:e(()=>[o("useThemeVars")]),_:1}),o(". It contains common theme variables.")]),_:1})]),demo:e(()=>[v("div",H,[v("pre",J,V(r.themeVars),1)])]),_:1})}const Q=C(G,[["render",K]]),W={components:{provideThemeDemo:P,elementDemo:q,useThemeVarsDemo:Q},setup(){const r=F(),a=N(()=>!r.value),h=r;return{showAnchor:a,displayMode:U(),wrapperStyle:T(()=>h.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:T(()=>a.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/demo/pages/docs/theme/enUS/index.demo-entry.md"}}},X={key:0,style:{width:"192px"}};function Z(r,a,h,s,D,E){const i=n("edit-on-github-header"),m=n("n-p"),c=n("n-h2"),f=n("provideThemeDemo"),l=n("elementDemo"),u=n("useThemeVarsDemo"),A=n("component-demos"),p=n("n-anchor-link"),g=n("n-anchor");return d(),x("div",{class:"doc",style:b(s.wrapperStyle)},[v("div",{style:b(s.contentStyle)},[t(i,{"relative-url":"D:/Code/naive-ui/demo/pages/docs/theme/enUS/index.demo-entry.md",text:"Create Themed Component"}),t(m,null,{default:e(()=>[o("You may not want to use only the provided components and want to write themed components.")]),_:1}),t(m,null,{default:e(()=>[o("Naive UI provides some tools for developers to create themed components easier.")]),_:1}),t(c,{id:"Demos"},{default:e(()=>[o("Demos")]),_:1}),t(A,{span:2},{default:e(()=>[t(f),t(l),t(u)]),_:1})],4),s.showAnchor?(d(),x("div",X,[t(g,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!1},{default:e(()=>[(s.displayMode,d(),_(p,{key:0,title:"Provide Theme\r",href:"#provide-theme"})),(s.displayMode,d(),_(p,{key:1,title:"Use Naive Element\r",href:"#element"})),(s.displayMode,d(),_(p,{key:2,title:"useThemeVars\r",href:"#use-theme-vars"}))]),_:1})])):M("",!0)],4)}const ne=C(W,[["render",Z]]);export{ne as default};
