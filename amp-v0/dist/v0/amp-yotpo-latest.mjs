(self.AMP=self.AMP||[]).push({n:"amp-yotpo",v:"2008290323002",f:function(AMP,_){function m(a,b=""){try{return decodeURIComponent(a)}catch(c){return b}}let r=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function v(a){let b=Object.create(null);if(!a)return b;let c;for(;c=r.exec(a);){let a=m(c[1],c[1]),e=c[2]?m(c[2].replace(/\+/g," "),c[2]):"";b[a]=e}return b}let w="";function y(){let a=self;if(a.__AMP_MODE)var b=a.__AMP_MODE;else{{b=v(a.location.originalHash||a.location.hash);let c=v(a.location.search);w||(w=a.AMP_CONFIG&&a.AMP_CONFIG.v?a.AMP_CONFIG.v:"012008290323002");b={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(b.development)||a.AMP_DEV_MODE),examiner:"2"==b.development,esm:!0,geoOverride:b["amp-geo"],minified:!0,lite:void 0!=c.amp_lite,test:!1,log:b.log,version:"2008290323002",rtvVersion:w}}b=a.__AMP_MODE=b}return b}let z=self.AMP_CONFIG||{},A=("string"==typeof z.cdnProxyRegex?new RegExp(z.cdnProxyRegex):z.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function B(a){if(!self.document||!self.document.head||self.location&&A.test(self.location.origin))return null;let b=self.document.head.querySelector(`meta[name="${a}"]`);return b&&b.getAttribute("content")||null}let C={thirdParty:z.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:z.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof z.thirdPartyFrameRegex?new RegExp(z.thirdPartyFrameRegex):z.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:z.cdnUrl||B("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:A,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:z.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:z.betaErrorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:z.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:z.geoApiUrl||B("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let D=self.__AMP_LOG;function E(){if(!D.user)throw Error("failed to call initLogConstructor");return D.user}function F(a,b,c,d,e){E().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)}function G(a){return a||{}}class I{constructor(a){this.w=a;this.l=this.m=0;this.h=Object.create(null)}has(a){return!!this.h[a]}get(a){let b=this.h[a];if(b)return b.access=++this.l,b.payload}put(a,b){this.has(a)||this.m++;this.h[a]={payload:b,access:this.l};if(!(this.m<=this.w)){a=this.h;var c=this.l+1;for(let b in a){let{access:e}=a[b];if(e<c){c=e;var d=b}}void 0!==d&&(delete a[d],this.m--)}}}function J(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)}G({c:!0,v:!0,a:!0,ad:!0});let K,L;function M(a){K||(K=self.document.createElement("a"),L=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new I(100)));var b=L,c=K;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a}function N(a){let b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(d){}let c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(let b=0;b<c.length;b++)0!=c[b].length&&("-"==c[b][0]?a[c[b].substr(1)]=!1:a[c[b]]=!0);return a}function O(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return P(a,b)}function Q(a,b){var c=R(a);c=R(c);c=c.isSingleDoc()?c.win:c;return P(c,b)}function R(a){return a.nodeType?O((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function P(a,b){{let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b}b=a[b];b.obj||(b.obj=new b.ctor(b.context),b.ctor=null,b.context=null,b.resolve&&b.resolve(b.obj));return b.obj}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function aa(a){a.parentElement&&a.parentElement.removeChild(a)}function ba(a){let b=a.nodeName;let c=0,d=0,e=a.previousElementSibling;for(;e&&25>d&&100>c;)e.nodeName==b&&d++,c++,e=e.previousElementSibling;return 25>d&&100>c?`.${d}`:""}let S;let T="Webkit webkit Moz moz ms O o".split(" ");function ca(a){var b=a.style;if(J("border","--"))b="border";else{S||(S=Object.create(null));var c=S.border;if(!c){c="border";if(void 0===b.border){var d;b:{for(d=0;d<T.length;d++){let a=T[d]+"Border";if(void 0!==b[a]){d=a;break b}}d=""}void 0!==b[d]&&(c=d)}S.border=c}b=c}b&&(J(b,"--")?a.style.setProperty(b,"none"):a.style[b]="none")}function U(a){a=parseFloat(a);return"number"===typeof a&&isFinite(a)?a:void 0}function V(a,b){try{return JSON.parse(a)}catch(c){return b&&b(c),null}}let W={};function da(a,b){F("yotpo","Attribute type required for <amp-ad>: %s",b);var c=0;for(var d=a;d&&d!=d.parent;d=d.parent)c++;c=String(c)+"-"+X(a);var e=d={},f=b.dataset;for(var h in f)J(h,"vars")||(e[h]=f[h]);if(h=b.getAttribute("json")){h=V(h);if(void 0===h)throw E().createError("Error parsing JSON in json attribute in element %s",b);for(var g in h)e[g]=h[g]}{g=d;d=Date.now();e=b.getAttribute("width");h=b.getAttribute("height");g=g?g:{};g.width=U(e);g.height=U(h);b.getAttribute("title")&&(g.title=b.getAttribute("title"));var x=a.location.href;"about:srcdoc"==x&&(x=a.parent.location.href);var H=R(b),t=Q(b,"documentInfo").get();let ea=Q(b,"viewer").getUnconfirmedReferrerUrl();var u=b.getPageLayoutBox();e=g;h=`${C.thirdParty}/2008290323002/ampcontext-v0.js`;f=t.sourceUrl;var fa=t.canonicalUrl;t=t.pageViewId;x={href:x};var ha=b.tagName,ia={localDev:!1,development:!1,esm:!0,minified:!0,lite:y().lite,test:!1,log:y().log,version:y().version,rtvVersion:y().rtvVersion},ja=!(!a.AMP_CONFIG||!a.AMP_CONFIG.canary);H=!H.isVisible();u=u?{left:u.left,top:u.top,width:u.width,height:u.height}:null;var ka=b.getIntersectionChangeEntry();var n=b;for(var p=[],k=0;n&&1==n.nodeType&&25>k;){var l="";n.id&&(l=`/${n.id}`);let a=n.nodeName.toLowerCase();p.push(`${a}${l}${ba(n)}`);k++;n=n.parentElement}n=p.join();p=n.length;k=5381;for(l=0;l<p;l++)k=33*k^n.charCodeAt(l);n=String(k>>>0);if(a.__AMP__EXPERIMENT_TOGGLES)a=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);p=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var q in a.AMP_CONFIG)k=a.AMP_CONFIG[q],"number"===typeof k&&0<=k&&1>=k&&(p[q]=Math.random()<k);if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(q=a.AMP_CONFIG["allow-doc-opt-in"],k=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(k=k.getAttribute("content").split(","),l=0;l<k.length;l++)-1!=q.indexOf(k[l])&&(p[k[l]]=!0);Object.assign(p,N(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length)for(q=a.AMP_CONFIG["allow-url-opt-in"],a=v(a.location.originalHash||a.location.hash),k=0;k<q.length;k++)l=a[`e-${q[k]}`],"1"==l&&(p[q[k]]=!0),"0"==l&&(p[q[k]]=!1);a=p}e._context=G({ampcontextVersion:"2008290323002",ampcontextFilepath:h,sourceUrl:f,referrer:ea,canonicalUrl:fa,pageViewId:t,location:x,startTime:d,tagName:ha,mode:ia,canary:ja,hidden:H,initialLayoutRect:u,initialIntersection:ka,domFingerprint:n,experimentToggles:a,sentinel:c});(b=b.getAttribute("src"))&&(g.src=b);d=g}d.type="yotpo";Object.assign(d._context,void 0);return d}function la(a,b){var{disallowCustom:c,allowFullscreen:d}={};let e=da(a,b),f=a.document.createElement("iframe");W[e.type]||(W[e.type]=0);W[e.type]+=1;var h=b.getAmpDoc();a=ma(a,h,c);let g=M(a).hostname;h=JSON.stringify(G({host:g,type:e.type,count:W[e.type],attributes:e}));f.src=a;f.ampLocation=M(a);f.name=h;e.width&&(f.width=e.width);e.height&&(f.height=e.height);e.title&&(f.title=e.title);d&&f.setAttribute("allowfullscreen","true");f.setAttribute("scrolling","no");ca(f);f.onload=function(){this.readyState="complete"};f.setAttribute("allow","sync-xhr 'none';");["facebook"].includes("yotpo")||na(f);f.setAttribute("data-amp-3p-sentinel",e._context.sentinel);return f}function ma(a,b,c){if(c)b=null;else if(c=b.getMetaByName("amp-3p-iframe-src")){b=c;F(null!=b,"%s %s must be available",'meta[name="amp-3p-iframe-src"]',"source");var d=b;"string"==typeof d&&(d=M(d));var e;(e="https:"==d.protocol||"localhost"==d.hostname||"127.0.0.1"==d.hostname)||(d=d.hostname,e=d.length-10,e=0<=e&&d.indexOf(".localhost",e)==e);F(e||/^(\/\/)/.test(b),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s','meta[name="amp-3p-iframe-src"]',"source",b);F(-1==b.indexOf("?"),"3p iframe url must not include query string %s in element %s.",b,c);d=M(b);F("localhost"==d.hostname&&!0||d.origin!=M(a.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",b,d.origin,c);b=`${b}?2008290323002`}else b=null;b||(a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+X(a),b="https://"+a.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+`.${C.thirdPartyFrameHost}/2008290323002/`+"frame.html");return b}function X(a){let b;if(a.crypto&&a.crypto.getRandomValues){let c=new Uint32Array(2);a.crypto.getRandomValues(c);b=String(c[0])+c[1]}else b=String(a.Math.random()).substr(2)+"0";return b}function na(a){if(a.sandbox&&a.sandbox.supports){var b=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"];for(let c=0;c<b.length;c++)if(!a.sandbox.supports(b[c]))return;a.sandbox=b.join(" ")+" allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts"}}function oa(a){if(!Y(a))return null;let b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(d){if(D.dev)var c=D.dev;else throw Error("failed to call initLogConstructor");c.error("MESSAGING","Failed to parse message: "+a,d);return null}}function Y(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")}function Z(a,b,c){{let{listeningFors:b}=a;!b&&c&&(b=a.listeningFors=Object.create(null));a=b||null}if(!a)return a;let d=a[b];!d&&c&&(d=a[b]=[]);return d||null}function pa(a,b){var c=b.getAttribute("data-amp-3p-sentinel");a=Z(a,c,!0);let d;for(c=0;c<a.length;c++){let e=a[c];if(e.frame===b){d=e;break}}d||(d={frame:b,events:Object.create(null)},a.push(d));return d.events}function qa(a){let b=G({sentinel:"unlisten"});for(let c=a.length-1;0<=c;c--){let d=a[c];if(!d.frame.contentWindow){a.splice(c,1);let e=d.events;for(let a in e)e[a].splice(0,1/0).forEach(a=>{a(b)})}}}function ra(a){a.listeningFors||a.addEventListener("message",(function(b){if(b.data){var c=sa(b.data);if(c&&c.sentinel){{var d=b.source;let g=Z(a,c.sentinel);if(g){for(let a=0;a<g.length;a++){let b=g[a],c=b.frame.contentWindow;if(c){var e;if(!(e=d==c))b:{for(e=d;e&&e!=e.parent;e=e.parent)if(e==c){e=!0;break b}e=!1}if(e){var f=b;break}}else setTimeout(qa,0,g)}var h=f?f.events:null}else h=g}if(h){var g=h[c.type];if(g)for(g=g.slice(),d=0;d<g.length;d++)(0,g[d])(c,b.source,b.origin,b)}}}}))}function ta(a,b){function c(c,d,f,t){if("amp"==c.sentinel){if(d!=a.contentWindow)return;let b="null"==f&&void 0;if(e!=f&&!b)return}d==a.contentWindow&&("unlisten"==c.sentinel?h():b(c,d,f,t))}var d=a.ownerDocument.defaultView;ra(d);d=pa(d,a);let e=M(a.src).origin;let h,f=d["embed-size"]||(d["embed-size"]=[]);f.push(c);return h=function(){if(c){let a=f.indexOf(c);-1<a&&f.splice(a,1);b=f=c=null}}}function sa(a){"string"==typeof a&&(a="{"==a.charAt(0)?V(a,()=>{})||null:Y(a)?oa(a):null);return a}class ua extends AMP.BaseElement{constructor(a){super(a);this.j=null;this.o=[]}preconnectCallback(a){O(this.win,"preconnect").url(this.getAmpDoc(),"https://staticw2.yotpo.com",a)}buildCallback(){F(this.element.getAttribute("data-app-key"),"The data-app-key attribute is required for <amp-yotpo> %s",this.element);F(this.element.getAttribute("data-widget-type"),"The data-widget-type attribute is required for <amp-yotpo> %s",this.element)}isLayoutSupported(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a}unlayoutOnPause(){return!0}unlayoutCallback(){this.o.forEach(a=>a());this.o.length=0;this.j&&(aa(this.j),this.j=null);return!0}layoutCallback(){let a=la(this.win,this.element);this.applyFillContent(a);let b=ta(a,a=>{this.attemptChangeHeight(a.height).catch(()=>{})});this.o.push(b);this.element.appendChild(a);this.j=a;return this.loadPromise(a)}}(a=>{a.registerElement("amp-yotpo",ua)})(self.AMP)}});