(self.AMP=self.AMP||[]).push({n:"amp-gist",v:"2007102309000",f:(function(AMP,_){
var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var n;
if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var r;a:{var ca={a:!0},x={};try{x.__proto__=ca;r=x.a;break a}catch(a){}r=!1}n=r?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var y=n;function z(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var da=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function A(a){var b=Object.create(null);if(!a)return b;for(var c;c=da.exec(a);){var d=z(c[1],c[1]),e=c[2]?z(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var B="";
function C(){var a=self;if(a.__AMP_MODE)var b=a.__AMP_MODE;else{b=A(a.location.originalHash||a.location.hash);var c=A(a.location.search);B||(B=a.AMP_CONFIG&&a.AMP_CONFIG.v?a.AMP_CONFIG.v:"012007102309000");b={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(b.development)||a.AMP_DEV_MODE),examiner:"2"==b.development,esm:!1,geoOverride:b["amp-geo"],minified:!0,lite:void 0!=c.amp_lite,test:!1,log:b.log,version:"2007102309000",rtvVersion:B};b=a.__AMP_MODE=b}return b};var D=self.AMP_CONFIG||{},E=("string"==typeof D.cdnProxyRegex?new RegExp(D.cdnProxyRegex):D.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function F(a){if(!self.document||!self.document.head||self.location&&E.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}
var G={thirdParty:D.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:D.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof D.thirdPartyFrameRegex?new RegExp(D.thirdPartyFrameRegex):D.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:D.cdnUrl||F("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:E,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:D.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:D.betaErrorReportingUrl||
"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:D.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:D.geoApiUrl||F("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var H=self.__AMP_LOG;function I(){if(!H.user)throw Error("failed to call initLogConstructor");return H.user}function J(){if(H.dev)return H.dev;throw Error("failed to call initLogConstructor");}function K(a,b,c,d,e){I().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)};function L(a){return a||{}};function M(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};var N,O="Webkit webkit Moz moz ms O o".split(" ");function ea(a){var b=a.style;if(M("border","--"))b="border";else{N||(N=Object.create(null));var c=N.border;if(!c){c="border";if(void 0===b.border){var d;b:{for(d=0;d<O.length;d++){var e=O[d]+"Border";if(void 0!==b[e]){d=e;break b}}d=""}void 0!==b[d]&&(c=d)}N.border=c}b=c}b&&(M(b,"--")?a.style.setProperty(b,"none"):a.style[b]="none")};function P(a){var b=parseFloat(a);return"number"===typeof b&&isFinite(b)?b:void 0};function Q(){this.o=100;this.l=this.m=0;this.h=Object.create(null)}Q.prototype.has=function(a){return!!this.h[a]};Q.prototype.get=function(a){var b=this.h[a];if(b)return b.access=++this.l,b.payload};Q.prototype.put=function(a,b){this.has(a)||this.m++;this.h[a]={payload:b,access:this.l};if(!(this.m<=this.o)){J().warn("lru-cache","Trimming LRU cache");a=this.h;var c=this.l+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.m--)}};L({c:!0,v:!0,a:!0,ad:!0,action:!0});var R,S;
function T(a){R||(R=self.document.createElement("a"),S=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new Q));var b=S,c=R;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a};function fa(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){J().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function U(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return ha(a,b)}function ia(a,b){var c=V(a);c=V(c);c=c.isSingleDoc()?c.win:c;return ha(c,b)}function V(a){return a.nodeType?U((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function ha(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ja(a){for(var b=a.nodeName,c=0,d=0,e=a.previousElementSibling;e&&25>d&&100>c;)e.nodeName==b&&d++,c++,e=e.previousElementSibling;return 25>d&&100>c?"."+d:""};function ka(a,b){try{return JSON.parse(a)}catch(c){return b&&b(c),null}};var W={};
function la(a,b){K("github","Attribute type required for <amp-ad>: %s",b);var c=0;for(var d=a;d&&d!=d.parent;d=d.parent)c++;c=String(c)+"-"+ma(a);var e=d={},f=b.dataset,g;for(g in f)M(g,"vars")||(e[g]=f[g]);if(g=b.getAttribute("json")){g=ka(g);if(void 0===g)throw I().createError("Error parsing JSON in json attribute in element %s",b);for(var k in g)e[k]=g[k]}k=d;d=Date.now();e=b.getAttribute("width");g=b.getAttribute("height");k=k?k:{};k.width=P(e);k.height=P(g);b.getAttribute("title")&&(k.title=
b.getAttribute("title"));var v=a.location.href;"about:srcdoc"==v&&(v=a.parent.location.href);var l=V(b),u=ia(b,"documentInfo").get();e=ia(b,"viewer").getUnconfirmedReferrerUrl();var p=b.getPageLayoutBox();g=k;f=G.thirdParty+"/2007102309000/ampcontext-v0.js";var qa=u.sourceUrl,ra=u.canonicalUrl;u=u.pageViewId;v={href:v};var sa=b.tagName,ta={localDev:!1,development:C().development,esm:!1,minified:!0,lite:C().lite,test:!1,log:C().log,version:C().version,rtvVersion:C().rtvVersion},ua=!(!a.AMP_CONFIG||
!a.AMP_CONFIG.canary);l=!l.isVisible();p=p?{left:p.left,top:p.top,width:p.width,height:p.height}:null;var va=b.getIntersectionChangeEntry();var q=b;for(var t=[],h=0;q&&1==q.nodeType&&25>h;){var m="";q.id&&(m="/"+q.id);var wa=q.nodeName.toLowerCase();t.push(""+wa+m+ja(q));h++;q=q.parentElement}q=t.join();t=q.length;h=5381;for(m=0;m<t;m++)h=33*h^q.charCodeAt(m);q=String(h>>>0);if(a.__AMP__EXPERIMENT_TOGGLES)a=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);t=a.__AMP__EXPERIMENT_TOGGLES;
if(a.AMP_CONFIG)for(var w in a.AMP_CONFIG)h=a.AMP_CONFIG[w],"number"===typeof h&&0<=h&&1>=h&&(t[w]=Math.random()<h);if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(w=a.AMP_CONFIG["allow-doc-opt-in"],h=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(h=h.getAttribute("content").split(","),m=0;m<h.length;m++)-1!=w.indexOf(h[m])&&(t[h[m]]=!0);Object.assign(t,fa(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&
0<a.AMP_CONFIG["allow-url-opt-in"].length)for(w=a.AMP_CONFIG["allow-url-opt-in"],a=A(a.location.originalHash||a.location.hash),h=0;h<w.length;h++)m=a["e-"+w[h]],"1"==m&&(t[w[h]]=!0),"0"==m&&(t[w[h]]=!1);a=t}g._context=L({ampcontextVersion:"2007102309000",ampcontextFilepath:f,sourceUrl:qa,referrer:e,canonicalUrl:ra,pageViewId:u,location:v,startTime:d,tagName:sa,mode:ta,canary:ua,hidden:l,initialLayoutRect:p,initialIntersection:va,domFingerprint:q,experimentToggles:a,sentinel:c});(b=b.getAttribute("src"))&&
(k.src=b);d=k;d.type="github";Object.assign(d._context,void 0);return d}
function na(a,b){var c={},d=c.disallowCustom,e=c.allowFullscreen;c=la(a,b);var f=a.document.createElement("iframe");W[c.type]||(W[c.type]=0);W[c.type]+=1;var g=b.getAmpDoc();a=oa(a,g,d);var k=T(a).hostname;g=JSON.stringify(L({host:k,type:c.type,count:W[c.type],attributes:c}));f.src=a;f.ampLocation=T(a);f.name=g;c.width&&(f.width=c.width);c.height&&(f.height=c.height);c.title&&(f.title=c.title);e&&f.setAttribute("allowfullscreen","true");f.setAttribute("scrolling","no");ea(f);f.onload=function(){this.readyState=
"complete"};f.setAttribute("allow","sync-xhr 'none';");["facebook"].includes("github")||pa(f);f.setAttribute("data-amp-3p-sentinel",c._context.sentinel);return f}
function oa(a,b,c){if(c)var d=null;else if(b=b.getMetaByName("amp-3p-iframe-src")){d=void 0===d?"source":d;K(null!=b,"%s %s must be available",'meta[name="amp-3p-iframe-src"]',d);c=b;"string"==typeof c&&(c=T(c));var e;(e="https:"==c.protocol||"localhost"==c.hostname||"127.0.0.1"==c.hostname)||(c=c.hostname,e=c.length-10,e=0<=e&&c.indexOf(".localhost",e)==e);K(e||/^(\/\/)/.test(b),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',
'meta[name="amp-3p-iframe-src"]',d,b);K(-1==b.indexOf("?"),"3p iframe url must not include query string %s in element %s.",b,b);d=T(b);K("localhost"==d.hostname&&!0||d.origin!=T(a.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",b,d.origin,b);d=b+"?2007102309000"}else d=null;d||(a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||
"d-"+ma(a),d="https://"+a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+("."+G.thirdPartyFrameHost+"/2007102309000/frame.html"));return d}function ma(a){if(a.crypto&&a.crypto.getRandomValues){var b=new Uint32Array(2);a.crypto.getRandomValues(b);var c=String(b[0])+b[1]}else c=String(a.Math.random()).substr(2)+"0";return c}
function pa(a){if(a.sandbox&&a.sandbox.supports){for(var b=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"],c=0;c<b.length;c++){var d=b[c];if(!a.sandbox.supports(d)){J().info("3p-frame","Iframe doesn't support %s",d);return}}a.sandbox=b.join(" ")+" allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts"}};function xa(a){if(!ya(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(c){return J().error("MESSAGING","Failed to parse message: "+a,c),null}}function ya(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};function za(a,b,c){var d=a.listeningFors;!d&&c&&(d=a.listeningFors=Object.create(null));a=d||null;if(!a)return a;var e=a[b];!e&&c&&(e=a[b]=[]);return e||null}function Aa(a,b){var c=b.getAttribute("data-amp-3p-sentinel");a=za(a,c,!0);for(c=0;c<a.length;c++){var d=a[c];if(d.frame===b){var e=d;break}}e||(e={frame:b,events:Object.create(null)},a.push(e));return e.events}
function Ba(a){for(var b=L({sentinel:"unlisten"}),c=a.length-1;0<=c;c--){var d=a[c];if(!d.frame.contentWindow){a.splice(c,1);var e=d.events,f;for(f in e)e[f].splice(0,Infinity).forEach(function(a){a(b)})}}}
function Ca(a){a.listeningFors||a.addEventListener("message",function(b){if(b.data){var c=Da(b.data);if(c&&c.sentinel){var d=b.source;var e=za(a,c.sentinel);if(e){for(var f,g=0;g<e.length;g++){var k=e[g],v=k.frame.contentWindow;if(v){var l;if(!(l=d==v))b:{for(l=d;l&&l!=l.parent;l=l.parent)if(l==v){l=!0;break b}l=!1}if(l){f=k;break}}else setTimeout(Ba,0,e)}d=f?f.events:null}else d=e;var u=d;if(u){var p=u[c.type];if(p)for(p=p.slice(),d=0;d<p.length;d++)(0,p[d])(c,b.source,b.origin,b)}}}})}
function Ea(a,b){function c(c,d,f,u){if("amp"==c.sentinel){if(d!=a.contentWindow)return;var k="null"==f&&void 0;if(e!=f&&!k)return}d==a.contentWindow&&("unlisten"==c.sentinel?g():b(c,d,f,u))}var d=a.ownerDocument.defaultView;Ca(d);d=Aa(d,a);var e=T(a.src).origin,f=d["embed-size"]||(d["embed-size"]=[]);f.push(c);var g=function(){if(c){var a=f.indexOf(c);-1<a&&f.splice(a,1);b=f=c=null}}}
function Da(a){"string"==typeof a&&(a="{"==a.charAt(0)?ka(a,function(a){J().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",a)})||null:ya(a)?xa(a):null);return a};function X(a){a=AMP.BaseElement.call(this,a)||this;a.j=null;return a}var Y=AMP.BaseElement;X.prototype=aa(Y.prototype);X.prototype.constructor=X;if(y)y(X,Y);else for(var Z in Y)if("prototype"!=Z)if(Object.defineProperties){var Fa=Object.getOwnPropertyDescriptor(Y,Z);Fa&&Object.defineProperty(X,Z,Fa)}else X[Z]=Y[Z];X.w=Y.prototype;X.prototype.preconnectCallback=function(a){U(this.win,"preconnect").url(this.getAmpDoc(),"https://gist.github.com/",a)};
X.prototype.isLayoutSupported=function(a){return"fixed-height"==a};X.prototype.layoutCallback=function(){var a=this,b=na(this.win,this.element);this.applyFillContent(b);Ea(b,function(b){a.forceChangeHeight(b.height)});this.element.appendChild(b);this.j=b;return this.loadPromise(b)};X.prototype.unlayoutCallback=function(){if(this.j){var a=this.j;a.parentElement&&a.parentElement.removeChild(a);this.j=null}return!0};(function(a){a.registerElement("amp-gist",X)})(self.AMP);
})});

//# sourceMappingURL=amp-gist-0.1.js.map
