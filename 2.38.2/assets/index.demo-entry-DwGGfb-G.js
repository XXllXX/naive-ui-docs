import{_ as m,r as d,o as r,i as _,w as t,g as n,f as o,e,x as B,y as k,j as $,A as R,l as H,d as g,Y as S,u as K,a as P,b as q,c as w,n as V,h as W}from"./index-DxZkTPDs.js";const Y={},J={class:"demo-card__view"};function G(s,u){const c=d("n-p"),a=d("n-card"),i=d("component-demo");return r(),_(i,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/card/demos/enUS/basic.demo.vue",title:"Basic","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-card%20title%3D%22Card%22%3E%0D%0A%20%20%20%20Card%20Content%0D%0A%20%20%3C%2Fn-card%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20scoped%3E%0D%0A.n-card%20%7B%0D%0A%20%20max-width%3A%20300px%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E","language-type":"js"},{title:t(()=>[n(" Basic ")]),content:t(()=>[o(c,null,{default:t(()=>[n("A basic card.")]),_:1})]),demo:t(()=>[e("div",J,[o(a,{title:"Card"},{default:t(()=>[n(" Card Content ")]),_:1})])]),_:1})}const Q=m(Y,[["render",G],["__scopeId","data-v-48e4963c"]]),X={},Z={class:"demo-card__view"};function ee(s,u){const c=d("n-text"),a=d("n-p"),i=d("n-card"),C=d("n-space"),D=d("component-demo");return r(),_(D,{"demo-file-name":"size.vue","relative-url":"D:/Code/naive-ui/src/card/demos/enUS/size.demo.vue",title:"Size","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-card%20title%3D%22Small%20Card%22%20size%3D%22small%22%3E%0D%0A%20%20%20%20%20%20Card%20Content%0D%0A%20%20%20%20%3C%2Fn-card%3E%0D%0A%20%20%20%20%3Cn-card%20title%3D%22Medium%20Card%22%20size%3D%22medium%22%3E%0D%0A%20%20%20%20%20%20Card%20Content%0D%0A%20%20%20%20%3C%2Fn-card%3E%0D%0A%20%20%20%20%3Cn-card%20title%3D%22Large%20Card%22%20size%3D%22large%22%3E%0D%0A%20%20%20%20%20%20Card%20Content%0D%0A%20%20%20%20%3C%2Fn-card%3E%0D%0A%20%20%20%20%3Cn-card%20title%3D%22Huge%20Card%22%20size%3D%22huge%22%3E%0D%0A%20%20%20%20%20%20Card%20Content%0D%0A%20%20%20%20%3C%2Fn-card%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[n(" Size ")]),content:t(()=>[o(a,null,{default:t(()=>[n("Card has "),o(c,{code:""},{default:t(()=>[n("small")]),_:1}),n(", "),o(c,{code:""},{default:t(()=>[n("medium")]),_:1}),n(", "),o(c,{code:""},{default:t(()=>[n("large")]),_:1}),n(", "),o(c,{code:""},{default:t(()=>[n("huge")]),_:1}),n(" sizes.")]),_:1})]),demo:t(()=>[e("div",Z,[o(C,{vertical:""},{default:t(()=>[o(i,{title:"Small Card",size:"small"},{default:t(()=>[n(" Card Content ")]),_:1}),o(i,{title:"Medium Card",size:"medium"},{default:t(()=>[n(" Card Content ")]),_:1}),o(i,{title:"Large Card",size:"large"},{default:t(()=>[n(" Card Content ")]),_:1}),o(i,{title:"Huge Card",size:"huge"},{default:t(()=>[n(" Card Content ")]),_:1})]),_:1})])]),_:1})}const te=m(X,[["render",ee]]),ne={},oe=s=>(B("data-v-5f197407"),s=s(),k(),s),de={class:"demo-card__view"},le=oe(()=>e("img",{src:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"},null,-1));function ae(s,u){const c=d("n-p"),a=d("n-card"),i=d("component-demo");return r(),_(i,{"demo-file-name":"cover.vue","relative-url":"D:/Code/naive-ui/src/card/demos/enUS/cover.demo.vue",title:"Cover","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-card%20title%3D%22Card%20with%20Cover%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%23cover%3E%0D%0A%20%20%20%20%20%20%3Cimg%20src%3D%22https%3A%2F%2F07akioni.oss-cn-beijing.aliyuncs.com%2F07akioni.jpeg%22%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20Card%20Content%0D%0A%20%20%3C%2Fn-card%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20scoped%3E%0D%0A.n-card%20%7B%0D%0A%20%20max-width%3A%20300px%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E","language-type":"js"},{title:t(()=>[n(" Cover ")]),content:t(()=>[o(c,null,{default:t(()=>[n("Card can have a cover.")]),_:1})]),demo:t(()=>[e("div",de,[o(a,{title:"Card with Cover"},{cover:t(()=>[le]),default:t(()=>[n(" Card Content ")]),_:1})])]),_:1})}const ce=m(ne,[["render",ae],["__scopeId","data-v-5f197407"]]),se={},re={class:"demo-card__view"};function _e(s,u){const c=d("n-card"),a=d("component-demo");return r(),_(a,{"demo-file-name":"hoverable.vue","relative-url":"D:/Code/naive-ui/src/card/demos/enUS/hoverable.demo.vue",title:"Hoverable","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-card%20title%3D%22Card%22%20hoverable%3E%0D%0A%20%20%20%20Card%20Content%0D%0A%20%20%3C%2Fn-card%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20scoped%3E%0D%0A.n-card%20%7B%0D%0A%20%20max-width%3A%20300px%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E","language-type":"js"},{title:t(()=>[n(" Hoverable ")]),content:t(()=>[]),demo:t(()=>[e("div",re,[o(c,{title:"Card",hoverable:""},{default:t(()=>[n(" Card Content ")]),_:1})])]),_:1})}const ie=m(se,[["render",_e],["__scopeId","data-v-578a5240"]]),ue={},me={class:"demo-card__view"};function pe(s,u){const c=d("n-p"),a=d("n-card"),i=d("component-demo");return r(),_(i,{"demo-file-name":"slots.vue","relative-url":"D:/Code/naive-ui/src/card/demos/enUS/slots.demo.vue",title:"Slots","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-card%20title%3D%22Card%20Slots%20Demo%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%23header-extra%3E%0D%0A%20%20%20%20%20%20%23header-extra%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20Card%20Content%0D%0A%20%20%20%20%3Ctemplate%20%23footer%3E%0D%0A%20%20%20%20%20%20%23footer%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20%23action%3E%0D%0A%20%20%20%20%20%20%23action%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-card%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[n(" Slots ")]),content:t(()=>[o(c,null,{default:t(()=>[n("Card has many slots to help you write less code.")]),_:1})]),demo:t(()=>[e("div",me,[o(a,{title:"Card Slots Demo"},{"header-extra":t(()=>[n(" #header-extra ")]),footer:t(()=>[n(" #footer ")]),action:t(()=>[n(" #action ")]),default:t(()=>[n(" Card Content ")]),_:1})])]),_:1})}const De=m(ue,[["render",pe]]),Ce={},he={class:"demo-card__view"};function fe(s,u){const c=d("n-p"),a=d("n-card"),i=d("component-demo");return r(),_(i,{"demo-file-name":"border.vue","relative-url":"D:/Code/naive-ui/src/card/demos/enUS/border.demo.vue",title:"Border","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-card%20%3Abordered%3D%22false%22%20title%3D%22Borderless%20Card%22%3E%0D%0A%20%20%20%20Card%20Content%0D%0A%20%20%3C%2Fn-card%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[n(" Border ")]),content:t(()=>[o(c,null,{default:t(()=>[n("Card can be used without border.")]),_:1})]),demo:t(()=>[e("div",he,[o(a,{bordered:!1,title:"Borderless Card"},{default:t(()=>[n(" Card Content ")]),_:1})])]),_:1})}const Ae=m(Ce,[["render",fe]]),ge={},ve={class:"demo-card__view"};function Ee(s,u){const c=d("n-text"),a=d("n-p"),i=d("n-card"),C=d("component-demo");return r(),_(C,{"demo-file-name":"segment.vue","relative-url":"D:/Code/naive-ui/src/card/demos/enUS/segment.demo.vue",title:"Segmented","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-card%0D%0A%20%20%20%20title%3D%22Card%20Segmented%20Demo%22%0D%0A%20%20%20%20%3Asegmented%3D%22%7B%0D%0A%20%20%20%20%20%20content%3A%20true%2C%0D%0A%20%20%20%20%20%20footer%3A%20'soft'%0D%0A%20%20%20%20%7D%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Ctemplate%20%23header-extra%3E%0D%0A%20%20%20%20%20%20%23header-extra%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20Card%20Content%0D%0A%20%20%20%20%3Ctemplate%20%23footer%3E%0D%0A%20%20%20%20%20%20%23footer%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20%23action%3E%0D%0A%20%20%20%20%20%20%23action%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-card%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[n(" Segmented ")]),content:t(()=>[o(a,null,{default:t(()=>[o(c,{code:""},{default:t(()=>[n("content")]),_:1}),n(", "),o(c,{code:""},{default:t(()=>[n("footer")]),_:1}),n(" can be segmented or "),o(c,{code:""},{default:t(()=>[n("soft")]),_:1}),n(" segmented. "),o(c,{code:""},{default:t(()=>[n("action")]),_:1}),n(" can be segmented. Segment border will appear at the top of segmented parts.")]),_:1})]),demo:t(()=>[e("div",ve,[o(i,{title:"Card Segmented Demo",segmented:{content:!0,footer:"soft"}},{"header-extra":t(()=>[n(" #header-extra ")]),footer:t(()=>[n(" #footer ")]),action:t(()=>[n(" #action ")]),default:t(()=>[n(" Card Content ")]),_:1})])]),_:1})}const be=m(ge,[["render",Ee]]),ye=$({setup(){const s=R();return{handleClose(){s.info("Card Close")}}}}),xe={class:"demo-card__view"};function Fe(s,u,c,a,i,C){const D=d("n-p"),h=d("n-card"),f=d("component-demo");return r(),_(f,{"demo-file-name":"closable.vue","relative-url":"D:/Code/naive-ui/src/card/demos/enUS/closable.demo.vue",title:"Closable","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-card%20title%3D%22Card%22%20closable%20%40close%3D%22handleClose%22%3E%0D%0A%20%20%20%20Card%20Content%0D%0A%20%20%3C%2Fn-card%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20useMessage%20%7D%20from%20'naive-ui'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20message%20%3D%20useMessage()%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20handleClose%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20message.info('Card%20Close')%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0D%0A.n-card%20%7B%0D%0A%20%20max-width%3A%20300px%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-card%20title%3D%22Card%22%20closable%20%40close%3D%22handleClose%22%3E%0D%0A%20%20%20%20Card%20Content%0D%0A%20%20%3C%2Fn-card%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20useMessage%20%7D%20from%20%22naive-ui%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20handleClose()%20%7B%0A%20%20%20%20%20%20%20%20message.info(%22Card%20Close%22)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0D%0A.n-card%20%7B%0D%0A%20%20max-width%3A%20300px%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E","language-type":"ts"},{title:t(()=>[n(" Closable ")]),content:t(()=>[o(D,null,{default:t(()=>[n("You may need this when using it in a modal.")]),_:1})]),demo:t(()=>[e("div",xe,[o(h,{title:"Card",closable:"",onClose:s.handleClose},{default:t(()=>[n(" Card Content ")]),_:1},8,["onClose"])])]),_:1})}const Se=m(ye,[["render",Fe],["__scopeId","data-v-0edec9e1"]]),we={},Ve={class:"demo-card__view"};function Be(s,u){const c=d("n-p"),a=d("n-card"),i=d("component-demo");return r(),_(i,{"demo-file-name":"no-title.vue","relative-url":"D:/Code/naive-ui/src/card/demos/enUS/no-title.demo.vue",title:"No title","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-card%3ENo%20title%3C%2Fn-card%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[n(" No title ")]),content:t(()=>[o(c,null,{default:t(()=>[n("Nobody said a card must have a title.")]),_:1})]),demo:t(()=>[e("div",Ve,[o(a,null,{default:t(()=>[n("No title")]),_:1})])]),_:1})}const ke=m(we,[["render",Be]]),$e=$({setup(){return{loading:H(!0)}}}),Te={class:"demo-card__view"},Ne=e("br",null,null,-1),je=e("br",null,null,-1),Oe=e("br",null,null,-1),Le=e("br",null,null,-1),Ie=e("br",null,null,-1);function ze(s,u,c,a,i,C){const D=d("n-text"),h=d("n-p"),f=d("n-switch"),A=d("n-skeleton"),v=d("n-card"),E=d("n-space"),b=d("component-demo");return r(),_(b,{"demo-file-name":"loading.vue","relative-url":"D:/Code/naive-ui/src/card/demos/enUS/loading.demo.vue",title:"Loading","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22loading%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-card%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23header%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-skeleton%20v-if%3D%22loading%22%20text%20width%3D%2260%25%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20v-else%3E%0D%0A%20%20%20%20%20%20%20%20%20%20Lorem%20Ipsum%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3Cn-skeleton%20v-if%3D%22loading%22%20text%20%3Arepeat%3D%226%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20v-else%3E%0D%0A%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%3Cbr%3E%0D%0A%20%20%20%20%20%20%20%20consectetur%20adipiscing%20elit%2C%3Cbr%3E%0D%0A%20%20%20%20%20%20%20%20sed%20do%20eiusmod%20tempor%20incididunt%3Cbr%3E%0D%0A%20%20%20%20%20%20%20%20ut%20labore%20et%20dolore%20magna%20aliqua.%3Cbr%3E%0D%0A%20%20%20%20%20%20%20%20Ut%20enim%20ad%20minim%20veniam%2C%3Cbr%3E%0D%0A%20%20%20%20%20%20%20%20quis%20nostrud%20exercitation%20ullamco%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-card%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20loading%3A%20ref(true)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%20vertical%3E%0D%0A%20%20%20%20%3Cn-switch%20v-model%3Avalue%3D%22loading%22%20%2F%3E%0D%0A%20%20%20%20%3Cn-card%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23header%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-skeleton%20v-if%3D%22loading%22%20text%20width%3D%2260%25%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20v-else%3E%0D%0A%20%20%20%20%20%20%20%20%20%20Lorem%20Ipsum%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3Cn-skeleton%20v-if%3D%22loading%22%20text%20%3Arepeat%3D%226%22%20%2F%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20v-else%3E%0D%0A%20%20%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%3Cbr%3E%0D%0A%20%20%20%20%20%20%20%20consectetur%20adipiscing%20elit%2C%3Cbr%3E%0D%0A%20%20%20%20%20%20%20%20sed%20do%20eiusmod%20tempor%20incididunt%3Cbr%3E%0D%0A%20%20%20%20%20%20%20%20ut%20labore%20et%20dolore%20magna%20aliqua.%3Cbr%3E%0D%0A%20%20%20%20%20%20%20%20Ut%20enim%20ad%20minim%20veniam%2C%3Cbr%3E%0D%0A%20%20%20%20%20%20%20%20quis%20nostrud%20exercitation%20ullamco%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-card%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20loading%3A%20ref(true)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[n(" Loading ")]),content:t(()=>[o(h,null,{default:t(()=>[n("Use "),o(D,{code:""},{default:t(()=>[n("n-skeleton")]),_:1}),n(" to simulate loading effect.")]),_:1})]),demo:t(()=>[e("div",Te,[o(E,{vertical:""},{default:t(()=>[o(f,{value:s.loading,"onUpdate:value":u[0]||(u[0]=y=>s.loading=y)},null,8,["value"]),o(v,null,{header:t(()=>[s.loading?(r(),_(A,{key:0,text:"",width:"60%"})):(r(),g(S,{key:1},[n(" Lorem Ipsum ")],64))]),default:t(()=>[s.loading?(r(),_(A,{key:0,text:"",repeat:6})):(r(),g(S,{key:1},[n(" Lorem ipsum dolor sit amet,"),Ne,n(" consectetur adipiscing elit,"),je,n(" sed do eiusmod tempor incididunt"),Oe,n(" ut labore et dolore magna aliqua."),Le,n(" Ut enim ad minim veniam,"),Ie,n(" quis nostrud exercitation ullamco ")],64))]),_:1})]),_:1})])]),_:1})}const Me=m($e,[["render",ze]]),Ue={},Re={class:"demo-card__view"};function He(s,u){const c=d("n-text"),a=d("n-p"),i=d("n-tab-pane"),C=d("n-tabs"),D=d("n-card"),h=d("component-demo");return r(),_(h,{"demo-file-name":"custom-style.vue","relative-url":"D:/Code/naive-ui/src/card/demos/enUS/custom-style.demo.vue",title:"Custom","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-card%20content-style%3D%22padding%3A%200%3B%22%3E%0D%0A%20%20%20%20%3Cn-tabs%0D%0A%20%20%20%20%20%20type%3D%22line%22%0D%0A%20%20%20%20%20%20size%3D%22large%22%0D%0A%20%20%20%20%20%20%3Atabs-padding%3D%2220%22%0D%0A%20%20%20%20%20%20pane-style%3D%22padding%3A%2020px%3B%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%3Cn-tab-pane%20name%3D%22PARKLIFE%22%3E%0D%0A%20%20%20%20%20%20%20%20PARKLIFE%0D%0A%20%20%20%20%20%20%3C%2Fn-tab-pane%3E%0D%0A%20%20%20%20%20%20%3Cn-tab-pane%20name%3D%22ROCKLIFE%22%3E%0D%0A%20%20%20%20%20%20%20%20ROCKLIFE%0D%0A%20%20%20%20%20%20%3C%2Fn-tab-pane%3E%0D%0A%20%20%20%20%3C%2Fn-tabs%3E%0D%0A%20%20%3C%2Fn-card%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[n(" Custom ")]),content:t(()=>[o(a,null,{default:t(()=>[n("Card provides "),o(c,{code:""},{default:t(()=>[n("content-style")]),_:1}),n(", "),o(c,{code:""},{default:t(()=>[n("header-style")]),_:1}),n(", "),o(c,{code:""},{default:t(()=>[n("footer-style")]),_:1}),n(" to help you customize style. For example you want an card with no padding to put whatever you want.")]),_:1})]),demo:t(()=>[e("div",Re,[o(D,{"content-style":"padding: 0;"},{default:t(()=>[o(C,{type:"line",size:"large","tabs-padding":20,"pane-style":"padding: 20px;"},{default:t(()=>[o(i,{name:"PARKLIFE"},{default:t(()=>[n(" PARKLIFE ")]),_:1}),o(i,{name:"ROCKLIFE"},{default:t(()=>[n(" ROCKLIFE ")]),_:1})]),_:1})]),_:1})])]),_:1})}const Ke=m(Ue,[["render",He]]),Pe={},qe=s=>(B("data-v-e1375c3e"),s=s(),k(),s),We={class:"demo-card__view"},Ye=qe(()=>e("br",null,null,-1));function Je(s,u){const c=d("n-p"),a=d("n-card"),i=d("component-demo");return r(),_(i,{"demo-file-name":"embedded.vue","relative-url":"D:/Code/naive-ui/src/card/demos/enUS/embedded.demo.vue",title:"Embedded effect","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-card%20title%3D%22%F0%9F%8E%B8%20Rock%20N'%20Roll%20Star%22%20embedded%20%3Abordered%3D%22false%22%3E%0D%0A%20%20%20%20Tonight%20I'm%20a%20rock%20'n'%20roll%20star%0D%0A%20%20%20%20%3Cbr%3E%0D%0A%20%20%20%20Tonight%20I'm%20a%20rock%20'n'%20roll%20star%0D%0A%20%20%3C%2Fn-card%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20scoped%3E%0D%0A.n-card%20%7B%0D%0A%20%20max-width%3A%20300px%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E","language-type":"js"},{title:t(()=>[n(" Embedded effect ")]),content:t(()=>[o(c,null,{default:t(()=>[n("In light mode, sometimes you may need to make background a bit darker to distinguish card from white background.")]),_:1})]),demo:t(()=>[e("div",We,[o(a,{title:"🎸 Rock N' Roll Star",embedded:"",bordered:!1},{default:t(()=>[n(" Tonight I'm a rock 'n' roll star "),Ye,n(" Tonight I'm a rock 'n' roll star ")]),_:1})])]),_:1})}const Ge=m(Pe,[["render",Je],["__scopeId","data-v-e1375c3e"]]),Qe={components:{basicVueDemo:Q,sizeVueDemo:te,coverVueDemo:ce,hoverableVueDemo:ie,slotsVueDemo:De,borderVueDemo:Ae,segmentVueDemo:be,closableVueDemo:Se,noTitleVueDemo:ke,loadingVueDemo:Me,customStyleVueDemo:Ke,embeddedVueDemo:Ge},setup(){const s=K(),u=P(()=>!s.value),c=s;return{showAnchor:u,displayMode:q(),wrapperStyle:w(()=>c.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:w(()=>u.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/card/demos/enUS/index.demo-entry.md"}}},Xe={class:"md-table-wrapper"},Ze=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Description"),e("th",null,"Version")])],-1),et=e("td",null,"action",-1),tt=e("td",null,"Operating area content, must be a render function.",-1),nt=e("td",null,"2.38.2",-1),ot=e("td",null,"bordered",-1),dt=e("td",null,"Whether to show the card border.",-1),lt=e("td",null,null,-1),at=e("td",null,"closable",-1),ct=e("td",null,"Is it allowed to close.",-1),st=e("td",null,null,-1),rt=e("td",null,"content",-1),_t=e("td",null,"Card content, can be a render function.",-1),it=e("td",null,"2.38.2",-1),ut=e("td",null,"content-class",-1),mt=e("td",null,"The class of the card content area.",-1),pt=e("td",null,"2.36.0",-1),Dt=e("td",null,"content-style",-1),Ct=e("td",null,"The style of the card content area.",-1),ht=e("td",null,null,-1),ft=e("td",null,"cover",-1),At=e("td",null,"Cover content, must be a render function.",-1),gt=e("td",null,"2.38.2",-1),vt=e("td",null,"embedded",-1),Et=e("td",null,"Use a darker background color to show the embedding effect (only for bright themes)",-1),bt=e("td",null,null,-1),yt=e("td",null,"footer",-1),xt=e("td",null,"Footer content, must be a render function.",-1),Ft=e("td",null,"2.38.2",-1),St=e("td",null,"footer-class",-1),wt=e("td",null,"The class of the bottom area of the card.",-1),Vt=e("td",null,"2.36.0",-1),Bt=e("td",null,"footer-style",-1),kt=e("td",null,"The style of the bottom area of the card.",-1),$t=e("td",null,null,-1),Tt=e("td",null,"header-class",-1),Nt=e("td",null,"The class of the card head area.",-1),jt=e("td",null,"2.36.0",-1),Ot=e("td",null,"header-style",-1),Lt=e("td",null,"The style of the card head area.",-1),It=e("td",null,null,-1),zt=e("td",null,"header-extra",-1),Mt=e("td",null,"Header extra content, must be a render function.",-1),Ut=e("td",null,"2.38.2",-1),Rt=e("td",null,"header-extra-class",-1),Ht=e("td",null,"The class of the card head extra area.",-1),Kt=e("td",null,"2.36.0",-1),Pt=e("td",null,"header-extra-style",-1),qt=e("td",null,"The style of the card head extra area.",-1),Wt=e("td",null,"2.25.0",-1),Yt=e("td",null,"hoverable",-1),Jt=e("td",null,"Whether to show shadow when hovering on the card.",-1),Gt=e("td",null,null,-1),Qt=e("td",null,"segmented",-1),Xt=e("td",null,"Segment divider settings of the card.",-1),Zt=e("td",null,null,-1),e0=e("td",null,"size",-1),t0=e("td",null,"Card size.",-1),n0=e("td",null,null,-1),o0=e("td",null,"tag",-1),d0=e("td",null,"What tag need the card be rendered as.",-1),l0=e("td",null,"2.34.3",-1),a0=e("td",null,"title",-1),c0=e("td",null,"Card title.",-1),s0=e("td",null,"Render function since 2.38.2",-1),r0=e("td",null,"on-close",-1),_0=e("td",null,"Callback function triggered upon closing the card.",-1),i0=e("td",null,null,-1),u0={class:"md-table-wrapper"},m0=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Parameters"),e("th",null,"Description")])],-1),p0=e("td",null,"cover",-1),D0=e("td",null,"Cover content.",-1),C0=e("td",null,"header",-1),h0=e("td",null,"Header content.",-1),f0=e("td",null,"header-extra",-1),A0=e("td",null,"Header extra content.",-1),g0=e("td",null,"default",-1),v0=e("td",null,"Card content.",-1),E0=e("td",null,"footer",-1),b0=e("td",null,"Footer content.",-1),y0=e("td",null,"action",-1),x0=e("td",null,"Operating area content.",-1),F0={key:0,style:{width:"192px"}};function S0(s,u,c,a,i,C){const D=d("edit-on-github-header"),h=d("n-p"),f=d("n-h2"),A=d("basicVueDemo"),v=d("sizeVueDemo"),E=d("coverVueDemo"),b=d("hoverableVueDemo"),y=d("slotsVueDemo"),T=d("borderVueDemo"),N=d("segmentVueDemo"),j=d("closableVueDemo"),O=d("noTitleVueDemo"),L=d("loadingVueDemo"),I=d("customStyleVueDemo"),z=d("embeddedVueDemo"),M=d("component-demos"),x=d("n-h3"),l=d("n-text"),F=d("n-table"),p=d("n-anchor-link"),U=d("n-anchor");return r(),g("div",{class:"doc",style:V(a.wrapperStyle)},[e("div",{style:V(a.contentStyle)},[o(D,{"relative-url":"D:/Code/naive-ui/src/card/demos/enUS/index.demo-entry.md",text:"Card"}),o(h,null,{default:t(()=>[n("Just put something in it.")]),_:1}),o(f,{id:"Demos"},{default:t(()=>[n("Demos")]),_:1}),o(M,{span:2},{default:t(()=>[o(A),o(v),o(E),o(b),o(y),o(T),o(N),o(j),o(O),o(L),o(I),o(z)]),_:1}),o(f,{id:"Card"},{default:t(()=>[n("Card")]),_:1}),o(x,{id:"Card-Props"},{default:t(()=>[n("Card Props")]),_:1}),e("div",Xe,[o(F,{"single-column":"",class:"md-table"},{default:t(()=>[Ze,e("tbody",null,[e("tr",null,[et,e("td",null,[o(l,{code:""},{default:t(()=>[n("() => VNodeChild")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("undefined")]),_:1})]),tt,nt]),e("tr",null,[ot,e("td",null,[o(l,{code:""},{default:t(()=>[n("boolean")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("true")]),_:1})]),dt,lt]),e("tr",null,[at,e("td",null,[o(l,{code:""},{default:t(()=>[n("boolean")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("false")]),_:1})]),ct,st]),e("tr",null,[rt,e("td",null,[o(l,{code:""},{default:t(()=>[n("string | (() => VNodeChild)")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("undefined")]),_:1})]),_t,it]),e("tr",null,[ut,e("td",null,[o(l,{code:""},{default:t(()=>[n("string")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("undefined")]),_:1})]),mt,pt]),e("tr",null,[Dt,e("td",null,[o(l,{code:""},{default:t(()=>[n("Object | string")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("undefined")]),_:1})]),Ct,ht]),e("tr",null,[ft,e("td",null,[o(l,{code:""},{default:t(()=>[n("() => VNodeChild")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("undefined")]),_:1})]),At,gt]),e("tr",null,[vt,e("td",null,[o(l,{code:""},{default:t(()=>[n("boolean")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("false")]),_:1})]),Et,bt]),e("tr",null,[yt,e("td",null,[o(l,{code:""},{default:t(()=>[n("() => VNodeChild")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("undefined")]),_:1})]),xt,Ft]),e("tr",null,[St,e("td",null,[o(l,{code:""},{default:t(()=>[n("string")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("undefined")]),_:1})]),wt,Vt]),e("tr",null,[Bt,e("td",null,[o(l,{code:""},{default:t(()=>[n("Object | string")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("undefined")]),_:1})]),kt,$t]),e("tr",null,[Tt,e("td",null,[o(l,{code:""},{default:t(()=>[n("string")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("undefined")]),_:1})]),Nt,jt]),e("tr",null,[Ot,e("td",null,[o(l,{code:""},{default:t(()=>[n("Object | string")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("undefined")]),_:1})]),Lt,It]),e("tr",null,[zt,e("td",null,[o(l,{code:""},{default:t(()=>[n("() => VNodeChild")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("undefined")]),_:1})]),Mt,Ut]),e("tr",null,[Rt,e("td",null,[o(l,{code:""},{default:t(()=>[n("string")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("undefined")]),_:1})]),Ht,Kt]),e("tr",null,[Pt,e("td",null,[o(l,{code:""},{default:t(()=>[n("Object | string")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("undefined")]),_:1})]),qt,Wt]),e("tr",null,[Yt,e("td",null,[o(l,{code:""},{default:t(()=>[n("boolean")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("false")]),_:1})]),Jt,Gt]),e("tr",null,[Qt,e("td",null,[o(l,{code:""},{default:t(()=>[n("boolean | { [part in 'content' | 'footer' | 'action']?: boolean | 'soft' }")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("false")]),_:1})]),Xt,Zt]),e("tr",null,[e0,e("td",null,[o(l,{code:""},{default:t(()=>[n("'small' | 'medium' | 'large' | 'huge'")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("'medium'")]),_:1})]),t0,n0]),e("tr",null,[o0,e("td",null,[o(l,{code:""},{default:t(()=>[n("string")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("'div'")]),_:1})]),d0,l0]),e("tr",null,[a0,e("td",null,[o(l,{code:""},{default:t(()=>[n("string | (() => VNodeChild)")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("undefined")]),_:1})]),c0,s0]),e("tr",null,[r0,e("td",null,[o(l,{code:""},{default:t(()=>[n("() => void")]),_:1})]),e("td",null,[o(l,{code:""},{default:t(()=>[n("undefined")]),_:1})]),_0,i0])])]),_:1})]),o(x,{id:"Card-Slots"},{default:t(()=>[n("Card Slots")]),_:1}),e("div",u0,[o(F,{"single-column":"",class:"md-table"},{default:t(()=>[m0,e("tbody",null,[e("tr",null,[p0,e("td",null,[o(l,{code:""},{default:t(()=>[n("()")]),_:1})]),D0]),e("tr",null,[C0,e("td",null,[o(l,{code:""},{default:t(()=>[n("()")]),_:1})]),h0]),e("tr",null,[f0,e("td",null,[o(l,{code:""},{default:t(()=>[n("()")]),_:1})]),A0]),e("tr",null,[g0,e("td",null,[o(l,{code:""},{default:t(()=>[n("()")]),_:1})]),v0]),e("tr",null,[E0,e("td",null,[o(l,{code:""},{default:t(()=>[n("()")]),_:1})]),b0]),e("tr",null,[y0,e("td",null,[o(l,{code:""},{default:t(()=>[n("()")]),_:1})]),x0])])]),_:1})])],4),a.showAnchor?(r(),g("div",F0,[o(U,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!1},{default:t(()=>[(a.displayMode,r(),_(p,{key:0,title:"Basic\r",href:"#basic.vue"})),(a.displayMode,r(),_(p,{key:1,title:"Size\r",href:"#size.vue"})),(a.displayMode,r(),_(p,{key:2,title:"Cover\r",href:"#cover.vue"})),(a.displayMode,r(),_(p,{key:3,title:"Hoverable\r",href:"#hoverable.vue"})),(a.displayMode,r(),_(p,{key:4,title:"Slots\r",href:"#slots.vue"})),(a.displayMode,r(),_(p,{key:5,title:"Border\r",href:"#border.vue"})),(a.displayMode,r(),_(p,{key:6,title:"Segmented\r",href:"#segment.vue"})),(a.displayMode,r(),_(p,{key:7,title:"Closable\r",href:"#closable.vue"})),(a.displayMode,r(),_(p,{key:8,title:"No title\r",href:"#no-title.vue"})),(a.displayMode,r(),_(p,{key:9,title:"Loading\r",href:"#loading.vue"})),(a.displayMode,r(),_(p,{key:10,title:"Custom\r",href:"#custom-style.vue"})),(a.displayMode,r(),_(p,{key:11,title:"Embedded effect\r",href:"#embedded.vue"}))]),_:1})])):W("",!0)],4)}const V0=m(Qe,[["render",S0]]);export{V0 as default};