(self.AMP=self.AMP||[]).push({n:"amp-google-vrview-image",v:"2007102309000",f:(function(AMP,_){
var g="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function k(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],d=0;d<b.length;++d){var c=b[d];if(c&&c.Math==Math)return}(function(){throw Error("Cannot find global object");})()}k(this);"function"===typeof Symbol&&Symbol("x");var l;
if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var n={a:!0},p={};try{p.__proto__=n;m=p.a;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var q=l;function r(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return b}};var t=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var u=self.AMP_CONFIG||{},v=("string"==typeof u.cdnProxyRegex?new RegExp(u.cdnProxyRegex):u.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function w(a){if(self.document&&self.document.head&&(!self.location||!v.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}u.cdnUrl||w("runtime-host");u.geoApiUrl||w("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var x=self.__AMP_LOG;function y(){if(x.dev)return x.dev;throw Error("failed to call initLogConstructor");}function z(a,b,d,c,e){if(!x.user)throw Error("failed to call initLogConstructor");x.user.assert(a,b,d,c,e,void 0,void 0,void 0,void 0,void 0,void 0)};function A(){this.w=100;this.l=this.o=0;this.h=Object.create(null)}A.prototype.has=function(a){return!!this.h[a]};A.prototype.get=function(a){var b=this.h[a];if(b)return b.access=++this.l,b.payload};A.prototype.put=function(a,b){this.has(a)||this.o++;this.h[a]={payload:b,access:this.l};if(!(this.o<=this.w)){y().warn("lru-cache","Trimming LRU cache");a=this.h;var d=this.l+1,c;for(c in a){var e=a[c].access;if(e<d){d=e;var f=c}}void 0!==f&&(delete a[f],this.o--)}};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});var B,C;function D(a,b,d){b=encodeURIComponent(b)+"="+encodeURIComponent(d);b&&(a=a.split("#",2),d=a[0].split("?",2),b=d[0]+(d[1]?"?"+d[1]+"&"+b:"?"+b),a=b+=a[1]?"#"+a[1]:"");return a};function F(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){y().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var d=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var c=0;c<d.length;c++)0!=d[c].length&&("-"==d[c][0]?a[d[c].substr(1)]=!1:a[d[c]]=!0);return a};function G(a){a=a.__AMP_TOP||(a.__AMP_TOP=a);var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b.preconnect;a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function H(a){a=AMP.BaseElement.call(this,a)||this;a.m="";a.j="";return a}var I=AMP.BaseElement;H.prototype=g(I.prototype);H.prototype.constructor=H;if(q)q(H,I);else for(var J in I)if("prototype"!=J)if(Object.defineProperties){var K=Object.getOwnPropertyDescriptor(I,J);K&&Object.defineProperty(H,J,K)}else H[J]=I[J];H.A=I.prototype;H.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
H.prototype.buildCallback=function(){var a=this.win;if(a.__AMP__EXPERIMENT_TOGGLES)var b=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var c=a.AMP_CONFIG[d];"number"===typeof c&&0<=c&&1>=c&&(b[d]=Math.random()<c)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],c=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){c=
c.getAttribute("content").split(",");for(var e=0;e<c.length;e++)-1!=d.indexOf(c[e])&&(b[c[e]]=!0)}Object.assign(b,F(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){d=a.AMP_CONFIG["allow-url-opt-in"];c=a.location.originalHash||a.location.hash;a=Object.create(null);if(c)for(var f;f=t.exec(c);)e=r(f[1],f[1]),f=f[2]?r(f[2].replace(/\+/g," "),f[2]):"",a[e]=f;for(c=0;c<d.length;c++)e=a["e-"+d[c]],"1"==e&&(b[d[c]]=!0),"0"==e&&(b[d[c]]=!1)}}z(!!b["amp-google-vrview-image"],
"TAG amp-google-vrview-image disabled");b=this.element.getAttribute("src");d=this.element;var h=void 0===h?"source":h;z(null!=b,"%s %s must be available",d,h);a=b;if("string"==typeof a)if(B||(B=self.document.createElement("a"),C=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new A)),c=C,e=B,c&&c.has(a))a=c.get(a);else{e.href=a;e.protocol||(e.href=e.href);f={href:e.href,protocol:e.protocol,host:e.host,hostname:e.hostname,port:"0"==e.port?"":e.port,pathname:e.pathname,search:e.search,hash:e.hash,origin:null};
"/"!==f.pathname[0]&&(f.pathname="/"+f.pathname);if("http:"==f.protocol&&80==f.port||"https:"==f.protocol&&443==f.port)f.port="",f.host=f.hostname;f.origin=e.origin&&"null"!=e.origin?e.origin:"data:"!=f.protocol&&f.host?f.protocol+"//"+f.host:f.href;c&&c.put(a,f);a=f}(c="https:"==a.protocol||"localhost"==a.hostname||"127.0.0.1"==a.hostname)||(a=a.hostname,c=a.length-10,c=0<=c&&a.indexOf(".localhost",c)==c);z(c||/^(\/\/)/.test(b),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',
d,h,b);this.m=b;h=D("https://storage.googleapis.com/vrview/2.0/index.html","image",this.m);this.element.hasAttribute("stereo")&&(h=D(h,"is_stereo","true"));var E=this.element.getAttribute("yaw");E&&(h=D(h,"start_yaw",E));this.element.hasAttribute("yaw-only")&&(h=D(h,"is_yaw_only","true"));this.j=h};H.prototype.preconnectCallback=function(){this.j&&(G(this.win).preload(this.getAmpDoc(),this.j),G(this.win).preload(this.getAmpDoc(),this.m))};H.prototype.createPlaceholderCallback=function(){return null};
H.prototype.layoutCallback=function(){var a=this.element.ownerDocument.createElement("iframe");a.onload=function(){a.readyState="complete"};this.applyFillContent(a);a.setAttribute("frameborder","0");a.setAttribute("allowfullscreen","true");a.setAttribute("src",this.j);this.element.appendChild(a);return this.loadPromise(a)};(function(a){a.registerElement("amp-google-vrview-image",H)})(self.AMP);
})});

//# sourceMappingURL=amp-google-vrview-image-0.1.js.map