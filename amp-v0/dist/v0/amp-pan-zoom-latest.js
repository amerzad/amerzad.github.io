(self.AMP=self.AMP||[]).push({n:"amp-pan-zoom",v:"2007102309000",f:(function(AMP,_){
var f,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var n;
if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var q;a:{var ca={a:!0},da={};try{da.__proto__=ca;q=da.a;break a}catch(a){}q=!1}n=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=n;
function r(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(ea)ea(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.zb=b.prototype}var t;function fa(){return t?t:t=Promise.resolve(void 0)};function ha(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ia=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var u=self.AMP_CONFIG||{},ja=("string"==typeof u.cdnProxyRegex?new RegExp(u.cdnProxyRegex):u.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function ka(a){if(self.document&&self.document.head&&(!self.location||!ja.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}u.cdnUrl||ka("runtime-host");u.geoApiUrl||ka("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var v=self.__AMP_LOG;function w(){if(v.dev)return v.dev;throw Error("failed to call initLogConstructor");}function la(a,b,c,d){if(!v.user)throw Error("failed to call initLogConstructor");v.user.assert(a,b,c,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function ma(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};var na=Object.prototype.hasOwnProperty;function oa(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var e=a.AMP_CONFIG["allow-doc-opt-in"],g=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
if(g){var h=g.getAttribute("content").split(",");for(c=0;c<h.length;c++)-1!=e.indexOf(h[c])&&(b[h[c]]=!0)}}Object.assign(b,pa(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];var l=a.location.originalHash||a.location.hash;a=Object.create(null);if(l)for(var k;k=ia.exec(l);){var m=ha(k[1],k[1]);k=k[2]?ha(k[2].replace(/\+/g," "),k[2]):"";a[m]=k}for(l=0;l<c.length;l++)m=a["e-"+c[l]],"1"==m&&(b[c[l]]=!0),
"0"==m&&(b[c[l]]=!1)}return b}function pa(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){w().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var qa=[{experimentId:"ampdoc-fie",isTrafficEligible:function(){return!0},branches:["21065001","21065002"]}];function ra(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c,e;if(oa(c)["ampdoc-fie"]){c.__AMP_EXPERIMENT_BRANCHES=c.__AMP_EXPERIMENT_BRANCHES||{};for(e=0;e<qa.length;e++){var g=qa[e],h=g.experimentId;na.call(c.__AMP_EXPERIMENT_BRANCHES,h)||(g.isTrafficEligible&&g.isTrafficEligible(c)?!c.__AMP_EXPERIMENT_BRANCHES[h]&&oa(c)[h]&&(g=g.branches,c.__AMP_EXPERIMENT_BRANCHES[h]=g[Math.floor(Math.random()*g.length)]||null):c.__AMP_EXPERIMENT_BRANCHES[h]=null)}e="21065002"===(c.__AMP_EXPERIMENT_BRANCHES?
c.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else e=!1;var l=e;d&&!l?a=x(b,"action")?y(b,"action"):null:(a=z(a),a=sa(a),a=x(a,"action")?y(a,"action"):null);return a}function A(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return y(a,b)}function ta(a){var b=z(a);b=sa(b);return y(b,"owners")}function z(a){return a.nodeType?A((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function sa(a){a=z(a);return a.isSingleDoc()?a.win:a}
function y(a,b){x(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function x(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function B(a,b,c,d){var e=new ua(a,b,c,d);return e.solveYValueFromXValue.bind(e)}function ua(a,b,c,d){this.y0=this.x0=0;this.x1=a;this.y1=b;this.x2=c;this.y2=d;this.y3=this.x3=1}f=ua.prototype;f.solveYValueFromXValue=function(a){return this.getPointY(this.solvePositionFromXValue(a))};
f.solvePositionFromXValue=function(a){var b=(a-this.x0)/(this.x3-this.x0);if(0>=b)return 0;if(1<=b)return 1;for(var c=0,d=1,e=0,g=0;8>g;g++){e=this.getPointX(b);var h=(this.getPointX(b+1E-6)-e)/1E-6;if(1E-6>Math.abs(e-a))return b;if(1E-6>Math.abs(h))break;else e<a?c=b:d=b,b-=(e-a)/h}for(g=0;1E-6<Math.abs(e-a)&&8>g;g++)e<a?(c=b,b=(b+d)/2):(d=b,b=(b+c)/2),e=this.getPointX(b);return b};
f.getPointX=function(a){if(0==a)return this.x0;if(1==a)return this.x3;var b=this.lerp(this.x0,this.x1,a),c=this.lerp(this.x1,this.x2,a),d=this.lerp(this.x2,this.x3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};f.getPointY=function(a){if(0==a)return this.y0;if(1==a)return this.y3;var b=this.lerp(this.y0,this.y1,a),c=this.lerp(this.y1,this.y2,a),d=this.lerp(this.y2,this.y3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};f.lerp=function(a,b,c){return a+c*(b-a)};
var va=B(.25,.1,.25,1),wa=B(.42,0,1,1),za=B(0,0,.58,1),Aa=B(.42,0,.58,1),Ba={linear:function(a){return a},ease:va,"ease-in":wa,"ease-out":za,"ease-in-out":Aa};function Ca(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return B(b[0],b[1],b[2],b[3])}return null}return Ba[a]}return a};function Da(){}function C(a){this.P=a;this.W=A(self,"vsync");this.Qa=null;this.G=[]}function Ea(a,b,c){var d=Fa;return(new C(a)).setCurve(d).add(0,b,1).start(c)}C.prototype.setCurve=function(a){a&&(this.Qa=Ca(a));return this};C.prototype.add=function(a,b,c,d){this.G.push({delay:a,func:b,duration:c,curve:Ca(d)});return this};C.prototype.start=function(a){return new D(this.W,this.P,this.G,this.Qa,a)};
function D(a,b,c,d,e){this.W=a;this.P=b;this.G=[];for(b=0;b<c.length;b++){var g=c[b];this.G.push({delay:g.delay,func:g.func,duration:g.duration,curve:g.curve||d,started:!1,completed:!1})}this.ob=e;this.V=Date.now();this.U=!0;this.gb={};c=new ma;this.ka=c.promise;this.Ha=c.resolve;this.Ga=c.reject;this.ib=this.W.createAnimTask(this.P,{mutate:this.xb.bind(this)});this.W.canAnimate(this.P)?this.ib(this.gb):(w().warn("Animation","cannot animate"),E(this,!1,0))}
D.prototype.then=function(a,b){return a||b?this.ka.then(a,b):this.ka};D.prototype.thenAlways=function(a){a=a||Da;return this.then(a,a)};D.prototype.halt=function(a){E(this,!1,a||0)};function E(a,b,c){if(a.U){a.U=!1;if(0!=c){1<a.G.length&&a.G.sort(function(a,b){return a.delay+a.duration-(b.delay+b.duration)});try{if(0<c)for(c=0;c<a.G.length;c++)a.G[c].func(1,!0);else for(var d=a.G.length-1;0<=d;d--)a.G[d].func(0,!1)}catch(e){w().error("Animation","completion failed: "+e,e),b=!1}}b?a.Ha():a.Ga()}}
D.prototype.xb=function(){if(this.U){for(var a=Date.now(),b=Math.min((a-this.V)/this.ob,1),c=0;c<this.G.length;c++){var d=this.G[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.G.length;c++)if(d=this.G[c],d.started&&!d.completed)a:{var e;if(0<d.duration){var g=e=Math.min((b-d.delay)/d.duration,1);if(d.curve&&1!=g)try{g=d.curve(e)}catch(h){w().error("Animation","step curve failed: "+h,h);E(this,!1,0);break a}}else g=e=1;1==e&&(d.completed=!0);try{d.func(g,d.completed)}catch(h){w().error("Animation",
"step mutate failed: "+h,h),E(this,!1,0)}}1==b?E(this,!0,0):this.W.canAnimate(this.P)?this.ib(this.gb):(w().warn("Animation","cancel animation"),E(this,!1,0))}};function F(){this.H=null}f=F.prototype;f.add=function(a){var b=this;this.H||(this.H=[]);this.H.push(a);return function(){b.remove(a)}};f.remove=function(a){this.H&&(a=this.H.indexOf(a),-1<a&&this.H.splice(a,1))};f.removeAll=function(){this.H&&(this.H.length=0)};f.fire=function(a){if(this.H)for(var b=this.H,c=0;c<b.length;c++)(0,b[c])(a)};f.getHandlerCount=function(){return this.H?this.H.length:0};function G(a,b){var c=this;this.jb=A(a,"timer");this.pb=b;this.nb=0;this.la=-1;this.Aa=0;this.U=!1;this.mb=function(){c.oa()}}G.prototype.isPending=function(){return-1!=this.la};G.prototype.schedule=function(a){a=a||this.nb;this.U&&10>a&&(a=10);var b=Date.now()+a;return!this.isPending()||-10>b-this.Aa?(this.cancel(),this.Aa=b,this.la=this.jb.delay(this.mb,a),!0):!1};G.prototype.oa=function(){this.la=-1;this.Aa=0;this.U=!0;this.pb();this.U=!1};
G.prototype.cancel=function(){this.isPending()&&(this.jb.cancel(this.la),this.la=-1)};function Ga(a,b){for(var c=0;c<a.length;c++)if(b(a[c],c,a))return c;return-1};var H,I;function Ha(a,b,c){var d=a,e=c;var g=function(a){try{return e(a)}catch(k){throw self.__AMP_REPORT_ERROR(k),k;}};var h=Ia();d.addEventListener(b,g,h?void 0:!1);return function(){d&&d.removeEventListener(b,g,h?void 0:!1);g=d=e=null}}function Ia(){if(void 0!==H)return H;H=!1;try{var a={get capture(){H=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return H}
function Ja(a){if(void 0!==I)return I;I=!1;try{var b={get passive(){I=!0;return!1}};a.addEventListener("test-options",null,b);a.removeEventListener("test-options",null,b)}catch(c){}return I};function Ka(a,b,c,d){this.type=a;this.data=b;this.time=c;this.event=d}
function La(a,b,c){this.N=a;this.l=[];this.ca=[];this.K=[];this.o=[];this.c=null;this.ub=b;this.vb=c;this.ua=!1;this.oa=new G(a.ownerDocument.defaultView,this.Sa.bind(this));this.eb=new F;this.ja=Object.create(null);this.Na=this.tb.bind(this);this.La=this.rb.bind(this);this.Ma=this.sb.bind(this);this.Ka=this.qb.bind(this);var d=Ja(a.ownerDocument.defaultView);this.N.addEventListener("touchstart",this.Na,d?{passive:!0}:!1);this.N.addEventListener("touchend",this.La);this.N.addEventListener("touchmove",
this.Ma,d?{passive:!0}:!1);this.N.addEventListener("touchcancel",this.Ka);this.Ba=!1}function Ma(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=a.__AMP_Gestures;d||(d=new La(a,b,c),a.__AMP_Gestures=d);return d}f=La.prototype;f.cleanup=function(){this.N.removeEventListener("touchstart",this.Na);this.N.removeEventListener("touchend",this.La);this.N.removeEventListener("touchmove",this.Ma);this.N.removeEventListener("touchcancel",this.Ka);delete this.N.__AMP_Gestures;this.oa.cancel()};
f.onGesture=function(a,b){var c=new a(this),d=c.getType(),e=this.ja[d];e||(this.l.push(c),e=new F,this.ja[d]=e);return e.add(b)};f.removeGesture=function(a){var b=(new a(this)).getType();if(a=this.ja[b]){a.removeAll();a=Ga(this.l,function(a){return a.getType()==b});if(0>a)return!1;this.l.splice(a,1);this.K.splice(a,1);this.o.splice(a,1);this.ca.splice(a,1);delete this.ja[b];return!0}return!1};f.onPointerDown=function(a){return this.eb.add(a)};
f.tb=function(a){var b=Date.now();this.ua=!1;this.eb.fire(a);for(var c=0;c<this.l.length;c++)if(!this.K[c]&&(this.o[c]&&this.o[c]<b&&J(this,c),this.l[c].onTouchStart(a))){var d=c;this.ca[d]=!0;this.o[d]=0}K(this,a)};f.sb=function(a){for(var b=Date.now(),c=0;c<this.l.length;c++)this.ca[c]&&(this.o[c]&&this.o[c]<b?J(this,c):this.l[c].onTouchMove(a)||J(this,c));K(this,a)};
f.rb=function(a){for(var b=Date.now(),c=0;c<this.l.length;c++)if(this.ca[c])if(this.o[c]&&this.o[c]<b)J(this,c);else{this.l[c].onTouchEnd(a);var d=!this.o[c],e=this.o[c]<b;this.c!=this.l[c]&&(d||e)&&J(this,c)}K(this,a)};f.qb=function(a){for(var b=0;b<this.l.length;b++){var c=b;this.K[c]=0;J(this,c)}K(this,a)};
function K(a,b){var c=!!a.c||a.ua;a.ua=!1;if(!c)for(var d=Date.now(),e=0;e<a.l.length;e++)if(a.K[e]||a.o[e]&&a.o[e]>=d){c=!0;break}c?(b.stopPropagation(),a.ub||b.preventDefault()):a.vb&&b.stopPropagation();a.Ba&&(a.Ba=!1,a.Sa())}
f.Sa=function(){for(var a=Date.now(),b=-1,c=0;c<this.l.length;c++)if(!this.K[c])this.o[c]&&this.o[c]<a&&J(this,c);else if(-1==b||this.K[c]>this.K[b])b=c;if(-1!=b){var d=0;for(c=0;c<this.l.length;c++)!this.K[c]&&this.ca[c]&&(d=Math.max(d,this.o[c]-a));if(2>d){a=b;c=this.l[a];for(var e=0;e<this.l.length;e++)if(e!=a){var g=e;this.K[g]=0;J(this,g)}this.K[a]=0;this.o[a]=0;this.c=c;c.acceptStart()}else this.oa.schedule(d)}};function J(a,b){a.ca[b]=!1;a.o[b]=0;a.K[b]||a.l[b].acceptCancel()}
function L(a,b){this.yb=a;this.na=b}f=L.prototype;f.getType=function(){return this.yb};f.signalReady=function(a){var b=this.na;if(b.c)this.acceptCancel();else{for(var c=Date.now(),d=0;d<b.l.length;d++)b.l[d]==this&&(b.K[d]=c+a,b.o[d]=0);b.Ba=!0}};f.signalPending=function(a){var b=this.na;if(b.c)this.acceptCancel();else for(var c=Date.now(),d=0;d<b.l.length;d++)b.l[d]==this&&(b.o[d]=c+a)};f.signalEnd=function(){var a=this.na;a.c==this&&(a.c=null,a.ua=!0)};
f.signalEmit=function(a,b){var c=this.na.ja[this.getType()];c&&c.fire(new Ka(this.getType(),a,Date.now(),b))};f.acceptStart=function(){};f.acceptCancel=function(){};f.onTouchStart=function(){return!1};f.onTouchMove=function(){return!1};f.onTouchEnd=function(){};function Na(){}var Oa=Math.round(-16.67/Math.log(.95));function M(a,b,c){1>b&&(b=1);var d=.5+Math.min(b/33.34,.5);return a/b*d+c*(1-d)}function Pa(a,b,c,d,e,g){return(new Qa(a,b,c,d,e,g)).start()}function Qa(a,b,c,d,e,g){this.W=A(self,"vsync");this.P=a;this.va=g;this.h=b;this.j=c;this.ya=d;this.za=e;this.F=this.D=0;a=new ma;this.ka=a.promise;this.Ha=a.resolve;this.Ga=a.reject;this.da=!1}f=Qa.prototype;
f.start=function(){this.da=!0;if(.02>=Math.abs(this.ya)&&.02>=Math.abs(this.za))this.va(this.h,this.j),this.wa(!0);else{this.D=this.ya;this.F=this.za;var a=this.wb.bind(this),b=this.wa.bind(this,!0);this.W.runAnimMutateSeries(this.P,a,5E3).then(b,b)}return this};f.halt=function(){this.da&&this.wa(!1)};f.then=function(a,b){return a||b?this.ka.then(a,b):this.ka};f.thenAlways=function(a){a=a||Na;return this.then(a,a)};
f.wb=function(a,b){if(!this.da)return!1;this.h+=b*this.D;this.j+=b*this.F;if(!this.va(this.h,this.j))return!1;var c=Math.exp(-a/Oa);this.D=this.ya*c;this.F=this.za*c;return.02<Math.abs(this.D)||.02<Math.abs(this.F)};f.wa=function(a){this.da&&(this.da=!1,this.va(this.h,this.j),a?this.Ha():this.Ga())};function N(a){L.call(this,"tap",a);this.j=this.h=this.B=this.A=0;this.hb=null}r(N,L);N.prototype.onTouchStart=function(a){var b=a.touches;this.hb=a.target;return b&&1==b.length?(this.A=b[0].clientX,this.B=b[0].clientY,!0):!1};N.prototype.onTouchMove=function(a){return(a=a.changedTouches||a.touches)&&1==a.length&&(this.h=a[0].clientX,this.j=a[0].clientY,a=8<=Math.abs(this.j-this.B),8<=Math.abs(this.h-this.A)||a)?!1:!0};N.prototype.onTouchEnd=function(){this.signalReady(0)};
N.prototype.acceptStart=function(){this.signalEmit({clientX:this.h,clientY:this.j,target:this.hb},null);this.signalEnd()};function O(a){L.call(this,"doubletap",a);this.ma=this.j=this.h=this.B=this.A=0;this.Ta=null}r(O,L);f=O.prototype;f.onTouchStart=function(a){return 1<this.ma?!1:(a=a.touches)&&1==a.length?(this.A=a[0].clientX,this.B=a[0].clientY,this.h=a[0].clientX,this.j=a[0].clientY,!0):!1};
f.onTouchMove=function(a){return(a=a.touches)&&1==a.length?(this.h=a[0].clientX,this.j=a[0].clientY,a=8<=Math.abs(this.j-this.B),8<=Math.abs(this.h-this.A)||a?(this.acceptCancel(),!1):!0):!1};f.onTouchEnd=function(a){this.ma++;2>this.ma?this.signalPending(200):(this.Ta=a,this.signalReady(0))};f.acceptStart=function(){this.ma=0;this.signalEmit({clientX:this.h,clientY:this.j},this.Ta);this.signalEnd()};f.acceptCancel=function(){this.ma=0};
function P(a,b,c,d){L.call(this,a,b);this.Ua=c;this.lb=d;this.c=!1;this.F=this.D=this.T=this.O=this.V=this.Fa=this.Ea=this.j=this.h=this.B=this.A=0}r(P,L);f=P.prototype;f.onTouchStart=function(a){a=a.touches;return this.c&&a&&1<a.length?!0:a&&1==a.length?(this.V=Date.now(),this.A=a[0].clientX,this.B=a[0].clientY,!0):!1};
f.onTouchMove=function(a){var b=a.touches;if(b&&1<=b.length){var c=b[0];b=c.clientX;c=c.clientY;this.h=b;this.j=c;if(this.c)this.R(!1,!1,a);else if(a=Math.abs(b-this.A),b=Math.abs(c-this.B),this.Ua&&this.lb)(8<=a||8<=b)&&this.signalReady(-10);else if(this.Ua)if(8<=a&&a>b)this.signalReady(-10);else{if(8<=b)return!1}else if(this.lb)if(8<=b&&b>a)this.signalReady(-10);else{if(8<=a)return!1}else return!1;return!0}return!1};f.onTouchEnd=function(a){var b=a.touches;b&&0==b.length&&this.xa(a)};
f.acceptStart=function(){this.c=!0;this.Ea=this.A;this.Fa=this.B;this.T=this.V;this.A=this.h;this.B=this.j;this.R(!0,!1,null)};f.acceptCancel=function(){this.c=!1};
f.R=function(a,b,c){this.O=Date.now();var d=this.O-this.T;if(!b&&4<d||b&&16<d){var e=M(this.h-this.Ea,d,this.D),g=M(this.j-this.Fa,d,this.F);if(!b||32<d||0!=e||0!=g)this.D=1E-4<Math.abs(e)?e:0,this.F=1E-4<Math.abs(g)?g:0;this.Ea=this.h;this.Fa=this.j;this.T=this.O}this.signalEmit({first:a,last:b,time:this.O,deltaX:this.h-this.A,deltaY:this.j-this.B,startX:this.A,startY:this.B,lastX:this.h,lastY:this.j,velocityX:this.D,velocityY:this.F},c)};f.xa=function(a){this.c&&(this.c=!1,this.R(!1,!0,a),this.signalEnd())};
function Q(a){P.call(this,"swipe-xy",a,!0,!0)}r(Q,P);function Ra(a){L.call(this,"pinch",a);this.c=!1;this.F=this.D=this.T=this.O=this.V=this.Pa=this.Oa=this.Da=this.Ca=this.ha=this.fa=this.ga=this.ea=this.ba=this.$=this.aa=this.Z=0}r(Ra,L);f=Ra.prototype;f.onTouchStart=function(a){a=a.touches;return a?1==a.length||this.c&&2<a.length?!0:2==a.length?(this.V=Date.now(),this.Z=a[0].clientX,this.aa=a[0].clientY,this.$=a[1].clientX,this.ba=a[1].clientY,!0):!1:!1};
f.onTouchMove=function(a){var b=a.touches;if(!b||0==b.length)return!1;if(1==b.length)return!0;this.ea=b[0].clientX;this.ga=b[0].clientY;this.fa=b[1].clientX;this.ha=b[1].clientY;if(this.c)return this.R(!1,!1,a),!0;a=this.ea-this.Z;b=this.ga-this.aa;var c=this.fa-this.$,d=this.ha-this.ba,e=10<=Math.abs(a+c),g=10<=Math.abs(b+d);if((0<a*c||0<b*d)&&(e||g))return!1;a=this.ea-this.Z;b=this.ga-this.aa;c=this.fa-this.$;d=this.ha-this.ba;e=4<=Math.abs(a-c);g=4<=Math.abs(b-d);0>=a*c&&0>=b*d&&(e||g)&&this.signalReady(0);
return!0};f.onTouchEnd=function(a){var b=a.touches;b&&2>b.length&&this.xa(a)};f.acceptStart=function(){this.c=!0;this.T=this.V;this.Da=this.Ca=0;this.Oa=.5*(this.Z+this.$);this.Pa=.5*(this.aa+this.ba);this.R(!0,!1,null)};f.acceptCancel=function(){this.c=!1};
f.R=function(a,b,c){this.O=Date.now();var d=this.O-this.T,e=Math.abs(this.ea-this.Z-(this.fa-this.$)),g=Math.abs(this.ga-this.aa-(this.ha-this.ba));if(!b&&4<d||b&&16<d)this.D=M(e-this.Ca,d,this.D),this.F=M(g-this.Da,d,this.F),this.D=1E-4<Math.abs(this.D)?this.D:0,this.F=1E-4<Math.abs(this.F)?this.F:0,this.Ca=e,this.Da=g,this.T=this.O;d=this.Z;var h=this.$,l=this.aa,k=this.ba,m=this.ea,p=this.fa,xa=this.ga,ya=this.ha;this.signalEmit({first:a,last:b,time:this.O,centerClientX:this.Oa,centerClientY:this.Pa,
dir:Math.sign((m-p)*(m-p)+(xa-ya)*(xa-ya)-((d-h)*(d-h)+(l-k)*(l-k))),deltaX:.5*e,deltaY:.5*g,velocityX:.5*this.D,velocityY:.5*this.F},c)};f.xa=function(a){this.c&&(this.c=!1,this.R(!1,!0,a),this.signalEnd())};var R,Sa="Webkit webkit Moz moz ms O o".split(" ");function Ta(a,b){for(var c in b){var d=a,e=b[c];var g=d.style;var h=c;if(2>h.length?0:0==h.lastIndexOf("--",0))g=h;else{R||(R=Object.create(null));var l=R[h];if(!l){l=h;if(void 0===g[h]){var k=h;k=k.charAt(0).toUpperCase()+k.slice(1);b:{for(var m=0;m<Sa.length;m++){var p=Sa[m]+k;if(void 0!==g[p]){k=p;break b}}k=""}void 0!==g[k]&&(l=k)}R[h]=l}g=l}g&&((2>g.length?0:0==g.lastIndexOf("--",0))?d.style.setProperty(g,e):d.style[g]=e)}};function S(a,b,c,d){return Math.min(Math.max(a,b-d),c+d)}function Ua(a,b){return Math.sqrt(a*a+b*b)};function Va(a,b,c,d){var e={detail:c};Object.assign(e,d);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,e);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!e.bubbles,!!e.cancelable,c);return a}function Wa(a,b,c){return Ha(a,b,c)};function Xa(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}};function Ya(a,b){return function(c){return a+(b-a)*c}};var Fa=B(.4,0,.2,1.4),Za={svg:!0,DIV:!0,"AMP-IMG":!0,"AMP-LAYOUT":!0,"AMP-SELECTOR":!0};function $a(a){a=AMP.BaseElement.call(this,a)||this;a.C=null;a.Ja=null;a.qa=0;a.pa=0;a.w=null;a.X=null;a.ta=null;a.m=1;a.Ia=1;a.Y=1;a.S=3;a.Wa=0;a.Xa=0;a.Va=1;a.A=0;a.B=0;a.I=0;a.J=0;a.$a=0;a.ab=0;a.Ya=0;a.Za=0;a.M=null;a.ia=null;a.fb=!1;a.L=null;a.Ra=!1;a.kb=null;a.sa=null;a.ra=null;a.cb=0;a.bb=0;return a}r($a,AMP.BaseElement);f=$a.prototype;
f.buildCallback=function(){var a=this;this.Ja=ra(this.element);var b=this.getRealChildren();la(1==b.length,"%s should have its target element as its one and only child","amp-pan-zoom");la(Za[b[0].tagName],"%s is not supported by %s",b[0].tagName,"amp-pan-zoom");this.element.classList.add("i-amphtml-pan-zoom");this.C=b[0];this.C.classList.add("i-amphtml-pan-zoom-child");this.S=T(this,"max-scale",3);this.Va=T(this,"initial-scale",1);this.Wa=T(this,"initial-x",0);this.Xa=T(this,"initial-y",0);this.fb=
this.element.hasAttribute("reset-on-resize");this.Ra=this.element.hasAttribute("disable-double-tap");this.registerAction("transform",function(b){var c=b.args;if(c)return a.transform(c.x||0,c.y||0,c.scale||1)})};f.transform=function(a,b,c){var d=this;U(this,c);var e=V(this,a,!1),g=W(this,b,!1);return X(this,c,e,g,!0).then(function(){return ab(d)})};f.onMeasureChanged=function(){this.fb&&bb(this)};f.layoutCallback=function(){cb(this);ta(this.element).scheduleLayout(this.element,this.C);return bb(this).then(db(this))};
f.pauseCallback=function(){eb(this)};f.resumeCallback=function(){this.C&&ta(this.element).scheduleLayout(this.element,this.C);db(this)};f.unlayoutCallback=function(){eb(this);return!0};f.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"fill"==a||"responsive"==a};
function cb(a){a.L=a.element.ownerDocument.createElement("div");a.L.classList.add("amp-pan-zoom-in-icon");a.L.classList.add("amp-pan-zoom-button");a.L.addEventListener("click",function(){a.L.classList.contains("amp-pan-zoom-in-icon")?(a.transform(0,0,a.S),fb(a)):(a.transform(0,0,a.Y),gb(a))});a.element.appendChild(a.L)}function T(a,b,c){a=a.element;return a.hasAttribute(b)?parseInt(a.getAttribute(b),10):c}
function bb(a){return a.mutateElement(function(){Ta(a.C,{width:"",height:""})}).then(function(){return a.measureMutateElement(function(){a.qa=a.C.scrollWidth;a.pa=a.C.scrollHeight;var b=a.qa/a.pa;a.w=a.getViewport().getLayoutRect(a.element);var c=Math.min(a.w.width/b,a.w.height),d=Math.min(a.w.height*b,a.w.width);16>=Math.abs(d-a.qa)&&16>=Math.abs(c-a.pa)&&(d=a.qa,c=a.pa);a.X=Xa(0,0,Math.round(d),Math.round(c));c=a.w;c=c.width/c.height;b=Math.max(c/b,b/c);isNaN(b)||(a.S=Math.max(a.S,b));a.Ia=a.m=
a.Va;a.A=a.I=a.Wa;a.B=a.J=a.Xa},function(){Ta(a.C,{width:a.X.width+"px",height:a.X.height+"px"})},a.C)}).then(function(){var b=a.C.getBoundingClientRect();b=Xa(Number(b.left),Number(b.top),Number(b.width),Number(b.height));a.X.top=b.top-a.w.top;a.X.left=b.left-a.w.left;U(a,a.m);return Y(a)})}function db(a){hb(a);a.kb=Wa(a.element,"mousedown",function(b){return ib(a,b)})}function Z(a){a&&a()}function eb(a){a.M&&(a.M.cleanup(),a.M=null);Z(a.kb);Z(a.ra);Z(a.sa)}
function ib(a,b){if(2!=b.button){b.preventDefault();var c=b.clientX;b=b.clientY;Z(a.ra);Z(a.sa);a.bb=c;a.cb=b;a.ra=Wa(a.element,"mousemove",function(b){b.preventDefault();jb(a,b.clientX-a.bb,b.clientY-a.cb)});a.sa=Wa(a.win,"mouseup",function(b){b.preventDefault();kb(a);Z(a.ra);Z(a.sa)})}}
function hb(a){a.M||(a.M=Ma(a.element),a.M.onPointerDown(function(){a.ia&&a.ia.halt()}),a.M.onGesture(Ra,function(b){return a.handlePinch(b.data)}),a.Ra||(a.M.onGesture(O,function(b){return a.handleDoubleTap(b.data)}),a.M.onGesture(N,function(b){b=b.data;var c=Va(a.win,"click",null,{bubbles:!0});b.target.dispatchEvent(c)})))}f.handleDoubleTap=function(a){var b=this;return lb(this,a.clientX,a.clientY).then(function(){return ab(b)})};
f.handlePinch=function(a){var b=this,c=a.last;return mb(this,a.centerClientX,a.centerClientY,a.deltaX,a.deltaY,a.dir).then(function(){if(c)return ab(b)})};f.handleSwipe=function(a){var b=this,c=a.last,d=a.velocityX,e=a.velocityY;return jb(this,a.deltaX,a.deltaY).then(function(){if(c)return nb(b,d,e)})};function ob(a){a.ta=a.M.onGesture(Q,function(b){return a.handleSwipe(b.data)})}function V(a,b,c){var d=.25*a.w.width;return S(b,a.$a,a.Ya,c&&1<a.m?d:0)}
function W(a,b,c){var d=.25*a.w.height;return S(b,a.ab,a.Za,c&&1<a.m?d:0)}function U(a,b){var c=a.X,d=c.width,e=c.left,g=c.height,h=c.top;c=a.w;var l=c.height;a.$a=Math.min(0,c.width-(e+d*(b+1)/2));a.Ya=Math.max(0,(d*b-d)/2-e);a.ab=Math.min(0,l-(h+g*(b+1)/2));a.Za=Math.max(0,(g*b-g)/2-h)}
function Y(a){var b=a.m,c=a.I,d=a.J,e=a.C;return a.mutateElement(function(){var a=c;var h=d;"number"==typeof a&&(a+="px");void 0===h?a="translate("+a+")":("number"==typeof h&&(h+="px"),a="translate("+a+", "+h+")");Ta(e,{transform:a+" scale("+(b+")")})},e)}function jb(a,b,c){var d=V(a,a.A+b,!0),e=W(a,a.B+c,!0);return X(a,a.m,d,e,!1)}
function nb(a,b,c){a.ia=Pa(a.C,a.I,a.J,b,c,function(b,c){b=V(a,b,!0);c=W(a,c,!0);if(1>Math.abs(b-a.I)&&1>Math.abs(c-a.J))return!1;X(a,a.m,b,c,!1);return!0});return a.ia.thenAlways(function(){a.ia=null;return kb(a)})}function lb(a,b,c){var d=a.m==a.Y?a.S:a.Y;b=a.w.width/2-(b-(a.w.left-a.getViewport().getScrollLeft()));c=a.w.height/2-(c-(a.w.top-a.getViewport().getScrollTop()));return pb(a,d,b,c,!0)}
function mb(a,b,c,d,e,g){if(0==g)return fa();var h=a.w,l=h.width;h=h.height;var k=Ua(d,e);d=a.Ia*(1+g*k/100);var m=l/2-(b-(a.w.left-a.getViewport().getScrollLeft())),p=h/2-(c-(a.w.top-a.getViewport().getScrollTop()));return pb(a,d,Math.min(k/100,1)*m,Math.min(k/100,1)*p,!1)}function pb(a,b,c,d,e){b=S(b,a.Y,a.S,.25);if(b==a.m)return fa();U(a,b);c=V(a,a.A+c*b,!1);d=W(a,a.B+d*b,!1);return X(a,b,c,d,e)}
function gb(a){a.L&&(a.L.classList.add("amp-pan-zoom-in-icon"),a.L.classList.remove("amp-pan-zoom-out-icon"))}function fb(a){a.L&&(a.L.classList.remove("amp-pan-zoom-in-icon"),a.L.classList.add("amp-pan-zoom-out-icon"))}function ab(a){return kb(a).then(function(){a.m<=a.Y?(a.ta&&(a.ta(),a.ta=null,a.M.removeGesture(Q)),gb(a),a.C.classList.remove("i-amphtml-pan-zoom-scrollable")):(ob(a),fb(a),a.C.classList.add("i-amphtml-pan-zoom-scrollable"))})}
function X(a,b,c,d,e){var g=b-a.m,h=Ua(c-a.I,d-a.J),l=e?250*Math.min(1,Math.max(.01*h,Math.abs(g))):0;if(16<l&&e){var k=Ya(a.m,b),m=Ya(a.I,c),p=Ya(a.J,d);return Ea(a.C,function(b){a.m=k(b);a.I=m(b);a.J=p(b);Y(a)},l).thenAlways(function(){a.m=b;a.I=c;a.J=d;Y(a)})}a.m=b;a.I=c;a.J=d;return Y(a)}
function kb(a){var b=S(a.m,a.Y,a.S,0);b!=a.m&&U(a,b);var c=V(a,a.I/a.m*b,!1),d=W(a,a.J/a.m*b,!1);return X(a,b,c,d,!0).then(function(){a.Ia=a.m;a.A=a.I;a.B=a.J;var b=Va(a.win,"amp-pan-zoom.transformEnd",{scale:a.m,x:a.I,y:a.J});a.Ja.trigger(a.element,"transformEnd",b,3);a.element.dispatchCustomEvent("transformEnd")})}(function(a){a.registerElement("amp-pan-zoom",$a,".i-amphtml-pan-zoom{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.i-amphtml-pan-zoom-child{position:absolute}.i-amphtml-pan-zoom-scrollable{cursor:all-scroll}.amp-pan-zoom-button{position:absolute;right:12px;width:36px;height:36px;bottom:12px;background-repeat:no-repeat;background-position:50%;box-shadow:1px 1px 2px;background-color:#fff;border-radius:3px}.amp-pan-zoom-in-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.amp-pan-zoom-out-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 13H5v-2h14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}\n/*# sourceURL=/extensions/amp-pan-zoom/0.1/amp-pan-zoom.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-pan-zoom-0.1.js.map