(self.AMP=self.AMP||[]).push({n:"amp-inline-gallery",v:"2008290323002",f:(function(AMP,_){
'use strict';var k="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function l(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}l(this);"function"===typeof Symbol&&Symbol("x");var m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var p={a:!0},q={};try{q.__proto__=p;n=q.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var r=m;
function t(a,b){a.prototype=k(b.prototype);a.prototype.constructor=a;if(r)r(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.B=b.prototype};function u(a){return a?Array.prototype.slice.call(a):[]};var v=self.AMP_CONFIG||{},w=("string"==typeof v.cdnProxyRegex?new RegExp(v.cdnProxyRegex):v.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function x(a){if(self.document&&self.document.head&&(!self.location||!w.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}v.cdnUrl||x("runtime-host");v.geoApiUrl||x("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};function y(a){return a||{}};var z;function A(a){var b=a.ownerDocument||a;z&&z.ownerDocument===b||(z=b.createElement("div"));return B}function B(a){var b=z;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};var C,D="Webkit webkit Moz moz ms O o".split(" ");function E(a,b,c){if(2>b.length?0:0==b.lastIndexOf("--",0))return b;C||(C=Object.create(null));var d=C[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var g=0;g<D.length;g++){var f=D[g]+e;if(void 0!==a[f]){e=f;break a}}e=""}var h=e;void 0!==a[h]&&(d=h)}c||(C[b]=d)}return d}
function F(a,b){var c=E(a.style,"padding-right",void 0);if(c){var d=b+"%";(2>c.length?0:0==c.lastIndexOf("--",0))?a.style.setProperty(c,d):a.style[c]=d}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var G;function H(a){try{var b=a.ownerDocument,c=b.createElement("div"),d=b.createElement("div");c.appendChild(d);return c.querySelector(":scope div")===d}catch(e){return!1}};function I(a,b){a.classList.add("i-amphtml-scoped");var c=b.replace(/^|,/g,"$&.i-amphtml-scoped ");b=a.querySelectorAll(c);a.classList.remove("i-amphtml-scoped");return b}function J(a,b){if(void 0!==G?G:G=H(a))return a.querySelector(b.replace(/^|,/g,"$&:scope "));var c=I(a,b);return void 0===c[0]?null:c[0]}function K(a,b){return(void 0!==G?G:G=H(a))?a.querySelectorAll(b.replace(/^|,/g,"$&:scope ")):I(a,b)}function L(a,b){for(var c=a.length,d=0;d<c;d++)b(a[d],d)};function M(a,b){var c={detail:b};Object.assign(c,{bubbles:!0});if("function"==typeof a.CustomEvent)return new a.CustomEvent("amp-inline-gallery:go-to-slide",c);a=a.document.createEvent("CustomEvent");a.initCustomEvent("amp-inline-gallery:go-to-slide",!!c.bubbles,!!c.cancelable,b);return a};var N=["<div class=i-amphtml-inline-gallery-pagination-container aria-hidden=true><div class=i-amphtml-inline-gallery-pagination-dots hidden><div class=i-amphtml-inline-gallery-pagination-frosting></div><div class=i-amphtml-inline-gallery-pagination-backdrop></div><div class=i-amphtml-inline-gallery-pagination-background></div></div><div class=i-amphtml-inline-gallery-pagination-numbers hidden><div class=i-amphtml-inline-gallery-pagination-frosting></div><div class=i-amphtml-inline-gallery-pagination-backdrop></div><div class=i-amphtml-inline-gallery-pagination-background></div><div class=i-amphtml-inline-gallery-pagination-count><span class=i-amphtml-inline-gallery-pagination-index></span> <span>/ </span><span class=i-amphtml-inline-gallery-pagination-total></span></div></div></div>"],
O=["<div class=i-amphtml-inline-gallery-pagination-dot-container><div class=i-amphtml-inline-gallery-pagination-dot><div class=i-amphtml-inline-gallery-pagination-dot-progress></div></div></div>"];function P(a){a=AMP.BaseElement.call(this,a)||this;a.j=0;a.A=null;a.h=null;a.m=null;a.l=null;a.o=null;return a}t(P,AMP.BaseElement);P.prototype.isLayoutSupported=function(a){return"fixed-height"==a};P.prototype.prerenderAllowed=function(){return!0};
P.prototype.buildCallback=function(){this.element.appendChild(A(this.element)(N));this.h=this.element.querySelector(".i-amphtml-inline-gallery-pagination-dots");this.m=this.element.querySelector(".i-amphtml-inline-gallery-pagination-numbers");this.l=this.element.querySelector(".i-amphtml-inline-gallery-pagination-index");this.o=this.element.querySelector(".i-amphtml-inline-gallery-pagination-total")};
function Q(a,b){var c=A(a.element)(O);c.onclick=function(){var c=M(a.win,y({index:b}));a.element.dispatchEvent(c)};return c}function R(a){return u(K(a.h,"> .i-amphtml-inline-gallery-pagination-dot-container"))}function S(a,b,c){R(a).forEach(function(a,e){var d={"--percentage-falloff":Math.max(0,1-1/Math.pow(Math.max(1-Math.abs(e-(b+c)),0),-.5))},f=a.style,h;for(h in d)f.setProperty(E(f,h),d[h].toString(),"important");0==c&&a.setAttribute("i-amphtml-inline-gallery-pagination-dot-active",e===b)})}
P.prototype.updateProgress=function(a,b,c){var d=this;this.mutateElement(function(){if(a!=d.j){var e=8>=a,g=e?a:0;if(a!==d.j||e!==d.A){d.j=a;d.A=e;d.h.hidden=!e;d.m.hidden=e;d.o.textContent=a;e=R(d);for(var f=g;f<e.length;f++)d.h.removeChild(e[f]);for(e=e.length;e<g;e++)d.h.appendChild(Q(d,e))}}S(d,b,c);d.l.textContent=b+1})};var T=["<div class=i-amphtml-inline-gallery-thumbnails-container><div class=i-amphtml-inline-gallery-thumbnails-thumbnail><div class=i-amphtml-inline-gallery-thumbnails-resizer></div></div></div>"],U=['<amp-base-carousel layout=fill loop=true mixed-length=true snap=false snap-align=center controls="(pointer: fine) always, never" aria-hidden=true></amp-base-carousel>'];function V(a){a=AMP.BaseElement.call(this,a)||this;a.c=null;a.w=null;return a}t(V,AMP.BaseElement);
V.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};V.prototype.prerenderAllowed=function(){return!0};
V.prototype.buildCallback=function(){var a=Number(this.element.getAttribute("aspect-ratio-width"))||0,b=Number(this.element.getAttribute("aspect-ratio-height"))||0;a&&b&&(this.w=a/b);this.element.addEventListener("amp-carousel:offsetchange",function(a){a.stopPropagation()});this.element.addEventListener("amp-carousel:indexchange",function(a){a.stopPropagation()})};V.prototype.setSlides=function(a){var b=this,c=a.map(function(a,c){return W(b,a,c)});this.mutateElement(function(){X(b,c)})};
function W(a,b,c){var d=A(a.element)(T),e=b.offsetWidth/b.offsetHeight,g=a.w||e||1;F(d.querySelector(".i-amphtml-inline-gallery-thumbnails-resizer"),100*g);d.querySelector(".i-amphtml-inline-gallery-thumbnails-thumbnail").appendChild(aa(b));d.onclick=function(){a.element.dispatchEvent(M(a.win,y({index:c})));a.c.getImpl().then(function(a){a.goToSlide(c,{smoothScroll:!0})})};return d}
function aa(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;a=b&&b.call(a,"amp-img, img")?a:J(a,"> amp-img, > img");if(!a)return a=document.createElement("div"),a.className="i-amphtml-inline-gallery-thumbnails-default",a;var c=document.createElement("amp-img");c.className="i-amphtml-inline-gallery-thumbnails-image";c.setAttribute("layout","fill");(b=a.getAttribute("src"))&&c.setAttribute("src",b);(b=a.getAttribute("srcset"))&&c.setAttribute("srcset",
b);var d=a.getAttribute("sizes");d&&c.setAttribute("sizes",d);return c}function X(a,b){a.c&&a.element.removeChild(a.c);a.c=A(a.element)(U);b.forEach(function(b){return a.c.appendChild(b)});a.propagateAttributes(["loop"],a.c);a.element.appendChild(a.c)};function Y(a){return AMP.BaseElement.call(this,a)||this}t(Y,AMP.BaseElement);
Y.prototype.buildCallback=function(){var a=this;this.element.addEventListener("amp-carousel:offsetchange",function(b){b=b.detail;Z(a,b.total,b.index,b.offset)});this.element.addEventListener("amp-carousel:indexchange",function(b){b=b.detail;Z(a,b.total,b.index,0)});this.element.addEventListener("amp-inline-gallery:go-to-slide",function(b){ba(a,b)});Promise.all([J(this.element,"> amp-base-carousel, :not(amp-inline-gallery-thumbnails) > amp-base-carousel").getImpl(),Promise.all(u(K(this.element,"amp-inline-gallery-thumbnails")).map(function(a){return a.getImpl()}))]).then(function(a){var b=
a[1],d=a[0].getSlides();u(b).forEach(function(a){return a.setSlides(d)})})};Y.prototype.prerenderAllowed=function(){return!0};Y.prototype.isLayoutSupported=function(a){return"container"===a};function Z(a,b,c,d){L(K(a.element,"amp-inline-gallery-pagination"),function(a){a.getImpl().then(function(a){a.updateProgress(b,c,d)})})}
function ba(a,b){var c=b.detail.index;L(K(a.element,"> amp-base-carousel, :not(amp-inline-gallery-thumbnails) > amp-base-carousel"),function(a){a.getImpl().then(function(a){a.goToSlide(c,{smoothScroll:!0})})})}
(function(a){a.registerElement("amp-inline-gallery-pagination",P,"amp-inline-gallery-pagination{font-size:12px;font-family:sans-serif;line-height:1}.i-amphtml-inline-gallery-pagination-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.i-amphtml-inline-gallery-pagination-dots{-ms-flex-item-align:center;align-self:center;z-index:0;-ms-flex-align:center;align-items:center;height:100%;max-width:60%}.i-amphtml-inline-gallery-pagination-dot-container,.i-amphtml-inline-gallery-pagination-dots{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.i-amphtml-inline-gallery-pagination-dot-container{z-index:1;width:16px;min-width:14px}.i-amphtml-inline-gallery-pagination-dot{position:relative;background-color:rgba(0,0,0,0.2)}.i-amphtml-inline-gallery-pagination-dot-progress{position:absolute;top:0;background-color:rgba(0,0,0,0.6);opacity:0;opacity:calc(1 - var(--percentage-falloff))}[i-amphtml-inline-gallery-pagination-dot-active=true] .i-amphtml-inline-gallery-pagination-dot-progress{opacity:1;opacity:calc(1 - var(--percentage-falloff))}.i-amphtml-inline-gallery-pagination-dot,.i-amphtml-inline-gallery-pagination-dot-progress{width:8px;height:8px;border-radius:50%}.i-amphtml-inline-gallery-pagination-numbers{position:relative;-ms-flex-item-align:end;align-self:flex-end;z-index:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:100%;padding:0 8px}.i-amphtml-inline-gallery-pagination-count{z-index:1}.i-amphtml-inline-gallery-pagination-dots[hidden],.i-amphtml-inline-gallery-pagination-numbers[hidden]{display:none}amp-inline-gallery-pagination[inset]:not(.i-amphtml-hidden-by-media-query){position:absolute!important;left:0;right:0;bottom:0;bottom:var(--i-amphtml-caption-height,0);display:-ms-flexbox!important;display:flex!important}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-container{margin:18px;height:20px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-backdrop,amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-background,amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-frosting{position:absolute;top:0;bottom:0;left:0;right:0;border-radius:12px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-frosting{-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-backdrop{-webkit-backdrop-filter:blur(12px) invert(1) grayscale(0.6) brightness(0.8);backdrop-filter:blur(12px) invert(1) grayscale(0.6) brightness(0.8);opacity:0.5}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-background{background-color:rgba(0,0,0,0.3)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dots{padding:0 4px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-numbers{color:#fff}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dot{background-color:hsla(0,0%,100%,0.35)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dot-progress{background-color:#fff}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-pagination.css*/");a.registerElement("amp-inline-gallery-thumbnails",
V,"amp-inline-gallery-thumbnails .i-amphtml-carousel-content{padding:0;padding:0 calc(var(--thumbnail-margin, 0)/2)}.i-amphtml-inline-gallery-thumbnails-container{box-sizing:border-box;width:auto!important;height:100%;-ms-flex-preferred-size:content;flex-basis:content;padding:0;padding:var(--thumbnail-margin,0) calc(var(--thumbnail-margin, 0)/2);-ms-writing-mode:tb-lr;writing-mode:vertical-lr}.i-amphtml-inline-gallery-thumbnails-thumbnail{position:relative;width:auto;height:100%}.i-amphtml-inline-gallery-thumbnails-resizer{position:static;height:100%}.i-amphtml-inline-gallery-thumbnails-default,.i-amphtml-inline-gallery-thumbnails-image{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-inline-gallery-thumbnails-default{background-color:#999}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-thumbnails.css*/");
a.registerElement("amp-inline-gallery",Y,"amp-inline-gallery{--i-amphtml-caption-height:0px}amp-inline-gallery>amp-base-carousel{padding-bottom:var(--i-amphtml-caption-height)}amp-inline-gallery .i-amphtml-base-carousel-arrow-next-slot,amp-inline-gallery .i-amphtml-base-carousel-arrow-prev-slot{margin-bottom:var(--i-amphtml-caption-height)}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-inline-gallery-0.1.js.map