(self.AMP=self.AMP||[]).push({n:"amp-standalone",v:"2008290323002",f:function(AMP,_){let e=self.AMP_CONFIG||{},g=("string"==typeof e.cdnProxyRegex?new RegExp(e.cdnProxyRegex):e.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function h(a){if(self.document&&self.document.head&&(!self.location||!g.test(self.location.origin))){var c=self.document.head.querySelector(`meta[name="${a}"]`);c&&c.getAttribute("content")}}e.cdnUrl||h("runtime-host");e.geoApiUrl||h("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};class k{constructor(a){this.o=a;this.l=this.m=0;this.j=Object.create(null)}has(a){return!!this.j[a]}get(a){let c=this.j[a];if(c)return c.access=++this.l,c.payload}put(a,c){this.has(a)||this.m++;this.j[a]={payload:c,access:this.l};if(!(this.m<=this.o)){a=this.j;var b=this.l+1;for(let c in a){let{access:f}=a[c];if(f<b){b=f;var d=c}}void 0!==d&&(delete a[d],this.m--)}}}(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0});let l,m;function n(a){var c;if(!(c=a.origin)){a=a.location.href;l||(l=self.document.createElement("a"),m=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new k(100)));c=m;var b=l;if(c&&c.has(a))a=c.get(a);else{b.href=a;b.protocol||(b.href=b.href);var d={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:"0"==b.port?"":b.port,pathname:b.pathname,search:b.search,hash:b.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=b.origin&&"null"!=b.origin?b.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;c&&c.put(a,d);a=d}c=a.origin}return c}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
let p;function q(a,c){let b=r();a.addEventListener("click",a=>{try{return c(a)}catch(f){throw self.__AMP_REPORT_ERROR(f),f}},b?void 0:!1)}function r(){if(void 0!==p)return p;p=!1;try{let a={get capture(){p=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(a){}return p}function t(a,c){q(a,c)}class u{constructor(a){this.h=a}initialize(){t(this.h.getRootNode(),a=>{a:{var c=a.target;if("A"===c.tagName){var b=this.h.win;b=b.__AMP_TOP||(b.__AMP_TOP=b);var d=b.__AMP_SERVICES;d||(d=b.__AMP_SERVICES={});b=d;b=b.platform;b.obj||(b.obj=new b.ctor(b.context),b.ctor=null,b.context=null,b.resolve&&b.resolve(b.obj));b=b.obj;if(b.isSafari()){b=c.href;d=c.origin;"_blank"===c.target||n(this.h.win)!==d?c=!0:(this.h.win.location.href=b,c=!1);a=a.returnValue=c;break a}b.isChrome()&&(a=c,c=a.origin,"_blank"!==a.target&&n(this.h.win)!==c&&(a.target="_blank"))}a=void 0}return a})}}(a=>{a.registerServiceForDoc("standalone",u)})(self.AMP)}});