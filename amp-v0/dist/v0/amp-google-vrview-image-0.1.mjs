(self.AMP=self.AMP||[]).push({n:"amp-google-vrview-image",v:"2008290323002",f:function(AMP,_){function g(a,b=""){try{return decodeURIComponent(a)}catch(d){return b}}let h=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;let k=self.AMP_CONFIG||{},l=("string"==typeof k.cdnProxyRegex?new RegExp(k.cdnProxyRegex):k.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function m(a){if(self.document&&self.document.head&&(!self.location||!l.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}k.cdnUrl||m("runtime-host");k.geoApiUrl||m("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let n=self.__AMP_LOG;function p(a,b,d,c,f){if(!n.user)throw Error("failed to call initLogConstructor");n.user.assert(a,b,d,c,f,void 0,void 0,void 0,void 0,void 0,void 0)}class q{constructor(a){this.w=a;this.l=this.o=0;this.h=Object.create(null)}has(a){return!!this.h[a]}get(a){let b=this.h[a];if(b)return b.access=++this.l,b.payload}put(a,b){this.has(a)||this.o++;this.h[a]={payload:b,access:this.l};if(!(this.o<=this.w)){a=this.h;var d=this.l+1;for(let b in a){let{access:e}=a[b];if(e<d){d=e;var c=b}}void 0!==c&&(delete a[c],this.o--)}}}(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0});let r,u;function v(a,b,d){if(b=`${encodeURIComponent(b)}=${encodeURIComponent(d)}`)a=a.split("#",2),d=a[0].split("?",2),b=d[0]+(d[1]?`?${d[1]}&${b}`:`?${b}`),a=b+=a[1]?`#${a[1]}`:"";return a}function w(a){let b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(c){}let d=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(let b=0;b<d.length;b++)0!=d[b].length&&("-"==d[b][0]?a[d[b].substr(1)]=!1:a[d[b]]=!0);return a}function x(a){a=a.__AMP_TOP||(a.__AMP_TOP=a);{let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b}a=a.preconnect;a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a=a.obj}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
class y extends AMP.BaseElement{constructor(a){super(a);this.j=this.m=""}isLayoutSupported(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a}buildCallback(){var a=this.win;if(a.__AMP__EXPERIMENT_TOGGLES)var b=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var c=a.AMP_CONFIG[d];"number"===typeof c&&0<=c&&1>=c&&(b[d]=Math.random()<c)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],c=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){c=c.getAttribute("content").split(",");for(var f=0;f<c.length;f++)-1!=d.indexOf(c[f])&&(b[c[f]]=!0)}Object.assign(b,w(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){d=a.AMP_CONFIG["allow-url-opt-in"];a=a.location.originalHash||a.location.hash;c=Object.create(null);if(a)for(var e;e=h.exec(a);)f=g(e[1],e[1]),e=e[2]?g(e[2].replace(/\+/g," "),e[2]):"",c[f]=e;a=c;for(c=0;c<d.length;c++)f=a[`e-${d[c]}`],"1"==f&&(b[d[c]]=!0),"0"==f&&(b[d[c]]=!1)}}p(!!b["amp-google-vrview-image"],"TAG amp-google-vrview-image disabled");b=this.element.getAttribute("src");d=this.element;p(null!=b,"%s %s must be available",d,"source");a=b;if("string"==typeof a)if(r||(r=self.document.createElement("a"),u=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new q(100))),c=u,f=r,c&&c.has(a))a=c.get(a);else{f.href=a;f.protocol||(f.href=f.href);e={href:f.href,protocol:f.protocol,host:f.host,hostname:f.hostname,port:"0"==f.port?"":f.port,pathname:f.pathname,search:f.search,hash:f.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=f.origin&&"null"!=f.origin?f.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c&&c.put(a,e);a=e}(c="https:"==a.protocol||"localhost"==a.hostname||"127.0.0.1"==a.hostname)||(a=a.hostname,c=a.length-10,c=0<=c&&a.indexOf(".localhost",c)==c);p(c||/^(\/\/)/.test(b),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',d,"source",b);this.m=b;b=v("https://storage.googleapis.com/vrview/2.0/index.html","image",this.m);this.element.hasAttribute("stereo")&&(b=v(b,"is_stereo","true"));let t=this.element.getAttribute("yaw");t&&(b=v(b,"start_yaw",t));this.element.hasAttribute("yaw-only")&&(b=v(b,"is_yaw_only","true"));this.j=b}preconnectCallback(){this.j&&(x(this.win).preload(this.getAmpDoc(),this.j),x(this.win).preload(this.getAmpDoc(),this.m))}createPlaceholderCallback(){return null}layoutCallback(){let a=this.element.ownerDocument.createElement("iframe");a.onload=()=>{a.readyState="complete"};this.applyFillContent(a);a.setAttribute("frameborder","0");a.setAttribute("allowfullscreen","true");a.setAttribute("src",this.j);this.element.appendChild(a);return this.loadPromise(a)}}(a=>{a.registerElement("amp-google-vrview-image",y)})(self.AMP)}});