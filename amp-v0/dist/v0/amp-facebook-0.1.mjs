(self.AMP=self.AMP||[]).push({n:"amp-facebook",v:"2008290323002",f:function(AMP,_){function m(a,b=""){try{return decodeURIComponent(a)}catch(c){return b}}let aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function u(a){let b=Object.create(null);if(!a)return b;let c;for(;c=aa.exec(a);){let a=m(c[1],c[1]),e=c[2]?m(c[2].replace(/\+/g," "),c[2]):"";b[a]=e}return b}let v="";function w(){let a=self;if(a.__AMP_MODE)var b=a.__AMP_MODE;else{{b=u(a.location.originalHash||a.location.hash);let c=u(a.location.search);v||(v=a.AMP_CONFIG&&a.AMP_CONFIG.v?a.AMP_CONFIG.v:"012008290323002");b={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(b.development)||a.AMP_DEV_MODE),examiner:"2"==b.development,esm:!0,geoOverride:b["amp-geo"],minified:!0,lite:void 0!=c.amp_lite,test:!1,log:b.log,version:"2008290323002",rtvVersion:v}}b=a.__AMP_MODE=b}return b}let ba=Object.prototype.toString;let x=self.AMP_CONFIG||{},z=("string"==typeof x.cdnProxyRegex?new RegExp(x.cdnProxyRegex):x.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function A(a){if(!self.document||!self.document.head||self.location&&z.test(self.location.origin))return null;let b=self.document.head.querySelector(`meta[name="${a}"]`);return b&&b.getAttribute("content")||null}let B={thirdParty:x.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:x.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof x.thirdPartyFrameRegex?new RegExp(x.thirdPartyFrameRegex):x.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:x.cdnUrl||A("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:z,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:x.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:x.betaErrorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:x.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:x.geoApiUrl||A("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let C=self.__AMP_LOG;function D(){if(!C.user)throw Error("failed to call initLogConstructor");return C.user}function E(a,b,c,d,e){D().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)}function F(a){return a||{}}class ca{constructor(a){this.w=a;this.l=this.m=0;this.j=Object.create(null)}has(a){return!!this.j[a]}get(a){let b=this.j[a];if(b)return b.access=++this.l,b.payload}put(a,b){this.has(a)||this.m++;this.j[a]={payload:b,access:this.l};if(!(this.m<=this.w)){a=this.j;var c=this.l+1;for(let b in a){let{access:e}=a[b];if(e<c){c=e;var d=b}}void 0!==d&&(delete a[d],this.m--)}}}function G(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)}F({c:!0,v:!0,a:!0,ad:!0});let H,I;function J(a){H||(H=self.document.createElement("a"),I=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new ca(100)));var b=I,c=H;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a}function da(a){let b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(d){}let c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(let b=0;b<c.length;b++)0!=c[b].length&&("-"==c[b][0]?a[c[b].substr(1)]=!1:a[c[b]]=!0);return a}function K(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return M(a,b)}function N(a,b){var c=O(a);c=O(c);c=c.isSingleDoc()?c.win:c;return M(c,b)}function O(a){return a.nodeType?K((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function M(a,b){{let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b}b=a[b];b.obj||(b.obj=new b.ctor(b.context),b.ctor=null,b.context=null,b.resolve&&b.resolve(b.obj));return b.obj}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
let P;let ea=['<svg viewBox="0 0 72 72"><path fill=currentColor d="M46,36c0-5.5-4.5-10-10-10s-10,4.5-10,10c0,5,3.7,9.1,8.4,9.9v-7h-2.5V36h2.5v-2.2c0-2.5,1.5-3.9,3.8-3.9\n                c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6V36h2.8l-0.4,2.9h-2.3v7C42.3,45.1,46,41,46,36z"/><path fill=#ffffff class=i-amphtml-new-loader-transparent-on-shim d="M39.9,38.9l0.4-2.9h-2.8v-1.9c0-0.8,0.4-1.6,1.6-1.6h1.3v-2.5c0,0-1.1-0.2-2.2-0.2c-2.3,0-3.8,1.4-3.8,3.9V36\n                h-2.5v2.9h2.5v7c0.5,0.1,1,0.1,1.6,0.1s1.1,0,1.6-0.1v-7H39.9z"/></svg>'];let Q;function fa(a,b){let e,c=a,d=b;e=a=>{try{return d(a)}catch(g){throw self.__AMP_REPORT_ERROR(g),g}};let f=ha();c.addEventListener("message",e,f?void 0:!1);return()=>{c&&c.removeEventListener("message",e,f?void 0:!1);e=c=d=null}}function ha(){if(void 0!==Q)return Q;Q=!1;try{let a={get capture(){Q=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(a){}return Q}function ia(a,b){return fa(a,b)}function ja(a){let b=a.nodeName;let c=0,d=0,e=a.previousElementSibling;for(;e&&25>d&&100>c;)e.nodeName==b&&d++,c++,e=e.previousElementSibling;return 25>d&&100>c?`.${d}`:""}let R;let S="Webkit webkit Moz moz ms O o".split(" ");function ka(a){var b=a.style;if(G("border","--"))b="border";else{R||(R=Object.create(null));var c=R.border;if(!c){c="border";if(void 0===b.border){var d;b:{for(d=0;d<S.length;d++){let a=S[d]+"Border";if(void 0!==b[a]){d=a;break b}}d=""}void 0!==b[d]&&(c=d)}R.border=c}b=c}b&&(G(b,"--")?a.style.setProperty(b,"none"):a.style[b]="none")}function T(a){a=parseFloat(a);return"number"===typeof a&&isFinite(a)?a:void 0}function U(a,b){try{return JSON.parse(a)}catch(c){return b&&b(c),null}}let V={};function la(a,b){E("facebook","Attribute type required for <amp-ad>: %s",b);var c=0;for(var d=a;d&&d!=d.parent;d=d.parent)c++;c=String(c)+"-"+W(a);var e=d={},f=b.dataset;for(var h in f)G(h,"vars")||(e[h]=f[h]);if(h=b.getAttribute("json")){h=U(h);if(void 0===h)throw D().createError("Error parsing JSON in json attribute in element %s",b);for(var g in h)e[g]=h[g]}{g=d;d=Date.now();e=b.getAttribute("width");h=b.getAttribute("height");g=g?g:{};g.width=T(e);g.height=T(h);b.getAttribute("title")&&(g.title=b.getAttribute("title"));var y=a.location.href;"about:srcdoc"==y&&(y=a.parent.location.href);var L=O(b),r=N(b,"documentInfo").get();let ma=N(b,"viewer").getUnconfirmedReferrerUrl();var t=b.getPageLayoutBox();e=g;h=`${B.thirdParty}/2008290323002/ampcontext-v0.js`;f=r.sourceUrl;var na=r.canonicalUrl;r=r.pageViewId;y={href:y};var oa=b.tagName,pa={localDev:!1,development:!1,esm:!0,minified:!0,lite:w().lite,test:!1,log:w().log,version:w().version,rtvVersion:w().rtvVersion},qa=!(!a.AMP_CONFIG||!a.AMP_CONFIG.canary);L=!L.isVisible();t=t?{left:t.left,top:t.top,width:t.width,height:t.height}:null;var ra=b.getIntersectionChangeEntry();var n=b;for(var p=[],k=0;n&&1==n.nodeType&&25>k;){var l="";n.id&&(l=`/${n.id}`);let a=n.nodeName.toLowerCase();p.push(`${a}${l}${ja(n)}`);k++;n=n.parentElement}n=p.join();p=n.length;k=5381;for(l=0;l<p;l++)k=33*k^n.charCodeAt(l);n=String(k>>>0);if(a.__AMP__EXPERIMENT_TOGGLES)a=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);p=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var q in a.AMP_CONFIG)k=a.AMP_CONFIG[q],"number"===typeof k&&0<=k&&1>=k&&(p[q]=Math.random()<k);if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(q=a.AMP_CONFIG["allow-doc-opt-in"],k=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(k=k.getAttribute("content").split(","),l=0;l<k.length;l++)-1!=q.indexOf(k[l])&&(p[k[l]]=!0);Object.assign(p,da(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length)for(q=a.AMP_CONFIG["allow-url-opt-in"],a=u(a.location.originalHash||a.location.hash),k=0;k<q.length;k++)l=a[`e-${q[k]}`],"1"==l&&(p[q[k]]=!0),"0"==l&&(p[q[k]]=!1);a=p}e._context=F({ampcontextVersion:"2008290323002",ampcontextFilepath:h,sourceUrl:f,referrer:ma,canonicalUrl:na,pageViewId:r,location:y,startTime:d,tagName:oa,mode:pa,canary:qa,hidden:L,initialLayoutRect:t,initialIntersection:ra,domFingerprint:n,experimentToggles:a,sentinel:c});(b=b.getAttribute("src"))&&(g.src=b);d=g}d.type="facebook";Object.assign(d._context,void 0);return d}function sa(a,b){var{disallowCustom:c,allowFullscreen:d}={};let e=la(a,b),f=a.document.createElement("iframe");V[e.type]||(V[e.type]=0);V[e.type]+=1;var h=b.getAmpDoc();a=X(a,h,c);let g=J(a).hostname;h=JSON.stringify(F({host:g,type:e.type,count:V[e.type],attributes:e}));f.src=a;f.ampLocation=J(a);f.name=h;e.width&&(f.width=e.width);e.height&&(f.height=e.height);e.title&&(f.title=e.title);d&&f.setAttribute("allowfullscreen","true");f.setAttribute("scrolling","no");ka(f);f.onload=function(){this.readyState="complete"};f.setAttribute("allow","sync-xhr 'none';");["facebook"].includes("facebook")||ta(f);f.setAttribute("data-amp-3p-sentinel",e._context.sentinel);return f}function X(a,b,c){if(c)b=null;else if(c=b.getMetaByName("amp-3p-iframe-src")){b=c;E(null!=b,"%s %s must be available",'meta[name="amp-3p-iframe-src"]',"source");var d=b;"string"==typeof d&&(d=J(d));var e;(e="https:"==d.protocol||"localhost"==d.hostname||"127.0.0.1"==d.hostname)||(d=d.hostname,e=d.length-10,e=0<=e&&d.indexOf(".localhost",e)==e);E(e||/^(\/\/)/.test(b),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s','meta[name="amp-3p-iframe-src"]',"source",b);E(-1==b.indexOf("?"),"3p iframe url must not include query string %s in element %s.",b,c);d=J(b);E("localhost"==d.hostname&&!0||d.origin!=J(a.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",b,d.origin,c);b=`${b}?2008290323002`}else b=null;b||(a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+W(a),b="https://"+a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+`.${B.thirdPartyFrameHost}/2008290323002/`+"frame.html");return b}function W(a){let b;if(a.crypto&&a.crypto.getRandomValues){let c=new Uint32Array(2);a.crypto.getRandomValues(c);b=String(c[0])+c[1]}else b=String(a.Math.random()).substr(2)+"0";return b}function ta(a){if(a.sandbox&&a.sandbox.supports){var b=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"];for(let c=0;c<b.length;c++)if(!a.sandbox.supports(b[c]))return;a.sandbox=b.join(" ")+" allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts"}}function ua(a){if(!Y(a))return null;let b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(d){if(C.dev)var c=C.dev;else throw Error("failed to call initLogConstructor");c.error("MESSAGING","Failed to parse message: "+a,d);return null}}function Y(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")}function Z(a,b,c){{let{listeningFors:b}=a;!b&&c&&(b=a.listeningFors=Object.create(null));a=b||null}if(!a)return a;let d=a[b];!d&&c&&(d=a[b]=[]);return d||null}function va(a,b){var c=b.getAttribute("data-amp-3p-sentinel");a=Z(a,c,!0);let d;for(c=0;c<a.length;c++){let e=a[c];if(e.frame===b){d=e;break}}d||(d={frame:b,events:Object.create(null)},a.push(d));return d.events}function wa(a){let b=F({sentinel:"unlisten"});for(let c=a.length-1;0<=c;c--){let d=a[c];if(!d.frame.contentWindow){a.splice(c,1);let e=d.events;for(let a in e)e[a].splice(0,1/0).forEach(a=>{a(b)})}}}function xa(a){a.listeningFors||a.addEventListener("message",(function(b){if(b.data){var c=ya(b.data);if(c&&c.sentinel){{var d=b.source;let g=Z(a,c.sentinel);if(g){for(let a=0;a<g.length;a++){let b=g[a],c=b.frame.contentWindow;if(c){var e;if(!(e=d==c))b:{for(e=d;e&&e!=e.parent;e=e.parent)if(e==c){e=!0;break b}e=!1}if(e){var f=b;break}}else setTimeout(wa,0,g)}var h=f?f.events:null}else h=g}if(h){var g=h[c.type];if(g)for(g=g.slice(),d=0;d<g.length;d++)(0,g[d])(c,b.source,b.origin,b)}}}}))}function za(a,b){function c(c,d,f,r){if("amp"==c.sentinel){if(d!=a.contentWindow)return;let b="null"==f&&void 0;if(e!=f&&!b)return}d==a.contentWindow&&("unlisten"==c.sentinel?h():b(c,d,f,r))}var d=a.ownerDocument.defaultView;xa(d);d=va(d,a);let e=J(a.src).origin;let h,f=d["embed-size"]||(d["embed-size"]=[]);f.push(c);h=function(){if(c){let a=f.indexOf(c);-1<a&&f.splice(a,1);b=f=c=null}}}function ya(a){"string"==typeof a&&(a="{"==a.charAt(0)?U(a,()=>{})||null:Y(a)?ua(a):null);return a}class Aa extends AMP.BaseElement{constructor(a){super(a);this.h=null;this.A=a.hasAttribute("data-locale")?a.getAttribute("data-locale"):window.navigator.language.replace("-","_");this.o=null;this.C=0}renderOutsideViewport(){return.75}preconnectCallback(a){let b=K(this.win,"preconnect");b.url(this.getAmpDoc(),"https://facebook.com",a);b.preload(this.getAmpDoc(),"https://connect.facebook.net/"+this.A+"/sdk.js","script");{var c=this.getAmpDoc();let a=X(this.win,c,void 0);b.preload(c,a,"document");b.preload(c,`${B.thirdParty}/2008290323002/f.js`,"script")}}isLayoutSupported(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a}layoutCallback(){let a=sa(this.win,this.element);this.applyFillContent(a);this.element.hasAttribute("data-allowfullscreen")&&a.setAttribute("allowfullscreen","true");za(a,a=>{this.forceChangeHeight(a.height)});this.o=ia(this.win,this.B.bind(this));this.toggleLoading(!0);this.element.appendChild(a);this.h=a;return this.loadPromise(a)}B(a){if(!this.h||a.source==this.h.contentWindow){var b=a.data;b&&("[object Object]"===ba.call(b)?b:U(b))&&"ready"==b.action&&this.toggleLoading(!1)}}createLoaderLogoCallback(){var a=this.element;a=a.ownerDocument||a;P&&P.ownerDocument===a||(P=a.createElement("div"));{a=P;a.innerHTML=ea[0];let b=a.firstElementChild;a.removeChild(b);a=b}return{color:"#1877F2",content:a}}unlayoutOnPause(){return!0}unlayoutCallback(){if(this.h){var a=this.h;a.parentElement&&a.parentElement.removeChild(a);this.h=null}this.o&&this.o();return!0}}(a=>{a.registerElement("amp-facebook",Aa)})(self.AMP)}});