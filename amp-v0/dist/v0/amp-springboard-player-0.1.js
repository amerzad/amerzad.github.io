(self.AMP=self.AMP||[]).push({n:"amp-springboard-player",v:"2007102309000",f:(function(AMP,_){
var c="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function d(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],e=0;e<b.length;++e){var m=b[e];if(m&&m.Math==Math)return}(function(){throw Error("Cannot find global object");})()}d(this);"function"===typeof Symbol&&Symbol("x");var f;
if("function"==typeof Object.setPrototypeOf)f=Object.setPrototypeOf;else{var g;a:{var h={a:!0},k={};try{k.__proto__=h;g=k.a;break a}catch(a){}g=!1}f=g?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var l=f;var n=self.AMP_CONFIG||{},p=("string"==typeof n.cdnProxyRegex?new RegExp(n.cdnProxyRegex):n.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function q(a){if(self.document&&self.document.head&&(!self.location||!p.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}n.cdnUrl||q("runtime-host");n.geoApiUrl||q("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var r=self.__AMP_LOG;function t(a,b,e){if(!r.user)throw Error("failed to call initLogConstructor");return r.user.assert(a,b,e,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});function u(a){a=a.__AMP_TOP||(a.__AMP_TOP=a);var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b.preconnect;a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function v(a){a=AMP.BaseElement.call(this,a)||this;a.m="";a.h="";a.l="";a.w="";a.o="";a.j=null;return a}var w=AMP.BaseElement;v.prototype=c(w.prototype);v.prototype.constructor=v;if(l)l(v,w);else for(var x in w)if("prototype"!=x)if(Object.defineProperties){var y=Object.getOwnPropertyDescriptor(w,x);y&&Object.defineProperty(v,x,y)}else v[x]=w[x];v.A=w.prototype;
v.prototype.preconnectCallback=function(a){u(this.win).url(this.getAmpDoc(),"https://cms.springboardplatform.com",a);u(this.win).url(this.getAmpDoc(),"https://www.springboardplatform.com",a)};v.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
v.prototype.buildCallback=function(){this.element.classList.add("i-amphtml-media-component");this.m=t(this.element.getAttribute("data-mode"),"The data-mode attribute is required for <amp-springboard-player> %s",this.element);this.h=t(this.element.getAttribute("data-content-id"),"The data-content-id attribute is required for<amp-springboard-player> %s",this.element);this.l=t(this.element.getAttribute("data-domain"),"The data-domain attribute is required for <amp-springboard-player> %s",this.element);
this.w=t(this.element.getAttribute("data-site-id"),"The data-site-id attribute is required for<amp-springboard-player> %s",this.element);this.o=t(this.element.getAttribute("data-player-id"),"The data-player-id attribute is required for<amp-springboard-player> %s",this.element)};
v.prototype.layoutCallback=function(){var a=this.element.ownerDocument.createElement("iframe"),b=this.element.getAttribute("data-items")||"10";a.setAttribute("frameborder","0");a.setAttribute("allowfullscreen","true");a.id=this.o+"_"+this.h;a.src="https://cms.springboardplatform.com/embed_iframe/"+encodeURIComponent(this.w)+"/"+encodeURIComponent(this.m)+"/"+encodeURIComponent(this.h)+"/"+encodeURIComponent(this.o)+"/"+encodeURIComponent(this.l)+"/"+encodeURIComponent(b);this.applyFillContent(a);
this.j=a;this.element.appendChild(a);return this.loadPromise(a)};v.prototype.pauseCallback=function(){this.j&&this.j.contentWindow&&this.j.contentWindow.postMessage("ampPause","*")};
v.prototype.createPlaceholderCallback=function(){var a=this.win.document.createElement("amp-img");this.propagateAttributes(["aria-label"],a);a.setAttribute("src","https://www.springboardplatform.com/storage/"+encodeURIComponent(this.l)+"/snapshots/"+encodeURIComponent(this.h)+".jpg");"playlist"==this.m&&a.setAttribute("src","https://www.springboardplatform.com/storage/default/snapshots/default_snapshot.png");a.setAttribute("placeholder","");a.setAttribute("referrerpolicy","origin");a.setAttribute("layout",
"fill");a.hasAttribute("aria-label")?a.setAttribute("alt","Loading video - "+a.getAttribute("aria-label")):a.setAttribute("alt","Loading video");return a};(function(a){a.registerElement("amp-springboard-player",v)})(self.AMP);
})});

//# sourceMappingURL=amp-springboard-player-0.1.js.map