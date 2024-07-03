import{_ as w,u as k,a as b,b as F,c as i,r as d,o as r,d as f,e as U,f as t,w as o,g as e,n as m,h as N}from"./index-9afb4b71.js";const V={components:{},setup(){const l=k(),u=b(()=>(l.value,!1)),c=l;return{showAnchor:u,displayMode:F(),wrapperStyle:i(()=>c.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:i(()=>u.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/demo/pages/docs/common-issues/zhCN/index.md"}}},M={key:0,style:{width:"192px"}};function A(l,u,c,x,I,R){const h=d("edit-on-github-header"),p=d("n-h2"),_=d("n-h3"),a=d("n-text"),n=d("n-p"),y=d("n-a"),v=d("router-link"),s=d("n-anchor-link"),g=d("n-anchor");return r(),f("div",{class:"doc",style:m(x.wrapperStyle)},[U("div",{style:m(x.contentStyle)},[t(h,{"relative-url":"D:/Code/naive-ui/demo/pages/docs/common-issues/zhCN/index.md",text:"常见问题"}),t(p,{id:"1.-@update:xxx-和-on-update:xxx-的区别"},{default:o(()=>[e("1. @update:xxx 和 on-update:xxx 的区别")]),_:1}),t(_,{id:"情况-1"},{default:o(()=>[e("情况 1")]),_:1}),t(n,null,{default:o(()=>[e("如果你没有在同一个组件上同时使用 "),t(a,{code:""},{default:o(()=>[e("v-model:xxx")]),_:1}),e(" 和 "),t(a,{code:""},{default:o(()=>[e("on-update:xxx")]),_:1}),e("，"),t(a,{code:""},{default:o(()=>[e("@update:xxx")]),_:1}),e(" 和 "),t(a,{code:""},{default:o(()=>[e("on-update:xxx")]),_:1}),e(" 在模版中使用时没有任何区别。")]),_:1}),t(n,null,{default:o(()=>[e("在 Naive UI 中，全部的 API 文档使用 "),t(a,{code:""},{default:o(()=>[e("on-update:xxx")]),_:1}),e(" 格式，因为 "),t(a,{code:""},{default:o(()=>[e("@")]),_:1}),e(" 只是 Vue 提供的一种简写。")]),_:1}),t(n,null,{default:o(()=>[e("如果你偏爱 camelCase，可以使用 "),t(a,{code:""},{default:o(()=>[e("onUpdate:xxx")]),_:1}),e("。")]),_:1}),t(n,null,{default:o(()=>[e("如果你在使用 JSX，可以使用 "),t(a,{code:""},{default:o(()=>[e("onUpdateXxx")]),_:1}),e("（所有的 "),t(a,{code:""},{default:o(()=>[e("onUpdate:xxx")]),_:1}),e(" 都有一个 "),t(a,{code:""},{default:o(()=>[e("onUpdateXxx")]),_:1}),e(" 的对等实现）。")]),_:1}),t(_,{id:"情况-2"},{default:o(()=>[e("情况 2")]),_:1}),t(n,null,{default:o(()=>[e("如果你在一个组件上使用了 "),t(a,{code:""},{default:o(()=>[e("v-model:xxx")]),_:1}),e("，你应该使用 "),t(a,{code:""},{default:o(()=>[e("@update:xxx")]),_:1}),e("。")]),_:1}),t(n,null,{default:o(()=>[e("✅ 例子 "),t(a,{code:""},{default:o(()=>[e('<n-input v-model:value="xxx" @update:value="yyy" />')]),_:1}),e("。")]),_:1}),t(n,null,{default:o(()=>[e("❌ 例子 "),t(a,{code:""},{default:o(()=>[e('<n-input v-model:value="xxx" :on-update:value="yyy" />')]),_:1}),e("。")]),_:1}),t(n,null,{default:o(()=>[e("这是因为 "),t(a,{code:""},{default:o(()=>[e('v-model:value="xxx"')]),_:1}),e(" 会被转化为 "),t(a,{code:""},{default:o(()=>[e(':onUpdate:value="xxx"')]),_:1}),e("。如果你同时使用了 "),t(a,{code:""},{default:o(()=>[e('@update:value="yyy"')]),_:1}),e("，他们会被转化为 "),t(a,{code:""},{default:o(()=>[e(':onUpdate:value="[xxx, yyy]"')]),_:1}),e("，然后 Naive UI 会来处理这种情况。")]),_:1}),t(n,null,{default:o(()=>[e("然而如果你使用了 "),t(a,{code:""},{default:o(()=>[e('on-update:value="yyy"')]),_:1}),e("，Vue 会生成类似于 "),t(a,{code:""},{default:o(()=>[e(':onUpdate:value="xxx" :on-update:value="yyy"')]),_:1}),e(" 的代码，然后第二个属性会在运行时覆盖掉第一个，"),t(a,{code:""},{default:o(()=>[e("v-model:value")]),_:1}),e(" 会崩掉。")]),_:1}),t(n,null,{default:o(()=>[e("如果你发现任何问题，欢迎在 GitHub 上提交 issue 和 PR。")]),_:1}),t(p,{id:"2.-如何在单文件组件（SFC---Single-File-Component）中使用？"},{default:o(()=>[e("2. 如何在单文件组件（SFC - Single File Component）中使用？")]),_:1}),t(n,null,{default:o(()=>[e("详见 "),t(v,{to:"usage-sfc",custom:""},{default:o(({navigate:C,href:S})=>[t(y,{href:S,onClick:C},{default:o(()=>[e("在 SFC 中使用")]),_:2},1032,["href","onClick"])]),_:1})]),_:1})],4),x.showAnchor?(r(),f("div",M,[t(g,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:o(()=>[t(s,{title:"1. @update:xxx 和 on-update:xxx 的区别",href:"#1.-@update:xxx-和-on-update:xxx-的区别"}),t(s,{title:"2. 如何在单文件组件（SFC - Single File Component）中使用？",href:"#2.-如何在单文件组件（SFC---Single-File-Component）中使用？"})]),_:1})])):N("",!0)],4)}const B=w(V,[["render",A]]);export{B as default};
