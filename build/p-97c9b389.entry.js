import{r as o,e as a,f as i,h as t,H as r,c as s}from"./p-5439f137.js";import{g as e,c as n}from"./p-9114f801.js";import{g as d}from"./p-177ede88.js";import{c as l}from"./p-56dbf9e6.js";import{d as m}from"./p-32f795ac.js";import{a as c,d as h}from"./p-718ae824.js";import"./p-7261e130.js";import{B as p,p as f,a as b,c as x,d as w,e as u}from"./p-b5e08c06.js";import{g as v}from"./p-5b51185b.js";import{c as g}from"./p-e9dd3611.js";import"./p-78da8fe1.js";import{createGesture as y}from"./p-92c53699.js";const k=(o,a)=>{const i=g().addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),t=g().addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),r=g().addElement(o).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(t);if(a){const o=window.innerWidth<768,s="ION-MODAL"===a.tagName&&void 0!==a.presentingElement,e=g().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),n=document.body;if(o){const o=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",i=`translateY(${s?"-10px":o}) scale(0.93)`;e.afterStyles({transform:i}).beforeAddWrite(()=>n.style.setProperty("background-color","black")).addElement(a).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:i,borderRadius:"10px 10px 0 0"}]),r.addAnimation(e)}else if(r.addAnimation(i),s){const o=`translateY(-10px) scale(${s?.93:1})`;e.afterStyles({transform:o}).addElement(a.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:o}]);const i=g().afterStyles({transform:o}).addElement(a.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:o}]);r.addAnimation([e,i])}else t.fromTo("opacity","0","1")}else r.addAnimation(i);return r},D=(o,a,i=500)=>{const t=g().addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r=g().addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),s=g().addElement(o).easing("cubic-bezier(0.32,0.72,0,1)").duration(i).addAnimation(r);if(a){const o=window.innerWidth<768,i="ION-MODAL"===a.tagName&&void 0!==a.presentingElement,e=g().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(o=>{1===o&&(a.style.setProperty("overflow",""),Array.from(n.querySelectorAll("ion-modal")).filter(o=>void 0!==o.presentingElement).length<=1&&n.style.setProperty("background-color",""))}),n=document.body;if(o){const o=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",t=`translateY(${i?"-10px":o}) scale(0.93)`;e.addElement(a).keyframes([{offset:0,filter:"contrast(0.85)",transform:t,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),s.addAnimation(e)}else if(s.addAnimation(t),i){const o=`translateY(-10px) scale(${i?.93:1})`;e.addElement(a.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:o},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const t=g().addElement(a.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:o},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);s.addAnimation([e,t])}else r.fromTo("opacity","1","0")}else s.addAnimation(t);return s},Y=o=>{const a=g(),i=g(),t=g();return i.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),t.addElement(o.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),a.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([i,t])},M=o=>{const a=g(),i=g(),t=g(),r=o.querySelector(".modal-wrapper");return i.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),t.addElement(r).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),a.addElement(o).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([i,t])},j=class{constructor(i){o(this,i),this.didPresent=a(this,"ionModalDidPresent",7),this.willPresent=a(this,"ionModalWillPresent",7),this.willDismiss=a(this,"ionModalWillDismiss",7),this.didDismiss=a(this,"ionModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=()=>{this.dismiss(void 0,p)},this.onDismiss=o=>{o.stopPropagation(),o.preventDefault(),this.dismiss()},this.onLifecycle=o=>{const a=this.usersElement,i=W[o.type];if(a&&i){const t=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:o.detail});a.dispatchEvent(t)}},f(this.el)}async present(){if(this.presented)return;const o=this.el.querySelector(".modal-wrapper");if(!o)throw new Error("container is undefined");const a=Object.assign(Object.assign({},this.componentProps),{modal:this.el});this.usersElement=await c(this.delegate,o,this.component,["ion-page"],a),await m(this.usersElement),i(()=>this.el.classList.add("show-modal")),await b(this,"modalEnter",k,Y,this.presentingElement);const t=e(this);if(this.swipeToClose&&"ios"===t){const o=this.leaveAnimation||n.get("modalLeave",D),a=this.animation=o(this.el,this.presentingElement);this.gesture=((o,a,i)=>{const t=o.offsetHeight;let r=!1;const s=y({el:o,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:o=>{const a=o.event.target;return null===a||!a.closest||null===a.closest("ion-content")},onStart:()=>{a.progressStart(!0,r?1:0)},onMove:o=>{const i=o.deltaY/t;i<0||a.progressStep(i)},onEnd:o=>{const e=o.velocityY,n=o.deltaY/t;if(n<0)return;const m=(o.deltaY+1e3*e)/t>=.5;let c=m?-.001:.001;m?(a.easing("cubic-bezier(0.32, 0.72, 0, 1)"),c+=d([0,0],[.32,.72],[0,1],[1,1],n)[0]):(a.easing("cubic-bezier(1, 0, 0.68, 0.28)"),c+=d([0,0],[1,0],[.68,.28],[1,1],n)[0]);const h=((o,a)=>l(400,o/Math.abs(1.1*a),500))(m?n*t:(1-n)*t,e);r=m,s.enable(!1),a.onFinish(()=>{m||s.enable(!0)}).progressEnd(m?1:0,c,h),m&&i()}});return s})(this.el,a,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish(async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1})}),this.gesture.enable(!0)}}async dismiss(o,a){if(this.gestureAnimationDismissing&&"gesture"!==a)return!1;const i=x.get(this)||[],t=await w(this,o,a,"modalLeave",D,M,this.presentingElement);return t&&(await h(this.delegate,this.usersElement),this.animation&&this.animation.destroy(),i.forEach(o=>o.destroy())),this.animation=void 0,t}onDidDismiss(){return u(this.el,"ionModalDidDismiss")}onWillDismiss(){return u(this.el,"ionModalWillDismiss")}render(){const o=e(this);return t(r,{"no-router":!0,"aria-modal":"true",class:Object.assign({[o]:!0,"modal-card":void 0!==this.presentingElement&&"ios"===o},v(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},t("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===o&&t("div",{class:"modal-shadow"}),t("div",{role:"dialog",class:"modal-wrapper"}))}get el(){return s(this)}},W={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};j.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}",md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"};export{j as ion_modal}