(self.AMP=self.AMP||[]).push({n:"amp-delight-player",v:"2007102309000",f:(function(AMP,_){
var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var k;
if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var n;a:{var ca={a:!0},da={};try{da.__proto__=ca;n=da.a;break a}catch(a){}n=!1}k=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=k,p;function q(){return p?p:p=Promise.resolve(void 0)};function fa(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function ha(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ia=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function r(a){var b=Object.create(null);if(!a)return b;for(var c;c=ia.exec(a);){var d=ha(c[1],c[1]),e=c[2]?ha(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var t="";var ja=Object.prototype.toString;function u(a){return"number"===typeof a&&isFinite(a)};function v(a){var b=!1,c=null,d=a;return function(a){for(var e=[],h=0;h<arguments.length;++h)e[h-0]=arguments[h];b||(c=d.apply(self,e),b=!0,d=null);return c}};var w=self.AMP_CONFIG||{},ka=("string"==typeof w.cdnProxyRegex?new RegExp(w.cdnProxyRegex):w.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function la(a){if(self.document&&self.document.head&&(!self.location||!ka.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}w.cdnUrl||la("runtime-host");w.geoApiUrl||la("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var x=self.__AMP_LOG;function y(){if(!x.user)throw Error("failed to call initLogConstructor");return x.user}function z(a,b,c){return y().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var ma=Object.prototype.hasOwnProperty;function A(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function B(a){return a||{}};function C(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};B({c:!0,v:!0,a:!0,ad:!0,action:!0});function na(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var e=a.AMP_CONFIG["allow-doc-opt-in"],f=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
if(f){var h=f.getAttribute("content").split(",");for(c=0;c<h.length;c++)-1!=e.indexOf(h[c])&&(b[h[c]]=!0)}}Object.assign(b,oa(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];a=r(a.location.originalHash||a.location.hash);for(var l=0;l<c.length;l++){var m=a["e-"+c[l]];"1"==m&&(b[c[l]]=!0);"0"==m&&(b[c[l]]=!1)}}return b}
function oa(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){if(x.dev)a=x.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var pa=[{experimentId:"ampdoc-fie",isTrafficEligible:function(){return!0},branches:["21065001","21065002"]}];function D(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),e=c!=d,f;if(na(d)["ampdoc-fie"]){d.__AMP_EXPERIMENT_BRANCHES=d.__AMP_EXPERIMENT_BRANCHES||{};for(f=0;f<pa.length;f++){var h=pa[f],l=h.experimentId;ma.call(d.__AMP_EXPERIMENT_BRANCHES,l)||(h.isTrafficEligible&&h.isTrafficEligible(d)?!d.__AMP_EXPERIMENT_BRANCHES[l]&&na(d)[l]&&(h=h.branches,d.__AMP_EXPERIMENT_BRANCHES[l]=h[Math.floor(Math.random()*h.length)]||null):d.__AMP_EXPERIMENT_BRANCHES[l]=null)}f="21065002"===(d.__AMP_EXPERIMENT_BRANCHES?
d.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else f=!1;var m=f;e&&!m?b=E(c,b)?F(c,b):null:(a=G(a),a=H(a),b=E(a,b)?F(a,b):null);return b}function I(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return F(a,b)}function J(a,b){var c=G(a);c=H(c);return F(c,b)}function G(a){return a.nodeType?I((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function H(a){a=G(a);return a.isSingleDoc()?a.win:a}
function F(a,b){E(a,b);a=ra(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function ra(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function E(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function K(a){a.parentElement&&a.parentElement.removeChild(a)};function L(a){a.signals().signal("user-interacted")};var M;function N(a){a=a.ownerDocument||a;M&&M.ownerDocument===a||(M=a.createElement("div"));return sa}function sa(a){var b=M;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function ta(a){try{return JSON.parse(a)}catch(b){return null}};var ua=["<iframe frameborder=0 allowfullscreen></iframe>"];function va(a,b,c){if(null==c[b])return!1;var d=c[b];(Array.isArray(d)?d:[d]).forEach(function(c){a.dispatchCustomEvent(c)});return!0}function wa(a,b){var c=a.element,d=N(c)(ua);a.propagateAttributes(["referrerpolicy"],d);d.src=D(c,"url").assertHttpsUrl(b,c);a.applyFillContent(d);c.appendChild(d);return d};var O;function xa(a,b,c,d){var e=a,f=c;var h=function(a){try{return f(a)}catch(qa){throw self.__AMP_REPORT_ERROR(qa),qa;}};var l=ya(),m=!1;d&&(m=d.capture);e.addEventListener(b,h,l?d:m);return function(){e&&e.removeEventListener(b,h,l?d:m);h=e=f=null}}function ya(){if(void 0!==O)return O;O=!1;try{var a={get capture(){O=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return O};function za(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function P(a,b,c){return xa(a,b,c,void 0)}function Aa(a,b,c,d){var e=c,f=xa(a,b,function(a){try{e(a)}finally{e=null,f()}},d);return f}function Ba(a,b){var c,d=new Promise(function(d){c=Aa(a,b,d,void 0)});d.then(c,c);return d};var Ca={title:"",artist:"",album:"",artwork:[{src:""}]};function Da(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=ta(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}
function Ea(a,b){var c=D(a,"url");if(b&&b.artwork){var d=b.artwork;Array.isArray(d);d.forEach(function(a){a&&(a="[object Object]"===ja.call(a)?a.src:a,z(c.isProtocolValid(a)))})}};function Fa(){this.o=null}g=Fa.prototype;g.add=function(a){var b=this;this.o||(this.o=[]);this.o.push(a);return function(){b.remove(a)}};g.remove=function(a){this.o&&(a=this.o.indexOf(a),-1<a&&this.o.splice(a,1))};g.removeAll=function(){this.o&&(this.o.length=0)};g.fire=function(a){if(this.o)for(var b=this.o,c=0;c<b.length;c++)(0,b[c])(a)};g.getHandlerCount=function(){return this.o?this.o.length:0};function Q(){this.K=!1;this.ha=new Fa}Q.prototype.onSessionEnd=function(a){this.ha.add(a)};Q.prototype.beginSession=function(){this.K=!0};Q.prototype.endSession=function(){this.K&&this.ha.fire();this.K=!1};Q.prototype.isSessionActive=function(){return this.K};var R,Ga="Webkit webkit Moz moz ms O o".split(" ");function Ha(a,b,c){var d=a.style;if(!C(b,"--")){R||(R=A());var e=R[b];if(!e){e=b;if(void 0===d[b]){var f=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var h=0;h<Ga.length;h++){var l=Ga[h]+f;if(void 0!==d[l]){f=l;break b}}f=""}void 0!==d[f]&&(e=f)}R[b]=e}b=e}b&&(C(b,"--")?a.style.setProperty(b,c):a.style[b]=c)}function Ia(a){var b={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"},c;for(c in b)Ha(a,c,b[c])};function Ja(a,b){if(b)return Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;Ia(c);(new Promise(function(a){return a(c.play())})).catch(function(){});return Promise.resolve(!c.paused)}var Ka=null;function La(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null};var Ma="i-amphtml-video-mask{display:block;z-index:1}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq .amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq .amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq[unpausable] .amp-video-eq-col div{animation-name:none}.amp-video-eq[unpausable].amp-video-eq-play .amp-video-eq-col div{animation-name:amp-video-eq-animation}.amp-video-eq.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";var Na=["<i-amphtml-video-mask class=i-amphtml-fill-content role=button></i-amphtml-video-mask>"],Oa=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];
function Pa(a,b){var c=N(b)(Oa),d=c.firstElementChild;for(b=0;4>b;b++){for(var e=d.cloneNode(!0),f=e.children,h=0;h<f.length;h++)f[h].classList.add("amp-video-eq-"+(b+1)+"-"+(h+1));c.appendChild(e)}K(d);I(a,"platform").isIos()&&c.setAttribute("unpausable","");return c};function Qa(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=v(function(){var a=Ma,d=b.ampdoc.getHeadNode();var e=(e=d.__AMP_CSS_TR)?e(a):a;(a=d.__AMP_CSS_SM)||(a=d.__AMP_CSS_SM=A());var f=La(d,a,"amp-extension=amp-video-autoplay");f?f.textContent!==e&&(f.textContent=e):(f=(d.ownerDocument||d).createElement("style"),f.textContent=e,f.setAttribute("amp-extension","amp-video-autoplay"),e=La(d,a,"amp-runtime"),(e=void 0===e?null:e)?d.insertBefore(f,e.nextSibling):d.insertBefore(f,d.firstChild),
a["amp-extension=amp-video-autoplay"]=f)});this.sa=J(this.ampdoc,"viewport");this.W=this.h=null;this.qa=!1;this.M=I(a.win,"timer");this.ta=D(a.getHeadNode(),"action");this.fa=function(){for(var a=0;a<b.h.length;a++){var d=b.h[a];if("paused"!==d.getPlayingState()){S(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();u(e)&&u(f)&&0<f&&(e=za(b.ampdoc.win,"video-manager.timeUpdate",B({time:e,percent:e/f})),b.ta.trigger(d.video.element,"timeUpdate",e,1))}}b.M.delay(b.fa,1E3)};
this.T=v(function(){return new T(b.ampdoc,b)});this.M.delay(this.fa,1E3)}g=Qa.prototype;g.dispose=function(){this.T().dispose();if(this.h)for(var a=0;a<this.h.length;a++)this.h[a].dispose()};g.register=function(a){Ra(a);if(a.supportsPlatform()){this.h=this.h||[];var b=new Sa(this,a);Ta(this,b);this.h.push(b);b=b.video.element;b.dispatchCustomEvent("registered");b.classList.add("i-amphtml-media-component");a.signals().signal("registered");b.classList.add("i-amphtml-video-interface")}};
function Ra(a){function b(){return a.fullscreenEnter()}function c(b,c){a.registerAction(b,function(){L(a);c()},1)}c("play",function(){return a.play(!1)});c("pause",function(){return a.pause()});c("mute",function(){return a.mute()});c("unmute",function(){return a.unmute()});c("fullscreenenter",b);c("fullscreen",b)}
function Ta(a,b){var c=b.video.element;P(c,"amp:video:visibility",function(a){(a=a.data)&&1==a.visible?b.updateVisibility(!0):b.updateVisibility()});P(c,"reloaded",function(){b.videoLoaded()});if(!a.qa){var d=function(){for(var b=0;b<a.h.length;b++)a.h[b].updateVisibility()};a.sa.onScroll(d);a.sa.onChanged(d);a.qa=!0}}function U(a,b){if(Ua(a.W,b))return a.W;for(var c=0;c<a.h.length;c++){var d=a.h[c];if(Ua(d,b))return a.W=d}return null}g.registerForAutoFullscreen=function(a){this.T().register(a)};
g.za=function(){return this.T()};g.getVideoStateProperty=function(a,b){var c=this.ampdoc.getRootNode(),d=y().assertElement(c.getElementById(a),'Could not find an element with id="'+a+'" for VIDEO_STATE');a=U(this,d);return(a?a.getAnalyticsDetails():q()).then(function(a){return a?a[b]:""})};g.getPlayingState=function(a){return U(this,a).getPlayingState()};g.isMuted=function(a){return U(this,a).isMuted()};g.userInteracted=function(a){return U(this,a).userInteracted()};
g.isRollingAd=function(a){return U(this,a).isRollingAd()};g.pauseOtherVideos=function(a){this.h.forEach(function(b){b.isPlaybackManaged()&&b!==a&&"playing_manual"==b.getPlayingState()&&b.video.pause()})};function Ua(a,b){return!!a&&(a.video===b||a.video.element===b)}
function Sa(a,b){var c=this;this.D=a;this.j=a.ampdoc;this.video=b;this.X=!0;this.w=this.J=this.A=this.ma=!1;this.P=new Q;this.P.onSessionEnd(function(){return S(c,"video-session")});this.F=new Q;this.F.onSessionEnd(function(){return S(c,"video-session-visible")});this.aa=function(){var a=c.j.win,b=a||self;if(b.__AMP_MODE)b=b.__AMP_MODE;else{var f=r(b.location.originalHash||b.location.hash);var h=r(b.location.search);t||(t=b.AMP_CONFIG&&b.AMP_CONFIG.v?b.AMP_CONFIG.v:"012007102309000");f={localDev:!1,
development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(f.development)||b.AMP_DEV_MODE),examiner:"2"==f.development,esm:!1,geoOverride:f["amp-geo"],minified:!0,lite:void 0!=h.amp_lite,test:!1,log:f.log,version:"2007102309000",rtvVersion:t};b=b.__AMP_MODE=f}b=b.lite;Ka||(Ka=v(Ja));return Ka(a,b)};this.ja=v(function(){return new V(c.j.win,c)});this.Y=this.oa=!1;this.U=null;this.ka=this.L=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.D.installAutoplayStyles();this.B=Ca;
this.xa=function(){c.video.play(!1)};this.wa=function(){c.video.pause()};Ba(b.element,"load").then(function(){return c.videoLoaded()});P(b.element,"pause",function(){S(c,"video-pause");c.A=!1;c.Y?c.Y=!1:c.P.endSession()});P(b.element,"play",function(){c.ka=!0;S(c,"video-play")});P(b.element,"playing",function(){c.A=!0;"playing_manual"==c.getPlayingState()&&(c.ia(),c.D.pauseOtherVideos(c));var a=c.video,b=a.element;if(!a.preimplementsMediaSessionAPI()&&!b.classList.contains("i-amphtml-disable-mediasession")){a=
c.j.win;var f=c.B,h=c.xa,l=c.wa,m=a.navigator;"mediaSession"in m&&a.MediaMetadata&&(m.mediaSession.metadata=new a.MediaMetadata(Ca),Ea(b,f),m.mediaSession.metadata=new a.MediaMetadata(f),m.mediaSession.setActionHandler("play",h),m.mediaSession.setActionHandler("pause",l))}c.P.beginSession();c.w&&c.F.beginSession();c.ka||S(c,"video-play")});P(b.element,"muted",function(){return c.L=!0});P(b.element,"unmuted",function(){c.L=!1;c.D.pauseOtherVideos(c)});P(b.element,"amp:video:tick",function(a){a=a.data;
var b=a.eventType;b&&Va(c,b,a.vars)});P(b.element,"ended",function(){c.J=!1;S(c,"video-ended")});P(b.element,"ad_start",function(){c.J=!0;S(c,"video-ad-start")});P(b.element,"ad_end",function(){c.J=!1;S(c,"video-ad-end")});b.signals().whenSignal("registered").then(function(){var a=c.video.element;(c.video.preimplementsAutoFullscreen()||!a.hasAttribute("rotate-to-fullscreen")?0:z(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",
a))&&c.D.registerForAutoFullscreen(c);c.updateVisibility();c.hasAutoplay&&Wa(c)});this.ia=v(function(){var a=za(c.j.win,"firstPlay",B({})),b=c.video.element;D(b,"action").trigger(b,"firstPlay",a,1)});Xa(this)}g=Sa.prototype;g.dispose=function(){this.ja().stop()};function Va(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach(function(a){e["custom_"+a]=c[a]});S(a,"video-hosted-custom",e)}
function Xa(a){a.video.signals().whenSignal("playback-delegated").then(function(){a.X=!1;a.A&&a.video.pause()})}g.isMuted=function(){return this.L};g.isPlaybackManaged=function(){return this.X};
g.videoLoaded=function(){this.ma=!0;this.U=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.B=A(this.video.getMetadata()));var a=this.j.win.document;if(!this.B.artwork||0==this.B.artwork.length){var b;(b=Da(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);
b&&(this.B.artwork=[{src:b}])}!this.B.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.U.getAttribute("title")||this.U.getAttribute("aria-label")||a.title)&&(this.B.title=a)}this.ja().start();this.updateVisibility();this.w&&Ya(this)};
function Ya(a){a.j.isVisible()&&a.aa().then(function(b){a.hasAutoplay&&!a.userInteracted()&&b?a.X&&(a.w?(a.F.beginSession(),a.video.play(!0),a.oa=!0):(a.A&&a.F.endSession(),a.video.pause(),a.Y=!0)):a.w?a.F.beginSession():a.A&&a.F.endSession()})}function Wa(a){a.video.isInteractive()&&a.video.hideControls();a.aa().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),Za(a))})}
function Za(a){var b=a.video,c=a.video,d=c.element;c=c.win;if(!d.hasAttribute("noaudio")&&!d.signals().get("user-interacted")){var e=Pa(c,d),f=function(a){b.mutateElementSkipRemeasure(function(){return e.classList.toggle("amp-video-eq-play",a)})};b.mutateElementSkipRemeasure(function(){return d.appendChild(e)});var h=[P(d,"pause",function(){return f(!1)}),P(d,"playing",function(){return f(!0)})];b.signals().whenSignal("user-interacted").then(function(){var b=a.video,c=b.element;a.ia();b.isInteractive()&&
b.showControls();b.unmute();h.forEach(function(a){a()});b=c.querySelector(".amp-video-eq");c=c.querySelector("i-amphtml-video-mask");b&&K(b);c&&K(c)});if(b.isInteractive()){var l=N(d)(Na),m=function(a){b.mutateElementSkipRemeasure(function(){var b=a;void 0===b&&(b=l.hasAttribute("hidden"));b?l.removeAttribute("hidden"):l.setAttribute("hidden","")})};b.hideControls();b.mutateElementSkipRemeasure(function(){return d.appendChild(l)});[P(l,"click",function(){return L(b)}),P(d,"ad_start",function(){m(!1);
b.showControls()}),P(d,"ad_end",function(){m(!0);b.hideControls()}),P(d,"unmuted",function(){return L(b)})].forEach(function(a){return h.push(a)})}}}g.updateVisibility=function(a){var b=this.w;if(a)this.w=!0;else{var c=this.video.element.getIntersectionChangeEntry().intersectionRatio;this.w=.5<=(u(c)?c:0)}this.w!=b&&this.ma&&Ya(this)};g.getPlayingState=function(){return this.A?this.A&&this.oa&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};g.isRollingAd=function(){return this.J};
g.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};
g.getAnalyticsDetails=function(){var a=this,b=this.video;return this.aa().then(function(c){var d=b.element.getLayoutBox(),e=d.width;d=d.height;var f=a.hasAutoplay&&c,h=b.getPlayedRanges(),l=h.reduce(function(a,b){return a+b[1]-b[0]},0);return{autoplay:f,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.L,playedTotal:l,playedRangesJson:JSON.stringify(h),state:a.getPlayingState(),width:e}})};
function T(a,b){var c=this;this.D=b;this.j=a;this.C=this.G=null;this.h=[];this.m=[];this.H=function(){return $a(c)};this.va=function(a){return"playing_manual"==c.D.getPlayingState(a)};this.ua=function(a,b){a=a.element.getIntersectionChangeEntry();var d=a.intersectionRatio;a=a.boundingClientRect;var e=b.element.getIntersectionChangeEntry();b=e.boundingClientRect;d-=e.intersectionRatio;.1<Math.abs(d)?a=d:(e=J(c.j,"viewport"),d=ab(e,a),e=ab(e,b),a=d<e||d>e?d-e:a.top-b.top);return a};bb(this);cb(this)}
T.prototype.dispose=function(){this.m.forEach(function(a){return a()});this.m.length=0};T.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=I(this.j.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.h.push(a),P(b,"pause",this.H),P(b,"playing",this.H),P(b,"ended",this.H),a.signals().whenSignal("user-interacted").then(this.H),$a(this))};
function cb(a){function b(){a.G=null}var c=a.j.getRootNode();a.m.push(P(c,"webkitfullscreenchange",b),P(c,"mozfullscreenchange",b),P(c,"fullscreenchange",b),P(c,"MSFullscreenChange",b))}T.prototype.isInLandscape=function(){var a=this.j.win;return a.screen&&"orientation"in a.screen?C(a.screen.orientation.type,"landscape"):90==Math.abs(a.orientation)};
function bb(a){var b=a.j.win,c=b.screen;c&&"orientation"in c&&a.m.push(P(c.orientation,"change",function(){return db(a)}));a.m.push(P(b,"orientationchange",function(){return db(a)}))}function db(a){a.isInLandscape()?null!=a.C&&eb(a,a.C):a.G&&fb(a,a.G)}function eb(a,b){var c=I(a.j.win,"platform");a.G=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():gb(a,b).then(function(){return b.fullscreenEnter()})}function fb(a,b){a.G=null;gb(a,b,"center").then(function(){return b.fullscreenExit()})}
function gb(a,b,c){c=void 0===c?null:c;var d=b.element,e=J(a.j,"viewport");return I(a.j.win,"timer").promise(330).then(function(){var a=d.getIntersectionChangeEntry().boundingClientRect,b=a.top;a=a.bottom;var l=e.getSize().height;return 0<=b&&a<=l?q():e.animateScrollIntoView(d,c?c:a>l?"bottom":"top")})}function $a(a){if(a.isInLandscape())return a.C;a.C=null;var b=a.h.filter(a.va).sort(a.ua)[0];b&&.5<=b.element.getIntersectionChangeEntry().intersectionRatio&&(a.C=b);return a.C}
function ab(a,b){var c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}function V(a,b){this.M=I(a,"timer");this.I=b;this.m=null;this.N=this.la=0}V.prototype.start=function(){var a=this,b=this.I.video.element;this.stop();this.m=this.m||[];hb(this)?ib(this,this.N):this.m.push(Aa(b,"loadedmetadata",function(){hb(a)&&ib(a,a.N)}));this.m.push(P(b,"ended",function(){hb(a)&&jb(a,100)}))};V.prototype.stop=function(){if(this.m){for(;0<this.m.length;)this.m.pop().call();this.N++}};
function hb(a){var b=a.I.video,c=b.getDuration();if(!(c&&!isNaN(c)&&1<c))return!1;250>50*c&&a.ya("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",5,"seconds long.",b.element);return!0}V.prototype.ya=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];y().warn.apply(y(),["video-manager"].concat(b))};
function ib(a,b){if(b==a.N){var c=a.I,d=a.M,e=c.video,f=function(){return ib(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else if((c=e.getDuration())&&!isNaN(c)&&1<c){var h=Math.min(Math.max(50*c,250),4E3),l=e.getCurrentTime()/c*100,m=5*Math.floor(l/5);u(m);jb(a,m);d.delay(f,h)}else d.delay(f,500)}}function jb(a,b){0>=b||a.la==b||(a.la=b,S(a.I,"video-percentage-played",{normalizedPercentage:b.toString()}))}
function S(a,b,c){var d=a.video;a.getAnalyticsDetails().then(function(a){c&&Object.assign(a,c);d.element.dispatchCustomEvent(b,a)})};var kb=["<div placeholder><amp-img layout=fill></amp-img></div>"];function W(a){a=AMP.BaseElement.call(this,a)||this;a.R="https://players.delight-vr.com";a.S="";a.ra=1;a.ga=0;a.pa=[];a.V=!1;a.l=null;a.Z=null;a.$=null;a.da=null;a.ea=null;a.O=null;a.ca=null;a.ba=null;a.na=null;return a}var X=AMP.BaseElement;W.prototype=aa(X.prototype);W.prototype.constructor=W;
if(ea)ea(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var lb=Object.getOwnPropertyDescriptor(X,Y);lb&&Object.defineProperty(W,Y,lb)}else W[Y]=X[Y];W.Aa=X.prototype;g=W.prototype;g.preconnectCallback=function(a){I(this.win,"preconnect").url(this.getAmpDoc(),this.R,a)};g.renderOutsideViewport=function(){return!1};
g.buildCallback=function(){this.S=z(this.element.getAttribute("data-content-id"),"The data-content-id attribute is required");var a=new fa;this.Z=a.promise;this.$=a.resolve;a=G(this.element);var b=H(a),c=ra(b),d=c["video-manager"];d||(d=c["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});d.ctor||d.obj||(d.ctor=Qa,d.context=a,d.resolve&&F(b,"video-manager"));J(this.element,"video-manager").register(this)};
g.layoutCallback=function(){var a=this,b=wa(this,this.R+"/player/"+this.S+"?amp=1");b.setAttribute("allow","vr");this.da=P(this.win,"message",function(b){var c=a.l,e=/.*/;if(c&&b.source==c.contentWindow&&("string"===typeof e?e==b.origin:e.test(b.origin))&&(b=b.data,(b="[object Object]"===ja.call(b)?b:ta(b))&&b.type&&(c=a.element,e={},!va(c,b.type,(e["x-dl8-to-parent-playing"]="playing",e["x-dl8-to-parent-paused"]="pause",e["x-dl8-to-parent-ended"]="ended",e["x-dl8-to-parent-muted"]="muted",e["x-dl8-to-parent-unmuted"]=
"unmuted",e["x-dl8-to-parent-amp-ad-start"]="ad_start",e["x-dl8-to-parent-amp-ad-end"]="ad_end",e)))))switch(b.type){case "x-dl8-ping":(b=b.guid)&&a.l.contentWindow.postMessage(JSON.stringify({type:"x-dl8-pong",guid:b,idx:0}),"*");break;case "x-dl8-to-parent-ready":c.dispatchCustomEvent("load");a.$(a.l);break;case "x-dl8-to-parent-timeupdate":b=b.payload;a.ga=b.currentTime;a.pa=b.playedRanges;break;case "x-dl8-to-parent-duration":a.ra=b.payload.duration;break;case "x-dl8-iframe-enter-fullscreen":Ha(a.l,
"position","fixed");break;case "x-dl8-iframe-exit-fullscreen":Ha(a.l,"position","absolute");break;case "x-dl8-to-parent-entered-fullscreen":a.V=!0;break;case "x-dl8-to-parent-exited-fullscreen":a.V=!1;break;case "x-dl8-to-parent-amp-custom-tick":b=b.payload,a.element.dispatchCustomEvent("amp:video:tick",B({eventType:"video-custom-"+b.type,vars:b}))}});this.l=b;mb(this);return this.loadPromise(b)};
g.unlayoutCallback=function(){if(this.element.hasAttribute("dock"))return!1;this.l&&(K(this.l),this.l=null);this.da&&this.da();var a=new fa;this.Z=a.promise;this.$=a.resolve;this.ea&&this.ea();this.O&&this.O();this.ca&&this.ca();this.ba&&this.ba();return!0};g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
g.createPlaceholderCallback=function(){var a=N(this.element)(kb);a.firstElementChild.setAttribute("src",this.R+"/poster/"+this.S);return this.na=a};g.firstLayoutCompleted=function(){var a=this,b=this.na,c=null;b&&this.isInViewport()?(b.classList.add("i-amphtml-delight-player-faded"),c=Ba(b,"transitionend")):c=q();return c.then(function(){return AMP.BaseElement.prototype.firstLayoutCompleted.call(a)})};g.pauseCallback=function(){this.l&&this.l.contentWindow&&this.pause()};
g.resumeCallback=function(){this.l&&this.l.contentWindow&&this.play(!1)};function Z(a,b,c){c=void 0===c?{}:c;a.Z.then(function(a){a&&a.contentWindow&&a.contentWindow.postMessage(JSON.stringify({type:b,payload:c}),"*")})}
function mb(a){function b(){Z(a,"x-dl8-iframe-window-orientationchange",{orientation:window.orientation})}function c(){var b=window.screen.orientation||window.screen.mozOrientation||window.screen.msOrientation;Z(a,"x-dl8-iframe-screen-change",{orientation:{angle:b.angle,type:b.type}})}if(window.screen){var d=window.screen.orientation||window.screen.mozOrientation||window.screen.msOrientation;d&&d.addEventListener?a.ea=P(d,"change",c):a.O=P(a.win,"orientationchange",b)}else a.O=P(a.win,"orientationchange",
b);a.ca=P(a.win,"deviceorientation",function(b){Z(a,"x-dl8-iframe-window-deviceorientation",{alpha:b.alpha,beta:b.beta,gamma:b.gamma,absolute:b.absolute,timeStamp:b.timeStamp})});a.ba=P(a.win,"devicemotion",function(b){var c={interval:b.interval,timeStamp:b.timeStamp};b.acceleration&&Object.assign(c,{acceleration:{x:b.acceleration.x,y:b.acceleration.y,z:b.acceleration.z}});b.accelerationIncludingGravity&&Object.assign(c,{accelerationIncludingGravity:{x:b.accelerationIncludingGravity.x,y:b.accelerationIncludingGravity.y,
z:b.accelerationIncludingGravity.z}});b.rotationRate&&Object.assign(c,{rotationRate:{alpha:b.rotationRate.alpha,beta:b.rotationRate.beta,gamma:b.rotationRate.gamma}});Z(a,"x-dl8-iframe-window-devicemotion",c)})}g.supportsPlatform=function(){return!0};g.isInteractive=function(){return!0};g.play=function(){Z(this,"x-dl8-to-iframe-play")};g.pause=function(){Z(this,"x-dl8-to-iframe-pause")};g.mute=function(){Z(this,"x-dl8-to-iframe-mute")};g.unmute=function(){Z(this,"x-dl8-to-iframe-unmute")};
g.showControls=function(){Z(this,"x-dl8-to-iframe-enable-interface")};g.hideControls=function(){Z(this,"x-dl8-to-iframe-disable-interface")};g.fullscreenEnter=function(){Z(this,"x-dl8-to-iframe-enter-fullscreen")};g.fullscreenExit=function(){Z(this,"x-dl8-to-iframe-exit-fullscreen")};g.isFullscreen=function(){return this.V};g.getMetadata=function(){};g.preimplementsMediaSessionAPI=function(){return!1};g.preimplementsAutoFullscreen=function(){return!1};g.getCurrentTime=function(){return this.ga};
g.getDuration=function(){return this.ra};g.getPlayedRanges=function(){return this.pa};g.seekTo=function(a){Z(this,"x-dl8-to-iframe-seek",{time:a})};(function(a){a.registerElement("amp-delight-player",W,"amp-delight-player [placeholder]{transition:opacity 0.5s ease-out;background:no-repeat 50%;background-size:cover;width:100%;height:100%}amp-delight-player [placeholder].i-amphtml-delight-player-faded{opacity:0;pointer-events:none}\n/*# sourceURL=/extensions/amp-delight-player/0.1/amp-delight-player.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-delight-player-0.1.js.map
