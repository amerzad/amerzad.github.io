(self.AMP=self.AMP||[]).push({n:"amp-access-scroll",v:"2008290323002",f:(function(AMP,_){
'use strict';var h,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var k;
if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var n;a:{var ca={a:!0},p={};try{p.__proto__=ca;n=p.a;break a}catch(a){}n=!1}k=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var q=k;
function r(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(q)q(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ba=b.prototype}function da(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function t(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ea=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function u(a){var b=Object.create(null);if(!a)return b;for(var c;c=ea.exec(a);){var d=t(c[1],c[1]),e=c[2]?t(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var v="";
function w(){var a=self;if(a.__AMP_MODE)var b=a.__AMP_MODE;else{b=u(a.location.originalHash||a.location.hash);var c=u(a.location.search);v||(v=a.AMP_CONFIG&&a.AMP_CONFIG.v?a.AMP_CONFIG.v:"012008290323002");b={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(b.development)||a.AMP_DEV_MODE),examiner:"2"==b.development,esm:!1,geoOverride:b["amp-geo"],minified:!0,lite:void 0!=c.amp_lite,test:!1,log:b.log,version:"2008290323002",rtvVersion:v};b=a.__AMP_MODE=b}return b};var x=self.AMP_CONFIG||{},y=("string"==typeof x.cdnProxyRegex?new RegExp(x.cdnProxyRegex):x.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function z(a){if(!self.document||!self.document.head||self.location&&y.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}
var ha={thirdParty:x.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:x.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof x.thirdPartyFrameRegex?new RegExp(x.thirdPartyFrameRegex):x.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:x.cdnUrl||z("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:y,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:x.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:x.betaErrorReportingUrl||
"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:x.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:x.geoApiUrl||z("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var A=self.__AMP_LOG;function B(){if(A.dev)return A.dev;throw Error("failed to call initLogConstructor");}function C(a,b,c,d,e,f){if(!A.user)throw Error("failed to call initLogConstructor");return A.user.assert(a,b,c,d,e,f,void 0,void 0,void 0,void 0,void 0)};var D=Object.prototype.hasOwnProperty;function E(a){return a||{}};function F(){this.X=100;this.G=this.N=0;this.A=Object.create(null)}F.prototype.has=function(a){return!!this.A[a]};F.prototype.get=function(a){var b=this.A[a];if(b)return b.access=++this.G,b.payload};F.prototype.put=function(a,b){this.has(a)||this.N++;this.A[a]={payload:b,access:this.G};if(!(this.N<=this.X)){B().warn("lru-cache","Trimming LRU cache");a=this.A;var c=this.G+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.N--)}};E({c:!0,v:!0,a:!0,ad:!0});var G,H;
function ia(a){G||(G=self.document.createElement("a"),H=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new F));var b=H,c=G;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a}function ja(a){var b=encodeURIComponent("feature")+"="+encodeURIComponent("r");if(b){a=a.split("#",2);var c=a[0].split("?",2);b=c[0]+(c[1]?"?"+c[1]+"&"+b:"?"+b);b+=a[1]?"#"+a[1]:""}else b=a;return b}
function ka(a,b){var c=void 0===c?"source":c;C(null!=a,"%s %s must be available",b,c);var d=a;"string"==typeof d&&(d=ia(d));var e;(e="https:"==d.protocol||"localhost"==d.hostname||"127.0.0.1"==d.hostname)||(d=d.hostname,e=d.length-10,e=0<=e&&d.indexOf(".localhost",e)==e);C(e||/^(\/\/)/.test(a),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',b,c,a)}
function la(a){"string"==typeof a&&(a=ia(a));return ha.cdnProxyRegex.test(a.origin)};function I(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return J(a,b)}function K(a,b){var c=L(a);c=M(c);return J(c,b)}function L(a){return a.nodeType?I((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function M(a){a=L(a);return a.isSingleDoc()?a.win:a}function J(a,b){a=N(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function ma(a){var b=N(a).access;if(b){if(b.promise)return b.promise;J(a,"access");return b.promise=Promise.resolve(b.obj)}return null}function N(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function na(){var a=new da,b=a.promise,c=a.resolve;a=a.reject;b.catch(function(){});return{obj:null,promise:b,resolve:c,reject:a,context:null,ctor:null}};var O;/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function P(a,b,c){a=a.createElement(b);for(var d in c)a.setAttribute(d,c[d]);return a};function oa(a){return pa(a).then(function(a){return C(a,"Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.","access","amp-access","amp-access","amp-access")})}
function pa(a){var b=ma(M(a));if(b)return b;var c=L(a);return c.waitForBodyOpen().then(function(){var a=c.win;var b=c.win.document.head;if(b){var f={};b=b.querySelectorAll("script[custom-element],script[custom-template]");for(var g=0;g<b.length;g++){var m=b[g];m=m.getAttribute("custom-element")||m.getAttribute("custom-template");f[m]=!0}f=Object.keys(f)}else f=[];f.includes("amp-access")?a=I(a,"extensions").waitForExtension(a,"amp-access"):(O||(O=Promise.resolve(void 0)),a=O);return a}).then(function(){var b=
c.win;if(b.__AMP_EXTENDED_ELEMENTS&&b.__AMP_EXTENDED_ELEMENTS["amp-access"]){b=M(a);var e=ma(b);e?b=e:(b=N(b),b.access=na(),b=b.access.promise)}else b=null;return b})};function Q(a,b,c){this.ampdoc=a;this.P=c;this.m=C(b.authorization,'"authorization" URL must be specified');ka(this.m,'"authorization"');this.I=!b.noPingback;this.D=b.pingback;this.I&&(C(this.D,'"pingback" URL must be specified'),ka(this.D,'"pingback"'));b.authorizationTimeout?(c=b.authorizationTimeout,C("number"==typeof c,'"authorizationTimeout" must be a number'),w().development||(c=Math.min(c,3E3))):c=3E3;this.H=c;this.V=I(a.win,"xhr");this.aa=I(a.win,"timer")}h=Q.prototype;
h.getConfig=function(){return{authorizationUrl:this.m,pingbackEnabled:this.I,pingbackUrl:this.D,authorizationTimeout:this.H}};h.getAuthorizationUrl=function(){return this.m};h.isAuthorizationEnabled=function(){return!0};h.getAuthorizationTimeout=function(){return this.H};
h.authorize=function(){var a=this;B().fine("amp-access-client","Start authorization via ",this.m);return this.P.buildUrl(this.m,!1).then(function(b){B().fine("amp-access-client","Authorization URL: ",b);return a.aa.timeoutPromise(a.H,a.V.fetchJson(b,{credentials:"include"})).then(function(a){return a.json()})})};h.isPingbackEnabled=function(){return this.I};
h.pingback=function(){var a=this;return this.P.buildUrl(this.D,!0).then(function(b){B().fine("amp-access-client","Pingback URL: ",b);return a.V.sendSignal(b,{method:"POST",credentials:"include",headers:E({"Content-Type":"application/x-www-form-urlencoded"}),body:""})})};h.postAction=function(){};function qa(a,b){function c(){d=0;var g=1E3-(a.Date.now()-e);if(0<g)d=a.setTimeout(c,g);else{var m=f;f=null;b.apply(null,m)}}var d=0,e=0,f=null;return function(b){for(var g=[],l=0;l<arguments.length;++l)g[l-0]=arguments[l];e=a.Date.now();f=g;d||(d=a.setTimeout(c,1E3))}};function ra(a,b,c){var d=this;this.l=a;this.R=null;this.h=b;this.Y=c;var e=qa(a.win,this.Z.bind(this));this.U=K(a,"viewport");this.L=[];a.whenReady().then(function(){d.U.onChanged(e);d.L=a.getBody().getElementsByTagName("p")})}
ra.prototype.Z=function(){var a=this;return Promise.all([].slice.call(this.L).map(function(b){return a.U.getClientRectAsync(b)})).then(function(b){for(var c=null,d=null,e=b.length-1;0<=e;e--){var f=b[e].bottom;0>=f&&(null===d||d<f)&&(c=e,d=f)}null!==c&&(e=c,a.R!==e&&(a.R=e,sa(a,a.L[e].innerText.substring(0,50))))})};
function sa(a,b){a.h.buildUrl(a.Y+"/amp/updatedepth?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&rd="+encodeURIComponent(b),!1).then(function(b){I(a.l.win,"xhr").fetch(b)})};var S;function ta(a){var b=window,c=ua();b.addEventListener("message",function(b){try{return a(b)}catch(e){throw self.__AMP_REPORT_ERROR(e),e;}},c?void 0:!1)}function ua(){if(void 0!==S)return S;S=!1;try{var a={get capture(){S=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return S};function T(a){this.C=[];this.S=[];this.T=a;this.K=this.K.bind(this);ta(this.K)}T.prototype.K=function(a){var b=this,c=a.data,d=a.origin===this.T,e="object"===typeof c&&"_scramp"in c,f=-1<this.C.indexOf(a.source);d&&f&&e&&(this.S.forEach(function(a){return a(c)}),this.C.filter(function(b){return b!==a.source}).forEach(function(a){a.postMessage(c,b.T)}))};T.prototype.register=function(a,b){var c=this;b&&this.S.push(b);Promise.resolve(a).then(function(a){-1===c.C.indexOf(a)&&c.C.push(a)})};var U,va="Webkit webkit Moz moz ms O o".split(" ");function V(a){var b=this;this.B=a;this.j=this.o=this.M=null;this.layout_={width:null,left:null,right:null};this.window=new Promise(function(a){b.M=a})}h=V.prototype;h.el=function(a,b,c){var d=P(this.B.win.document,a,b);Array.isArray(c)&&c.forEach(function(a){return d.appendChild(a)});return d};h.mount=function(){var a=this.o;this.B.getBody().appendChild(a);K(this.B,"viewport").addToFixedLayer(a)};h.mutate=function(a){I(this.B.win,"vsync").mutate(a)};
h.toggleClass=function(a,b){var c=this.o.classList;b?c.add(a):c.remove(a)};h.updateHorizontalLayout=function(a){var b=this,c=!1;Object.keys(this.layout_).forEach(function(d){if(D.call(a,d)){var e=b.cssSize(a[d]);b.layout_[d]!==e&&(b.layout_[d]=e,c=!0)}});return c};
h.renderHorizontalLayout=function(){var a=this.o,b=this.layout_;"display"in b&&B().error("STYLE","`display` style detected in styles. You must use toggle instead.");for(var c in b){var d=a,e=b[c];var f=d.style;var g=c;if(2>g.length?0:0==g.lastIndexOf("--",0))f=g;else{U||(U=Object.create(null));var m=U[g];if(!m){m=g;if(void 0===f[g]){var l=g;l=l.charAt(0).toUpperCase()+l.slice(1);b:{for(var R=0;R<va.length;R++){var fa=va[R]+l;if(void 0!==f[fa]){l=fa;break b}}l=""}void 0!==f[l]&&(m=l)}U[g]=m}f=m}f&&
((2>f.length?0:0==f.lastIndexOf("--",0))?d.style.setProperty(f,e):d.style[f]=e)}};h.cssSize=function(a){return"number"===typeof a?a+"px":a};function W(a){return"https://connect"+((w().development&&a.etld?a.etld:"")||".scroll.com")}function wa(a,b){return a.buildUrl(""+b+"?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&p=1.2&x=QUERY_PARAM(scrollx)",!1)};function X(a,b){V.call(this,a);this.h=b;this.F()}r(X,V);X.prototype.F=function(){var a=this;this.mutate(function(){a.j||(a.J(),a.M(a.j.contentWindow));a.renderHorizontalLayout()})};
X.prototype.J=function(){var a=this;this.j=this.el("iframe",E({scrolling:"no",frameborder:"0",allowtransparency:"true",title:"Scroll",width:"100%",height:"100%",sandbox:"allow-scripts allow-same-origin allow-top-navigation allow-popups allow-popups-to-escape-sandbox"}));this.o=this.el("div",E({"class":"amp-access-scroll-bar"}),[this.j]);this.mount();wa(this.h,W(this.h.getAdapterConfig())+"/html/amp/scrolltab").then(function(b){a.j.setAttribute("src",b)})};
X.prototype.update=function(a){this.updateHorizontalLayout(a)&&this.F()};function Y(a){V.call(this,a);this.O="Scroll Feature";this.w={url:"",open:!1,title:this.O}}r(Y,V);Y.prototype.update=function(a){var b=this,c=!1;switch(a._scramp){case "au":c=this.updateHorizontalLayout(a);["open","url","title"].forEach(function(d){D.call(a,d)&&a[d]!==b.w[d]&&(b.w[d]=a[d],c=!0)});break;case "st":["revealed"].forEach(function(d){D.call(a,d)&&a[d]!==b.w[d]&&(b.w[d]=a[d],c=!0)})}c&&this.F(this.w)};
Y.prototype.F=function(a){var b=this;this.mutate(function(){b.j||(b.J(),b.M(b.j.contentWindow));b.j.src!==a.url&&b.j.setAttribute("src",a.url);b.renderHorizontalLayout();b.j.setAttribute("title",a.title);var c=b.j,d=a.open;void 0===d&&(d=c.hasAttribute("hidden"));d?c.removeAttribute("hidden"):c.setAttribute("hidden","")})};
Y.prototype.J=function(){this.o=this.j=this.el("iframe",E({"class":"amp-access-scroll-sheet",scrolling:"no",frameborder:"0",allowtransparency:"true",title:this.O,sandbox:"allow-scripts allow-same-origin allow-top-navigation allow-popups allow-popups-to-escape-sandbox"}));this.mount()};function xa(a,b){var c=a.getHeadNode(),d=ya(c,za(c));if(b){var e=a.getRootNode();if(Aa(e,d))b(d);else var f=setInterval(function(){Aa(e,d)&&(clearInterval(f),b(d))},4)}}
function ya(a,b){var c=a.__AMP_CSS_SM;c||(c=a.__AMP_CSS_SM=Object.create(null));var d=Ba(a,c,"amp-extension=amp-access-scroll-elt");if(d)return d.textContent!==b&&(d.textContent=b),d;var e=(a.ownerDocument||a).createElement("style");e.textContent=b;var f=null;e.setAttribute("amp-extension","amp-access-scroll-elt");b=f=Ba(a,c,"amp-runtime");(b=void 0===b?null:b)?a.insertBefore(e,b.nextSibling):a.insertBefore(e,a.firstChild);return c["amp-extension=amp-access-scroll-elt"]=e}
function Ba(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null}
function za(a){return(a=a.__AMP_CSS_TR)?a(".amp-access-scroll-bar{bottom:0;height:60px;left:auto;right:0px;width:48px}.amp-access-scroll-bar,.amp-access-scroll-sheet{position:fixed;background:transparent;z-index:2147483647}@media (max-width:599px){.amp-access-scroll-sheet{bottom:60px;height:100px;left:0!important;right:0!important;width:100%!important}}@media (min-width:600px){.amp-access-scroll-sheet{bottom:76px;height:56px;left:auto;right:16px;width:475px}}\n/*# sourceURL=/extensions/amp-access-scroll/0.1/amp-access-scroll.css*/"):".amp-access-scroll-bar{bottom:0;height:60px;left:auto;right:0px;width:48px}.amp-access-scroll-bar,.amp-access-scroll-sheet{position:fixed;background:transparent;z-index:2147483647}@media (max-width:599px){.amp-access-scroll-sheet{bottom:60px;height:100px;left:0!important;right:0!important;width:100%!important}}@media (min-width:600px){.amp-access-scroll-sheet{bottom:76px;height:56px;left:auto;right:16px;width:475px}}\n/*# sourceURL=/extensions/amp-access-scroll/0.1/amp-access-scroll.css*/"}
function Aa(a,b){var c=a.styleSheets;for(a=0;a<c.length;a++)if(c[a].ownerNode==b)return!0;return!1};function Z(a,b){var c=b.getAdapterConfig(),d=W(c);Q.call(this,a,{authorization:d+"/amp/access?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&x=QUERY_PARAM(scrollx)&p=1.2",pingback:d+"/amp/pingback?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&r=DOCUMENT_REFERRER&x=QUERY_PARAM(scrollx)&d=AUTHDATA(scroll)&v=AUTHDATA(visitId)&p=1.2",namespace:"scroll"},{buildUrl:b.buildUrl.bind(b),collectUrlVars:b.collectUrlVars.bind(b)});xa(a,function(){});this.h=b;this.W=d}
r(Z,Q);
Z.prototype.authorize=function(){var a=this;return Q.prototype.authorize.call(this).then(function(b){var c=a.ampdoc.getRootNode().querySelector("amp-story[standalone]");if(b&&b.scroll){if(!c){var d=new X(a.ampdoc,a.h),e=new Y(a.ampdoc),f=new T(a.W);f.register(e.window,function(a){"au"!==a._scramp&&"st"!==a._scramp||e.update(a)});f.register(d.window,function(a){"st"===a._scramp&&(e.update(a),d.update(a))});var g=a.h.getAdapterConfig();Ca(a.ampdoc,g);b.features&&b.features.d&&new ra(a.ampdoc,a.h,W(g))}}else b&&
b.blocker&&!u(a.ampdoc.win.location.search).scrollnoblockerrefresh&&(new Da(a.ampdoc,a.h,b.features&&b.features.r)).check();return b})};function Da(a,b,c){this.l=a;this.h=b;this.$=c}Da.prototype.check=function(){var a=this;I(this.l.win,"xhr").fetchJson("https://block.scroll.com/check.json").then(function(){return!1},function(a){return 0===a.message.indexOf("XHR Failed fetching (https://block.scroll.com/...): Resource blocked by content blocker")}).then(function(b){!0===b&&Ea(a)})};
function Ea(a){if(a.$&&!la(a.l.win.location))wa(a.h,"https://scroll.com/loginwithapp").then(function(b){K(a.l,"navigation").navigateTo(a.l.win,ja(b))});else{var b=W(a.h.getAdapterConfig()),c=new X(a.l,a.h);(new T(b)).register(c.window,function(a){"st"===a._scramp&&c.update(a)})}}
function Ca(a,b){if(!b.disableAnalytics){var c=a.win.document,d=E({trigger:"immediate"});b.dataConsentId&&(d["data-block-on-consent"]="");var e=P(c,"amp-analytics",d),f=P(c,"script",E({type:"application/json"}));c={requests:{scroll:W(b)+"/amp/analytics?rid=ACCESS_READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&r=DOCUMENT_REFERRER&x=QUERY_PARAM(scrollx)&d=AUTHDATA(scroll.scroll)&v=AUTHDATA(scroll.visitId)&h=SOURCE_HOSTNAME&s=${totalEngagedTime}&p=1.2"},triggers:{trackInterval:{on:"timer",
timerSpec:{interval:15,maxTimerLength:7200},request:"scroll"}}};f.textContent=JSON.stringify(c);e.appendChild(f);e.CONFIG=c;I(a.win,"extensions").installExtensionForDoc(a,"amp-analytics");a.getBody().appendChild(e)}};(function(a){a.registerServiceForDoc("scroll",function(a){var b=a.getHeadNode();return oa(b).then(function(b){var c=b.getVendorSource("scroll"),d=new Z(a,c);c.getAdapter().registerVendor(d);return d})})})(self.AMP);
})});

//# sourceMappingURL=amp-access-scroll-0.1.js.map
