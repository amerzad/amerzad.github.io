(self.AMP=self.AMP||[]).push({n:"amp-action-macro",v:"2008290323002",f:(function(AMP,_){
'use strict';var e="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function k(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}k(this);"function"===typeof Symbol&&Symbol("x");var l;
if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var n;a:{var p={a:!0},r={};try{r.__proto__=p;n=r.a;break a}catch(a){}n=!1}l=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=l;function u(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var w=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var x=self.AMP_CONFIG||{},y=("string"==typeof x.cdnProxyRegex?new RegExp(x.cdnProxyRegex):x.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function z(a){if(self.document&&self.document.head&&(!self.location||!y.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}x.cdnUrl||z("runtime-host");x.geoApiUrl||z("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var A=self.__AMP_LOG;function B(a,b,c,d){if(!A.user)throw Error("failed to call initLogConstructor");A.user.assert(a,b,c,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0});function C(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var h=a.AMP_CONFIG["allow-doc-opt-in"],m=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
if(m){var v=m.getAttribute("content").split(",");for(c=0;c<v.length;c++)-1!=h.indexOf(v[c])&&(b[v[c]]=!0)}}Object.assign(b,D(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];var f=a.location.originalHash||a.location.hash;a=Object.create(null);if(f)for(var g;g=w.exec(f);){var q=u(g[1],g[1]);g=g[2]?u(g[2].replace(/\+/g," "),g[2]):"";a[q]=g}for(f=0;f<c.length;f++)q=a["e-"+c[f]],"1"==q&&(b[c[f]]=!0),"0"==
q&&(b[c[f]]=!1)}return b}function D(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(h){if(A.dev)a=A.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function E(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c,h=!!C(c)["ampdoc-fie"];d&&!h?a=F(b,"action")?G(b,"action"):null:(a=H(a),a=H(a),a=a.isSingleDoc()?a.win:a,a=F(a,"action")?G(a,"action"):null);return a}function H(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=G(b,"ampdoc").getAmpDoc(a)}return a}
function G(a,b){F(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function F(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function I(a){a=AMP.BaseElement.call(this,a)||this;a.j=null;a.h=[];return a}var J=AMP.BaseElement;I.prototype=e(J.prototype);I.prototype.constructor=I;if(t)t(I,J);else for(var K in J)if("prototype"!=K)if(Object.defineProperties){var L=Object.getOwnPropertyDescriptor(J,K);L&&Object.defineProperty(I,K,L)}else I[K]=J[K];I.m=J.prototype;
I.prototype.buildCallback=function(){B(!!C(this.win)["amp-action-macro"],"Experiment is off");var a=this.element;this.j=E(a);var b=a.getAttribute("arguments");b&&(this.h=b.split(",").map(function(a){return a.trim()}));this.registerAction("execute",this.l.bind(this))};I.prototype.getLayoutPriority=function(){return 1};
I.prototype.l=function(a){var b=a.actionEventType,c=a.args,d=a.event,h=a.trust;if(c&&0<this.h.length)for(var m in c)B(this.h.includes(m),'Variable argument name "%s" is not defined in %s',m,this.element);"amp-action-macro"===a.caller.tagName.toLowerCase()&&B(!!(this.element.compareDocumentPosition(a.caller)&Node.DOCUMENT_POSITION_FOLLOWING),'Action macro with ID "%s" cannot reference itself or macros defined after it',this.element.getAttribute("id"));this.j.trigger(this.element,""+b,d,h,c)};
I.prototype.renderOutsideViewport=function(){return!0};I.prototype.isLayoutSupported=function(){return!0};(function(a){a.registerElement("amp-action-macro",I)})(self.AMP);
})});

//# sourceMappingURL=amp-action-macro-0.1.js.map
