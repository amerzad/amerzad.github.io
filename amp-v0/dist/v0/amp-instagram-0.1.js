(self.AMP=self.AMP||[]).push({n:"amp-instagram",v:"2008290323002",f:(function(AMP,_){
'use strict';var f,h="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function n(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}n(this);"function"===typeof Symbol&&Symbol("x");var p;
if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var r={a:!0},t={};try{t.__proto__=r;q=t.a;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var u=p;var v=Object.prototype.toString;var w=self.AMP_CONFIG||{},x=("string"==typeof w.cdnProxyRegex?new RegExp(w.cdnProxyRegex):w.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function z(a){if(self.document&&self.document.head&&(!self.location||!x.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}w.cdnUrl||z("runtime-host");w.geoApiUrl||z("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var A=self.__AMP_LOG;function B(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0});function C(a){a=a.__AMP_TOP||(a.__AMP_TOP=a);var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b.preconnect;a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var D;function E(a,b){var c=a,d=b;var g=function(a){try{return d(a)}catch(k){throw self.__AMP_REPORT_ERROR(k),k;}};var e=F();c.addEventListener("message",g,e?void 0:!1);return function(){c&&c.removeEventListener("message",g,e?void 0:!1);g=c=d=null}}function F(){if(void 0!==D)return D;D=!1;try{var a={get capture(){D=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return D};function H(a,b){return E(a,b)};var I,J="Webkit webkit Moz moz ms O o".split(" ");function K(a,b){for(var c in b){var d=a,g=b[c];var e=d.style;var m=c;if(B(m,"--"))e=m;else{I||(I=Object.create(null));var k=I[m];if(!k){k=m;if(void 0===e[m]){var l=m;l=l.charAt(0).toUpperCase()+l.slice(1);b:{for(var y=0;y<J.length;y++){var G=J[y]+l;if(void 0!==e[G]){l=G;break b}}l=""}void 0!==e[l]&&(k=l)}I[m]=k}e=k}e&&(B(e,"--")?d.style.setProperty(e,g):d.style[e]=g)}};function L(a){a=AMP.BaseElement.call(this,a)||this;a.h=null;a.j="";a.l=null;a.m="";a.o=null;return a}var M=AMP.BaseElement;L.prototype=h(M.prototype);L.prototype.constructor=L;if(u)u(L,M);else for(var N in M)if("prototype"!=N)if(Object.defineProperties){var O=Object.getOwnPropertyDescriptor(M,N);O&&Object.defineProperty(L,N,O)}else L[N]=M[N];L.A=M.prototype;f=L.prototype;
f.preconnectCallback=function(a){C(this.win).url(this.getAmpDoc(),"https://www.instagram.com",a);C(this.win).url(this.getAmpDoc(),"https://instagram.fsnc1-1.fna.fbcdn.net",a)};f.renderOutsideViewport=function(){return!1};
f.buildCallback=function(){var a=this.element.getAttribute("data-shortcode")||this.element.getAttribute("shortcode"),b=this.element;if(!A.user)throw Error("failed to call initLogConstructor");this.j=A.user.assert(a,"The data-shortcode attribute is required for <amp-instagram> %s",b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);this.m=this.element.hasAttribute("data-captioned")?"captioned/":""};
f.createPlaceholderCallback=function(){var a=this,b=this.win.document.createElement("div");b.setAttribute("placeholder","");var c=this.win.document.createElement("img");this.getAmpDoc().whenFirstVisible().then(function(){c.setAttribute("src","https://www.instagram.com/p/"+encodeURIComponent(a.j)+"/media/?size=l")});c.setAttribute("referrerpolicy","origin");K(c,{overflow:"hidden","max-width":"100%"});this.propagateAttributes(["alt"],c);this.element.hasAttribute("data-default-framing")&&this.element.classList.add("amp-instagram-default-framing");
b.appendChild(c);K(b,{marginTop:"54px"});return b};f.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
f.layoutCallback=function(){var a=this,b=this.element.ownerDocument.createElement("iframe");this.h=b;this.l=H(this.win,this.w.bind(this));b.setAttribute("scrolling","no");b.setAttribute("frameborder","0");b.setAttribute("allowtransparency","true");b.setAttribute("title","Instagram: "+this.element.getAttribute("alt"));b.src="https://www.instagram.com/p/"+encodeURIComponent(this.j)+"/embed/"+this.m+"?cr=1&v=12";this.applyFillContent(b);this.element.appendChild(b);K(b,{opacity:0});return this.o=this.loadPromise(b).then(function(){a.getVsync().mutate(function(){K(b,
{opacity:1})})})};f.w=function(a){var b=this;if("https://www.instagram.com"==a.origin&&a.source==this.h.contentWindow){var c=a.data;if(c&&("[object Object]"===v.call(c)||B(c,"{"))){if("[object Object]"===v.call(c))var d=c;else try{d=JSON.parse(c)}catch(e){d=null}a=d;if(void 0!==a&&"MEASURE"==a.type&&a.details){var g=a.details.height;this.getVsync().measure(function(){b.h&&b.h.offsetHeight!==g&&b.forceChangeHeight(g)})}}}};f.unlayoutOnPause=function(){return!0};
f.unlayoutCallback=function(){if(this.h){var a=this.h;a.parentElement&&a.parentElement.removeChild(a);this.o=this.h=null}this.l&&this.l();return!0};(function(a){a.registerElement("amp-instagram",L,"amp-instagram.amp-instagram-default-framing{border:1px solid #dbdbdb!important}\n/*# sourceURL=/extensions/amp-instagram/0.1/amp-instagram.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-instagram-0.1.js.map
