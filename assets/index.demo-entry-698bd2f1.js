import{_ as m,r as l,o as B,i as a,w as E,g as n,f as e,e as t,u as P,a as H,b as V,c as b,d as k,n as v,h as S}from"./index-09f026e5.js";const z={},N={class:"demo-card__view"},T={style:{"padding-left":"24px",position:"relative"}},M=t("div",{style:{position:"absolute",left:"0",top:"0",bottom:"0",width:"24px","background-color":"rgba(128, 128, 128, 0.5)"}},null,-1);function K(p,h){const d=l("n-p"),A=l("n-text"),u=l("n-h1"),c=l("n-h2"),s=l("n-h3"),r=l("n-h4"),_=l("n-h5"),F=l("n-h6"),C=l("component-demo");return B(),a(C,{"demo-file-name":"header.vue","relative-url":"D:/Code/naive-ui/src/typography/demos/zhCN/header.demo.vue",title:"标题","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20style%3D%22padding-left%3A%2024px%3B%20position%3A%20relative%22%3E%0D%0A%20%20%20%20%3Cdiv%0D%0A%20%20%20%20%20%20style%3D%22%0D%0A%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0D%0A%20%20%20%20%20%20%20%20left%3A%200%3B%0D%0A%20%20%20%20%20%20%20%20top%3A%200%3B%0D%0A%20%20%20%20%20%20%20%20bottom%3A%200%3B%0D%0A%20%20%20%20%20%20%20%20width%3A%2024px%3B%0D%0A%20%20%20%20%20%20%20%20background-color%3A%20rgba(128%2C%20128%2C%20128%2C%200.5)%3B%0D%0A%20%20%20%20%20%20%22%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%20%20%3Cn-h1%3E%0D%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22primary%22%3E%0D%0A%20%20%20%20%20%20%20%20sin(x)%0D%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0D%0A%20%20%20%20%3C%2Fn-h1%3E%0D%0A%20%20%20%20%3Cn-h1%20prefix%3D%22bar%22%3E%0D%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22primary%22%3E%0D%0A%20%20%20%20%20%20%20%20sin(x)%0D%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0D%0A%20%20%20%20%3C%2Fn-h1%3E%0D%0A%20%20%20%20%3Cn-h1%20prefix%3D%22bar%22%20align-text%3E%0D%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22primary%22%3E%0D%0A%20%20%20%20%20%20%20%20sin(x)%0D%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0D%0A%20%20%20%20%3C%2Fn-h1%3E%0D%0A%20%20%20%20%3Cn-h1%20prefix%3D%22bar%22%20align-text%20type%3D%22success%22%3E%0D%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22success%22%3E%0D%0A%20%20%20%20%20%20%20%20sin(x)%0D%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0D%0A%20%20%20%20%3C%2Fn-h1%3E%0D%0A%20%20%20%20%3Cn-h1%20prefix%3D%22bar%22%20align-text%20type%3D%22info%22%3E%0D%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22info%22%3E%0D%0A%20%20%20%20%20%20%20%20sin(x)%0D%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0D%0A%20%20%20%20%3C%2Fn-h1%3E%0D%0A%20%20%20%20%3Cn-h1%20prefix%3D%22bar%22%20align-text%20type%3D%22warning%22%3E%0D%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22warning%22%3E%0D%0A%20%20%20%20%20%20%20%20sin(x)%0D%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0D%0A%20%20%20%20%3C%2Fn-h1%3E%0D%0A%20%20%20%20%3Cn-h1%20prefix%3D%22bar%22%20align-text%20type%3D%22error%22%3E%0D%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22error%22%3E%0D%0A%20%20%20%20%20%20%20%20sin(x)%0D%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0D%0A%20%20%20%20%3C%2Fn-h1%3E%0D%0A%20%20%20%20%3Cn-h2%3Ecos(x)%3C%2Fn-h2%3E%0D%0A%20%20%20%20%3Cn-h2%20prefix%3D%22bar%22%3E%0D%0A%20%20%20%20%20%20cos(x)%0D%0A%20%20%20%20%3C%2Fn-h2%3E%0D%0A%20%20%20%20%3Cn-h2%20prefix%3D%22bar%22%20align-text%3E%0D%0A%20%20%20%20%20%20cos(x)%0D%0A%20%20%20%20%3C%2Fn-h2%3E%0D%0A%20%20%20%20%3Cn-h3%3E-sin(x)%3C%2Fn-h3%3E%0D%0A%20%20%20%20%3Cn-h3%20prefix%3D%22bar%22%3E%0D%0A%20%20%20%20%20%20-sin(x)%0D%0A%20%20%20%20%3C%2Fn-h3%3E%0D%0A%20%20%20%20%3Cn-h3%20prefix%3D%22bar%22%20align-text%3E%0D%0A%20%20%20%20%20%20-sin(x)%0D%0A%20%20%20%20%3C%2Fn-h3%3E%0D%0A%20%20%20%20%3Cn-h4%3E-cos(x)%3C%2Fn-h4%3E%0D%0A%20%20%20%20%3Cn-h4%20prefix%3D%22bar%22%3E%0D%0A%20%20%20%20%20%20-cos(x)%0D%0A%20%20%20%20%3C%2Fn-h4%3E%0D%0A%20%20%20%20%3Cn-h4%20prefix%3D%22bar%22%20align-text%3E%0D%0A%20%20%20%20%20%20-cos(x)%0D%0A%20%20%20%20%3C%2Fn-h4%3E%0D%0A%20%20%20%20%3Cn-h5%3Esin(x)%3C%2Fn-h5%3E%0D%0A%20%20%20%20%3Cn-h5%20prefix%3D%22bar%22%3E%0D%0A%20%20%20%20%20%20sin(x)%0D%0A%20%20%20%20%3C%2Fn-h5%3E%0D%0A%20%20%20%20%3Cn-h5%20prefix%3D%22bar%22%20align-text%3E%0D%0A%20%20%20%20%20%20sin(x)%0D%0A%20%20%20%20%3C%2Fn-h5%3E%0D%0A%20%20%20%20%3Cn-h6%3E%E5%BE%AA%E7%8E%AF%E5%95%8A%EF%BC%81%3C%2Fn-h6%3E%0D%0A%20%20%20%20%3Cn-h6%20prefix%3D%22bar%22%3E%0D%0A%20%20%20%20%20%20%E5%BE%AA%E7%8E%AF%E5%95%8A%EF%BC%81%0D%0A%20%20%20%20%3C%2Fn-h6%3E%0D%0A%20%20%20%20%3Cn-h6%20prefix%3D%22bar%22%20align-text%3E%0D%0A%20%20%20%20%20%20%E5%BE%AA%E7%8E%AF%E5%95%8A%EF%BC%81%0D%0A%20%20%20%20%3C%2Fn-h6%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:E(()=>[n(" 标题 ")]),content:E(()=>[e(d,null,{default:E(()=>[n("Header 不光是 Header。你知道 UI 一般很喜欢在 Header 旁边弄一个带颜色的竖条（确实，光有文字太单调了）。所以这它可以有个条。")]),_:1})]),demo:E(()=>[t("div",N,[t("div",T,[M,e(u,null,{default:E(()=>[e(A,{type:"primary"},{default:E(()=>[n(" sin(x) ")]),_:1})]),_:1}),e(u,{prefix:"bar"},{default:E(()=>[e(A,{type:"primary"},{default:E(()=>[n(" sin(x) ")]),_:1})]),_:1}),e(u,{prefix:"bar","align-text":""},{default:E(()=>[e(A,{type:"primary"},{default:E(()=>[n(" sin(x) ")]),_:1})]),_:1}),e(u,{prefix:"bar","align-text":"",type:"success"},{default:E(()=>[e(A,{type:"success"},{default:E(()=>[n(" sin(x) ")]),_:1})]),_:1}),e(u,{prefix:"bar","align-text":"",type:"info"},{default:E(()=>[e(A,{type:"info"},{default:E(()=>[n(" sin(x) ")]),_:1})]),_:1}),e(u,{prefix:"bar","align-text":"",type:"warning"},{default:E(()=>[e(A,{type:"warning"},{default:E(()=>[n(" sin(x) ")]),_:1})]),_:1}),e(u,{prefix:"bar","align-text":"",type:"error"},{default:E(()=>[e(A,{type:"error"},{default:E(()=>[n(" sin(x) ")]),_:1})]),_:1}),e(c,null,{default:E(()=>[n("cos(x)")]),_:1}),e(c,{prefix:"bar"},{default:E(()=>[n(" cos(x) ")]),_:1}),e(c,{prefix:"bar","align-text":""},{default:E(()=>[n(" cos(x) ")]),_:1}),e(s,null,{default:E(()=>[n("-sin(x)")]),_:1}),e(s,{prefix:"bar"},{default:E(()=>[n(" -sin(x) ")]),_:1}),e(s,{prefix:"bar","align-text":""},{default:E(()=>[n(" -sin(x) ")]),_:1}),e(r,null,{default:E(()=>[n("-cos(x)")]),_:1}),e(r,{prefix:"bar"},{default:E(()=>[n(" -cos(x) ")]),_:1}),e(r,{prefix:"bar","align-text":""},{default:E(()=>[n(" -cos(x) ")]),_:1}),e(_,null,{default:E(()=>[n("sin(x)")]),_:1}),e(_,{prefix:"bar"},{default:E(()=>[n(" sin(x) ")]),_:1}),e(_,{prefix:"bar","align-text":""},{default:E(()=>[n(" sin(x) ")]),_:1}),e(F,null,{default:E(()=>[n("循环啊！")]),_:1}),e(F,{prefix:"bar"},{default:E(()=>[n(" 循环啊！ ")]),_:1}),e(F,{prefix:"bar","align-text":""},{default:E(()=>[n(" 循环啊！ ")]),_:1})])])]),_:1})}const I=m(z,[["render",K]]),O={},L={class:"demo-card__view"};function q(p,h){const d=l("n-p"),A=l("n-a"),u=l("n-h1"),c=l("n-h2"),s=l("n-h3"),r=l("n-h4"),_=l("n-h5"),F=l("n-h6"),C=l("n-li"),x=l("n-ul"),y=l("n-hr"),g=l("n-ol"),D=l("n-blockquote"),o=l("component-demo");return B(),a(o,{"demo-file-name":"tags.vue","relative-url":"D:/Code/naive-ui/src/typography/demos/zhCN/tags.demo.vue",title:"标签","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-a%0D%0A%20%20%20%20href%3D%22https%3A%2F%2Fbaike.baidu.com%2Fitem%2F%25E4%25B8%2594%25E5%2590%25AC%25E9%25A3%258E%25E5%2590%259F%22%0D%0A%20%20%20%20target%3D%22_blank%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F%0D%0A%20%20%3C%2Fn-a%3E%0D%0A%20%20%3Cn-h1%3Eh1%20%E6%A0%87%E7%AD%BE%3C%2Fn-h1%3E%0D%0A%20%20%3Cn-p%3E%0D%0A%20%20%20%20%E3%80%8A%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F%E3%80%8B%E6%98%AF%E6%97%A5%E6%9C%AC%E4%BD%9C%E5%AE%B6%E6%9D%91%E4%B8%8A%E6%98%A5%E6%A0%91%E7%9A%84%E7%AC%AC%E4%B8%80%E6%9C%AC%E5%B0%8F%E8%AF%B4%E3%80%82%E5%AE%83%E9%A6%96%E6%AC%A1%E5%87%BA%E7%8E%B0%E5%9C%A8%201979%20%E5%B9%B4%206%0D%0A%20%20%20%20%E6%9C%88%E7%9A%84%E3%80%8A%E7%BE%A4%E5%83%8F%E3%80%8B%EF%BC%88%E6%97%A5%E6%9C%AC%E6%9C%80%E6%9C%89%E5%BD%B1%E5%93%8D%E5%8A%9B%E7%9A%84%E6%96%87%E5%AD%A6%E6%9D%82%E5%BF%97%E4%B9%8B%E4%B8%80%EF%BC%89%EF%BC%8C%E5%B9%B6%E4%BA%8E%E6%AC%A1%E6%9C%88%E5%87%BA%E7%89%88%E6%88%90%E4%B9%A6%E3%80%82%E8%BF%99%E9%83%A8%E5%B0%8F%E8%AF%B4%E8%A2%AB%E6%97%A5%E6%9C%AC%E5%AF%BC%E6%BC%94%0D%0A%20%20%20%20Kazuki%20%C5%8Cmori%20%E6%94%B9%E7%BC%96%E6%88%90%E7%94%B5%E5%BD%B1%EF%BC%8C%E5%B9%B6%E4%BA%8E%201981%20%E5%B9%B4%E7%94%B1%E8%89%BA%E6%9C%AF%E5%89%A7%E9%99%A2%E5%8D%8F%E4%BC%9A%E5%8F%91%E8%A1%8C%E3%80%821987%0D%0A%20%20%20%20%E5%B9%B4%E8%A2%AB%E9%98%BF%E5%B0%94%E5%BC%97%E9%9B%B7%E5%BE%B7%E4%BC%AF%E6%81%A9%E9%B2%8D%E5%A7%86%E8%AF%91%E6%88%90%E8%8B%B1%E6%96%87%E3%80%82%0D%0A%20%20%3C%2Fn-p%3E%0D%0A%20%20%3Cn-h2%3Eh2%20%E6%A0%87%E7%AD%BE%3C%2Fn-h2%3E%0D%0A%20%20%3Cn-p%3E%0D%0A%20%20%20%20%E3%80%8A%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F%E3%80%8B%E6%98%AF%E6%97%A5%E6%9C%AC%E4%BD%9C%E5%AE%B6%E6%9D%91%E4%B8%8A%E6%98%A5%E6%A0%91%E7%9A%84%E7%AC%AC%E4%B8%80%E6%9C%AC%E5%B0%8F%E8%AF%B4%E3%80%82%E5%AE%83%E9%A6%96%E6%AC%A1%E5%87%BA%E7%8E%B0%E5%9C%A8%201979%20%E5%B9%B4%206%0D%0A%20%20%20%20%E6%9C%88%E7%9A%84%E3%80%8A%E7%BE%A4%E5%83%8F%E3%80%8B%EF%BC%88%E6%97%A5%E6%9C%AC%E6%9C%80%E6%9C%89%E5%BD%B1%E5%93%8D%E5%8A%9B%E7%9A%84%E6%96%87%E5%AD%A6%E6%9D%82%E5%BF%97%E4%B9%8B%E4%B8%80%EF%BC%89%EF%BC%8C%E5%B9%B6%E4%BA%8E%E6%AC%A1%E6%9C%88%E5%87%BA%E7%89%88%E6%88%90%E4%B9%A6%E3%80%82%E8%BF%99%E9%83%A8%E5%B0%8F%E8%AF%B4%E8%A2%AB%E6%97%A5%E6%9C%AC%E5%AF%BC%E6%BC%94%0D%0A%20%20%20%20Kazuki%20%C5%8Cmori%20%E6%94%B9%E7%BC%96%E6%88%90%E7%94%B5%E5%BD%B1%EF%BC%8C%E5%B9%B6%E4%BA%8E%201981%20%E5%B9%B4%E7%94%B1%E8%89%BA%E6%9C%AF%E5%89%A7%E9%99%A2%E5%8D%8F%E4%BC%9A%E5%8F%91%E8%A1%8C%E3%80%821987%0D%0A%20%20%20%20%E5%B9%B4%E8%A2%AB%E9%98%BF%E5%B0%94%E5%BC%97%E9%9B%B7%E5%BE%B7%E4%BC%AF%E6%81%A9%E9%B2%8D%E5%A7%86%E8%AF%91%E6%88%90%E8%8B%B1%E6%96%87%E3%80%82%0D%0A%20%20%3C%2Fn-p%3E%0D%0A%20%20%3Cn-h3%3Eh3%20%E6%A0%87%E7%AD%BE%3C%2Fn-h3%3E%0D%0A%20%20%3Cn-p%3E%0D%0A%20%20%20%20%E3%80%8A%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F%E3%80%8B%E6%98%AF%E6%97%A5%E6%9C%AC%E4%BD%9C%E5%AE%B6%E6%9D%91%E4%B8%8A%E6%98%A5%E6%A0%91%E7%9A%84%E7%AC%AC%E4%B8%80%E6%9C%AC%E5%B0%8F%E8%AF%B4%E3%80%82%E5%AE%83%E9%A6%96%E6%AC%A1%E5%87%BA%E7%8E%B0%E5%9C%A8%201979%20%E5%B9%B4%206%0D%0A%20%20%20%20%E6%9C%88%E7%9A%84%E3%80%8A%E7%BE%A4%E5%83%8F%E3%80%8B%EF%BC%88%E6%97%A5%E6%9C%AC%E6%9C%80%E6%9C%89%E5%BD%B1%E5%93%8D%E5%8A%9B%E7%9A%84%E6%96%87%E5%AD%A6%E6%9D%82%E5%BF%97%E4%B9%8B%E4%B8%80%EF%BC%89%EF%BC%8C%E5%B9%B6%E4%BA%8E%E6%AC%A1%E6%9C%88%E5%87%BA%E7%89%88%E6%88%90%E4%B9%A6%E3%80%82%E8%BF%99%E9%83%A8%E5%B0%8F%E8%AF%B4%E8%A2%AB%E6%97%A5%E6%9C%AC%E5%AF%BC%E6%BC%94%0D%0A%20%20%20%20Kazuki%20%C5%8Cmori%20%E6%94%B9%E7%BC%96%E6%88%90%E7%94%B5%E5%BD%B1%EF%BC%8C%E5%B9%B6%E4%BA%8E%201981%20%E5%B9%B4%E7%94%B1%E8%89%BA%E6%9C%AF%E5%89%A7%E9%99%A2%E5%8D%8F%E4%BC%9A%E5%8F%91%E8%A1%8C%E3%80%821987%0D%0A%20%20%20%20%E5%B9%B4%E8%A2%AB%E9%98%BF%E5%B0%94%E5%BC%97%E9%9B%B7%E5%BE%B7%E4%BC%AF%E6%81%A9%E9%B2%8D%E5%A7%86%E8%AF%91%E6%88%90%E8%8B%B1%E6%96%87%E3%80%82%0D%0A%20%20%3C%2Fn-p%3E%0D%0A%20%20%3Cn-h4%3Eh4%20%E6%A0%87%E7%AD%BE%3C%2Fn-h4%3E%0D%0A%20%20%3Cn-p%3E%0D%0A%20%20%20%20%E3%80%8A%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F%E3%80%8B%E6%98%AF%E6%97%A5%E6%9C%AC%E4%BD%9C%E5%AE%B6%E6%9D%91%E4%B8%8A%E6%98%A5%E6%A0%91%E7%9A%84%E7%AC%AC%E4%B8%80%E6%9C%AC%E5%B0%8F%E8%AF%B4%E3%80%82%E5%AE%83%E9%A6%96%E6%AC%A1%E5%87%BA%E7%8E%B0%E5%9C%A8%201979%20%E5%B9%B4%206%0D%0A%20%20%20%20%E6%9C%88%E7%9A%84%E3%80%8A%E7%BE%A4%E5%83%8F%E3%80%8B%EF%BC%88%E6%97%A5%E6%9C%AC%E6%9C%80%E6%9C%89%E5%BD%B1%E5%93%8D%E5%8A%9B%E7%9A%84%E6%96%87%E5%AD%A6%E6%9D%82%E5%BF%97%E4%B9%8B%E4%B8%80%EF%BC%89%EF%BC%8C%E5%B9%B6%E4%BA%8E%E6%AC%A1%E6%9C%88%E5%87%BA%E7%89%88%E6%88%90%E4%B9%A6%E3%80%82%E8%BF%99%E9%83%A8%E5%B0%8F%E8%AF%B4%E8%A2%AB%E6%97%A5%E6%9C%AC%E5%AF%BC%E6%BC%94%0D%0A%20%20%20%20Kazuki%20%C5%8Cmori%20%E6%94%B9%E7%BC%96%E6%88%90%E7%94%B5%E5%BD%B1%EF%BC%8C%E5%B9%B6%E4%BA%8E%201981%20%E5%B9%B4%E7%94%B1%E8%89%BA%E6%9C%AF%E5%89%A7%E9%99%A2%E5%8D%8F%E4%BC%9A%E5%8F%91%E8%A1%8C%E3%80%821987%0D%0A%20%20%20%20%E5%B9%B4%E8%A2%AB%E9%98%BF%E5%B0%94%E5%BC%97%E9%9B%B7%E5%BE%B7%E4%BC%AF%E6%81%A9%E9%B2%8D%E5%A7%86%E8%AF%91%E6%88%90%E8%8B%B1%E6%96%87%E3%80%82%0D%0A%20%20%3C%2Fn-p%3E%0D%0A%20%20%3Cn-h5%3Eh5%20%E6%A0%87%E7%AD%BE%3C%2Fn-h5%3E%0D%0A%20%20%3Cn-p%3E%0D%0A%20%20%20%20%E3%80%8A%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F%E3%80%8B%E6%98%AF%E6%97%A5%E6%9C%AC%E4%BD%9C%E5%AE%B6%E6%9D%91%E4%B8%8A%E6%98%A5%E6%A0%91%E7%9A%84%E7%AC%AC%E4%B8%80%E6%9C%AC%E5%B0%8F%E8%AF%B4%E3%80%82%E5%AE%83%E9%A6%96%E6%AC%A1%E5%87%BA%E7%8E%B0%E5%9C%A8%201979%20%E5%B9%B4%206%0D%0A%20%20%20%20%E6%9C%88%E7%9A%84%E3%80%8A%E7%BE%A4%E5%83%8F%E3%80%8B%EF%BC%88%E6%97%A5%E6%9C%AC%E6%9C%80%E6%9C%89%E5%BD%B1%E5%93%8D%E5%8A%9B%E7%9A%84%E6%96%87%E5%AD%A6%E6%9D%82%E5%BF%97%E4%B9%8B%E4%B8%80%EF%BC%89%EF%BC%8C%E5%B9%B6%E4%BA%8E%E6%AC%A1%E6%9C%88%E5%87%BA%E7%89%88%E6%88%90%E4%B9%A6%E3%80%82%E8%BF%99%E9%83%A8%E5%B0%8F%E8%AF%B4%E8%A2%AB%E6%97%A5%E6%9C%AC%E5%AF%BC%E6%BC%94%0D%0A%20%20%20%20Kazuki%20%C5%8Cmori%20%E6%94%B9%E7%BC%96%E6%88%90%E7%94%B5%E5%BD%B1%EF%BC%8C%E5%B9%B6%E4%BA%8E%201981%20%E5%B9%B4%E7%94%B1%E8%89%BA%E6%9C%AF%E5%89%A7%E9%99%A2%E5%8D%8F%E4%BC%9A%E5%8F%91%E8%A1%8C%E3%80%821987%0D%0A%20%20%20%20%E5%B9%B4%E8%A2%AB%E9%98%BF%E5%B0%94%E5%BC%97%E9%9B%B7%E5%BE%B7%E4%BC%AF%E6%81%A9%E9%B2%8D%E5%A7%86%E8%AF%91%E6%88%90%E8%8B%B1%E6%96%87%E3%80%82%0D%0A%20%20%3C%2Fn-p%3E%0D%0A%20%20%3Cn-h6%3Eh6%20%E6%A0%87%E7%AD%BE%3C%2Fn-h6%3E%0D%0A%20%20%3Cn-p%3E%0D%0A%20%20%20%20%E3%80%8A%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F%E3%80%8B%E6%98%AF%E6%97%A5%E6%9C%AC%E4%BD%9C%E5%AE%B6%E6%9D%91%E4%B8%8A%E6%98%A5%E6%A0%91%E7%9A%84%E7%AC%AC%E4%B8%80%E6%9C%AC%E5%B0%8F%E8%AF%B4%E3%80%82%E5%AE%83%E9%A6%96%E6%AC%A1%E5%87%BA%E7%8E%B0%E5%9C%A8%201979%20%E5%B9%B4%206%0D%0A%20%20%20%20%E6%9C%88%E7%9A%84%E3%80%8A%E7%BE%A4%E5%83%8F%E3%80%8B%EF%BC%88%E6%97%A5%E6%9C%AC%E6%9C%80%E6%9C%89%E5%BD%B1%E5%93%8D%E5%8A%9B%E7%9A%84%E6%96%87%E5%AD%A6%E6%9D%82%E5%BF%97%E4%B9%8B%E4%B8%80%EF%BC%89%EF%BC%8C%E5%B9%B6%E4%BA%8E%E6%AC%A1%E6%9C%88%E5%87%BA%E7%89%88%E6%88%90%E4%B9%A6%E3%80%82%E8%BF%99%E9%83%A8%E5%B0%8F%E8%AF%B4%E8%A2%AB%E6%97%A5%E6%9C%AC%E5%AF%BC%E6%BC%94%0D%0A%20%20%20%20Kazuki%20%C5%8Cmori%20%E6%94%B9%E7%BC%96%E6%88%90%E7%94%B5%E5%BD%B1%EF%BC%8C%E5%B9%B6%E4%BA%8E%201981%20%E5%B9%B4%E7%94%B1%E8%89%BA%E6%9C%AF%E5%89%A7%E9%99%A2%E5%8D%8F%E4%BC%9A%E5%8F%91%E8%A1%8C%E3%80%821987%0D%0A%20%20%20%20%E5%B9%B4%E8%A2%AB%E9%98%BF%E5%B0%94%E5%BC%97%E9%9B%B7%E5%BE%B7%E4%BC%AF%E6%81%A9%E9%B2%8D%E5%A7%86%E8%AF%91%E6%88%90%E8%8B%B1%E6%96%87%E3%80%82%0D%0A%20%20%3C%2Fn-p%3E%0D%0A%20%20%3Cn-ul%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20%E6%A0%87%E7%AD%BE%3C%2Fn-li%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20%E6%A0%87%E7%AD%BE%3C%2Fn-li%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20%E6%A0%87%E7%AD%BE%3C%2Fn-li%3E%0D%0A%20%20%3C%2Fn-ul%3E%0D%0A%20%20%3Cn-hr%20%2F%3E%0D%0A%20%20%3Cn-ol%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20%E6%A0%87%E7%AD%BE%3C%2Fn-li%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20%E6%A0%87%E7%AD%BE%3C%2Fn-li%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20%E6%A0%87%E7%AD%BE%3C%2Fn-li%3E%0D%0A%20%20%3C%2Fn-ol%3E%0D%0A%20%20%3Cn-ul%20align-text%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20%E6%A0%87%E7%AD%BE%3C%2Fn-li%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20%E6%A0%87%E7%AD%BE%3C%2Fn-li%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20%E6%A0%87%E7%AD%BE%3C%2Fn-li%3E%0D%0A%20%20%3C%2Fn-ul%3E%0D%0A%20%20%3Cn-hr%20%2F%3E%0D%0A%20%20%3Cn-ol%20align-text%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20%E6%A0%87%E7%AD%BE%3C%2Fn-li%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20%E6%A0%87%E7%AD%BE%3C%2Fn-li%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20%E6%A0%87%E7%AD%BE%3C%2Fn-li%3E%0D%0A%20%20%3C%2Fn-ol%3E%0D%0A%20%20%3Cn-blockquote%3E%0D%0A%20%20%20%20%E3%80%8A%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F%E3%80%8B%E6%98%AF%E6%97%A5%E6%9C%AC%E4%BD%9C%E5%AE%B6%E6%9D%91%E4%B8%8A%E6%98%A5%E6%A0%91%E7%9A%84%E7%AC%AC%E4%B8%80%E6%9C%AC%E5%B0%8F%E8%AF%B4%E3%80%82%E5%AE%83%E9%A6%96%E6%AC%A1%E5%87%BA%E7%8E%B0%E5%9C%A8%201979%20%E5%B9%B4%206%0D%0A%20%20%20%20%E6%9C%88%E7%9A%84%E3%80%8A%E7%BE%A4%E5%83%8F%E3%80%8B%EF%BC%88%E6%97%A5%E6%9C%AC%E6%9C%80%E6%9C%89%E5%BD%B1%E5%93%8D%E5%8A%9B%E7%9A%84%E6%96%87%E5%AD%A6%E6%9D%82%E5%BF%97%E4%B9%8B%E4%B8%80%EF%BC%89%EF%BC%8C%E5%B9%B6%E4%BA%8E%E6%AC%A1%E6%9C%88%E5%87%BA%E7%89%88%E6%88%90%E4%B9%A6%E3%80%82%E8%BF%99%E9%83%A8%E5%B0%8F%E8%AF%B4%E8%A2%AB%E6%97%A5%E6%9C%AC%E5%AF%BC%E6%BC%94%0D%0A%20%20%20%20Kazuki%20%C5%8Cmori%20%E6%94%B9%E7%BC%96%E6%88%90%E7%94%B5%E5%BD%B1%EF%BC%8C%E5%B9%B6%E4%BA%8E%201981%20%E5%B9%B4%E7%94%B1%E8%89%BA%E6%9C%AF%E5%89%A7%E9%99%A2%E5%8D%8F%E4%BC%9A%E5%8F%91%E8%A1%8C%E3%80%821987%0D%0A%20%20%20%20%E5%B9%B4%E8%A2%AB%E9%98%BF%E5%B0%94%E5%BC%97%E9%9B%B7%E5%BE%B7%E4%BC%AF%E6%81%A9%E9%B2%8D%E5%A7%86%E8%AF%91%E6%88%90%E8%8B%B1%E6%96%87%E3%80%82%0D%0A%20%20%3C%2Fn-blockquote%3E%0D%0A%20%20%3Cn-blockquote%20align-text%3E%0D%0A%20%20%20%20%E3%80%8A%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F%E3%80%8B%E6%98%AF%E6%97%A5%E6%9C%AC%E4%BD%9C%E5%AE%B6%E6%9D%91%E4%B8%8A%E6%98%A5%E6%A0%91%E7%9A%84%E7%AC%AC%E4%B8%80%E6%9C%AC%E5%B0%8F%E8%AF%B4%E3%80%82%E5%AE%83%E9%A6%96%E6%AC%A1%E5%87%BA%E7%8E%B0%E5%9C%A8%201979%20%E5%B9%B4%206%0D%0A%20%20%20%20%E6%9C%88%E7%9A%84%E3%80%8A%E7%BE%A4%E5%83%8F%E3%80%8B%EF%BC%88%E6%97%A5%E6%9C%AC%E6%9C%80%E6%9C%89%E5%BD%B1%E5%93%8D%E5%8A%9B%E7%9A%84%E6%96%87%E5%AD%A6%E6%9D%82%E5%BF%97%E4%B9%8B%E4%B8%80%EF%BC%89%EF%BC%8C%E5%B9%B6%E4%BA%8E%E6%AC%A1%E6%9C%88%E5%87%BA%E7%89%88%E6%88%90%E4%B9%A6%E3%80%82%E8%BF%99%E9%83%A8%E5%B0%8F%E8%AF%B4%E8%A2%AB%E6%97%A5%E6%9C%AC%E5%AF%BC%E6%BC%94%0D%0A%20%20%20%20Kazuki%20%C5%8Cmori%20%E6%94%B9%E7%BC%96%E6%88%90%E7%94%B5%E5%BD%B1%EF%BC%8C%E5%B9%B6%E4%BA%8E%201981%20%E5%B9%B4%E7%94%B1%E8%89%BA%E6%9C%AF%E5%89%A7%E9%99%A2%E5%8D%8F%E4%BC%9A%E5%8F%91%E8%A1%8C%E3%80%821987%0D%0A%20%20%20%20%E5%B9%B4%E8%A2%AB%E9%98%BF%E5%B0%94%E5%BC%97%E9%9B%B7%E5%BE%B7%E4%BC%AF%E6%81%A9%E9%B2%8D%E5%A7%86%E8%AF%91%E6%88%90%E8%8B%B1%E6%96%87%E3%80%82%0D%0A%20%20%3C%2Fn-blockquote%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:E(()=>[n(" 标签 ")]),content:E(()=>[e(d,null,{default:E(()=>[n("其他的 Naive UI 内置标签。")]),_:1})]),demo:E(()=>[t("div",L,[e(A,{href:"https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",target:"_blank"},{default:E(()=>[n(" 且听风吟 ")]),_:1}),e(u,null,{default:E(()=>[n("h1 标签")]),_:1}),e(d,null,{default:E(()=>[n(" 《且听风吟》是日本作家村上春树的第一本小说。它首次出现在 1979 年 6 月的《群像》（日本最有影响力的文学杂志之一），并于次月出版成书。这部小说被日本导演 Kazuki Ōmori 改编成电影，并于 1981 年由艺术剧院协会发行。1987 年被阿尔弗雷德伯恩鲍姆译成英文。 ")]),_:1}),e(c,null,{default:E(()=>[n("h2 标签")]),_:1}),e(d,null,{default:E(()=>[n(" 《且听风吟》是日本作家村上春树的第一本小说。它首次出现在 1979 年 6 月的《群像》（日本最有影响力的文学杂志之一），并于次月出版成书。这部小说被日本导演 Kazuki Ōmori 改编成电影，并于 1981 年由艺术剧院协会发行。1987 年被阿尔弗雷德伯恩鲍姆译成英文。 ")]),_:1}),e(s,null,{default:E(()=>[n("h3 标签")]),_:1}),e(d,null,{default:E(()=>[n(" 《且听风吟》是日本作家村上春树的第一本小说。它首次出现在 1979 年 6 月的《群像》（日本最有影响力的文学杂志之一），并于次月出版成书。这部小说被日本导演 Kazuki Ōmori 改编成电影，并于 1981 年由艺术剧院协会发行。1987 年被阿尔弗雷德伯恩鲍姆译成英文。 ")]),_:1}),e(r,null,{default:E(()=>[n("h4 标签")]),_:1}),e(d,null,{default:E(()=>[n(" 《且听风吟》是日本作家村上春树的第一本小说。它首次出现在 1979 年 6 月的《群像》（日本最有影响力的文学杂志之一），并于次月出版成书。这部小说被日本导演 Kazuki Ōmori 改编成电影，并于 1981 年由艺术剧院协会发行。1987 年被阿尔弗雷德伯恩鲍姆译成英文。 ")]),_:1}),e(_,null,{default:E(()=>[n("h5 标签")]),_:1}),e(d,null,{default:E(()=>[n(" 《且听风吟》是日本作家村上春树的第一本小说。它首次出现在 1979 年 6 月的《群像》（日本最有影响力的文学杂志之一），并于次月出版成书。这部小说被日本导演 Kazuki Ōmori 改编成电影，并于 1981 年由艺术剧院协会发行。1987 年被阿尔弗雷德伯恩鲍姆译成英文。 ")]),_:1}),e(F,null,{default:E(()=>[n("h6 标签")]),_:1}),e(d,null,{default:E(()=>[n(" 《且听风吟》是日本作家村上春树的第一本小说。它首次出现在 1979 年 6 月的《群像》（日本最有影响力的文学杂志之一），并于次月出版成书。这部小说被日本导演 Kazuki Ōmori 改编成电影，并于 1981 年由艺术剧院协会发行。1987 年被阿尔弗雷德伯恩鲍姆译成英文。 ")]),_:1}),e(x,null,{default:E(()=>[e(C,null,{default:E(()=>[n("li 标签")]),_:1}),e(C,null,{default:E(()=>[n("li 标签")]),_:1}),e(C,null,{default:E(()=>[n("li 标签")]),_:1})]),_:1}),e(y),e(g,null,{default:E(()=>[e(C,null,{default:E(()=>[n("li 标签")]),_:1}),e(C,null,{default:E(()=>[n("li 标签")]),_:1}),e(C,null,{default:E(()=>[n("li 标签")]),_:1})]),_:1}),e(x,{"align-text":""},{default:E(()=>[e(C,null,{default:E(()=>[n("li 标签")]),_:1}),e(C,null,{default:E(()=>[n("li 标签")]),_:1}),e(C,null,{default:E(()=>[n("li 标签")]),_:1})]),_:1}),e(y),e(g,{"align-text":""},{default:E(()=>[e(C,null,{default:E(()=>[n("li 标签")]),_:1}),e(C,null,{default:E(()=>[n("li 标签")]),_:1}),e(C,null,{default:E(()=>[n("li 标签")]),_:1})]),_:1}),e(D,null,{default:E(()=>[n(" 《且听风吟》是日本作家村上春树的第一本小说。它首次出现在 1979 年 6 月的《群像》（日本最有影响力的文学杂志之一），并于次月出版成书。这部小说被日本导演 Kazuki Ōmori 改编成电影，并于 1981 年由艺术剧院协会发行。1987 年被阿尔弗雷德伯恩鲍姆译成英文。 ")]),_:1}),e(D,{"align-text":""},{default:E(()=>[n(" 《且听风吟》是日本作家村上春树的第一本小说。它首次出现在 1979 年 6 月的《群像》（日本最有影响力的文学杂志之一），并于次月出版成书。这部小说被日本导演 Kazuki Ōmori 改编成电影，并于 1981 年由艺术剧院协会发行。1987 年被阿尔弗雷德伯恩鲍姆译成英文。 ")]),_:1})])]),_:1})}const U=m(O,[["render",q]]),j={},R={class:"demo-card__view"};function $(p,h){const d=l("n-p"),A=l("n-text"),u=l("component-demo");return B(),a(u,{"demo-file-name":"text.vue","relative-url":"D:/Code/naive-ui/src/typography/demos/zhCN/text.demo.vue",title:"文本","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-text%20type%3D%22info%22%3E%0D%0A%20%20%20%20Info%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20type%3D%22success%22%3E%0D%0A%20%20%20%20Success%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20type%3D%22warning%22%3E%0D%0A%20%20%20%20Warning%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20type%3D%22error%22%3E%0D%0A%20%20%20%20Error%0D%0A%20%20%3C%2Fn-text%3E%20%3Cn-text%20strong%3E%0D%0A%20%20%20%20Strong%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20italic%3E%0D%0A%20%20%20%20Italic%0D%0A%20%20%3C%2Fn-text%3E%20%3Cn-text%20underline%3E%0D%0A%20%20%20%20Underline%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20delete%3E%0D%0A%20%20%20%20Delete%0D%0A%20%20%3C%2Fn-text%3E%20%3Cn-text%20code%3E%0D%0A%20%20%20%20Code%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20code%20delete%3E%0D%0A%20%20%20%20Code%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20depth%3D%221%22%3E%0D%0A%20%20%20%20Primary%20Depth%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20depth%3D%222%22%3E%0D%0A%20%20%20%20Secondary%20Depth%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20depth%3D%223%22%3E%0D%0A%20%20%20%20Tertiary%20Depth%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20tag%3D%22div%22%3E%0D%0A%20%20%20%20%E4%BD%9C%E4%B8%BA%20Div%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:E(()=>[n(" 文本 ")]),content:E(()=>[e(d,null,{default:E(()=>[n("用不同类型的文本展示各种信息。")]),_:1})]),demo:E(()=>[t("div",R,[e(A,{type:"info"},{default:E(()=>[n(" Info ")]),_:1}),e(A,{type:"success"},{default:E(()=>[n(" Success ")]),_:1}),e(A,{type:"warning"},{default:E(()=>[n(" Warning ")]),_:1}),e(A,{type:"error"},{default:E(()=>[n(" Error ")]),_:1}),n(),e(A,{strong:""},{default:E(()=>[n(" Strong ")]),_:1}),e(A,{italic:""},{default:E(()=>[n(" Italic ")]),_:1}),n(),e(A,{underline:""},{default:E(()=>[n(" Underline ")]),_:1}),e(A,{delete:""},{default:E(()=>[n(" Delete ")]),_:1}),n(),e(A,{code:""},{default:E(()=>[n(" Code ")]),_:1}),e(A,{code:"",delete:""},{default:E(()=>[n(" Code ")]),_:1}),e(A,{depth:"1"},{default:E(()=>[n(" Primary Depth ")]),_:1}),e(A,{depth:"2"},{default:E(()=>[n(" Secondary Depth ")]),_:1}),e(A,{depth:"3"},{default:E(()=>[n(" Tertiary Depth ")]),_:1}),e(A,{tag:"div"},{default:E(()=>[n(" 作为 Div ")]),_:1})])]),_:1})}const W=m(j,[["render",$]]),G={},J={class:"demo-card__view"};function Q(p,h){const d=l("n-text"),A=l("n-p"),u=l("n-a"),c=l("router-link"),s=l("component-demo");return B(),a(s,{"demo-file-name":"router-link.vue","relative-url":"D:/Code/naive-ui/src/typography/demos/zhCN/router-link.demo.vue",title:"配合 Router Link","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Crouter-link%20to%3D%22%2F%22%20%23%3D%22%7B%20navigate%2C%20href%20%7D%22%20custom%3E%0D%0A%20%20%20%20%3Cn-a%20%3Ahref%3D%22href%22%20%40click%3D%22navigate%22%3E%0D%0A%20%20%20%20%20%20%E5%9B%9E%E5%88%B0%E4%B8%BB%E9%A1%B5%0D%0A%20%20%20%20%3C%2Fn-a%3E%0D%0A%20%20%3C%2Frouter-link%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:E(()=>[n(" 配合 Router Link ")]),content:E(()=>[e(A,null,{default:E(()=>[n("有的时候会需要让 "),e(d,{code:""},{default:E(()=>[n("<n-a />")]),_:1}),n(" 具有 router-link 的功能。")]),_:1}),e(A,null,{default:E(()=>[n("如果你觉得写起来很麻烦，可以再封装一个组件。")]),_:1})]),demo:E(()=>[t("div",J,[e(c,{to:"/",custom:""},{default:E(({navigate:r,href:_})=>[e(u,{href:_,onClick:r},{default:E(()=>[n(" 回到主页 ")]),_:2},1032,["href","onClick"])]),_:1})])]),_:1})}const X=m(G,[["render",Q]]),Y={components:{headerVueDemo:I,tagsVueDemo:U,textVueDemo:W,routerLinkVueDemo:X},setup(){const p=P(),h=H(()=>!p.value),d=p;return{showAnchor:h,displayMode:V(),wrapperStyle:b(()=>d.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:b(()=>h.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/typography/demos/zhCN/index.demo-entry.md"}}},Z={class:"md-table-wrapper"},E0=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"类型"),t("th",null,"默认值"),t("th",null,"说明")])],-1),e0=t("td",null,"type",-1),t0=t("td",null,"排印类型",-1),n0=t("td",null,"strong",-1),l0=t("td",null,"粗体",-1),A0=t("td",null,"italic",-1),o0=t("td",null,"斜体",-1),B0=t("td",null,"underline",-1),d0=t("td",null,"文字下划线",-1),C0=t("td",null,"delete",-1),a0=t("td",null,"文字删除线",-1),u0=t("td",null,"code",-1),i0=t("td",null,"代码模式",-1),r0=t("td",null,"depth",-1),_0=t("td",null,"文字深度",-1),s0=t("td",null,"tag",-1),D0={class:"md-table-wrapper"},c0=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"类型"),t("th",null,"默认值"),t("th",null,"说明")])],-1),p0=t("td",null,"depth",-1),h0=t("td",null,"文字深度",-1),F0={class:"md-table-wrapper"},f0=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"类型"),t("th",null,"默认值"),t("th",null,"说明")])],-1),m0=t("td",null,"align-text",-1),x0=t("td",null,"文本对齐",-1),y0=t("td",null,"type",-1),g0=t("td",null,"排印类型",-1),b0=t("td",null,"prefix",-1),k0=t("td",null,"在字首显示条块",-1),v0={class:"md-table-wrapper"},w0=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"类型"),t("th",null,"默认值"),t("th",null,"说明")])],-1),P0=t("td",null,"align-text",-1),H0=t("td",null,"文本对齐",-1),V0={class:"md-table-wrapper"},S0=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"类型"),t("th",null,"默认值"),t("th",null,"说明")])],-1),z0=t("td",null,"align-text",-1),N0=t("td",null,"文本对齐",-1),T0={class:"md-table-wrapper"},M0=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"参数"),t("th",null,"说明")])],-1),K0=t("td",null,"default",-1),I0=t("td",null,"排印的内容",-1),O0={key:0,style:{width:"192px"}};function L0(p,h,d,A,u,c){const s=l("edit-on-github-header"),r=l("n-p"),_=l("n-h2"),F=l("headerVueDemo"),C=l("tagsVueDemo"),x=l("textVueDemo"),y=l("routerLinkVueDemo"),g=l("component-demos"),D=l("n-h3"),o=l("n-text"),f=l("n-table"),i=l("n-anchor-link"),w=l("n-anchor");return B(),k("div",{class:"doc",style:v(A.wrapperStyle)},[t("div",{style:v(A.contentStyle)},[e(s,{"relative-url":"D:/Code/naive-ui/src/typography/demos/zhCN/index.demo-entry.md",text:"排印 Typography"}),e(r,null,{default:E(()=>[n("Naive UI 提供了常用 HTML 标签的一些基本样式，以及对文本渲染提供帮助的组件。")]),_:1}),e(r,null,{default:E(()=>[n("排印是一门艺术。")]),_:1}),e(_,{id:"演示"},{default:E(()=>[n("演示")]),_:1}),e(g,{span:2},{default:E(()=>[e(F),e(C),e(x),e(y)]),_:1}),e(_,{id:"API"},{default:E(()=>[n("API")]),_:1}),e(D,{id:"Text-Props"},{default:E(()=>[n("Text Props")]),_:1}),t("div",Z,[e(f,{"single-column":"",class:"md-table"},{default:E(()=>[E0,t("tbody",null,[t("tr",null,[e0,t("td",null,[e(o,{code:""},{default:E(()=>[n("'default' | 'success' | 'info' | 'warning' | 'error'")]),_:1})]),t("td",null,[e(o,{code:""},{default:E(()=>[n("'default'")]),_:1})]),t0]),t("tr",null,[n0,t("td",null,[e(o,{code:""},{default:E(()=>[n("boolean")]),_:1})]),t("td",null,[e(o,{code:""},{default:E(()=>[n("false")]),_:1})]),l0]),t("tr",null,[A0,t("td",null,[e(o,{code:""},{default:E(()=>[n("boolean")]),_:1})]),t("td",null,[e(o,{code:""},{default:E(()=>[n("false")]),_:1})]),o0]),t("tr",null,[B0,t("td",null,[e(o,{code:""},{default:E(()=>[n("boolean")]),_:1})]),t("td",null,[e(o,{code:""},{default:E(()=>[n("false")]),_:1})]),d0]),t("tr",null,[C0,t("td",null,[e(o,{code:""},{default:E(()=>[n("boolean")]),_:1})]),t("td",null,[e(o,{code:""},{default:E(()=>[n("false")]),_:1})]),a0]),t("tr",null,[u0,t("td",null,[e(o,{code:""},{default:E(()=>[n("boolean")]),_:1})]),t("td",null,[e(o,{code:""},{default:E(()=>[n("false")]),_:1})]),i0]),t("tr",null,[r0,t("td",null,[e(o,{code:""},{default:E(()=>[n("1 | 2 | 3 | '1' | '2' | '3'")]),_:1})]),t("td",null,[e(o,{code:""},{default:E(()=>[n("undefined")]),_:1})]),_0]),t("tr",null,[s0,t("td",null,[e(o,{code:""},{default:E(()=>[n("string")]),_:1})]),t("td",null,[e(o,{code:""},{default:E(()=>[n("undefined")]),_:1})]),t("td",null,[n("需要被渲染为什么标签，在 "),e(o,{code:""},{default:E(()=>[n("code")]),_:1}),n(" 和 "),e(o,{code:""},{default:E(()=>[n("del")]),_:1}),n(" 设定的情况下不生效")])])])]),_:1})]),e(D,{id:"P-Props"},{default:E(()=>[n("P Props")]),_:1}),t("div",D0,[e(f,{"single-column":"",class:"md-table"},{default:E(()=>[c0,t("tbody",null,[t("tr",null,[p0,t("td",null,[e(o,{code:""},{default:E(()=>[n("1 | 2 | 3 | '1' | '2' | '3'")]),_:1})]),t("td",null,[e(o,{code:""},{default:E(()=>[n("undefined")]),_:1})]),h0])])]),_:1})]),e(D,{id:"H1,-H2,-H3,-H4,-H5,-H6-Props"},{default:E(()=>[n("H1, H2, H3, H4, H5, H6 Props")]),_:1}),t("div",F0,[e(f,{"single-column":"",class:"md-table"},{default:E(()=>[f0,t("tbody",null,[t("tr",null,[m0,t("td",null,[e(o,{code:""},{default:E(()=>[n("boolean")]),_:1})]),t("td",null,[e(o,{code:""},{default:E(()=>[n("false")]),_:1})]),x0]),t("tr",null,[y0,t("td",null,[e(o,{code:""},{default:E(()=>[n("'default' | 'success' | 'info' | 'warning' | 'error'")]),_:1})]),t("td",null,[e(o,{code:""},{default:E(()=>[n("'default'")]),_:1})]),g0]),t("tr",null,[b0,t("td",null,[e(o,{code:""},{default:E(()=>[n("'bar'")]),_:1})]),t("td",null,[e(o,{code:""},{default:E(()=>[n("undefined")]),_:1})]),k0])])]),_:1})]),e(D,{id:"Ul,-Ol-Props"},{default:E(()=>[n("Ul, Ol Props")]),_:1}),t("div",v0,[e(f,{"single-column":"",class:"md-table"},{default:E(()=>[w0,t("tbody",null,[t("tr",null,[P0,t("td",null,[e(o,{code:""},{default:E(()=>[n("boolean")]),_:1})]),t("td",null,[e(o,{code:""},{default:E(()=>[n("false")]),_:1})]),H0])])]),_:1})]),e(D,{id:"Blockquote-Props"},{default:E(()=>[n("Blockquote Props")]),_:1}),t("div",V0,[e(f,{"single-column":"",class:"md-table"},{default:E(()=>[S0,t("tbody",null,[t("tr",null,[z0,t("td",null,[e(o,{code:""},{default:E(()=>[n("boolean")]),_:1})]),t("td",null,[e(o,{code:""},{default:E(()=>[n("false")]),_:1})]),N0])])]),_:1})]),e(D,{id:"All-Typography-Components-Slots"},{default:E(()=>[n("All Typography Components Slots")]),_:1}),t("div",T0,[e(f,{"single-column":"",class:"md-table"},{default:E(()=>[M0,t("tbody",null,[t("tr",null,[K0,t("td",null,[e(o,{code:""},{default:E(()=>[n("()")]),_:1})]),I0])])]),_:1})])],4),A.showAnchor?(B(),k("div",O0,[e(w,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:E(()=>[(A.displayMode,B(),a(i,{key:0,title:"标题\r",href:"#header.vue"})),(A.displayMode,B(),a(i,{key:1,title:"标签\r",href:"#tags.vue"})),(A.displayMode,B(),a(i,{key:2,title:"文本\r",href:"#text.vue"})),(A.displayMode,B(),a(i,{key:3,title:"配合 Router Link\r",href:"#router-link.vue"})),(A.displayMode,B(),a(i,{key:4,title:"API",href:"#API"})),(A.displayMode,B(),a(i,{key:5,title:"Text Props",href:"#Text-Props"})),(A.displayMode,B(),a(i,{key:6,title:"P Props",href:"#P-Props"})),(A.displayMode,B(),a(i,{key:7,title:"H1, H2, H3, H4, H5, H6 Props",href:"#H1,-H2,-H3,-H4,-H5,-H6-Props"})),(A.displayMode,B(),a(i,{key:8,title:"Ul, Ol Props",href:"#Ul,-Ol-Props"})),(A.displayMode,B(),a(i,{key:9,title:"Blockquote Props",href:"#Blockquote-Props"})),(A.displayMode,B(),a(i,{key:10,title:"All Typography Components Slots",href:"#All-Typography-Components-Slots"}))]),_:1})])):S("",!0)],4)}const U0=m(Y,[["render",L0]]);export{U0 as default};