import{_ as D,r as d,o as s,i as c,w as n,g as t,e,f as l,j as C,A as $,l as M,aD as v,aE as O,aF as j,u as I,a as T,b as H,c as x,d as y,n as b,h as R}from"./index-DxZkTPDs.js";import{S as L}from"./SwapHorizontal-CUPIYcAg.js";const U={},q={class:"demo-card__view"};function G(r,u){const i=d("n-split"),a=d("component-demo");return s(),c(a,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/split/demos/zhCN/basic.demo.vue",title:"基础用法","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-split%20direction%3D%22horizontal%22%20style%3D%22height%3A%20200px%22%20%3Amax%3D%220.75%22%20%3Amin%3D%220.25%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%231%3E%0D%0A%20%20%20%20%20%20Pane%201%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20%232%3E%0D%0A%20%20%20%20%20%20Pane%202%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-split%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[t(" 基础用法 ")]),content:n(()=>[]),demo:n(()=>[e("div",q,[l(i,{direction:"horizontal",style:{height:"200px"},max:.75,min:.25},{1:n(()=>[t(" Pane 1 ")]),2:n(()=>[t(" Pane 2 ")]),_:1})])]),_:1})}const J=D(U,[["render",G]]),K={},Q={class:"demo-card__view"};function W(r,u){const i=d("n-split"),a=d("component-demo");return s(),c(a,{"demo-file-name":"vertical.vue","relative-url":"D:/Code/naive-ui/src/split/demos/zhCN/vertical.demo.vue",title:"垂直布局","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-split%20direction%3D%22vertical%22%20style%3D%22height%3A%20200px%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%231%3E%0D%0A%20%20%20%20%20%20Pane%201%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20%232%3E%0D%0A%20%20%20%20%20%20Pane%202%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-split%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[t(" 垂直布局 ")]),content:n(()=>[]),demo:n(()=>[e("div",Q,[l(i,{direction:"vertical",style:{height:"200px"}},{1:n(()=>[t(" Pane 1 ")]),2:n(()=>[t(" Pane 2 ")]),_:1})])]),_:1})}const X=D(K,[["render",W]]),Y={},Z={class:"demo-card__view"};function e0(r,u){const i=d("n-split"),a=d("component-demo");return s(),c(a,{"demo-file-name":"nest.vue","relative-url":"D:/Code/naive-ui/src/split/demos/zhCN/nest.demo.vue",title:"嵌套布局","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-split%20direction%3D%22horizontal%22%20style%3D%22height%3A%20200px%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%231%3E%0D%0A%20%20%20%20%20%20Pane%201%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20%232%3E%0D%0A%20%20%20%20%20%20%3Cn-split%20direction%3D%22vertical%22%20style%3D%22height%3A%20200px%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%231%3E%0D%0A%20%20%20%20%20%20%20%20%20%20Pane%202%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%232%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cn-split%20direction%3D%22horizontal%22%20style%3D%22height%3A%20100%25%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%231%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Pane%203%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%232%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Pane%204%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fn-split%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-split%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-split%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[t(" 嵌套布局 ")]),content:n(()=>[]),demo:n(()=>[e("div",Z,[l(i,{direction:"horizontal",style:{height:"200px"}},{1:n(()=>[t(" Pane 1 ")]),2:n(()=>[l(i,{direction:"vertical",style:{height:"200px"}},{1:n(()=>[t(" Pane 2 ")]),2:n(()=>[l(i,{direction:"horizontal",style:{height:"100%"}},{1:n(()=>[t(" Pane 3 ")]),2:n(()=>[t(" Pane 4 ")]),_:1})]),_:1})]),_:1})])]),_:1})}const t0=D(Y,[["render",e0]]),n0=C({setup(){const r=$();return{handleOnDragStart:()=>{r.info("开始滚动")},handleOnDragMove:()=>{r.info("滚动中")},handleOnDragEnd:()=>{r.info("滚动结束")}}}}),l0={class:"demo-card__view"};function o0(r,u,i,a,A,m){const p=d("n-split"),h=d("component-demo");return s(),c(h,{"demo-file-name":"event.vue","relative-url":"D:/Code/naive-ui/src/split/demos/zhCN/event.demo.vue",title:"事件","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-split%0D%0A%20%20%20%20direction%3D%22horizontal%22%0D%0A%20%20%20%20style%3D%22height%3A%20200px%22%0D%0A%20%20%20%20%40drag-start%3D%22handleOnDragStart%22%0D%0A%20%20%20%20%40drag-move%3D%22handleOnDragMove%22%0D%0A%20%20%20%20%40drag-end%3D%22handleOnDragEnd%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Ctemplate%20%231%3E%0D%0A%20%20%20%20%20%20Pane%201%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20%232%3E%0D%0A%20%20%20%20%20%20Pane%202%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-split%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20useMessage%20%7D%20from%20'naive-ui'%0D%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20message%20%3D%20useMessage()%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20handleOnDragStart%3A%20()%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20message.info('%E5%BC%80%E5%A7%8B%E6%BB%9A%E5%8A%A8')%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20handleOnDragMove%3A%20()%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20message.info('%E6%BB%9A%E5%8A%A8%E4%B8%AD')%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20handleOnDragEnd%3A%20()%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20message.info('%E6%BB%9A%E5%8A%A8%E7%BB%93%E6%9D%9F')%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-split%0D%0A%20%20%20%20direction%3D%22horizontal%22%0D%0A%20%20%20%20style%3D%22height%3A%20200px%22%0D%0A%20%20%20%20%40drag-start%3D%22handleOnDragStart%22%0D%0A%20%20%20%20%40drag-move%3D%22handleOnDragMove%22%0D%0A%20%20%20%20%40drag-end%3D%22handleOnDragEnd%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Ctemplate%20%231%3E%0D%0A%20%20%20%20%20%20Pane%201%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20%232%3E%0D%0A%20%20%20%20%20%20Pane%202%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-split%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20useMessage%20%7D%20from%20%22naive-ui%22%3B%0Aimport%20%7B%20defineComponent%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20handleOnDragStart%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20message.info(%22%E5%BC%80%E5%A7%8B%E6%BB%9A%E5%8A%A8%22)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20handleOnDragMove%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20message.info(%22%E6%BB%9A%E5%8A%A8%E4%B8%AD%22)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20handleOnDragEnd%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20message.info(%22%E6%BB%9A%E5%8A%A8%E7%BB%93%E6%9D%9F%22)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[t(" 事件 ")]),content:n(()=>[]),demo:n(()=>[e("div",l0,[l(p,{direction:"horizontal",style:{height:"200px"},onDragStart:r.handleOnDragStart,onDragMove:r.handleOnDragMove,onDragEnd:r.handleOnDragEnd},{1:n(()=>[t(" Pane 1 ")]),2:n(()=>[t(" Pane 2 ")]),_:1},8,["onDragStart","onDragMove","onDragEnd"])])]),_:1})}const d0=D(n0,[["render",o0]]),a0=C({components:{SwapHorizontalIcon:L}}),i0={class:"demo-card__view"},s0={style:{height:"100%",backgroundColor:"#409eff",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px"}};function r0(r,u,i,a,A,m){const p=d("swap-horizontal-icon"),h=d("n-icon"),o=d("n-split"),f=d("component-demo");return s(),c(f,{"demo-file-name":"slot.vue","relative-url":"D:/Code/naive-ui/src/split/demos/zhCN/slot.demo.vue",title:"插槽","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-split%0D%0A%20%20%20%20direction%3D%22horizontal%22%0D%0A%20%20%20%20style%3D%22height%3A%20200px%22%0D%0A%20%20%20%20%3Adefault-size%3D%220.4%22%0D%0A%20%20%20%20%3Aresize-trigger-size%3D%2216%22%0D%0A%20%20%20%20%3Amin%3D%220.25%22%0D%0A%20%20%20%20%3Amax%3D%220.75%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Ctemplate%20%231%3E%0D%0A%20%20%20%20%20%20Pane%201%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20%232%3E%0D%0A%20%20%20%20%20%20Pane%202%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20%23resize-trigger%3E%0D%0A%20%20%20%20%20%20%3Cdiv%0D%0A%20%20%20%20%20%20%20%20%3Astyle%3D%22%7B%0D%0A%20%20%20%20%20%20%20%20%20%20height%3A%20'100%25'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'%23409eff'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20display%3A%20'flex'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20alignItems%3A%20'center'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20borderRadius%3A%20'8px'%0D%0A%20%20%20%20%20%20%20%20%7D%22%0D%0A%20%20%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-icon%20color%3D%22white%22%20%3Asize%3D%2216%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cswap-horizontal-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-split%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20SwapHorizontal%20as%20SwapHorizontalIcon%20%7D%20from%20'%40vicons%2Fionicons5'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20components%3A%20%7B%0D%0A%20%20%20%20SwapHorizontalIcon%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-split%0D%0A%20%20%20%20direction%3D%22horizontal%22%0D%0A%20%20%20%20style%3D%22height%3A%20200px%22%0D%0A%20%20%20%20%3Adefault-size%3D%220.4%22%0D%0A%20%20%20%20%3Aresize-trigger-size%3D%2216%22%0D%0A%20%20%20%20%3Amin%3D%220.25%22%0D%0A%20%20%20%20%3Amax%3D%220.75%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Ctemplate%20%231%3E%0D%0A%20%20%20%20%20%20Pane%201%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20%232%3E%0D%0A%20%20%20%20%20%20Pane%202%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20%23resize-trigger%3E%0D%0A%20%20%20%20%20%20%3Cdiv%0D%0A%20%20%20%20%20%20%20%20%3Astyle%3D%22%7B%0D%0A%20%20%20%20%20%20%20%20%20%20height%3A%20'100%25'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'%23409eff'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20display%3A%20'flex'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20alignItems%3A%20'center'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20borderRadius%3A%20'8px'%0D%0A%20%20%20%20%20%20%20%20%7D%22%0D%0A%20%20%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-icon%20color%3D%22white%22%20%3Asize%3D%2216%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cswap-horizontal-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-split%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20SwapHorizontal%20as%20SwapHorizontalIcon%20%7D%20from%20%22%40vicons%2Fionicons5%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20SwapHorizontalIcon%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[t(" 插槽 ")]),content:n(()=>[]),demo:n(()=>[e("div",i0,[l(o,{direction:"horizontal",style:{height:"200px"},"default-size":.4,"resize-trigger-size":16,min:.25,max:.75},{1:n(()=>[t(" Pane 1 ")]),2:n(()=>[t(" Pane 2 ")]),"resize-trigger":n(()=>[e("div",s0,[l(h,{color:"white",size:16},{default:n(()=>[l(p)]),_:1})])]),_:1})])]),_:1})}const c0=D(a0,[["render",r0]]),u0={class:"demo-card__view"},_0=e("div",{style:{width:"100%","background-color":"black"}},null,-1),p0=e("div",{style:{width:"100%","background-color":"red"}},null,-1),D0=C({__name:"controlled.demo",setup(r){const u=M(.8);return(i,a)=>{const A=d("n-flex"),m=d("component-demo");return s(),c(m,{"demo-file-name":"controlled.vue","relative-url":"D:/Code/naive-ui/src/split/demos/zhCN/controlled.demo.vue",title:"受控的属性值","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-flex%20vertical%3E%0D%0A%20%20%20%20%3Cn-input-number%0D%0A%20%20%20%20%20%20v-model%3Avalue%3D%22split%22%0D%0A%20%20%20%20%20%20%3Astep%3D%220.1%22%0D%0A%20%20%20%20%20%20clearable%0D%0A%20%20%20%20%20%20%3Amax%3D%221%22%0D%0A%20%20%20%20%20%20%3Amin%3D%220%22%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%20%20%3CNSplit%20v-model%3Asize%3D%22split%22%20style%3D%22height%3A%20200px%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%231%3E%0D%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22width%3A%20100%25%3B%20background-color%3A%20black%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%232%3E%0D%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22width%3A%20100%25%3B%20background-color%3A%20red%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2FNSplit%3E%0D%0A%20%20%3C%2Fn-flex%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20NSplit%2C%20NInputNumber%20%7D%20from%20'naive-ui'%0D%0A%0D%0Aconst%20split%20%3D%20ref%3Cnumber%3E(0.8)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-flex%20vertical%3E%0D%0A%20%20%20%20%3Cn-input-number%0D%0A%20%20%20%20%20%20v-model%3Avalue%3D%22split%22%0D%0A%20%20%20%20%20%20%3Astep%3D%220.1%22%0D%0A%20%20%20%20%20%20clearable%0D%0A%20%20%20%20%20%20%3Amax%3D%221%22%0D%0A%20%20%20%20%20%20%3Amin%3D%220%22%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%20%20%3CNSplit%20v-model%3Asize%3D%22split%22%20style%3D%22height%3A%20200px%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%231%3E%0D%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22width%3A%20100%25%3B%20background-color%3A%20black%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%232%3E%0D%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22width%3A%20100%25%3B%20background-color%3A%20red%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2FNSplit%3E%0D%0A%20%20%3C%2Fn-flex%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aconst%20split%20%3D%20ref(0.8)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:n(()=>[t(" 受控的属性值 ")]),content:n(()=>[]),demo:n(()=>[e("div",u0,[l(A,{vertical:""},{default:n(()=>[l(v(O),{value:u.value,"onUpdate:value":a[0]||(a[0]=p=>u.value=p),step:.1,clearable:"",max:1,min:0},null,8,["value"]),l(v(j),{size:u.value,"onUpdate:size":a[1]||(a[1]=p=>u.value=p),style:{height:"200px"}},{1:n(()=>[_0]),2:n(()=>[p0]),_:1},8,["size"])]),_:1})])]),_:1})}}}),A0={},m0={class:"demo-card__view"},h0=e("br",null,null,-1),f0=e("br",null,null,-1),C0=e("br",null,null,-1);function E0(r,u){const i=d("n-text"),a=d("n-p"),A=d("n-split"),m=d("component-demo");return s(),c(m,{"demo-file-name":"pixel-value.vue","relative-url":"D:/Code/naive-ui/src/split/demos/zhCN/pixel-value.demo.vue",title:"使用像素值控制尺寸","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-split%0D%0A%20%20%20%20direction%3D%22horizontal%22%0D%0A%20%20%20%20style%3D%22height%3A%20200px%22%0D%0A%20%20%20%20max%3D%22300px%22%0D%0A%20%20%20%20min%3D%22100px%22%0D%0A%20%20%20%20default-size%3D%22200px%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Ctemplate%20%231%3E%0D%0A%20%20%20%20%20%20Pane%201%3A%3Cbr%3E%0D%0A%20%20%20%20%20%20min%20100px%3Cbr%3E%0D%0A%20%20%20%20%20%20default%20200px%3Cbr%3E%0D%0A%20%20%20%20%20%20max%20300px%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20%232%3E%0D%0A%20%20%20%20%20%20Pane%202%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-split%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:n(()=>[t(" 使用像素值控制尺寸 ")]),content:n(()=>[l(a,null,{default:n(()=>[t("自 "),l(i,{code:""},{default:n(()=>[t("2.38.2")]),_:1}),t(" 开始，"),l(i,{code:""},{default:n(()=>[t("min")]),_:1}),t("、"),l(i,{code:""},{default:n(()=>[t("max")]),_:1}),t("、"),l(i,{code:""},{default:n(()=>[t("size")]),_:1}),t(" 和 "),l(i,{code:""},{default:n(()=>[t("default-size")]),_:1}),t(" 属性可以接受像素值。")]),_:1})]),demo:n(()=>[e("div",m0,[l(A,{direction:"horizontal",style:{height:"200px"},max:"300px",min:"100px","default-size":"200px"},{1:n(()=>[t(" Pane 1:"),h0,t(" min 100px"),f0,t(" default 200px"),C0,t(" max 300px ")]),2:n(()=>[t(" Pane 2 ")]),_:1})])]),_:1})}const g0=D(A0,[["render",E0]]),v0={components:{basicVueDemo:J,verticalVueDemo:X,nestVueDemo:t0,eventVueDemo:d0,slotVueDemo:c0,controlledVueDemo:D0,pixelValueVueDemo:g0},setup(){const r=I(),u=T(()=>!r.value),i=r;return{showAnchor:u,displayMode:H(),wrapperStyle:x(()=>i.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:x(()=>u.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/split/demos/zhCN/index.demo-entry.md"}}},x0={class:"md-table-wrapper"},y0=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"类型"),e("th",null,"默认值"),e("th",null,"说明"),e("th",null,"版本")])],-1),b0=e("td",null,"default-size",-1),F0=e("td",null,"direction",-1),B0=e("td",null,"Split 的分割方向",-1),z0=e("td",null,"2.36.0",-1),S0=e("td",null,"disabled",-1),w0=e("td",null,"是否禁用",-1),P0=e("td",null,"2.36.0",-1),V0=e("td",null,"max",-1),N0=e("td",null,"min",-1),k0=e("td",null,"pane1-class",-1),$0=e("td",null,"第一个面板的类名",-1),M0=e("td",null,"2.38.2",-1),O0=e("td",null,"pane1-style",-1),j0=e("td",null,"第一个面板的样式",-1),I0=e("td",null,"2.38.2",-1),T0=e("td",null,"pane2-class",-1),H0=e("td",null,"第二个面板的类名",-1),R0=e("td",null,"2.38.2",-1),L0=e("td",null,"pane2-style",-1),U0=e("td",null,"第二个面板的样式",-1),q0=e("td",null,"2.38.2",-1),G0=e("td",null,"resize-trigger-size",-1),J0=e("td",null,"Split 的分隔条大小",-1),K0=e("td",null,"2.36.0",-1),Q0=e("td",null,"size",-1),W0=e("td",null,"watch-props",-1),X0=e("td",null,"2.38.0",-1),Y0=e("td",null,"on-drag-start",-1),Z0=e("td",null,"开始拖拽的回调函数",-1),e2=e("td",null,"2.36.0",-1),t2=e("td",null,"on-drag-move",-1),n2=e("td",null,"拖拽中的回调函数",-1),l2=e("td",null,"2.36.0",-1),o2=e("td",null,"on-drag-end",-1),d2=e("td",null,"结束拖拽的回调函数",-1),a2=e("td",null,"2.36.0",-1),i2=e("td",null,"on-update:size",-1),s2=e("td",null,"2.38.0",-1),r2={class:"md-table-wrapper"},c2=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"参数"),e("th",null,"说明"),e("th",null,"版本")])],-1),u2=e("td",null,"1",-1),_2=e("td",null,"第一个面板内容",-1),p2=e("td",null,"2.36.0",-1),D2=e("td",null,"2",-1),A2=e("td",null,"第二个面板内容",-1),m2=e("td",null,"2.36.0",-1),h2=e("td",null,"resize-trigger",-1),f2=e("td",null,"分割条内容",-1),C2=e("td",null,"2.36.0",-1),E2={key:0,style:{width:"192px"}};function g2(r,u,i,a,A,m){const p=d("edit-on-github-header"),h=d("n-p"),o=d("n-text"),f=d("n-h2"),F=d("basicVueDemo"),B=d("verticalVueDemo"),z=d("nestVueDemo"),S=d("eventVueDemo"),w=d("slotVueDemo"),P=d("controlledVueDemo"),V=d("pixelValueVueDemo"),N=d("component-demos"),E=d("n-h3"),g=d("n-table"),_=d("n-anchor-link"),k=d("n-anchor");return s(),y("div",{class:"doc",style:b(a.wrapperStyle)},[e("div",{style:b(a.contentStyle)},[l(p,{"relative-url":"D:/Code/naive-ui/src/split/demos/zhCN/index.demo-entry.md",text:"面板分割 Split"}),l(h,null,{default:n(()=>[t("灵活的布局工具，提供了用户自定义界面布局的可能性。")]),_:1}),l(h,null,{default:n(()=>[l(o,{code:""},{default:n(()=>[t("2.36.0")]),_:1}),t(" 版本开始提供该组件。")]),_:1}),l(f,{id:"演示"},{default:n(()=>[t("演示")]),_:1}),l(N,{span:2},{default:n(()=>[l(F),l(B),l(z),l(S),l(w),l(P),l(V)]),_:1}),l(f,{id:"API"},{default:n(()=>[t("API")]),_:1}),l(E,{id:"Split-Props"},{default:n(()=>[t("Split Props")]),_:1}),e("div",x0,[l(g,{"single-column":"",class:"md-table"},{default:n(()=>[y0,e("tbody",null,[e("tr",null,[b0,e("td",null,[l(o,{code:""},{default:n(()=>[t("string | number")]),_:1})]),e("td",null,[l(o,{code:""},{default:n(()=>[t("0.5")]),_:1})]),e("td",null,[t("Split 的默认分割大小，为 "),l(o,{code:""},{default:n(()=>[t("number")]),_:1}),t(" 类型时应该为 0 ~ 1 之间的值，为 "),l(o,{code:""},{default:n(()=>[t("string")]),_:1}),t(" 类型时应该为 "),l(o,{code:""},{default:n(()=>[t("${number}px")]),_:1}),t(" 格式")]),e("td",null,[t("2.36.0, "),l(o,{code:""},{default:n(()=>[t("string")]),_:1}),t(" 2.38.2")])]),e("tr",null,[F0,e("td",null,[l(o,{code:""},{default:n(()=>[t("'horizontal' | 'vertical'")]),_:1})]),e("td",null,[l(o,{code:""},{default:n(()=>[t("'horizontal'")]),_:1})]),B0,z0]),e("tr",null,[S0,e("td",null,[l(o,{code:""},{default:n(()=>[t("boolean")]),_:1})]),e("td",null,[l(o,{code:""},{default:n(()=>[t("false")]),_:1})]),w0,P0]),e("tr",null,[V0,e("td",null,[l(o,{code:""},{default:n(()=>[t("string | number")]),_:1})]),e("td",null,[l(o,{code:""},{default:n(()=>[t("1")]),_:1})]),e("td",null,[t("Split 的分割最大阈值，为 "),l(o,{code:""},{default:n(()=>[t("number")]),_:1}),t(" 类型时应该为 0 ~ 1 之间的值，为 "),l(o,{code:""},{default:n(()=>[t("string")]),_:1}),t(" 类型时应该为 "),l(o,{code:""},{default:n(()=>[t("${number}px")]),_:1}),t(" 格式")]),e("td",null,[t("2.36.0, "),l(o,{code:""},{default:n(()=>[t("string")]),_:1}),t(" 2.38.2")])]),e("tr",null,[N0,e("td",null,[l(o,{code:""},{default:n(()=>[t("string | number")]),_:1})]),e("td",null,[l(o,{code:""},{default:n(()=>[t("0")]),_:1})]),e("td",null,[t("Split 的分割最小阈值，为 "),l(o,{code:""},{default:n(()=>[t("number")]),_:1}),t(" 类型时应该为 0 ~ 1 之间的值，为 "),l(o,{code:""},{default:n(()=>[t("string")]),_:1}),t(" 类型时应该为 "),l(o,{code:""},{default:n(()=>[t("${number}px")]),_:1}),t(" 格式")]),e("td",null,[t("2.36.0, "),l(o,{code:""},{default:n(()=>[t("string")]),_:1}),t(" 2.38.2")])]),e("tr",null,[k0,e("td",null,[l(o,{code:""},{default:n(()=>[t("string")]),_:1})]),e("td",null,[l(o,{code:""},{default:n(()=>[t("undefined")]),_:1})]),$0,M0]),e("tr",null,[O0,e("td",null,[l(o,{code:""},{default:n(()=>[t("Object | string")]),_:1})]),e("td",null,[l(o,{code:""},{default:n(()=>[t("undefined")]),_:1})]),j0,I0]),e("tr",null,[T0,e("td",null,[l(o,{code:""},{default:n(()=>[t("string")]),_:1})]),e("td",null,[l(o,{code:""},{default:n(()=>[t("undefined")]),_:1})]),H0,R0]),e("tr",null,[L0,e("td",null,[l(o,{code:""},{default:n(()=>[t("Object | string")]),_:1})]),e("td",null,[l(o,{code:""},{default:n(()=>[t("undefined")]),_:1})]),U0,q0]),e("tr",null,[G0,e("td",null,[l(o,{code:""},{default:n(()=>[t("number")]),_:1})]),e("td",null,[l(o,{code:""},{default:n(()=>[t("3")]),_:1})]),J0,K0]),e("tr",null,[Q0,e("td",null,[l(o,{code:""},{default:n(()=>[t("string | number")]),_:1})]),e("td",null,[l(o,{code:""},{default:n(()=>[t("undefined")]),_:1})]),e("td",null,[t("Split 的受控分割大小，为 "),l(o,{code:""},{default:n(()=>[t("number")]),_:1}),t(" 类型时应该为 0 ~ 1 之间的值，为 "),l(o,{code:""},{default:n(()=>[t("string")]),_:1}),t(" 类型时应该为 "),l(o,{code:""},{default:n(()=>[t("${number}px")]),_:1}),t(" 格式")]),e("td",null,[t("2.38.0, "),l(o,{code:""},{default:n(()=>[t("string")]),_:1}),t(" 2.38.2")])]),e("tr",null,[W0,e("td",null,[l(o,{code:""},{default:n(()=>[t("Array<'defaultSize'>")]),_:1})]),e("td",null,[l(o,{code:""},{default:n(()=>[t("undefined")]),_:1})]),e("td",null,[t("需要检测变更的默认属性，检测后组件状态会更新。注意："),l(o,{code:""},{default:n(()=>[t("watch-props")]),_:1}),t(" 本身不是响应式的")]),X0]),e("tr",null,[Y0,e("td",null,[l(o,{code:""},{default:n(()=>[t("(e: Event) => void")]),_:1})]),e("td",null,[l(o,{code:""},{default:n(()=>[t("undefined")]),_:1})]),Z0,e2]),e("tr",null,[t2,e("td",null,[l(o,{code:""},{default:n(()=>[t("(e: Event) => void")]),_:1})]),e("td",null,[l(o,{code:""},{default:n(()=>[t("undefined")]),_:1})]),n2,l2]),e("tr",null,[o2,e("td",null,[l(o,{code:""},{default:n(()=>[t("(e: Event) => void")]),_:1})]),e("td",null,[l(o,{code:""},{default:n(()=>[t("undefined")]),_:1})]),d2,a2]),e("tr",null,[i2,e("td",null,[l(o,{code:""},{default:n(()=>[t("(value: string | number) => void")]),_:1})]),e("td",null,[l(o,{code:""},{default:n(()=>[t("undefined")]),_:1})]),e("td",null,[t("组件 "),l(o,{code:""},{default:n(()=>[t("size")]),_:1}),t(" 属性变化时触发的回调，如果 "),l(o,{code:""},{default:n(()=>[t("props.value")]),_:1}),t(" 或 "),l(o,{code:""},{default:n(()=>[t("props.defaultValue")]),_:1}),t(" 是 "),l(o,{code:""},{default:n(()=>[t("string")]),_:1}),t("， 则 "),l(o,{code:""},{default:n(()=>[t("value")]),_:1}),t(" 为 "),l(o,{code:""},{default:n(()=>[t("string")]),_:1})]),s2])])]),_:1})]),l(E,{id:"Split-Slots"},{default:n(()=>[t("Split Slots")]),_:1}),e("div",r2,[l(g,{"single-column":"",class:"md-table"},{default:n(()=>[c2,e("tbody",null,[e("tr",null,[u2,e("td",null,[l(o,{code:""},{default:n(()=>[t("()")]),_:1})]),_2,p2]),e("tr",null,[D2,e("td",null,[l(o,{code:""},{default:n(()=>[t("()")]),_:1})]),A2,m2]),e("tr",null,[h2,e("td",null,[l(o,{code:""},{default:n(()=>[t("()")]),_:1})]),f2,C2])])]),_:1})])],4),a.showAnchor?(s(),y("div",E2,[l(k,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:n(()=>[(a.displayMode,s(),c(_,{key:0,title:"基础用法\r",href:"#basic.vue"})),(a.displayMode,s(),c(_,{key:1,title:"垂直布局\r",href:"#vertical.vue"})),(a.displayMode,s(),c(_,{key:2,title:"嵌套布局\r",href:"#nest.vue"})),(a.displayMode,s(),c(_,{key:3,title:"事件\r",href:"#event.vue"})),(a.displayMode,s(),c(_,{key:4,title:"插槽\r",href:"#slot.vue"})),(a.displayMode,s(),c(_,{key:5,title:"受控的属性值\r",href:"#controlled.vue"})),(a.displayMode,s(),c(_,{key:6,title:"使用像素值控制尺寸\r",href:"#pixel-value.vue"})),(a.displayMode,s(),c(_,{key:7,title:"API",href:"#API"})),(a.displayMode,s(),c(_,{key:8,title:"Split Props",href:"#Split-Props"})),(a.displayMode,s(),c(_,{key:9,title:"Split Slots",href:"#Split-Slots"}))]),_:1})])):R("",!0)],4)}const y2=D(v0,[["render",g2]]);export{y2 as default};
