(self.AMP=self.AMP||[]).push({n:"amp-sidebar",v:"2008290323002",f:function(AMP,_){function h(a,b=""){try{return decodeURIComponent(a)}catch(c){return b}}let aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function k(a){return a?Array.prototype.slice.call(a):[]}let l=self.AMP_CONFIG||{},ba=("string"==typeof l.cdnProxyRegex?new RegExp(l.cdnProxyRegex):l.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function m(a){if(self.document&&self.document.head&&(!self.location||!ba.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}l.cdnUrl||m("runtime-host");l.geoApiUrl||m("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let n=self.__AMP_LOG;function p(){if(!n.user)throw Error("failed to call initLogConstructor");return n.user}class q{constructor(){this.l=null}add(a){this.l||(this.l=[]);this.l.push(a);return()=>{this.remove(a)}}remove(a){this.l&&(a=this.l.indexOf(a),-1<a&&this.l.splice(a,1))}removeAll(){this.l&&(this.l.length=0)}fire(a){if(this.l){var b=this.l;for(let c=0;c<b.length;c++)(0,b[c])(a)}}getHandlerCount(){return this.l?this.l.length:0}}function r(a){let b=a.indexOf("#");return-1==b?a:a.substring(0,b)}function t(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);let b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){let d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){let d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(e){let a=e.getAttribute("content").split(",");for(c=0;c<a.length;c++)-1!=d.indexOf(a[c])&&(b[a[c]]=!0)}}Object.assign(b,ca(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];a=a.location.originalHash||a.location.hash;var d=Object.create(null);if(a)for(var e;e=aa.exec(a);){var f=h(e[1],e[1]);e=e[2]?h(e[2].replace(/\+/g," "),e[2]):"";d[f]=e}a=d;for(d=0;d<c.length;d++)f=a[`e-${c[d]}`],"1"==f&&(b[c[d]]=!0),"0"==f&&(b[c[d]]=!1)}return b}function ca(a){let b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(d){}let c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(let b=0;b<c.length;b++)0!=c[b].length&&("-"==c[b][0]?a[c[b].substr(1)]=!1:a[c[b]]=!0);return a}function v(a,b){let c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),e=c!=d,f=!!t(d)["ampdoc-fie"];e&&!f?b=w(c,b)?x(c,b):null:(a=y(a),a=z(a),b=w(a,b)?x(a,b):null);return b}function A(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return x(a,b)}function B(a,b){var c=y(a);c=z(c);return x(c,b)}function y(a){return a.nodeType?A((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function z(a){a=y(a);return a.isSingleDoc()?a.win:a}function x(a,b){w(a,b);{let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b}b=a[b];b.obj||(b.obj=new b.ctor(b.context),b.ctor=null,b.context=null,b.resolve&&b.resolve(b.obj));return b.obj}function w(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}let C;
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */let D;function E(a){return":not([toolbar]) [autoscroll]".replace(/^|,/g,`$&${a} `)}function F(a){if(void 0===a.isConnected)do{if(a=G(a),a.host)a=a.host;else break}while(1)}function G(a){if(Node.prototype.getRootNode)return a.getRootNode()||a;for(;a.parentNode&&(!a||"I-AMPHTML-SHADOW-ROOT"!=a.tagName&&(11!=a.nodeType||"[object ShadowRoot]"!==Object.prototype.toString.call(a)));a=a.parentNode);return a}function da(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function H(a,b){return a.closest?a.closest(b):da(a,a=>{{let c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;a=c?c.call(a,b):!1}return a})}function ea(a){return"rtl"==(a.body.getAttribute("dir")||a.documentElement.getAttribute("dir")||"ltr")}class fa{constructor(a,b,c){this.Ba=A(a,"timer");this.Ia=b;this.Ga=c||0;this.R=-1;this.ea=0;this.ka=!1;this.Fa=()=>{this.Z()}}isPending(){return-1!=this.R}schedule(a){let b=a||this.Ga;this.ka&&10>b&&(b=10);let c=Date.now()+b;return!this.isPending()||-10>c-this.ea?(this.cancel(),this.ea=c,this.R=this.Ba.delay(this.Fa,b),!0):!1}Z(){this.R=-1;this.ea=0;this.ka=!0;this.Ia();this.ka=!1}cancel(){this.isPending()&&(this.Ba.cancel(this.R),this.R=-1)}}function ha(a,b){for(let c=0;c<a.length;c++)if(b(a[c],c,a))return c;return-1}let I;function ia(a){if(void 0!==I)return I;I=!1;try{let b={get passive(){I=!0;return!1}};a.addEventListener("test-options",null,b);a.removeEventListener("test-options",null,b)}catch(b){}return I}class ja{constructor(a,b,c,d){this.type=a;this.data=b;this.time=c;this.event=d}}function la(a){let b=a.__AMP_Gestures;b||(b=new ma(a,!1,!0),a.__AMP_Gestures=b);return b}function J(a,b){a.K[b]=!1;a.h[b]=0;a.m[b]||a.c[b].acceptCancel()}function K(a,b){let c=!!a.j||a.aa;a.aa=!1;if(!c){let b=Date.now();for(let d=0;d<a.c.length;d++)if(a.m[d]||a.h[d]&&a.h[d]>=b){c=!0;break}}c?(b.stopPropagation(),a.Pa||b.preventDefault()):a.Qa&&b.stopPropagation();a.ga&&(a.ga=!1,a.va())}class ma{constructor(a,b,c){this.o=a;this.c=[];this.K=[];this.m=[];this.h=[];this.j=null;this.Pa=b;this.Qa=c;this.aa=!1;this.Z=new fa(a.ownerDocument.defaultView,this.va.bind(this));this.za=new q;this.P=Object.create(null);this.ta=this.Na.bind(this);this.ra=this.La.bind(this);this.sa=this.Ma.bind(this);this.qa=this.Ka.bind(this);let d=ia(a.ownerDocument.defaultView);this.o.addEventListener("touchstart",this.ta,d?{passive:!0}:!1);this.o.addEventListener("touchend",this.ra);this.o.addEventListener("touchmove",this.sa,d?{passive:!0}:!1);this.o.addEventListener("touchcancel",this.qa);this.ga=!1}cleanup(){this.o.removeEventListener("touchstart",this.ta);this.o.removeEventListener("touchend",this.ra);this.o.removeEventListener("touchmove",this.sa);this.o.removeEventListener("touchcancel",this.qa);delete this.o.__AMP_Gestures;this.Z.cancel()}onGesture(a,b){let c=new a(this),d=c.getType();let e=this.P[d];e||(this.c.push(c),e=new q,this.P[d]=e);return e.add(b)}removeGesture(a){let b=new a(this).getType();if(a=this.P[b]){a.removeAll();a=ha(this.c,a=>a.getType()==b);if(0>a)return!1;this.c.splice(a,1);this.m.splice(a,1);this.h.splice(a,1);this.K.splice(a,1);delete this.P[b];return!0}return!1}onPointerDown(a){return this.za.add(a)}Na(a){let b=Date.now();this.aa=!1;this.za.fire(a);for(let d=0;d<this.c.length;d++)if(!this.m[d]&&(this.h[d]&&this.h[d]<b&&J(this,d),this.c[d].onTouchStart(a))){var c=d;this.K[c]=!0;this.h[c]=0}K(this,a)}Ma(a){let b=Date.now();for(let c=0;c<this.c.length;c++)this.K[c]&&(this.h[c]&&this.h[c]<b?J(this,c):this.c[c].onTouchMove(a)||J(this,c));K(this,a)}La(a){let b=Date.now();for(let c=0;c<this.c.length;c++){if(!this.K[c])continue;if(this.h[c]&&this.h[c]<b){J(this,c);continue}this.c[c].onTouchEnd(a);let d=!this.h[c],e=this.h[c]<b;this.j!=this.c[c]&&(d||e)&&J(this,c)}K(this,a)}Ka(a){for(let a=0;a<this.c.length;a++){var b=a;this.m[b]=0;J(this,b)}K(this,a)}va(){var a=Date.now();let b=-1;for(var c=0;c<this.c.length;c++)if(!this.m[c])this.h[c]&&this.h[c]<a&&J(this,c);else if(-1==b||this.m[c]>this.m[b])b=c;if(-1!=b){var d=0;for(c=0;c<this.c.length;c++)!this.m[c]&&this.K[c]&&(d=Math.max(d,this.h[c]-a));if(2>d){a=b;let d=this.c[a];for(let b=0;b<this.c.length;b++)b!=a&&(c=b,this.m[c]=0,J(this,c));this.m[a]=0;this.h[a]=0;this.j=d;d.acceptStart()}else this.Z.schedule(d)}}}class na{constructor(a,b){this.Sa=a;this.W=b}getType(){return this.Sa}signalReady(a){var b=this.W;if(b.j)this.acceptCancel();else{var c=Date.now();for(let d=0;d<b.c.length;d++)b.c[d]==this&&(b.m[d]=c+a,b.h[d]=0);b.ga=!0}}signalPending(a){var b=this.W;if(b.j)this.acceptCancel();else{var c=Date.now();for(let d=0;d<b.c.length;d++)b.c[d]==this&&(b.h[d]=c+a)}}signalEnd(){var a=this.W;a.j==this&&(a.j=null,a.aa=!0)}signalEmit(a,b){{let c=this.W.P[this.getType()];c&&c.fire(new ja(this.getType(),a,Date.now(),b))}}acceptStart(){}acceptCancel(){}onTouchStart(){return!1}onTouchMove(){return!1}onTouchEnd(){}}function L(a,b,c){1>b&&(b=1);let d=.5+Math.min(b/33.34,.5);return a/b*d+c*(1-d)}function M(a,b,c,d){a.V=Date.now();let e=a.V-a.ha;if(!c&&4<e||c&&16<e){let b=L(a.D-a.ia,e,a.ma),d=L(a.F-a.ja,e,a.na);if(!c||32<e||0!=b||0!=d)a.ma=1e-4<Math.abs(b)?b:0,a.na=1e-4<Math.abs(d)?d:0;a.ia=a.D;a.ja=a.F;a.ha=a.V}a.signalEmit({first:b,last:c,time:a.V,deltaX:a.D-a.I,deltaY:a.F-a.J,startX:a.I,startY:a.J,lastX:a.D,lastY:a.F,velocityX:a.ma,velocityY:a.na},d)}class oa extends na{constructor(a,b,c,d){super(a,b);this.wa=c;this.Ea=d;this.j=!1;this.na=this.ma=this.ha=this.V=this.Aa=this.ja=this.ia=this.F=this.D=this.J=this.I=0}onTouchStart(a){a=a.touches;return this.j&&a&&1<a.length?!0:a&&1==a.length?(this.Aa=Date.now(),this.I=a[0].clientX,this.J=a[0].clientY,!0):!1}onTouchMove(a){var b=a.touches;if(b&&1<=b.length){let{clientX:c,clientY:d}=b[0];this.D=c;this.F=d;if(this.j)M(this,!1,!1,a);else if(a=Math.abs(c-this.I),b=Math.abs(d-this.J),this.wa&&this.Ea)(8<=a||8<=b)&&this.signalReady(-10);else if(this.wa){if(8<=a&&a>b)this.signalReady(-10);else if(8<=b)return!1}else if(this.Ea){if(8<=b&&b>a)this.signalReady(-10);else if(8<=a)return!1}else return!1;return!0}return!1}onTouchEnd(a){let b=a.touches;b&&0==b.length&&this.j&&(this.j=!1,M(this,!1,!0,a),this.signalEnd())}acceptStart(){this.j=!0;this.ia=this.I;this.ja=this.J;this.ha=this.Aa;this.I=this.D;this.J=this.F;M(this,!0,!1,null)}acceptCancel(){this.j=!1}}class pa extends oa{constructor(a){super("swipe-x",a,!0,!1)}}function N(a,b){let c=A(a,"timer");return c.promise(1).then(()=>c.promise(b))}let O;let P="Webkit webkit Moz moz ms O o".split(" ");function Q(a,b){for(let u in b){var c=a,d=b[u];a:{var e=c.style;var f=u;if(2>f.length?0:0==f.lastIndexOf("--",0)){e=f;break a}O||(O=Object.create(null));let a=O[f];if(!a){a=f;if(void 0===e[f]){var g=f;g=g.charAt(0).toUpperCase()+g.slice(1);b:{for(let a=0;a<P.length;a++){let b=P[a]+g;if(void 0!==e[b]){g=b;break b}}g=""}void 0!==e[g]&&(a=g)}O[f]=a}e=a}e&&((2>e.length?0:0==e.lastIndexOf("--",0))?c.style.setProperty(e,d):c.style[e]=d)}}function R(a,b){void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")}function S(a){return"horizontal"==a.O?a.B.offsetWidth:a.B.offsetHeight}function T(a,b,c){b="horizontal"==a.O?b:c;return"backward"==a.ca?-Math.min(b,0):Math.max(b,0)}function U(a,b,c=""){let d="backward"==a.ca?-b:b;return`translate(${"horizontal"==a.O?`${d}${c}`:0}, ${"horizontal"==a.O?0:`${d}${c}`})`}function V(a,b,c){let d=b.deltaX,e=b.deltaY,f=b.velocityX,g=b.velocityY;a.da(()=>{if(c)qa(a,f,g,d,e).then(()=>{ra(a)});else{var b=T(a,d,e),ka=b/S(a),xa=Math.max(0,1-ka);ra(a,U(a,b,"px"),xa)}})}function sa(a,b,c){let d=.75*c;Q(a.B,{transform:U(a,b,"px"),transition:`${d}ms transform cubic-bezier(0.15, .55, .3, 0.95)`});return N(a.oa,d)}function ta(a,b){let c=.8*b;return a.da(()=>{Q(a.B,{transform:U(a,0),transition:`${c}ms transform ease-in`});Q(a.Y,{opacity:"",transition:`${c}ms opacity ease-in`})}).then(()=>N(a.oa,c))}function ua(a,b){let c=.75*(S(a)-b);return a.da(()=>{Q(a.B,{transform:U(a,100,"%"),transition:`${c}ms transform ease-out`});Q(a.Y,{opacity:0,transition:`${c}ms opacity ease-out`})}).then(()=>N(a.oa,c)).then(()=>a.Oa())}function ra(a,b="",c=""){Q(a.B,{transform:b,transition:""});Q(a.Y,{opacity:c,transition:""})}function qa(a,b,c,d,e){let f=T(a,22.5*b+d,22.5*c+e),g=T(a,b,c),u=.5*S(a);return f<u&&.65>g?sa(a,f,g).then(()=>ta(a,f)):ua(a,f)}class va{constructor(a,b,c){this.oa=a;this.da=b;this.Oa=c;this.ca="backward";this.O="horizontal";this.Y=this.B=null}startSwipe(a){let b=a.mask,c=a.direction,d=a.orientation;this.B=a.swipeElement;this.Y=b;this.ca=c;this.O=d}swipeMove(a){V(this,a,!1)}endSwipe(a){V(this,a,!0)}}function wa(a,b){if(void 0!==D)var c=D;else{try{let a=b.ownerDocument,d=a.createElement("div"),g=a.createElement("div");d.appendChild(g);c=d.querySelector(":scope div")===g}catch(e){c=!1}c=D=c}c?c=b.querySelector(E(":scope")):(b.classList.add("i-amphtml-scoped"),c=E(".i-amphtml-scoped"),c=b.querySelectorAll(c),b.classList.remove("i-amphtml-scoped"),c=void 0===c[0]?null:c[0]);if(c){var d=(a.win.getComputedStyle(b)||Object.create(null))["overflow-y"];"scroll"!=d&&"auto"!=d?p().error("AMP-SIDEBAR","for 'autoscroll', 'nav [toolbar]' element must be set to overflow\n        'scroll' or 'auto' for 'autoscroll' to work."):B(a,"viewport").animateScrollWithinParent(c,b,"center",0)}}function ya(a){a.$?C||(C=Promise.resolve(void 0)):a.ua.mutateElement(()=>{a.A&&(R(a.A,!0),a.A.contains(a.S)||a.A.appendChild(a.S),a.w.classList.add("amp-sidebar-toolbar-target-shown"),a.w.classList.remove("amp-sidebar-toolbar-target-hidden"),a.$=!0,wa(a.ba,a.S))})}function za(a){a.$&&a.ua.mutateElement(()=>{a.A&&(R(a.A,!1),a.w.classList.add("amp-sidebar-toolbar-target-hidden"),a.w.classList.remove("amp-sidebar-toolbar-target-shown"),a.$=!1)})}class Aa{constructor(a,b){this.ua=b;this.w=a;this.ba=b.getAmpDoc();this.Ra=this.w.getAttribute("toolbar");this.S=null;this.A=void 0;this.$=!1;this.w.classList.add("amp-sidebar-toolbar-target-hidden");this.S=this.w.cloneNode(!0);a=this.w.getAttribute("toolbar-target");var c=this.w;a=p().assert(a,'"toolbar-target" is required',c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);if(c=this.ba.getElementById(a))this.A=c,this.S.classList.add("i-amphtml-toolbar"),R(this.A,!1);else throw p().createError(`Could not find the toolbar-target element with an id: ${a}`)}onLayoutChange(){this.ba.win.matchMedia(this.Ra).matches?ya(this):za(this)}}let W=[];function Ba(a){let b=[];a=Ca(a);for(let c=0;c<a.length;c++){let d=a[c];d.parentNode&&k(d.parentNode.children).filter(a=>a!=d).forEach(a=>b.push(a))}return b}function Ca(a){let b=[];for(;a;a=a.parentNode||a.host)b.push(a);return b}function Da(a){let b=[];for(;a;){a=G(a);let c=a.querySelectorAll("a[href],area[href],button,details summary,iframe,input,select,textarea,[contenteditable],[draggable],[tabindex]");Array.prototype.push.apply(b,c);a=a.host}return b}function Ea(a){W.every(b=>b.element!==a);F(a);let b=Ba(a),c=Ca(a).filter(a=>a.nodeType==Node.ELEMENT_NODE),d=Da(a),e=d.filter(b=>a.contains(b)&&void 0!==b.__AMP_MODAL_SAVED_TAB_INDEX),f=d.filter(b=>!a.contains(b)&&void 0===b.__AMP_MODAL_SAVED_TAB_INDEX),g=b.concat(c).map(a=>({element:a,prevValue:a.getAttribute("aria-hidden")}));c.forEach(a=>a.removeAttribute("aria-hidden"));b.forEach(a=>a.setAttribute("aria-hidden","true"));f.forEach(a=>{a.__AMP_MODAL_SAVED_TAB_INDEX=a.getAttribute("tabindex");a.setAttribute("tabindex","-1")});e.forEach(a=>{var b=a.__AMP_MODAL_SAVED_TAB_INDEX;null===b?a.removeAttribute("tabindex"):a.setAttribute("tabindex",b)});W.push({element:a,hiddenElementInfos:g,focusableExternalElements:f,focusableInternalElements:e})}function Fa(a){let{hiddenElementInfos:b,focusableExternalElements:c,focusableInternalElements:d}=W.pop();F(a);b.forEach(a=>{var b=a.element,c=a.prevValue;null===c?b.removeAttribute("aria-hidden"):b.setAttribute("aria-hidden",c)});d.forEach(a=>{a.setAttribute("tabindex","-1")});c.forEach(a=>{var b=a.__AMP_MODAL_SAVED_TAB_INDEX;null===b?a.removeAttribute("tabindex"):a.setAttribute("tabindex",b);a.__AMP_MODAL_SAVED_TAB_INDEX=void 0})}function X(a,b,c){if(!a.G)return!1;a.G=!1;a.L.leaveOverlayMode();let d=a.xa==a.L.getScrollTop(),e=a.element.contains(a.C.activeElement);Y(a,()=>Ga(a,b,c));b&&(R(a.element,!1),R(Z(a),!1));-1!=a.U&&(B(a.getAmpDoc(),"history").pop(a.U),a.U=-1);if(a.fa&&e&&d&&(!a.N||!B(a.element,"viewer").isEmbedded()))try{a.fa.focus()}catch(f){}return!0}function Ha(a,b){return H(a.element,"amp-story")?"left"==b?"right":"left":b}function Ia(a){if(!a.ya){var b=a.element.querySelector("amp-nested-menu");b&&(A(a.win,"extensions").installExtensionForDoc(a.getAmpDoc(),"amp-nested-menu"),a.ya=b)}}function Ja(a){a.element.addEventListener("scroll",b=>{a.G&&(1>a.element.scrollTop?(a.element.scrollTop=1,b.preventDefault()):a.element.scrollHeight==a.element.scrollTop+a.element.offsetHeight&&(--a.element.scrollTop,b.preventDefault()))})}function Ka(a){let b=a.element.querySelectorAll("[on]");for(let c=0;c<b.length;c++){let d=b[c],e=a.T.hasResolvableActionForTarget(d,"tap",a.element,d.parentElement),f=H(d,"[toolbar]");if(e&&!f)return d}return null}function La(a,b,c){a.G||(a.G=!0,a.L.enterOverlayMode(),Y(a,()=>Ma(a,b)),B(a.getAmpDoc(),"history").push(()=>{a.N?X(a,!0,b):X(a,!1,b)}).then(b=>{a.U=b}),c&&(a.fa=c,a.xa=a.L.getScrollTop()))}function Na(a,b){if(t(a.win)["amp-sidebar-swipe-to-dismiss"])la(b).onGesture(pa,b=>{b=b.data;b.first?a.la.startSwipe({swipeElement:a.element,mask:a.X,direction:"left"==a.H?"backward":"forward",orientation:"horizontal"}):b.last?a.la.endSwipe(b):a.la.swipeMove(b)})}function Y(a,b,c){a.Da=b;let d=()=>{a.Da===b&&a.mutateElement(b)};c?A(a.win,"timer").delay(d,c):d()}function Z(a){if(!a.X){let b=a.C.createElement("div");b.classList.add("i-amphtml-sidebar-mask");b.addEventListener("click",()=>{X(a,!1,3)});a.getAmpDoc().getBody().appendChild(b);b.addEventListener("touchmove",a=>{a.preventDefault()});Na(a,b);a.X=b}return a.X}function Oa(a){if(!a.pa){let b=a.C.createElement("div");Q(b,{height:"54px",width:"100%","background-color":"transparent"});a.element.appendChild(b);a.pa=!0}}function Ma(a,b){R(a.element,!0);R(Z(a),!0);a.L.addToFixedLayer(a.element,!0);a.mutateElement(()=>{Ea(a.element)});a.N&&a.Ja&&Oa(a);a.element.scrollTop=1;a.element.setAttribute("open","");Z(a).setAttribute("open","");Y(a,()=>{{let c=a.getRealChildren(),d=B(a.element,"owners");d.scheduleLayout(a.element,c);d.scheduleResume(a.element,c);if(!a.N||!B(a.element,"viewer").isEmbedded())try{a.M.focus()}catch(e){}Pa(a,"sidebarOpen",b);a.element.setAttribute("i-amphtml-sidebar-opened","");Z(a).setAttribute("i-amphtml-sidebar-opened","")}},350);wa(a.getAmpDoc(),a.element)}function Pa(a,b,c){{var d=a.win;var e=`amp-sidebar toolbar.${b}`;var f={};let c={detail:f};Object.assign(c,void 0);"function"==typeof d.CustomEvent?e=new d.CustomEvent(e,c):(d=d.document.createEvent("CustomEvent"),d.initCustomEvent(e,!!c.bubbles,!!c.cancelable,f),e=d)}a.T.trigger(a.element,b,e,c)}function Ga(a,b,c){Z(a).removeAttribute("open");Z(a).removeAttribute("i-amphtml-sidebar-opened");a.mutateElement(()=>{Fa(a.element)});a.element.removeAttribute("open");a.element.removeAttribute("i-amphtml-sidebar-opened");Y(a,()=>{R(a.element,!1);R(Z(a),!1);B(a.element,"owners").schedulePause(a.element,a.getRealChildren());Pa(a,"sidebarClose",c)},b?0:350)}class Qa extends AMP.BaseElement{constructor(a){super(a);this.X=this.Da=this.T=this.L=null;this.C=this.win.document;this.Ha=this.C.documentElement;this.H=null;this.Ca=[];let b=A(this.win,"platform");this.N=b.isIos();this.Ja=b.isSafari();this.U=-1;this.pa=!1;this.fa=this.M=null;this.xa=0;this.G=!1;this.ya=null;this.la=new va(this.win,a=>this.mutateElement(a),()=>X(this,!0,3))}buildCallback(){let a=this.element;a.classList.add("i-amphtml-overlay");a.classList.add("i-amphtml-scrollable");this.H=a.getAttribute("side");this.L=this.getViewport();this.T=v(a,"action");this.element.parentNode!=this.element.ownerDocument.body&&this.element.parentNode!=this.getAmpDoc().getBody()&&this.user().warn("amp-sidebar toolbar","amp-sidebar toolbar is recommended to be a direct child of the <body> element to preserve a logical DOM order.");"left"!=this.H&&"right"!=this.H&&(this.H=Ha(this,ea(this.C)?"right":"left"),a.setAttribute("side",this.H));Ia(this);a.addEventListener("amp:dom-update",()=>{Ia(this)});this.getAmpDoc().whenReady().then(()=>{k(a.querySelectorAll("nav[toolbar]")).forEach(a=>{try{this.Ca.push(new Aa(a,this))}catch(c){this.user().error("amp-sidebar toolbar","Failed to instantiate toolbar",c)}})});this.N&&Ja(this);a.hasAttribute("role")||a.setAttribute("role","menu");a.tabIndex=-1;this.Ha.addEventListener("keydown",a=>{"Escape"==a.key&&X(this,!1,3)&&a.preventDefault()});this.M=Ka(this);this.M||(this.M=this.createScreenReaderCloseButton(),a.insertBefore(this.M,this.element.firstChild));a.appendChild(this.createScreenReaderCloseButton());this.registerDefaultAction(a=>{La(this,a.trust,a.caller)},"open");this.registerAction("close",a=>{X(this,!1,a.trust)});this.registerAction("toggle",a=>{let b=a.trust;a=a.caller;this.G?X(this,!1,b):La(this,b,a)});this.T.addToAllowlist("amp-sidebar",["open","close","toggle"],["email"]);a.addEventListener("click",b=>{if((b=H(b.target,"A"))&&b.href){let c=v(a,"url").parse(b.href),d=this.getAmpDoc().getUrl();r(b.href)==r(d)&&c.hash&&X(this,!1,3)}},!0);Na(this,this.element)}createScreenReaderCloseButton(){let a=this.element.getAttribute("data-close-button-aria-label")||"Close the sidebar",b=this.C.createElement("button");b.textContent=a;b.classList.add("i-amphtml-screen-reader");b.tabIndex=-1;b.addEventListener("click",()=>{X(this,!1,3)});return b}onLayoutMeasure(){this.getAmpDoc().whenReady().then(()=>{this.Ca.forEach(a=>{a.onLayoutChange()})})}}(a=>{a.registerElement("amp-sidebar",Qa,"amp-sidebar{--story-page-vh:1vh;position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;transform:translateX(-100%);animation-name:i-amphtml-sidebar-slide-out-left}amp-sidebar[side=left][open]{animation-name:i-amphtml-sidebar-slide-in-left}amp-sidebar[side=right]{right:0!important;transform:translateX(100%);animation-name:i-amphtml-sidebar-slide-out-right}amp-sidebar[side=right][open]{animation-name:i-amphtml-sidebar-slide-in-right}amp-sidebar[side][i-amphtml-sidebar-opened]{transform:none;animation:none}.i-amphtml-sidebar-mask,amp-sidebar[side]{animation-duration:233ms;animation-timing-function:cubic-bezier(0,0,.21,1);animation-fill-mode:forwards}.i-amphtml-toolbar>ol,.i-amphtml-toolbar>ul{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;list-style-type:none;padding:0;margin:0}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background-image:none!important;background-color:rgba(0,0,0,0.5);animation-name:i-amphtml-sidebar-mask-fade-out;z-index:2147483646}.i-amphtml-sidebar-mask[open]{animation-name:i-amphtml-sidebar-mask-fade-in}.i-amphtml-sidebar-mask[i-amphtml-sidebar-opened]{animation:none}@keyframes i-amphtml-sidebar-slide-in-left{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-left{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes i-amphtml-sidebar-slide-in-right{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-right{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes i-amphtml-sidebar-mask-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-sidebar-mask-fade-out{0%{opacity:1}to{opacity:0}}\n/*# sourceURL=/extensions/amp-sidebar/0.1/amp-sidebar.css*/")})(self.AMP)}});