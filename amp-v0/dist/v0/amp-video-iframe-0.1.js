(self.AMP=self.AMP||[]).push({n:"amp-video-iframe",v:"2007102309000",f:(function(AMP,_){
var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var l;
if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var n;a:{var ca={a:!0},da={};try{da.__proto__=ca;n=da.a;break a}catch(a){}n=!1}l=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=l;function fa(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function ha(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ia=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function p(a){var b=Object.create(null);if(!a)return b;for(var c;c=ia.exec(a);){var d=ha(c[1],c[1]),e=c[2]?ha(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var q="";var ja=Object.prototype.toString;function r(a){return"[object Object]"===ja.call(a)}function t(a){return"number"===typeof a&&isFinite(a)};function u(a){var b=!1,c=null,d=a;return function(a){for(var e=[],h=0;h<arguments.length;++h)e[h-0]=arguments[h];b||(c=d.apply(self,e),b=!0,d=null);return c}};var v=self.AMP_CONFIG||{},ka=("string"==typeof v.cdnProxyRegex?new RegExp(v.cdnProxyRegex):v.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function la(a){if(self.document&&self.document.head&&(!self.location||!ka.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}v.cdnUrl||la("runtime-host");v.geoApiUrl||la("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function x(){if(!w.user)throw Error("failed to call initLogConstructor");return w.user}function y(a,b,c){return x().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var ma=Object.prototype.hasOwnProperty;function z(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function A(a){return a||{}};function B(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function C(a){a.parentElement&&a.parentElement.removeChild(a)}function na(a,b){for(var c in b)a.setAttribute(c,b[c]);return a}function oa(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function pa(a){return a.closest?a.closest(".i-amphtml-overlay"):oa(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,".i-amphtml-overlay"):!1})}
function qa(a){function b(a){return a}var c=a.dataset;a={};var d=/^param(.+)/,e;for(e in c){var f=e.match(d);if(f){var h=f[1][0].toLowerCase()+f[1].substr(1);a[b(h)]=c[e]}}return a};function D(a){a.signals().signal("user-interacted")};A({c:!0,v:!0,a:!0,ad:!0,action:!0});function ra(a,b){if(!b)return a;var c=a.split("#",2),d=c[0].split("?",2),e=d[0]+(d[1]?"?"+d[1]+"&"+b:"?"+b);return e+=c[1]?"#"+c[1]:""}function sa(a){var b=[],c;for(c in a){var d=a[c];if(null!=d)if(Array.isArray(d))for(var e=0;e<d.length;e++){var f=d[e];b.push(encodeURIComponent(c)+"="+encodeURIComponent(f))}else e=d,b.push(encodeURIComponent(c)+"="+encodeURIComponent(e))}return b.join("&")};function ua(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var e=a.AMP_CONFIG["allow-doc-opt-in"],f=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
if(f){var h=f.getAttribute("content").split(",");for(c=0;c<h.length;c++)-1!=e.indexOf(h[c])&&(b[h[c]]=!0)}}Object.assign(b,va(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];a=p(a.location.originalHash||a.location.hash);for(var k=0;k<c.length;k++){var m=a["e-"+c[k]];"1"==m&&(b[c[k]]=!0);"0"==m&&(b[c[k]]=!1)}}return b}
function va(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){if(w.dev)a=w.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var wa=[{experimentId:"ampdoc-fie",isTrafficEligible:function(){return!0},branches:["21065001","21065002"]}];function E(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),e=c!=d,f;if(ua(d)["ampdoc-fie"]){d.__AMP_EXPERIMENT_BRANCHES=d.__AMP_EXPERIMENT_BRANCHES||{};for(f=0;f<wa.length;f++){var h=wa[f],k=h.experimentId;ma.call(d.__AMP_EXPERIMENT_BRANCHES,k)||(h.isTrafficEligible&&h.isTrafficEligible(d)?!d.__AMP_EXPERIMENT_BRANCHES[k]&&ua(d)[k]&&(h=h.branches,d.__AMP_EXPERIMENT_BRANCHES[k]=h[Math.floor(Math.random()*h.length)]||null):d.__AMP_EXPERIMENT_BRANCHES[k]=null)}f="21065002"===(d.__AMP_EXPERIMENT_BRANCHES?
d.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else f=!1;var m=f;e&&!m?b=F(c,b)?G(c,b):null:(a=H(a),a=I(a),b=F(a,b)?G(a,b):null);return b}function J(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return G(a,b)}function K(a,b){var c=H(a);c=I(c);return G(c,b)}function H(a){return a.nodeType?J((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function I(a){a=H(a);return a.isSingleDoc()?a.win:a}
function G(a,b){F(a,b);a=xa(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function xa(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function F(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};var L;function ya(){return L?L:L=Promise.resolve(void 0)};var M;function N(a){a=a.ownerDocument||a;M&&M.ownerDocument===a||(M=a.createElement("div"));return za}function za(a){var b=M;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function Aa(a){try{return JSON.parse(a)}catch(b){return null}};var Ba=["<iframe frameborder=0 allowfullscreen></iframe>"];function Ca(a,b,c){var d=Da,e=a.element,f=N(e)(Ba);c&&f.setAttribute("name",c);d&&f.setAttribute("sandbox",d.join(" "));a.propagateAttributes(["referrerpolicy"],f);f.src=E(e,"url").assertHttpsUrl(b,e);a.applyFillContent(f);e.appendChild(f);return f};var O;function Ea(a,b,c,d){var e=a,f=c;var h=function(a){try{return f(a)}catch(ta){throw self.__AMP_REPORT_ERROR(ta),ta;}};var k=Fa(),m=!1;d&&(m=d.capture);e.addEventListener(b,h,k?d:m);return function(){e&&e.removeEventListener(b,h,k?d:m);h=e=f=null}}function Fa(){if(void 0!==O)return O;O=!1;try{var a={get capture(){O=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return O};function Ga(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function P(a,b,c){return Ea(a,b,c,void 0)}function Ha(a,b,c,d){var e=c,f=Ea(a,b,function(a){try{e(a)}finally{e=null,f()}},d);return f}function Ia(a){var b,c=new Promise(function(c){b=Ha(a,"load",c,void 0)});c.then(b,b);return c};var Q,Ja="Webkit webkit Moz moz ms O o".split(" ");function Ka(a,b,c){var d=a.style;if(!B(b,"--")){Q||(Q=z());var e=Q[b];if(!e){e=b;if(void 0===d[b]){var f=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var h=0;h<Ja.length;h++){var k=Ja[h]+f;if(void 0!==d[k]){f=k;break b}}f=""}void 0!==d[f]&&(e=f)}Q[b]=e}b=e}b&&(B(b,"--")?a.style.setProperty(b,c):a.style[b]=c)}function La(a){var b={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"},c;for(c in b)Ka(a,c,b[c])};function Ma(a){var b=a.getLayoutBox();return 10<b.width||10<b.height?!1:!pa(a)}function Na(a){na(a,A({scrolling:"no"}));Ka(a,"overflow","hidden");return a};var Oa={title:"",artist:"",album:"",artwork:[{src:""}]};function Pa(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=Aa(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}
function Qa(a,b){var c=E(a,"url");if(b&&b.artwork){var d=b.artwork;Array.isArray(d);d.forEach(function(a){a&&(a=r(a)?a.src:a,y(c.isProtocolValid(a)))})}};function Ra(){this.m=null}g=Ra.prototype;g.add=function(a){var b=this;this.m||(this.m=[]);this.m.push(a);return function(){b.remove(a)}};g.remove=function(a){this.m&&(a=this.m.indexOf(a),-1<a&&this.m.splice(a,1))};g.removeAll=function(){this.m&&(this.m.length=0)};g.fire=function(a){if(this.m)for(var b=this.m,c=0;c<b.length;c++)(0,b[c])(a)};g.getHandlerCount=function(){return this.m?this.m.length:0};function R(){this.M=!1;this.$=new Ra}R.prototype.onSessionEnd=function(a){this.$.add(a)};R.prototype.beginSession=function(){this.M=!0};R.prototype.endSession=function(){this.M&&this.$.fire();this.M=!1};R.prototype.isSessionActive=function(){return this.M};function Sa(a,b){if(b)return Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;La(c);(new Promise(function(a){return a(c.play())})).catch(function(){});return Promise.resolve(!c.paused)}var Ta=null;function Ua(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null};var Va="i-amphtml-video-mask{display:block;z-index:1}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq .amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq .amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq[unpausable] .amp-video-eq-col div{animation-name:none}.amp-video-eq[unpausable].amp-video-eq-play .amp-video-eq-col div{animation-name:amp-video-eq-animation}.amp-video-eq.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";var Wa=["<i-amphtml-video-mask class=i-amphtml-fill-content role=button></i-amphtml-video-mask>"],Xa=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];
function Ya(a,b){var c=N(b)(Xa),d=c.firstElementChild;for(b=0;4>b;b++){for(var e=d.cloneNode(!0),f=e.children,h=0;h<f.length;h++)f[h].classList.add("amp-video-eq-"+(b+1)+"-"+(h+1));c.appendChild(e)}C(d);J(a,"platform").isIos()&&c.setAttribute("unpausable","");return c};function Za(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=u(function(){var a=Va,d=b.ampdoc.getHeadNode();var e=(e=d.__AMP_CSS_TR)?e(a):a;(a=d.__AMP_CSS_SM)||(a=d.__AMP_CSS_SM=z());var f=Ua(d,a,"amp-extension=amp-video-autoplay");f?f.textContent!==e&&(f.textContent=e):(f=(d.ownerDocument||d).createElement("style"),f.textContent=e,f.setAttribute("amp-extension","amp-video-autoplay"),e=Ua(d,a,"amp-runtime"),(e=void 0===e?null:e)?d.insertBefore(f,e.nextSibling):d.insertBefore(f,d.firstChild),
a["amp-extension=amp-video-autoplay"]=f)});this.ha=K(this.ampdoc,"viewport");this.V=this.h=null;this.ga=!1;this.O=J(a.win,"timer");this.ia=E(a.getHeadNode(),"action");this.Z=function(){for(var a=0;a<b.h.length;a++){var d=b.h[a];if("paused"!==d.getPlayingState()){S(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();t(e)&&t(f)&&0<f&&(e=Ga(b.ampdoc.win,"video-manager.timeUpdate",A({time:e,percent:e/f})),b.ia.trigger(d.video.element,"timeUpdate",e,1))}}b.O.delay(b.Z,1E3)};
this.T=u(function(){return new T(b.ampdoc,b)});this.O.delay(this.Z,1E3)}g=Za.prototype;g.dispose=function(){this.T().dispose();if(this.h)for(var a=0;a<this.h.length;a++)this.h[a].dispose()};g.register=function(a){$a(a);if(a.supportsPlatform()){this.h=this.h||[];var b=new ab(this,a);bb(this,b);this.h.push(b);b=b.video.element;b.dispatchCustomEvent("registered");b.classList.add("i-amphtml-media-component");a.signals().signal("registered");b.classList.add("i-amphtml-video-interface")}};
function $a(a){function b(){return a.fullscreenEnter()}function c(b,c){a.registerAction(b,function(){D(a);c()},1)}c("play",function(){return a.play(!1)});c("pause",function(){return a.pause()});c("mute",function(){return a.mute()});c("unmute",function(){return a.unmute()});c("fullscreenenter",b);c("fullscreen",b)}
function bb(a,b){var c=b.video.element;P(c,"amp:video:visibility",function(a){(a=a.data)&&1==a.visible?b.updateVisibility(!0):b.updateVisibility()});P(c,"reloaded",function(){b.videoLoaded()});if(!a.ga){var d=function(){for(var b=0;b<a.h.length;b++)a.h[b].updateVisibility()};a.ha.onScroll(d);a.ha.onChanged(d);a.ga=!0}}function U(a,b){if(cb(a.V,b))return a.V;for(var c=0;c<a.h.length;c++){var d=a.h[c];if(cb(d,b))return a.V=d}return null}g.registerForAutoFullscreen=function(a){this.T().register(a)};
g.pa=function(){return this.T()};g.getVideoStateProperty=function(a,b){var c=this.ampdoc.getRootNode(),d=x().assertElement(c.getElementById(a),'Could not find an element with id="'+a+'" for VIDEO_STATE');a=U(this,d);return(a?a.getAnalyticsDetails():ya()).then(function(a){return a?a[b]:""})};g.getPlayingState=function(a){return U(this,a).getPlayingState()};g.isMuted=function(a){return U(this,a).isMuted()};g.userInteracted=function(a){return U(this,a).userInteracted()};
g.isRollingAd=function(a){return U(this,a).isRollingAd()};g.pauseOtherVideos=function(a){this.h.forEach(function(b){b.isPlaybackManaged()&&b!==a&&"playing_manual"==b.getPlayingState()&&b.video.pause()})};function cb(a,b){return!!a&&(a.video===b||a.video.element===b)}
function ab(a,b){var c=this;this.D=a;this.j=a.ampdoc;this.video=b;this.W=!0;this.w=this.L=this.A=this.ea=!1;this.S=new R;this.S.onSessionEnd(function(){return S(c,"video-session")});this.F=new R;this.F.onSessionEnd(function(){return S(c,"video-session-visible")});this.Y=function(){var a=c.j.win,b=a||self;if(b.__AMP_MODE)b=b.__AMP_MODE;else{var f=p(b.location.originalHash||b.location.hash);var h=p(b.location.search);q||(q=b.AMP_CONFIG&&b.AMP_CONFIG.v?b.AMP_CONFIG.v:"012007102309000");f={localDev:!1,
development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(f.development)||b.AMP_DEV_MODE),examiner:"2"==f.development,esm:!1,geoOverride:f["amp-geo"],minified:!0,lite:void 0!=h.amp_lite,test:!1,log:f.log,version:"2007102309000",rtvVersion:q};b=b.__AMP_MODE=f}b=b.lite;Ta||(Ta=u(Sa));return Ta(a,b)};this.ba=u(function(){return new V(c.j.win,c)});this.X=this.fa=!1;this.U=null;this.ca=this.N=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.D.installAutoplayStyles();this.B=Oa;
this.ma=function(){c.video.play(!1)};this.la=function(){c.video.pause()};Ia(b.element).then(function(){return c.videoLoaded()});P(b.element,"pause",function(){S(c,"video-pause");c.A=!1;c.X?c.X=!1:c.S.endSession()});P(b.element,"play",function(){c.ca=!0;S(c,"video-play")});P(b.element,"playing",function(){c.A=!0;"playing_manual"==c.getPlayingState()&&(c.aa(),c.D.pauseOtherVideos(c));var a=c.video,b=a.element;if(!a.preimplementsMediaSessionAPI()&&!b.classList.contains("i-amphtml-disable-mediasession")){a=
c.j.win;var f=c.B,h=c.ma,k=c.la,m=a.navigator;"mediaSession"in m&&a.MediaMetadata&&(m.mediaSession.metadata=new a.MediaMetadata(Oa),Qa(b,f),m.mediaSession.metadata=new a.MediaMetadata(f),m.mediaSession.setActionHandler("play",h),m.mediaSession.setActionHandler("pause",k))}c.S.beginSession();c.w&&c.F.beginSession();c.ca||S(c,"video-play")});P(b.element,"muted",function(){return c.N=!0});P(b.element,"unmuted",function(){c.N=!1;c.D.pauseOtherVideos(c)});P(b.element,"amp:video:tick",function(a){a=a.data;
var b=a.eventType;b&&db(c,b,a.vars)});P(b.element,"ended",function(){c.L=!1;S(c,"video-ended")});P(b.element,"ad_start",function(){c.L=!0;S(c,"video-ad-start")});P(b.element,"ad_end",function(){c.L=!1;S(c,"video-ad-end")});b.signals().whenSignal("registered").then(function(){var a=c.video.element;(c.video.preimplementsAutoFullscreen()||!a.hasAttribute("rotate-to-fullscreen")?0:y(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",
a))&&c.D.registerForAutoFullscreen(c);c.updateVisibility();c.hasAutoplay&&eb(c)});this.aa=u(function(){var a=Ga(c.j.win,"firstPlay",A({})),b=c.video.element;E(b,"action").trigger(b,"firstPlay",a,1)});fb(this)}g=ab.prototype;g.dispose=function(){this.ba().stop()};function db(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach(function(a){e["custom_"+a]=c[a]});S(a,"video-hosted-custom",e)}
function fb(a){a.video.signals().whenSignal("playback-delegated").then(function(){a.W=!1;a.A&&a.video.pause()})}g.isMuted=function(){return this.N};g.isPlaybackManaged=function(){return this.W};
g.videoLoaded=function(){this.ea=!0;this.U=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.B=z(this.video.getMetadata()));var a=this.j.win.document;if(!this.B.artwork||0==this.B.artwork.length){var b;(b=Pa(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);
b&&(this.B.artwork=[{src:b}])}!this.B.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.U.getAttribute("title")||this.U.getAttribute("aria-label")||a.title)&&(this.B.title=a)}this.ba().start();this.updateVisibility();this.w&&gb(this)};
function gb(a){a.j.isVisible()&&a.Y().then(function(b){a.hasAutoplay&&!a.userInteracted()&&b?a.W&&(a.w?(a.F.beginSession(),a.video.play(!0),a.fa=!0):(a.A&&a.F.endSession(),a.video.pause(),a.X=!0)):a.w?a.F.beginSession():a.A&&a.F.endSession()})}function eb(a){a.video.isInteractive()&&a.video.hideControls();a.Y().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),hb(a))})}
function hb(a){var b=a.video,c=a.video,d=c.element;c=c.win;if(!d.hasAttribute("noaudio")&&!d.signals().get("user-interacted")){var e=Ya(c,d),f=function(a){b.mutateElementSkipRemeasure(function(){return e.classList.toggle("amp-video-eq-play",a)})};b.mutateElementSkipRemeasure(function(){return d.appendChild(e)});var h=[P(d,"pause",function(){return f(!1)}),P(d,"playing",function(){return f(!0)})];b.signals().whenSignal("user-interacted").then(function(){var b=a.video,c=b.element;a.aa();b.isInteractive()&&
b.showControls();b.unmute();h.forEach(function(a){a()});b=c.querySelector(".amp-video-eq");c=c.querySelector("i-amphtml-video-mask");b&&C(b);c&&C(c)});if(b.isInteractive()){var k=N(d)(Wa),m=function(a){b.mutateElementSkipRemeasure(function(){var b=a;void 0===b&&(b=k.hasAttribute("hidden"));b?k.removeAttribute("hidden"):k.setAttribute("hidden","")})};b.hideControls();b.mutateElementSkipRemeasure(function(){return d.appendChild(k)});[P(k,"click",function(){return D(b)}),P(d,"ad_start",function(){m(!1);
b.showControls()}),P(d,"ad_end",function(){m(!0);b.hideControls()}),P(d,"unmuted",function(){return D(b)})].forEach(function(a){return h.push(a)})}}}g.updateVisibility=function(a){var b=this.w;if(a)this.w=!0;else{var c=this.video.element.getIntersectionChangeEntry().intersectionRatio;this.w=.5<=(t(c)?c:0)}this.w!=b&&this.ea&&gb(this)};g.getPlayingState=function(){return this.A?this.A&&this.fa&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};g.isRollingAd=function(){return this.L};
g.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};
g.getAnalyticsDetails=function(){var a=this,b=this.video;return this.Y().then(function(c){var d=b.element.getLayoutBox(),e=d.width;d=d.height;var f=a.hasAutoplay&&c,h=b.getPlayedRanges(),k=h.reduce(function(a,b){return a+b[1]-b[0]},0);return{autoplay:f,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.N,playedTotal:k,playedRangesJson:JSON.stringify(h),state:a.getPlayingState(),width:e}})};
function T(a,b){var c=this;this.D=b;this.j=a;this.C=this.G=null;this.h=[];this.l=[];this.I=function(){return ib(c)};this.ka=function(a){return"playing_manual"==c.D.getPlayingState(a)};this.ja=function(a,b){a=a.element.getIntersectionChangeEntry();var d=a.intersectionRatio;a=a.boundingClientRect;var e=b.element.getIntersectionChangeEntry();b=e.boundingClientRect;d-=e.intersectionRatio;.1<Math.abs(d)?a=d:(e=K(c.j,"viewport"),d=jb(e,a),e=jb(e,b),a=d<e||d>e?d-e:a.top-b.top);return a};kb(this);lb(this)}
T.prototype.dispose=function(){this.l.forEach(function(a){return a()});this.l.length=0};T.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=J(this.j.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.h.push(a),P(b,"pause",this.I),P(b,"playing",this.I),P(b,"ended",this.I),a.signals().whenSignal("user-interacted").then(this.I),ib(this))};
function lb(a){function b(){a.G=null}var c=a.j.getRootNode();a.l.push(P(c,"webkitfullscreenchange",b),P(c,"mozfullscreenchange",b),P(c,"fullscreenchange",b),P(c,"MSFullscreenChange",b))}T.prototype.isInLandscape=function(){var a=this.j.win;return a.screen&&"orientation"in a.screen?B(a.screen.orientation.type,"landscape"):90==Math.abs(a.orientation)};
function kb(a){var b=a.j.win,c=b.screen;c&&"orientation"in c&&a.l.push(P(c.orientation,"change",function(){return mb(a)}));a.l.push(P(b,"orientationchange",function(){return mb(a)}))}function mb(a){a.isInLandscape()?null!=a.C&&nb(a,a.C):a.G&&ob(a,a.G)}function nb(a,b){var c=J(a.j.win,"platform");a.G=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():pb(a,b).then(function(){return b.fullscreenEnter()})}function ob(a,b){a.G=null;pb(a,b,"center").then(function(){return b.fullscreenExit()})}
function pb(a,b,c){c=void 0===c?null:c;var d=b.element,e=K(a.j,"viewport");return J(a.j.win,"timer").promise(330).then(function(){var a=d.getIntersectionChangeEntry().boundingClientRect,b=a.top;a=a.bottom;var k=e.getSize().height;return 0<=b&&a<=k?ya():e.animateScrollIntoView(d,c?c:a>k?"bottom":"top")})}function ib(a){if(a.isInLandscape())return a.C;a.C=null;var b=a.h.filter(a.ka).sort(a.ja)[0];b&&.5<=b.element.getIntersectionChangeEntry().intersectionRatio&&(a.C=b);return a.C}
function jb(a,b){var c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}function V(a,b){this.O=J(a,"timer");this.K=b;this.l=null;this.P=this.da=0}V.prototype.start=function(){var a=this,b=this.K.video.element;this.stop();this.l=this.l||[];qb(this)?rb(this,this.P):this.l.push(Ha(b,"loadedmetadata",function(){qb(a)&&rb(a,a.P)}));this.l.push(P(b,"ended",function(){qb(a)&&sb(a,100)}))};V.prototype.stop=function(){if(this.l){for(;0<this.l.length;)this.l.pop().call();this.P++}};
function qb(a){var b=a.K.video,c=b.getDuration();if(!(c&&!isNaN(c)&&1<c))return!1;250>50*c&&a.oa("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",5,"seconds long.",b.element);return!0}V.prototype.oa=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];x().warn.apply(x(),["video-manager"].concat(b))};
function rb(a,b){if(b==a.P){var c=a.K,d=a.O,e=c.video,f=function(){return rb(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else if((c=e.getDuration())&&!isNaN(c)&&1<c){var h=Math.min(Math.max(50*c,250),4E3),k=e.getCurrentTime()/c*100,m=5*Math.floor(k/5);t(m);sb(a,m);d.delay(f,h)}else d.delay(f,500)}}function sb(a,b){0>=b||a.da==b||(a.da=b,S(a.K,"video-percentage-played",{normalizedPercentage:b.toString()}))}
function S(a,b,c){var d=a.video;a.getAnalyticsDetails().then(function(a){c&&Object.assign(a,c);d.element.dispatchCustomEvent(b,a)})};var Da=["allow-scripts","allow-same-origin","allow-popups","allow-popups-to-escape-sandbox","allow-top-navigation-by-user-activation"],tb="playing pause ended muted unmuted ad_start ad_end".split(" "),ub=u(function(){return/^video-custom-/});
function W(a){var b=AMP.BaseElement.call(this,a)||this;b.o=null;b.R=null;b.H=null;b.J=!1;b.na=function(a){a:{var c;if(c=b.o){c=b.o;var e=/.*/;c=c&&a.source==c.contentWindow?"string"===typeof e?e==a.origin:e.test(a.origin):!1}if(c&&(a=a.data)&&(r(a)||B(a,"{"))&&(a=r(a)?a:Aa(a),null!=a))if(c=a.id,e=a.method)"getIntersection"==e?(a=b.element.getIntersectionChangeEntry(),e=a.intersectionRatio,vb(b,A({id:c,args:{intersectionRatio:.5>e?0:e,time:a.time}}))):y(!1,"Unknown method `%s`.",e);else{c=a.event;
e="canplay"==c;b.J=b.J||e;var f=b.H,h=f.reject;f=f.resolve;if(e){a=f();break a}if("error"==c&&!b.J){a=h("Received `error` event.");break a}"analytics"==c?(c=a.analytics,a=c.eventType,c=c.vars,c=void 0===c?{}:c,x().assertString(a,"`eventType` missing in analytics event"),y(ub().test(a),"Invalid analytics `eventType`. Value must start with `%s`.","video-custom-"),b.element.dispatchCustomEvent("amp:video:tick",A({eventType:a,vars:c}))):-1<tb.indexOf(c)&&b.element.dispatchCustomEvent(c)}a=void 0}return a};
return b}var X=AMP.BaseElement;W.prototype=aa(X.prototype);W.prototype.constructor=W;if(ea)ea(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var wb=Object.getOwnPropertyDescriptor(X,Y);wb&&Object.defineProperty(W,Y,wb)}else W[Y]=X[Y];W.qa=X.prototype;g=W.prototype;g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
g.buildCallback=function(){var a=H(this.element),b=I(a),c=xa(b),d=c["video-manager"];d||(d=c["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});d.ctor||d.obj||(d.ctor=Za,d.context=a,d.resolve&&G(b,"video-manager"))};
g.layoutCallback=function(){var a=this;this.user().assert(!Ma(this.element),"<amp-video-iframe> does not allow tracking iframes. Please use amp-analytics instead.");var b=JSON.stringify(xb(this));this.o=Na(Ca(this,yb(this),b));this.R=P(this.win,"message",this.na);this.H=new fa;return this.H.promise.then(function(){var b=a.element;K(b,"video-manager").register(a);b.dispatchCustomEvent("load")})};g.mutatedAttributesCallback=function(a){if(a.src){var b=this.o;b&&b.src!=yb(this)&&(b.src=yb(this))}};
function xb(a){a=K(a.element,"documentInfo").get();return A({sourceUrl:a.sourceUrl,canonicalUrl:a.canonicalUrl})}g.createPlaceholderCallback=function(){var a=this.element;var b=x().assertString(a.getAttribute("poster"));var c=qa(a);b=ra(b,sa(c));b=A({src:b,layout:"fill",placeholder:""});a=a.ownerDocument.createElement("amp-img");return na(a,b)};g.unlayoutCallback=function(){this.J=!1;this.o&&(C(this.o),this.o=null);this.R&&(this.R(),this.R=null);return!0};
function yb(a){var b=a.element,c=E(b,"url"),d=b.getAttribute("src");c.getSourceOrigin(d)===c.getWinOrigin(a.win)&&x().warn("amp-video-iframe","Origins of document inside amp-video-iframe and the host are the same, which allows for same-origin behavior. However in AMP cache, origins won't match. Please ensure you do not rely on any same-origin privileges.",b);a=qa(b);d=ra(d,sa(a));return-1<d.indexOf("#")?d:d+"#amp=1"}function Z(a,b){vb(a,A({event:"method",method:b}))}
function vb(a,b){var c=a.H&&a.H.promise;c&&c.then(function(){a.o&&a.o.contentWindow&&a.o.contentWindow.postMessage(JSON.stringify(b),"*")})}g.pauseCallback=function(){this.pause()};g.pause=function(){Z(this,"pause")};g.play=function(){Z(this,"play")};g.mute=function(){Z(this,"mute")};g.unmute=function(){Z(this,"unmute")};g.isInteractive=function(){return!0};g.supportsPlatform=function(){return!0};g.preimplementsMediaSessionAPI=function(){return this.element.hasAttribute("implements-media-session")};
g.preimplementsAutoFullscreen=function(){return this.element.hasAttribute("implements-rotate-to-fullscreen")};g.fullscreenEnter=function(){Z(this,"fullscreenenter")};g.fullscreenExit=function(){Z(this,"fullscreenexit")};g.isFullscreen=function(){if(this.o){var a=this.o;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a};
g.showControls=function(){Z(this,"showcontrols")};g.hideControls=function(){Z(this,"hidecontrols")};g.getMetadata=function(){};g.getDuration=function(){return 0};g.getCurrentTime=function(){return 0};g.getPlayedRanges=function(){return[]};g.seekTo=function(){this.user().error("amp-video-iframe","`seekTo` not supported.")};(function(a){a.registerElement("amp-video-iframe",W)})(self.AMP);
})});

//# sourceMappingURL=amp-video-iframe-0.1.js.map