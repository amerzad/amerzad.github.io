(self.AMP=self.AMP||[]).push({n:"amp-hulu",v:"2008290323002",f:(function(AMP,_){
'use strict';var c="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function d(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],g=0;g<b.length;++g){var l=b[g];if(l&&l.Math==Math)return}(function(){throw Error("Cannot find global object");})()}d(this);"function"===typeof Symbol&&Symbol("x");var e;
if("function"==typeof Object.setPrototypeOf)e=Object.setPrototypeOf;else{var f;a:{var h={a:!0},k={};try{k.__proto__=h;f=k.a;break a}catch(a){}f=!1}e=f?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var m=e;var n=self.AMP_CONFIG||{},p=("string"==typeof n.cdnProxyRegex?new RegExp(n.cdnProxyRegex):n.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function q(a){if(self.document&&self.document.head&&(!self.location||!p.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}n.cdnUrl||q("runtime-host");n.geoApiUrl||q("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var r=self.__AMP_LOG;(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0});/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function t(a){a=AMP.BaseElement.call(this,a)||this;a.h=null;a.j=null;return a}var u=AMP.BaseElement;t.prototype=c(u.prototype);t.prototype.constructor=t;if(m)m(t,u);else for(var v in u)if("prototype"!=v)if(Object.defineProperties){var w=Object.getOwnPropertyDescriptor(u,v);w&&Object.defineProperty(t,v,w)}else t[v]=u[v];t.l=u.prototype;
t.prototype.preconnectCallback=function(){var a=this.win;a=a.__AMP_TOP||(a.__AMP_TOP=a);var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b.preconnect;a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));a.obj.preload(this.getAmpDoc(),x(this))};t.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
t.prototype.layoutCallback=function(){var a=document.createElement("iframe"),b=x(this);a.setAttribute("frameborder","0");a.setAttribute("allowfullscreen","true");a.src=b;this.applyFillContent(a);this.element.appendChild(a);this.h=a;return this.loadPromise(a)};t.prototype.unlayoutOnPause=function(){return!0};t.prototype.unlayoutCallback=function(){if(this.h){var a=this.h;a.parentElement&&a.parentElement.removeChild(a);this.h=null}return!0};
t.prototype.buildCallback=function(){this.element.classList.add("i-amphtml-media-component");var a=this.element.getAttribute("data-eid"),b=this.element;if(!r.user)throw Error("failed to call initLogConstructor");this.j=r.user.assert(a,"The data-eid attribute is required for <amp-hulu> %s",b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function x(a){return"https://player.hulu.com/site/dash/mobile_embed.html?amp=1&eid="+encodeURIComponent(a.j||"")}
(function(a){a.registerElement("amp-hulu",t)})(self.AMP);
})});

//# sourceMappingURL=amp-hulu-0.1.js.map
