(self.AMP=self.AMP||[]).push({n:"amp-3q-player",v:"2008290323002",f:(function(AMP,_){
'use strict';var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ca={a:!0},da={};try{da.__proto__=ca;n=da.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=m;function fa(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function ha(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ia=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function p(a){var b=Object.create(null);if(!a)return b;for(var c;c=ia.exec(a);){var d=ha(c[1],c[1]),e=c[2]?ha(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var q="";var ja=Object.prototype.toString;function r(a){return"number"===typeof a&&isFinite(a)};function t(a){var b=!1,c=null,d=a;return function(a){for(var e=[],h=0;h<arguments.length;++h)e[h-0]=arguments[h];b||(c=d.apply(self,e),b=!0,d=null);return c}};var u=self.AMP_CONFIG||{},ka=("string"==typeof u.cdnProxyRegex?new RegExp(u.cdnProxyRegex):u.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function la(a){if(self.document&&self.document.head&&(!self.location||!ka.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}u.cdnUrl||la("runtime-host");u.geoApiUrl||la("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var v=self.__AMP_LOG;function w(){if(!v.user)throw Error("failed to call initLogConstructor");return v.user}function y(a,b,c){return w().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function z(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function B(a){return a||{}};function C(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};B({c:!0,v:!0,a:!0,ad:!0});function ma(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){if(v.dev)a=v.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function D(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),e=c!=d;if(d.__AMP__EXPERIMENT_TOGGLES)var f=d.__AMP__EXPERIMENT_TOGGLES;else{d.__AMP__EXPERIMENT_TOGGLES=Object.create(null);f=d.__AMP__EXPERIMENT_TOGGLES;if(d.AMP_CONFIG)for(var h in d.AMP_CONFIG){var k=d.AMP_CONFIG[h];"number"===typeof k&&0<=k&&1>=k&&(f[h]=Math.random()<k)}if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-doc-opt-in"])&&0<d.AMP_CONFIG["allow-doc-opt-in"].length&&(h=d.AMP_CONFIG["allow-doc-opt-in"],
k=d.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){k=k.getAttribute("content").split(",");for(var l=0;l<k.length;l++)-1!=h.indexOf(k[l])&&(f[k[l]]=!0)}Object.assign(f,ma(d));if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-url-opt-in"])&&0<d.AMP_CONFIG["allow-url-opt-in"].length)for(h=d.AMP_CONFIG["allow-url-opt-in"],d=p(d.location.originalHash||d.location.hash),k=0;k<h.length;k++)l=d["e-"+h[k]],"1"==l&&(f[h[k]]=!0),"0"==l&&(f[h[k]]=!1)}var x=!!f["ampdoc-fie"];e&&!x?b=E(c,
b)?F(c,b):null:(a=G(a),a=H(a),b=E(a,b)?F(a,b):null);return b}function I(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return F(a,b)}function J(a,b){var c=G(a);c=H(c);return F(c,b)}function G(a){return a.nodeType?I((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function H(a){a=G(a);return a.isSingleDoc()?a.win:a}function F(a,b){E(a,b);a=na(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function na(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function E(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};var K;function oa(){return K?K:K=Promise.resolve(void 0)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function L(a){a.parentElement&&a.parentElement.removeChild(a)};function M(a){a.signals().signal("user-interacted")};var N;function pa(a){a=a.ownerDocument||a;N&&N.ownerDocument===a||(N=a.createElement("div"));return qa}function qa(a){var b=N;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function ra(a){try{return JSON.parse(a)}catch(b){return null}};var sa=["<iframe frameborder=0 allowfullscreen></iframe>"];function ta(a,b){var c={ready:"load",playing:"playing",paused:"pause",muted:"muted",unmuted:"unmuted"};if(null!=c[b]){var d=c[b];(Array.isArray(d)?d:[d]).forEach(function(b){a.dispatchCustomEvent(b)})}}function ua(a,b){var c=a.element,d=pa(c)(sa);a.propagateAttributes(["referrerpolicy"],d);d.src=D(c,"url").assertHttpsUrl(b,c);a.applyFillContent(d);c.appendChild(d);return d};var O;function va(a,b,c,d){var e=a,f=c;var h=function(a){try{return f(a)}catch(A){throw self.__AMP_REPORT_ERROR(A),A;}};var k=wa(),l=!1;d&&(l=d.capture);e.addEventListener(b,h,k?d:l);return function(){e&&e.removeEventListener(b,h,k?d:l);h=e=f=null}}function wa(){if(void 0!==O)return O;O=!1;try{var a={get capture(){O=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return O};function xa(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function P(a,b,c){return va(a,b,c,void 0)}function ya(a,b,c,d){var e=c,f=va(a,b,function(a){try{e(a)}finally{e=null,f()}},d);return f}function za(a){var b,c=new Promise(function(c){b=ya(a,"load",c,void 0)});c.then(b,b);return c};var Aa={title:"",artist:"",album:"",artwork:[{src:""}]};function Ba(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=ra(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}
function Ca(a,b){var c=D(a,"url");if(b&&b.artwork){var d=b.artwork;Array.isArray(d);d.forEach(function(a){a&&(a="[object Object]"===ja.call(a)?a.src:a,y(c.isProtocolValid(a)))})}};function Da(){this.o=null}g=Da.prototype;g.add=function(a){var b=this;this.o||(this.o=[]);this.o.push(a);return function(){b.remove(a)}};g.remove=function(a){this.o&&(a=this.o.indexOf(a),-1<a&&this.o.splice(a,1))};g.removeAll=function(){this.o&&(this.o.length=0)};g.fire=function(a){if(this.o)for(var b=this.o,c=0;c<b.length;c++)(0,b[c])(a)};g.getHandlerCount=function(){return this.o?this.o.length:0};function Q(){this.K=!1;this.$=new Da}Q.prototype.onSessionEnd=function(a){this.$.add(a)};Q.prototype.beginSession=function(){this.K=!0};Q.prototype.endSession=function(){this.K&&this.$.fire();this.K=!1};Q.prototype.isSessionActive=function(){return this.K};var R,Ea="Webkit webkit Moz moz ms O o".split(" ");function Fa(a){var b={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"},c;for(c in b){var d=a,e=b[c];var f=d.style;var h=c;if(C(h,"--"))f=h;else{R||(R=z());var k=R[h];if(!k){k=h;if(void 0===f[h]){var l=h;l=l.charAt(0).toUpperCase()+l.slice(1);b:{for(var x=0;x<Ea.length;x++){var A=Ea[x]+l;if(void 0!==f[A]){l=A;break b}}l=""}void 0!==f[l]&&(k=l)}R[h]=k}f=k}f&&(C(f,"--")?d.style.setProperty(f,e):d.style[f]=e)}};function Ga(a,b){if(b)return Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;Fa(c);(new Promise(function(a){return a(c.play())})).catch(function(){});return Promise.resolve(!c.paused)}var Ha=null;function Ia(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null};var Ja="i-amphtml-video-mask{display:block;z-index:1}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq .amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq .amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq[unpausable] .amp-video-eq-col div{animation-name:none}.amp-video-eq[unpausable].amp-video-eq-play .amp-video-eq-col div{animation-name:amp-video-eq-animation}.amp-video-eq.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";var Ka=["<i-amphtml-video-mask class=i-amphtml-fill-content role=button></i-amphtml-video-mask>"],La=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];
function Ma(a,b){var c=pa(b)(La),d=c.firstElementChild;for(b=0;4>b;b++){for(var e=d.cloneNode(!0),f=e.children,h=0;h<f.length;h++)f[h].classList.add("amp-video-eq-"+(b+1)+"-"+(h+1));c.appendChild(e)}L(d);I(a,"platform").isIos()&&c.setAttribute("unpausable","");return c};function Na(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=t(function(){var a=Ja,d=b.ampdoc.getHeadNode();var e=(e=d.__AMP_CSS_TR)?e(a):a;(a=d.__AMP_CSS_SM)||(a=d.__AMP_CSS_SM=z());var f=Ia(d,a,"amp-extension=amp-video-autoplay");f?f.textContent!==e&&(f.textContent=e):(f=(d.ownerDocument||d).createElement("style"),f.textContent=e,f.setAttribute("amp-extension","amp-video-autoplay"),e=Ia(d,a,"amp-runtime"),(e=void 0===e?null:e)?d.insertBefore(f,e.nextSibling):d.insertBefore(f,d.firstChild),
a["amp-extension=amp-video-autoplay"]=f)});this.ha=J(this.ampdoc,"viewport");this.T=this.h=null;this.ga=!1;this.N=I(a.win,"timer");this.ia=D(a.getHeadNode(),"action");this.Z=function(){for(var a=0;a<b.h.length;a++){var d=b.h[a];if("paused"!==d.getPlayingState()){S(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();r(e)&&r(f)&&0<f&&(e=xa(b.ampdoc.win,"video-manager.timeUpdate",B({time:e,percent:e/f})),b.ia.trigger(d.video.element,"timeUpdate",e,1))}}b.N.delay(b.Z,1E3)};
this.R=t(function(){return new T(b.ampdoc,b)});this.N.delay(this.Z,1E3)}g=Na.prototype;g.dispose=function(){this.R().dispose();if(this.h)for(var a=0;a<this.h.length;a++)this.h[a].dispose()};g.register=function(a){Oa(a);if(a.supportsPlatform()){this.h=this.h||[];var b=new Pa(this,a);Qa(this,b);this.h.push(b);b=b.video.element;b.dispatchCustomEvent("registered");b.classList.add("i-amphtml-media-component");a.signals().signal("registered");b.classList.add("i-amphtml-video-interface")}};
function Oa(a){function b(){return a.fullscreenEnter()}function c(b,c){a.registerAction(b,function(){M(a);c()},1)}c("play",function(){return a.play(!1)});c("pause",function(){return a.pause()});c("mute",function(){return a.mute()});c("unmute",function(){return a.unmute()});c("fullscreenenter",b);c("fullscreen",b)}
function Qa(a,b){var c=b.video.element;P(c,"amp:video:visibility",function(a){(a=a.data)&&1==a.visible?b.updateVisibility(!0):b.updateVisibility()});P(c,"reloaded",function(){b.videoLoaded()});if(!a.ga){var d=function(){for(var b=0;b<a.h.length;b++)a.h[b].updateVisibility()};a.ha.onScroll(d);a.ha.onChanged(d);a.ga=!0}}function U(a,b){if(Ra(a.T,b))return a.T;for(var c=0;c<a.h.length;c++){var d=a.h[c];if(Ra(d,b))return a.T=d}return null}g.registerForAutoFullscreen=function(a){this.R().register(a)};
g.pa=function(){return this.R()};g.getVideoStateProperty=function(a,b){var c=this.ampdoc.getRootNode(),d=w().assertElement(c.getElementById(a),'Could not find an element with id="'+a+'" for VIDEO_STATE');a=U(this,d);return(a?a.getAnalyticsDetails():oa()).then(function(a){return a?a[b]:""})};g.getPlayingState=function(a){return U(this,a).getPlayingState()};g.isMuted=function(a){return U(this,a).isMuted()};g.userInteracted=function(a){return U(this,a).userInteracted()};
g.isRollingAd=function(a){return U(this,a).isRollingAd()};g.pauseOtherVideos=function(a){this.h.forEach(function(b){b.isPlaybackManaged()&&b!==a&&"playing_manual"==b.getPlayingState()&&b.video.pause()})};function Ra(a,b){return!!a&&(a.video===b||a.video.element===b)}
function Pa(a,b){var c=this;this.D=a;this.l=a.ampdoc;this.video=b;this.U=!0;this.w=this.J=this.A=this.ea=!1;this.P=new Q;this.P.onSessionEnd(function(){return S(c,"video-session")});this.F=new Q;this.F.onSessionEnd(function(){return S(c,"video-session-visible")});this.X=function(){var a=c.l.win,b=a||self;if(b.__AMP_MODE)b=b.__AMP_MODE;else{var f=p(b.location.originalHash||b.location.hash);var h=p(b.location.search);q||(q=b.AMP_CONFIG&&b.AMP_CONFIG.v?b.AMP_CONFIG.v:"012008290323002");f={localDev:!1,
development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(f.development)||b.AMP_DEV_MODE),examiner:"2"==f.development,esm:!1,geoOverride:f["amp-geo"],minified:!0,lite:void 0!=h.amp_lite,test:!1,log:f.log,version:"2008290323002",rtvVersion:q};b=b.__AMP_MODE=f}b=b.lite;Ha||(Ha=t(Ga));return Ha(a,b)};this.ba=t(function(){return new V(c.l.win,c)});this.V=this.fa=!1;this.S=null;this.ca=this.L=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.D.installAutoplayStyles();this.B=Aa;
this.ma=function(){c.video.play(!1)};this.la=function(){c.video.pause()};za(b.element).then(function(){return c.videoLoaded()});P(b.element,"pause",function(){S(c,"video-pause");c.A=!1;c.V?c.V=!1:c.P.endSession()});P(b.element,"play",function(){c.ca=!0;S(c,"video-play")});P(b.element,"playing",function(){c.A=!0;"playing_manual"==c.getPlayingState()&&(c.aa(),c.D.pauseOtherVideos(c));var a=c.video,b=a.element;if(!a.preimplementsMediaSessionAPI()&&!b.classList.contains("i-amphtml-disable-mediasession")){a=
c.l.win;var f=c.B,h=c.ma,k=c.la,l=a.navigator;"mediaSession"in l&&a.MediaMetadata&&(l.mediaSession.metadata=new a.MediaMetadata(Aa),Ca(b,f),l.mediaSession.metadata=new a.MediaMetadata(f),l.mediaSession.setActionHandler("play",h),l.mediaSession.setActionHandler("pause",k))}c.P.beginSession();c.w&&c.F.beginSession();c.ca||S(c,"video-play")});P(b.element,"muted",function(){return c.L=!0});P(b.element,"unmuted",function(){c.L=!1;c.D.pauseOtherVideos(c)});P(b.element,"amp:video:tick",function(a){a=a.data;
var b=a.eventType;b&&Sa(c,b,a.vars)});P(b.element,"ended",function(){c.J=!1;S(c,"video-ended")});P(b.element,"ad_start",function(){c.J=!0;S(c,"video-ad-start")});P(b.element,"ad_end",function(){c.J=!1;S(c,"video-ad-end")});b.signals().whenSignal("registered").then(function(){var a=c.video.element;(c.video.preimplementsAutoFullscreen()||!a.hasAttribute("rotate-to-fullscreen")?0:y(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",
a))&&c.D.registerForAutoFullscreen(c);c.updateVisibility();c.hasAutoplay&&Ta(c)});this.aa=t(function(){var a=xa(c.l.win,"firstPlay",B({})),b=c.video.element;D(b,"action").trigger(b,"firstPlay",a,1)});Ua(this)}g=Pa.prototype;g.dispose=function(){this.ba().stop()};function Sa(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach(function(a){e["custom_"+a]=c[a]});S(a,"video-hosted-custom",e)}
function Ua(a){a.video.signals().whenSignal("playback-delegated").then(function(){a.U=!1;a.A&&a.video.pause()})}g.isMuted=function(){return this.L};g.isPlaybackManaged=function(){return this.U};
g.videoLoaded=function(){this.ea=!0;this.S=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.B=z(this.video.getMetadata()));var a=this.l.win.document;if(!this.B.artwork||0==this.B.artwork.length){var b;(b=Ba(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);
b&&(this.B.artwork=[{src:b}])}!this.B.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.S.getAttribute("title")||this.S.getAttribute("aria-label")||a.title)&&(this.B.title=a)}this.ba().start();this.updateVisibility();this.w&&Va(this)};
function Va(a){a.l.isVisible()&&a.X().then(function(b){a.hasAutoplay&&!a.userInteracted()&&b?a.U&&(a.w?(a.F.beginSession(),a.video.play(!0),a.fa=!0):(a.A&&a.F.endSession(),a.video.pause(),a.V=!0)):a.w?a.F.beginSession():a.A&&a.F.endSession()})}function Ta(a){a.video.isInteractive()&&a.video.hideControls();a.X().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),Wa(a))})}
function Wa(a){var b=a.video,c=a.video,d=c.element;c=c.win;if(!d.hasAttribute("noaudio")&&!d.signals().get("user-interacted")){var e=Ma(c,d),f=function(a){b.mutateElementSkipRemeasure(function(){return e.classList.toggle("amp-video-eq-play",a)})};b.mutateElementSkipRemeasure(function(){return d.appendChild(e)});var h=[P(d,"pause",function(){return f(!1)}),P(d,"playing",function(){return f(!0)})];b.signals().whenSignal("user-interacted").then(function(){var b=a.video,c=b.element;a.aa();b.isInteractive()&&
b.showControls();b.unmute();h.forEach(function(a){a()});b=c.querySelector(".amp-video-eq");c=c.querySelector("i-amphtml-video-mask");b&&L(b);c&&L(c)});if(b.isInteractive()){var k=pa(d)(Ka),l=function(a){b.mutateElementSkipRemeasure(function(){var b=a;void 0===b&&(b=k.hasAttribute("hidden"));b?k.removeAttribute("hidden"):k.setAttribute("hidden","")})};b.hideControls();b.mutateElementSkipRemeasure(function(){return d.appendChild(k)});[P(k,"click",function(){return M(b)}),P(d,"ad_start",function(){l(!1);
b.showControls()}),P(d,"ad_end",function(){l(!0);b.hideControls()}),P(d,"unmuted",function(){return M(b)})].forEach(function(a){return h.push(a)})}}}g.updateVisibility=function(a){var b=this.w;if(a)this.w=!0;else{var c=this.video.element.getIntersectionChangeEntry().intersectionRatio;this.w=.5<=(r(c)?c:0)}this.w!=b&&this.ea&&Va(this)};g.getPlayingState=function(){return this.A?this.A&&this.fa&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};g.isRollingAd=function(){return this.J};
g.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};
g.getAnalyticsDetails=function(){var a=this,b=this.video;return this.X().then(function(c){var d=b.element.getLayoutBox(),e=d.width;d=d.height;var f=a.hasAutoplay&&c,h=b.getPlayedRanges(),k=h.reduce(function(a,b){return a+b[1]-b[0]},0);return{autoplay:f,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.L,playedTotal:k,playedRangesJson:JSON.stringify(h),state:a.getPlayingState(),width:e}})};
function T(a,b){var c=this;this.D=b;this.l=a;this.C=this.G=null;this.h=[];this.m=[];this.H=function(){return Xa(c)};this.ka=function(a){return"playing_manual"==c.D.getPlayingState(a)};this.ja=function(a,b){a=a.element.getIntersectionChangeEntry();var d=a.intersectionRatio;a=a.boundingClientRect;var e=b.element.getIntersectionChangeEntry();b=e.boundingClientRect;d-=e.intersectionRatio;.1<Math.abs(d)?a=d:(e=J(c.l,"viewport"),d=Ya(e,a),e=Ya(e,b),a=d<e||d>e?d-e:a.top-b.top);return a};Za(this);$a(this)}
T.prototype.dispose=function(){this.m.forEach(function(a){return a()});this.m.length=0};T.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=I(this.l.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.h.push(a),P(b,"pause",this.H),P(b,"playing",this.H),P(b,"ended",this.H),a.signals().whenSignal("user-interacted").then(this.H),Xa(this))};
function $a(a){function b(){a.G=null}var c=a.l.getRootNode();a.m.push(P(c,"webkitfullscreenchange",b),P(c,"mozfullscreenchange",b),P(c,"fullscreenchange",b),P(c,"MSFullscreenChange",b))}T.prototype.isInLandscape=function(){var a=this.l.win;return a.screen&&"orientation"in a.screen?C(a.screen.orientation.type,"landscape"):90==Math.abs(a.orientation)};
function Za(a){var b=a.l.win,c=b.screen;c&&"orientation"in c&&a.m.push(P(c.orientation,"change",function(){return ab(a)}));a.m.push(P(b,"orientationchange",function(){return ab(a)}))}function ab(a){a.isInLandscape()?null!=a.C&&bb(a,a.C):a.G&&cb(a,a.G)}function bb(a,b){var c=I(a.l.win,"platform");a.G=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():db(a,b).then(function(){return b.fullscreenEnter()})}function cb(a,b){a.G=null;db(a,b,"center").then(function(){return b.fullscreenExit()})}
function db(a,b,c){c=void 0===c?null:c;var d=b.element,e=J(a.l,"viewport");return I(a.l.win,"timer").promise(330).then(function(){var a=d.getIntersectionChangeEntry().boundingClientRect,b=a.top;a=a.bottom;var k=e.getSize().height;return 0<=b&&a<=k?oa():e.animateScrollIntoView(d,c?c:a>k?"bottom":"top")})}function Xa(a){if(a.isInLandscape())return a.C;a.C=null;var b=a.h.filter(a.ka).sort(a.ja)[0];b&&.5<=b.element.getIntersectionChangeEntry().intersectionRatio&&(a.C=b);return a.C}
function Ya(a,b){var c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}function V(a,b){this.N=I(a,"timer");this.I=b;this.m=null;this.O=this.da=0}V.prototype.start=function(){var a=this,b=this.I.video.element;this.stop();this.m=this.m||[];eb(this)?fb(this,this.O):this.m.push(ya(b,"loadedmetadata",function(){eb(a)&&fb(a,a.O)}));this.m.push(P(b,"ended",function(){eb(a)&&gb(a,100)}))};V.prototype.stop=function(){if(this.m){for(;0<this.m.length;)this.m.pop()();this.O++}};
function eb(a){var b=a.I.video,c=b.getDuration();if(!(c&&!isNaN(c)&&1<c))return!1;250>50*c&&a.oa("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",5,"seconds long.",b.element);return!0}V.prototype.oa=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];w().warn.apply(w(),["video-manager"].concat(b))};
function fb(a,b){if(b==a.O){var c=a.I,d=a.N,e=c.video,f=function(){return fb(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else if((c=e.getDuration())&&!isNaN(c)&&1<c){var h=Math.min(Math.max(50*c,250),4E3),k=e.getCurrentTime()/c*100,l=5*Math.floor(k/5);r(l);gb(a,l);d.delay(f,h)}else d.delay(f,500)}}function gb(a,b){0>=b||a.da==b||(a.da=b,S(a.I,"video-percentage-played",{normalizedPercentage:b.toString()}))}
function S(a,b,c){var d=a.video;a.getAnalyticsDetails().then(function(a){c&&Object.assign(a,c);d.element.dispatchCustomEvent(b,a)})};function W(a){a=AMP.BaseElement.call(this,a)||this;a.j=null;a.Y=null;a.M=null;a.W=null;a.dataId=null;return a}var X=AMP.BaseElement;W.prototype=aa(X.prototype);W.prototype.constructor=W;if(ea)ea(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var hb=Object.getOwnPropertyDescriptor(X,Y);hb&&Object.defineProperty(W,Y,hb)}else W[Y]=X[Y];W.qa=X.prototype;g=W.prototype;g.preconnectCallback=function(a){I(this.win,"preconnect").url(this.getAmpDoc(),"https://playout.3qsdn.com",a)};
g.buildCallback=function(){var a=this.element;this.dataId=y(a.getAttribute("data-id"),"The data-id attribute is required for <amp-3q-player> %s",a);var b=new fa;this.M=b.promise;this.W=b.resolve;b=G(a);var c=H(b),d=na(c),e=d["video-manager"];e||(e=d["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});e.ctor||e.obj||(e.ctor=Na,e.context=b,e.resolve&&F(c,"video-manager"));J(a,"video-manager").register(this)};
g.layoutCallback=function(){var a=this;this.j=ua(this,"https://playout.3qsdn.com/"+encodeURIComponent(this.dataId)+"?autoplay=false&amp=true");this.Y=P(this.win,"message",this.na.bind(this));return this.loadPromise(this.j).then(function(){return a.M})};g.unlayoutCallback=function(){this.j&&(L(this.j),this.j=null);this.Y&&this.Y();var a=new fa;this.M=a.promise;this.W=a.resolve;return!0};
g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};g.viewportCallback=function(a){this.element.dispatchCustomEvent("amp:video:visibility",{visible:a})};g.pauseCallback=function(){this.j&&this.pause()};g.na=function(a){a.source&&a.source!=this.j.contentWindow||(a=a.data,a="[object Object]"===ja.call(a)?a:ra(a),null!=a&&(a=a.data,"ready"==a&&this.W(),ta(this.element,a)))};
function Z(a,b){a.M.then(function(){a.j&&a.j.contentWindow&&a.j.contentWindow.postMessage(b,"*")})}g.play=function(){Z(this,"play2")};g.pause=function(){Z(this,"pause")};g.mute=function(){Z(this,"mute")};g.unmute=function(){Z(this,"unmute")};g.supportsPlatform=function(){return!0};g.isInteractive=function(){return!0};g.showControls=function(){Z(this,"showControlbar")};g.hideControls=function(){Z(this,"hideControlbar")};
g.fullscreenEnter=function(){if(this.j){var a=this.j,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitEnterFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}};
g.fullscreenExit=function(){if(this.j){var a=this.j,b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a=a.ownerDocument)&&(b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen)&&b.call(a)}};
g.isFullscreen=function(){if(this.j){var a=this.j;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a};g.getMetadata=function(){};g.preimplementsMediaSessionAPI=function(){return!1};g.preimplementsAutoFullscreen=function(){return!1};g.getCurrentTime=function(){return 0};g.getDuration=function(){return 1};g.getPlayedRanges=function(){return[]};
g.seekTo=function(){this.user().error("amp-3q-player","`seekTo` not supported.")};(function(a){a.registerElement("amp-3q-player",W)})(self.AMP);
})});

//# sourceMappingURL=amp-3q-player-0.1.js.map