(self.AMP=self.AMP||[]).push({n:"amp-standalone",v:"2007102309000",f:(function(AMP,_){
var f=self.AMP_CONFIG||{},g=("string"==typeof f.cdnProxyRegex?new RegExp(f.cdnProxyRegex):f.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function h(b){if(self.document&&self.document.head&&(!self.location||!g.test(self.location.origin))){var d=self.document.head.querySelector('meta[name="'+b+'"]');d&&d.getAttribute("content")}}f.cdnUrl||h("runtime-host");f.geoApiUrl||h("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var k=self.__AMP_LOG;function l(){this.o=100;this.l=this.m=0;this.j=Object.create(null)}l.prototype.has=function(b){return!!this.j[b]};l.prototype.get=function(b){var d=this.j[b];if(d)return d.access=++this.l,d.payload};
l.prototype.put=function(b,d){this.has(b)||this.m++;this.j[b]={payload:d,access:this.l};if(!(this.m<=this.o)){if(k.dev)b=k.dev;else throw Error("failed to call initLogConstructor");b.warn("lru-cache","Trimming LRU cache");b=this.j;var c=this.l+1,a;for(a in b){var e=b[a].access;if(e<c){c=e;var n=a}}void 0!==n&&(delete b[n],this.m--)}};(function(b){return b||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});var m,p;
function q(b){var d;if(!(d=b.origin)){b=b.location.href;m||(m=self.document.createElement("a"),p=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new l));d=p;var c=m;if(d&&d.has(b))b=d.get(b);else{c.href=b;c.protocol||(c.href=c.href);var a={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==a.pathname[0]&&(a.pathname="/"+a.pathname);if("http:"==a.protocol&&80==a.port||"https:"==a.protocol&&443==a.port)a.port=
"",a.host=a.hostname;a.origin=c.origin&&"null"!=c.origin?c.origin:"data:"!=a.protocol&&a.host?a.protocol+"//"+a.host:a.href;d&&d.put(b,a);b=a}d=b.origin}return d};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var r;function t(b,d){var c=u();b.addEventListener("click",function(a){try{return d(a)}catch(e){throw self.__AMP_REPORT_ERROR(e),e;}},c?void 0:!1)}function u(){if(void 0!==r)return r;r=!1;try{var b={get capture(){r=!0}};self.addEventListener("test-options",null,b);self.removeEventListener("test-options",null,b)}catch(d){}return r};function v(b,d){t(b,d)};function w(b){this.h=b}
w.prototype.initialize=function(){var b=this;v(this.h.getRootNode(),function(d){a:{var c=d.target;if("A"===c.tagName){var a=b.h.win;a=a.__AMP_TOP||(a.__AMP_TOP=a);var e=a.__AMP_SERVICES;e||(e=a.__AMP_SERVICES={});a=e.platform;a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));a=a.obj;if(a.isSafari()){a=c.href;e=c.origin;"_blank"===c.target||q(b.h.win)!==e?c=!0:(b.h.win.location.href=a,c=!1);d=d.returnValue=c;break a}a.isChrome()&&(d=c.origin,"_blank"!==c.target&&
q(b.h.win)!==d&&(c.target="_blank"))}d=void 0}return d})};(function(b){b.registerServiceForDoc("standalone",w)})(self.AMP);
})});

//# sourceMappingURL=amp-standalone-0.1.js.map
