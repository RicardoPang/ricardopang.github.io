import{_ as r}from"./Icon.vue_vue_type_script_setup_true_lang.DlQaG8oQ.js";import{d as C,h as _,s as v,o,c as $,b as c,e as u,j as z,r as T,n as w}from"./framework.BMeDXoj2.js";const N=["disabled","autofocus","type"],S=C({name:"PfButton",__name:"Button",props:{type:{},size:{},plain:{type:Boolean},round:{type:Boolean},circle:{type:Boolean},disabled:{type:Boolean},nativeType:{},autofocus:{type:Boolean},icon:{},loading:{type:Boolean},href:{},target:{}},emits:["click"],setup(p,{expose:d,emit:f}){const{type:n,size:t,plain:m,round:y,circle:b,disabled:a,nativeType:R="button",autofocus:V,loading:s,href:i,target:B="_self"}=p,k=f,g=_(()=>({[`pf-button--${n}`]:n,[`pf-button--${t}`]:t,"is-plain":m,"is-round":y,"is-circle":b,"is-disabled":a,"is-loading":s})),l=v(),h=e=>{if(!(s||a)){if(i){window.open(i,B);return}k("click",e)}};return d({ref:l}),(e,j)=>(o(),$("button",{onClick:h,ref_key:"buttonRef",ref:l,class:w(["pf-button",g.value]),disabled:e.disabled||e.loading,autofocus:e.autofocus,type:e.nativeType},[e.loading?(o(),c(r,{key:0,icon:"spinner",spin:""})):u("",!0),e.icon?(o(),c(r,{key:1,icon:e.icon},null,8,["icon"])):u("",!0),z("span",null,[T(e.$slots,"default")])],10,N))}});export{S as _};