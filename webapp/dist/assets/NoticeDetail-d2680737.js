import{d,u as p,r as u,c as f,a as m,n as g,b as h,e as a,t as s,F as v,f as y,g as N,h as x,N as D,o as B,_ as k}from"./index-1b4c4a82.js";const S={class:"page-content"},b={class:"title"},C={class:"date"},F={class:"content"},H=d({__name:"NoticeDetail",setup(I){const n=p(),c=y(),_=N(),t=u({title:"",content:"",date:""}),i=()=>{let o=c.query.index;const e=x[o];t.title=e.title,t.content=e.content,t.date=e.date},l=()=>{_.back()};return i(),(o,e)=>{const r=D;return B(),f(v,null,[m(r,{style:g(`padding-top:${h(n).top}px;`),title:"通知","left-arrow":"",onClickLeft:l},null,8,["style"]),a("div",S,[a("p",b,s(t.title),1),a("p",C,s(`发表于 ${t.date}`),1),a("p",F,s(t.content),1)])],64)}}});const V=k(H,[["__scopeId","data-v-66c51431"]]);export{V as default};