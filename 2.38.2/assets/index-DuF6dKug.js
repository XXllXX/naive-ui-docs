import{_ as w,u as C,a as N,b as R,c as m,r as o,o as x,d as g,e as j,f as e,w as l,g as t,n as k,h as E}from"./index-mgaNkJ7F.js";const G={components:{},setup(){const _=C(),f=N(()=>(_.value,!1)),S=_;return{showAnchor:f,displayMode:R(),wrapperStyle:m(()=>S.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:m(()=>f.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/demo/pages/docs/ssr/zhCN/index.md"}}},M={key:0,style:{width:"192px"}};function W(_,f,S,p,B,z){const v=o("edit-on-github-header"),a=o("n-p"),d=o("n-h2"),n=o("n-text"),u=o("n-li"),b=o("n-ol"),r=o("n-a"),h=o("router-link"),V=o("n-ul"),i=o("n-anchor-link"),y=o("n-anchor");return x(),g("div",{class:"doc",style:k(p.wrapperStyle)},[j("div",{style:k(p.contentStyle)},[e(v,{"relative-url":"D:/Code/naive-ui/demo/pages/docs/ssr/zhCN/index.md",text:"服务端渲染 Server-Sider Rendering"}),e(a,null,{default:l(()=>[t("由于 naive-ui 在使用 CSS in JS，在 SSR 的情况下需要一些额外的配置。")]),_:1}),e(d,{id:"注意"},{default:l(()=>[t("注意")]),_:1}),e(a,null,{default:l(()=>[t("无论在任何框架下使用 SSR，需要确保项目满足以下条件：")]),_:1}),e(b,null,{default:l(()=>[e(u,null,{default:l(()=>[t("构建时，任何被直接和间接引用的 "),e(n,{code:""},{default:l(()=>[t("@css-render/*")]),_:1}),t(" 和 "),e(n,{code:""},{default:l(()=>[t("css-render")]),_:1}),t(" 包版本都 "),e(n,{code:""},{default:l(()=>[t(">=0.15.14")]),_:1})]),_:1}),e(u,null,{default:l(()=>[t("构建时，任何被直接和间接引用的每个 "),e(n,{code:""},{default:l(()=>[t("@css-render/*")]),_:1}),t(" 和 "),e(n,{code:""},{default:l(()=>[t("css-render")]),_:1}),t(" 包最终只都指向一个目标（一个包不会有多个版本，也不会有同一个版本的多个副本）")]),_:1})]),_:1}),e(a,null,{default:l(()=>[t("你可以在 lock file 中搜索 "),e(n,{code:""},{default:l(()=>[t("css-render")]),_:1}),t(" 去检查是否有重复的包。")]),_:1}),e(a,null,{default:l(()=>[t("如果上述条件没有满足，可能会导致 SSR 构建失败。")]),_:1}),e(a,null,{default:l(()=>[t("如果因为这个原因遇到问题，你可以通过 "),e(n,{code:""},{default:l(()=>[t("package.json")]),_:1}),t(" 中的 "),e(n,{code:""},{default:l(()=>[t("resolution")]),_:1}),t(" 字段来让所有相关包指向同一个版本来解决问题。")]),_:1}),e(d,{id:"Nuxt.js"},{default:l(()=>[t("Nuxt.js")]),_:1}),e(a,null,{default:l(()=>[t("参考 "),e(h,{to:"nuxtjs",custom:""},{default:l(({navigate:s,href:c})=>[e(r,{href:c,onClick:s},{default:l(()=>[t("Nuxt.js")]),_:2},1032,["href","onClick"])]),_:1}),t("。")]),_:1}),e(d,{id:"Vitepress"},{default:l(()=>[t("Vitepress")]),_:1}),e(a,null,{default:l(()=>[t("参考 "),e(h,{to:"vitepress",custom:""},{default:l(({navigate:s,href:c})=>[e(r,{href:c,onClick:s},{default:l(()=>[t("Vitepress")]),_:2},1032,["href","onClick"])]),_:1}),t("。")]),_:1}),e(d,{id:"Vite-SSG/SSE"},{default:l(()=>[t("Vite SSG/SSE")]),_:1}),e(a,null,{default:l(()=>[t("参考 "),e(h,{to:"vite-ssge",custom:""},{default:l(({navigate:s,href:c})=>[e(r,{href:c,onClick:s},{default:l(()=>[t("Vite SSG/SSE")]),_:2},1032,["href","onClick"])]),_:1}),t("。")]),_:1}),e(d,{id:"Vite-示例"},{default:l(()=>[t("Vite 示例")]),_:1}),e(a,null,{default:l(()=>[t("如果你是用的是 Vite，请参考"),e(r,{href:"https://github.com/07akioni/naive-ui-vite-ssr",target:"_blank"},{default:l(()=>[t("例子")]),_:1}),t("。")]),_:1}),e(d,{id:"Webpack-示例"},{default:l(()=>[t("Webpack 示例")]),_:1}),e(a,null,{default:l(()=>[t("如果你使用的是 Webpack，请参考"),e(r,{href:"https://github.com/tusen-ai/naive-ui/tree/main/playground/ssr",target:"_blank"},{default:l(()=>[t("例子")]),_:1}),t("。")]),_:1}),e(d,{id:"内联样式优化"},{default:l(()=>[t("内联样式优化")]),_:1}),e(a,null,{default:l(()=>[t("默认情况下，naive-ui 会在组件上绑定 inline 主题样式，这可能会影响 SSR 的尺寸。你可以使用 "),e(n,{code:""},{default:l(()=>[t("n-config-provider")]),_:1}),t(" 的 "),e(n,{code:""},{default:l(()=>[t("inline-theme-disabled")]),_:1}),t(" 属性来优化，详细的优劣请参考 "),e(n,{code:""},{default:l(()=>[t("n-config-provider")]),_:1}),t(" 的文档。")]),_:1}),e(d,{id:"已知问题"},{default:l(()=>[t("已知问题")]),_:1}),e(a,null,{default:l(()=>[t("下列组件在 SSR 场景中存在一些 Bug，使用时请尽量规避，我们会逐步修复。")]),_:1}),e(V,null,{default:l(()=>[e(u,null,{default:l(()=>[e(n,{code:""},{default:l(()=>[t("n-scrollbar")]),_:1}),t(", "),e(n,{code:""},{default:l(()=>[t("n-data-table")]),_:1}),t("（vue 版本 >= 3.2.36 后没有问题)")]),_:1}),e(u,null,{default:l(()=>[e(n,{code:""},{default:l(()=>[t("n-anchor")]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(n,{code:""},{default:l(()=>[t("n-avatar-group")]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(n,{code:""},{default:l(()=>[t("n-watermark")]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(n,{code:""},{default:l(()=>[t("n-affix")]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(n,{code:""},{default:l(()=>[t("n-transfer")]),_:1})]),_:1})]),_:1})],4),p.showAnchor?(x(),g("div",M,[e(y,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:l(()=>[e(i,{title:"注意",href:"#注意"}),e(i,{title:"Nuxt.js",href:"#Nuxt.js"}),e(i,{title:"Vitepress",href:"#Vitepress"}),e(i,{title:"Vite SSG/SSE",href:"#Vite-SSG/SSE"}),e(i,{title:"Vite 示例",href:"#Vite-示例"}),e(i,{title:"Webpack 示例",href:"#Webpack-示例"}),e(i,{title:"内联样式优化",href:"#内联样式优化"}),e(i,{title:"已知问题",href:"#已知问题"})]),_:1})])):E("",!0)],4)}const D=w(G,[["render",W]]);export{D as default};