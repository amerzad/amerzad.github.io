(self.AMP=self.AMP||[]).push({n:"amp-video-iframe",v:"2008290323002",f:function(AMP,_){class aa{constructor(){let a,b;this.promise=new Promise((c,d)=>{a=c;b=d});this.resolve=a;this.reject=b}}function h(a,b=""){try{return decodeURIComponent(a)}catch(c){return b}}let ba=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function m(a){let b=Object.create(null);if(!a)return b;let c;for(;c=ba.exec(a);){let a=h(c[1],c[1]),e=c[2]?h(c[2].replace(/\+/g," "),c[2]):"";b[a]=e}return b}let n="";let ca=Object.prototype.toString;function p(a){return"[object Object]"===ca.call(a)}function q(a){return"number"===typeof a&&isFinite(a)}function r(a){let b=!1,c=null,d=a;return(...a)=>{b||(c=d.apply(self,a),b=!0,d=null);return c}}let t=self.AMP_CONFIG||{},da=("string"==typeof t.cdnProxyRegex?new RegExp(t.cdnProxyRegex):t.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function u(a){if(self.document&&self.document.head&&(!self.location||!da.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}t.cdnUrl||u("runtime-host");t.geoApiUrl||u("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let v=self.__AMP_LOG;function w(){if(!v.user)throw Error("failed to call initLogConstructor");return v.user}function x(a,b,c){return w().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function y(a){let b=Object.create(null);a&&Object.assign(b,a);return b}function z(a){return a||{}}function A(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)}function B(a){a.parentElement&&a.parentElement.removeChild(a)}function ea(a,b,c=null){c?a.insertBefore(b,c.nextSibling):a.insertBefore(b,a.firstChild)}function C(a,b){for(let c in b)a.setAttribute(c,b[c]);return a}function ha(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function ia(a){return a.closest?a.closest(".i-amphtml-overlay"):ha(a,a=>{{let b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;a=b?b.call(a,".i-amphtml-overlay"):!1}return a})}function D(a){let b=a=>a,c=a.dataset;a={};let d=/^param(.+)/;for(let f in c){var e=f.match(d);e&&(e=e[1][0].toLowerCase()+e[1].substr(1),a[b(e)]=c[f])}return a}function E(a){a.signals().signal("user-interacted")}z({c:!0,v:!0,a:!0,ad:!0});function F(a,b){if(!b)return a;let c=a.split("#",2),d=c[0].split("?",2);let e=d[0]+(d[1]?`?${d[1]}&${b}`:`?${b}`);return e+=c[1]?`#${c[1]}`:""}function ja(a){let b=[];for(let d in a){let e=a[d];if(null!=e)if(Array.isArray(e))for(var c=0;c<e.length;c++){let a=e[c];b.push(`${encodeURIComponent(d)}=${encodeURIComponent(a)}`)}else c=e,b.push(`${encodeURIComponent(d)}=${encodeURIComponent(c)}`)}return b.join("&")}function ka(a){let b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(d){}let c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(let b=0;b<c.length;b++)0!=c[b].length&&("-"==c[b][0]?a[c[b].substr(1)]=!1:a[c[b]]=!0);return a}function G(a,b){let c=a.ownerDocument.defaultView;var d=c.__AMP_TOP||(c.__AMP_TOP=c);let e=c!=d;if(d.__AMP__EXPERIMENT_TOGGLES)var f=d.__AMP__EXPERIMENT_TOGGLES;else{d.__AMP__EXPERIMENT_TOGGLES=Object.create(null);f=d.__AMP__EXPERIMENT_TOGGLES;if(d.AMP_CONFIG)for(var k in d.AMP_CONFIG){var g=d.AMP_CONFIG[k];"number"===typeof g&&0<=g&&1>=g&&(f[k]=Math.random()<g)}if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-doc-opt-in"])&&0<d.AMP_CONFIG["allow-doc-opt-in"].length&&(k=d.AMP_CONFIG["allow-doc-opt-in"],g=d.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){g=g.getAttribute("content").split(",");for(var l=0;l<g.length;l++)-1!=k.indexOf(g[l])&&(f[g[l]]=!0)}Object.assign(f,ka(d));if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-url-opt-in"])&&0<d.AMP_CONFIG["allow-url-opt-in"].length)for(k=d.AMP_CONFIG["allow-url-opt-in"],d=m(d.location.originalHash||d.location.hash),g=0;g<k.length;g++)l=d[`e-${k[g]}`],"1"==l&&(f[k[g]]=!0),"0"==l&&(f[k[g]]=!1)}let Fa=!!f["ampdoc-fie"];e&&!Fa?b=H(c,b)?I(c,b):null:(a=J(a),a=K(a),b=H(a,b)?I(a,b):null);return b}function L(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return I(a,b)}function M(a,b){var c=J(a);c=K(c);return I(c,b)}function J(a){return a.nodeType?L((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function K(a){a=J(a);return a.isSingleDoc()?a.win:a}function I(a,b){H(a,b);a=la(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function la(a){let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function H(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}let N;function ma(){return N?N:N=Promise.resolve(void 0)}let O;function P(a){a=a.ownerDocument||a;O&&O.ownerDocument===a||(O=a.createElement("div"));return na}function na(a){var b=O;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return b=a}function oa(a){try{return JSON.parse(a)}catch(b){return null}}let pa=["<iframe frameborder=0 allowfullscreen></iframe>"];function qa(a,b,c){var d=ra;let e=a.element,f=P(e)(pa);c&&f.setAttribute("name",c);d&&f.setAttribute("sandbox",d.join(" "));a.propagateAttributes(["referrerpolicy"],f);f.src=G(e,"url").assertHttpsUrl(b,e);a.applyFillContent(f);e.appendChild(f);return f}let Q;function sa(a,b,c,d){let k,e=a,f=c;k=a=>{try{return f(a)}catch(fa){throw self.__AMP_REPORT_ERROR(fa),fa}};let g=ta();let l=!1;d&&(l=d.capture);e.addEventListener(b,k,g?d:l);return()=>{e&&e.removeEventListener(b,k,g?d:l);k=e=f=null}}function ta(){if(void 0!==Q)return Q;Q=!1;try{let a={get capture(){Q=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(a){}return Q}function ua(a,b,c){let d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function R(a,b,c){return sa(a,b,c,void 0)}function va(a,b,c,d){let e=c;let f=sa(a,b,a=>{try{e(a)}finally{e=null,f()}},d);return f}function wa(a){let b;let c=new Promise(c=>{b=va(a,"load",c,void 0)});c.then(b,b);return c}let S;let xa="Webkit webkit Moz moz ms O o".split(" ");function ya(a,b,c){var d=a.style;if(!A(b,"--")){S||(S=y());var e=S[b];if(!e){e=b;if(void 0===d[b]){var f=b.charAt(0).toUpperCase()+b.slice(1);b:{for(let a=0;a<xa.length;a++){let b=xa[a]+f;if(void 0!==d[b]){f=b;break b}}f=""}void 0!==d[f]&&(e=f)}S[b]=e}b=e}b&&(A(b,"--")?a.style.setProperty(b,c):a.style[b]=c)}function za(a){var b={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"};for(let c in b)ya(a,c,b[c])}function Aa(a){let b=a.getLayoutBox();return 10<b.width||10<b.height?!1:!ia(a)}function Ba(a){C(a,z({scrolling:"no"}));ya(a,"overflow","hidden");return a}let Ca={title:"",artist:"",album:"",artwork:[{src:""}]};function Da(a){let b=a.querySelector('script[type="application/ld+json"]');if(b){var c=oa(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}function Ea(a,b){let c=G(a,"url");if(b&&b.artwork){let a=b.artwork;Array.isArray(a);a.forEach(a=>{a&&(a=p(a)?a.src:a,x(c.isProtocolValid(a)))})}}class Ga{constructor(){this.m=null}add(a){this.m||(this.m=[]);this.m.push(a);return()=>{this.remove(a)}}remove(a){this.m&&(a=this.m.indexOf(a),-1<a&&this.m.splice(a,1))}removeAll(){this.m&&(this.m.length=0)}fire(a){if(this.m){var b=this.m;for(let c=0;c<b.length;c++)(0,b[c])(a)}}getHandlerCount(){return this.m?this.m.length:0}}class Ha{constructor(){this.M=!1;this.$=new Ga}onSessionEnd(a){this.$.add(a)}beginSession(){this.M=!0}endSession(){this.M&&this.$.fire();this.M=!1}isSessionActive(){return this.M}}function Ia(a,b){if(b)return Promise.resolve(!1);let c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;za(c);new Promise(a=>a(c.play())).catch(()=>{});return Promise.resolve(!c.paused)}let T=null;function Ja(a,b,c){return b[c]?b[c]:(a=a.querySelector(`style[${c}]`))?b[c]=a:null}let Ka="i-amphtml-video-mask{display:block;z-index:1}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq .amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq .amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq[unpausable] .amp-video-eq-col div{animation-name:none}.amp-video-eq[unpausable].amp-video-eq-play .amp-video-eq-col div{animation-name:amp-video-eq-animation}.amp-video-eq.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";let La=["<i-amphtml-video-mask class=i-amphtml-fill-content role=button></i-amphtml-video-mask>"],Ma=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Na(a,b){let c=P(b)(Ma),d=c.firstElementChild;for(b=0;4>b;b++){let a=d.cloneNode(!0),f=a.children;for(let a=0;a<f.length;a++)f[a].classList.add(`amp-video-eq-${b+1}-${a+1}`);c.appendChild(a)}B(d);L(a,"platform").isIos()&&c.setAttribute("unpausable","");return c}function Oa(a){function b(b,c){a.registerAction(b,()=>{E(a);c()},1)}b("play",()=>a.play(!1));b("pause",()=>a.pause());b("mute",()=>a.mute());b("unmute",()=>a.unmute());let c=()=>a.fullscreenEnter();b("fullscreenenter",c);b("fullscreen",c)}function Pa(a,b){let c=b.video.element;R(c,"amp:video:visibility",a=>{(a=a.data)&&1==a.visible?b.updateVisibility(!0):b.updateVisibility()});R(c,"reloaded",()=>{b.videoLoaded()});if(!a.ga){let b=()=>{for(let b=0;b<a.h.length;b++)a.h[b].updateVisibility()};a.ha.onScroll(b);a.ha.onChanged(b);a.ga=!0}}function U(a,b){if(Qa(a.V,b))return a.V;for(let c=0;c<a.h.length;c++){let d=a.h[c];if(Qa(d,b))return a.V=d}return null}class Ra{constructor(a){this.ampdoc=a;this.installAutoplayStyles=r(()=>{var a=Ka,c=this.ampdoc.getHeadNode(),d=c.__AMP_CSS_TR;a=d?d(a):a;(d=c.__AMP_CSS_SM)||(d=c.__AMP_CSS_SM=y());var e=Ja(c,d,"amp-extension=amp-video-autoplay");e?e.textContent!==a&&(e.textContent=a):(e=(c.ownerDocument||c).createElement("style"),e.textContent=a,e.setAttribute("amp-extension","amp-video-autoplay"),a=Ja(c,d,"amp-runtime"),ea(c,e,a),d["amp-extension=amp-video-autoplay"]=e)});this.ha=M(this.ampdoc,"viewport");this.V=this.h=null;this.ga=!1;this.O=L(a.win,"timer");this.ia=G(a.getHeadNode(),"action");this.Z=()=>{for(let b=0;b<this.h.length;b++){var a=this.h[b];if("paused"!==a.getPlayingState()){V(a,"video-seconds-played");{var c=a.video.getCurrentTime();let b=a.video.getDuration();q(c)&&q(b)&&0<b&&(c=ua(this.ampdoc.win,"video-manager.timeUpdate",z({time:c,percent:c/b})),this.ia.trigger(a.video.element,"timeUpdate",c,1))}}}this.O.delay(this.Z,1e3)};this.T=r(()=>new Sa(this.ampdoc,this));this.O.delay(this.Z,1e3)}dispose(){this.T().dispose();if(this.h)for(let a=0;a<this.h.length;a++)this.h[a].dispose()}register(a){Oa(a);if(a.supportsPlatform()){this.h=this.h||[];var b=new Ta(this,a);Pa(this,b);this.h.push(b);b=b.video.element;b.dispatchCustomEvent("registered");b.classList.add("i-amphtml-media-component");a.signals().signal("registered");b.classList.add("i-amphtml-video-interface")}}registerForAutoFullscreen(a){this.T().register(a)}oa(){return this.T()}getVideoStateProperty(a,b){let c=this.ampdoc.getRootNode(),d=w().assertElement(c.getElementById(a),`Could not find an element with id="${a}" for VIDEO_STATE`);a=U(this,d);return(a?a.getAnalyticsDetails():ma()).then(a=>a?a[b]:"")}getPlayingState(a){return U(this,a).getPlayingState()}isMuted(a){return U(this,a).isMuted()}userInteracted(a){return U(this,a).userInteracted()}isRollingAd(a){return U(this,a).isRollingAd()}pauseOtherVideos(a){this.h.forEach(b=>{b.isPlaybackManaged()&&b!==a&&"playing_manual"==b.getPlayingState()&&b.video.pause()})}}let Qa=(a,b)=>!!a&&(a.video===b||a.video.element===b);function Ua(a,b,c){let d={["__amp:eventType"]:b};Object.keys(c).forEach(a=>{d[`custom_${a}`]=c[a]});V(a,"video-hosted-custom",d)}function Va(a){a.video.signals().whenSignal("playback-delegated").then(()=>{a.W=!1;a.A&&a.video.pause()})}function Wa(a){a.video.isInteractive()&&a.video.hideControls();a.Y().then(b=>{!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),Xa(a))})}function Ya(a){a.j.isVisible()&&a.Y().then(b=>{a.hasAutoplay&&!a.userInteracted()&&b?a.W&&(a.w?(a.F.beginSession(),a.video.play(!0),a.fa=!0):(a.A&&a.F.endSession(),a.video.pause(),a.X=!0)):a.w?a.F.beginSession():a.A&&a.F.endSession()})}function Xa(a){let b=a.video,c=a.video.element,d=a.video.win;if(!c.hasAttribute("noaudio")&&!c.signals().get("user-interacted")){var e=Na(d,c),f=a=>{b.mutateElementSkipRemeasure(()=>e.classList.toggle("amp-video-eq-play",a))};b.mutateElementSkipRemeasure(()=>c.appendChild(e));var k=[R(c,"pause",()=>f(!1)),R(c,"playing",()=>f(!0))];b.signals().whenSignal("user-interacted").then(()=>{var b=a.video,c=b.element;a.aa();b.isInteractive()&&b.showControls();b.unmute();k.forEach(a=>{a()});b=c.querySelector(".amp-video-eq");c=c.querySelector("i-amphtml-video-mask");b&&B(b);c&&B(c)});if(b.isInteractive()){var g=P(c)(La),l=a=>{b.mutateElementSkipRemeasure(()=>{var b=a;void 0===b&&(b=g.hasAttribute("hidden"));b?g.removeAttribute("hidden"):g.setAttribute("hidden","")})};b.hideControls();b.mutateElementSkipRemeasure(()=>c.appendChild(g));[R(g,"click",()=>E(b)),R(c,"ad_start",()=>{l(!1);b.showControls()}),R(c,"ad_end",()=>{l(!0);b.hideControls()}),R(c,"unmuted",()=>E(b))].forEach(a=>k.push(a))}}}class Ta{constructor(a,b){this.D=a;this.j=a.ampdoc;this.video=b;this.W=!0;this.w=this.L=this.A=this.ea=!1;this.S=new Ha;this.S.onSessionEnd(()=>V(this,"video-session"));this.F=new Ha;this.F.onSessionEnd(()=>V(this,"video-session-visible"));this.Y=()=>{let a=this.j.win;var b=a||self;if(b.__AMP_MODE)b=b.__AMP_MODE;else{{var e=b;let a=m(e.location.originalHash||e.location.hash),c=m(e.location.search);n||(n=e.AMP_CONFIG&&e.AMP_CONFIG.v?e.AMP_CONFIG.v:"012008290323002");e={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(a.development)||e.AMP_DEV_MODE),examiner:"2"==a.development,esm:!0,geoOverride:a["amp-geo"],minified:!0,lite:void 0!=c.amp_lite,test:!1,log:a.log,version:"2008290323002",rtvVersion:n}}b=b.__AMP_MODE=e}b=b.lite;T||(T=r(Ia));return T(a,b)};this.ba=r(()=>new Za(this.j.win,this));this.X=this.fa=!1;this.U=null;this.ca=this.N=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.D.installAutoplayStyles();this.B=Ca;this.ma=()=>{this.video.play(!1)};this.la=()=>{this.video.pause()};wa(b.element).then(()=>this.videoLoaded());R(b.element,"pause",()=>{V(this,"video-pause");this.A=!1;this.X?this.X=!1:this.S.endSession()});R(b.element,"play",()=>{this.ca=!0;V(this,"video-play")});R(b.element,"playing",()=>{this.A=!0;"playing_manual"==this.getPlayingState()&&(this.aa(),this.D.pauseOtherVideos(this));var a=this.video,b=a.element;if(!a.preimplementsMediaSessionAPI()&&!b.classList.contains("i-amphtml-disable-mediasession")){a=b;b=this.j.win;var e=this.B,f=this.ma,k=this.la;let c=b.navigator;"mediaSession"in c&&b.MediaMetadata&&(c.mediaSession.metadata=new b.MediaMetadata(Ca),Ea(a,e),c.mediaSession.metadata=new b.MediaMetadata(e),c.mediaSession.setActionHandler("play",f),c.mediaSession.setActionHandler("pause",k))}this.S.beginSession();this.w&&this.F.beginSession();this.ca||V(this,"video-play")});R(b.element,"muted",()=>this.N=!0);R(b.element,"unmuted",()=>{this.N=!1;this.D.pauseOtherVideos(this)});R(b.element,"amp:video:tick",a=>{a=a.data;let b=a.eventType;b&&Ua(this,b,a.vars)});R(b.element,"ended",()=>{this.L=!1;V(this,"video-ended")});R(b.element,"ad_start",()=>{this.L=!0;V(this,"video-ad-start")});R(b.element,"ad_end",()=>{this.L=!1;V(this,"video-ad-end")});b.signals().whenSignal("registered").then(()=>{var a=this.video.element;(a=this.video.preimplementsAutoFullscreen()||!a.hasAttribute("rotate-to-fullscreen")?!1:x(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",a))&&this.D.registerForAutoFullscreen(this);this.updateVisibility();this.hasAutoplay&&Wa(this)});this.aa=r(()=>{let a=ua(this.j.win,"firstPlay",z({})),b=this.video.element;G(b,"action").trigger(b,"firstPlay",a,1)});Va(this)}dispose(){this.ba().stop()}isMuted(){return this.N}isPlaybackManaged(){return this.W}videoLoaded(){this.ea=!0;this.U=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.B=y(this.video.getMetadata()));var a=this.j.win.document;if(!this.B.artwork||0==this.B.artwork.length){var b;(b=Da(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);b&&(this.B.artwork=[{src:b}])}!this.B.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.U.getAttribute("title")||this.U.getAttribute("aria-label")||a.title)&&(this.B.title=a)}this.ba().start();this.updateVisibility();this.w&&Ya(this)}updateVisibility(a){let b=this.w;if(a)this.w=!0;else{let a=this.video.element.getIntersectionChangeEntry().intersectionRatio;this.w=.5<=(q(a)?a:0)}this.w!=b&&this.ea&&Ya(this)}getPlayingState(){return this.A?this.A&&this.fa&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"}isRollingAd(){return this.L}userInteracted(){return null!=this.video.signals().get("user-interacted")}getAnalyticsDetails(){let a=this.video;return this.Y().then(b=>{let{width:c,height:d}=a.element.getLayoutBox(),e=this.hasAutoplay&&b,f=a.getPlayedRanges(),k=f.reduce((a,b)=>a+b[1]-b[0],0);return{autoplay:e,currentTime:a.getCurrentTime(),duration:a.getDuration(),height:d,id:a.element.id,muted:this.N,playedTotal:k,playedRangesJson:JSON.stringify(f),state:this.getPlayingState(),width:c}})}}function $a(a){if(a.isInLandscape())return a.C;a.C=null;let b=a.h.filter(a.ka).sort(a.ja)[0];if(b){let{intersectionRatio:c}=b.element.getIntersectionChangeEntry();.5<=c&&(a.C=b)}return a.C}function ab(a){let b=a.j.win,c=b.screen;c&&"orientation"in c&&a.l.push(R(c.orientation,"change",()=>bb(a)));a.l.push(R(b,"orientationchange",()=>bb(a)))}function cb(a){let b=a.j.getRootNode(),c=()=>{a.G=null};a.l.push(R(b,"webkitfullscreenchange",c),R(b,"mozfullscreenchange",c),R(b,"fullscreenchange",c),R(b,"MSFullscreenChange",c))}function bb(a){a.isInLandscape()?null!=a.C&&db(a,a.C):a.G&&eb(a,a.G)}function db(a,b){let c=L(a.j.win,"platform");a.G=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():fb(a,b).then(()=>b.fullscreenEnter())}function eb(a,b){a.G=null;fb(a,b,"center").then(()=>b.fullscreenExit())}function fb(a,b,c=null){let d=b.element,e=M(a.j,"viewport");return L(a.j.win,"timer").promise(330).then(()=>{let{boundingClientRect:a}=d.getIntersectionChangeEntry(),b=a.top,g=a.bottom,l=e.getSize().height;return 0<=b&&g<=l?ma():e.animateScrollIntoView(d,c?c:g>l?"bottom":"top")})}class Sa{constructor(a,b){this.D=b;this.j=a;this.C=this.G=null;this.h=[];this.l=[];this.I=()=>$a(this);this.ka=a=>"playing_manual"==this.D.getPlayingState(a);this.ja=(a,b)=>{{let{intersectionRatio:c,boundingClientRect:d}=a.element.getIntersectionChangeEntry(),{intersectionRatio:k,boundingClientRect:g}=b.element.getIntersectionChangeEntry();a=c-k;.1<Math.abs(a)||(b=M(this.j,"viewport"),a=gb(b,d),b=gb(b,g),a=a<b||a>b?a-b:d.top-g.top)}return a};ab(this);cb(this)}dispose(){this.l.forEach(a=>a());this.l.length=0}register(a){a=a.video;let b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=L(this.j.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.h.push(a),R(b,"pause",this.I),R(b,"playing",this.I),R(b,"ended",this.I),a.signals().whenSignal("user-interacted").then(this.I),$a(this))}isInLandscape(){var a=this.j.win;return a.screen&&"orientation"in a.screen?A(a.screen.orientation.type,"landscape"):90==Math.abs(a.orientation)}}function gb(a,b){let c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}let hb=a=>!!a&&!isNaN(a)&&1<a;function W(a){a=a.K.video;let b=a.getDuration();if(!hb(b))return!1;250>50*b&&(a=["This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",5,"seconds long.",a.element],w().warn.apply(w(),["video-manager"].concat(a)));return!0}function X(a,b){if(b==a.P){var c=a.K,d=a.O,e=c.video,f=()=>X(a,b);if("paused"==c.getPlayingState())d.delay(f,500);else if(c=e.getDuration(),hb(c)){var k=Math.min(Math.max(50*c,250),4e3),g=e.getCurrentTime()/c*100,l=5*Math.floor(g/5);q(l);ib(a,l);d.delay(f,k)}else d.delay(f,500)}}function ib(a,b){0>=b||a.da==b||(a.da=b,V(a.K,"video-percentage-played",{normalizedPercentage:b.toString()}))}class Za{constructor(a,b){this.O=L(a,"timer");this.K=b;this.l=null;this.P=this.da=0}start(){let a=this.K.video.element;this.stop();this.l=this.l||[];W(this)?X(this,this.P):this.l.push(va(a,"loadedmetadata",()=>{W(this)&&X(this,this.P)}));this.l.push(R(a,"ended",()=>{W(this)&&ib(this,100)}))}stop(){if(this.l){for(;0<this.l.length;)this.l.pop()();this.P++}}}function V(a,b,c){let d=a.video;a.getAnalyticsDetails().then(a=>{c&&Object.assign(a,c);d.element.dispatchCustomEvent(b,a)})}let ra=["allow-scripts","allow-same-origin","allow-popups","allow-popups-to-escape-sandbox","allow-top-navigation-by-user-activation"],jb="playing pause ended muted unmuted ad_start ad_end".split(" "),kb=r(()=>/^video-custom-/);function lb(a){let{sourceUrl:b,canonicalUrl:c}=M(a.element,"documentInfo").get();return z({sourceUrl:b,canonicalUrl:c})}function Y(a){let b=a.element,c=G(b,"url");var d=b.getAttribute("src");c.getSourceOrigin(d);c.getWinOrigin(a.win);a=D(b);d=F(d,ja(a));return-1<d.indexOf("#")?d:`${d}#amp=1`}function mb(a,b,c={}){w().assertString(b,"`eventType` missing in analytics event");x(kb().test(b),"Invalid analytics `eventType`. Value must start with `%s`.","video-custom-");a.element.dispatchCustomEvent("amp:video:tick",z({eventType:b,vars:c}))}function nb(a,b){let c=a.H&&a.H.promise;c&&c.then(()=>{a.o&&a.o.contentWindow&&a.o.contentWindow.postMessage(JSON.stringify(b),"*")})}function Z(a,b){nb(a,z({event:"method",method:b}))}class ob extends AMP.BaseElement{constructor(a){super(a);this.H=this.R=this.o=null;this.J=!1;this.na=a=>{a:{var b;if(b=this.o){b=this.o;var d=/.*/;b=b&&a.source==b.contentWindow?"string"===typeof d?d==a.origin:d.test(a.origin):!1}if(b&&(a=a.data)&&(p(a)||A(a,"{"))&&(a=p(a)?a:oa(a),null!=a))if(b=a.id,d=a.method)if("getIntersection"==d){let{time:a,intersectionRatio:c}=this.element.getIntersectionChangeEntry();nb(this,z({id:b,args:{intersectionRatio:.5>c?0:c,time:a}}))}else x(!1,"Unknown method `%s`.",d);else{b=a.event;d="canplay"==b;this.J=this.J||d;var{reject:e,resolve:f}=this.H;if(d){a=f();break a}if("error"==b&&!this.J){a=e("Received `error` event.");break a}"analytics"==b?(a=a.analytics,mb(this,a.eventType,a.vars)):-1<jb.indexOf(b)&&this.element.dispatchCustomEvent(b)}a=void 0}return a}}isLayoutSupported(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a}buildCallback(){var a=Ra,b=J(this.element);{var c=K(b);let d=la(c);let e=d["video-manager"];e||(e=d["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});e.ctor||e.obj||(e.ctor=a,e.context=b,e.resolve&&I(c,"video-manager"))}}layoutCallback(){this.user().assert(!Aa(this.element),"<amp-video-iframe> does not allow tracking iframes. Please use amp-analytics instead.");let a=JSON.stringify(lb(this));this.o=Ba(qa(this,Y(this),a));this.R=R(this.win,"message",this.na);this.H=new aa;return this.H.promise.then(()=>{{let a=this.element;M(a,"video-manager").register(this);a.dispatchCustomEvent("load")}})}mutatedAttributesCallback(a){if(a.src){let a=this.o;a&&a.src!=Y(this)&&(a.src=Y(this))}}createPlaceholderCallback(){var a=this.element;var b=w().assertString(a.getAttribute("poster"));var c=D(a);b=F(b,ja(c));b=z({src:b,layout:"fill",placeholder:""});a=a.ownerDocument.createElement("amp-img");return a=C(a,b)}unlayoutCallback(){this.J=!1;this.o&&(B(this.o),this.o=null);this.R&&(this.R(),this.R=null);return!0}pauseCallback(){this.pause()}pause(){Z(this,"pause")}play(){Z(this,"play")}mute(){Z(this,"mute")}unmute(){Z(this,"unmute")}isInteractive(){return!0}supportsPlatform(){return!0}preimplementsMediaSessionAPI(){return this.element.hasAttribute("implements-media-session")}preimplementsAutoFullscreen(){return this.element.hasAttribute("implements-rotate-to-fullscreen")}fullscreenEnter(){Z(this,"fullscreenenter")}fullscreenExit(){Z(this,"fullscreenexit")}isFullscreen(){if(this.o){var a=this.o;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a}showControls(){Z(this,"showcontrols")}hideControls(){Z(this,"hidecontrols")}getMetadata(){}getDuration(){return 0}getCurrentTime(){return 0}getPlayedRanges(){return[]}seekTo(){this.user().error("amp-video-iframe","`seekTo` not supported.")}}(a=>{a.registerElement("amp-video-iframe",ob)})(self.AMP)}});