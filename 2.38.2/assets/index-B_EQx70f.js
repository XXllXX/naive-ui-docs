import{_ as C,u as M,a as S,b as R,c as f,r as a,o as g,d as j,e as n,f as e,w as t,g as s,n as v,h as A}from"./index-mgaNkJ7F.js";const B={components:{},setup(){const i=M(),d=S(()=>(i.value,!1)),_=i;return{showAnchor:d,displayMode:R(),wrapperStyle:f(()=>_.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:f(()=>d.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/demo/pages/docs/nuxtjs/zhCN/index.md"}}},D=n("pre",null,[n("span",{class:"hljs-comment"},"# npm"),s(`
npx nuxi module add nuxtjs-naive-ui

`),n("span",{class:"hljs-comment"},"# pnpm"),s(`
pnpm dlx nuxi module add nuxtjs-naive-ui`)],-1),I=n("pre",null,[n("span",{class:"hljs-keyword"},"import"),s(),n("span",{class:"hljs-title class_"},"AutoImport"),s(),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'unplugin-auto-import/vite'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(),n("span",{class:"hljs-title class_"},"Components"),s(),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'unplugin-vue-components/vite'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(" { "),n("span",{class:"hljs-title class_"},"NaiveUiResolver"),s(" } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),s(`

`),n("span",{class:"hljs-comment"},"// https://nuxt.com/docs/api/configuration/nuxt-config"),s(`
`),n("span",{class:"hljs-keyword"},"export"),s(),n("span",{class:"hljs-keyword"},"default"),s(),n("span",{class:"hljs-title function_"},"defineNuxtConfig"),s(`({
  `),n("span",{class:"hljs-attr"},"modules"),s(": ["),n("span",{class:"hljs-string"},"'nuxtjs-naive-ui'"),s(`],
  `),n("span",{class:"hljs-attr"},"vite"),s(`: {
    `),n("span",{class:"hljs-attr"},"plugins"),s(`: [
      `),n("span",{class:"hljs-title class_"},"AutoImport"),s(`({
        `),n("span",{class:"hljs-attr"},"imports"),s(`: [
          {
            `),n("span",{class:"hljs-string"},"'naive-ui'"),s(`: [
              `),n("span",{class:"hljs-string"},"'useDialog'"),s(`,
              `),n("span",{class:"hljs-string"},"'useMessage'"),s(`,
              `),n("span",{class:"hljs-string"},"'useNotification'"),s(`,
              `),n("span",{class:"hljs-string"},"'useLoadingBar'"),s(`
            ]
          }
        ]
      }),
      `),n("span",{class:"hljs-title class_"},"Components"),s(`({
        `),n("span",{class:"hljs-attr"},"resolvers"),s(": ["),n("span",{class:"hljs-title class_"},"NaiveUiResolver"),s(`()]
      })
    ]
  }
})`)],-1),V={key:0,style:{width:"192px"}};function z(i,d,_,r,P,U){const y=a("edit-on-github-header"),o=a("n-h2"),u=a("n-a"),N=a("router-link"),l=a("n-p"),h=a("n-code"),m=a("n-scrollbar"),x=a("n-card"),p=a("n-text"),c=a("n-anchor-link"),k=a("n-anchor");return g(),j("div",{class:"doc",style:v(r.wrapperStyle)},[n("div",{style:v(r.contentStyle)},[e(y,{"relative-url":"D:/Code/naive-ui/demo/pages/docs/nuxtjs/zhCN/index.md",text:"Nuxt.js"}),e(o,{id:"注意"},{default:t(()=>[s("注意")]),_:1}),e(l,null,{default:t(()=>[s("本文档涉及到 SSR，请先了解"),e(N,{to:"ssr#注意",custom:""},{default:t(({navigate:w,href:b})=>[e(u,{href:b,onClick:w},{default:t(()=>[s("SSR 的注意事项")]),_:2},1032,["href","onClick"])]),_:1}),s("。")]),_:1}),e(o,{id:"Nuxt.js-示例"},{default:t(()=>[s("Nuxt.js 示例")]),_:1}),e(l,null,{default:t(()=>[s("参考"),e(u,{href:"https://github.com/07akioni/naive-ui-nuxt-demo",target:"_blank"},{default:t(()=>[s("例子")]),_:1}),s("。")]),_:1}),e(o,{id:"使用-Nuxt-Module"},{default:t(()=>[s("使用 Nuxt Module")]),_:1}),e(l,null,{default:t(()=>[s("这和上一个示例使用的是同样的方式。")]),_:1}),e(l,null,{default:t(()=>[s("在你的 Nuxt 应用中使用下列命令安装此"),e(u,{href:"https://github.com/07akioni/nuxtjs-naive-ui",target:"_blank"},{default:t(()=>[s("模块")]),_:1}),s("：")]),_:1}),e(x,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:t(()=>[e(m,{"x-scrollable":"","content-style":"padding: 16px;"},{default:t(()=>[e(h,null,{default:t(()=>[D]),_:1})]),_:1})]),_:1}),e(o,{id:"在-Nuxt-中使用自动引入"},{default:t(()=>[s("在 Nuxt 中使用自动引入")]),_:1}),e(l,null,{default:t(()=>[s("同样可以使用 "),e(p,{code:""},{default:t(()=>[s("unplugin-auto-import")]),_:1}),s(" 插件来自动导入 API，使用 "),e(p,{code:""},{default:t(()=>[s("unplugin-vue-components")]),_:1}),s(" 插件来按需自动加载组件。在这种情况下，"),e(p,{code:""},{default:t(()=>[s("nuxt.config.ts")]),_:1}),s(" 会比上面的例子多几行配置。")]),_:1}),e(x,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:t(()=>[e(m,{"x-scrollable":"","content-style":"padding: 16px;"},{default:t(()=>[e(h,null,{default:t(()=>[I]),_:1})]),_:1})]),_:1})],4),r.showAnchor?(g(),j("div",V,[e(k,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[e(c,{title:"注意",href:"#注意"}),e(c,{title:"Nuxt.js 示例",href:"#Nuxt.js-示例"}),e(c,{title:"使用 Nuxt Module",href:"#使用-Nuxt-Module"}),e(c,{title:"在 Nuxt 中使用自动引入",href:"#在-Nuxt-中使用自动引入"})]),_:1})])):A("",!0)],4)}const L=C(B,[["render",z]]);export{L as default};
