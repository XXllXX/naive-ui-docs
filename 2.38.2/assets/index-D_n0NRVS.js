import{_ as N,u as I,a as D,b as S,c as _,r as e,o as g,d as f,e as n,f as a,w as l,g as s,n as y,h as A}from"./index-DxZkTPDs.js";const P={components:{},setup(){const r=I(),i=D(()=>(r.value,!1)),m=r;return{showAnchor:i,displayMode:S(),wrapperStyle:_(()=>m.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:_(()=>i.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/demo/pages/docs/import-on-demand/enUS/index.md"}}},T=n("pre",null,[n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"script"),s(">")]),n("span",{class:"language-javascript"},[s(`
  `),n("span",{class:"hljs-keyword"},"import"),s(" { defineComponent } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'vue'"),s(`
  `),n("span",{class:"hljs-keyword"},"import"),s(" { "),n("span",{class:"hljs-title class_"},"NConfigProvider"),s(", "),n("span",{class:"hljs-title class_"},"NInput"),s(", "),n("span",{class:"hljs-title class_"},"NDatePicker"),s(", "),n("span",{class:"hljs-title class_"},"NSpace"),s(" } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'naive-ui'"),s(`
  `),n("span",{class:"hljs-comment"},"// theme"),s(`
  `),n("span",{class:"hljs-keyword"},"import"),s(" { createTheme, inputDark, datePickerDark } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'naive-ui'"),s(`
  `),n("span",{class:"hljs-comment"},"// locale & dateLocale"),s(`
  `),n("span",{class:"hljs-keyword"},"import"),s(" { zhCN, dateZhCN } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),n("span",{class:"hljs-keyword"},"export"),s(),n("span",{class:"hljs-keyword"},"default"),s(),n("span",{class:"hljs-title function_"},"defineComponent"),s(`({
    `),n("span",{class:"hljs-attr"},"components"),s(`: {
      `),n("span",{class:"hljs-title class_"},"NConfigProvider"),s(`,
      `),n("span",{class:"hljs-title class_"},"NInput"),s(`,
      `),n("span",{class:"hljs-title class_"},"NDatePicker"),s(`,
      `),n("span",{class:"hljs-title class_"},"NSpace"),s(`
    },
    `),n("span",{class:"hljs-title function_"},"setup"),s("("),n("span",{class:"hljs-params"}),s(`) {
      `),n("span",{class:"hljs-keyword"},"return"),s(` {
        `),n("span",{class:"hljs-attr"},"darkTheme"),s(": "),n("span",{class:"hljs-title function_"},"createTheme"),s(`([inputDark, datePickerDark]),
        zhCN,
        dateZhCN
      }
    }
  })
`)]),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"n-config-provider"),s(),n("span",{class:"hljs-attr"},":theme"),s("="),n("span",{class:"hljs-string"},'"darkTheme"'),s(),n("span",{class:"hljs-attr"},":locale"),s("="),n("span",{class:"hljs-string"},'"zhCN"'),s(),n("span",{class:"hljs-attr"},":date-locale"),s("="),n("span",{class:"hljs-string"},'"dateZhCN"'),s(">")]),s(`
    `),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"n-space"),s(),n("span",{class:"hljs-attr"},"vertical"),s(">")]),s(`
      `),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"n-input"),s(" />")]),s(`
      `),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"n-date-picker"),s(" />")]),s(`
    `),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"n-space"),s(">")]),s(`
  `),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"style"),s(">")]),n("span",{class:"language-css"},[s(`
  `),n("span",{class:"hljs-selector-tag"},"body"),s(` {
    `),n("span",{class:"hljs-attribute"},"background"),s(`: black;
  }
`)]),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"style"),s(">")])],-1),B=n("pre",null,[n("span",{class:"hljs-comment"},"// vite.config.ts"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(" { defineConfig } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'vite'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(" vue "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'@vitejs/plugin-vue'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(),n("span",{class:"hljs-title class_"},"AutoImport"),s(),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'unplugin-auto-import/vite'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(),n("span",{class:"hljs-title class_"},"Components"),s(),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'unplugin-vue-components/vite'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(" { "),n("span",{class:"hljs-title class_"},"NaiveUiResolver"),s(" } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),s(`

`),n("span",{class:"hljs-comment"},"// https://vitejs.dev/config/"),s(`
`),n("span",{class:"hljs-keyword"},"export"),s(),n("span",{class:"hljs-keyword"},"default"),s(),n("span",{class:"hljs-title function_"},"defineConfig"),s(`({
  `),n("span",{class:"hljs-attr"},"plugins"),s(`: [
    `),n("span",{class:"hljs-title function_"},"vue"),s(`(),
    `),n("span",{class:"hljs-title class_"},"AutoImport"),s(`({
      `),n("span",{class:"hljs-attr"},"imports"),s(`: [
        `),n("span",{class:"hljs-string"},"'vue'"),s(`,
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
})`)],-1),z=n("pre",null,[n("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'vue'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(` {
  `),n("span",{class:"hljs-comment"},"// create naive ui"),s(`
  create,
  `),n("span",{class:"hljs-comment"},"// component"),s(`
  `),n("span",{class:"hljs-title class_"},"NButton"),s(`
} `),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'naive-ui'"),s(`

`),n("span",{class:"hljs-keyword"},"const"),s(" naive = "),n("span",{class:"hljs-title function_"},"create"),s(`({
  `),n("span",{class:"hljs-attr"},"components"),s(": ["),n("span",{class:"hljs-title class_"},"NButton"),s(`]
})

`),n("span",{class:"hljs-keyword"},"const"),s(" app = "),n("span",{class:"hljs-title function_"},"createApp"),s(`()
app.`),n("span",{class:"hljs-title function_"},"use"),s("(naive)")],-1),M=n("pre",null,[n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"n-button"),s(">")]),s("naive-ui"),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"n-button"),s(">")]),s(`
`),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"template"),s(">")])],-1),U={key:0,style:{width:"192px"}};function R(r,i,m,d,G,V){const k=e("edit-on-github-header"),t=e("n-p"),v=e("n-a"),w=e("router-link"),h=e("n-h2"),o=e("n-code"),c=e("n-scrollbar"),p=e("n-card"),j=e("n-text"),u=e("n-anchor-link"),x=e("n-anchor");return g(),f("div",{class:"doc",style:y(d.wrapperStyle)},[n("div",{style:y(d.contentStyle)},[a(k,{"relative-url":"D:/Code/naive-ui/demo/pages/docs/import-on-demand/enUS/index.md",text:"Import on Demand (Tree Shaking)"}),a(t,null,{default:l(()=>[s("Naive UI supports tree shaking for components, locales and themes.")]),_:1}),a(t,null,{default:l(()=>[s("By default the component theme is light, locale is enUS, and no extra imports are needed.")]),_:1}),a(t,null,{default:l(()=>[s("For more info about theming, see "),a(w,{to:"customize-theme",custom:""},{default:l(({navigate:b,href:C})=>[a(v,{href:C,onClick:b},{default:l(()=>[s("Customizing Theme")]),_:2},1032,["href","onClick"])]),_:1}),s(".")]),_:1}),a(h,{id:"Import-Directly"},{default:l(()=>[s("Import Directly")]),_:1}),a(p,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[a(c,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[a(o,null,{default:l(()=>[T]),_:1})]),_:1})]),_:1}),a(h,{id:"Auto-Import"},{default:l(()=>[s("Auto Import")]),_:1}),a(t,null,{default:l(()=>[s("You can use the "),a(j,{code:""},{default:l(()=>[s("unplugin-auto-import")]),_:1}),s(" plugin to automatically import APIs.")]),_:1}),a(t,null,{default:l(()=>[s("If you develop using SFC, you can use the "),a(j,{code:""},{default:l(()=>[s("unplugin-vue-components")]),_:1}),s(" plugin to automatically import components on demand.The plugin will automatically parse the components used in the template and import the components.")]),_:1}),a(p,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[a(c,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[a(o,null,{default:l(()=>[B]),_:1})]),_:1})]),_:1}),a(h,{id:"Install-on-Demand-Globally"},{default:l(()=>[s("Install on Demand Globally")]),_:1}),a(p,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[a(c,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[a(o,null,{default:l(()=>[z]),_:1})]),_:1})]),_:1}),a(t,null,{default:l(()=>[s("After the installation, you can use the components you installed in SFC like this.")]),_:1}),a(p,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[a(c,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[a(o,null,{default:l(()=>[M]),_:1})]),_:1})]),_:1})],4),d.showAnchor?(g(),f("div",U,[a(x,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:l(()=>[a(u,{title:"Import Directly",href:"#Import-Directly"}),a(u,{title:"Auto Import",href:"#Auto-Import"}),a(u,{title:"Install on Demand Globally",href:"#Install-on-Demand-Globally"})]),_:1})])):A("",!0)],4)}const Z=N(P,[["render",R]]);export{Z as default};
