(self.AMP=self.AMP||[]).push({n:"amp-3d-gltf",v:"2008290323002",f:function(AMP,_){let m;function r(a,b=""){try{return decodeURIComponent(a)}catch(c){return b}}let aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function u(a){let b=Object.create(null);if(!a)return b;let c;for(;c=aa.exec(a);){let a=r(c[1],c[1]),e=c[2]?r(c[2].replace(/\+/g," "),c[2]):"";b[a]=e}return b}let w="";function x(){let a=self;if(a.__AMP_MODE)var b=a.__AMP_MODE;else{{b=u(a.location.originalHash||a.location.hash);let c=u(a.location.search);w||(w=a.AMP_CONFIG&&a.AMP_CONFIG.v?a.AMP_CONFIG.v:"012008290323002");b={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(b.development)||a.AMP_DEV_MODE),examiner:"2"==b.development,esm:!0,geoOverride:b["amp-geo"],minified:!0,lite:void 0!=c.amp_lite,test:!1,log:b.log,version:"2008290323002",rtvVersion:w}}b=a.__AMP_MODE=b}return b}let y=self.AMP_CONFIG||{},B=("string"==typeof y.cdnProxyRegex?new RegExp(y.cdnProxyRegex):y.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function C(a){if(!self.document||!self.document.head||self.location&&B.test(self.location.origin))return null;let b=self.document.head.querySelector(`meta[name="${a}"]`);return b&&b.getAttribute("content")||null}let D={thirdParty:y.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:y.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof y.thirdPartyFrameRegex?new RegExp(y.thirdPartyFrameRegex):y.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:y.cdnUrl||C("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:B,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:y.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:y.betaErrorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:y.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:y.geoApiUrl||C("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let E=self.__AMP_LOG;function F(){if(!E.user)throw Error("failed to call initLogConstructor");return E.user}function G(){if(E.dev)return E.dev;throw Error("failed to call initLogConstructor")}function H(a,b,c,d,e){F().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)}class I{constructor(){let a,b;this.promise=new Promise((c,d)=>{a=c;b=d});this.resolve=a;this.reject=b}}function J(a){return a||{}}class ba{constructor(a){this.C=a;this.l=this.m=0;this.j=Object.create(null)}has(a){return!!this.j[a]}get(a){let b=this.j[a];if(b)return b.access=++this.l,b.payload}put(a,b){this.has(a)||this.m++;this.j[a]={payload:b,access:this.l};if(!(this.m<=this.C)){a=this.j;var c=this.l+1;for(let b in a){let{access:e}=a[b];if(e<c){c=e;var d=b}}void 0!==d&&(delete a[d],this.m--)}}}function K(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)}J({c:!0,v:!0,a:!0,ad:!0});let L,N;function O(a){L||(L=self.document.createElement("a"),N=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new ba(100)));var b=N,c=L;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a}function P(a,b){H(null!=a,"%s %s must be available",b,"source");var c=a;"string"==typeof c&&(c=O(c));var d;(d="https:"==c.protocol||"localhost"==c.hostname||"127.0.0.1"==c.hostname)||(c=c.hostname,d=c.length-10,d=0<=d&&c.indexOf(".localhost",d)==d);H(d||/^(\/\/)/.test(a),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',b,"source",a);return a}function ca(a,b){"string"==typeof b&&(b=O(b));if("function"==typeof URL)var c=new URL(a,b.href).toString();else{c=a;var d=b;"string"==typeof d&&(d=O(d));c=c.replace(/\\/g,"/");let e=O(c);c=K(c.toLowerCase(),e.protocol)?e.href:K(c,"//")?d.protocol+c:K(c,"/")?d.origin+c:d.origin+d.pathname.replace(/\/[^/]*$/,"/")+c}return c}function da(a){let b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(d){}let c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(let b=0;b<c.length;b++)0!=c[b].length&&("-"==c[b][0]?a[c[b].substr(1)]=!1:a[c[b]]=!0);return a}function Q(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return R(a,b)}function S(a,b){var c=T(a);c=T(c);c=c.isSingleDoc()?c.win:c;return R(c,b)}function T(a){return a.nodeType?Q((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function R(a,b){{let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b}b=a[b];b.obj||(b.obj=new b.ctor(b.context),b.ctor=null,b.context=null,b.resolve&&b.resolve(b.obj));return b.obj}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ea(a){let b=a.nodeName;let c=0,d=0,e=a.previousElementSibling;for(;e&&25>d&&100>c;)e.nodeName==b&&d++,c++,e=e.previousElementSibling;return 25>d&&100>c?`.${d}`:""}let U;let V="Webkit webkit Moz moz ms O o".split(" ");function fa(a){var b=a.style;if(K("border","--"))b="border";else{U||(U=Object.create(null));var c=U.border;if(!c){c="border";if(void 0===b.border){var d;b:{for(d=0;d<V.length;d++){let a=V[d]+"Border";if(void 0!==b[a]){d=a;break b}}d=""}void 0!==b[d]&&(c=d)}U.border=c}b=c}b&&(K(b,"--")?a.style.setProperty(b,"none"):a.style[b]="none")}function W(a){a=parseFloat(a);return"number"===typeof a&&isFinite(a)?a:void 0}function X(a,b){try{return JSON.parse(a)}catch(c){return b&&b(c),null}}let Y={};function ha(a,b,c){H("3d-gltf","Attribute type required for <amp-ad>: %s",b);var d=0;for(var e=a;e&&e!=e.parent;e=e.parent)d++;d=String(d)+"-"+ia(a);var g=e={},k=b.dataset;for(var f in k)K(f,"vars")||(g[f]=k[f]);if(f=b.getAttribute("json")){f=X(f);if(void 0===f)throw F().createError("Error parsing JSON in json attribute in element %s",b);for(var p in f)g[p]=f[p]}{p=e;e=Date.now();g=b.getAttribute("width");f=b.getAttribute("height");p=p?p:{};p.width=W(g);p.height=W(f);b.getAttribute("title")&&(p.title=b.getAttribute("title"));var z=a.location.href;"about:srcdoc"==z&&(z=a.parent.location.href);var M=T(b),A=S(b,"documentInfo").get();let c=S(b,"viewer").getUnconfirmedReferrerUrl();var v=b.getPageLayoutBox();g=p;f=`${D.thirdParty}/2008290323002/ampcontext-v0.js`;k=A.sourceUrl;var ma=A.canonicalUrl;A=A.pageViewId;z={href:z};var na=b.tagName,oa={localDev:!1,development:!1,esm:!0,minified:!0,lite:x().lite,test:!1,log:x().log,version:x().version,rtvVersion:x().rtvVersion},pa=!(!a.AMP_CONFIG||!a.AMP_CONFIG.canary);M=!M.isVisible();v=v?{left:v.left,top:v.top,width:v.width,height:v.height}:null;var qa=b.getIntersectionChangeEntry();var n=b;for(var q=[],h=0;n&&1==n.nodeType&&25>h;){var l="";n.id&&(l=`/${n.id}`);let a=n.nodeName.toLowerCase();q.push(`${a}${l}${ea(n)}`);h++;n=n.parentElement}n=q.join();q=n.length;h=5381;for(l=0;l<q;l++)h=33*h^n.charCodeAt(l);n=String(h>>>0);if(a.__AMP__EXPERIMENT_TOGGLES)a=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);q=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var t in a.AMP_CONFIG)h=a.AMP_CONFIG[t],"number"===typeof h&&0<=h&&1>=h&&(q[t]=Math.random()<h);if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(t=a.AMP_CONFIG["allow-doc-opt-in"],h=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(h=h.getAttribute("content").split(","),l=0;l<h.length;l++)-1!=t.indexOf(h[l])&&(q[h[l]]=!0);Object.assign(q,da(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length)for(t=a.AMP_CONFIG["allow-url-opt-in"],a=u(a.location.originalHash||a.location.hash),h=0;h<t.length;h++)l=a[`e-${t[h]}`],"1"==l&&(q[t[h]]=!0),"0"==l&&(q[t[h]]=!1);a=q}g._context=J({ampcontextVersion:"2008290323002",ampcontextFilepath:f,sourceUrl:k,referrer:c,canonicalUrl:ma,pageViewId:A,location:z,startTime:e,tagName:na,mode:oa,canary:pa,hidden:M,initialLayoutRect:v,initialIntersection:qa,domFingerprint:n,experimentToggles:a,sentinel:d});(b=b.getAttribute("src"))&&(p.src=b);e=p}e.type="3d-gltf";Object.assign(e._context,c);return e}function ja(a,b,c){var{disallowCustom:d,allowFullscreen:e}={};c=ha(a,b,c);let g=a.document.createElement("iframe");Y[c.type]||(Y[c.type]=0);Y[c.type]+=1;var k=b.getAmpDoc();a=ka(a,k,d);let f=O(a).hostname;k=JSON.stringify(J({host:f,type:c.type,count:Y[c.type],attributes:c}));g.src=a;g.ampLocation=O(a);g.name=k;c.width&&(g.width=c.width);c.height&&(g.height=c.height);c.title&&(g.title=c.title);e&&g.setAttribute("allowfullscreen","true");g.setAttribute("scrolling","no");fa(g);g.onload=function(){this.readyState="complete"};g.setAttribute("allow","sync-xhr 'none';");["facebook"].includes("3d-gltf")||la(g);g.setAttribute("data-amp-3p-sentinel",c._context.sentinel);return g}function ka(a,b,c){if(c)b=null;else{let d=b.getMetaByName("amp-3p-iframe-src");d?(b=P(d,'meta[name="amp-3p-iframe-src"]'),H(-1==b.indexOf("?"),"3p iframe url must not include query string %s in element %s.",b,d),c=O(b),H("localhost"==c.hostname&&!0||c.origin!=O(a.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",b,c.origin,d),b=`${b}?2008290323002`):b=null}b||(a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+ia(a),b="https://"+a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+`.${D.thirdPartyFrameHost}/2008290323002/`+"frame.html");return b}function ia(a){let b;if(a.crypto&&a.crypto.getRandomValues){let c=new Uint32Array(2);a.crypto.getRandomValues(c);b=String(c[0])+c[1]}else b=String(a.Math.random()).substr(2)+"0";return b}function la(a){if(a.sandbox&&a.sandbox.supports){var b=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"];for(let c=0;c<b.length;c++)if(!a.sandbox.supports(b[c]))return;a.sandbox=b.join(" ")+" allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts"}}function ra(a){if(!sa(a))return null;let b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(c){return G().error("MESSAGING","Failed to parse message: "+a,c),null}}function sa(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")}function ta(a,b,c){{let{listeningFors:b}=a;!b&&c&&(b=a.listeningFors=Object.create(null));a=b||null}if(!a)return a;let d=a[b];!d&&c&&(d=a[b]=[]);return d||null}function ua(a,b){var c=b.getAttribute("data-amp-3p-sentinel");a=ta(a,c,!0);let d;for(c=0;c<a.length;c++){let e=a[c];if(e.frame===b){d=e;break}}d||(d={frame:b,events:Object.create(null)},a.push(d));return d.events}function va(a){let b=J({sentinel:"unlisten"});for(let c=a.length-1;0<=c;c--){let d=a[c];if(!d.frame.contentWindow){a.splice(c,1);let e=d.events;for(let a in e)e[a].splice(0,1/0).forEach(a=>{a(b)})}}}function wa(a){a.listeningFors||a.addEventListener("message",(function(b){if(b.data){var c=xa(b.data);if(c&&c.sentinel){{var d=b.source;let f=ta(a,c.sentinel);if(f){for(let a=0;a<f.length;a++){let b=f[a],c=b.frame.contentWindow;if(c){var e;if(!(e=d==c))b:{for(e=d;e&&e!=e.parent;e=e.parent)if(e==c){e=!0;break b}e=!1}if(e){var g=b;break}}else setTimeout(va,0,f)}var k=g?g.events:null}else k=f}if(k){var f=k[c.type];if(f)for(f=f.slice(),d=0;d<f.length;d++)(0,f[d])(c,b.source,b.origin,b)}}}}))}function ya(a,b,c){function d(b,d,e,k){if("amp"==b.sentinel){if(d!=a.contentWindow)return;let b="null"==e&&void 0;if(g!=e&&!b)return}d==a.contentWindow&&("unlisten"==b.sentinel?f():c(b,d,e,k))}var e=a.ownerDocument.defaultView;wa(e);e=ua(e,a);let g=O(a.src).origin;let f,k=e[b]||(e[b]=[]);k.push(d);return f=function(){if(d){let a=k.indexOf(d);-1<a&&k.splice(a,1);c=k=d=null}}}function xa(a){"string"==typeof a&&(a="{"==a.charAt(0)?X(a,()=>{})||null:sa(a)?ra(a):null);return a}function Z(a,b,c){return a.A.promise.then(()=>{var d=J({action:b,args:c}),e=a.h,g=[{win:e.contentWindow,origin:"*"}];if(e.contentWindow)for(d.type="action",d.sentinel=e.getAttribute("data-amp-3p-sentinel"),d="amp-"+JSON.stringify(d),e=0;e<g.length;e++){let a=g[e];a.win.postMessage(d,a.origin)}})}function za(a){if(a.h){var b=(b,c)=>ya(a.h,b,c),c=[b("ready",a.A.resolve),b("loaded",a.w.resolve),b("error",()=>{a.toggleFallback(!0)})];return()=>c.forEach(a=>a())}}class Aa extends AMP.BaseElement{constructor(a){super(a);this.h=null;this.A=new I;this.w=new I;this.B={};this.o=null}preconnectCallback(a){let b=Q(this.win,"preconnect");{var c=this.getAmpDoc();let a=ka(this.win,c,void 0);b.preload(c,a,"document");b.preload(c,`${D.thirdParty}/2008290323002/f.js`,"script")}b.url(this.getAmpDoc(),"https://cdnjs.cloudflare.com/ajax/libs/three.js/91/three.js",a);b.url(this.getAmpDoc(),"https://cdn.jsdelivr.net/npm/three@0.91/examples/js/loaders/GLTFLoader.js",a);b.url(this.getAmpDoc(),"https://cdn.jsdelivr.net/npm/three@0.91/examples/js/controls/OrbitControls.js",a)}unlayoutCallback(){if(this.h){var a=this.h;a.parentElement&&a.parentElement.removeChild(a);this.h=null}this.o&&this.o();this.A=new I;this.w=new I;return!0}buildCallback(){let a=(a,b,c)=>this.element.hasAttribute(a)?b(this.element.getAttribute(a)):c,b=a=>"false"!==a,c=a=>a,d=P(a("src",c,""),this.element),e=a("alpha",b,!1);this.B=J({src:ca(d,this.getAmpDoc().getUrl()),renderer:{alpha:e,antialias:a("antialiasing",b,!0)},rendererSettings:{clearAlpha:e?0:1,clearColor:a("clearColor",c,"#fff"),maxPixelRatio:a("maxPixelRatio",a=>parseFloat(a),devicePixelRatio||1)},controls:{enableZoom:a("enableZoom",b,!0),autoRotate:a("autoRotate",b,!1)}});this.registerAction("setModelRotation",a=>{Z(this,"setModelRotation",a.args).catch(a=>G().error("AMP-3D-GLTF","setModelRotation failed: %s",a))},1)}layoutCallback(){var a=document.createElement("canvas");a=(a=a.getContext("webgl")||a.getContext("experimental-webgl"))&&a instanceof WebGLRenderingContext;if(!a)return this.toggleFallback(!0),m||(m=Promise.resolve(void 0)),a=m,a;a=ja(this.win,this.element,this.B);this.applyFillContent(a,!0);this.h=a;this.o=za(this);this.element.appendChild(this.h);return this.w.promise}viewportCallback(a){return Z(this,"toggleAmpViewport",a)}pauseCallback(){Z(this,"toggleAmpPlay",!1)}resumeCallback(){Z(this,"toggleAmpPlay",!0)}onLayoutMeasure(){let a=this.getLayoutBox();Z(this,"setSize",J({width:a.width,height:a.height}))}isLayoutSupported(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a}}(a=>{a.registerElement("amp-3d-gltf",Aa)})(self.AMP)}});