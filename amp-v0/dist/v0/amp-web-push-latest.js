(self.AMP=self.AMP||[]).push({n:"amp-web-push",v:"2008290323002",f:(function(AMP,_){
'use strict';var f,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return d}return function(){throw Error("Cannot find global object");}()}var k=ba(this);"function"===typeof Symbol&&Symbol("x");var l;
if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var ca={a:!0},q={};try{q.__proto__=ca;m=q.a;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var r=l;
function t(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(r)r(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.aa=b.prototype};function u(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var da=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function v(a){var b=Object.create(null);if(!a)return b;for(var c;c=da.exec(a);){var d=u(c[1],c[1]),e=c[2]?u(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var w="";
function x(){var a=self;if(a.__AMP_MODE)var b=a.__AMP_MODE;else{b=v(a.location.originalHash||a.location.hash);var c=v(a.location.search);w||(w=a.AMP_CONFIG&&a.AMP_CONFIG.v?a.AMP_CONFIG.v:"012008290323002");b={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(b.development)||a.AMP_DEV_MODE),examiner:"2"==b.development,esm:!1,geoOverride:b["amp-geo"],minified:!0,lite:void 0!=c.amp_lite,test:!1,log:b.log,version:"2008290323002",rtvVersion:w};b=a.__AMP_MODE=b}return b};var y=self.AMP_CONFIG||{},ea=("string"==typeof y.cdnProxyRegex?new RegExp(y.cdnProxyRegex):y.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function z(a){if(self.document&&self.document.head&&(!self.location||!ea.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}y.cdnUrl||z("runtime-host");y.geoApiUrl||z("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var A=self.__AMP_LOG;function B(){if(!A.user)throw Error("failed to call initLogConstructor");return A.user}function C(){if(A.dev)return A.dev;throw Error("failed to call initLogConstructor");};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var fa=/(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;function ha(a,b,c,d,e){return e?e:b?"\ufffd":d?a.slice(0,-1)+"\\"+a.slice(-1).charCodeAt(0).toString(16)+" ":"\\"+a}function D(a){return String(a).replace(fa,ha)};function E(){this.T=100;this.F=this.L=0;this.A=Object.create(null)}E.prototype.has=function(a){return!!this.A[a]};E.prototype.get=function(a){var b=this.A[a];if(b)return b.access=++this.F,b.payload};E.prototype.put=function(a,b){this.has(a)||this.L++;this.A[a]={payload:b,access:this.F};if(!(this.L<=this.T)){C().warn("lru-cache","Trimming LRU cache");a=this.A;var c=this.F+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var g=d}}void 0!==g&&(delete a[g],this.L--)}};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0});var F,G;
function H(a){F||(F=self.document.createElement("a"),G=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new E));var b=G,c=F;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a};var I;function ia(a,b,c,d){var e=a,g=c;var h=function(a){try{return g(a)}catch(Y){throw self.__AMP_REPORT_ERROR(Y),Y;}};var p=ja(),n=!1;d&&(n=d.capture);e.addEventListener(b,h,p?d:n);return function(){e&&e.removeEventListener(b,h,p?d:n);h=e=g=null}}function ja(){if(void 0!==I)return I;I=!1;try{var a={get capture(){I=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return I};function ka(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function la(a,b){for(a=a.lastElementChild;a;a=a.previousElementSibling)if(b(a))return a;return null};function J(a,b,c,d){var e=c,g=ia(a,b,function(a){try{e(a)}finally{e=null,g()}},d);return g}function ma(a){return!!(a.complete||"complete"==a.readyState||K(a)&&0<a.readyState||a.document&&"complete"==a.document.readyState)}
function oa(a){var b,c;if(ma(a))return Promise.resolve(a);var d=K(a);return d&&a.__AMP_MEDIA_LOAD_FAILURE_SRC===a.currentSrc?Promise.reject(a):(new Promise(function(e,g){b=d?J(a,"loadedmetadata",e,{capture:!0}):J(a,"load",e);if(a.tagName){var h=a;if(d&&!a.hasAttribute("src")&&(h=la(a,function(a){return"SOURCE"===a.tagName}),!h))return g(Error("Media has no source."));c=J(h,"error",g)}})).then(function(){c&&c();return a},function(){b&&b();K(a)&&(a.__AMP_MEDIA_LOAD_FAILURE_SRC=a.currentSrc||!0);var c=
a;c&&c.src&&(c=c.src);throw B().createError("Failed to load:",c);})}function K(a){return"AUDIO"===a.tagName||"VIDEO"===a.tagName};function L(a,b){this.G=a;this.$=b;this.o=null;this.O=new Promise(function(){})}L.prototype.load=function(){var a=this;return this.G.whenReady().then(function(){a.o=a.G.win.document.createElement("iframe");var b=a.o,c=!1;void 0===c&&(c=b.hasAttribute("hidden"));c?b.removeAttribute("hidden"):b.setAttribute("hidden","");a.o.sandbox="allow-same-origin allow-scripts";a.o.src=a.$;a.G.getBody().appendChild(a.o);a.O=oa(a.o);return a.whenReady()})};L.prototype.getDomElement=function(){return this.o};
L.prototype.whenReady=function(){return this.O};function M(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return pa(a,b)}function N(a){a=a.nodeType?M((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a;return a.isSingleDoc()?a.win:a}function pa(a,b){a=O(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function P(a){var b;(b=O(a)["amp-web-push-service"])?b.promise?b=b.promise:(pa(a,"amp-web-push-service"),b=b.promise=Promise.resolve(b.obj)):b=null;var c=b;if(c)return c;a=O(a);a["amp-web-push-service"]=qa();return a["amp-web-push-service"].promise}function O(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function qa(){var a=new ka,b=a.promise,c=a.resolve;a=a.reject;b.catch(function(){});return{obj:null,promise:b,resolve:c,reject:a,context:null,ctor:null}};function Q(a){return AMP.BaseElement.call(this,a)||this}t(Q,AMP.BaseElement);Q.prototype.isLayoutSupported=function(a){return"fixed"==a};Q.prototype.buildCallback=function(){this.element.classList.add("amp-invisible")};function R(a){a||(a={debug:!1,windowContext:window});this.w={};this.m={};this.j=a.debug;this.B=this.U=this.V=!1;this.D=this.I=this.J=this.l=this.H=null;this.S=a.windowContext||window}f=R.prototype;
f.listen=function(a){var b=this;return(new Promise(function(c,d){b.B?d(Error("Already connected.")):b.V?d(Error("Already listening for connections.")):Array.isArray(a)?(b.J=b.X.bind(b,a,c,d),b.S.addEventListener("message",b.J),b.j&&C().fine("amp-web-push","Listening for a connection message...")):d(Error("allowedOrigins should be a string array of allowed origins to accept messages from. Got:",a))})).then(function(){b.send(R.Topics.CONNECT_HANDSHAKE,null);b.B=!0})};
f.X=function(a,b,c,d){var e=d.data,g=d.origin,h=d.ports;this.j&&C().fine("amp-web-push","Window message for listen() connection received:",e);a:{var p=H(g).origin;for(var n=0;n<a.length;n++)if(H(a[n]).origin===p){p=!0;break a}p=!1}p?e&&e.topic===R.Topics.CONNECT_HANDSHAKE?(C().fine("amp-web-push","Received expected connection handshake message:",e),this.S.removeEventListener("message",this.J),this.l=h[0],this.D=this.P.bind(this),this.l.addEventListener("message",this.D,!1),this.l.start(),b()):C().fine("amp-web-push",
"Discarding connection message because it did not contain our expected handshake:",e):C().fine("amp-web-push","Discarding connection message from "+g+" because it isn't an allowed origin:",e," (allowed  origins are)",a)};
f.connect=function(a,b){var c=this;return new Promise(function(d,e){a||e(Error("Provide a valid Window context to connect to."));b||e(Error("Provide an expected origin for the remote Window or provide the wildcard *."));c.B?e(Error("Already connected.")):c.U?e(Error("Already connecting.")):(c.H=new MessageChannel,c.l=c.H.port1,c.I=c.W.bind(c,c.l,b,d),c.l.addEventListener("message",c.I),c.l.start(),a.postMessage({topic:R.Topics.CONNECT_HANDSHAKE},"*"===b?"*":H(b).origin,[c.H.port2]),C().fine("amp-web-push",
"Opening channel to "+b+"..."))})};f.W=function(a,b,c){this.B=!0;this.j&&C().fine("amp-web-push","Messenger channel to "+b+" established.");a.removeEventListener("message",this.I);this.D=this.P.bind(this);a.addEventListener("message",this.D,!1);c()};
f.P=function(a){a=a.data;if(this.w[a.id]&&a.isReply){var b=this.w[a.id];delete this.w[a.id];var c=b.promiseResolver;b.message=a.data;this.j&&C().fine("amp-web-push","Received reply for topic '%s': %s",a.topic,a.data);c([a.data,this.R.bind(this,a.id,b.topic)])}else{var d=this.m[a.topic];if(d){this.j&&C().fine("amp-web-push","Received new message for topic '"+(a.topic+"': "+a.data));for(var e=0;e<d.length;e++)(0,d[e])(a.data,this.R.bind(this,a.id,a.topic))}}};
f.on=function(a,b){this.m[a]?this.m[a].push(b):this.m[a]=[b]};f.off=function(a,b){if(b){var c=this.m[a].indexOf(b);-1!==c&&this.m[a].splice(c,1)}else this.m[a]&&delete this.m[a]};f.R=function(a,b,c){var d=this,e={id:a,topic:b,data:c,isReply:!0};this.l.postMessage(e);return new Promise(function(a){d.w[e.id]={message:c,topic:b,promiseResolver:a}})};
f.send=function(a,b){var c=this,d={id:crypto.getRandomValues(new Uint8Array(10)).join(""),topic:a,data:b};this.j&&C().fine("amp-web-push","Sending %s: %s",a,b);this.l.postMessage(d);return new Promise(function(e){c.w[d.id]={message:b,topic:a,promiseResolver:e}})};
k.Object.defineProperties(R,{Topics:{configurable:!0,enumerable:!0,get:function(){return{CONNECT_HANDSHAKE:"topic-connect-handshake",NOTIFICATION_PERMISSION_STATE:"topic-notification-permission-state",SERVICE_WORKER_STATE:"topic-service-worker-state",SERVICE_WORKER_REGISTRATION:"topic-service-worker-registration",SERVICE_WORKER_QUERY:"topic-service-worker-query",STORAGE_GET:"topic-storage-get"}}}});function ra(a,b){var c=a.getHeadNode(),d=sa(c,ta(c));if(b){var e=a.getRootNode();if(ua(e,d))b(d);else var g=setInterval(function(){ua(e,d)&&(clearInterval(g),b(d))},4)}}
function sa(a,b){var c=a.__AMP_CSS_SM;if(!c){var d=Object.create(null);c=a.__AMP_CSS_SM=d}var e=va(a,c,"amp-extension=amp-web-push");if(e)return e.textContent!==b&&(e.textContent=b),e;d=(a.ownerDocument||a).createElement("style");d.textContent=b;var g=null;d.setAttribute("amp-extension","amp-web-push");b=g=va(a,c,"amp-runtime");(b=void 0===b?null:b)?a.insertBefore(d,b.nextSibling):a.insertBefore(d,a.firstChild);return c["amp-extension=amp-web-push"]=d}
function va(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null}function ta(a){return(a=a.__AMP_CSS_TR)?a("amp-web-push-widget.amp-invisible{visibility:hidden}\n/*# sourceURL=/extensions/amp-web-push/0.1/amp-web-push.css*/"):"amp-web-push-widget.amp-invisible{visibility:hidden}\n/*# sourceURL=/extensions/amp-web-push/0.1/amp-web-push.css*/"}function ua(a,b){var c=a.styleSheets;for(a=0;a<c.length;a++)if(c[a].ownerNode==b)return!0;return!1};function S(a){this.ampdoc=a;ra(a,function(){});this.h={"helper-iframe-url":null,"permission-dialog-url":null,"service-worker-url":null,debug:null};this.j=x().development;this.N=this.C=null;this.M=new R({debug:this.j});this.K=null}f=S.prototype;
f.start=function(a){var b=this;C().fine("amp-web-push","amp-web-push extension starting up.");if(!this.environmentSupportsWebPush())return B().warn("amp-web-push","Web push is not supported."),Promise.reject("Web push is not supported");this.initializeConfig(a);var c=this.installHelperFrame();c.then(function(){C().fine("amp-web-push","Helper frame "+b.h["helper-iframe-url"]+" DOM loaded. Connecting to the frame via postMessage()...");return b.M.connect(b.C.getDomElement().contentWindow,H(b.h["helper-iframe-url"]).origin)}).then(function(){if(b.isContinuingSubscriptionFromRedirect())wa(b);
else return b.updateWidgetVisibilities()});return c};f.initializeConfig=function(a){this.h=a};f.installHelperFrame=function(){var a=-1!==this.h["helper-iframe-url"].indexOf("?")?"&":"?";this.C=new L(this.ampdoc,""+this.h["helper-iframe-url"]+a+("parentOrigin="+this.ampdoc.win.location.origin));return this.C.load()};f.isContinuingSubscriptionFromRedirect=function(){return-1!==(this.ampdoc.win.testLocation||this.ampdoc.win.location).search.indexOf(S.PERMISSION_POPUP_URL_FRAGMENT)};
f.removePermissionPopupUrlFragmentFromUrl=function(a){var b=a.replace("?"+S.PERMISSION_POPUP_URL_FRAGMENT,"");return b=b.replace("&"+S.PERMISSION_POPUP_URL_FRAGMENT,"")};function T(a,b,c){return a.C.whenReady().then(function(){return a.M.send(b,c)}).then(function(a){var d=a[0];if(d.success)return d.result;throw Error("AMP page helper iframe query topic "+b+" and message "+(c+" failed with: "+d.error));})}function U(a,b){return T(a,R.Topics.SERVICE_WORKER_QUERY,{topic:b,payload:null})}
f.queryNotificationPermission=function(){return T(this,R.Topics.NOTIFICATION_PERMISSION_STATE,null)};f.registerServiceWorker=function(){var a=this.h["service-worker-scope"];return T(this,R.Topics.SERVICE_WORKER_REGISTRATION,{workerUrl:this.h["service-worker-url"],registrationOptions:a?{scope:a}:{}})};f.querySubscriptionStateRemotely=function(){return U(this,"amp-web-push-subscription-state")};f.subscribeForPushRemotely=function(){return U(this,"amp-web-push-subscribe")};
f.unsubscribeFromPushRemotely=function(){return U(this,"amp-web-push-unsubscribe")};f.isServiceWorkerActivated=function(){var a=this,b=this;return T(this,R.Topics.SERVICE_WORKER_STATE,null).then(function(c){var d=!0===c.isControllingFrame,e=a.isUrlSimilarForQueryParams(c.url,b.h["service-worker-url"]),g="activated"===c.state;return d&&e&&g})};
f.isUrlSimilarForQueryParams=function(a,b){var c=H(a),d=v(c.search),e=H(b),g=v(e.search),h;for(h in d)if(g[h]!==d[h])return!1;return c.origin===e.origin&&c.pathname===e.pathname};f.setWidgetVisibilities=function(a,b){for(var c=this.ampdoc.getRootNode().querySelectorAll(D("amp-web-push-widget")+"[visibility="+D(a)+"]"),d=0;d<c.length;d++){var e=c[d];b?e.classList.remove("amp-invisible"):e.classList.add("amp-invisible")}};
function xa(a){return a.queryNotificationPermission().then(function(b){a.N=b})}
f.updateWidgetVisibilities=function(){var a=this;return xa(this).then(function(){return T(a,R.Topics.NOTIFICATION_PERMISSION_STATE,{isQueryTopicSupported:R.Topics.STORAGE_GET})}).then(function(b){return!0===b?T(a,R.Topics.STORAGE_GET,{key:"amp-web-push-notification-permission"}):Promise.resolve("default")}).then(function(b){if("denied"===b)0<a.ampdoc.getRootNode().querySelectorAll(D("amp-web-push-widget")+"[visibility="+D("blocked")+"]").length?(a.setWidgetVisibilities("unsubscribed",!1),a.setWidgetVisibilities("subscribed",
!1),a.setWidgetVisibilities("blocked",!0)):V(a);else return a.isServiceWorkerActivated().then(function(b){b?ya(a):V(a)})})};
function ya(a){M(a.ampdoc.win,"timer").timeoutPromise(5E3,a.querySubscriptionStateRemotely().then(function(b){switch("boolean"===typeof b?1:void 0){case S.AMP_VERSION_INITIAL:b?(a.setWidgetVisibilities("unsubscribed",!1),a.setWidgetVisibilities("subscribed",!0),a.setWidgetVisibilities("blocked",!1)):V(a);break;default:throw B().createError("The controlling service worker replied to amp-web-push with an unexpected value.");}}),"The controlling service worker does not support amp-web-push.")}
function V(a){a.setWidgetVisibilities("unsubscribed",!0);a.setWidgetVisibilities("subscribed",!1);a.setWidgetVisibilities("blocked",!1)}
f.subscribe=function(a){var b=this,c=[];c.push(this.registerServiceWorker());c.push(new Promise(function(c){switch(b.N){case "granted":return W(b).then(function(){c()});default:var d=b.openPopupOrRedirect();za(b,d,a);b.K=new R({debug:b.j});b.K.listen([b.h["permission-dialog-url"]]);b.onPermissionDialogInteracted().then(function(a){return b.handlePermissionDialogInteraction(a)}).then(function(){c()})}}));return Promise.all(c)};
function za(a,b,c){if(b&&!b.closed)var d=a.ampdoc.win.setInterval(function(){b.closed&&(c(),a.ampdoc.win.clearInterval(d))},500)}f.handlePermissionDialogInteraction=function(a){var b=a[0];a=a[1];switch(b){case "denied":case "default":return a({closeFrame:!0}),this.updateWidgetVisibilities();case "granted":a({closeFrame:!0});W(this);break;default:throw Error("Unexpected permission value:",b);}};
function W(a){return a.subscribeForPushRemotely().then(function(){return a.updateWidgetVisibilities()})}f.unsubscribe=function(){var a=this;return this.unsubscribeFromPushRemotely().then(function(){return a.updateWidgetVisibilities()})};f.onPermissionDialogInteracted=function(){var a=this;return new Promise(function(b){a.K.on(R.Topics.NOTIFICATION_PERMISSION_STATE,function(a,d){b([a,d])})})};
f.openPopupOrRedirect=function(){var a=-1!==this.ampdoc.win.location.href.indexOf("?")?"&":"?",b=this.ampdoc.win.location.href+a+S.PERMISSION_POPUP_URL_FRAGMENT,c=-1!==this.h["permission-dialog-url"].indexOf("?")?"&":"?",d=this.h["permission-dialog-url"]+c+("return="+encodeURIComponent(b)),e=Math.floor(Math.min(700,.9*screen.width)),g=Math.floor(Math.min(450,.9*screen.height)),h=this.ampdoc.win;e="height="+g+",width="+e+",left="+Math.floor((screen.width-e)/2)+",top="+Math.floor((screen.height-g)/
2)+",resizable=yes,scrollbars=yes";try{var p=h.open(d,"_blank",e)}catch(na){C().error("DOM","Failed to open url on target: ","_blank",na)}if(!(g=p)){e=e||"";var n;"number"!==typeof n&&(n=0);g=n+8>e.length?!1:-1!==e.indexOf("noopener",n)}g||(p=h.open(d,"_top"));return p};
function wa(a){a.ampdoc.win.history.replaceState(null,"",a.removePermissionPopupUrlFragmentFromUrl(a.ampdoc.win.location.href));a.queryNotificationPermission().then(function(b){switch(b){case "denied":case "default":return a.updateWidgetVisibilities();case "granted":W(a);break;default:throw Error("Unexpected permission value",b);}})}
f.environmentSupportsWebPush=function(){return void 0!==this.ampdoc.win.Notification&&void 0!==this.ampdoc.win.navigator.serviceWorker&&void 0!==this.ampdoc.win.PushManager&&("https:"===this.ampdoc.win.location.protocol||"localhost"===this.ampdoc.win.location.hostname||"127.0.0.1"===this.ampdoc.win.location.hostname||x().development||!1)};
k.Object.defineProperties(S,{PERMISSION_POPUP_URL_FRAGMENT:{configurable:!0,enumerable:!0,get:function(){return"amp-web-push-subscribing=yes"}},AMP_VERSION_INITIAL:{configurable:!0,enumerable:!0,get:function(){return 1}}});var X={HELPER_FRAME_URL:"helper-iframe-url",PERMISSION_DIALOG_URL:"permission-dialog-url",SERVICE_WORKER_URL:"service-worker-url",SERVICE_WORKER_SCOPE:"service-worker-scope"};function Z(a){return AMP.BaseElement.call(this,a)||this}t(Z,AMP.BaseElement);f=Z.prototype;
f.validate=function(){if("amp-web-push"!==this.element.getAttribute("id"))throw B().createError("<amp-web-push> must have an id attribute with value 'amp-web-push'.");if(1<this.getAmpDoc().getRootNode().querySelectorAll("#"+D("amp-web-push")).length)throw B().createError("Only one <amp-web-push> element may exist on a page.");var a={"helper-iframe-url":null,"permission-dialog-url":null,"service-worker-url":null,"service-worker-scope":null},b;for(b in X){var c=X[b],d=this.element.getAttribute(c)||
"service-worker-scope"===c;B().assert(d,"The "+c+" attribute is required for <amp-web-push>",void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);a[c]=this.element.getAttribute(c)}if(!Aa(a["helper-iframe-url"]))throw B().createError("<amp-web-push> must have a valid helper-iframe-url attribute. It should begin with the https:// protocol and point to the provided lightweight template page provided for AMP messaging.");if(!Aa(a["permission-dialog-url"]))throw B().createError("<amp-web-push> must have a valid permission-dialog-url attribute. It should begin with the https:// protocol and point to the provided template page for showing the permission prompt.");
if("https:"!==H(a["service-worker-url"]).protocol)throw B().createError("<amp-web-push> must have a valid service-worker-url attribute. It should begin with the https:// protocol and point to the service worker JavaScript file to be installed.");if(H(a["service-worker-url"]).origin!==H(a["permission-dialog-url"]).origin||H(a["permission-dialog-url"]).origin!==H(a["helper-iframe-url"]).origin)throw B().createError("<amp-web-push> URL attributes service-worker-url, permission-dialog-url, and helper-iframe-url must all share the same origin.");
};f.parseConfig=function(){var a={},b;for(b in X){var c=X[b];a[c]=this.element.getAttribute(c)}return a};f.buildCallback=function(){this.validate();var a=this.parseConfig();P(N(this.element)).then(function(b){b.start(a).catch(function(){})});this.registerAction("subscribe",this.Y.bind(this));this.registerAction("unsubscribe",this.Z.bind(this))};f.Y=function(a){var b=a.event.target;b.disabled=!0;P(N(this.element)).then(function(a){a.subscribe(function(){b.disabled=!1}).then(function(){b.disabled=!1})})};
f.Z=function(a){var b=a.event.target;b.disabled=!0;P(N(this.element)).then(function(a){a.unsubscribe().then(function(){b.disabled=!1})})};function Aa(a){try{var b=H(a),c=1<b.pathname.length;return"https:"===b.protocol&&c}catch(d){return!1}};(function(a){a.registerServiceForDoc("amp-web-push-service",S);a.registerElement("amp-web-push",Z);a.registerElement("amp-web-push-widget",Q,"amp-web-push-widget.amp-invisible{visibility:hidden}\n/*# sourceURL=/extensions/amp-web-push/0.1/amp-web-push.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-web-push-0.1.js.map
