import{C as M}from"./CashOutline-D9dBrmoz.js";import{j as I,l as C,_ as y,r as c,o as m,i as f,w as e,g as o,f as t,e as n,O as U,u as V,a as $,b as S,c as w,d as B,n as z,h as H}from"./index-DxZkTPDs.js";const T=I({components:{CashIcon:M},setup(){return{avatar:C(!0),header:C(!0),headerExtra:C(!0),description:C(!0),footer:C(!0),action:C(!0)}}}),N={class:"demo-card__view"};function P(a,l,k,p,x,g){const _=c("n-p"),r=c("n-checkbox"),s=c("n-col"),E=c("n-row"),F=c("n-divider"),A=c("cash-icon"),D=c("n-icon"),d=c("n-avatar"),u=c("n-button"),h=c("n-space"),v=c("n-thing"),b=c("component-demo");return m(),f(b,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/thing/demos/enUS/basic.demo.vue",title:"Basic","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-row%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22avatar%22%3E%0D%0A%20%20%20%20%20%20%20%20Avatar%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22action%22%3E%0D%0A%20%20%20%20%20%20%20%20Action%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%3C%2Fn-row%3E%0D%0A%20%20%3Cn-row%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22header%22%3E%0D%0A%20%20%20%20%20%20%20%20Header%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22headerExtra%22%3E%0D%0A%20%20%20%20%20%20%20%20Header%20Extra%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%3C%2Fn-row%3E%0D%0A%20%20%3Cn-row%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22description%22%3E%0D%0A%20%20%20%20%20%20%20%20Description%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22footer%22%3E%0D%0A%20%20%20%20%20%20%20%20Footer%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%3C%2Fn-row%3E%0D%0A%20%20%3Cn-divider%20%2F%3E%0D%0A%20%20%3Cn-thing%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22avatar%22%20%23avatar%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-avatar%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22header%22%20%23header%3E%0D%0A%20%20%20%20%20%20Money%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22headerExtra%22%20%23header-extra%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20circle%20size%3D%22small%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22description%22%20%23description%3E%0D%0A%20%20%20%20%20%20Description%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20Money%20is%20any%20item%20or%20verifiable%20record%20that%20is%20generally%20accepted%20as%20payment%0D%0A%20%20%20%20for%20goods%20and%20services%20and%20repayment%20of%20debts%2C%20such%20as%20taxes%2C%20in%20a%0D%0A%20%20%20%20particular%20country%20or%20socio-economic%20context.%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22footer%22%20%23footer%3E%0D%0A%20%20%20%20%20%20Footer%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22action%22%20%23action%3E%0D%0A%20%20%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20size%3D%22small%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%201%24%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20size%3D%22small%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%2010%24%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20size%3D%22small%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%20100%24%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-thing%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20CashOutline%20as%20CashIcon%20%7D%20from%20'%40vicons%2Fionicons5'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20components%3A%20%7B%0D%0A%20%20%20%20CashIcon%0D%0A%20%20%7D%2C%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20avatar%3A%20ref(true)%2C%0D%0A%20%20%20%20%20%20header%3A%20ref(true)%2C%0D%0A%20%20%20%20%20%20headerExtra%3A%20ref(true)%2C%0D%0A%20%20%20%20%20%20description%3A%20ref(true)%2C%0D%0A%20%20%20%20%20%20footer%3A%20ref(true)%2C%0D%0A%20%20%20%20%20%20action%3A%20ref(true)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-row%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22avatar%22%3E%0D%0A%20%20%20%20%20%20%20%20Avatar%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22action%22%3E%0D%0A%20%20%20%20%20%20%20%20Action%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%3C%2Fn-row%3E%0D%0A%20%20%3Cn-row%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22header%22%3E%0D%0A%20%20%20%20%20%20%20%20Header%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22headerExtra%22%3E%0D%0A%20%20%20%20%20%20%20%20Header%20Extra%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%3C%2Fn-row%3E%0D%0A%20%20%3Cn-row%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22description%22%3E%0D%0A%20%20%20%20%20%20%20%20Description%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22footer%22%3E%0D%0A%20%20%20%20%20%20%20%20Footer%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%3C%2Fn-row%3E%0D%0A%20%20%3Cn-divider%20%2F%3E%0D%0A%20%20%3Cn-thing%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22avatar%22%20%23avatar%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-avatar%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22header%22%20%23header%3E%0D%0A%20%20%20%20%20%20Money%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22headerExtra%22%20%23header-extra%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20circle%20size%3D%22small%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22description%22%20%23description%3E%0D%0A%20%20%20%20%20%20Description%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20Money%20is%20any%20item%20or%20verifiable%20record%20that%20is%20generally%20accepted%20as%20payment%0D%0A%20%20%20%20for%20goods%20and%20services%20and%20repayment%20of%20debts%2C%20such%20as%20taxes%2C%20in%20a%0D%0A%20%20%20%20particular%20country%20or%20socio-economic%20context.%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22footer%22%20%23footer%3E%0D%0A%20%20%20%20%20%20Footer%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22action%22%20%23action%3E%0D%0A%20%20%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20size%3D%22small%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%201%24%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20size%3D%22small%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%2010%24%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20size%3D%22small%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%20100%24%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-thing%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20CashOutline%20as%20CashIcon%20%7D%20from%20%22%40vicons%2Fionicons5%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20CashIcon%0A%20%20%7D%2C%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20avatar%3A%20ref(true)%2C%0A%20%20%20%20%20%20header%3A%20ref(true)%2C%0A%20%20%20%20%20%20headerExtra%3A%20ref(true)%2C%0A%20%20%20%20%20%20description%3A%20ref(true)%2C%0A%20%20%20%20%20%20footer%3A%20ref(true)%2C%0A%20%20%20%20%20%20action%3A%20ref(true)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:e(()=>[o(" Basic ")]),content:e(()=>[t(_,null,{default:e(()=>[o("Thing provides many slots to custom.")]),_:1})]),demo:e(()=>[n("div",N,[t(E,null,{default:e(()=>[t(s,{span:12},{default:e(()=>[t(r,{checked:a.avatar,"onUpdate:checked":l[0]||(l[0]=i=>a.avatar=i)},{default:e(()=>[o(" Avatar ")]),_:1},8,["checked"])]),_:1}),t(s,{span:12},{default:e(()=>[t(r,{checked:a.action,"onUpdate:checked":l[1]||(l[1]=i=>a.action=i)},{default:e(()=>[o(" Action ")]),_:1},8,["checked"])]),_:1})]),_:1}),t(E,null,{default:e(()=>[t(s,{span:12},{default:e(()=>[t(r,{checked:a.header,"onUpdate:checked":l[2]||(l[2]=i=>a.header=i)},{default:e(()=>[o(" Header ")]),_:1},8,["checked"])]),_:1}),t(s,{span:12},{default:e(()=>[t(r,{checked:a.headerExtra,"onUpdate:checked":l[3]||(l[3]=i=>a.headerExtra=i)},{default:e(()=>[o(" Header Extra ")]),_:1},8,["checked"])]),_:1})]),_:1}),t(E,null,{default:e(()=>[t(s,{span:12},{default:e(()=>[t(r,{checked:a.description,"onUpdate:checked":l[4]||(l[4]=i=>a.description=i)},{default:e(()=>[o(" Description ")]),_:1},8,["checked"])]),_:1}),t(s,{span:12},{default:e(()=>[t(r,{checked:a.footer,"onUpdate:checked":l[5]||(l[5]=i=>a.footer=i)},{default:e(()=>[o(" Footer ")]),_:1},8,["checked"])]),_:1})]),_:1}),t(F),t(v,null,U({default:e(()=>[o(" Money is any item or verifiable record that is generally accepted as payment for goods and services and repayment of debts, such as taxes, in a particular country or socio-economic context. ")]),_:2},[a.avatar?{name:"avatar",fn:e(()=>[t(d,null,{default:e(()=>[t(D,null,{default:e(()=>[t(A)]),_:1})]),_:1})]),key:"0"}:void 0,a.header?{name:"header",fn:e(()=>[o(" Money ")]),key:"1"}:void 0,a.headerExtra?{name:"header-extra",fn:e(()=>[t(u,{circle:"",size:"small"},{icon:e(()=>[t(A)]),_:1})]),key:"2"}:void 0,a.description?{name:"description",fn:e(()=>[o(" Description ")]),key:"3"}:void 0,a.footer?{name:"footer",fn:e(()=>[o(" Footer ")]),key:"4"}:void 0,a.action?{name:"action",fn:e(()=>[t(h,null,{default:e(()=>[t(u,{size:"small"},{icon:e(()=>[t(D,null,{default:e(()=>[t(A)]),_:1})]),default:e(()=>[o(" 1$ ")]),_:1}),t(u,{size:"small"},{icon:e(()=>[t(D,null,{default:e(()=>[t(A)]),_:1})]),default:e(()=>[o(" 10$ ")]),_:1}),t(u,{size:"small"},{icon:e(()=>[t(D,null,{default:e(()=>[t(A)]),_:1})]),default:e(()=>[o(" 100$ ")]),_:1})]),_:1})]),key:"5"}:void 0]),1024)])]),_:1})}const O=y(T,[["render",P]]),j=I({components:{CashIcon:M},setup(){return{avatar:C(!0),header:C(!0),headerExtra:C(!0),description:C(!0),footer:C(!0),action:C(!0)}}}),R={class:"demo-card__view"};function W(a,l,k,p,x,g){const _=c("n-p"),r=c("n-checkbox"),s=c("n-col"),E=c("n-row"),F=c("n-divider"),A=c("cash-icon"),D=c("n-icon"),d=c("n-avatar"),u=c("n-button"),h=c("n-space"),v=c("n-thing"),b=c("component-demo");return m(),f(b,{"demo-file-name":"indent.vue","relative-url":"D:/Code/naive-ui/src/thing/demos/enUS/indent.demo.vue",title:"Content indented","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-row%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22avatar%22%3E%0D%0A%20%20%20%20%20%20%20%20Avatar%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22action%22%3E%0D%0A%20%20%20%20%20%20%20%20Action%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%3C%2Fn-row%3E%0D%0A%20%20%3Cn-row%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22header%22%3E%0D%0A%20%20%20%20%20%20%20%20Header%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22headerExtra%22%3E%0D%0A%20%20%20%20%20%20%20%20Header%20Extra%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%3C%2Fn-row%3E%0D%0A%20%20%3Cn-row%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22description%22%3E%0D%0A%20%20%20%20%20%20%20%20Description%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22footer%22%3E%0D%0A%20%20%20%20%20%20%20%20Footer%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%3C%2Fn-row%3E%0D%0A%20%20%3Cn-divider%20%2F%3E%0D%0A%20%20%3Cn-thing%20content-indented%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22avatar%22%20%23avatar%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-avatar%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22header%22%20%23header%3E%0D%0A%20%20%20%20%20%20Money%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22headerExtra%22%20%23header-extra%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20circle%20size%3D%22small%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22description%22%20%23description%3E%0D%0A%20%20%20%20%20%20Description%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20Money%20is%20any%20item%20or%20verifiable%20record%20that%20is%20generally%20accepted%20as%20payment%0D%0A%20%20%20%20for%20goods%20and%20services%20and%20repayment%20of%20debts%2C%20such%20as%20taxes%2C%20in%20a%0D%0A%20%20%20%20particular%20country%20or%20socio-economic%20context.%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22footer%22%20%23footer%3E%0D%0A%20%20%20%20%20%20Footer%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22action%22%20%23action%3E%0D%0A%20%20%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20size%3D%22small%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%201%24%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20size%3D%22small%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%2010%24%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20size%3D%22small%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%20100%24%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-thing%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20CashOutline%20as%20CashIcon%20%7D%20from%20'%40vicons%2Fionicons5'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20components%3A%20%7B%0D%0A%20%20%20%20CashIcon%0D%0A%20%20%7D%2C%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20avatar%3A%20ref(true)%2C%0D%0A%20%20%20%20%20%20header%3A%20ref(true)%2C%0D%0A%20%20%20%20%20%20headerExtra%3A%20ref(true)%2C%0D%0A%20%20%20%20%20%20description%3A%20ref(true)%2C%0D%0A%20%20%20%20%20%20footer%3A%20ref(true)%2C%0D%0A%20%20%20%20%20%20action%3A%20ref(true)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-row%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22avatar%22%3E%0D%0A%20%20%20%20%20%20%20%20Avatar%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22action%22%3E%0D%0A%20%20%20%20%20%20%20%20Action%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%3C%2Fn-row%3E%0D%0A%20%20%3Cn-row%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22header%22%3E%0D%0A%20%20%20%20%20%20%20%20Header%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22headerExtra%22%3E%0D%0A%20%20%20%20%20%20%20%20Header%20Extra%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%3C%2Fn-row%3E%0D%0A%20%20%3Cn-row%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22description%22%3E%0D%0A%20%20%20%20%20%20%20%20Description%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%20%20%3Cn-col%20%3Aspan%3D%2212%22%3E%0D%0A%20%20%20%20%20%20%3Cn-checkbox%20v-model%3Achecked%3D%22footer%22%3E%0D%0A%20%20%20%20%20%20%20%20Footer%0D%0A%20%20%20%20%20%20%3C%2Fn-checkbox%3E%0D%0A%20%20%20%20%3C%2Fn-col%3E%0D%0A%20%20%3C%2Fn-row%3E%0D%0A%20%20%3Cn-divider%20%2F%3E%0D%0A%20%20%3Cn-thing%20content-indented%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22avatar%22%20%23avatar%3E%0D%0A%20%20%20%20%20%20%3Cn-avatar%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-avatar%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22header%22%20%23header%3E%0D%0A%20%20%20%20%20%20Money%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22headerExtra%22%20%23header-extra%3E%0D%0A%20%20%20%20%20%20%3Cn-button%20circle%20size%3D%22small%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22description%22%20%23description%3E%0D%0A%20%20%20%20%20%20Description%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20Money%20is%20any%20item%20or%20verifiable%20record%20that%20is%20generally%20accepted%20as%20payment%0D%0A%20%20%20%20for%20goods%20and%20services%20and%20repayment%20of%20debts%2C%20such%20as%20taxes%2C%20in%20a%0D%0A%20%20%20%20particular%20country%20or%20socio-economic%20context.%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22footer%22%20%23footer%3E%0D%0A%20%20%20%20%20%20Footer%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20v-if%3D%22action%22%20%23action%3E%0D%0A%20%20%20%20%20%20%3Cn-space%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20size%3D%22small%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%201%24%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20size%3D%22small%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%2010%24%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%20%20%3Cn-button%20size%3D%22small%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctemplate%20%23icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccash-icon%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fn-icon%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%20%20%20%20100%24%0D%0A%20%20%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%20%20%3C%2Fn-space%3E%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-thing%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20CashOutline%20as%20CashIcon%20%7D%20from%20%22%40vicons%2Fionicons5%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20components%3A%20%7B%0A%20%20%20%20CashIcon%0A%20%20%7D%2C%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20avatar%3A%20ref(true)%2C%0A%20%20%20%20%20%20header%3A%20ref(true)%2C%0A%20%20%20%20%20%20headerExtra%3A%20ref(true)%2C%0A%20%20%20%20%20%20description%3A%20ref(true)%2C%0A%20%20%20%20%20%20footer%3A%20ref(true)%2C%0A%20%20%20%20%20%20action%3A%20ref(true)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:e(()=>[o(" Content indented ")]),content:e(()=>[t(_,null,{default:e(()=>[o("Content can be indented after avatar.")]),_:1})]),demo:e(()=>[n("div",R,[t(E,null,{default:e(()=>[t(s,{span:12},{default:e(()=>[t(r,{checked:a.avatar,"onUpdate:checked":l[0]||(l[0]=i=>a.avatar=i)},{default:e(()=>[o(" Avatar ")]),_:1},8,["checked"])]),_:1}),t(s,{span:12},{default:e(()=>[t(r,{checked:a.action,"onUpdate:checked":l[1]||(l[1]=i=>a.action=i)},{default:e(()=>[o(" Action ")]),_:1},8,["checked"])]),_:1})]),_:1}),t(E,null,{default:e(()=>[t(s,{span:12},{default:e(()=>[t(r,{checked:a.header,"onUpdate:checked":l[2]||(l[2]=i=>a.header=i)},{default:e(()=>[o(" Header ")]),_:1},8,["checked"])]),_:1}),t(s,{span:12},{default:e(()=>[t(r,{checked:a.headerExtra,"onUpdate:checked":l[3]||(l[3]=i=>a.headerExtra=i)},{default:e(()=>[o(" Header Extra ")]),_:1},8,["checked"])]),_:1})]),_:1}),t(E,null,{default:e(()=>[t(s,{span:12},{default:e(()=>[t(r,{checked:a.description,"onUpdate:checked":l[4]||(l[4]=i=>a.description=i)},{default:e(()=>[o(" Description ")]),_:1},8,["checked"])]),_:1}),t(s,{span:12},{default:e(()=>[t(r,{checked:a.footer,"onUpdate:checked":l[5]||(l[5]=i=>a.footer=i)},{default:e(()=>[o(" Footer ")]),_:1},8,["checked"])]),_:1})]),_:1}),t(F),t(v,{"content-indented":""},U({default:e(()=>[o(" Money is any item or verifiable record that is generally accepted as payment for goods and services and repayment of debts, such as taxes, in a particular country or socio-economic context. ")]),_:2},[a.avatar?{name:"avatar",fn:e(()=>[t(d,null,{default:e(()=>[t(D,null,{default:e(()=>[t(A)]),_:1})]),_:1})]),key:"0"}:void 0,a.header?{name:"header",fn:e(()=>[o(" Money ")]),key:"1"}:void 0,a.headerExtra?{name:"header-extra",fn:e(()=>[t(u,{circle:"",size:"small"},{icon:e(()=>[t(A)]),_:1})]),key:"2"}:void 0,a.description?{name:"description",fn:e(()=>[o(" Description ")]),key:"3"}:void 0,a.footer?{name:"footer",fn:e(()=>[o(" Footer ")]),key:"4"}:void 0,a.action?{name:"action",fn:e(()=>[t(h,null,{default:e(()=>[t(u,{size:"small"},{icon:e(()=>[t(D,null,{default:e(()=>[t(A)]),_:1})]),default:e(()=>[o(" 1$ ")]),_:1}),t(u,{size:"small"},{icon:e(()=>[t(D,null,{default:e(()=>[t(A)]),_:1})]),default:e(()=>[o(" 10$ ")]),_:1}),t(u,{size:"small"},{icon:e(()=>[t(D,null,{default:e(()=>[t(A)]),_:1})]),default:e(()=>[o(" 100$ ")]),_:1})]),_:1})]),key:"5"}:void 0]),1024)])]),_:1})}const q=y(j,[["render",W]]),G={components:{basicVueDemo:O,indentVueDemo:q},setup(){const a=V(),l=$(()=>!a.value),k=a;return{showAnchor:l,displayMode:S(),wrapperStyle:w(()=>k.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:w(()=>l.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/thing/demos/enUS/index.demo-entry.md"}}},J={class:"md-table-wrapper"},K=n("thead",null,[n("tr",null,[n("th",null,"Name"),n("th",null,"Type"),n("th",null,"Default"),n("th",null,"Description"),n("th",null,"Version")])],-1),L=n("td",null,"content-indented",-1),Q=n("td",null,"Whether to enable content indentation.",-1),X=n("td",null,null,-1),Y=n("td",null,"content",-1),Z=n("td",null,"Content area.",-1),e0=n("td",null,null,-1),t0=n("td",null,"content-class",-1),n0=n("td",null,"Content area class.",-1),o0=n("td",null,"2.36.0",-1),a0=n("td",null,"content-style",-1),c0=n("td",null,"Content area style.",-1),l0=n("td",null,"2.32.2",-1),d0=n("td",null,"description",-1),i0=n("td",null,"Description information.",-1),r0=n("td",null,null,-1),s0=n("td",null,"description-class",-1),A0=n("td",null,"Description area class.",-1),D0=n("td",null,"2.36.0",-1),u0=n("td",null,"description-style",-1),C0=n("td",null,"Description area style.",-1),p0=n("td",null,"2.32.2",-1),E0=n("td",null,"title-extra",-1),h0=n("td",null,"Additional information for the title.",-1),m0=n("td",null,null,-1),f0=n("td",null,"title",-1),_0=n("td",null,"Title information.",-1),F0=n("td",null,null,-1),v0={class:"md-table-wrapper"},k0=n("thead",null,[n("tr",null,[n("th",null,"Name"),n("th",null,"Parameters"),n("th",null,"Description")])],-1),b0=n("td",null,"action",-1),y0=n("td",null,"Action's slot.",-1),x0=n("td",null,"avatar",-1),g0=n("td",null,"Avatar's slot.",-1),w0=n("td",null,"default",-1),B0=n("td",null,"Content's slot.",-1),z0=n("td",null,"description",-1),M0=n("td",null,"Description's slot.",-1),I0=n("td",null,"footer",-1),U0=n("td",null,"Footer's slot.",-1),V0=n("td",null,"header-extra",-1),$0=n("td",null,"Header extra's slot.",-1),S0=n("td",null,"header",-1),H0=n("td",null,"Header's slot.",-1),T0={key:0,style:{width:"192px"}};function N0(a,l,k,p,x,g){const _=c("edit-on-github-header"),r=c("n-p"),s=c("n-h2"),E=c("basicVueDemo"),F=c("indentVueDemo"),A=c("component-demos"),D=c("n-h3"),d=c("n-text"),u=c("n-table"),h=c("n-anchor-link"),v=c("n-anchor");return m(),B("div",{class:"doc",style:z(p.wrapperStyle)},[n("div",{style:z(p.contentStyle)},[t(_,{"relative-url":"D:/Code/naive-ui/src/thing/demos/enUS/index.demo-entry.md",text:"Thing"}),t(r,null,{default:e(()=>[o("When you want to describe a thing, use thing. If you find it doesn't fit you demand, write one by yourself.")]),_:1}),t(r,null,{default:e(()=>[o("I wish there is a way to build all kinds of frequently used layout inside a component. It takes me some time to figure out that the component already exist, the brower itself.")]),_:1}),t(s,{id:"Demos"},{default:e(()=>[o("Demos")]),_:1}),t(A,{span:2},{default:e(()=>[t(E),t(F)]),_:1}),t(s,{id:"API"},{default:e(()=>[o("API")]),_:1}),t(D,{id:"Thing-Props"},{default:e(()=>[o("Thing Props")]),_:1}),n("div",J,[t(u,{"single-column":"",class:"md-table"},{default:e(()=>[K,n("tbody",null,[n("tr",null,[L,n("td",null,[t(d,{code:""},{default:e(()=>[o("boolean")]),_:1})]),n("td",null,[t(d,{code:""},{default:e(()=>[o("false")]),_:1})]),Q,X]),n("tr",null,[Y,n("td",null,[t(d,{code:""},{default:e(()=>[o("string")]),_:1})]),n("td",null,[t(d,{code:""},{default:e(()=>[o("undefined")]),_:1})]),Z,e0]),n("tr",null,[t0,n("td",null,[t(d,{code:""},{default:e(()=>[o("string")]),_:1})]),n("td",null,[t(d,{code:""},{default:e(()=>[o("undefined")]),_:1})]),n0,o0]),n("tr",null,[a0,n("td",null,[t(d,{code:""},{default:e(()=>[o("string | Object")]),_:1})]),n("td",null,[t(d,{code:""},{default:e(()=>[o("undefined")]),_:1})]),c0,l0]),n("tr",null,[d0,n("td",null,[t(d,{code:""},{default:e(()=>[o("string")]),_:1})]),n("td",null,[t(d,{code:""},{default:e(()=>[o("undefined")]),_:1})]),i0,r0]),n("tr",null,[s0,n("td",null,[t(d,{code:""},{default:e(()=>[o("string")]),_:1})]),n("td",null,[t(d,{code:""},{default:e(()=>[o("undefined")]),_:1})]),A0,D0]),n("tr",null,[u0,n("td",null,[t(d,{code:""},{default:e(()=>[o("string | Object")]),_:1})]),n("td",null,[t(d,{code:""},{default:e(()=>[o("undefined")]),_:1})]),C0,p0]),n("tr",null,[E0,n("td",null,[t(d,{code:""},{default:e(()=>[o("string")]),_:1})]),n("td",null,[t(d,{code:""},{default:e(()=>[o("undefined")]),_:1})]),h0,m0]),n("tr",null,[f0,n("td",null,[t(d,{code:""},{default:e(()=>[o("string")]),_:1})]),n("td",null,[t(d,{code:""},{default:e(()=>[o("undefined")]),_:1})]),_0,F0])])]),_:1})]),t(D,{id:"Thing-Slots"},{default:e(()=>[o("Thing Slots")]),_:1}),n("div",v0,[t(u,{"single-column":"",class:"md-table"},{default:e(()=>[k0,n("tbody",null,[n("tr",null,[b0,n("td",null,[t(d,{code:""},{default:e(()=>[o("()")]),_:1})]),y0]),n("tr",null,[x0,n("td",null,[t(d,{code:""},{default:e(()=>[o("()")]),_:1})]),g0]),n("tr",null,[w0,n("td",null,[t(d,{code:""},{default:e(()=>[o("()")]),_:1})]),B0]),n("tr",null,[z0,n("td",null,[t(d,{code:""},{default:e(()=>[o("()")]),_:1})]),M0]),n("tr",null,[I0,n("td",null,[t(d,{code:""},{default:e(()=>[o("()")]),_:1})]),U0]),n("tr",null,[V0,n("td",null,[t(d,{code:""},{default:e(()=>[o("()")]),_:1})]),$0]),n("tr",null,[S0,n("td",null,[t(d,{code:""},{default:e(()=>[o("()")]),_:1})]),H0])])]),_:1})])],4),p.showAnchor?(m(),B("div",T0,[t(v,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:e(()=>[(p.displayMode,m(),f(h,{key:0,title:"Basic\r",href:"#basic.vue"})),(p.displayMode,m(),f(h,{key:1,title:"Content indented\r",href:"#indent.vue"})),(p.displayMode,m(),f(h,{key:2,title:"API",href:"#API"})),(p.displayMode,m(),f(h,{key:3,title:"Thing Props",href:"#Thing-Props"})),(p.displayMode,m(),f(h,{key:4,title:"Thing Slots",href:"#Thing-Slots"}))]),_:1})])):H("",!0)],4)}const j0=y(G,[["render",N0]]);export{j0 as default};
