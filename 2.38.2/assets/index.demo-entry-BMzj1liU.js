import{j as R,l as F,c as f,aA as N,k as w,aB as I,_ as k,r as a,o as c,i as A,w as t,g as e,f as o,e as n,t as V,u as L,a as S,b as $,d as C,n as _,h as U}from"./index-DxZkTPDs.js";const d=F("light"),z=f(()=>({theme:d.value==="light"?N:w})),{message:q,notification:G,dialog:H,loadingBar:B,modal:J}=I(["message","dialog","notification","loadingBar","modal"],{configProviderProps:z}),K=R({setup(){return{theme:d,handleThemeChangeClick(){d.value==="light"?d.value="dark":d.value="light"},handleMessageTriggerClick(){q.info("Message")},handleNotificationTriggerClick(){G.create({title:"Notification"})},handleDialogTriggerClick(){H.info({title:"Dialog"})},handleModalTriggerClick(){J.create({preset:"card",title:"Modal"})},handleLoadingBarTriggerClick(){B.start(),setTimeout(()=>{B.finish()},1e3)}}}}),O={class:"demo-card__view"};function Q(s,D,p,r,P,v){const h=a("n-text"),i=a("n-p"),l=a("n-button"),m=a("n-space"),g=a("component-demo");return c(),A(g,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/discrete/demos/enUS/basic.demo.vue",title:"Basic","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleThemeChangeClick%22%3E%0D%0A%20%20%20%20%20%20theme%3A%20%7B%7B%20theme%20%7D%7D%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleMessageTriggerClick%22%3E%0D%0A%20%20%20%20%20%20message%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleNotificationTriggerClick%22%3E%0D%0A%20%20%20%20%20%20notification%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleDialogTriggerClick%22%3E%0D%0A%20%20%20%20%20%20dialog%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleLoadingBarTriggerClick%22%3E%0D%0A%20%20%20%20%20%20loadingBar%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleModalTriggerClick%22%3E%0D%0A%20%20%20%20%20%20modal%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20computed%2C%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%0D%0A%20%20createDiscreteApi%2C%0D%0A%20%20ConfigProviderProps%2C%0D%0A%20%20darkTheme%2C%0D%0A%20%20lightTheme%0D%0A%7D%20from%20'naive-ui'%0D%0A%0D%0Aconst%20themeRef%20%3D%20ref%3C'light'%20%7C%20'dark'%3E('light')%0D%0Aconst%20configProviderPropsRef%20%3D%20computed%3CConfigProviderProps%3E(()%20%3D%3E%20(%7B%0D%0A%20%20theme%3A%20themeRef.value%20%3D%3D%3D%20'light'%20%3F%20lightTheme%20%3A%20darkTheme%0D%0A%7D))%0D%0A%0D%0Aconst%20%7B%20message%2C%20notification%2C%20dialog%2C%20loadingBar%2C%20modal%20%7D%20%3D%20createDiscreteApi(%0D%0A%20%20%5B'message'%2C%20'dialog'%2C%20'notification'%2C%20'loadingBar'%2C%20'modal'%5D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20configProviderProps%3A%20configProviderPropsRef%0D%0A%20%20%7D%0D%0A)%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20theme%3A%20themeRef%2C%0D%0A%20%20%20%20%20%20handleThemeChangeClick%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20if%20(themeRef.value%20%3D%3D%3D%20'light')%20themeRef.value%20%3D%20'dark'%0D%0A%20%20%20%20%20%20%20%20else%20themeRef.value%20%3D%20'light'%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20handleMessageTriggerClick%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20message.info('Message')%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20handleNotificationTriggerClick%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20notification.create(%7B%20title%3A%20'Notification'%20%7D)%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20handleDialogTriggerClick%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20dialog.info(%7B%20title%3A%20'Dialog'%20%7D)%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20handleModalTriggerClick%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20modal.create(%7B%0D%0A%20%20%20%20%20%20%20%20%20%20preset%3A%20'card'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20title%3A%20'Modal'%0D%0A%20%20%20%20%20%20%20%20%7D)%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20handleLoadingBarTriggerClick%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20loadingBar.start()%0D%0A%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20loadingBar.finish()%0D%0A%20%20%20%20%20%20%20%20%7D%2C%201000)%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-space%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleThemeChangeClick%22%3E%0D%0A%20%20%20%20%20%20theme%3A%20%7B%7B%20theme%20%7D%7D%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleMessageTriggerClick%22%3E%0D%0A%20%20%20%20%20%20message%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleNotificationTriggerClick%22%3E%0D%0A%20%20%20%20%20%20notification%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleDialogTriggerClick%22%3E%0D%0A%20%20%20%20%20%20dialog%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleLoadingBarTriggerClick%22%3E%0D%0A%20%20%20%20%20%20loadingBar%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%20%20%3Cn-button%20%40click%3D%22handleModalTriggerClick%22%3E%0D%0A%20%20%20%20%20%20modal%0D%0A%20%20%20%20%3C%2Fn-button%3E%0D%0A%20%20%3C%2Fn-space%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20computed%2C%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0Aimport%20%7B%0A%20%20createDiscreteApi%2C%0A%20%20darkTheme%2C%0A%20%20lightTheme%0A%7D%20from%20%22naive-ui%22%3B%0A%0Aconst%20themeRef%20%3D%20ref(%22light%22)%3B%0Aconst%20configProviderPropsRef%20%3D%20computed(()%20%3D%3E%20(%7B%0A%20%20theme%3A%20themeRef.value%20%3D%3D%3D%20%22light%22%20%3F%20lightTheme%20%3A%20darkTheme%0A%7D))%3B%0A%0Aconst%20%7B%20message%2C%20notification%2C%20dialog%2C%20loadingBar%2C%20modal%20%7D%20%3D%20createDiscreteApi(%0A%20%20%5B%22message%22%2C%20%22dialog%22%2C%20%22notification%22%2C%20%22loadingBar%22%2C%20%22modal%22%5D%2C%0A%20%20%7B%0A%20%20%20%20configProviderProps%3A%20configProviderPropsRef%0A%20%20%7D%0A)%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20theme%3A%20themeRef%2C%0A%20%20%20%20%20%20handleThemeChangeClick()%20%7B%0A%20%20%20%20%20%20%20%20if%20(themeRef.value%20%3D%3D%3D%20%22light%22)%0A%20%20%20%20%20%20%20%20%20%20themeRef.value%20%3D%20%22dark%22%3B%0A%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20themeRef.value%20%3D%20%22light%22%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20handleMessageTriggerClick()%20%7B%0A%20%20%20%20%20%20%20%20message.info(%22Message%22)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20handleNotificationTriggerClick()%20%7B%0A%20%20%20%20%20%20%20%20notification.create(%7B%20title%3A%20%22Notification%22%20%7D)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20handleDialogTriggerClick()%20%7B%0A%20%20%20%20%20%20%20%20dialog.info(%7B%20title%3A%20%22Dialog%22%20%7D)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20handleModalTriggerClick()%20%7B%0A%20%20%20%20%20%20%20%20modal.create(%7B%0A%20%20%20%20%20%20%20%20%20%20preset%3A%20%22card%22%2C%0A%20%20%20%20%20%20%20%20%20%20title%3A%20%22Modal%22%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20handleLoadingBarTriggerClick()%20%7B%0A%20%20%20%20%20%20%20%20loadingBar.start()%3B%0A%20%20%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20loadingBar.finish()%3B%0A%20%20%20%20%20%20%20%20%7D%2C%201e3)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:t(()=>[e(" Basic ")]),content:t(()=>[o(i,null,{default:t(()=>[e("Use "),o(h,{code:""},{default:t(()=>[e("createDiscreteApi")]),_:1}),e(" to create series of API.")]),_:1})]),demo:t(()=>[n("div",O,[o(m,null,{default:t(()=>[o(l,{onClick:s.handleThemeChangeClick},{default:t(()=>[e(" theme: "+V(s.theme),1)]),_:1},8,["onClick"]),o(l,{onClick:s.handleMessageTriggerClick},{default:t(()=>[e(" message ")]),_:1},8,["onClick"]),o(l,{onClick:s.handleNotificationTriggerClick},{default:t(()=>[e(" notification ")]),_:1},8,["onClick"]),o(l,{onClick:s.handleDialogTriggerClick},{default:t(()=>[e(" dialog ")]),_:1},8,["onClick"]),o(l,{onClick:s.handleLoadingBarTriggerClick},{default:t(()=>[e(" loadingBar ")]),_:1},8,["onClick"]),o(l,{onClick:s.handleModalTriggerClick},{default:t(()=>[e(" modal ")]),_:1},8,["onClick"])]),_:1})])]),_:1})}const W=k(K,[["render",Q]]),X={components:{basicVueDemo:W},setup(){const s=L(),D=S(()=>!s.value),p=s;return{showAnchor:D,displayMode:$(),wrapperStyle:f(()=>p.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:f(()=>D.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/discrete/demos/enUS/index.demo-entry.md"}}},Y=n("pre",null,[n("span",{class:"hljs-keyword"},"function"),e(),n("span",{class:"hljs-title function_"},"createDiscreteApi"),e("("),n("span",{class:"hljs-params"},[e(`
  includes: `),n("span",{class:"hljs-built_in"},"Array"),e("<"),n("span",{class:"hljs-string"},"'message'"),e(" | "),n("span",{class:"hljs-string"},"'dialog'"),e(" | "),n("span",{class:"hljs-string"},"'notification'"),e(" | "),n("span",{class:"hljs-string"},"'loadingBar'"),e(`>,
  options: {
    configProviderProps: Ref<ConfigProviderProps> | ConfigProviderProps
    messageProviderProps: Ref<MessageProviderProps> | MessageProviderProps
    dialogProviderProps: Ref<DialogProviderProps> | DialogProviderProps
    notificationProviderProps:
      | Ref<NotificationProviderProps>
      | NotificationProviderProps
    modalProviderProps: Ref<ModalProviderProps> | ModalProviderProps
    loadingBarProviderProps:
      | Ref<LoadingBarProviderProps>
      | LoadingBarProviderProps
  }
`)]),e(`): {
  `),n("span",{class:"hljs-comment"},"// only API specified in `includes` will be created"),e(`
  `),n("span",{class:"hljs-attr"},"message"),e(": "),n("span",{class:"hljs-title class_"},"MessageApi"),e(`
  `),n("span",{class:"hljs-attr"},"dialog"),e(": "),n("span",{class:"hljs-title class_"},"DialogApi"),e(`
  `),n("span",{class:"hljs-attr"},"notification"),e(": "),n("span",{class:"hljs-title class_"},"NotificationApi"),e(`
  `),n("span",{class:"hljs-attr"},"loadingBar"),e(": "),n("span",{class:"hljs-title class_"},"LoadingBarApi"),e(`
  `),n("span",{class:"hljs-attr"},"modal"),e(": "),n("span",{class:"hljs-title class_"},"ModalApi"),e(`
  `),n("span",{class:"hljs-comment"},"// Vue app"),e(`
  `),n("span",{class:"hljs-attr"},"app"),e(": "),n("span",{class:"hljs-title class_"},"App"),e(`
  `),n("span",{class:"hljs-attr"},"unmount"),e(": "),n("span",{class:"hljs-function"},"() =>"),e(),n("span",{class:"hljs-built_in"},"void"),e(`
} {}`)],-1),Z={key:0,style:{width:"192px"}};function e0(s,D,p,r,P,v){const h=a("edit-on-github-header"),i=a("n-text"),l=a("n-p"),m=a("n-alert"),g=a("n-h2"),b=a("basicVueDemo"),T=a("component-demos"),E=a("n-h3"),y=a("n-code"),x=a("n-scrollbar"),M=a("n-card"),u=a("n-anchor-link"),j=a("n-anchor");return c(),C("div",{class:"doc",style:_(r.wrapperStyle)},[n("div",{style:_(r.contentStyle)},[o(h,{"relative-url":"D:/Code/naive-ui/src/discrete/demos/enUS/index.demo-entry.md",text:"Discrete API（v2.29.0)"}),o(l,null,{default:t(()=>[e("If you want to use "),o(i,{code:""},{default:t(()=>[e("useDialog")]),_:1}),e(", "),o(i,{code:""},{default:t(()=>[e("useMessage")]),_:1}),e(", "),o(i,{code:""},{default:t(()=>[e("useNotification")]),_:1}),e(", "),o(i,{code:""},{default:t(()=>[e("useLoadingBar")]),_:1}),e(", "),o(i,{code:""},{default:t(()=>[e("useModal")]),_:1}),e(" outside "),o(i,{code:""},{default:t(()=>[e("setup")]),_:1}),e(", you can use "),o(i,{code:""},{default:t(()=>[e("createDiscreteApi")]),_:1}),e(" to create corresponding API.")]),_:1}),o(m,{title:"Caveat",type:"warning",bordered:!1},{default:t(()=>[e(" 1. Discrete API won't be affected by "),o(i,{code:""},{default:t(()=>[e("n-xxx-provider")]),_:1}),e(" in current app. If you need to share config, you should sync them manually. Also, you'd better not using discrete API and normal API together. 2. Do not call "),o(i,{code:""},{default:t(()=>[e("createDiscreteApi")]),_:1}),e(" in "),o(i,{code:""},{default:t(()=>[e("setup")]),_:1}),e(" since it may cause some unexpected behaviors. ")]),_:1}),o(g,{id:"Demo"},{default:t(()=>[e("Demo")]),_:1}),o(T,{span:2},{default:t(()=>[o(b)]),_:1}),o(g,{id:"API"},{default:t(()=>[e("API")]),_:1}),o(E,{id:"createDiscreteApi"},{default:t(()=>[e("createDiscreteApi")]),_:1}),o(M,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:t(()=>[o(x,{"x-scrollable":"","content-style":"padding: 16px;"},{default:t(()=>[o(y,null,{default:t(()=>[Y]),_:1})]),_:1})]),_:1})],4),r.showAnchor?(c(),C("div",Z,[o(j,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(r.displayMode,c(),A(u,{key:0,title:"Basic\r",href:"#basic.vue"})),(r.displayMode,c(),A(u,{key:1,title:"API",href:"#API"})),(r.displayMode,c(),A(u,{key:2,title:"createDiscreteApi",href:"#createDiscreteApi"}))]),_:1})])):U("",!0)],4)}const o0=k(X,[["render",e0]]);export{o0 as default};
