(function(){var e;function f(a){return a||{}};var h;function k(a,b,d){var c=m();a.addEventListener(b,function(a){try{return d(a)}catch(p){throw self.__AMP_REPORT_ERROR(p),p;}},c?void 0:!1)}function m(){if(void 0!==h)return h;h=!1;try{var a={get capture(){h=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return h};function n(a){new Promise(function(b){b(a())})};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function q(a){var b=!1,d=null,c=a;return function(a){for(var g=[],l=0;l<arguments.length;++l)g[l-0]=arguments[l];b||(d=c.apply(self,g),b=!0,c=null);return d}};var r=self.AMP_CONFIG||{},t=("string"==typeof r.cdnProxyRegex?new RegExp(r.cdnProxyRegex):r.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function u(a){if(self.document&&self.document.head&&(!self.location||!t.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}r.cdnUrl||u("runtime-host");r.geoApiUrl||u("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};function v(a,b,d){k(a,b,d)};function w(a){try{return JSON.parse(a)}catch(b){return null}};function x(a,b){for(var d=[],c=1;c<arguments.length;++c)d[c-1]=arguments[c];if(!a)throw Error("[<amp-video-iframe>] "+d.join(" ")+" https://go.amp.dev/c/amp-video-iframe");return a}var y="pause play mute unmute fullscreenenter fullscreenexit showcontrols hidecontrols".split(" ");
function z(a){var b=this;this.C=!0;this.w=0;this.h={};this.c=a;this.j={};this.m=q(function(){A(b.c,function(a){var c=a.id;"number"===typeof c&&isFinite(c)&&b.h[c]?((0,b.h[c])(a.args),delete b.h[c]):"method"==a.event&&(a=a.method,a in b.j&&b.j[a].call())})});this.o=this.l=!1;this.A=q(function(){var a=w(b.c.name);return{canonicalUrl:a.canonicalUrl,sourceUrl:a.sourceUrl}})}e=z.prototype;e.getMetadata=function(){return this.A()};
e.method=function(a,b){x(-1<y.indexOf(a),"Invalid method "+a+".");var d="play"==a||"pause"==a?B(b):b;this.j[a]=d;this.m()};
e.listenTo=function(a,b,d){var c=this;x(!this.o,"`listenTo` is meant to be used once per page.");var g={jwplayer:function(){x(!d,"listenTo('jwplayer', opt_instance) does not take an initializer.");c.B(C(c,b))},videojs:function(){D(c,x(b,"listenTo('videojs', element) expects a second argument"),d)}};x(g[a.toLowerCase()],"Invalid listener type ["+a+"].","Valid types are ["+Object.keys(g).join(", ")+"]")();this.o=!0};
function C(a,b){return b?(x(b.on,"listenTo('jwplayer', myjwplayer) takes a jwplayer instance as ","second argument"),b):x(a.c.jwplayer,"listenTo('jwplayer') expects a global jwplayer() in window.")()}
e.B=function(a){var b=arguments,d=this;["error","setupError"].forEach(function(c){a.on(c,function(){x.apply(null,[!1].concat(b));d.postEvent("error")})});["adSkipped","adComplete","adError"].forEach(function(b){a.on(b,function(){return d.postEvent("ad_end")})});a.on("adStarted",function(){return d.postEvent("ad_start")});var c={play:"playing",ready:"canplay",pause:"pause"};Object.keys(c).forEach(function(b){a.on(b,function(){return d.postEvent(c[b])})});a.on("volume",function(a){return E(d,a.volume)});
this.method("play",function(){return a.play()});this.method("pause",function(){return a.pause()});this.method("mute",function(){return a.setMute(!0)});this.method("unmute",function(){return a.setMute(!1)});this.method("showcontrols",function(){return a.setControls(!0)});this.method("hidecontrols",function(){return a.setControls(!1)});this.method("fullscreenenter",function(){return a.setFullscreen(!0)});this.method("fullscreenexit",function(){return a.setFullscreen(!1)})};
function D(a,b,d){var c=x(d||a.c.videojs,"Video.JS not imported or initializer undefined.")(b);c.ready(function(){["playing","pause","ended"].forEach(function(b){c.on(b,function(){return a.postEvent(b)})});if(3<=c.readyState())a.postEvent("canplay");else c.on("canplay",function(){return a.postEvent("canplay")});v(b,"volumechange",function(){return E(a,c.volume())});a.method("play",function(){return c.play()});a.method("pause",function(){return c.pause()});a.method("mute",function(){return c.muted(!0)});
a.method("unmute",function(){return c.muted(!1)});a.method("showcontrols",function(){return c.controls(!0)});a.method("hidecontrols",function(){return c.controls(!1)});a.method("fullscreenenter",function(){return c.requestFullscreen()});a.method("fullscreenexit",function(){return c.exitFullscreen()})})}function E(a,b){.01>b?(a.l=!0,a.postEvent("muted")):a.l&&(a.l=!1,a.postEvent("unmuted"))}function B(a){return function(){try{n(function(){return a()})}catch(b){}}}e.postEvent=function(a){F(this,f({event:a}))};
e.postAnalyticsEvent=function(a,b){F(this,f({event:"analytics",analytics:{eventType:a,vars:b}}))};function F(a,b,d){var c=a.w++,g=Object.assign({},{id:c},b);a.c.parent&&a.c.parent.postMessage(g,"*");d&&(a.h[c]=d)}e.getIntersection=function(a){this.m();F(this,f({method:"getIntersection"}),a)};function A(a,b){v(a,"message",function(a){(a=w(a.data))&&b(a)})}
(function(a){x(!a.__AMP__VIDEO_IFRAME__,"video-iframe-integration-v0.js should only be included once.");a.__AMP__VIDEO_IFRAME__=!0;a.__AMP_REPORT_ERROR=console.error.bind(console);var b=new z(a),d=a.AmpVideoIframe=a.AmpVideoIframe||[];d.push=function(a){return a(b)};d.forEach(d.push)})(self);})();

//# sourceMappingURL=video-iframe-integration-v0.js.map
