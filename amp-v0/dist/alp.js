self.AMP_CONFIG||(self.AMP_CONFIG={"allow-doc-opt-in":["amp-next-page","analytics-chunks","analytics-chunks-inabox"],"allow-url-opt-in":["pump-early-frame"],"canary":0,"a4aProfilingRate":0.01,"adsense-ad-size-optimization":0.01,"amp-access-iframe":1,"amp-action-macro":1,"amp-ad-ff-adx-ady":0.01,"amp-auto-ads-adsense-holdout":0.1,"amp-consent-restrict-fullscreen":1,"amp-list-init-from-state":1,"amp-mega-menu":1,"amp-nested-menu":1,"amp-playbuzz":1,"amp-sidebar-swipe-to-dismiss":1,"amp-story-responsive-units":1,"amp-story-v1":1,"ampdoc-closest":1,"chunked-amp":1,"doubleclickSraExp":0.01,"doubleclickSraReportExcludedBlock":0.1,"expand-json-targeting":0.01,"fix-inconsistent-responsive-height-selection":0,"fixed-elements-in-lightbox":1,"flexAdSlots":0.05,"hidden-mutation-observer":1,"intersect-resources":0.1,"ios-fixed-no-transfer":0,"layoutbox-invalidate-on-scroll":1,"pump-early-frame":1,"random-subdomain-for-safeframe":0.1,"swg-gpay-api":1,"swg-gpay-native":1,"version-locking":0,"amp-ad-no-center-css":0,"analytics-chunks":1,"sticky-ad-padding-bottom":0.05,"render-on-idle-fix":0.02,"cdnUrl":"https://amerzad.github.io/amp-v0"});/*AMP_CONFIG*/(function(){var l;function p(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function q(a){var b=Object.create(null);if(!a)return b;for(var c;c=aa.exec(a);){var d=p(c[1],c[1]),e=c[2]?p(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var r="";
function u(a){var b=a||self;if(b.__AMP_MODE)var c=b.__AMP_MODE;else{c=q(b.location.originalHash||b.location.hash);var d=q(b.location.search);r||(r=b.AMP_CONFIG&&b.AMP_CONFIG.v?b.AMP_CONFIG.v:"012007102309000");c={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(c.development)||b.AMP_DEV_MODE),examiner:"2"==c.development,esm:!1,geoOverride:c["amp-geo"],minified:!0,lite:void 0!=d.amp_lite,test:!1,log:c.log,version:"2007102309000",rtvVersion:r};c=b.__AMP_MODE=c}return c}
;function ba(a){var b=!1,c=null,d=a;return function(a){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];b||(c=d.apply(self,e),b=!0,d=null);return c}};var v=self.AMP_CONFIG||{},w=("string"==typeof v.cdnProxyRegex?new RegExp(v.cdnProxyRegex):v.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function x(a){if(!self.document||!self.document.head||self.location&&w.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}
var y={thirdParty:v.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:v.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof v.thirdPartyFrameRegex?new RegExp(v.thirdPartyFrameRegex):v.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:v.cdnUrl||x("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:w,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:v.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:v.betaErrorReportingUrl||
"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:v.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:v.geoApiUrl||x("amp-geo-api")};function ca(){}function ia(a,b){return b.reduce(function(a,b){return a+"&s[]="+encodeURIComponent(String(z(b)))},"https://log.amp.dev/?v=012007102309000&id="+encodeURIComponent(a))}
function A(a,b,c){var d=this;c=void 0===c?"":c;this.win=a;this.H=b;this.h=this.win.console&&this.win.console.log&&"0"!=u().log?this.H(parseInt(u().log,10),u().development):0;this.w=c;this.o=null;this.G=ba(function(){a.fetch(y.cdn+"/rtv/012007102309000/log-messages.simple.json").then(function(a){return a.json()},ca).then(function(a){a&&(d.o=a)})})}
function B(a,b,c,d){if(0!=a.h){var e=a.win.console.log;"ERROR"==c?e=a.win.console.error||e:"INFO"==c?e=a.win.console.info||e:"WARN"==c&&(e=a.win.console.warn||e);c=Array.isArray(d[0])?C(a,d[0]):d;b="["+b+"]";"string"===typeof c[0]?c[0]=b+" "+c[0]:c.unshift(b);e.apply(a.win.console,c)}}l=A.prototype;l.isEnabled=function(){return 0!=this.h};l.fine=function(a,b){4<=this.h&&B(this,a,"FINE",Array.prototype.slice.call(arguments,1))};
l.info=function(a,b){3<=this.h&&B(this,a,"INFO",Array.prototype.slice.call(arguments,1))};l.warn=function(a,b){2<=this.h&&B(this,a,"WARN",Array.prototype.slice.call(arguments,1))};l.C=function(a,b){if(1<=this.h)B(this,a,"ERROR",Array.prototype.slice.call(arguments,1));else{var c=D.apply(null,Array.prototype.slice.call(arguments,1));E(this,c);return c}};l.error=function(a,b){var c=this.C.apply(this,arguments);c&&(c.name=a||c.name,self.__AMP_REPORT_ERROR(c))};
l.expectedError=function(a,b){var c=this.C.apply(this,arguments);c&&(c.expected=!0,self.__AMP_REPORT_ERROR(c))};l.createError=function(a){var b=D.apply(null,arguments);E(this,b);return b};l.createExpectedError=function(a){var b=D.apply(null,arguments);E(this,b);b.expected=!0;return b};
l.assert=function(a,b,c){var d;if(Array.isArray(b))return this.assert.apply(this,[a].concat(C(this,b)));if(!a){var e=(b||"Assertion failed").split("%s"),g=e.shift(),f=g,h=[],k=2;for(""!=g&&h.push(g);0<e.length;){var n=e.shift(),m=arguments[k++];m&&m.tagName&&(d=m);h.push(m);g=n.trim();""!=g&&h.push(g);f+=z(m)+n}k=Error(f);k.fromAssert=!0;k.associatedElement=d;k.messageArray=h;E(this,k);self.__AMP_REPORT_ERROR(k);throw k;}return a};
l.assertElement=function(a,b){F(this,a,a&&1==a.nodeType,"Element expected",b);return a};l.assertString=function(a,b){F(this,a,"string"==typeof a,"String expected",b);return a};l.assertNumber=function(a,b){F(this,a,"number"==typeof a,"Number expected",b);return a};l.assertArray=function(a,b){F(this,a,Array.isArray(a),"Array expected",b);return a};l.assertBoolean=function(a,b){F(this,a,!!a===a,"Boolean expected",b);return a};
l.assertEnumValue=function(a,b,c){a:{for(var d in a)if(a[d]===b){a=!0;break a}a=!1}if(a)return b;this.assert(!1,'Unknown %s value: "%s"',c||"enum",b)};function E(a,b){b=G(b);a.w?b.message?-1==b.message.indexOf(a.w)&&(b.message+=a.w):b.message=a.w:0<=b.message.indexOf("\u200b\u200b\u200b")&&(b.message=b.message.replace("\u200b\u200b\u200b",""))}function C(a,b){var c=b.shift();u(a.win).development&&a.G();return a.o&&c in a.o?[a.o[c]].concat(b):["More info at "+ia(c,b)]}
function F(a,b,c,d,e){Array.isArray(e)?a.assert(c,e.concat(b)):a.assert(c,(e||d)+": %s",b)}function z(a){return a&&1==a.nodeType?a.tagName.toLowerCase()+(a.id?"#"+a.id:""):a}function G(a){var b=Object.getOwnPropertyDescriptor(a,"message");if(b&&b.writable)return a;var c=a.stack,d=Error(a.message),e;for(e in a)d[e]=a[e];d.stack=c;return d}
function D(a){for(var b=null,c="",d=0;d<arguments.length;d++){var e=arguments[d];e instanceof Error&&!b?b=G(e):(c&&(c+=" "),c+=e)}b?c&&(b.message=c+": "+b.message):b=Error(c);return b}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var H=self.__AMP_LOG,I=null;function ja(){if(!I)throw Error("failed to call initLogConstructor");return new I(self,function(a,b){return b||1<=a?4:2},"\u200b\u200b\u200b")}
function J(){if(H.dev)return H.dev;if(!I)throw Error("failed to call initLogConstructor");return H.dev=new I(self,function(a){return 3<=a?4:2<=a?3:0})};function K(){this.D=100;this.A=this.B=0;this.j=Object.create(null)}K.prototype.has=function(a){return!!this.j[a]};K.prototype.get=function(a){var b=this.j[a];if(b)return b.access=++this.A,b.payload};K.prototype.put=function(a,b){this.has(a)||this.B++;this.j[a]={payload:b,access:this.A};if(!(this.B<=this.D)){J().warn("lru-cache","Trimming LRU cache");a=this.j;var c=this.A+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var g=d}}void 0!==g&&(delete a[g],this.B--)}};function L(a){return a||{}};function M(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};L({c:!0,v:!0,a:!0,ad:!0,action:!0});var N,O;
function P(a){N||(N=self.document.createElement("a"),O=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new K));var b=O,c=N;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a}function Q(a){"string"==typeof a&&(a=P(a));return y.cdnProxyRegex.test(a.origin)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ka(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null};function la(a,b){if(!(a.defaultPrevented||0!=a.buttons&&1!=a.buttons||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey)){var c=R(a);if(c&&c.eventualUrl&&!1!==a.isTrusted){var d=encodeURIComponent,e=c.a.href;var g=encodeURIComponent("amp")+"="+encodeURIComponent("1");if(g){e=e.split("#",2);var f=e[0].split("?",2);g=f[0]+(f[1]?"?"+g+"&"+f[1]:"?"+g);g+=e[1]?"#"+e[1]:""}else g=e;d="click="+d(g);g=c.eventualUrl;g=-1==c.eventualUrl.indexOf("#")?g+("#"+d):g+("&"+d);d=c.a.ownerDocument.defaultView;(e=d.location.ancestorOrigins)&&
"http://localhost:8000"==e[e.length-1]&&(g=g.replace(P(c.eventualUrl).host+"/c/","http://localhost:8000/max/"));a.preventDefault();if(b)b(g);else{a=g;g=(c.a.target||"_top").toLowerCase();if(d.location.ancestorOrigins)if(e=d.location.ancestorOrigins,2>e.length||-1==e[e.length-1].indexOf(".google."))e=null;else{f=e[e.length-2];var h;(h=Q(f))||(h=f,"string"==typeof h&&(h=P(h)),h=y.localhostRegex.test(h.origin));if(h){h=d;for(var k=0;k<e.length-1;k++)h=h.parent;e={win:h,origin:f}}else e=null}else e=null;
if(e)e.win.postMessage("a2a;"+JSON.stringify(L({url:a})),e.origin);else{try{var n=d.open(a,g,void 0)}catch(t){J().error("DOM","Failed to open url on target: ",g,t)}if(!(n=n||"_top"==g)){var m;"number"!==typeof m&&(m=0);n=0<m+8?!1:-1!=="".indexOf("noopener",m)}n||d.open(a,"_top")}}}}}function R(a){if(a=ka(a.target,function(a){return"A"==a.tagName&&a.href}))return{eventualUrl:ma(a),a:a}}
function ma(a){var b=a.getAttribute("data-url-param-name")||"adurl",c=q(a.search)[b];if(c&&Q(c)&&M(P(c).pathname,"/c/"))return c}function na(a){var b=R(a);if(b&&b.eventualUrl){var c=document.createElement("link");c.rel="preload";c.href=b.eventualUrl;var d=document.createElement("link");d.rel="preload";d.as="fetch";d.href=b.eventualUrl;var e=S(a.target.ownerDocument);e.appendChild(c);e.appendChild(d)}}function S(a){return a.head||a.documentElement};var T;function U(a){a=a.__AMP_TOP||(a.__AMP_TOP=a);return V(a,"ampdoc")}function oa(a){var b=pa(a);b=pa(b);b=b.isSingleDoc()?b.win:b;return V(b,"viewer")}function pa(a){return a.nodeType?U((a.ownerDocument||a).defaultView).getAmpDoc(a):a}function V(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};function qa(){var a=ra();return function(b){return setTimeout(b,a())}}function ra(){var a=0;return function(){var b=Math.pow(1.5,a++);var c=b*(c||.3)*Math.random();.5<Math.random()&&(c*=-1);b+=c;return 1E3*b}};var W,sa="Webkit webkit Moz moz ms O o".split(" ");var ta=!1;function ua(a){if(!ta){ta=!0;a=a.body;var b={opacity:1,visibility:"visible",animation:"none"},c;for(c in b){var d=a,e=b[c];var g=d.style;var f=c;if(M(f,"--"))g=f;else{W||(W=Object.create(null));var h=W[f];if(!h){h=f;if(void 0===g[f]){var k=f;k=k.charAt(0).toUpperCase()+k.slice(1);b:{for(var n=0;n<sa.length;n++){var m=sa[n]+k;if(void 0!==g[m]){k=m;break b}}k=""}void 0!==g[k]&&(h=k)}W[f]=h}g=h}g&&(M(g,"--")?d.style.setProperty(g,e):d.style[g]=e)}}};var X=self.__AMP_ERRORS||[];self.__AMP_ERRORS=X;function Y(a){Y=qa();return Y(a)}function va(a){try{return JSON.stringify(a)}catch(b){return String(a)}}var Z;function wa(a,b,c,d,e){var g=this;!this||!this.document||e&&e.expected||ua(this.document);if(!u().development){var f=!1;try{f=xa()}catch(k){}if(!(f&&.01<Math.random())){var h=ya(a,b,c,d,e,f);h&&Y(function(){try{return za(g,h).catch(function(){})}catch(k){}})}}}
function za(a,b){b.pt&&.9>Math.random()?(T||(T=Promise.resolve(void 0)),a=T):a=Aa(a,b).then(function(a){if(!a){var c=new XMLHttpRequest;c.open("POST",.1>Math.random()?y.betaErrorReporting:y.errorReporting,!0);c.send(JSON.stringify(b))}});return a}
function Aa(a,b){var c=U(a);if(!c.isSingleDoc())return Promise.resolve(!1);var d=c.getSingleDoc();if(!d.getRootNode().documentElement.hasAttribute("report-errors-to-viewer"))return Promise.resolve(!1);var e=oa(d);return e.hasCapability("errorReporter")?e.isTrustedViewer().then(function(a){if(!a)return!1;e.sendMessage("error",L({m:b.m,a:b.a,s:b.s,el:b.el,ex:b.ex,v:b.v,pt:b.pt,jse:b.jse}));return!0}):Promise.resolve(!1)}
function ya(a,b,c,d,e,g){var f=a;e&&(f=e.message?e.message:String(e));f||(f="Unknown error");a=f;var h=!(!e||!e.expected);if(!/_reported_/.test(a)&&"CANCELLED"!=a){var k=!(self&&self.window),n=Math.random();if(-1!=a.indexOf("Failed to load:")||"Script error."==a||k)if(h=!0,.001<n)return;var m=0<=a.indexOf("\u200b\u200b\u200b");if(!(m&&.1<n)){f=Object.create(null);f.v=u().rtvVersion;f.noAmp=g?"1":"0";f.m=a.replace("\u200b\u200b\u200b","");f.a=m?"1":"0";f.ex=h?"1":"0";f.dw=k?"1":"0";var t="1p";self.context&&
self.context.location?(f["3p"]="1",t="3p"):u().runtime&&(t=u().runtime);f.rt=t;"inabox"===t&&(f.adid=u().a4aId);g=self;f.ca=g.AMP_CONFIG&&g.AMP_CONFIG.canary?"1":"0";g=self;f.bt=g.AMP_CONFIG&&g.AMP_CONFIG.type?g.AMP_CONFIG.type:"unknown";self.location.ancestorOrigins&&self.location.ancestorOrigins[0]&&(f.or=self.location.ancestorOrigins[0]);self.viewerState&&(f.vs=self.viewerState);self.parent&&self.parent!=self&&(f.iem="1");if(self.AMP&&self.AMP.viewer){var da=self.AMP.viewer.getResolvedViewerUrl(),
ea=self.AMP.viewer.maybeGetMessagingOrigin();da&&(f.rvu=da);ea&&(f.mso=ea)}Z||(Z=Ba());f.jse=Z;var fa=[];g=self.__AMP__EXPERIMENT_TOGGLES||null;for(var ha in g)fa.push(ha+"="+(g[ha]?"1":"0"));f.exps=fa.join(",");e?(f.el=e.associatedElement?e.associatedElement.tagName:"u",e.args&&(f.args=JSON.stringify(e.args)),m||e.ignoreStack||!e.stack||(f.s=e.stack),e.message&&(e.message+=" _reported_")):(f.f=b||"",f.l=c||"",f.c=d||"");f.r=self.document?self.document.referrer:"";f.ae=X.join(",");f.fr=self.location.originalHash||
self.location.hash;"production"===f.bt&&(f.pt="1");b=a;25<=X.length&&X.splice(0,X.length-25+1);X.push(b);return f}}}function xa(){var a=self;if(!a.document)return!1;a=a.document.querySelectorAll("script[src]");for(var b=0;b<a.length;b++)if(!Q(a[b].src.toLowerCase()))return!0;return!1}
function Ba(){function a(){}a.prototype.t=function(){throw Error("message");};var b=new a;try{b.t()}catch(d){b=d.stack;if(M(b,"t@"))return"Safari";if(-1<b.indexOf(".prototype.t@"))return"Firefox";var c=b.split("\n").pop();if(/\bat .* \(/i.test(c))return"IE";if(M(b,"Error: message"))return"Chrome"}return"unknown"};(function(){I=A;J();H.user||(H.user=ja())})();
(function(a){self.__AMP_REPORT_ERROR=a})(function(a,b){try{if(a)if(void 0!==a.message)a=G(a);else{var c=a;a=Error(va(c));a.origError=c}else a=Error("Unknown error");if(a.reported)return a;a.reported=!0;var d=b||a.associatedElement;d&&d.classList&&(d.classList.add("i-amphtml-error"),u().development&&(d.classList.add("i-amphtml-element-error"),d.setAttribute("error-message",a.message)));if(self.console){var e=console.error||console.log;a.messageArray?e.apply(console,a.messageArray):d?e.call(console,
a.message,d):e.call(console,a.message)}d&&d.F&&d.F("amp:error",a.message);wa.call(void 0,void 0,void 0,void 0,void 0,a)}catch(g){setTimeout(function(){throw g;})}return a});(function(a){a.document.documentElement.addEventListener("click",la);a.document.documentElement.addEventListener("touchstart",na)})(window);(function(a){(new a.Image).src=y.cdn+"/preconnect.gif";var b=document.createElement("link");b.rel="preload";b.setAttribute("as","script");b.href=y.cdn+"/v0.js";S(a.document).appendChild(b)})(window);})();

//# sourceMappingURL=alp.js.map