import{M as g}from"./MdSave-0Zcqv4Gl.js";import{j as S,_ as v,r as l,o as d,i,w as e,g as o,e as t,f as n,u as w,a as M,b as k,c as E,d as x,n as b,h as N}from"./index-DxZkTPDs.js";const V=S({components:{MdSave:g}}),P={class:"demo-card__view"};function I(u,_,A,a,B,F){const D=l("md-save"),f=l("n-icon"),c=l("n-statistic"),r=l("n-col"),h=l("n-row"),p=l("component-demo");return d(),i(p,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/statistic/demos/zhCN/basic.demo.vue",title:"基础用法","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-row%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-statistic%20label%3D%22%E7%BB%9F%E8%AE%A1%E6%95%B0%E6%8D%AE%22%20%3Avalue%3D%2299%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23prefix%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cmd-save%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23suffix%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%2F%20100%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-statistic%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-statistic%20label%3D%22%E6%B4%BB%E8%B7%83%E7%94%A8%E6%88%B7%22%3E%0D%0A%20%20%20%20%20%20%20%201%2C234%2C123%0D%0A%20%20%20%20%20%20%3C%2Fn-statistic%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%3C%2Fn-row%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20MdSave%20%7D%20from%20'%40vicons%2Fionicons4'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20components%3A%20%7B%0D%0A%20%20%20%20MdSave%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-row%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-statistic%20label%3D%22%E7%BB%9F%E8%AE%A1%E6%95%B0%E6%8D%AE%22%20%3Avalue%3D%2299%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23prefix%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cmd-save%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23suffix%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%2F%20100%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-statistic%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-statistic%20label%3D%22%E6%B4%BB%E8%B7%83%E7%94%A8%E6%88%B7%22%3E%0D%0A%20%20%20%20%20%20%20%201%2C234%2C123%0D%0A%20%20%20%20%20%20%3C%2Fn-statistic%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%3C%2Fn-row%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20MdSave%20%7D%20from%20%22%40vicons%2Fionicons4%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20MdSave%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:e(()=>[o(" 基础用法 ")]),content:e(()=>[]),demo:e(()=>[t("div",P,[n(h,null,{default:e(()=>[n(r,{span:12},{default:e(()=>[n(c,{label:"统计数据",value:99},{prefix:e(()=>[n(f,null,{default:e(()=>[n(D)]),_:1})]),suffix:e(()=>[o(" / 100 ")]),_:1})]),_:1}),n(r,{span:12},{default:e(()=>[n(c,{label:"活跃用户"},{default:e(()=>[o(" 1,234,123 ")]),_:1})]),_:1})]),_:1})])]),_:1})}const z=v(V,[["render",I]]),$={components:{basicVueDemo:z},setup(){const u=w(),_=M(()=>!u.value),A=u;return{showAnchor:_,displayMode:k(),wrapperStyle:E(()=>A.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:E(()=>_.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/statistic/demos/zhCN/index.demo-entry.md"}}},R={class:"md-table-wrapper"},j=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"类型"),t("th",null,"默认值"),t("th",null,"说明"),t("th",null,"版本")])],-1),T=t("td",null,"label",-1),q=t("td",null,null,-1),G=t("td",null,"tabular-nums",-1),H=t("td",null,"是否让数字等宽",-1),J=t("td",null,"2.23.2",-1),K=t("td",null,"value",-1),L=t("td",null,"统计数据的值",-1),O=t("td",null,null,-1),Q={class:"md-table-wrapper"},U=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"参数"),t("th",null,"说明")])],-1),W=t("td",null,"default",-1),X=t("td",null,"值",-1),Y=t("td",null,"label",-1),Z=t("td",null,"标签",-1),t0=t("td",null,"prefix",-1),e0=t("td",null,"值的前缀",-1),n0=t("td",null,"suffix",-1),o0=t("td",null,"值的后缀",-1),l0={key:0,style:{width:"192px"}};function s0(u,_,A,a,B,F){const D=l("edit-on-github-header"),f=l("n-p"),c=l("n-h2"),r=l("basicVueDemo"),h=l("component-demos"),p=l("n-h3"),s=l("n-text"),C=l("n-table"),m=l("n-anchor-link"),y=l("n-anchor");return d(),x("div",{class:"doc",style:b(a.wrapperStyle)},[t("div",{style:b(a.contentStyle)},[n(D,{"relative-url":"D:/Code/naive-ui/src/statistic/demos/zhCN/index.demo-entry.md",text:"统计数据 Statistic"}),n(f,null,{default:e(()=>[o("和它看起来一样简单。")]),_:1}),n(c,{id:"演示"},{default:e(()=>[o("演示")]),_:1}),n(h,{span:2},{default:e(()=>[n(r)]),_:1}),n(c,{id:"API"},{default:e(()=>[o("API")]),_:1}),n(p,{id:"Statistic-Props"},{default:e(()=>[o("Statistic Props")]),_:1}),t("div",R,[n(C,{"single-column":"",class:"md-table"},{default:e(()=>[j,t("tbody",null,[t("tr",null,[T,t("td",null,[n(s,{code:""},{default:e(()=>[o("string")]),_:1})]),t("td",null,[n(s,{code:""},{default:e(()=>[o("undefined")]),_:1})]),t("td",null,[o("展示的 "),n(s,{code:""},{default:e(()=>[o("label")]),_:1}),o(" 信息")]),q]),t("tr",null,[G,t("td",null,[n(s,{code:""},{default:e(()=>[o("boolean")]),_:1})]),t("td",null,[n(s,{code:""},{default:e(()=>[o("false")]),_:1})]),H,J]),t("tr",null,[K,t("td",null,[n(s,{code:""},{default:e(()=>[o("string | number")]),_:1})]),t("td",null,[n(s,{code:""},{default:e(()=>[o("undefined")]),_:1})]),L,O])])]),_:1})]),n(p,{id:"Statistic-Slots"},{default:e(()=>[o("Statistic Slots")]),_:1}),t("div",Q,[n(C,{"single-column":"",class:"md-table"},{default:e(()=>[U,t("tbody",null,[t("tr",null,[W,t("td",null,[n(s,{code:""},{default:e(()=>[o("()")]),_:1})]),X]),t("tr",null,[Y,t("td",null,[n(s,{code:""},{default:e(()=>[o("()")]),_:1})]),Z]),t("tr",null,[t0,t("td",null,[n(s,{code:""},{default:e(()=>[o("()")]),_:1})]),e0]),t("tr",null,[n0,t("td",null,[n(s,{code:""},{default:e(()=>[o("()")]),_:1})]),o0])])]),_:1})])],4),a.showAnchor?(d(),x("div",l0,[n(y,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:e(()=>[(a.displayMode,d(),i(m,{key:0,title:"基础用法\r",href:"#basic.vue"})),(a.displayMode,d(),i(m,{key:1,title:"API",href:"#API"})),(a.displayMode,d(),i(m,{key:2,title:"Statistic Props",href:"#Statistic-Props"})),(a.displayMode,d(),i(m,{key:3,title:"Statistic Slots",href:"#Statistic-Slots"}))]),_:1})])):N("",!0)],4)}const c0=v($,[["render",s0]]);export{c0 as default};
