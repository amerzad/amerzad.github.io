(self.AMP=self.AMP||[]).push({n:"amp-web-push",v:"2008290323002",f:function(AMP,_){function h(a,b=""){try{return decodeURIComponent(a)}catch(c){return b}}let k=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function l(a){let b=Object.create(null);if(!a)return b;let c;for(;c=k.exec(a);){let a=h(c[1],c[1]),e=c[2]?h(c[2].replace(/\+/g," "),c[2]):"";b[a]=e}return b}let p=self.AMP_CONFIG||{},q=("string"==typeof p.cdnProxyRegex?new RegExp(p.cdnProxyRegex):p.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function r(a){if(self.document&&self.document.head&&(!self.location||!q.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}p.cdnUrl||r("runtime-host");p.geoApiUrl||r("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let t=self.__AMP_LOG;function v(){if(!t.user)throw Error("failed to call initLogConstructor");return t.user}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
class w{constructor(a){this.T=a;this.D=this.L=0;this.w=Object.create(null)}has(a){return!!this.w[a]}get(a){let b=this.w[a];if(b)return b.access=++this.D,b.payload}put(a,b){this.has(a)||this.L++;this.w[a]={payload:b,access:this.D};if(!(this.L<=this.T)){a=this.w;var c=this.D+1;for(let b in a){let{access:e}=a[b];if(e<c){c=e;var d=b}}void 0!==d&&(delete a[d],this.L--)}}}(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0});let x,y;function z(a){x||(x=self.document.createElement("a"),y=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new w(100)));var b=y,c=x;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a}let A;function B(a,b,c,d){let g,e=a,f=c;g=a=>{try{return f(a)}catch(K){throw self.__AMP_REPORT_ERROR(K),K}};let m=C();let u=!1;d&&(u=d.capture);e.addEventListener(b,g,m?d:u);return()=>{e&&e.removeEventListener(b,g,m?d:u);g=e=f=null}}function C(){if(void 0!==A)return A;A=!1;try{let a={get capture(){A=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(a){}return A}class D{constructor(){let a,b;this.promise=new Promise((c,d)=>{a=c;b=d});this.resolve=a;this.reject=b}}function E(a,b,c=null){c?a.insertBefore(b,c.nextSibling):a.insertBefore(b,a.firstChild)}function F(a,b){for(a=a.lastElementChild;a;a=a.previousElementSibling)if(b(a))return a;return null}function G(a,b,c,d){let e=c;let f=B(a,b,a=>{try{e(a)}finally{e=null,f()}},d);return f}function H(a){return!!(a.complete||"complete"==a.readyState||I(a)&&0<a.readyState||a.document&&"complete"==a.document.readyState)}function J(a){let b,c;if(H(a))return Promise.resolve(a);let d=I(a);return d&&a.__AMP_MEDIA_LOAD_FAILURE_SRC===a.currentSrc?Promise.reject(a):new Promise((e,f)=>{b=d?G(a,"loadedmetadata",e,{capture:!0}):G(a,"load",e);if(a.tagName){var g=a;if(d&&!a.hasAttribute("src")&&(g=F(a,a=>"SOURCE"===a.tagName),!g))return f(Error("Media has no source."));c=G(g,"error",f)}}).then(()=>{c&&c();return a},()=>{b&&b();{I(a)&&(a.__AMP_MEDIA_LOAD_FAILURE_SRC=a.currentSrc||!0);let b=a;b&&b.src&&(b=b.src);throw v().createError("Failed to load:",b)}})}function I(a){return"AUDIO"===a.tagName||"VIDEO"===a.tagName}class aa{constructor(a,b){this.F=a;this.$=b;this.m=null;this.O=new Promise(()=>{})}load(){return this.F.whenReady().then(()=>{var a=this.m=this.F.win.document.createElement("iframe"),b=!1;void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","");this.m.sandbox="allow-same-origin allow-scripts";this.m.src=this.$;this.F.getBody().appendChild(this.m);this.O=J(this.m);return this.whenReady()})}getDomElement(){return this.m}whenReady(){return this.O}}function L(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return M(a,b)}function N(a){a=a.nodeType?L((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a;return a.isSingleDoc()?a.win:a}function M(a,b){a=O(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function P(a){var b;(b=O(a)["amp-web-push-service"])?b.promise?b=b.promise:(M(a,"amp-web-push-service"),b=b.promise=Promise.resolve(b.obj)):b=null;let c=b;if(c)return c;a=O(a);a["amp-web-push-service"]=ba();return a["amp-web-push-service"].promise}function O(a){let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function ba(){var a=new D;let b=a.promise,c=a.resolve;a=a.reject;b.catch(()=>{});return{obj:null,promise:b,resolve:c,reject:a,context:null,ctor:null}}class ca extends AMP.BaseElement{constructor(a){super(a)}isLayoutSupported(a){return"fixed"==a}buildCallback(){this.element.classList.add("amp-invisible")}}class Q{constructor(a){a||(a={debug:!1,windowContext:window});this.o={};this.l={};this.H=a.debug;this.A=this.U=this.V=!1;this.C=this.I=this.J=this.j=this.G=null;this.S=a.windowContext||window}listen(a){return new Promise((b,c)=>{this.A?c(Error("Already connected.")):this.V?c(Error("Already listening for connections.")):Array.isArray(a)?(this.J=this.X.bind(this,a,b,c),this.S.addEventListener("message",this.J)):c(Error("allowedOrigins should be a string array of allowed origins to accept messages from. Got:",a))}).then(()=>{this.send(Q.Topics.CONNECT_HANDSHAKE,null);this.A=!0})}X(a,b,c,d){let e=d.data,f=d.ports;a:{let b=z(d.origin).origin;for(let c=0;c<a.length;c++)if(z(a[c]).origin===b){a=!0;break a}a=!1}a&&e&&e.topic===Q.Topics.CONNECT_HANDSHAKE&&(this.S.removeEventListener("message",this.J),this.j=f[0],this.C=this.P.bind(this),this.j.addEventListener("message",this.C,!1),this.j.start(),b())}connect(a,b){return new Promise((c,d)=>{a||d(Error("Provide a valid Window context to connect to."));b||d(Error("Provide an expected origin for the remote Window or provide the wildcard *."));this.A?d(Error("Already connected.")):this.U?d(Error("Already connecting.")):(this.G=new MessageChannel,this.j=this.G.port1,this.I=this.W.bind(this,this.j,b,c),this.j.addEventListener("message",this.I),this.j.start(),a.postMessage({topic:Q.Topics.CONNECT_HANDSHAKE},"*"===b?"*":z(b).origin,[this.G.port2]))})}W(a,b,c){this.A=!0;a.removeEventListener("message",this.I);this.C=this.P.bind(this);a.addEventListener("message",this.C,!1);c()}static get Topics(){return{CONNECT_HANDSHAKE:"topic-connect-handshake",NOTIFICATION_PERMISSION_STATE:"topic-notification-permission-state",SERVICE_WORKER_STATE:"topic-service-worker-state",SERVICE_WORKER_REGISTRATION:"topic-service-worker-registration",SERVICE_WORKER_QUERY:"topic-service-worker-query",STORAGE_GET:"topic-storage-get"}}P(a){a=a.data;if(this.o[a.id]&&a.isReply){let b=this.o[a.id];delete this.o[a.id];let c=b.promiseResolver;b.message=a.data;c([a.data,this.R.bind(this,a.id,b.topic)])}else{let b=this.l[a.topic];if(b)for(let c=0;c<b.length;c++)(0,b[c])(a.data,this.R.bind(this,a.id,a.topic))}}on(a,b){this.l[a]?this.l[a].push(b):this.l[a]=[b]}off(a,b){if(b){let c=this.l[a].indexOf(b);-1!==c&&this.l[a].splice(c,1)}else this.l[a]&&delete this.l[a]}R(a,b,c){let d={id:a,topic:b,data:c,isReply:!0};this.j.postMessage(d);return new Promise(a=>{this.o[d.id]={message:c,topic:b,promiseResolver:a}})}send(a,b){let c={id:crypto.getRandomValues(new Uint8Array(10)).join(""),topic:a,data:b};this.j.postMessage(c);return new Promise(d=>{this.o[c.id]={message:b,topic:a,promiseResolver:d}})}}function da(a,b){let c=a.getHeadNode(),d=ea(c,fa(c));if(b){let c=a.getRootNode();if(R(c,d))b(d);else var e=setInterval(()=>{R(c,d)&&(clearInterval(e),b(d))},4)}}function ea(a,b){let c=a.__AMP_CSS_SM;if(!c){var d=Object.create(null);c=a.__AMP_CSS_SM=d}{let d=S(a,c,"amp-extension=amp-web-push");if(d)return d.textContent!==b&&(d.textContent=b),d}d=(a.ownerDocument||a).createElement("style");d.textContent=b;let e=null;d.setAttribute("amp-extension","amp-web-push");e=S(a,c,"amp-runtime");E(a,d,e);return c["amp-extension=amp-web-push"]=d}function S(a,b,c){return b[c]?b[c]:(a=a.querySelector(`style[${c}]`))?b[c]=a:null}function fa(a){return(a=a.__AMP_CSS_TR)?a("amp-web-push-widget.amp-invisible{visibility:hidden}\n/*# sourceURL=/extensions/amp-web-push/0.1/amp-web-push.css*/"):"amp-web-push-widget.amp-invisible{visibility:hidden}\n/*# sourceURL=/extensions/amp-web-push/0.1/amp-web-push.css*/"}function R(a,b){let c=a.styleSheets;for(a=0;a<c.length;a++)if(c[a].ownerNode==b)return!0;return!1}function ha(a){a.ampdoc.win.history.replaceState(null,"",a.removePermissionPopupUrlFragmentFromUrl(a.ampdoc.win.location.href));a.queryNotificationPermission().then(b=>{switch(b){case"denied":case"default":return a.updateWidgetVisibilities();case"granted":T(a);break;default:throw Error("Unexpected permission value",b)}})}function U(a,b,c){return a.B.whenReady().then(()=>a.M.send(b,c)).then(a=>{let d=a[0];if(d.success)return d.result;throw Error(`AMP page helper iframe query topic ${b} and message ${c} failed with: ${d.error}`)})}function V(a,b){return U(a,Q.Topics.SERVICE_WORKER_QUERY,{topic:b,payload:null})}function ia(a){return a.queryNotificationPermission().then(b=>{a.N=b})}function W(a){a.setWidgetVisibilities("unsubscribed",!0);a.setWidgetVisibilities("subscribed",!1);a.setWidgetVisibilities("blocked",!1)}function ja(a){L(a.ampdoc.win,"timer").timeoutPromise(5e3,a.querySubscriptionStateRemotely().then(b=>{switch("boolean"===typeof b?1:void 0){case X.AMP_VERSION_INITIAL:b?(a.setWidgetVisibilities("unsubscribed",!1),a.setWidgetVisibilities("subscribed",!0),a.setWidgetVisibilities("blocked",!1)):W(a);break;default:throw v().createError("The controlling service worker replied to amp-web-push with an unexpected value.")}}),"The controlling service worker does not support amp-web-push.")}function T(a){return a.subscribeForPushRemotely().then(()=>a.updateWidgetVisibilities())}function ka(a,b,c){if(b&&!b.closed){let d=a.ampdoc.win.setInterval(()=>{b.closed&&(c(),a.ampdoc.win.clearInterval(d))},500)}}class X{static get PERMISSION_POPUP_URL_FRAGMENT(){return"amp-web-push-subscribing=yes"}static get AMP_VERSION_INITIAL(){return 1}constructor(a){this.ampdoc=a;da(a,()=>{});this.h={"helper-iframe-url":null,"permission-dialog-url":null,"service-worker-url":null,debug:null};this.H=!1;this.N=this.B=null;this.M=new Q({debug:this.H});this.K=null}start(a){if(!this.environmentSupportsWebPush())return Promise.reject("Web push is not supported");this.initializeConfig(a);let b=this.installHelperFrame();b.then(()=>this.M.connect(this.B.getDomElement().contentWindow,z(this.h["helper-iframe-url"]).origin)).then(()=>{if(this.isContinuingSubscriptionFromRedirect())ha(this);else return this.updateWidgetVisibilities()});return b}initializeConfig(a){this.h=a}installHelperFrame(){let a=-1!==this.h["helper-iframe-url"].indexOf("?")?"&":"?";this.B=new aa(this.ampdoc,`${this.h["helper-iframe-url"]}${a}parentOrigin=${this.ampdoc.win.location.origin}`);return this.B.load()}isContinuingSubscriptionFromRedirect(){return-1!==(this.ampdoc.win.testLocation||this.ampdoc.win.location).search.indexOf(X.PERMISSION_POPUP_URL_FRAGMENT)}removePermissionPopupUrlFragmentFromUrl(a){let b=a.replace(`?${X.PERMISSION_POPUP_URL_FRAGMENT}`,"");return b=b.replace(`&${X.PERMISSION_POPUP_URL_FRAGMENT}`,"")}queryNotificationPermission(){return U(this,Q.Topics.NOTIFICATION_PERMISSION_STATE,null)}registerServiceWorker(){let a=this.h["service-worker-scope"];return U(this,Q.Topics.SERVICE_WORKER_REGISTRATION,{workerUrl:this.h["service-worker-url"],registrationOptions:a?{scope:a}:{}})}querySubscriptionStateRemotely(){return V(this,"amp-web-push-subscription-state")}subscribeForPushRemotely(){return V(this,"amp-web-push-subscribe")}unsubscribeFromPushRemotely(){return V(this,"amp-web-push-unsubscribe")}isServiceWorkerActivated(){let a=this;return U(this,Q.Topics.SERVICE_WORKER_STATE,null).then(b=>{let c=!0===b.isControllingFrame,d=this.isUrlSimilarForQueryParams(b.url,a.h["service-worker-url"]),e="activated"===b.state;return c&&d&&e})}isUrlSimilarForQueryParams(a,b){let c=z(a),d=l(c.search),e=z(b),f=l(e.search);for(let a in d)if(f[a]!==d[a])return!1;return c.origin===e.origin&&c.pathname===e.pathname}setWidgetVisibilities(a,b){let c=this.ampdoc.getRootNode().querySelectorAll(`${CSS.escape("amp-web-push-widget")}[visibility=${CSS.escape(a)}]`);for(let a=0;a<c.length;a++){let d=c[a];b?d.classList.remove("amp-invisible"):d.classList.add("amp-invisible")}}updateWidgetVisibilities(){return ia(this).then(()=>U(this,Q.Topics.NOTIFICATION_PERMISSION_STATE,{isQueryTopicSupported:Q.Topics.STORAGE_GET})).then(a=>!0===a?U(this,Q.Topics.STORAGE_GET,{key:"amp-web-push-notification-permission"}):Promise.resolve("default")).then(a=>{if("denied"===a)0<this.ampdoc.getRootNode().querySelectorAll(`${CSS.escape("amp-web-push-widget")}[visibility=${CSS.escape("blocked")}]`).length?(this.setWidgetVisibilities("unsubscribed",!1),this.setWidgetVisibilities("subscribed",!1),this.setWidgetVisibilities("blocked",!0)):W(this);else return this.isServiceWorkerActivated().then(a=>{a?ja(this):W(this)})})}subscribe(a){let b=[];b.push(this.registerServiceWorker());b.push(new Promise(b=>{switch(this.N){case"granted":return T(this).then(()=>{b()});default:let c=this.openPopupOrRedirect();ka(this,c,a);this.K=new Q({debug:this.H});this.K.listen([this.h["permission-dialog-url"]]);this.onPermissionDialogInteracted().then(a=>this.handlePermissionDialogInteraction(a)).then(()=>{b()})}}));return Promise.all(b)}handlePermissionDialogInteraction(a){let b=a[0];a=a[1];switch(b){case"denied":case"default":return a({closeFrame:!0}),this.updateWidgetVisibilities();case"granted":a({closeFrame:!0});T(this);break;default:throw Error("Unexpected permission value:",b)}}unsubscribe(){return this.unsubscribeFromPushRemotely().then(()=>this.updateWidgetVisibilities())}onPermissionDialogInteracted(){return new Promise(a=>{this.K.on(Q.Topics.NOTIFICATION_PERMISSION_STATE,(b,c)=>{a([b,c])})})}openPopupOrRedirect(){let a=-1!==this.ampdoc.win.location.href.indexOf("?")?"&":"?",b=this.ampdoc.win.location.href+a+X.PERMISSION_POPUP_URL_FRAGMENT,c=-1!==this.h["permission-dialog-url"].indexOf("?")?"&":"?",d=this.h["permission-dialog-url"]+c+`return=${encodeURIComponent(b)}`;var e=Math.floor(Math.min(700,.9*screen.width));var f=Math.floor(Math.min(450,.9*screen.height));var g=e;var m=f;e=Math.floor((screen.width-e)/2);var u=Math.floor((screen.height-f)/2);var n;{f=this.ampdoc.win;g=`${`height=${m},width=${g},left=${e},top=${u}`},resizable=yes,scrollbars=yes`;let a;try{a=f.open(d,"_blank",g)}catch(la){if(t.dev)m=t.dev;else throw Error("failed to call initLogConstructor");m.error("DOM","Failed to open url on target: ","_blank",la)}(m=a)||(g=g||"","number"!==typeof n&&(n=0),m=n+8>g.length?!1:-1!==g.indexOf("noopener",n));m||(a=f.open(d,"_top"));n=a}return n}environmentSupportsWebPush(){return void 0!==this.ampdoc.win.Notification&&void 0!==this.ampdoc.win.navigator.serviceWorker&&void 0!==this.ampdoc.win.PushManager&&("https:"===this.ampdoc.win.location.protocol||"localhost"===this.ampdoc.win.location.hostname||"127.0.0.1"===this.ampdoc.win.location.hostname||!1)}}let Y={HELPER_FRAME_URL:"helper-iframe-url",PERMISSION_DIALOG_URL:"permission-dialog-url",SERVICE_WORKER_URL:"service-worker-url",SERVICE_WORKER_SCOPE:"service-worker-scope"};function Z(a){try{let b=z(a),c=1<b.pathname.length;return"https:"===b.protocol&&c}catch(b){return!1}}class ma extends AMP.BaseElement{constructor(a){super(a)}validate(){if("amp-web-push"!==this.element.getAttribute("id"))throw v().createError("<amp-web-push> must have an id attribute with value 'amp-web-push'.");if(1<this.getAmpDoc().getRootNode().querySelectorAll(`#${CSS.escape("amp-web-push")}`).length)throw v().createError("Only one <amp-web-push> element may exist on a page.");let a={"helper-iframe-url":null,"permission-dialog-url":null,"service-worker-url":null,"service-worker-scope":null};for(let d in Y){let e=Y[d];var b=this.element.getAttribute(e)||"service-worker-scope"===e,c=`The ${e} attribute is required for <amp-web-push>`;v().assert(b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);a[e]=this.element.getAttribute(e)}if(!Z(a["helper-iframe-url"]))throw v().createError("<amp-web-push> must have a valid helper-iframe-url attribute. It should begin with the https:// protocol and point to the provided lightweight template page provided for AMP messaging.");if(!Z(a["permission-dialog-url"]))throw v().createError("<amp-web-push> must have a valid permission-dialog-url attribute. It should begin with the https:// protocol and point to the provided template page for showing the permission prompt.");if("https:"!==z(a["service-worker-url"]).protocol)throw v().createError("<amp-web-push> must have a valid service-worker-url attribute. It should begin with the https:// protocol and point to the service worker JavaScript file to be installed.");if(z(a["service-worker-url"]).origin!==z(a["permission-dialog-url"]).origin||z(a["permission-dialog-url"]).origin!==z(a["helper-iframe-url"]).origin)throw v().createError("<amp-web-push> URL attributes service-worker-url, permission-dialog-url, and helper-iframe-url must all share the same origin.")}parseConfig(){let a={};for(let b in Y){let c=Y[b];a[c]=this.element.getAttribute(c)}return a}buildCallback(){this.validate();let a=this.parseConfig();P(N(this.element)).then(b=>{b.start(a).catch(()=>{})});this.registerAction("subscribe",this.Y.bind(this));this.registerAction("unsubscribe",this.Z.bind(this))}Y(a){let b=a.event.target;b.disabled=!0;P(N(this.element)).then(a=>{a.subscribe(()=>{b.disabled=!1}).then(()=>{b.disabled=!1})})}Z(a){let b=a.event.target;b.disabled=!0;P(N(this.element)).then(a=>{a.unsubscribe().then(()=>{b.disabled=!1})})}}(a=>{a.registerServiceForDoc("amp-web-push-service",X);a.registerElement("amp-web-push",ma);a.registerElement("amp-web-push-widget",ca,"amp-web-push-widget.amp-invisible{visibility:hidden}\n/*# sourceURL=/extensions/amp-web-push/0.1/amp-web-push.css*/")})(self.AMP)}});