import{j as y,aH as _,l as v,aI as g,aJ as w,c as m,au as R,ao as M,u as S,aB as C,aK as V,a as I,aL as k,_ as L,r as s,i as h,w as c,n as O,o as b,f as a,h as T}from"./index-9afb4b71.js";import{S as $}from"./Footer-1c2a24a0.js";const B=y({components:{SiteFooter:$},setup(){const e=_(),n=v(null),p=g(),d=w(),r=m(()=>e.path.includes("/docs/")?p.value:d.value),f=m(()=>k(r.value,e.path));R(M(e,"path"),(i,u)=>{const o=/\/(zh-CN|en-US)\/(light|dark|os-theme)/g;i.replace(o,"")!==u.replace(o,"")&&n.value.scrollTo(0,0)});const t=S(),l=C();return{layoutScrollbarProps:{containerClass:"document-scroll-container"},renderMenuLabel:V,showSider:I(()=>!t.value&&!l.value),layoutInstRef:n,options:r,menuValue:f,isMobile:t}}});function N(e,n,p,d,r,f){const t=s("n-menu"),l=s("n-layout-sider"),i=s("router-view"),u=s("site-footer"),o=s("n-layout");return b(),h(o,{id:"doc-layout","has-sider":e.showSider,position:e.isMobile?"static":"absolute",style:O({top:e.isMobile?"":"var(--header-height)"})},{default:c(()=>[e.showSider?(b(),h(l,{key:0,"native-scrollbar":!1,"collapsed-width":0,"collapse-mode":"transform","trigger-style":"top: 240px;","collapsed-trigger-style":"top: 240px; right: -20px;",bordered:"","show-trigger":"arrow-circle"},{default:c(()=>[a(t,{value:e.menuValue,options:e.options,"render-label":e.renderMenuLabel},null,8,["value","options","render-label"])]),_:1})):T("",!0),a(o,{ref:"layoutInstRef","scrollbar-props":e.layoutScrollbarProps,"native-scrollbar":!1,position:e.isMobile||e.showSider?"static":"absolute","content-style":"min-height: calc(100vh - var(--header-height)); display: flex; flex-direction: column;"},{default:c(()=>[a(i),a(u)]),_:1},8,["scrollbar-props","position"])]),_:1},8,["has-sider","position","style"])}const j=L(B,[["render",N]]);export{j as default};