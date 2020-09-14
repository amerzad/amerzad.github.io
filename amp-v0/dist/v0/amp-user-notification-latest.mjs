(self.AMP=self.AMP||[]).push({n:"amp-user-notification",v:"2008290323002",f:function(AMP,_){let l;function m(){return l?l:l=Promise.resolve(void 0)}class n{constructor(){let a,b;this.promise=new Promise((c,d)=>{a=c;b=d});this.resolve=a;this.reject=b}}class p{constructor(){this.c=0;this.P=m();this.N=()=>{};this.O=()=>{}}onQueueEmpty(a){this.N=a;0==this.c&&a()}onQueueNotEmpty(a){this.O=a;0<this.c&&a()}registerUI(a){0==this.c&&this.O();this.c++;let b=this.P.then(()=>a().then(()=>{this.c--;0==this.c&&this.N()}));return this.P=b}}function q(a,b=""){try{return decodeURIComponent(a)}catch(c){return b}}let r=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;let t=self.AMP_CONFIG||{},u=("string"==typeof t.cdnProxyRegex?new RegExp(t.cdnProxyRegex):t.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function v(a){if(self.document&&self.document.head&&(!self.location||!u.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}t.cdnUrl||v("runtime-host");t.geoApiUrl||v("amp-geo-api");function w(a){var b=null;let c="";for(let a=0;a<arguments.length;a++){var d=arguments[a];if(d instanceof Error&&!b)a:{b=d;if((d=Object.getOwnPropertyDescriptor(b,"message"))&&d.writable)break a;d=b.stack;let a=Error(b.message);for(let c in b)a[c]=b[c];a.stack=d;b=a}else c&&(c+=" "),c+=d}b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function x(a){let b=w.apply(null,arguments);setTimeout(()=>{self.__AMP_REPORT_ERROR(b);throw b})}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let y=self.__AMP_LOG;function z(){if(y.dev)return y.dev;throw Error("failed to call initLogConstructor")}function A(a,b,c,d,f){if(!y.user)throw Error("failed to call initLogConstructor");return y.user.assert(a,b,c,d,f,void 0,void 0,void 0,void 0,void 0,void 0)}class B{constructor(a){this.T=a;this.B=this.F=0;this.m=Object.create(null)}has(a){return!!this.m[a]}get(a){let b=this.m[a];if(b)return b.access=++this.B,b.payload}put(a,b){this.has(a)||this.F++;this.m[a]={payload:b,access:this.B};if(!(this.F<=this.T)){a=this.m;var c=this.B+1;for(let b in a){let{access:f}=a[b];if(f<c){c=f;var d=b}}void 0!==d&&(delete a[d],this.F--)}}}let C,D;function E(a,b){A(null!=a,"%s %s must be available",b,"source");var c=a;if("string"==typeof c){C||(C=self.document.createElement("a"),D=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new B(100)));var d=D,f=C;if(d&&d.has(c))c=d.get(c);else{f.href=c;f.protocol||(f.href=f.href);var e={href:f.href,protocol:f.protocol,host:f.host,hostname:f.hostname,port:"0"==f.port?"":f.port,pathname:f.pathname,search:f.search,hash:f.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=f.origin&&"null"!=f.origin?f.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;d&&d.put(c,e);c=e}}(d="https:"==c.protocol||"localhost"==c.hostname||"127.0.0.1"==c.hostname)||(c=c.hostname,d=c.length-10,d=0<=d&&c.indexOf(".localhost",d)==d);A(d||/^(\/\/)/.test(a),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',b,"source",a)}function F(a){let b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(d){}let c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(let b=0;b<c.length;b++)0!=c[b].length&&("-"==c[b][0]?a[c[b].substr(1)]=!1:a[c[b]]=!0);return a}function G(a){let b=a.ownerDocument.defaultView;var c=b.__AMP_TOP||(b.__AMP_TOP=b);let d=b!=c;if(c.__AMP__EXPERIMENT_TOGGLES)var f=c.__AMP__EXPERIMENT_TOGGLES;else{c.__AMP__EXPERIMENT_TOGGLES=Object.create(null);f=c.__AMP__EXPERIMENT_TOGGLES;if(c.AMP_CONFIG)for(var e in c.AMP_CONFIG){var g=c.AMP_CONFIG[e];"number"===typeof g&&0<=g&&1>=g&&(f[e]=Math.random()<g)}if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-doc-opt-in"])&&0<c.AMP_CONFIG["allow-doc-opt-in"].length&&(e=c.AMP_CONFIG["allow-doc-opt-in"],g=c.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){g=g.getAttribute("content").split(",");for(var h=0;h<g.length;h++)-1!=e.indexOf(g[h])&&(f[g[h]]=!0)}Object.assign(f,F(c));if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-url-opt-in"])&&0<c.AMP_CONFIG["allow-url-opt-in"].length){e=c.AMP_CONFIG["allow-url-opt-in"];c=c.location.originalHash||c.location.hash;g=Object.create(null);if(c)for(var k;k=r.exec(c);)h=q(k[1],k[1]),k=k[2]?q(k[2].replace(/\+/g," "),k[2]):"",g[h]=k;c=g;for(g=0;g<e.length;g++)h=c[`e-${e[g]}`],"1"==h&&(f[e[g]]=!0),"0"==h&&(f[e[g]]=!1)}}let R=!!f["ampdoc-fie"];d&&!R?a=H(b,"url-replace")?I(b,"url-replace"):null:(a=J(a),a=K(a),a=H(a,"url-replace")?I(a,"url-replace"):null);return a}function L(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return I(a,b)}function J(a){return a.nodeType?L((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function K(a){a=J(a);return a.isSingleDoc()?a.win:a}function I(a,b){H(a,b);a=M(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function N(a,b){let c=O(a,b);if(c)return c;a=M(a);a[b]=P();return a[b].promise}function O(a,b){let c=M(a)[b];if(c){if(c.promise)return c.promise;I(a,b);return c.promise=Promise.resolve(c.obj)}return null}function M(a){let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function H(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}function P(){let a=new n,b=a.promise,c=a.resolve,d=a.reject;b.catch(()=>{});return{obj:null,promise:b,resolve:c,reject:d,context:null,ctor:null}}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function Q(a){let b=O(K(a),"geo");if(b)return b;let c=J(a);return c.waitForBodyOpen().then(()=>{var a=c.win;var b=c.win.document.head;if(b){var e={};b=b.querySelectorAll("script[custom-element],script[custom-template]");for(let a=0;a<b.length;a++){var g=b[a];g=g.getAttribute("custom-element")||g.getAttribute("custom-template");e[g]=!0}e=Object.keys(e)}else e=[];return e.includes("amp-geo")?L(a,"extensions").waitForExtension(a,"amp-geo"):m()}).then(()=>O(K(a),"geo"))}function S(a,b,c){return Q(a.element).then(a=>{A(a,"requires <amp-geo> to use promptIfUnknownForGeoGroup");let d=b.split(/,\s*/).filter(b=>2==a.isInCountryGroup(b));return!(c?!d.length:d.length)})}function T(a){return N(K(a.element),"cid").then(a=>a.optOut()).then(()=>a.dismiss(!1),b=>{z().error("amp-user-notification","Failed to opt out of Cid",b);a.dismiss(!0)})}function U(a,b){return a.S.expandUrlAsync(a.h).then(c=>{var d={elementId:a.l,ampUserId:b};var f=[];for(var e in d){var g=d[e];if(null!=g)if(Array.isArray(g))for(let a=0;a<g.length;a++){let b=g[a];f.push(`${encodeURIComponent(e)}=${encodeURIComponent(b)}`)}else f.push(`${encodeURIComponent(e)}=${encodeURIComponent(g)}`)}f=f.join("&");f?(d=c.split("#",2),e=d[0].split("?",2),f=e[0]+(e[1]?`?${e[1]}&${f}`:`?${f}`),d=f+=d[1]?`#${d[1]}`:""):d=c;return d})}function V(a){let b=a.element.getAttribute("enctype")||"application/json;charset=utf-8";L(a.win,"xhr").fetchJson(a.j,{method:"POST",credentials:"include",body:{elementId:a.l,ampUserId:a.I},headers:{"Content-Type":b}})}function W(a){return N(K(a.element),"cid").then(b=>b.get({scope:"amp-user-notification",createCookieIfNotPresent:!0},m(),a.J))}class X extends AMP.BaseElement{constructor(a){super(a);this.l=this.I=null;a=new n;this.J=a.promise;this.K=a.resolve;this.j=null;this.D=!1;this.h=this.o=this.A=this.w=null;this.G="";this.S=this.H=null}isAlwaysFixed(){return!0}buildCallback(){let a=this.getAmpDoc();this.S=G(this.element);this.H=N(K(this.element),"storage");this.l=A(this.element.id,"amp-user-notification should have an id.");this.G="amp-user-notification:"+this.l;this.w=this.element.getAttribute("data-show-if-geo");this.A=this.element.getAttribute("data-show-if-not-geo");(this.h=this.element.getAttribute("data-show-if-href"))&&E(this.h,this.element);A(1>=!!this.h+!!this.w+!!this.A,'Only one "data-show-if-*" attribute allowed');this.w&&(this.o=S(this,this.w,!0));this.A&&(this.o=S(this,this.A,!1));(this.j=this.element.getAttribute("data-dismiss-href"))&&E(this.j,this.element);this.element.getAttribute("role")||this.element.setAttribute("role","alert");let b=this.element.getAttribute("data-persist-dismissal");this.D="false"!=b&&"no"!=b;this.registerDefaultAction(()=>this.dismiss(!1),"dismiss");this.registerAction("optoutOfCid",()=>T(this));N(K(a),"userNotificationManager").then(a=>{a.registerUserNotification(this.l,this)})}U(a){this.I=a;return U(this,a).then(a=>L(this.win,"xhr").fetchJson(a,{credentials:"include"}).then(a=>a.json()))}W(a){A("boolean"==typeof a.showNotification,'`showNotification` should be a boolean. Got "%s" which is of type %s.',a.showNotification,typeof a.showNotification);a.showNotification||this.K();return Promise.resolve(a.showNotification)}shouldShow(){return this.isDismissed().then(a=>a?!1:this.h?W(this).then(this.U.bind(this)).then(this.W.bind(this)):this.o?this.o:!0)}show(){var a=this.element,b=!0;void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","");this.element.classList.add("amp-active");this.getViewport().addToFixedLayer(this.element);return this.J}isDismissed(){return this.D?this.H.then(a=>a.get(this.G)).then(a=>!!a,a=>{z().error("amp-user-notification","Failed to read storage",a);return!1}):Promise.resolve(!1)}dismiss(a){this.element.classList.remove("amp-active");this.element.classList.add("amp-hidden");this.K();this.getViewport().removeFromFixedLayer(this.element);this.D&&!a&&this.H.then(a=>{a.set(this.G,!0)});this.j&&V(this)}}function Y(a,b){if(a.C[b])return a.C[b];let c=new n;return a.C[b]={promise:c.promise,resolve:c.resolve}}class Z{constructor(a){this.ampdoc=a;this.R=Object.create(null);this.C=Object.create(null);this.L=this.ampdoc.whenReady();this.M=Promise.all([this.ampdoc.whenFirstVisible(),this.L]);this.V=N(K(this.ampdoc),"notificationUIManager")}get(a){this.M.then(()=>{this.ampdoc.getElementById(a)});return Y(this,a).promise}getNotification(a){return this.L.then(()=>this.R[a])}registerUserNotification(a,b){this.R[a]=b;let c=Y(this,a);return this.M.then(()=>b.shouldShow()).then(a=>{if(a)return this.V.then(a=>a.registerUI(b.show.bind(b)))}).then(c.resolve.bind(this,b)).catch(x.bind(null,"Notification service failed amp-user-notification",a))}}(function(a){a.registerServiceForDoc("userNotificationManager",Z);a.registerServiceForDoc("notificationUIManager",p);a.registerElement("amp-user-notification",X,"amp-user-notification{position:fixed!important;bottom:0;left:0;overflow:hidden!important;visibility:hidden;background:hsla(0,0%,100%,0.7);z-index:1000;width:100%}amp-user-notification.amp-active{visibility:visible}amp-user-notification.amp-hidden{visibility:hidden}\n/*# sourceURL=/extensions/amp-user-notification/0.1/amp-user-notification.css*/")})(self.AMP)}});