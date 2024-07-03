import{_ as S,u as F,a as N,b as B,c as _,r as c,o as f,d as v,e as a,f as l,w as n,g as s,n as y,h as P}from"./index-mgaNkJ7F.js";const G={components:{},setup(){const i=F(),j=N(()=>!i.value),u=i;return{showAnchor:j,displayMode:B(),wrapperStyle:_(()=>u.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:_(()=>j.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/demo/pages/docs/customize-theme/zhCN/index.md"}}},M=a("pre",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-config-provider"),s(),a("span",{class:"hljs-attr"},":theme"),s("="),a("span",{class:"hljs-string"},'"darkTheme"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"app"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { defineComponent } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { darkTheme } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(),a("span",{class:"hljs-title function_"},"defineComponent"),s(`({
    `),a("span",{class:"hljs-title function_"},"setup"),s("("),a("span",{class:"hljs-params"}),s(`) {
      `),a("span",{class:"hljs-keyword"},"return"),s(` {
        darkTheme
      }
    }
  })
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])],-1),I=a("pre",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"NConfigProvider"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),a("span",{class:"hljs-comment"},[s(`/**
   * js 文件下使用这个做类型提示
   * `),a("span",{class:"hljs-doctag"},"@type"),s(` import('naive-ui').GlobalThemeOverrides
   */`)]),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` themeOverrides = {
    `),a("span",{class:"hljs-attr"},"common"),s(`: {
      `),a("span",{class:"hljs-attr"},"primaryColor"),s(": "),a("span",{class:"hljs-string"},"'#FF0000'"),s(`
    },
    `),a("span",{class:"hljs-title class_"},"Button"),s(`: {
      `),a("span",{class:"hljs-attr"},"textColor"),s(": "),a("span",{class:"hljs-string"},"'#FF0000'"),s(`
    },
    `),a("span",{class:"hljs-title class_"},"Select"),s(`: {
      `),a("span",{class:"hljs-attr"},"peers"),s(`: {
        `),a("span",{class:"hljs-title class_"},"InternalSelection"),s(`: {
          `),a("span",{class:"hljs-attr"},"textColor"),s(": "),a("span",{class:"hljs-string"},"'#FF0000'"),s(`
        }
      }
    }
    `),a("span",{class:"hljs-comment"},"// ..."),s(`
  }

  `),a("span",{class:"hljs-comment"},"// ..."),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-config-provider"),s(),a("span",{class:"hljs-attr"},":theme-overrides"),s("="),a("span",{class:"hljs-string"},'"themeOverrides"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")])],-1),z=a("pre",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"NConfigProvider"),s(", "),a("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-attr"},"themeOverrides"),s(": "),a("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(` = {
    `),a("span",{class:"hljs-attr"},"common"),s(`: {
      `),a("span",{class:"hljs-attr"},"primaryColor"),s(": "),a("span",{class:"hljs-string"},"'#FF0000'"),s(`
    },
    `),a("span",{class:"hljs-title class_"},"Button"),s(`: {
      `),a("span",{class:"hljs-attr"},"textColor"),s(": "),a("span",{class:"hljs-string"},"'#FF0000'"),s(`
    }
  }

  `),a("span",{class:"hljs-comment"},"// ..."),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-config-provider"),s(),a("span",{class:"hljs-attr"},":theme-overrides"),s("="),a("span",{class:"hljs-string"},'"themeOverrides"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")])],-1),D=a("pre",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"SelectProps"),s(", "),a("span",{class:"hljs-title class_"},"ButtonProps"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'naive-ui'"),s(`

  type `),a("span",{class:"hljs-title class_"},"SelectThemeOverrides"),s(" = "),a("span",{class:"hljs-title class_"},"NonNullable"),s("<"),a("span",{class:"hljs-title class_"},"SelectProps"),s("["),a("span",{class:"hljs-string"},"'themeOverrides'"),s(`]>
  type `),a("span",{class:"hljs-title class_"},"ButtonThemeOverrides"),s(" = "),a("span",{class:"hljs-title class_"},"NonNullable"),s("<"),a("span",{class:"hljs-title class_"},"ButtonProps"),s("["),a("span",{class:"hljs-string"},"'themeOverrides'"),s(`]>

  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-attr"},"selectThemeOverrides"),s(": "),a("span",{class:"hljs-title class_"},"SelectThemeOverrides"),s(` = {
    `),a("span",{class:"hljs-attr"},"menuBoxShadow"),s(`:
      `),a("span",{class:"hljs-string"},"'0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)'"),s(`,
    `),a("span",{class:"hljs-attr"},"peers"),s(`: {
      `),a("span",{class:"hljs-title class_"},"InternalSelection"),s(`: {
        `),a("span",{class:"hljs-attr"},"textColor"),s(": "),a("span",{class:"hljs-string"},"'#FF0000'"),s(`,
        `),a("span",{class:"hljs-attr"},"heightMedium"),s(": "),a("span",{class:"hljs-string"},"'42px'"),s(`
      }
    }
  }
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-attr"},"buttonThemeOverrides"),s(": "),a("span",{class:"hljs-title class_"},"ButtonThemeOverrides"),s(` = {
    `),a("span",{class:"hljs-attr"},"heightMedium"),s(": "),a("span",{class:"hljs-string"},"'40px'"),s(`,
    `),a("span",{class:"hljs-attr"},"textColor"),s(": "),a("span",{class:"hljs-string"},"'rgba(24, 127, 231, 1)'"),s(`
  }

  `),a("span",{class:"hljs-comment"},"// ..."),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-select"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:value"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
    `),a("span",{class:"hljs-attr"},":options"),s("="),a("span",{class:"hljs-string"},'"options"'),s(`
    `),a("span",{class:"hljs-attr"},":theme-overrides"),s("="),a("span",{class:"hljs-string"},'"selectThemeOverrides"'),s(`
  />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-button"),s(),a("span",{class:"hljs-attr"},":theme-overrides"),s("="),a("span",{class:"hljs-string"},'"buttonThemeOverrides"'),s(">")]),s("theme"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"n-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")])],-1),E=a("pre",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"NConfigProvider"),s(", darkTheme } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),a("span",{class:"hljs-comment"},[s(`/**
   * `),a("span",{class:"hljs-doctag"},"@type"),s(` import('naive-ui').GlobalThemeOverrides
   */`)]),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(` lightThemeOverrides = {
    `),a("span",{class:"hljs-attr"},"common"),s(`: {
      `),a("span",{class:"hljs-attr"},"primaryColor"),s(": "),a("span",{class:"hljs-string"},"'#000000'"),s(`
    }
    `),a("span",{class:"hljs-comment"},"// ..."),s(`
  }

  `),a("span",{class:"hljs-keyword"},"const"),s(` darkThemeOverrides = {
    `),a("span",{class:"hljs-attr"},"common"),s(`: {
      `),a("span",{class:"hljs-attr"},"primaryColor"),s(": "),a("span",{class:"hljs-string"},"'#FFFFFF'"),s(`
    }
    `),a("span",{class:"hljs-comment"},"// ..."),s(`
  }

  `),a("span",{class:"hljs-keyword"},"const"),s(" theme = "),a("span",{class:"hljs-literal"},"null"),s(`
  `),a("span",{class:"hljs-comment"},"// ..."),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-config-provider"),s(`
    `),a("span",{class:"hljs-attr"},":theme"),s("="),a("span",{class:"hljs-string"},'"theme"'),s(`
    `),a("span",{class:"hljs-attr"},":theme-overrides"),s("="),a("span",{class:"hljs-string"},'"theme === null ? lightThemeOverrides : darkThemeOverrides"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")])],-1),R=a("pre",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"NConfigProvider"),s(", "),a("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-attr"},"themeOverrides"),s(": "),a("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(` = {
    `),a("span",{class:"hljs-title class_"},"Select"),s(`: {
      `),a("span",{class:"hljs-attr"},"peers"),s(`: {
        `),a("span",{class:"hljs-title class_"},"InternalSelection"),s(`: {
          `),a("span",{class:"hljs-attr"},"textColor"),s(": "),a("span",{class:"hljs-string"},"'#FF0000'"),s(`
        },
        `),a("span",{class:"hljs-title class_"},"InternalSelectMenu"),s(`: {
          `),a("span",{class:"hljs-attr"},"borderRadius"),s(": "),a("span",{class:"hljs-string"},"'6px'"),s(`
        }
      }
    },
    `),a("span",{class:"hljs-title class_"},"DataTable"),s(`: {
      `),a("span",{class:"hljs-attr"},"paginationMargin"),s(": "),a("span",{class:"hljs-string"},"'40px 0 0 0'"),s(`,
      `),a("span",{class:"hljs-attr"},"peers"),s(`: {
        `),a("span",{class:"hljs-title class_"},"Empty"),s(`: {
          `),a("span",{class:"hljs-attr"},"textColor"),s(": "),a("span",{class:"hljs-string"},"'#ccc'"),s(`
        },
        `),a("span",{class:"hljs-title class_"},"Pagination"),s(`: {
          `),a("span",{class:"hljs-attr"},"itemTextColor"),s(": "),a("span",{class:"hljs-string"},"'#ccc'"),s(`
        }
      }
    }
    `),a("span",{class:"hljs-comment"},"// ..."),s(`
  }
  `),a("span",{class:"hljs-comment"},"// ..."),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-config-provider"),s(),a("span",{class:"hljs-attr"},":theme-overrides"),s("="),a("span",{class:"hljs-string"},'"themeOverrides"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")])],-1),V=a("pre",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"app"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-global-style"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")])],-1),A=a("pre",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"n-theme-editor"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"app"),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"n-theme-editor"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { defineComponent } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"NThemeEditor"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(),a("span",{class:"hljs-title function_"},"defineComponent"),s(`({
    `),a("span",{class:"hljs-attr"},"components"),s(`: {
      `),a("span",{class:"hljs-title class_"},"NThemeEditor"),s(`
    }
  })
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])],-1),U={key:0,style:{width:"192px"}};function L(i,j,u,m,$,q){const x=c("edit-on-github-header"),t=c("n-text"),e=c("n-p"),b=c("n-a"),k=c("router-link"),p=c("n-h2"),r=c("n-code"),o=c("n-scrollbar"),h=c("n-card"),g=c("n-li"),w=c("n-ol"),d=c("n-anchor-link"),T=c("n-anchor");return f(),v("div",{class:"doc",style:y(m.wrapperStyle)},[a("div",{style:y(m.contentStyle)},[l(x,{"relative-url":"D:/Code/naive-ui/demo/pages/docs/customize-theme/zhCN/index.md",text:"调整主题"}),l(e,null,{default:n(()=>[s("Naive UI 通过使用 "),l(t,{code:""},{default:n(()=>[s("n-config-provider")]),_:1}),s(" 调整主题。")]),_:1}),l(e,null,{default:n(()=>[s("默认情况下所有组件均为亮色主题，无需任何配置。")]),_:1}),l(e,null,{default:n(()=>[s("了解更多关于 "),l(t,{code:""},{default:n(()=>[s("n-config-provider")]),_:1}),s(" 的信息，参见 "),l(k,{to:"../components/config-provider",custom:""},{default:n(({navigate:C,href:O})=>[l(b,{href:O,onClick:C},{default:n(()=>[s("全局化配置")]),_:2},1032,["href","onClick"])]),_:1}),s("。")]),_:1}),l(p,{id:"使用暗色主题"},{default:n(()=>[s("使用暗色主题")]),_:1}),l(e,null,{default:n(()=>[s("将 "),l(t,{code:""},{default:n(()=>[s("n-config-provider")]),_:1}),s(" 的 "),l(t,{code:""},{default:n(()=>[s("theme")]),_:1}),s(" 设为从 naive-ui 导入的 "),l(t,{code:""},{default:n(()=>[s("darkTheme")]),_:1}),s(" 来设定暗色主题。")]),_:1}),l(e,null,{default:n(()=>[s("若 "),l(t,{code:""},{default:n(()=>[s("theme")]),_:1}),s(" 为 "),l(t,{code:""},{default:n(()=>[s("undefined")]),_:1}),s(" 则不会影响内部组件的主题。")]),_:1}),l(h,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[l(o,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[l(r,null,{default:n(()=>[M]),_:1})]),_:1})]),_:1}),l(p,{id:"调整主题变量"},{default:n(()=>[s("调整主题变量")]),_:1}),l(e,null,{default:n(()=>[s("你不需要写任何 CSS（Scss、Less...）。")]),_:1}),l(e,null,{default:n(()=>[s("配置的全局主题变量会对后代组件生效的主题变量覆盖。")]),_:1}),l(e,null,{default:n(()=>[s("通过设定 "),l(t,{code:""},{default:n(()=>[s("n-config-provider")]),_:1}),s(" 的 "),l(t,{code:""},{default:n(()=>[s("theme-overrides")]),_:1}),s(" 来调整主题变量。naive-ui 导出了 "),l(t,{code:""},{default:n(()=>[s("GlobalThemeOverrides")]),_:1}),s(" 类型帮助你定义主题。")]),_:1}),l(e,null,{default:n(()=>[s("具体可使用变量请参考 "),l(t,{code:""},{default:n(()=>[s("GlobalThemeOverrides")]),_:1}),s(" 类型提示。")]),_:1}),l(e,null,{default:n(()=>[s("如果想要查看更多的主题变量，可在 Naive UI 主页的右下角的 edit 按钮查看。")]),_:1}),l(e,null,{default:n(()=>[s("可以修改对应的主题变量，导出后可以拿到 themeOverrides 对象。")]),_:1}),l(h,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[l(o,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[l(r,null,{default:n(()=>[I]),_:1})]),_:1})]),_:1}),l(p,{id:"TS-下使用主题变量"},{default:n(()=>[s("TS 下使用主题变量")]),_:1}),l(e,null,{default:n(()=>[s("如果你正在使用 ts 写代码，这块比较适合你。")]),_:1}),l(h,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[l(o,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[l(r,null,{default:n(()=>[z]),_:1})]),_:1})]),_:1}),l(p,{id:"调整组件主题变量"},{default:n(()=>[s("调整组件主题变量")]),_:1}),l(e,null,{default:n(()=>[s("组件主题变量使用方法同全局主题变量使用方法，并且组件主题变量会覆盖全局主题变量。")]),_:1}),l(h,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[l(o,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[l(r,null,{default:n(()=>[D]),_:1})]),_:1})]),_:1}),l(p,{id:"不同主题下调整主题变量"},{default:n(()=>[s("不同主题下调整主题变量")]),_:1}),l(e,null,{default:n(()=>[s("如果你想要在亮色和暗色上同时使用不同的主题变量，可以来看看这个。")]),_:1}),l(h,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[l(o,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[l(r,null,{default:n(()=>[E]),_:1})]),_:1})]),_:1}),l(p,{id:"使用-peers-主题变量"},{default:n(()=>[s("使用 peers 主题变量")]),_:1}),l(e,null,{default:n(()=>[s("很多时候组件内部都会复用另一个组件，因此出现了 peers 的主题变量。")]),_:1}),l(e,null,{default:n(()=>[s("peers 相关的主题变量还没有暴露，使用 "),l(t,{code:""},{default:n(()=>[s("GlobalThemeOverrides")]),_:1}),s(" 可以查看对应组件的 peers 变量。")]),_:1}),l(e,null,{default:n(()=>[s("具体哪些可使用的 peers 后续会更新。")]),_:1}),l(h,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[l(o,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[l(r,null,{default:n(()=>[R]),_:1})]),_:1})]),_:1}),l(p,{id:"同步-body-元素的样式"},{default:n(()=>[s("同步 body 元素的样式")]),_:1}),l(e,null,{default:n(()=>[s("出于以下原因，你可能需要将某些样式设定在 "),l(t,{code:""},{default:n(()=>[s("document.body")]),_:1}),s(" 上。")]),_:1}),l(w,null,{default:n(()=>[l(g,null,{default:n(()=>[s("naive-ui 会设定一些非响应式的全局样式（例如字体），它们在默认状况下工作良好，但是不能响应主题的变化。")]),_:1}),l(g,null,{default:n(()=>[l(t,{code:""},{default:n(()=>[s("n-config-provider")]),_:1}),s(" 无法将全局样式同步到它以外的地方（例如 body 背景色）。")]),_:1})]),_:1}),l(e,null,{default:n(()=>[s("通过使用 "),l(t,{code:""},{default:n(()=>[s("n-global-style")]),_:1}),s(" 可以将常见的全局样式同步到 body 上。在下面的例子中，"),l(t,{code:""},{default:n(()=>[s("n-global-style")]),_:1}),s(" 会将 "),l(t,{code:""},{default:n(()=>[s("n-config-provider")]),_:1}),s(" 提供的主题同步到 "),l(t,{code:""},{default:n(()=>[s("document.body")]),_:1}),s(" 上。")]),_:1}),l(h,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[l(o,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[l(r,null,{default:n(()=>[V]),_:1})]),_:1})]),_:1}),l(p,{id:"主题编辑器"},{default:n(()=>[s("主题编辑器")]),_:1}),l(e,null,{default:n(()=>[s("naive-ui 提供主题编辑器帮助你方便的编辑主题并导出对应配置。它可以被嵌套于 "),l(t,{code:""},{default:n(()=>[s("n-config-provider")]),_:1}),s(" 中。")]),_:1}),l(e,null,{default:n(()=>[s("主题编辑器不包含在全局安装中（"),l(t,{code:""},{default:n(()=>[s("app.use(naive)")]),_:1}),s("）。你需要显式引入来使用它。")]),_:1}),l(h,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[l(o,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[l(r,null,{default:n(()=>[A]),_:1})]),_:1})]),_:1})],4),m.showAnchor?(f(),v("div",U,[l(T,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:n(()=>[l(d,{title:"使用暗色主题",href:"#使用暗色主题"}),l(d,{title:"调整主题变量",href:"#调整主题变量"}),l(d,{title:"TS 下使用主题变量",href:"#TS-下使用主题变量"}),l(d,{title:"调整组件主题变量",href:"#调整组件主题变量"}),l(d,{title:"不同主题下调整主题变量",href:"#不同主题下调整主题变量"}),l(d,{title:"使用 peers 主题变量",href:"#使用-peers-主题变量"}),l(d,{title:"同步 body 元素的样式",href:"#同步-body-元素的样式"}),l(d,{title:"主题编辑器",href:"#主题编辑器"})]),_:1})])):P("",!0)],4)}const J=S(G,[["render",L]]);export{J as default};
