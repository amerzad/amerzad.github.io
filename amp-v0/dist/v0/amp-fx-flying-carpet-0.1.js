(self.AMP=self.AMP||[]).push({n:"amp-fx-flying-carpet",v:"2008290323002",f:(function(AMP,_){
'use strict';var g,h="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function k(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}k(this);"function"===typeof Symbol&&Symbol("x");var l;
if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var n={a:!0},p={};try{p.__proto__=n;m=p.a;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var q=l,r;var t=self.AMP_CONFIG||{},u=("string"==typeof t.cdnProxyRegex?new RegExp(t.cdnProxyRegex):t.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function v(a){if(self.document&&self.document.head&&(!self.location||!u.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}t.cdnUrl||v("runtime-host");t.geoApiUrl||v("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function x(a,b,c,d,e){if(!w.user)throw Error("failed to call initLogConstructor");w.user.assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)};function y(a){return 2>a.length?!1:0==a.lastIndexOf("--",0)};var z,A="Webkit webkit Moz moz ms O o".split(" ");(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0});function B(a){var b=C(a);b=C(b);b=b.isSingleDoc()?b.win:b;return D(b,"owners")}function C(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=D(b,"ampdoc").getAmpDoc(a)}return a}function D(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function E(a){a=AMP.BaseElement.call(this,a)||this;a.h=[];a.j=0;a.l=null;a.m=!1;return a}var F=AMP.BaseElement;E.prototype=h(F.prototype);E.prototype.constructor=E;if(q)q(E,F);else for(var G in F)if("prototype"!=G)if(Object.defineProperties){var H=Object.getOwnPropertyDescriptor(F,G);H&&Object.defineProperty(E,G,H)}else E[G]=F[G];E.w=F.prototype;g=E.prototype;g.isLayoutSupported=function(a){return"fixed-height"==a};g.isRelayoutNeeded=function(){return!0};
g.buildCallback=function(){var a=this,b=this.element.ownerDocument,c=b.createElement("div");this.h=this.getRealChildren();this.l=c;var d=this.getRealChildNodes();this.j=I(d).length;var e=B(this.element);this.h.forEach(function(b){return e.setOwner(b,a.element)});var f=b.createElement("div");f.setAttribute("class","i-amphtml-fx-flying-carpet-clip");c.setAttribute("class","i-amphtml-fx-flying-carpet-container");d.forEach(function(a){return c.appendChild(a)});f.appendChild(c);this.element.appendChild(f);
this.getViewport().addToFixedLayer(c,!1)};g.viewportCallback=function(a){B(this.element).updateInViewport(this.element,this.h,a)};
g.layoutCallback=function(){if(!this.m){try{var a=this.element.getLayoutBox(),b=this.getViewport(),c=b.getHeight(),d=b.getScrollHeight();b=.75*c;c=d-.95*c;x(a.top>=b,"<amp-fx-flying-carpet> elements must be positioned after the 75% of first viewport: %s Current position: %s. Min: %s",this.element,a.top,b);x(a.top<=c,"<amp-fx-flying-carpet> elements must be positioned before the last viewport: %s Current position: %s. Max: %s",this.element,a.top,c)}catch(J){throw this.collapse(),J;}this.m=!0}c=this.element.getLayoutWidth();
a=this.l;d=a.style;if(y("width"))d="width";else{z||(z=Object.create(null));b=z.width;if(!b){b="width";if(void 0===d.width){var e;b:{for(e=0;e<A.length;e++){var f=A[e]+"Width";if(void 0!==d[f]){e=f;break b}}e=""}void 0!==d[e]&&(b=e)}z.width=b}d=b}d&&(c+="px",y(d)?a.style.setProperty(d,c):a.style[d]=c);B(this.element).scheduleLayout(this.element,this.h);K(this);r||(r=Promise.resolve(void 0));a=r;return a};
function K(a){(new MutationObserver(function(b){for(var c=0;c<b.length;c++){var d=b[c].addedNodes;if(d)for(var e=0;e<d.length;e++){var f=d[e];f.signals&&f.signals().whenSignal("built").then(a.o.bind(a,f))}}})).observe(a.element,{childList:!0,subtree:!0})}g.o=function(a){a.getOwner()===this.element&&B(this.element).scheduleLayout(this.element,a)};g.collapsedCallback=function(a){a=this.h.indexOf(a);if(-1<a&&(this.h.splice(a,1),this.j--,0==this.j))return this.attemptCollapse().catch(function(){})};
g.getChildren=function(){return this.h};function I(a){return a.filter(function(a){return 1===a.nodeType?!0:3===a.nodeType?/\S/.test(a.textContent):!1})}(function(a){a.registerElement("amp-fx-flying-carpet",E,"amp-fx-flying-carpet{position:relative!important;box-sizing:border-box!important}amp-fx-flying-carpet>.i-amphtml-fx-flying-carpet-clip{position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important;border:0!important;margin:0!important;padding:0!important;clip:rect(0,auto,auto,0)!important;-webkit-clip-path:polygon(0px 0px,100% 0px,100% 100%,0px 100%)!important;clip-path:polygon(0px 0px,100% 0px,100% 100%,0px 100%)!important}amp-fx-flying-carpet>.i-amphtml-fx-flying-carpet-clip>.i-amphtml-fx-flying-carpet-container{position:fixed!important;top:0!important;width:100%;height:100%;-webkit-transform:translateZ(0)!important;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.i-amphtml-fx-flying-carpet-container>.i-amphtml-layout-fixed-height,.i-amphtml-fx-flying-carpet-container>.i-amphtml-layout-responsive{-ms-flex-item-align:stretch;align-self:stretch}\n/*# sourceURL=/extensions/amp-fx-flying-carpet/0.1/amp-fx-flying-carpet.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-fx-flying-carpet-0.1.js.map
