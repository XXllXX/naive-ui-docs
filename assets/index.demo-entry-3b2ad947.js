import{j as E,A as k,l as M,av as S,_ as x,r as d,o as r,i as _,w as t,g as a,f as n,e,t as B,u as U,a as P,b as N,c as y,d as v,n as g,h as F}from"./index-09f026e5.js";import{i as $}from"./index-90b7c8d0.js";const I=E({setup(){const o=k();return{value:M(S(Date.now(),1).valueOf()),handleUpdateValue(s,{year:i,month:u,date:p}){o.success(`${i}-${u}-${p}`)},isDateDisabled(s){return!!$(s)}}}}),Y={class:"demo-card__view"};function O(o,s,i,u,p,w){const D=d("n-p"),h=d("n-calendar"),c=d("component-demo");return r(),_(c,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/calendar/demos/enUS/basic.demo.vue",title:"Basic","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-calendar%0D%0A%20%20%20%20v-model%3Avalue%3D%22value%22%0D%0A%20%20%20%20%23%3D%22%7B%20year%2C%20month%2C%20date%20%7D%22%0D%0A%20%20%20%20%3Ais-date-disabled%3D%22isDateDisabled%22%0D%0A%20%20%20%20%40update%3Avalue%3D%22handleUpdateValue%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%7B%7B%20year%20%7D%7D-%7B%7B%20month%20%7D%7D-%7B%7B%20date%20%7D%7D%0D%0A%20%20%3C%2Fn-calendar%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20useMessage%20%7D%20from%20'naive-ui'%0D%0Aimport%20%7B%20isYesterday%2C%20addDays%20%7D%20from%20'date-fns%2Fesm'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20message%20%3D%20useMessage()%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20value%3A%20ref(addDays(Date.now()%2C%201).valueOf())%2C%0D%0A%20%20%20%20%20%20handleUpdateValue%20(%0D%0A%20%20%20%20%20%20%20%20_%3A%20number%2C%0D%0A%20%20%20%20%20%20%20%20%7B%20year%2C%20month%2C%20date%20%7D%3A%20%7B%20year%3A%20number%3B%20month%3A%20number%3B%20date%3A%20number%20%7D%0D%0A%20%20%20%20%20%20)%20%7B%0D%0A%20%20%20%20%20%20%20%20message.success(%60%24%7Byear%7D-%24%7Bmonth%7D-%24%7Bdate%7D%60)%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20isDateDisabled%20(timestamp%3A%20number)%20%7B%0D%0A%20%20%20%20%20%20%20%20if%20(isYesterday(timestamp))%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20return%20true%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20return%20false%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-calendar%0D%0A%20%20%20%20v-model%3Avalue%3D%22value%22%0D%0A%20%20%20%20%23%3D%22%7B%20year%2C%20month%2C%20date%20%7D%22%0D%0A%20%20%20%20%3Ais-date-disabled%3D%22isDateDisabled%22%0D%0A%20%20%20%20%40update%3Avalue%3D%22handleUpdateValue%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%7B%7B%20year%20%7D%7D-%7B%7B%20month%20%7D%7D-%7B%7B%20date%20%7D%7D%0D%0A%20%20%3C%2Fn-calendar%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%20useMessage%20%7D%20from%20%22naive-ui%22%3B%0Aimport%20%7B%20isYesterday%2C%20addDays%20%7D%20from%20%22date-fns%2Fesm%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20message%20%3D%20useMessage()%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20value%3A%20ref(addDays(Date.now()%2C%201).valueOf())%2C%0A%20%20%20%20%20%20handleUpdateValue(_%2C%20%7B%20year%2C%20month%2C%20date%20%7D)%20%7B%0A%20%20%20%20%20%20%20%20message.success(%60%24%7Byear%7D-%24%7Bmonth%7D-%24%7Bdate%7D%60)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20isDateDisabled(timestamp)%20%7B%0A%20%20%20%20%20%20%20%20if%20(isYesterday(timestamp))%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[a(" Basic ")]),content:t(()=>[n(D,null,{default:t(()=>[a("A basic calender.")]),_:1})]),demo:t(()=>[e("div",Y,[n(h,{value:o.value,"onUpdate:value":[s[0]||(s[0]=m=>o.value=m),o.handleUpdateValue],"is-date-disabled":o.isDateDisabled},{default:t(({year:m,month:f,date:A})=>[a(B(m)+"-"+B(f)+"-"+B(A),1)]),_:1},8,["value","is-date-disabled","onUpdate:value"])])]),_:1})}const R=x(I,[["render",O]]),j={components:{basicVueDemo:R},setup(){const o=U(),s=P(()=>!o.value),i=o;return{showAnchor:s,displayMode:N(),wrapperStyle:y(()=>i.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:y(()=>s.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/calendar/demos/enUS/index.demo-entry.md"}}},H={class:"md-table-wrapper"},T=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Description"),e("th",null,"Version")])],-1),z=e("td",null,"default-value",-1),q=e("td",null,"Default selected date's timestamp.",-1),G=e("td",null,null,-1),J=e("td",null,"is-date-disabled",-1),K=e("td",null,"Validator of the date.",-1),L=e("td",null,null,-1),Q=e("td",null,"value",-1),W=e("td",null,"Selected date's timestamp.",-1),X=e("td",null,null,-1),Z=e("td",null,"on-panel-change",-1),ee=e("td",null,"Callback on panel content is changed.",-1),te=e("td",null,"2.24.0",-1),ne=e("td",null,"on-update:value",-1),ae=e("td",null,null,-1),le={class:"md-table-wrapper"},de=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Parameters"),e("th",null,"Description"),e("th",null,"Version")])],-1),oe=e("td",null,"default",-1),se=e("td",null,"Content to be rendered in each date.",-1),ue=e("td",null,null,-1),re=e("td",null,"header",-1),ie=e("td",null,"2.29.1",-1),ce={key:0,style:{width:"192px"}};function me(o,s,i,u,p,w){const D=d("edit-on-github-header"),h=d("n-p"),c=d("n-h2"),m=d("basicVueDemo"),f=d("component-demos"),A=d("n-h3"),l=d("n-text"),C=d("n-table"),b=d("n-anchor-link"),V=d("n-anchor");return r(),v("div",{class:"doc",style:g(u.wrapperStyle)},[e("div",{style:g(u.contentStyle)},[n(D,{"relative-url":"D:/Code/naive-ui/src/calendar/demos/enUS/index.demo-entry.md",text:"Calendar"}),n(h,null,{default:t(()=>[a("How time flies.")]),_:1}),n(c,{id:"Demos"},{default:t(()=>[a("Demos")]),_:1}),n(f,{span:1},{default:t(()=>[n(m)]),_:1}),n(c,{id:"API"},{default:t(()=>[a("API")]),_:1}),n(A,{id:"Calendar-Props"},{default:t(()=>[a("Calendar Props")]),_:1}),e("div",H,[n(C,{"single-column":"",class:"md-table"},{default:t(()=>[T,e("tbody",null,[e("tr",null,[z,e("td",null,[n(l,{code:""},{default:t(()=>[a("number")]),_:1})]),e("td",null,[n(l,{code:""},{default:t(()=>[a("null")]),_:1})]),q,G]),e("tr",null,[J,e("td",null,[n(l,{code:""},{default:t(()=>[a("(timestamp: number) => boolean")]),_:1})]),e("td",null,[n(l,{code:""},{default:t(()=>[a("undefined")]),_:1})]),K,L]),e("tr",null,[Q,e("td",null,[n(l,{code:""},{default:t(()=>[a("number | null")]),_:1})]),e("td",null,[n(l,{code:""},{default:t(()=>[a("undefined")]),_:1})]),W,X]),e("tr",null,[Z,e("td",null,[n(l,{code:""},{default:t(()=>[a("(info: { year: number, month: number })")]),_:1})]),e("td",null,[n(l,{code:""},{default:t(()=>[a("undefined")]),_:1})]),ee,te]),e("tr",null,[ne,e("td",null,[n(l,{code:""},{default:t(()=>[a("(timestamp: number, info: { year: number, month: number, date: number }) => void")]),_:1})]),e("td",null,[n(l,{code:""},{default:t(()=>[a("undefined")]),_:1})]),e("td",null,[a("Callback on date is selected. "),n(l,{code:""},{default:t(()=>[a("month")]),_:1}),a(" starts from 1.")]),ae])])]),_:1})]),n(c,{id:"Calendar-Slots"},{default:t(()=>[a("Calendar Slots")]),_:1}),e("div",le,[n(C,{"single-column":"",class:"md-table"},{default:t(()=>[de,e("tbody",null,[e("tr",null,[oe,e("td",null,[n(l,{code:""},{default:t(()=>[a("({ year: number, month: number, date: number })")]),_:1})]),se,ue]),e("tr",null,[re,e("td",null,[n(l,{code:""},{default:t(()=>[a("(props: { year: number, month: number })")]),_:1})]),e("td",null,[a("Header of the calendar. "),n(l,{code:""},{default:t(()=>[a("month")]),_:1}),a(" starts from 1.")]),ie])])]),_:1})])],4),u.showAnchor?(r(),v("div",ce,[n(V,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(u.displayMode,r(),_(b,{key:0,title:"Basic\r",href:"#basic.vue"})),(u.displayMode,r(),_(b,{key:1,title:"API",href:"#API"})),(u.displayMode,r(),_(b,{key:2,title:"Calendar Props",href:"#Calendar-Props"}))]),_:1})])):F("",!0)],4)}const De=x(j,[["render",me]]);export{De as default};
