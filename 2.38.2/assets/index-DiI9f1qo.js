import{_ as R,u as P,a as A,b as N,c as y,r as a,o as g,d as x,e,f as n,w as l,g as s,n as v,h as T}from"./index-DxZkTPDs.js";const D={components:{},setup(){const d=P(),h=A(()=>(d.value,!1)),_=d;return{showAnchor:h,displayMode:N(),wrapperStyle:y(()=>_.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:y(()=>h.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/demo/pages/docs/vitepress/enUS/index.md"}}},M=e("pre",null,[e("span",{class:"hljs-comment"},"# npm"),s(`
npm install --save-dev @css-render/vue3-ssr

`),e("span",{class:"hljs-comment"},"# pnpm"),s(`
pnpm install --save-dev @css-render/vue3-ssr`)],-1),V=e("pre",null,[e("span",{class:"hljs-comment"},"// .vitepress/theme/index.js"),s(`

`),e("span",{class:"hljs-keyword"},"import"),s(" { defineComponent, h, inject } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'vue'"),s(`
`),e("span",{class:"hljs-keyword"},"import"),s(),e("span",{class:"hljs-title class_"},"DefaultTheme"),s(),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'vitepress/theme'"),s(`
`),e("span",{class:"hljs-keyword"},"import"),s(" { "),e("span",{class:"hljs-title class_"},"NConfigProvider"),s(" } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'naive-ui'"),s(`
`),e("span",{class:"hljs-keyword"},"import"),s(" { setup } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'@css-render/vue3-ssr'"),s(`
`),e("span",{class:"hljs-keyword"},"import"),s(" { useRoute } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'vitepress'"),s(`

`),e("span",{class:"hljs-keyword"},"const"),s(" { "),e("span",{class:"hljs-title class_"},"Layout"),s(" } = "),e("span",{class:"hljs-title class_"},"DefaultTheme"),s(`

`),e("span",{class:"hljs-keyword"},"const"),s(),e("span",{class:"hljs-title class_"},"CssRenderStyle"),s(" = "),e("span",{class:"hljs-title function_"},"defineComponent"),s(`({
  setup () {
    `),e("span",{class:"hljs-keyword"},"const"),s(" collect = "),e("span",{class:"hljs-title function_"},"inject"),s("("),e("span",{class:"hljs-string"},"'css-render-collect'"),s(`)
    `),e("span",{class:"hljs-keyword"},"return"),s(` {
      `),e("span",{class:"hljs-attr"},"style"),s(": "),e("span",{class:"hljs-title function_"},"collect"),s(`()
    }
  },
  render () {
    `),e("span",{class:"hljs-keyword"},"return"),s(),e("span",{class:"hljs-title function_"},"h"),s("("),e("span",{class:"hljs-string"},"'css-render-style'"),s(`, {
      `),e("span",{class:"hljs-attr"},"innerHTML"),s(": "),e("span",{class:"hljs-variable language_"},"this"),s("."),e("span",{class:"hljs-property"},"style"),s(`
    })
  }
})

`),e("span",{class:"hljs-keyword"},"const"),s(),e("span",{class:"hljs-title class_"},"VitepressPath"),s(" = "),e("span",{class:"hljs-title function_"},"defineComponent"),s(`({
  setup () {
    `),e("span",{class:"hljs-keyword"},"const"),s(" route = "),e("span",{class:"hljs-title function_"},"useRoute"),s(`()
    `),e("span",{class:"hljs-keyword"},"return"),s(),e("span",{class:"hljs-function"},"() =>"),s(` {
      `),e("span",{class:"hljs-keyword"},"return"),s(),e("span",{class:"hljs-title function_"},"h"),s("("),e("span",{class:"hljs-string"},"'vitepress-path'"),s(", "),e("span",{class:"hljs-literal"},"null"),s(", [route."),e("span",{class:"hljs-property"},"path"),s(`])
    }
  }
})

`),e("span",{class:"hljs-keyword"},"const"),s(),e("span",{class:"hljs-title class_"},"NaiveUIProvider"),s(" = "),e("span",{class:"hljs-title function_"},"defineComponent"),s(`({
  render () {
    `),e("span",{class:"hljs-keyword"},"return"),s(),e("span",{class:"hljs-title function_"},"h"),s(`(
      `),e("span",{class:"hljs-title class_"},"NConfigProvider"),s(`,
      { `),e("span",{class:"hljs-attr"},"abstract"),s(": "),e("span",{class:"hljs-literal"},"true"),s(", "),e("span",{class:"hljs-attr"},"inlineThemeDisabled"),s(": "),e("span",{class:"hljs-literal"},"true"),s(` },
      {
        `),e("span",{class:"hljs-attr"},"default"),s(": "),e("span",{class:"hljs-function"},"() =>"),s(` [
          `),e("span",{class:"hljs-title function_"},"h"),s("("),e("span",{class:"hljs-title class_"},"Layout"),s(", "),e("span",{class:"hljs-literal"},"null"),s(", { "),e("span",{class:"hljs-attr"},"default"),s(": "),e("span",{class:"hljs-variable language_"},"this"),s("."),e("span",{class:"hljs-property"},"$slots"),s("."),e("span",{class:"hljs-property"},"default"),s(`?.() }),
          `),e("span",{class:"hljs-keyword"},"import"),s("."),e("span",{class:"hljs-property"},"meta"),s("."),e("span",{class:"hljs-property"},"env"),s("."),e("span",{class:"hljs-property"},"SSR"),s(" ? ["),e("span",{class:"hljs-title function_"},"h"),s("("),e("span",{class:"hljs-title class_"},"CssRenderStyle"),s("), "),e("span",{class:"hljs-title function_"},"h"),s("("),e("span",{class:"hljs-title class_"},"VitepressPath"),s(")] : "),e("span",{class:"hljs-literal"},"null"),s(`
        ]
      }
    )
  }
})

`),e("span",{class:"hljs-keyword"},"export"),s(),e("span",{class:"hljs-keyword"},"default"),s(` {
  `),e("span",{class:"hljs-attr"},"extends"),s(": "),e("span",{class:"hljs-title class_"},"DefaultTheme"),s(`,
  `),e("span",{class:"hljs-title class_"},"Layout"),s(": "),e("span",{class:"hljs-title class_"},"NaiveUIProvider"),s(`,
  `),e("span",{class:"hljs-attr"},"enhanceApp"),s(": "),e("span",{class:"hljs-function"},[s("("),e("span",{class:"hljs-params"},"{ app }"),s(") =>")]),s(` {
    `),e("span",{class:"hljs-keyword"},"if"),s(" ("),e("span",{class:"hljs-keyword"},"import"),s("."),e("span",{class:"hljs-property"},"meta"),s("."),e("span",{class:"hljs-property"},"env"),s("."),e("span",{class:"hljs-property"},"SSR"),s(`) {
      `),e("span",{class:"hljs-keyword"},"const"),s(" { collect } = "),e("span",{class:"hljs-title function_"},"setup"),s(`(app)
      app.`),e("span",{class:"hljs-title function_"},"provide"),s("("),e("span",{class:"hljs-string"},"'css-render-collect'"),s(`, collect)
    }
  }
}`)],-1),B=e("pre",null,[e("span",{class:"hljs-keyword"},"import"),s(" { defineConfig } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'vitepress'"),s(`

`),e("span",{class:"hljs-keyword"},"const"),s(),e("span",{class:"hljs-attr"},"fileAndStyles"),s(": "),e("span",{class:"hljs-title class_"},"Record"),s("<"),e("span",{class:"hljs-built_in"},"string"),s(", "),e("span",{class:"hljs-built_in"},"string"),s(`> = {}

`),e("span",{class:"hljs-keyword"},"export"),s(),e("span",{class:"hljs-keyword"},"default"),s(),e("span",{class:"hljs-title function_"},"defineConfig"),s(`({
  `),e("span",{class:"hljs-comment"},"// ..."),s(`
  `),e("span",{class:"hljs-attr"},"vite"),s(`: {
    `),e("span",{class:"hljs-attr"},"ssr"),s(`: {
      `),e("span",{class:"hljs-attr"},"noExternal"),s(": ["),e("span",{class:"hljs-string"},"'naive-ui'"),s(", "),e("span",{class:"hljs-string"},"'date-fns'"),s(", "),e("span",{class:"hljs-string"},"'vueuc'"),s(`]
    }
  },
  `),e("span",{class:"hljs-title function_"},"postRender"),s("("),e("span",{class:"hljs-params"},"context"),s(`) {
    `),e("span",{class:"hljs-keyword"},"const"),s(" styleRegex = "),e("span",{class:"hljs-regexp"},"/<css-render-style>((.|\\s)+)<\\/css-render-style>/"),s(`
    `),e("span",{class:"hljs-keyword"},"const"),s(" vitepressPathRegex = "),e("span",{class:"hljs-regexp"},"/<vitepress-path>(.+)<\\/vitepress-path>/"),s(`
    `),e("span",{class:"hljs-keyword"},"const"),s(" style = styleRegex."),e("span",{class:"hljs-title function_"},"exec"),s("(context."),e("span",{class:"hljs-property"},"content"),s(")?.["),e("span",{class:"hljs-number"},"1"),s(`]
    `),e("span",{class:"hljs-keyword"},"const"),s(" vitepressPath = vitepressPathRegex."),e("span",{class:"hljs-title function_"},"exec"),s("(context."),e("span",{class:"hljs-property"},"content"),s(")?.["),e("span",{class:"hljs-number"},"1"),s(`]
    `),e("span",{class:"hljs-keyword"},"if"),s(` (vitepressPath && style) {
      fileAndStyles[vitepressPath] = style
    }
    context.`),e("span",{class:"hljs-property"},"content"),s(" = context."),e("span",{class:"hljs-property"},"content"),s("."),e("span",{class:"hljs-title function_"},"replace"),s("(styleRegex, "),e("span",{class:"hljs-string"},"''"),s(`)
    context.`),e("span",{class:"hljs-property"},"content"),s(" = context."),e("span",{class:"hljs-property"},"content"),s("."),e("span",{class:"hljs-title function_"},"replace"),s("(vitepressPathRegex, "),e("span",{class:"hljs-string"},"''"),s(`)
  },
  `),e("span",{class:"hljs-title function_"},"transformHtml"),s("("),e("span",{class:"hljs-params"},"code, id"),s(`) {
    `),e("span",{class:"hljs-keyword"},"const"),s(" html = id."),e("span",{class:"hljs-title function_"},"split"),s("("),e("span",{class:"hljs-string"},"'/'"),s(")."),e("span",{class:"hljs-title function_"},"pop"),s(`()
    `),e("span",{class:"hljs-keyword"},"if"),s(" (!html) "),e("span",{class:"hljs-keyword"},"return"),s(`
    `),e("span",{class:"hljs-keyword"},"const"),s(" style = fileAndStyles["),e("span",{class:"hljs-string"},[s("`/"),e("span",{class:"hljs-subst"},"${html}"),s("`")]),s(`]
    `),e("span",{class:"hljs-keyword"},"if"),s(` (style) {
      `),e("span",{class:"hljs-keyword"},"return"),s(" code."),e("span",{class:"hljs-title function_"},"replace"),s("("),e("span",{class:"hljs-regexp"},"/<\\/head>/"),s(", style + "),e("span",{class:"hljs-string"},"'</head>'"),s(`)
    }
  }
})`)],-1),E=e("pre",null,[s(`...

`),e("span",{class:"language-xml"},[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(),e("span",{class:"hljs-attr"},"setup"),s(">")])]),s(`
import { NButton } from 'naive-ui'
`),e("span",{class:"language-xml"},[e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")])]),s(`

`),e("span",{class:"language-xml"},[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"NButton"),s(">")])]),s("Hello World"),e("span",{class:"language-xml"},[e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"NButton"),s(">")])]),s(`

...`)],-1),I={key:0,style:{width:"192px"}};function K(d,h,_,u,L,U){const w=a("edit-on-github-header"),j=a("n-h2"),m=a("n-a"),k=a("router-link"),c=a("n-p"),t=a("n-text"),o=a("n-h3"),r=a("n-code"),p=a("n-scrollbar"),i=a("n-card"),f=a("n-anchor-link"),b=a("n-anchor");return g(),x("div",{class:"doc",style:v(u.wrapperStyle)},[e("div",{style:v(u.contentStyle)},[n(w,{"relative-url":"D:/Code/naive-ui/demo/pages/docs/vitepress/enUS/index.md",text:"Vitepress"}),n(j,{id:"Caveat"},{default:l(()=>[s("Caveat")]),_:1}),n(c,null,{default:l(()=>[s("This document pertains to SSR (Server-Side Rendering). Please familiarize yourself with the "),n(k,{to:"ssr#Caveat",custom:""},{default:l(({navigate:S,href:C})=>[n(m,{href:C,onClick:S},{default:l(()=>[s("SSR Caveats")]),_:2},1032,["href","onClick"])]),_:1}),s(" before proceeding.")]),_:1}),n(j,{id:"Example"},{default:l(()=>[s("Example")]),_:1}),n(c,null,{default:l(()=>[s("This is a "),n(m,{href:"https://github.com/07akioni/naive-ui-vitepress-demo",target:"_blank"},{default:l(()=>[s("demo")]),_:1}),s(" for using "),n(t,{code:""},{default:l(()=>[s("naive-ui")]),_:1}),s(" in "),n(t,{code:""},{default:l(()=>[s("vitepress")]),_:1}),s(" with SSR enabled.")]),_:1}),n(c,null,{default:l(()=>[s("You can directly use the demo.")]),_:1}),n(j,{id:"Key-process-from-scratch"},{default:l(()=>[s("Key process from scratch")]),_:1}),n(c,null,{default:l(()=>[s("If you want to build your own demo from scratch, follow the next steps:")]),_:1}),n(o,{id:"0.-Install-<n-text-code>@css-render/vue3-ssr</n-text>"},{default:l(()=>[s("0. Install "),n(t,{code:""},{default:l(()=>[s("@css-render/vue3-ssr")]),_:1})]),_:1}),n(c,null,{default:l(()=>[s("Make sure its version "),n(t,{code:""},{default:l(()=>[s(">=0.15.14")]),_:1}),s(".")]),_:1}),n(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[n(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[n(r,null,{default:l(()=>[M]),_:1})]),_:1})]),_:1}),n(o,{id:"1.-Add-this-content-to-<n-text-code>.vitepress/theme/index.js</n-text>"},{default:l(()=>[s("1. Add this content to "),n(t,{code:""},{default:l(()=>[s(".vitepress/theme/index.js")]),_:1})]),_:1}),n(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[n(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[n(r,null,{default:l(()=>[V]),_:1})]),_:1})]),_:1}),n(o,{id:"2.-Add-this-content-to-<n-text-code>.vitepress/config.mts</n-text>"},{default:l(()=>[s("2. Add this content to "),n(t,{code:""},{default:l(()=>[s(".vitepress/config.mts")]),_:1})]),_:1}),n(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[n(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[n(r,null,{default:l(()=>[B]),_:1})]),_:1})]),_:1}),n(o,{id:"3.-Start-using-naive-ui-in-your-markdown-file"},{default:l(()=>[s("3. Start using naive-ui in your markdown file")]),_:1}),n(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[n(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[n(r,null,{default:l(()=>[E]),_:1})]),_:1})]),_:1})],4),u.showAnchor?(g(),x("div",I,[n(b,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:l(()=>[n(f,{title:"Caveat",href:"#Caveat"}),n(f,{title:"Example",href:"#Example"}),n(f,{title:"Key process from scratch",href:"#Key-process-from-scratch"})]),_:1})])):T("",!0)],4)}const $=R(D,[["render",K]]);export{$ as default};
