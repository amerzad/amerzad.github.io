(self.AMP=self.AMP||[]).push({n:"amp-mega-menu",v:"2008290323002",f:function(AMP,_){let h;function k(a,b=""){try{return decodeURIComponent(a)}catch(c){return b}}let m=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function n(a){return a?Array.prototype.slice.call(a):[]}let p=self.AMP_CONFIG||{},q=("string"==typeof p.cdnProxyRegex?new RegExp(p.cdnProxyRegex):p.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function r(a){if(self.document&&self.document.head&&(!self.location||!q.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}p.cdnUrl||r("runtime-host");p.geoApiUrl||r("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let t=self.__AMP_LOG;function u(){}(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0});function v(a){let b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(d){}let c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(let b=0;b<c.length;b++)0!=c[b].length&&("-"==c[b][0]?a[c[b].substr(1)]=!1:a[c[b]]=!0);return a}function w(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=x(b,"ampdoc").getAmpDoc(a)}return a}function x(a,b){y(a,b);{let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b}b=a[b];b.obj||(b.obj=new b.ctor(b.context),b.ctor=null,b.context=null,b.resolve&&b.resolve(b.obj));return b.obj}function y(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
let z;function A(a){try{let b=a.ownerDocument,c=b.createElement("div"),d=b.createElement("div");c.appendChild(d);return c.querySelector(":scope div")===d}catch(b){return!1}}function B(a){let b=a.isConnected;if(void 0!==b)return b;do{if(a=C(a),a.host)a=a.host;else break}while(1);return a.nodeType===Node.DOCUMENT_NODE}function C(a){if(Node.prototype.getRootNode)return a.getRootNode()||a;for(;a.parentNode&&(!a||"I-AMPHTML-SHADOW-ROOT"!=a.tagName&&(11!=a.nodeType||"[object ShadowRoot]"!==Object.prototype.toString.call(a)));a=a.parentNode);return a}function D(a,b,c){for(;a&&a!==c;a=a.parentElement)if(b(a))return a;return null}function E(a){return a.closest?a.closest("header"):D(a,a=>{{let b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;a=b?b.call(a,"header"):!1}return a})}function F(a,b){a.classList.add("i-amphtml-scoped");let c=b.replace(/^|,/g,"$&.i-amphtml-scoped ");b=a.querySelectorAll(c);a.classList.remove("i-amphtml-scoped");return b}function G(a,b){if(void 0!==z?z:z=A(a))return a.querySelector(b.replace(/^|,/g,"$&:scope "));let c=F(a,b);return void 0===c[0]?null:c[0]}function H(a){return(void 0!==z?z:z=A(a))?a.querySelectorAll("nav > * > li".replace(/^|,/g,"$&:scope ")):F(a,"nav > * > li")}function I(a){try{a.focus()}catch(b){}}let J=[];function K(a){let b=[];a=L(a);for(let c=0;c<a.length;c++){let d=a[c];d.parentNode&&n(d.parentNode.children).filter(a=>a!=d).forEach(a=>b.push(a))}return b}function L(a){let b=[];for(;a;a=a.parentNode||a.host)b.push(a);return b}function M(a){let b=[];for(;a;){a=C(a);let c=a.querySelectorAll("a[href],area[href],button,details summary,iframe,input,select,textarea,[contenteditable],[draggable],[tabindex]");Array.prototype.push.apply(b,c);a=a.host}return b}function N(a){u(J.every(b=>b.element!==a));u(B(a));let b=K(a),c=L(a).filter(a=>a.nodeType==Node.ELEMENT_NODE),d=M(a),e=d.filter(b=>a.contains(b)&&void 0!==b.__AMP_MODAL_SAVED_TAB_INDEX),f=d.filter(b=>!a.contains(b)&&void 0===b.__AMP_MODAL_SAVED_TAB_INDEX),g=b.concat(c).map(a=>({element:a,prevValue:a.getAttribute("aria-hidden")}));c.forEach(a=>a.removeAttribute("aria-hidden"));b.forEach(a=>a.setAttribute("aria-hidden","true"));f.forEach(a=>{a.__AMP_MODAL_SAVED_TAB_INDEX=a.getAttribute("tabindex");a.setAttribute("tabindex","-1")});e.forEach(a=>{var b=a.__AMP_MODAL_SAVED_TAB_INDEX;null===b?a.removeAttribute("tabindex"):a.setAttribute("tabindex",b)});J.push({element:a,hiddenElementInfos:g,focusableExternalElements:f,focusableInternalElements:e})}function O(a){let{hiddenElementInfos:b,focusableExternalElements:c,focusableInternalElements:d}=J.pop();u(B(a));b.forEach(a=>{var b=a.element,c=a.prevValue;null===c?b.removeAttribute("aria-hidden"):b.setAttribute("aria-hidden",c)});d.forEach(a=>{a.setAttribute("tabindex","-1")});c.forEach(a=>{var b=a.__AMP_MODAL_SAVED_TAB_INDEX;null===b?a.removeAttribute("tabindex"):a.setAttribute("tabindex",b);a.__AMP_MODAL_SAVED_TAB_INDEX=void 0})}function P(a){if(!a.h)return null;let b=a.h;a.mutateElement(()=>{let a=G(b,"> .i-amphtml-mega-menu-content");O(a);a.setAttribute("aria-modal","false")});b.removeAttribute("open");a.element.removeAttribute("open");a.o.removeAttribute("open");let c=Q(b);c.setAttribute("aria-expanded","false");b.contains(a.j.activeElement)&&I(c);a.m.removeEventListener("click",a.D);a.m.removeEventListener("keydown",a.F);a.h=null;return b}function R(a,b,c,d){b.classList.add("i-amphtml-mega-menu-item");a.B++;c.classList.add("i-amphtml-mega-menu-heading");c.hasAttribute("tabindex")||c.setAttribute("tabindex",0);c.addEventListener("click",b=>S(a,b));c.addEventListener("keydown",b=>{if(!b.defaultPrevented)switch(b.key){case"ArrowLeft":case"ArrowRight":var c=a.l.indexOf(b.currentTarget.parentElement);if(-1!==c){b.preventDefault();let d="ArrowLeft"==b.key?-1:1;b=a.j;"rtl"==(b.body.getAttribute("dir")||b.documentElement.getAttribute("dir")||"ltr")&&(d=-d);c+=d;b=a.l.length;I(Q(a.l[0<c&&0<b?c%b:(c%b+b)%b]))}break;case"Enter":case" ":b.target==b.currentTarget&&S(a,b)}});if(d&&!a.w.hasAction(c,"tap",b)){d.classList.add("i-amphtml-mega-menu-content");d.setAttribute("aria-modal","false");var e=d.getAttribute("id");e||(e=a.I+"_AMP_content_"+a.B,d.setAttribute("id",e));d.insertBefore(U(a),d.firstChild);d.appendChild(U(a));c.setAttribute("aria-haspopup","dialog");c.setAttribute("aria-controls",e);c.setAttribute("aria-expanded","false")}}function S(a,b){if(V(a,b)){b.preventDefault();b.stopPropagation();b=b.currentTarget.parentElement;var c=P(a);b!=c&&W(a,b)}}function U(a){let b=a.element.getAttribute("data-close-button-aria-label")||"Close the menu",c=a.j.createElement("button");c.textContent=b;c.classList.add("i-amphtml-screen-reader");c.addEventListener("click",()=>P(a));return c}function V(a,b){let c=b.target,d=b.currentTarget;return D(c,a=>"A"==a.tagName,d)||a.w.hasAction(c,"tap",d)?!1:d.hasAttribute("aria-haspopup")}function W(a,b){a.mutateElement(()=>{let a=G(b,"> .i-amphtml-mega-menu-content");N(a);a.setAttribute("aria-modal","true")});b.setAttribute("open","");a.element.setAttribute("open","");a.o.setAttribute("open","");Q(b).setAttribute("aria-expanded","true");let c=b.querySelector(".i-amphtml-screen-reader");I(c);a.m.addEventListener("click",a.D);a.m.addEventListener("keydown",a.F);a.h=b}function Q(a){return G(a,"> .i-amphtml-mega-menu-heading")}class X extends AMP.BaseElement{constructor(a){super(a);this.l=[];this.B=0;this.o=this.h=null;this.j=this.win.document;this.m=this.j.documentElement;this.w=null;this.I=a.id||Math.floor(100*Math.random());this.A=this.C.bind(this);this.D=this.G.bind(this);this.F=this.H.bind(this)}isLayoutSupported(a){return"fixed-height"===a}prerenderAllowed(){return!0}buildCallback(){{var a=this.element;let l=a.ownerDocument.defaultView;var b=l.__AMP_TOP||(l.__AMP_TOP=l);let T=l!=b;var c=b;if(c.__AMP__EXPERIMENT_TOGGLES)b=c.__AMP__EXPERIMENT_TOGGLES;else{c.__AMP__EXPERIMENT_TOGGLES=Object.create(null);b=c.__AMP__EXPERIMENT_TOGGLES;if(c.AMP_CONFIG)for(var d in c.AMP_CONFIG){var e=c.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(b[d]=Math.random()<e)}if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-doc-opt-in"])&&0<c.AMP_CONFIG["allow-doc-opt-in"].length&&(d=c.AMP_CONFIG["allow-doc-opt-in"],e=c.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=e.getAttribute("content").split(",");for(var f=0;f<e.length;f++)-1!=d.indexOf(e[f])&&(b[e[f]]=!0)}Object.assign(b,v(c));if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-url-opt-in"])&&0<c.AMP_CONFIG["allow-url-opt-in"].length){d=c.AMP_CONFIG["allow-url-opt-in"];c=c.location.originalHash||c.location.hash;e=Object.create(null);if(c)for(var g;g=m.exec(c);)f=k(g[1],g[1]),g=g[2]?k(g[2].replace(/\+/g," "),g[2]):"",e[f]=g;c=e;for(e=0;e<d.length;e++)f=c[`e-${d[e]}`],"1"==f&&(b[d[e]]=!0),"0"==f&&(b[d[e]]=!1)}}b=!!b["ampdoc-fie"];T&&!b?a=y(l,"action")?x(l,"action"):null:(a=w(a),a=w(a),a=a.isSingleDoc()?a.win:a,a=y(a,"action")?x(a,"action"):null)}this.w=a}layoutCallback(){this.C();this.element.addEventListener("amp:dom-update",this.A);if(!this.o){{var a=this.j.createElement("div");a.classList.add("i-amphtml-mega-menu-mask");a.setAttribute("aria-hidden","true");let b=E(this.element)||this.element;b.classList.add("i-amphtml-mega-menu-mask-parent");b.appendChild(a)}this.o=a}h||(h=Promise.resolve(void 0));a=h;return a}unlayoutCallback(){this.element.removeEventListener("amp:dom-update",this.A);P(this);return!0}C(){this.l=n(H(this.element));this.l.filter(a=>!a.classList.contains("i-amphtml-mega-menu-item")).forEach(a=>{if(1==a.childElementCount)R(this,a,a.firstElementChild,null);else{var b=G(a,"> button")||G(a,"> [role=button]"),c=G(a,"> [role=dialog]");if(!t.user)throw Error("failed to call initLogConstructor");t.user.assert(b,"amp-mega-menu requires each expandable item to include a button that toggles it.",void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);R(this,a,b,c)}})}G(a){a=a.target;this.h&&!this.h.contains(a)&&B(a)&&P(this)}H(a){"Escape"===a.key&&P(this)&&a.preventDefault()}}(a=>{a.registerElement("amp-mega-menu",X,"amp-mega-menu{z-index:1000!important;white-space:nowrap!important}amp-mega-menu.i-amphtml-layout-size-defined[open]{overflow:visible!important}amp-mega-menu nav{background:#fff}amp-mega-menu nav>*{margin:0}amp-mega-menu .i-amphtml-mega-menu-item{display:inline-block!important}amp-mega-menu .i-amphtml-mega-menu-heading{cursor:pointer!important}amp-mega-menu .i-amphtml-mega-menu-content{position:absolute!important;left:0;width:100vw;opacity:0!important;visibility:hidden!important;background:#fff}amp-mega-menu .i-amphtml-mega-menu-item[open]>.i-amphtml-mega-menu-content{visibility:visible!important;opacity:1!important}amp-mega-menu .i-amphtml-mega-menu-item:not([open]) .i-amphtml-screen-reader{display:none!important}.i-amphtml-mega-menu-mask-parent{z-index:1000!important;position:relative}.i-amphtml-mega-menu-mask{position:fixed!important;z-index:-1!important;visibility:hidden!important;opacity:0!important;top:0!important;bottom:0!important;left:0!important;right:0!important;background:rgba(0,0,0,0.5);transition:opacity 200ms,visibility 0s 200ms}.i-amphtml-mega-menu-mask[open]{opacity:1!important;visibility:visible!important;transition:opacity 200ms}\n/*# sourceURL=/extensions/amp-mega-menu/0.1/amp-mega-menu.css*/")})(self.AMP)}});