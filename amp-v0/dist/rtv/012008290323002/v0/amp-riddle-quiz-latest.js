(self.AMP=self.AMP||[]).push({n:"amp-riddle-quiz",v:"2008290323002",f:(function(AMP,_){
'use strict';var d="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function e(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var f=b[c];if(f&&f.Math==Math)return}(function(){throw Error("Cannot find global object");})()}e(this);"function"===typeof Symbol&&Symbol("x");var g;
if("function"==typeof Object.setPrototypeOf)g=Object.setPrototypeOf;else{var h;a:{var k={a:!0},l={};try{l.__proto__=k;h=l.a;break a}catch(a){}h=!1}g=h?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var m=g,p;
function q(a,b){var c=a,f=b;var n=function(a){try{return f(a)}catch(r){throw self.__AMP_REPORT_ERROR(r),r;}};var t=u();c.addEventListener("message",n,t?void 0:!1);return function(){c&&c.removeEventListener("message",n,t?void 0:!1);n=c=f=null}}function u(){if(void 0!==p)return p;p=!1;try{var a={get capture(){p=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return p};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var v=Object.prototype.toString;var w=self.AMP_CONFIG||{},x=("string"==typeof w.cdnProxyRegex?new RegExp(w.cdnProxyRegex):w.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function y(a){if(self.document&&self.document.head&&(!self.location||!x.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}w.cdnUrl||y("runtime-host");w.geoApiUrl||y("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var z=self.__AMP_LOG;function A(a){a=AMP.BaseElement.call(this,a)||this;a.c=null;a.h=400;a.j="";a.l=null;return a}var B=AMP.BaseElement;A.prototype=d(B.prototype);A.prototype.constructor=A;if(m)m(A,B);else for(var C in B)if("prototype"!=C)if(Object.defineProperties){var D=Object.getOwnPropertyDescriptor(B,C);D&&Object.defineProperty(A,C,D)}else A[C]=B[C];A.o=B.prototype;
A.prototype.m=function(a){this.c&&"https://www.riddle.com"==a.origin&&a.source==this.c.contentWindow&&(a=a.data,"[object Object]"===v.call(a)&&void 0!=a.riddleId&&a.riddleId==this.j&&E(this,a.riddleHeight))};A.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
A.prototype.layoutCallback=function(){var a=this.element.getAttribute("data-riddle-id"),b=this.element;if(!z.user)throw Error("failed to call initLogConstructor");this.j=z.user.assert(a,"The data-riddle-id attribute is required for <amp-riddle-quiz> %s",b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);a=this.m.bind(this);this.l=q(this.win,a);var c=this.element.ownerDocument.createElement("iframe");this.c=c;c.setAttribute("scrolling","no");c.setAttribute("frameborder","0");c.setAttribute("allowtransparency",
"true");c.setAttribute("allowfullscreen","true");c.src="https://www.riddle.com/a/iframe/"+encodeURIComponent(this.j);this.applyFillContent(c);this.element.appendChild(c);return this.loadPromise(c)};A.prototype.unlayoutCallback=function(){this.l&&this.l();if(this.c){var a=this.c;a.parentElement&&a.parentElement.removeChild(a);this.c=null}return!0};function E(a,b){"number"===typeof b&&isFinite(b)&&b!==a.h&&(a.h=b,a.attemptChangeHeight(a.h).catch(function(){}))}
(function(a){a.registerElement("amp-riddle-quiz",A,!1)})(self.AMP);
})});

//# sourceMappingURL=amp-riddle-quiz-0.1.js.map