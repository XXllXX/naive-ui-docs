import{j as x,l as f,_ as y,r as s,o as l,i as h,w as t,g as a,e,f as n,d,Y as E,Z as b,t as B,c as _,au as N,h as C,u as T,a as U,b as R,n as F}from"./index-DxZkTPDs.js";const W=x({setup(){const o=f(6);return{count:o,handleLoad:()=>{o.value+=1}}}}),z={class:"demo-card__view"};function O(o,A,u,D,m,c){const p=s("n-infinite-scroll"),r=s("component-demo");return l(),h(r,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/infinite-scroll/demos/enUS/basic.demo.vue",title:"Basic","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-infinite-scroll%20style%3D%22height%3A%20240px%22%20%3Adistance%3D%2210%22%20%40load%3D%22handleLoad%22%3E%0D%0A%20%20%20%20%3Cdiv%20v-for%3D%22i%20in%20count%22%20%3Akey%3D%22i%22%20class%3D%22item%22%3E%0D%0A%20%20%20%20%20%20%7B%7B%20i%20%7D%7D%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%3C%2Fn-infinite-scroll%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20count%20%3D%20ref(6)%0D%0A%20%20%20%20const%20handleLoad%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20count.value%20%2B%3D%201%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20count%2C%0D%0A%20%20%20%20%20%20handleLoad%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0D%0A.item%20%7B%0D%0A%20%20display%3A%20flex%3B%0D%0A%20%20align-items%3A%20center%3B%0D%0A%20%20height%3A%2046px%3B%0D%0A%20%20justify-content%3A%20center%3B%0D%0A%20%20margin-bottom%3A%2010px%3B%0D%0A%20%20background-color%3A%20rgba(0%2C%20128%2C%200%2C%200.16)%3B%0D%0A%7D%0D%0A%0D%0A.item%3Alast-child%20%7B%0D%0A%20%20margin-bottom%3A%200%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-infinite-scroll%20style%3D%22height%3A%20240px%22%20%3Adistance%3D%2210%22%20%40load%3D%22handleLoad%22%3E%0D%0A%20%20%20%20%3Cdiv%20v-for%3D%22i%20in%20count%22%20%3Akey%3D%22i%22%20class%3D%22item%22%3E%0D%0A%20%20%20%20%20%20%7B%7B%20i%20%7D%7D%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%3C%2Fn-infinite-scroll%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20count%20%3D%20ref(6)%3B%0A%20%20%20%20const%20handleLoad%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20count.value%20%2B%3D%201%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20count%2C%0A%20%20%20%20%20%20handleLoad%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0D%0A.item%20%7B%0D%0A%20%20display%3A%20flex%3B%0D%0A%20%20align-items%3A%20center%3B%0D%0A%20%20height%3A%2046px%3B%0D%0A%20%20justify-content%3A%20center%3B%0D%0A%20%20margin-bottom%3A%2010px%3B%0D%0A%20%20background-color%3A%20rgba(0%2C%20128%2C%200%2C%200.16)%3B%0D%0A%7D%0D%0A%0D%0A.item%3Alast-child%20%7B%0D%0A%20%20margin-bottom%3A%200%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E","language-type":"ts"},{title:t(()=>[a(" Basic ")]),content:t(()=>[]),demo:t(()=>[e("div",z,[n(p,{style:{height:"240px"},distance:10,onLoad:o.handleLoad},{default:t(()=>[(l(!0),d(E,null,b(o.count,i=>(l(),d("div",{key:i,class:"item"},B(i),1))),128))]),_:1},8,["onLoad"])])]),_:1})}const Y=y(W,[["render",O],["__scopeId","data-v-0eedc038"]]),Z=x({setup(){const o=f(!1),A=_(()=>c.value.length>16),u=["https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg","https://avatars.githubusercontent.com/u/20943608?s=60&v=4","https://avatars.githubusercontent.com/u/46394163?s=60&v=4","https://avatars.githubusercontent.com/u/39197136?s=60&v=4","https://avatars.githubusercontent.com/u/19239641?s=60&v=4"],D=["Monday","Tuesday","Wednesday","Thursday","Friday"],m=r=>({key:`${r}`,value:r,avatar:u[r%u.length],message:D[Math.floor(Math.random()*D.length)]}),c=f(Array.from({length:10},(r,i)=>m(i)));return{items:c,noMore:A,loading:o,handleLoad:async()=>{o.value||A.value||(o.value=!0,await new Promise(r=>setTimeout(r,1e3)),c.value.push(m(c.value.length),m(c.value.length+1)),o.value=!1)}}}}),q={class:"demo-card__view"},G=["src"],H={key:0,class:"text"},J={key:1,class:"text"};function K(o,A,u,D,m,c){const p=s("n-infinite-scroll"),r=s("component-demo");return l(),h(r,{"demo-file-name":"chat.vue","relative-url":"D:/Code/naive-ui/src/infinite-scroll/demos/enUS/chat.demo.vue",title:"A bit complex example","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-infinite-scroll%20style%3D%22height%3A%20240px%22%20%3Adistance%3D%2210%22%20%40load%3D%22handleLoad%22%3E%0D%0A%20%20%20%20%3Cdiv%0D%0A%20%20%20%20%20%20v-for%3D%22(item%2C%20index)%20in%20items%22%0D%0A%20%20%20%20%20%20%3Akey%3D%22item.key%22%0D%0A%20%20%20%20%20%20class%3D%22message%22%0D%0A%20%20%20%20%20%20%3Aclass%3D%22%7B%20reverse%3A%20index%20%25%205%20%3D%3D%3D%200%20%7D%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%3Cimg%20class%3D%22avatar%22%20%3Asrc%3D%22item.avatar%22%20alt%3D%22%22%3E%0D%0A%20%20%20%20%20%20%3Cspan%3E%20%7B%7B%20item.message%20%7D%7D%20%7B%7B%20index%20%25%205%20%3D%3D%3D%200%20%3F%20'%3F'%20%3A%20''%20%7D%7D%3C%2Fspan%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%3Cdiv%20v-if%3D%22loading%22%20class%3D%22text%22%3E%0D%0A%20%20%20%20%20%20Loading...%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%3Cdiv%20v-if%3D%22noMore%22%20class%3D%22text%22%3E%0D%0A%20%20%20%20%20%20No%20More%20%F0%9F%A4%AA%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%3C%2Fn-infinite-scroll%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20computed%2C%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20const%20loading%20%3D%20ref(false)%0D%0A%20%20%20%20const%20noMore%20%3D%20computed(()%20%3D%3E%20items.value.length%20%3E%2016)%0D%0A%0D%0A%20%20%20%20const%20avatars%20%3D%20%5B%0D%0A%20%20%20%20%20%20'https%3A%2F%2F07akioni.oss-cn-beijing.aliyuncs.com%2F07akioni.jpeg'%2C%0D%0A%20%20%20%20%20%20'https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F20943608%3Fs%3D60%26v%3D4'%2C%0D%0A%20%20%20%20%20%20'https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F46394163%3Fs%3D60%26v%3D4'%2C%0D%0A%20%20%20%20%20%20'https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F39197136%3Fs%3D60%26v%3D4'%2C%0D%0A%20%20%20%20%20%20'https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19239641%3Fs%3D60%26v%3D4'%0D%0A%20%20%20%20%5D%0D%0A%0D%0A%20%20%20%20const%20messages%20%3D%20%5B'Monday'%2C%20'Tuesday'%2C%20'Wednesday'%2C%20'Thursday'%2C%20'Friday'%5D%0D%0A%0D%0A%20%20%20%20const%20mock%20%3D%20(i%3A%20number)%20%3D%3E%20(%7B%0D%0A%20%20%20%20%20%20key%3A%20%60%24%7Bi%7D%60%2C%0D%0A%20%20%20%20%20%20value%3A%20i%2C%0D%0A%20%20%20%20%20%20avatar%3A%20avatars%5Bi%20%25%20avatars.length%5D%2C%0D%0A%20%20%20%20%20%20message%3A%20messages%5BMath.floor(Math.random()%20*%20messages.length)%5D%0D%0A%20%20%20%20%7D)%0D%0A%0D%0A%20%20%20%20const%20items%20%3D%20ref(Array.from(%7B%20length%3A%2010%20%7D%2C%20(_%2C%20i)%20%3D%3E%20mock(i)))%0D%0A%0D%0A%20%20%20%20const%20handleLoad%20%3D%20async%20()%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20if%20(loading.value%20%7C%7C%20noMore.value)%20return%0D%0A%20%20%20%20%20%20loading.value%20%3D%20true%0D%0A%20%20%20%20%20%20await%20new%20Promise((resolve)%20%3D%3E%20setTimeout(resolve%2C%201000))%0D%0A%20%20%20%20%20%20items.value.push(%0D%0A%20%20%20%20%20%20%20%20...%5Bmock(items.value.length)%2C%20mock(items.value.length%20%2B%201)%5D%0D%0A%20%20%20%20%20%20)%0D%0A%20%20%20%20%20%20loading.value%20%3D%20false%0D%0A%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20items%2C%0D%0A%20%20%20%20%20%20noMore%2C%0D%0A%20%20%20%20%20%20loading%2C%0D%0A%20%20%20%20%20%20handleLoad%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0D%0A.message%20%7B%0D%0A%20%20display%3A%20flex%3B%0D%0A%20%20align-items%3A%20center%3B%0D%0A%20%20margin-bottom%3A%2010px%3B%0D%0A%20%20padding%3A%2010px%3B%0D%0A%7D%0D%0A%0D%0A.message%3Alast-child%20%7B%0D%0A%20%20margin-bottom%3A%200%3B%0D%0A%7D%0D%0A%0D%0A.reverse%20%7B%0D%0A%20%20flex-direction%3A%20row-reverse%3B%0D%0A%7D%0D%0A%0D%0A.text%20%7B%0D%0A%20%20text-align%3A%20center%3B%0D%0A%7D%0D%0A%0D%0A.reverse%20.avatar%20%7B%0D%0A%20%20margin-left%3A%2010px%3B%0D%0A%7D%0D%0A%0D%0A.avatar%20%7B%0D%0A%20%20width%3A%2028px%3B%0D%0A%20%20height%3A%2028px%3B%0D%0A%20%20border-radius%3A%2050%25%3B%0D%0A%20%20margin-right%3A%2010px%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-infinite-scroll%20style%3D%22height%3A%20240px%22%20%3Adistance%3D%2210%22%20%40load%3D%22handleLoad%22%3E%0D%0A%20%20%20%20%3Cdiv%0D%0A%20%20%20%20%20%20v-for%3D%22(item%2C%20index)%20in%20items%22%0D%0A%20%20%20%20%20%20%3Akey%3D%22item.key%22%0D%0A%20%20%20%20%20%20class%3D%22message%22%0D%0A%20%20%20%20%20%20%3Aclass%3D%22%7B%20reverse%3A%20index%20%25%205%20%3D%3D%3D%200%20%7D%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%3Cimg%20class%3D%22avatar%22%20%3Asrc%3D%22item.avatar%22%20alt%3D%22%22%3E%0D%0A%20%20%20%20%20%20%3Cspan%3E%20%7B%7B%20item.message%20%7D%7D%20%7B%7B%20index%20%25%205%20%3D%3D%3D%200%20%3F%20'%3F'%20%3A%20''%20%7D%7D%3C%2Fspan%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%3Cdiv%20v-if%3D%22loading%22%20class%3D%22text%22%3E%0D%0A%20%20%20%20%20%20Loading...%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%3Cdiv%20v-if%3D%22noMore%22%20class%3D%22text%22%3E%0D%0A%20%20%20%20%20%20No%20More%20%F0%9F%A4%AA%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%3C%2Fn-infinite-scroll%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20computed%2C%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20loading%20%3D%20ref(false)%3B%0A%20%20%20%20const%20noMore%20%3D%20computed(()%20%3D%3E%20items.value.length%20%3E%2016)%3B%0A%20%20%20%20%0A%20%20%20%20const%20avatars%20%3D%20%5B%0A%20%20%20%20%20%20%22https%3A%2F%2F07akioni.oss-cn-beijing.aliyuncs.com%2F07akioni.jpeg%22%2C%0A%20%20%20%20%20%20%22https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F20943608%3Fs%3D60%26v%3D4%22%2C%0A%20%20%20%20%20%20%22https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F46394163%3Fs%3D60%26v%3D4%22%2C%0A%20%20%20%20%20%20%22https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F39197136%3Fs%3D60%26v%3D4%22%2C%0A%20%20%20%20%20%20%22https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19239641%3Fs%3D60%26v%3D4%22%0A%20%20%20%20%5D%3B%0A%20%20%20%20%0A%20%20%20%20const%20messages%20%3D%20%5B%22Monday%22%2C%20%22Tuesday%22%2C%20%22Wednesday%22%2C%20%22Thursday%22%2C%20%22Friday%22%5D%3B%0A%20%20%20%20%0A%20%20%20%20const%20mock%20%3D%20(i)%20%3D%3E%20(%7B%0A%20%20%20%20%20%20key%3A%20%60%24%7Bi%7D%60%2C%0A%20%20%20%20%20%20value%3A%20i%2C%0A%20%20%20%20%20%20avatar%3A%20avatars%5Bi%20%25%20avatars.length%5D%2C%0A%20%20%20%20%20%20message%3A%20messages%5BMath.floor(Math.random()%20*%20messages.length)%5D%0A%20%20%20%20%7D)%3B%0A%20%20%20%20%0A%20%20%20%20const%20items%20%3D%20ref(Array.from(%7B%20length%3A%2010%20%7D%2C%20(_%2C%20i)%20%3D%3E%20mock(i)))%3B%0A%20%20%20%20%0A%20%20%20%20const%20handleLoad%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(loading.value%20%7C%7C%20noMore.value)%0A%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20loading.value%20%3D%20true%3B%0A%20%20%20%20%20%20await%20new%20Promise((resolve)%20%3D%3E%20setTimeout(resolve%2C%201e3))%3B%0A%20%20%20%20%20%20items.value.push(%0A%20%20%20%20%20%20%20%20...%5Bmock(items.value.length)%2C%20mock(items.value.length%20%2B%201)%5D%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20loading.value%20%3D%20false%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20items%2C%0A%20%20%20%20%20%20noMore%2C%0A%20%20%20%20%20%20loading%2C%0A%20%20%20%20%20%20handleLoad%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0D%0A.message%20%7B%0D%0A%20%20display%3A%20flex%3B%0D%0A%20%20align-items%3A%20center%3B%0D%0A%20%20margin-bottom%3A%2010px%3B%0D%0A%20%20padding%3A%2010px%3B%0D%0A%7D%0D%0A%0D%0A.message%3Alast-child%20%7B%0D%0A%20%20margin-bottom%3A%200%3B%0D%0A%7D%0D%0A%0D%0A.reverse%20%7B%0D%0A%20%20flex-direction%3A%20row-reverse%3B%0D%0A%7D%0D%0A%0D%0A.text%20%7B%0D%0A%20%20text-align%3A%20center%3B%0D%0A%7D%0D%0A%0D%0A.reverse%20.avatar%20%7B%0D%0A%20%20margin-left%3A%2010px%3B%0D%0A%7D%0D%0A%0D%0A.avatar%20%7B%0D%0A%20%20width%3A%2028px%3B%0D%0A%20%20height%3A%2028px%3B%0D%0A%20%20border-radius%3A%2050%25%3B%0D%0A%20%20margin-right%3A%2010px%3B%0D%0A%7D%0D%0A%3C%2Fstyle%3E","language-type":"ts"},{title:t(()=>[a(" A bit complex example ")]),content:t(()=>[]),demo:t(()=>[e("div",q,[n(p,{style:{height:"240px"},distance:10,onLoad:o.handleLoad},{default:t(()=>[(l(!0),d(E,null,b(o.items,(i,v)=>(l(),d("div",{key:i.key,class:N(["message",{reverse:v%5===0}])},[e("img",{class:"avatar",src:i.avatar,alt:""},null,8,G),e("span",null,B(i.message)+" "+B(v%5===0?"?":""),1)],2))),128)),o.loading?(l(),d("div",H," Loading... ")):C("",!0),o.noMore?(l(),d("div",J," No More 🤪 ")):C("",!0)]),_:1},8,["onLoad"])])]),_:1})}const Q=y(Z,[["render",K],["__scopeId","data-v-c87a4d10"]]),X={components:{basicVueDemo:Y,chatVueDemo:Q},setup(){const o=T(),A=U(()=>!o.value),u=o;return{showAnchor:A,displayMode:R(),wrapperStyle:_(()=>u.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:_(()=>A.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/infinite-scroll/demos/enUS/index.demo-entry.md"}}},e0={class:"md-table-wrapper"},t0=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Description"),e("th",null,"Version")])],-1),n0=e("td",null,"distance",-1),o0=e("td",null,"Distance threshold that triggers loading.",-1),a0=e("td",null,"2.38.2",-1),s0=e("td",null,"scrollbar-props",-1),i0=e("td",null,"2.38.2",-1),l0=e("td",null,"on-load",-1),r0=e("td",null,"The callback function when scrolling to the bottom.",-1),D0=e("td",null,"2.38.2",-1),A0={key:0,style:{width:"192px"}};function c0(o,A,u,D,m,c){const p=s("edit-on-github-header"),r=s("n-p"),i=s("n-text"),v=s("n-h2"),k=s("basicVueDemo"),M=s("chatVueDemo"),w=s("component-demos"),L=s("n-h3"),S=s("n-a"),V=s("router-link"),$=s("n-table"),g=s("n-anchor-link"),P=s("n-anchor");return l(),d("div",{class:"doc",style:F(D.wrapperStyle)},[e("div",{style:F(D.contentStyle)},[n(p,{"relative-url":"D:/Code/naive-ui/src/infinite-scroll/demos/enUS/index.demo-entry.md",text:"Infinite Scroll"}),n(r,null,{default:t(()=>[a("Scroll, scroll, scroll, scroll...")]),_:1}),n(r,null,{default:t(()=>[a("Available since "),n(i,{code:""},{default:t(()=>[a("2.38.2")]),_:1}),a(".")]),_:1}),n(v,{id:"Demos"},{default:t(()=>[a("Demos")]),_:1}),n(w,{span:2},{default:t(()=>[n(k),n(M)]),_:1}),n(v,{id:"API"},{default:t(()=>[a("API")]),_:1}),n(L,{id:"Infinite-Scroll-Props"},{default:t(()=>[a("Infinite Scroll Props")]),_:1}),e("div",e0,[n($,{"single-column":"",class:"md-table"},{default:t(()=>[t0,e("tbody",null,[e("tr",null,[n0,e("td",null,[n(i,{code:""},{default:t(()=>[a("number")]),_:1})]),e("td",null,[n(i,{code:""},{default:t(()=>[a("0")]),_:1})]),o0,a0]),e("tr",null,[s0,e("td",null,[n(i,{code:""},{default:t(()=>[a("Object")]),_:1})]),e("td",null,[n(i,{code:""},{default:t(()=>[a("undefined")]),_:1})]),e("td",null,[a("Attribute reference "),n(V,{to:"scrollbar#Scrollbar-Props",custom:""},{default:t(({navigate:j,href:I})=>[n(S,{href:I,onClick:j},{default:t(()=>[a("Scrollbar props")]),_:2},1032,["href","onClick"])]),_:1}),a(".")]),i0]),e("tr",null,[l0,e("td",null,[n(i,{code:""},{default:t(()=>[a("() => Promise<void> | void")]),_:1})]),e("td",null,[n(i,{code:""},{default:t(()=>[a("undefined")]),_:1})]),r0,D0])])]),_:1})])],4),D.showAnchor?(l(),d("div",A0,[n(P,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(D.displayMode,l(),h(g,{key:0,title:"Basic\r",href:"#basic.vue"})),(D.displayMode,l(),h(g,{key:1,title:"A bit complex example\r",href:"#chat.vue"})),(D.displayMode,l(),h(g,{key:2,title:"API",href:"#API"})),(D.displayMode,l(),h(g,{key:3,title:"Infinite Scroll Props",href:"#Infinite-Scroll-Props"}))]),_:1})])):C("",!0)],4)}const u0=y(X,[["render",c0]]);export{u0 as default};
