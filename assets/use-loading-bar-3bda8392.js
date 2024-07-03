import{a9 as xe,g as no,X as ke,aa as Re,ab as ao,ac as io,ad as so,ae as ce,c as A,af as ve,ag as De,ah as lo,p as U,ai as co,S as Ee,aj as ae,ak as uo,l as Y,al as Se,j as J,am as fo,v as h,T as Ie,an as po,ao as Fe,ap as We,aq as ie,K as ho,a as bo,a0 as se,ar as go,as as $e}from"./index-9afb4b71.js";function q(e){return xe(e,[255,255,255,.16])}function le(e){return xe(e,[0,0,0,.12])}function mo(e,o="default",r=[]){const i=e.$slots[o];return i===void 0?r:i()}function ge(e,o=!0,r=[]){return e.forEach(n=>{if(n!==null){if(typeof n!="object"){(typeof n=="string"||typeof n=="number")&&r.push(no(String(n)));return}if(Array.isArray(n)){ge(n,o,r);return}if(n.type===ke){if(n.children===null)return;Array.isArray(n.children)&&ge(n.children,o,r)}else n.type!==Re&&r.push(n)}}),r}function Ge(e,...o){if(Array.isArray(e))e.forEach(r=>Ge(r,...o));else return e(...o)}function Me(e,o){throw new Error(`[naive/${e}]: ${o}`)}function ye(e){return e.some(o=>ao(o)?!(o.type===Re||o.type===ke&&!ye(o.children)):!0)?e:null}function Pe(e,o){const r=e&&ye(e());return o(r||null)}function xo(e){return!(e&&ye(e()))}function Te(e){return e.replace(/#|\(|\)|,|\s/g,"_")}function f(e,o){return e+(o==="default"?"":o.replace(/^[a-z]/,r=>r.toUpperCase()))}f("abc","def");const vo="n",yo=`.${vo}-`,Co="__",wo="--",Ae=so(),Oe=io({blockPrefix:yo,elementPrefix:Co,modifierPrefix:wo});Ae.use(Oe);const{c:y,find:ir}=Ae,{cB:X,cE:g,cM:L,cNotM:He}=Oe,ee=typeof document<"u"&&typeof window<"u",So="n-button-group",Z="naive-ui-style";function _e(e,o,r){if(!o)return;const n=ce(),i=A(()=>{const{value:p}=o;if(!p)return;const a=p[e];if(a)return a}),l=()=>{De(()=>{const{value:p}=r,a=`${p}${e}Rtl`;if(lo(a,n))return;const{value:d}=i;d&&d.style.mount({id:a,head:!0,anchorMetaName:Z,props:{bPrefix:p?`.${p}-`:void 0},ssr:n})})};return n?l():ve(l),i}const $o=ee&&"chrome"in window;ee&&navigator.userAgent.includes("Firefox");const Po=ee&&navigator.userAgent.includes("Safari")&&!$o,ze="n-form-item";function To(e,{defaultSize:o="medium",mergedSize:r,mergedDisabled:n}={}){const i=U(ze,null);co(ze,null);const l=A(r?()=>r(i):()=>{const{size:d}=e;if(d)return d;if(i){const{mergedSize:$}=i;if($.value!==void 0)return $.value}return o}),p=A(n?()=>n(i):()=>{const{disabled:d}=e;return d!==void 0?d:i?i.disabled.value:!1}),a=A(()=>{const{status:d}=e;return d||(i==null?void 0:i.mergedValidationStatus.value)});return Ee(()=>{i&&i.restoreValidation()}),{mergedSizeRef:l,mergedDisabledRef:p,mergedStatusRef:a,nTriggerFormBlur(){i&&i.handleContentBlur()},nTriggerFormChange(){i&&i.handleContentChange()},nTriggerFormFocus(){i&&i.handleContentFocus()},nTriggerFormInput(){i&&i.handleContentInput()}}}const de={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:Ho,fontFamily:zo,lineHeight:Bo}=de,Le=y("body",`
 margin: 0;
 font-size: ${Ho};
 font-family: ${zo};
 line-height: ${Bo};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[y("input",`
 font-family: inherit;
 font-size: inherit;
 `)]),ue="n-config-provider";function oe(e,o,r,n,i,l){const p=ce(),a=U(ue,null);if(r){const $=()=>{const R=l==null?void 0:l.value;r.mount({id:R===void 0?o:R+o,head:!0,props:{bPrefix:R?`.${R}-`:void 0},anchorMetaName:Z,ssr:p}),a!=null&&a.preflightStyleDisabled||Le.mount({id:"n-global",head:!0,anchorMetaName:Z,ssr:p})};p?$():ve($)}return A(()=>{var _;const{theme:{common:$,self:R,peers:x={}}={},themeOverrides:D={},builtinThemeOverrides:m={}}=i,{common:S,peers:O}=D,{common:w=void 0,[e]:{common:u=void 0,self:P=void 0,peers:B={}}={}}=(a==null?void 0:a.mergedThemeRef.value)||{},{common:c=void 0,[e]:v={}}=(a==null?void 0:a.mergedThemeOverridesRef.value)||{},{common:z,peers:t={}}=v,F=ae({},$||u||w||n.common,c,z,S),W=ae((_=R||P||n.self)==null?void 0:_(F),m,v,D);return{common:F,self:W,peers:ae({},n.peers,B,x),peerOverrides:ae({},m.peers,t,O)}})}oe.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const ko="n";function je(e={},o={defaultBordered:!0}){const r=U(ue,null);return{inlineThemeDisabled:r==null?void 0:r.inlineThemeDisabled,mergedRtlRef:r==null?void 0:r.mergedRtlRef,mergedComponentPropsRef:r==null?void 0:r.mergedComponentPropsRef,mergedBreakpointsRef:r==null?void 0:r.mergedBreakpointsRef,mergedBorderedRef:A(()=>{const{bordered:n}=e;return n!==void 0?n:(r==null?void 0:r.mergedBorderedRef.value)??o.defaultBordered??!0}),mergedClsPrefixRef:r?r.mergedClsPrefixRef:uo(ko),namespaceRef:A(()=>r==null?void 0:r.mergedNamespaceRef.value)}}function Ve(e,o,r){if(!o)return;const n=ce(),i=U(ue,null),l=()=>{const p=r.value;o.mount({id:p===void 0?e:p+e,head:!0,anchorMetaName:Z,props:{bPrefix:p?`.${p}-`:void 0},ssr:n}),i!=null&&i.preflightStyleDisabled||Le.mount({id:"n-global",head:!0,anchorMetaName:Z,ssr:n})};n?l():ve(l)}function Ro(e,o,r,n){var R;r||Me("useThemeClass","cssVarsRef is not passed");const i=(R=U(ue,null))==null?void 0:R.mergedThemeHashRef,l=Y(""),p=ce();let a;const d=`__${e}`,$=()=>{let x=d;const D=o?o.value:void 0,m=i==null?void 0:i.value;m&&(x+="-"+m),D&&(x+="-"+D);const{themeOverrides:S,builtinThemeOverrides:O}=n;S&&(x+="-"+Se(JSON.stringify(S))),O&&(x+="-"+Se(JSON.stringify(O))),l.value=x,a=()=>{const w=r.value;let u="";for(const P in w)u+=`${P}: ${w[P]};`;y(`.${x}`,u).mount({id:x,ssr:p}),a=void 0}};return De(()=>{$()}),{themeClass:l,onRender:()=>{a==null||a()}}}const Ke=J({name:"BaseIconSwitchTransition",setup(e,{slots:o}){const r=fo();return()=>h(Ie,{name:"icon-switch-transition",appear:r.value},o)}}),Do=J({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:o}){function r(a){e.width?a.style.maxWidth=`${a.offsetWidth}px`:a.style.maxHeight=`${a.offsetHeight}px`,a.offsetWidth}function n(a){e.width?a.style.maxWidth="0":a.style.maxHeight="0",a.offsetWidth;const{onLeave:d}=e;d&&d()}function i(a){e.width?a.style.maxWidth="":a.style.maxHeight="";const{onAfterLeave:d}=e;d&&d()}function l(a){if(a.style.transition="none",e.width){const d=a.offsetWidth;a.style.maxWidth="0",a.offsetWidth,a.style.transition="",a.style.maxWidth=`${d}px`}else if(e.reverse)a.style.maxHeight=`${a.offsetHeight}px`,a.offsetHeight,a.style.transition="",a.style.maxHeight="0";else{const d=a.offsetHeight;a.style.maxHeight="0",a.offsetWidth,a.style.transition="",a.style.maxHeight=`${d}px`}a.offsetWidth}function p(a){var d;e.width?a.style.maxWidth="":e.reverse||(a.style.maxHeight=""),(d=e.onAfterEnter)==null||d.call(e)}return()=>{const{group:a,width:d,appear:$,mode:R}=e,x=a?po:Ie,D={name:d?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:$,onEnter:l,onAfterEnter:p,onBeforeLeave:r,onLeave:n,onAfterLeave:i};return a||(D.mode=R),h(x,D,o)}}}),{cubicBezierEaseInOut:Eo}=de;function me({originalTransform:e="",left:o=0,top:r=0,transition:n=`all .3s ${Eo} !important`}={}){return[y("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:o,top:r,opacity:0}),y("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:o,top:r,opacity:1}),y("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:o,top:r,transition:n})]}const Io=y([y("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),y("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),y("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),y("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),X("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[g("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[me()]),g("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[g("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),g("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[g("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[g("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),g("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[g("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),g("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[g("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),g("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[me({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),Fo={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},Wo=J({name:"BaseLoading",props:{clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100},...Fo},setup(e){Ve("-base-loading",Io,Fe(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:o,strokeWidth:r,stroke:n,scale:i}=this,l=o/i;return h("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},h(Ke,null,{default:()=>this.show?h("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},h("div",{class:`${e}-base-loading__container`},h("div",{class:`${e}-base-loading__container-layer`},h("div",{class:`${e}-base-loading__container-layer-left`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*l} ${2*l}`,xmlns:"http://www.w3.org/2000/svg",style:{color:n}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:l,cy:l,r:o-r/2,"stroke-dasharray":4.91*o,"stroke-dashoffset":2.46*o}))),h("div",{class:`${e}-base-loading__container-layer-patch`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*l} ${2*l}`,xmlns:"http://www.w3.org/2000/svg",style:{color:n}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:l,cy:l,r:o-r/2,"stroke-dasharray":4.91*o,"stroke-dashoffset":2.46*o}))),h("div",{class:`${e}-base-loading__container-layer-right`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*l} ${2*l}`,xmlns:"http://www.w3.org/2000/svg",style:{color:n}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:l,cy:l,r:o-r/2,"stroke-dasharray":4.91*o,"stroke-dashoffset":2.46*o})))))):h("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),s={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},Go=We(s.neutralBase),Qe=We(s.neutralInvertBase),Mo="rgba("+Qe.slice(0,3).join(", ")+", ";function Be(e){return Mo+String(e)+")"}function I(e){const o=Array.from(Qe);return o[3]=Number(e),xe(Go,o)}const Ao={name:"common",...de,baseColor:s.neutralBase,primaryColor:s.primaryDefault,primaryColorHover:s.primaryHover,primaryColorPressed:s.primaryActive,primaryColorSuppl:s.primarySuppl,infoColor:s.infoDefault,infoColorHover:s.infoHover,infoColorPressed:s.infoActive,infoColorSuppl:s.infoSuppl,successColor:s.successDefault,successColorHover:s.successHover,successColorPressed:s.successActive,successColorSuppl:s.successSuppl,warningColor:s.warningDefault,warningColorHover:s.warningHover,warningColorPressed:s.warningActive,warningColorSuppl:s.warningSuppl,errorColor:s.errorDefault,errorColorHover:s.errorHover,errorColorPressed:s.errorActive,errorColorSuppl:s.errorSuppl,textColorBase:s.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:I(s.alpha4),placeholderColor:I(s.alpha4),placeholderColorDisabled:I(s.alpha5),iconColor:I(s.alpha4),iconColorHover:ie(I(s.alpha4),{lightness:.75}),iconColorPressed:ie(I(s.alpha4),{lightness:.9}),iconColorDisabled:I(s.alpha5),opacity1:s.alpha1,opacity2:s.alpha2,opacity3:s.alpha3,opacity4:s.alpha4,opacity5:s.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:I(Number(s.alphaClose)),closeIconColorHover:I(Number(s.alphaClose)),closeIconColorPressed:I(Number(s.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:I(s.alpha4),clearColorHover:ie(I(s.alpha4),{lightness:.75}),clearColorPressed:ie(I(s.alpha4),{lightness:.9}),scrollbarColor:Be(s.alphaScrollbar),scrollbarColorHover:Be(s.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:I(s.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:s.neutralPopover,tableColor:s.neutralCard,cardColor:s.neutralCard,modalColor:s.neutralModal,bodyColor:s.neutralBody,tagColor:"#eee",avatarColor:I(s.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:I(s.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:s.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"},Oo=Ao,_o=X("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Lo=J({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){Ve("-base-wave",_o,Fe(e,"clsPrefix"));const o=Y(null),r=Y(!1);let n=null;return Ee(()=>{n!==null&&window.clearTimeout(n)}),{active:r,selfRef:o,play(){n!==null&&(window.clearTimeout(n),r.value=!1,n=null),ho(()=>{var i;(i=o.value)==null||i.offsetHeight,r.value=!0,n=window.setTimeout(()=>{r.value=!1,n=null},1e3)})}}},render(){const{clsPrefix:e}=this;return h("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:K}=de;function jo({duration:e=".2s",delay:o=".1s"}={}){return[y("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),y("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),y("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${K},
 max-width ${e} ${K} ${o},
 margin-left ${e} ${K} ${o},
 margin-right ${e} ${K} ${o};
 `),y("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${K} ${o},
 max-width ${e} ${K},
 margin-left ${e} ${K},
 margin-right ${e} ${K};
 `)]}const Vo={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},Ko=e=>{const{heightTiny:o,heightSmall:r,heightMedium:n,heightLarge:i,borderRadius:l,fontSizeTiny:p,fontSizeSmall:a,fontSizeMedium:d,fontSizeLarge:$,opacityDisabled:R,textColor2:x,textColor3:D,primaryColorHover:m,primaryColorPressed:S,borderColor:O,primaryColor:w,baseColor:u,infoColor:P,infoColorHover:B,infoColorPressed:c,successColor:v,successColorHover:z,successColorPressed:t,warningColor:F,warningColorHover:W,warningColorPressed:_,errorColor:G,errorColorHover:k,errorColorPressed:V,fontWeight:j,buttonColor2:N,buttonColor2Hover:M,buttonColor2Pressed:C,fontWeightStrong:re}=e;return{...Vo,heightTiny:o,heightSmall:r,heightMedium:n,heightLarge:i,borderRadiusTiny:l,borderRadiusSmall:l,borderRadiusMedium:l,borderRadiusLarge:l,fontSizeTiny:p,fontSizeSmall:a,fontSizeMedium:d,fontSizeLarge:$,opacityDisabled:R,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:N,colorSecondaryHover:M,colorSecondaryPressed:C,colorTertiary:N,colorTertiaryHover:M,colorTertiaryPressed:C,colorQuaternary:"#0000",colorQuaternaryHover:M,colorQuaternaryPressed:C,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:x,textColorTertiary:D,textColorHover:m,textColorPressed:S,textColorFocus:m,textColorDisabled:x,textColorText:x,textColorTextHover:m,textColorTextPressed:S,textColorTextFocus:m,textColorTextDisabled:x,textColorGhost:x,textColorGhostHover:m,textColorGhostPressed:S,textColorGhostFocus:m,textColorGhostDisabled:x,border:`1px solid ${O}`,borderHover:`1px solid ${m}`,borderPressed:`1px solid ${S}`,borderFocus:`1px solid ${m}`,borderDisabled:`1px solid ${O}`,rippleColor:w,colorPrimary:w,colorHoverPrimary:m,colorPressedPrimary:S,colorFocusPrimary:m,colorDisabledPrimary:w,textColorPrimary:u,textColorHoverPrimary:u,textColorPressedPrimary:u,textColorFocusPrimary:u,textColorDisabledPrimary:u,textColorTextPrimary:w,textColorTextHoverPrimary:m,textColorTextPressedPrimary:S,textColorTextFocusPrimary:m,textColorTextDisabledPrimary:x,textColorGhostPrimary:w,textColorGhostHoverPrimary:m,textColorGhostPressedPrimary:S,textColorGhostFocusPrimary:m,textColorGhostDisabledPrimary:w,borderPrimary:`1px solid ${w}`,borderHoverPrimary:`1px solid ${m}`,borderPressedPrimary:`1px solid ${S}`,borderFocusPrimary:`1px solid ${m}`,borderDisabledPrimary:`1px solid ${w}`,rippleColorPrimary:w,colorInfo:P,colorHoverInfo:B,colorPressedInfo:c,colorFocusInfo:B,colorDisabledInfo:P,textColorInfo:u,textColorHoverInfo:u,textColorPressedInfo:u,textColorFocusInfo:u,textColorDisabledInfo:u,textColorTextInfo:P,textColorTextHoverInfo:B,textColorTextPressedInfo:c,textColorTextFocusInfo:B,textColorTextDisabledInfo:x,textColorGhostInfo:P,textColorGhostHoverInfo:B,textColorGhostPressedInfo:c,textColorGhostFocusInfo:B,textColorGhostDisabledInfo:P,borderInfo:`1px solid ${P}`,borderHoverInfo:`1px solid ${B}`,borderPressedInfo:`1px solid ${c}`,borderFocusInfo:`1px solid ${B}`,borderDisabledInfo:`1px solid ${P}`,rippleColorInfo:P,colorSuccess:v,colorHoverSuccess:z,colorPressedSuccess:t,colorFocusSuccess:z,colorDisabledSuccess:v,textColorSuccess:u,textColorHoverSuccess:u,textColorPressedSuccess:u,textColorFocusSuccess:u,textColorDisabledSuccess:u,textColorTextSuccess:v,textColorTextHoverSuccess:z,textColorTextPressedSuccess:t,textColorTextFocusSuccess:z,textColorTextDisabledSuccess:x,textColorGhostSuccess:v,textColorGhostHoverSuccess:z,textColorGhostPressedSuccess:t,textColorGhostFocusSuccess:z,textColorGhostDisabledSuccess:v,borderSuccess:`1px solid ${v}`,borderHoverSuccess:`1px solid ${z}`,borderPressedSuccess:`1px solid ${t}`,borderFocusSuccess:`1px solid ${z}`,borderDisabledSuccess:`1px solid ${v}`,rippleColorSuccess:v,colorWarning:F,colorHoverWarning:W,colorPressedWarning:_,colorFocusWarning:W,colorDisabledWarning:F,textColorWarning:u,textColorHoverWarning:u,textColorPressedWarning:u,textColorFocusWarning:u,textColorDisabledWarning:u,textColorTextWarning:F,textColorTextHoverWarning:W,textColorTextPressedWarning:_,textColorTextFocusWarning:W,textColorTextDisabledWarning:x,textColorGhostWarning:F,textColorGhostHoverWarning:W,textColorGhostPressedWarning:_,textColorGhostFocusWarning:W,textColorGhostDisabledWarning:F,borderWarning:`1px solid ${F}`,borderHoverWarning:`1px solid ${W}`,borderPressedWarning:`1px solid ${_}`,borderFocusWarning:`1px solid ${W}`,borderDisabledWarning:`1px solid ${F}`,rippleColorWarning:F,colorError:G,colorHoverError:k,colorPressedError:V,colorFocusError:k,colorDisabledError:G,textColorError:u,textColorHoverError:u,textColorPressedError:u,textColorFocusError:u,textColorDisabledError:u,textColorTextError:G,textColorTextHoverError:k,textColorTextPressedError:V,textColorTextFocusError:k,textColorTextDisabledError:x,textColorGhostError:G,textColorGhostHoverError:k,textColorGhostPressedError:V,textColorGhostFocusError:k,textColorGhostDisabledError:G,borderError:`1px solid ${G}`,borderHoverError:`1px solid ${k}`,borderPressedError:`1px solid ${V}`,borderFocusError:`1px solid ${k}`,borderDisabledError:`1px solid ${G}`,rippleColorError:G,waveOpacity:"0.6",fontWeight:j,fontWeightStrong:re}},Qo={name:"Button",common:Oo,self:Ko},qo=Qo,Uo=y([X("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[L("color",[g("border",{borderColor:"var(--n-border-color)"}),L("disabled",[g("border",{borderColor:"var(--n-border-color-disabled)"})]),He("disabled",[y("&:focus",[g("state-border",{borderColor:"var(--n-border-color-focus)"})]),y("&:hover",[g("state-border",{borderColor:"var(--n-border-color-hover)"})]),y("&:active",[g("state-border",{borderColor:"var(--n-border-color-pressed)"})]),L("pressed",[g("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),L("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[g("border",{border:"var(--n-border-disabled)"})]),He("disabled",[y("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[g("state-border",{border:"var(--n-border-focus)"})]),y("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[g("state-border",{border:"var(--n-border-hover)"})]),y("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[g("state-border",{border:"var(--n-border-pressed)"})]),L("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[g("state-border",{border:"var(--n-border-pressed)"})])]),L("loading","cursor: wait;"),X("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[L("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),ee&&"MozBoxSizing"in document.createElement("div").style?y("&::moz-focus-inner",{border:0}):null,g("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),g("border",{border:"var(--n-border)"}),g("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),g("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[X("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[me({top:"50%",originalTransform:"translateY(-50%)"})]),jo()]),g("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[y("~",[g("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),L("block",`
 display: flex;
 width: 100%;
 `),L("dashed",[g("border, state-border",{borderStyle:"dashed !important"})]),L("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),y("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),y("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),No={...oe.props,color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!Po}},Yo=J({name:"Button",props:No,setup(e){const o=Y(null),r=Y(null),n=Y(!1),i=bo(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),l=U(So,{}),{mergedSizeRef:p}=To({},{defaultSize:"medium",mergedSize:c=>{const{size:v}=e;if(v)return v;const{size:z}=l;if(z)return z;const{mergedSize:t}=c||{};return t?t.value:"medium"}}),a=A(()=>e.focusable&&!e.disabled),d=c=>{var v;a.value||c.preventDefault(),!e.nativeFocusBehavior&&(c.preventDefault(),!e.disabled&&a.value&&((v=o.value)==null||v.focus({preventScroll:!0})))},$=c=>{var v;if(!e.disabled&&!e.loading){const{onClick:z}=e;z&&Ge(z,c),e.text||(v=r.value)==null||v.play()}},R=c=>{switch(c.key){case"Enter":if(!e.keyboard)return;n.value=!1}},x=c=>{switch(c.key){case"Enter":if(!e.keyboard||e.loading){c.preventDefault();return}n.value=!0}},D=()=>{n.value=!1},{inlineThemeDisabled:m,mergedClsPrefixRef:S,mergedRtlRef:O}=je(e),w=oe("Button","-button",Uo,qo,e,S),u=_e("Button",O,S),P=A(()=>{const c=w.value,{common:{cubicBezierEaseInOut:v,cubicBezierEaseOut:z},self:t}=c,{rippleDuration:F,opacityDisabled:W,fontWeight:_,fontWeightStrong:G}=t,k=p.value,{dashed:V,type:j,ghost:N,text:M,color:C,round:re,circle:fe,textColor:Q,secondary:qe,tertiary:Ce,quaternary:Ue,strong:Ne}=e,Ye={"font-weight":Ne?G:_};let T={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const te=j==="tertiary",we=j==="default",b=te?"default":j;if(M){const H=Q||C;T={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":H||t[f("textColorText",b)],"--n-text-color-hover":H?q(H):t[f("textColorTextHover",b)],"--n-text-color-pressed":H?le(H):t[f("textColorTextPressed",b)],"--n-text-color-focus":H?q(H):t[f("textColorTextHover",b)],"--n-text-color-disabled":H||t[f("textColorTextDisabled",b)]}}else if(N||V){const H=Q||C;T={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":C||t[f("rippleColor",b)],"--n-text-color":H||t[f("textColorGhost",b)],"--n-text-color-hover":H?q(H):t[f("textColorGhostHover",b)],"--n-text-color-pressed":H?le(H):t[f("textColorGhostPressed",b)],"--n-text-color-focus":H?q(H):t[f("textColorGhostHover",b)],"--n-text-color-disabled":H||t[f("textColorGhostDisabled",b)]}}else if(qe){const H=we?t.textColor:te?t.textColorTertiary:t[f("color",b)],E=C||H,ne=j!=="default"&&j!=="tertiary";T={"--n-color":ne?se(E,{alpha:Number(t.colorOpacitySecondary)}):t.colorSecondary,"--n-color-hover":ne?se(E,{alpha:Number(t.colorOpacitySecondaryHover)}):t.colorSecondaryHover,"--n-color-pressed":ne?se(E,{alpha:Number(t.colorOpacitySecondaryPressed)}):t.colorSecondaryPressed,"--n-color-focus":ne?se(E,{alpha:Number(t.colorOpacitySecondaryHover)}):t.colorSecondaryHover,"--n-color-disabled":t.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":E,"--n-text-color-hover":E,"--n-text-color-pressed":E,"--n-text-color-focus":E,"--n-text-color-disabled":E}}else if(Ce||Ue){const H=we?t.textColor:te?t.textColorTertiary:t[f("color",b)],E=C||H;Ce?(T["--n-color"]=t.colorTertiary,T["--n-color-hover"]=t.colorTertiaryHover,T["--n-color-pressed"]=t.colorTertiaryPressed,T["--n-color-focus"]=t.colorSecondaryHover,T["--n-color-disabled"]=t.colorTertiary):(T["--n-color"]=t.colorQuaternary,T["--n-color-hover"]=t.colorQuaternaryHover,T["--n-color-pressed"]=t.colorQuaternaryPressed,T["--n-color-focus"]=t.colorQuaternaryHover,T["--n-color-disabled"]=t.colorQuaternary),T["--n-ripple-color"]="#0000",T["--n-text-color"]=E,T["--n-text-color-hover"]=E,T["--n-text-color-pressed"]=E,T["--n-text-color-focus"]=E,T["--n-text-color-disabled"]=E}else T={"--n-color":C||t[f("color",b)],"--n-color-hover":C?q(C):t[f("colorHover",b)],"--n-color-pressed":C?le(C):t[f("colorPressed",b)],"--n-color-focus":C?q(C):t[f("colorFocus",b)],"--n-color-disabled":C||t[f("colorDisabled",b)],"--n-ripple-color":C||t[f("rippleColor",b)],"--n-text-color":Q||(C?t.textColorPrimary:te?t.textColorTertiary:t[f("textColor",b)]),"--n-text-color-hover":Q||(C?t.textColorHoverPrimary:t[f("textColorHover",b)]),"--n-text-color-pressed":Q||(C?t.textColorPressedPrimary:t[f("textColorPressed",b)]),"--n-text-color-focus":Q||(C?t.textColorFocusPrimary:t[f("textColorFocus",b)]),"--n-text-color-disabled":Q||(C?t.textColorDisabledPrimary:t[f("textColorDisabled",b)])};let pe={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};M?pe={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:pe={"--n-border":t[f("border",b)],"--n-border-hover":t[f("borderHover",b)],"--n-border-pressed":t[f("borderPressed",b)],"--n-border-focus":t[f("borderFocus",b)],"--n-border-disabled":t[f("borderDisabled",b)]};const{[f("height",k)]:he,[f("fontSize",k)]:Je,[f("padding",k)]:Xe,[f("paddingRound",k)]:Ze,[f("iconSize",k)]:eo,[f("borderRadius",k)]:oo,[f("iconMargin",k)]:ro,waveOpacity:to}=t;return{"--n-bezier":v,"--n-bezier-ease-out":z,"--n-ripple-duration":F,"--n-opacity-disabled":W,"--n-wave-opacity":to,...Ye,...T,...pe,...{"--n-width":fe&&!M?he:"initial","--n-height":M?"initial":he,"--n-font-size":Je,"--n-padding":fe||M?"initial":re?Ze:Xe,"--n-icon-size":eo,"--n-icon-margin":ro,"--n-border-radius":M?"initial":fe||re?he:oo}}}),B=m?Ro("button",A(()=>{let c="";const{dashed:v,type:z,ghost:t,text:F,color:W,round:_,circle:G,textColor:k,secondary:V,tertiary:j,quaternary:N,strong:M}=e;v&&(c+="a"),t&&(c+="b"),F&&(c+="c"),_&&(c+="d"),G&&(c+="e"),V&&(c+="f"),j&&(c+="g"),N&&(c+="h"),M&&(c+="i"),W&&(c+="j"+Te(W)),k&&(c+="k"+Te(k));const{value:C}=p;return c+="l"+C[0],c+="m"+z[0],c}),P,e):void 0;return{selfElRef:o,waveElRef:r,mergedClsPrefix:S,mergedFocusable:a,mergedSize:p,showBorder:i,enterPressed:n,rtlEnabled:u,handleMousedown:d,handleKeydown:x,handleBlur:D,handleKeyup:R,handleClick:$,customColorCssVars:A(()=>{const{color:c}=e;if(!c)return null;const v=q(c);return{"--n-border-color":c,"--n-border-color-hover":v,"--n-border-color-pressed":le(c),"--n-border-color-focus":v,"--n-border-color-disabled":c}}),cssVars:m?void 0:P,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender}},render(){const{mergedClsPrefix:e,tag:o,onRender:r}=this;r==null||r();const n=Pe(this.$slots.default,i=>i&&h("span",{class:`${e}-button__content`},i));return h(o,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&n,h(Do,{width:!0},{default:()=>Pe(this.$slots.icon,i=>(this.loading||this.renderIcon||i)&&h("span",{class:`${e}-button__icon`,style:{margin:xo(this.$slots.default)?"0":""}},h(Ke,null,{default:()=>this.loading?h(Wo,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):h("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():i)})))}),this.iconPlacement==="left"&&n,this.text?null:h(Lo,{ref:"waveElRef",clsPrefix:e}),this.showBorder?h("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?h("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),sr=Yo,Jo={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},Xo=()=>Jo,Zo={name:"Space",self:Xo},er=Zo;let be;const or=()=>{if(!ee)return!0;if(be===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const o=e.scrollHeight===1;return document.body.removeChild(e),be=o}return be},rr={...oe.props,align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}},lr=J({name:"Space",props:rr,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:r}=je(e),n=oe("Space","-space",void 0,er,e,o),i=_e("Space",r,o);return{useGap:or(),rtlEnabled:i,mergedClsPrefix:o,margin:A(()=>{const{size:l}=e;if(Array.isArray(l))return{horizontal:l[0],vertical:l[1]};if(typeof l=="number")return{horizontal:l,vertical:l};const{self:{[f("gap",l)]:p}}=n.value,{row:a,col:d}=go(p);return{horizontal:$e(d),vertical:$e(a)}})}},render(){const{vertical:e,align:o,inline:r,justify:n,itemStyle:i,margin:l,wrap:p,mergedClsPrefix:a,rtlEnabled:d,useGap:$,wrapItem:R,internalUseGap:x}=this,D=ge(mo(this));if(!D.length)return null;const m=`${l.horizontal}px`,S=`${l.horizontal/2}px`,O=`${l.vertical}px`,w=`${l.vertical/2}px`,u=D.length-1,P=n.startsWith("space-");return h("div",{role:"none",class:[`${a}-space`,d&&`${a}-space--rtl`],style:{display:r?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(n)?"flex-"+n:n,flexWrap:!p||e?"nowrap":"wrap",marginTop:$||e?"":`-${w}`,marginBottom:$||e?"":`-${w}`,alignItems:o,gap:$?`${l.vertical}px ${l.horizontal}px`:""}},!R&&($||x)?D:D.map((B,c)=>h("div",{role:"none",style:[i,{maxWidth:"100%"},$?"":e?{marginBottom:c!==u?O:""}:d?{marginLeft:P?n==="space-between"&&c===u?"":S:c!==u?m:"",marginRight:P?n==="space-between"&&c===0?"":S:"",paddingTop:w,paddingBottom:w}:{marginRight:P?n==="space-between"&&c===u?"":S:c!==u?m:"",marginLeft:P?n==="space-between"&&c===0?"":S:"",paddingTop:w,paddingBottom:w}]},B)))}}),tr="n-loading-bar-api";function cr(){const e=U(tr,null);return e===null&&Me("use-loading-bar","No outer <n-loading-bar-provider /> founded."),e}export{sr as N,lr as a,cr as u};
