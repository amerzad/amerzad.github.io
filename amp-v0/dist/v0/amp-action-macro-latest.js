(self.AMP=self.AMP||[]).push({n:"amp-action-macro",v:"2007102309000",f:(function(AMP,_){
var f="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function m(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}m(this);"function"===typeof Symbol&&Symbol("x");var n;
if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var p;a:{var q={a:!0},t={};try{t.__proto__=q;p=t.a;break a}catch(a){}p=!1}n=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var u=n;function v(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var w=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var x=self.AMP_CONFIG||{},y=("string"==typeof x.cdnProxyRegex?new RegExp(x.cdnProxyRegex):x.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function z(a){if(self.document&&self.document.head&&(!self.location||!y.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}x.cdnUrl||z("runtime-host");x.geoApiUrl||z("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var A=self.__AMP_LOG;function B(a,b,c,d){if(!A.user)throw Error("failed to call initLogConstructor");A.user.assert(a,b,c,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var C=Object.prototype.hasOwnProperty;(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});function D(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var g=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
if(e){var k=e.getAttribute("content").split(",");for(c=0;c<k.length;c++)-1!=g.indexOf(k[c])&&(b[k[c]]=!0)}}Object.assign(b,E(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];var h=a.location.originalHash||a.location.hash;a=Object.create(null);if(h)for(var l;l=w.exec(h);){var r=v(l[1],l[1]);l=l[2]?v(l[2].replace(/\+/g," "),l[2]):"";a[r]=l}for(h=0;h<c.length;h++)r=a["e-"+c[h]],"1"==r&&(b[c[h]]=!0),"0"==
r&&(b[c[h]]=!1)}return b}function E(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(g){if(A.dev)a=A.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var F=[{experimentId:"ampdoc-fie",isTrafficEligible:function(){return!0},branches:["21065001","21065002"]}];function G(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c,g;if(D(c)["ampdoc-fie"]){c.__AMP_EXPERIMENT_BRANCHES=c.__AMP_EXPERIMENT_BRANCHES||{};for(g=0;g<F.length;g++){var e=F[g],k=e.experimentId;C.call(c.__AMP_EXPERIMENT_BRANCHES,k)||(e.isTrafficEligible&&e.isTrafficEligible(c)?!c.__AMP_EXPERIMENT_BRANCHES[k]&&D(c)[k]&&(e=e.branches,c.__AMP_EXPERIMENT_BRANCHES[k]=e[Math.floor(Math.random()*e.length)]||null):c.__AMP_EXPERIMENT_BRANCHES[k]=null)}g="21065002"===(c.__AMP_EXPERIMENT_BRANCHES?
c.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else g=!1;var h=g;d&&!h?a=H(b,"action")?I(b,"action"):null:(a=J(a),a=J(a),a=a.isSingleDoc()?a.win:a,a=H(a,"action")?I(a,"action"):null);return a}function J(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=I(b,"ampdoc").getAmpDoc(a)}return a}
function I(a,b){H(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function H(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function K(a){a=AMP.BaseElement.call(this,a)||this;a.j=null;a.h=[];return a}var L=AMP.BaseElement;K.prototype=f(L.prototype);K.prototype.constructor=K;if(u)u(K,L);else for(var M in L)if("prototype"!=M)if(Object.defineProperties){var N=Object.getOwnPropertyDescriptor(L,M);N&&Object.defineProperty(K,M,N)}else K[M]=L[M];K.m=L.prototype;
K.prototype.buildCallback=function(){B(!!D(this.win)["amp-action-macro"],"Experiment is off");var a=this.element;this.j=G(a);var b=a.getAttribute("arguments");b&&(this.h=b.split(",").map(function(a){return a.trim()}));this.registerAction("execute",this.l.bind(this))};K.prototype.getLayoutPriority=function(){return 1};
K.prototype.l=function(a){var b=a.actionEventType,c=a.args,d=a.event,g=a.trust;if(c&&0<this.h.length)for(var e in c)B(this.h.includes(e),'Variable argument name "%s" is not defined in %s',e,this.element);"amp-action-macro"===a.caller.tagName.toLowerCase()&&B(!!(this.element.compareDocumentPosition(a.caller)&Node.DOCUMENT_POSITION_FOLLOWING),'Action macro with ID "%s" cannot reference itself or macros defined after it',this.element.getAttribute("id"));this.j.trigger(this.element,""+b,d,g,c)};
K.prototype.renderOutsideViewport=function(){return!0};K.prototype.isLayoutSupported=function(){return!0};(function(a){a.registerElement("amp-action-macro",K)})(self.AMP);
})});

//# sourceMappingURL=amp-action-macro-0.1.js.map
