(self.AMP=self.AMP||[]).push({n:"amp-ooyala-player",v:"2008290323002",f:function(AMP,_){class k{constructor(){let a,b;this.promise=new Promise((c,d)=>{a=c;b=d});this.resolve=a;this.reject=b}}function m(a,b=""){try{return decodeURIComponent(a)}catch(c){return b}}let aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function n(a){let b=Object.create(null);if(!a)return b;let c;for(;c=aa.exec(a);){let a=m(c[1],c[1]),e=c[2]?m(c[2].replace(/\+/g," "),c[2]):"";b[a]=e}return b}let p="";let q=Object.prototype.toString;function r(a){return"number"===typeof a&&isFinite(a)}function t(a){let b=!1,c=null,d=a;return(...a)=>{b||(c=d.apply(self,a),b=!0,d=null);return c}}let u=self.AMP_CONFIG||{},ca=("string"==typeof u.cdnProxyRegex?new RegExp(u.cdnProxyRegex):u.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function v(a){if(self.document&&self.document.head&&(!self.location||!ca.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}u.cdnUrl||v("runtime-host");u.geoApiUrl||v("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let w=self.__AMP_LOG;function x(){if(!w.user)throw Error("failed to call initLogConstructor");return w.user}function y(a,b,c){return x().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function z(a){let b=Object.create(null);a&&Object.assign(b,a);return b}function A(a){return a||{}}function B(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)}A({c:!0,v:!0,a:!0,ad:!0});function da(a){let b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(d){}let c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(let b=0;b<c.length;b++)0!=c[b].length&&("-"==c[b][0]?a[c[b].substr(1)]=!1:a[c[b]]=!0);return a}function C(a,b){let c=a.ownerDocument.defaultView;var d=c.__AMP_TOP||(c.__AMP_TOP=c);let e=c!=d;if(d.__AMP__EXPERIMENT_TOGGLES)var f=d.__AMP__EXPERIMENT_TOGGLES;else{d.__AMP__EXPERIMENT_TOGGLES=Object.create(null);f=d.__AMP__EXPERIMENT_TOGGLES;if(d.AMP_CONFIG)for(var h in d.AMP_CONFIG){var g=d.AMP_CONFIG[h];"number"===typeof g&&0<=g&&1>=g&&(f[h]=Math.random()<g)}if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-doc-opt-in"])&&0<d.AMP_CONFIG["allow-doc-opt-in"].length&&(h=d.AMP_CONFIG["allow-doc-opt-in"],g=d.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){g=g.getAttribute("content").split(",");for(var l=0;l<g.length;l++)-1!=h.indexOf(g[l])&&(f[g[l]]=!0)}Object.assign(f,da(d));if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-url-opt-in"])&&0<d.AMP_CONFIG["allow-url-opt-in"].length)for(h=d.AMP_CONFIG["allow-url-opt-in"],d=n(d.location.originalHash||d.location.hash),g=0;g<h.length;g++)l=d[`e-${h[g]}`],"1"==l&&(f[h[g]]=!0),"0"==l&&(f[h[g]]=!1)}let ua=!!f["ampdoc-fie"];e&&!ua?b=D(c,b)?E(c,b):null:(a=F(a),a=G(a),b=D(a,b)?E(a,b):null);return b}function H(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return E(a,b)}function I(a,b){var c=F(a);c=G(c);return E(c,b)}function F(a){return a.nodeType?H((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function G(a){a=F(a);return a.isSingleDoc()?a.win:a}function E(a,b){D(a,b);a=J(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function J(a){let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function D(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}let K;function L(){return K?K:K=Promise.resolve(void 0)}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function M(a){a.parentElement&&a.parentElement.removeChild(a)}function ea(a,b,c=null){c?a.insertBefore(b,c.nextSibling):a.insertBefore(b,a.firstChild)}function N(a){a.signals().signal("user-interacted")}let O;function P(a){a=a.ownerDocument||a;O&&O.ownerDocument===a||(O=a.createElement("div"));return fa}function fa(a){var b=O;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return b=a}function Q(a){try{return JSON.parse(a)}catch(b){return null}}let ha=["<iframe frameborder=0 allowfullscreen></iframe>"];function ia(a,b){var c={playing:"playing",paused:"pause",muted:"muted",unmuted:"unmuted"};if(null!=c[b]){var d=c[b];(Array.isArray(d)?d:[d]).forEach(b=>{a.dispatchCustomEvent(b)})}}function ja(a,b){let c=a.element,d=P(c)(ha);a.propagateAttributes(["referrerpolicy"],d);d.src=C(c,"url").assertHttpsUrl(b,c);a.applyFillContent(d);c.appendChild(d);return d}let R;function ka(a,b,c,d){let h,e=a,f=c;h=a=>{try{return f(a)}catch(ba){throw self.__AMP_REPORT_ERROR(ba),ba}};let g=la();let l=!1;d&&(l=d.capture);e.addEventListener(b,h,g?d:l);return()=>{e&&e.removeEventListener(b,h,g?d:l);h=e=f=null}}function la(){if(void 0!==R)return R;R=!1;try{let a={get capture(){R=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(a){}return R}function ma(a,b,c){let d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function S(a,b,c){return ka(a,b,c,void 0)}function na(a,b,c,d){let e=c;let f=ka(a,b,a=>{try{e(a)}finally{e=null,f()}},d);return f}function oa(a){let b;let c=new Promise(c=>{b=na(a,"load",c,void 0)});c.then(b,b);return c}let pa={title:"",artist:"",album:"",artwork:[{src:""}]};function qa(a){let b=a.querySelector('script[type="application/ld+json"]');if(b){var c=Q(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}function ra(a,b){let c=C(a,"url");if(b&&b.artwork){let a=b.artwork;Array.isArray(a);a.forEach(a=>{a&&(a="[object Object]"===q.call(a)?a.src:a,y(c.isProtocolValid(a)))})}}class sa{constructor(){this.o=null}add(a){this.o||(this.o=[]);this.o.push(a);return()=>{this.remove(a)}}remove(a){this.o&&(a=this.o.indexOf(a),-1<a&&this.o.splice(a,1))}removeAll(){this.o&&(this.o.length=0)}fire(a){if(this.o){var b=this.o;for(let c=0;c<b.length;c++)(0,b[c])(a)}}getHandlerCount(){return this.o?this.o.length:0}}class ta{constructor(){this.K=!1;this.aa=new sa}onSessionEnd(a){this.aa.add(a)}beginSession(){this.K=!0}endSession(){this.K&&this.aa.fire();this.K=!1}isSessionActive(){return this.K}}let T;let va="Webkit webkit Moz moz ms O o".split(" ");function wa(a){var b={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"};for(let g in b){var c=a,d=b[g];a:{var e=c.style;var f=g;if(B(f,"--")){e=f;break a}T||(T=z());let a=T[f];if(!a){a=f;if(void 0===e[f]){var h=f;h=h.charAt(0).toUpperCase()+h.slice(1);b:{for(let a=0;a<va.length;a++){let b=va[a]+h;if(void 0!==e[b]){h=b;break b}}h=""}void 0!==e[h]&&(a=h)}T[f]=a}e=a}e&&(B(e,"--")?c.style.setProperty(e,d):c.style[e]=d)}}function xa(a,b){if(b)return Promise.resolve(!1);let c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;wa(c);new Promise(a=>a(c.play())).catch(()=>{});return Promise.resolve(!c.paused)}let U=null;function ya(a,b,c){return b[c]?b[c]:(a=a.querySelector(`style[${c}]`))?b[c]=a:null}let za="i-amphtml-video-mask{display:block;z-index:1}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq .amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq .amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq[unpausable] .amp-video-eq-col div{animation-name:none}.amp-video-eq[unpausable].amp-video-eq-play .amp-video-eq-col div{animation-name:amp-video-eq-animation}.amp-video-eq.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";let Aa=["<i-amphtml-video-mask class=i-amphtml-fill-content role=button></i-amphtml-video-mask>"],Ba=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Ca(a,b){let c=P(b)(Ba),d=c.firstElementChild;for(b=0;4>b;b++){let a=d.cloneNode(!0),f=a.children;for(let a=0;a<f.length;a++)f[a].classList.add(`amp-video-eq-${b+1}-${a+1}`);c.appendChild(a)}M(d);H(a,"platform").isIos()&&c.setAttribute("unpausable","");return c}function Da(a){function b(b,c){a.registerAction(b,()=>{N(a);c()},1)}b("play",()=>a.play(!1));b("pause",()=>a.pause());b("mute",()=>a.mute());b("unmute",()=>a.unmute());let c=()=>a.fullscreenEnter();b("fullscreenenter",c);b("fullscreen",c)}function Ea(a,b){let c=b.video.element;S(c,"amp:video:visibility",a=>{(a=a.data)&&1==a.visible?b.updateVisibility(!0):b.updateVisibility()});S(c,"reloaded",()=>{b.videoLoaded()});if(!a.ja){let b=()=>{for(let b=0;b<a.h.length;b++)a.h[b].updateVisibility()};a.ka.onScroll(b);a.ka.onChanged(b);a.ja=!0}}function V(a,b){if(Fa(a.S,b))return a.S;for(let c=0;c<a.h.length;c++){let d=a.h[c];if(Fa(d,b))return a.S=d}return null}class Ga{constructor(a){this.ampdoc=a;this.installAutoplayStyles=t(()=>{var a=za,c=this.ampdoc.getHeadNode(),d=c.__AMP_CSS_TR;a=d?d(a):a;(d=c.__AMP_CSS_SM)||(d=c.__AMP_CSS_SM=z());var e=ya(c,d,"amp-extension=amp-video-autoplay");e?e.textContent!==a&&(e.textContent=a):(e=(c.ownerDocument||c).createElement("style"),e.textContent=a,e.setAttribute("amp-extension","amp-video-autoplay"),a=ya(c,d,"amp-runtime"),ea(c,e,a),d["amp-extension=amp-video-autoplay"]=e)});this.ka=I(this.ampdoc,"viewport");this.S=this.h=null;this.ja=!1;this.M=H(a.win,"timer");this.la=C(a.getHeadNode(),"action");this.Z=()=>{for(let b=0;b<this.h.length;b++){var a=this.h[b];if("paused"!==a.getPlayingState()){W(a,"video-seconds-played");{var c=a.video.getCurrentTime();let b=a.video.getDuration();r(c)&&r(b)&&0<b&&(c=ma(this.ampdoc.win,"video-manager.timeUpdate",A({time:c,percent:c/b})),this.la.trigger(a.video.element,"timeUpdate",c,1))}}}this.M.delay(this.Z,1e3)};this.P=t(()=>new Ha(this.ampdoc,this));this.M.delay(this.Z,1e3)}dispose(){this.P().dispose();if(this.h)for(let a=0;a<this.h.length;a++)this.h[a].dispose()}register(a){Da(a);if(a.supportsPlatform()){this.h=this.h||[];var b=new Ia(this,a);Ea(this,b);this.h.push(b);b=b.video.element;b.dispatchCustomEvent("registered");b.classList.add("i-amphtml-media-component");a.signals().signal("registered");b.classList.add("i-amphtml-video-interface")}}registerForAutoFullscreen(a){this.P().register(a)}qa(){return this.P()}getVideoStateProperty(a,b){let c=this.ampdoc.getRootNode(),d=x().assertElement(c.getElementById(a),`Could not find an element with id="${a}" for VIDEO_STATE`);a=V(this,d);return(a?a.getAnalyticsDetails():L()).then(a=>a?a[b]:"")}getPlayingState(a){return V(this,a).getPlayingState()}isMuted(a){return V(this,a).isMuted()}userInteracted(a){return V(this,a).userInteracted()}isRollingAd(a){return V(this,a).isRollingAd()}pauseOtherVideos(a){this.h.forEach(b=>{b.isPlaybackManaged()&&b!==a&&"playing_manual"==b.getPlayingState()&&b.video.pause()})}}let Fa=(a,b)=>!!a&&(a.video===b||a.video.element===b);function Ja(a,b,c){let d={["__amp:eventType"]:b};Object.keys(c).forEach(a=>{d[`custom_${a}`]=c[a]});W(a,"video-hosted-custom",d)}function Ka(a){a.video.signals().whenSignal("playback-delegated").then(()=>{a.T=!1;a.A&&a.video.pause()})}function La(a){a.video.isInteractive()&&a.video.hideControls();a.X().then(b=>{!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),Ma(a))})}function Na(a){a.l.isVisible()&&a.X().then(b=>{a.hasAutoplay&&!a.userInteracted()&&b?a.T&&(a.w?(a.F.beginSession(),a.video.play(!0),a.ha=!0):(a.A&&a.F.endSession(),a.video.pause(),a.U=!0)):a.w?a.F.beginSession():a.A&&a.F.endSession()})}function Ma(a){let b=a.video,c=a.video.element,d=a.video.win;if(!c.hasAttribute("noaudio")&&!c.signals().get("user-interacted")){var e=Ca(d,c),f=a=>{b.mutateElementSkipRemeasure(()=>e.classList.toggle("amp-video-eq-play",a))};b.mutateElementSkipRemeasure(()=>c.appendChild(e));var h=[S(c,"pause",()=>f(!1)),S(c,"playing",()=>f(!0))];b.signals().whenSignal("user-interacted").then(()=>{var b=a.video,c=b.element;a.ba();b.isInteractive()&&b.showControls();b.unmute();h.forEach(a=>{a()});b=c.querySelector(".amp-video-eq");c=c.querySelector("i-amphtml-video-mask");b&&M(b);c&&M(c)});if(b.isInteractive()){var g=P(c)(Aa),l=a=>{b.mutateElementSkipRemeasure(()=>{var b=a;void 0===b&&(b=g.hasAttribute("hidden"));b?g.removeAttribute("hidden"):g.setAttribute("hidden","")})};b.hideControls();b.mutateElementSkipRemeasure(()=>c.appendChild(g));[S(g,"click",()=>N(b)),S(c,"ad_start",()=>{l(!1);b.showControls()}),S(c,"ad_end",()=>{l(!0);b.hideControls()}),S(c,"unmuted",()=>N(b))].forEach(a=>h.push(a))}}}class Ia{constructor(a,b){this.D=a;this.l=a.ampdoc;this.video=b;this.T=!0;this.w=this.J=this.A=this.fa=!1;this.O=new ta;this.O.onSessionEnd(()=>W(this,"video-session"));this.F=new ta;this.F.onSessionEnd(()=>W(this,"video-session-visible"));this.X=()=>{let a=this.l.win;var b=a||self;if(b.__AMP_MODE)b=b.__AMP_MODE;else{{var e=b;let a=n(e.location.originalHash||e.location.hash),c=n(e.location.search);p||(p=e.AMP_CONFIG&&e.AMP_CONFIG.v?e.AMP_CONFIG.v:"012008290323002");e={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(a.development)||e.AMP_DEV_MODE),examiner:"2"==a.development,esm:!0,geoOverride:a["amp-geo"],minified:!0,lite:void 0!=c.amp_lite,test:!1,log:a.log,version:"2008290323002",rtvVersion:p}}b=b.__AMP_MODE=e}b=b.lite;U||(U=t(xa));return U(a,b)};this.ca=t(()=>new Oa(this.l.win,this));this.U=this.ha=!1;this.R=null;this.da=this.L=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.D.installAutoplayStyles();this.B=pa;this.pa=()=>{this.video.play(!1)};this.oa=()=>{this.video.pause()};oa(b.element).then(()=>this.videoLoaded());S(b.element,"pause",()=>{W(this,"video-pause");this.A=!1;this.U?this.U=!1:this.O.endSession()});S(b.element,"play",()=>{this.da=!0;W(this,"video-play")});S(b.element,"playing",()=>{this.A=!0;"playing_manual"==this.getPlayingState()&&(this.ba(),this.D.pauseOtherVideos(this));var a=this.video,b=a.element;if(!a.preimplementsMediaSessionAPI()&&!b.classList.contains("i-amphtml-disable-mediasession")){a=b;b=this.l.win;var e=this.B,f=this.pa,h=this.oa;let c=b.navigator;"mediaSession"in c&&b.MediaMetadata&&(c.mediaSession.metadata=new b.MediaMetadata(pa),ra(a,e),c.mediaSession.metadata=new b.MediaMetadata(e),c.mediaSession.setActionHandler("play",f),c.mediaSession.setActionHandler("pause",h))}this.O.beginSession();this.w&&this.F.beginSession();this.da||W(this,"video-play")});S(b.element,"muted",()=>this.L=!0);S(b.element,"unmuted",()=>{this.L=!1;this.D.pauseOtherVideos(this)});S(b.element,"amp:video:tick",a=>{a=a.data;let b=a.eventType;b&&Ja(this,b,a.vars)});S(b.element,"ended",()=>{this.J=!1;W(this,"video-ended")});S(b.element,"ad_start",()=>{this.J=!0;W(this,"video-ad-start")});S(b.element,"ad_end",()=>{this.J=!1;W(this,"video-ad-end")});b.signals().whenSignal("registered").then(()=>{var a=this.video.element;(a=this.video.preimplementsAutoFullscreen()||!a.hasAttribute("rotate-to-fullscreen")?!1:y(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",a))&&this.D.registerForAutoFullscreen(this);this.updateVisibility();this.hasAutoplay&&La(this)});this.ba=t(()=>{let a=ma(this.l.win,"firstPlay",A({})),b=this.video.element;C(b,"action").trigger(b,"firstPlay",a,1)});Ka(this)}dispose(){this.ca().stop()}isMuted(){return this.L}isPlaybackManaged(){return this.T}videoLoaded(){this.fa=!0;this.R=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.B=z(this.video.getMetadata()));var a=this.l.win.document;if(!this.B.artwork||0==this.B.artwork.length){var b;(b=qa(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);b&&(this.B.artwork=[{src:b}])}!this.B.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.R.getAttribute("title")||this.R.getAttribute("aria-label")||a.title)&&(this.B.title=a)}this.ca().start();this.updateVisibility();this.w&&Na(this)}updateVisibility(a){let b=this.w;if(a)this.w=!0;else{let a=this.video.element.getIntersectionChangeEntry().intersectionRatio;this.w=.5<=(r(a)?a:0)}this.w!=b&&this.fa&&Na(this)}getPlayingState(){return this.A?this.A&&this.ha&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"}isRollingAd(){return this.J}userInteracted(){return null!=this.video.signals().get("user-interacted")}getAnalyticsDetails(){let a=this.video;return this.X().then(b=>{let{width:c,height:d}=a.element.getLayoutBox(),e=this.hasAutoplay&&b,f=a.getPlayedRanges(),h=f.reduce((a,b)=>a+b[1]-b[0],0);return{autoplay:e,currentTime:a.getCurrentTime(),duration:a.getDuration(),height:d,id:a.element.id,muted:this.L,playedTotal:h,playedRangesJson:JSON.stringify(f),state:this.getPlayingState(),width:c}})}}function Pa(a){if(a.isInLandscape())return a.C;a.C=null;let b=a.h.filter(a.na).sort(a.ma)[0];if(b){let{intersectionRatio:c}=b.element.getIntersectionChangeEntry();.5<=c&&(a.C=b)}return a.C}function Qa(a){let b=a.l.win,c=b.screen;c&&"orientation"in c&&a.m.push(S(c.orientation,"change",()=>Ra(a)));a.m.push(S(b,"orientationchange",()=>Ra(a)))}function Sa(a){let b=a.l.getRootNode(),c=()=>{a.G=null};a.m.push(S(b,"webkitfullscreenchange",c),S(b,"mozfullscreenchange",c),S(b,"fullscreenchange",c),S(b,"MSFullscreenChange",c))}function Ra(a){a.isInLandscape()?null!=a.C&&Ta(a,a.C):a.G&&Ua(a,a.G)}function Ta(a,b){let c=H(a.l.win,"platform");a.G=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():Va(a,b).then(()=>b.fullscreenEnter())}function Ua(a,b){a.G=null;Va(a,b,"center").then(()=>b.fullscreenExit())}function Va(a,b,c=null){let d=b.element,e=I(a.l,"viewport");return H(a.l.win,"timer").promise(330).then(()=>{let{boundingClientRect:a}=d.getIntersectionChangeEntry(),b=a.top,g=a.bottom,l=e.getSize().height;return 0<=b&&g<=l?L():e.animateScrollIntoView(d,c?c:g>l?"bottom":"top")})}class Ha{constructor(a,b){this.D=b;this.l=a;this.C=this.G=null;this.h=[];this.m=[];this.H=()=>Pa(this);this.na=a=>"playing_manual"==this.D.getPlayingState(a);this.ma=(a,b)=>{{let{intersectionRatio:c,boundingClientRect:d}=a.element.getIntersectionChangeEntry(),{intersectionRatio:h,boundingClientRect:g}=b.element.getIntersectionChangeEntry();a=c-h;.1<Math.abs(a)||(b=I(this.l,"viewport"),a=Wa(b,d),b=Wa(b,g),a=a<b||a>b?a-b:d.top-g.top)}return a};Qa(this);Sa(this)}dispose(){this.m.forEach(a=>a());this.m.length=0}register(a){a=a.video;let b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=H(this.l.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.h.push(a),S(b,"pause",this.H),S(b,"playing",this.H),S(b,"ended",this.H),a.signals().whenSignal("user-interacted").then(this.H),Pa(this))}isInLandscape(){var a=this.l.win;return a.screen&&"orientation"in a.screen?B(a.screen.orientation.type,"landscape"):90==Math.abs(a.orientation)}}function Wa(a,b){let c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}let Xa=a=>!!a&&!isNaN(a)&&1<a;function X(a){a=a.I.video;let b=a.getDuration();if(!Xa(b))return!1;250>50*b&&(a=["This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",5,"seconds long.",a.element],x().warn.apply(x(),["video-manager"].concat(a)));return!0}function Y(a,b){if(b==a.N){var c=a.I,d=a.M,e=c.video,f=()=>Y(a,b);if("paused"==c.getPlayingState())d.delay(f,500);else if(c=e.getDuration(),Xa(c)){var h=Math.min(Math.max(50*c,250),4e3),g=e.getCurrentTime()/c*100,l=5*Math.floor(g/5);r(l);Ya(a,l);d.delay(f,h)}else d.delay(f,500)}}function Ya(a,b){0>=b||a.ea==b||(a.ea=b,W(a.I,"video-percentage-played",{normalizedPercentage:b.toString()}))}class Oa{constructor(a,b){this.M=H(a,"timer");this.I=b;this.m=null;this.N=this.ea=0}start(){let a=this.I.video.element;this.stop();this.m=this.m||[];X(this)?Y(this,this.N):this.m.push(na(a,"loadedmetadata",()=>{X(this)&&Y(this,this.N)}));this.m.push(S(a,"ended",()=>{X(this)&&Ya(this,100)}))}stop(){if(this.m){for(;0<this.m.length;)this.m.pop()();this.N++}}}function W(a,b,c){let d=a.video;a.getAnalyticsDetails().then(a=>{c&&Object.assign(a,c);d.element.dispatchCustomEvent(b,a)})}function Z(a,b){a.V.then(()=>{a.j&&a.j.contentWindow&&a.j.contentWindow.postMessage(b,"*")})}class Za extends AMP.BaseElement{constructor(a){super(a);this.j=null;this.ia=this.ga=this.$="";this.Y=this.W=this.V=null}preconnectCallback(a){H(this.win,"preconnect").url(this.getAmpDoc(),"https://player.ooyala.com",a)}buildCallback(){let a=this.element;this.$=y(a.getAttribute("data-embedcode"),"The data-embedcode attribute is required for %s",a);this.ga=y(a.getAttribute("data-pcode"),"The data-pcode attribute is required for %s",a);this.ia=y(a.getAttribute("data-playerid"),"The data-playerid attribute is required for %s",a);var b=new k;this.V=b.promise;this.W=b.resolve;b=Ga;var c=F(a);{var d=G(c);let a=J(d);let f=a["video-manager"];f||(f=a["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});f.ctor||f.obj||(f.ctor=b,f.context=c,f.resolve&&E(d,"video-manager"))}I(a,"video-manager").register(this)}layoutCallback(){let a=this.element;let b="https://player.ooyala.com/iframe.html?platform=html5-priority";if("v4"==(a.getAttribute("data-playerversion")||"").toLowerCase()){b="https://player.ooyala.com/static/v4/production/latest/skin-plugin/amp_iframe.html?pcode="+encodeURIComponent(this.ga);let c=a.getAttribute("data-config");c&&(b+="&options[skin.config]="+encodeURIComponent(c))}b+="&ec="+encodeURIComponent(this.$)+"&pbid="+encodeURIComponent(this.ia);this.j=ja(this,b);this.Y=S(this.win,"message",a=>{a.source==this.j.contentWindow&&(a=a.data,a="[object Object]"===q.call(a)?a:Q(a),null!=a&&ia(this.element,a.data))});let c=this.loadPromise(this.j).then(()=>{a.dispatchCustomEvent("load")});this.W(c);return c}unlayoutCallback(){this.j&&(M(this.j),this.j=null);this.Y&&this.Y();let a=new k;this.V=a.promise;this.W=a.resolve;return!0}isLayoutSupported(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a}viewportCallback(a){this.element.dispatchCustomEvent("amp:video:visibility",{visible:a})}pauseCallback(){this.j&&this.pause()}play(){Z(this,"play")}pause(){Z(this,"pause")}mute(){Z(this,"mute")}unmute(){Z(this,"unmute")}supportsPlatform(){return!0}isInteractive(){return!0}showControls(){}hideControls(){}fullscreenEnter(){if(this.j){var a=this.j;let b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitEnterFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}}fullscreenExit(){if(this.j){var a=this.j,b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a=a.ownerDocument)&&(b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen)&&b.call(a)}}isFullscreen(){if(this.j){var a=this.j;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a}getMetadata(){}preimplementsMediaSessionAPI(){return!1}preimplementsAutoFullscreen(){return!1}getCurrentTime(){return 0}getDuration(){return 1}getPlayedRanges(){return[]}seekTo(){this.user().error("amp-ooyala-player","`seekTo` not supported.")}}(a=>{a.registerElement("amp-ooyala-player",Za)})(self.AMP)}});