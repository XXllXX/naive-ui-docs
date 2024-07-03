import{_ as w,u as b,a as j,b as v,c as _,r as a,o as h,d as m,e as o,f as n,w as t,g as e,n as f,h as X}from"./index-DxZkTPDs.js";const C={components:{},setup(){const d=b(),r=j(()=>!d.value),u=d;return{showAnchor:r,displayMode:v(),wrapperStyle:_(()=>u.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:_(()=>r.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/demo/pages/docs/jsx/enUS/index.md"}}},U=o("pre",null,[o("span",{class:"hljs-keyword"},"import"),e(" { defineComponent } "),o("span",{class:"hljs-keyword"},"from"),e(),o("span",{class:"hljs-string"},"'vue'"),e(`
`),o("span",{class:"hljs-keyword"},"import"),e(" { "),o("span",{class:"hljs-title class_"},"NButton"),e(" } "),o("span",{class:"hljs-keyword"},"from"),e(),o("span",{class:"hljs-string"},"'naive-ui'"),e(`

`),o("span",{class:"hljs-keyword"},"export"),e(),o("span",{class:"hljs-keyword"},"default"),e(),o("span",{class:"hljs-title function_"},"defineComponent"),e(`({
  render () {
    `),o("span",{class:"hljs-keyword"},"return"),e(),o("span",{class:"language-xml"},[o("span",{class:"hljs-tag"},[e("<"),o("span",{class:"hljs-name"},"NButton"),e(">")]),e("{{ default: () => 'Star Kirby' }}"),o("span",{class:"hljs-tag"},[e("</"),o("span",{class:"hljs-name"},"NButton"),e(">")])]),e(`
  }
})`)],-1),J={key:0,style:{width:"192px"}};function N(d,r,u,c,P,T){const x=a("edit-on-github-header"),p=a("n-h2"),l=a("n-p"),g=a("n-code"),y=a("n-scrollbar"),k=a("n-card"),s=a("n-text"),i=a("n-anchor-link"),S=a("n-anchor");return h(),m("div",{class:"doc",style:f(c.wrapperStyle)},[o("div",{style:f(c.contentStyle)},[n(x,{"relative-url":"D:/Code/naive-ui/demo/pages/docs/jsx/enUS/index.md",text:"JSX & TSX"}),n(p,{id:"Enable-JSX-&-TSX"},{default:t(()=>[e("Enable JSX & TSX")]),_:1}),n(l,null,{default:t(()=>[e("For how to enable JSX & TSX, please look at your toolchain's docs.")]),_:1}),n(p,{id:"Use-Component"},{default:t(()=>[e("Use Component")]),_:1}),n(l,null,{default:t(()=>[e("We recommend importing components directly when using JSX.")]),_:1}),n(k,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:t(()=>[n(y,{"x-scrollable":"","content-style":"padding: 16px;"},{default:t(()=>[n(g,null,{default:t(()=>[U]),_:1})]),_:1})]),_:1}),n(p,{id:"Props-look-like-@update:*"},{default:t(()=>[e("Props look like @update:*")]),_:1}),n(l,null,{default:t(()=>[e("In naive-ui, all props look like "),n(s,{code:""},{default:t(()=>[e("on-update:*")]),_:1}),e(" has a corresponding "),n(s,{code:""},{default:t(()=>[e("onUpdate*")]),_:1}),e(" prop (since in JSX "),n(s,{code:""},{default:t(()=>[e("on-update:*")]),_:1}),e(" and "),n(s,{code:""},{default:t(()=>[e("onUpdate:*")]),_:1}),e(" are not valid prop names).")]),_:1}),n(l,null,{default:t(()=>[e("If you find it doesn't exist, I must have forgotten to make it. Please create an issue or PR.")]),_:1}),n(l,null,{default:t(()=>[e("For example, "),n(s,{code:""},{default:t(()=>[e('<n-select @update:value="..." />')]),_:1}),e(" in template can be written in "),n(s,{code:""},{default:t(()=>[e("<NSelect onUpdateValue={...} />")]),_:1}),e(".")]),_:1})],4),c.showAnchor?(h(),m("div",J,[n(S,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[n(i,{title:"Enable JSX & TSX",href:"#Enable-JSX-&-TSX"}),n(i,{title:"Use Component",href:"#Use-Component"}),n(i,{title:"Props look like @update:\\*",href:"#Props-look-like-@update:\\*"})]),_:1})])):X("",!0)],4)}const E=w(C,[["render",N]]);export{E as default};
