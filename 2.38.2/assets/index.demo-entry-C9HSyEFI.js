import{_ as a,r as n,o as s,i as d,w as t,g as e,e as E,f as o,u as V,a as N,b as M,c as h,d as p,n as f,h as k}from"./index-mgaNkJ7F.js";const T={},j={class:"demo-card__view"},z=E("br",null,null,-1),O=E("br",null,null,-1),P=E("br",null,null,-1),I=E("br",null,null,-1),L=E("br",null,null,-1),R=E("br",null,null,-1),H=E("br",null,null,-1),q=E("br",null,null,-1),G=E("br",null,null,-1),J=E("br",null,null,-1),K=E("br",null,null,-1),Q=E("br",null,null,-1),U=E("br",null,null,-1),W=E("br",null,null,-1),X=E("br",null,null,-1),Y=E("br",null,null,-1);function Z(B,_){const A=n("n-scrollbar"),l=n("component-demo");return s(),d(l,{"demo-file-name":"basic.vue","relative-url":"D:/Code/naive-ui/src/scrollbar/demos/zhCN/basic.demo.vue",title:"基础用法","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-scrollbar%20style%3D%22max-height%3A%20120px%22%3E%0D%0A%20%20%20%20%E6%88%91%E4%BB%AC%E5%9C%A8%E7%94%B0%E9%87%8E%E4%B8%8A%E9%9D%A2%E6%89%BE%E7%8C%AA%3Cbr%3E%0D%0A%20%20%20%20%E6%83%B3%E8%B1%A1%E4%B8%AD%E5%B7%B2%E6%89%BE%E5%88%B0%E4%BA%86%E4%B8%89%E5%8F%AA%3Cbr%3E%0D%0A%20%20%20%20%E5%B0%8F%E9%B8%9F%E5%9C%A8%E7%99%BD%E4%BA%91%E4%B8%8A%E9%9D%A2%E8%BF%BD%E9%80%90%3Cbr%3E%0D%0A%20%20%20%20%E5%AE%83%E4%BB%AC%E5%9C%A8%E6%A0%91%E5%BA%95%E4%B8%8B%E8%B7%B3%E8%88%9E%3Cbr%3E%0D%0A%20%20%20%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%3Cbr%3E%0D%0A%20%20%20%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%3Cbr%3E%0D%0A%20%20%20%20%E6%88%91%E4%BB%AC%E5%9C%A8%E6%83%B3%E8%B1%A1%E4%B8%AD%E5%BA%A6%E8%BF%87%E4%BA%86%E8%AE%B8%E5%A4%9A%E5%B9%B4%3Cbr%3E%0D%0A%20%20%20%20%E6%83%B3%E8%B1%A1%E4%B8%AD%E6%88%91%E4%BB%AC%E6%98%AF%E5%A6%82%E6%AD%A4%E7%9A%84%E7%96%AF%E7%8B%82%3Cbr%3E%0D%0A%20%20%20%20%E6%88%91%E4%BB%AC%E5%9C%A8%E5%9F%8E%E5%B8%82%E9%87%8C%E9%9D%A2%E6%89%BE%E7%8C%AA%3Cbr%3E%0D%0A%20%20%20%20%E6%83%B3%E8%B1%A1%E4%B8%AD%E5%B7%B2%E6%89%BE%E5%88%B0%E4%BA%86%E5%87%A0%E7%99%BE%E4%B8%87%E5%8F%AA%3Cbr%3E%0D%0A%20%20%20%20%E5%B0%8F%E9%B8%9F%E5%9C%A8%E5%85%AC%E5%9B%AD%E9%87%8C%E9%9D%A2%E5%94%B1%E6%AD%8C%3Cbr%3E%0D%0A%20%20%20%20%E5%AE%83%E4%BB%AC%E7%8B%AC%E8%87%AA%E5%9C%A8%E6%83%B3%E8%B1%A1%E9%87%8C%E8%B7%B3%E8%88%9E%3Cbr%3E%0D%0A%20%20%20%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%3Cbr%3E%0D%0A%20%20%20%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%3Cbr%3E%0D%0A%20%20%20%20%E6%88%91%E4%BB%AC%E5%9C%A8%E6%83%B3%E8%B1%A1%E4%B8%AD%E5%BA%A6%E8%BF%87%E4%BA%86%E8%AE%B8%E5%A4%9A%E5%B9%B4%3Cbr%3E%0D%0A%20%20%20%20%E8%AE%B8%E5%A4%9A%E5%B9%B4%E4%B9%8B%E5%90%8E%E6%88%91%E4%BB%AC%E5%8F%88%E5%BC%80%E5%A7%8B%E6%83%B3%E8%B1%A1%3Cbr%3E%0D%0A%20%20%20%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%0D%0A%20%20%3C%2Fn-scrollbar%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[e(" 基础用法 ")]),content:t(()=>[]),demo:t(()=>[E("div",j,[o(A,{style:{"max-height":"120px"}},{default:t(()=>[e(" 我们在田野上面找猪"),z,e(" 想象中已找到了三只"),O,e(" 小鸟在白云上面追逐"),P,e(" 它们在树底下跳舞"),I,e(" 啦啦啦啦啦啦啦啦咧"),L,e(" 啦啦啦啦咧"),R,e(" 我们在想象中度过了许多年"),H,e(" 想象中我们是如此的疯狂"),q,e(" 我们在城市里面找猪"),G,e(" 想象中已找到了几百万只"),J,e(" 小鸟在公园里面唱歌"),K,e(" 它们独自在想象里跳舞"),Q,e(" 啦啦啦啦啦啦啦啦咧"),U,e(" 啦啦啦啦咧"),W,e(" 我们在想象中度过了许多年"),X,e(" 许多年之后我们又开始想象"),Y,e(" 啦啦啦啦啦啦啦啦咧 ")]),_:1})])]),_:1})}const EE=a(T,[["render",Z]]),eE={},tE={class:"demo-card__view"},oE=E("div",{style:{"white-space":"nowrap",padding:"12px"}}," 我们在田野上面找猪 想象中已找到了三只 小鸟在白云上面追逐 它们在树底下跳舞 啦啦啦啦啦啦啦啦咧 啦啦啦啦咧 我们在想象中度过了许多年 想象中我们是如此的疯狂 我们在城市里面找猪 想象中已找到了几百万只 小鸟在公园里面唱歌 它们独自在想象里跳舞 啦啦啦啦啦啦啦啦咧 啦啦啦啦咧 我们在想象中度过了许多年 许多年之后我们又开始想象 啦啦啦啦啦啦啦啦咧 ",-1);function nE(B,_){const A=n("n-scrollbar"),l=n("component-demo");return s(),d(l,{"demo-file-name":"x.vue","relative-url":"D:/Code/naive-ui/src/scrollbar/demos/zhCN/x.demo.vue",title:"横向滚动","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-scrollbar%20x-scrollable%3E%0D%0A%20%20%20%20%3Cdiv%20style%3D%22white-space%3A%20nowrap%3B%20padding%3A%2012px%22%3E%0D%0A%20%20%20%20%20%20%E6%88%91%E4%BB%AC%E5%9C%A8%E7%94%B0%E9%87%8E%E4%B8%8A%E9%9D%A2%E6%89%BE%E7%8C%AA%20%E6%83%B3%E8%B1%A1%E4%B8%AD%E5%B7%B2%E6%89%BE%E5%88%B0%E4%BA%86%E4%B8%89%E5%8F%AA%20%E5%B0%8F%E9%B8%9F%E5%9C%A8%E7%99%BD%E4%BA%91%E4%B8%8A%E9%9D%A2%E8%BF%BD%E9%80%90%20%E5%AE%83%E4%BB%AC%E5%9C%A8%E6%A0%91%E5%BA%95%E4%B8%8B%E8%B7%B3%E8%88%9E%0D%0A%20%20%20%20%20%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%20%E6%88%91%E4%BB%AC%E5%9C%A8%E6%83%B3%E8%B1%A1%E4%B8%AD%E5%BA%A6%E8%BF%87%E4%BA%86%E8%AE%B8%E5%A4%9A%E5%B9%B4%0D%0A%20%20%20%20%20%20%E6%83%B3%E8%B1%A1%E4%B8%AD%E6%88%91%E4%BB%AC%E6%98%AF%E5%A6%82%E6%AD%A4%E7%9A%84%E7%96%AF%E7%8B%82%20%E6%88%91%E4%BB%AC%E5%9C%A8%E5%9F%8E%E5%B8%82%E9%87%8C%E9%9D%A2%E6%89%BE%E7%8C%AA%20%E6%83%B3%E8%B1%A1%E4%B8%AD%E5%B7%B2%E6%89%BE%E5%88%B0%E4%BA%86%E5%87%A0%E7%99%BE%E4%B8%87%E5%8F%AA%0D%0A%20%20%20%20%20%20%E5%B0%8F%E9%B8%9F%E5%9C%A8%E5%85%AC%E5%9B%AD%E9%87%8C%E9%9D%A2%E5%94%B1%E6%AD%8C%20%E5%AE%83%E4%BB%AC%E7%8B%AC%E8%87%AA%E5%9C%A8%E6%83%B3%E8%B1%A1%E9%87%8C%E8%B7%B3%E8%88%9E%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%0D%0A%20%20%20%20%20%20%E6%88%91%E4%BB%AC%E5%9C%A8%E6%83%B3%E8%B1%A1%E4%B8%AD%E5%BA%A6%E8%BF%87%E4%BA%86%E8%AE%B8%E5%A4%9A%E5%B9%B4%20%E8%AE%B8%E5%A4%9A%E5%B9%B4%E4%B9%8B%E5%90%8E%E6%88%91%E4%BB%AC%E5%8F%88%E5%BC%80%E5%A7%8B%E6%83%B3%E8%B1%A1%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%3C%2Fn-scrollbar%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[e(" 横向滚动 ")]),content:t(()=>[]),demo:t(()=>[E("div",tE,[o(A,{"x-scrollable":""},{default:t(()=>[oE]),_:1})])]),_:1})}const lE=a(eE,[["render",nE]]),AE={},rE={class:"demo-card__view"},sE=E("br",null,null,-1),dE=E("br",null,null,-1),cE=E("br",null,null,-1),BE=E("br",null,null,-1),_E=E("br",null,null,-1),uE=E("br",null,null,-1),iE=E("br",null,null,-1),aE=E("br",null,null,-1),mE=E("br",null,null,-1),CE=E("br",null,null,-1),bE=E("br",null,null,-1),DE=E("br",null,null,-1),hE=E("br",null,null,-1),pE=E("br",null,null,-1),fE=E("br",null,null,-1),xE=E("br",null,null,-1);function gE(B,_){const A=n("n-text"),l=n("n-p"),u=n("n-scrollbar"),i=n("component-demo");return s(),d(i,{"demo-file-name":"trigger.vue","relative-url":"D:/Code/naive-ui/src/scrollbar/demos/zhCN/trigger.demo.vue",title:"触发方式","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-scrollbar%20style%3D%22max-height%3A%20120px%22%20trigger%3D%22none%22%3E%0D%0A%20%20%20%20%E6%88%91%E4%BB%AC%E5%9C%A8%E7%94%B0%E9%87%8E%E4%B8%8A%E9%9D%A2%E6%89%BE%E7%8C%AA%3Cbr%3E%0D%0A%20%20%20%20%E6%83%B3%E8%B1%A1%E4%B8%AD%E5%B7%B2%E6%89%BE%E5%88%B0%E4%BA%86%E4%B8%89%E5%8F%AA%3Cbr%3E%0D%0A%20%20%20%20%E5%B0%8F%E9%B8%9F%E5%9C%A8%E7%99%BD%E4%BA%91%E4%B8%8A%E9%9D%A2%E8%BF%BD%E9%80%90%3Cbr%3E%0D%0A%20%20%20%20%E5%AE%83%E4%BB%AC%E5%9C%A8%E6%A0%91%E5%BA%95%E4%B8%8B%E8%B7%B3%E8%88%9E%3Cbr%3E%0D%0A%20%20%20%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%3Cbr%3E%0D%0A%20%20%20%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%3Cbr%3E%0D%0A%20%20%20%20%E6%88%91%E4%BB%AC%E5%9C%A8%E6%83%B3%E8%B1%A1%E4%B8%AD%E5%BA%A6%E8%BF%87%E4%BA%86%E8%AE%B8%E5%A4%9A%E5%B9%B4%3Cbr%3E%0D%0A%20%20%20%20%E6%83%B3%E8%B1%A1%E4%B8%AD%E6%88%91%E4%BB%AC%E6%98%AF%E5%A6%82%E6%AD%A4%E7%9A%84%E7%96%AF%E7%8B%82%3Cbr%3E%0D%0A%20%20%20%20%E6%88%91%E4%BB%AC%E5%9C%A8%E5%9F%8E%E5%B8%82%E9%87%8C%E9%9D%A2%E6%89%BE%E7%8C%AA%3Cbr%3E%0D%0A%20%20%20%20%E6%83%B3%E8%B1%A1%E4%B8%AD%E5%B7%B2%E6%89%BE%E5%88%B0%E4%BA%86%E5%87%A0%E7%99%BE%E4%B8%87%E5%8F%AA%3Cbr%3E%0D%0A%20%20%20%20%E5%B0%8F%E9%B8%9F%E5%9C%A8%E5%85%AC%E5%9B%AD%E9%87%8C%E9%9D%A2%E5%94%B1%E6%AD%8C%3Cbr%3E%0D%0A%20%20%20%20%E5%AE%83%E4%BB%AC%E7%8B%AC%E8%87%AA%E5%9C%A8%E6%83%B3%E8%B1%A1%E9%87%8C%E8%B7%B3%E8%88%9E%3Cbr%3E%0D%0A%20%20%20%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%3Cbr%3E%0D%0A%20%20%20%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%3Cbr%3E%0D%0A%20%20%20%20%E6%88%91%E4%BB%AC%E5%9C%A8%E6%83%B3%E8%B1%A1%E4%B8%AD%E5%BA%A6%E8%BF%87%E4%BA%86%E8%AE%B8%E5%A4%9A%E5%B9%B4%3Cbr%3E%0D%0A%20%20%20%20%E8%AE%B8%E5%A4%9A%E5%B9%B4%E4%B9%8B%E5%90%8E%E6%88%91%E4%BB%AC%E5%8F%88%E5%BC%80%E5%A7%8B%E6%83%B3%E8%B1%A1%3Cbr%3E%0D%0A%20%20%20%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%0D%0A%20%20%3C%2Fn-scrollbar%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[e(" 触发方式 ")]),content:t(()=>[o(l,null,{default:t(()=>[e("你可以设定不同的触发方式，"),o(A,{code:""},{default:t(()=>[e('trigger="none"')]),_:1}),e(" 会让滚动条一直显示，"),o(A,{code:""},{default:t(()=>[e('trigger="hover"')]),_:1}),e(" 会让滚动条在鼠标悬浮的时候显示。")]),_:1})]),demo:t(()=>[E("div",rE,[o(u,{style:{"max-height":"120px"},trigger:"none"},{default:t(()=>[e(" 我们在田野上面找猪"),sE,e(" 想象中已找到了三只"),dE,e(" 小鸟在白云上面追逐"),cE,e(" 它们在树底下跳舞"),BE,e(" 啦啦啦啦啦啦啦啦咧"),_E,e(" 啦啦啦啦咧"),uE,e(" 我们在想象中度过了许多年"),iE,e(" 想象中我们是如此的疯狂"),aE,e(" 我们在城市里面找猪"),mE,e(" 想象中已找到了几百万只"),CE,e(" 小鸟在公园里面唱歌"),bE,e(" 它们独自在想象里跳舞"),DE,e(" 啦啦啦啦啦啦啦啦咧"),hE,e(" 啦啦啦啦咧"),pE,e(" 我们在想象中度过了许多年"),fE,e(" 许多年之后我们又开始想象"),xE,e(" 啦啦啦啦啦啦啦啦咧 ")]),_:1})])]),_:1})}const yE=a(AE,[["render",gE]]),vE={},FE={class:"demo-card__view"},$E=E("p",{style:{"margin-bottom":"90px"}}," margin-bottom: 90px ",-1),SE=E("p",{style:{"margin-bottom":"90px"}}," margin-bottom: 90px ",-1),wE=E("p",{style:{"margin-bottom":"90px"}}," margin-bottom: 90px ",-1),VE=E("p",{style:{"margin-bottom":"90px"}}," margin-bottom: 90px ",-1);function NE(B,_){const A=n("n-text"),l=n("n-p"),u=n("n-scrollbar"),i=n("n-divider"),m=n("component-demo");return s(),d(m,{"demo-file-name":"no-sync.vue","relative-url":"D:/Code/naive-ui/src/scrollbar/demos/zhCN/no-sync.demo.vue",title:"鼠标拖动滚不到最下面","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-scrollbar%20style%3D%22max-height%3A%20120px%22%3E%0D%0A%20%20%20%20%E4%B8%8D%E8%AE%BE%E5%AE%9A%20content-style%0D%0A%20%20%20%20%3Cp%20style%3D%22margin-bottom%3A%2090px%22%3E%0D%0A%20%20%20%20%20%20margin-bottom%3A%2090px%0D%0A%20%20%20%20%3C%2Fp%3E%0D%0A%20%20%20%20%3Cp%20style%3D%22margin-bottom%3A%2090px%22%3E%0D%0A%20%20%20%20%20%20margin-bottom%3A%2090px%0D%0A%20%20%20%20%3C%2Fp%3E%0D%0A%20%20%3C%2Fn-scrollbar%3E%0D%0A%20%20%3Cn-divider%20%2F%3E%0D%0A%20%20%3Cn-scrollbar%20style%3D%22max-height%3A%20120px%22%20content-style%3D%22overflow%3A%20hidden%3B%22%3E%0D%0A%20%20%20%20content-style%3D%22overflow%3A%20hidden%3B%22%0D%0A%20%20%20%20%3Cp%20style%3D%22margin-bottom%3A%2090px%22%3E%0D%0A%20%20%20%20%20%20margin-bottom%3A%2090px%0D%0A%20%20%20%20%3C%2Fp%3E%0D%0A%20%20%20%20%3Cp%20style%3D%22margin-bottom%3A%2090px%22%3E%0D%0A%20%20%20%20%20%20margin-bottom%3A%2090px%0D%0A%20%20%20%20%3C%2Fp%3E%0D%0A%20%20%3C%2Fn-scrollbar%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[e(" 鼠标拖动滚不到最下面 ")]),content:t(()=>[o(l,null,{default:t(()=>[e("在最后一个元素含有 "),o(A,{code:""},{default:t(()=>[e("margin-bottom")]),_:1}),e(" 的情况下，通过鼠标拖动滚动条，滚动不到最下面。这是浏览器的原生滚动行为导致的，"),o(A,{code:""},{default:t(()=>[e("n-scrollbar")]),_:1}),e(" 无法自动的处理这种问题，你可以通过设定 "),o(A,{code:""},{default:t(()=>[e("content-style")]),_:1}),e(" 为 "),o(A,{code:""},{default:t(()=>[e("'overflow: hidden;'")]),_:1}),e(" 来解决这个问题。")]),_:1})]),demo:t(()=>[E("div",FE,[o(u,{style:{"max-height":"120px"}},{default:t(()=>[e(" 不设定 content-style "),$E,SE]),_:1}),o(i),o(u,{style:{"max-height":"120px"},"content-style":"overflow: hidden;"},{default:t(()=>[e(' content-style="overflow: hidden;" '),wE,VE]),_:1})])]),_:1})}const ME=a(vE,[["render",NE]]),kE={},TE={class:"demo-card__view"},jE=E("br",null,null,-1),zE=E("br",null,null,-1),OE=E("br",null,null,-1),PE=E("br",null,null,-1),IE=E("br",null,null,-1),LE=E("br",null,null,-1),RE=E("br",null,null,-1),HE=E("br",null,null,-1),qE=E("br",null,null,-1),GE=E("br",null,null,-1),JE=E("br",null,null,-1),KE=E("br",null,null,-1),QE=E("br",null,null,-1),UE=E("br",null,null,-1),WE=E("br",null,null,-1),XE=E("br",null,null,-1);function YE(B,_){const A=n("n-text"),l=n("n-p"),u=n("n-scrollbar"),i=n("n-config-provider"),m=n("component-demo");return s(),d(m,{"demo-file-name":"custom.vue","relative-url":"D:/Code/naive-ui/src/scrollbar/demos/zhCN/custom.demo.vue",title:"自定义样式","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-config-provider%0D%0A%20%20%20%20%3Atheme-overrides%3D%22%7B%0D%0A%20%20%20%20%20%20Scrollbar%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20width%3A%20'8px'%2C%0D%0A%20%20%20%20%20%20%20%20railInsetHorizontal%3A%20'4px%204px%204px%20auto'%2C%0D%0A%20%20%20%20%20%20%20%20borderRadius%3A%200%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%3Cn-scrollbar%20style%3D%22max-height%3A%20120px%22%3E%0D%0A%20%20%20%20%20%20%E6%88%91%E4%BB%AC%E5%9C%A8%E7%94%B0%E9%87%8E%E4%B8%8A%E9%9D%A2%E6%89%BE%E7%8C%AA%3Cbr%3E%0D%0A%20%20%20%20%20%20%E6%83%B3%E8%B1%A1%E4%B8%AD%E5%B7%B2%E6%89%BE%E5%88%B0%E4%BA%86%E4%B8%89%E5%8F%AA%3Cbr%3E%0D%0A%20%20%20%20%20%20%E5%B0%8F%E9%B8%9F%E5%9C%A8%E7%99%BD%E4%BA%91%E4%B8%8A%E9%9D%A2%E8%BF%BD%E9%80%90%3Cbr%3E%0D%0A%20%20%20%20%20%20%E5%AE%83%E4%BB%AC%E5%9C%A8%E6%A0%91%E5%BA%95%E4%B8%8B%E8%B7%B3%E8%88%9E%3Cbr%3E%0D%0A%20%20%20%20%20%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%3Cbr%3E%0D%0A%20%20%20%20%20%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%3Cbr%3E%0D%0A%20%20%20%20%20%20%E6%88%91%E4%BB%AC%E5%9C%A8%E6%83%B3%E8%B1%A1%E4%B8%AD%E5%BA%A6%E8%BF%87%E4%BA%86%E8%AE%B8%E5%A4%9A%E5%B9%B4%3Cbr%3E%0D%0A%20%20%20%20%20%20%E6%83%B3%E8%B1%A1%E4%B8%AD%E6%88%91%E4%BB%AC%E6%98%AF%E5%A6%82%E6%AD%A4%E7%9A%84%E7%96%AF%E7%8B%82%3Cbr%3E%0D%0A%20%20%20%20%20%20%E6%88%91%E4%BB%AC%E5%9C%A8%E5%9F%8E%E5%B8%82%E9%87%8C%E9%9D%A2%E6%89%BE%E7%8C%AA%3Cbr%3E%0D%0A%20%20%20%20%20%20%E6%83%B3%E8%B1%A1%E4%B8%AD%E5%B7%B2%E6%89%BE%E5%88%B0%E4%BA%86%E5%87%A0%E7%99%BE%E4%B8%87%E5%8F%AA%3Cbr%3E%0D%0A%20%20%20%20%20%20%E5%B0%8F%E9%B8%9F%E5%9C%A8%E5%85%AC%E5%9B%AD%E9%87%8C%E9%9D%A2%E5%94%B1%E6%AD%8C%3Cbr%3E%0D%0A%20%20%20%20%20%20%E5%AE%83%E4%BB%AC%E7%8B%AC%E8%87%AA%E5%9C%A8%E6%83%B3%E8%B1%A1%E9%87%8C%E8%B7%B3%E8%88%9E%3Cbr%3E%0D%0A%20%20%20%20%20%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%3Cbr%3E%0D%0A%20%20%20%20%20%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%3Cbr%3E%0D%0A%20%20%20%20%20%20%E6%88%91%E4%BB%AC%E5%9C%A8%E6%83%B3%E8%B1%A1%E4%B8%AD%E5%BA%A6%E8%BF%87%E4%BA%86%E8%AE%B8%E5%A4%9A%E5%B9%B4%3Cbr%3E%0D%0A%20%20%20%20%20%20%E8%AE%B8%E5%A4%9A%E5%B9%B4%E4%B9%8B%E5%90%8E%E6%88%91%E4%BB%AC%E5%8F%88%E5%BC%80%E5%A7%8B%E6%83%B3%E8%B1%A1%3Cbr%3E%0D%0A%20%20%20%20%20%20%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%95%A6%E5%92%A7%0D%0A%20%20%20%20%3C%2Fn-scrollbar%3E%0D%0A%20%20%3C%2Fn-config-provider%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:t(()=>[e(" 自定义样式 ")]),content:t(()=>[o(l,null,{default:t(()=>[e("你可以通过 "),o(A,{code:""},{default:t(()=>[e("theme-overrides")]),_:1}),e(" 去控制滚动条的样式。")]),_:1})]),demo:t(()=>[E("div",TE,[o(i,{"theme-overrides":{Scrollbar:{width:"8px",railInsetHorizontal:"4px 4px 4px auto",borderRadius:0}}},{default:t(()=>[o(u,{style:{"max-height":"120px"}},{default:t(()=>[e(" 我们在田野上面找猪"),jE,e(" 想象中已找到了三只"),zE,e(" 小鸟在白云上面追逐"),OE,e(" 它们在树底下跳舞"),PE,e(" 啦啦啦啦啦啦啦啦咧"),IE,e(" 啦啦啦啦咧"),LE,e(" 我们在想象中度过了许多年"),RE,e(" 想象中我们是如此的疯狂"),HE,e(" 我们在城市里面找猪"),qE,e(" 想象中已找到了几百万只"),GE,e(" 小鸟在公园里面唱歌"),JE,e(" 它们独自在想象里跳舞"),KE,e(" 啦啦啦啦啦啦啦啦咧"),QE,e(" 啦啦啦啦咧"),UE,e(" 我们在想象中度过了许多年"),WE,e(" 许多年之后我们又开始想象"),XE,e(" 啦啦啦啦啦啦啦啦咧 ")]),_:1})]),_:1})])]),_:1})}const ZE=a(kE,[["render",YE]]),Ee={components:{basicVueDemo:EE,xVueDemo:lE,triggerVueDemo:yE,noSyncVueDemo:ME,customVueDemo:ZE},setup(){const B=V(),_=N(()=>!B.value),A=B;return{showAnchor:_,displayMode:M(),wrapperStyle:h(()=>A.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:h(()=>_.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/scrollbar/demos/zhCN/index.demo-entry.md"}}},ee={class:"md-table-wrapper"},te=E("thead",null,[E("tr",null,[E("th",null,"名称"),E("th",null,"类型"),E("th",null,"默认值"),E("th",null,"说明"),E("th",null,"版本")])],-1),oe=E("td",null,"content-class",-1),ne=E("td",null,"内容 div 的类名",-1),le=E("td",null,"2.38.2",-1),Ae=E("td",null,"content-style",-1),re=E("td",null,"内容 div 的 style",-1),se=E("td",null,"2.38.2",-1),de=E("td",null,"size",-1),ce=E("td",null,"滚动条的大小",-1),Be=E("td",null,"2.34.4",-1),_e=E("td",null,"trigger",-1),ue=E("td",null,"2.29.1",-1),ie=E("td",null,"x-scrollable",-1),ae=E("td",null,"是否可以横向滚动",-1),me=E("td",null,null,-1),Ce=E("td",null,"on-scroll",-1),be=E("td",null,"滚动的回调",-1),De=E("td",null,null,-1),he={class:"md-table-wrapper"},pe=E("thead",null,[E("tr",null,[E("th",null,"名称"),E("th",null,"参数"),E("th",null,"说明")])],-1),fe=E("td",null,"default",-1),xe=E("td",null,"滚动内容",-1),ge={class:"md-table-wrapper"},ye=E("thead",null,[E("tr",null,[E("th",null,"名称"),E("th",null,"类型"),E("th",null,"说明")])],-1),ve=E("td",null,"scrollBy",-1),Fe=E("td",null,"滚动特定距离",-1),$e=E("td",null,"scrollTo",-1),Se=E("td",null,"滚动内容",-1),we={key:0,style:{width:"192px"}};function Ve(B,_,A,l,u,i){const m=n("edit-on-github-header"),x=n("n-p"),D=n("n-h2"),g=n("basicVueDemo"),y=n("xVueDemo"),v=n("triggerVueDemo"),F=n("noSyncVueDemo"),$=n("customVueDemo"),S=n("component-demos"),C=n("n-h3"),r=n("n-text"),b=n("n-table"),c=n("n-anchor-link"),w=n("n-anchor");return s(),p("div",{class:"doc",style:f(l.wrapperStyle)},[E("div",{style:f(l.contentStyle)},[o(m,{"relative-url":"D:/Code/naive-ui/src/scrollbar/demos/zhCN/index.demo-entry.md",text:"滚动条 Scrollbar"}),o(x,null,{default:t(()=>[e("看起来好看点，但是我能保证这个没有原生滚动条可靠。")]),_:1}),o(D,{id:"演示"},{default:t(()=>[e("演示")]),_:1}),o(S,{span:2},{default:t(()=>[o(g),o(y),o(v),o(F),o($)]),_:1}),o(D,{id:"API"},{default:t(()=>[e("API")]),_:1}),o(C,{id:"Scrollbar-Props"},{default:t(()=>[e("Scrollbar Props")]),_:1}),E("div",ee,[o(b,{"single-column":"",class:"md-table"},{default:t(()=>[te,E("tbody",null,[E("tr",null,[oe,E("td",null,[o(r,{code:""},{default:t(()=>[e("string")]),_:1})]),E("td",null,[o(r,{code:""},{default:t(()=>[e("undefined")]),_:1})]),ne,le]),E("tr",null,[Ae,E("td",null,[o(r,{code:""},{default:t(()=>[e("string | object")]),_:1})]),E("td",null,[o(r,{code:""},{default:t(()=>[e("undefined")]),_:1})]),re,se]),E("tr",null,[de,E("td",null,[o(r,{code:""},{default:t(()=>[e("number")]),_:1})]),E("td",null,[o(r,{code:""},{default:t(()=>[e("undefined")]),_:1})]),ce,Be]),E("tr",null,[_e,E("td",null,[o(r,{code:""},{default:t(()=>[e("'hover' | 'none'")]),_:1})]),E("td",null,[o(r,{code:""},{default:t(()=>[e("'hover'")]),_:1})]),E("td",null,[e("显示滚动条的时机，"),o(r,{code:""},{default:t(()=>[e("'none'")]),_:1}),e(" 表示一直显示")]),ue]),E("tr",null,[ie,E("td",null,[o(r,{code:""},{default:t(()=>[e("boolean")]),_:1})]),E("td",null,[o(r,{code:""},{default:t(()=>[e("false")]),_:1})]),ae,me]),E("tr",null,[Ce,E("td",null,[o(r,{code:""},{default:t(()=>[e("(e: Event) => void")]),_:1})]),E("td",null,[o(r,{code:""},{default:t(()=>[e("undefined")]),_:1})]),be,De])])]),_:1})]),o(C,{id:"Scrollbar-Slots"},{default:t(()=>[e("Scrollbar Slots")]),_:1}),E("div",he,[o(b,{"single-column":"",class:"md-table"},{default:t(()=>[pe,E("tbody",null,[E("tr",null,[fe,E("td",null,[o(r,{code:""},{default:t(()=>[e("()")]),_:1})]),xe])])]),_:1})]),o(C,{id:"Scrollbar-Methods"},{default:t(()=>[e("Scrollbar Methods")]),_:1}),E("div",ge,[o(b,{"single-column":"",class:"md-table"},{default:t(()=>[ye,E("tbody",null,[E("tr",null,[ve,E("td",null,[o(r,{code:""},{default:t(()=>[e("(options: { left?: number, top?: number, behavior?: ScrollBehavior }): void & (x: number, y: number) => void")]),_:1})]),Fe]),E("tr",null,[$e,E("td",null,[o(r,{code:""},{default:t(()=>[e("(options: { left?: number, top?: number, behavior?: ScrollBehavior }): void & (x: number, y: number) => void")]),_:1})]),Se])])]),_:1})])],4),l.showAnchor?(s(),p("div",we,[o(w,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[(l.displayMode,s(),d(c,{key:0,title:"基础用法\r",href:"#basic.vue"})),(l.displayMode,s(),d(c,{key:1,title:"横向滚动\r",href:"#x.vue"})),(l.displayMode,s(),d(c,{key:2,title:"触发方式\r",href:"#trigger.vue"})),(l.displayMode,s(),d(c,{key:3,title:"鼠标拖动滚不到最下面\r",href:"#no-sync.vue"})),(l.displayMode,s(),d(c,{key:4,title:"自定义样式\r",href:"#custom.vue"})),(l.displayMode,s(),d(c,{key:5,title:"API",href:"#API"})),(l.displayMode,s(),d(c,{key:6,title:"Scrollbar Props",href:"#Scrollbar-Props"})),(l.displayMode,s(),d(c,{key:7,title:"Scrollbar Slots",href:"#Scrollbar-Slots"})),(l.displayMode,s(),d(c,{key:8,title:"Scrollbar Methods",href:"#Scrollbar-Methods"}))]),_:1})])):k("",!0)],4)}const Me=a(Ee,[["render",Ve]]);export{Me as default};