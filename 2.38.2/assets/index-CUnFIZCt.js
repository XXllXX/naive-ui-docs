import{_ as C,u as N,a as P,b as A,c as y,r as a,o as g,d as x,e as n,f as e,w as l,g as s,n as v,h as D}from"./index-mgaNkJ7F.js";const V={components:{},setup(){const d=N(),h=P(()=>(d.value,!1)),f=d;return{showAnchor:h,displayMode:A(),wrapperStyle:y(()=>f.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:y(()=>h.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/demo/pages/docs/vitepress/zhCN/index.md"}}},B=n("pre",null,[n("span",{class:"hljs-comment"},"# npm"),s(`
npm install --save-dev @css-render/vue3-ssr

`),n("span",{class:"hljs-comment"},"# pnpm"),s(`
pnpm install --save-dev @css-render/vue3-ssr`)],-1),M=n("pre",null,[n("span",{class:"hljs-comment"},"// .vitepress/theme/index.js"),s(`

`),n("span",{class:"hljs-keyword"},"import"),s(" { defineComponent, h, inject } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'vue'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(),n("span",{class:"hljs-title class_"},"DefaultTheme"),s(),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'vitepress/theme'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(" { "),n("span",{class:"hljs-title class_"},"NConfigProvider"),s(" } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'naive-ui'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(" { setup } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'@css-render/vue3-ssr'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(" { useRoute } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'vitepress'"),s(`

`),n("span",{class:"hljs-keyword"},"const"),s(" { "),n("span",{class:"hljs-title class_"},"Layout"),s(" } = "),n("span",{class:"hljs-title class_"},"DefaultTheme"),s(`

`),n("span",{class:"hljs-keyword"},"const"),s(),n("span",{class:"hljs-title class_"},"CssRenderStyle"),s(" = "),n("span",{class:"hljs-title function_"},"defineComponent"),s(`({
  setup () {
    `),n("span",{class:"hljs-keyword"},"const"),s(" collect = "),n("span",{class:"hljs-title function_"},"inject"),s("("),n("span",{class:"hljs-string"},"'css-render-collect'"),s(`)
    `),n("span",{class:"hljs-keyword"},"return"),s(` {
      `),n("span",{class:"hljs-attr"},"style"),s(": "),n("span",{class:"hljs-title function_"},"collect"),s(`()
    }
  },
  render () {
    `),n("span",{class:"hljs-keyword"},"return"),s(),n("span",{class:"hljs-title function_"},"h"),s("("),n("span",{class:"hljs-string"},"'css-render-style'"),s(`, {
      `),n("span",{class:"hljs-attr"},"innerHTML"),s(": "),n("span",{class:"hljs-variable language_"},"this"),s("."),n("span",{class:"hljs-property"},"style"),s(`
    })
  }
})

`),n("span",{class:"hljs-keyword"},"const"),s(),n("span",{class:"hljs-title class_"},"VitepressPath"),s(" = "),n("span",{class:"hljs-title function_"},"defineComponent"),s(`({
  setup () {
    `),n("span",{class:"hljs-keyword"},"const"),s(" route = "),n("span",{class:"hljs-title function_"},"useRoute"),s(`()
    `),n("span",{class:"hljs-keyword"},"return"),s(),n("span",{class:"hljs-function"},"() =>"),s(` {
      `),n("span",{class:"hljs-keyword"},"return"),s(),n("span",{class:"hljs-title function_"},"h"),s("("),n("span",{class:"hljs-string"},"'vitepress-path'"),s(", "),n("span",{class:"hljs-literal"},"null"),s(", [route."),n("span",{class:"hljs-property"},"path"),s(`])
    }
  }
})

`),n("span",{class:"hljs-keyword"},"const"),s(),n("span",{class:"hljs-title class_"},"NaiveUIProvider"),s(" = "),n("span",{class:"hljs-title function_"},"defineComponent"),s(`({
  render () {
    `),n("span",{class:"hljs-keyword"},"return"),s(),n("span",{class:"hljs-title function_"},"h"),s(`(
      `),n("span",{class:"hljs-title class_"},"NConfigProvider"),s(`,
      { `),n("span",{class:"hljs-attr"},"abstract"),s(": "),n("span",{class:"hljs-literal"},"true"),s(", "),n("span",{class:"hljs-attr"},"inlineThemeDisabled"),s(": "),n("span",{class:"hljs-literal"},"true"),s(` },
      {
        `),n("span",{class:"hljs-attr"},"default"),s(": "),n("span",{class:"hljs-function"},"() =>"),s(` [
          `),n("span",{class:"hljs-title function_"},"h"),s("("),n("span",{class:"hljs-title class_"},"Layout"),s(", "),n("span",{class:"hljs-literal"},"null"),s(", { "),n("span",{class:"hljs-attr"},"default"),s(": "),n("span",{class:"hljs-variable language_"},"this"),s("."),n("span",{class:"hljs-property"},"$slots"),s("."),n("span",{class:"hljs-property"},"default"),s(`?.() }),
          `),n("span",{class:"hljs-keyword"},"import"),s("."),n("span",{class:"hljs-property"},"meta"),s("."),n("span",{class:"hljs-property"},"env"),s("."),n("span",{class:"hljs-property"},"SSR"),s(" ? ["),n("span",{class:"hljs-title function_"},"h"),s("("),n("span",{class:"hljs-title class_"},"CssRenderStyle"),s("), "),n("span",{class:"hljs-title function_"},"h"),s("("),n("span",{class:"hljs-title class_"},"VitepressPath"),s(")] : "),n("span",{class:"hljs-literal"},"null"),s(`
        ]
      }
    )
  }
})

`),n("span",{class:"hljs-keyword"},"export"),s(),n("span",{class:"hljs-keyword"},"default"),s(` {
  `),n("span",{class:"hljs-attr"},"extends"),s(": "),n("span",{class:"hljs-title class_"},"DefaultTheme"),s(`,
  `),n("span",{class:"hljs-title class_"},"Layout"),s(": "),n("span",{class:"hljs-title class_"},"NaiveUIProvider"),s(`,
  `),n("span",{class:"hljs-attr"},"enhanceApp"),s(": "),n("span",{class:"hljs-function"},[s("("),n("span",{class:"hljs-params"},"{ app }"),s(") =>")]),s(` {
    `),n("span",{class:"hljs-keyword"},"if"),s(" ("),n("span",{class:"hljs-keyword"},"import"),s("."),n("span",{class:"hljs-property"},"meta"),s("."),n("span",{class:"hljs-property"},"env"),s("."),n("span",{class:"hljs-property"},"SSR"),s(`) {
      `),n("span",{class:"hljs-keyword"},"const"),s(" { collect } = "),n("span",{class:"hljs-title function_"},"setup"),s(`(app)
      app.`),n("span",{class:"hljs-title function_"},"provide"),s("("),n("span",{class:"hljs-string"},"'css-render-collect'"),s(`, collect)
    }
  }
}`)],-1),T=n("pre",null,[n("span",{class:"hljs-keyword"},"import"),s(" { defineConfig } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'vitepress'"),s(`

`),n("span",{class:"hljs-keyword"},"const"),s(),n("span",{class:"hljs-attr"},"fileAndStyles"),s(": "),n("span",{class:"hljs-title class_"},"Record"),s("<"),n("span",{class:"hljs-built_in"},"string"),s(", "),n("span",{class:"hljs-built_in"},"string"),s(`> = {}

`),n("span",{class:"hljs-keyword"},"export"),s(),n("span",{class:"hljs-keyword"},"default"),s(),n("span",{class:"hljs-title function_"},"defineConfig"),s(`({
  `),n("span",{class:"hljs-comment"},"// ..."),s(`
  `),n("span",{class:"hljs-attr"},"vite"),s(`: {
    `),n("span",{class:"hljs-attr"},"ssr"),s(`: {
      `),n("span",{class:"hljs-attr"},"noExternal"),s(": ["),n("span",{class:"hljs-string"},"'naive-ui'"),s(", "),n("span",{class:"hljs-string"},"'date-fns'"),s(", "),n("span",{class:"hljs-string"},"'vueuc'"),s(`]
    }
  },
  `),n("span",{class:"hljs-title function_"},"postRender"),s("("),n("span",{class:"hljs-params"},"context"),s(`) {
    `),n("span",{class:"hljs-keyword"},"const"),s(" styleRegex = "),n("span",{class:"hljs-regexp"},"/<css-render-style>((.|\\s)+)<\\/css-render-style>/"),s(`
    `),n("span",{class:"hljs-keyword"},"const"),s(" vitepressPathRegex = "),n("span",{class:"hljs-regexp"},"/<vitepress-path>(.+)<\\/vitepress-path>/"),s(`
    `),n("span",{class:"hljs-keyword"},"const"),s(" style = styleRegex."),n("span",{class:"hljs-title function_"},"exec"),s("(context."),n("span",{class:"hljs-property"},"content"),s(")?.["),n("span",{class:"hljs-number"},"1"),s(`]
    `),n("span",{class:"hljs-keyword"},"const"),s(" vitepressPath = vitepressPathRegex."),n("span",{class:"hljs-title function_"},"exec"),s("(context."),n("span",{class:"hljs-property"},"content"),s(")?.["),n("span",{class:"hljs-number"},"1"),s(`]
    `),n("span",{class:"hljs-keyword"},"if"),s(` (vitepressPath && style) {
      fileAndStyles[vitepressPath] = style
    }
    context.`),n("span",{class:"hljs-property"},"content"),s(" = context."),n("span",{class:"hljs-property"},"content"),s("."),n("span",{class:"hljs-title function_"},"replace"),s("(styleRegex, "),n("span",{class:"hljs-string"},"''"),s(`)
    context.`),n("span",{class:"hljs-property"},"content"),s(" = context."),n("span",{class:"hljs-property"},"content"),s("."),n("span",{class:"hljs-title function_"},"replace"),s("(vitepressPathRegex, "),n("span",{class:"hljs-string"},"''"),s(`)
  },
  `),n("span",{class:"hljs-title function_"},"transformHtml"),s("("),n("span",{class:"hljs-params"},"code, id"),s(`) {
    `),n("span",{class:"hljs-keyword"},"const"),s(" html = id."),n("span",{class:"hljs-title function_"},"split"),s("("),n("span",{class:"hljs-string"},"'/'"),s(")."),n("span",{class:"hljs-title function_"},"pop"),s(`()
    `),n("span",{class:"hljs-keyword"},"if"),s(" (!html) "),n("span",{class:"hljs-keyword"},"return"),s(`
    `),n("span",{class:"hljs-keyword"},"const"),s(" style = fileAndStyles["),n("span",{class:"hljs-string"},[s("`/"),n("span",{class:"hljs-subst"},"${html}"),s("`")]),s(`]
    `),n("span",{class:"hljs-keyword"},"if"),s(` (style) {
      `),n("span",{class:"hljs-keyword"},"return"),s(" code."),n("span",{class:"hljs-title function_"},"replace"),s("("),n("span",{class:"hljs-regexp"},"/<\\/head>/"),s(", style + "),n("span",{class:"hljs-string"},"'</head>'"),s(`)
    }
  }
})`)],-1),L=n("pre",null,[s(`...

`),n("span",{class:"language-xml"},[n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"script"),s(),n("span",{class:"hljs-attr"},"setup"),s(">")])]),s(`
import { NButton } from 'naive-ui'
`),n("span",{class:"language-xml"},[n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"script"),s(">")])]),s(`

`),n("span",{class:"language-xml"},[n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"NButton"),s(">")])]),s("Hello World"),n("span",{class:"language-xml"},[n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"NButton"),s(">")])]),s(`

...`)],-1),z={key:0,style:{width:"192px"}};function H(d,h,f,u,I,$){const k=a("edit-on-github-header"),j=a("n-h2"),m=a("n-a"),w=a("router-link"),c=a("n-p"),t=a("n-text"),p=a("n-h3"),r=a("n-code"),o=a("n-scrollbar"),i=a("n-card"),_=a("n-anchor-link"),b=a("n-anchor");return g(),x("div",{class:"doc",style:v(u.wrapperStyle)},[n("div",{style:v(u.contentStyle)},[e(k,{"relative-url":"D:/Code/naive-ui/demo/pages/docs/vitepress/zhCN/index.md",text:"Vitepress"}),e(j,{id:"注意"},{default:l(()=>[s("注意")]),_:1}),e(c,null,{default:l(()=>[s("本文档涉及到 SSR，请先了解"),e(w,{to:"ssr#注意",custom:""},{default:l(({navigate:S,href:R})=>[e(m,{href:R,onClick:S},{default:l(()=>[s("SSR 的注意事项")]),_:2},1032,["href","onClick"])]),_:1}),s("。")]),_:1}),e(j,{id:"例子"},{default:l(()=>[s("例子")]),_:1}),e(c,null,{default:l(()=>[s("这是一个使用 "),e(t,{code:""},{default:l(()=>[s("naive-ui")]),_:1}),s("、"),e(t,{code:""},{default:l(()=>[s("vitepress")]),_:1}),s(" 的"),e(m,{href:"https://github.com/07akioni/naive-ui-vitepress-demo",target:"_blank"},{default:l(()=>[s("样例")]),_:1}),s("，支持 SSR。")]),_:1}),e(c,null,{default:l(()=>[s("你可以直接使用这个样例。")]),_:1}),e(j,{id:"从零开始的关键步骤"},{default:l(()=>[s("从零开始的关键步骤")]),_:1}),e(c,null,{default:l(()=>[s("如果你希望从头开始改造一个 vitepress 项目，遵循下列步骤")]),_:1}),e(p,{id:"0.-安装-<n-text-code>@css-render/vue3-ssr</n-text>"},{default:l(()=>[s("0. 安装 "),e(t,{code:""},{default:l(()=>[s("@css-render/vue3-ssr")]),_:1})]),_:1}),e(c,null,{default:l(()=>[s("确保其版本 "),e(t,{code:""},{default:l(()=>[s(">=0.15.14")]),_:1}),s("。")]),_:1}),e(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[e(o,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[e(r,null,{default:l(()=>[B]),_:1})]),_:1})]),_:1}),e(p,{id:"1.-把下面的内容增加到-<n-text-code>.vitepress/theme/index.js</n-text>"},{default:l(()=>[s("1. 把下面的内容增加到 "),e(t,{code:""},{default:l(()=>[s(".vitepress/theme/index.js")]),_:1})]),_:1}),e(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[e(o,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[e(r,null,{default:l(()=>[M]),_:1})]),_:1})]),_:1}),e(p,{id:"2.-把下面的内容增加到-<n-text-code>.vitepress/config.mts</n-text>"},{default:l(()=>[s("2. 把下面的内容增加到 "),e(t,{code:""},{default:l(()=>[s(".vitepress/config.mts")]),_:1})]),_:1}),e(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[e(o,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[e(r,null,{default:l(()=>[T]),_:1})]),_:1})]),_:1}),e(p,{id:"3.-在-markdown-文件中开始使用-naive-ui"},{default:l(()=>[s("3. 在 markdown 文件中开始使用 naive-ui")]),_:1}),e(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[e(o,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[e(r,null,{default:l(()=>[L]),_:1})]),_:1})]),_:1})],4),u.showAnchor?(g(),x("div",z,[e(b,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:l(()=>[e(_,{title:"注意",href:"#注意"}),e(_,{title:"例子",href:"#例子"}),e(_,{title:"从零开始的关键步骤",href:"#从零开始的关键步骤"})]),_:1})])):D("",!0)],4)}const U=C(V,[["render",H]]);export{U as default};
