(self.AMP=self.AMP||[]).push({n:"amp-loader",v:"2008290323002",f:(function(AMP,_){
'use strict';var g=self.AMP_CONFIG||{},k=("string"==typeof g.cdnProxyRegex?new RegExp(g.cdnProxyRegex):g.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function l(a){if(self.document&&self.document.head&&(!self.location||!k.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}g.cdnUrl||l("runtime-host");g.geoApiUrl||l("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0});function m(a){a=a.__AMP_TOP||(a.__AMP_TOP=a);var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b.extensions;a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var n;function p(a){a=a.ownerDocument||a;n&&n.ownerDocument===a||(n=a.createElement("div"));return q}function q(a){var b=n;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};var r,u="Webkit webkit Moz moz ms O o".split(" ");function v(a,b,c){if(2>b.length?0:0==b.lastIndexOf("--",0))return b;r||(r=Object.create(null));var d=r[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<u.length;f++){var h=u[f]+e;if(void 0!==a[h]){e=h;break a}}e=""}var t=e;void 0!==a[t]&&(d=t)}c||(r[b]=d)}return d};function w(a,b){var c=a.getHeadNode(),d=x(c,y(c));if(b){var e=a.getRootNode();if(z(e,d))b(d);else var f=setInterval(function(){z(e,d)&&(clearInterval(f),b(d))},4)}}
function x(a,b){var c=a.__AMP_CSS_SM;c||(c=a.__AMP_CSS_SM=Object.create(null));var d=A(a,c,"amp-extension=amp-loader");if(d)return d.textContent!==b&&(d.textContent=b),d;var e=(a.ownerDocument||a).createElement("style");e.textContent=b;var f=null;e.setAttribute("amp-extension","amp-loader");b=f=A(a,c,"amp-runtime");(b=void 0===b?null:b)?a.insertBefore(e,b.nextSibling):a.insertBefore(e,a.firstChild);return c["amp-extension=amp-loader"]=e}
function A(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null}
function y(a){return(a=a.__AMP_CSS_TR)?a(".i-amphtml-loader-background{position:absolute;top:0;left:0;bottom:0;right:0;background-color:#f8f8f8}.i-amphtml-new-loader{display:inline-block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:0;height:0;color:#aaa}.i-amphtml-new-loader-size-default,.i-amphtml-new-loader-size-small{width:72px;height:72px}.i-amphtml-new-loader-logo{transform-origin:center;opacity:0;animation:i-amphtml-new-loader-scale-and-fade-in 0.8s ease-in forwards;animation-delay:0.6s;animation-delay:calc(0.6s - var(--loader-delay-offset))}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-logo{display:none}.i-amphtml-new-loader-logo-default{fill:currentColor;animation:i-amphtml-new-loader-fade-out 0.8s ease-out forwards;animation-delay:1.8s;animation-delay:calc(1.8s - var(--loader-delay-offset))}.i-amphtml-new-loader-has-shim{color:#fff!important}.i-amphtml-new-loader-shim{width:72px;height:72px;border-radius:50%;display:none;transform-origin:center;opacity:0;background-color:rgba(0,0,0,0.6);animation:i-amphtml-new-loader-scale-and-fade-in 0.8s ease-in forwards;animation-delay:0.6s;animation-delay:calc(0.6s - var(--loader-delay-offset))}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-shim{width:48px;height:48px;margin:12px}.i-amphtml-new-loader-has-shim .i-amphtml-new-loader-shim{display:initial}.i-amphtml-new-loader-has-shim .i-amphtml-new-loader-logo-default{display:none}.i-amphtml-new-loader-has-shim .i-amphtml-new-loader-transparent-on-shim{fill:transparent!important}.i-amphtml-new-loader-logo,.i-amphtml-new-loader-shim,.i-amphtml-new-loader-spinner-wrapper{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-new-loader-spinner-wrapper{margin:12px}.i-amphtml-new-loader-spinner{stroke:currentColor;stroke-width:1.5px;opacity:0;animation:i-amphtml-new-loader-fade-in 0.8s ease-in forwards;animation-delay:1.8s;animation-delay:calc(1.8s - var(--loader-delay-offset))}.i-amphtml-new-loader-spinner-path{animation:frame-position-first-spin 0.6s steps(30),frame-position-infinite-spin 1.2s steps(59) infinite;animation-delay:2.8s,3.4s;animation-delay:calc(2.8s - var(--loader-delay-offset)),calc(3.4s - var(--loader-delay-offset))}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-spinner{transform:scale(0.54545);stroke-width:2.75px}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-spinner-path{animation-delay:1.4s,2s;animation-delay:calc(1.4s - var(--loader-delay-offset)),calc(2s - var(--loader-delay-offset))}.i-amphtml-new-loader *{animation-play-state:paused}.amp-active>.i-amphtml-new-loader *{animation-play-state:running}.i-amphtml-new-loader-ad-logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.i-amphtml-new-loader-ad-label{all:initial!important;display:inline-block!important;padding:0 0.4ch!important;border:1px solid!important;border-radius:2px!important;color:currentColor!important;font-size:11px!important;font-family:sans-serif!important;line-height:1.1!important}@keyframes i-amphtml-new-loader-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-new-loader-fade-out{0%{opacity:1}to{opacity:0}}@keyframes i-amphtml-new-loader-scale-and-fade-in{0%{opacity:0;transform:scale(0)}50%{transform:scale(1)}to{opacity:1}}@keyframes frame-position-first-spin{0%{transform:translateX(0)}to{transform:translateX(-1440px)}}@keyframes frame-position-infinite-spin{0%{transform:translateX(-1440px)}to{transform:translateX(-4272px)}}\n/*# sourceURL=/extensions/amp-loader/0.1/amp-loader.css*/"):".i-amphtml-loader-background{position:absolute;top:0;left:0;bottom:0;right:0;background-color:#f8f8f8}.i-amphtml-new-loader{display:inline-block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:0;height:0;color:#aaa}.i-amphtml-new-loader-size-default,.i-amphtml-new-loader-size-small{width:72px;height:72px}.i-amphtml-new-loader-logo{transform-origin:center;opacity:0;animation:i-amphtml-new-loader-scale-and-fade-in 0.8s ease-in forwards;animation-delay:0.6s;animation-delay:calc(0.6s - var(--loader-delay-offset))}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-logo{display:none}.i-amphtml-new-loader-logo-default{fill:currentColor;animation:i-amphtml-new-loader-fade-out 0.8s ease-out forwards;animation-delay:1.8s;animation-delay:calc(1.8s - var(--loader-delay-offset))}.i-amphtml-new-loader-has-shim{color:#fff!important}.i-amphtml-new-loader-shim{width:72px;height:72px;border-radius:50%;display:none;transform-origin:center;opacity:0;background-color:rgba(0,0,0,0.6);animation:i-amphtml-new-loader-scale-and-fade-in 0.8s ease-in forwards;animation-delay:0.6s;animation-delay:calc(0.6s - var(--loader-delay-offset))}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-shim{width:48px;height:48px;margin:12px}.i-amphtml-new-loader-has-shim .i-amphtml-new-loader-shim{display:initial}.i-amphtml-new-loader-has-shim .i-amphtml-new-loader-logo-default{display:none}.i-amphtml-new-loader-has-shim .i-amphtml-new-loader-transparent-on-shim{fill:transparent!important}.i-amphtml-new-loader-logo,.i-amphtml-new-loader-shim,.i-amphtml-new-loader-spinner-wrapper{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-new-loader-spinner-wrapper{margin:12px}.i-amphtml-new-loader-spinner{stroke:currentColor;stroke-width:1.5px;opacity:0;animation:i-amphtml-new-loader-fade-in 0.8s ease-in forwards;animation-delay:1.8s;animation-delay:calc(1.8s - var(--loader-delay-offset))}.i-amphtml-new-loader-spinner-path{animation:frame-position-first-spin 0.6s steps(30),frame-position-infinite-spin 1.2s steps(59) infinite;animation-delay:2.8s,3.4s;animation-delay:calc(2.8s - var(--loader-delay-offset)),calc(3.4s - var(--loader-delay-offset))}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-spinner{transform:scale(0.54545);stroke-width:2.75px}.i-amphtml-new-loader-size-small .i-amphtml-new-loader-spinner-path{animation-delay:1.4s,2s;animation-delay:calc(1.4s - var(--loader-delay-offset)),calc(2s - var(--loader-delay-offset))}.i-amphtml-new-loader *{animation-play-state:paused}.amp-active>.i-amphtml-new-loader *{animation-play-state:running}.i-amphtml-new-loader-ad-logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.i-amphtml-new-loader-ad-label{all:initial!important;display:inline-block!important;padding:0 0.4ch!important;border:1px solid!important;border-radius:2px!important;color:currentColor!important;font-size:11px!important;font-family:sans-serif!important;line-height:1.1!important}@keyframes i-amphtml-new-loader-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-new-loader-fade-out{0%{opacity:1}to{opacity:0}}@keyframes i-amphtml-new-loader-scale-and-fade-in{0%{opacity:0;transform:scale(0)}50%{transform:scale(1)}to{opacity:1}}@keyframes frame-position-first-spin{0%{transform:translateX(0)}to{transform:translateX(-1440px)}}@keyframes frame-position-infinite-spin{0%{transform:translateX(-1440px)}to{transform:translateX(-4272px)}}\n/*# sourceURL=/extensions/amp-loader/0.1/amp-loader.css*/"}
function z(a,b){var c=a.styleSheets;for(a=0;a<c.length;a++)if(c[a].ownerNode==b)return!0;return!1};var B=/^amp\-(video|.+player)|AMP-BRIGHTCOVE|AMP-DAILYMOTION|AMP-YOUTUBE|AMP-VIMEO|AMP-IMA-VIDEO/i;function C(a){return"AMP-VIDEO"==a?!1:B.test(a)};var D=['<div class=i-amphtml-new-loader-spinner-wrapper><svg class=i-amphtml-new-loader-spinner viewBox="0 0 48 48"><path class=i-amphtml-new-loader-spinner-path fill=none d="M24 2a22 22 0 10.01 0m33.27 5.65a22 22 0 102.74-2.1m46.13 1.35a22 22 0 105.96-3.44m42.96 2.74a22 22 0 109.49-3.93m39.46 3.28a22 22 0 1013.13-3.52M253 4.95a22 22 0 1016.69-2.2m32.32 1.65a22 22 0 1019.98 0m29.06-.5a22 22 0 1022.79 3m26.28-3.44a22 22 0 1024.98 6.69m24.1-7.07a22 22 0 1026.4 10.94m22.71-11.27a22 22 0 1026.94 15.56m22.18-15.83a22 22 0 1026.54 20.37m22.59-20.58a22 22 0 1025.17 25.17M645.7 2.12a22 22 0 1022.84 29.76m26.31-29.85a22 22 0 1019.6 33.95M744 2a22 22 0 1015.56 37.56m33.59-37.53a22 22 0 1010.83 40.42M842.3 2.12a22 22 0 105.58 42.42m43.56-42.27a22 22 0 100 43.46m49.13-43.25a22 22 0 10-5.73 43.49m54.85-43.22a22 22 0 10-11.39 42.5m60.5-42.17a22 22 0 00-16.79 40.53m65.87-40.15a22 22 0 00-21.73 37.64m70.8-37.2a22 22 0 00-26.05 33.94m75.09-33.44a22 22 0 00-29.59 29.59M1235 4.95a22 22 0 00-32.25 24.75m81.23-24.15a22 22 0 00-33.95 19.6m82.9-18.95a22 22 0 00-34.66 14.36m83.58-13.66a22 22 0 00-34.38 9.21m83.25-8.46a22 22 0 00-33.17 4.37m82.01-3.58a22 22 0 00-31.11 0m81.35 2.63a22 22 0 00-32.52-3.42m82.32 6.36a22 22 0 00-33.45-7.11m82.77 10.3a22 22 0 00-33.85-11m82.66 14.36a22 22 0 00-33.71-15.01M1726 24a22 22 0 00-33-19.05m80.73 22.49a22 22 0 00-31.72-23.04m78.91 26.4a22 22 0 00-29.87-26.9m76.55 30.09a22 22 0 00-27.49-30.53m73.69 33.47a22 22 0 00-24.6-33.85m70.36 36.48a22 22 0 00-21.25-36.81m66.62 39.05a22 22 0 00-17.51-39.32m62.57 41.12a22 22 0 00-13.43-41.33m58.24 42.65a22 22 0 00-9.1-42.8m53.74 43.61a22 22 0 00-4.59-43.7M2184 46a22 22 0 100-44m44.56 43.73a22 22 0 104.59-43.7m40.05 42.89a22 22 0 109.1-42.8m35.71 41.48a22 22 0 1013.43-41.33m31.63 39.53a22 22 0 1017.51-39.32m27.86 37.08a22 22 0 1021.25-36.81m24.51 34.18a22 22 0 1024.6-33.85m21.6 30.91a22 22 0 1027.49-30.53m19.19 27.34a22 22 0 1029.87-26.9m17.32 23.54a22 22 0 1031.72-23.04M2642 24a22 22 0 1033-19.05m15.27 15.61a22 22 0 1033.71-15.01m15.1 11.65a22 22 0 1033.85-11m15.47 7.81a22 22 0 1033.45-7.11m16.35 4.17a22 22 0 1032.52-3.42m17.72.79a22 22 0 1031.11 0m17.73-.79a22 22 0 1032.52 3.42m16.35-4.17a22 22 0 1033.45 7.11m15.47-7.81a22 22 0 1033.85 11m15.1-11.65a22 22 0 1033.71 15.01M3133 4.95A22 22 0 103166 24m16.01-19.6a22 22 0 1031.72 23.04m17.32-23.54a22 22 0 1029.87 26.9m19.2-27.34a22 22 0 1027.49 30.53m21.59-30.91a22 22 0 1024.6 33.85m24.51-34.18a22 22 0 1021.25 36.81m27.87-37.08a22 22 0 1017.51 39.32m31.62-39.53a22 22 0 1013.43 41.33m35.71-41.48a22 22 0 109.1 42.8m40.05-42.89a22 22 0 104.59 43.7M3624 2a22 22 0 100 44m49.15-43.97a22 22 0 00-4.59 43.7m53.74-43.61a22 22 0 00-9.1 42.8m58.24-42.65a22 22 0 00-13.43 41.33m62.56-41.12a22 22 0 00-17.51 39.32m66.63-39.05a22 22 0 00-21.25 36.81m70.36-36.48a22 22 0 00-24.6 33.85m73.68-33.47a22 22 0 00-27.49 30.53m76.56-30.09a22 22 0 00-29.87 26.9m78.91-26.4a22 22 0 00-31.72 23.04M4115 4.95A22 22 0 004082 24m81.98-18.45a22 22 0 00-33.71 15.01m82.66-14.36a22 22 0 00-33.85 11m82.77-10.3a22 22 0 00-33.45 7.11m82.32-6.36a22 22 0 00-32.52 3.42"></path></svg></div>'],
E=["<div class=i-amphtml-new-loader><div class=i-amphtml-new-loader-shim></div><div class=i-amphtml-new-loader-logo></div></div>"],F=['<svg viewBox="0 0 72 72"><path class=i-amphtml-new-loader-white-on-shim fill=currentColor d=M41,34.5V31c0-0.5-0.4-1-1-1H27c-0.5,0-1,0.5-1,1v10c0,0.6,0.5,1,1,1h13c0.6,0,1-0.4,1-1v-3.5l5,4v-11L41,34.5z /></svg>'],G=['<svg class=i-amphtml-new-loader-logo-default viewBox="0 0 72 72"><circle cx=36 cy=36 r=12></circle></svg>'],H=["<div class=i-amphtml-new-loader-ad-logo><span class=i-amphtml-new-loader-ad-label>Ad</span></div>"],
I={"AMP-IMG":!0,"AMP-ANIM":!0,"AMP-PINTEREST":!0,"AMP-INSTAGRAM":!0,"AMP-GOOGLE-DOCUMENT-EMBED":!0},J=null;function K(a,b,c,d){this.h=a;this.o=b;this.m=c;this.l=d;this.j=null}
K.prototype.build=function(){if(!J){var a=p(this.h);J=a(E);J.appendChild(a(D))}this.j=J.cloneNode(!0);this.o.appendChild(this.j);a=!!this.h.getPlaceholder();var b=this.h.hasAttribute("poster");if(a=!(a||b))a=this.h.tagName,a=I[a]||C(a);a&&this.o.classList.add("i-amphtml-loader-background");if(a=!(50>this.m||50>this.l))a=this.h.getPlaceholder(),a=!(a&&a.classList.contains("i-amphtml-blurry-placeholder"));if(a&&("AMP-AD"==this.h.tagName?this.j.classList.add("i-amphtml-new-loader-size-default"):50>this.m||
50>this.l||!(100>=this.m||100>=this.l)?this.j.classList.add("i-amphtml-new-loader-size-default"):this.j.classList.add("i-amphtml-new-loader-size-small"),a=this.h.hasAttribute("poster")?!0:(a=this.h.getPlaceholder())?"AMP-IMG"==a.tagName||"IMG"==a.tagName?!0:!1:!1,a&&this.j.classList.add("i-amphtml-new-loader-has-shim"),b="AMP-AD"==this.h.tagName?{content:p(this.h)(H)}:C(this.h.tagName)?{content:p(this.h)(F)}:this.h.createLoaderLogo(),a=b.color,b=void 0===b.content?p(this.h)(G):b.content,this.j.querySelector(".i-amphtml-new-loader-logo").appendChild(b),
a)){b=this.j;var c=v(b.style,"color",void 0);c&&((2>c.length?0:0==c.lastIndexOf("--",0))?b.style.setProperty(c,a):b.style[c]=a)}};function L(){}L.prototype.initializeLoader=function(a,b,c,d,e){var f=Math.min(c,600);(new K(a,b,d,e)).build();d={"--loader-delay-offset":f+"ms"};a=a.style;for(var h in d)a.setProperty(v(a,h),d[h].toString(),"important")};(function(a){a.registerServiceForDoc("loader",L);m(a.win).addDocFactory(function(a){w(a,function(){})})})(self.AMP);
})});

//# sourceMappingURL=amp-loader-0.1.js.map
