import{j as y,l as E,_,r as n,o as r,i as D,w as l,g as t,e,f as o,t as h,u as L,a as G,b as $,c as S,d as w,n as I,h as O}from"./index-09f026e5.js";const x=y({setup(){return{value:E("Drive My Car"),options:[{label:"Drive My Car",value:"Drive My Car"},{label:"Norwegian Wood",value:"Norwegian Wood"},{label:"You Won't See",value:"You Won't See",disabled:!0},{label:"Nowhere Man",value:"Nowhere Man"},{label:"Think For Yourself",value:"Think For Yourself"},{label:"The Word",value:"The Word"},{label:"Michelle",value:"Michelle",disabled:!0},{label:"What goes on",value:"What goes on"},{label:"Girl",value:"Girl"},{label:"I'm looking through you",value:"I'm looking through you"},{label:"In My Life",value:"In My Life"},{label:"Wait",value:"Wait"}]}}}),z={class:"demo-card__view"};function U(a,A,m,s,b,f){const d=n("n-button"),i=n("n-popselect"),p=n("component-demo");return r(),D(p,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/popselect/demos/enUS/basic.demo.vue",title:"Basic","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-popselect%20v-model%3Avalue%3D%22value%22%20%3Aoptions%3D%22options%22%3E%0D%0A%20%20%20%20%3Cn-button%3E%7B%7B%20value%20%7C%7C%20'Popselect'%20%7D%7D%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-popselect%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref('Drive%20My%20Car')%2C%0D%0A%20%20%20%20%20%20options%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Drive%20My%20Car'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Drive%20My%20Car'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Norwegian%20Wood'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Norwegian%20Wood'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22You%20Won't%20See%22%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22You%20Won't%20See%22%2C%0D%0A%20%20%20%20%20%20%20%20%20%20disabled%3A%20true%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Nowhere%20Man'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Nowhere%20Man'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Think%20For%20Yourself'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Think%20For%20Yourself'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'The%20Word'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'The%20Word'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Michelle'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Michelle'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20disabled%3A%20true%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'What%20goes%20on'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'What%20goes%20on'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Girl'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Girl'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22I'm%20looking%20through%20you%22%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22I'm%20looking%20through%20you%22%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'In%20My%20Life'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'In%20My%20Life'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Wait'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Wait'%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%5D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-popselect%20v-model%3Avalue%3D%22value%22%20%3Aoptions%3D%22options%22%3E%0D%0A%20%20%20%20%3Cn-button%3E%7B%7B%20value%20%7C%7C%20'Popselect'%20%7D%7D%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-popselect%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(%22Drive%20My%20Car%22)%2C%0A%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Drive%20My%20Car%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Drive%20My%20Car%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Norwegian%20Wood%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Norwegian%20Wood%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22You%20Won't%20See%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22You%20Won't%20See%22%2C%0A%20%20%20%20%20%20%20%20%20%20disabled%3A%20true%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Nowhere%20Man%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Nowhere%20Man%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Think%20For%20Yourself%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Think%20For%20Yourself%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22The%20Word%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22The%20Word%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Michelle%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Michelle%22%2C%0A%20%20%20%20%20%20%20%20%20%20disabled%3A%20true%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22What%20goes%20on%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22What%20goes%20on%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Girl%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Girl%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22I'm%20looking%20through%20you%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22I'm%20looking%20through%20you%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22In%20My%20Life%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22In%20My%20Life%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Wait%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Wait%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:l(()=>[t(" Basic ")]),content:l(()=>[]),demo:l(()=>[e("div",z,[o(i,{value:a.value,"onUpdate:value":A[0]||(A[0]=c=>a.value=c),options:a.options},{default:l(()=>[o(d,null,{default:l(()=>[t(h(a.value||"Popselect"),1)]),_:1})]),_:1},8,["value","options"])])]),_:1})}const R=_(x,[["render",U]]),j=y({setup(){return{value:E("Drive My Car"),options:[{label:"Drive My Car",value:"Drive My Car"},{label:"Norwegian Wood",value:"Norwegian Wood"},{label:"You Won't See",value:"You Won't See",disabled:!0},{label:"Nowhere Man",value:"Nowhere Man"},{label:"Think For Yourself",value:"Think For Yourself"},{label:"The Word",value:"The Word"},{label:"Michelle",value:"Michelle",disabled:!0},{label:"What goes on",value:"What goes on"},{label:"Girl",value:"Girl"},{label:"I'm looking through you",value:"I'm looking through you"},{label:"In My Life",value:"In My Life"},{label:"Wait",value:"Wait"}]}}}),q={class:"demo-card__view"};function H(a,A,m,s,b,f){const d=n("n-button"),i=n("n-popselect"),p=n("n-space"),c=n("component-demo");return r(),D(c,{"demo-file-name":"size.vue","relative-url":"D:/Code/naive-ui/src/popselect/demos/enUS/size.demo.vue",title:"Size","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%3E%0D%0A%20%20%20%20%3Cn-popselect%20v-model%3Avalue%3D%22value%22%20%3Aoptions%3D%22options%22%20size%3D%22medium%22%3E%0D%0A%20%20%20%20%20%20%3Cn-button%3E%0D%0A%20%20%20%20%20%20%20%20%7B%7B%20value%20%7C%7C%20'Popselect'%20%7D%7D%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-popselect%3E%0D%0A%20%20%20%20%3Cn-popselect%20v-model%3Avalue%3D%22value%22%20%3Aoptions%3D%22options%22%20size%3D%22large%22%3E%0D%0A%20%20%20%20%20%20%3Cn-button%3E%7B%7B%20value%20%7C%7C%20'Popselect'%20%7D%7D%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-popselect%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref('Drive%20My%20Car')%2C%0D%0A%20%20%20%20%20%20options%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Drive%20My%20Car'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Drive%20My%20Car'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Norwegian%20Wood'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Norwegian%20Wood'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22You%20Won't%20See%22%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22You%20Won't%20See%22%2C%0D%0A%20%20%20%20%20%20%20%20%20%20disabled%3A%20true%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Nowhere%20Man'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Nowhere%20Man'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Think%20For%20Yourself'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Think%20For%20Yourself'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'The%20Word'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'The%20Word'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Michelle'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Michelle'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20disabled%3A%20true%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'What%20goes%20on'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'What%20goes%20on'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Girl'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Girl'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22I'm%20looking%20through%20you%22%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22I'm%20looking%20through%20you%22%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'In%20My%20Life'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'In%20My%20Life'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Wait'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Wait'%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%5D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%3E%0D%0A%20%20%20%20%3Cn-popselect%20v-model%3Avalue%3D%22value%22%20%3Aoptions%3D%22options%22%20size%3D%22medium%22%3E%0D%0A%20%20%20%20%20%20%3Cn-button%3E%0D%0A%20%20%20%20%20%20%20%20%7B%7B%20value%20%7C%7C%20'Popselect'%20%7D%7D%0D%0A%20%20%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-popselect%3E%0D%0A%20%20%20%20%3Cn-popselect%20v-model%3Avalue%3D%22value%22%20%3Aoptions%3D%22options%22%20size%3D%22large%22%3E%0D%0A%20%20%20%20%20%20%3Cn-button%3E%7B%7B%20value%20%7C%7C%20'Popselect'%20%7D%7D%3C%2Fn-button%3E%0D%0A%20%20%20%20%3C%2Fn-popselect%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(%22Drive%20My%20Car%22)%2C%0A%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Drive%20My%20Car%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Drive%20My%20Car%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Norwegian%20Wood%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Norwegian%20Wood%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22You%20Won't%20See%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22You%20Won't%20See%22%2C%0A%20%20%20%20%20%20%20%20%20%20disabled%3A%20true%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Nowhere%20Man%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Nowhere%20Man%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Think%20For%20Yourself%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Think%20For%20Yourself%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22The%20Word%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22The%20Word%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Michelle%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Michelle%22%2C%0A%20%20%20%20%20%20%20%20%20%20disabled%3A%20true%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22What%20goes%20on%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22What%20goes%20on%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Girl%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Girl%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22I'm%20looking%20through%20you%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22I'm%20looking%20through%20you%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22In%20My%20Life%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22In%20My%20Life%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Wait%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Wait%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:l(()=>[t(" Size ")]),content:l(()=>[]),demo:l(()=>[e("div",q,[o(p,null,{default:l(()=>[o(i,{value:a.value,"onUpdate:value":A[0]||(A[0]=C=>a.value=C),options:a.options,size:"medium"},{default:l(()=>[o(d,null,{default:l(()=>[t(h(a.value||"Popselect"),1)]),_:1})]),_:1},8,["value","options"]),o(i,{value:a.value,"onUpdate:value":A[1]||(A[1]=C=>a.value=C),options:a.options,size:"large"},{default:l(()=>[o(d,null,{default:l(()=>[t(h(a.value||"Popselect"),1)]),_:1})]),_:1},8,["value","options"])]),_:1})])]),_:1})}const J=_(j,[["render",H]]),K=y({setup(){return{value:E("Drive My Car"),options:[{label:"Drive My Car",value:"Drive My Car"},{label:"Norwegian Wood",value:"Norwegian Wood"},{label:"You Won't See",value:"You Won't See",disabled:!0},{label:"Nowhere Man",value:"Nowhere Man"},{label:"Think For Yourself",value:"Think For Yourself"},{label:"The Word",value:"The Word"},{label:"Michelle",value:"Michelle",disabled:!0},{label:"What goes on",value:"What goes on"},{label:"Girl",value:"Girl"},{label:"I'm looking through you",value:"I'm looking through you"},{label:"In My Life",value:"In My Life"},{label:"Wait",value:"Wait"}]}}}),Q={class:"demo-card__view"};function X(a,A,m,s,b,f){const d=n("n-button"),i=n("n-popselect"),p=n("component-demo");return r(),D(p,{"demo-file-name":"scrollable.vue","relative-url":"D:/Code/naive-ui/src/popselect/demos/enUS/scrollable.demo.vue",title:"Scrollable","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-popselect%0D%0A%20%20%20%20v-model%3Avalue%3D%22value%22%0D%0A%20%20%20%20%3Aoptions%3D%22options%22%0D%0A%20%20%20%20size%3D%22medium%22%0D%0A%20%20%20%20scrollable%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Cn-button%20style%3D%22margin-right%3A%208px%22%3E%0D%0A%20%20%20%20%20%20%7B%7B%20value%20%7C%7C%20'Popselect'%20%7D%7D%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-popselect%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref('Drive%20My%20Car')%2C%0D%0A%20%20%20%20%20%20options%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Drive%20My%20Car'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Drive%20My%20Car'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Norwegian%20Wood'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Norwegian%20Wood'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22You%20Won't%20See%22%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22You%20Won't%20See%22%2C%0D%0A%20%20%20%20%20%20%20%20%20%20disabled%3A%20true%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Nowhere%20Man'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Nowhere%20Man'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Think%20For%20Yourself'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Think%20For%20Yourself'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'The%20Word'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'The%20Word'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Michelle'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Michelle'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20disabled%3A%20true%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'What%20goes%20on'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'What%20goes%20on'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Girl'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Girl'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22I'm%20looking%20through%20you%22%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22I'm%20looking%20through%20you%22%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'In%20My%20Life'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'In%20My%20Life'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Wait'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Wait'%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%5D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-popselect%0D%0A%20%20%20%20v-model%3Avalue%3D%22value%22%0D%0A%20%20%20%20%3Aoptions%3D%22options%22%0D%0A%20%20%20%20size%3D%22medium%22%0D%0A%20%20%20%20scrollable%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Cn-button%20style%3D%22margin-right%3A%208px%22%3E%0D%0A%20%20%20%20%20%20%7B%7B%20value%20%7C%7C%20'Popselect'%20%7D%7D%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-popselect%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(%22Drive%20My%20Car%22)%2C%0A%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Drive%20My%20Car%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Drive%20My%20Car%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Norwegian%20Wood%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Norwegian%20Wood%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22You%20Won't%20See%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22You%20Won't%20See%22%2C%0A%20%20%20%20%20%20%20%20%20%20disabled%3A%20true%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Nowhere%20Man%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Nowhere%20Man%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Think%20For%20Yourself%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Think%20For%20Yourself%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22The%20Word%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22The%20Word%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Michelle%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Michelle%22%2C%0A%20%20%20%20%20%20%20%20%20%20disabled%3A%20true%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22What%20goes%20on%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22What%20goes%20on%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Girl%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Girl%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22I'm%20looking%20through%20you%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22I'm%20looking%20through%20you%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22In%20My%20Life%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22In%20My%20Life%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Wait%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Wait%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:l(()=>[t(" Scrollable ")]),content:l(()=>[]),demo:l(()=>[e("div",Q,[o(i,{value:a.value,"onUpdate:value":A[0]||(A[0]=c=>a.value=c),options:a.options,size:"medium",scrollable:""},{default:l(()=>[o(d,{style:{"margin-right":"8px"}},{default:l(()=>[t(h(a.value||"Popselect"),1)]),_:1})]),_:1},8,["value","options"])])]),_:1})}const Z=_(K,[["render",X]]),e0=y({setup(){return{value:E(null),options:[{label:"Go Let It Out",value:"Go Let It Out"},{label:"Who Feels Love?",value:"Who Feels Love?"},{label:"Sunday Morning Call",value:"Sunday Morning Call",disabled:!0},{label:"Roll It Over",value:"Roll It Over"}]}}}),l0={class:"demo-card__view"};function o0(a,A,m,s,b,f){const d=n("n-p"),i=n("n-button"),p=n("n-popselect"),c=n("component-demo");return r(),D(c,{"demo-file-name":"multiple.vue","relative-url":"D:/Code/naive-ui/src/popselect/demos/enUS/multiple.demo.vue",title:"Multiple","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-popselect%20v-model%3Avalue%3D%22value%22%20multiple%20%3Aoptions%3D%22options%22%3E%0D%0A%20%20%20%20%3Cn-button%3E%0D%0A%20%20%20%20%20%20%7B%7B%20Array.isArray(value)%20%26%26%20value.length%20%3F%20value%20%3A%20'Nothing'%20%7D%7D%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-popselect%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref%3Cstring%5B%5D%20%7C%20null%3E(null)%2C%0D%0A%20%20%20%20%20%20options%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Go%20Let%20It%20Out'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Go%20Let%20It%20Out'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Who%20Feels%20Love%3F'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Who%20Feels%20Love%3F'%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Sunday%20Morning%20Call'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Sunday%20Morning%20Call'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20disabled%3A%20true%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'Roll%20It%20Over'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20value%3A%20'Roll%20It%20Over'%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%5D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-popselect%20v-model%3Avalue%3D%22value%22%20multiple%20%3Aoptions%3D%22options%22%3E%0D%0A%20%20%20%20%3Cn-button%3E%0D%0A%20%20%20%20%20%20%7B%7B%20Array.isArray(value)%20%26%26%20value.length%20%3F%20value%20%3A%20'Nothing'%20%7D%7D%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-popselect%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(null)%2C%0A%20%20%20%20%20%20options%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Go%20Let%20It%20Out%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Go%20Let%20It%20Out%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Who%20Feels%20Love%3F%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Who%20Feels%20Love%3F%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Sunday%20Morning%20Call%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Sunday%20Morning%20Call%22%2C%0A%20%20%20%20%20%20%20%20%20%20disabled%3A%20true%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20label%3A%20%22Roll%20It%20Over%22%2C%0A%20%20%20%20%20%20%20%20%20%20value%3A%20%22Roll%20It%20Over%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:l(()=>[t(" Multiple ")]),content:l(()=>[o(d,null,{default:l(()=>[t("Select multiple value in popselect.")]),_:1})]),demo:l(()=>[e("div",l0,[o(p,{value:a.value,"onUpdate:value":A[0]||(A[0]=C=>a.value=C),multiple:"",options:a.options},{default:l(()=>[o(i,null,{default:l(()=>[t(h(Array.isArray(a.value)&&a.value.length?a.value:"Nothing"),1)]),_:1})]),_:1},8,["value","options"])])]),_:1})}const t0=_(e0,[["render",o0]]),n0=y({setup(){return{value:E("Empty")}}}),a0={class:"demo-card__view"};function A0(a,A,m,s,b,f){const d=n("n-p"),i=n("n-button"),p=n("n-popselect"),c=n("component-demo");return r(),D(c,{"demo-file-name":"slot.vue","relative-url":"D:/Code/naive-ui/src/popselect/demos/enUS/slot.demo.vue",title:"Slot","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-popselect%20v-model%3Avalue%3D%22value%22%20%3Aoptions%3D%22%5B%5D%22%20trigger%3D%22click%22%3E%0D%0A%20%20%20%20%3Cn-button%3E%7B%7B%20value%20%7C%7C%20'Popselect'%20%7D%7D%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Ctemplate%20%23empty%3E%0D%0A%20%20%20%20%20%20Nothing%20to%20see%2C%20here%20is%20empty.%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20%23action%3E%0D%0A%20%20%20%20%20%20If%20you%20click%20this%20demo%2C%20you%20may%20need%20it.%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-popselect%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref('Empty')%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-popselect%20v-model%3Avalue%3D%22value%22%20%3Aoptions%3D%22%5B%5D%22%20trigger%3D%22click%22%3E%0D%0A%20%20%20%20%3Cn-button%3E%7B%7B%20value%20%7C%7C%20'Popselect'%20%7D%7D%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Ctemplate%20%23empty%3E%0D%0A%20%20%20%20%20%20Nothing%20to%20see%2C%20here%20is%20empty.%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3Ctemplate%20%23action%3E%0D%0A%20%20%20%20%20%20If%20you%20click%20this%20demo%2C%20you%20may%20need%20it.%0D%0A%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%3C%2Fn-popselect%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(%22Empty%22)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:l(()=>[t(" Slot ")]),content:l(()=>[o(d,null,{default:l(()=>[t("Is there anybody who needs slots in a select menu?")]),_:1})]),demo:l(()=>[e("div",a0,[o(p,{value:a.value,"onUpdate:value":A[0]||(A[0]=C=>a.value=C),options:[],trigger:"click"},{empty:l(()=>[t(" Nothing to see, here is empty. ")]),action:l(()=>[t(" If you click this demo, you may need it. ")]),default:l(()=>[o(i,null,{default:l(()=>[t(h(a.value||"Popselect"),1)]),_:1})]),_:1},8,["value"])])]),_:1})}const u0=_(n0,[["render",A0]]),s0={components:{basicVueDemo:R,sizeVueDemo:J,scrollableVueDemo:Z,multipleVueDemo:t0,slotVueDemo:u0},setup(){const a=L(),A=G(()=>!a.value),m=a;return{showAnchor:A,displayMode:$(),wrapperStyle:S(()=>m.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:S(()=>A.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/popselect/demos/enUS/index.demo-entry.md"}}},r0={class:"md-table-wrapper"},i0=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Description"),e("th",null,"Version")])],-1),D0=e("td",null,"multiple",-1),d0=e("td",null,"Whether to select multiple values.",-1),p0=e("td",null,null,-1),c0=e("td",null,"node-props",-1),C0=e("td",null,"Option's DOM attrs generator.",-1),v0=e("td",null,"2.30.4",-1),m0=e("td",null,"options",-1),h0=e("td",null,null,-1),_0=e("td",null,"render-label",-1),b0=e("td",null,"Render function of all the options.",-1),f0=e("td",null,null,-1),B0=e("td",null,"scrollable",-1),g0=e("td",null,"Whether the select menu is scrollable.",-1),y0=e("td",null,null,-1),E0=e("td",null,"size",-1),M0=e("td",null,"Size of the Popselect.",-1),W0=e("td",null,null,-1),F0=e("td",null,"value",-1),k0=e("td",null,"Value in controlled mode.",-1),S0=e("td",null,null,-1),w0=e("td",null,"virtual-scroll",-1),I0=e("td",null,"Whether to enable virtual scrolling.",-1),N0=e("td",null,"2.30.4",-1),P0=e("td",null,"on-update:value",-1),T0=e("td",null,"Callback of value updating.",-1),Y0=e("td",null,null,-1),V0={class:"md-table-wrapper"},L0=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Parameters"),e("th",null,"Description"),e("th",null,"Version")])],-1),G0=e("td",null,"action",-1),$0=e("td",null,"Options menu slot.",-1),O0=e("td",null,"2.22.0",-1),x0=e("td",null,"empty",-1),z0=e("td",null,"Empty state slot for the options menu.",-1),U0=e("td",null,"2.22.0",-1),R0={key:0,style:{width:"192px"}};function j0(a,A,m,s,b,f){const d=n("edit-on-github-header"),i=n("n-p"),p=n("n-h2"),c=n("basicVueDemo"),C=n("sizeVueDemo"),N=n("scrollableVueDemo"),P=n("multipleVueDemo"),T=n("slotVueDemo"),Y=n("component-demos"),F=n("n-h3"),u=n("n-text"),M=n("n-a"),W=n("router-link"),k=n("n-table"),v=n("n-anchor-link"),V=n("n-anchor");return r(),w("div",{class:"doc",style:I(s.wrapperStyle)},[e("div",{style:I(s.contentStyle)},[o(d,{"relative-url":"D:/Code/naive-ui/src/popselect/demos/enUS/index.demo-entry.md",text:"Popselect"}),o(i,null,{default:l(()=>[t("If you want select some options but don't want a picker, you can use popselect instead.")]),_:1}),o(p,{id:"Demos"},{default:l(()=>[t("Demos")]),_:1}),o(Y,{span:2},{default:l(()=>[o(c),o(C),o(N),o(P),o(T)]),_:1}),o(p,{id:"API"},{default:l(()=>[t("API")]),_:1}),o(F,{id:"Popselect-Props"},{default:l(()=>[t("Popselect Props")]),_:1}),e("div",r0,[o(k,{"single-column":"",class:"md-table"},{default:l(()=>[i0,e("tbody",null,[e("tr",null,[D0,e("td",null,[o(u,{code:""},{default:l(()=>[t("boolean")]),_:1})]),e("td",null,[o(u,{code:""},{default:l(()=>[t("false")]),_:1})]),d0,p0]),e("tr",null,[c0,e("td",null,[o(u,{code:""},{default:l(()=>[t("(option: SelectOption | SelectGroupOption) => object")]),_:1})]),e("td",null,[o(u,{code:""},{default:l(()=>[t("undefined")]),_:1})]),C0,v0]),e("tr",null,[m0,e("td",null,[o(u,{code:""},{default:l(()=>[t("Array<SelectOption | SelectGroupOption>")]),_:1})]),e("td",null,[o(u,{code:""},{default:l(()=>[t("[]")]),_:1})]),e("td",null,[t("For details of configuration options, see "),o(W,{to:"select#SelectOption-Properties",custom:""},{default:l(({navigate:B,href:g})=>[o(M,{href:g,onClick:B},{default:l(()=>[t("Select")]),_:2},1032,["href","onClick"])]),_:1})]),h0]),e("tr",null,[_0,e("td",null,[o(u,{code:""},{default:l(()=>[t("(option: SelectOption | SelectGroupOption) => VNodeChild")]),_:1})]),e("td",null,[o(u,{code:""},{default:l(()=>[t("undefined")]),_:1})]),b0,f0]),e("tr",null,[B0,e("td",null,[o(u,{code:""},{default:l(()=>[t("boolean")]),_:1})]),e("td",null,[o(u,{code:""},{default:l(()=>[t("false")]),_:1})]),g0,y0]),e("tr",null,[E0,e("td",null,[o(u,{code:""},{default:l(()=>[t("'small' | 'medium' | 'large'")]),_:1})]),e("td",null,[o(u,{code:""},{default:l(()=>[t("'medium'")]),_:1})]),M0,W0]),e("tr",null,[F0,e("td",null,[o(u,{code:""},{default:l(()=>[t("string | number | Array<string | number> | null")]),_:1})]),e("td",null,[o(u,{code:""},{default:l(()=>[t("null")]),_:1})]),k0,S0]),e("tr",null,[w0,e("td",null,[o(u,{code:""},{default:l(()=>[t("boolean")]),_:1})]),e("td",null,[o(u,{code:""},{default:l(()=>[t("false")]),_:1})]),I0,N0]),e("tr",null,[P0,e("td",null,[o(u,{code:""},{default:l(()=>[t("(value: string | number | Array<string | number> | null, option: SelectBaseOption | null | Array<SelectBaseOption>) => void")]),_:1})]),e("td",null,[o(u,{code:""},{default:l(()=>[t("undefined")]),_:1})]),T0,Y0])])]),_:1})]),o(i,null,{default:l(()=>[t("For SelectOption & SelectGroupOption, see "),o(W,{to:"select#SelectOption-Properties",custom:""},{default:l(({navigate:B,href:g})=>[o(M,{href:g,onClick:B},{default:l(()=>[t("Select")]),_:2},1032,["href","onClick"])]),_:1})]),_:1}),o(i,null,{default:l(()=>[t("For other props, see "),o(W,{to:"popover#Popover-Props",custom:""},{default:l(({navigate:B,href:g})=>[o(M,{href:g,onClick:B},{default:l(()=>[t("Popover")]),_:2},1032,["href","onClick"])]),_:1})]),_:1}),o(F,{id:"Popselect-Slots"},{default:l(()=>[t("Popselect Slots")]),_:1}),e("div",V0,[o(k,{"single-column":"",class:"md-table"},{default:l(()=>[L0,e("tbody",null,[e("tr",null,[G0,e("td",null,[o(u,{code:""},{default:l(()=>[t("()")]),_:1})]),$0,O0]),e("tr",null,[x0,e("td",null,[o(u,{code:""},{default:l(()=>[t("()")]),_:1})]),z0,U0])])]),_:1})])],4),s.showAnchor?(r(),w("div",R0,[o(V,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:l(()=>[(s.displayMode,r(),D(v,{key:0,title:"Basic\r",href:"#basic.vue"})),(s.displayMode,r(),D(v,{key:1,title:"Size\r",href:"#size.vue"})),(s.displayMode,r(),D(v,{key:2,title:"Scrollable\r",href:"#scrollable.vue"})),(s.displayMode,r(),D(v,{key:3,title:"Multiple\r",href:"#multiple.vue"})),(s.displayMode,r(),D(v,{key:4,title:"Slot\r",href:"#slot.vue"})),(s.displayMode,r(),D(v,{key:5,title:"API",href:"#API"})),(s.displayMode,r(),D(v,{key:6,title:"Popselect Props",href:"#Popselect-Props"})),(s.displayMode,r(),D(v,{key:7,title:"Popselect Slots",href:"#Popselect-Slots"}))]),_:1})])):O("",!0)],4)}const H0=_(s0,[["render",j0]]);export{H0 as default};
