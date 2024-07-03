import{_ as C,u as S,a as U,b as A,c as x,r as a,o as g,d as j,e as n,f as s,w as t,g as e,n as v,h as I}from"./index-DxZkTPDs.js";const M={components:{},setup(){const c=S(),r=U(()=>(c.value,!1)),h=c;return{showAnchor:r,displayMode:A(),wrapperStyle:x(()=>h.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:x(()=>r.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/demo/pages/docs/nuxtjs/enUS/index.md"}}},D=n("pre",null,[n("span",{class:"hljs-comment"},"# npm"),e(`
npx nuxi module add nuxtjs-naive-ui

`),n("span",{class:"hljs-comment"},"# pnpm"),e(`
pnpm dlx nuxi module add nuxtjs-naive-ui`)],-1),R=n("pre",null,[n("span",{class:"hljs-keyword"},"import"),e(),n("span",{class:"hljs-title class_"},"AutoImport"),e(),n("span",{class:"hljs-keyword"},"from"),e(),n("span",{class:"hljs-string"},"'unplugin-auto-import/vite'"),e(`
`),n("span",{class:"hljs-keyword"},"import"),e(),n("span",{class:"hljs-title class_"},"Components"),e(),n("span",{class:"hljs-keyword"},"from"),e(),n("span",{class:"hljs-string"},"'unplugin-vue-components/vite'"),e(`
`),n("span",{class:"hljs-keyword"},"import"),e(" { "),n("span",{class:"hljs-title class_"},"NaiveUiResolver"),e(" } "),n("span",{class:"hljs-keyword"},"from"),e(),n("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),e(`

`),n("span",{class:"hljs-comment"},"// https://nuxt.com/docs/api/configuration/nuxt-config"),e(`
`),n("span",{class:"hljs-keyword"},"export"),e(),n("span",{class:"hljs-keyword"},"default"),e(),n("span",{class:"hljs-title function_"},"defineNuxtConfig"),e(`({
  `),n("span",{class:"hljs-attr"},"modules"),e(": ["),n("span",{class:"hljs-string"},"'nuxtjs-naive-ui'"),e(`],
  `),n("span",{class:"hljs-attr"},"vite"),e(`: {
    `),n("span",{class:"hljs-attr"},"plugins"),e(`: [
      `),n("span",{class:"hljs-title class_"},"AutoImport"),e(`({
        `),n("span",{class:"hljs-attr"},"imports"),e(`: [
          {
            `),n("span",{class:"hljs-string"},"'naive-ui'"),e(`: [
              `),n("span",{class:"hljs-string"},"'useDialog'"),e(`,
              `),n("span",{class:"hljs-string"},"'useMessage'"),e(`,
              `),n("span",{class:"hljs-string"},"'useNotification'"),e(`,
              `),n("span",{class:"hljs-string"},"'useLoadingBar'"),e(`
            ]
          }
        ]
      }),
      `),n("span",{class:"hljs-title class_"},"Components"),e(`({
        `),n("span",{class:"hljs-attr"},"resolvers"),e(": ["),n("span",{class:"hljs-title class_"},"NaiveUiResolver"),e(`()]
      })
    ]
  }
})`)],-1),B={key:0,style:{width:"192px"}};function V(c,r,h,u,P,T){const y=a("edit-on-github-header"),l=a("n-h2"),p=a("n-a"),w=a("router-link"),o=a("n-p"),m=a("n-code"),_=a("n-scrollbar"),f=a("n-card"),d=a("n-text"),i=a("n-anchor-link"),k=a("n-anchor");return g(),j("div",{class:"doc",style:v(u.wrapperStyle)},[n("div",{style:v(u.contentStyle)},[s(y,{"relative-url":"D:/Code/naive-ui/demo/pages/docs/nuxtjs/enUS/index.md",text:"Nuxt.js"}),s(l,{id:"Caveat"},{default:t(()=>[e("Caveat")]),_:1}),s(o,null,{default:t(()=>[e("This document pertains to SSR (Server-Side Rendering). Please familiarize yourself with the "),s(w,{to:"ssr#Caveat",custom:""},{default:t(({navigate:b,href:N})=>[s(p,{href:N,onClick:b},{default:t(()=>[e("SSR Caveats")]),_:2},1032,["href","onClick"])]),_:1}),e(" before proceeding.")]),_:1}),s(l,{id:"Nuxt.js-Demo"},{default:t(()=>[e("Nuxt.js Demo")]),_:1}),s(o,null,{default:t(()=>[e("You can refer to "),s(p,{href:"https://github.com/07akioni/naive-ui-nuxt-demo",target:"_blank"},{default:t(()=>[e("example")]),_:1}),e(".")]),_:1}),s(l,{id:"Using-Nuxt-Module"},{default:t(()=>[e("Using Nuxt Module")]),_:1}),s(o,null,{default:t(()=>[e("This is the same approach which previous demo uses.")]),_:1}),s(o,null,{default:t(()=>[e("Install the "),s(p,{href:"https://github.com/07akioni/nuxtjs-naive-ui",target:"_blank"},{default:t(()=>[e("module")]),_:1}),e(" to your Nuxt application with one command:")]),_:1}),s(f,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:t(()=>[s(_,{"x-scrollable":"","content-style":"padding: 16px;"},{default:t(()=>[s(m,null,{default:t(()=>[D]),_:1})]),_:1})]),_:1}),s(l,{id:"Using-Auto-Import-in-Nuxt"},{default:t(()=>[e("Using Auto Import in Nuxt")]),_:1}),s(o,null,{default:t(()=>[e("You can also use the "),s(d,{code:""},{default:t(()=>[e("unplugin-auto-import")]),_:1}),e(" plugin to automatically import APIs and the "),s(d,{code:""},{default:t(()=>[e("unplugin-vue-components")]),_:1}),e(" plugin to automatically import components on demand. In this case, the "),s(d,{code:""},{default:t(()=>[e("nuxt.config.ts")]),_:1}),e(" file will have a few additional configuration lines compared to the example above.")]),_:1}),s(f,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:t(()=>[s(_,{"x-scrollable":"","content-style":"padding: 16px;"},{default:t(()=>[s(m,null,{default:t(()=>[R]),_:1})]),_:1})]),_:1})],4),u.showAnchor?(g(),j("div",B,[s(k,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[s(i,{title:"Caveat",href:"#Caveat"}),s(i,{title:"Nuxt.js Demo",href:"#Nuxt.js-Demo"}),s(i,{title:"Using Nuxt Module",href:"#Using-Nuxt-Module"}),s(i,{title:"Using Auto Import in Nuxt",href:"#Using-Auto-Import-in-Nuxt"})]),_:1})])):I("",!0)],4)}const Y=C(M,[["render",V]]);export{Y as default};
