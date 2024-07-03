import{_ as E,r as d,o as s,i as c,w as e,g as l,e as t,f as n,j as v,l as k,h as C,u as N,a as $,b as S,c as B,d as b,n as y}from"./index-9afb4b71.js";const j={},M={class:"demo-card__view"},P=t("thead",null,[t("tr",null,[t("th",null,"复盘"),t("th",null,"赋能"),t("th",null,"协同"),t("th",null,"..."),t("th",null,"串联")])],-1),W=t("tbody",null,[t("tr",null,[t("td",null,"拉通"),t("td",null,"打通"),t("td",null,"树立"),t("td",null,"..."),t("td",null,"履约")]),t("tr",null,[t("td",null,"..."),t("td",null,"..."),t("td",null,"..."),t("td",null,"..."),t("td",null,"...")])],-1);function I(a,i){const _=d("n-table"),u=d("n-watermark"),p=d("component-demo");return s(),c(p,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/watermark/demos/zhCN/basic.demo.vue",title:"基本用法","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-watermark%0D%0A%20%20%20%20content%3D%22%E6%A0%B8%E5%BF%83%E6%9C%BA%E5%AF%86%22%0D%0A%20%20%20%20cross%0D%0A%20%20%20%20selectable%0D%0A%20%20%20%20%3Afont-size%3D%2216%22%0D%0A%20%20%20%20%3Aline-height%3D%2216%22%0D%0A%20%20%20%20%3Awidth%3D%22192%22%0D%0A%20%20%20%20%3Aheight%3D%22128%22%0D%0A%20%20%20%20%3Ax-offset%3D%2212%22%0D%0A%20%20%20%20%3Ay-offset%3D%2228%22%0D%0A%20%20%20%20%3Arotate%3D%22-15%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Cn-table%20%3Abordered%3D%22false%22%20%3Asingle-line%3D%22false%22%3E%0D%0A%20%20%20%20%20%20%3Cthead%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctr%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cth%3E%E5%A4%8D%E7%9B%98%3C%2Fth%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cth%3E%E8%B5%8B%E8%83%BD%3C%2Fth%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cth%3E%E5%8D%8F%E5%90%8C%3C%2Fth%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cth%3E...%3C%2Fth%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cth%3E%E4%B8%B2%E8%81%94%3C%2Fth%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftr%3E%0D%0A%20%20%20%20%20%20%3C%2Fthead%3E%0D%0A%20%20%20%20%20%20%3Ctbody%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctr%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%E6%8B%89%E9%80%9A%3C%2Ftd%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%E6%89%93%E9%80%9A%3C%2Ftd%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%E6%A0%91%E7%AB%8B%3C%2Ftd%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctd%3E...%3C%2Ftd%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctd%3E%E5%B1%A5%E7%BA%A6%3C%2Ftd%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftr%3E%0D%0A%20%20%20%20%20%20%20%20%3Ctr%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctd%3E...%3C%2Ftd%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctd%3E...%3C%2Ftd%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctd%3E...%3C%2Ftd%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctd%3E...%3C%2Ftd%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Ctd%3E...%3C%2Ftd%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Ftr%3E%0D%0A%20%20%20%20%20%20%3C%2Ftbody%3E%0D%0A%20%20%20%20%3C%2Fn-table%3E%0D%0A%20%20%3C%2Fn-watermark%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:e(()=>[l(" 基本用法 ")]),content:e(()=>[]),demo:e(()=>[t("div",M,[n(u,{content:"核心机密",cross:"",selectable:"","font-size":16,"line-height":16,width:192,height:128,"x-offset":12,"y-offset":28,rotate:-15},{default:e(()=>[n(_,{bordered:!1,"single-line":!1},{default:e(()=>[P,W]),_:1})]),_:1})])]),_:1})}const R=E(j,[["render",I]]),T=v({setup(){return{show:k(!1)}}}),U={class:"demo-card__view"};function L(a,i,_,u,p,g){const r=d("n-p"),D=d("n-watermark"),h=d("n-switch"),f=d("component-demo");return s(),c(f,{"demo-file-name":"fullscreen.vue","relative-url":"D:/Code/naive-ui/src/watermark/demos/zhCN/fullscreen.demo.vue",title:"全屏幕","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-watermark%0D%0A%20%20%20%20v-if%3D%22show%22%0D%0A%20%20%20%20content%3D%22%E5%A4%A7%E5%AE%B6%E8%89%B0%E8%8B%A6%E4%B8%80%E4%B8%8B%EF%BC%8C%E4%B8%80%E5%88%87%E9%83%BD%E4%BC%9A%E6%9C%89%E7%9A%84%22%0D%0A%20%20%20%20cross%0D%0A%20%20%20%20fullscreen%0D%0A%20%20%20%20%3Afont-size%3D%2216%22%0D%0A%20%20%20%20%3Aline-height%3D%2216%22%0D%0A%20%20%20%20%3Awidth%3D%22384%22%0D%0A%20%20%20%20%3Aheight%3D%22384%22%0D%0A%20%20%20%20%3Ax-offset%3D%2212%22%0D%0A%20%20%20%20%3Ay-offset%3D%2260%22%0D%0A%20%20%20%20%3Arotate%3D%22-15%22%0D%0A%20%20%2F%3E%0D%0A%20%20%3Cn-switch%20v-model%3Avalue%3D%22show%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20show%3A%20ref(false)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-watermark%0D%0A%20%20%20%20v-if%3D%22show%22%0D%0A%20%20%20%20content%3D%22%E5%A4%A7%E5%AE%B6%E8%89%B0%E8%8B%A6%E4%B8%80%E4%B8%8B%EF%BC%8C%E4%B8%80%E5%88%87%E9%83%BD%E4%BC%9A%E6%9C%89%E7%9A%84%22%0D%0A%20%20%20%20cross%0D%0A%20%20%20%20fullscreen%0D%0A%20%20%20%20%3Afont-size%3D%2216%22%0D%0A%20%20%20%20%3Aline-height%3D%2216%22%0D%0A%20%20%20%20%3Awidth%3D%22384%22%0D%0A%20%20%20%20%3Aheight%3D%22384%22%0D%0A%20%20%20%20%3Ax-offset%3D%2212%22%0D%0A%20%20%20%20%3Ay-offset%3D%2260%22%0D%0A%20%20%20%20%3Arotate%3D%22-15%22%0D%0A%20%20%2F%3E%0D%0A%20%20%3Cn-switch%20v-model%3Avalue%3D%22show%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20show%3A%20ref(false)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:e(()=>[l(" 全屏幕 ")]),content:e(()=>[n(r,null,{default:e(()=>[l("可以打开全屏，这样显得很专业。")]),_:1})]),demo:e(()=>[t("div",U,[a.show?(s(),c(D,{key:0,content:"大家艰苦一下，一切都会有的",cross:"",fullscreen:"","font-size":16,"line-height":16,width:384,height:384,"x-offset":12,"y-offset":60,rotate:-15})):C("",!0),n(h,{value:a.show,"onUpdate:value":i[0]||(i[0]=m=>a.show=m)},null,8,["value"])])]),_:1})}const O=E(T,[["render",L]]),q=v({setup(){return{show:k(!1)}}}),G={class:"demo-card__view"};function H(a,i,_,u,p,g){const r=d("n-p"),D=d("n-watermark"),h=d("n-switch"),f=d("component-demo");return s(),c(f,{"demo-file-name":"image.vue","relative-url":"D:/Code/naive-ui/src/watermark/demos/zhCN/image.demo.vue",title:"图片","ts-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-watermark%0D%0A%20%20%20%20v-if%3D%22show%22%0D%0A%20%20%20%20image%3D%22https%3A%2F%2F07akioni.oss-cn-beijing.aliyuncs.com%2F07akioni.jpeg%22%0D%0A%20%20%20%20cross%0D%0A%20%20%20%20fullscreen%0D%0A%20%20%20%20%3Afont-size%3D%2216%22%0D%0A%20%20%20%20%3Aline-height%3D%2216%22%0D%0A%20%20%20%20%3Awidth%3D%22384%22%0D%0A%20%20%20%20%3Aheight%3D%22384%22%0D%0A%20%20%20%20%3Ax-offset%3D%2212%22%0D%0A%20%20%20%20%3Ay-offset%3D%220%22%0D%0A%20%20%20%20%3Aimage-width%3D%2264%22%0D%0A%20%20%20%20%3Aimage-opacity%3D%220.24%22%0D%0A%20%20%2F%3E%0D%0A%20%20%3Cn-switch%20v-model%3Avalue%3D%22show%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%0D%0A%0D%0Aexport%20default%20defineComponent(%7B%0D%0A%20%20setup%20()%20%7B%0D%0A%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20show%3A%20ref(false)%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D)%0A%3C%2Fscript%3E","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-watermark%0D%0A%20%20%20%20v-if%3D%22show%22%0D%0A%20%20%20%20image%3D%22https%3A%2F%2F07akioni.oss-cn-beijing.aliyuncs.com%2F07akioni.jpeg%22%0D%0A%20%20%20%20cross%0D%0A%20%20%20%20fullscreen%0D%0A%20%20%20%20%3Afont-size%3D%2216%22%0D%0A%20%20%20%20%3Aline-height%3D%2216%22%0D%0A%20%20%20%20%3Awidth%3D%22384%22%0D%0A%20%20%20%20%3Aheight%3D%22384%22%0D%0A%20%20%20%20%3Ax-offset%3D%2212%22%0D%0A%20%20%20%20%3Ay-offset%3D%220%22%0D%0A%20%20%20%20%3Aimage-width%3D%2264%22%0D%0A%20%20%20%20%3Aimage-opacity%3D%220.24%22%0D%0A%20%20%2F%3E%0D%0A%20%20%3Cn-switch%20v-model%3Avalue%3D%22show%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20%22vue%22%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20show%3A%20ref(false)%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E","language-type":"ts"},{title:e(()=>[l(" 图片 ")]),content:e(()=>[n(r,null,{default:e(()=>[l("放点图。")]),_:1}),n(r,null,{default:e(()=>[l("记得注意图像 URL 的跨域设置，这会影响图片是否能正常显示。")]),_:1})]),demo:e(()=>[t("div",G,[a.show?(s(),c(D,{key:0,image:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",cross:"",fullscreen:"","font-size":16,"line-height":16,width:384,height:384,"x-offset":12,"y-offset":0,"image-width":64,"image-opacity":.24})):C("",!0),n(h,{value:a.show,"onUpdate:value":i[0]||(i[0]=m=>a.show=m)},null,8,["value"])])]),_:1})}const J=E(q,[["render",H]]),K={components:{basicVueDemo:R,fullscreenVueDemo:O,imageVueDemo:J},setup(){const a=N(),i=$(()=>!a.value),_=a;return{showAnchor:i,displayMode:S(),wrapperStyle:B(()=>_.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:B(()=>i.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/watermark/demos/zhCN/index.demo-entry.md"}}},Q={class:"md-table-wrapper"},X=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"类型"),t("th",null,"默认值"),t("th",null,"说明"),t("th",null,"版本")])],-1),Y=t("td",null,"content",-1),Z=t("td",null,"水印文本",-1),t2=t("td",null,"2.25.3",-1),e2=t("td",null,"cross",-1),n2=t("td",null,"是否跨越边界显示",-1),l2=t("td",null,"2.25.3",-1),o2=t("td",null,"debug",-1),d2=t("td",null,"是否显示调试信息",-1),u2=t("td",null,"2.25.3",-1),s2=t("td",null,"font-size",-1),a2=t("td",null,"字体大小",-1),c2=t("td",null,"2.25.3",-1),i2=t("td",null,"font-family",-1),_2=t("td",null,"字体族",-1),r2=t("td",null,"2.25.3",-1),h2=t("td",null,"font-style",-1),A2=t("td",null,"字体风格",-1),D2=t("td",null,"2.25.3",-1),f2=t("td",null,"font-variant",-1),m2=t("td",null,"字型",-1),p2=t("td",null,"2.25.3",-1),E2=t("td",null,"font-weight",-1),C2=t("td",null,"字重",-1),g2=t("td",null,"2.25.3",-1),F2=t("td",null,"font-color",-1),w2=t("td",null,"字体颜色",-1),B2=t("td",null,"2.25.3",-1),b2=t("td",null,"fullscreen",-1),y2=t("td",null,"是否展示全屏",-1),v2=t("td",null,"2.25.3",-1),k2=t("td",null,"global-rotate",-1),x2=t("td",null,"水印整体的旋转",-1),V2=t("td",null,"2.32.0",-1),z2=t("td",null,"line-height",-1),N2=t("td",null,"行高",-1),$2=t("td",null,"2.25.3",-1),S2=t("td",null,"height",-1),j2=t("td",null,"高度",-1),M2=t("td",null,"2.25.3",-1),P2=t("td",null,"image",-1),W2=t("td",null,"图片路径",-1),I2=t("td",null,"2.25.3",-1),R2=t("td",null,"image-height",-1),T2=t("td",null,"图片高度",-1),U2=t("td",null,"2.25.3",-1),L2=t("td",null,"image-opacity",-1),O2=t("td",null,"图片不透明度",-1),q2=t("td",null,"2.25.3",-1),G2=t("td",null,"image-width",-1),H2=t("td",null,"图片宽度",-1),J2=t("td",null,"2.25.3",-1),K2=t("td",null,"rotate",-1),Q2=t("td",null,"旋转角度",-1),X2=t("td",null,"2.25.3",-1),Y2=t("td",null,"selectable",-1),Z2=t("td",null,"被水印覆盖的内容是否可选中",-1),t0=t("td",null,"2.25.3",-1),e0=t("td",null,"width",-1),n0=t("td",null,"宽度",-1),l0=t("td",null,"2.25.3",-1),o0=t("td",null,"x-gap",-1),d0=t("td",null,"x 轴间隔",-1),u0=t("td",null,"2.25.3",-1),s0=t("td",null,"x-offset",-1),a0=t("td",null,"x 轴偏移",-1),c0=t("td",null,"2.25.3",-1),i0=t("td",null,"y-gap",-1),_0=t("td",null,"y 轴间隔",-1),r0=t("td",null,"2.25.3",-1),h0=t("td",null,"y-offset",-1),A0=t("td",null,"y 轴偏移",-1),D0=t("td",null,"2.25.3",-1),f0=t("td",null,"z-index",-1),m0=t("td",null,"z 轴高度",-1),p0=t("td",null,"2.25.3",-1),E0={class:"md-table-wrapper"},C0=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"参数"),t("th",null,"说明"),t("th",null,"版本")])],-1),g0=t("td",null,"default",-1),F0=t("td",null,"水印覆盖的内容",-1),w0=t("td",null,"2.25.3",-1),B0={key:0,style:{width:"192px"}};function b0(a,i,_,u,p,g){const r=d("edit-on-github-header"),D=d("n-p"),h=d("n-h2"),f=d("basicVueDemo"),m=d("fullscreenVueDemo"),x=d("imageVueDemo"),V=d("component-demos"),F=d("n-h3"),o=d("n-text"),w=d("n-table"),A=d("n-anchor-link"),z=d("n-anchor");return s(),b("div",{class:"doc",style:y(u.wrapperStyle)},[t("div",{style:y(u.contentStyle)},[n(r,{"relative-url":"D:/Code/naive-ui/src/watermark/demos/zhCN/index.demo-entry.md",text:"水印 Watermark"}),n(D,null,{default:e(()=>[l("出现在钱上的时候比较可爱。")]),_:1}),n(h,{id:"演示"},{default:e(()=>[l("演示")]),_:1}),n(V,{span:2},{default:e(()=>[n(f),n(m),n(x)]),_:1}),n(h,{id:"API"},{default:e(()=>[l("API")]),_:1}),n(F,{id:"Watermark-Props"},{default:e(()=>[l("Watermark Props")]),_:1}),t("div",Q,[n(w,{"single-column":"",class:"md-table"},{default:e(()=>[X,t("tbody",null,[t("tr",null,[Y,t("td",null,[n(o,{code:""},{default:e(()=>[l("string")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("undefined")]),_:1})]),Z,t2]),t("tr",null,[e2,t("td",null,[n(o,{code:""},{default:e(()=>[l("boolean")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("false")]),_:1})]),n2,l2]),t("tr",null,[o2,t("td",null,[n(o,{code:""},{default:e(()=>[l("boolean")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("false")]),_:1})]),d2,u2]),t("tr",null,[s2,t("td",null,[n(o,{code:""},{default:e(()=>[l("number")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("14")]),_:1})]),a2,c2]),t("tr",null,[i2,t("td",null,[n(o,{code:""},{default:e(()=>[l("string")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("undefined")]),_:1})]),_2,r2]),t("tr",null,[h2,t("td",null,[n(o,{code:""},{default:e(()=>[l("'normal' | 'italic' | `oblique ${number}deg` ")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("normal")]),_:1})]),A2,D2]),t("tr",null,[f2,t("td",null,[n(o,{code:""},{default:e(()=>[l("string")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("''")]),_:1})]),m2,p2]),t("tr",null,[E2,t("td",null,[n(o,{code:""},{default:e(()=>[l("number")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("400")]),_:1})]),C2,g2]),t("tr",null,[F2,t("td",null,[n(o,{code:""},{default:e(()=>[l("string")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("rgba(128, 128, 128, .3)")]),_:1})]),w2,B2]),t("tr",null,[b2,t("td",null,[n(o,{code:""},{default:e(()=>[l("boolean")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("false")]),_:1})]),y2,v2]),t("tr",null,[k2,t("td",null,[n(o,{code:""},{default:e(()=>[l("number")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("0")]),_:1})]),x2,V2]),t("tr",null,[z2,t("td",null,[n(o,{code:""},{default:e(()=>[l("number")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("14")]),_:1})]),N2,$2]),t("tr",null,[S2,t("td",null,[n(o,{code:""},{default:e(()=>[l("number")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("32")]),_:1})]),j2,M2]),t("tr",null,[P2,t("td",null,[n(o,{code:""},{default:e(()=>[l("string")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("undefined")]),_:1})]),W2,I2]),t("tr",null,[R2,t("td",null,[n(o,{code:""},{default:e(()=>[l("number")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("undefined")]),_:1})]),T2,U2]),t("tr",null,[L2,t("td",null,[n(o,{code:""},{default:e(()=>[l("number")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("1")]),_:1})]),O2,q2]),t("tr",null,[G2,t("td",null,[n(o,{code:""},{default:e(()=>[l("number")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("undefined")]),_:1})]),H2,J2]),t("tr",null,[K2,t("td",null,[n(o,{code:""},{default:e(()=>[l("number")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("0")]),_:1})]),Q2,X2]),t("tr",null,[Y2,t("td",null,[n(o,{code:""},{default:e(()=>[l("boolean")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("true")]),_:1})]),Z2,t0]),t("tr",null,[e0,t("td",null,[n(o,{code:""},{default:e(()=>[l("number")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("32")]),_:1})]),n0,l0]),t("tr",null,[o0,t("td",null,[n(o,{code:""},{default:e(()=>[l("number")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("0")]),_:1})]),d0,u0]),t("tr",null,[s0,t("td",null,[n(o,{code:""},{default:e(()=>[l("number")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("0")]),_:1})]),a0,c0]),t("tr",null,[i0,t("td",null,[n(o,{code:""},{default:e(()=>[l("number")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("0")]),_:1})]),_0,r0]),t("tr",null,[h0,t("td",null,[n(o,{code:""},{default:e(()=>[l("number")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("0")]),_:1})]),A0,D0]),t("tr",null,[f0,t("td",null,[n(o,{code:""},{default:e(()=>[l("number")]),_:1})]),t("td",null,[n(o,{code:""},{default:e(()=>[l("10")]),_:1})]),m0,p0])])]),_:1})]),n(F,{id:"Watermark-Slots"},{default:e(()=>[l("Watermark Slots")]),_:1}),t("div",E0,[n(w,{"single-column":"",class:"md-table"},{default:e(()=>[C0,t("tbody",null,[t("tr",null,[g0,t("td",null,[n(o,{code:""},{default:e(()=>[l("()")]),_:1})]),F0,w0])])]),_:1})])],4),u.showAnchor?(s(),b("div",B0,[n(z,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:e(()=>[(u.displayMode,s(),c(A,{key:0,title:"基本用法\r",href:"#basic.vue"})),(u.displayMode,s(),c(A,{key:1,title:"全屏幕\r",href:"#fullscreen.vue"})),(u.displayMode,s(),c(A,{key:2,title:"图片\r",href:"#image.vue"})),(u.displayMode,s(),c(A,{key:3,title:"API",href:"#API"})),(u.displayMode,s(),c(A,{key:4,title:"Watermark Props",href:"#Watermark-Props"})),(u.displayMode,s(),c(A,{key:5,title:"Watermark Slots",href:"#Watermark-Slots"}))]),_:1})])):C("",!0)],4)}const v0=E(K,[["render",b0]]);export{v0 as default};
