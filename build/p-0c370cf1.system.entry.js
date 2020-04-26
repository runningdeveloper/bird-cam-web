var __awaiter=this&&this.__awaiter||function(t,e,r,n){function o(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,i){function s(t){try{l(n.next(t))}catch(e){i(e)}}function a(t){try{l(n["throw"](t))}catch(e){i(e)}}function l(t){t.done?r(t.value):o(t.value).then(s,a)}l((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return l([t,e])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,o&&(i=s[0]&2?o["return"]:s[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,s[1])).done)return i;if(o=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;o=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=e.call(t,r)}catch(a){s=[6,a];o=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-353c9836.system.js","./p-e47d9b02.system.js","./p-f8eef7f1.system.js"],(function(t,e){"use strict";var r,n,o,i,s,a,l,c,u;return{setters:[function(t){r=t.r;n=t.d;o=t.h;i=t.c;s=t.H},function(t){a=t.g},function(t){l=t.h;c=t.a;u=t.b}],execute:function(){var h=".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}";var f=t("ion_reorder_group",function(){function t(t){r(this,t);this.lastToIndex=-1;this.cachedHeights=[];this.scrollElTop=0;this.scrollElBottom=0;this.scrollElInitial=0;this.containerTop=0;this.containerBottom=0;this.state=0;this.disabled=true;this.ionItemReorder=n(this,"ionItemReorder",7)}t.prototype.disabledChanged=function(){if(this.gesture){this.gesture.enable(!this.disabled)}};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t,r,n;var o=this;return __generator(this,(function(i){switch(i.label){case 0:t=this.el.closest("ion-content");if(!t)return[3,2];r=this;return[4,t.getScrollElement()];case 1:r.scrollEl=i.sent();i.label=2;case 2:n=this;return[4,e.import("./p-5b2240d7.system.js")];case 3:n.gesture=i.sent().createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:false,canStart:function(t){return o.canStart(t)},onStart:function(t){return o.onStart(t)},onMove:function(t){return o.onMove(t)},onEnd:function(){return o.onEnd()}});this.disabledChanged();return[2]}}))}))};t.prototype.disconnectedCallback=function(){this.onEnd();if(this.gesture){this.gesture.destroy();this.gesture=undefined}};t.prototype.complete=function(t){return Promise.resolve(this.completeSync(t))};t.prototype.canStart=function(t){if(this.selectedItemEl||this.state!==0){return false}var e=t.event.target;var r=e.closest("ion-reorder");if(!r){return false}var n=p(r,this.el);if(!n){return false}t.data=n;return true};t.prototype.onStart=function(t){t.event.preventDefault();var e=this.selectedItemEl=t.data;var r=this.cachedHeights;r.length=0;var n=this.el;var o=n.children;if(!o||o.length===0){return}var i=0;for(var s=0;s<o.length;s++){var a=o[s];i+=a.offsetHeight;r.push(i);a.$ionIndex=s}var c=n.getBoundingClientRect();this.containerTop=c.top;this.containerBottom=c.bottom;if(this.scrollEl){var u=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop;this.scrollElTop=u.top+v;this.scrollElBottom=u.bottom-v}else{this.scrollElInitial=0;this.scrollElTop=0;this.scrollElBottom=0}this.lastToIndex=d(e);this.selectedItemHeight=e.offsetHeight;this.state=1;e.classList.add(b);l()};t.prototype.onMove=function(t){var e=this.selectedItemEl;if(!e){return}var r=this.autoscroll(t.currentY);var n=this.containerTop-r;var o=this.containerBottom-r;var i=Math.max(n,Math.min(t.currentY,o));var s=r+i-t.startY;var a=i-n;var l=this.itemIndexForTop(a);if(l!==this.lastToIndex){var u=d(e);this.lastToIndex=l;c();this.reorderMove(u,l)}e.style.transform="translateY("+s+"px)"};t.prototype.onEnd=function(){var t=this.selectedItemEl;this.state=2;if(!t){this.state=0;return}var e=this.lastToIndex;var r=d(t);if(e===r){this.completeSync()}else{this.ionItemReorder.emit({from:r,to:e,complete:this.completeSync.bind(this)})}u()};t.prototype.completeSync=function(t){var e=this.selectedItemEl;if(e&&this.state===2){var r=this.el.children;var n=r.length;var o=this.lastToIndex;var i=d(e);if(o!==i&&(!t||t===true)){var s=i<o?r[o+1]:r[o];this.el.insertBefore(e,s)}if(Array.isArray(t)){t=g(t,i,o)}for(var a=0;a<n;a++){r[a].style["transform"]=""}e.style.transition="";e.classList.remove(b);this.selectedItemEl=undefined;this.state=0}return t};t.prototype.itemIndexForTop=function(t){var e=this.cachedHeights;var r=0;for(r=0;r<e.length;r++){if(e[r]>t){break}}return r};t.prototype.reorderMove=function(t,e){var r=this.selectedItemHeight;var n=this.el.children;for(var o=0;o<n.length;o++){var i=n[o].style;var s="";if(o>t&&o<=e){s="translateY("+-r+"px)"}else if(o<t&&o>=e){s="translateY("+r+"px)"}i["transform"]=s}};t.prototype.autoscroll=function(t){if(!this.scrollEl){return 0}var e=0;if(t<this.scrollElTop){e=-m}else if(t>this.scrollElBottom){e=m}if(e!==0){this.scrollEl.scrollBy(0,e)}return this.scrollEl.scrollTop-this.scrollElInitial};t.prototype.render=function(){var t;var e=a(this);return o(s,{class:(t={},t[e]=true,t["reorder-enabled"]=!this.disabled,t["reorder-list-active"]=this.state!==0,t)})};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:true,configurable:true});return t}());var d=function(t){return t["$ionIndex"]};var p=function(t,e){var r;while(t){r=t.parentElement;if(r===e){return t}t=r}return undefined};var v=60;var m=10;var b="reorder-selected";var g=function(t,e,r){var n=t[e];t.splice(e,1);t.splice(r,0,n);return t.slice()};f.style=h}}}));