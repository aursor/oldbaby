import{u as a}from"./entry.b294e9da.js";import{j as s}from"./swiper-vue.6810c334.js";const g=e=>Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0)),l=(e,t)=>(o,i)=>(a(()=>e({...g(o),...i.attrs},i)),()=>{var n,r;return t?(r=(n=i.slots).default)==null?void 0:r.call(n):null}),p={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},u=s({name:"Meta",inheritAttrs:!1,props:{...p,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:l(e=>{const t={...e};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})});export{u as M};