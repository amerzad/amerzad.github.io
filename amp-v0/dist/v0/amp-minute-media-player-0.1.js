(self.AMP=self.AMP||[]).push({n:"amp-minute-media-player",v:"2008290323002",f:(function(AMP,_){
'use strict';var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ca={a:!0},da={};try{da.__proto__=ca;n=da.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=m;function fa(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function ha(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ia=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function p(a){var b=Object.create(null);if(!a)return b;for(var c;c=ia.exec(a);){var d=ha(c[1],c[1]),e=c[2]?ha(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var q="";var ja=Object.prototype.toString;function r(a){return"[object Object]"===ja.call(a)}function t(a){return"number"===typeof a&&isFinite(a)};function u(a){var b=!1,c=null,d=a;return function(a){for(var e=[],h=0;h<arguments.length;++h)e[h-0]=arguments[h];b||(c=d.apply(self,e),b=!0,d=null);return c}};var v=self.AMP_CONFIG||{},ka=("string"==typeof v.cdnProxyRegex?new RegExp(v.cdnProxyRegex):v.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function la(a){if(self.document&&self.document.head&&(!self.location||!ka.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}v.cdnUrl||la("runtime-host");v.geoApiUrl||la("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var y=self.__AMP_LOG;function z(){if(!y.user)throw Error("failed to call initLogConstructor");return y.user}function A(a,b,c,d){return z().assert(a,b,c,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function B(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function C(a){return a||{}};var D;function E(a){var b=a.ownerDocument||a;D&&D.ownerDocument===b||(D=b.createElement("div"));return ma}function ma(a){var b=D;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function F(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};var G,na="Webkit webkit Moz moz ms O o".split(" ");function oa(a){var b={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"},c;for(c in b){var d=a,e=b[c];var f=d.style;var h=c;if(F(h,"--"))f=h;else{G||(G=B());var k=G[h];if(!k){k=h;if(void 0===f[h]){var l=h;l=l.charAt(0).toUpperCase()+l.slice(1);b:{for(var w=0;w<na.length;w++){var x=na[w]+l;if(void 0!==f[x]){l=x;break b}}l=""}void 0!==f[l]&&(k=l)}G[h]=k}f=k}f&&(F(f,"--")?d.style.setProperty(f,e):d.style[f]=e)}};C({c:!0,v:!0,a:!0,ad:!0});function pa(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){if(y.dev)a=y.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function H(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),e=c!=d;if(d.__AMP__EXPERIMENT_TOGGLES)var f=d.__AMP__EXPERIMENT_TOGGLES;else{d.__AMP__EXPERIMENT_TOGGLES=Object.create(null);f=d.__AMP__EXPERIMENT_TOGGLES;if(d.AMP_CONFIG)for(var h in d.AMP_CONFIG){var k=d.AMP_CONFIG[h];"number"===typeof k&&0<=k&&1>=k&&(f[h]=Math.random()<k)}if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-doc-opt-in"])&&0<d.AMP_CONFIG["allow-doc-opt-in"].length&&(h=d.AMP_CONFIG["allow-doc-opt-in"],
k=d.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){k=k.getAttribute("content").split(",");for(var l=0;l<k.length;l++)-1!=h.indexOf(k[l])&&(f[k[l]]=!0)}Object.assign(f,pa(d));if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-url-opt-in"])&&0<d.AMP_CONFIG["allow-url-opt-in"].length)for(h=d.AMP_CONFIG["allow-url-opt-in"],d=p(d.location.originalHash||d.location.hash),k=0;k<h.length;k++)l=d["e-"+h[k]],"1"==l&&(f[h[k]]=!0),"0"==l&&(f[h[k]]=!1)}var w=!!f["ampdoc-fie"];e&&!w?b=I(c,
b)?J(c,b):null:(a=K(a),a=L(a),b=I(a,b)?J(a,b):null);return b}function qa(a){var b=ra;a=K(a);var c=L(a),d=sa(c),e=d["video-manager"];e||(e=d["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});e.ctor||e.obj||(e.ctor=b,e.context=a,e.resolve&&J(c,"video-manager"))}function M(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return J(a,b)}function N(a,b){var c=K(a);c=L(c);return J(c,b)}
function K(a){return a.nodeType?M((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function L(a){a=K(a);return a.isSingleDoc()?a.win:a}function J(a,b){I(a,b);a=sa(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function sa(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function I(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};var ta;function ua(){return ta?ta:ta=Promise.resolve(void 0)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function O(a){a.parentElement&&a.parentElement.removeChild(a)};function va(a){a.signals().signal("user-interacted")};function wa(a){try{return JSON.parse(a)}catch(b){return null}};var xa=["<iframe frameborder=0 allowfullscreen></iframe>"];function ya(a,b){var c={ready:"load",playing:"playing",pause:"pause",ended:["ended","pause"],"ads-ad-started":"ad_start","ads-ad-ended":"ad_end"};if(null!=c[b]){var d=c[b];(Array.isArray(d)?d:[d]).forEach(function(b){a.dispatchCustomEvent(b)})}}function za(a,b){var c=a.element,d=E(c)(xa);a.propagateAttributes(["referrerpolicy"],d);d.src=H(c,"url").assertHttpsUrl(b,c);a.applyFillContent(d);c.appendChild(d);return d};var P;function Aa(a,b,c,d){var e=a,f=c;var h=function(a){try{return f(a)}catch(x){throw self.__AMP_REPORT_ERROR(x),x;}};var k=Ba(),l=!1;d&&(l=d.capture);e.addEventListener(b,h,k?d:l);return function(){e&&e.removeEventListener(b,h,k?d:l);h=e=f=null}}function Ba(){if(void 0!==P)return P;P=!1;try{var a={get capture(){P=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return P};function Ca(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function Q(a,b,c){return Aa(a,b,c,void 0)}function Da(a,b,c,d){var e=c,f=Aa(a,b,function(a){try{e(a)}finally{e=null,f()}},d);return f}function Ea(a){var b,c=new Promise(function(c){b=Da(a,"load",c,void 0)});c.then(b,b);return c};var Fa={title:"",artist:"",album:"",artwork:[{src:""}]};function Ga(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=wa(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}
function Ha(a,b){var c=H(a,"url");if(b&&b.artwork){var d=b.artwork;Array.isArray(d);d.forEach(function(a){a&&(a=r(a)?a.src:a,A(c.isProtocolValid(a)))})}};function Ia(){this.o=null}g=Ia.prototype;g.add=function(a){var b=this;this.o||(this.o=[]);this.o.push(a);return function(){b.remove(a)}};g.remove=function(a){this.o&&(a=this.o.indexOf(a),-1<a&&this.o.splice(a,1))};g.removeAll=function(){this.o&&(this.o.length=0)};g.fire=function(a){if(this.o)for(var b=this.o,c=0;c<b.length;c++)(0,b[c])(a)};g.getHandlerCount=function(){return this.o?this.o.length:0};function R(){this.M=!1;this.ba=new Ia}R.prototype.onSessionEnd=function(a){this.ba.add(a)};R.prototype.beginSession=function(){this.M=!0};R.prototype.endSession=function(){this.M&&this.ba.fire();this.M=!1};R.prototype.isSessionActive=function(){return this.M};function Ja(a,b){if(b)return Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;oa(c);(new Promise(function(a){return a(c.play())})).catch(function(){});return Promise.resolve(!c.paused)}var Ka=null;function La(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null};var Ma="i-amphtml-video-mask{display:block;z-index:1}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq .amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq .amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq[unpausable] .amp-video-eq-col div{animation-name:none}.amp-video-eq[unpausable].amp-video-eq-play .amp-video-eq-col div{animation-name:amp-video-eq-animation}.amp-video-eq.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";var Na=["<i-amphtml-video-mask class=i-amphtml-fill-content role=button></i-amphtml-video-mask>"],Oa=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];
function Pa(a,b){var c=E(b)(Oa),d=c.firstElementChild;for(b=0;4>b;b++){for(var e=d.cloneNode(!0),f=e.children,h=0;h<f.length;h++)f[h].classList.add("amp-video-eq-"+(b+1)+"-"+(h+1));c.appendChild(e)}O(d);M(a,"platform").isIos()&&c.setAttribute("unpausable","");return c};function ra(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=u(function(){var a=Ma,d=b.ampdoc.getHeadNode();var e=(e=d.__AMP_CSS_TR)?e(a):a;(a=d.__AMP_CSS_SM)||(a=d.__AMP_CSS_SM=B());var f=La(d,a,"amp-extension=amp-video-autoplay");f?f.textContent!==e&&(f.textContent=e):(f=(d.ownerDocument||d).createElement("style"),f.textContent=e,f.setAttribute("amp-extension","amp-video-autoplay"),e=La(d,a,"amp-runtime"),(e=void 0===e?null:e)?d.insertBefore(f,e.nextSibling):d.insertBefore(f,d.firstChild),
a["amp-extension=amp-video-autoplay"]=f)});this.oa=N(this.ampdoc,"viewport");this.T=this.h=null;this.ma=!1;this.N=M(a.win,"timer");this.pa=H(a.getHeadNode(),"action");this.$=function(){for(var a=0;a<b.h.length;a++){var d=b.h[a];if("paused"!==d.getPlayingState()){S(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();t(e)&&t(f)&&0<f&&(e=Ca(b.ampdoc.win,"video-manager.timeUpdate",C({time:e,percent:e/f})),b.pa.trigger(d.video.element,"timeUpdate",e,1))}}b.N.delay(b.$,1E3)};
this.R=u(function(){return new T(b.ampdoc,b)});this.N.delay(this.$,1E3)}g=ra.prototype;g.dispose=function(){this.R().dispose();if(this.h)for(var a=0;a<this.h.length;a++)this.h[a].dispose()};g.register=function(a){Qa(a);if(a.supportsPlatform()){this.h=this.h||[];var b=new Ra(this,a);Sa(this,b);this.h.push(b);b=b.video.element;b.dispatchCustomEvent("registered");b.classList.add("i-amphtml-media-component");a.signals().signal("registered");b.classList.add("i-amphtml-video-interface")}};
function Qa(a){function b(){return a.fullscreenEnter()}function c(b,c){a.registerAction(b,function(){va(a);c()},1)}c("play",function(){return a.play(!1)});c("pause",function(){return a.pause()});c("mute",function(){return a.mute()});c("unmute",function(){return a.unmute()});c("fullscreenenter",b);c("fullscreen",b)}
function Sa(a,b){var c=b.video.element;Q(c,"amp:video:visibility",function(a){(a=a.data)&&1==a.visible?b.updateVisibility(!0):b.updateVisibility()});Q(c,"reloaded",function(){b.videoLoaded()});if(!a.ma){var d=function(){for(var b=0;b<a.h.length;b++)a.h[b].updateVisibility()};a.oa.onScroll(d);a.oa.onChanged(d);a.ma=!0}}function U(a,b){if(Ta(a.T,b))return a.T;for(var c=0;c<a.h.length;c++){var d=a.h[c];if(Ta(d,b))return a.T=d}return null}g.registerForAutoFullscreen=function(a){this.R().register(a)};
g.wa=function(){return this.R()};g.getVideoStateProperty=function(a,b){var c=this.ampdoc.getRootNode(),d=z().assertElement(c.getElementById(a),'Could not find an element with id="'+a+'" for VIDEO_STATE');a=U(this,d);return(a?a.getAnalyticsDetails():ua()).then(function(a){return a?a[b]:""})};g.getPlayingState=function(a){return U(this,a).getPlayingState()};g.isMuted=function(a){return U(this,a).isMuted()};g.userInteracted=function(a){return U(this,a).userInteracted()};
g.isRollingAd=function(a){return U(this,a).isRollingAd()};g.pauseOtherVideos=function(a){this.h.forEach(function(b){b.isPlaybackManaged()&&b!==a&&"playing_manual"==b.getPlayingState()&&b.video.pause()})};function Ta(a,b){return!!a&&(a.video===b||a.video.element===b)}
function Ra(a,b){var c=this;this.F=a;this.j=a.ampdoc;this.video=b;this.U=!0;this.w=this.L=this.B=this.ga=!1;this.P=new R;this.P.onSessionEnd(function(){return S(c,"video-session")});this.G=new R;this.G.onSessionEnd(function(){return S(c,"video-session-visible")});this.Y=function(){var a=c.j.win,b=a||self;if(b.__AMP_MODE)b=b.__AMP_MODE;else{var f=p(b.location.originalHash||b.location.hash);var h=p(b.location.search);q||(q=b.AMP_CONFIG&&b.AMP_CONFIG.v?b.AMP_CONFIG.v:"012008290323002");f={localDev:!1,
development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(f.development)||b.AMP_DEV_MODE),examiner:"2"==f.development,esm:!1,geoOverride:f["amp-geo"],minified:!0,lite:void 0!=h.amp_lite,test:!1,log:f.log,version:"2008290323002",rtvVersion:q};b=b.__AMP_MODE=f}b=b.lite;Ka||(Ka=u(Ja));return Ka(a,b)};this.da=u(function(){return new V(c.j.win,c)});this.V=this.ia=!1;this.S=null;this.ea=this.A=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.F.installAutoplayStyles();this.C=Fa;
this.ta=function(){c.video.play(!1)};this.sa=function(){c.video.pause()};Ea(b.element).then(function(){return c.videoLoaded()});Q(b.element,"pause",function(){S(c,"video-pause");c.B=!1;c.V?c.V=!1:c.P.endSession()});Q(b.element,"play",function(){c.ea=!0;S(c,"video-play")});Q(b.element,"playing",function(){c.B=!0;"playing_manual"==c.getPlayingState()&&(c.ca(),c.F.pauseOtherVideos(c));var a=c.video,b=a.element;if(!a.preimplementsMediaSessionAPI()&&!b.classList.contains("i-amphtml-disable-mediasession")){a=
c.j.win;var f=c.C,h=c.ta,k=c.sa,l=a.navigator;"mediaSession"in l&&a.MediaMetadata&&(l.mediaSession.metadata=new a.MediaMetadata(Fa),Ha(b,f),l.mediaSession.metadata=new a.MediaMetadata(f),l.mediaSession.setActionHandler("play",h),l.mediaSession.setActionHandler("pause",k))}c.P.beginSession();c.w&&c.G.beginSession();c.ea||S(c,"video-play")});Q(b.element,"muted",function(){return c.A=!0});Q(b.element,"unmuted",function(){c.A=!1;c.F.pauseOtherVideos(c)});Q(b.element,"amp:video:tick",function(a){a=a.data;
var b=a.eventType;b&&Ua(c,b,a.vars)});Q(b.element,"ended",function(){c.L=!1;S(c,"video-ended")});Q(b.element,"ad_start",function(){c.L=!0;S(c,"video-ad-start")});Q(b.element,"ad_end",function(){c.L=!1;S(c,"video-ad-end")});b.signals().whenSignal("registered").then(function(){var a=c.video.element;(c.video.preimplementsAutoFullscreen()||!a.hasAttribute("rotate-to-fullscreen")?0:A(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",
a))&&c.F.registerForAutoFullscreen(c);c.updateVisibility();c.hasAutoplay&&Va(c)});this.ca=u(function(){var a=Ca(c.j.win,"firstPlay",C({})),b=c.video.element;H(b,"action").trigger(b,"firstPlay",a,1)});Wa(this)}g=Ra.prototype;g.dispose=function(){this.da().stop()};function Ua(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach(function(a){e["custom_"+a]=c[a]});S(a,"video-hosted-custom",e)}
function Wa(a){a.video.signals().whenSignal("playback-delegated").then(function(){a.U=!1;a.B&&a.video.pause()})}g.isMuted=function(){return this.A};g.isPlaybackManaged=function(){return this.U};
g.videoLoaded=function(){this.ga=!0;this.S=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.C=B(this.video.getMetadata()));var a=this.j.win.document;if(!this.C.artwork||0==this.C.artwork.length){var b;(b=Ga(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);
b&&(this.C.artwork=[{src:b}])}!this.C.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.S.getAttribute("title")||this.S.getAttribute("aria-label")||a.title)&&(this.C.title=a)}this.da().start();this.updateVisibility();this.w&&Xa(this)};
function Xa(a){a.j.isVisible()&&a.Y().then(function(b){a.hasAutoplay&&!a.userInteracted()&&b?a.U&&(a.w?(a.G.beginSession(),a.video.play(!0),a.ia=!0):(a.B&&a.G.endSession(),a.video.pause(),a.V=!0)):a.w?a.G.beginSession():a.B&&a.G.endSession()})}function Va(a){a.video.isInteractive()&&a.video.hideControls();a.Y().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),Ya(a))})}
function Ya(a){var b=a.video,c=a.video,d=c.element;c=c.win;if(!d.hasAttribute("noaudio")&&!d.signals().get("user-interacted")){var e=Pa(c,d),f=function(a){b.mutateElementSkipRemeasure(function(){return e.classList.toggle("amp-video-eq-play",a)})};b.mutateElementSkipRemeasure(function(){return d.appendChild(e)});var h=[Q(d,"pause",function(){return f(!1)}),Q(d,"playing",function(){return f(!0)})];b.signals().whenSignal("user-interacted").then(function(){var b=a.video,c=b.element;a.ca();b.isInteractive()&&
b.showControls();b.unmute();h.forEach(function(a){a()});b=c.querySelector(".amp-video-eq");c=c.querySelector("i-amphtml-video-mask");b&&O(b);c&&O(c)});if(b.isInteractive()){var k=E(d)(Na),l=function(a){b.mutateElementSkipRemeasure(function(){var b=a;void 0===b&&(b=k.hasAttribute("hidden"));b?k.removeAttribute("hidden"):k.setAttribute("hidden","")})};b.hideControls();b.mutateElementSkipRemeasure(function(){return d.appendChild(k)});[Q(k,"click",function(){return va(b)}),Q(d,"ad_start",function(){l(!1);
b.showControls()}),Q(d,"ad_end",function(){l(!0);b.hideControls()}),Q(d,"unmuted",function(){return va(b)})].forEach(function(a){return h.push(a)})}}}g.updateVisibility=function(a){var b=this.w;if(a)this.w=!0;else{var c=this.video.element.getIntersectionChangeEntry().intersectionRatio;this.w=.5<=(t(c)?c:0)}this.w!=b&&this.ga&&Xa(this)};g.getPlayingState=function(){return this.B?this.B&&this.ia&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};g.isRollingAd=function(){return this.L};
g.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};
g.getAnalyticsDetails=function(){var a=this,b=this.video;return this.Y().then(function(c){var d=b.element.getLayoutBox(),e=d.width;d=d.height;var f=a.hasAutoplay&&c,h=b.getPlayedRanges(),k=h.reduce(function(a,b){return a+b[1]-b[0]},0);return{autoplay:f,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.A,playedTotal:k,playedRangesJson:JSON.stringify(h),state:a.getPlayingState(),width:e}})};
function T(a,b){var c=this;this.F=b;this.j=a;this.D=this.H=null;this.h=[];this.m=[];this.I=function(){return Za(c)};this.ra=function(a){return"playing_manual"==c.F.getPlayingState(a)};this.qa=function(a,b){a=a.element.getIntersectionChangeEntry();var d=a.intersectionRatio;a=a.boundingClientRect;var e=b.element.getIntersectionChangeEntry();b=e.boundingClientRect;d-=e.intersectionRatio;.1<Math.abs(d)?a=d:(e=N(c.j,"viewport"),d=$a(e,a),e=$a(e,b),a=d<e||d>e?d-e:a.top-b.top);return a};ab(this);bb(this)}
T.prototype.dispose=function(){this.m.forEach(function(a){return a()});this.m.length=0};T.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=M(this.j.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.h.push(a),Q(b,"pause",this.I),Q(b,"playing",this.I),Q(b,"ended",this.I),a.signals().whenSignal("user-interacted").then(this.I),Za(this))};
function bb(a){function b(){a.H=null}var c=a.j.getRootNode();a.m.push(Q(c,"webkitfullscreenchange",b),Q(c,"mozfullscreenchange",b),Q(c,"fullscreenchange",b),Q(c,"MSFullscreenChange",b))}T.prototype.isInLandscape=function(){var a=this.j.win;return a.screen&&"orientation"in a.screen?F(a.screen.orientation.type,"landscape"):90==Math.abs(a.orientation)};
function ab(a){var b=a.j.win,c=b.screen;c&&"orientation"in c&&a.m.push(Q(c.orientation,"change",function(){return cb(a)}));a.m.push(Q(b,"orientationchange",function(){return cb(a)}))}function cb(a){a.isInLandscape()?null!=a.D&&db(a,a.D):a.H&&eb(a,a.H)}function db(a,b){var c=M(a.j.win,"platform");a.H=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():fb(a,b).then(function(){return b.fullscreenEnter()})}function eb(a,b){a.H=null;fb(a,b,"center").then(function(){return b.fullscreenExit()})}
function fb(a,b,c){c=void 0===c?null:c;var d=b.element,e=N(a.j,"viewport");return M(a.j.win,"timer").promise(330).then(function(){var a=d.getIntersectionChangeEntry().boundingClientRect,b=a.top;a=a.bottom;var k=e.getSize().height;return 0<=b&&a<=k?ua():e.animateScrollIntoView(d,c?c:a>k?"bottom":"top")})}function Za(a){if(a.isInLandscape())return a.D;a.D=null;var b=a.h.filter(a.ra).sort(a.qa)[0];b&&.5<=b.element.getIntersectionChangeEntry().intersectionRatio&&(a.D=b);return a.D}
function $a(a,b){var c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}function V(a,b){this.N=M(a,"timer");this.K=b;this.m=null;this.O=this.fa=0}V.prototype.start=function(){var a=this,b=this.K.video.element;this.stop();this.m=this.m||[];gb(this)?hb(this,this.O):this.m.push(Da(b,"loadedmetadata",function(){gb(a)&&hb(a,a.O)}));this.m.push(Q(b,"ended",function(){gb(a)&&ib(a,100)}))};V.prototype.stop=function(){if(this.m){for(;0<this.m.length;)this.m.pop()();this.O++}};
function gb(a){var b=a.K.video,c=b.getDuration();if(!(c&&!isNaN(c)&&1<c))return!1;250>50*c&&a.va("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",5,"seconds long.",b.element);return!0}V.prototype.va=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];z().warn.apply(z(),["video-manager"].concat(b))};
function hb(a,b){if(b==a.O){var c=a.K,d=a.N,e=c.video,f=function(){return hb(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else if((c=e.getDuration())&&!isNaN(c)&&1<c){var h=Math.min(Math.max(50*c,250),4E3),k=e.getCurrentTime()/c*100,l=5*Math.floor(k/5);t(l);ib(a,l);d.delay(f,h)}else d.delay(f,500)}}function ib(a,b){0>=b||a.fa==b||(a.fa=b,S(a.K,"video-percentage-played",{normalizedPercentage:b.toString()}))}
function S(a,b,c){var d=a.video;a.getAnalyticsDetails().then(function(a){c&&Object.assign(a,c);d.element.dispatchCustomEvent(b,a)})};function W(a){a=AMP.BaseElement.call(this,a)||this;a.l=null;a.J="";a.ua=null;a.aa="";a.ja="";a.ka="";a.na="";a.ha="";a.la="";a.W=null;a.X=null;a.Z=null;a.A=!1;return a}var X=AMP.BaseElement;W.prototype=aa(X.prototype);W.prototype.constructor=W;if(ea)ea(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var jb=Object.getOwnPropertyDescriptor(X,Y);jb&&Object.defineProperty(W,Y,jb)}else W[Y]=X[Y];W.xa=X.prototype;g=W.prototype;
g.preconnectCallback=function(a){M(this.win,"preconnect").url(this.getAmpDoc(),kb(this));M(this.win,"preconnect").url(this.getAmpDoc(),"https://www.oo-syringe.com",a)};
g.buildCallback=function(){var a=this.element;this.J=A(a.getAttribute("data-content-type"),"The data-content-type must be specified for <amp-minute-media-player> %s",a);"semantic"!=this.J?this.aa=A(a.getAttribute("data-content-id"),"The data-content-id must be specified for %s data-content-type in <amp-minute-media-player> %s",this.J,a):(a=this.element,this.ka=a.getAttribute("data-scanned-element")||"",this.na=a.getAttribute("data-tags")||"",this.ha=a.getAttribute("data-minimum-date-factor")||"",
this.ja=a.getAttribute("data-scanned-element-type")||"",this.la=a.getAttribute("data-scoped-keywords")||"");a=new fa;this.W=a.promise;this.X=a.resolve};g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a||"flex-item"==a};
function kb(a){a=C({content_type:a.J||void 0,content_id:a.aa||void 0,scanned_element_type:a.ja||void 0,scanned_element:a.ka||void 0,tags:a.na||void 0,minimum_date_factor:a.ha||void 0,scoped_keywords:a.la||void 0,player_id:a.ua||void 0});var b=[];for(f in a){var c=a[f];if(null!=c)if(Array.isArray(c))for(var d=0;d<c.length;d++){var e=c[d];b.push(encodeURIComponent(f)+"="+encodeURIComponent(e))}else b.push(encodeURIComponent(f)+"="+encodeURIComponent(c))}a=b.join("&");if(a){var f=["https://www.oo-syringe.com/prod/AMP/minute-media-player.html"];
b=f[0].split("?",2);a=b[0]+(b[1]?"?"+b[1]+"&"+a:"?"+a);f=a+=f[1]?"#"+f[1]:""}else f="https://www.oo-syringe.com/prod/AMP/minute-media-player.html";return f}
g.layoutCallback=function(){var a=this,b=this.element;this.l=za(this,kb(this));this.Z=Q(this.win,"message",function(b){var c=a.l;c&&b.source==c.contentWindow&&"https://www.oo-syringe.com"==b.origin&&(b=b.data)&&(r(b)||F(b,"{"))&&(b=r(b)?b:wa(b),null!=b&&(ya(a.element,b.event),"mute"===b.event&&(b=b.value,a.A!=b&&(a.A=b,a.element.dispatchCustomEvent(a.A?"muted":"unmuted")))))});qa(this.element);N(this.element,"video-manager").register(this);var c=this.loadPromise(this.l).then(function(){b.dispatchCustomEvent("load")});
this.X(c);return c};g.unlayoutCallback=function(){this.l&&(O(this.l),this.l=null);this.Z&&this.Z();var a=new fa;this.W=a.promise;this.X=a.resolve;return!0};function Z(a,b){a.W.then(function(){a.l&&a.l.contentWindow&&a.l.contentWindow.postMessage(b,"https://www.oo-syringe.com")})}g.supportsPlatform=function(){return!0};g.isInteractive=function(){return!0};g.getCurrentTime=function(){return 0};g.getDuration=function(){return 0};g.getPlayedRanges=function(){return[]};g.play=function(){Z(this,"play")};
g.pause=function(){Z(this,"pause")};g.mute=function(){Z(this,"mute")};g.unmute=function(){Z(this,"unmute")};g.showControls=function(){};g.hideControls=function(){};g.getMetadata=function(){};g.preimplementsAutoFullscreen=function(){return!1};g.preimplementsMediaSessionAPI=function(){return!1};g.fullscreenEnter=function(){if(this.l){var a=this.l,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitEnterFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}};
g.fullscreenExit=function(){if(this.l){var a=this.l,b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a=a.ownerDocument)&&(b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen)&&b.call(a)}};
g.isFullscreen=function(){if(this.l){var a=this.l;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a};g.seekTo=function(){this.user().error("amp-minute-media-player","`seekTo` not supported.")};(function(a){a.registerElement("amp-minute-media-player",W)})(self.AMP);
})});

//# sourceMappingURL=amp-minute-media-player-0.1.js.map
