(self.AMP=self.AMP||[]).push({n:"amp-apester-media",v:"2007102309000",f:(function(AMP,_){
var m,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var p;
if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var r;a:{var ca={a:!0},t={};try{t.__proto__=ca;r=t.a;break a}catch(a){}r=!1}p=r?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var u=p;function da(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function v(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ea=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function fa(a){return a?Array.prototype.slice.call(a):[]}function w(a){return"number"===typeof a&&isFinite(a)};var x=self.AMP_CONFIG||{},ha=("string"==typeof x.cdnProxyRegex?new RegExp(x.cdnProxyRegex):x.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function y(a){if(self.document&&self.document.head&&(!self.location||!ha.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}x.cdnUrl||y("runtime-host");x.geoApiUrl||y("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var z=self.__AMP_LOG;function A(){if(z.dev)return z.dev;throw Error("failed to call initLogConstructor");};var ia=Object.prototype.hasOwnProperty;function B(a){return a||{}};function C(){this.fa=100;this.L=this.W=0;this.D=Object.create(null)}C.prototype.has=function(a){return!!this.D[a]};C.prototype.get=function(a){var b=this.D[a];if(b)return b.access=++this.L,b.payload};C.prototype.put=function(a,b){this.has(a)||this.W++;this.D[a]={payload:b,access:this.L};if(!(this.W<=this.fa)){A().warn("lru-cache","Trimming LRU cache");a=this.D;var c=this.L+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.W--)}};B({c:!0,v:!0,a:!0,ad:!0,action:!0});var D,E;
function ja(a){D||(D=self.document.createElement("a"),E=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new C));var b=E,c=D;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a}function F(a,b){if(!b)return a;var c=a.split("#",2),d=c[0].split("?",2),e=d[0]+(d[1]?"?"+d[1]+"&"+b:"?"+b);return e+=c[1]?"#"+c[1]:""}
function ka(a){var b=[],c;for(c in a){var d=a[c];if(null!=d)if(Array.isArray(d))for(var e=0;e<d.length;e++){var f=d[e];b.push(encodeURIComponent(c)+"="+encodeURIComponent(f))}else e=d,b.push(encodeURIComponent(c)+"="+encodeURIComponent(e))}return b.join("&")};function la(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var e=a.AMP_CONFIG["allow-doc-opt-in"],f=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
if(f){var g=f.getAttribute("content").split(",");for(c=0;c<g.length;c++)-1!=e.indexOf(g[c])&&(b[g[c]]=!0)}}Object.assign(b,ma(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];var h=a.location.originalHash||a.location.hash;a=Object.create(null);if(h)for(var l;l=ea.exec(h);){var k=v(l[1],l[1]);l=l[2]?v(l[2].replace(/\+/g," "),l[2]):"";a[k]=l}for(h=0;h<c.length;h++)k=a["e-"+c[h]],"1"==k&&(b[c[h]]=!0),"0"==
k&&(b[c[h]]=!1)}return b}function ma(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){A().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var na=[{experimentId:"ampdoc-fie",isTrafficEligible:function(){return!0},branches:["21065001","21065002"]}];function G(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return H(a,b)}function I(a,b){var c=J(a);c=K(c);return H(c,b)}function J(a){return a.nodeType?G((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function K(a){a=J(a);return a.isSingleDoc()?a.win:a}function H(a,b){L(a,b);a=M(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function oa(a){var b=M(a).consentPolicyManager;if(b){if(b.promise)return b.promise;H(a,"consentPolicyManager");return b.promise=Promise.resolve(b.obj)}return null}function M(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function L(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}function pa(){var a=new da,b=a.promise,c=a.resolve;a=a.reject;b.catch(function(){});return{obj:null,promise:b,resolve:c,reject:a,context:null,ctor:null}};var N;function qa(){return N?N:N=Promise.resolve(void 0)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ra(a){a.parentElement&&a.parentElement.removeChild(a)}function sa(a,b){a=a.createElement("amp-ad");for(var c in b)a.setAttribute(c,b[c]);return a};function ta(a){var b=oa(K(a));if(b)return b;var c=J(a);return c.waitForBodyOpen().then(function(){var a=c.win;var b=c.win.document.head;if(b){var f={};b=b.querySelectorAll("script[custom-element],script[custom-template]");for(var g=0;g<b.length;g++){var h=b[g];h=h.getAttribute("custom-element")||h.getAttribute("custom-template");f[h]=!0}f=Object.keys(f)}else f=[];return f.includes("amp-consent")?G(a,"extensions").waitForExtension(a,"amp-consent"):qa()}).then(function(){var b=c.win;if(b.__AMP_EXTENDED_ELEMENTS&&
b.__AMP_EXTENDED_ELEMENTS["amp-consent"]){b=K(a);var e=oa(b);e?b=e:(b=M(b),b.consentPolicyManager=pa(),b=b.consentPolicyManager.promise)}else b=null;return b})};function O(a,b){var c=this;this.ca=G(a,"timer");this.ja=b;this.ga=0;this.C=-1;this.S=0;this.U=!1;this.ea=function(){c.C=-1;c.S=0;c.U=!0;c.ja();c.U=!1}}O.prototype.isPending=function(){return-1!=this.C};O.prototype.schedule=function(a){var b=a||this.ga;this.U&&10>b&&(b=10);var c=Date.now()+b;return!this.isPending()||-10>c-this.S?(this.cancel(),this.S=c,this.C=this.ca.delay(this.ea,b),!0):!1};O.prototype.cancel=function(){this.isPending()&&(this.ca.cancel(this.C),this.C=-1)};var P;function ua(a,b){var c=a,d=b;var e=function(a){try{return d(a)}catch(h){throw self.__AMP_REPORT_ERROR(h),h;}};var f=va();c.addEventListener("message",e,f?void 0:!1);return function(){c&&c.removeEventListener("message",e,f?void 0:!1);e=c=d=null}}function va(){if(void 0!==P)return P;P=!1;try{var a={get capture(){P=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return P};function Q(a,b){if("."==b)return a;b=b.split(".");for(var c=0;c<b.length;c++){var d=b[c];if(d&&a&&void 0!==a[d]&&(null==a||"object"!=typeof a?0:Object.prototype.hasOwnProperty.call(a,d)))a=a[d];else{a=void 0;break}}return a}function wa(a,b){try{return JSON.parse(a)}catch(c){return b&&b(c),null}};function xa(a){if(!ya(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(c){return A().error("MESSAGING","Failed to parse message: "+a,c),null}}function ya(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};function za(a,b){return ua(a,b)};function Aa(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d)};var R,Ba="Webkit webkit Moz moz ms O o".split(" ");function Ca(a,b,c){var d=a.listeningFors;!d&&c&&(d=a.listeningFors=Object.create(null));a=d||null;if(!a)return a;var e=a[b];!e&&c&&(e=a[b]=[]);return e||null}function Da(a,b,c){var d=c?b.getAttribute("data-amp-3p-sentinel"):"amp";a=Ca(a,d,!0);for(d=0;d<a.length;d++){var e=a[d];if(e.frame===b){var f=e;break}}f||(f={frame:b,events:Object.create(null)},a.push(f));return f.events}
function Ea(a){for(var b=B({sentinel:"unlisten"}),c=a.length-1;0<=c;c--){var d=a[c];if(!d.frame.contentWindow){a.splice(c,1);var e=d.events,f;for(f in e)e[f].splice(0,Infinity).forEach(function(a){a(b)})}}}
function Fa(a){a.listeningFors||a.addEventListener("message",function(b){if(b.data){var c=Ga(b.data);if(c&&c.sentinel){var d=b.source;var e=Ca(a,c.sentinel);if(e){for(var f,g=0;g<e.length;g++){var h=e[g],l=h.frame.contentWindow;if(l){var k;if(!(k=d==l))b:{for(k=d;k&&k!=k.parent;k=k.parent)if(k==l){k=!0;break b}k=!1}if(k){f=h;break}}else setTimeout(Ea,0,e)}d=f?f.events:null}else d=e;var n=d;if(n){var q=n[c.type];if(q)for(q=q.slice(),d=0;d<q.length;d++)(0,q[d])(c,b.source,b.origin,b)}}}})}
function Ha(a,b,c,d){function e(c,e,f,h){if("amp"==c.sentinel){if(e!=a.contentWindow)return;var k="null"==f&&void 0;if(g!=f&&!k)return}if(d||e==a.contentWindow)"unlisten"==c.sentinel?l():b(c,e,f,h)}var f=a.ownerDocument.defaultView;Fa(f);c=Da(f,a,c);var g=ja(a.src).origin,h=c["send-intersections"]||(c["send-intersections"]=[]),l;h.push(e);return l=function(){if(e){var a=h.indexOf(e);-1<a&&h.splice(a,1);b=h=e=null}}}
function Ia(a,b,c,d,e){if(a.contentWindow)for(d.type=c,d.sentinel=e?a.getAttribute("data-amp-3p-sentinel"):"amp",a=d,e&&(a="amp-"+JSON.stringify(d)),d=0;d<b.length;d++)e=b[d],e.win.postMessage(a,e.origin)}function Ga(a){"string"==typeof a&&(a="{"==a.charAt(0)?wa(a,function(a){A().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",a)})||null:ya(a)?xa(a):null);return a}
function S(a,b){var c=this;this.h=a;this.N=!1;this.w=[];this.na=Ha(this.h,function(a,e,f){c.w.some(function(a){return a.win==e})||c.w.push({win:e,origin:f});b(a,e,f)},this.N,this.N)}S.prototype.send=function(a,b){Aa(this.w,function(a){return!a.win.parent});Ia(this.h,this.w,a,b,this.N)};S.prototype.destroy=function(){this.na();this.w.length=0};function T(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function Ja(a){for(var b=-Infinity,c=Infinity,d=-Infinity,e=Infinity,f=0;f<arguments.length;f++){var g=arguments[f];if(g&&(b=Math.max(b,g.left),c=Math.min(c,g.left+g.width),d=Math.max(d,g.top),e=Math.min(e,g.top+g.height),c<b||e<d))return null}return Infinity==c?null:T(b,d,c-b,e-d)}function U(a,b,c){return 0==b&&0==c||0==a.width&&0==a.height?a:T(a.left+b,a.top+c,a.width,a.height)};var Ka=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1],La=Date.now();function V(a,b){var c=this;this.M=a;this.m=null;this.O=this.V=!1;this.I=null;this.K=a.getViewport();this.X=new S(b,function(){Ma(c)});this.m=new Na(function(a){for(var b=0;b<a.length;b++)delete a[b].target;c.X.send("intersection",B({changes:a}))});this.m.tick(this.K.getRect());this.fire=function(){c.V&&c.O&&c.m.tick(c.K.getRect())}}
function Ma(a){a.V=!0;a.m.observe(a.M.element);a.M.getVsync().measure(function(){a.O=a.M.isInViewport();a.fire()});var b=a.K.onScroll(a.fire),c=a.K.onChanged(a.fire);a.I=function(){b();c()}}V.prototype.onViewportCallback=function(a){this.O=a};V.prototype.destroy=function(){this.V=!1;this.m.disconnect();this.m=null;this.I&&(this.I(),this.I=null);this.X.destroy();this.X=null};
function Na(a){var b={threshold:Ka};this.Y=a;var c=b&&b.threshold;c=c?Array.isArray(c)?c:[c]:[0];for(a=0;a<c.length;a++)w(c[a]);this.ma=c.sort();this.P=null;this.j=[];this.o=this.B=null}m=Na.prototype;m.disconnect=function(){this.j.length=0;Oa(this)};
m.observe=function(a){for(var b=0;b<this.j.length;b++)if(this.j[b].element===a){A().warn("INTERSECTION-OBSERVER","should observe same element once");return}var c={element:a,currentThresholdSlot:0};this.P&&(b=Pa(this,c,this.P))&&this.Y([b]);b=J(a);if(b.win.MutationObserver&&!this.B){this.o=new O(b.win,this.ia.bind(this,a));b=a.ownerDocument.defaultView;var d=b.__AMP_TOP||(b.__AMP_TOP=b),e=b!=d;if(la(d)["ampdoc-fie"]){d.__AMP_EXPERIMENT_BRANCHES=d.__AMP_EXPERIMENT_BRANCHES||{};for(var f=0;f<na.length;f++){var g=
na[f],h=g.experimentId;ia.call(d.__AMP_EXPERIMENT_BRANCHES,h)||(g.isTrafficEligible&&g.isTrafficEligible(d)?!d.__AMP_EXPERIMENT_BRANCHES[h]&&la(d)[h]&&(g=g.branches,d.__AMP_EXPERIMENT_BRANCHES[h]=g[Math.floor(Math.random()*g.length)]||null):d.__AMP_EXPERIMENT_BRANCHES[h]=null)}d="21065002"===(d.__AMP_EXPERIMENT_BRANCHES?d.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else d=!1;e&&!d?a=L(b,"hidden-observer")?H(b,"hidden-observer"):null:(a=J(a),a=K(a),a=L(a,"hidden-observer")?H(a,"hidden-observer"):
null);this.B=a.add(this.ha.bind(this))}this.j.push(c)};m.unobserve=function(a){for(var b=0;b<this.j.length;b++)if(this.j[b].element===a){this.j.splice(b,1);0>=this.j.length&&Oa(this);return}A().warn("INTERSECTION-OBSERVER","unobserve non-observed element")};m.tick=function(a){this.P=a;for(var b=[],c=0;c<this.j.length;c++){var d=Pa(this,this.j[c],a);d&&b.push(d)}b.length&&this.Y(b)};
function Pa(a,b,c){var d=b.element,e=d.getLayoutBox(),f=d.getOwner(),g=f&&f.getLayoutBox(),h=Ja(e,g,c)||T(0,0,0,0);f=h.width*h.height;var l=e.width*e.height;f=0===l?0:f/l;a=a.ma;l=0;var k=a.length;if(0==f)a=0;else{for(var n=(l+k)/2|0;l<n;)f<a[n]?k=n:l=n,n=(l+k)/2|0;a=k}var q=a;if(q==b.currentThresholdSlot)return null;b.currentThresholdSlot=q;a=h;l=e;if(k=c)a=U(a,-c.left,-c.top),l=U(l,-c.left,-c.top),k=U(k,-c.left,-c.top);return{time:"undefined"!==typeof performance&&performance.now?performance.now():
Date.now()-La,rootBounds:k,boundingClientRect:l,intersectionRect:a,intersectionRatio:f,target:d}}m.ha=function(){this.o.isPending()||this.o.schedule(16)};m.ia=function(a){var b=this,c=I(a,"viewport");I(a,"resources").onNextPass(function(){b.tick(c.getRect())})};function Oa(a){a.B&&a.B();a.B=null;a.o&&a.o.cancel();a.o=null};var Qa=/(WebView|(iPhone|iPod|iPad)(?!.*Safari)|Android.*(wv|.0.0.0)|Linux; U; Android)/ig;
function Ra(){var a=!!navigator.userAgent.match(Qa);var b=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,
4))?"mobile"+(a?"-webview":""):"desktop"}function Sa(a){var b=a&&a.getAttribute("data-apester-tags");return b?b.split(",").map(function(a){return a.trim()})||[]:[]}
function Ta(a){return fa(a.querySelectorAll('script[type="application/ld+json"]')).map(function(a){var b;if(b=a)b="SCRIPT"==a.tagName&&"APPLICATION/LD+JSON"==a.getAttribute("type").toUpperCase();return b?wa(a.textContent)||{}:{}}).map(function(a){return a&&a.headline}).filter(function(a){return"string"===typeof a}).map(function(a){return a.trim().split(" ").filter(function(a){return 2<a.length})}).reduce(function(a,c){return a.concat(c)},[]).slice(0,5)}
function Ua(a){return(a.getMetaByName("keywords")||"").split(",").map(function(a){return a.trim()}).filter(function(a){return a})}function Va(a,b){var c=Sa(b)||[],d=Ua(a);return c.concat(d.length?d:Ta(a.getRootNode())||[]).map(function(a){return a.toLowerCase().trim()}).filter(function(a,b,c){return c.indexOf(a)===b})}function W(a,b,c,d,e){c=za(c,function(c){var e=d.contentWindow===c.source;c.data.type===a&&e&&b(c.data)});e.push(c)};function Wa(a){a=parseFloat(a);return w(a)?a:void 0};function Xa(a){var b=void 0===b?"default":b;return ta(a).then(function(a){return a?a.whenPolicyResolved(b):null})}function Ya(a){return ta(a).then(function(a){return a?a.getConsentStringInfo("default"):null})};function Za(){return new Promise(function(a){setTimeout(function(){a([4,void 0])},3E3)})}
function $a(a){var b=Xa(a).catch(function(a){A().error("amp-apester-media","Error determining consent state",a);return 4}),c=Ya(a).catch(function(a){A().error("amp-apester-media","Error determining consent string",a)}),d=Promise.all([b,c]);return Promise.race([d,Za()]).then(function(a){var b=a[1];switch(a[0]){case 1:return B({gdpr:1,user_consent:1,gdprString:b});case 2:case 4:return B({gdpr:1,user_consent:0,gdprString:b});default:return{}}})};function ab(a,b,c){var d=Math.max.apply(null,b.map(function(a){return a[0]})),e=Math.max.apply(null,b.map(function(a){return a[1]})),f=b.map(function(a){return a.join("x")}).join(),g=sa(c.ownerDocument,B({width:""+d,height:"0",type:"doubleclick",layout:"fixed","data-slot":""+a,"data-multi-size-validation":"false","data-multi-size":f}));g.classList.add("amp-apester-companion");c.parentNode.insertBefore(g,c.nextSibling);I(c,"mutator").requestChangeSize(g,e,void 0)};function bb(a,b){var c=a.campaignData;c&&!c.disabledAmpCompanionAds?$a(b).then(function(c){var d=Q(a,"campaignData.companionOptions");if(d){var f=Q(d,"enabled");d=Q(d,"settings");f&&d&&"gdt"===d.bannerAdProvider&&(f=[[300,250]],ab(d.slot,d.bannerSizes||f,b))}var g=Q(a,"campaignData.companionCampaignOptions");f=(d=Q(a,"campaignData.companionOptions.video"))?d.companion.enabled?"above":d.companion_below.enabled?"below":d.floating.enabled?"floating":null:null;if(g&&d&&d.enabled&&"sr"===d.provider&&f&&
"floating"!==f){var h=g.companionCampaignId,l=a.interactionId,k=a.publisherId;g=a.publisher;var n=I(b,"documentInfo").get().canonicalUrl;h=B({param1:l,param2:k,param6:h,page_url:n});c.gdpr&&(h.gdpr=c.gdpr,h.user_consent=c.user_consent,h.param4=c.gdprString);g&&g.groupId&&(h.param7="apester.com:"+g.groupId,h.schain="1.0,1!apester.com,"+g.groupId+",1,,,,");g=d.videoTag;l=b.clientWidth;d=Math.ceil(.6*l);g=sa(b.ownerDocument,B({width:l,height:"0",type:"blade",layout:"fixed","data-blade_player_type":"bladex",
servingDomain:"ssr.streamrail.net","data-blade_macros":JSON.stringify(h),"data-blade_player_id":g,"data-blade_api_key":"5857d2ee263dc90002000001"}));g.classList.add("amp-apester-companion");b.parentNode.insertBefore(g,"below"===f?b.nextSibling:b);I(b,"mutator").requestChangeSize(g,d,void 0)}}):qa()};function X(a){a=AMP.BaseElement.call(this,a)||this;a.aa="https://renderer.apester.com";a.Z="https://display.apester.com";a.la="https://static.qmerce.com";a.ka="https://static.apester.com/js/assets/loader_100x100.gif";a.ba=!1;a.h=null;a.H=null;a.$=!1;a.da=null;a.F=null;a.T=!1;a.R=null;a.A={};a.G=null;a.J=[];a.l=null;return a}var Y=AMP.BaseElement;X.prototype=aa(Y.prototype);X.prototype.constructor=X;
if(u)u(X,Y);else for(var Z in Y)if("prototype"!=Z)if(Object.defineProperties){var cb=Object.getOwnPropertyDescriptor(Y,Z);cb&&Object.defineProperty(X,Z,cb)}else X[Z]=Y[Z];X.oa=Y.prototype;m=X.prototype;m.preconnectCallback=function(a){var b=G(this.win,"preconnect");b.url(this.getAmpDoc(),this.Z,a);b.url(this.getAmpDoc(),this.aa,a);b.url(this.getAmpDoc(),this.la,a)};
m.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};m.viewportCallback=function(a){if(this.l)this.l.onViewportCallback(a);a&&!this.ba&&this.h&&this.h.contentWindow&&(A().fine("amp-apester-media","media seen"),this.ba=!0,this.h.contentWindow.postMessage("interaction seen","*"));this.getPlaceholder()&&!this.$&&this.togglePlaceholder(a)};
m.buildCallback=function(){var a=this.element.getAttribute("width"),b=this.element.getAttribute("height");this.da=Wa(a);this.F=Wa(b);this.T=this.element.hasAttribute("data-apester-channel-token");a=this.element.getAttribute("data-apester-media-id")||this.element.getAttribute("data-apester-channel-token");b=this.element;if(!z.user)throw Error("failed to call initLogConstructor");this.R=z.user.assert(a,"Either the data-apester-media-id or the data-apester-channel-token attributes must be specified for <amp-apester-media> %s",
b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);this.A={playlist:this.T,idOrToken:this.R,inative:"true"===this.element.getAttribute("data-apester-inative"),fallback:this.element.getAttribute("data-apester-fallback"),distributionChannelId:this.element.getAttribute("data-apester-channel-id"),renderer:!0,tags:Va(this.getAmpDoc(),this.element)}};m.firstLayoutCompleted=function(){this.viewportCallback(this.isInViewport())};m.onLayoutMeasure=function(){this.l&&this.l.fire()};
function db(a){var b=a.A,c=b.idOrToken,d=b.playlist,e=b.inative,f=b.distributionChannelId,g=b.fallback,h=b.tags,l=encodeURIComponent(a.R);b="";var k={renderer:!1};k.platform=Ra();e?c?b="/inatives/"+c:f&&(b="/channels/"+f+"/inatives"):d&&h?(b="/tokens/"+l+"/interactions/random",k.tags=h,k.fallback=!!g):b=d?"/tokens/"+l+"/interactions/random":"/interactions/"+l+"/display";return F(""+a.Z+b,ka(k))}
function eb(a){var b=db(a);return G(a.win,"xhr").fetchJson(b,{}).then(function(a){return 200===a.status?a.json():a})}function fb(a,b,c){var d={};d.channelId=a.A.distributionChannelId;d.type=a.A.playlist?"playlist":"editorial";d.platform=Ra();d.cannonicalUrl=I(a.element,"documentInfo").get().canonicalUrl;d.sdk="amp";a=a.aa+"/"+(c?"v2":"interaction")+"/"+encodeURIComponent(b);return F(a,ka(d))}
function gb(a,b){var c=a.element.ownerDocument.createElement("iframe");c.setAttribute("frameborder","0");c.setAttribute("allowtransparency","true");c.setAttribute("scrolling","no");c.src=b;c.name=a.win.location.href;c.height=a.F;c.width=a.da;c.classList.add("amp-apester-iframe");a.applyFillContent(c);return c}
m.layoutCallback=function(){var a=this;this.element.classList.add("amp-apester-container");var b=G(this.win,"vsync");return eb(this).then(function(c){if(!c||204===c.status)return A().warn("amp-apester-media","Display","No Content for provided tag"),a.unlayoutCallback();c=c.payload;var d=a.A.playlist?c[Math.floor(Math.random()*c.length)]:c;c=d.interactionId;var e=fb(a,c,d.usePlayer),f=gb(a,e);a.l=new V(a,f);a.G=c;a.h=f;hb(a);return b.mutatePromise(function(){var b=a.element.ownerDocument.createElement("div");
b.setAttribute("overflow","");b.className="amp-apester-overflow";var c=a.element.ownerDocument.createElement("button");c.textContent="Full Size";b.appendChild(c);a.element.appendChild(b);a.element.appendChild(f);bb(d,a.element)}).then(function(){return a.loadPromise(f).then(function(){return b.mutatePromise(function(){a.h&&(a.h.classList.add("i-amphtml-apester-iframe-ready"),d.campaignData&&a.h.contentWindow.postMessage({type:"campaigns",data:d.campaignData},"*"));a.togglePlaceholder(!1);a.$=!0;var b=
0;d&&d.data&&d.data.size&&(b=d.data.size.height);b!=a.F&&(a.F=b,a.T?a.attemptChangeHeight(b):a.forceChangeHeight(b))})})}).catch(function(a){A().error("amp-apester-media","Display",a)})},function(a){A().error("amp-apester-media","Display",a)})};
m.createPlaceholderCallback=function(){var a=this.element.ownerDocument.createElement("div"),b=this.element.ownerDocument.createElement("amp-img");b.setAttribute("src",this.ka);b.setAttribute("layout","fixed");b.setAttribute("width","100");b.setAttribute("height","100");this.element.hasAttribute("aria-label")?a.setAttribute("aria-label","Loading - "+this.element.getAttribute("aria-label")):a.setAttribute("aria-label","Loading Apester Media");a.setAttribute("placeholder","");a.className="amp-apester-loader";
var c={top:"50%",left:"50%",transform:"translate(-50%, -50%)"},d;for(d in c){var e=b,f=c[d];var g=e.style;var h=d;if(2>h.length?0:0==h.lastIndexOf("--",0))g=h;else{R||(R=Object.create(null));var l=R[h];if(!l){l=h;if(void 0===g[h]){var k=h;k=k.charAt(0).toUpperCase()+k.slice(1);b:{for(var n=0;n<Ba.length;n++){var q=Ba[n]+k;if(void 0!==g[q]){k=q;break b}}k=""}void 0!==g[k]&&(l=k)}R[h]=l}g=l}g&&((2>g.length?0:0==g.lastIndexOf("--",0))?e.style.setProperty(g,f):e.style[g]=f)}a.appendChild(b);return this.H=
a};m.unlayoutOnPause=function(){return!0};m.unlayoutCallback=function(){this.h&&(this.l.destroy(),this.l=null,this.J.forEach(function(a){return a()}),ra(this.h),this.h=null);this.H&&(ra(this.H),this.H=null);return!1};
function hb(a){W("fullscreen_on",function(b){a.G===b.id&&a.element.classList.add("amp-apester-fullscreen")},a.win,a.h,a.J);W("fullscreen_off",function(b){a.G===b.id&&a.element.classList.remove("amp-apester-fullscreen")},a.win,a.h,a.J);W("apester_resize_unit",function(b){a.G===b.id&&b.height&&a.attemptChangeHeight(b.height)},a.win,a.h,a.J)}(function(a){a.registerElement("amp-apester-media",X,".amp-apester-iframe{transition:opacity 0.4s;opacity:0}.i-amphtml-apester-iframe-ready{transition:opacity 1s ease-out;opacity:1!important}.amp-apester-loader{height:100%;width:100%;background-color:#fff}.amp-apester-container{max-width:700px;margin:0 auto;display:block;position:relative;width:100%}.amp-apester-overflow{position:absolute;margin:auto;top:50%;left:50%;transform:translate(-50%,-50%)}.amp-apester-overflow button{border:none;background:#fff;cursor:pointer;padding:25px 80px;text-transform:uppercase;letter-spacing:1px;font-weight:700;outline:none;position:relative}.amp-apester-fullscreen{background:rgba(34,36,38,0.97)!important;position:fixed!important;width:100vw!important;height:100vh!important;z-index:2147483646!important;top:0;zoom:1;-webkit-overflow-scrolling:touch!important}.amp-apester-companion{display:block;margin:10px auto}\n/*# sourceURL=/extensions/amp-apester-media/0.1/amp-apester-media.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-apester-media-0.1.js.map