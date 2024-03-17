import{z as A,d as _,r as E,A as Be,B as he,C as I,i as o,w as $,s as F,D as w,E as be,G as z,H as C,I as ne,J as te,K as oe,L as Ce,M as ae,O as Y,P as we,Q as G,R as W,S as Se,T as xe,U as le,V as ke,W as Z,X as Ie,Y as Pe,Z as se,$ as ce,a0 as Oe,a1 as ie,a2 as re,a3 as ue,a4 as Te,h as ze,a5 as Ae,a6 as _e,a7 as De,a8 as Ee,F as $e,a9 as H,aa as de,ab as Re,ac as Le,j as fe,ad as Ne,ae as Ke,af as p,ag as Fe,ah as He,ai as Ue,aj as Me}from"./index-b02cf61b.js";const[me,q]=A("action-bar"),ve=Symbol(me),je={placeholder:Boolean,safeAreaInsetBottom:I};var Ye=_({name:me,props:je,setup(e,{slots:n}){const t=E(),s=Be(t,q),{linkChildren:a}=he(ve);a();const c=()=>{var u;return o("div",{ref:t,class:[q(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[(u=n.default)==null?void 0:u.call(n)])};return()=>e.placeholder?s(c):c()}});const Ge=$(Ye);let We=2e3;const Ze=()=>++We,[Ve,L]=A("loading"),pe=Array(12).fill(null).map((e,n)=>o("i",{class:L("line",String(n+1))},null)),qe=o("svg",{class:L("circular"),viewBox:"25 25 50 50"},[o("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),Je={size:z,type:C("circular"),color:String,vertical:Boolean,textSize:z,textColor:String};var Qe=_({name:Ve,props:Je,setup(e,{slots:n}){const t=F(()=>w({color:e.color},be(e.size))),s=()=>{const c=e.type==="spinner"?pe:qe;return o("span",{class:L("spinner",e.type),style:t.value},[n.icon?n.icon():c])},a=()=>{var c;if(n.default)return o("span",{class:L("text"),style:{fontSize:ne(e.textSize),color:(c=e.textColor)!=null?c:e.color}},[n.default()])};return()=>{const{type:c,vertical:u}=e;return o("div",{class:L([c,{vertical:u}]),"aria-live":"polite","aria-busy":!0},[s(),a()])}}});const Xe=$(Qe),[en,D]=A("button"),nn=w({},te,{tag:C("button"),text:String,icon:String,type:C("default"),size:C("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:C("button"),loadingSize:z,loadingText:String,loadingType:String,iconPosition:C("left")});var tn=_({name:en,props:nn,emits:["click"],setup(e,{emit:n,slots:t}){const s=oe(),a=()=>t.loading?t.loading():o(Xe,{size:e.loadingSize,type:e.loadingType,class:D("loading")},null),c=()=>{if(e.loading)return a();if(t.icon)return o("div",{class:D("icon")},[t.icon()]);if(e.icon)return o(ae,{name:e.icon,class:D("icon"),classPrefix:e.iconPrefix},null)},u=()=>{let i;if(e.loading?i=e.loadingText:i=t.default?t.default():e.text,i)return o("span",{class:D("text")},[i])},r=()=>{const{color:i,plain:m}=e;if(i){const v={color:m?i:"white"};return m||(v.background=i),i.includes("gradient")?v.border=0:v.borderColor=i,v}},h=i=>{e.loading?Y(i):e.disabled||(n("click",i),s())};return()=>{const{tag:i,type:m,size:v,block:S,round:x,plain:P,square:O,loading:y,disabled:l,hairline:f,nativeType:B,iconPosition:g}=e,k=[D([m,v,{plain:P,block:S,round:x,square:O,loading:y,disabled:l,hairline:f}]),{[Ce]:f}];return o(i,{type:B,class:k,style:r(),disabled:l,onClick:h},{default:()=>[o("div",{class:D("content")},[g==="left"&&c(),u(),g==="right"&&c()])]})}}});const M=$(tn),[on,an]=A("action-bar-button"),ln=w({},te,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var sn=_({name:on,props:ln,setup(e,{slots:n}){const t=oe(),{parent:s,index:a}=we(ve),c=F(()=>{if(s){const r=s.children[a.value-1];return!(r&&"isButton"in r)}}),u=F(()=>{if(s){const r=s.children[a.value+1];return!(r&&"isButton"in r)}});return G({isButton:!0}),()=>{const{type:r,icon:h,text:i,color:m,loading:v,disabled:S}=e;return o(M,{class:an([r,{last:u.value,first:c.value}]),size:"large",type:r,icon:h,color:m,loading:v,disabled:S,onClick:t},{default:()=>[n.default?n.default():i]})}}});const J=$(sn),V={show:Boolean,zIndex:z,overlay:I,duration:z,teleport:[String,Object],lockScroll:I,lazyRender:I,beforeClose:Function,overlayStyle:Object,overlayClass:W,transitionAppear:Boolean,closeOnClickOverlay:I},cn=Object.keys(V);let R=0;const Q="van-overflow-hidden";function rn(e,n){const t=Se(),s="01",a="10",c=m=>{t.move(m);const v=t.deltaY.value>0?a:s,S=Ie(m.target,e.value),{scrollHeight:x,offsetHeight:P,scrollTop:O}=S;let y="11";O===0?y=P>=x?"00":"01":O+P>=x&&(y="10"),y!=="11"&&t.isVertical()&&!(parseInt(y,2)&parseInt(v,2))&&Y(m,!0)},u=()=>{document.addEventListener("touchstart",t.start),document.addEventListener("touchmove",c,{passive:!1}),R||document.body.classList.add(Q),R++},r=()=>{R&&(document.removeEventListener("touchstart",t.start),document.removeEventListener("touchmove",c),R--,R||document.body.classList.remove(Q))},h=()=>n()&&u(),i=()=>n()&&r();xe(h),le(i),ke(i),Z(n,m=>{m?u():r()})}function ge(e){const n=E(!1);return Z(e,t=>{t&&(n.value=t)},{immediate:!0}),t=>()=>n.value?t():null}const X=()=>{var e;const{scopeId:n}=((e=Pe())==null?void 0:e.vnode)||{};return n?{[n]:""}:null},[un,dn]=A("overlay"),fn={show:Boolean,zIndex:z,duration:z,className:W,lockScroll:I,lazyRender:I,customStyle:Object};var mn=_({name:un,props:fn,setup(e,{slots:n}){const t=E(),s=ge(()=>e.show||!e.lazyRender),a=u=>{e.lockScroll&&Y(u,!0)},c=s(()=>{var u;const r=w(Oe(e.zIndex),e.customStyle);return ie(e.duration)&&(r.animationDuration=`${e.duration}s`),re(o("div",{ref:t,style:r,class:[dn(),e.className]},[(u=n.default)==null?void 0:u.call(n)]),[[ue,e.show]])});return se("touchmove",a,{target:t}),()=>o(ce,{name:"van-fade",appear:!0},{default:c})}});const vn=$(mn),gn=w({},V,{round:Boolean,position:C("center"),closeIcon:C("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:C("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[yn,ee]=A("popup");var Bn=_({name:yn,inheritAttrs:!1,props:gn,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:n,attrs:t,slots:s}){let a,c;const u=E(),r=E(),h=ge(()=>e.show||!e.lazyRender),i=F(()=>{const d={zIndex:u.value};if(ie(e.duration)){const T=e.position==="center"?"animationDuration":"transitionDuration";d[T]=`${e.duration}s`}return d}),m=()=>{a||(a=!0,u.value=e.zIndex!==void 0?+e.zIndex:Ze(),n("open"))},v=()=>{a&&de(e.beforeClose,{done(){a=!1,n("close"),n("update:show",!1)}})},S=d=>{n("clickOverlay",d),e.closeOnClickOverlay&&v()},x=()=>{if(e.overlay)return o(vn,H({show:e.show,class:e.overlayClass,zIndex:u.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0},X(),{onClick:S}),{default:s["overlay-content"]})},P=d=>{n("clickCloseIcon",d),v()},O=()=>{if(e.closeable)return o(ae,{role:"button",tabindex:0,name:e.closeIcon,class:[ee("close-icon",e.closeIconPosition),Re],classPrefix:e.iconPrefix,onClick:P},null)};let y;const l=()=>{y&&clearTimeout(y),y=setTimeout(()=>{n("opened")})},f=()=>n("closed"),B=d=>n("keydown",d),g=h(()=>{var d;const{round:T,position:N,safeAreaInsetTop:U,safeAreaInsetBottom:ye}=e;return re(o("div",H({ref:r,style:i.value,role:"dialog",tabindex:0,class:[ee({round:T,[N]:N}),{"van-safe-area-top":U,"van-safe-area-bottom":ye}],onKeydown:B},t,X()),[(d=s.default)==null?void 0:d.call(s),O()]),[[ue,e.show]])}),k=()=>{const{position:d,transition:T,transitionAppear:N}=e,U=d==="center"?"van-fade":`van-popup-slide-${d}`;return o(ce,{name:T||U,appear:N,onAfterEnter:l,onAfterLeave:f},{default:g})};return Z(()=>e.show,d=>{d&&!a&&(m(),t.tabindex===0&&Te(()=>{var T;(T=r.value)==null||T.focus()})),!d&&a&&(a=!1,n("close"))}),G({popupRef:r}),rn(r,()=>e.show&&e.lockScroll),se("popstate",()=>{e.closeOnPopstate&&(v(),c=!1)}),ze(()=>{e.show&&m()}),Ae(()=>{c&&(n("update:show",!0),c=!1)}),le(()=>{e.show&&e.teleport&&(v(),c=!0)}),_e(De,()=>e.show),()=>e.teleport?o(Ee,{to:e.teleport},{default:()=>[x(),k()]}):o($e,null,[x(),k()])}});const hn=$(Bn);function bn(){const e=fe({show:!1}),n=a=>{e.show=a},t=a=>{w(e,a,{transitionAppear:!0}),n(!0)},s=()=>n(!1);return G({open:t,close:s,toggle:n}),{open:t,close:s,state:e,toggle:n}}function Cn(e){const n=Le(e),t=document.createElement("div");return document.body.appendChild(t),{instance:n.mount(t),unmount(){n.unmount(),document.body.removeChild(t)}}}const[wn,b,K]=A("dialog"),Sn=w({},V,{title:String,theme:String,width:z,message:[String,Function],callback:Function,allowHtml:Boolean,className:W,transition:C("van-dialog-bounce"),messageAlign:String,closeOnPopstate:I,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:I,closeOnClickOverlay:Boolean}),xn=[...cn,"transition","closeOnPopstate"];var kn=_({name:wn,props:Sn,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:n,slots:t}){const s=E(),a=fe({confirm:!1,cancel:!1}),c=l=>n("update:show",l),u=l=>{var f;c(!1),(f=e.callback)==null||f.call(e,l)},r=l=>()=>{e.show&&(n(l),e.beforeClose?(a[l]=!0,de(e.beforeClose,{args:[l],done(){u(l),a[l]=!1},canceled(){a[l]=!1}})):u(l))},h=r("cancel"),i=r("confirm"),m=Ne(l=>{var f,B;if(l.target!==((B=(f=s.value)==null?void 0:f.popupRef)==null?void 0:B.value))return;({Enter:e.showConfirmButton?i:p,Escape:e.showCancelButton?h:p})[l.key](),n("keydown",l)},["enter","esc"]),v=()=>{const l=t.title?t.title():e.title;if(l)return o("div",{class:b("header",{isolated:!e.message&&!t.default})},[l])},S=l=>{const{message:f,allowHtml:B,messageAlign:g}=e,k=b("message",{"has-title":l,[g]:g}),d=Fe(f)?f():f;return B&&typeof d=="string"?o("div",{class:k,innerHTML:d},null):o("div",{class:k},[d])},x=()=>{if(t.default)return o("div",{class:b("content")},[t.default()]);const{title:l,message:f,allowHtml:B}=e;if(f){const g=!!(l||t.title);return o("div",{key:B?1:0,class:b("content",{isolated:!g})},[S(g)])}},P=()=>o("div",{class:[Ue,b("footer")]},[e.showCancelButton&&o(M,{size:"large",text:e.cancelButtonText||K("cancel"),class:b("cancel"),style:{color:e.cancelButtonColor},loading:a.cancel,disabled:e.cancelButtonDisabled,onClick:h},null),e.showConfirmButton&&o(M,{size:"large",text:e.confirmButtonText||K("confirm"),class:[b("confirm"),{[He]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:a.confirm,disabled:e.confirmButtonDisabled,onClick:i},null)]),O=()=>o(Ge,{class:b("footer")},{default:()=>[e.showCancelButton&&o(J,{type:"warning",text:e.cancelButtonText||K("cancel"),class:b("cancel"),color:e.cancelButtonColor,loading:a.cancel,disabled:e.cancelButtonDisabled,onClick:h},null),e.showConfirmButton&&o(J,{type:"danger",text:e.confirmButtonText||K("confirm"),class:b("confirm"),color:e.confirmButtonColor,loading:a.confirm,disabled:e.confirmButtonDisabled,onClick:i},null)]}),y=()=>t.footer?t.footer():e.theme==="round-button"?O():P();return()=>{const{width:l,title:f,theme:B,message:g,className:k}=e;return o(hn,H({ref:s,role:"dialog",class:[b([B]),k],style:{width:ne(l)},tabindex:0,"aria-labelledby":f||g,onKeydown:m,"onUpdate:show":c},Ke(e,xn)),{default:()=>[v(),x(),y()]})}}});let j;const In={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let Pn=w({},In);function On(){({instance:j}=Cn({setup(){const{state:n,toggle:t}=bn();return()=>o(kn,H(n,{"onUpdate:show":t}),null)}}))}function Tn(e){return Me?new Promise((n,t)=>{j||On(),j.open(w({},Pn,e,{callback:s=>{(s==="confirm"?n:t)(s)}}))}):Promise.resolve(void 0)}const An=e=>Tn(w({showCancelButton:!0},e));export{M as B,hn as P,An as a,kn as s};