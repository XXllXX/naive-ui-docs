import{k as y}from"./katex-5026bf47.js";import{j as v,_ as A,r as a,o as i,i as d,w as n,g as t,e,f as o,u as M,a as $,b as O,c as h,d as k,n as g,h as P}from"./index-09f026e5.js";const I=v({setup(){return{katex:y,equation:"\\displaystyle= \\frac{k(k+1)}{2}+k+1"}}}),S={class:"demo-card__view"};function z(s,p,_,l,f,x){const u=a("n-equation"),r=a("n-config-provider"),m=a("component-demo");return i(),d(m,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/equation/demos/zhCN/basic.demo.vue",title:"基础用法","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-config-provider%20%3Akatex%3D%22katex%22%3E%0D%0A%20%20%20%20%3Cn-equation%20%3Avalue%3D%22equation%22%20%2F%3E%0D%0A%20%20%3C%2Fn-config-provider%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0D%0Aimport%20katex%20from%20'katex'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20equation%20%3D%20'%5C%5Cdisplaystyle%3D%20%5C%5Cfrac%7Bk(k%2B1)%7D%7B2%7D%2Bk%2B1'%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20katex%2C%0D%0A%20%20%20%20%20%20equation%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-config-provider%20%3Akatex%3D%22katex%22%3E%0D%0A%20%20%20%20%3Cn-equation%20%3Avalue%3D%22equation%22%20%2F%3E%0D%0A%20%20%3C%2Fn-config-provider%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20%22vue%22%3B%0Aimport%20katex%20from%20%22katex%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20equation%20%3D%20%22%5C%5Cdisplaystyle%3D%20%5C%5Cfrac%7Bk(k%2B1)%7D%7B2%7D%2Bk%2B1%22%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20katex%2C%0A%20%20%20%20%20%20equation%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[t(" 基础用法 ")]),content:n(()=>[]),demo:n(()=>[e("div",S,[o(r,{katex:s.katex},{default:n(()=>[o(u,{value:s.equation},null,8,["value"])]),_:1},8,["katex"])])]),_:1})}const R=A(I,[["render",z]]),K=v({setup(){return{katex:y,katexOptions:{displayMode:!0,fleqn:!0,macros:{"\\f":"#1f(#2)"}},equation:`\\f\\relax{x} = \\int_{-\\infty}^\\infty
    \\f\\hat\\xi\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`}}}),L={class:"demo-card__view"};function T(s,p,_,l,f,x){const u=a("n-equation"),r=a("n-config-provider"),m=a("component-demo");return i(),d(m,{"demo-file-name":"katex-options.vue","relative-url":"D:/Code/naive-ui/src/equation/demos/zhCN/katex-options.demo.vue",title:"使用 katex 配置","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-config-provider%20%3Akatex%3D%22katex%22%3E%0D%0A%20%20%20%20%3Cn-equation%20%3Avalue%3D%22equation%22%20%3Akatex-options%3D%22katexOptions%22%20%2F%3E%0D%0A%20%20%3C%2Fn-config-provider%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0D%0Aimport%20katex%20from%20'katex'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20equation%20%3D%20%60%5C%5Cf%5C%5Crelax%7Bx%7D%20%3D%20%5C%5Cint_%7B-%5C%5Cinfty%7D%5E%5C%5Cinfty%0D%0A%20%20%20%20%5C%5Cf%5C%5Chat%5C%5Cxi%5C%5C%2Ce%5E%7B2%20%5C%5Cpi%20i%20%5C%5Cxi%20x%7D%0D%0A%20%20%20%20%5C%5C%2Cd%5C%5Cxi%60%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20katex%2C%0D%0A%20%20%20%20%20%20katexOptions%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20displayMode%3A%20true%2C%0D%0A%20%20%20%20%20%20%20%20fleqn%3A%20true%2C%0D%0A%20%20%20%20%20%20%20%20macros%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20'%5C%5Cf'%3A%20'%231f(%232)'%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20equation%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-config-provider%20%3Akatex%3D%22katex%22%3E%0D%0A%20%20%20%20%3Cn-equation%20%3Avalue%3D%22equation%22%20%3Akatex-options%3D%22katexOptions%22%20%2F%3E%0D%0A%20%20%3C%2Fn-config-provider%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20%22vue%22%3B%0Aimport%20katex%20from%20%22katex%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20equation%20%3D%20%60%5C%5Cf%5C%5Crelax%7Bx%7D%20%3D%20%5C%5Cint_%7B-%5C%5Cinfty%7D%5E%5C%5Cinfty%0A%20%20%20%20%5C%5Cf%5C%5Chat%5C%5Cxi%5C%5C%2Ce%5E%7B2%20%5C%5Cpi%20i%20%5C%5Cxi%20x%7D%0A%20%20%20%20%5C%5C%2Cd%5C%5Cxi%60%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20katex%2C%0A%20%20%20%20%20%20katexOptions%3A%20%7B%0A%20%20%20%20%20%20%20%20displayMode%3A%20true%2C%0A%20%20%20%20%20%20%20%20fleqn%3A%20true%2C%0A%20%20%20%20%20%20%20%20macros%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22%5C%5Cf%22%3A%20%22%231f(%232)%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20equation%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[t(" 使用 katex 配置 ")]),content:n(()=>[]),demo:n(()=>[e("div",L,[o(r,{katex:s.katex},{default:n(()=>[o(u,{value:s.equation,"katex-options":s.katexOptions},null,8,["value","katex-options"])]),_:1},8,["katex"])])]),_:1})}const U=A(K,[["render",T]]),G={components:{basicVueDemo:R,katexOptionsVueDemo:U},setup(){const s=M(),p=$(()=>!s.value),_=s;return{showAnchor:p,displayMode:O(),wrapperStyle:h(()=>_.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:h(()=>p.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/equation/demos/zhCN/index.demo-entry.md"}}},H=e("pre",null,[e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"n-config-provider"),t(),e("span",{class:"hljs-attr"},":katex"),t("="),e("span",{class:"hljs-string"},'"katex"'),t(">")]),t(`
    `),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"my-app"),t(" />")]),t(`
  `),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"n-config-provider"),t(">")]),t(`
`),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"template"),t(">")]),t(`

`),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"script"),t(">")]),e("span",{class:"language-javascript"},[t(`
  `),e("span",{class:"hljs-keyword"},"import"),t(" { defineComponent } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'vue'"),t(`
  `),e("span",{class:"hljs-keyword"},"import"),t(" katex "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'katex'"),t(`
  `),e("span",{class:"hljs-keyword"},"import"),t(),e("span",{class:"hljs-string"},"'katex/dist/katex.css'"),t(`

  `),e("span",{class:"hljs-keyword"},"export"),t(),e("span",{class:"hljs-keyword"},"default"),t(),e("span",{class:"hljs-title function_"},"defineComponent"),t(`({
    `),e("span",{class:"hljs-title function_"},"setup"),t("("),e("span",{class:"hljs-params"}),t(`) {
      `),e("span",{class:"hljs-keyword"},"return"),t(` {
        katex
      }
    }
  })
`)]),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"script"),t(">")])],-1),J={class:"md-table-wrapper"},Q=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"类型"),e("th",null,"默认值"),e("th",null,"说明"),e("th",null,"版本")])],-1),W=e("td",null,"katex",-1),X=e("td",null,"Katex",-1),Y=e("td",null,"2.34.0",-1),Z=e("td",null,"katex-options",-1),ee=e("td",null,"Katex 公式的配置",-1),te=e("td",null,"2.34.0",-1),ne=e("td",null,"value",-1),oe=e("td",null,"Latex 格式的公式表达式",-1),ae=e("td",null,"2.34.0",-1),se={key:0,style:{width:"192px"}};function le(s,p,_,l,f,x){const u=a("edit-on-github-header"),r=a("n-p"),m=a("n-alert"),B=a("n-code"),E=a("n-scrollbar"),q=a("n-card"),D=a("n-h2"),j=a("basicVueDemo"),b=a("katexOptionsVueDemo"),w=a("component-demos"),F=a("n-h3"),c=a("n-text"),V=a("n-table"),C=a("n-anchor-link"),N=a("n-anchor");return i(),k("div",{class:"doc",style:g(l.wrapperStyle)},[e("div",{style:g(l.contentStyle)},[o(u,{"relative-url":"D:/Code/naive-ui/src/equation/demos/zhCN/index.demo-entry.md",text:"公式 Equation"}),o(r,null,{default:n(()=>[t("没有人会想到一个组件库会有这种组件，但是作者的一位朋友需要这个。")]),_:1}),o(m,{title:"注意",type:"warning",style:{"margin-bottom":"16px"},bordered:!1},{default:n(()=>[t(" 由于包体积原因，Naive UI 不内置 katex。如果你需要使用公式组件，请确保你在使用之前已经设定了 katex。 ")]),_:1}),o(r,null,{default:n(()=>[t("下面的代码展示了如何为 Equation 设定 katex。")]),_:1}),o(q,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:n(()=>[o(E,{"x-scrollable":"","content-style":"padding: 16px;"},{default:n(()=>[o(B,null,{default:n(()=>[H]),_:1})]),_:1})]),_:1}),o(D,{id:"演示"},{default:n(()=>[t("演示")]),_:1}),o(w,{span:2},{default:n(()=>[o(j),o(b)]),_:1}),o(D,{id:"API"},{default:n(()=>[t("API")]),_:1}),o(F,{id:"Equation-Props"},{default:n(()=>[t("Equation Props")]),_:1}),e("div",J,[o(V,{"single-column":"",class:"md-table"},{default:n(()=>[Q,e("tbody",null,[e("tr",null,[W,e("td",null,[o(c,{code:""},{default:n(()=>[t("object")]),_:1})]),e("td",null,[o(c,{code:""},{default:n(()=>[t("undefined")]),_:1})]),X,Y]),e("tr",null,[Z,e("td",null,[o(c,{code:""},{default:n(()=>[t("object")]),_:1})]),e("td",null,[o(c,{code:""},{default:n(()=>[t("undefined")]),_:1})]),ee,te]),e("tr",null,[ne,e("td",null,[o(c,{code:""},{default:n(()=>[t("string")]),_:1})]),e("td",null,[o(c,{code:""},{default:n(()=>[t("undefined")]),_:1})]),oe,ae])])]),_:1})])],4),l.showAnchor?(i(),k("div",se,[o(N,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:n(()=>[(l.displayMode,i(),d(C,{key:0,title:"基础用法\r",href:"#basic.vue"})),(l.displayMode,i(),d(C,{key:1,title:"使用 katex 配置\r",href:"#katex-options.vue"})),(l.displayMode,i(),d(C,{key:2,title:"API",href:"#API"})),(l.displayMode,i(),d(C,{key:3,title:"Equation Props",href:"#Equation-Props"}))]),_:1})])):P("",!0)],4)}const ce=A(G,[["render",le]]);export{ce as default};
