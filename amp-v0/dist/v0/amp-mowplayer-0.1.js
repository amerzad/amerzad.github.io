(self.AMP=self.AMP||[]).push({n:"amp-mowplayer",v:"2008290323002",f:(function(AMP,_){
'use strict';var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ca={a:!0},da={};try{da.__proto__=ca;n=da.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=m;function fa(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function ha(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ia=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function p(a){var b=Object.create(null);if(!a)return b;for(var c;c=ia.exec(a);){var d=ha(c[1],c[1]),e=c[2]?ha(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var q="";var ja=Object.prototype.toString;function r(a){return"[object Object]"===ja.call(a)}function t(a){return"number"===typeof a&&isFinite(a)};function u(a){var b=!1,c=null,d=a;return function(a){for(var e=[],h=0;h<arguments.length;++h)e[h-0]=arguments[h];b||(c=d.apply(self,e),b=!0,d=null);return c}};var v=self.AMP_CONFIG||{},ka=("string"==typeof v.cdnProxyRegex?new RegExp(v.cdnProxyRegex):v.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function la(a){if(self.document&&self.document.head&&(!self.location||!ka.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}v.cdnUrl||la("runtime-host");v.geoApiUrl||la("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function y(){if(!w.user)throw Error("failed to call initLogConstructor");return w.user}function z(a,b,c){return y().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function B(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function C(a){return a||{}};function D(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};C({c:!0,v:!0,a:!0,ad:!0});function ma(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){if(w.dev)a=w.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function E(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),e=c!=d;if(d.__AMP__EXPERIMENT_TOGGLES)var f=d.__AMP__EXPERIMENT_TOGGLES;else{d.__AMP__EXPERIMENT_TOGGLES=Object.create(null);f=d.__AMP__EXPERIMENT_TOGGLES;if(d.AMP_CONFIG)for(var h in d.AMP_CONFIG){var k=d.AMP_CONFIG[h];"number"===typeof k&&0<=k&&1>=k&&(f[h]=Math.random()<k)}if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-doc-opt-in"])&&0<d.AMP_CONFIG["allow-doc-opt-in"].length&&(h=d.AMP_CONFIG["allow-doc-opt-in"],
k=d.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){k=k.getAttribute("content").split(",");for(var l=0;l<k.length;l++)-1!=h.indexOf(k[l])&&(f[k[l]]=!0)}Object.assign(f,ma(d));if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-url-opt-in"])&&0<d.AMP_CONFIG["allow-url-opt-in"].length)for(h=d.AMP_CONFIG["allow-url-opt-in"],d=p(d.location.originalHash||d.location.hash),k=0;k<h.length;k++)l=d["e-"+h[k]],"1"==l&&(f[h[k]]=!0),"0"==l&&(f[h[k]]=!1)}var x=!!f["ampdoc-fie"];e&&!x?b=F(c,
b)?G(c,b):null:(a=H(a),a=I(a),b=F(a,b)?G(a,b):null);return b}function J(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return G(a,b)}function K(a,b){var c=H(a);c=I(c);return G(c,b)}function H(a){return a.nodeType?J((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function I(a){a=H(a);return a.isSingleDoc()?a.win:a}function G(a,b){F(a,b);a=na(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function na(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function F(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};var L;function oa(){return L?L:L=Promise.resolve(void 0)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function M(a){a.parentElement&&a.parentElement.removeChild(a)};function pa(a){a.signals().signal("user-interacted")};var N;function qa(a){a=a.ownerDocument||a;N&&N.ownerDocument===a||(N=a.createElement("div"));return ra}function ra(a){var b=N;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function sa(a){try{return JSON.parse(a)}catch(b){return null}};var ta=["<iframe frameborder=0 allowfullscreen></iframe>"];function ua(a,b){return b&&a.source==b.contentWindow?"https://mowplayer.com"==a.origin:!1}function va(a,b,c){if(null!=c[b]){var d=c[b];(Array.isArray(d)?d:[d]).forEach(function(b){a.dispatchCustomEvent(b)})}}function wa(a,b){var c=a.element,d=qa(c)(ta);a.propagateAttributes(["referrerpolicy"],d);d.src=E(c,"url").assertHttpsUrl(b,c);a.applyFillContent(d);c.appendChild(d);return d}function xa(a){return a?r(a)||D(a,"{"):!1}
function ya(a){return r(a)?a:sa(a)};var O;function za(a,b,c,d){var e=a,f=c;var h=function(a){try{return f(a)}catch(A){throw self.__AMP_REPORT_ERROR(A),A;}};var k=Aa(),l=!1;d&&(l=d.capture);e.addEventListener(b,h,k?d:l);return function(){e&&e.removeEventListener(b,h,k?d:l);h=e=f=null}}function Aa(){if(void 0!==O)return O;O=!1;try{var a={get capture(){O=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return O};function Ba(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function P(a,b,c){return za(a,b,c,void 0)}function Ca(a,b,c,d){var e=c,f=za(a,b,function(a){try{e(a)}finally{e=null,f()}},d);return f}function Da(a){var b,c=new Promise(function(c){b=Ca(a,"load",c,void 0)});c.then(b,b);return c};var Ea={title:"",artist:"",album:"",artwork:[{src:""}]};function Fa(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=sa(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}
function Ga(a,b){var c=E(a,"url");if(b&&b.artwork){var d=b.artwork;Array.isArray(d);d.forEach(function(a){a&&(a=r(a)?a.src:a,z(c.isProtocolValid(a)))})}};function Ha(){this.o=null}g=Ha.prototype;g.add=function(a){var b=this;this.o||(this.o=[]);this.o.push(a);return function(){b.remove(a)}};g.remove=function(a){this.o&&(a=this.o.indexOf(a),-1<a&&this.o.splice(a,1))};g.removeAll=function(){this.o&&(this.o.length=0)};g.fire=function(a){if(this.o)for(var b=this.o,c=0;c<b.length;c++)(0,b[c])(a)};g.getHandlerCount=function(){return this.o?this.o.length:0};function Q(){this.L=!1;this.ba=new Ha}Q.prototype.onSessionEnd=function(a){this.ba.add(a)};Q.prototype.beginSession=function(){this.L=!0};Q.prototype.endSession=function(){this.L&&this.ba.fire();this.L=!1};Q.prototype.isSessionActive=function(){return this.L};var R,Ia="Webkit webkit Moz moz ms O o".split(" ");function Ja(a){var b={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"},c;for(c in b){var d=a,e=b[c];var f=d.style;var h=c;if(D(h,"--"))f=h;else{R||(R=B());var k=R[h];if(!k){k=h;if(void 0===f[h]){var l=h;l=l.charAt(0).toUpperCase()+l.slice(1);b:{for(var x=0;x<Ia.length;x++){var A=Ia[x]+l;if(void 0!==f[A]){l=A;break b}}l=""}void 0!==f[l]&&(k=l)}R[h]=k}f=k}f&&(D(f,"--")?d.style.setProperty(f,e):d.style[f]=e)}};function Ka(a,b){if(b)return Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;Ja(c);(new Promise(function(a){return a(c.play())})).catch(function(){});return Promise.resolve(!c.paused)}var La=null;function Ma(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null};var Na="i-amphtml-video-mask{display:block;z-index:1}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq .amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq .amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq[unpausable] .amp-video-eq-col div{animation-name:none}.amp-video-eq[unpausable].amp-video-eq-play .amp-video-eq-col div{animation-name:amp-video-eq-animation}.amp-video-eq.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";var Oa=["<i-amphtml-video-mask class=i-amphtml-fill-content role=button></i-amphtml-video-mask>"],Pa=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];
function Qa(a,b){var c=qa(b)(Pa),d=c.firstElementChild;for(b=0;4>b;b++){for(var e=d.cloneNode(!0),f=e.children,h=0;h<f.length;h++)f[h].classList.add("amp-video-eq-"+(b+1)+"-"+(h+1));c.appendChild(e)}M(d);J(a,"platform").isIos()&&c.setAttribute("unpausable","");return c};function Ra(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=u(function(){var a=Na,d=b.ampdoc.getHeadNode();var e=(e=d.__AMP_CSS_TR)?e(a):a;(a=d.__AMP_CSS_SM)||(a=d.__AMP_CSS_SM=B());var f=Ma(d,a,"amp-extension=amp-video-autoplay");f?f.textContent!==e&&(f.textContent=e):(f=(d.ownerDocument||d).createElement("style"),f.textContent=e,f.setAttribute("amp-extension","amp-video-autoplay"),e=Ma(d,a,"amp-runtime"),(e=void 0===e?null:e)?d.insertBefore(f,e.nextSibling):d.insertBefore(f,d.firstChild),
a["amp-extension=amp-video-autoplay"]=f)});this.ja=K(this.ampdoc,"viewport");this.S=this.j=null;this.ia=!1;this.M=J(a.win,"timer");this.ka=E(a.getHeadNode(),"action");this.aa=function(){for(var a=0;a<b.j.length;a++){var d=b.j[a];if("paused"!==d.getPlayingState()){S(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();t(e)&&t(f)&&0<f&&(e=Ba(b.ampdoc.win,"video-manager.timeUpdate",C({time:e,percent:e/f})),b.ka.trigger(d.video.element,"timeUpdate",e,1))}}b.M.delay(b.aa,1E3)};
this.P=u(function(){return new T(b.ampdoc,b)});this.M.delay(this.aa,1E3)}g=Ra.prototype;g.dispose=function(){this.P().dispose();if(this.j)for(var a=0;a<this.j.length;a++)this.j[a].dispose()};g.register=function(a){Sa(a);if(a.supportsPlatform()){this.j=this.j||[];var b=new Ta(this,a);Ua(this,b);this.j.push(b);b=b.video.element;b.dispatchCustomEvent("registered");b.classList.add("i-amphtml-media-component");a.signals().signal("registered");b.classList.add("i-amphtml-video-interface")}};
function Sa(a){function b(){return a.fullscreenEnter()}function c(b,c){a.registerAction(b,function(){pa(a);c()},1)}c("play",function(){return a.play(!1)});c("pause",function(){return a.pause()});c("mute",function(){return a.mute()});c("unmute",function(){return a.unmute()});c("fullscreenenter",b);c("fullscreen",b)}
function Ua(a,b){var c=b.video.element;P(c,"amp:video:visibility",function(a){(a=a.data)&&1==a.visible?b.updateVisibility(!0):b.updateVisibility()});P(c,"reloaded",function(){b.videoLoaded()});if(!a.ia){var d=function(){for(var b=0;b<a.j.length;b++)a.j[b].updateVisibility()};a.ja.onScroll(d);a.ja.onChanged(d);a.ia=!0}}function U(a,b){if(Va(a.S,b))return a.S;for(var c=0;c<a.j.length;c++){var d=a.j[c];if(Va(d,b))return a.S=d}return null}g.registerForAutoFullscreen=function(a){this.P().register(a)};
g.ra=function(){return this.P()};g.getVideoStateProperty=function(a,b){var c=this.ampdoc.getRootNode(),d=y().assertElement(c.getElementById(a),'Could not find an element with id="'+a+'" for VIDEO_STATE');a=U(this,d);return(a?a.getAnalyticsDetails():oa()).then(function(a){return a?a[b]:""})};g.getPlayingState=function(a){return U(this,a).getPlayingState()};g.isMuted=function(a){return U(this,a).isMuted()};g.userInteracted=function(a){return U(this,a).userInteracted()};
g.isRollingAd=function(a){return U(this,a).isRollingAd()};g.pauseOtherVideos=function(a){this.j.forEach(function(b){b.isPlaybackManaged()&&b!==a&&"playing_manual"==b.getPlayingState()&&b.video.pause()})};function Va(a,b){return!!a&&(a.video===b||a.video.element===b)}
function Ta(a,b){var c=this;this.F=a;this.l=a.ampdoc;this.video=b;this.T=!0;this.w=this.K=this.B=this.ga=!1;this.O=new Q;this.O.onSessionEnd(function(){return S(c,"video-session")});this.G=new Q;this.G.onSessionEnd(function(){return S(c,"video-session-visible")});this.Y=function(){var a=c.l.win,b=a||self;if(b.__AMP_MODE)b=b.__AMP_MODE;else{var f=p(b.location.originalHash||b.location.hash);var h=p(b.location.search);q||(q=b.AMP_CONFIG&&b.AMP_CONFIG.v?b.AMP_CONFIG.v:"012008290323002");f={localDev:!1,
development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(f.development)||b.AMP_DEV_MODE),examiner:"2"==f.development,esm:!1,geoOverride:f["amp-geo"],minified:!0,lite:void 0!=h.amp_lite,test:!1,log:f.log,version:"2008290323002",rtvVersion:q};b=b.__AMP_MODE=f}b=b.lite;La||(La=u(Ka));return La(a,b)};this.da=u(function(){return new V(c.l.win,c)});this.V=this.ha=!1;this.R=null;this.ea=this.A=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.F.installAutoplayStyles();this.C=Ea;
this.oa=function(){c.video.play(!1)};this.na=function(){c.video.pause()};Da(b.element).then(function(){return c.videoLoaded()});P(b.element,"pause",function(){S(c,"video-pause");c.B=!1;c.V?c.V=!1:c.O.endSession()});P(b.element,"play",function(){c.ea=!0;S(c,"video-play")});P(b.element,"playing",function(){c.B=!0;"playing_manual"==c.getPlayingState()&&(c.ca(),c.F.pauseOtherVideos(c));var a=c.video,b=a.element;if(!a.preimplementsMediaSessionAPI()&&!b.classList.contains("i-amphtml-disable-mediasession")){a=
c.l.win;var f=c.C,h=c.oa,k=c.na,l=a.navigator;"mediaSession"in l&&a.MediaMetadata&&(l.mediaSession.metadata=new a.MediaMetadata(Ea),Ga(b,f),l.mediaSession.metadata=new a.MediaMetadata(f),l.mediaSession.setActionHandler("play",h),l.mediaSession.setActionHandler("pause",k))}c.O.beginSession();c.w&&c.G.beginSession();c.ea||S(c,"video-play")});P(b.element,"muted",function(){return c.A=!0});P(b.element,"unmuted",function(){c.A=!1;c.F.pauseOtherVideos(c)});P(b.element,"amp:video:tick",function(a){a=a.data;
var b=a.eventType;b&&Wa(c,b,a.vars)});P(b.element,"ended",function(){c.K=!1;S(c,"video-ended")});P(b.element,"ad_start",function(){c.K=!0;S(c,"video-ad-start")});P(b.element,"ad_end",function(){c.K=!1;S(c,"video-ad-end")});b.signals().whenSignal("registered").then(function(){var a=c.video.element;(c.video.preimplementsAutoFullscreen()||!a.hasAttribute("rotate-to-fullscreen")?0:z(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",
a))&&c.F.registerForAutoFullscreen(c);c.updateVisibility();c.hasAutoplay&&Xa(c)});this.ca=u(function(){var a=Ba(c.l.win,"firstPlay",C({})),b=c.video.element;E(b,"action").trigger(b,"firstPlay",a,1)});Ya(this)}g=Ta.prototype;g.dispose=function(){this.da().stop()};function Wa(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach(function(a){e["custom_"+a]=c[a]});S(a,"video-hosted-custom",e)}
function Ya(a){a.video.signals().whenSignal("playback-delegated").then(function(){a.T=!1;a.B&&a.video.pause()})}g.isMuted=function(){return this.A};g.isPlaybackManaged=function(){return this.T};
g.videoLoaded=function(){this.ga=!0;this.R=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.C=B(this.video.getMetadata()));var a=this.l.win.document;if(!this.C.artwork||0==this.C.artwork.length){var b;(b=Fa(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);
b&&(this.C.artwork=[{src:b}])}!this.C.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.R.getAttribute("title")||this.R.getAttribute("aria-label")||a.title)&&(this.C.title=a)}this.da().start();this.updateVisibility();this.w&&Za(this)};
function Za(a){a.l.isVisible()&&a.Y().then(function(b){a.hasAutoplay&&!a.userInteracted()&&b?a.T&&(a.w?(a.G.beginSession(),a.video.play(!0),a.ha=!0):(a.B&&a.G.endSession(),a.video.pause(),a.V=!0)):a.w?a.G.beginSession():a.B&&a.G.endSession()})}function Xa(a){a.video.isInteractive()&&a.video.hideControls();a.Y().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),$a(a))})}
function $a(a){var b=a.video,c=a.video,d=c.element;c=c.win;if(!d.hasAttribute("noaudio")&&!d.signals().get("user-interacted")){var e=Qa(c,d),f=function(a){b.mutateElementSkipRemeasure(function(){return e.classList.toggle("amp-video-eq-play",a)})};b.mutateElementSkipRemeasure(function(){return d.appendChild(e)});var h=[P(d,"pause",function(){return f(!1)}),P(d,"playing",function(){return f(!0)})];b.signals().whenSignal("user-interacted").then(function(){var b=a.video,c=b.element;a.ca();b.isInteractive()&&
b.showControls();b.unmute();h.forEach(function(a){a()});b=c.querySelector(".amp-video-eq");c=c.querySelector("i-amphtml-video-mask");b&&M(b);c&&M(c)});if(b.isInteractive()){var k=qa(d)(Oa),l=function(a){b.mutateElementSkipRemeasure(function(){var b=a;void 0===b&&(b=k.hasAttribute("hidden"));b?k.removeAttribute("hidden"):k.setAttribute("hidden","")})};b.hideControls();b.mutateElementSkipRemeasure(function(){return d.appendChild(k)});[P(k,"click",function(){return pa(b)}),P(d,"ad_start",function(){l(!1);
b.showControls()}),P(d,"ad_end",function(){l(!0);b.hideControls()}),P(d,"unmuted",function(){return pa(b)})].forEach(function(a){return h.push(a)})}}}g.updateVisibility=function(a){var b=this.w;if(a)this.w=!0;else{var c=this.video.element.getIntersectionChangeEntry().intersectionRatio;this.w=.5<=(t(c)?c:0)}this.w!=b&&this.ga&&Za(this)};g.getPlayingState=function(){return this.B?this.B&&this.ha&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};g.isRollingAd=function(){return this.K};
g.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};
g.getAnalyticsDetails=function(){var a=this,b=this.video;return this.Y().then(function(c){var d=b.element.getLayoutBox(),e=d.width;d=d.height;var f=a.hasAutoplay&&c,h=b.getPlayedRanges(),k=h.reduce(function(a,b){return a+b[1]-b[0]},0);return{autoplay:f,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.A,playedTotal:k,playedRangesJson:JSON.stringify(h),state:a.getPlayingState(),width:e}})};
function T(a,b){var c=this;this.F=b;this.l=a;this.D=this.H=null;this.j=[];this.m=[];this.I=function(){return ab(c)};this.ma=function(a){return"playing_manual"==c.F.getPlayingState(a)};this.la=function(a,b){a=a.element.getIntersectionChangeEntry();var d=a.intersectionRatio;a=a.boundingClientRect;var e=b.element.getIntersectionChangeEntry();b=e.boundingClientRect;d-=e.intersectionRatio;.1<Math.abs(d)?a=d:(e=K(c.l,"viewport"),d=bb(e,a),e=bb(e,b),a=d<e||d>e?d-e:a.top-b.top);return a};cb(this);db(this)}
T.prototype.dispose=function(){this.m.forEach(function(a){return a()});this.m.length=0};T.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=J(this.l.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.j.push(a),P(b,"pause",this.I),P(b,"playing",this.I),P(b,"ended",this.I),a.signals().whenSignal("user-interacted").then(this.I),ab(this))};
function db(a){function b(){a.H=null}var c=a.l.getRootNode();a.m.push(P(c,"webkitfullscreenchange",b),P(c,"mozfullscreenchange",b),P(c,"fullscreenchange",b),P(c,"MSFullscreenChange",b))}T.prototype.isInLandscape=function(){var a=this.l.win;return a.screen&&"orientation"in a.screen?D(a.screen.orientation.type,"landscape"):90==Math.abs(a.orientation)};
function cb(a){var b=a.l.win,c=b.screen;c&&"orientation"in c&&a.m.push(P(c.orientation,"change",function(){return eb(a)}));a.m.push(P(b,"orientationchange",function(){return eb(a)}))}function eb(a){a.isInLandscape()?null!=a.D&&fb(a,a.D):a.H&&gb(a,a.H)}function fb(a,b){var c=J(a.l.win,"platform");a.H=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():hb(a,b).then(function(){return b.fullscreenEnter()})}function gb(a,b){a.H=null;hb(a,b,"center").then(function(){return b.fullscreenExit()})}
function hb(a,b,c){c=void 0===c?null:c;var d=b.element,e=K(a.l,"viewport");return J(a.l.win,"timer").promise(330).then(function(){var a=d.getIntersectionChangeEntry().boundingClientRect,b=a.top;a=a.bottom;var k=e.getSize().height;return 0<=b&&a<=k?oa():e.animateScrollIntoView(d,c?c:a>k?"bottom":"top")})}function ab(a){if(a.isInLandscape())return a.D;a.D=null;var b=a.j.filter(a.ma).sort(a.la)[0];b&&.5<=b.element.getIntersectionChangeEntry().intersectionRatio&&(a.D=b);return a.D}
function bb(a,b){var c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}function V(a,b){this.M=J(a,"timer");this.J=b;this.m=null;this.N=this.fa=0}V.prototype.start=function(){var a=this,b=this.J.video.element;this.stop();this.m=this.m||[];ib(this)?jb(this,this.N):this.m.push(Ca(b,"loadedmetadata",function(){ib(a)&&jb(a,a.N)}));this.m.push(P(b,"ended",function(){ib(a)&&kb(a,100)}))};V.prototype.stop=function(){if(this.m){for(;0<this.m.length;)this.m.pop()();this.N++}};
function ib(a){var b=a.J.video,c=b.getDuration();if(!(c&&!isNaN(c)&&1<c))return!1;250>50*c&&a.qa("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",5,"seconds long.",b.element);return!0}V.prototype.qa=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];y().warn.apply(y(),["video-manager"].concat(b))};
function jb(a,b){if(b==a.N){var c=a.J,d=a.M,e=c.video,f=function(){return jb(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else if((c=e.getDuration())&&!isNaN(c)&&1<c){var h=Math.min(Math.max(50*c,250),4E3),k=e.getCurrentTime()/c*100,l=5*Math.floor(k/5);t(l);kb(a,l);d.delay(f,h)}else d.delay(f,500)}}function kb(a,b){0>=b||a.fa==b||(a.fa=b,S(a.J,"video-percentage-played",{normalizedPercentage:b.toString()}))}
function S(a,b,c){var d=a.video;a.getAnalyticsDetails().then(function(a){c&&Object.assign(a,c);d.element.dispatchCustomEvent(b,a)})};function W(a){a=AMP.BaseElement.call(this,a)||this;a.U="";a.A=!1;a.h=null;a.$=null;a.W=null;a.X=null;a.Z=null;return a}var X=AMP.BaseElement;W.prototype=aa(X.prototype);W.prototype.constructor=W;if(ea)ea(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var lb=Object.getOwnPropertyDescriptor(X,Y);lb&&Object.defineProperty(W,Y,lb)}else W[Y]=X[Y];W.sa=X.prototype;g=W.prototype;
g.preconnectCallback=function(a){var b=J(this.win,"preconnect");b.url(this.getAmpDoc(),mb(this));b.url(this.getAmpDoc(),"https://mowplayer.com",a)};g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};g.viewportCallback=function(a){this.element.dispatchCustomEvent("amp:video:visibility",{visible:a})};
g.buildCallback=function(){this.U=z(this.element.getAttribute("data-mediaid"),"/The data-mediaid attribute is required for <amp-mowplayer> %s",this.element);var a=new fa;this.W=a.promise;this.X=a.resolve;a=H(this.element);var b=I(a),c=na(b),d=c["video-manager"];d||(d=c["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});d.ctor||d.obj||(d.ctor=Ra,d.context=a,d.resolve&&G(b,"video-manager"));K(this.element,"video-manager").register(this)};
function mb(a){return a.$?a.$:a.$="https://mowplayer.com/watch/"+a.U}g.layoutCallback=function(){var a=this;this.h=wa(this,mb(this));this.Z=P(this.win,"message",this.pa.bind(this));var b=this.loadPromise(this.h).then(function(){a.h&&Z(a,"listening",["amp",window.location.href,window.location.origin,!0]);a.element.dispatchCustomEvent("load")});this.X(b);return b};g.unlayoutCallback=function(){this.h&&(M(this.h),this.h=null);this.Z&&this.Z();var a=new fa;this.W=a.promise;this.X=a.resolve;return!0};
g.pauseCallback=function(){this.h&&this.h.contentWindow&&this.pause()};g.mutatedAttributesCallback=function(a){null!=a["data-mediaid"]&&this.h&&Z(this,"loadVideoById",[this.U])};function Z(a,b,c){a.W.then(function(){if(a.h&&a.h.contentWindow){var d=JSON.stringify(C({event:"command",func:b,args:c||""}));a.h.contentWindow.postMessage(d,"https://mowplayer.com")}})}
g.pa=function(a){if(ua(a,this.h)){var b=a.data;if(xa(b)){var c=ya(b);if(null!=c){a=c.event;var d=c.info||{};c=this.element;"set_aspect_ratio"===a&&this.attemptChangeHeight(d.new_height).catch(function(){});var e=d.playerState;if("infoDelivery"==a&&null!=e)a={},va(c,e.toString(),(a[1]="playing",a[2]="pause",a[0]=["ended","pause"],a));else{var f=d.muted;"infoDelivery"==a&&d&&null!=f&&this.A!=f&&(this.A=f,c.dispatchCustomEvent(this.A?"muted":"unmuted"))}}}}};g.supportsPlatform=function(){return!0};
g.isInteractive=function(){return!0};g.play=function(){Z(this,"playVideo")};g.pause=function(){Z(this,"pauseVideo")};g.mute=function(){Z(this,"mute")};g.unmute=function(){Z(this,"unMute")};g.showControls=function(){};g.hideControls=function(){};g.fullscreenEnter=function(){if(this.h){var a=this.h,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitEnterFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}};
g.fullscreenExit=function(){if(this.h){var a=this.h,b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a=a.ownerDocument)&&(b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen)&&b.call(a)}};
g.isFullscreen=function(){if(this.h){var a=this.h;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a};g.getMetadata=function(){};g.preimplementsMediaSessionAPI=function(){return!0};g.preimplementsAutoFullscreen=function(){return!1};g.getCurrentTime=function(){return 0};g.getDuration=function(){return 1};g.getPlayedRanges=function(){return[]};
g.seekTo=function(){this.user().error("amp-mowplayer","`seekTo` not supported.")};(function(a){a.registerElement("amp-mowplayer",W)})(self.AMP);
})});

//# sourceMappingURL=amp-mowplayer-0.1.js.map
