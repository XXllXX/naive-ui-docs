import{_ as D,r as l,o as E,i as A,w as t,g as o,f as n,e,j as T,l as V,u as $,a as N,b as S,c as m,d as B,n as C,h as z}from"./index-DxZkTPDs.js";const M={},P={class:"demo-card__view"};function R(c,s){const d=l("n-p"),i=l("n-back-top"),a=l("component-demo");return E(),A(a,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/back-top/demos/zhCN/basic.demo.vue",title:"基础用法","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-back-top%20%3Aright%3D%22100%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[o(" 基础用法 ")]),content:t(()=>[n(d,null,{default:t(()=>[o("BackTop 会找到首个可滚动的祖先元素并且监听它的滚动事件。")]),_:1})]),demo:t(()=>[e("div",P,[n(i,{right:100})])]),_:1})}const j=D(M,[["render",R]]),H={},L={class:"demo-card__view"},O=e("div",{style:{width:"200px",height:"40px","line-height":"40px","text-align":"center","font-size":"14px"}}," 可视高度：300px ",-1);function I(c,s){const d=l("n-p"),i=l("n-back-top"),a=l("component-demo");return E(),A(a,{"demo-file-name":"visibility-height.vue","relative-url":"D:/Code/naive-ui/src/back-top/demos/zhCN/visibility-height.demo.vue",title:"可视高度","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-back-top%20%3Abottom%3D%22100%22%20%3Avisibility-height%3D%22300%22%3E%0D%0A%20%20%20%20%3Cdiv%0D%0A%20%20%20%20%20%20style%3D%22%0D%0A%20%20%20%20%20%20%20%20width%3A%20200px%3B%0D%0A%20%20%20%20%20%20%20%20height%3A%2040px%3B%0D%0A%20%20%20%20%20%20%20%20line-height%3A%2040px%3B%0D%0A%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0D%0A%20%20%20%20%20%20%20%20font-size%3A%2014px%3B%0D%0A%20%20%20%20%20%20%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%E5%8F%AF%E8%A7%86%E9%AB%98%E5%BA%A6%EF%BC%9A300px%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%3C%2Fn-back-top%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[o(" 可视高度 ")]),content:t(()=>[n(d,null,{default:t(()=>[o("可以改变 Back Top 的可视高度。")]),_:1})]),demo:t(()=>[e("div",L,[n(i,{bottom:100,"visibility-height":300},{default:t(()=>[O]),_:1})])]),_:1})}const q=D(H,[["render",I]]),G={},J={class:"demo-card__view"},K=e("div",{style:{width:"200px",height:"40px","line-height":"40px","text-align":"center","font-size":"14px"}}," 改变位置 ",-1);function Q(c,s){const d=l("n-p"),i=l("n-back-top"),a=l("component-demo");return E(),A(a,{"demo-file-name":"change-position.vue","relative-url":"D:/Code/naive-ui/src/back-top/demos/zhCN/change-position.demo.vue",title:"改变位置","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-back-top%20%3Aright%3D%2240%22%20%3Abottom%3D%22160%22%3E%0D%0A%20%20%20%20%3Cdiv%0D%0A%20%20%20%20%20%20style%3D%22%0D%0A%20%20%20%20%20%20%20%20width%3A%20200px%3B%0D%0A%20%20%20%20%20%20%20%20height%3A%2040px%3B%0D%0A%20%20%20%20%20%20%20%20line-height%3A%2040px%3B%0D%0A%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0D%0A%20%20%20%20%20%20%20%20font-size%3A%2014px%3B%0D%0A%20%20%20%20%20%20%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%E6%94%B9%E5%8F%98%E4%BD%8D%E7%BD%AE%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%3C%2Fn-back-top%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[o(" 改变位置 ")]),content:t(()=>[n(d,null,{default:t(()=>[o("例如：right 40px & bottom 160px。")]),_:1})]),demo:t(()=>[e("div",J,[n(i,{right:40,bottom:160},{default:t(()=>[K]),_:1})])]),_:1})}const U=D(G,[["render",Q]]),W=T({setup(){const c=V(void 0);return{scrollContainer:c,target:()=>c.value}}}),X={class:"demo-card__view"},Y=e("div",{style:{width:"200px",height:"40px","line-height":"40px","text-align":"center","font-size":"14px"}}," 指定目标 ",-1),Z={ref:"scrollContainer",style:{overflow:"auto",height:"72px","line-height":"1.5"}},e0=e("br",null,null,-1),t0=e("br",null,null,-1),o0=e("br",null,null,-1),n0=e("br",null,null,-1),l0=e("br",null,null,-1),i0=e("br",null,null,-1),u0=e("br",null,null,-1);function E0(c,s,d,i,a,f){const h=l("n-p"),_=l("n-back-top"),p=l("component-demo");return E(),A(p,{"demo-file-name":"target-container-selector.vue","relative-url":"D:/Code/naive-ui/src/back-top/demos/zhCN/target-container-selector.demo.vue",title:"监听目标","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-back-top%20%3Alisten-to%3D%22target%22%20%3Abottom%3D%22220%22%20%3Avisibility-height%3D%2210%22%3E%0D%0A%20%20%20%20%3Cdiv%0D%0A%20%20%20%20%20%20style%3D%22%0D%0A%20%20%20%20%20%20%20%20width%3A%20200px%3B%0D%0A%20%20%20%20%20%20%20%20height%3A%2040px%3B%0D%0A%20%20%20%20%20%20%20%20line-height%3A%2040px%3B%0D%0A%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0D%0A%20%20%20%20%20%20%20%20font-size%3A%2014px%3B%0D%0A%20%20%20%20%20%20%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%E6%8C%87%E5%AE%9A%E7%9B%AE%E6%A0%87%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%3C%2Fn-back-top%3E%0D%0A%20%20%3Cdiv%0D%0A%20%20%20%20ref%3D%22scrollContainer%22%0D%0A%20%20%20%20style%3D%22overflow%3A%20auto%3B%20height%3A%2072px%3B%20line-height%3A%201.5%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%E8%BF%99%E5%9D%97%E5%BA%94%E8%AF%A5%E5%86%99%E4%B8%80%E4%B8%AA%E6%9C%89%E6%84%8F%E6%80%9D%E7%9A%84%E7%AC%91%E8%AF%9D%E3%80%82%3Cbr%3E%0D%0A%20%20%20%20%E8%BF%99%E5%9D%97%E5%BA%94%E8%AF%A5%E5%86%99%E4%B8%80%E4%B8%AA%E6%9C%89%E6%84%8F%E6%80%9D%E7%9A%84%E7%AC%91%E8%AF%9D%E3%80%82%3Cbr%3E%0D%0A%20%20%20%20%E8%BF%99%E5%9D%97%E5%BA%94%E8%AF%A5%E5%86%99%E4%B8%80%E4%B8%AA%E6%9C%89%E6%84%8F%E6%80%9D%E7%9A%84%E7%AC%91%E8%AF%9D%E3%80%82%3Cbr%3E%0D%0A%20%20%20%20%E8%BF%99%E5%9D%97%E5%BA%94%E8%AF%A5%E5%86%99%E4%B8%80%E4%B8%AA%E6%9C%89%E6%84%8F%E6%80%9D%E7%9A%84%E7%AC%91%E8%AF%9D%E3%80%82%3Cbr%3E%0D%0A%20%20%20%20%E8%BF%99%E5%9D%97%E5%BA%94%E8%AF%A5%E5%86%99%E4%B8%80%E4%B8%AA%E6%9C%89%E6%84%8F%E6%80%9D%E7%9A%84%E7%AC%91%E8%AF%9D%E3%80%82%3Cbr%3E%0D%0A%20%20%20%20%E8%BF%99%E5%9D%97%E5%BA%94%E8%AF%A5%E5%86%99%E4%B8%80%E4%B8%AA%E6%9C%89%E6%84%8F%E6%80%9D%E7%9A%84%E7%AC%91%E8%AF%9D%E3%80%82%3Cbr%3E%0D%0A%20%20%20%20%E8%BF%99%E5%9D%97%E5%BA%94%E8%AF%A5%E5%86%99%E4%B8%80%E4%B8%AA%E6%9C%89%E6%84%8F%E6%80%9D%E7%9A%84%E7%AC%91%E8%AF%9D%E3%80%82%3Cbr%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20scrollContainerRef%20%3D%20ref%3CHTMLElement%20%7C%20undefined%3E(undefined)%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20scrollContainer%3A%20scrollContainerRef%2C%0D%0A%20%20%20%20%20%20target%3A%20()%20%3D%3E%20scrollContainerRef.value%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-back-top%20%3Alisten-to%3D%22target%22%20%3Abottom%3D%22220%22%20%3Avisibility-height%3D%2210%22%3E%0D%0A%20%20%20%20%3Cdiv%0D%0A%20%20%20%20%20%20style%3D%22%0D%0A%20%20%20%20%20%20%20%20width%3A%20200px%3B%0D%0A%20%20%20%20%20%20%20%20height%3A%2040px%3B%0D%0A%20%20%20%20%20%20%20%20line-height%3A%2040px%3B%0D%0A%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0D%0A%20%20%20%20%20%20%20%20font-size%3A%2014px%3B%0D%0A%20%20%20%20%20%20%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%E6%8C%87%E5%AE%9A%E7%9B%AE%E6%A0%87%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%3C%2Fn-back-top%3E%0D%0A%20%20%3Cdiv%0D%0A%20%20%20%20ref%3D%22scrollContainer%22%0D%0A%20%20%20%20style%3D%22overflow%3A%20auto%3B%20height%3A%2072px%3B%20line-height%3A%201.5%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%E8%BF%99%E5%9D%97%E5%BA%94%E8%AF%A5%E5%86%99%E4%B8%80%E4%B8%AA%E6%9C%89%E6%84%8F%E6%80%9D%E7%9A%84%E7%AC%91%E8%AF%9D%E3%80%82%3Cbr%3E%0D%0A%20%20%20%20%E8%BF%99%E5%9D%97%E5%BA%94%E8%AF%A5%E5%86%99%E4%B8%80%E4%B8%AA%E6%9C%89%E6%84%8F%E6%80%9D%E7%9A%84%E7%AC%91%E8%AF%9D%E3%80%82%3Cbr%3E%0D%0A%20%20%20%20%E8%BF%99%E5%9D%97%E5%BA%94%E8%AF%A5%E5%86%99%E4%B8%80%E4%B8%AA%E6%9C%89%E6%84%8F%E6%80%9D%E7%9A%84%E7%AC%91%E8%AF%9D%E3%80%82%3Cbr%3E%0D%0A%20%20%20%20%E8%BF%99%E5%9D%97%E5%BA%94%E8%AF%A5%E5%86%99%E4%B8%80%E4%B8%AA%E6%9C%89%E6%84%8F%E6%80%9D%E7%9A%84%E7%AC%91%E8%AF%9D%E3%80%82%3Cbr%3E%0D%0A%20%20%20%20%E8%BF%99%E5%9D%97%E5%BA%94%E8%AF%A5%E5%86%99%E4%B8%80%E4%B8%AA%E6%9C%89%E6%84%8F%E6%80%9D%E7%9A%84%E7%AC%91%E8%AF%9D%E3%80%82%3Cbr%3E%0D%0A%20%20%20%20%E8%BF%99%E5%9D%97%E5%BA%94%E8%AF%A5%E5%86%99%E4%B8%80%E4%B8%AA%E6%9C%89%E6%84%8F%E6%80%9D%E7%9A%84%E7%AC%91%E8%AF%9D%E3%80%82%3Cbr%3E%0D%0A%20%20%20%20%E8%BF%99%E5%9D%97%E5%BA%94%E8%AF%A5%E5%86%99%E4%B8%80%E4%B8%AA%E6%9C%89%E6%84%8F%E6%80%9D%E7%9A%84%E7%AC%91%E8%AF%9D%E3%80%82%3Cbr%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20scrollContainerRef%20%3D%20ref(void%200)%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20scrollContainer%3A%20scrollContainerRef%2C%0A%20%20%20%20%20%20target%3A%20()%20%3D%3E%20scrollContainerRef.value%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[o(" 监听目标 ")]),content:t(()=>[n(h,null,{default:t(()=>[o("你可以设定监听哪个元素来触发 Back Top。")]),_:1})]),demo:t(()=>[e("div",X,[n(_,{"listen-to":c.target,bottom:220,"visibility-height":10},{default:t(()=>[Y]),_:1},8,["listen-to"]),e("div",Z,[o(" 这块应该写一个有意思的笑话。"),e0,o(" 这块应该写一个有意思的笑话。"),t0,o(" 这块应该写一个有意思的笑话。"),o0,o(" 这块应该写一个有意思的笑话。"),n0,o(" 这块应该写一个有意思的笑话。"),l0,o(" 这块应该写一个有意思的笑话。"),i0,o(" 这块应该写一个有意思的笑话。"),u0],512)])]),_:1})}const c0=D(W,[["render",E0]]),A0={components:{basicVueDemo:j,visibilityHeightVueDemo:q,changePositionVueDemo:U,targetContainerSelectorVueDemo:c0},setup(){const c=$(),s=N(()=>!c.value),d=c;return{showAnchor:s,displayMode:S(),wrapperStyle:m(()=>d.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:m(()=>s.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/back-top/demos/zhCN/index.demo-entry.md"}}},d0={class:"md-table-wrapper"},s0=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"类型"),e("th",null,"默认值"),e("th",null,"说明")])],-1),a0=e("td",null,"bottom",-1),r0=e("td",null,"BackTop 距离页面底部的高度",-1),D0=e("td",null,"listen-to",-1),_0=e("td",null,"right",-1),p0=e("td",null,"BackTop 距离页面右侧的宽度",-1),h0=e("td",null,"show",-1),m0=e("td",null,"是否显示 BackTop（受控）",-1),B0=e("td",null,"to",-1),C0=e("td",null,"BackTop 渲染的容器节点",-1),f0=e("td",null,"visibility-height",-1),g0=e("td",null,"滚动时触发显示回到顶部的高度",-1),b0=e("td",null,"on-update:show",-1),F0=e("td",null,"BackTop 的 show 改变时触发事件",-1),v0={key:0,style:{width:"192px"}};function x0(c,s,d,i,a,f){const h=l("edit-on-github-header"),_=l("n-p"),p=l("n-h2"),g=l("basicVueDemo"),b=l("visibilityHeightVueDemo"),F=l("changePositionVueDemo"),v=l("targetContainerSelectorVueDemo"),x=l("component-demos"),y=l("n-h3"),u=l("n-text"),k=l("n-table"),r=l("n-anchor-link"),w=l("n-anchor");return E(),B("div",{class:"doc",style:C(i.wrapperStyle)},[e("div",{style:C(i.contentStyle)},[n(h,{"relative-url":"D:/Code/naive-ui/src/back-top/demos/zhCN/index.demo-entry.md",text:"回到顶部 Back Top"}),n(_,null,{default:t(()=>[o("它可以帮你回到你曾经到过的地方。不过时间是回不去了。")]),_:1}),n(p,{id:"演示"},{default:t(()=>[o("演示")]),_:1}),n(_,null,{default:t(()=>[o("向下滚动页面查看效果。")]),_:1}),n(x,{span:1},{default:t(()=>[n(g),n(b),n(F),n(v)]),_:1}),n(p,{id:"API"},{default:t(()=>[o("API")]),_:1}),n(y,{id:"BackTop-Props"},{default:t(()=>[o("BackTop Props")]),_:1}),e("div",d0,[n(k,{"single-column":"",class:"md-table"},{default:t(()=>[s0,e("tbody",null,[e("tr",null,[a0,e("td",null,[n(u,{code:""},{default:t(()=>[o("number | string")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("40")]),_:1})]),r0]),e("tr",null,[D0,e("td",null,[n(u,{code:""},{default:t(()=>[o("string | HTMLElement")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("undefined")]),_:1})]),e("td",null,[o("监听滚动的元素，如果为 "),n(u,{code:""},{default:t(()=>[o("undefined")]),_:1}),o(" 会监听距离最近的一个可滚动的祖先节点")])]),e("tr",null,[_0,e("td",null,[n(u,{code:""},{default:t(()=>[o("number | string")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("40")]),_:1})]),p0]),e("tr",null,[h0,e("td",null,[n(u,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("undefined")]),_:1})]),m0]),e("tr",null,[B0,e("td",null,[n(u,{code:""},{default:t(()=>[o("string | HTMLElement")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("'body'")]),_:1})]),C0]),e("tr",null,[f0,e("td",null,[n(u,{code:""},{default:t(()=>[o("number")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("180")]),_:1})]),g0]),e("tr",null,[b0,e("td",null,[n(u,{code:""},{default:t(()=>[o("(value: boolean) => void")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("undefined")]),_:1})]),F0])])]),_:1})])],4),i.showAnchor?(E(),B("div",v0,[n(w,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(i.displayMode,E(),A(r,{key:0,title:"基础用法\r",href:"#basic.vue"})),(i.displayMode,E(),A(r,{key:1,title:"可视高度\r",href:"#visibility-height.vue"})),(i.displayMode,E(),A(r,{key:2,title:"改变位置\r",href:"#change-position.vue"})),(i.displayMode,E(),A(r,{key:3,title:"监听目标\r",href:"#target-container-selector.vue"})),(i.displayMode,E(),A(r,{key:4,title:"API",href:"#API"})),(i.displayMode,E(),A(r,{key:5,title:"BackTop Props",href:"#BackTop-Props"}))]),_:1})])):z("",!0)],4)}const k0=D(A0,[["render",x0]]);export{k0 as default};
