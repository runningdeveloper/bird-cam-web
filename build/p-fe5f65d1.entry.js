import{r as s,h as t,H as i}from"./p-cd08f63e.js";import{g as o}from"./p-dff9dc95.js";import"./p-56dbf9e6.js";import"./p-7261e130.js";import"./p-e9dd3611.js";import{m as e}from"./p-e40034d9.js";import{u as n}from"./p-335850de.js";const r=class{constructor(t){s(this,t),this.visible=!1,this.autoHide=!0,this.onClick=()=>e.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await n(this.menu)}render(){const s=o(this),e=this.autoHide&&!this.visible;return t(i,{onClick:this.onClick,"aria-hidden":e?"true":null,class:{[s]:!0,"menu-toggle-hidden":e}},t("slot",null))}};r.style=":host(.menu-toggle-hidden){display:none}";export{r as ion_menu_toggle}