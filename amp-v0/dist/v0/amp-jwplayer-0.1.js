(self.AMP=self.AMP||[]).push({n:"amp-jwplayer",v:"2008290323002",f:(function(AMP,_){
'use strict';var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var l;
if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var n;a:{var ca={a:!0},da={};try{da.__proto__=ca;n=da.a;break a}catch(a){}n=!1}l=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=l;function fa(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function ha(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ia=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function p(a){var b=Object.create(null);if(!a)return b;for(var c;c=ia.exec(a);){var d=ha(c[1],c[1]),e=c[2]?ha(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var q="";var ja=Object.prototype.toString;function r(a){return"[object Object]"===ja.call(a)}function t(a){return"number"===typeof a&&isFinite(a)};function u(a){var b=!1,c=null,d=a;return function(a){for(var e=[],h=0;h<arguments.length;++h)e[h-0]=arguments[h];b||(c=d.apply(self,e),b=!0,d=null);return c}};var v=self.AMP_CONFIG||{},ka=("string"==typeof v.cdnProxyRegex?new RegExp(v.cdnProxyRegex):v.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function la(a){if(self.document&&self.document.head&&(!self.location||!ka.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}v.cdnUrl||la("runtime-host");v.geoApiUrl||la("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function x(){if(!w.user)throw Error("failed to call initLogConstructor");return w.user}function y(){if(w.dev)return w.dev;throw Error("failed to call initLogConstructor");}function z(a,b,c){return x().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function A(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function B(a){return a||{}};function C(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};B({c:!0,v:!0,a:!0,ad:!0});function ma(a,b){if(!b)return a;var c=a.split("#",2),d=c[0].split("?",2),e=d[0]+(d[1]?"?"+d[1]+"&"+b:"?"+b);return e+=c[1]?"#"+c[1]:""}function na(a){var b=[],c;for(c in a){var d=a[c];if(null!=d)if(Array.isArray(d))for(var e=0;e<d.length;e++){var f=d[e];b.push(encodeURIComponent(c)+"="+encodeURIComponent(f))}else e=d,b.push(encodeURIComponent(c)+"="+encodeURIComponent(e))}return b.join("&")};function pa(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){y().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function D(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),e=c!=d;if(d.__AMP__EXPERIMENT_TOGGLES)var f=d.__AMP__EXPERIMENT_TOGGLES;else{d.__AMP__EXPERIMENT_TOGGLES=Object.create(null);f=d.__AMP__EXPERIMENT_TOGGLES;if(d.AMP_CONFIG)for(var h in d.AMP_CONFIG){var k=d.AMP_CONFIG[h];"number"===typeof k&&0<=k&&1>=k&&(f[h]=Math.random()<k)}if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-doc-opt-in"])&&0<d.AMP_CONFIG["allow-doc-opt-in"].length&&(h=d.AMP_CONFIG["allow-doc-opt-in"],
k=d.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){k=k.getAttribute("content").split(",");for(var m=0;m<k.length;m++)-1!=h.indexOf(k[m])&&(f[k[m]]=!0)}Object.assign(f,pa(d));if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-url-opt-in"])&&0<d.AMP_CONFIG["allow-url-opt-in"].length)for(h=d.AMP_CONFIG["allow-url-opt-in"],d=p(d.location.originalHash||d.location.hash),k=0;k<h.length;k++)m=d["e-"+h[k]],"1"==m&&(f[h[k]]=!0),"0"==m&&(f[h[k]]=!1)}var Ta=!!f["ampdoc-fie"];e&&!Ta?b=E(c,
b)?F(c,b):null:(a=G(a),a=H(a),b=E(a,b)?F(a,b):null);return b}function I(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return F(a,b)}function J(a,b){var c=G(a);c=H(c);return F(c,b)}function G(a){return a.nodeType?I((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function H(a){a=G(a);return a.isSingleDoc()?a.win:a}function F(a,b){E(a,b);a=qa(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function qa(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function E(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};var K;function ra(){return K?K:K=Promise.resolve(void 0)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function L(a){a.parentElement&&a.parentElement.removeChild(a)};function M(a){return I(a,"platform")};function sa(a){a.signals().signal("user-interacted")};var N;function ta(a){a=a.ownerDocument||a;N&&N.ownerDocument===a||(N=a.createElement("div"));return ua}function ua(a){var b=N;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function va(a){try{return JSON.parse(a)}catch(b){return null}};var wa=["<iframe frameborder=0 allowfullscreen></iframe>"];function xa(a,b){var c=ya;if(null==c[b])return!1;var d=c[b];(Array.isArray(d)?d:[d]).forEach(function(b){a.dispatchCustomEvent(b)});return!0}function za(a,b,c){var d=a.element,e=ta(d)(wa);c&&e.setAttribute("name",c);a.propagateAttributes(["referrerpolicy"],e);e.src=D(d,"url").assertHttpsUrl(b,d);a.applyFillContent(e);d.appendChild(e);return e}function Aa(a){var b=a.getAttribute("allow")||"";a.setAttribute("allow",b+"autoplay;")};var O;function Ba(a,b,c,d){var e=a,f=c;var h=function(a){try{return f(a)}catch(oa){throw self.__AMP_REPORT_ERROR(oa),oa;}};var k=Ca(),m=!1;d&&(m=d.capture);e.addEventListener(b,h,k?d:m);return function(){e&&e.removeEventListener(b,h,k?d:m);h=e=f=null}}function Ca(){if(void 0!==O)return O;O=!1;try{var a={get capture(){O=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return O};function Da(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function P(a,b,c){return Ba(a,b,c,void 0)}function Ea(a,b,c,d){var e=c,f=Ba(a,b,function(a){try{e(a)}finally{e=null,f()}},d);return f}function Fa(a){var b,c=new Promise(function(c){b=Ea(a,"load",c,void 0)});c.then(b,b);return c};var Q,Ga="Webkit webkit Moz moz ms O o".split(" ");function Ha(a,b,c){var d=a.style;if(!C(b,"--")){Q||(Q=A());var e=Q[b];if(!e){e=b;if(void 0===d[b]){var f=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var h=0;h<Ga.length;h++){var k=Ga[h]+f;if(void 0!==d[k]){f=k;break b}}f=""}void 0!==d[f]&&(e=f)}Q[b]=e}b=e}b&&(C(b,"--")?a.style.setProperty(b,c):a.style[b]=c)}function Ia(a){var b={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"},c;for(c in b)Ha(a,c,b[c])};function Ja(a){var b=B({scrolling:"no"}),c;for(c in b)a.setAttribute(c,b[c]);Ha(a,"overflow","hidden");return a};var Ka={title:"",artist:"",album:"",artwork:[{src:""}]};function La(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=va(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}
function Ma(a,b){var c=D(a,"url");if(b&&b.artwork){var d=b.artwork;Array.isArray(d);d.forEach(function(a){a&&(a=r(a)?a.src:a,z(c.isProtocolValid(a)))})}};function Na(){this.o=null}g=Na.prototype;g.add=function(a){var b=this;this.o||(this.o=[]);this.o.push(a);return function(){b.remove(a)}};g.remove=function(a){this.o&&(a=this.o.indexOf(a),-1<a&&this.o.splice(a,1))};g.removeAll=function(){this.o&&(this.o.length=0)};g.fire=function(a){if(this.o)for(var b=this.o,c=0;c<b.length;c++)(0,b[c])(a)};g.getHandlerCount=function(){return this.o?this.o.length:0};function R(){this.K=!1;this.ga=new Na}R.prototype.onSessionEnd=function(a){this.ga.add(a)};R.prototype.beginSession=function(){this.K=!0};R.prototype.endSession=function(){this.K&&this.ga.fire();this.K=!1};R.prototype.isSessionActive=function(){return this.K};function Oa(a,b){if(b)return Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;Ia(c);(new Promise(function(a){return a(c.play())})).catch(function(){});return Promise.resolve(!c.paused)}var Pa=null;function Qa(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null};var Ra="i-amphtml-video-mask{display:block;z-index:1}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq .amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq .amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq[unpausable] .amp-video-eq-col div{animation-name:none}.amp-video-eq[unpausable].amp-video-eq-play .amp-video-eq-col div{animation-name:amp-video-eq-animation}.amp-video-eq.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";var Sa=["<i-amphtml-video-mask class=i-amphtml-fill-content role=button></i-amphtml-video-mask>"],Ua=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];
function Va(a,b){var c=ta(b)(Ua),d=c.firstElementChild;for(b=0;4>b;b++){for(var e=d.cloneNode(!0),f=e.children,h=0;h<f.length;h++)f[h].classList.add("amp-video-eq-"+(b+1)+"-"+(h+1));c.appendChild(e)}L(d);M(a).isIos()&&c.setAttribute("unpausable","");return c};function Wa(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=u(function(){var a=Ra,d=b.ampdoc.getHeadNode();var e=(e=d.__AMP_CSS_TR)?e(a):a;(a=d.__AMP_CSS_SM)||(a=d.__AMP_CSS_SM=A());var f=Qa(d,a,"amp-extension=amp-video-autoplay");f?f.textContent!==e&&(f.textContent=e):(f=(d.ownerDocument||d).createElement("style"),f.textContent=e,f.setAttribute("amp-extension","amp-video-autoplay"),e=Qa(d,a,"amp-runtime"),(e=void 0===e?null:e)?d.insertBefore(f,e.nextSibling):d.insertBefore(f,d.firstChild),
a["amp-extension=amp-video-autoplay"]=f)});this.sa=J(this.ampdoc,"viewport");this.W=this.j=null;this.ra=!1;this.N=I(a.win,"timer");this.ta=D(a.getHeadNode(),"action");this.ca=function(){for(var a=0;a<b.j.length;a++){var d=b.j[a];if("paused"!==d.getPlayingState()){S(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();t(e)&&t(f)&&0<f&&(e=Da(b.ampdoc.win,"video-manager.timeUpdate",B({time:e,percent:e/f})),b.ta.trigger(d.video.element,"timeUpdate",e,1))}}b.N.delay(b.ca,1E3)};
this.U=u(function(){return new T(b.ampdoc,b)});this.N.delay(this.ca,1E3)}g=Wa.prototype;g.dispose=function(){this.U().dispose();if(this.j)for(var a=0;a<this.j.length;a++)this.j[a].dispose()};g.register=function(a){Xa(a);if(a.supportsPlatform()){this.j=this.j||[];var b=new Ya(this,a);Za(this,b);this.j.push(b);b=b.video.element;b.dispatchCustomEvent("registered");b.classList.add("i-amphtml-media-component");a.signals().signal("registered");b.classList.add("i-amphtml-video-interface")}};
function Xa(a){function b(){return a.fullscreenEnter()}function c(b,c){a.registerAction(b,function(){sa(a);c()},1)}c("play",function(){return a.play(!1)});c("pause",function(){return a.pause()});c("mute",function(){return a.mute()});c("unmute",function(){return a.unmute()});c("fullscreenenter",b);c("fullscreen",b)}
function Za(a,b){var c=b.video.element;P(c,"amp:video:visibility",function(a){(a=a.data)&&1==a.visible?b.updateVisibility(!0):b.updateVisibility()});P(c,"reloaded",function(){b.videoLoaded()});if(!a.ra){var d=function(){for(var b=0;b<a.j.length;b++)a.j[b].updateVisibility()};a.sa.onScroll(d);a.sa.onChanged(d);a.ra=!0}}function U(a,b){if($a(a.W,b))return a.W;for(var c=0;c<a.j.length;c++){var d=a.j[c];if($a(d,b))return a.W=d}return null}g.registerForAutoFullscreen=function(a){this.U().register(a)};
g.Aa=function(){return this.U()};g.getVideoStateProperty=function(a,b){var c=this.ampdoc.getRootNode(),d=x().assertElement(c.getElementById(a),'Could not find an element with id="'+a+'" for VIDEO_STATE');a=U(this,d);return(a?a.getAnalyticsDetails():ra()).then(function(a){return a?a[b]:""})};g.getPlayingState=function(a){return U(this,a).getPlayingState()};g.isMuted=function(a){return U(this,a).isMuted()};g.userInteracted=function(a){return U(this,a).userInteracted()};
g.isRollingAd=function(a){return U(this,a).isRollingAd()};g.pauseOtherVideos=function(a){this.j.forEach(function(b){b.isPlaybackManaged()&&b!==a&&"playing_manual"==b.getPlayingState()&&b.video.pause()})};function $a(a,b){return!!a&&(a.video===b||a.video.element===b)}
function Ya(a,b){var c=this;this.D=a;this.l=a.ampdoc;this.video=b;this.X=!0;this.w=this.J=this.A=this.la=!1;this.P=new R;this.P.onSessionEnd(function(){return S(c,"video-session")});this.F=new R;this.F.onSessionEnd(function(){return S(c,"video-session-visible")});this.$=function(){var a=c.l.win,b=a||self;if(b.__AMP_MODE)b=b.__AMP_MODE;else{var f=p(b.location.originalHash||b.location.hash);var h=p(b.location.search);q||(q=b.AMP_CONFIG&&b.AMP_CONFIG.v?b.AMP_CONFIG.v:"012008290323002");f={localDev:!1,
development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(f.development)||b.AMP_DEV_MODE),examiner:"2"==f.development,esm:!1,geoOverride:f["amp-geo"],minified:!0,lite:void 0!=h.amp_lite,test:!1,log:f.log,version:"2008290323002",rtvVersion:q};b=b.__AMP_MODE=f}b=b.lite;Pa||(Pa=u(Oa));return Pa(a,b)};this.ia=u(function(){return new V(c.l.win,c)});this.Z=this.ma=!1;this.V=null;this.ja=this.L=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.D.installAutoplayStyles();this.B=Ka;
this.xa=function(){c.video.play(!1)};this.wa=function(){c.video.pause()};Fa(b.element).then(function(){return c.videoLoaded()});P(b.element,"pause",function(){S(c,"video-pause");c.A=!1;c.Z?c.Z=!1:c.P.endSession()});P(b.element,"play",function(){c.ja=!0;S(c,"video-play")});P(b.element,"playing",function(){c.A=!0;"playing_manual"==c.getPlayingState()&&(c.ha(),c.D.pauseOtherVideos(c));var a=c.video,b=a.element;if(!a.preimplementsMediaSessionAPI()&&!b.classList.contains("i-amphtml-disable-mediasession")){a=
c.l.win;var f=c.B,h=c.xa,k=c.wa,m=a.navigator;"mediaSession"in m&&a.MediaMetadata&&(m.mediaSession.metadata=new a.MediaMetadata(Ka),Ma(b,f),m.mediaSession.metadata=new a.MediaMetadata(f),m.mediaSession.setActionHandler("play",h),m.mediaSession.setActionHandler("pause",k))}c.P.beginSession();c.w&&c.F.beginSession();c.ja||S(c,"video-play")});P(b.element,"muted",function(){return c.L=!0});P(b.element,"unmuted",function(){c.L=!1;c.D.pauseOtherVideos(c)});P(b.element,"amp:video:tick",function(a){a=a.data;
var b=a.eventType;b&&ab(c,b,a.vars)});P(b.element,"ended",function(){c.J=!1;S(c,"video-ended")});P(b.element,"ad_start",function(){c.J=!0;S(c,"video-ad-start")});P(b.element,"ad_end",function(){c.J=!1;S(c,"video-ad-end")});b.signals().whenSignal("registered").then(function(){var a=c.video.element;(c.video.preimplementsAutoFullscreen()||!a.hasAttribute("rotate-to-fullscreen")?0:z(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",
a))&&c.D.registerForAutoFullscreen(c);c.updateVisibility();c.hasAutoplay&&bb(c)});this.ha=u(function(){var a=Da(c.l.win,"firstPlay",B({})),b=c.video.element;D(b,"action").trigger(b,"firstPlay",a,1)});cb(this)}g=Ya.prototype;g.dispose=function(){this.ia().stop()};function ab(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach(function(a){e["custom_"+a]=c[a]});S(a,"video-hosted-custom",e)}
function cb(a){a.video.signals().whenSignal("playback-delegated").then(function(){a.X=!1;a.A&&a.video.pause()})}g.isMuted=function(){return this.L};g.isPlaybackManaged=function(){return this.X};
g.videoLoaded=function(){this.la=!0;this.V=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.B=A(this.video.getMetadata()));var a=this.l.win.document;if(!this.B.artwork||0==this.B.artwork.length){var b;(b=La(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);
b&&(this.B.artwork=[{src:b}])}!this.B.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.V.getAttribute("title")||this.V.getAttribute("aria-label")||a.title)&&(this.B.title=a)}this.ia().start();this.updateVisibility();this.w&&db(this)};
function db(a){a.l.isVisible()&&a.$().then(function(b){a.hasAutoplay&&!a.userInteracted()&&b?a.X&&(a.w?(a.F.beginSession(),a.video.play(!0),a.ma=!0):(a.A&&a.F.endSession(),a.video.pause(),a.Z=!0)):a.w?a.F.beginSession():a.A&&a.F.endSession()})}function bb(a){a.video.isInteractive()&&a.video.hideControls();a.$().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),eb(a))})}
function eb(a){var b=a.video,c=a.video,d=c.element;c=c.win;if(!d.hasAttribute("noaudio")&&!d.signals().get("user-interacted")){var e=Va(c,d),f=function(a){b.mutateElementSkipRemeasure(function(){return e.classList.toggle("amp-video-eq-play",a)})};b.mutateElementSkipRemeasure(function(){return d.appendChild(e)});var h=[P(d,"pause",function(){return f(!1)}),P(d,"playing",function(){return f(!0)})];b.signals().whenSignal("user-interacted").then(function(){var b=a.video,c=b.element;a.ha();b.isInteractive()&&
b.showControls();b.unmute();h.forEach(function(a){a()});b=c.querySelector(".amp-video-eq");c=c.querySelector("i-amphtml-video-mask");b&&L(b);c&&L(c)});if(b.isInteractive()){var k=ta(d)(Sa),m=function(a){b.mutateElementSkipRemeasure(function(){var b=a;void 0===b&&(b=k.hasAttribute("hidden"));b?k.removeAttribute("hidden"):k.setAttribute("hidden","")})};b.hideControls();b.mutateElementSkipRemeasure(function(){return d.appendChild(k)});[P(k,"click",function(){return sa(b)}),P(d,"ad_start",function(){m(!1);
b.showControls()}),P(d,"ad_end",function(){m(!0);b.hideControls()}),P(d,"unmuted",function(){return sa(b)})].forEach(function(a){return h.push(a)})}}}g.updateVisibility=function(a){var b=this.w;if(a)this.w=!0;else{var c=this.video.element.getIntersectionChangeEntry().intersectionRatio;this.w=.5<=(t(c)?c:0)}this.w!=b&&this.la&&db(this)};g.getPlayingState=function(){return this.A?this.A&&this.ma&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};g.isRollingAd=function(){return this.J};
g.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};
g.getAnalyticsDetails=function(){var a=this,b=this.video;return this.$().then(function(c){var d=b.element.getLayoutBox(),e=d.width;d=d.height;var f=a.hasAutoplay&&c,h=b.getPlayedRanges(),k=h.reduce(function(a,b){return a+b[1]-b[0]},0);return{autoplay:f,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.L,playedTotal:k,playedRangesJson:JSON.stringify(h),state:a.getPlayingState(),width:e}})};
function T(a,b){var c=this;this.D=b;this.l=a;this.C=this.G=null;this.j=[];this.m=[];this.H=function(){return fb(c)};this.va=function(a){return"playing_manual"==c.D.getPlayingState(a)};this.ua=function(a,b){a=a.element.getIntersectionChangeEntry();var d=a.intersectionRatio;a=a.boundingClientRect;var e=b.element.getIntersectionChangeEntry();b=e.boundingClientRect;d-=e.intersectionRatio;.1<Math.abs(d)?a=d:(e=J(c.l,"viewport"),d=gb(e,a),e=gb(e,b),a=d<e||d>e?d-e:a.top-b.top);return a};hb(this);ib(this)}
T.prototype.dispose=function(){this.m.forEach(function(a){return a()});this.m.length=0};T.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=M(this.l.win),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.j.push(a),P(b,"pause",this.H),P(b,"playing",this.H),P(b,"ended",this.H),a.signals().whenSignal("user-interacted").then(this.H),fb(this))};
function ib(a){function b(){a.G=null}var c=a.l.getRootNode();a.m.push(P(c,"webkitfullscreenchange",b),P(c,"mozfullscreenchange",b),P(c,"fullscreenchange",b),P(c,"MSFullscreenChange",b))}T.prototype.isInLandscape=function(){var a=this.l.win;return a.screen&&"orientation"in a.screen?C(a.screen.orientation.type,"landscape"):90==Math.abs(a.orientation)};
function hb(a){var b=a.l.win,c=b.screen;c&&"orientation"in c&&a.m.push(P(c.orientation,"change",function(){return jb(a)}));a.m.push(P(b,"orientationchange",function(){return jb(a)}))}function jb(a){a.isInLandscape()?null!=a.C&&kb(a,a.C):a.G&&lb(a,a.G)}function kb(a,b){var c=M(a.l.win);a.G=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():mb(a,b).then(function(){return b.fullscreenEnter()})}function lb(a,b){a.G=null;mb(a,b,"center").then(function(){return b.fullscreenExit()})}
function mb(a,b,c){c=void 0===c?null:c;var d=b.element,e=J(a.l,"viewport");return I(a.l.win,"timer").promise(330).then(function(){var a=d.getIntersectionChangeEntry().boundingClientRect,b=a.top;a=a.bottom;var k=e.getSize().height;return 0<=b&&a<=k?ra():e.animateScrollIntoView(d,c?c:a>k?"bottom":"top")})}function fb(a){if(a.isInLandscape())return a.C;a.C=null;var b=a.j.filter(a.va).sort(a.ua)[0];b&&.5<=b.element.getIntersectionChangeEntry().intersectionRatio&&(a.C=b);return a.C}
function gb(a,b){var c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}function V(a,b){this.N=I(a,"timer");this.I=b;this.m=null;this.O=this.ka=0}V.prototype.start=function(){var a=this,b=this.I.video.element;this.stop();this.m=this.m||[];nb(this)?ob(this,this.O):this.m.push(Ea(b,"loadedmetadata",function(){nb(a)&&ob(a,a.O)}));this.m.push(P(b,"ended",function(){nb(a)&&pb(a,100)}))};V.prototype.stop=function(){if(this.m){for(;0<this.m.length;)this.m.pop()();this.O++}};
function nb(a){var b=a.I.video,c=b.getDuration();if(!(c&&!isNaN(c)&&1<c))return!1;250>50*c&&a.za("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",5,"seconds long.",b.element);return!0}V.prototype.za=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];x().warn.apply(x(),["video-manager"].concat(b))};
function ob(a,b){if(b==a.O){var c=a.I,d=a.N,e=c.video,f=function(){return ob(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else if((c=e.getDuration())&&!isNaN(c)&&1<c){var h=Math.min(Math.max(50*c,250),4E3),k=e.getCurrentTime()/c*100,m=5*Math.floor(k/5);t(m);pb(a,m);d.delay(f,h)}else d.delay(f,500)}}function pb(a,b){0>=b||a.ka==b||(a.ka=b,S(a.I,"video-percentage-played",{normalizedPercentage:b.toString()}))}
function S(a,b,c){var d=a.video;a.getAnalyticsDetails().then(function(a){c&&Object.assign(a,c);d.element.dispatchCustomEvent(b,a)})};var ya={ready:"load",play:"playing",pause:"pause",complete:"ended",visible:"amp:video:visibility",adImpression:"ad_start",adComplete:"ad_end",adPlay:"playing",adPause:"pause"};
function W(a){var b=AMP.BaseElement.call(this,a)||this;b.S="";b.qa="";b.R="";b.ea="";b.da="";b.h=null;b.oa=null;b.pa=null;b.ya=u(function(a){var c=b.element;b.M=Object.assign({},a.playlistItem);b.pa(b.h);a.muted&&c.dispatchCustomEvent("muted");c.dispatchCustomEvent("load")});b.Y=b.Y.bind(b);b.M=null;b.fa=0;b.T=0;b.na=[];b.aa=null;b.ba=null;return b}var X=AMP.BaseElement;W.prototype=aa(X.prototype);W.prototype.constructor=W;
if(ea)ea(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var qb=Object.getOwnPropertyDescriptor(X,Y);qb&&Object.defineProperty(W,Y,qb)}else W[Y]=X[Y];W.Ba=X.prototype;g=W.prototype;g.supportsPlatform=function(){return!0};g.isInteractive=function(){return!0};g.getCurrentTime=function(){return this.T};g.getDuration=function(){return this.fa||this.M.duration||0};g.getPlayedRanges=function(){return this.na||[]};g.play=function(a){var b;a&&(b="auto");Z(this,"play",{reason:b})};
g.pauseCallback=function(){this.pause()};g.pause=function(){Z(this,"pause")};g.mute=function(){Z(this,"setMute",!0)};g.unmute=function(){Z(this,"setMute",!1)};g.showControls=function(){Z(this,"setControls",!0)};g.hideControls=function(){Z(this,"setControls",!1)};g.getMetadata=function(){var a=this.win,b=this.M;if(a.MediaMetadata&&b.meta)try{return new a.MediaMetadata(b.meta)}catch(c){}};g.preimplementsAutoFullscreen=function(){return!1};g.preimplementsMediaSessionAPI=function(){return!1};
g.fullscreenEnter=function(){if(this.h)if(rb(this))Z(this,"setFullscreen",!0);else{var a=this.h,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitEnterFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}};
g.fullscreenExit=function(){if(this.h)if(rb(this))Z(this,"setFullscreen",!1);else{var a=this.h,b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a=a.ownerDocument)&&(b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen)&&b.call(a)}};
g.isFullscreen=function(){if(this.h){var a=this.h;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a};g.seekTo=function(a){Z(this,"seek",a)};g.preconnectCallback=function(a){function b(b){return I(c.win,"preconnect").url(d,b,a)}var c=this,d=this.getAmpDoc();b("https://content.jwplatform.com");b("https://ssl.p.jwpcdn.com");b(sb(this))};
g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
g.buildCallback=function(){var a=this.element,b=new fa;this.oa=b.promise;this.pa=b.resolve;this.S=z(a.getAttribute("data-playlist-id")||a.getAttribute("data-media-id"),"Either the data-media-id or the data-playlist-id attributes must be specified for <amp-jwplayer> %s",a);this.qa=z(a.getAttribute("data-player-id"),"The data-player-id attribute is required for <amp-jwplayer> %s",a);this.R=a.getAttribute("data-content-search")||"";this.da=a.getAttribute("data-content-backfill")||"";this.ea=a.getAttribute("data-content-recency")||
"";a=G(this.element);b=H(a);var c=qa(b),d=c["video-manager"];d||(d=c["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});d.ctor||d.obj||(d.ctor=Wa,d.context=a,d.resolve&&F(b,"video-manager"));J(this.element,"video-manager").register(this)};
g.layoutCallback=function(){var a=this,b=B({search:tb(this)||void 0,recency:this.ea||void 0,backfill:this.da||void 0,isAMP:!0}),c=sb(this);c=ma(c,na(b));c=Ja(za(this,c,this.element.id));Aa(c);Ja(c);this.aa=P(this.win,"message",this.Y);this.ba=P(c,"fullscreenchange",function(){var b=a.isFullscreen();Z(a,"setFullscreen",b)});this.h=c;return this.loadPromise(this.h)};g.unlayoutCallback=function(){this.aa&&this.aa();this.ba&&this.ba();this.h&&(L(this.h),this.h=null);return!0};
g.createPlaceholderCallback=function(){if(this.element.hasAttribute("data-media-id")){var a=this.win.document.createElement("amp-img");this.propagateAttributes(["aria-label"],a);a.setAttribute("src","https://content.jwplatform.com/thumbs/"+encodeURIComponent(this.S)+"-720.jpg");a.setAttribute("layout","fill");a.setAttribute("placeholder","");a.setAttribute("referrerpolicy","origin");a.hasAttribute("aria-label")?a.setAttribute("alt","Loading video - "+a.getAttribute("aria-label")):a.setAttribute("alt",
"Loading video");return a}};
g.Y=function(a){if(this.h&&a&&a.source==this.h.contentWindow){var b=a.data;if(b&&(r(b)||C(b,"{"))){var c=r(b)?b:va(b);var d=c.event,e=c.detail;y().info("JWPLAYER","EVENT:",d||"anon event",e||c);if("ready"===d)e&&this.ya(e);else if(!xa(this.element,d)&&e&&d)switch(d){case "fullscreen":var f=e.fullscreen;f!==this.isFullscreen()&&(f?this.fullscreenEnter():this.fullscreenExit());break;case "meta":c=e.duration;"media"===e.metadataType&&(this.fa=c);break;case "mute":this.element.dispatchCustomEvent(e.mute?"muted":
"unmuted");break;case "playedRanges":this.na=e.ranges;break;case "playlistItem":this.M=Object.assign({},e);Z(this,"getPlayedRanges");break;case "time":this.T=e.currentTime;Z(this,"getPlayedRanges");break;case "adTime":this.T=e.position}}}};function Z(a,b,c){a.oa.then(function(){a.h&&a.h.contentWindow&&(y().info("JWPLAYER","COMMAND:",b,c),a.h.contentWindow.postMessage(JSON.stringify(B({method:b,optParams:c})),"*"))})}function rb(a){a=M(a.win);return a.isSafari()||a.isIos()}
function sb(a){var b=encodeURIComponent(a.qa),c=encodeURIComponent(a.S);"outstream"===c&&(c="oi7pAMI1");return"https://content.jwplatform.com/players/"+c+"-"+b+".html"}function tb(a){if("__CONTEXTUAL__"===a.R){a=a.getAmpDoc().getHeadNode();var b=a.querySelector('meta[property="og:title"]'),c=b?b.getAttribute("content"):null;a=(a.querySelector("title")||{}).textContent;return c||a||""}return a.R}(function(a){a.registerElement("amp-jwplayer",W)})(self.AMP);
})});

//# sourceMappingURL=amp-jwplayer-0.1.js.map
