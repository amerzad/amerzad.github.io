(self.AMP=self.AMP||[]).push({n:"amp-smartlinks",v:"2007102309000",f:(function(AMP,_){
var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ca(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return d}return function(){throw Error("Cannot find global object");}()}var da=ca(this);"function"===typeof Symbol&&Symbol("x");var k;
if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var m;a:{var ea={a:!0},n={};try{n.__proto__=ea;m=n.a;break a}catch(a){}m=!1}k=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var p=k;
function q(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(p)p(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ia=b.prototype};function fa(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};var r=self.AMP_CONFIG||{},ha=("string"==typeof r.cdnProxyRegex?new RegExp(r.cdnProxyRegex):r.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function t(a){if(self.document&&self.document.head&&(!self.location||!ha.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}r.cdnUrl||t("runtime-host");r.geoApiUrl||t("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var u=self.__AMP_LOG;function v(){if(u.dev)return u.dev;throw Error("failed to call initLogConstructor");};function w(a){return a||{}};w({c:!0,v:!0,a:!0,ad:!0,action:!0});function x(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return y(a,b)}function z(a,b){var c=A(a);c=B(c);return y(c,b)}function A(a){return a.nodeType?x((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function B(a){a=A(a);return a.isSingleDoc()?a.win:a}function y(a,b){a=C(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function D(a,b){var c=E(a,b);if(c)return c;a=C(a);a[b]=ia();return a[b].promise}
function E(a,b){var c=C(a)[b];if(c){if(c.promise)return c.promise;y(a,b);return c.promise=Promise.resolve(c.obj)}return null}function C(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function ia(){var a=new fa,b=a.promise,c=a.resolve;a=a.reject;b.catch(function(){});return{obj:null,promise:b,resolve:c,reject:a,context:null,ctor:null}};var F;function G(){return F?F:F=Promise.resolve(void 0)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function H(a,b,c){a=a.createElement(b);for(var d in c)a.setAttribute(d,c[d]);return a};function I(a){var b=E(B(a),"amp-analytics-instrumentation");if(b)return b;var c=A(a);return c.waitForBodyOpen().then(function(){var a=c.win;var b=c.win.document.head;if(b){var f={};b=b.querySelectorAll("script[custom-element],script[custom-template]");for(var g=0;g<b.length;g++){var h=b[g];h=h.getAttribute("custom-element")||h.getAttribute("custom-template");f[h]=!0}f=Object.keys(f)}else f=[];return f.includes("amp-analytics")?x(a,"extensions").waitForExtension(a,"amp-analytics"):G()}).then(function(){var b=
c.win;return b.__AMP_EXTENDED_ELEMENTS&&b.__AMP_EXTENDED_ELEMENTS["amp-analytics"]?D(B(a),"amp-analytics-instrumentation"):null})};function ja(a,b,c){var d=!1;c=void 0===c?{}:c;d=void 0===d?!0:d;I(a).then(function(e){e&&e.triggerEventForTarget(a,b,c,d)})};function ka(a,b){var c=!0;c=void 0===c?!1:c;var d=void 0===d?!1:d;var e=a.ownerDocument,f=H(e,"amp-analytics",w({sandbox:"true",trigger:d?"":"immediate"})),g=H(e,"script",w({type:"application/json"}));g.textContent=JSON.stringify(b);f.appendChild(g);f.CONFIG=b;c?(b=x(a.ownerDocument.defaultView,"extensions"),c=A(a),b.installExtensionForDoc(c,"amp-analytics")):I(a).then(function(){});a.appendChild(f)}
function J(a,b){var c=this;this.T=a.getResourceId();this.G=a;this.B=b;for(var d in b.triggers)b.triggers[d].on="sandbox-"+this.T+"-"+b.triggers[d].on;this.G.signals().whenSignal("load-start").then(function(){ka(c.G,b)})}J.prototype.trigger=function(a,b){ja(this.G,"sandbox-"+this.T+"-"+a,b)};function K(a){this.G=a;this.B={requests:{},triggers:{}}}K.prototype.setTransportConfig=function(a){this.B.transport=a};K.prototype.setExtraUrlParams=function(a){this.B.extraUrlParams=a};
K.prototype.track=function(a,b){b=Array.isArray(b)?b:[b];for(var c=[],d=0;d<b.length;d++){var e=a+"-request-"+d;this.B.requests[e]=b[d];c.push(e)}this.B.triggers[a]={on:a,request:c};return this};K.prototype.build=function(){var a=new J(this.G,this.B);this.B=null;return a};var L,M="Webkit webkit Moz moz ms O o".split(" ");var la=!1;function O(){this.l=[]}O.prototype.peek=function(){var a=this.l.length;return a?this.l[a-1].item:null};O.prototype.enqueue=function(a,b){if(isNaN(b))throw Error("Priority must not be NaN.");for(var c=-1,d=0,e=this.l.length;d<=e;){c=Math.floor((d+e)/2);if(c===this.l.length)break;if(this.l[c].priority<b)d=c+1;else if(0<c&&this.l[c-1].priority>=b)e=c-1;else break}this.l.splice(c,0,{item:a,priority:b})};O.prototype.forEach=function(a){for(var b=this.l.length;b--;)a(this.l[b].item)};
O.prototype.dequeue=function(){return this.l.length?this.l.pop().item:null};da.Object.defineProperties(O.prototype,{length:{configurable:!0,enumerable:!0,get:function(){return this.l.length}}});var ma=/nochunking=1/.test(self.location.hash),P=G();function na(a,b){if(ma)P.then(b);else{var c=Q,d=A(a),e=B(d),f=C(e),g=f.chunk;g||(g=f.chunk={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});g.ctor||g.obj||(g.ctor=c,g.context=d,g.resolve&&y(e,"chunk"));z(a,"chunk").run(b,10)}}function R(a){this.state="not_run";this.L=a}function oa(a,b){if("run"!=a.state){a.state="run";try{a.L(b)}catch(c){throw a.X(),c;}}}R.prototype.X=function(){};R.prototype.U=function(){return!1};
R.prototype.$=function(){return!1};function S(a,b,c){R.call(this,a);this.P=c}q(S,R);
S.prototype.X=function(){var a=self.document;if(!la){la=!0;a=a.body;var b={opacity:1,visibility:"visible",animation:"none"},c;for(c in b){var d=a,e=b[c];var f=d.style;var g=c;if(2>g.length?0:0==g.lastIndexOf("--",0))f=g;else{L||(L=Object.create(null));var h=L[g];if(!h){h=g;if(void 0===f[g]){var l=g;l=l.charAt(0).toUpperCase()+l.slice(1);b:{for(var N=0;N<M.length;N++){var ba=M[N]+l;if(void 0!==f[ba]){l=ba;break b}}l=""}void 0!==f[l]&&(h=l)}L[g]=h}f=h}f&&((2>f.length?0:0==f.lastIndexOf("--",0))?d.style.setProperty(f,
e):d.style[f]=e)}}};S.prototype.U=function(){return this.P.ampdoc.isVisible()};S.prototype.$=function(){return this.P.R};
function Q(a){var b=this;this.ampdoc=a;this.F=a.win;this.D=new O;this.O=this.S.bind(this);this.C=0;this.K=!1;this.aa=this.F.document.documentElement.hasAttribute("i-amphtml-no-boilerplate");this.F.addEventListener("message",function(a){"amp-macro-task"==a.data&&b.S(null)});this.R=!1;D(B(a),"viewer").then(function(){b.R=!0});a.onVisibilityChanged(function(){a.isVisible()&&T(b)})}Q.prototype.run=function(a,b){var c=new R(a);this.D.enqueue(c,b);T(this)};
Q.prototype.runForStartup=function(a){a=new S(a,this.F,this);this.D.enqueue(a,Number.POSITIVE_INFINITY);T(this)};function pa(a,b){for(var c=a.D.peek();c&&"not_run"!==c.state;)a.D.dequeue(),c=a.D.peek();c&&b&&a.D.dequeue();return c}
Q.prototype.S=function(a){var b=this,c=pa(this,!0);if(!c)return this.K=!1,this.C=0,!1;try{var d=Date.now();oa(c,a)}finally{P.then().then().then().then().then().then().then().then().then(function(){b.K=!1;b.C+=Date.now()-d;v().fine("CHUNK",c.L.displayName||c.L.name,"Chunk duration",Date.now()-d,b.C);T(b)})}return!0};function qa(a){a.aa&&5<a.C?(a.C=0,ra(a)):P.then(function(){a.O(null)})}function T(a){if(!a.K){var b=pa(a);b&&(b.U()?(a.K=!0,qa(a)):b.$()&&a.F.requestIdleCallback?sa(a.F,a.O):ra(a))}}
function ra(a){a.F.postMessage("amp-macro-task","*")}function sa(a,b){function c(e){if(15>e.timeRemaining()){var f=2E3-(Date.now()-d);0>=f||e.didTimeout?(v().fine("CHUNK","Timed out",2E3,e.didTimeout),b(e)):(v().fine("CHUNK","Rescheduling with",f,e.timeRemaining()),a.requestIdleCallback(c,{timeout:f}))}else v().fine("CHUNK","Running idle callback with ",15),b(e)}var d=Date.now();a.requestIdleCallback(c,{timeout:2E3})};function U(){this.m=[];this.N=[]}U.prototype.updateLinkList=function(a){this.N=a.map(this.getReplacementUrlForAnchor.bind(this));this.m=a};U.prototype.updateReplacementUrls=function(a){var b=this;a.forEach(function(a){var c=a.replacementUrl,e=b.m.indexOf(a.anchor);-1!==e&&(b.N[e]=c)})};U.prototype.getReplacementUrlForAnchor=function(a){a=this.m.indexOf(a);return-1!==a?this.N[a]:null};U.prototype.isInCache=function(a){return-1!==this.m.indexOf(a)};
U.prototype.getAnchorReplacementList=function(){var a=this;return this.m.map(function(b){return{anchor:b,replacementUrl:a.getReplacementUrlForAnchor(b)}})};function V(){this.j=null}V.prototype.add=function(a){var b=this;this.j||(this.j=[]);this.j.push(a);return function(){b.remove(a)}};V.prototype.remove=function(a){this.j&&(a=this.j.indexOf(a),-1<a&&this.j.splice(a,1))};V.prototype.removeAll=function(){this.j&&(this.j.length=0)};V.prototype.fire=function(a){if(this.j)for(var b=this.j,c=0;c<b.length;c++)(0,b[c])(a)};V.prototype.getHandlerCount=function(){return this.j?this.j.length:0};function W(a,b){this.syncResponse=a;this.asyncResponse=b};function X(a,b,c,d){this.events=new V;this.id=b;this.w=a;this.ga=c;this.ba=d.linkSelector||"a";this.ha=300;this.A=new U}X.prototype.getReplacementUrl=function(a){return this.isWatchingLink(a)?this.A.getReplacementUrlForAnchor(a):null};X.prototype.getAnchorReplacementList=function(){return this.A.getAnchorReplacementList()};X.prototype.isWatchingLink=function(a){return this.A.isInCache(a)};
X.prototype.rewriteAnchorUrl=function(a){var b=this.getReplacementUrl(a);if(!b||b===a.href)return!1;a.setAttribute("data-link-rewriter-original-url",a.href);a.href=b;setTimeout(function(){a.href=a.getAttribute("data-link-rewriter-original-url");a.removeAttribute("data-link-rewriter-original-url")},this.ha);return!0};
X.prototype.onDomUpdated=function(){var a=this;return new Promise(function(b){na(a.w.nodeType==Node.DOCUMENT_NODE?a.w.documentElement:a.w,function(){return ta(a).then(function(){a.events.fire({type:"PAGE_SCANNED"});b()})})})};
function ta(a){var b=ua(a),c=va(a,b);a.A.updateLinkList(b);if(!c.length)return G();a.A.updateReplacementUrls(c.map(function(a){return{anchor:a,replacementUrl:null}}));var d=a.ga(c);if(!u.user)throw Error("failed to call initLogConstructor");u.user.assert(d instanceof W,'Invalid response from provided "resolveUnknownLinks" function."resolveUnknownLinks" should return an instance of TwoStepsResponse',void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);d.syncResponse&&a.A.updateReplacementUrls(d.syncResponse);
return d.asyncResponse?d.asyncResponse.then(function(b){a.A.updateReplacementUrls(b)}):G()}function va(a,b){var c=[];b.forEach(function(b){a.isWatchingLink(b)||c.push(b)});return c}function ua(a){var b=a.w.querySelectorAll(a.ba);return[].slice.call(b)};function Y(a){this.w=a.getRootNode();var b=a.getMetaByName("amp-link-rewriter-priorities");this.da=b?b.trim().split(/\s+/):[];this.M=[];this.w.addEventListener("amp:dom-update",this.ca.bind(this));z(a,"navigation").registerAnchorMutator(this.maybeRewriteLink.bind(this),0)}Y.prototype.registerLinkRewriter=function(a,b,c){var d=new X(this.w,a,b,c);wa(this.M,d,this.da);d.onDomUpdated();return d};
Y.prototype.maybeRewriteLink=function(a,b){var c=xa(this,a);if(c.length){for(var d=null,e=0;e<c.length;e++)if(c[e].rewriteAnchorUrl(a)){d=c[e];break}var f={linkRewriterId:d?d.id:null,anchor:a,clickType:b.type};c.forEach(function(a){a.events.fire({type:"CLICK",eventData:f})})}};Y.prototype.ca=function(){this.M.forEach(function(a){a.onDomUpdated()})};function ya(a){var b=a.hasAttribute("data-link-rewriters")?a.getAttribute("data-link-rewriters").trim():null;return b?b.split(/\s+/):[]}
function wa(a,b,c){a.push(b);a.sort(function(a,b){var d=c.indexOf(a.id),e=c.indexOf(b.id);return-1===d&&-1===e?0:-1===d?1:-1===e?-1:d>e?1:-1})}function xa(a,b){var c=ya(b);return a.M.reduce(function(a,e){e.isWatchingLink(b)&&wa(a,e,c);return a},[])};function za(a,b){var c=void 0===c?5:c;if(!isFinite(c)||0>c)throw Error("Invalid depth: "+c);if(a===b)return!0;for(a=[{a:a,b:b,depth:c}];0<a.length;){var d=a.shift();b=d.a;c=d.b;d=d.depth;if(0<d){if(typeof b!==typeof c)return!1;if(Array.isArray(b)&&Array.isArray(c)){if(b.length!==c.length)return!1;for(var e=0;e<b.length;e++)a.push({a:b[e],b:c[e],depth:d-1});continue}else if(b&&c&&"object"===typeof b&&"object"===typeof c){var f=Object.keys(b),g=Object.keys(c);if(f.length!==g.length)return!1;for(e=0;e<
f.length;e++){var h=f[e];a.push({a:b[h],b:c[h],depth:d-1})}continue}}if(b!==c)return!1}return!0};function Aa(a,b,c){this.h=a;this.H=b;this.fa=c.exclusiveLinks;this.ea=c.publisherID;this.I=c.linkAttribute;this.w=this.h.getRootNode();this.J=this.m=null}Aa.prototype.runLinkmate=function(a){var b=this,c=null,d=this.m&&!za(this.m,a);this.J&&d&&(c=Ba(this));if(!this.J||d){var e=Ca(this,a).then(function(c){b.J=c.data[0].smart_links;b.m=a;return Ba(b)});return new W(c,e)}this.m=a;return new W(c,null)};
function Ca(a,b){var c=Da(a,b),d=w({name:a.w.title||null,url:a.h.getUrl()});b=w({article:d,links:c});var e="https://api.narrativ.com/api/v1/publishers/.pub_id./linkmate/smart_links/".replace(".pub_id.",a.ea.toString()),f={method:"POST",ampCors:!1,headers:w({"Content-Type":"application/json"}),body:b};return a.H.fetchJson(e,f).then(function(a){return a.json()})}
function Da(a,b){var c=[];b.forEach(function(b){var d=b.getAttribute(a.I);if(/shop-links.co/.test(d))/\?amp=true$/.test(d)||(b[a.I]+="?amp=true");else if(!/#donotlink$/.test(d)){var f=a.fa||/#locklink$/.test(d);c.push({raw_url:d,exclusive_match_requested:f,link_source:"linkmate"})}});return c}
function Ba(a){var b=[];a.m.forEach(function(c){a.J.forEach(function(d){c.getAttribute(a.I)===d.url&&d.auction_id&&b.push({anchor:c,replacementUrl:"https://shop-links.co/"+d.auction_id+"/?amp=true"})})});return b};function Ea(a){var b=a.getAttribute("nrtv-account-name").toLowerCase(),c=!!a.hasAttribute("linkmate"),d=!!a.hasAttribute("exclusive-links");var e=(e=a.getAttribute("link-attribute"))?e.toLowerCase():"href";a=(a=a.getAttribute("link-selector"))?a.toLowerCase():"a";return{nrtvSlug:b,linkmateEnabled:c,exclusiveLinks:d,linkAttribute:e,linkSelector:a}};function Z(a){a=AMP.BaseElement.call(this,a)||this;a.H=null;a.h=null;a.V=null;a.Z=null;a.o=null;a.W=null;a.Y=null;return a}q(Z,AMP.BaseElement);Z.prototype.buildCallback=function(){var a=this;this.h=this.getAmpDoc();this.H=x(this.h.win,"xhr");var b=z(this.h,"viewer");this.o=Ea(this.element);this.V=new Y(this.h);return this.h.whenReady().then(function(){return b.getReferrerUrl()}).then(function(b){a.Y=b;a.h.whenFirstVisible().then(function(){Fa(a)})})};
function Fa(a){Ga(a).then(function(b){a.o.linkmateExpected=b.linkmate_enabled;a.o.publisherID=b.publisher_id;a.signals().signal("load-start");b=w({events:[{is_amp:!0}],organization_id:a.o.publisherID,organization_type:"publisher",user:{page_session_uuid:Ha(),source_url:a.h.getUrl(),previous_url:a.Y,user_agent:a.h.win.navigator.userAgent}});var c=new K(a.element);c.track("page-impression","https://api.narrativ.com/api/v1/events/impressions/page_impression/");c.setTransportConfig(w({beacon:!0,image:!1,
xhrpost:!0,useBody:!0}));c.setExtraUrlParams(b);c.build().trigger("page-impression");a.W=new Aa(a.h,a.H,a.o);a.Z=Ia(a);a.o.linkmateEnabled&&a.o.linkmateExpected&&a.Z.getAnchorReplacementList()})}function Ga(a){var b="https://api.narrativ.com/api/v0/publishers/.nrtv_slug./amp_config/".replace(".nrtv_slug.",a.o.nrtvSlug);try{return a.H.fetchJson(b,{method:"GET",ampCors:!1}).then(function(a){return a.json()}).then(function(a){return a.data[0].amp_config})}catch(c){return null}}
function Ia(a){return a.V.registerLinkRewriter("amp-smartlinks",function(b){return a.W.runLinkmate(b)},{linkSelector:a.o.linkSelector})}function Ha(){return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,function(a){return(a^crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16)})}(function(a){a.registerElement("amp-smartlinks",Z)})(self.AMP);
})});

//# sourceMappingURL=amp-smartlinks-0.1.js.map
