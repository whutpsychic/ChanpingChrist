import{d as c,o as n,c as i,a as e,t as a,f as _,p as d,b as p,_ as r,e as l}from"./index-ba187a41.js";const u=""+new URL("icon-changping-c68ce477.png",import.meta.url).href,h=t=>(d("data-v-4eae5b1b"),t=t(),p(),t),v=h(()=>e("div",{class:"left-icon"},[e("img",{class:"icon",alt:".",src:u})],-1)),g={class:"right-content"},m={class:"title"},f={class:"date"},y=c({__name:"LiveVideoCard",props:{title:{type:String,default:" — "},date:{type:String,default:" — "},url:{type:String,default:" — "}},setup(t){const s=t,o=()=>{_.launchInnerExplorer(s.url)};return(V,C)=>(n(),i("div",{class:"live-video-card",onClick:o},[v,e("div",g,[e("p",m,a(s.title),1),e("p",f,a(s.date),1)])]))}});const x=r(y,[["__scopeId","data-v-4eae5b1b"]]),b={class:"page-content"},S=e("div",{style:{height:"10px"}},null,-1),L=e("div",{style:{height:"40px"}},null,-1),w=c({__name:"HomeLive",setup(t){return(s,o)=>(n(),i("div",b,[S,l(x,{title:"主日礼拜",date:"每周日上午9:00 — 10:30",url:"http://45734.wx.cdn.aodianyun.com/layout/party/37305"}),L]))}});export{w as default};