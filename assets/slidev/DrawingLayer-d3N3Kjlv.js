import{d as u,t as l,H as m,O as c,P as i,o as p,b as f,i as d,D as t}from"../modules/vue-CSd9qz7s.js";import{u as _}from"./SlideWrapper-BzYfNOKc.js";import{u as v}from"./context-8xEfgQwV.js";import"../index-DGzkeAyH.js";import"../modules/shiki-BTKXgZPg.js";const B=u({__name:"DrawingLayer",setup(g){const{drauu:e,drawingEnabled:o,loadCanvas:s}=_(),r=v().$scale,n=l();return m(()=>{e.mount(n.value,n.value.parentElement),c(r,a=>e.options.coordinateScale=1/a,{immediate:!0}),s()}),i(()=>{e.unmount()}),(a,w)=>(p(),f("svg",{ref_key:"svg",ref:n,class:d(["w-full h-full absolute top-0",{"pointer-events-none":!t(o),"touch-none":t(o)}])},null,2))}});export{B as default};