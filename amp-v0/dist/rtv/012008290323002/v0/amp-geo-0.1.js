(self.AMP=self.AMP||[]).push({n:"amp-geo",v:"2008290323002",f:(function(AMP,_){
'use strict';var g="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function k(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}k(this);"function"===typeof Symbol&&Symbol("x");var l;
if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var n;a:{var p={a:!0},r={};try{r.__proto__=p;n=r.a;break a}catch(a){}n=!1}l=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=l,u;function v(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function w(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var x=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function y(a){var b=Object.create(null);if(!a)return b;for(var c;c=x.exec(a);){var d=w(c[1],c[1]),f=c[2]?w(c[2].replace(/\+/g," "),c[2]):"";b[d]=f}return b};var z="";
function A(a){var b=a||self;if(b.__AMP_MODE)var c=b.__AMP_MODE;else{c=y(b.location.originalHash||b.location.hash);var d=y(b.location.search);z||(z=b.AMP_CONFIG&&b.AMP_CONFIG.v?b.AMP_CONFIG.v:"012008290323002");c={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(c.development)||b.AMP_DEV_MODE),examiner:"2"==c.development,esm:!1,geoOverride:c["amp-geo"],minified:!0,lite:void 0!=d.amp_lite,test:!1,log:c.log,version:"2008290323002",rtvVersion:z};c=b.__AMP_MODE=c}return c}
;var B=Object.prototype.toString;var C=self.AMP_CONFIG||{},D=("string"==typeof C.cdnProxyRegex?new RegExp(C.cdnProxyRegex):C.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function G(a){if(!self.document||!self.document.head||self.location&&D.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}
var H={thirdParty:C.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:C.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof C.thirdPartyFrameRegex?new RegExp(C.thirdPartyFrameRegex):C.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:C.cdnUrl||G("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:D,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:C.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:C.betaErrorReportingUrl||
"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:C.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:C.geoApiUrl||G("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var I=self.__AMP_LOG;function J(){if(!I.user)throw Error("failed to call initLogConstructor");return I.user}function K(){if(I.dev)return I.dev;throw Error("failed to call initLogConstructor");};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0});function L(a){return!(!a.AMP_CONFIG||!a.AMP_CONFIG.canary)}function M(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(f){K().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function N(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c;if(c.__AMP__EXPERIMENT_TOGGLES)var f=c.__AMP__EXPERIMENT_TOGGLES;else{c.__AMP__EXPERIMENT_TOGGLES=Object.create(null);f=c.__AMP__EXPERIMENT_TOGGLES;if(c.AMP_CONFIG)for(var h in c.AMP_CONFIG){var e=c.AMP_CONFIG[h];"number"===typeof e&&0<=e&&1>=e&&(f[h]=Math.random()<e)}if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-doc-opt-in"])&&0<c.AMP_CONFIG["allow-doc-opt-in"].length&&(h=c.AMP_CONFIG["allow-doc-opt-in"],e=
c.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=e.getAttribute("content").split(",");for(var m=0;m<e.length;m++)-1!=h.indexOf(e[m])&&(f[e[m]]=!0)}Object.assign(f,M(c));if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-url-opt-in"])&&0<c.AMP_CONFIG["allow-url-opt-in"].length)for(h=c.AMP_CONFIG["allow-url-opt-in"],c=y(c.location.originalHash||c.location.hash),e=0;e<h.length;e++)m=c["e-"+h[e]],"1"==m&&(f[h[e]]=!0),"0"==m&&(f[h[e]]=!1)}var q=!!f["ampdoc-fie"];d&&!q?a=O(b,"url")?
P(b,"url"):null:(a=Q(a),a=Q(a),a=a.isSingleDoc()?a.win:a,a=O(a,"url")?P(a,"url"):null);return a}function R(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return P(a,b)}function Q(a){return a.nodeType?R((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function P(a,b){O(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function O(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function aa(a){return"SCRIPT"==a.tagName&&a.hasAttribute("type")&&"APPLICATION/JSON"==a.getAttribute("type").toUpperCase()};var S={"preset-eea":"AT BE BG HR CY CZ DK EE FI FR DE GR HU IS IE IT LV LI LT LU MT NL NO PL PT RO SK SI ES SE GB AX IC EA GF PF TF GI GP GG JE MQ YT NC RE BL MF PM SJ VA WF EZ CH".split(" "),"preset-us-ca":["us-ca"]};function ba(a,b){try{return JSON.parse(a)}catch(c){return b&&b(c),null}};var ca=/amp-iso-country-(\w+)/,T=/^(?:(\w{2})(?:\s(\w{2}-\w{2}))?)?\s*/;function U(a){a=AMP.BaseElement.call(this,a)||this;a.l=0;a.w=!1;a.h="unknown";a.o="unknown";a.j=[];a.m=[];return a}var V=AMP.BaseElement;U.prototype=g(V.prototype);U.prototype.constructor=U;if(t)t(U,V);else for(var W in V)if("prototype"!=W)if(Object.defineProperties){var X=Object.getOwnPropertyDescriptor(V,W);X&&Object.defineProperty(U,W,X)}else U[W]=V[W];U.A=V.prototype;U.prototype.prerenderAllowed=function(){return!0};
U.prototype.buildCallback=function(){var a=this.element.children;a.length&&Y(1===a.length&&aa(a[0]),'amp-geo can only have one <script type="application/json"> child');a=a.length?ba(a[0].textContent,function(){return Y(!1,"amp-geo Unable to parse JSON")}):{};var b=da(this,a||{});Z.resolve(b)};function Y(a,b){return a?a:(Z.resolve(null),J().assert(a,b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0))}
function ea(a,b){var c=b.getBody().className.match(ca),d=T.exec("{{AMP_ISO_COUNTRY_HOTPATCH}}");if(A(a.win).geoOverride&&L(a.win)){var f=T.exec(A(a.win).geoOverride.toLowerCase());f[1]&&(a.h=f[1].toLowerCase(),f[2]&&(a.o=f[2].toLowerCase()),a.l=2)}else c&&!N(a.element).isProxyOrigin(a.win.location)?(a.l=1,a.h=c[1]):d[1]?(a.l=0,a.h=d[1].toLowerCase(),d[2]&&"us-ca"===d[2].toLowerCase()&&(a.o="us-ca")):""===d[0]&&H.geoApi?a.l=3:""===d[0]&&(a.w=!0,K().error("amp-geo","GEONOTPATCHED: amp-geo served unpatched, ISO country not set"));
3!==a.l?(u||(u=Promise.resolve(void 0)),b=u):b=fa(a).then(function(c){if(c){var b=c.country,d=c.subdivision;a.h=b;d&&"us-ca"===b+"-"+d&&(a.o="us-ca")}else a.w=!0,K().error("amp-geo","GEONOTPATCHED: amp-geo served unpatched and API response not valid, ISO country not set")});return b}function ha(a){var b=H.geoApi;return"string"!==typeof b?(J().error("amp-geo","geoApiUrl must be a string URL"),null):N(a.element).isSecure(b)?b:(J().error("amp-geo","geoApiUrl must be secure (https)"),null)}
function fa(a){var b=ha(a);if(!b)return Promise.resolve(null);J().info("amp-geo","API request is being used for country, this may result in FOUC");return R(a.win,"timer").timeoutPromise(6E4,R(a.win,"xhr").fetchJson(b,{mode:"cors",method:"GET",credentials:"omit"}).then(function(a){return a.json()}).then(function(a){return/^[a-z]{2}$/i.test(a.country)?{country:a.country.toLowerCase(),subdivision:/^[a-z0-9]{1,3}$/i.test(a.subdivision)?a.subdivision.toLowerCase():null}:(J().error("amp-geo",'Invalid API response, expected schema not matched for property "country"'),
null)}).catch(function(a){J().error("amp-geo","XHR country request failed",a);return null}),"Timeout (60 sec) reached waiting for API response").catch(function(a){J().error("amp-geo",a);return null})}
function ia(a,b){var c=b.ISOCountryGroups;c&&(Y("[object Object]"===B.call(c),"<amp-geo> ISOCountryGroups must be an object"),a.m=Object.keys(c),a.m.forEach(function(b){Y(/^[a-z]+[a-z0-9]*$/i.test(b)&&!/^amp/.test(b),"<amp-geo> ISOCountryGroups["+b+"] name is invalid");Y(Array.isArray(c[b]),"<amp-geo> ISOCountryGroups["+b+"] must be an array");ja(a,c[b])&&a.j.push(b)}))}
function ja(a,b){var c=b.reduce(function(a,b){if(/^preset-/.test(b))return Y(Array.isArray(S[b]),"<amp-geo> preset "+b+" not found"),a.concat(S[b]);"unknown"==b||/^[a-zA-Z]{2}$/.test(b)?a.push(b):J().error("amp-geo"," country %s not valid, will be ignored",b);return a},[]).map(function(a){return a.toLowerCase()});return c.includes(a.h)||c.includes("us-ca")&&"us-ca"==a.o}
function ka(a){var b=a.classList,c=[],d=/^amp-iso-country-|^amp-geo-group-/i;for(a=b.length-1;0<a;a--)d.test(b[a])&&c.push(b[a]);return c}
function da(a,b){var c=a.getAmpDoc(),d={};return c.whenReady().then(function(){return c.waitForBodyOpen()}).then(function(b){return ea(a,c).then(function(){return b})}).then(function(f){ia(a,b);var h=[];switch(a.l){case 2:h=ka(f);case 0:case 3:d.ISOCountry=a.h;var e=a.j.map(function(a){d[a]=!0;return"amp-geo-group-"+a});a.j.length||e.push("amp-geo-no-group");a.w&&e.push("amp-geo-error");d.ISOCountryGroups=a.j;e.push("amp-iso-country-"+a.h);a.mutateElement(function(){var a=f.classList;h.push("amp-geo-pending");
h.forEach(function(b){a.remove(b)});e.forEach(function(b){return a.add(b)});if(b.AmpBind){var q=c.getElementById("ampGeo");q&&q.parentNode.removeChild(q);var E=c.win.document.createElement("amp-state"),F=c.win.document.createElement("script");F.setAttribute("type","application/json");F.textContent=JSON.stringify(d);E.appendChild(F);E.id="ampGeo";f.appendChild(E)}},f)}return{ISOCountry:a.h,matchedISOCountryGroups:a.j,allISOCountryGroups:a.m,isInCountryGroup:a.isInCountryGroup.bind(a)}})}
U.prototype.isInCountryGroup=function(a){var b=this,c=a.trim().split(/,\s*/);return c.filter(function(a){return 0<=b.m.indexOf(a)}).length!==c.length?1:0<c.filter(function(a){return 0<=b.j.indexOf(a)}).length?2:3};var Z=null;(function(a){Z=new v;a.registerElement("amp-geo",U);a.registerServiceForDoc("geo",function(){return Z.promise})})(self.AMP);
})});

//# sourceMappingURL=amp-geo-0.1.js.map