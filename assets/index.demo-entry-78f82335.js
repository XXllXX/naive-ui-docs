import{_ as g,r as l,o as d,i as u,w as e,g as n,f as t,e as a,u as H,a as z,b as J,c as v,d as F,n as w,h as S}from"./index-9afb4b71.js";const B={},M={class:"demo-card__view"},G={style:{"padding-left":"24px",position:"relative"}},K=a("div",{style:{position:"absolute",left:"0",top:"0",bottom:"0",width:"24px","background-color":"rgba(128, 128, 128, 0.5)"}},null,-1);function P(D,E){const i=l("n-p"),r=l("n-text"),p=l("n-h1"),A=l("n-h2"),f=l("n-h3"),_=l("n-h4"),c=l("n-h5"),C=l("n-h6"),s=l("component-demo");return d(),u(s,{"demo-file-name":"header.vue","relative-url":"D:/Code/naive-ui/src/typography/demos/enUS/header.demo.vue",title:"Header","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20style%3D%22padding-left%3A%2024px%3B%20position%3A%20relative%22%3E%0D%0A%20%20%20%20%3Cdiv%0D%0A%20%20%20%20%20%20style%3D%22%0D%0A%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0D%0A%20%20%20%20%20%20%20%20left%3A%200%3B%0D%0A%20%20%20%20%20%20%20%20top%3A%200%3B%0D%0A%20%20%20%20%20%20%20%20bottom%3A%200%3B%0D%0A%20%20%20%20%20%20%20%20width%3A%2024px%3B%0D%0A%20%20%20%20%20%20%20%20background-color%3A%20rgba(128%2C%20128%2C%20128%2C%200.5)%3B%0D%0A%20%20%20%20%20%20%22%0D%0A%20%20%20%20%2F%3E%0D%0A%20%20%20%20%3Cn-h1%3E%0D%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22primary%22%3E%0D%0A%20%20%20%20%20%20%20%20sin(x)%0D%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0D%0A%20%20%20%20%3C%2Fn-h1%3E%0D%0A%20%20%20%20%3Cn-h1%20prefix%3D%22bar%22%3E%0D%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22primary%22%3E%0D%0A%20%20%20%20%20%20%20%20sin(x)%0D%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0D%0A%20%20%20%20%3C%2Fn-h1%3E%0D%0A%20%20%20%20%3Cn-h1%20prefix%3D%22bar%22%20align-text%3E%0D%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22primary%22%3E%0D%0A%20%20%20%20%20%20%20%20sin(x)%0D%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0D%0A%20%20%20%20%3C%2Fn-h1%3E%0D%0A%20%20%20%20%3Cn-h1%20prefix%3D%22bar%22%20align-text%20type%3D%22success%22%3E%0D%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22success%22%3E%0D%0A%20%20%20%20%20%20%20%20sin(x)%0D%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0D%0A%20%20%20%20%3C%2Fn-h1%3E%0D%0A%20%20%20%20%3Cn-h1%20prefix%3D%22bar%22%20align-text%20type%3D%22info%22%3E%0D%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22info%22%3E%0D%0A%20%20%20%20%20%20%20%20sin(x)%0D%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0D%0A%20%20%20%20%3C%2Fn-h1%3E%0D%0A%20%20%20%20%3Cn-h1%20prefix%3D%22bar%22%20align-text%20type%3D%22warning%22%3E%0D%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22warning%22%3E%0D%0A%20%20%20%20%20%20%20%20sin(x)%0D%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0D%0A%20%20%20%20%3C%2Fn-h1%3E%0D%0A%20%20%20%20%3Cn-h1%20prefix%3D%22bar%22%20align-text%20type%3D%22error%22%3E%0D%0A%20%20%20%20%20%20%3Cn-text%20type%3D%22error%22%3E%0D%0A%20%20%20%20%20%20%20%20sin(x)%0D%0A%20%20%20%20%20%20%3C%2Fn-text%3E%0D%0A%20%20%20%20%3C%2Fn-h1%3E%0D%0A%20%20%20%20%3Cn-h2%3Ecos(x)%3C%2Fn-h2%3E%0D%0A%20%20%20%20%3Cn-h2%20prefix%3D%22bar%22%3E%0D%0A%20%20%20%20%20%20cos(x)%0D%0A%20%20%20%20%3C%2Fn-h2%3E%0D%0A%20%20%20%20%3Cn-h2%20prefix%3D%22bar%22%20align-text%3E%0D%0A%20%20%20%20%20%20cos(x)%0D%0A%20%20%20%20%3C%2Fn-h2%3E%0D%0A%20%20%20%20%3Cn-h3%3E-sin(x)%3C%2Fn-h3%3E%0D%0A%20%20%20%20%3Cn-h3%20prefix%3D%22bar%22%3E%0D%0A%20%20%20%20%20%20-sin(x)%0D%0A%20%20%20%20%3C%2Fn-h3%3E%0D%0A%20%20%20%20%3Cn-h3%20prefix%3D%22bar%22%20align-text%3E%0D%0A%20%20%20%20%20%20-sin(x)%0D%0A%20%20%20%20%3C%2Fn-h3%3E%0D%0A%20%20%20%20%3Cn-h4%3E-cos(x)%3C%2Fn-h4%3E%0D%0A%20%20%20%20%3Cn-h4%20prefix%3D%22bar%22%3E%0D%0A%20%20%20%20%20%20-cos(x)%0D%0A%20%20%20%20%3C%2Fn-h4%3E%0D%0A%20%20%20%20%3Cn-h4%20prefix%3D%22bar%22%20align-text%3E%0D%0A%20%20%20%20%20%20-cos(x)%0D%0A%20%20%20%20%3C%2Fn-h4%3E%0D%0A%20%20%20%20%3Cn-h5%3Esin(x)%3C%2Fn-h5%3E%0D%0A%20%20%20%20%3Cn-h5%20prefix%3D%22bar%22%3E%0D%0A%20%20%20%20%20%20sin(x)%0D%0A%20%20%20%20%3C%2Fn-h5%3E%0D%0A%20%20%20%20%3Cn-h5%20prefix%3D%22bar%22%20align-text%3E%0D%0A%20%20%20%20%20%20sin(x)%0D%0A%20%20%20%20%3C%2Fn-h5%3E%0D%0A%20%20%20%20%3Cn-h6%3EWhat%20a%20loop!%3C%2Fn-h6%3E%0D%0A%20%20%20%20%3Cn-h6%20prefix%3D%22bar%22%3E%0D%0A%20%20%20%20%20%20What%20a%20loop!%0D%0A%20%20%20%20%3C%2Fn-h6%3E%0D%0A%20%20%20%20%3Cn-h6%20prefix%3D%22bar%22%20align-text%3E%0D%0A%20%20%20%20%20%20What%20a%20loop!%0D%0A%20%20%20%20%3C%2Fn-h6%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:e(()=>[n(" Header ")]),content:e(()=>[t(i,null,{default:e(()=>[n("Make your headers pop with a little bar to the left. Much less boring.")]),_:1})]),demo:e(()=>[a("div",M,[a("div",G,[K,t(p,null,{default:e(()=>[t(r,{type:"primary"},{default:e(()=>[n(" sin(x) ")]),_:1})]),_:1}),t(p,{prefix:"bar"},{default:e(()=>[t(r,{type:"primary"},{default:e(()=>[n(" sin(x) ")]),_:1})]),_:1}),t(p,{prefix:"bar","align-text":""},{default:e(()=>[t(r,{type:"primary"},{default:e(()=>[n(" sin(x) ")]),_:1})]),_:1}),t(p,{prefix:"bar","align-text":"",type:"success"},{default:e(()=>[t(r,{type:"success"},{default:e(()=>[n(" sin(x) ")]),_:1})]),_:1}),t(p,{prefix:"bar","align-text":"",type:"info"},{default:e(()=>[t(r,{type:"info"},{default:e(()=>[n(" sin(x) ")]),_:1})]),_:1}),t(p,{prefix:"bar","align-text":"",type:"warning"},{default:e(()=>[t(r,{type:"warning"},{default:e(()=>[n(" sin(x) ")]),_:1})]),_:1}),t(p,{prefix:"bar","align-text":"",type:"error"},{default:e(()=>[t(r,{type:"error"},{default:e(()=>[n(" sin(x) ")]),_:1})]),_:1}),t(A,null,{default:e(()=>[n("cos(x)")]),_:1}),t(A,{prefix:"bar"},{default:e(()=>[n(" cos(x) ")]),_:1}),t(A,{prefix:"bar","align-text":""},{default:e(()=>[n(" cos(x) ")]),_:1}),t(f,null,{default:e(()=>[n("-sin(x)")]),_:1}),t(f,{prefix:"bar"},{default:e(()=>[n(" -sin(x) ")]),_:1}),t(f,{prefix:"bar","align-text":""},{default:e(()=>[n(" -sin(x) ")]),_:1}),t(_,null,{default:e(()=>[n("-cos(x)")]),_:1}),t(_,{prefix:"bar"},{default:e(()=>[n(" -cos(x) ")]),_:1}),t(_,{prefix:"bar","align-text":""},{default:e(()=>[n(" -cos(x) ")]),_:1}),t(c,null,{default:e(()=>[n("sin(x)")]),_:1}),t(c,{prefix:"bar"},{default:e(()=>[n(" sin(x) ")]),_:1}),t(c,{prefix:"bar","align-text":""},{default:e(()=>[n(" sin(x) ")]),_:1}),t(C,null,{default:e(()=>[n("What a loop!")]),_:1}),t(C,{prefix:"bar"},{default:e(()=>[n(" What a loop! ")]),_:1}),t(C,{prefix:"bar","align-text":""},{default:e(()=>[n(" What a loop! ")]),_:1})])])]),_:1})}const I=g(B,[["render",P]]),W={},V={class:"demo-card__view"};function N(D,E){const i=l("n-p"),r=l("n-a"),p=l("n-h1"),A=l("n-h2"),f=l("n-h3"),_=l("n-h4"),c=l("n-h5"),C=l("n-h6"),s=l("n-li"),x=l("n-ul"),b=l("n-hr"),k=l("n-ol"),m=l("n-blockquote"),o=l("component-demo");return d(),u(o,{"demo-file-name":"tags.vue","relative-url":"D:/Code/naive-ui/src/typography/demos/enUS/tags.demo.vue",title:"Tags","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-a%20href%3D%22https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHear_the_Wind_Sing%22%20target%3D%22_blank%22%3E%0D%0A%20%20%20%20Hear%20the%20Wind%20Sing%0D%0A%20%20%3C%2Fn-a%3E%0D%0A%20%20%3Cn-h1%3Eh1%20tag%3C%2Fn-h1%3E%0D%0A%20%20%3Cn-p%3E%0D%0A%20%20%20%20Hear%20the%20Wind%20Sing%20(%E9%A2%A8%E3%81%AE%E6%AD%8C%E3%82%92%E8%81%B4%E3%81%91%20Kaze%20no%20uta%20o%20kike)%20is%20the%20first%20novel%20by%0D%0A%20%20%20%20Japanese%20writer%20Haruki%20Murakami.%20It%20first%20appeared%20in%20the%20June%201979%20issue%20of%0D%0A%20%20%20%20Gunzo%20(one%20of%20the%20most%20influential%20literary%20magazines%20in%20Japan)%2C%20and%20in%20book%0D%0A%20%20%20%20form%20the%20next%20month.%20The%20novel%20was%20adapted%20by%20Japanese%20director%20Kazuki%20%C5%8Cmori%0D%0A%20%20%20%20in%20a%201981%20film%20distributed%20by%20Art%20Theatre%20Guild.%20An%20English%20translation%20by%0D%0A%20%20%20%20Alfred%20Birnbaum%20appeared%20in%201987.%0D%0A%20%20%3C%2Fn-p%3E%0D%0A%20%20%3Cn-h2%3Eh2%20tag%3C%2Fn-h2%3E%0D%0A%20%20%3Cn-p%3E%0D%0A%20%20%20%20Hear%20the%20Wind%20Sing%20(%E9%A2%A8%E3%81%AE%E6%AD%8C%E3%82%92%E8%81%B4%E3%81%91%20Kaze%20no%20uta%20o%20kike)%20is%20the%20first%20novel%20by%0D%0A%20%20%20%20Japanese%20writer%20Haruki%20Murakami.%20It%20first%20appeared%20in%20the%20June%201979%20issue%20of%0D%0A%20%20%20%20Gunzo%20(one%20of%20the%20most%20influential%20literary%20magazines%20in%20Japan)%2C%20and%20in%20book%0D%0A%20%20%20%20form%20the%20next%20month.%20The%20novel%20was%20adapted%20by%20Japanese%20director%20Kazuki%20%C5%8Cmori%0D%0A%20%20%20%20in%20a%201981%20film%20distributed%20by%20Art%20Theatre%20Guild.%20An%20English%20translation%20by%0D%0A%20%20%20%20Alfred%20Birnbaum%20appeared%20in%201987.%0D%0A%20%20%3C%2Fn-p%3E%0D%0A%20%20%3Cn-h3%3Eh3%20tag%3C%2Fn-h3%3E%0D%0A%20%20%3Cn-p%3E%0D%0A%20%20%20%20Hear%20the%20Wind%20Sing%20(%E9%A2%A8%E3%81%AE%E6%AD%8C%E3%82%92%E8%81%B4%E3%81%91%20Kaze%20no%20uta%20o%20kike)%20is%20the%20first%20novel%20by%0D%0A%20%20%20%20Japanese%20writer%20Haruki%20Murakami.%20It%20first%20appeared%20in%20the%20June%201979%20issue%20of%0D%0A%20%20%20%20Gunzo%20(one%20of%20the%20most%20influential%20literary%20magazines%20in%20Japan)%2C%20and%20in%20book%0D%0A%20%20%20%20form%20the%20next%20month.%20The%20novel%20was%20adapted%20by%20Japanese%20director%20Kazuki%20%C5%8Cmori%0D%0A%20%20%20%20in%20a%201981%20film%20distributed%20by%20Art%20Theatre%20Guild.%20An%20English%20translation%20by%0D%0A%20%20%20%20Alfred%20Birnbaum%20appeared%20in%201987.%0D%0A%20%20%3C%2Fn-p%3E%0D%0A%20%20%3Cn-h4%3Eh4%20tag%3C%2Fn-h4%3E%0D%0A%20%20%3Cn-p%3E%0D%0A%20%20%20%20Hear%20the%20Wind%20Sing%20(%E9%A2%A8%E3%81%AE%E6%AD%8C%E3%82%92%E8%81%B4%E3%81%91%20Kaze%20no%20uta%20o%20kike)%20is%20the%20first%20novel%20by%0D%0A%20%20%20%20Japanese%20writer%20Haruki%20Murakami.%20It%20first%20appeared%20in%20the%20June%201979%20issue%20of%0D%0A%20%20%20%20Gunzo%20(one%20of%20the%20most%20influential%20literary%20magazines%20in%20Japan)%2C%20and%20in%20book%0D%0A%20%20%20%20form%20the%20next%20month.%20The%20novel%20was%20adapted%20by%20Japanese%20director%20Kazuki%20%C5%8Cmori%0D%0A%20%20%20%20in%20a%201981%20film%20distributed%20by%20Art%20Theatre%20Guild.%20An%20English%20translation%20by%0D%0A%20%20%20%20Alfred%20Birnbaum%20appeared%20in%201987.%0D%0A%20%20%3C%2Fn-p%3E%0D%0A%20%20%3Cn-h5%3Eh5%20tag%3C%2Fn-h5%3E%0D%0A%20%20%3Cn-p%3E%0D%0A%20%20%20%20Hear%20the%20Wind%20Sing%20(%E9%A2%A8%E3%81%AE%E6%AD%8C%E3%82%92%E8%81%B4%E3%81%91%20Kaze%20no%20uta%20o%20kike)%20is%20the%20first%20novel%20by%0D%0A%20%20%20%20Japanese%20writer%20Haruki%20Murakami.%20It%20first%20appeared%20in%20the%20June%201979%20issue%20of%0D%0A%20%20%20%20Gunzo%20(one%20of%20the%20most%20influential%20literary%20magazines%20in%20Japan)%2C%20and%20in%20book%0D%0A%20%20%20%20form%20the%20next%20month.%20The%20novel%20was%20adapted%20by%20Japanese%20director%20Kazuki%20%C5%8Cmori%0D%0A%20%20%20%20in%20a%201981%20film%20distributed%20by%20Art%20Theatre%20Guild.%20An%20English%20translation%20by%0D%0A%20%20%20%20Alfred%20Birnbaum%20appeared%20in%201987.%0D%0A%20%20%3C%2Fn-p%3E%0D%0A%20%20%3Cn-h6%3Eh6%20tag%3C%2Fn-h6%3E%0D%0A%20%20%3Cn-p%3E%0D%0A%20%20%20%20Hear%20the%20Wind%20Sing%20(%E9%A2%A8%E3%81%AE%E6%AD%8C%E3%82%92%E8%81%B4%E3%81%91%20Kaze%20no%20uta%20o%20kike)%20is%20the%20first%20novel%20by%0D%0A%20%20%20%20Japanese%20writer%20Haruki%20Murakami.%20It%20first%20appeared%20in%20the%20June%201979%20issue%20of%0D%0A%20%20%20%20Gunzo%20(one%20of%20the%20most%20influential%20literary%20magazines%20in%20Japan)%2C%20and%20in%20book%0D%0A%20%20%20%20form%20the%20next%20month.%20The%20novel%20was%20adapted%20by%20Japanese%20director%20Kazuki%20%C5%8Cmori%0D%0A%20%20%20%20in%20a%201981%20film%20distributed%20by%20Art%20Theatre%20Guild.%20An%20English%20translation%20by%0D%0A%20%20%20%20Alfred%20Birnbaum%20appeared%20in%201987.%0D%0A%20%20%3C%2Fn-p%3E%0D%0A%20%20%3Cn-ul%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0D%0A%20%20%3C%2Fn-ul%3E%0D%0A%20%20%3Cn-hr%20%2F%3E%0D%0A%20%20%3Cn-ol%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0D%0A%20%20%3C%2Fn-ol%3E%0D%0A%20%20%3Cn-ul%20align-text%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0D%0A%20%20%3C%2Fn-ul%3E%0D%0A%20%20%3Cn-hr%20%2F%3E%0D%0A%20%20%3Cn-ol%20align-text%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0D%0A%20%20%20%20%3Cn-li%3Eli%20tag%3C%2Fn-li%3E%0D%0A%20%20%3C%2Fn-ol%3E%0D%0A%20%20%3Cn-blockquote%3E%0D%0A%20%20%20%20Hear%20the%20Wind%20Sing%20(%E9%A2%A8%E3%81%AE%E6%AD%8C%E3%82%92%E8%81%B4%E3%81%91%20Kaze%20no%20uta%20o%20kike)%20is%20the%20first%20novel%20by%0D%0A%20%20%20%20Japanese%20writer%20Haruki%20Murakami.%20It%20first%20appeared%20in%20the%20June%201979%20issue%20of%0D%0A%20%20%20%20Gunzo%20(one%20of%20the%20most%20influential%20literary%20magazines%20in%20Japan)%2C%20and%20in%20book%0D%0A%20%20%20%20form%20the%20next%20month.%20The%20novel%20was%20adapted%20by%20Japanese%20director%20Kazuki%20%C5%8Cmori%0D%0A%20%20%20%20in%20a%201981%20film%20distributed%20by%20Art%20Theatre%20Guild.%20An%20English%20translation%20by%0D%0A%20%20%20%20Alfred%20Birnbaum%20appeared%20in%201987.%0D%0A%20%20%3C%2Fn-blockquote%3E%0D%0A%20%20%3Cn-blockquote%20align-text%3E%0D%0A%20%20%20%20Hear%20the%20Wind%20Sing%20(%E9%A2%A8%E3%81%AE%E6%AD%8C%E3%82%92%E8%81%B4%E3%81%91%20Kaze%20no%20uta%20o%20kike)%20is%20the%20first%20novel%20by%0D%0A%20%20%20%20Japanese%20writer%20Haruki%20Murakami.%20It%20first%20appeared%20in%20the%20June%201979%20issue%20of%0D%0A%20%20%20%20Gunzo%20(one%20of%20the%20most%20influential%20literary%20magazines%20in%20Japan)%2C%20and%20in%20book%0D%0A%20%20%20%20form%20the%20next%20month.%20The%20novel%20was%20adapted%20by%20Japanese%20director%20Kazuki%20%C5%8Cmori%0D%0A%20%20%20%20in%20a%201981%20film%20distributed%20by%20Art%20Theatre%20Guild.%20An%20English%20translation%20by%0D%0A%20%20%20%20Alfred%20Birnbaum%20appeared%20in%201987.%0D%0A%20%20%3C%2Fn-blockquote%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:e(()=>[n(" Tags ")]),content:e(()=>[t(i,null,{default:e(()=>[n("Other naive-ui built-in tags.")]),_:1})]),demo:e(()=>[a("div",V,[t(r,{href:"https://en.wikipedia.org/wiki/Hear_the_Wind_Sing",target:"_blank"},{default:e(()=>[n(" Hear the Wind Sing ")]),_:1}),t(p,null,{default:e(()=>[n("h1 tag")]),_:1}),t(i,null,{default:e(()=>[n(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")]),_:1}),t(A,null,{default:e(()=>[n("h2 tag")]),_:1}),t(i,null,{default:e(()=>[n(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")]),_:1}),t(f,null,{default:e(()=>[n("h3 tag")]),_:1}),t(i,null,{default:e(()=>[n(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")]),_:1}),t(_,null,{default:e(()=>[n("h4 tag")]),_:1}),t(i,null,{default:e(()=>[n(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")]),_:1}),t(c,null,{default:e(()=>[n("h5 tag")]),_:1}),t(i,null,{default:e(()=>[n(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")]),_:1}),t(C,null,{default:e(()=>[n("h6 tag")]),_:1}),t(i,null,{default:e(()=>[n(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")]),_:1}),t(x,null,{default:e(()=>[t(s,null,{default:e(()=>[n("li tag")]),_:1}),t(s,null,{default:e(()=>[n("li tag")]),_:1}),t(s,null,{default:e(()=>[n("li tag")]),_:1})]),_:1}),t(b),t(k,null,{default:e(()=>[t(s,null,{default:e(()=>[n("li tag")]),_:1}),t(s,null,{default:e(()=>[n("li tag")]),_:1}),t(s,null,{default:e(()=>[n("li tag")]),_:1})]),_:1}),t(x,{"align-text":""},{default:e(()=>[t(s,null,{default:e(()=>[n("li tag")]),_:1}),t(s,null,{default:e(()=>[n("li tag")]),_:1}),t(s,null,{default:e(()=>[n("li tag")]),_:1})]),_:1}),t(b),t(k,{"align-text":""},{default:e(()=>[t(s,null,{default:e(()=>[n("li tag")]),_:1}),t(s,null,{default:e(()=>[n("li tag")]),_:1}),t(s,null,{default:e(()=>[n("li tag")]),_:1})]),_:1}),t(m,null,{default:e(()=>[n(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")]),_:1}),t(m,{"align-text":""},{default:e(()=>[n(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")]),_:1})])]),_:1})}const U=g(W,[["render",N]]),O={},q={class:"demo-card__view"};function j(D,E){const i=l("n-text"),r=l("n-p"),p=l("component-demo");return d(),u(p,{"demo-file-name":"text.vue","relative-url":"D:/Code/naive-ui/src/typography/demos/enUS/text.demo.vue",title:"Text","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Cn-text%20type%3D%22info%22%3E%0D%0A%20%20%20%20Info%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20type%3D%22success%22%3E%0D%0A%20%20%20%20Success%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20type%3D%22warning%22%3E%0D%0A%20%20%20%20Warning%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20type%3D%22error%22%3E%0D%0A%20%20%20%20Error%0D%0A%20%20%3C%2Fn-text%3E%20%3Cn-text%20strong%3E%0D%0A%20%20%20%20Strong%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20italic%3E%0D%0A%20%20%20%20Italic%0D%0A%20%20%3C%2Fn-text%3E%20%3Cn-text%20underline%3E%0D%0A%20%20%20%20Underline%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20delete%3E%0D%0A%20%20%20%20Delete%0D%0A%20%20%3C%2Fn-text%3E%20%3Cn-text%20code%3E%0D%0A%20%20%20%20Code%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20code%20delete%3E%0D%0A%20%20%20%20Code%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20depth%3D%221%22%3E%0D%0A%20%20%20%20Primary%20Depth%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20depth%3D%222%22%3E%0D%0A%20%20%20%20Secondary%20Depth%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20depth%3D%223%22%3E%0D%0A%20%20%20%20Tertiary%20Depth%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%20%20%3Cn-text%20tag%3D%22div%22%3E%0D%0A%20%20%20%20As%20Div%0D%0A%20%20%3C%2Fn-text%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:e(()=>[n(" Text ")]),content:e(()=>[t(r,null,{default:e(()=>[n("Use different "),t(i,{code:""},{default:e(()=>[n("types")]),_:1}),n(" to add some variety to your styles.")]),_:1})]),demo:e(()=>[a("div",q,[t(i,{type:"info"},{default:e(()=>[n(" Info ")]),_:1}),t(i,{type:"success"},{default:e(()=>[n(" Success ")]),_:1}),t(i,{type:"warning"},{default:e(()=>[n(" Warning ")]),_:1}),t(i,{type:"error"},{default:e(()=>[n(" Error ")]),_:1}),n(),t(i,{strong:""},{default:e(()=>[n(" Strong ")]),_:1}),t(i,{italic:""},{default:e(()=>[n(" Italic ")]),_:1}),n(),t(i,{underline:""},{default:e(()=>[n(" Underline ")]),_:1}),t(i,{delete:""},{default:e(()=>[n(" Delete ")]),_:1}),n(),t(i,{code:""},{default:e(()=>[n(" Code ")]),_:1}),t(i,{code:"",delete:""},{default:e(()=>[n(" Code ")]),_:1}),t(i,{depth:"1"},{default:e(()=>[n(" Primary Depth ")]),_:1}),t(i,{depth:"2"},{default:e(()=>[n(" Secondary Depth ")]),_:1}),t(i,{depth:"3"},{default:e(()=>[n(" Tertiary Depth ")]),_:1}),t(i,{tag:"div"},{default:e(()=>[n(" As Div ")]),_:1})])]),_:1})}const L=g(O,[["render",j]]),$={},R={class:"demo-card__view"};function Y(D,E){const i=l("n-text"),r=l("n-p"),p=l("n-a"),A=l("router-link"),f=l("component-demo");return d(),u(f,{"demo-file-name":"router-link.vue","relative-url":"D:/Code/naive-ui/src/typography/demos/enUS/router-link.demo.vue",title:"Use n-a with router link","ts-code":"<!--TS_CODE_SLOT-->","js-code":"%3Ctemplate%3E%0D%0A%20%20%3Crouter-link%20to%3D%22%2F%22%20%23%3D%22%7B%20navigate%2C%20href%20%7D%22%20custom%3E%0D%0A%20%20%20%20%3Cn-a%20%3Ahref%3D%22href%22%20%40click%3D%22navigate%22%3E%0D%0A%20%20%20%20%20%20Back%20Home%0D%0A%20%20%20%20%3C%2Fn-a%3E%0D%0A%20%20%3C%2Frouter-link%3E%0D%0A%3C%2Ftemplate%3E","language-type":"js"},{title:e(()=>[n(" Use n-a with router link ")]),content:e(()=>[t(r,null,{default:e(()=>[n("You can use "),t(i,{code:""},{default:e(()=>[n("<n-a />")]),_:1}),n(" for links and routes.")]),_:1}),t(r,null,{default:e(()=>[n("If you think the following method is a little verbose for routes, you can always make it a new component.")]),_:1})]),demo:e(()=>[a("div",R,[t(A,{to:"/",custom:""},{default:e(({navigate:_,href:c})=>[t(p,{href:c,onClick:_},{default:e(()=>[n(" Back Home ")]),_:2},1032,["href","onClick"])]),_:1})])]),_:1})}const Q=g($,[["render",Y]]),X={components:{headerVueDemo:I,tagsVueDemo:U,textVueDemo:L,routerLinkVueDemo:Q},setup(){const D=H(),E=z(()=>!D.value),i=D;return{showAnchor:E,displayMode:J(),wrapperStyle:v(()=>i.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:v(()=>E.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"D:/Code/naive-ui/src/typography/demos/enUS/index.demo-entry.md"}}},Z={class:"md-table-wrapper"},e0=a("thead",null,[a("tr",null,[a("th",null,"Name"),a("th",null,"Type"),a("th",null,"Default"),a("th",null,"Description")])],-1),t0=a("td",null,"type",-1),n0=a("td",null,"Typography type.",-1),a0=a("td",null,"strong",-1),l0=a("td",null,"Strong.",-1),o0=a("td",null,"italic",-1),i0=a("td",null,"Italic.",-1),r0=a("td",null,"underline",-1),d0=a("td",null,"Underline.",-1),s0=a("td",null,"delete",-1),u0=a("td",null,"code",-1),p0=a("td",null,"depth",-1),h0=a("td",null,"Text depth (shade of text).",-1),_0=a("td",null,"tag",-1),c0={class:"md-table-wrapper"},f0=a("thead",null,[a("tr",null,[a("th",null,"Name"),a("th",null,"Type"),a("th",null,"Default"),a("th",null,"Description")])],-1),m0=a("td",null,"depth",-1),A0=a("td",null,"Text depth (shade of text).",-1),D0={class:"md-table-wrapper"},E0=a("thead",null,[a("tr",null,[a("th",null,"Name"),a("th",null,"Type"),a("th",null,"Default"),a("th",null,"Description")])],-1),C0=a("td",null,"align-text",-1),y0=a("td",null,"Text alignment.",-1),g0=a("td",null,"type",-1),x0=a("td",null,"Text color style.",-1),b0=a("td",null,"prefix",-1),k0=a("td",null,"Show a bar in front of the heading.",-1),v0={class:"md-table-wrapper"},F0=a("thead",null,[a("tr",null,[a("th",null,"Name"),a("th",null,"Type"),a("th",null,"Default"),a("th",null,"Description")])],-1),w0=a("td",null,"align-text",-1),T0=a("td",null,"Text alignment.",-1),H0={class:"md-table-wrapper"},z0=a("thead",null,[a("tr",null,[a("th",null,"Name"),a("th",null,"Type"),a("th",null,"Default"),a("th",null,"Description")])],-1),J0=a("td",null,"align-text",-1),S0=a("td",null,"Text alignment.",-1),B0={class:"md-table-wrapper"},M0=a("thead",null,[a("tr",null,[a("th",null,"Name"),a("th",null,"Parameters"),a("th",null,"Description")])],-1),G0=a("td",null,"default",-1),K0=a("td",null,"The content of typography.",-1),P0={key:0,style:{width:"192px"}};function I0(D,E,i,r,p,A){const f=l("edit-on-github-header"),_=l("n-p"),c=l("n-h2"),C=l("headerVueDemo"),s=l("tagsVueDemo"),x=l("textVueDemo"),b=l("routerLinkVueDemo"),k=l("component-demos"),m=l("n-h3"),o=l("n-text"),y=l("n-table"),h=l("n-anchor-link"),T=l("n-anchor");return d(),F("div",{class:"doc",style:w(r.wrapperStyle)},[a("div",{style:w(r.contentStyle)},[t(f,{"relative-url":"D:/Code/naive-ui/src/typography/demos/enUS/index.demo-entry.md",text:"Typography"}),t(_,null,{default:e(()=>[n("Naive UI provides some HTML text styling.")]),_:1}),t(_,null,{default:e(()=>[n("Typography is an art.")]),_:1}),t(c,{id:"Demos"},{default:e(()=>[n("Demos")]),_:1}),t(k,{span:2},{default:e(()=>[t(C),t(s),t(x),t(b)]),_:1}),t(c,{id:"API"},{default:e(()=>[n("API")]),_:1}),t(m,{id:"Text-Props"},{default:e(()=>[n("Text Props")]),_:1}),a("div",Z,[t(y,{"single-column":"",class:"md-table"},{default:e(()=>[e0,a("tbody",null,[a("tr",null,[t0,a("td",null,[t(o,{code:""},{default:e(()=>[n("'default' | 'success' | 'info' | 'warning' | 'error'")]),_:1})]),a("td",null,[t(o,{code:""},{default:e(()=>[n("'default'")]),_:1})]),n0]),a("tr",null,[a0,a("td",null,[t(o,{code:""},{default:e(()=>[n("boolean")]),_:1})]),a("td",null,[t(o,{code:""},{default:e(()=>[n("false")]),_:1})]),l0]),a("tr",null,[o0,a("td",null,[t(o,{code:""},{default:e(()=>[n("boolean")]),_:1})]),a("td",null,[t(o,{code:""},{default:e(()=>[n("false")]),_:1})]),i0]),a("tr",null,[r0,a("td",null,[t(o,{code:""},{default:e(()=>[n("boolean")]),_:1})]),a("td",null,[t(o,{code:""},{default:e(()=>[n("false")]),_:1})]),d0]),a("tr",null,[s0,a("td",null,[t(o,{code:""},{default:e(()=>[n("boolean")]),_:1})]),a("td",null,[t(o,{code:""},{default:e(()=>[n("false")]),_:1})]),a("td",null,[n("Use the "),t(o,{code:""},{default:e(()=>[n("del")]),_:1}),n(" tag and strikethrough style.")])]),a("tr",null,[u0,a("td",null,[t(o,{code:""},{default:e(()=>[n("boolean")]),_:1})]),a("td",null,[t(o,{code:""},{default:e(()=>[n("false")]),_:1})]),a("td",null,[n("Use the "),t(o,{code:""},{default:e(()=>[n("code")]),_:1}),n(" tag and style.")])]),a("tr",null,[p0,a("td",null,[t(o,{code:""},{default:e(()=>[n("1 | 2 | 3 | '1' | '2' | '3'")]),_:1})]),a("td",null,[t(o,{code:""},{default:e(()=>[n("undefined")]),_:1})]),h0]),a("tr",null,[_0,a("td",null,[t(o,{code:""},{default:e(()=>[n("string")]),_:1})]),a("td",null,[t(o,{code:""},{default:e(()=>[n("undefined")]),_:1})]),a("td",null,[n("Tag to use. "),t(o,{code:""},{default:e(()=>[n("code")]),_:1}),n(" or "),t(o,{code:""},{default:e(()=>[n("delete")]),_:1}),n(" properties will override this.")])])])]),_:1})]),t(m,{id:"P-Props"},{default:e(()=>[n("P Props")]),_:1}),a("div",c0,[t(y,{"single-column":"",class:"md-table"},{default:e(()=>[f0,a("tbody",null,[a("tr",null,[m0,a("td",null,[t(o,{code:""},{default:e(()=>[n("1 | 2 | 3 | '1' | '2' | '3'")]),_:1})]),a("td",null,[t(o,{code:""},{default:e(()=>[n("undefined")]),_:1})]),A0])])]),_:1})]),t(m,{id:"H1,-H2,-H3,-H4,-H5,-H6-Props"},{default:e(()=>[n("H1, H2, H3, H4, H5, H6 Props")]),_:1}),a("div",D0,[t(y,{"single-column":"",class:"md-table"},{default:e(()=>[E0,a("tbody",null,[a("tr",null,[C0,a("td",null,[t(o,{code:""},{default:e(()=>[n("boolean")]),_:1})]),a("td",null,[t(o,{code:""},{default:e(()=>[n("false")]),_:1})]),y0]),a("tr",null,[g0,a("td",null,[t(o,{code:""},{default:e(()=>[n("'default' | 'success' | 'info' | 'warning' | 'error'")]),_:1})]),a("td",null,[t(o,{code:""},{default:e(()=>[n("'default'")]),_:1})]),x0]),a("tr",null,[b0,a("td",null,[t(o,{code:""},{default:e(()=>[n("'bar'")]),_:1})]),a("td",null,[t(o,{code:""},{default:e(()=>[n("undefined")]),_:1})]),k0])])]),_:1})]),t(m,{id:"Ul,-Ol-Props"},{default:e(()=>[n("Ul, Ol Props")]),_:1}),a("div",v0,[t(y,{"single-column":"",class:"md-table"},{default:e(()=>[F0,a("tbody",null,[a("tr",null,[w0,a("td",null,[t(o,{code:""},{default:e(()=>[n("boolean")]),_:1})]),a("td",null,[t(o,{code:""},{default:e(()=>[n("false")]),_:1})]),T0])])]),_:1})]),t(m,{id:"Blockquote-Props"},{default:e(()=>[n("Blockquote Props")]),_:1}),a("div",H0,[t(y,{"single-column":"",class:"md-table"},{default:e(()=>[z0,a("tbody",null,[a("tr",null,[J0,a("td",null,[t(o,{code:""},{default:e(()=>[n("boolean")]),_:1})]),a("td",null,[t(o,{code:""},{default:e(()=>[n("false")]),_:1})]),S0])])]),_:1})]),t(m,{id:"All-Typography-Components-Slots"},{default:e(()=>[n("All Typography Components Slots")]),_:1}),a("div",B0,[t(y,{"single-column":"",class:"md-table"},{default:e(()=>[M0,a("tbody",null,[a("tr",null,[G0,a("td",null,[t(o,{code:""},{default:e(()=>[n("()")]),_:1})]),K0])])]),_:1})])],4),r.showAnchor?(d(),F("div",P0,[t(T,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:e(()=>[(r.displayMode,d(),u(h,{key:0,title:"Header\r",href:"#header.vue"})),(r.displayMode,d(),u(h,{key:1,title:"Tags\r",href:"#tags.vue"})),(r.displayMode,d(),u(h,{key:2,title:"Text\r",href:"#text.vue"})),(r.displayMode,d(),u(h,{key:3,title:"Use n-a with router link\r",href:"#router-link.vue"})),(r.displayMode,d(),u(h,{key:4,title:"API",href:"#API"})),(r.displayMode,d(),u(h,{key:5,title:"Text Props",href:"#Text-Props"})),(r.displayMode,d(),u(h,{key:6,title:"P Props",href:"#P-Props"})),(r.displayMode,d(),u(h,{key:7,title:"H1, H2, H3, H4, H5, H6 Props",href:"#H1,-H2,-H3,-H4,-H5,-H6-Props"})),(r.displayMode,d(),u(h,{key:8,title:"Ul, Ol Props",href:"#Ul,-Ol-Props"})),(r.displayMode,d(),u(h,{key:9,title:"Blockquote Props",href:"#Blockquote-Props"})),(r.displayMode,d(),u(h,{key:10,title:"All Typography Components Slots",href:"#All-Typography-Components-Slots"}))]),_:1})])):S("",!0)],4)}const V0=g(X,[["render",I0]]);export{V0 as default};
