import{_ as C,u as S,a as j,b as N,c as _,r as t,o as u,d as h,e as l,f as n,w as o,g as e,n as f,h as M}from"./index-9afb4b71.js";const V={components:{},setup(){const s=S(),d=j(()=>(s.value,!1)),r=s;return{showAnchor:d,displayMode:N(),wrapperStyle:_(()=>r.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:_(()=>d.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/global-style/demos/zhCN/index.demo-entry.md"}}},z=l("pre",null,[e(`// 跟随 n-config-provider 的主题
`),l("span",{class:"hljs-tag"},[e("<"),l("span",{class:"hljs-name"},"n-config-provider"),e(">")]),e(`
  `),l("span",{class:"hljs-tag"},[e("<"),l("span",{class:"hljs-name"},"n-global-style"),e(" />")]),e(`
  ...
`),l("span",{class:"hljs-tag"},[e("</"),l("span",{class:"hljs-name"},"n-config-provider"),e(">")])],-1),A={key:0,style:{width:"192px"}};function B(s,d,r,c,D,R){const m=t("edit-on-github-header"),a=t("n-text"),p=t("n-p"),i=t("n-li"),x=t("n-ol"),y=t("n-h2"),g=t("n-code"),b=t("n-scrollbar"),v=t("n-card"),w=t("n-anchor-link"),k=t("n-anchor");return u(),h("div",{class:"doc",style:f(c.wrapperStyle)},[l("div",{style:f(c.contentStyle)},[n(m,{"relative-url":"D:/Code/naive-ui/src/global-style/demos/zhCN/index.demo-entry.md",text:"全局样式 Global Style"}),n(p,null,{default:o(()=>[e("出于以下原因，你可能需要将某些样式设定在 "),n(a,{code:""},{default:o(()=>[e("document.body")]),_:1}),e(" 上。")]),_:1}),n(x,null,{default:o(()=>[n(i,null,{default:o(()=>[e("naive-ui 会设定一些非响应式的全局样式（例如字体），它们在默认状况下工作良好，但是不能响应主题的变化。")]),_:1}),n(i,null,{default:o(()=>[n(a,{code:""},{default:o(()=>[e("n-config-provider")]),_:1}),e(" 无法将全局样式同步到它以外的地方（例如 body 背景色）。")]),_:1})]),_:1}),n(p,null,{default:o(()=>[e("通过使用 "),n(a,{code:""},{default:o(()=>[e("n-global-style")]),_:1}),e(" 可以将常见的全局样式同步到 body 上。在下面的例子中，"),n(a,{code:""},{default:o(()=>[e("n-global-style")]),_:1}),e(" 会将 "),n(a,{code:""},{default:o(()=>[e("n-config-provider")]),_:1}),e(" 提供的主题同步到 "),n(a,{code:""},{default:o(()=>[e("document.body")]),_:1}),e(" 上。")]),_:1}),n(y,{id:"用法"},{default:o(()=>[e("用法")]),_:1}),n(v,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:o(()=>[n(b,{"x-scrollable":"","content-style":"padding: 16px;"},{default:o(()=>[n(g,null,{default:o(()=>[z]),_:1})]),_:1})]),_:1})],4),c.showAnchor?(u(),h("div",A,[n(k,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:o(()=>[n(w,{title:"用法",href:"#用法"})]),_:1})])):M("",!0)],4)}const G=C(V,[["render",B]]);export{G as default};
