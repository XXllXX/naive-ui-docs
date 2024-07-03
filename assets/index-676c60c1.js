import{_ as U,u as C,a as j,b as k,c as x,r as a,o as v,d as y,e as l,f as n,w as t,g as e,n as g,h as S}from"./index-9afb4b71.js";const I={components:{},setup(){const s=C(),r=j(()=>!s.value),p=s;return{showAnchor:r,displayMode:k(),wrapperStyle:x(()=>p.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:x(()=>r.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/demo/pages/docs/controlled-uncontrolled/enUS/index.md"}}},A=l("pre",null,[l("span",{class:"hljs-tag"},[e("<"),l("span",{class:"hljs-name"},"n-input"),e(" @"),l("span",{class:"hljs-attr"},"update:value"),e("="),l("span",{class:"hljs-string"},'"handleUpdateValue"'),e(" />")])],-1),N=l("pre",null,[l("span",{class:"hljs-tag"},[e("<"),l("span",{class:"hljs-name"},"n-input"),e(),l("span",{class:"hljs-attr"},":value"),e("="),l("span",{class:"hljs-string"},'"value"'),e(" @"),l("span",{class:"hljs-attr"},"update:value"),e("="),l("span",{class:"hljs-string"},'"handleUpdateValue"'),e(" />")])],-1),V={key:0,style:{width:"192px"}};function M(s,r,p,c,D,B){const b=a("edit-on-github-header"),d=a("n-p"),u=a("n-h2"),o=a("n-text"),_=a("n-code"),m=a("n-scrollbar"),f=a("n-card"),h=a("n-h3"),i=a("n-anchor-link"),w=a("n-anchor");return v(),y("div",{class:"doc",style:g(c.wrapperStyle)},[l("div",{style:g(c.contentStyle)},[n(b,{"relative-url":"D:/Code/naive-ui/demo/pages/docs/controlled-uncontrolled/enUS/index.md",text:"Controlled manner & uncontrolled manner"}),n(d,null,{default:t(()=>[e("A component's manner can be controlled or uncontrolled. Uncontrolled manner means you only listen to its change but not control its value. Controlled manner means you control the component's value.")]),_:1}),n(u,{id:"Uncontrolled-manner"},{default:t(()=>[e("Uncontrolled manner")]),_:1}),n(d,null,{default:t(()=>[e("In this situation, you don't set "),n(o,{code:""},{default:t(()=>[e("<n-input />")]),_:1}),e("'s "),n(o,{code:""},{default:t(()=>[e("value")]),_:1}),e(" but only listen to its change. Component's value will be controlled by itself.")]),_:1}),n(f,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:t(()=>[n(m,{"x-scrollable":"","content-style":"padding: 16px;"},{default:t(()=>[n(_,null,{default:t(()=>[A]),_:1})]),_:1})]),_:1}),n(u,{id:"Controlled-manner"},{default:t(()=>[e("Controlled manner")]),_:1}),n(d,null,{default:t(()=>[e("In the situation, you listen to component's value & change at the same time. If you don't update "),n(o,{code:""},{default:t(()=>[e("value")]),_:1}),e(", component's value won't be changed. Its value is controlled by you.")]),_:1}),n(f,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:t(()=>[n(m,{"x-scrollable":"","content-style":"padding: 16px;"},{default:t(()=>[n(_,null,{default:t(()=>[N]),_:1})]),_:1})]),_:1}),n(h,{id:"<n-text-code>v-model</n-text>"},{default:t(()=>[n(o,{code:""},{default:t(()=>[e("v-model")]),_:1})]),_:1}),n(d,null,{default:t(()=>[e("A component with "),n(o,{code:""},{default:t(()=>[e("v-model")]),_:1}),e(" works in controlled manner, since "),n(o,{code:""},{default:t(()=>[e("v-model")]),_:1}),e(" is the same as "),n(o,{code:""},{default:t(()=>[e(":model-value")]),_:1}),e(" and "),n(o,{code:""},{default:t(()=>[e("@update:model-value")]),_:1}),e(".")]),_:1}),n(u,{id:"Uncontrolled-manner-in-naive-ui"},{default:t(()=>[e("Uncontrolled manner in naive-ui")]),_:1}),n(d,null,{default:t(()=>[e("Different library has different behavior on how to distinguish controlled or uncontrolled manner. In naive-ui, if "),n(o,{code:""},{default:t(()=>[e("value")]),_:1}),e(" is "),n(o,{code:""},{default:t(()=>[e("undefined")]),_:1}),e(" or not passed, it will be uncontrolled. That is to say, if you set a component's value to "),n(o,{code:""},{default:t(()=>[e("undefined")]),_:1}),e(" won't clear it but transform it from controlled manner to uncontrolled manner. If you need to clear it, at most time you can use "),n(o,{code:""},{default:t(()=>[e("null")]),_:1}),e(".")]),_:1}),n(h,{id:"Not-only-<n-text-code>value</n-text>"},{default:t(()=>[e("Not only "),n(o,{code:""},{default:t(()=>[e("value")]),_:1})]),_:1}),n(d,null,{default:t(()=>[e("Any props pair like "),n(o,{code:""},{default:t(()=>[e("xxx")]),_:1}),e(" & "),n(o,{code:""},{default:t(()=>[e("@update:xxx")]),_:1}),e(" can work both in controlled manner or uncontrolled manner.")]),_:1})],4),c.showAnchor?(v(),y("div",V,[n(w,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[n(i,{title:"Uncontrolled manner",href:"#Uncontrolled-manner"}),n(i,{title:"Controlled manner",href:"#Controlled-manner"}),n(i,{title:"Uncontrolled manner in naive-ui",href:"#Uncontrolled-manner-in-naive-ui"})]),_:1})])):S("",!0)],4)}const T=U(I,[["render",M]]);export{T as default};
