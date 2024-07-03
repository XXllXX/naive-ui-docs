import{_ as v,j as y,k as b,l as $,r as n,o as d,i as u,w as e,g as o,f as t,e as C,t as w,u as N,a as S,b as z,c as k,d as x,n as T,h as M}from"./index-DxZkTPDs.js";import{u as j}from"./use-theme-vars-BBpfVnY0.js";const O=y({setup(){return{darkTheme:b,theme:$(null)}}}),I={class:"demo-card__view"};function L(r,a,h,s,E,D){const l=n("n-text"),m=n("n-p"),c=n("n-button"),f=n("n-space"),i=n("n-card"),_=n("n-config-provider"),A=n("component-demo");return d(),u(A,{"demo-file-name":"provide-theme","relative-url":"D:/Code/naive-ui/demo/pages/docs/theme/zhCN/provide-theme.demo.md",title:"提供主题","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0A%20%20%3Cn-config-provider%20%3Atheme%3D%22theme%22%3E%0A%20%20%20%20%3Cn-card%3E%0A%20%20%20%20%20%20%3Cn-space%3E%0A%20%20%20%20%20%20%20%20%3Cn-button%20%40click%3D%22theme%20%3D%20darkTheme%22%3E%E6%B7%B1%E8%89%B2%3C%2Fn-button%3E%0A%20%20%20%20%20%20%20%20%3Cn-button%20%40click%3D%22theme%20%3D%20null%22%3E%E6%B5%85%E8%89%B2%3C%2Fn-button%3E%0A%20%20%20%20%20%20%3C%2Fn-space%3E%0A%20%20%20%20%3C%2Fn-card%3E%0A%20%20%3C%2Fn-config-provider%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20darkTheme%20%7D%20from%20'naive-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20darkTheme%2C%0A%20%20%20%20%20%20theme%3A%20ref(null)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E","language-type":"js"},{title:e(()=>[o(" 提供主题 ")]),content:e(()=>[t(m,null,{default:e(()=>[o("使用 "),t(l,{code:""},{default:e(()=>[o("n-config-provider")]),_:1}),o(" 来设定它全部的后代组件主题。")]),_:1})]),demo:e(()=>[C("div",I,[t(_,{theme:r.theme},{default:e(()=>[t(i,null,{default:e(()=>[t(f,null,{default:e(()=>[t(c,{onClick:a[0]||(a[0]=p=>r.theme=r.darkTheme)},{default:e(()=>[o("深色")]),_:1}),t(c,{onClick:a[1]||(a[1]=p=>r.theme=null)},{default:e(()=>[o("浅色")]),_:1})]),_:1})]),_:1})]),_:1},8,["theme"])])]),_:1})}const R=v(O,[["render",L]]),U=y({setup(){return{darkTheme:b,theme:$(null)}}}),P={class:"demo-card__view"};function q(r,a,h,s,E,D){const l=n("n-text"),m=n("n-a"),c=n("router-link"),f=n("n-p"),i=n("n-button"),_=n("n-space"),A=n("n-el"),p=n("n-card"),g=n("n-config-provider"),V=n("component-demo");return d(),u(V,{"demo-file-name":"element","relative-url":"D:/Code/naive-ui/demo/pages/docs/theme/zhCN/element.demo.md",title:"使用元素组件","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0A%20%20%3Cn-space%20vertical%3E%0A%20%20%20%20%3Cn-space%3E%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22theme%20%3D%20darkTheme%22%3E%E6%B7%B1%E8%89%B2%3C%2Fn-button%3E%0A%20%20%20%20%20%20%3Cn-button%20%40click%3D%22theme%20%3D%20null%22%3E%E6%B5%85%E8%89%B2%3C%2Fn-button%3E%0A%20%20%20%20%3C%2Fn-space%3E%0A%20%20%20%20%3Cn-config-provider%20%3Atheme%3D%22theme%22%3E%0A%20%20%20%20%20%20%3Cn-card%3E%0A%20%20%20%20%20%20%20%20%3Cn-el%0A%20%20%20%20%20%20%20%20%20%20tag%3D%22span%22%0A%20%20%20%20%20%20%20%20%20%20style%3D%22color%3A%20var(--primary-color)%3B%20transition%3A%20.3s%20var(--cubic-bezier-ease-in-out)%3B%22%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%E6%88%91%E6%98%AF%E4%B8%AA%20span%20%E6%A0%87%E7%AD%BE%0A%20%20%20%20%20%20%20%20%3C%2Fn-el%3E%0A%20%20%20%20%20%20%3C%2Fn-card%3E%0A%20%20%20%20%3C%2Fn-config-provider%3E%0A%20%20%3C%2Fn-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0Aimport%20%7B%20darkTheme%20%7D%20from%20'naive-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20darkTheme%2C%0A%20%20%20%20%20%20theme%3A%20ref(null)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E","language-type":"js"},{title:e(()=>[o(" 使用元素组件 ")]),content:e(()=>[t(f,null,{default:e(()=>[o("Naive UI 提供 "),t(l,{code:""},{default:e(()=>[o("n-element")]),_:1}),o(" 组件，参考 "),t(c,{to:"../components/element",custom:""},{default:e(({navigate:B,href:F})=>[t(m,{href:F,onClick:B},{default:e(()=>[o("Element")]),_:2},1032,["href","onClick"])]),_:1}),o("。")]),_:1})]),demo:e(()=>[C("div",P,[t(_,{vertical:""},{default:e(()=>[t(_,null,{default:e(()=>[t(i,{onClick:a[0]||(a[0]=B=>r.theme=r.darkTheme)},{default:e(()=>[o("深色")]),_:1}),t(i,{onClick:a[1]||(a[1]=B=>r.theme=null)},{default:e(()=>[o("浅色")]),_:1})]),_:1}),t(g,{theme:r.theme},{default:e(()=>[t(p,null,{default:e(()=>[t(A,{tag:"span",style:{color:"var(--primary-color)",transition:".3s var(--cubic-bezier-ease-in-out)"}},{default:e(()=>[o(" 我是个 span 标签 ")]),_:1})]),_:1})]),_:1},8,["theme"])]),_:1})])]),_:1})}const G=v(U,[["render",q]]),H=y({setup(){return{themeVars:j()}}}),J={class:"demo-card__view"},K={style:{overflow:"auto"}};function Q(r,a,h,s,E,D){const l=n("n-text"),m=n("n-p"),c=n("component-demo");return d(),u(c,{"demo-file-name":"use-theme-vars","relative-url":"D:/Code/naive-ui/demo/pages/docs/theme/zhCN/use-theme-vars.demo.md",title:"useThemeVars","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0A%20%20%3Cpre%20style%3D%22overflow%3A%20auto%3B%22%3E%7B%7BthemeVars%7D%7D%3C%2Fpre%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0Aimport%20%7B%20useThemeVars%20%7D%20from%20'naive-ui'%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup%20()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20themeVars%3A%20useThemeVars()%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%0A%3C%2Fscript%3E","language-type":"js"},{title:e(()=>[o(" useThemeVars ")]),content:e(()=>[t(m,null,{default:e(()=>[o("Naive UI 提供 "),t(l,{code:""},{default:e(()=>[o("useThemeVars")]),_:1}),o("，它包含了常见的主题变量。")]),_:1})]),demo:e(()=>[C("div",J,[C("pre",K,w(r.themeVars),1)])]),_:1})}const W=v(H,[["render",Q]]),X={components:{provideThemeDemo:R,elementDemo:G,useThemeVarsDemo:W},setup(){const r=N(),a=S(()=>!r.value),h=r;return{showAnchor:a,displayMode:z(),wrapperStyle:k(()=>h.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:k(()=>a.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/demo/pages/docs/theme/zhCN/index.demo-entry.md"}}},Y={key:0,style:{width:"192px"}};function Z(r,a,h,s,E,D){const l=n("edit-on-github-header"),m=n("n-p"),c=n("n-h2"),f=n("provideThemeDemo"),i=n("elementDemo"),_=n("useThemeVarsDemo"),A=n("component-demos"),p=n("n-anchor-link"),g=n("n-anchor");return d(),x("div",{class:"doc",style:T(s.wrapperStyle)},[C("div",{style:T(s.contentStyle)},[t(l,{"relative-url":"D:/Code/naive-ui/demo/pages/docs/theme/zhCN/index.demo-entry.md",text:"创建适配主题的组件"}),t(m,null,{default:e(()=>[o("你可能觉得只用内置的组件不够爽，想自己也写适配主题的组件。")]),_:1}),t(m,null,{default:e(()=>[o("Naive UI 提供一些工具帮助开发者简单的创建支持主题的组件。")]),_:1}),t(c,{id:"演示"},{default:e(()=>[o("演示")]),_:1}),t(A,{span:2},{default:e(()=>[t(f),t(i),t(_)]),_:1})],4),s.showAnchor?(d(),x("div",Y,[t(g,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!1},{default:e(()=>[(s.displayMode,d(),u(p,{key:0,title:"提供主题\r",href:"#provide-theme"})),(s.displayMode,d(),u(p,{key:1,title:"使用元素组件\r",href:"#element"})),(s.displayMode,d(),u(p,{key:2,title:"useThemeVars\r",href:"#use-theme-vars"}))]),_:1})])):M("",!0)],4)}const ne=v(X,[["render",Z]]);export{ne as default};
