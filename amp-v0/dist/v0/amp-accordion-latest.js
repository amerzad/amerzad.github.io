(self.AMP=self.AMP||[]).push({n:"amp-accordion",v:"2008290323002",f:(function(AMP,_){
'use strict';var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var l;
if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var ca={a:!0},n={};try{n.__proto__=ca;m=n.a;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var p=l;function q(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var da=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var r=self.AMP_CONFIG||{},ea=("string"==typeof r.cdnProxyRegex?new RegExp(r.cdnProxyRegex):r.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function t(a){if(self.document&&self.document.head&&(!self.location||!ea.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}r.cdnUrl||t("runtime-host");r.geoApiUrl||t("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var u=self.__AMP_LOG;function v(){if(!u.user)throw Error("failed to call initLogConstructor");return u.user}function w(){if(u.dev)return u.dev;throw Error("failed to call initLogConstructor");}function x(a,b,c){v().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function fa(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function y(a){return 2>a.length?!1:0==a.lastIndexOf("--",0)};function z(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var e=a.AMP_CONFIG["allow-doc-opt-in"],f=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
if(f){var g=f.getAttribute("content").split(",");for(c=0;c<g.length;c++)-1!=e.indexOf(g[c])&&(b[g[c]]=!0)}}Object.assign(b,ha(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];var h=a.location.originalHash||a.location.hash;a=Object.create(null);if(h)for(var k;k=da.exec(h);){var C=q(k[1],k[1]);k=k[2]?q(k[2].replace(/\+/g," "),k[2]):"";a[C]=k}for(h=0;h<c.length;h++)C=a["e-"+c[h]],"1"==C&&(b[c[h]]=!0),"0"==
C&&(b[c[h]]=!1)}return b}function ha(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){w().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function ia(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c,e=!!z(c)["ampdoc-fie"];d&&!e?a=A(b,"action")?B(b,"action"):null:(a=D(a),a=D(a),a=a.isSingleDoc()?a.win:a,a=A(a,"action")?B(a,"action"):null);return a}function E(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return B(a,b)}function D(a){return a.nodeType?E((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}
function B(a,b){A(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function A(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ja(a,b,c){for(;a&&a!==c;a=a.parentElement)if(b(a))return a;return null};function F(a,b,c,d){var e=new G(a,b,c,d);return e.solveYValueFromXValue.bind(e)}function G(a,b,c,d){this.y0=this.x0=0;this.x1=a;this.y1=b;this.x2=c;this.y2=d;this.y3=this.x3=1}G.prototype.solveYValueFromXValue=function(a){return this.getPointY(this.solvePositionFromXValue(a))};
G.prototype.solvePositionFromXValue=function(a){var b=(a-this.x0)/(this.x3-this.x0);if(0>=b)return 0;if(1<=b)return 1;for(var c=0,d=1,e=0,f=0;8>f;f++){e=this.getPointX(b);var g=(this.getPointX(b+1E-6)-e)/1E-6;if(1E-6>Math.abs(e-a))return b;if(1E-6>Math.abs(g))break;else e<a?c=b:d=b,b-=(e-a)/g}for(f=0;1E-6<Math.abs(e-a)&&8>f;f++)e<a?(c=b,b=(b+d)/2):(d=b,b=(b+c)/2),e=this.getPointX(b);return b};
G.prototype.getPointX=function(a){if(0==a)return this.x0;if(1==a)return this.x3;var b=this.lerp(this.x0,this.x1,a),c=this.lerp(this.x1,this.x2,a),d=this.lerp(this.x2,this.x3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};G.prototype.getPointY=function(a){if(0==a)return this.y0;if(1==a)return this.y3;var b=this.lerp(this.y0,this.y1,a),c=this.lerp(this.y1,this.y2,a),d=this.lerp(this.y2,this.y3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};
G.prototype.lerp=function(a,b,c){return a+c*(b-a)};var ka=F(.25,.1,.25,1),la=F(.42,0,1,1),ma=F(0,0,.58,1),na=F(.42,0,.58,1),oa={linear:function(a){return a},ease:ka,"ease-in":la,"ease-out":ma,"ease-in-out":na};
function H(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return F(b[0],b[1],b[2],b[3])}return null}return oa[a]}return a};function pa(){}function I(a){this.l=a;this.w=E(self,"vsync");this.D=null;this.c=[]}function qa(a,b,c){var d=ra;return(new I(a)).setCurve(d).add(0,b,1).start(c)}I.prototype.setCurve=function(a){a&&(this.D=H(a));return this};I.prototype.add=function(a,b,c,d){this.c.push({delay:a,func:b,duration:c,curve:H(d)});return this};I.prototype.start=function(a){return new J(this.w,this.l,this.c,this.D,a)};
function J(a,b,c,d,e){this.w=a;this.l=b;this.c=[];for(b=0;b<c.length;b++){var f=c[b];this.c.push({delay:f.delay,func:f.func,duration:f.duration,curve:f.curve||d,started:!1,completed:!1})}this.J=e;this.O=Date.now();this.A=!0;this.G={};c=new fa;this.F=c.promise;this.N=c.resolve;this.M=c.reject;this.H=this.w.createAnimTask(this.l,{mutate:this.P.bind(this)});this.w.canAnimate(this.l)?this.H(this.G):(w().warn("Animation","cannot animate"),K(this,!1,0))}
J.prototype.then=function(a,b){return a||b?this.F.then(a,b):this.F};J.prototype.thenAlways=function(a){a=a||pa;return this.then(a,a)};J.prototype.halt=function(a){K(this,!1,a||0)};function K(a,b,c){if(a.A){a.A=!1;if(0!=c){1<a.c.length&&a.c.sort(function(a,b){return a.delay+a.duration-(b.delay+b.duration)});try{if(0<c)for(c=0;c<a.c.length;c++)a.c[c].func(1,!0);else for(var d=a.c.length-1;0<=d;d--)a.c[d].func(0,!1)}catch(e){w().error("Animation","completion failed: "+e,e),b=!1}}b?a.N():a.M()}}
J.prototype.P=function(){if(this.A){for(var a=Date.now(),b=Math.min((a-this.O)/this.J,1),c=0;c<this.c.length;c++){var d=this.c[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.c.length;c++)if(d=this.c[c],d.started&&!d.completed)a:{var e;if(0<d.duration){var f=e=Math.min((b-d.delay)/d.duration,1);if(d.curve&&1!=f)try{f=d.curve(e)}catch(g){w().error("Animation","step curve failed: "+g,g);K(this,!1,0);break a}}else f=e=1;1==e&&(d.completed=!0);try{d.func(f,d.completed)}catch(g){w().error("Animation",
"step mutate failed: "+g,g),K(this,!1,0)}}1==b?K(this,!0,0):this.w.canAnimate(this.l)?this.H(this.G):(w().warn("Animation","cancel animation"),K(this,!1,0))}};var L,M="Webkit webkit Moz moz ms O o".split(" ");function N(a,b,c){if(y(b))return b;L||(L=Object.create(null));var d=L[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<M.length;f++){var g=M[f]+e;if(void 0!==a[g]){e=g;break a}}e=""}var h=e;void 0!==a[h]&&(d=h)}c||(L[b]=d)}return d}function O(a,b,c){(b=N(a.style,b,void 0))&&(y(b)?a.style.setProperty(b,c):a.style[b]=c)}function P(a,b){for(var c in b)O(a,c,b[c])};function Q(a,b){return function(c,d){for(var e in b){var f=e;"display"===f&&w().error("STYLE","`display` style detected. You must use toggle instead.");O(a,f,b[e](c,d))}}}function R(a,b){return function(c){return a+(b-a)*c}}function S(a){return function(b){return a(b)+"px"}};var sa=F(.47,0,.745,.715),ra=F(.39,.575,.565,1);function T(a){var b=AMP.BaseElement.call(this,a)||this;b.o=[];b.B=null;b.m=null;b.C=!1;b.j=null;b.h=null;b.L=a.id?a.id:Math.floor(100*Math.random());return b}var U=AMP.BaseElement;T.prototype=aa(U.prototype);T.prototype.constructor=T;if(p)p(T,U);else for(var V in U)if("prototype"!=V)if(Object.defineProperties){var W=Object.getOwnPropertyDescriptor(U,V);W&&Object.defineProperty(T,V,W)}else T[V]=U[V];T.S=U.prototype;
T.prototype.isLayoutSupported=function(a){return"container"==a};T.prototype.prerenderAllowed=function(){return!0};
T.prototype.buildCallback=function(){var a=this;this.h=ia(this.element);this.C=this.element.hasAttribute("disable-session-states");this.B=ta(this);this.m=ua(this);this.j=this.getRealChildren();this.j.forEach(function(b,c){x("section"==b.tagName.toLowerCase(),"Sections should be enclosed in a <section> tag, See https://github.com/ampproject/amphtml/blob/master/extensions/amp-accordion/amp-accordion.md. Found in: %s",a.element);var d=b.children;x(2==d.length,"Each section must have exactly two children. See https://github.com/ampproject/amphtml/blob/master/extensions/amp-accordion/amp-accordion.md. Found in: %s",
a.element);var e=d[1];e.classList.add("i-amphtml-accordion-content");var f=e.getAttribute("id");f||(f=a.L+"_AMP_content_"+c,e.setAttribute("id",f));a.registerAction("toggle",function(b){return X(a,b)});a.registerAction("expand",function(b){return X(a,b)});a.registerAction("collapse",function(b){return X(a,b)});a.h.addToAllowlist("amp-accordion",["toggle","expand","collapse"],["email"]);(new a.win.MutationObserver(function(b){va(a,b)})).observe(b,{attributes:!0,attributeFilter:["data-expand"]});a.m[f]?
b.setAttribute("expanded",""):!1===a.m[f]&&b.removeAttribute("expanded");a.mutateElement(function(){});var g=b.hasAttribute("expanded");c=d[0];c.classList.add("i-amphtml-accordion-header");c.setAttribute("role","button");c.setAttribute("aria-controls",f);c.setAttribute("aria-expanded",String(g));c.hasAttribute("tabindex")||c.setAttribute("tabindex",0);a.o.push(c);x(0==a.h.hasAction(c,"tap",b),"amp-accordion headings should not have tap actions registered.");c.addEventListener("click",a.I.bind(a));
c.addEventListener("keydown",a.K.bind(a));z(a.win)["amp-accordion-display-locking"]&&"CSS"in window&&window.CSS.supports&&window.CSS.supports("content-visibility","hidden-matchable")&&(a.element.classList.add("i-amphtml-display-locking"),e.addEventListener("beforematch",function(){Y(a,b,3,!0)}))})};
function X(a,b){var c=b.method,d=b.args,e=b.trust,f=void 0;"expand"===c?f=!0:"collapse"===c&&(f=!1);if(d){var g=d.section,h=a.getAmpDoc().getElementById(g);h=v().assertElement(h);x(h,"No element found with id: %s",g);Y(a,h,e,f)}else for(c=0;c<a.j.length;c++)Y(a,a.j[c],e,f)}function ta(a){var b=a.element.id||a.element.getResourceId();a=a.win.location.href;var c=a.indexOf("#");a=-1==c?a:a.substring(0,c);return"amp-"+b+"-"+a}
function ua(a){if(a.C)return{};try{var b=a.win.sessionStorage.getItem(a.B);return b?JSON.parse(b):{}}catch(c){return w().fine("AMP-ACCORDION","Error setting session state: %s, %s",c.message,c.stack),{}}}function wa(a){if(!a.C){var b=JSON.stringify(a.m);try{a.win.sessionStorage.setItem(a.B,b)}catch(c){w().fine("AMP-ACCORDION","Error setting session state: %s, %s",c.message,c.stack)}}}
function Z(a,b,c,d){var e=a.win;var f="accordionSection."+b;var g={};var h={detail:g};Object.assign(h,void 0);"function"==typeof e.CustomEvent?f=new e.CustomEvent(f,h):(e=e.document.createEvent("CustomEvent"),e.initCustomEvent(f,!!h.bubbles,!!h.cancelable,g),f=e);a.h.trigger(c,b,f,d);a.element.dispatchCustomEvent(b)}
function Y(a,b,c,d){var e=b.children,f=e[0];e=e[1].getAttribute("id");var g=b.hasAttribute("expanded"),h=void 0==d?!b.hasAttribute("expanded"):d;h&&b.hasAttribute("expanded")||!h&&!b.hasAttribute("expanded")||(a.element.hasAttribute("animate")?h?(f.setAttribute("aria-expanded","true"),xa(a,b,c),a.element.hasAttribute("expand-single-section")&&a.j.forEach(function(d){d!=b&&(ya(a,d,c),d.children[0].setAttribute("aria-expanded","false"))})):(f.setAttribute("aria-expanded","false"),ya(a,b,c)):a.mutateElement(function(){h?
(Z(a,"expand",b,c),b.setAttribute("expanded",""),f.setAttribute("aria-expanded","true"),a.element.hasAttribute("expand-single-section")&&a.j.forEach(function(d){d!=b&&(d.hasAttribute("expanded")&&(Z(a,"collapse",d,c),d.removeAttribute("expanded")),d.children[0].setAttribute("aria-expanded","false"))})):(Z(a,"collapse",b,c),b.removeAttribute("expanded"),f.setAttribute("aria-expanded","false"))},b),a.m[e]=!g,wa(a))}
function xa(a,b,c){var d,e,f,g,h,k=b.children[1];a.measureMutateElement(function(){d=b.offsetWidth;var a=N(k.style,"width",void 0);h=a?y(a)?k.style.getPropertyValue(a):k.style[a]:void 0},function(){var a={position:"fixed",width:d+"px",opacity:"0"},c=k.style,e;for(e in a)c.setProperty(N(c,e),a[e].toString(),"important");b.hasAttribute("expanded")||b.setAttribute("expanded","")}).then(function(){return a.measureMutateElement(function(){e=b.offsetHeight;f=k.offsetHeight;var c=a.getViewport().getHeight();
g=za(Math.abs(f),c)},function(){P(b,{overflow:"hidden",height:e+"px"});P(k,{position:"",opacity:"",width:h})})}).then(function(){var d=new I(a.element);d.setCurve(sa);d.add(0,Q(b,{height:S(R(e,e+f))}),1);d.add(0,Q(k,{opacity:R(0,1)}),1);return d.start(g).thenAlways(function(){a.mutateElement(function(){Z(a,"expand",b,c);P(b,{overflow:"",height:""});P(k,{opacity:""})})})})}
function ya(a,b,c){var d,e,f,g=b.firstElementChild;a.measureMutateElement(function(){d=b.offsetHeight;e=g.offsetHeight;var c=a.getViewport().getSize().height;f=za(Math.abs(d),c)},function(){P(b,{overflow:"hidden"})}).then(function(){return qa(b,Q(b,{height:S(R(d,e))}),f).thenAlways(function(){return a.mutateElement(function(){b.hasAttribute("expanded")&&(Z(a,"collapse",b,c),b.removeAttribute("expanded"));P(b,{height:"",overflow:""})})})})}
function za(a,b){var c=void 0===c?200:c;var d=void 0===d?500:d;return Math.min(Math.max(Math.abs(a)/b*d,c),d)}T.prototype.I=function(a){Aa(this,a)&&(a.preventDefault(),Y(this,a.currentTarget.parentElement,3))};function Aa(a,b){var c=b.target;b=b.currentTarget;var d=!!ja(c,function(a){return"A"==a.tagName},b),e=a.h.hasAction(c,"tap",b);return!d&&!e}
T.prototype.K=function(a){if(!a.defaultPrevented)switch(a.key){case "ArrowUp":case "ArrowDown":var b=this.o.indexOf(a.currentTarget);if(-1!==b){a.preventDefault();a=(b+("ArrowUp"==a.key?-1:1))%this.o.length;0>a&&(a+=this.o.length);try{this.o[a].focus()}catch(c){}}break;case "Enter":case " ":a.target==a.currentTarget&&(a.preventDefault(),Y(this,a.currentTarget.parentElement,3))}};
function va(a,b){b.forEach(function(b){var c=b.target,e=c.hasAttribute("data-expand");c.hasAttribute("expanded")!==e&&Y(a,c,2,e)})}T.prototype.R=function(){return this.h};(function(a){a.registerElement("amp-accordion",T,".i-amphtml-accordion-content,.i-amphtml-accordion-header{margin:0}.i-amphtml-accordion-header{cursor:pointer;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}amp-accordion.i-amphtml-display-locking>section:not([expanded])>:last-child,amp-accordion.i-amphtml-display-locking>section:not([expanded])>:last-child *{content-visibility:hidden-matchable!important;display:block!important}amp-accordion>section:not([expanded]) .i-amphtml-media-component,amp-accordion>section:not([expanded]) .i-amphtml-media-component *{display:none!important;visibility:hidden!important}\n/*# sourceURL=/extensions/amp-accordion/0.1/amp-accordion.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-accordion-0.1.js.map
