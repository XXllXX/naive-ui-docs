import{j as f,a8 as V,l as N,_ as h,r as a,o as i,i as c,w as t,g as n,e,f as o,v as B,u as P,a as $,b as I,c as k,d as x,n as j,h as z}from"./index-9afb4b71.js";import{u as H,N as w,a as q}from"./use-loading-bar-3bda8392.js";const G=f({setup(){const r=V(),d=N(!0);return{disabled:d,handleStart(){r.start(),d.value=!1},handleFinish(){r.finish(),d.value=!0},handleError(){d.value=!0,r.error()}}}}),J={class:"demo-card__view"};function K(r,d,D,s,g,C){const u=a("n-button"),A=a("n-space"),l=a("component-demo");return i(),c(l,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/loading-bar/demos/zhCN/basic.demo.vue",title:"基础用法","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleStart%22%3E%0D%0A%20%20%20%20%20%20%E5%BC%80%E5%A7%8B%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Cn-button%20%3Adisabled%3D%22disabled%22%20%40click%3D%22handleFinish%22%3E%0D%0A%20%20%20%20%20%20%E7%BB%93%E6%9D%9F%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleError%22%3E%0D%0A%20%20%20%20%20%20%E6%8A%A5%E4%B8%AA%E9%94%99%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20useLoadingBar%20%7D%20from%20'naive-ui'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20loadingBar%20%3D%20useLoadingBar()%0D%0A%20%20%20%20const%20disabledRef%20%3D%20ref(true)%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20disabled%3A%20disabledRef%2C%0D%0A%20%20%20%20%20%20handleStart%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20loadingBar.start()%0D%0A%20%20%20%20%20%20%20%20disabledRef.value%20%3D%20false%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20handleFinish%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20loadingBar.finish()%0D%0A%20%20%20%20%20%20%20%20disabledRef.value%20%3D%20true%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20handleError%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20disabledRef.value%20%3D%20true%0D%0A%20%20%20%20%20%20%20%20loadingBar.error()%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleStart%22%3E%0D%0A%20%20%20%20%20%20%E5%BC%80%E5%A7%8B%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Cn-button%20%3Adisabled%3D%22disabled%22%20%40click%3D%22handleFinish%22%3E%0D%0A%20%20%20%20%20%20%E7%BB%93%E6%9D%9F%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleError%22%3E%0D%0A%20%20%20%20%20%20%E6%8A%A5%E4%B8%AA%E9%94%99%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20useLoadingBar%20%7D%20from%20%22naive-ui%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20loadingBar%20%3D%20useLoadingBar()%3B%0A%20%20%20%20const%20disabledRef%20%3D%20ref(true)%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20disabled%3A%20disabledRef%2C%0A%20%20%20%20%20%20handleStart()%20%7B%0A%20%20%20%20%20%20%20%20loadingBar.start()%3B%0A%20%20%20%20%20%20%20%20disabledRef.value%20%3D%20false%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20handleFinish()%20%7B%0A%20%20%20%20%20%20%20%20loadingBar.finish()%3B%0A%20%20%20%20%20%20%20%20disabledRef.value%20%3D%20true%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20handleError()%20%7B%0A%20%20%20%20%20%20%20%20disabledRef.value%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20loadingBar.error()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[n(" 基础用法 ")]),content:t(()=>[]),demo:t(()=>[e("div",J,[o(A,null,{default:t(()=>[o(u,{onClick:r.handleStart},{default:t(()=>[n(" 开始 ")]),_:1},8,["onClick"]),o(u,{disabled:r.disabled,onClick:r.handleFinish},{default:t(()=>[n(" 结束 ")]),_:1},8,["disabled","onClick"]),o(u,{onClick:r.handleError},{default:t(()=>[n(" 报个错 ")]),_:1},8,["onClick"])]),_:1})])]),_:1})}const O=h(G,[["render",K]]),Q=f({components:{LoadingBarTrigger:f({setup(){const r=H();return()=>B(q,null,{default:()=>[B(w,{onClick:()=>r.start()},()=>"Start"),B(w,{onClick:()=>r.finish()},()=>"Finish")]})}})},setup(){return{loadingBarTargetRef:N(void 0)}}}),U={class:"demo-card__view"},W={ref:"loadingBarTargetRef",style:{position:"absolute",inset:"0","border-radius":"var(--n-border-radius)",overflow:"hidden","pointer-events":"none"}};function X(r,d,D,s,g,C){const u=a("n-text"),A=a("n-p"),l=a("loading-bar-trigger"),m=a("n-loading-bar-provider"),_=a("component-demo");return i(),c(_,{"demo-file-name":"container.vue","relative-url":"D:/Code/naive-ui/src/loading-bar/demos/zhCN/container.demo.vue",title:"在局部使用进度条","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-loading-bar-provider%0D%0A%20%20%20%20%3Ato%3D%22loadingBarTargetRef%22%0D%0A%20%20%20%20container-style%3D%22position%3A%20absolute%3B%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Cdiv%0D%0A%20%20%20%20%20%20ref%3D%22loadingBarTargetRef%22%0D%0A%20%20%20%20%20%20style%3D%22%0D%0A%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0D%0A%20%20%20%20%20%20%20%20inset%3A%200%3B%0D%0A%20%20%20%20%20%20%20%20border-radius%3A%20var(--n-border-radius)%3B%0D%0A%20%20%20%20%20%20%20%20overflow%3A%20hidden%3B%0D%0A%20%20%20%20%20%20%20%20pointer-events%3A%20none%3B%0D%0A%20%20%20%20%20%20%22%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%20%20%3Cloading-bar-trigger%20%2F%3E%0D%0A%20%20%3C%2Fn-loading-bar-provider%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20h%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20NButton%20%7D%20from%20'..%2F..%2F..%2Fbutton'%0D%0Aimport%20%7B%20NSpace%20%7D%20from%20'..%2F..%2F..%2Fspace'%0D%0Aimport%20%7B%20useLoadingBar%20%7D%20from%20'..%2F..%2Fsrc%2Fuse-loading-bar'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20components%3A%20%7B%0D%0A%20%20%20%20LoadingBarTrigger%3A%20defineComponent(%7B%0D%0A%20%20%20%20%20%20setup%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20const%20loadingBar%20%3D%20useLoadingBar()%0D%0A%20%20%20%20%20%20%20%20return%20()%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20return%20h(NSpace%2C%20null%2C%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20default%3A%20()%20%3D%3E%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20h(NButton%2C%20%7B%20onClick%3A%20()%20%3D%3E%20loadingBar.start()%20%7D%2C%20()%20%3D%3E%20'Start')%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20h(NButton%2C%20%7B%20onClick%3A%20()%20%3D%3E%20loadingBar.finish()%20%7D%2C%20()%20%3D%3E%20'Finish')%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0D%0A%20%20%20%20%20%20%20%20%20%20%7D)%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D)%0D%0A%20%20%7D%2C%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20loadingBarTargetRef%3A%20ref%3Cundefined%20%7C%20HTMLElement%3E(undefined)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-loading-bar-provider%0D%0A%20%20%20%20%3Ato%3D%22loadingBarTargetRef%22%0D%0A%20%20%20%20container-style%3D%22position%3A%20absolute%3B%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Cdiv%0D%0A%20%20%20%20%20%20ref%3D%22loadingBarTargetRef%22%0D%0A%20%20%20%20%20%20style%3D%22%0D%0A%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0D%0A%20%20%20%20%20%20%20%20inset%3A%200%3B%0D%0A%20%20%20%20%20%20%20%20border-radius%3A%20var(--n-border-radius)%3B%0D%0A%20%20%20%20%20%20%20%20overflow%3A%20hidden%3B%0D%0A%20%20%20%20%20%20%20%20pointer-events%3A%20none%3B%0D%0A%20%20%20%20%20%20%22%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%20%20%3Cloading-bar-trigger%20%2F%3E%0D%0A%20%20%3C%2Fn-loading-bar-provider%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20h%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20NButton%20%7D%20from%20%22..%2F..%2F..%2Fbutton%22%3B%0Aimport%20%7B%20NSpace%20%7D%20from%20%22..%2F..%2F..%2Fspace%22%3B%0Aimport%20%7B%20useLoadingBar%20%7D%20from%20%22..%2F..%2Fsrc%2Fuse-loading-bar%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20LoadingBarTrigger%3A%20defineComponent(%7B%0A%20%20%20%20%20%20setup()%20%7B%0A%20%20%20%20%20%20%20%20const%20loadingBar%20%3D%20useLoadingBar()%3B%0A%20%20%20%20%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20h(NSpace%2C%20null%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20default%3A%20()%20%3D%3E%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20h(NButton%2C%20%7B%20onClick%3A%20()%20%3D%3E%20loadingBar.start()%20%7D%2C%20()%20%3D%3E%20%22Start%22)%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20h(NButton%2C%20%7B%20onClick%3A%20()%20%3D%3E%20loadingBar.finish()%20%7D%2C%20()%20%3D%3E%20%22Finish%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%0A%20%20%7D%2C%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20loadingBarTargetRef%3A%20ref(void%200)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[n(" 在局部使用进度条 ")]),content:t(()=>[o(A,null,{default:t(()=>[n("你可以设定 "),o(u,{code:""},{default:t(()=>[n("to")]),_:1}),n(" 来控制进度条的挂载位置")]),_:1})]),demo:t(()=>[e("div",U,[o(m,{to:r.loadingBarTargetRef,"container-style":"position: absolute;"},{default:t(()=>[e("div",W,null,512),o(l)]),_:1},8,["to"])])]),_:1})}const Y=h(Q,[["render",X]]),Z={components:{basicVueDemo:O,containerVueDemo:Y},setup(){const r=P(),d=$(()=>!r.value),D=r;return{showAnchor:d,displayMode:I(),wrapperStyle:k(()=>D.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:k(()=>d.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/loading-bar/demos/zhCN/index.demo-entry.md"}}},e0=e("pre",null,[e("span",{class:"hljs-comment"},"<!-- App.vue -->"),n(`
`),e("span",{class:"hljs-tag"},[n("<"),e("span",{class:"hljs-name"},"n-loading-bar-provider"),n(">")]),n(`
  `),e("span",{class:"hljs-tag"},[n("<"),e("span",{class:"hljs-name"},"content"),n(" />")]),n(`
`),e("span",{class:"hljs-tag"},[n("</"),e("span",{class:"hljs-name"},"n-loading-bar-provider"),n(">")])],-1),n0=e("pre",null,[e("span",{class:"hljs-keyword"},"import"),n(" { defineComponent } "),e("span",{class:"hljs-keyword"},"from"),n(),e("span",{class:"hljs-string"},"'vue'"),n(`
`),e("span",{class:"hljs-keyword"},"import"),n(" { useLoadingBar } "),e("span",{class:"hljs-keyword"},"from"),n(),e("span",{class:"hljs-string"},"'naive-ui'"),n(`

`),e("span",{class:"hljs-comment"},"// content"),n(`
`),e("span",{class:"hljs-keyword"},"export"),n(),e("span",{class:"hljs-keyword"},"default"),n(),e("span",{class:"hljs-title function_"},"defineComponent"),n(`({
  setup () {
    `),e("span",{class:"hljs-keyword"},"const"),n(" loadingBar = "),e("span",{class:"hljs-title function_"},"useLoadingBar"),n(`()
    `),e("span",{class:"hljs-keyword"},"return"),n(` {
      loading () {
        loadingBar.`),e("span",{class:"hljs-title function_"},"start"),n(`()
      }
    }
  }
})`)],-1),t0={class:"md-table-wrapper"},o0=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"类型"),e("th",null,"默认值"),e("th",null,"说明"),e("th",null,"版本")])],-1),a0=e("td",null,"container-style",-1),r0=e("td",null,"加载条容器的样式",-1),l0=e("td",null,"2.33.4",-1),d0=e("td",null,"loading-bar-style",-1),s0=e("td",null,"加载条样式",-1),i0=e("td",null,null,-1),u0=e("td",null,"to",-1),c0=e("td",null,"加载条的挂载位置",-1),A0=e("td",null,"2.33.4",-1),p0={class:"md-table-wrapper"},D0=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"类型"),e("th",null,"说明")])],-1),_0=e("td",null,"error",-1),m0=e("td",null,"加载条出现错误的回调函数",-1),B0=e("td",null,"finish",-1),f0=e("td",null,"加载条结束加载的回调函数",-1),h0=e("td",null,"start",-1),g0=e("td",null,"加载条开始加载的回调函数",-1),C0={key:0,style:{width:"192px"}};function b0(r,d,D,s,g,C){const u=a("edit-on-github-header"),A=a("n-p"),l=a("n-text"),m=a("n-alert"),_=a("n-code"),b=a("n-scrollbar"),E=a("n-card"),R=a("n-space"),v=a("n-h2"),L=a("basicVueDemo"),S=a("containerVueDemo"),M=a("component-demos"),F=a("n-h3"),y=a("n-table"),p=a("n-anchor-link"),T=a("n-anchor");return i(),x("div",{class:"doc",style:j(s.wrapperStyle)},[e("div",{style:j(s.contentStyle)},[o(u,{"relative-url":"D:/Code/naive-ui/src/loading-bar/demos/zhCN/index.demo-entry.md",text:"加载条 Loading Bar"}),o(A,null,{default:t(()=>[n("焦虑的安慰剂，疗效尚可。")]),_:1}),o(R,{vertical:"",size:"large"},{default:t(()=>[o(m,{title:"使用前提",type:"warning",bordered:!1},{default:t(()=>[n(" 如果你想使用加载条，你需要把调用其方法的组件放在 "),o(l,{code:""},{default:t(()=>[n("n-loading-bar-provider")]),_:1}),n(" 内部并且注入 "),o(l,{code:""},{default:t(()=>[n("loadingBar")]),_:1}),n("。 ")]),_:1}),n(" 例如： "),o(E,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:t(()=>[o(b,{"x-scrollable":"","content-style":"padding: 16px;"},{default:t(()=>[o(_,null,{default:t(()=>[e0]),_:1})]),_:1})]),_:1}),o(E,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:t(()=>[o(b,{"x-scrollable":"","content-style":"padding: 16px;"},{default:t(()=>[o(_,null,{default:t(()=>[n0]),_:1})]),_:1})]),_:1})]),_:1}),o(v,{id:"演示"},{default:t(()=>[n("演示")]),_:1}),o(M,{span:2},{default:t(()=>[o(L),o(S)]),_:1}),o(v,{id:"API"},{default:t(()=>[n("API")]),_:1}),o(F,{id:"LoadingBarProvider-Props"},{default:t(()=>[n("LoadingBarProvider Props")]),_:1}),e("div",t0,[o(y,{"single-column":"",class:"md-table"},{default:t(()=>[o0,e("tbody",null,[e("tr",null,[a0,e("td",null,[o(l,{code:""},{default:t(()=>[n("string | object")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("undefined")]),_:1})]),r0,l0]),e("tr",null,[d0,e("td",null,[o(l,{code:""},{default:t(()=>[n("{ loading?: string | object, error?: string | object }")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("undefined")]),_:1})]),s0,i0]),e("tr",null,[u0,e("td",null,[o(l,{code:""},{default:t(()=>[n("string | HTMLElement | false")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("undefined")]),_:1})]),c0,A0])])]),_:1})]),o(F,{id:"loadingBar-Injection-Methods"},{default:t(()=>[n("loadingBar Injection Methods")]),_:1}),e("div",p0,[o(y,{"single-column":"",class:"md-table"},{default:t(()=>[D0,e("tbody",null,[e("tr",null,[_0,e("td",null,[o(l,{code:""},{default:t(()=>[n("() => void")]),_:1})]),m0]),e("tr",null,[B0,e("td",null,[o(l,{code:""},{default:t(()=>[n("() => void")]),_:1})]),f0]),e("tr",null,[h0,e("td",null,[o(l,{code:""},{default:t(()=>[n("() => void")]),_:1})]),g0])])]),_:1})])],4),s.showAnchor?(i(),x("div",C0,[o(T,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(s.displayMode,i(),c(p,{key:0,title:"基础用法\r",href:"#basic.vue"})),(s.displayMode,i(),c(p,{key:1,title:"在局部使用进度条\r",href:"#container.vue"})),(s.displayMode,i(),c(p,{key:2,title:"API",href:"#API"})),(s.displayMode,i(),c(p,{key:3,title:"LoadingBarProvider Props",href:"#LoadingBarProvider-Props"})),(s.displayMode,i(),c(p,{key:4,title:"loadingBar Injection Methods",href:"#loadingBar-Injection-Methods"}))]),_:1})])):z("",!0)],4)}const F0=h(Z,[["render",b0]]);export{F0 as default};
