import{j as g,A as y,_ as f,r as i,o as p,i as u,w as e,g as n,e as t,f as o,l as Q,u as O,a as H,b as U,c as N,d as x,n as P,h as j}from"./index-09f026e5.js";import{H as G}from"./MdHand-9d921547.js";const Y=g({setup(){const s=y();return{handlePositiveClick(){s.info("Yes")},handleNegativeClick(){s.info("No")}}}}),z={class:"demo-card__view"};function R(s,d,A,l,h,v){const a=i("n-button"),c=i("n-popconfirm"),m=i("component-demo");return p(),u(m,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/popconfirm/demos/enUS/basic.demo.vue",title:"Basic","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-popconfirm%0D%0A%20%20%20%20%40positive-click%3D%22handlePositiveClick%22%0D%0A%20%20%20%20%40negative-click%3D%22handleNegativeClick%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%3Cn-button%3EQuote%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20Things%20pass%20us%20by.%20Nobody%20can%20catch%20them.%20That's%20the%20way%20we%20live%20our%20lives.%0D%0A%20%20%3C%2Fn-popconfirm%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20useMessage%20%7D%20from%20'naive-ui'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20message%20%3D%20useMessage()%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20handlePositiveClick%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20message.info('Yes')%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20handleNegativeClick%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20message.info('No')%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-popconfirm%0D%0A%20%20%20%20%40positive-click%3D%22handlePositiveClick%22%0D%0A%20%20%20%20%40negative-click%3D%22handleNegativeClick%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%3Cn-button%3EQuote%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20Things%20pass%20us%20by.%20Nobody%20can%20catch%20them.%20That's%20the%20way%20we%20live%20our%20lives.%0D%0A%20%20%3C%2Fn-popconfirm%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20useMessage%20%7D%20from%20%22naive-ui%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20handlePositiveClick()%20%7B%0A%20%20%20%20%20%20%20%20message.info(%22Yes%22)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20handleNegativeClick()%20%7B%0A%20%20%20%20%20%20%20%20message.info(%22No%22)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:e(()=>[n(" Basic ")]),content:e(()=>[]),demo:e(()=>[t("div",z,[o(c,{onPositiveClick:s.handlePositiveClick,onNegativeClick:s.handleNegativeClick},{trigger:e(()=>[o(a,null,{default:e(()=>[n("Quote")]),_:1})]),default:e(()=>[n(" Things pass us by. Nobody can catch them. That's the way we live our lives. ")]),_:1},8,["onPositiveClick","onNegativeClick"])])]),_:1})}const L=f(Y,[["render",R]]),W=g({setup(){return{show:Q(!1)}}}),q={class:"demo-card__view"};function J(s,d,A,l,h,v){const a=i("n-button"),c=i("n-popconfirm"),m=i("n-space"),C=i("component-demo");return p(),u(C,{"demo-file-name":"custom-action.vue","relative-url":"D:/Code/naive-ui/src/popconfirm/demos/enUS/custom-action.demo.vue",title:"Custom Action","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%3E%0D%0A%20%20%20%20%3Cn-popconfirm%20v-model%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%3EQuote%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20For%20example%2C%20if%20I%20were%20to%20write%20about%20elephants%2C%20I%E2%80%99d%20have%20had%20no%20idea%20what%0D%0A%20%20%20%20%20%20words%20to%20use.%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23action%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20size%3D%22small%22%20%40click%3D%22show%20%3D%20false%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20Maybe%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-popconfirm%3E%0D%0A%20%20%20%20%3Cn-popconfirm%20positive-text%3D%22Oops!%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%3EQuote%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20For%20example%2C%20if%20I%20were%20to%20write%20about%20elephants%2C%20I%E2%80%99d%20have%20had%20no%20idea%20what%0D%0A%20%20%20%20%20%20words%20to%20use.%0D%0A%20%20%20%20%3C%2Fn-popconfirm%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20show%3A%20ref(false)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%3E%0D%0A%20%20%20%20%3Cn-popconfirm%20v-model%3Ashow%3D%22show%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%3EQuote%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20For%20example%2C%20if%20I%20were%20to%20write%20about%20elephants%2C%20I%E2%80%99d%20have%20had%20no%20idea%20what%0D%0A%20%20%20%20%20%20words%20to%20use.%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23action%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20size%3D%22small%22%20%40click%3D%22show%20%3D%20false%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20Maybe%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fn-popconfirm%3E%0D%0A%20%20%20%20%3Cn-popconfirm%20positive-text%3D%22Oops!%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%3EQuote%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20For%20example%2C%20if%20I%20were%20to%20write%20about%20elephants%2C%20I%E2%80%99d%20have%20had%20no%20idea%20what%0D%0A%20%20%20%20%20%20words%20to%20use.%0D%0A%20%20%20%20%3C%2Fn-popconfirm%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20show%3A%20ref(false)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:e(()=>[n(" Custom Action ")]),content:e(()=>[]),demo:e(()=>[t("div",q,[o(m,null,{default:e(()=>[o(c,{show:s.show,"onUpdate:show":d[1]||(d[1]=_=>s.show=_)},{trigger:e(()=>[o(a,null,{default:e(()=>[n("Quote")]),_:1})]),action:e(()=>[o(a,{size:"small",onClick:d[0]||(d[0]=_=>s.show=!1)},{default:e(()=>[n(" Maybe ")]),_:1})]),default:e(()=>[n(" For example, if I were to write about elephants, I’d have had no idea what words to use. ")]),_:1},8,["show"]),o(c,{"positive-text":"Oops!"},{trigger:e(()=>[o(a,null,{default:e(()=>[n("Quote")]),_:1})]),default:e(()=>[n(" For example, if I were to write about elephants, I’d have had no idea what words to use. ")]),_:1})]),_:1})])]),_:1})}const K=f(W,[["render",J]]),X=g({components:{HandIcon:G}}),Z={class:"demo-card__view"};function e0(s,d,A,l,h,v){const a=i("hand-icon"),c=i("n-icon"),m=i("n-button"),C=i("n-popconfirm"),_=i("component-demo");return p(),u(_,{"demo-file-name":"custom-icon.vue","relative-url":"D:/Code/naive-ui/src/popconfirm/demos/enUS/custom-icon.demo.vue",title:"Custom Icon","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-popconfirm%20positive-text%3D%22ok%22%20negative-text%3D%22not%20ok%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%3Cn-icon%20color%3D%22red%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Chand-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%3Cn-button%3EQuit%20Game%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20How%20can%20you%20be%20strong%20without%20purchasing%3F%0D%0A%20%20%3C%2Fn-popconfirm%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20MdHand%20as%20HandIcon%20%7D%20from%20'%40vicons%2Fionicons4'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20components%3A%20%7B%0D%0A%20%20%20%20HandIcon%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-popconfirm%20positive-text%3D%22ok%22%20negative-text%3D%22not%20ok%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%3Cn-icon%20color%3D%22red%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Chand-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%3Cn-button%3EQuit%20Game%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20How%20can%20you%20be%20strong%20without%20purchasing%3F%0D%0A%20%20%3C%2Fn-popconfirm%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20MdHand%20as%20HandIcon%20%7D%20from%20%22%40vicons%2Fionicons4%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20HandIcon%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:e(()=>[n(" Custom Icon ")]),content:e(()=>[]),demo:e(()=>[t("div",Z,[o(C,{"positive-text":"ok","negative-text":"not ok"},{icon:e(()=>[o(c,{color:"red"},{default:e(()=>[o(a)]),_:1})]),trigger:e(()=>[o(m,null,{default:e(()=>[n("Quit Game")]),_:1})]),default:e(()=>[n(" How can you be strong without purchasing? ")]),_:1})])]),_:1})}const t0=f(X,[["render",e0]]),o0=g({setup(){const s=y();return{handlePositiveClick(){s.info("positive click")},handleNegativeClick(){s.info("negative click")}}}}),n0={class:"demo-card__view"};function i0(s,d,A,l,h,v){const a=i("n-text"),c=i("n-p"),m=i("n-button"),C=i("n-popconfirm"),_=i("component-demo");return p(),u(_,{"demo-file-name":"event.vue","relative-url":"D:/Code/naive-ui/src/popconfirm/demos/enUS/event.demo.vue",title:"Event","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-popconfirm%0D%0A%20%20%20%20%40positive-click%3D%22handlePositiveClick%22%0D%0A%20%20%20%20%40negative-click%3D%22handleNegativeClick%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Ctemplate%20%23activator%3E%0D%0A%20%20%20%20%20%20%3Cn-button%3EQuit%20Game%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20I%20heared%20that%20players%20will%20still%20be%20abused%20after%20purchasing%20in%20some%20games%0D%0A%20%20%20%20when%20I%20watch%20Bilibili.%0D%0A%20%20%3C%2Fn-popconfirm%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20useMessage%20%7D%20from%20'naive-ui'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20message%20%3D%20useMessage()%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20handlePositiveClick%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20message.info('positive%20click')%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20handleNegativeClick%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20message.info('negative%20click')%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-popconfirm%0D%0A%20%20%20%20%40positive-click%3D%22handlePositiveClick%22%0D%0A%20%20%20%20%40negative-click%3D%22handleNegativeClick%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Ctemplate%20%23activator%3E%0D%0A%20%20%20%20%20%20%3Cn-button%3EQuit%20Game%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20I%20heared%20that%20players%20will%20still%20be%20abused%20after%20purchasing%20in%20some%20games%0D%0A%20%20%20%20when%20I%20watch%20Bilibili.%0D%0A%20%20%3C%2Fn-popconfirm%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20useMessage%20%7D%20from%20%22naive-ui%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20handlePositiveClick()%20%7B%0A%20%20%20%20%20%20%20%20message.info(%22positive%20click%22)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20handleNegativeClick()%20%7B%0A%20%20%20%20%20%20%20%20message.info(%22negative%20click%22)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:e(()=>[n(" Event ")]),content:e(()=>[o(c,null,{default:e(()=>[o(a,{code:""},{default:e(()=>[n("positive-click")]),_:1}),n(" & "),o(a,{code:""},{default:e(()=>[n("negative-click")]),_:1})]),_:1})]),demo:e(()=>[t("div",n0,[o(C,{onPositiveClick:s.handlePositiveClick,onNegativeClick:s.handleNegativeClick},{activator:e(()=>[o(m,null,{default:e(()=>[n("Quit Game")]),_:1})]),default:e(()=>[n(" I heared that players will still be abused after purchasing in some games when I watch Bilibili. ")]),_:1},8,["onPositiveClick","onNegativeClick"])])]),_:1})}const s0=f(o0,[["render",i0]]),l0={},a0={class:"demo-card__view"};function c0(s,d){const A=i("n-button"),l=i("n-popconfirm"),h=i("component-demo");return p(),u(h,{"demo-file-name":"no-icon.vue","relative-url":"D:/Code/naive-ui/src/popconfirm/demos/enUS/no-icon.demo.vue",title:"No icon","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-popconfirm%20%3Ashow-icon%3D%22false%22%3E%0D%0A%20%20%20%20%3Ctemplate%20%23activator%3E%0D%0A%20%20%20%20%20%20%3Cn-button%3ENo%20icon%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20As%20is%0D%0A%20%20%3C%2Fn-popconfirm%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:e(()=>[n(" No icon ")]),content:e(()=>[]),demo:e(()=>[t("div",a0,[o(l,{"show-icon":!1},{activator:e(()=>[o(A,null,{default:e(()=>[n("No icon")]),_:1})]),default:e(()=>[n(" As is ")]),_:1})])]),_:1})}const p0=f(l0,[["render",c0]]),r0=g({setup(){const s=y();return{handlePositiveClick(){s.info("Yes")},handleNegativeClick(){s.info("No")}}}}),u0={class:"demo-card__view"};function d0(s,d,A,l,h,v){const a=i("n-button"),c=i("n-popconfirm"),m=i("n-space"),C=i("component-demo");return p(),u(C,{"demo-file-name":"actions.vue","relative-url":"D:/Code/naive-ui/src/popconfirm/demos/enUS/actions.demo.vue",title:"Actions","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%3E%0D%0A%20%20%20%20%3Cn-popconfirm%0D%0A%20%20%20%20%20%20%40positive-click%3D%22handlePositiveClick%22%0D%0A%20%20%20%20%20%20%40negative-click%3D%22handleNegativeClick%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%3EQuote%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20Things%20pass%20us%20by.%20Nobody%20can%20catch%20them.%20That's%20the%20way%20we%20live%20our%0D%0A%20%20%20%20%20%20lives.%0D%0A%20%20%20%20%3C%2Fn-popconfirm%3E%0D%0A%20%20%20%20%3Cn-popconfirm%20%3Anegative-text%3D%22null%22%20%40positive-click%3D%22handlePositiveClick%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%3EOnly%20Confirm%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20Things%20pass%20us%20by.%20Nobody%20can%20catch%20them.%20That's%20the%20way%20we%20live%20our%0D%0A%20%20%20%20%20%20lives.%0D%0A%20%20%20%20%3C%2Fn-popconfirm%3E%0D%0A%20%20%20%20%3Cn-popconfirm%20%3Apositive-text%3D%22null%22%20%40negative-click%3D%22handleNegativeClick%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%3EOnly%20Cancel%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20Things%20pass%20us%20by.%20Nobody%20can%20catch%20them.%20That's%20the%20way%20we%20live%20our%0D%0A%20%20%20%20%20%20lives.%0D%0A%20%20%20%20%3C%2Fn-popconfirm%3E%0D%0A%20%20%20%20%3Cn-popconfirm%20%3Apositive-text%3D%22null%22%20%3Anegative-text%3D%22null%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%3ENothing%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20Things%20pass%20us%20by.%20Nobody%20can%20catch%20them.%20That's%20the%20way%20we%20live%20our%0D%0A%20%20%20%20%20%20lives.%0D%0A%20%20%20%20%3C%2Fn-popconfirm%3E%0D%0A%20%20%20%20%3Cn-popconfirm%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%3ECustom%20action%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23action%3E%0D%0A%20%20%20%20%20%20%20%20Custom%20Action%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20Things%20pass%20us%20by.%20Nobody%20can%20catch%20them.%20That's%20the%20way%20we%20live%20our%0D%0A%20%20%20%20%20%20lives.%0D%0A%20%20%20%20%3C%2Fn-popconfirm%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20useMessage%20%7D%20from%20'naive-ui'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20message%20%3D%20useMessage()%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20handlePositiveClick%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20message.info('Yes')%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20handleNegativeClick%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20message.info('No')%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%3E%0D%0A%20%20%20%20%3Cn-popconfirm%0D%0A%20%20%20%20%20%20%40positive-click%3D%22handlePositiveClick%22%0D%0A%20%20%20%20%20%20%40negative-click%3D%22handleNegativeClick%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%3EQuote%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20Things%20pass%20us%20by.%20Nobody%20can%20catch%20them.%20That's%20the%20way%20we%20live%20our%0D%0A%20%20%20%20%20%20lives.%0D%0A%20%20%20%20%3C%2Fn-popconfirm%3E%0D%0A%20%20%20%20%3Cn-popconfirm%20%3Anegative-text%3D%22null%22%20%40positive-click%3D%22handlePositiveClick%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%3EOnly%20Confirm%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20Things%20pass%20us%20by.%20Nobody%20can%20catch%20them.%20That's%20the%20way%20we%20live%20our%0D%0A%20%20%20%20%20%20lives.%0D%0A%20%20%20%20%3C%2Fn-popconfirm%3E%0D%0A%20%20%20%20%3Cn-popconfirm%20%3Apositive-text%3D%22null%22%20%40negative-click%3D%22handleNegativeClick%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%3EOnly%20Cancel%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20Things%20pass%20us%20by.%20Nobody%20can%20catch%20them.%20That's%20the%20way%20we%20live%20our%0D%0A%20%20%20%20%20%20lives.%0D%0A%20%20%20%20%3C%2Fn-popconfirm%3E%0D%0A%20%20%20%20%3Cn-popconfirm%20%3Apositive-text%3D%22null%22%20%3Anegative-text%3D%22null%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%3ENothing%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20Things%20pass%20us%20by.%20Nobody%20can%20catch%20them.%20That's%20the%20way%20we%20live%20our%0D%0A%20%20%20%20%20%20lives.%0D%0A%20%20%20%20%3C%2Fn-popconfirm%3E%0D%0A%20%20%20%20%3Cn-popconfirm%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23trigger%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%3ECustom%20action%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23action%3E%0D%0A%20%20%20%20%20%20%20%20Custom%20Action%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20Things%20pass%20us%20by.%20Nobody%20can%20catch%20them.%20That's%20the%20way%20we%20live%20our%0D%0A%20%20%20%20%20%20lives.%0D%0A%20%20%20%20%3C%2Fn-popconfirm%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20useMessage%20%7D%20from%20%22naive-ui%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20handlePositiveClick()%20%7B%0A%20%20%20%20%20%20%20%20message.info(%22Yes%22)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20handleNegativeClick()%20%7B%0A%20%20%20%20%20%20%20%20message.info(%22No%22)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:e(()=>[n(" Actions ")]),content:e(()=>[]),demo:e(()=>[t("div",u0,[o(m,null,{default:e(()=>[o(c,{onPositiveClick:s.handlePositiveClick,onNegativeClick:s.handleNegativeClick},{trigger:e(()=>[o(a,null,{default:e(()=>[n("Quote")]),_:1})]),default:e(()=>[n(" Things pass us by. Nobody can catch them. That's the way we live our lives. ")]),_:1},8,["onPositiveClick","onNegativeClick"]),o(c,{"negative-text":null,onPositiveClick:s.handlePositiveClick},{trigger:e(()=>[o(a,null,{default:e(()=>[n("Only Confirm")]),_:1})]),default:e(()=>[n(" Things pass us by. Nobody can catch them. That's the way we live our lives. ")]),_:1},8,["onPositiveClick"]),o(c,{"positive-text":null,onNegativeClick:s.handleNegativeClick},{trigger:e(()=>[o(a,null,{default:e(()=>[n("Only Cancel")]),_:1})]),default:e(()=>[n(" Things pass us by. Nobody can catch them. That's the way we live our lives. ")]),_:1},8,["onNegativeClick"]),o(c,{"positive-text":null,"negative-text":null},{trigger:e(()=>[o(a,null,{default:e(()=>[n("Nothing")]),_:1})]),default:e(()=>[n(" Things pass us by. Nobody can catch them. That's the way we live our lives. ")]),_:1}),o(c,null,{trigger:e(()=>[o(a,null,{default:e(()=>[n("Custom action")]),_:1})]),action:e(()=>[n(" Custom Action ")]),default:e(()=>[n(" Things pass us by. Nobody can catch them. That's the way we live our lives. ")]),_:1})]),_:1})])]),_:1})}const m0=f(r0,[["render",d0]]),D0={components:{basicVueDemo:L,customActionVueDemo:K,customIconVueDemo:t0,eventVueDemo:s0,noIconVueDemo:p0,actionsVueDemo:m0},setup(){const s=O(),d=H(()=>!s.value),A=s;return{showAnchor:d,displayMode:U(),wrapperStyle:N(()=>A.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:N(()=>d.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/popconfirm/demos/enUS/index.demo-entry.md"}}},A0={class:"md-table-wrapper"},C0=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Type"),t("th",null,"Default"),t("th",null,"Description"),t("th",null,"Version")])],-1),_0=t("td",null,"negative-button-props",-1),h0=t("td",null,"Cancel button's DOM props",-1),f0=t("td",null,"2.27.0",-1),v0=t("td",null,"negative-text",-1),g0=t("td",null,"Cancel button text.",-1),E0=t("td",null,"2.28.0",-1),b0=t("td",null,"positive-button-props",-1),k0=t("td",null,"Confirm button's DOM props",-1),y0=t("td",null,"2.27.0",-1),w0=t("td",null,"positive-text",-1),F0=t("td",null,"Confirm button text.",-1),B0=t("td",null,"2.28.0",-1),N0=t("td",null,"show-icon",-1),x0=t("td",null,"Whether to show icon.",-1),P0=t("td",null,null,-1),M0=t("td",null,"on-positive-click",-1),T0=t("td",null,"Callback of confirmation.",-1),I0=t("td",null,null,-1),V0=t("td",null,"on-negative-click",-1),$0=t("td",null,"Callback of cancel.",-1),S0=t("td",null,null,-1),Q0={class:"md-table-wrapper"},O0=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Parameters"),t("th",null,"Description")])],-1),H0=t("td",null,"action",-1),U0=t("td",null,"Custom action.",-1),j0=t("td",null,"default",-1),G0=t("td",null,"Popconfirm content.",-1),Y0=t("td",null,"icon",-1),z0=t("td",null,"Popconfirm icon.",-1),R0={key:0,style:{width:"192px"}};function L0(s,d,A,l,h,v){const a=i("edit-on-github-header"),c=i("n-p"),m=i("n-h2"),C=i("basicVueDemo"),_=i("customActionVueDemo"),M=i("customIconVueDemo"),T=i("eventVueDemo"),I=i("noIconVueDemo"),V=i("actionsVueDemo"),$=i("component-demos"),E=i("n-h3"),r=i("n-text"),w=i("n-table"),F=i("n-a"),B=i("router-link"),D=i("n-anchor-link"),S=i("n-anchor");return p(),x("div",{class:"doc",style:P(l.wrapperStyle)},[t("div",{style:P(l.contentStyle)},[o(a,{"relative-url":"D:/Code/naive-ui/src/popconfirm/demos/enUS/index.demo-entry.md",text:"Popconfirm"}),o(c,null,{default:e(()=>[n("A confirm, poped.")]),_:1}),o(m,{id:"Demos"},{default:e(()=>[n("Demos")]),_:1}),o($,{span:2},{default:e(()=>[o(C),o(_),o(M),o(T),o(I),o(V)]),_:1}),o(m,{id:"API"},{default:e(()=>[n("API")]),_:1}),o(E,{id:"Popconfirm-Props"},{default:e(()=>[n("Popconfirm Props")]),_:1}),t("div",A0,[o(w,{"single-column":"",class:"md-table"},{default:e(()=>[C0,t("tbody",null,[t("tr",null,[_0,t("td",null,[o(r,{code:""},{default:e(()=>[n("ButtonProps")]),_:1})]),t("td",null,[o(r,{code:""},{default:e(()=>[n("undefined")]),_:1})]),h0,f0]),t("tr",null,[v0,t("td",null,[o(r,{code:""},{default:e(()=>[n("string | null")]),_:1})]),t("td",null,[o(r,{code:""},{default:e(()=>[n("'Cancel'")]),_:1})]),g0,E0]),t("tr",null,[b0,t("td",null,[o(r,{code:""},{default:e(()=>[n("ButtonProps")]),_:1})]),t("td",null,[o(r,{code:""},{default:e(()=>[n("undefined")]),_:1})]),k0,y0]),t("tr",null,[w0,t("td",null,[o(r,{code:""},{default:e(()=>[n("string | null")]),_:1})]),t("td",null,[o(r,{code:""},{default:e(()=>[n("'Confirm'")]),_:1})]),F0,B0]),t("tr",null,[N0,t("td",null,[o(r,{code:""},{default:e(()=>[n("boolean")]),_:1})]),t("td",null,[o(r,{code:""},{default:e(()=>[n("true")]),_:1})]),x0,P0]),t("tr",null,[M0,t("td",null,[o(r,{code:""},{default:e(()=>[n("() => boolean | Promise<boolean> | any")]),_:1})]),t("td",null,[o(r,{code:""},{default:e(()=>[n("undefined")]),_:1})]),T0,I0]),t("tr",null,[V0,t("td",null,[o(r,{code:""},{default:e(()=>[n("() => boolean | Promise<boolean> | any")]),_:1})]),t("td",null,[o(r,{code:""},{default:e(()=>[n("undefined")]),_:1})]),$0,S0])])]),_:1})]),o(c,null,{default:e(()=>[n("For more props, see "),o(B,{to:"popover#Popover-Props",custom:""},{default:e(({navigate:b,href:k})=>[o(F,{href:k,onClick:b},{default:e(()=>[n("popover")]),_:2},1032,["href","onClick"])]),_:1}),n(".")]),_:1}),o(E,{id:"Popconfirm-Slots"},{default:e(()=>[n("Popconfirm Slots")]),_:1}),t("div",Q0,[o(w,{"single-column":"",class:"md-table"},{default:e(()=>[O0,t("tbody",null,[t("tr",null,[H0,t("td",null,[o(r,{code:""},{default:e(()=>[n("()")]),_:1})]),U0]),t("tr",null,[j0,t("td",null,[o(r,{code:""},{default:e(()=>[n("()")]),_:1})]),G0]),t("tr",null,[Y0,t("td",null,[o(r,{code:""},{default:e(()=>[n("()")]),_:1})]),z0])])]),_:1})]),o(E,{id:"Popconfirm-Methods"},{default:e(()=>[n("Popconfirm Methods")]),_:1}),o(c,null,{default:e(()=>[n("See "),o(B,{to:"popover#Popover-Methods",custom:""},{default:e(({navigate:b,href:k})=>[o(F,{href:k,onClick:b},{default:e(()=>[n("popover")]),_:2},1032,["href","onClick"])]),_:1}),n(".")]),_:1})],4),l.showAnchor?(p(),x("div",R0,[o(S,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:e(()=>[(l.displayMode,p(),u(D,{key:0,title:"Basic\r",href:"#basic.vue"})),(l.displayMode,p(),u(D,{key:1,title:"Custom Action\r",href:"#custom-action.vue"})),(l.displayMode,p(),u(D,{key:2,title:"Custom Icon\r",href:"#custom-icon.vue"})),(l.displayMode,p(),u(D,{key:3,title:"Event\r",href:"#event.vue"})),(l.displayMode,p(),u(D,{key:4,title:"No icon\r",href:"#no-icon.vue"})),(l.displayMode,p(),u(D,{key:5,title:"Actions\r",href:"#actions.vue"})),(l.displayMode,p(),u(D,{key:6,title:"API",href:"#API"})),(l.displayMode,p(),u(D,{key:7,title:"Popconfirm Props",href:"#Popconfirm-Props"})),(l.displayMode,p(),u(D,{key:8,title:"Popconfirm Slots",href:"#Popconfirm-Slots"})),(l.displayMode,p(),u(D,{key:9,title:"Popconfirm Methods",href:"#Popconfirm-Methods"}))]),_:1})])):j("",!0)],4)}const J0=f(D0,[["render",L0]]);export{J0 as default};
