(self.AMP=self.AMP||[]).push({n:"amp-sidebar",v:"2008290323002",f:function(AMP,_){function h(a,b=""){try{return decodeURIComponent(a)}catch(c){return b}}let aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function k(a){return a?Array.prototype.slice.call(a):[]}let l=self.AMP_CONFIG||{},ba=("string"==typeof l.cdnProxyRegex?new RegExp(l.cdnProxyRegex):l.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function m(a){if(self.document&&self.document.head&&(!self.location||!ba.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}l.cdnUrl||m("runtime-host");l.geoApiUrl||m("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let n=self.__AMP_LOG;function p(){if(!n.user)throw Error("failed to call initLogConstructor");return n.user}function q(a,b,c){return p().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}class r{constructor(){this.l=null}add(a){this.l||(this.l=[]);this.l.push(a);return()=>{this.remove(a)}}remove(a){this.l&&(a=this.l.indexOf(a),-1<a&&this.l.splice(a,1))}removeAll(){this.l&&(this.l.length=0)}fire(a){if(this.l){var b=this.l;for(let c=0;c<b.length;c++)(0,b[c])(a)}}getHandlerCount(){return this.l?this.l.length:0}}function t(a){let b=a.indexOf("#");return-1==b?a:a.substring(0,b)}function v(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);let b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){let d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){let d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(e){let a=e.getAttribute("content").split(",");for(c=0;c<a.length;c++)-1!=d.indexOf(a[c])&&(b[a[c]]=!0)}}Object.assign(b,ca(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];a=a.location.originalHash||a.location.hash;var d=Object.create(null);if(a)for(var e;e=aa.exec(a);){var f=h(e[1],e[1]);e=e[2]?h(e[2].replace(/\+/g," "),e[2]):"";d[f]=e}a=d;for(d=0;d<c.length;d++)f=a[`e-${c[d]}`],"1"==f&&(b[c[d]]=!0),"0"==f&&(b[c[d]]=!1)}return b}function ca(a){let b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(d){}let c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(let b=0;b<c.length;b++)0!=c[b].length&&("-"==c[b][0]?a[c[b].substr(1)]=!1:a[c[b]]=!0);return a}function w(a,b){let c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),e=c!=d,f=!!v(d)["ampdoc-fie"];e&&!f?b=x(c,b)?y(c,b):null:(a=z(a),a=A(a),b=x(a,b)?y(a,b):null);return b}function B(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return y(a,b)}function C(a,b){var c=z(a);c=A(c);return y(c,b)}function z(a){return a.nodeType?B((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function A(a){a=z(a);return a.isSingleDoc()?a.win:a}function y(a,b){x(a,b);{let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b}b=a[b];b.obj||(b.obj=new b.ctor(b.context),b.ctor=null,b.context=null,b.resolve&&b.resolve(b.obj));return b.obj}function x(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}let D;
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */let E;function F(a){return":not([toolbar]) [autoscroll]".replace(/^|,/g,`$&${a} `)}function G(a){if(void 0===a.isConnected)do{if(a=H(a),a.host)a=a.host;else break}while(1)}function H(a){if(Node.prototype.getRootNode)return a.getRootNode()||a;for(;a.parentNode&&(!a||"I-AMPHTML-SHADOW-ROOT"!=a.tagName&&(11!=a.nodeType||"[object ShadowRoot]"!==Object.prototype.toString.call(a)));a=a.parentNode);return a}function da(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function I(a,b){return a.closest?a.closest(b):da(a,a=>{{let c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;a=c?c.call(a,b):!1}return a})}function ea(a){return"rtl"==(a.body.getAttribute("dir")||a.documentElement.getAttribute("dir")||"ltr")}class fa{constructor(a,b,c){this.Ba=B(a,"timer");this.Ia=b;this.Ga=c||0;this.P=-1;this.ea=0;this.ka=!1;this.Fa=()=>{this.Y()}}isPending(){return-1!=this.P}schedule(a){let b=a||this.Ga;this.ka&&10>b&&(b=10);let c=Date.now()+b;return!this.isPending()||-10>c-this.ea?(this.cancel(),this.ea=c,this.P=this.Ba.delay(this.Fa,b),!0):!1}Y(){this.P=-1;this.ea=0;this.ka=!0;this.Ia();this.ka=!1}cancel(){this.isPending()&&(this.Ba.cancel(this.P),this.P=-1)}}function ha(a,b){for(let c=0;c<a.length;c++)if(b(a[c],c,a))return c;return-1}let J;function ia(a){if(void 0!==J)return J;J=!1;try{let b={get passive(){J=!0;return!1}};a.addEventListener("test-options",null,b);a.removeEventListener("test-options",null,b)}catch(b){}return J}class ja{constructor(a,b,c,d){this.type=a;this.data=b;this.time=c;this.event=d}}function ka(a){let b=a.__AMP_Gestures;b||(b=new ma(a,!1,!0),a.__AMP_Gestures=b);return b}function K(a,b){a.K[b]=!1;a.h[b]=0;a.m[b]||a.c[b].acceptCancel()}function L(a,b){let c=!!a.j||a.$;a.$=!1;if(!c){let b=Date.now();for(let d=0;d<a.c.length;d++)if(a.m[d]||a.h[d]&&a.h[d]>=b){c=!0;break}}c?(b.stopPropagation(),a.Pa||b.preventDefault()):a.Qa&&b.stopPropagation();a.ga&&(a.ga=!1,a.va())}class ma{constructor(a,b,c){this.o=a;this.c=[];this.K=[];this.m=[];this.h=[];this.j=null;this.Pa=b;this.Qa=c;this.$=!1;this.Y=new fa(a.ownerDocument.defaultView,this.va.bind(this));this.za=new r;this.O=Object.create(null);this.ta=this.Na.bind(this);this.ra=this.La.bind(this);this.sa=this.Ma.bind(this);this.qa=this.Ka.bind(this);let d=ia(a.ownerDocument.defaultView);this.o.addEventListener("touchstart",this.ta,d?{passive:!0}:!1);this.o.addEventListener("touchend",this.ra);this.o.addEventListener("touchmove",this.sa,d?{passive:!0}:!1);this.o.addEventListener("touchcancel",this.qa);this.ga=!1}cleanup(){this.o.removeEventListener("touchstart",this.ta);this.o.removeEventListener("touchend",this.ra);this.o.removeEventListener("touchmove",this.sa);this.o.removeEventListener("touchcancel",this.qa);delete this.o.__AMP_Gestures;this.Y.cancel()}onGesture(a,b){let c=new a(this),d=c.getType();let e=this.O[d];e||(this.c.push(c),e=new r,this.O[d]=e);return e.add(b)}removeGesture(a){let b=new a(this).getType();if(a=this.O[b]){a.removeAll();a=ha(this.c,a=>a.getType()==b);if(0>a)return!1;this.c.splice(a,1);this.m.splice(a,1);this.h.splice(a,1);this.K.splice(a,1);delete this.O[b];return!0}return!1}onPointerDown(a){return this.za.add(a)}Na(a){let b=Date.now();this.$=!1;this.za.fire(a);for(let d=0;d<this.c.length;d++)if(!this.m[d]&&(this.h[d]&&this.h[d]<b&&K(this,d),this.c[d].onTouchStart(a))){var c=d;this.K[c]=!0;this.h[c]=0}L(this,a)}Ma(a){let b=Date.now();for(let c=0;c<this.c.length;c++)this.K[c]&&(this.h[c]&&this.h[c]<b?K(this,c):this.c[c].onTouchMove(a)||K(this,c));L(this,a)}La(a){let b=Date.now();for(let c=0;c<this.c.length;c++){if(!this.K[c])continue;if(this.h[c]&&this.h[c]<b){K(this,c);continue}this.c[c].onTouchEnd(a);let d=!this.h[c],e=this.h[c]<b;this.j!=this.c[c]&&(d||e)&&K(this,c)}L(this,a)}Ka(a){for(let a=0;a<this.c.length;a++){var b=a;this.m[b]=0;K(this,b)}L(this,a)}va(){var a=Date.now();let b=-1;for(var c=0;c<this.c.length;c++)if(!this.m[c])this.h[c]&&this.h[c]<a&&K(this,c);else if(-1==b||this.m[c]>this.m[b])b=c;if(-1!=b){var d=0;for(c=0;c<this.c.length;c++)!this.m[c]&&this.K[c]&&(d=Math.max(d,this.h[c]-a));if(2>d){a=b;let d=this.c[a];for(let b=0;b<this.c.length;b++)b!=a&&(c=b,this.m[c]=0,K(this,c));this.m[a]=0;this.h[a]=0;this.j=d;d.acceptStart()}else this.Y.schedule(d)}}}class na{constructor(a,b){this.Sa=a;this.V=b}getType(){return this.Sa}signalReady(a){var b=this.V;if(b.j)this.acceptCancel();else{var c=Date.now();for(let d=0;d<b.c.length;d++)b.c[d]==this&&(b.m[d]=c+a,b.h[d]=0);b.ga=!0}}signalPending(a){var b=this.V;if(b.j)this.acceptCancel();else{var c=Date.now();for(let d=0;d<b.c.length;d++)b.c[d]==this&&(b.h[d]=c+a)}}signalEnd(){var a=this.V;a.j==this&&(a.j=null,a.$=!0)}signalEmit(a,b){{let c=this.V.O[this.getType()];c&&c.fire(new ja(this.getType(),a,Date.now(),b))}}acceptStart(){}acceptCancel(){}onTouchStart(){return!1}onTouchMove(){return!1}onTouchEnd(){}}function M(a,b,c){1>b&&(b=1);let d=.5+Math.min(b/33.34,.5);return a/b*d+c*(1-d)}function N(a,b,c,d){a.U=Date.now();let e=a.U-a.ha;if(!c&&4<e||c&&16<e){let b=M(a.D-a.ia,e,a.ma),d=M(a.F-a.ja,e,a.na);if(!c||32<e||0!=b||0!=d)a.ma=1e-4<Math.abs(b)?b:0,a.na=1e-4<Math.abs(d)?d:0;a.ia=a.D;a.ja=a.F;a.ha=a.U}a.signalEmit({first:b,last:c,time:a.U,deltaX:a.D-a.I,deltaY:a.F-a.J,startX:a.I,startY:a.J,lastX:a.D,lastY:a.F,velocityX:a.ma,velocityY:a.na},d)}class oa extends na{constructor(a,b,c,d){super(a,b);this.wa=c;this.Ea=d;this.j=!1;this.na=this.ma=this.ha=this.U=this.Aa=this.ja=this.ia=this.F=this.D=this.J=this.I=0}onTouchStart(a){a=a.touches;return this.j&&a&&1<a.length?!0:a&&1==a.length?(this.Aa=Date.now(),this.I=a[0].clientX,this.J=a[0].clientY,!0):!1}onTouchMove(a){var b=a.touches;if(b&&1<=b.length){let{clientX:c,clientY:d}=b[0];this.D=c;this.F=d;if(this.j)N(this,!1,!1,a);else if(a=Math.abs(c-this.I),b=Math.abs(d-this.J),this.wa&&this.Ea)(8<=a||8<=b)&&this.signalReady(-10);else if(this.wa){if(8<=a&&a>b)this.signalReady(-10);else if(8<=b)return!1}else if(this.Ea){if(8<=b&&b>a)this.signalReady(-10);else if(8<=a)return!1}else return!1;return!0}return!1}onTouchEnd(a){let b=a.touches;b&&0==b.length&&this.j&&(this.j=!1,N(this,!1,!0,a),this.signalEnd())}acceptStart(){this.j=!0;this.ia=this.I;this.ja=this.J;this.ha=this.Aa;this.I=this.D;this.J=this.F;N(this,!0,!1,null)}acceptCancel(){this.j=!1}}class pa extends oa{constructor(a){super("swipe-x",a,!0,!1)}}function O(a,b){let c=B(a,"timer");return c.promise(1).then(()=>c.promise(b))}let P;let Q="Webkit webkit Moz moz ms O o".split(" ");function R(a,b){for(let u in b){var c=a,d=b[u];a:{var e=c.style;var f=u;if(2>f.length?0:0==f.lastIndexOf("--",0)){e=f;break a}P||(P=Object.create(null));let a=P[f];if(!a){a=f;if(void 0===e[f]){var g=f;g=g.charAt(0).toUpperCase()+g.slice(1);b:{for(let a=0;a<Q.length;a++){let b=Q[a]+g;if(void 0!==e[b]){g=b;break b}}g=""}void 0!==e[g]&&(a=g)}P[f]=a}e=a}e&&((2>e.length?0:0==e.lastIndexOf("--",0))?c.style.setProperty(e,d):c.style[e]=d)}}function S(a,b){void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")}function T(a){return"horizontal"==a.N?a.B.offsetWidth:a.B.offsetHeight}function U(a,b,c){b="horizontal"==a.N?b:c;return"backward"==a.ca?-Math.min(b,0):Math.max(b,0)}function V(a,b,c=""){let d="backward"==a.ca?-b:b;return`translate(${"horizontal"==a.N?`${d}${c}`:0}, ${"horizontal"==a.N?0:`${d}${c}`})`}function qa(a,b,c){let d=b.deltaX,e=b.deltaY,f=b.velocityX,g=b.velocityY;a.da(()=>{if(c)ra(a,f,g,d,e).then(()=>{sa(a)});else{var b=U(a,d,e),la=b/T(a),ya=Math.max(0,1-la);sa(a,V(a,b,"px"),ya)}})}function ta(a,b,c){let d=.75*c;R(a.B,{transform:V(a,b,"px"),transition:`${d}ms transform cubic-bezier(0.15, .55, .3, 0.95)`});return O(a.oa,d)}function ua(a,b){let c=.8*b;return a.da(()=>{R(a.B,{transform:V(a,0),transition:`${c}ms transform ease-in`});R(a.X,{opacity:"",transition:`${c}ms opacity ease-in`})}).then(()=>O(a.oa,c))}function va(a,b){let c=.75*(T(a)-b);return a.da(()=>{R(a.B,{transform:V(a,100,"%"),transition:`${c}ms transform ease-out`});R(a.X,{opacity:0,transition:`${c}ms opacity ease-out`})}).then(()=>O(a.oa,c)).then(()=>a.Oa())}function sa(a,b="",c=""){R(a.B,{transform:b,transition:""});R(a.X,{opacity:c,transition:""})}function ra(a,b,c,d,e){let f=U(a,22.5*b+d,22.5*c+e),g=U(a,b,c),u=.5*T(a);return f<u&&.65>g?ta(a,f,g).then(()=>ua(a,f)):va(a,f)}class wa{constructor(a,b,c){this.oa=a;this.da=b;this.Oa=c;this.ca="backward";this.N="horizontal";this.X=this.B=null}startSwipe(a){let b=a.mask,c=a.direction,d=a.orientation;this.B=a.swipeElement;this.X=b;this.ca=c;this.N=d}swipeMove(a){qa(this,a,!1)}endSwipe(a){qa(this,a,!0)}}function xa(a,b){if(void 0!==E)var c=E;else{try{let a=b.ownerDocument,d=a.createElement("div"),g=a.createElement("div");d.appendChild(g);c=d.querySelector(":scope div")===g}catch(e){c=!1}c=E=c}c?c=b.querySelector(F(":scope")):(b.classList.add("i-amphtml-scoped"),c=F(".i-amphtml-scoped"),c=b.querySelectorAll(c),b.classList.remove("i-amphtml-scoped"),c=void 0===c[0]?null:c[0]);if(c){var d=(a.win.getComputedStyle(b)||Object.create(null))["overflow-y"];"scroll"!=d&&"auto"!=d?p().error("AMP-SIDEBAR","for 'autoscroll', 'nav [toolbar]' element must be set to overflow\n        'scroll' or 'auto' for 'autoscroll' to work."):C(a,"viewport").animateScrollWithinParent(c,b,"center",0)}}function za(a){a.Z?D||(D=Promise.resolve(void 0)):a.ua.mutateElement(()=>{a.A&&(S(a.A,!0),a.A.contains(a.R)||a.A.appendChild(a.R),a.w.classList.add("amp-sidebar-toolbar-target-shown"),a.w.classList.remove("amp-sidebar-toolbar-target-hidden"),a.Z=!0,xa(a.ba,a.R))})}function Aa(a){a.Z&&a.ua.mutateElement(()=>{a.A&&(S(a.A,!1),a.w.classList.add("amp-sidebar-toolbar-target-hidden"),a.w.classList.remove("amp-sidebar-toolbar-target-shown"),a.Z=!1)})}class Ba{constructor(a,b){this.ua=b;this.w=a;this.ba=b.getAmpDoc();this.Ra=this.w.getAttribute("toolbar");this.R=null;this.A=void 0;this.Z=!1;this.w.classList.add("amp-sidebar-toolbar-target-hidden");{this.R=this.w.cloneNode(!0);a=q(this.w.getAttribute("toolbar-target"),'"toolbar-target" is required',this.w);let b=this.ba.getElementById(a);if(b)this.A=b,this.R.classList.add("i-amphtml-toolbar"),S(this.A,!1);else throw p().createError(`Could not find the toolbar-target element with an id: ${a}`)}}onLayoutChange(){this.ba.win.matchMedia(this.Ra).matches?za(this):Aa(this)}}let W=[];function Ca(a){let b=[];a=Da(a);for(let c=0;c<a.length;c++){let d=a[c];d.parentNode&&k(d.parentNode.children).filter(a=>a!=d).forEach(a=>b.push(a))}return b}function Da(a){let b=[];for(;a;a=a.parentNode||a.host)b.push(a);return b}function Ea(a){let b=[];for(;a;){a=H(a);let c=a.querySelectorAll("a[href],area[href],button,details summary,iframe,input,select,textarea,[contenteditable],[draggable],[tabindex]");Array.prototype.push.apply(b,c);a=a.host}return b}function Fa(a){W.every(b=>b.element!==a);G(a);let b=Ca(a),c=Da(a).filter(a=>a.nodeType==Node.ELEMENT_NODE),d=Ea(a),e=d.filter(b=>a.contains(b)&&void 0!==b.__AMP_MODAL_SAVED_TAB_INDEX),f=d.filter(b=>!a.contains(b)&&void 0===b.__AMP_MODAL_SAVED_TAB_INDEX),g=b.concat(c).map(a=>({element:a,prevValue:a.getAttribute("aria-hidden")}));c.forEach(a=>a.removeAttribute("aria-hidden"));b.forEach(a=>a.setAttribute("aria-hidden","true"));f.forEach(a=>{a.__AMP_MODAL_SAVED_TAB_INDEX=a.getAttribute("tabindex");a.setAttribute("tabindex","-1")});e.forEach(a=>{var b=a.__AMP_MODAL_SAVED_TAB_INDEX;null===b?a.removeAttribute("tabindex"):a.setAttribute("tabindex",b)});W.push({element:a,hiddenElementInfos:g,focusableExternalElements:f,focusableInternalElements:e})}function Ga(a){let{hiddenElementInfos:b,focusableExternalElements:c,focusableInternalElements:d}=W.pop();G(a);b.forEach(a=>{var b=a.element,c=a.prevValue;null===c?b.removeAttribute("aria-hidden"):b.setAttribute("aria-hidden",c)});d.forEach(a=>{a.setAttribute("tabindex","-1")});c.forEach(a=>{var b=a.__AMP_MODAL_SAVED_TAB_INDEX;null===b?a.removeAttribute("tabindex"):a.setAttribute("tabindex",b);a.__AMP_MODAL_SAVED_TAB_INDEX=void 0})}function X(a,b,c){if(!a.G)return!1;a.G=!1;a.L.leaveOverlayMode();let d=a.xa==a.L.getScrollTop(),e=a.element.contains(a.C.activeElement);Y(a,()=>Ha(a,b,c));b&&(S(a.element,!1),S(Z(a),!1));if(a.fa&&e&&d&&(!a.T||!C(a.element,"viewer").isEmbedded()))try{a.fa.focus()}catch(f){}return!0}function Ia(a,b){return I(a.element,"amp-story")?"left"==b?"right":"left":b}function Ja(a){if(!a.ya){var b=a.element.querySelector("amp-nested-menu");b&&(B(a.win,"extensions").installExtensionForDoc(a.getAmpDoc(),"amp-nested-menu"),a.ya=b)}}function Ka(a){a.element.addEventListener("scroll",b=>{a.G&&(1>a.element.scrollTop?(a.element.scrollTop=1,b.preventDefault()):a.element.scrollHeight==a.element.scrollTop+a.element.offsetHeight&&(--a.element.scrollTop,b.preventDefault()))})}function La(a){let b=a.element.querySelectorAll("[on]");for(let c=0;c<b.length;c++){let d=b[c],e=a.aa.hasResolvableActionForTarget(d,"tap",a.element,d.parentElement),f=I(d,"[toolbar]");if(e&&!f)return d}return null}function Ma(a,b,c){a.G||(a.G=!0,a.L.enterOverlayMode(),Y(a,()=>Na(a,b)),C(a.getAmpDoc(),"history").push(()=>X(a,!1,b)).then(b=>{a.S=b}),c&&(a.fa=c,a.xa=a.L.getScrollTop()))}function Oa(a,b){if(v(a.win)["amp-sidebar-swipe-to-dismiss"])ka(b).onGesture(pa,b=>{b=b.data;b.first?a.la.startSwipe({swipeElement:a.element,mask:a.W,direction:"left"==a.H?"backward":"forward",orientation:"horizontal"}):b.last?a.la.endSwipe(b):a.la.swipeMove(b)})}function Y(a,b,c){a.Da=b;let d=()=>{a.Da===b&&a.mutateElement(b)};c?B(a.win,"timer").delay(d,c):d()}function Z(a){if(!a.W){let b=a.C.createElement("div");b.classList.add("i-amphtml-sidebar-mask");b.addEventListener("click",()=>{X(a,!1,3)});a.getAmpDoc().getBody().appendChild(b);b.addEventListener("touchmove",a=>{a.preventDefault()});Oa(a,b);a.W=b}return a.W}function Pa(a){if(!a.pa){let b=a.C.createElement("div");R(b,{height:"54px",width:"100%","background-color":"transparent"});a.element.appendChild(b);a.pa=!0}}function Na(a,b){S(a.element,!0);S(Z(a),!0);a.L.addToFixedLayer(a.element,!0);a.mutateElement(()=>{Fa(a.element);a.element.setAttribute("aria-modal","true")});a.T&&a.Ja&&Pa(a);a.element.scrollTop=1;a.element.setAttribute("open","");Z(a).setAttribute("open","");Y(a,()=>{{let c=a.getRealChildren(),d=C(a.element,"owners");d.scheduleLayout(a.element,c);d.scheduleResume(a.element,c);if(!a.T||!C(a.element,"viewer").isEmbedded())try{a.M.focus()}catch(e){}Qa(a,"sidebarOpen",b);a.element.setAttribute("i-amphtml-sidebar-opened","");Z(a).setAttribute("i-amphtml-sidebar-opened","")}},350);xa(a.getAmpDoc(),a.element)}function Qa(a,b,c){{var d=a.win;var e=`amp-sidebar toolbar.${b}`;var f={};let c={detail:f};Object.assign(c,void 0);"function"==typeof d.CustomEvent?e=new d.CustomEvent(e,c):(d=d.document.createEvent("CustomEvent"),d.initCustomEvent(e,!!c.bubbles,!!c.cancelable,f),e=d)}a.aa.trigger(a.element,b,e,c)}function Ha(a,b,c){Z(a).removeAttribute("open");Z(a).removeAttribute("i-amphtml-sidebar-opened");a.mutateElement(()=>{Ga(a.element);a.element.setAttribute("aria-modal","false")});a.element.removeAttribute("open");a.element.removeAttribute("i-amphtml-sidebar-opened");Y(a,()=>{S(a.element,!1);S(Z(a),!1);C(a.element,"owners").schedulePause(a.element,a.getRealChildren());-1!=a.S&&(C(a.getAmpDoc(),"history").pop(a.S),a.S=-1);Qa(a,"sidebarClose",c)},b?0:350)}class Ra extends AMP.BaseElement{constructor(a){super(a);this.W=this.Da=this.aa=this.L=null;this.C=this.win.document;this.Ha=this.C.documentElement;this.H=null;this.Ca=[];let b=B(this.win,"platform");this.T=b.isIos();this.Ja=b.isSafari();this.S=-1;this.pa=!1;this.fa=this.M=null;this.xa=0;this.G=!1;this.ya=null;this.la=new wa(this.win,a=>this.mutateElement(a),()=>X(this,!0,3))}prerenderAllowed(){return!0}buildCallback(){q(!!v(this.win)["amp-sidebar-v2"],"Turning on the amp-sidebar-v2 experiment is necessary to use the new sidebar component.");let a=this.element;a.classList.add("i-amphtml-overlay");a.classList.add("i-amphtml-scrollable");this.H=a.getAttribute("side");this.L=this.getViewport();this.aa=w(a,"action");this.element.parentNode!=this.element.ownerDocument.body&&this.element.parentNode!=this.getAmpDoc().getBody()&&this.user().warn("amp-sidebar toolbar","amp-sidebar toolbar is recommended to be a direct child of the <body> element to preserve a logical DOM order.");"left"!=this.H&&"right"!=this.H&&(this.H=Ia(this,ea(this.C)?"right":"left"),a.setAttribute("side",this.H));this.getAmpDoc().whenReady().then(()=>{k(a.querySelectorAll("nav[toolbar]")).forEach(a=>{try{this.Ca.push(new Ba(a,this))}catch(c){this.user().error("amp-sidebar toolbar","Failed to instantiate toolbar",c)}})});Ja(this);a.addEventListener("amp:dom-update",()=>{Ja(this)});this.T&&Ka(this);a.hasAttribute("role")||a.setAttribute("role","dialog");a.setAttribute("aria-modal","false");a.tabIndex=-1;this.Ha.addEventListener("keydown",a=>{"Escape"==a.key&&X(this,!1,3)&&a.preventDefault()});this.M=La(this);this.M||(this.M=this.createScreenReaderCloseButton(),a.insertBefore(this.M,this.element.firstChild));a.appendChild(this.createScreenReaderCloseButton());this.registerDefaultAction(a=>{Ma(this,a.trust,a.caller)},"open");this.registerAction("close",a=>{X(this,!1,a.trust)});this.registerAction("toggle",a=>{let b=a.trust;a=a.caller;this.G?X(this,!1,b):Ma(this,b,a)});a.addEventListener("click",b=>{if((b=I(b.target,"A"))&&b.href){let c=w(a,"url").parse(b.href),d=this.getAmpDoc().getUrl();t(b.href)==t(d)&&c.hash&&X(this,!1,3)}},!0);Oa(this,this.element)}createScreenReaderCloseButton(){let a=this.element.getAttribute("data-close-button-aria-label")||"Close the sidebar",b=this.C.createElement("button");b.textContent=a;b.classList.add("i-amphtml-screen-reader");b.tabIndex=-1;b.addEventListener("click",()=>{X(this,!1,3)});return b}onLayoutMeasure(){this.getAmpDoc().whenReady().then(()=>{this.Ca.forEach(a=>{a.onLayoutChange()})})}}(a=>{a.registerElement("amp-sidebar",Ra,"amp-sidebar{--story-page-vh:1vh;position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;transform:translateX(-100%);animation-name:i-amphtml-sidebar-slide-out-left}amp-sidebar[side=left][open]{animation-name:i-amphtml-sidebar-slide-in-left}amp-sidebar[side=right]{right:0!important;transform:translateX(100%);animation-name:i-amphtml-sidebar-slide-out-right}amp-sidebar[side=right][open]{animation-name:i-amphtml-sidebar-slide-in-right}amp-sidebar[side][i-amphtml-sidebar-opened]{transform:none;animation:none}.i-amphtml-sidebar-mask,amp-sidebar[side]{animation-duration:233ms;animation-timing-function:cubic-bezier(0,0,.21,1);animation-fill-mode:forwards}.i-amphtml-toolbar>ol,.i-amphtml-toolbar>ul{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;list-style-type:none;padding:0;margin:0}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background-image:none!important;background-color:rgba(0,0,0,0.5);animation-name:i-amphtml-sidebar-mask-fade-out;z-index:2147483646}.i-amphtml-sidebar-mask[open]{animation-name:i-amphtml-sidebar-mask-fade-in}.i-amphtml-sidebar-mask[i-amphtml-sidebar-opened]{animation:none}@keyframes i-amphtml-sidebar-slide-in-left{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-left{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes i-amphtml-sidebar-slide-in-right{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-right{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes i-amphtml-sidebar-mask-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-sidebar-mask-fade-out{0%{opacity:1}to{opacity:0}}\n/*# sourceURL=/extensions/amp-sidebar/0.2/amp-sidebar.css*/")})(self.AMP)}});