import{j as b,l as g,_ as w,r as n,o as u,i as c,w as t,g as l,e,f as o,u as k,a as N,b as V,c as h,d as D,n as f,h as S}from"./index-DxZkTPDs.js";const T=b({setup(){return{show:g(!0)}}}),M={class:"demo-card__view"};function P(s,a,i,E,v,x){const r=n("n-switch"),p=n("n-collapse-transition"),d=n("n-space"),A=n("component-demo");return u(),c(A,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/collapse-transition/demos/zhCN/basic.demo.vue",title:"基本用法","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23checked%3E%0D%0A%20%20%20%20%20%20%20%20%E5%B1%95%E5%BC%80%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23unchecked%3E%0D%0A%20%20%20%20%20%20%20%20%E6%8A%98%E5%8F%A0%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-switch%3E%0D%0A%20%20%20%20%3Cn-collapse-transition%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%E6%84%9F%E7%9F%A5%E5%BA%A6%EF%BC%8C%E6%96%B9%E6%B3%95%E8%AE%BA%EF%BC%8C%E7%BB%84%E5%90%88%E6%8B%B3%EF%BC%8C%E5%BC%95%E7%88%86%E7%82%B9%EF%BC%8C%E7%82%B9%E7%BA%BF%E9%9D%A2%EF%BC%8C%E7%B2%BE%E7%BB%86%E5%8C%96%EF%BC%8C%E5%B7%AE%E5%BC%82%E5%8C%96%EF%BC%8C%E5%B9%B3%E5%8F%B0%E5%8C%96%EF%BC%8C%E7%BB%93%E6%9E%84%E5%8C%96%EF%BC%8C%E5%BD%B1%E5%93%8D%E5%8A%9B%EF%BC%8C%E8%80%A6%E5%90%88%E6%80%A7%EF%BC%8C%E4%BE%BF%E6%8D%B7%E6%80%A7%EF%BC%8C%E4%B8%80%E8%87%B4%E6%80%A7%EF%BC%8C%E7%AB%AF%E5%88%B0%E7%AB%AF%EF%BC%8C%E7%9F%AD%E5%B9%B3%E5%BF%AB%EF%BC%8C%E6%8A%A4%E5%9F%8E%E6%B2%B3%EF%BC%8C%E4%BD%93%E9%AA%8C%E6%84%9F%EF%BC%8C%E9%A2%97%E7%B2%92%E5%BA%A6%0D%0A%20%20%20%20%3C%2Fn-collapse-transition%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20show%3A%20ref(true)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23checked%3E%0D%0A%20%20%20%20%20%20%20%20%E5%B1%95%E5%BC%80%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23unchecked%3E%0D%0A%20%20%20%20%20%20%20%20%E6%8A%98%E5%8F%A0%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-switch%3E%0D%0A%20%20%20%20%3Cn-collapse-transition%20%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%E6%84%9F%E7%9F%A5%E5%BA%A6%EF%BC%8C%E6%96%B9%E6%B3%95%E8%AE%BA%EF%BC%8C%E7%BB%84%E5%90%88%E6%8B%B3%EF%BC%8C%E5%BC%95%E7%88%86%E7%82%B9%EF%BC%8C%E7%82%B9%E7%BA%BF%E9%9D%A2%EF%BC%8C%E7%B2%BE%E7%BB%86%E5%8C%96%EF%BC%8C%E5%B7%AE%E5%BC%82%E5%8C%96%EF%BC%8C%E5%B9%B3%E5%8F%B0%E5%8C%96%EF%BC%8C%E7%BB%93%E6%9E%84%E5%8C%96%EF%BC%8C%E5%BD%B1%E5%93%8D%E5%8A%9B%EF%BC%8C%E8%80%A6%E5%90%88%E6%80%A7%EF%BC%8C%E4%BE%BF%E6%8D%B7%E6%80%A7%EF%BC%8C%E4%B8%80%E8%87%B4%E6%80%A7%EF%BC%8C%E7%AB%AF%E5%88%B0%E7%AB%AF%EF%BC%8C%E7%9F%AD%E5%B9%B3%E5%BF%AB%EF%BC%8C%E6%8A%A4%E5%9F%8E%E6%B2%B3%EF%BC%8C%E4%BD%93%E9%AA%8C%E6%84%9F%EF%BC%8C%E9%A2%97%E7%B2%92%E5%BA%A6%0D%0A%20%20%20%20%3C%2Fn-collapse-transition%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20show%3A%20ref(true)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[l(" 基本用法 ")]),content:t(()=>[]),demo:t(()=>[e("div",M,[o(d,{vertical:""},{default:t(()=>[o(r,{value:s.show,"onUpdate:value":a[0]||(a[0]=F=>s.show=F)},{checked:t(()=>[l(" 展开 ")]),unchecked:t(()=>[l(" 折叠 ")]),_:1},8,["value"]),o(p,{show:s.show},{default:t(()=>[l(" 感知度，方法论，组合拳，引爆点，点线面，精细化，差异化，平台化，结构化，影响力，耦合性，便捷性，一致性，端到端，短平快，护城河，体验感，颗粒度 ")]),_:1},8,["show"])]),_:1})])]),_:1})}const I=w(T,[["render",P]]),z={components:{basicVueDemo:I},setup(){const s=k(),a=N(()=>!s.value),i=s;return{showAnchor:a,displayMode:V(),wrapperStyle:h(()=>i.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:h(()=>a.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/collapse-transition/demos/zhCN/index.demo-entry.md"}}},$={class:"md-table-wrapper"},R=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"类型"),e("th",null,"默认值"),e("th",null,"说明")])],-1),j=e("td",null,"appear",-1),U=e("td",null,"是否在首次出现时播放动画",-1),q=e("td",null,"show",-1),G=e("td",null,"是否展示内容",-1),H={class:"md-table-wrapper"},J=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"参数"),e("th",null,"说明")])],-1),K=e("td",null,"default",-1),L=e("td",null,"渐变的内容",-1),O={key:0,style:{width:"192px"}};function Q(s,a,i,E,v,x){const r=n("edit-on-github-header"),p=n("n-p"),d=n("n-h2"),A=n("basicVueDemo"),F=n("component-demos"),_=n("n-h3"),C=n("n-text"),m=n("n-table"),B=n("n-anchor-link"),y=n("n-anchor");return u(),D("div",{class:"doc",style:f(E.wrapperStyle)},[e("div",{style:f(E.contentStyle)},[o(r,{"relative-url":"D:/Code/naive-ui/src/collapse-transition/demos/zhCN/index.demo-entry.md",text:"折叠渐变 Collapse Transition"}),o(p,null,{default:t(()=>[l("一个没什么封装的 collapse item。")]),_:1}),o(d,{id:"演示"},{default:t(()=>[l("演示")]),_:1}),o(F,{span:2},{default:t(()=>[o(A)]),_:1}),o(d,{id:"API"},{default:t(()=>[l("API")]),_:1}),o(_,{id:"CollapseTransition-Props"},{default:t(()=>[l("CollapseTransition Props")]),_:1}),e("div",$,[o(m,{"single-column":"",class:"md-table"},{default:t(()=>[R,e("tbody",null,[e("tr",null,[j,e("td",null,[o(C,{code:""},{default:t(()=>[l("boolean")]),_:1})]),e("td",null,[o(C,{code:""},{default:t(()=>[l("false")]),_:1})]),U]),e("tr",null,[q,e("td",null,[o(C,{code:""},{default:t(()=>[l("boolean")]),_:1})]),e("td",null,[o(C,{code:""},{default:t(()=>[l("true")]),_:1})]),G])])]),_:1})]),o(_,{id:"CollapseTransition-Slots"},{default:t(()=>[l("CollapseTransition Slots")]),_:1}),e("div",H,[o(m,{"single-column":"",class:"md-table"},{default:t(()=>[J,e("tbody",null,[e("tr",null,[K,e("td",null,[o(C,{code:""},{default:t(()=>[l("()")]),_:1})]),L])])]),_:1})])],4),E.showAnchor?(u(),D("div",O,[o(y,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(E.displayMode,u(),c(B,{key:0,title:"基本用法\r",href:"#basic.vue"})),(E.displayMode,u(),c(B,{key:1,title:"API",href:"#API"})),(E.displayMode,u(),c(B,{key:2,title:"CollapseTransition Props",href:"#CollapseTransition-Props"})),(E.displayMode,u(),c(B,{key:3,title:"CollapseTransition Slots",href:"#CollapseTransition-Slots"}))]),_:1})])):S("",!0)],4)}const X=w(z,[["render",Q]]);export{X as default};