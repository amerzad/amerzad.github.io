(self.AMP=self.AMP||[]).push({n:"amp-onetap-google",v:"2008290323002",f:function(AMP,_){function l(a,b=""){try{return decodeURIComponent(a)}catch(c){return b}}let m=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;let n=Object.prototype.toString;let q=self.AMP_CONFIG||{},r=("string"==typeof q.cdnProxyRegex?new RegExp(q.cdnProxyRegex):q.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function t(a){if(self.document&&self.document.head&&(!self.location||!r.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}q.cdnUrl||t("runtime-host");q.geoApiUrl||t("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let u=self.__AMP_LOG;function v(a,b,c,e){if(!u.user)throw Error("failed to call initLogConstructor");u.user.assert(a,b,c,"source",e,void 0,void 0,void 0,void 0,void 0,void 0)}function w(a){return a||{}}function x(a){return 2>a.length?!1:0==a.lastIndexOf("--",0)}let y;let z="Webkit webkit Moz moz ms O o".split(" ");function A(a,b){void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")}class B{constructor(a){this.B=a;this.m=this.o=0;this.j=Object.create(null)}has(a){return!!this.j[a]}get(a){let b=this.j[a];if(b)return b.access=++this.m,b.payload}put(a,b){this.has(a)||this.o++;this.j[a]={payload:b,access:this.m};if(!(this.o<=this.B)){a=this.j;var c=this.m+1;for(let b in a){let{access:d}=a[b];if(d<c){c=d;var e=b}}void 0!==e&&(delete a[e],this.o--)}}}w({c:!0,v:!0,a:!0,ad:!0});let C,D;function E(a){let b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){}let c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(let b=0;b<c.length;b++)0!=c[b].length&&("-"==c[b][0]?a[c[b].substr(1)]=!1:a[c[b]]=!0);return a}function F(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=G(b,"ampdoc").getAmpDoc(a)}return a}function G(a,b){H(a,b);{let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b}b=a[b];b.obj||(b.obj=new b.ctor(b.context),b.ctor=null,b.context=null,b.resolve&&b.resolve(b.obj));return b.obj}function H(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
let I;function J(a,b,c){let d,e=a,g=c;d=a=>{try{return g(a)}catch(f){throw self.__AMP_REPORT_ERROR(f),f}};let p=K();e.addEventListener(b,d,p?void 0:!1);return()=>{e&&e.removeEventListener(b,d,p?void 0:!1);d=e=g=null}}function K(){if(void 0!==I)return I;I=!1;try{let a={get capture(){I=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(a){}return I}function L(a,b,c){return J(a,b,c)}function M(a){a.h||(A(a.element,!1),a.l=[L(a.win,"message",b=>{N(a,b)}),L(a.getAmpDoc().getRootNode(),"click",()=>{a.A&&!a.element.hasAttribute("hidden")&&O(a)})],a.h=a.getAmpDoc().getRootNode().createElement("iframe"),a.h.classList.add("i-amphtml-onetap-google-iframe"),a.h.src=a.w,a.element.appendChild(a.h),a.getViewport().addToFixedLayer(a.h))}function O(a){if(a.h){A(a.element,!1);var b=a.h;b.parentElement&&b.parentElement.removeChild(b);a.h=null;if(a.l)for(;0<a.l.length;)a.l.pop()()}}function P(a,b){a.mutateElement(()=>{a.h.classList.add(`i-amphtml-onetap-google-ui-${b}`)})}function N(a,b){if(a.h&&b.source==a.h.contentWindow&&b.origin===a.C){var c=b.data;if("[object Object]"===n.call(c)&&"onetap_google"==c.sentinel)switch(c.command){case"intermediate_iframe_ready":let e=c.nonce;if(!e)break;b.source.postMessage(w({sentinel:"onetap_google",command:"parent_frame_ready",nonce:e}),b.origin);break;case"intermediate_iframe_resize":let g=c.height;"number"===typeof g&&!isNaN(g)&&0<g&&a.mutateElement(()=>{A(a.element,0<g);var b=a.h,d=`${c.height}px`;var f=b.style;if(x("height"))f="height";else{y||(y=Object.create(null));var e=y.height;if(!e){e="height";if(void 0===f.height){var h;b:{for(h=0;h<z.length;h++){let a=z[h]+"Height";if(void 0!==f[a]){h=a;break b}}h=""}void 0!==f[h]&&(e=h)}y.height=e}f=e}f&&(x(f)?b.style.setProperty(f,d):b.style[f]=d)});break;case"intermediate_iframe_close":a.mutateElement(()=>{O(a)});break;case"intermediate_iframe_done":a.mutateElement(()=>{O(a);{let h=a.getAmpDoc().getElementById("amp-access");if(h){{var b=a.element;let h=b.ownerDocument.defaultView;var c=h.__AMP_TOP||(h.__AMP_TOP=h);let p=h!=c;var f=c;if(f.__AMP__EXPERIMENT_TOGGLES)c=f.__AMP__EXPERIMENT_TOGGLES;else{f.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=f.__AMP__EXPERIMENT_TOGGLES;if(f.AMP_CONFIG)for(var e in f.AMP_CONFIG){var d=f.AMP_CONFIG[e];"number"===typeof d&&0<=d&&1>=d&&(c[e]=Math.random()<d)}if(f.AMP_CONFIG&&Array.isArray(f.AMP_CONFIG["allow-doc-opt-in"])&&0<f.AMP_CONFIG["allow-doc-opt-in"].length&&(e=f.AMP_CONFIG["allow-doc-opt-in"],d=f.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){d=d.getAttribute("content").split(",");for(var g=0;g<d.length;g++)-1!=e.indexOf(d[g])&&(c[d[g]]=!0)}Object.assign(c,E(f));if(f.AMP_CONFIG&&Array.isArray(f.AMP_CONFIG["allow-url-opt-in"])&&0<f.AMP_CONFIG["allow-url-opt-in"].length){e=f.AMP_CONFIG["allow-url-opt-in"];f=f.location.originalHash||f.location.hash;d=Object.create(null);if(f)for(var k;k=m.exec(f);)g=l(k[1],k[1]),k=k[2]?l(k[2].replace(/\+/g," "),k[2]):"",d[g]=k;f=d;for(d=0;d<e.length;d++)g=f[`e-${e[d]}`],"1"==g&&(c[e[d]]=!0),"0"==g&&(c[e[d]]=!1)}}c=!!c["ampdoc-fie"];p&&!c?b=H(h,"action")?G(h,"action"):null:(b=F(b),b=F(b),b=b.isSingleDoc()?b.win:b,b=H(b,"action")?G(b,"action"):null)}b.execute(h,"refresh",null,null,null,null,2)}}});break;case"set_ui_mode":let d=c.mode;if(!d)break;P(a,d);break;case"set_tap_outside_mode":a.A=!!c.cancel}}}class Q extends AMP.BaseElement{constructor(a){super(a);a=this.element.getAttribute("data-src");var b=this.element;v(null!=a,"%s %s must be available",b);var c=a;if("string"==typeof c){C||(C=self.document.createElement("a"),D=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new B(100)));var e=D,g=C;if(e&&e.has(c))c=e.get(c);else{g.href=c;g.protocol||(g.href=g.href);var d={href:g.href,protocol:g.protocol,host:g.host,hostname:g.hostname,port:"0"==g.port?"":g.port,pathname:g.pathname,search:g.search,hash:g.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=g.origin&&"null"!=g.origin?g.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;e&&e.put(c,d);c=d}}(e="https:"==c.protocol||"localhost"==c.hostname||"127.0.0.1"==c.hostname)||(c=c.hostname,e=c.length-10,e=0<=e&&c.indexOf(".localhost",e)==e);v(e||/^(\/\/)/.test(a),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',b,a);this.w=a;this.C=new URL(this.w).origin;this.h=null;this.A=!0;this.l=null}isLayoutSupported(a){return"nodisplay"==a}buildCallback(){this.getAmpDoc().whenFirstVisible().then(()=>{M(this)})}}(a=>{a.registerElement("amp-onetap-google",Q,".i-amphtml-onetap-google-iframe{z-index:2147483647;border:none;position:fixed}.i-amphtml-onetap-google-ui-card{width:391px;right:20px;top:20px}.i-amphtml-onetap-google-ui-bottom_sheet{right:auto;left:0;top:auto;bottom:0;width:100%}\n/*# sourceURL=/extensions/amp-onetap-google/0.1/amp-onetap-google.css*/")})(self.AMP)}});