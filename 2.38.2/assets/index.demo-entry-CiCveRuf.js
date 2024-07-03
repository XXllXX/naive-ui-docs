import{j as h,l as g,_ as v,r as a,o as i,i as A,w as t,g as o,f as n,e,u as S,a as j,b as I,c as b,d as F,n as V,h as U}from"./index-DxZkTPDs.js";function R(){return Array.from({length:100}).map((r,l)=>({label:"Option "+l,value:l,disabled:l%5===0}))}function L(){return Array.from({length:50}).map((r,l)=>l)}const q=h({setup(){return{options:R(),value:g(L())}}}),G={class:"demo-card__view"};function H(r,l,m,s,C,B){const c=a("n-p"),d=a("n-legacy-transfer"),D=a("component-demo");return i(),A(D,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/legacy-transfer/demos/zhCN/basic.demo.vue",title:"基础用法","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-legacy-transfer%20ref%3D%22transfer%22%20v-model%3Avalue%3D%22value%22%20%3Aoptions%3D%22options%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Afunction%20createOptions%20()%20%7B%0D%0A%20%20return%20Array.from(%7B%20length%3A%20100%20%7D).map((v%2C%20i)%20%3D%3E%20(%7B%0D%0A%20%20%20%20label%3A%20'Option%20'%20%2B%20i%2C%0D%0A%20%20%20%20value%3A%20i%2C%0D%0A%20%20%20%20disabled%3A%20i%20%25%205%20%3D%3D%3D%200%0D%0A%20%20%7D))%0D%0A%7D%0D%0A%0D%0Afunction%20createValues%20()%20%7B%0D%0A%20%20return%20Array.from(%7B%20length%3A%2050%20%7D).map((v%2C%20i)%20%3D%3E%20i)%0D%0A%7D%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20options%3A%20createOptions()%2C%0D%0A%20%20%20%20%20%20value%3A%20ref(createValues())%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-legacy-transfer%20ref%3D%22transfer%22%20v-model%3Avalue%3D%22value%22%20%3Aoptions%3D%22options%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Afunction%20createOptions()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%20100%20%7D).map((v%2C%20i)%20%3D%3E%20(%7B%0A%20%20%20%20label%3A%20%22Option%20%22%20%2B%20i%2C%0A%20%20%20%20value%3A%20i%2C%0A%20%20%20%20disabled%3A%20i%20%25%205%20%3D%3D%3D%200%0A%20%20%7D))%3B%0A%7D%0A%0Afunction%20createValues()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%2050%20%7D).map((v%2C%20i)%20%3D%3E%20i)%3B%0A%7D%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20options%3A%20createOptions()%2C%0A%20%20%20%20%20%20value%3A%20ref(createValues())%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[o(" 基础用法 ")]),content:t(()=>[n(c,null,{default:t(()=>[o("穿梭框的基础用法。如果你有一大堆数据，看下一个例子。")]),_:1})]),demo:t(()=>[e("div",G,[n(d,{ref:"transfer",value:r.value,"onUpdate:value":l[0]||(l[0]=p=>r.value=p),options:r.options},null,8,["value","options"])])]),_:1})}const J=v(q,[["render",H]]);function K(){return Array.from({length:42e3}).map((r,l)=>({label:"Option "+l,value:l,disabled:l%5===0}))}function Q(){return Array.from({length:50}).map((r,l)=>l)}const W=h({setup(){return{options:K(),value:g(Q())}}}),X={class:"demo-card__view"};function Y(r,l,m,s,C,B){const c=a("n-text"),d=a("n-p"),D=a("n-legacy-transfer"),p=a("component-demo");return i(),A(p,{"demo-file-name":"large-data.vue","relative-url":"D:/Code/naive-ui/src/legacy-transfer/demos/zhCN/large-data.demo.vue",title:"一大堆数据","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-legacy-transfer%0D%0A%20%20%20%20ref%3D%22transfer%22%0D%0A%20%20%20%20v-model%3Avalue%3D%22value%22%0D%0A%20%20%20%20%3Aoptions%3D%22options%22%0D%0A%20%20%20%20virtual-scroll%0D%0A%20%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Afunction%20createOptions%20()%20%7B%0D%0A%20%20return%20Array.from(%7B%20length%3A%2042000%20%7D).map((v%2C%20i)%20%3D%3E%20(%7B%0D%0A%20%20%20%20label%3A%20'Option%20'%20%2B%20i%2C%0D%0A%20%20%20%20value%3A%20i%2C%0D%0A%20%20%20%20disabled%3A%20i%20%25%205%20%3D%3D%3D%200%0D%0A%20%20%7D))%0D%0A%7D%0D%0A%0D%0Afunction%20createValues%20()%20%7B%0D%0A%20%20return%20Array.from(%7B%20length%3A%2050%20%7D).map((v%2C%20i)%20%3D%3E%20i)%0D%0A%7D%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20options%3A%20createOptions()%2C%0D%0A%20%20%20%20%20%20value%3A%20ref(createValues())%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-legacy-transfer%0D%0A%20%20%20%20ref%3D%22transfer%22%0D%0A%20%20%20%20v-model%3Avalue%3D%22value%22%0D%0A%20%20%20%20%3Aoptions%3D%22options%22%0D%0A%20%20%20%20virtual-scroll%0D%0A%20%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Afunction%20createOptions()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%2042e3%20%7D).map((v%2C%20i)%20%3D%3E%20(%7B%0A%20%20%20%20label%3A%20%22Option%20%22%20%2B%20i%2C%0A%20%20%20%20value%3A%20i%2C%0A%20%20%20%20disabled%3A%20i%20%25%205%20%3D%3D%3D%200%0A%20%20%7D))%3B%0A%7D%0A%0Afunction%20createValues()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%2050%20%7D).map((v%2C%20i)%20%3D%3E%20i)%3B%0A%7D%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20options%3A%20createOptions()%2C%0A%20%20%20%20%20%20value%3A%20ref(createValues())%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[o(" 一大堆数据 ")]),content:t(()=>[n(d,null,{default:t(()=>[o("如果你有一大堆数据，你可能想让它快一点。设定 "),n(c,{code:""},{default:t(()=>[o("virtual-scroll")]),_:1}),o(" 来使用一个飞快的穿梭框（会关掉那个傻乎乎的动画）。")]),_:1})]),demo:t(()=>[e("div",X,[n(D,{ref:"transfer",value:r.value,"onUpdate:value":l[0]||(l[0]=f=>r.value=f),options:r.options,"virtual-scroll":""},null,8,["value","options"])])]),_:1})}const Z=v(W,[["render",Y]]);function e0(){return Array.from({length:100}).map((r,l)=>({label:"Option "+l,value:l,disabled:l%5===0}))}function t0(){return Array.from({length:50}).map((r,l)=>l)}const n0=h({setup(){return{options:e0(),value:g(t0())}}}),o0={class:"demo-card__view"};function l0(r,l,m,s,C,B){const c=a("n-p"),d=a("n-legacy-transfer"),D=a("n-space"),p=a("component-demo");return i(),A(p,{"demo-file-name":"size.vue","relative-url":"D:/Code/naive-ui/src/legacy-transfer/demos/zhCN/size.demo.vue",title:"尺寸","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-legacy-transfer%0D%0A%20%20%20%20%20%20ref%3D%22transfer%22%0D%0A%20%20%20%20%20%20v-model%3Avalue%3D%22value%22%0D%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0D%0A%20%20%20%20%20%20size%3D%22small%22%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%20%20%3Cn-legacy-transfer%0D%0A%20%20%20%20%20%20ref%3D%22transfer%22%0D%0A%20%20%20%20%20%20v-model%3Avalue%3D%22value%22%0D%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0D%0A%20%20%20%20%20%20size%3D%22large%22%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Afunction%20createOptions%20()%20%7B%0D%0A%20%20return%20Array.from(%7B%20length%3A%20100%20%7D).map((v%2C%20i)%20%3D%3E%20(%7B%0D%0A%20%20%20%20label%3A%20'Option%20'%20%2B%20i%2C%0D%0A%20%20%20%20value%3A%20i%2C%0D%0A%20%20%20%20disabled%3A%20i%20%25%205%20%3D%3D%3D%200%0D%0A%20%20%7D))%0D%0A%7D%0D%0A%0D%0Afunction%20createValues%20()%20%7B%0D%0A%20%20return%20Array.from(%7B%20length%3A%2050%20%7D).map((v%2C%20i)%20%3D%3E%20i)%0D%0A%7D%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20options%3A%20createOptions()%2C%0D%0A%20%20%20%20%20%20value%3A%20ref(createValues())%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-legacy-transfer%0D%0A%20%20%20%20%20%20ref%3D%22transfer%22%0D%0A%20%20%20%20%20%20v-model%3Avalue%3D%22value%22%0D%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0D%0A%20%20%20%20%20%20size%3D%22small%22%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%20%20%3Cn-legacy-transfer%0D%0A%20%20%20%20%20%20ref%3D%22transfer%22%0D%0A%20%20%20%20%20%20v-model%3Avalue%3D%22value%22%0D%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0D%0A%20%20%20%20%20%20size%3D%22large%22%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Afunction%20createOptions()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%20100%20%7D).map((v%2C%20i)%20%3D%3E%20(%7B%0A%20%20%20%20label%3A%20%22Option%20%22%20%2B%20i%2C%0A%20%20%20%20value%3A%20i%2C%0A%20%20%20%20disabled%3A%20i%20%25%205%20%3D%3D%3D%200%0A%20%20%7D))%3B%0A%7D%0A%0Afunction%20createValues()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%2050%20%7D).map((v%2C%20i)%20%3D%3E%20i)%3B%0A%7D%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20options%3A%20createOptions()%2C%0A%20%20%20%20%20%20value%3A%20ref(createValues())%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[o(" 尺寸 ")]),content:t(()=>[n(c,null,{default:t(()=>[o("太小太大好像都不怎么好看。")]),_:1})]),demo:t(()=>[e("div",o0,[n(D,{vertical:""},{default:t(()=>[n(d,{ref:"transfer",value:r.value,"onUpdate:value":l[0]||(l[0]=f=>r.value=f),options:r.options,size:"small"},null,8,["value","options"]),n(d,{ref:"transfer",value:r.value,"onUpdate:value":l[1]||(l[1]=f=>r.value=f),options:r.options,size:"large"},null,8,["value","options"])]),_:1})])]),_:1})}const r0=v(n0,[["render",l0]]);function a0(){return Array.from({length:100}).map((r,l)=>({label:"Option "+l,value:l,disabled:l%5===0}))}function u0(){return Array.from({length:50}).map((r,l)=>l)}const s0=h({setup(){return{options:a0(),value:g(u0())}}}),i0={class:"demo-card__view"};function d0(r,l,m,s,C,B){const c=a("n-legacy-transfer"),d=a("component-demo");return i(),A(d,{"demo-file-name":"filterable.vue","relative-url":"D:/Code/naive-ui/src/legacy-transfer/demos/zhCN/filterable.demo.vue",title:"可过滤","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-legacy-transfer%0D%0A%20%20%20%20ref%3D%22transfer%22%0D%0A%20%20%20%20v-model%3Avalue%3D%22value%22%0D%0A%20%20%20%20virtual-scroll%0D%0A%20%20%20%20%3Aoptions%3D%22options%22%0D%0A%20%20%20%20filterable%0D%0A%20%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Afunction%20createOptions%20()%20%7B%0D%0A%20%20return%20Array.from(%7B%20length%3A%20100%20%7D).map((v%2C%20i)%20%3D%3E%20(%7B%0D%0A%20%20%20%20label%3A%20'Option%20'%20%2B%20i%2C%0D%0A%20%20%20%20value%3A%20i%2C%0D%0A%20%20%20%20disabled%3A%20i%20%25%205%20%3D%3D%3D%200%0D%0A%20%20%7D))%0D%0A%7D%0D%0A%0D%0Afunction%20createValues%20()%20%7B%0D%0A%20%20return%20Array.from(%7B%20length%3A%2050%20%7D).map((v%2C%20i)%20%3D%3E%20i)%0D%0A%7D%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20options%3A%20createOptions()%2C%0D%0A%20%20%20%20%20%20value%3A%20ref(createValues())%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-legacy-transfer%0D%0A%20%20%20%20ref%3D%22transfer%22%0D%0A%20%20%20%20v-model%3Avalue%3D%22value%22%0D%0A%20%20%20%20virtual-scroll%0D%0A%20%20%20%20%3Aoptions%3D%22options%22%0D%0A%20%20%20%20filterable%0D%0A%20%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Afunction%20createOptions()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%20100%20%7D).map((v%2C%20i)%20%3D%3E%20(%7B%0A%20%20%20%20label%3A%20%22Option%20%22%20%2B%20i%2C%0A%20%20%20%20value%3A%20i%2C%0A%20%20%20%20disabled%3A%20i%20%25%205%20%3D%3D%3D%200%0A%20%20%7D))%3B%0A%7D%0A%0Afunction%20createValues()%20%7B%0A%20%20return%20Array.from(%7B%20length%3A%2050%20%7D).map((v%2C%20i)%20%3D%3E%20i)%3B%0A%7D%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20options%3A%20createOptions()%2C%0A%20%20%20%20%20%20value%3A%20ref(createValues())%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[o(" 可过滤 ")]),content:t(()=>[]),demo:t(()=>[e("div",i0,[n(c,{ref:"transfer",value:r.value,"onUpdate:value":l[0]||(l[0]=D=>r.value=D),"virtual-scroll":"",options:r.options,filterable:""},null,8,["value","options"])])]),_:1})}const A0=v(s0,[["render",d0]]),c0={components:{basicVueDemo:J,largeDataVueDemo:Z,sizeVueDemo:r0,filterableVueDemo:A0},setup(){const r=S(),l=j(()=>!r.value),m=r;return{showAnchor:l,displayMode:I(),wrapperStyle:b(()=>m.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:b(()=>l.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/legacy-transfer/demos/zhCN/index.demo-entry.md"}}},D0={class:"md-table-wrapper"},p0=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"类型"),e("th",null,"默认值"),e("th",null,"说明")])],-1),f0=e("td",null,"default-value",-1),m0=e("td",null,"非受控模式下的默认值",-1),_0=e("td",null,"disabled",-1),v0=e("td",null,"是否禁用",-1),C0=e("td",null,"filterable",-1),B0=e("td",null,"是否可过滤",-1),h0=e("td",null,"filter",-1),g0=e("td",null,"一个简单的标签字符串匹配函数",-1),E0=e("td",null,"搜索时使用的过滤函数",-1),y0=e("td",null,"options",-1),b0=e("td",null,"配置选项内容，详情见 TransferOption Type",-1),F0=e("td",null,"size",-1),V0=e("td",null,"尺寸",-1),O0=e("td",null,"source-filter-placeholder",-1),x0=e("td",null,"源项搜索框中的占位符",-1),$0=e("td",null,"source-title",-1),w0=e("td",null,"源项标题",-1),z0=e("td",null,"target-filter-placeholder",-1),k0=e("td",null,"目标项搜索框中的占位符",-1),N0=e("td",null,"target-title",-1),T0=e("td",null,"目标项标题",-1),M0=e("td",null,"value",-1),P0=e("td",null,"受控模式下的值",-1),S0=e("td",null,"on-update:value",-1),j0=e("td",null,"值发生改变时的回调",-1),I0=e("td",null,"virtual-scroll",-1),U0=e("td",null,"是否启用虚拟滚动",-1),R0={class:"md-table-wrapper"},L0=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"类型"),e("th",null,"说明")])],-1),q0=e("td",null,"label",-1),G0=e("td",null,"选项中用以页面显示的名称",-1),H0=e("td",null,"value",-1),J0=e("td",null,"disabled",-1),K0=e("td",null,"是否禁用这个选项",-1),Q0={key:0,style:{width:"192px"}};function W0(r,l,m,s,C,B){const c=a("edit-on-github-header"),d=a("n-a"),D=a("router-link"),p=a("n-alert"),f=a("n-p"),E=a("n-h2"),O=a("basicVueDemo"),x=a("largeDataVueDemo"),$=a("sizeVueDemo"),w=a("filterableVueDemo"),z=a("component-demos"),k=a("n-h3"),u=a("n-text"),y=a("n-table"),N=a("n-h4"),_=a("n-anchor-link"),T=a("n-anchor");return i(),F("div",{class:"doc",style:V(s.wrapperStyle)},[e("div",{style:V(s.contentStyle)},[n(c,{"relative-url":"D:/Code/naive-ui/src/legacy-transfer/demos/zhCN/index.demo-entry.md",text:"旧版穿梭框 Legacy Transfer"}),n(p,{title:"警告",type:"warning",bordered:!1},{default:t(()=>[o(" 这个穿梭框组件已经被废弃，不会迭代任何新的功能，并将在下一个大版本中彻底移除。推荐使用新的 "),n(D,{to:"transfer",custom:""},{default:t(({href:M,navigate:P})=>[n(d,{href:M,onClick:P},{default:t(()=>[o("穿梭框")]),_:2},1032,["href","onClick"])]),_:1}),o("。 ")]),_:1}),n(f,null,{default:t(()=>[o("左、右、左、右...像我这么无聊的人能玩一整天。")]),_:1}),n(E,{id:"演示"},{default:t(()=>[o("演示")]),_:1}),n(z,{span:1},{default:t(()=>[n(O),n(x),n($),n(w)]),_:1}),n(E,{id:"API"},{default:t(()=>[o("API")]),_:1}),n(k,{id:"Transfer-Props"},{default:t(()=>[o("Transfer Props")]),_:1}),e("div",D0,[n(y,{"single-column":"",class:"md-table"},{default:t(()=>[p0,e("tbody",null,[e("tr",null,[f0,e("td",null,[n(u,{code:""},{default:t(()=>[o("Array<string | number> | null")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("null")]),_:1})]),m0]),e("tr",null,[_0,e("td",null,[n(u,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("true")]),_:1})]),v0]),e("tr",null,[C0,e("td",null,[n(u,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("false")]),_:1})]),B0]),e("tr",null,[h0,e("td",null,[n(u,{code:""},{default:t(()=>[o("(pattern: string, option: TransferOption, from: 'source' | 'target') => boolean")]),_:1})]),g0,E0]),e("tr",null,[y0,e("td",null,[n(u,{code:""},{default:t(()=>[o("TransferOption[]")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("[]")]),_:1})]),b0]),e("tr",null,[F0,e("td",null,[n(u,{code:""},{default:t(()=>[o("'small' | 'medium' | 'large'")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("'medium'")]),_:1})]),V0]),e("tr",null,[O0,e("td",null,[n(u,{code:""},{default:t(()=>[o("string")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("undefined")]),_:1})]),x0]),e("tr",null,[$0,e("td",null,[n(u,{code:""},{default:t(()=>[o("string")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("'源项'")]),_:1})]),w0]),e("tr",null,[z0,e("td",null,[n(u,{code:""},{default:t(()=>[o("string")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("undefined")]),_:1})]),k0]),e("tr",null,[N0,e("td",null,[n(u,{code:""},{default:t(()=>[o("string")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("'目标项'")]),_:1})]),T0]),e("tr",null,[M0,e("td",null,[n(u,{code:""},{default:t(()=>[o("Array<string | number> | null")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("undefined")]),_:1})]),P0]),e("tr",null,[S0,e("td",null,[n(u,{code:""},{default:t(()=>[o("(value: Array<string | number>) => void")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("undefined")]),_:1})]),j0]),e("tr",null,[I0,e("td",null,[n(u,{code:""},{default:t(()=>[o("boolean")]),_:1})]),e("td",null,[n(u,{code:""},{default:t(()=>[o("false")]),_:1})]),U0])])]),_:1})]),n(N,{id:"TransferOption-Type"},{default:t(()=>[o("TransferOption Type")]),_:1}),e("div",R0,[n(y,{"single-column":"",class:"md-table"},{default:t(()=>[L0,e("tbody",null,[e("tr",null,[q0,e("td",null,[n(u,{code:""},{default:t(()=>[o("string")]),_:1})]),G0]),e("tr",null,[H0,e("td",null,[n(u,{code:""},{default:t(()=>[o("string | number")]),_:1})]),e("td",null,[o("所有选项中唯一的 "),n(u,{code:""},{default:t(()=>[o("value")]),_:1})])]),e("tr",null,[J0,e("td",null,[n(u,{code:""},{default:t(()=>[o("boolean")]),_:1})]),K0])])]),_:1})])],4),s.showAnchor?(i(),F("div",Q0,[n(T,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(s.displayMode,i(),A(_,{key:0,title:"基础用法\r",href:"#basic.vue"})),(s.displayMode,i(),A(_,{key:1,title:"一大堆数据\r",href:"#large-data.vue"})),(s.displayMode,i(),A(_,{key:2,title:"尺寸\r",href:"#size.vue"})),(s.displayMode,i(),A(_,{key:3,title:"可过滤\r",href:"#filterable.vue"})),(s.displayMode,i(),A(_,{key:4,title:"API",href:"#API"})),(s.displayMode,i(),A(_,{key:5,title:"Transfer Props",href:"#Transfer-Props"}))]),_:1})])):U("",!0)],4)}const Y0=v(c0,[["render",W0]]);export{Y0 as default};
