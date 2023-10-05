import{_ as O,u as F,a as z,b as N,c as f,r as c,o as _,d as v,e,f as a,w as l,g as s,n as y,h as I}from"./index-9afb4b71.js";const U={components:{},setup(){const d=F(),m=z(()=>!d.value),u=d;return{showAnchor:m,displayMode:N(),wrapperStyle:f(()=>u.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:f(()=>m.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/demo/pages/docs/customize-theme/enUS/index.md"}}},B=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-config-provider"),s(),e("span",{class:"hljs-attr"},":theme"),s("="),e("span",{class:"hljs-string"},'"darkTheme"'),s(">")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"app"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { defineComponent } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'vue'"),s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { darkTheme } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),e("span",{class:"hljs-keyword"},"export"),s(),e("span",{class:"hljs-keyword"},"default"),s(),e("span",{class:"hljs-title function_"},"defineComponent"),s(`({
    `),e("span",{class:"hljs-title function_"},"setup"),s("("),e("span",{class:"hljs-params"}),s(`) {
      `),e("span",{class:"hljs-keyword"},"return"),s(` {
        darkTheme
      }
    }
  })
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")])],-1),P=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { "),e("span",{class:"hljs-title class_"},"NConfigProvider"),s(" } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),e("span",{class:"hljs-comment"},[s(`/**
   * Use this for type hints under js file
   * `),e("span",{class:"hljs-doctag"},"@type"),s(` import('naive-ui').GlobalThemeOverrides
   */`)]),s(`
  `),e("span",{class:"hljs-keyword"},"const"),s(` themeOverrides = {
    `),e("span",{class:"hljs-attr"},"common"),s(`: {
      `),e("span",{class:"hljs-attr"},"primaryColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`
    },
    `),e("span",{class:"hljs-title class_"},"Button"),s(`: {
      `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`
    },
    `),e("span",{class:"hljs-title class_"},"Select"),s(`: {
      `),e("span",{class:"hljs-attr"},"peers"),s(`: {
        `),e("span",{class:"hljs-title class_"},"InternalSelection"),s(`: {
          `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`
        }
      }
    }
    `),e("span",{class:"hljs-comment"},"// ..."),s(`
  }

  `),e("span",{class:"hljs-comment"},"// ..."),s(`
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-config-provider"),s(),e("span",{class:"hljs-attr"},":theme-overrides"),s("="),e("span",{class:"hljs-string"},'"themeOverrides"'),s(">")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")])],-1),G=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(),e("span",{class:"hljs-attr"},"lang"),s("="),e("span",{class:"hljs-string"},'"ts"'),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { "),e("span",{class:"hljs-title class_"},"NConfigProvider"),s(", "),e("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(" } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),e("span",{class:"hljs-keyword"},"const"),s(),e("span",{class:"hljs-attr"},"themeOverrides"),s(": "),e("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(` = {
    `),e("span",{class:"hljs-attr"},"common"),s(`: {
      `),e("span",{class:"hljs-attr"},"primaryColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`
    },
    `),e("span",{class:"hljs-title class_"},"Button"),s(`: {
      `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`
    }
  }

  `),e("span",{class:"hljs-comment"},"// ..."),s(`
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-config-provider"),s(),e("span",{class:"hljs-attr"},":theme-overrides"),s("="),e("span",{class:"hljs-string"},'"themeOverrides"'),s(">")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")])],-1),M=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(),e("span",{class:"hljs-attr"},"lang"),s("="),e("span",{class:"hljs-string"},'"ts"'),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { "),e("span",{class:"hljs-title class_"},"SelectProps"),s(", "),e("span",{class:"hljs-title class_"},"ButtonProps"),s(" } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'naive-ui'"),s(`

  type `),e("span",{class:"hljs-title class_"},"SelectThemeOverrides"),s(" = "),e("span",{class:"hljs-title class_"},"NonNullable"),s("<"),e("span",{class:"hljs-title class_"},"SelectProps"),s("["),e("span",{class:"hljs-string"},"'themeOverrides'"),s(`]>
  type `),e("span",{class:"hljs-title class_"},"ButtonThemeOverrides"),s(" = "),e("span",{class:"hljs-title class_"},"NonNullable"),s("<"),e("span",{class:"hljs-title class_"},"ButtonProps"),s("["),e("span",{class:"hljs-string"},"'themeOverrides'"),s(`]>

  `),e("span",{class:"hljs-keyword"},"const"),s(),e("span",{class:"hljs-attr"},"selectThemeOverrides"),s(": "),e("span",{class:"hljs-title class_"},"SelectThemeOverrides"),s(` = {
    `),e("span",{class:"hljs-attr"},"menuBoxShadow"),s(`:
      `),e("span",{class:"hljs-string"},"'0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)'"),s(`,
    `),e("span",{class:"hljs-attr"},"peers"),s(`: {
      `),e("span",{class:"hljs-title class_"},"InternalSelection"),s(`: {
        `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`,
        `),e("span",{class:"hljs-attr"},"heightMedium"),s(": "),e("span",{class:"hljs-string"},"'42px'"),s(`
      }
    }
  }
  `),e("span",{class:"hljs-keyword"},"const"),s(),e("span",{class:"hljs-attr"},"buttonThemeOverrides"),s(": "),e("span",{class:"hljs-title class_"},"ButtonThemeOverrides"),s(` = {
    `),e("span",{class:"hljs-attr"},"heightMedium"),s(": "),e("span",{class:"hljs-string"},"'40px'"),s(`,
    `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'rgba(24, 127, 231, 1)'"),s(`
  }

  `),e("span",{class:"hljs-comment"},"// ..."),s(`
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-select"),s(`
    `),e("span",{class:"hljs-attr"},"v-model:value"),s("="),e("span",{class:"hljs-string"},'"value"'),s(`
    `),e("span",{class:"hljs-attr"},":options"),s("="),e("span",{class:"hljs-string"},'"options"'),s(`
    `),e("span",{class:"hljs-attr"},":theme-overrides"),s("="),e("span",{class:"hljs-string"},'"selectThemeOverrides"'),s(`
  />`)]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-button"),s(),e("span",{class:"hljs-attr"},":theme-overrides"),s("="),e("span",{class:"hljs-string"},'"buttonThemeOverrides"'),s(">")]),s("theme"),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-button"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")])],-1),D=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { "),e("span",{class:"hljs-title class_"},"NConfigProvider"),s(", darkTheme } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),e("span",{class:"hljs-comment"},[s(`/**
   * `),e("span",{class:"hljs-doctag"},"@type"),s(` import('naive-ui').GlobalThemeOverrides
   */`)]),s(`
  `),e("span",{class:"hljs-keyword"},"const"),s(` lightThemeOverrides = {
    `),e("span",{class:"hljs-attr"},"common"),s(`: {
      `),e("span",{class:"hljs-attr"},"primaryColor"),s(": "),e("span",{class:"hljs-string"},"'#000000'"),s(`
    }
    `),e("span",{class:"hljs-comment"},"// ..."),s(`
  }

  `),e("span",{class:"hljs-keyword"},"const"),s(` darkThemeOverrides = {
    `),e("span",{class:"hljs-attr"},"common"),s(`: {
      `),e("span",{class:"hljs-attr"},"primaryColor"),s(": "),e("span",{class:"hljs-string"},"'#FFFFFF'"),s(`
    }
    `),e("span",{class:"hljs-comment"},"// ..."),s(`
  }

  `),e("span",{class:"hljs-keyword"},"const"),s(" theme = "),e("span",{class:"hljs-literal"},"null"),s(`
  `),e("span",{class:"hljs-comment"},"// ..."),s(`
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-config-provider"),s(`
    `),e("span",{class:"hljs-attr"},":theme"),s("="),e("span",{class:"hljs-string"},'"theme"'),s(`
    `),e("span",{class:"hljs-attr"},":theme-overrides"),s("="),e("span",{class:"hljs-string"},'"theme === null ? lightThemeOverrides : darkThemeOverrides"'),s(`
  >`)]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")])],-1),E=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(),e("span",{class:"hljs-attr"},"lang"),s("="),e("span",{class:"hljs-string"},'"ts"'),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { "),e("span",{class:"hljs-title class_"},"NConfigProvider"),s(", "),e("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(" } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),e("span",{class:"hljs-keyword"},"const"),s(),e("span",{class:"hljs-attr"},"themeOverrides"),s(": "),e("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(` = {
    `),e("span",{class:"hljs-title class_"},"Select"),s(`: {
      `),e("span",{class:"hljs-attr"},"peers"),s(`: {
        `),e("span",{class:"hljs-title class_"},"InternalSelection"),s(`: {
          `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'#FF0000'"),s(`
        },
        `),e("span",{class:"hljs-title class_"},"InternalSelectMenu"),s(`: {
          `),e("span",{class:"hljs-attr"},"borderRadius"),s(": "),e("span",{class:"hljs-string"},"'6px'"),s(`
        }
      }
    },
    `),e("span",{class:"hljs-title class_"},"DataTable"),s(`: {
      `),e("span",{class:"hljs-attr"},"paginationMargin"),s(": "),e("span",{class:"hljs-string"},"'40px 0 0 0'"),s(`,
      `),e("span",{class:"hljs-attr"},"peers"),s(`: {
        `),e("span",{class:"hljs-title class_"},"Empty"),s(`: {
          `),e("span",{class:"hljs-attr"},"textColor"),s(": "),e("span",{class:"hljs-string"},"'#ccc'"),s(`
        },
        `),e("span",{class:"hljs-title class_"},"Pagination"),s(`: {
          `),e("span",{class:"hljs-attr"},"itemTextColor"),s(": "),e("span",{class:"hljs-string"},"'#ccc'"),s(`
        }
      }
    }
    `),e("span",{class:"hljs-comment"},"// ..."),s(`
  }
  `),e("span",{class:"hljs-comment"},"// ..."),s(`
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-config-provider"),s(),e("span",{class:"hljs-attr"},":theme-overrides"),s("="),e("span",{class:"hljs-string"},'"themeOverrides"'),s(">")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")])],-1),R=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-config-provider"),s(),e("span",{class:"hljs-attr"},"..."),s(">")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"app"),s(" />")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-global-style"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")])],-1),V=e("pre",null,[e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"n-theme-editor"),s(">")]),s(`
    `),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"app"),s(" />")]),s(`
  `),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"n-theme-editor"),s(">")]),s(`
`),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),e("span",{class:"hljs-tag"},[s("<"),e("span",{class:"hljs-name"},"script"),s(">")]),e("span",{class:"language-javascript"},[s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { defineComponent } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'vue'"),s(`
  `),e("span",{class:"hljs-keyword"},"import"),s(" { "),e("span",{class:"hljs-title class_"},"NThemeEditor"),s(" } "),e("span",{class:"hljs-keyword"},"from"),s(),e("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),e("span",{class:"hljs-keyword"},"export"),s(),e("span",{class:"hljs-keyword"},"default"),s(),e("span",{class:"hljs-title function_"},"defineComponent"),s(`({
    `),e("span",{class:"hljs-attr"},"components"),s(`: {
      `),e("span",{class:"hljs-title class_"},"NThemeEditor"),s(`
    }
  })
`)]),e("span",{class:"hljs-tag"},[s("</"),e("span",{class:"hljs-name"},"script"),s(">")])],-1),A={key:0,style:{width:"192px"}};function Y(d,m,u,j,q,L){const b=c("edit-on-github-header"),n=c("n-text"),t=c("n-p"),x=c("n-a"),w=c("router-link"),o=c("n-h2"),r=c("n-code"),p=c("n-scrollbar"),i=c("n-card"),g=c("n-li"),k=c("n-ol"),h=c("n-anchor-link"),C=c("n-anchor");return _(),v("div",{class:"doc",style:y(j.wrapperStyle)},[e("div",{style:y(j.contentStyle)},[a(b,{"relative-url":"D:/Code/naive-ui/demo/pages/docs/customize-theme/enUS/index.md",text:"Customizing theme"}),a(t,null,{default:l(()=>[s("Naive-ui provides "),a(n,{code:""},{default:l(()=>[s("n-config-provider")]),_:1}),s(" to customize the theme.")]),_:1}),a(t,null,{default:l(()=>[s("By default all of the components are light themed, without any configuration.")]),_:1}),a(t,null,{default:l(()=>[s("To learn more about "),a(n,{code:""},{default:l(()=>[s("n-config-provider")]),_:1}),s(", see "),a(w,{to:"../components/config-provider",custom:""},{default:l(({navigate:T,href:S})=>[a(x,{href:S,onClick:T},{default:l(()=>[s("Config Provider")]),_:2},1032,["href","onClick"])]),_:1}),s(".")]),_:1}),a(o,{id:"Use-dark-theme"},{default:l(()=>[s("Use dark theme")]),_:1}),a(t,null,{default:l(()=>[s("Set "),a(n,{code:""},{default:l(()=>[s("n-config-provider")]),_:1}),s("'s "),a(n,{code:""},{default:l(()=>[s("theme")]),_:1}),s(" prop to "),a(n,{code:""},{default:l(()=>[s("darkTheme")]),_:1}),s(" imported from naive-ui to set dark theme inside "),a(n,{code:""},{default:l(()=>[s("n-config-provider")]),_:1}),s(".")]),_:1}),a(t,null,{default:l(()=>[s("If "),a(n,{code:""},{default:l(()=>[s("theme")]),_:1}),s(" is "),a(n,{code:""},{default:l(()=>[s("undefined")]),_:1}),s(" it won't affect the theme of components inside.")]),_:1}),a(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[a(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[a(r,null,{default:l(()=>[B]),_:1})]),_:1})]),_:1}),a(o,{id:"Customizing-theme-vars-(design-tokens)"},{default:l(()=>[s("Customizing theme vars (design tokens)")]),_:1}),a(t,null,{default:l(()=>[s("No CSS (Scss, Less) needed.")]),_:1}),a(t,null,{default:l(()=>[s("The configured global theme variables will overwrite the theme variables that take effect on descendant components.")]),_:1}),a(t,null,{default:l(()=>[s("Set "),a(n,{code:""},{default:l(()=>[s("n-config-provider")]),_:1}),s("'s "),a(n,{code:""},{default:l(()=>[s("theme-overrides")]),_:1}),s(" to customize theme vars. Naive-ui exports type "),a(n,{code:""},{default:l(()=>[s("GlobalThemeOverrides")]),_:1}),s(" to help you define "),a(n,{code:""},{default:l(()=>[s("theme-overrides")]),_:1}),s(".")]),_:1}),a(t,null,{default:l(()=>[s("For available vars please follow the type hint of "),a(n,{code:""},{default:l(()=>[s("GlobalThemeOverrides")]),_:1}),s(".")]),_:1}),a(t,null,{default:l(()=>[s("If you want to view more theme variables, you can view them in the edit button at the bottom right corner of the Naive UI homepage.")]),_:1}),a(t,null,{default:l(()=>[s("You can modify the corresponding theme variable, you can get the themeOverrides object after export.")]),_:1}),a(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[a(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[a(r,null,{default:l(()=>[P]),_:1})]),_:1})]),_:1}),a(o,{id:"Customizing-theme-vars-in-TypeScript"},{default:l(()=>[s("Customizing theme vars in TypeScript")]),_:1}),a(t,null,{default:l(()=>[s("If you are using ts to write code, this one is more suitable for you.")]),_:1}),a(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[a(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[a(r,null,{default:l(()=>[G]),_:1})]),_:1})]),_:1}),a(o,{id:"Customizing-component-theme-vars"},{default:l(()=>[s("Customizing component theme vars")]),_:1}),a(t,null,{default:l(()=>[s("The use of component theme variables is the same as the use of global theme variables, and the component theme variables will override the global theme variables.")]),_:1}),a(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[a(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[a(r,null,{default:l(()=>[M]),_:1})]),_:1})]),_:1}),a(o,{id:"Customizing-theme-vars-under-different-themes"},{default:l(()=>[s("Customizing theme vars under different themes")]),_:1}),a(t,null,{default:l(()=>[s("If you want to use different theme variables on light and dark theme at the same time, you can take a look at this.")]),_:1}),a(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[a(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[a(r,null,{default:l(()=>[D]),_:1})]),_:1})]),_:1}),a(o,{id:"Use-the-peers-vars"},{default:l(()=>[s("Use the peers vars")]),_:1}),a(t,null,{default:l(()=>[s("In many cases, another component will be reused inside a component, so the theme variable of peers appears.")]),_:1}),a(t,null,{default:l(()=>[s("The theme variables related to peers have not been exposed yet. Use "),a(n,{code:""},{default:l(()=>[s("GlobalThemeOverrides")]),_:1}),s(" to view the peers variables of the corresponding component.")]),_:1}),a(t,null,{default:l(()=>[s("The specific available peers will be updated later.")]),_:1}),a(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[a(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[a(r,null,{default:l(()=>[E]),_:1})]),_:1})]),_:1}),a(o,{id:"Sync-style-of-the-body-element"},{default:l(()=>[s("Sync style of the body element")]),_:1}),a(t,null,{default:l(()=>[s("For the following reasons, you may need to set some styles on "),a(n,{code:""},{default:l(()=>[s("document.body")]),_:1}),s(".")]),_:1}),a(k,null,{default:l(()=>[a(g,null,{default:l(()=>[s("Naive-ui will mount some global style that is unresponsive (to theme, not media query). For example "),a(n,{code:""},{default:l(()=>[s("font-family")]),_:1}),s(". The style works fine by default, however they won't change when theme is changed.")]),_:1}),a(g,null,{default:l(()=>[a(n,{code:""},{default:l(()=>[s("n-config-provider")]),_:1}),s(" can't sync global style (for example, body's background color) outside it.")]),_:1})]),_:1}),a(t,null,{default:l(()=>[s("You can use "),a(n,{code:""},{default:l(()=>[s("n-global-style")]),_:1}),s(" to sync common global style to the body element. In the following example, "),a(n,{code:""},{default:l(()=>[s("n-global-style")]),_:1}),s(" will sync the theme provided by "),a(n,{code:""},{default:l(()=>[s("n-config-provider")]),_:1}),s(" to "),a(n,{code:""},{default:l(()=>[s("document.body")]),_:1}),s(".")]),_:1}),a(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[a(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[a(r,null,{default:l(()=>[R]),_:1})]),_:1})]),_:1}),a(o,{id:"Theme-editor"},{default:l(()=>[s("Theme editor")]),_:1}),a(t,null,{default:l(()=>[s("Naive-ui provides a theme editor to help you edit theme and export the corresponding configuration. It can be placed inside "),a(n,{code:""},{default:l(()=>[s("n-config-provider")]),_:1}),s(".")]),_:1}),a(t,null,{default:l(()=>[s("The theme editor is not included in global installation ("),a(n,{code:""},{default:l(()=>[s("app.use(naive)")]),_:1}),s("). You need to import it explicitly to use it.")]),_:1}),a(i,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:l(()=>[a(p,{"x-scrollable":"","content-style":"padding: 16px;"},{default:l(()=>[a(r,null,{default:l(()=>[V]),_:1})]),_:1})]),_:1})],4),j.showAnchor?(_(),v("div",A,[a(C,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:l(()=>[a(h,{title:"Use dark theme",href:"#Use-dark-theme"}),a(h,{title:"Customizing theme vars (design tokens)",href:"#Customizing-theme-vars-(design-tokens)"}),a(h,{title:"Customizing theme vars in TypeScript",href:"#Customizing-theme-vars-in-TypeScript"}),a(h,{title:"Customizing component theme vars",href:"#Customizing-component-theme-vars"}),a(h,{title:"Customizing theme vars under different themes",href:"#Customizing-theme-vars-under-different-themes"}),a(h,{title:"Use the peers vars",href:"#Use-the-peers-vars"}),a(h,{title:"Sync style of the body element",href:"#Sync-style-of-the-body-element"}),a(h,{title:"Theme editor",href:"#Theme-editor"})]),_:1})])):I("",!0)],4)}const H=O(U,[["render",Y]]);export{H as default};
