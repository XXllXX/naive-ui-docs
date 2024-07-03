import{_ as C,u as D,a as S,b as A,c as _,r as e,o as g,d as f,e as a,f as n,w as l,g as s,n as k,h as P}from"./index-mgaNkJ7F.js";const z={components:{},setup(){const r=D(),i=S(()=>(r.value,!1)),j=r;return{showAnchor:i,displayMode:A(),wrapperStyle:_(()=>j.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:_(()=>i.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/demo/pages/docs/import-on-demand/zhCN/index.md"}}},I=a("pre",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { defineComponent } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"NConfigProvider"),s(", "),a("span",{class:"hljs-title class_"},"NInput"),s(", "),a("span",{class:"hljs-title class_"},"NDatePicker"),s(", "),a("span",{class:"hljs-title class_"},"NSpace"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'naive-ui'"),s(`
  `),a("span",{class:"hljs-comment"},"// theme"),s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { createTheme, inputDark, datePickerDark } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'naive-ui'"),s(`
  `),a("span",{class:"hljs-comment"},"// locale & dateLocale"),s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { zhCN, dateZhCN } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(),a("span",{class:"hljs-title function_"},"defineComponent"),s(`({
    `),a("span",{class:"hljs-attr"},"components"),s(`: {
      `),a("span",{class:"hljs-title class_"},"NConfigProvider"),s(`,
      `),a("span",{class:"hljs-title class_"},"NInput"),s(`,
      `),a("span",{class:"hljs-title class_"},"NDatePicker"),s(`,
      `),a("span",{class:"hljs-title class_"},"NSpace"),s(`
    },
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        `),a("span",{class:"hljs-attr"},"darkTheme"),s(": "),a("span",{class:"hljs-title function_"},"createTheme"),s(`([inputDark, datePickerDark]),
        zhCN,
        dateZhCN
      }
    }
  })
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-config-provider"),s(),a("span",{class:"hljs-attr"},":theme"),s("="),a("span",{class:"hljs-string"},'"darkTheme"'),s(),a("span",{class:"hljs-attr"},":locale"),s("="),a("span",{class:"hljs-string"},'"zhCN"'),s(),a("span",{class:"hljs-attr"},":date-locale"),s("="),a("span",{class:"hljs-string"},'"dateZhCN"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-space"),s(),a("span",{class:"hljs-attr"},"vertical"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-input"),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-date-picker"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"n-space"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-tag"},"body"),s(` {
    `),a("span",{class:"hljs-attribute"},"background"),s(`: black;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")])],-1),B=a("pre",null,[a("span",{class:"hljs-comment"},"// vite.config.ts"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { defineConfig } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vite'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" vue "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@vitejs/plugin-vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"AutoImport"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'unplugin-auto-import/vite'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Components"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'unplugin-vue-components/vite'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"NaiveUiResolver"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),s(`

`),a("span",{class:"hljs-comment"},"// https://vitejs.dev/config/"),s(`
`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(),a("span",{class:"hljs-title function_"},"defineConfig"),s(`({
  `),a("span",{class:"hljs-attr"},"plugins"),s(`: [
    `),a("span",{class:"hljs-title function_"},"vue"),s(`(),
    `),a("span",{class:"hljs-title class_"},"AutoImport"),s(`({
      `),a("span",{class:"hljs-attr"},"imports"),s(`: [
        `),a("span",{class:"hljs-string"},"'vue'"),s(`,
        {
          `),a("span",{class:"hljs-string"},"'naive-ui'"),s(`: [
            `),a("span",{class:"hljs-string"},"'useDialog'"),s(`,
            `),a("span",{class:"hljs-string"},"'useMessage'"),s(`,
            `),a("span",{class:"hljs-string"},"'useNotification'"),s(`,
            `),a("span",{class:"hljs-string"},"'useLoadingBar'"),s(`
          ]
        }
      ]
    }),
    `),a("span",{class:"hljs-title class_"},"Components"),s(`({
      `),a("span",{class:"hljs-attr"},"resolvers"),s(": ["),a("span",{class:"hljs-title class_"},"NaiveUiResolver"),s(`()]
    })
  ]
})`)],-1),M=a("pre",null,[a("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(` {
  `),a("span",{class:"hljs-comment"},"// create naive ui"),s(`
  create,
  `),a("span",{class:"hljs-comment"},"// component"),s(`
  `),a("span",{class:"hljs-title class_"},"NButton"),s(`
} `),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'naive-ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" naive = "),a("span",{class:"hljs-title function_"},"create"),s(`({
  `),a("span",{class:"hljs-attr"},"components"),s(": ["),a("span",{class:"hljs-title class_"},"NButton"),s(`]
})

`),a("span",{class:"hljs-keyword"},"const"),s(" app = "),a("span",{class:"hljs-title function_"},"createApp"),s(`()
app.`),a("span",{class:"hljs-title function_"},"use"),s("(naive)")],-1),T=a("pre",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-button"),s(">")]),s("naive-ui"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"n-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")])],-1),R={key:0,style:{width:"192px"}};function V(r,i,j,d,U,Z){const y=e("edit-on-github-header"),t=e("n-p"),v=e("n-a"),w=e("router-link"),h=e("n-h2"),c=e("n-code"),o=e("n-scrollbar"),p=e("n-card"),m=e("n-text"),u=e("n-anchor-link"),x=e("n-anchor");return g(),f("div",{class:"doc",style:k(d.wrapperStyle)},[a("div",{style:k(d.contentStyle)},[n(y,{"relative-url":"D:/Code/naive-ui/demo/pages/docs/import-on-demand/zhCN/index.md",text:"按需引入（Tree Shaking）"}),n(t,null,{default:l(()=>[s("Naive UI 支持 tree shaking，组件、语言、主题均可 tree-shaking。")]),_:1}),n(t,null,{default:l(()=>[s("默认情况组件主题为亮色，语言为英文，无需额外导入。")]),_:1}),n(t,null,{default:l(()=>[s("了解更多关于主题设定的信息，参见"),n(w,{to:"customize-theme",custom:""},{default:l(({navigate:b,href:N})=>[n(v,{href:N,onClick:b},{default:l(()=>[s("调整主题")]),_:2},1032,["href","onClick"])]),_:1}),s("。")]),_:1}),n(h,{id:"手动引入"},{default:l(()=>[s("手动引入")]),_:1}),n(p,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[n(o,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[n(c,null,{default:l(()=>[I]),_:1})]),_:1})]),_:1}),n(h,{id:"自动引入"},{default:l(()=>[s("自动引入")]),_:1}),n(t,null,{default:l(()=>[s("可以使用 "),n(m,{code:""},{default:l(()=>[s("unplugin-auto-import")]),_:1}),s(" 插件来自动导入 API。")]),_:1}),n(t,null,{default:l(()=>[s("如果使用模板方式进行开发，可以使用 "),n(m,{code:""},{default:l(()=>[s("unplugin-vue-components")]),_:1}),s(" 插件来按需自动加载组件，插件会自动解析模板中的使用到的组件，并导入组件。")]),_:1}),n(p,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[n(o,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[n(c,null,{default:l(()=>[B]),_:1})]),_:1})]),_:1}),n(h,{id:"按需全局安装组件（手动）"},{default:l(()=>[s("按需全局安装组件（手动）")]),_:1}),n(p,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[n(o,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[n(c,null,{default:l(()=>[M]),_:1})]),_:1})]),_:1}),n(t,null,{default:l(()=>[s("安装后，你可以这样在 SFC 中使用你安装的组件。")]),_:1}),n(p,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[n(o,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[n(c,null,{default:l(()=>[T]),_:1})]),_:1})]),_:1})],4),d.showAnchor?(g(),f("div",R,[n(x,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:l(()=>[n(u,{title:"手动引入",href:"#手动引入"}),n(u,{title:"自动引入",href:"#自动引入"}),n(u,{title:"按需全局安装组件（手动）",href:"#按需全局安装组件（手动）"})]),_:1})])):P("",!0)],4)}const E=C(z,[["render",V]]);export{E as default};
