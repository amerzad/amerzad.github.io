(self.AMP=self.AMP||[]).push({n:"amp-mowplayer",v:"2007102309000",f:(function(AMP,_){
var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ca(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ca(this);"function"===typeof Symbol&&Symbol("x");var m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var da={a:!0},ea={};try{ea.__proto__=da;n=ea.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=m;function ha(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function ia(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ja=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function p(a){var b=Object.create(null);if(!a)return b;for(var c;c=ja.exec(a);){var d=ia(c[1],c[1]),e=c[2]?ia(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var q="";var ka=Object.prototype.toString;function r(a){return"[object Object]"===ka.call(a)}function t(a){return"number"===typeof a&&isFinite(a)};function u(a){var b=!1,c=null,d=a;return function(a){for(var e=[],h=0;h<arguments.length;++h)e[h-0]=arguments[h];b||(c=d.apply(self,e),b=!0,d=null);return c}};var v=self.AMP_CONFIG||{},la=("string"==typeof v.cdnProxyRegex?new RegExp(v.cdnProxyRegex):v.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function ma(a){if(self.document&&self.document.head&&(!self.location||!la.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}v.cdnUrl||ma("runtime-host");v.geoApiUrl||ma("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function x(){if(!w.user)throw Error("failed to call initLogConstructor");return w.user}function y(a,b,c){return x().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var na=Object.prototype.hasOwnProperty;function A(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function B(a){return a||{}};function C(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};B({c:!0,v:!0,a:!0,ad:!0,action:!0});function oa(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var e=a.AMP_CONFIG["allow-doc-opt-in"],f=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
if(f){var h=f.getAttribute("content").split(",");for(c=0;c<h.length;c++)-1!=e.indexOf(h[c])&&(b[h[c]]=!0)}}Object.assign(b,pa(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];a=p(a.location.originalHash||a.location.hash);for(var k=0;k<c.length;k++){var l=a["e-"+c[k]];"1"==l&&(b[c[k]]=!0);"0"==l&&(b[c[k]]=!1)}}return b}
function pa(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){if(w.dev)a=w.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var qa=[{experimentId:"ampdoc-fie",isTrafficEligible:function(){return!0},branches:["21065001","21065002"]}];function D(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),e=c!=d,f;if(oa(d)["ampdoc-fie"]){d.__AMP_EXPERIMENT_BRANCHES=d.__AMP_EXPERIMENT_BRANCHES||{};for(f=0;f<qa.length;f++){var h=qa[f],k=h.experimentId;na.call(d.__AMP_EXPERIMENT_BRANCHES,k)||(h.isTrafficEligible&&h.isTrafficEligible(d)?!d.__AMP_EXPERIMENT_BRANCHES[k]&&oa(d)[k]&&(h=h.branches,d.__AMP_EXPERIMENT_BRANCHES[k]=h[Math.floor(Math.random()*h.length)]||null):d.__AMP_EXPERIMENT_BRANCHES[k]=null)}f="21065002"===(d.__AMP_EXPERIMENT_BRANCHES?
d.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else f=!1;var l=f;e&&!l?b=E(c,b)?F(c,b):null:(a=G(a),a=H(a),b=E(a,b)?F(a,b):null);return b}function I(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return F(a,b)}function J(a,b){var c=G(a);c=H(c);return F(c,b)}function G(a){return a.nodeType?I((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function H(a){a=G(a);return a.isSingleDoc()?a.win:a}
function F(a,b){E(a,b);a=ra(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function ra(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function E(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};var K;function sa(){return K?K:K=Promise.resolve(void 0)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function L(a){a.parentElement&&a.parentElement.removeChild(a)};function M(a){a.signals().signal("user-interacted")};var N;function ta(a){a=a.ownerDocument||a;N&&N.ownerDocument===a||(N=a.createElement("div"));return ua}function ua(a){var b=N;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function va(a){try{return JSON.parse(a)}catch(b){return null}};var wa=["<iframe frameborder=0 allowfullscreen></iframe>"];function xa(a,b){return b&&a.source==b.contentWindow?"https://mowplayer.com"==a.origin:!1}function ya(a,b,c){if(null!=c[b]){var d=c[b];(Array.isArray(d)?d:[d]).forEach(function(b){a.dispatchCustomEvent(b)})}}function za(a,b){var c=a.element,d=ta(c)(wa);a.propagateAttributes(["referrerpolicy"],d);d.src=D(c,"url").assertHttpsUrl(b,c);a.applyFillContent(d);c.appendChild(d);return d}function Aa(a){return a?r(a)||C(a,"{"):!1}
function Ba(a){return r(a)?a:va(a)};var O;function Ca(a,b,c,d){var e=a,f=c;var h=function(a){try{return f(a)}catch(z){throw self.__AMP_REPORT_ERROR(z),z;}};var k=Da(),l=!1;d&&(l=d.capture);e.addEventListener(b,h,k?d:l);return function(){e&&e.removeEventListener(b,h,k?d:l);h=e=f=null}}function Da(){if(void 0!==O)return O;O=!1;try{var a={get capture(){O=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return O};function Ea(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function P(a,b,c){return Ca(a,b,c,void 0)}function Fa(a,b,c,d){var e=c,f=Ca(a,b,function(a){try{e(a)}finally{e=null,f()}},d);return f}function Ga(a){var b,c=new Promise(function(c){b=Fa(a,"load",c,void 0)});c.then(b,b);return c};var Ha={title:"",artist:"",album:"",artwork:[{src:""}]};function Ia(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=va(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}
function Ja(a,b){var c=D(a,"url");if(b&&b.artwork){var d=b.artwork;Array.isArray(d);d.forEach(function(a){a&&(a=r(a)?a.src:a,y(c.isProtocolValid(a)))})}};function Ka(){this.o=null}g=Ka.prototype;g.add=function(a){var b=this;this.o||(this.o=[]);this.o.push(a);return function(){b.remove(a)}};g.remove=function(a){this.o&&(a=this.o.indexOf(a),-1<a&&this.o.splice(a,1))};g.removeAll=function(){this.o&&(this.o.length=0)};g.fire=function(a){if(this.o)for(var b=this.o,c=0;c<b.length;c++)(0,b[c])(a)};g.getHandlerCount=function(){return this.o?this.o.length:0};function Q(){this.L=!1;this.ba=new Ka}Q.prototype.onSessionEnd=function(a){this.ba.add(a)};Q.prototype.beginSession=function(){this.L=!0};Q.prototype.endSession=function(){this.L&&this.ba.fire();this.L=!1};Q.prototype.isSessionActive=function(){return this.L};var R,La="Webkit webkit Moz moz ms O o".split(" ");function Ma(a){var b={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"},c;for(c in b){var d=a,e=b[c];var f=d.style;var h=c;if(C(h,"--"))f=h;else{R||(R=A());var k=R[h];if(!k){k=h;if(void 0===f[h]){var l=h;l=l.charAt(0).toUpperCase()+l.slice(1);b:{for(var ba=0;ba<La.length;ba++){var z=La[ba]+l;if(void 0!==f[z]){l=z;break b}}l=""}void 0!==f[l]&&(k=l)}R[h]=k}f=k}f&&(C(f,"--")?d.style.setProperty(f,e):d.style[f]=e)}};function Na(a,b){if(b)return Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;Ma(c);(new Promise(function(a){return a(c.play())})).catch(function(){});return Promise.resolve(!c.paused)}var Oa=null;function Pa(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null};var Qa="i-amphtml-video-mask{display:block;z-index:1}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq .amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq .amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq[unpausable] .amp-video-eq-col div{animation-name:none}.amp-video-eq[unpausable].amp-video-eq-play .amp-video-eq-col div{animation-name:amp-video-eq-animation}.amp-video-eq.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";var Ra=["<i-amphtml-video-mask class=i-amphtml-fill-content role=button></i-amphtml-video-mask>"],Sa=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];
function Ta(a,b){var c=ta(b)(Sa),d=c.firstElementChild;for(b=0;4>b;b++){for(var e=d.cloneNode(!0),f=e.children,h=0;h<f.length;h++)f[h].classList.add("amp-video-eq-"+(b+1)+"-"+(h+1));c.appendChild(e)}L(d);I(a,"platform").isIos()&&c.setAttribute("unpausable","");return c};function Ua(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=u(function(){var a=Qa,d=b.ampdoc.getHeadNode();var e=(e=d.__AMP_CSS_TR)?e(a):a;(a=d.__AMP_CSS_SM)||(a=d.__AMP_CSS_SM=A());var f=Pa(d,a,"amp-extension=amp-video-autoplay");f?f.textContent!==e&&(f.textContent=e):(f=(d.ownerDocument||d).createElement("style"),f.textContent=e,f.setAttribute("amp-extension","amp-video-autoplay"),e=Pa(d,a,"amp-runtime"),(e=void 0===e?null:e)?d.insertBefore(f,e.nextSibling):d.insertBefore(f,d.firstChild),
a["amp-extension=amp-video-autoplay"]=f)});this.ja=J(this.ampdoc,"viewport");this.S=this.j=null;this.ia=!1;this.M=I(a.win,"timer");this.ka=D(a.getHeadNode(),"action");this.aa=function(){for(var a=0;a<b.j.length;a++){var d=b.j[a];if("paused"!==d.getPlayingState()){S(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();t(e)&&t(f)&&0<f&&(e=Ea(b.ampdoc.win,"video-manager.timeUpdate",B({time:e,percent:e/f})),b.ka.trigger(d.video.element,"timeUpdate",e,1))}}b.M.delay(b.aa,1E3)};
this.P=u(function(){return new T(b.ampdoc,b)});this.M.delay(this.aa,1E3)}g=Ua.prototype;g.dispose=function(){this.P().dispose();if(this.j)for(var a=0;a<this.j.length;a++)this.j[a].dispose()};g.register=function(a){Va(a);if(a.supportsPlatform()){this.j=this.j||[];var b=new Wa(this,a);Xa(this,b);this.j.push(b);b=b.video.element;b.dispatchCustomEvent("registered");b.classList.add("i-amphtml-media-component");a.signals().signal("registered");b.classList.add("i-amphtml-video-interface")}};
function Va(a){function b(){return a.fullscreenEnter()}function c(b,c){a.registerAction(b,function(){M(a);c()},1)}c("play",function(){return a.play(!1)});c("pause",function(){return a.pause()});c("mute",function(){return a.mute()});c("unmute",function(){return a.unmute()});c("fullscreenenter",b);c("fullscreen",b)}
function Xa(a,b){var c=b.video.element;P(c,"amp:video:visibility",function(a){(a=a.data)&&1==a.visible?b.updateVisibility(!0):b.updateVisibility()});P(c,"reloaded",function(){b.videoLoaded()});if(!a.ia){var d=function(){for(var b=0;b<a.j.length;b++)a.j[b].updateVisibility()};a.ja.onScroll(d);a.ja.onChanged(d);a.ia=!0}}function U(a,b){if(Ya(a.S,b))return a.S;for(var c=0;c<a.j.length;c++){var d=a.j[c];if(Ya(d,b))return a.S=d}return null}g.registerForAutoFullscreen=function(a){this.P().register(a)};
g.ra=function(){return this.P()};g.getVideoStateProperty=function(a,b){var c=this.ampdoc.getRootNode(),d=x().assertElement(c.getElementById(a),'Could not find an element with id="'+a+'" for VIDEO_STATE');a=U(this,d);return(a?a.getAnalyticsDetails():sa()).then(function(a){return a?a[b]:""})};g.getPlayingState=function(a){return U(this,a).getPlayingState()};g.isMuted=function(a){return U(this,a).isMuted()};g.userInteracted=function(a){return U(this,a).userInteracted()};
g.isRollingAd=function(a){return U(this,a).isRollingAd()};g.pauseOtherVideos=function(a){this.j.forEach(function(b){b.isPlaybackManaged()&&b!==a&&"playing_manual"==b.getPlayingState()&&b.video.pause()})};function Ya(a,b){return!!a&&(a.video===b||a.video.element===b)}
function Wa(a,b){var c=this;this.F=a;this.l=a.ampdoc;this.video=b;this.T=!0;this.w=this.K=this.B=this.ga=!1;this.O=new Q;this.O.onSessionEnd(function(){return S(c,"video-session")});this.G=new Q;this.G.onSessionEnd(function(){return S(c,"video-session-visible")});this.Y=function(){var a=c.l.win,b=a||self;if(b.__AMP_MODE)b=b.__AMP_MODE;else{var f=p(b.location.originalHash||b.location.hash);var h=p(b.location.search);q||(q=b.AMP_CONFIG&&b.AMP_CONFIG.v?b.AMP_CONFIG.v:"012007102309000");f={localDev:!1,
development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(f.development)||b.AMP_DEV_MODE),examiner:"2"==f.development,esm:!1,geoOverride:f["amp-geo"],minified:!0,lite:void 0!=h.amp_lite,test:!1,log:f.log,version:"2007102309000",rtvVersion:q};b=b.__AMP_MODE=f}b=b.lite;Oa||(Oa=u(Na));return Oa(a,b)};this.da=u(function(){return new V(c.l.win,c)});this.V=this.ha=!1;this.R=null;this.ea=this.A=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.F.installAutoplayStyles();this.C=Ha;
this.oa=function(){c.video.play(!1)};this.na=function(){c.video.pause()};Ga(b.element).then(function(){return c.videoLoaded()});P(b.element,"pause",function(){S(c,"video-pause");c.B=!1;c.V?c.V=!1:c.O.endSession()});P(b.element,"play",function(){c.ea=!0;S(c,"video-play")});P(b.element,"playing",function(){c.B=!0;"playing_manual"==c.getPlayingState()&&(c.ca(),c.F.pauseOtherVideos(c));var a=c.video,b=a.element;if(!a.preimplementsMediaSessionAPI()&&!b.classList.contains("i-amphtml-disable-mediasession")){a=
c.l.win;var f=c.C,h=c.oa,k=c.na,l=a.navigator;"mediaSession"in l&&a.MediaMetadata&&(l.mediaSession.metadata=new a.MediaMetadata(Ha),Ja(b,f),l.mediaSession.metadata=new a.MediaMetadata(f),l.mediaSession.setActionHandler("play",h),l.mediaSession.setActionHandler("pause",k))}c.O.beginSession();c.w&&c.G.beginSession();c.ea||S(c,"video-play")});P(b.element,"muted",function(){return c.A=!0});P(b.element,"unmuted",function(){c.A=!1;c.F.pauseOtherVideos(c)});P(b.element,"amp:video:tick",function(a){a=a.data;
var b=a.eventType;b&&Za(c,b,a.vars)});P(b.element,"ended",function(){c.K=!1;S(c,"video-ended")});P(b.element,"ad_start",function(){c.K=!0;S(c,"video-ad-start")});P(b.element,"ad_end",function(){c.K=!1;S(c,"video-ad-end")});b.signals().whenSignal("registered").then(function(){var a=c.video.element;(c.video.preimplementsAutoFullscreen()||!a.hasAttribute("rotate-to-fullscreen")?0:y(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",
a))&&c.F.registerForAutoFullscreen(c);c.updateVisibility();c.hasAutoplay&&$a(c)});this.ca=u(function(){var a=Ea(c.l.win,"firstPlay",B({})),b=c.video.element;D(b,"action").trigger(b,"firstPlay",a,1)});ab(this)}g=Wa.prototype;g.dispose=function(){this.da().stop()};function Za(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach(function(a){e["custom_"+a]=c[a]});S(a,"video-hosted-custom",e)}
function ab(a){a.video.signals().whenSignal("playback-delegated").then(function(){a.T=!1;a.B&&a.video.pause()})}g.isMuted=function(){return this.A};g.isPlaybackManaged=function(){return this.T};
g.videoLoaded=function(){this.ga=!0;this.R=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.C=A(this.video.getMetadata()));var a=this.l.win.document;if(!this.C.artwork||0==this.C.artwork.length){var b;(b=Ia(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);
b&&(this.C.artwork=[{src:b}])}!this.C.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.R.getAttribute("title")||this.R.getAttribute("aria-label")||a.title)&&(this.C.title=a)}this.da().start();this.updateVisibility();this.w&&bb(this)};
function bb(a){a.l.isVisible()&&a.Y().then(function(b){a.hasAutoplay&&!a.userInteracted()&&b?a.T&&(a.w?(a.G.beginSession(),a.video.play(!0),a.ha=!0):(a.B&&a.G.endSession(),a.video.pause(),a.V=!0)):a.w?a.G.beginSession():a.B&&a.G.endSession()})}function $a(a){a.video.isInteractive()&&a.video.hideControls();a.Y().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),cb(a))})}
function cb(a){var b=a.video,c=a.video,d=c.element;c=c.win;if(!d.hasAttribute("noaudio")&&!d.signals().get("user-interacted")){var e=Ta(c,d),f=function(a){b.mutateElementSkipRemeasure(function(){return e.classList.toggle("amp-video-eq-play",a)})};b.mutateElementSkipRemeasure(function(){return d.appendChild(e)});var h=[P(d,"pause",function(){return f(!1)}),P(d,"playing",function(){return f(!0)})];b.signals().whenSignal("user-interacted").then(function(){var b=a.video,c=b.element;a.ca();b.isInteractive()&&
b.showControls();b.unmute();h.forEach(function(a){a()});b=c.querySelector(".amp-video-eq");c=c.querySelector("i-amphtml-video-mask");b&&L(b);c&&L(c)});if(b.isInteractive()){var k=ta(d)(Ra),l=function(a){b.mutateElementSkipRemeasure(function(){var b=a;void 0===b&&(b=k.hasAttribute("hidden"));b?k.removeAttribute("hidden"):k.setAttribute("hidden","")})};b.hideControls();b.mutateElementSkipRemeasure(function(){return d.appendChild(k)});[P(k,"click",function(){return M(b)}),P(d,"ad_start",function(){l(!1);
b.showControls()}),P(d,"ad_end",function(){l(!0);b.hideControls()}),P(d,"unmuted",function(){return M(b)})].forEach(function(a){return h.push(a)})}}}g.updateVisibility=function(a){var b=this.w;if(a)this.w=!0;else{var c=this.video.element.getIntersectionChangeEntry().intersectionRatio;this.w=.5<=(t(c)?c:0)}this.w!=b&&this.ga&&bb(this)};g.getPlayingState=function(){return this.B?this.B&&this.ha&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};g.isRollingAd=function(){return this.K};
g.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};
g.getAnalyticsDetails=function(){var a=this,b=this.video;return this.Y().then(function(c){var d=b.element.getLayoutBox(),e=d.width;d=d.height;var f=a.hasAutoplay&&c,h=b.getPlayedRanges(),k=h.reduce(function(a,b){return a+b[1]-b[0]},0);return{autoplay:f,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.A,playedTotal:k,playedRangesJson:JSON.stringify(h),state:a.getPlayingState(),width:e}})};
function T(a,b){var c=this;this.F=b;this.l=a;this.D=this.H=null;this.j=[];this.m=[];this.I=function(){return db(c)};this.ma=function(a){return"playing_manual"==c.F.getPlayingState(a)};this.la=function(a,b){a=a.element.getIntersectionChangeEntry();var d=a.intersectionRatio;a=a.boundingClientRect;var e=b.element.getIntersectionChangeEntry();b=e.boundingClientRect;d-=e.intersectionRatio;.1<Math.abs(d)?a=d:(e=J(c.l,"viewport"),d=eb(e,a),e=eb(e,b),a=d<e||d>e?d-e:a.top-b.top);return a};fb(this);gb(this)}
T.prototype.dispose=function(){this.m.forEach(function(a){return a()});this.m.length=0};T.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=I(this.l.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.j.push(a),P(b,"pause",this.I),P(b,"playing",this.I),P(b,"ended",this.I),a.signals().whenSignal("user-interacted").then(this.I),db(this))};
function gb(a){function b(){a.H=null}var c=a.l.getRootNode();a.m.push(P(c,"webkitfullscreenchange",b),P(c,"mozfullscreenchange",b),P(c,"fullscreenchange",b),P(c,"MSFullscreenChange",b))}T.prototype.isInLandscape=function(){var a=this.l.win;return a.screen&&"orientation"in a.screen?C(a.screen.orientation.type,"landscape"):90==Math.abs(a.orientation)};
function fb(a){var b=a.l.win,c=b.screen;c&&"orientation"in c&&a.m.push(P(c.orientation,"change",function(){return hb(a)}));a.m.push(P(b,"orientationchange",function(){return hb(a)}))}function hb(a){a.isInLandscape()?null!=a.D&&ib(a,a.D):a.H&&jb(a,a.H)}function ib(a,b){var c=I(a.l.win,"platform");a.H=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():kb(a,b).then(function(){return b.fullscreenEnter()})}function jb(a,b){a.H=null;kb(a,b,"center").then(function(){return b.fullscreenExit()})}
function kb(a,b,c){c=void 0===c?null:c;var d=b.element,e=J(a.l,"viewport");return I(a.l.win,"timer").promise(330).then(function(){var a=d.getIntersectionChangeEntry().boundingClientRect,b=a.top;a=a.bottom;var k=e.getSize().height;return 0<=b&&a<=k?sa():e.animateScrollIntoView(d,c?c:a>k?"bottom":"top")})}function db(a){if(a.isInLandscape())return a.D;a.D=null;var b=a.j.filter(a.ma).sort(a.la)[0];b&&.5<=b.element.getIntersectionChangeEntry().intersectionRatio&&(a.D=b);return a.D}
function eb(a,b){var c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}function V(a,b){this.M=I(a,"timer");this.J=b;this.m=null;this.N=this.fa=0}V.prototype.start=function(){var a=this,b=this.J.video.element;this.stop();this.m=this.m||[];lb(this)?mb(this,this.N):this.m.push(Fa(b,"loadedmetadata",function(){lb(a)&&mb(a,a.N)}));this.m.push(P(b,"ended",function(){lb(a)&&nb(a,100)}))};V.prototype.stop=function(){if(this.m){for(;0<this.m.length;)this.m.pop().call();this.N++}};
function lb(a){var b=a.J.video,c=b.getDuration();if(!(c&&!isNaN(c)&&1<c))return!1;250>50*c&&a.qa("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",5,"seconds long.",b.element);return!0}V.prototype.qa=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];x().warn.apply(x(),["video-manager"].concat(b))};
function mb(a,b){if(b==a.N){var c=a.J,d=a.M,e=c.video,f=function(){return mb(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else if((c=e.getDuration())&&!isNaN(c)&&1<c){var h=Math.min(Math.max(50*c,250),4E3),k=e.getCurrentTime()/c*100,l=5*Math.floor(k/5);t(l);nb(a,l);d.delay(f,h)}else d.delay(f,500)}}function nb(a,b){0>=b||a.fa==b||(a.fa=b,S(a.J,"video-percentage-played",{normalizedPercentage:b.toString()}))}
function S(a,b,c){var d=a.video;a.getAnalyticsDetails().then(function(a){c&&Object.assign(a,c);d.element.dispatchCustomEvent(b,a)})};function W(a){a=AMP.BaseElement.call(this,a)||this;a.U="";a.A=!1;a.h=null;a.$=null;a.W=null;a.X=null;a.Z=null;return a}var X=AMP.BaseElement;W.prototype=aa(X.prototype);W.prototype.constructor=W;if(fa)fa(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var ob=Object.getOwnPropertyDescriptor(X,Y);ob&&Object.defineProperty(W,Y,ob)}else W[Y]=X[Y];W.sa=X.prototype;g=W.prototype;
g.preconnectCallback=function(a){var b=I(this.win,"preconnect");b.url(this.getAmpDoc(),pb(this));b.url(this.getAmpDoc(),"https://mowplayer.com",a)};g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};g.viewportCallback=function(a){this.element.dispatchCustomEvent("amp:video:visibility",{visible:a})};
g.buildCallback=function(){this.U=y(this.element.getAttribute("data-mediaid"),"/The data-mediaid attribute is required for <amp-mowplayer> %s",this.element);var a=new ha;this.W=a.promise;this.X=a.resolve;a=G(this.element);var b=H(a),c=ra(b),d=c["video-manager"];d||(d=c["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});d.ctor||d.obj||(d.ctor=Ua,d.context=a,d.resolve&&F(b,"video-manager"));J(this.element,"video-manager").register(this)};
function pb(a){return a.$?a.$:a.$="https://mowplayer.com/watch/"+a.U}g.layoutCallback=function(){var a=this;this.h=za(this,pb(this));this.Z=P(this.win,"message",this.pa.bind(this));var b=this.loadPromise(this.h).then(function(){a.h&&Z(a,"listening",["amp",window.location.href,window.location.origin,!0]);a.element.dispatchCustomEvent("load")});this.X(b);return b};g.unlayoutCallback=function(){this.h&&(L(this.h),this.h=null);this.Z&&this.Z();var a=new ha;this.W=a.promise;this.X=a.resolve;return!0};
g.pauseCallback=function(){this.h&&this.h.contentWindow&&this.pause()};g.mutatedAttributesCallback=function(a){null!=a["data-mediaid"]&&this.h&&Z(this,"loadVideoById",[this.U])};function Z(a,b,c){a.W.then(function(){if(a.h&&a.h.contentWindow){var d=JSON.stringify(B({event:"command",func:b,args:c||""}));a.h.contentWindow.postMessage(d,"https://mowplayer.com")}})}
g.pa=function(a){if(xa(a,this.h)){var b=a.data;if(Aa(b)){var c=Ba(b);if(null!=c){a=c.event;var d=c.info||{};c=this.element;"set_aspect_ratio"===a&&this.attemptChangeHeight(d.new_height).catch(function(){});var e=d.playerState;if("infoDelivery"==a&&null!=e)a={},ya(c,e.toString(),(a[1]="playing",a[2]="pause",a[0]=["ended","pause"],a));else{var f=d.muted;"infoDelivery"==a&&d&&null!=f&&this.A!=f&&(this.A=f,c.dispatchCustomEvent(this.A?"muted":"unmuted"))}}}}};g.supportsPlatform=function(){return!0};
g.isInteractive=function(){return!0};g.play=function(){Z(this,"playVideo")};g.pause=function(){Z(this,"pauseVideo")};g.mute=function(){Z(this,"mute")};g.unmute=function(){Z(this,"unMute")};g.showControls=function(){};g.hideControls=function(){};g.fullscreenEnter=function(){if(this.h){var a=this.h,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitEnterFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}};
g.fullscreenExit=function(){if(this.h){var a=this.h,b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a=a.ownerDocument)&&(b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen)&&b.call(a)}};
g.isFullscreen=function(){if(this.h){var a=this.h;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a};g.getMetadata=function(){};g.preimplementsMediaSessionAPI=function(){return!0};g.preimplementsAutoFullscreen=function(){return!1};g.getCurrentTime=function(){return 0};g.getDuration=function(){return 1};g.getPlayedRanges=function(){return[]};
g.seekTo=function(){this.user().error("amp-mowplayer","`seekTo` not supported.")};(function(a){a.registerElement("amp-mowplayer",W)})(self.AMP);
})});

//# sourceMappingURL=amp-mowplayer-0.1.js.map
