(self.AMP=self.AMP||[]).push({n:"amp-selector",v:"2007102309000",f:(function(AMP,_){
var k,m="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function n(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}n(this);"function"===typeof Symbol&&Symbol("x");var p;
if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var r={a:!0},t={};try{t.__proto__=r;q=t.a;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var u=p,v;function w(){return v?v:v=Promise.resolve(void 0)};function y(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var z=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function A(a){return a?Array.prototype.slice.call(a):[]};var B=self.AMP_CONFIG||{},aa=("string"==typeof B.cdnProxyRegex?new RegExp(B.cdnProxyRegex):B.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function C(a){if(self.document&&self.document.head&&(!self.location||!aa.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}B.cdnUrl||C("runtime-host");B.geoApiUrl||C("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var D=self.__AMP_LOG;function E(){if(!D.user)throw Error("failed to call initLogConstructor");return D.user}function F(a,b){E().assert(a,b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var ba=Object.prototype.hasOwnProperty;function G(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var e=a.AMP_CONFIG["allow-doc-opt-in"],f=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
if(f){var h=f.getAttribute("content").split(",");for(c=0;c<h.length;c++)-1!=e.indexOf(h[c])&&(b[h[c]]=!0)}}Object.assign(b,ca(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];var g=a.location.originalHash||a.location.hash;a=Object.create(null);if(g)for(var l;l=z.exec(g);){var x=y(l[1],l[1]);l=l[2]?y(l[2].replace(/\+/g," "),l[2]):"";a[x]=l}for(g=0;g<c.length;g++)x=a["e-"+c[g]],"1"==x&&(b[c[g]]=!0),"0"==
x&&(b[c[g]]=!1)}return b}function ca(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){if(D.dev)a=D.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var H=[{experimentId:"ampdoc-fie",isTrafficEligible:function(){return!0},branches:["21065001","21065002"]}];function da(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c,e;if(G(c)["ampdoc-fie"]){c.__AMP_EXPERIMENT_BRANCHES=c.__AMP_EXPERIMENT_BRANCHES||{};for(e=0;e<H.length;e++){var f=H[e],h=f.experimentId;ba.call(c.__AMP_EXPERIMENT_BRANCHES,h)||(f.isTrafficEligible&&f.isTrafficEligible(c)?!c.__AMP_EXPERIMENT_BRANCHES[h]&&G(c)[h]&&(f=f.branches,c.__AMP_EXPERIMENT_BRANCHES[h]=f[Math.floor(Math.random()*f.length)]||null):c.__AMP_EXPERIMENT_BRANCHES[h]=null)}e="21065002"===(c.__AMP_EXPERIMENT_BRANCHES?
c.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else e=!1;var g=e;d&&!g?a=I(b,"action")?J(b,"action"):null:(a=K(a),a=K(a),a=a.isSingleDoc()?a.win:a,a=I(a,"action")?J(a,"action"):null);return a}function K(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=J(b,"ampdoc").getAmpDoc(a)}return a}
function J(a,b){I(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function I(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ea(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function fa(a){return a.closest?a.closest("[option]"):ea(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"[option]"):!1})}function L(a){return"rtl"==(a.body.getAttribute("dir")||a.documentElement.getAttribute("dir")||"ltr")};function M(a,b){if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0};var ha={NONE:"none",FOCUS:"focus",SELECT:"select"};function N(a){a=AMP.BaseElement.call(this,a)||this;a.l=!1;a.j=[];a.c=[];a.A=[];a.o=null;a.h=0;a.m="none";return a}var O=AMP.BaseElement;N.prototype=m(O.prototype);N.prototype.constructor=N;if(u)u(N,O);else for(var P in O)if("prototype"!=P)if(Object.defineProperties){var Q=Object.getOwnPropertyDescriptor(O,P);Q&&Object.defineProperty(N,P,Q)}else N[P]=O[P];N.H=O.prototype;k=N.prototype;k.isLayoutSupported=function(){return!0};k.prerenderAllowed=function(){return!0};
k.buildCallback=function(){var a=this;this.o=da(this.element);this.l=this.element.hasAttribute("multiple");this.element.hasAttribute("role")||this.element.setAttribute("role","listbox");this.l&&this.element.setAttribute("aria-multiselectable","true");this.element.hasAttribute("disabled")&&this.element.setAttribute("aria-disabled","true");var b=this.element.getAttribute("keyboard-select-mode");b?(b=b.toLowerCase(),E().assertEnumValue(ha,b),F(!(this.l&&"select"==b),"[keyboard-select-mode=select] not supported for multiple selection amp-selector")):
b="none";this.m=b;this.registerAction("clear",this.w.bind(this));R(this);this.element.addEventListener("click",this.B.bind(this));this.element.addEventListener("keydown",this.C.bind(this));this.registerAction("selectUp",function(b){var c=b.args;S(a,c&&void 0!==c.delta?-c.delta:-1,b.trust)},1);this.registerAction("selectDown",function(b){var c=b.args;S(a,c&&void 0!==c.delta?c.delta:1,b.trust)},1);this.registerAction("toggle",function(b){var c=b.args;b=b.trust;F(0<=c.index,"'index' must be greater than 0");
F(c.index<a.c.length,"'index' must be less than the length of options in the <amp-selector>");return c&&void 0!==c.index?ia(a,c.index,c.value,b):Promise.reject("'index' must be specified")},1);this.o.addToAllowlist("amp-selector",["clear","selectDown","selectUp","toggle"],["email"]);this.element.addEventListener("amp:dom-update",this.D.bind(this))};
k.mutatedAttributesCallback=function(a){var b=a.selected;void 0!==b&&ja(this,b);var c=a.disabled;void 0!==c&&(c?this.element.setAttribute("aria-disabled","true"):this.element.removeAttribute("aria-disabled"))};
function ja(a,b){var c=Array.isArray(b)?b:[b];if(null===b||0==c.length)a.w();else{a.l||(c=c.slice(0,1));var d=T(a);if(!M(d.sort(),c.sort())){var e=c.reduce(function(a,b){a[b]=!0;return a},Object.create(null));for(b=0;b<a.c.length;b++){c=a.c[b];var f=c.getAttribute("option");e[f]?U(a,c):V(a,c)}W(a);X(a)}}}function W(a,b){if("none"!=a.m){a.c.forEach(function(a){a.tabIndex=-1});var c=b;c||(c=a.l?a.c[0]:a.j[0]||a.c[0]);c&&(a.h=a.c.indexOf(c),c.tabIndex=0)}}
k.D=function(){var a=A(this.element.querySelectorAll("[option]"));M(this.c,a)||R(this,a)};function R(a,b){a.j.length=0;var c=b?b:A(a.element.querySelectorAll("[option]"));c.forEach(function(b){b.hasAttribute("role")||b.setAttribute("role","option");b.hasAttribute("disabled")&&b.setAttribute("aria-disabled","true");b.hasAttribute("selected")?U(a,b):V(a,b);b.tabIndex=0});a.c=c;W(a);X(a)}
function X(a){var b=[],c=a.element.getAttribute("name");if(c&&!a.element.hasAttribute("disabled")){var d=a.element.getAttribute("form");a.A.forEach(function(b){a.element.removeChild(b)});a.A=[];var e=a.win.document,f=e.createDocumentFragment();a.j.forEach(function(h){if(!h.hasAttribute("disabled")){var g=e.createElement("input");h=h.getAttribute("option");g.setAttribute("type","hidden");g.setAttribute("name",c);g.setAttribute("value",h);d&&g.setAttribute("form",d);a.A.push(g);f.appendChild(g);b.push(h)}});
a.element.appendChild(f)}}function Y(a,b){b.hasAttribute("disabled")||a.mutateElement(function(){b.hasAttribute("selected")?a.l&&(V(a,b),X(a)):(U(a,b),X(a));W(a,b);Z(a,b,3)})}function T(a){return a.j.map(function(a){return a.getAttribute("option")})}k.B=function(a){!this.element.hasAttribute("disabled")&&(a=a.target)&&(a.hasAttribute("option")||(a=fa(a)),a&&Y(this,a))};
function ia(a,b,c,d){var e=a.c[b],f=e.hasAttribute("selected"),h=void 0!==c?c:!f,g=a.c.indexOf(a.j[0]);return h===f?w():a.mutateElement(function(){if(g!==b){U(a,e);var c=a.c[g];c&&V(a,c)}else V(a,e);Z(a,e,d)})}
function Z(a,b,c){var d=a.win;b={targetOption:b.getAttribute("option"),selectedOptions:T(a)};var e={detail:b};Object.assign(e,void 0);"function"==typeof d.CustomEvent?d=new d.CustomEvent("amp-selector.select",e):(d=d.document.createEvent("CustomEvent"),d.initCustomEvent("amp-selector.select",!!e.bubbles,!!e.cancelable,b));var f=d;2>c&&E().warn("amp-selector",'"select" event now has the same trust as the originating action. See https://github.com/ampproject/amphtml/issues/24443 for details.');a.o.trigger(a.element,
"select",f,c)}function S(a,b,c){var d=a.c.indexOf(a.j[0]);b=-1===d&&0>b?b:d+b;var e=a.c.length;b=a.c[0<b&&0<e?b%e:(b%e+e)%e];U(a,b);var f=a.c[d];f&&V(a,f);X(a);Z(a,b,c)}k.C=function(a){if(this.element.hasAttribute("disabled"))return w();switch(a.key){case "ArrowLeft":case "ArrowUp":case "ArrowRight":case "ArrowDown":case "Home":case "End":if("none"!=this.m)return ka(this,a);break;case "Enter":case " ":var b=a.key;" "!=b&&"Enter"!=b||!this.c.includes(a.target)||(a.preventDefault(),Y(this,a.target))}return w()};
function ka(a,b){var c=a.win.document,d=0;switch(b.key){case "ArrowLeft":d=L(c)?1:-1;break;case "ArrowUp":d=-1;break;case "ArrowRight":d=L(c)?-1:1;break;case "ArrowDown":d=1;break;case "Home":d=1;break;case "End":d=-1;break;default:return w()}b.preventDefault();a.c[a.h].tabIndex=-1;return la(a).then(function(c){var e=a.h;switch(b.key){case "Home":a.h=a.c.length-1;break;case "End":a.h=0}do a.h=(a.h+d)%a.c.length,0>a.h&&(a.h+=a.c.length);while(ma(a.c[a.h],c[a.h])&&a.h!=e);var h=a.c[a.h];h.tabIndex=
0;try{h.focus()}catch(l){}var g=a.c[a.h];"select"==a.m&&Y(a,g)})}function V(a,b){b.removeAttribute("selected");b.setAttribute("aria-selected","false");var c=a.j.indexOf(b);-1!==c&&a.j.splice(c,1)}k.w=function(){for(;0<this.j.length;){var a=this.j.pop();V(this,a)}X(this)};function U(a,b){a.j.includes(b)||(a.l||a.w(),b.setAttribute("selected",""),b.setAttribute("aria-selected","true"),a.j.push(b))}k.F=function(){return this.c};k.G=function(){return this.j};
function la(a){return a.measureElement(function(){return a.c.map(function(a){return a.getBoundingClientRect()})})}function ma(a,b){var c=b.width,d=b.height;return a.hidden||0==c||0==d}(function(a){a.registerElement("amp-selector",N,"amp-selector [option]{cursor:pointer}amp-selector [option][selected]{cursor:auto;outline:1px solid rgba(0,0,0,0.7)}amp-selector[multiple] [option][selected]{cursor:pointer;outline:1px solid rgba(0,0,0,0.7)}amp-selector [disabled][option],amp-selector[disabled] [option],amp-selector[disabled] [selected],amp-selector [selected][disabled]{cursor:auto;outline:none}\n/*# sourceURL=/extensions/amp-selector/0.1/amp-selector.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-selector-0.1.js.map
