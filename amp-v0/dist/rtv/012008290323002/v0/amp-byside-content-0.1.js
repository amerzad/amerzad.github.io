(self.AMP=self.AMP||[]).push({n:"amp-byside-content",v:"2008290323002",f:(function(AMP,_){
'use strict';var m="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function n(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}n(this);"function"===typeof Symbol&&Symbol("x");var q;
if("function"==typeof Object.setPrototypeOf)q=Object.setPrototypeOf;else{var r;a:{var t={a:!0},v={};try{v.__proto__=t;r=v.a;break a}catch(a){}r=!1}q=r?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var w=q;function x(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var y=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var z=self.AMP_CONFIG||{},A=("string"==typeof z.cdnProxyRegex?new RegExp(z.cdnProxyRegex):z.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function B(a){if(self.document&&self.document.head&&(!self.location||!A.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}z.cdnUrl||B("runtime-host");z.geoApiUrl||B("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var C=self.__AMP_LOG;function D(){if(!C.user)throw Error("failed to call initLogConstructor");return C.user}function E(){if(C.dev)return C.dev;throw Error("failed to call initLogConstructor");}function F(a,b,c,d,e){return D().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)};function G(a){return a||{}};function H(){this.L=100;this.w=this.B=0;this.j=Object.create(null)}H.prototype.has=function(a){return!!this.j[a]};H.prototype.get=function(a){var b=this.j[a];if(b)return b.access=++this.w,b.payload};H.prototype.put=function(a,b){this.has(a)||this.B++;this.j[a]={payload:b,access:this.w};if(!(this.B<=this.L)){E().warn("lru-cache","Trimming LRU cache");a=this.j;var c=this.w+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.B--)}};G({c:!0,v:!0,a:!0,ad:!0});var I,J;
function K(a){I||(I=self.document.createElement("a"),J=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new H));var b=J,c=I;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a};function L(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){E().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function M(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return N(a,b)}function O(a){return a.nodeType?M((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function N(a,b){P(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function P(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function aa(a){a.parentElement&&a.parentElement.removeChild(a)}function Q(a,b){a=a.createElement("div");for(var c in b)a.setAttribute(c,b[c]);return a};function ba(a,b){function c(){d=0;var g=100-(a.Date.now()-e);if(0<g)d=a.setTimeout(c,g);else{var k=f;f=null;b.apply(null,k)}}var d=0,e=0,f=null;return function(b){for(var g=[],h=0;h<arguments.length;++h)g[h-0]=arguments[h];e=a.Date.now();f=g;d||(d=a.setTimeout(c,100))}};var R,S="Webkit webkit Moz moz ms O o".split(" ");function T(a,b){for(var c in b){var d=a,e=b[c];var f=d.style;var g=c;if(2>g.length?0:0==g.lastIndexOf("--",0))f=g;else{R||(R=Object.create(null));var k=R[g];if(!k){k=g;if(void 0===f[g]){var h=g;h=h.charAt(0).toUpperCase()+h.slice(1);b:{for(var l=0;l<S.length;l++){var p=S[l]+h;if(void 0!==f[p]){h=p;break b}}h=""}void 0!==f[h]&&(k=h)}R[g]=k}f=k}f&&((2>f.length?0:0==f.lastIndexOf("--",0))?d.style.setProperty(f,e):d.style[f]=e)}};function ca(a,b){try{return JSON.parse(a)}catch(c){return b&&b(c),null}};function da(a){if(!U(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(c){return E().error("MESSAGING","Failed to parse message: "+a,c),null}}function U(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};function V(a,b,c){var d=a.listeningFors;!d&&c&&(d=a.listeningFors=Object.create(null));a=d||null;if(!a)return a;var e=a[b];!e&&c&&(e=a[b]=[]);return e||null}function ea(a,b){a=V(a,"amp",!0);for(var c,d=0;d<a.length;d++){var e=a[d];if(e.frame===b){c=e;break}}c||(c={frame:b,events:Object.create(null)},a.push(c));return c.events}
function fa(a){for(var b=G({sentinel:"unlisten"}),c=a.length-1;0<=c;c--){var d=a[c];if(!d.frame.contentWindow){a.splice(c,1);var e=d.events,f;for(f in e)e[f].splice(0,Infinity).forEach(function(a){a(b)})}}}
function ha(a){a.listeningFors||a.addEventListener("message",function(b){if(b.data){var c=ia(b.data);if(c&&c.sentinel){var d=b.source;var e=V(a,c.sentinel);if(e){for(var f,g=0;g<e.length;g++){var k=e[g],h=k.frame.contentWindow;if(h){var l;if(!(l=d==h))b:{for(l=d;l&&l!=l.parent;l=l.parent)if(l==h){l=!0;break b}l=!1}if(l){f=k;break}}else setTimeout(fa,0,e)}d=f?f.events:null}else d=e;var p=d;if(p){var u=p[c.type];if(u)for(u=u.slice(),d=0;d<u.length;d++)(0,u[d])(c,b.source,b.origin,b)}}}})}
function ja(a,b){function c(c,d,f,p){if("amp"==c.sentinel){if(d!=a.contentWindow)return;var k="null"==f&&void 0;if(e!=f&&!k)return}d==a.contentWindow&&("unlisten"==c.sentinel?g():b(c,d,f,p))}var d=a.ownerDocument.defaultView;ha(d);d=ea(d,a);var e=K(a.src).origin,f=d["embed-size"]||(d["embed-size"]=[]),g;f.push(c);return g=function(){if(c){var a=f.indexOf(c);-1<a&&f.splice(a,1);b=f=c=null}}}
function ia(a){"string"==typeof a&&(a="{"==a.charAt(0)?ca(a,function(a){E().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",a)})||null:U(a)?da(a):null);return a};var ka=0;function W(a){var b=AMP.BaseElement.call(this,a)||this;b.C=[];b.I=null;b.h=null;b.H=null;b.D="main";b.o="";b.G="";b.J="";b.A="";b.l="";b.m="";b.F="";b.K=ba(b.win,function(a){la(b,a)});return b}var X=AMP.BaseElement;W.prototype=m(X.prototype);W.prototype.constructor=W;if(w)w(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var Z=Object.getOwnPropertyDescriptor(X,Y);Z&&Object.defineProperty(W,Y,Z)}else W[Y]=X[Y];W.M=X.prototype;
W.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};W.prototype.preconnectCallback=function(a){this.m&&M(this.win,"preconnect").url(this.getAmpDoc(),this.m,a)};
W.prototype.buildCallback=function(){this.o=F(this.element.getAttribute("data-webcare-id"),"The data-webcare-id attribute is required for <%s> %s","amp-byside-content",this.element);this.l=F(this.element.getAttribute("data-label"),"The data-label attribute is required for <%s> %s","amp-byside-content",this.element);this.D=this.element.getAttribute("data-webcare-zone")||"main";this.G=this.element.getAttribute("data-channel")||"";this.J=this.element.getAttribute("data-lang")||"pt";this.A=this.element.getAttribute("data-fid")||
"";this.m="https://"+encodeURIComponent("main"===this.D?"webcare":this.D)+".byside.com";this.F=this.m+"/BWA"+encodeURIComponent(this.o)+"/amp/"};W.prototype.createPlaceholderCallback=function(){var a=this.win.document.createElement("div");a.setAttribute("placeholder","");a.appendChild(ma(this));this.applyFillContent(a);return a};
W.prototype.layoutCallback=function(){var a=this,b=this.element.ownerDocument.createElement("iframe");this.h=b;b.name="amp_byside_content_iframe"+ka++;b.setAttribute("title",this.element.getAttribute("title")||"");b.setAttribute("scrolling","no");b.setAttribute("frameborder","0");b.setAttribute("allowtransparency","true");b.setAttribute("allowfullscreen","true");b.setAttribute("sandbox","allow-scripts allow-same-origin allow-popups");T(b,{opacity:0});this.element.appendChild(na(this));this.applyFillContent(b);
return oa(this).then(function(c){var d=a.element,e=a.o||"";e+=e&&a.l?": ":"";e+=a.l||"";e="amp-byside-content: "+(e||"<unknown tag>");e=void 0===e?"source":e;F(null!=c,"%s %s must be available",d,e);var f=c;"string"==typeof f&&(f=K(f));var g;(g="https:"==f.protocol||"localhost"==f.hostname||"127.0.0.1"==f.hostname)||(f=f.hostname,g=f.length-10,g=0<=g&&f.indexOf(".localhost",g)==g);F(g||/^(\/\/)/.test(c),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',
d,e,c);a.I=c;b.src=a.I;c=ja(b,a.K);a.C.push(c);a.element.appendChild(b);return a.H=a.loadPromise(b)}).then(function(){a.getVsync().mutate(function(){T(b,{opacity:1})})})};
function oa(a){var b=a.F+"placeholder.php",c=G({label:a.l,webcare_id:a.o,bwch:a.G||"",lang:a.J||"",fid:a.A||"",bwit:a.A?"I":"A",tuid:"CLIENT_ID(byside_webcare_tuid)",suid:"",puid:"PAGE_VIEW_IDpTIMESTAMP",referrer:"DOCUMENT_REFERRER",page:"SOURCE_URL",amppage:"AMPDOC_URL",bwpt:"TITLE",bres:"VIEWPORT_WIDTHxVIEWPORT_HEIGHT",res:"SCREEN_WIDTHxSCREEN_HEIGHT",v:"v20171116a",ampv:"AMP_VERSION",viewer:"VIEWER",ua:"USER_AGENT",r:"RANDOM",_resize:"1"}),d=[];for(h in c){var e=c[h];if(null!=e)if(Array.isArray(e))for(var f=
0;f<e.length;f++){var g=e[f];d.push(encodeURIComponent(h)+"="+encodeURIComponent(g))}else d.push(encodeURIComponent(h)+"="+encodeURIComponent(e))}c=d.join("&");c&&(b=b.split("#",2),d=b[0].split("?",2),c=d[0]+(d[1]?"?"+d[1]+"&"+c:"?"+c),b=c+=b[1]?"#"+b[1]:"");a=a.element;c=a.ownerDocument.defaultView;e=c.__AMP_TOP||(c.__AMP_TOP=c);d=c!=e;if(e.__AMP__EXPERIMENT_TOGGLES)var k=e.__AMP__EXPERIMENT_TOGGLES;else{e.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var h=e.__AMP__EXPERIMENT_TOGGLES;if(e.AMP_CONFIG)for(k in e.AMP_CONFIG)f=
e.AMP_CONFIG[k],"number"===typeof f&&0<=f&&1>=f&&(h[k]=Math.random()<f);if(e.AMP_CONFIG&&Array.isArray(e.AMP_CONFIG["allow-doc-opt-in"])&&0<e.AMP_CONFIG["allow-doc-opt-in"].length&&(k=e.AMP_CONFIG["allow-doc-opt-in"],f=e.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(f=f.getAttribute("content").split(","),g=0;g<f.length;g++)-1!=k.indexOf(f[g])&&(h[f[g]]=!0);Object.assign(h,L(e));if(e.AMP_CONFIG&&Array.isArray(e.AMP_CONFIG["allow-url-opt-in"])&&0<e.AMP_CONFIG["allow-url-opt-in"].length){k=
e.AMP_CONFIG["allow-url-opt-in"];f=e.location.originalHash||e.location.hash;e=Object.create(null);if(f)for(var l;l=y.exec(f);)g=x(l[1],l[1]),l=l[2]?x(l[2].replace(/\+/g," "),l[2]):"",e[g]=l;for(f=0;f<k.length;f++)g=e["e-"+k[f]],"1"==g&&(h[k[f]]=!0),"0"==g&&(h[k[f]]=!1)}k=h}k=!!k["ampdoc-fie"];d&&!k?a=P(c,"url-replace")?N(c,"url-replace"):null:(a=O(a),a=O(a),a=a.isSingleDoc()?a.win:a,a=P(a,"url-replace")?N(a,"url-replace"):null);return a.expandUrlAsync(b)}
function na(a){a=a.element.ownerDocument;var b=Q(a,G({"class":"i-amphtml-byside-content-overflow",overflow:""})),c=Q(a,G({"class":"i-amphtml-byside-content-overflow-content"})),d=Q(a,G({"class":"i-amphtml-byside-content-arrow-down"}));c.appendChild(d);b.appendChild(c);return b}function ma(a){a=a.element.ownerDocument;var b=Q(a,G({"class":"i-amphtml-byside-content-loading-container"})),c=Q(a,G({"class":"i-amphtml-byside-content-loading-animation"}));b.appendChild(c);return b}
function la(a,b){a.getVsync().measure(function(){var c,d,e=parseInt(b.height,10);isNaN(e)||(c=Math.max(e+(a.element.offsetHeight-a.h.offsetHeight),e));e=parseInt(b.width,10);isNaN(e)||(d=Math.max(e+(a.element.offsetWidth-a.h.offsetWidth),e));void 0!==c||void 0!==d?a.attemptChangeSize(c,d).then(function(){void 0!==c&&a.element.setAttribute("height",c);void 0!==d&&a.element.setAttribute("width",d)},function(){}):D().warn("amp-byside-content","Ignoring embed-size request because no width or height value is provided",
a.element)})}W.prototype.unlayoutCallback=function(){this.C.forEach(function(a){return a()});this.C.length=0;this.h&&(aa(this.h),this.H=this.h=null);return!0};(function(a){a.registerElement("amp-byside-content",W,'.i-amphtml-byside-content-overflow{position:relative;top:100%;width:100%;height:100px;margin-top:-100px;text-align:center;background:linear-gradient(180deg,hsla(0,0%,100%,0) 0%,#fff 75%)}.i-amphtml-byside-content-overflow,.i-amphtml-byside-content-overflow .i-amphtml-byside-content-overflow-content{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.i-amphtml-byside-content-overflow .i-amphtml-byside-content-overflow-content{width:100px;height:30px;border-radius:15px;background-color:#093c71;border:1px solid #093c71;color:#fff}.i-amphtml-byside-content-arrow-down{width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-top:10px solid #fff}.i-amphtml-byside-content-loading-container{background-color:rgba(0,0,0,0.02);display:-ms-flexbox;display:flex;width:100%;height:100%;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important}.i-amphtml-byside-content-loading-container .i-amphtml-byside-content-loading-animation{display:block;text-align:center;position:relative;height:16px;width:40px;margin:4px auto;background:transparent}.i-amphtml-byside-content-loading-container .i-amphtml-byside-content-loading-animation:after,.i-amphtml-byside-content-loading-container .i-amphtml-byside-content-loading-animation:before{content:"";position:absolute;top:0;left:0;z-index:9;width:16px;height:16px;border-radius:50%;opacity:0.95;animation-name:i-amphtml-byside-content-loading-translate,i-amphtml-byside-content-loading-zindex;animation-delay:0;animation-duration:0.8s;animation-direction:alternate;animation-timing-function:linear;animation-iteration-count:infinite}.i-amphtml-byside-content-loading-container .i-amphtml-byside-content-loading-animation:before{background:#093c71}.i-amphtml-byside-content-loading-container .i-amphtml-byside-content-loading-animation:after{background:#e75204;z-index:0;animation-name:i-amphtml-byside-content-loading-translate-inverse,i-amphtml-byside-content-loading-zindex-inverse;animation-delay:0s,0.6s}@keyframes i-amphtml-byside-content-loading-translate{0%{transform:translate(-12px)}to{transform:translate(12px)}}@keyframes i-amphtml-byside-content-loading-zindex{0%{z-index:9}to{z-index:0}}@keyframes i-amphtml-byside-content-loading-translate-inverse{0%{transform:translate(12px)}to{transform:translate(-12px)}}@keyframes i-amphtml-byside-content-loading-zindex-inverse{0%{z-index:0}to{z-index:9}}\n/*# sourceURL=/extensions/amp-byside-content/0.1/amp-byside-content.css*/')})(self.AMP);
})});

//# sourceMappingURL=amp-byside-content-0.1.js.map