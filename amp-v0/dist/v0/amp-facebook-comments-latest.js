(self.AMP=self.AMP||[]).push({n:"amp-facebook-comments",v:"2007102309000",f:(function(AMP,_){
var n,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var w;
if("function"==typeof Object.setPrototypeOf)w=Object.setPrototypeOf;else{var x;a:{var ca={a:!0},y={};try{y.__proto__=ca;x=y.a;break a}catch(a){}x=!1}w=x?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var z=w;function A(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var da=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function B(a){var b=Object.create(null);if(!a)return b;for(var c;c=da.exec(a);){var d=A(c[1],c[1]),e=c[2]?A(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var C="";
function D(){var a=self;if(a.__AMP_MODE)var b=a.__AMP_MODE;else{b=B(a.location.originalHash||a.location.hash);var c=B(a.location.search);C||(C=a.AMP_CONFIG&&a.AMP_CONFIG.v?a.AMP_CONFIG.v:"012007102309000");b={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(b.development)||a.AMP_DEV_MODE),examiner:"2"==b.development,esm:!1,geoOverride:b["amp-geo"],minified:!0,lite:void 0!=c.amp_lite,test:!1,log:b.log,version:"2007102309000",rtvVersion:C};b=a.__AMP_MODE=b}return b};var ea=Object.prototype.toString;var E=self.AMP_CONFIG||{},F=("string"==typeof E.cdnProxyRegex?new RegExp(E.cdnProxyRegex):E.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function G(a){if(!self.document||!self.document.head||self.location&&F.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}
var H={thirdParty:E.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:E.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof E.thirdPartyFrameRegex?new RegExp(E.thirdPartyFrameRegex):E.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:E.cdnUrl||G("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:F,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:E.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:E.betaErrorReportingUrl||
"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:E.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:E.geoApiUrl||G("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var I=self.__AMP_LOG;function J(){if(!I.user)throw Error("failed to call initLogConstructor");return I.user}function K(){if(I.dev)return I.dev;throw Error("failed to call initLogConstructor");}function L(a,b,c,d,e){J().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)};function M(a){return a||{}};function N(){this.w=100;this.l=this.m=0;this.j=Object.create(null)}N.prototype.has=function(a){return!!this.j[a]};N.prototype.get=function(a){var b=this.j[a];if(b)return b.access=++this.l,b.payload};N.prototype.put=function(a,b){this.has(a)||this.m++;this.j[a]={payload:b,access:this.l};if(!(this.m<=this.w)){K().warn("lru-cache","Trimming LRU cache");a=this.j;var c=this.l+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.m--)}};function O(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};M({c:!0,v:!0,a:!0,ad:!0,action:!0});var P,fa;
function Q(a){P||(P=self.document.createElement("a"),fa=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new N));var b=fa,c=P;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a};function ha(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){K().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function ia(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return ja(a,b)}function ka(a,b){var c=R(a);c=R(c);c=c.isSingleDoc()?c.win:c;return ja(c,b)}function R(a){return a.nodeType?ia((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function ja(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var S;var la=['<svg viewBox="0 0 72 72"><path fill=currentColor d="M46,36c0-5.5-4.5-10-10-10s-10,4.5-10,10c0,5,3.7,9.1,8.4,9.9v-7h-2.5V36h2.5v-2.2c0-2.5,1.5-3.9,3.8-3.9\n                c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6V36h2.8l-0.4,2.9h-2.3v7C42.3,45.1,46,41,46,36z"/><path fill=#ffffff class=i-amphtml-new-loader-transparent-on-shim d="M39.9,38.9l0.4-2.9h-2.8v-1.9c0-0.8,0.4-1.6,1.6-1.6h1.3v-2.5c0,0-1.1-0.2-2.2-0.2c-2.3,0-3.8,1.4-3.8,3.9V36\n                h-2.5v2.9h2.5v7c0.5,0.1,1,0.1,1.6,0.1s1.1,0,1.6-0.1v-7H39.9z"/></svg>'];var T;function ma(a,b){var c=a,d=b;var e=function(a){try{return d(a)}catch(k){throw self.__AMP_REPORT_ERROR(k),k;}};var f=na();c.addEventListener("message",e,f?void 0:!1);return function(){c&&c.removeEventListener("message",e,f?void 0:!1);e=c=d=null}}function na(){if(void 0!==T)return T;T=!1;try{var a={get capture(){T=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return T};function oa(a,b){return ma(a,b)};function pa(a){for(var b=a.nodeName,c=0,d=0,e=a.previousElementSibling;e&&25>d&&100>c;)e.nodeName==b&&d++,c++,e=e.previousElementSibling;return 25>d&&100>c?"."+d:""};var U,qa="Webkit webkit Moz moz ms O o".split(" ");function ra(a){var b=a.style;if(O("border","--"))b="border";else{U||(U=Object.create(null));var c=U.border;if(!c){c="border";if(void 0===b.border){var d;b:{for(d=0;d<qa.length;d++){var e=qa[d]+"Border";if(void 0!==b[e]){d=e;break b}}d=""}void 0!==b[d]&&(c=d)}U.border=c}b=c}b&&(O(b,"--")?a.style.setProperty(b,"none"):a.style[b]="none")};function sa(a){a=parseFloat(a);return"number"===typeof a&&isFinite(a)?a:void 0};function V(a,b){try{return JSON.parse(a)}catch(c){return b&&b(c),null}};var W={};
function ta(a,b){L("facebook","Attribute type required for <amp-ad>: %s",b);var c=0;for(var d=a;d&&d!=d.parent;d=d.parent)c++;c=String(c)+"-"+ua(a);var e=d={},f=b.dataset,g;for(g in f)O(g,"vars")||(e[g]=f[g]);if(g=b.getAttribute("json")){g=V(g);if(void 0===g)throw J().createError("Error parsing JSON in json attribute in element %s",b);for(var k in g)e[k]=g[k]}k=d;d=Date.now();e=b.getAttribute("width");g=b.getAttribute("height");k=k?k:{};k.width=sa(e);k.height=sa(g);b.getAttribute("title")&&(k.title=
b.getAttribute("title"));var u=a.location.href;"about:srcdoc"==u&&(u=a.parent.location.href);var l=R(b),t=ka(b,"documentInfo").get();e=ka(b,"viewer").getUnconfirmedReferrerUrl();var p=b.getPageLayoutBox();g=k;f=H.thirdParty+"/2007102309000/ampcontext-v0.js";var za=t.sourceUrl,Aa=t.canonicalUrl;t=t.pageViewId;u={href:u};var Ba=b.tagName,Ca={localDev:!1,development:D().development,esm:!1,minified:!0,lite:D().lite,test:!1,log:D().log,version:D().version,rtvVersion:D().rtvVersion},Da=!(!a.AMP_CONFIG||
!a.AMP_CONFIG.canary);l=!l.isVisible();p=p?{left:p.left,top:p.top,width:p.width,height:p.height}:null;var Ea=b.getIntersectionChangeEntry();var q=b;for(var r=[],h=0;q&&1==q.nodeType&&25>h;){var m="";q.id&&(m="/"+q.id);var Fa=q.nodeName.toLowerCase();r.push(""+Fa+m+pa(q));h++;q=q.parentElement}q=r.join();r=q.length;h=5381;for(m=0;m<r;m++)h=33*h^q.charCodeAt(m);q=String(h>>>0);if(a.__AMP__EXPERIMENT_TOGGLES)a=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);r=a.__AMP__EXPERIMENT_TOGGLES;
if(a.AMP_CONFIG)for(var v in a.AMP_CONFIG)h=a.AMP_CONFIG[v],"number"===typeof h&&0<=h&&1>=h&&(r[v]=Math.random()<h);if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(v=a.AMP_CONFIG["allow-doc-opt-in"],h=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(h=h.getAttribute("content").split(","),m=0;m<h.length;m++)-1!=v.indexOf(h[m])&&(r[h[m]]=!0);Object.assign(r,ha(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&
0<a.AMP_CONFIG["allow-url-opt-in"].length)for(v=a.AMP_CONFIG["allow-url-opt-in"],a=B(a.location.originalHash||a.location.hash),h=0;h<v.length;h++)m=a["e-"+v[h]],"1"==m&&(r[v[h]]=!0),"0"==m&&(r[v[h]]=!1);a=r}g._context=M({ampcontextVersion:"2007102309000",ampcontextFilepath:f,sourceUrl:za,referrer:e,canonicalUrl:Aa,pageViewId:t,location:u,startTime:d,tagName:Ba,mode:Ca,canary:Da,hidden:l,initialLayoutRect:p,initialIntersection:Ea,domFingerprint:q,experimentToggles:a,sentinel:c});(b=b.getAttribute("src"))&&
(k.src=b);d=k;d.type="facebook";Object.assign(d._context,void 0);return d}
function va(a,b){var c={},d=c.disallowCustom,e=c.allowFullscreen;c=ta(a,b);var f=a.document.createElement("iframe");W[c.type]||(W[c.type]=0);W[c.type]+=1;var g=b.getAmpDoc();a=wa(a,g,d);var k=Q(a).hostname;g=JSON.stringify(M({host:k,type:c.type,count:W[c.type],attributes:c}));f.src=a;f.ampLocation=Q(a);f.name=g;c.width&&(f.width=c.width);c.height&&(f.height=c.height);c.title&&(f.title=c.title);e&&f.setAttribute("allowfullscreen","true");f.setAttribute("scrolling","no");ra(f);f.onload=function(){this.readyState=
"complete"};f.setAttribute("allow","sync-xhr 'none';");["facebook"].includes("facebook")||xa(f);f.setAttribute("data-amp-3p-sentinel",c._context.sentinel);return f}
function wa(a,b,c){if(c)var d=null;else if(b=b.getMetaByName("amp-3p-iframe-src")){d=void 0===d?"source":d;L(null!=b,"%s %s must be available",'meta[name="amp-3p-iframe-src"]',d);c=b;"string"==typeof c&&(c=Q(c));var e;(e="https:"==c.protocol||"localhost"==c.hostname||"127.0.0.1"==c.hostname)||(c=c.hostname,e=c.length-10,e=0<=e&&c.indexOf(".localhost",e)==e);L(e||/^(\/\/)/.test(b),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',
'meta[name="amp-3p-iframe-src"]',d,b);L(-1==b.indexOf("?"),"3p iframe url must not include query string %s in element %s.",b,b);d=Q(b);L("localhost"==d.hostname&&!0||d.origin!=Q(a.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",b,d.origin,b);d=b+"?2007102309000"}else d=null;d||(a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||
"d-"+ua(a),d="https://"+a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+("."+H.thirdPartyFrameHost+"/2007102309000/frame.html"));return d}function ua(a){if(a.crypto&&a.crypto.getRandomValues){var b=new Uint32Array(2);a.crypto.getRandomValues(b);var c=String(b[0])+b[1]}else c=String(a.Math.random()).substr(2)+"0";return c}
function xa(a){if(a.sandbox&&a.sandbox.supports){for(var b=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"],c=0;c<b.length;c++){var d=b[c];if(!a.sandbox.supports(d)){K().info("3p-frame","Iframe doesn't support %s",d);return}}a.sandbox=b.join(" ")+" allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts"}};function ya(a){if(!Ga(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(c){return K().error("MESSAGING","Failed to parse message: "+a,c),null}}function Ga(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};function Ha(a,b,c){var d=a.listeningFors;!d&&c&&(d=a.listeningFors=Object.create(null));a=d||null;if(!a)return a;var e=a[b];!e&&c&&(e=a[b]=[]);return e||null}function Ia(a,b){var c=b.getAttribute("data-amp-3p-sentinel");a=Ha(a,c,!0);for(c=0;c<a.length;c++){var d=a[c];if(d.frame===b){var e=d;break}}e||(e={frame:b,events:Object.create(null)},a.push(e));return e.events}
function Ja(a){for(var b=M({sentinel:"unlisten"}),c=a.length-1;0<=c;c--){var d=a[c];if(!d.frame.contentWindow){a.splice(c,1);var e=d.events,f;for(f in e)e[f].splice(0,Infinity).forEach(function(a){a(b)})}}}
function Ka(a){a.listeningFors||a.addEventListener("message",function(b){if(b.data){var c=La(b.data);if(c&&c.sentinel){var d=b.source;var e=Ha(a,c.sentinel);if(e){for(var f,g=0;g<e.length;g++){var k=e[g],u=k.frame.contentWindow;if(u){var l;if(!(l=d==u))b:{for(l=d;l&&l!=l.parent;l=l.parent)if(l==u){l=!0;break b}l=!1}if(l){f=k;break}}else setTimeout(Ja,0,e)}d=f?f.events:null}else d=e;var t=d;if(t){var p=t[c.type];if(p)for(p=p.slice(),d=0;d<p.length;d++)(0,p[d])(c,b.source,b.origin,b)}}}})}
function Ma(a,b){function c(c,d,f,t){if("amp"==c.sentinel){if(d!=a.contentWindow)return;var k="null"==f&&void 0;if(e!=f&&!k)return}d==a.contentWindow&&("unlisten"==c.sentinel?g():b(c,d,f,t))}var d=a.ownerDocument.defaultView;Ka(d);d=Ia(d,a);var e=Q(a.src).origin,f=d["embed-size"]||(d["embed-size"]=[]);f.push(c);var g=function(){if(c){var a=f.indexOf(c);-1<a&&f.splice(a,1);b=f=c=null}}}
function La(a){"string"==typeof a&&(a="{"==a.charAt(0)?V(a,function(a){K().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",a)})||null:Ga(a)?ya(a):null);return a};function X(a){var b=AMP.BaseElement.call(this,a)||this;b.h=null;a=a.hasAttribute("data-locale")?a.getAttribute("data-locale"):window.navigator.language.replace("-","_");b.A=a;b.o=null;return b}var Y=AMP.BaseElement;X.prototype=aa(Y.prototype);X.prototype.constructor=X;if(z)z(X,Y);else for(var Z in Y)if("prototype"!=Z)if(Object.defineProperties){var Na=Object.getOwnPropertyDescriptor(Y,Z);Na&&Object.defineProperty(X,Z,Na)}else X[Z]=Y[Z];X.C=Y.prototype;n=X.prototype;n.renderOutsideViewport=function(){return.75};
n.preconnectCallback=function(a){var b=ia(this.win,"preconnect");b.url(this.getAmpDoc(),"https://facebook.com",a);b.preload(this.getAmpDoc(),"https://connect.facebook.net/"+this.A+"/sdk.js","script");var c=this.getAmpDoc(),d=wa(this.win,c,void 0);b.preload(c,d,"document");b.preload(c,H.thirdParty+"/2007102309000/f.js","script")};n.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
n.layoutCallback=function(){var a=this,b=va(this.win,this.element);this.applyFillContent(b);Ma(b,function(b){a.forceChangeHeight(b.height)});this.o=oa(this.win,this.B.bind(this));this.toggleLoading(!0);this.element.appendChild(b);this.h=b;return this.loadPromise(b)};n.B=function(a){if(!this.h||a.source==this.h.contentWindow){var b=a.data;b&&("[object Object]"===ea.call(b)?b:V(b))&&"ready"==b.action&&this.toggleLoading(!1)}};
n.createLoaderLogoCallback=function(){var a=this.element;a=a.ownerDocument||a;S&&S.ownerDocument===a||(S=a.createElement("div"));a=S;a.innerHTML=la[0];var b=a.firstElementChild;a.removeChild(b);return{color:"#1877F2",content:b}};n.unlayoutCallback=function(){if(this.h){var a=this.h;a.parentElement&&a.parentElement.removeChild(a);this.h=null}this.o&&this.o();return!0};(function(a){a.registerElement("amp-facebook-comments",X)})(self.AMP);
})});

//# sourceMappingURL=amp-facebook-comments-0.1.js.map
