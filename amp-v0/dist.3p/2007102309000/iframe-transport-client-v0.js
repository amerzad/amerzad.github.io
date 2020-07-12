(function(){var f;function k(a){return(a=Number(a))?0<a?1:-1:a};var n=Object.prototype.hasOwnProperty;function p(a,b){if(null==a)throw new TypeError("Cannot convert undefined or null to object");for(var c=Object(a),e=1;e<arguments.length;e++){var d=arguments[e];if(null!=d)for(var g in d)n.call(d,g)&&(c[g]=d[g])}return c};function r(a){return Object.keys(a).map(function(b){return a[b]})};(function(a){a.Math.sign||a.Object.defineProperty(a.Math,"sign",{enumerable:!1,configurable:!0,writable:!0,value:k})})(self);(function(a){a.Object.assign||a.Object.defineProperty(a.Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:p})})(self);(function(a){a.Object.values||a.Object.defineProperty(a.Object,"values",{configurable:!0,writable:!0,value:r})})(self);function t(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var u=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function v(a){var b=Object.create(null);if(!a)return b;for(var c;c=u.exec(a);){var e=t(c[1],c[1]),d=c[2]?t(c[2].replace(/\+/g," "),c[2]):"";b[e]=d}return b};var w="";
function x(a){var b=a||self;if(b.__AMP_MODE)b=b.__AMP_MODE;else{var c=v(b.location.originalHash||b.location.hash);var e=v(b.location.search);w||(w=b.AMP_CONFIG&&b.AMP_CONFIG.v?b.AMP_CONFIG.v:"012007102309000");c={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(c.development)||b.AMP_DEV_MODE),examiner:"2"==c.development,esm:!1,geoOverride:c["amp-geo"],minified:!0,lite:void 0!=e.amp_lite,test:!1,log:c.log,version:"2007102309000",rtvVersion:w};b=b.__AMP_MODE=c}return b}
;function y(a){var b=!1,c=null,e=a;return function(a){for(var d=[],h=0;h<arguments.length;++h)d[h-0]=arguments[h];b||(c=e.apply(self,d),b=!0,e=null);return c}};var z=self.AMP_CONFIG||{},A=("string"==typeof z.cdnProxyRegex?new RegExp(z.cdnProxyRegex):z.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function B(a){if(!self.document||!self.document.head||self.location&&A.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}
var C={thirdParty:z.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:z.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof z.thirdPartyFrameRegex?new RegExp(z.thirdPartyFrameRegex):z.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:z.cdnUrl||B("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:A,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:z.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:z.betaErrorReportingUrl||
"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:z.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:z.geoApiUrl||B("amp-geo-api")};function D(){}function E(a,b){return b.reduce(function(a,b){return a+"&s[]="+encodeURIComponent(String(F(b)))},"https://log.amp.dev/?v=012007102309000&id="+encodeURIComponent(a))}
function G(a,b,c){var e=this;c=void 0===c?"":c;this.win=a;this.I=b;this.l=this.win.console&&this.win.console.log&&"0"!=x().log?this.I(parseInt(x().log,10),x().development):0;this.A=c;this.w=null;this.H=y(function(){a.fetch(C.cdn+"/rtv/012007102309000/log-messages.simple.json").then(function(a){return a.json()},D).then(function(a){a&&(e.w=a)})})}
function H(a,b,c,e){if(0!=a.l){var d=a.win.console.log;"ERROR"==c?d=a.win.console.error||d:"INFO"==c?d=a.win.console.info||d:"WARN"==c&&(d=a.win.console.warn||d);c=Array.isArray(e[0])?J(a,e[0]):e;b="["+b+"]";"string"===typeof c[0]?c[0]=b+" "+c[0]:c.unshift(b);d.apply(a.win.console,c)}}f=G.prototype;f.isEnabled=function(){return 0!=this.l};f.fine=function(a,b){4<=this.l&&H(this,a,"FINE",Array.prototype.slice.call(arguments,1))};
f.info=function(a,b){3<=this.l&&H(this,a,"INFO",Array.prototype.slice.call(arguments,1))};f.warn=function(a,b){2<=this.l&&H(this,a,"WARN",Array.prototype.slice.call(arguments,1))};f.F=function(a,b){if(1<=this.l)H(this,a,"ERROR",Array.prototype.slice.call(arguments,1));else{var c=K.apply(null,Array.prototype.slice.call(arguments,1));L(this,c);return c}};f.error=function(a,b){var c=this.F.apply(this,arguments);c&&(c.name=a||c.name,self.__AMP_REPORT_ERROR(c))};
f.expectedError=function(a,b){var c=this.F.apply(this,arguments);c&&(c.expected=!0,self.__AMP_REPORT_ERROR(c))};f.createError=function(a){var b=K.apply(null,arguments);L(this,b);return b};f.createExpectedError=function(a){var b=K.apply(null,arguments);L(this,b);b.expected=!0;return b};
f.assert=function(a,b,c){var e;if(Array.isArray(b))return this.assert.apply(this,[a].concat(J(this,b)));if(!a){var d=(b||"Assertion failed").split("%s"),g=d.shift(),h=g,m=[],l=2;for(""!=g&&m.push(g);0<d.length;){var I=d.shift(),q=arguments[l++];q&&q.tagName&&(e=q);m.push(q);g=I.trim();""!=g&&m.push(g);h+=F(q)+I}l=Error(h);l.fromAssert=!0;l.associatedElement=e;l.messageArray=m;L(this,l);self.__AMP_REPORT_ERROR(l);throw l;}return a};
f.assertElement=function(a,b){M(this,a,a&&1==a.nodeType,"Element expected",b);return a};f.assertString=function(a,b){M(this,a,"string"==typeof a,"String expected",b);return a};f.assertNumber=function(a,b){M(this,a,"number"==typeof a,"Number expected",b);return a};f.assertArray=function(a,b){M(this,a,Array.isArray(a),"Array expected",b);return a};f.assertBoolean=function(a,b){M(this,a,!!a===a,"Boolean expected",b);return a};
f.assertEnumValue=function(a,b,c){a:{for(var e in a)if(a[e]===b){a=!0;break a}a=!1}if(a)return b;this.assert(!1,'Unknown %s value: "%s"',c||"enum",b)};function L(a,b){b=N(b);a.A?b.message?-1==b.message.indexOf(a.A)&&(b.message+=a.A):b.message=a.A:0<=b.message.indexOf("\u200b\u200b\u200b")&&(b.message=b.message.replace("\u200b\u200b\u200b",""))}function J(a,b){var c=b.shift();x(a.win).development&&a.H();return a.w&&c in a.w?[a.w[c]].concat(b):["More info at "+E(c,b)]}
function M(a,b,c,e,d){Array.isArray(d)?a.assert(c,d.concat(b)):a.assert(c,(d||e)+": %s",b)}function F(a){return a&&1==a.nodeType?a.tagName.toLowerCase()+(a.id?"#"+a.id:""):a}function N(a){var b=Object.getOwnPropertyDescriptor(a,"message");if(b&&b.writable)return a;var c=a.stack,e=Error(a.message),d;for(d in a)e[d]=a[d];e.stack=c;return e}
function K(a){for(var b=null,c="",e=0;e<arguments.length;e++){var d=arguments[e];d instanceof Error&&!b?b=N(d):(c&&(c+=" "),c+=d)}b?c&&(b.message=c+": "+b.message):b=Error(c);return b}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var O=self.__AMP_LOG,P=null;function Q(){O.user||(O.user=R());return O.user}function R(){if(!P)throw Error("failed to call initLogConstructor");return new P(self,function(a,b){return b||1<=a?4:2},"\u200b\u200b\u200b")}
function S(){if(O.dev)return O.dev;if(!P)throw Error("failed to call initLogConstructor");return O.dev=new P(self,function(a){return 3<=a?4:2<=a?3:0})};function T(){return{targetOrigin:"*",includeUserActivation:!0}};var U;function V(a,b){var c=aa();a.addEventListener("message",function(a){try{return b(a)}catch(d){throw self.__AMP_REPORT_ERROR(d),d;}},c?void 0:!1)}function aa(){if(void 0!==U)return U;U=!1;try{var a={get capture(){U=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return U};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ba(a,b){V(a,b)};function W(){this.c=null}f=W.prototype;f.add=function(a){var b=this;this.c||(this.c=[]);this.c.push(a);return function(){b.remove(a)}};f.remove=function(a){this.c&&(a=this.c.indexOf(a),-1<a&&this.c.splice(a,1))};f.removeAll=function(){this.c&&(this.c.length=0)};f.fire=function(a){if(this.c)for(var b=this.c,c=0;c<b.length;c++)(0,b[c])(a)};f.getHandlerCount=function(){return this.c?this.c.length:0};function X(a,b){this.m=a;this.K=x().rtvVersion||null;this.h=b||null;this.C=null;this.J=1;this.o=Object.create(null);ca(this)}f=X.prototype;f.getData=function(a,b,c){var e=a+"-result",d=this.J++,g=this.registerCallback(e,function(a){a.messageId===d&&(g(),c(a.content))}),h={};h.payload=b;h.messageId=d;this.sendMessage(a,h)};f.makeRequest=function(a,b,c){b=this.registerCallback(b,c);this.sendMessage(a);return b};
f.requestOnce=function(a,b,c){var e=this.registerCallback(b,function(a){e();c(a)});this.sendMessage(a);return e};f.registerCallback=function(a,b){a in this.o||(this.o[a]=new W);return this.o[a].add(b)};
f.sendMessage=function(a,b){var c=this.C,e=b,d=this.K;e=void 0===e?{}:e;e.type=a;e.sentinel=c;a="amp-"+((void 0===d?null:d)||"")+JSON.stringify(e);if(this.h)c=this.h,1==c.postMessage.length?c.postMessage(a,T()):c.postMessage(a,"*");else for(var g=0,h=this.m;10>g&&h!=this.m.top;g++)c=h=h.parent,d=a,1==c.postMessage.length?c.postMessage(d,T()):c.postMessage(d,"*"),g++};
function ca(a){ba(a.m,function(b){if(!a.h||b.source==a.h){var c=b.data;if("string"==typeof c&&0==c.indexOf("amp-")&&-1!=c.indexOf("{")){var e=c.indexOf("{");try{var d=JSON.parse(c.substr(e))}catch(g){S().error("MESSAGING","Failed to parse message: "+c,g),d=null}}else d=null;d&&d.sentinel==a.C&&(d.origin=b.origin,a.h||(a.h=b.source),b=d.type,b in a.o&&a.o[b].fire(d))}})}f.setSentinel=function(a){this.C=a};function Y(){var a=window,b=this;this.m=a;this.D={};try{var c=JSON.parse(this.m.name)}catch(d){c=null}var e=c;this.L=e.type;this.j=new X(a,a.parent);this.j.setSentinel(e.sentinel);this.j.makeRequest("send-iframe-transport-events","iframe-transport-events",function(a){a.events.forEach(function(a){try{var c=a.creativeId;(b.D[c]||(b.D[c]=new Z(b.m,b.j,c,b.L))).dispatch(a.message)}catch(m){Q().error("iframe-transport-client","Exception in callback passed to onAnalyticsEvent",m)}})})}
Y.prototype.getIframeMessagingClient=function(){return this.j};function Z(a,b,c,e){this.j=b;this.G={creativeId:c,vendor:e};this.B=null;c=a.onNewContextInstance&&"function"==typeof a.onNewContextInstance;var d="Must implement onNewContextInstance in "+a.location.href;Q().assert(c,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);a.onNewContextInstance(this)}Z.prototype.onAnalyticsEvent=function(a){this.B=a};Z.prototype.dispatch=function(a){this.B&&this.B(a)};
Z.prototype.sendResponseToCreative=function(a){this.j.sendMessage("iframe-transport-response",Object.assign({},{message:a},this.G))};(function(){P=G;S();Q()})();(function(a){self.__AMP_REPORT_ERROR=a})(function(){});try{new Y}catch(a){};})();

//# sourceMappingURL=iframe-transport-client-v0.js.map
