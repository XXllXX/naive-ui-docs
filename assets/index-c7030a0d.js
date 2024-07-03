import{_ as w,u as k,a as C,b as N,c as h,r as o,o as f,d as m,e as t,f as n,w as s,g as e,n as g,h as S}from"./index-9afb4b71.js";const A={components:{},setup(){const c=k(),d=C(()=>(c.value,!1)),r=c;return{showAnchor:d,displayMode:N(),wrapperStyle:h(()=>r.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:h(()=>d.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/demo/pages/docs/fonts/zhCN/index.md"}}},M=t("pre",null,[t("span",{class:"hljs-comment"},"// 你 App 的入口 js 文件"),e(`
`),t("span",{class:"hljs-comment"},"// ..."),e(`

`),t("span",{class:"hljs-comment"},"// 通用字体"),e(`
`),t("span",{class:"hljs-keyword"},"import"),e(),t("span",{class:"hljs-string"},"'vfonts/Lato.css'"),e(`
`),t("span",{class:"hljs-comment"},"// 等宽字体"),e(`
`),t("span",{class:"hljs-keyword"},"import"),e(),t("span",{class:"hljs-string"},"'vfonts/FiraCode.css'"),e(`

`),t("span",{class:"hljs-keyword"},"const"),e(" app = "),t("span",{class:"hljs-title function_"},"createApp"),e(`()
app.`),t("span",{class:"hljs-title function_"},"use"),e(`(naive)

`),t("span",{class:"hljs-comment"},"// ...")],-1),V=t("pre",null,[t("span",{class:"hljs-comment"},"<!-- 调整 naive-ui 的字重配置 -->"),e(`
`),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"n-config-provider"),e(),t("span",{class:"hljs-attr"},":theme-overrides"),e("="),t("span",{class:"hljs-string"},`"{ common: { fontWeightStrong: '600' } }"`),e(">")]),e(`
  `),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"app"),e(" />")]),e(`
`),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"n-config-provider"),e(">")])],-1),z={key:0,style:{width:"192px"}};function B(c,d,r,p,D,I){const x=o("edit-on-github-header"),v=o("n-a"),a=o("n-text"),l=o("n-p"),i=o("n-code"),_=o("n-scrollbar"),u=o("n-card"),y=o("n-h2"),b=o("n-anchor-link"),j=o("n-anchor");return f(),m("div",{class:"doc",style:g(p.wrapperStyle)},[t("div",{style:g(p.contentStyle)},[n(x,{"relative-url":"D:/Code/naive-ui/demo/pages/docs/fonts/zhCN/index.md",text:"配置字体"}),n(l,null,{default:s(()=>[e("Naive UI 可以和 "),n(v,{href:"https://github.com/07akioni/vfonts",target:"_blank"},{default:s(()=>[e("vfonts")]),_:1}),e(" 配合，你可以简单的引入 "),n(a,{code:""},{default:s(()=>[e("vfonts")]),_:1}),e(" 中的字体，包含常规字体和等宽字体。")]),_:1}),n(l,null,{default:s(()=>[e("只需要在你 App 的入口文件导入字体，即可调整 Naive UI 的字体。")]),_:1}),n(u,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:s(()=>[n(_,{"x-scrollable":"","content-style":"padding: 16px;"},{default:s(()=>[n(i,null,{default:s(()=>[M]),_:1})]),_:1})]),_:1}),n(l,null,{default:s(()=>[e("注意：不同 vfonts 字体提供的字重不同，在使用 "),n(a,{code:""},{default:s(()=>[e("Lato")]),_:1}),e("、"),n(a,{code:""},{default:s(()=>[e("OpenSans")]),_:1}),e(" 的时候你需要全局调整 naive-ui 的字重配置。")]),_:1}),n(u,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:s(()=>[n(_,{"x-scrollable":"","content-style":"padding: 16px;"},{default:s(()=>[n(i,null,{default:s(()=>[V]),_:1})]),_:1})]),_:1}),n(y,{id:"通过定制主题修改全局字体"},{default:s(()=>[e("通过定制主题修改全局字体")]),_:1}),n(l,null,{default:s(()=>[e("如果你不打算使用 "),n(a,{code:""},{default:s(()=>[e("vfonts")]),_:1}),e(" 并且想要通过主题调整修改其为别的字体，你需要使用 "),n(a,{code:""},{default:s(()=>[e("n-global-style")]),_:1}),e(" 来做到这一点。在不使用 "),n(a,{code:""},{default:s(()=>[e("n-global-style")]),_:1}),e(" 的情况下组件不会响应 "),n(a,{code:""},{default:s(()=>[e("theme-overrides")]),_:1}),e(" 中的字体变更。")]),_:1}),n(l,null,{default:s(()=>[e("题外话：不使用 "),n(a,{code:""},{default:s(()=>[e("n-global-style")]),_:1}),e(" 就能让 "),n(a,{code:""},{default:s(()=>[e("vfonts")]),_:1}),e(" 直接生效是一个设计上的妥协，在下个大的版本默认的全局 reset 样式将不再带有字体相关的样式，而是全部置于 "),n(a,{code:""},{default:s(()=>[e("n-global-style")]),_:1}),e(" 组件中。")]),_:1})],4),p.showAnchor?(f(),m("div",z,[n(j,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:s(()=>[n(b,{title:"通过定制主题修改全局字体",href:"#通过定制主题修改全局字体"})]),_:1})])):S("",!0)],4)}const L=w(A,[["render",B]]);export{L as default};
