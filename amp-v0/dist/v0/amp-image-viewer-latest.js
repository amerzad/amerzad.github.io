(self.AMP=self.AMP||[]).push({n:"amp-image-viewer",v:"2007102309000",f:(function(AMP,_){
var f,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ca={a:!0},da={};try{da.__proto__=ca;n=da.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=m;
function q(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(ea)ea(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.vb=b.prototype}var r;function t(){return r?r:r=Promise.resolve(void 0)};var u=self.AMP_CONFIG||{},fa=("string"==typeof u.cdnProxyRegex?new RegExp(u.cdnProxyRegex):u.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function ha(a){if(self.document&&self.document.head&&(!self.location||!fa.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}u.cdnUrl||ha("runtime-host");u.geoApiUrl||ha("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function x(){if(w.dev)return w.dev;throw Error("failed to call initLogConstructor");}function y(a,b,c,d){if(!w.user)throw Error("failed to call initLogConstructor");return w.user.assert(a,b,c,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var z,ia="Webkit webkit Moz moz ms O o".split(" ");function A(a,b){for(var c in b){var d=a,e=b[c];var g=d.style;var h=c;if(2>h.length?0:0==h.lastIndexOf("--",0))g=h;else{z||(z=Object.create(null));var k=z[h];if(!k){k=h;if(void 0===g[h]){var l=h;l=l.charAt(0).toUpperCase()+l.slice(1);b:{for(var p=0;p<ia.length;p++){var v=ia[p]+l;if(void 0!==g[v]){l=v;break b}}l=""}void 0!==g[l]&&(k=l)}z[h]=k}g=k}g&&((2>g.length?0:0==g.lastIndexOf("--",0))?d.style.setProperty(g,e):d.style[g]=e)}}
function ja(a){var b=!1;void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")};function B(a,b,c,d){var e=new ka(a,b,c,d);return e.solveYValueFromXValue.bind(e)}function ka(a,b,c,d){this.y0=this.x0=0;this.x1=a;this.y1=b;this.x2=c;this.y2=d;this.y3=this.x3=1}f=ka.prototype;f.solveYValueFromXValue=function(a){return this.getPointY(this.solvePositionFromXValue(a))};
f.solvePositionFromXValue=function(a){var b=(a-this.x0)/(this.x3-this.x0);if(0>=b)return 0;if(1<=b)return 1;for(var c=0,d=1,e=0,g=0;8>g;g++){e=this.getPointX(b);var h=(this.getPointX(b+1E-6)-e)/1E-6;if(1E-6>Math.abs(e-a))return b;if(1E-6>Math.abs(h))break;else e<a?c=b:d=b,b-=(e-a)/h}for(g=0;1E-6<Math.abs(e-a)&&8>g;g++)e<a?(c=b,b=(b+d)/2):(d=b,b=(b+c)/2),e=this.getPointX(b);return b};
f.getPointX=function(a){if(0==a)return this.x0;if(1==a)return this.x3;var b=this.lerp(this.x0,this.x1,a),c=this.lerp(this.x1,this.x2,a),d=this.lerp(this.x2,this.x3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};f.getPointY=function(a){if(0==a)return this.y0;if(1==a)return this.y3;var b=this.lerp(this.y0,this.y1,a),c=this.lerp(this.y1,this.y2,a),d=this.lerp(this.y2,this.y3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};f.lerp=function(a,b,c){return a+c*(b-a)};
var la=B(.25,.1,.25,1),ma=B(.42,0,1,1),na=B(0,0,.58,1),oa=B(.42,0,.58,1),pa={linear:function(a){return a},ease:la,"ease-in":ma,"ease-out":na,"ease-in-out":oa};function qa(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return B(b[0],b[1],b[2],b[3])}return null}return pa[a]}return a};function C(a,b){return function(c){return a+(b-a)*c}};function ra(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});function D(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return sa(a,b)}function va(a){var b=wa(a);b=wa(b);b=b.isSingleDoc()?b.win:b;return sa(b,"owners")}function wa(a){return a.nodeType?D((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function sa(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function xa(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function ya(a){return a.closest?a.closest("[i-amphtml-scale-animation]"):xa(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"[i-amphtml-scale-animation]"):!1})}function za(a){/^[\w-]+$/.test("img");return a.querySelector("img")};function Aa(){}function E(a){this.V=a;this.Y=D(self,"vsync");this.Xa=null;this.J=[]}function Ba(a,b,c){var d=Ca;return(new E(a)).setCurve(d).add(0,b,1).start(c)}E.prototype.setCurve=function(a){a&&(this.Xa=qa(a));return this};E.prototype.add=function(a,b,c,d){this.J.push({delay:a,func:b,duration:c,curve:qa(d)});return this};E.prototype.start=function(a){return new F(this.Y,this.V,this.J,this.Xa,a)};
function F(a,b,c,d,e){this.Y=a;this.V=b;this.J=[];for(b=0;b<c.length;b++){var g=c[b];this.J.push({delay:g.delay,func:g.func,duration:g.duration,curve:g.curve||d,started:!1,completed:!1})}this.kb=e;this.X=Date.now();this.W=!0;this.bb={};c=new ra;this.sa=c.promise;this.Pa=c.resolve;this.Oa=c.reject;this.eb=this.Y.createAnimTask(this.V,{mutate:this.tb.bind(this)});this.Y.canAnimate(this.V)?this.eb(this.bb):(x().warn("Animation","cannot animate"),G(this,!1,0))}
F.prototype.then=function(a,b){return a||b?this.sa.then(a,b):this.sa};F.prototype.thenAlways=function(a){a=a||Aa;return this.then(a,a)};F.prototype.halt=function(a){G(this,!1,a||0)};function G(a,b,c){if(a.W){a.W=!1;if(0!=c){1<a.J.length&&a.J.sort(function(a,b){return a.delay+a.duration-(b.delay+b.duration)});try{if(0<c)for(c=0;c<a.J.length;c++)a.J[c].func(1,!0);else for(var d=a.J.length-1;0<=d;d--)a.J[d].func(0,!1)}catch(e){x().error("Animation","completion failed: "+e,e),b=!1}}b?a.Pa():a.Oa()}}
F.prototype.tb=function(){if(this.W){for(var a=Date.now(),b=Math.min((a-this.X)/this.kb,1),c=0;c<this.J.length;c++){var d=this.J[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.J.length;c++)if(d=this.J[c],d.started&&!d.completed)a:{var e;if(0<d.duration){var g=e=Math.min((b-d.delay)/d.duration,1);if(d.curve&&1!=g)try{g=d.curve(e)}catch(h){x().error("Animation","step curve failed: "+h,h);G(this,!1,0);break a}}else g=e=1;1==e&&(d.completed=!0);try{d.func(g,d.completed)}catch(h){x().error("Animation",
"step mutate failed: "+h,h),G(this,!1,0)}}1==b?G(this,!0,0):this.Y.canAnimate(this.V)?this.eb(this.bb):(x().warn("Animation","cancel animation"),G(this,!1,0))}};function H(){this.M=null}f=H.prototype;f.add=function(a){var b=this;this.M||(this.M=[]);this.M.push(a);return function(){b.remove(a)}};f.remove=function(a){this.M&&(a=this.M.indexOf(a),-1<a&&this.M.splice(a,1))};f.removeAll=function(){this.M&&(this.M.length=0)};f.fire=function(a){if(this.M)for(var b=this.M,c=0;c<b.length;c++)(0,b[c])(a)};f.getHandlerCount=function(){return this.M?this.M.length:0};function I(a,b){var c=this;this.fb=D(a,"timer");this.lb=b;this.jb=0;this.ta=-1;this.Ka=0;this.W=!1;this.ib=function(){c.ya()}}I.prototype.isPending=function(){return-1!=this.ta};I.prototype.schedule=function(a){a=a||this.jb;this.W&&10>a&&(a=10);var b=Date.now()+a;return!this.isPending()||-10>b-this.Ka?(this.cancel(),this.Ka=b,this.ta=this.fb.delay(this.ib,a),!0):!1};I.prototype.ya=function(){this.ta=-1;this.Ka=0;this.W=!0;this.lb();this.W=!1};
I.prototype.cancel=function(){this.isPending()&&(this.fb.cancel(this.ta),this.ta=-1)};function Da(a,b){for(var c=0;c<a.length;c++)if(b(a[c],c,a))return c;return-1};var J;function Ea(a){if(void 0!==J)return J;J=!1;try{var b={get passive(){J=!0;return!1}};a.addEventListener("test-options",null,b);a.removeEventListener("test-options",null,b)}catch(c){}return J};function Fa(a,b,c,d){this.type=a;this.data=b;this.time=c;this.event=d}
function Ga(a,b,c){this.U=a;this.w=[];this.fa=[];this.P=[];this.D=[];this.h=null;this.qb=b;this.rb=c;this.Da=!1;this.ya=new I(a.ownerDocument.defaultView,this.Ya.bind(this));this.ab=new H;this.ra=Object.create(null);this.Ua=this.pb.bind(this);this.Sa=this.nb.bind(this);this.Ta=this.ob.bind(this);this.Ra=this.mb.bind(this);var d=Ea(a.ownerDocument.defaultView);this.U.addEventListener("touchstart",this.Ua,d?{passive:!0}:!1);this.U.addEventListener("touchend",this.Sa);this.U.addEventListener("touchmove",
this.Ta,d?{passive:!0}:!1);this.U.addEventListener("touchcancel",this.Ra);this.La=!1}function Ha(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=a.__AMP_Gestures;d||(d=new Ga(a,b,c),a.__AMP_Gestures=d);return d}f=Ga.prototype;f.cleanup=function(){this.U.removeEventListener("touchstart",this.Ua);this.U.removeEventListener("touchend",this.Sa);this.U.removeEventListener("touchmove",this.Ta);this.U.removeEventListener("touchcancel",this.Ra);delete this.U.__AMP_Gestures;this.ya.cancel()};
f.onGesture=function(a,b){var c=new a(this),d=c.getType(),e=this.ra[d];e||(this.w.push(c),e=new H,this.ra[d]=e);return e.add(b)};f.removeGesture=function(a){var b=(new a(this)).getType();if(a=this.ra[b]){a.removeAll();a=Da(this.w,function(a){return a.getType()==b});if(0>a)return!1;this.w.splice(a,1);this.P.splice(a,1);this.D.splice(a,1);this.fa.splice(a,1);delete this.ra[b];return!0}return!1};f.onPointerDown=function(a){return this.ab.add(a)};
f.pb=function(a){var b=Date.now();this.Da=!1;this.ab.fire(a);for(var c=0;c<this.w.length;c++)if(!this.P[c]&&(this.D[c]&&this.D[c]<b&&K(this,c),this.w[c].onTouchStart(a))){var d=c;this.fa[d]=!0;this.D[d]=0}L(this,a)};f.ob=function(a){for(var b=Date.now(),c=0;c<this.w.length;c++)this.fa[c]&&(this.D[c]&&this.D[c]<b?K(this,c):this.w[c].onTouchMove(a)||K(this,c));L(this,a)};
f.nb=function(a){for(var b=Date.now(),c=0;c<this.w.length;c++)if(this.fa[c])if(this.D[c]&&this.D[c]<b)K(this,c);else{this.w[c].onTouchEnd(a);var d=!this.D[c],e=this.D[c]<b;this.h!=this.w[c]&&(d||e)&&K(this,c)}L(this,a)};f.mb=function(a){for(var b=0;b<this.w.length;b++){var c=b;this.P[c]=0;K(this,c)}L(this,a)};
function L(a,b){var c=!!a.h||a.Da;a.Da=!1;if(!c)for(var d=Date.now(),e=0;e<a.w.length;e++)if(a.P[e]||a.D[e]&&a.D[e]>=d){c=!0;break}c?(b.stopPropagation(),a.qb||b.preventDefault()):a.rb&&b.stopPropagation();a.La&&(a.La=!1,a.Ya())}
f.Ya=function(){for(var a=Date.now(),b=-1,c=0;c<this.w.length;c++)if(!this.P[c])this.D[c]&&this.D[c]<a&&K(this,c);else if(-1==b||this.P[c]>this.P[b])b=c;if(-1!=b){var d=0;for(c=0;c<this.w.length;c++)!this.P[c]&&this.fa[c]&&(d=Math.max(d,this.D[c]-a));if(2>d){a=b;c=this.w[a];for(var e=0;e<this.w.length;e++)if(e!=a){var g=e;this.P[g]=0;K(this,g)}this.P[a]=0;this.D[a]=0;this.h=c;c.acceptStart()}else this.ya.schedule(d)}};function K(a,b){a.fa[b]=!1;a.D[b]=0;a.P[b]||a.w[b].acceptCancel()}
function M(a,b){this.ub=a;this.wa=b}f=M.prototype;f.getType=function(){return this.ub};f.signalReady=function(a){var b=this.wa;if(b.h)this.acceptCancel();else{for(var c=Date.now(),d=0;d<b.w.length;d++)b.w[d]==this&&(b.P[d]=c+a,b.D[d]=0);b.La=!0}};f.signalPending=function(a){var b=this.wa;if(b.h)this.acceptCancel();else for(var c=Date.now(),d=0;d<b.w.length;d++)b.w[d]==this&&(b.D[d]=c+a)};f.signalEnd=function(){var a=this.wa;a.h==this&&(a.h=null,a.Da=!0)};
f.signalEmit=function(a,b){var c=this.wa.ra[this.getType()];c&&c.fire(new Fa(this.getType(),a,Date.now(),b))};f.acceptStart=function(){};f.acceptCancel=function(){};f.onTouchStart=function(){return!1};f.onTouchMove=function(){return!1};f.onTouchEnd=function(){};function Ia(){}var Ja=Math.round(-16.67/Math.log(.95));function N(a,b,c){1>b&&(b=1);var d=.5+Math.min(b/33.34,.5);return a/b*d+c*(1-d)}function Ka(a,b,c,d,e,g){return(new La(a,b,c,d,e,g)).start()}function La(a,b,c,d,e,g){this.Y=D(self,"vsync");this.V=a;this.Ea=g;this.j=b;this.l=c;this.Ha=d;this.Ia=e;this.C=this.B=0;a=new ra;this.sa=a.promise;this.Pa=a.resolve;this.Oa=a.reject;this.ga=!1}f=La.prototype;
f.start=function(){this.ga=!0;if(.02>=Math.abs(this.Ha)&&.02>=Math.abs(this.Ia))this.Ea(this.j,this.l),this.Fa(!0);else{this.B=this.Ha;this.C=this.Ia;var a=this.sb.bind(this),b=this.Fa.bind(this,!0);this.Y.runAnimMutateSeries(this.V,a,5E3).then(b,b)}return this};f.halt=function(){this.ga&&this.Fa(!1)};f.then=function(a,b){return a||b?this.sa.then(a,b):this.sa};f.thenAlways=function(a){a=a||Ia;return this.then(a,a)};
f.sb=function(a,b){if(!this.ga)return!1;this.j+=b*this.B;this.l+=b*this.C;if(!this.Ea(this.j,this.l))return!1;var c=Math.exp(-a/Ja);this.B=this.Ha*c;this.C=this.Ia*c;return.02<Math.abs(this.B)||.02<Math.abs(this.C)};f.Fa=function(a){this.ga&&(this.ga=!1,this.Ea(this.j,this.l),a?this.Pa():this.Oa())};function O(a){M.call(this,"tap",a);this.l=this.j=this.o=this.m=0;this.cb=null}q(O,M);O.prototype.onTouchStart=function(a){var b=a.touches;this.cb=a.target;return b&&1==b.length?(this.m=b[0].clientX,this.o=b[0].clientY,!0):!1};O.prototype.onTouchMove=function(a){return(a=a.changedTouches||a.touches)&&1==a.length&&(this.j=a[0].clientX,this.l=a[0].clientY,a=8<=Math.abs(this.l-this.o),8<=Math.abs(this.j-this.m)||a)?!1:!0};O.prototype.onTouchEnd=function(){this.signalReady(0)};
O.prototype.acceptStart=function(){this.signalEmit({clientX:this.j,clientY:this.l,target:this.cb},null);this.signalEnd()};function P(a){M.call(this,"doubletap",a);this.T=this.l=this.j=this.o=this.m=0;this.Za=null}q(P,M);f=P.prototype;f.onTouchStart=function(a){return 1<this.T?!1:(a=a.touches)&&1==a.length?(this.m=a[0].clientX,this.o=a[0].clientY,this.j=a[0].clientX,this.l=a[0].clientY,!0):!1};
f.onTouchMove=function(a){return(a=a.touches)&&1==a.length?(this.j=a[0].clientX,this.l=a[0].clientY,a=8<=Math.abs(this.l-this.o),8<=Math.abs(this.j-this.m)||a?(this.acceptCancel(),!1):!0):!1};f.onTouchEnd=function(a){this.T++;2>this.T?this.signalPending(200):(this.Za=a,this.signalReady(0))};f.acceptStart=function(){this.T=0;this.signalEmit({clientX:this.j,clientY:this.l},this.Za);this.signalEnd()};f.acceptCancel=function(){this.T=0};
function Q(a,b,c,d){M.call(this,a,b);this.$a=c;this.gb=d;this.h=!1;this.C=this.B=this.O=this.H=this.X=this.$=this.Z=this.l=this.j=this.o=this.m=0}q(Q,M);f=Q.prototype;f.onTouchStart=function(a){a=a.touches;return this.h&&a&&1<a.length?!0:a&&1==a.length?(this.X=Date.now(),this.m=a[0].clientX,this.o=a[0].clientY,!0):!1};
f.onTouchMove=function(a){var b=a.touches;if(b&&1<=b.length){var c=b[0];b=c.clientX;c=c.clientY;this.j=b;this.l=c;if(this.h)this.R(!1,!1,a);else if(a=Math.abs(b-this.m),b=Math.abs(c-this.o),this.$a&&this.gb)(8<=a||8<=b)&&this.signalReady(-10);else if(this.$a)if(8<=a&&a>b)this.signalReady(-10);else{if(8<=b)return!1}else if(this.gb)if(8<=b&&b>a)this.signalReady(-10);else{if(8<=a)return!1}else return!1;return!0}return!1};f.onTouchEnd=function(a){var b=a.touches;b&&0==b.length&&this.ha(a)};
f.acceptStart=function(){this.h=!0;this.Z=this.m;this.$=this.o;this.O=this.X;this.m=this.j;this.o=this.l;this.R(!0,!1,null)};f.acceptCancel=function(){this.h=!1};
f.R=function(a,b,c){this.H=Date.now();var d=this.H-this.O;if(!b&&4<d||b&&16<d){var e=N(this.j-this.Z,d,this.B),g=N(this.l-this.$,d,this.C);if(!b||32<d||0!=e||0!=g)this.B=1E-4<Math.abs(e)?e:0,this.C=1E-4<Math.abs(g)?g:0;this.Z=this.j;this.$=this.l;this.O=this.H}this.signalEmit({first:a,last:b,time:this.H,deltaX:this.j-this.m,deltaY:this.l-this.o,startX:this.m,startY:this.o,lastX:this.j,lastY:this.l,velocityX:this.B,velocityY:this.C},c)};f.ha=function(a){this.h&&(this.h=!1,this.R(!1,!0,a),this.signalEnd())};
function R(a){Q.call(this,"swipe-xy",a,!0,!0)}q(R,Q);function S(a){M.call(this,"tapzoom",a);this.h=!1;this.C=this.B=this.O=this.H=this.$=this.Z=this.T=this.l=this.j=this.o=this.m=0}q(S,M);f=S.prototype;f.onTouchStart=function(a){return this.h?!1:(a=a.touches)&&1==a.length?(this.m=a[0].clientX,this.o=a[0].clientY,!0):!1};
f.onTouchMove=function(a){var b=a.touches;if(b&&1==b.length){this.j=b[0].clientX;this.l=b[0].clientY;if(this.h)this.R(!1,!1,a);else if(a=8<=Math.abs(this.l-this.o),8<=Math.abs(this.j-this.m)||a){if(0==this.T)return this.acceptCancel(),!1;this.signalReady(0)}return!0}return!1};f.onTouchEnd=function(a){this.h?this.ha(a):(this.T++,1==this.T?this.signalPending(400):this.acceptCancel())};f.acceptStart=function(){this.T=0;this.h=!0;this.R(!0,!1,null)};f.acceptCancel=function(){this.T=0;this.h=!1};
f.R=function(a,b,c){this.H=Date.now();a?this.B=this.C=0:2<this.H-this.O&&(this.B=N(this.j-this.Z,this.H-this.O,this.B),this.C=N(this.l-this.$,this.H-this.O,this.C));this.Z=this.j;this.$=this.l;this.O=this.H;this.signalEmit({first:a,last:b,centerClientX:this.m,centerClientY:this.o,deltaX:this.j-this.m,deltaY:this.l-this.o,velocityX:this.B,velocityY:this.C},c)};f.ha=function(a){this.h&&(this.h=!1,this.R(!1,!0,a),this.signalEnd())};
function T(a){M.call(this,"pinch",a);this.h=!1;this.C=this.B=this.O=this.H=this.X=this.Wa=this.Va=this.Na=this.Ma=this.la=this.ja=this.ka=this.ia=this.ea=this.ca=this.da=this.ba=0}q(T,M);f=T.prototype;f.onTouchStart=function(a){a=a.touches;return a?1==a.length||this.h&&2<a.length?!0:2==a.length?(this.X=Date.now(),this.ba=a[0].clientX,this.da=a[0].clientY,this.ca=a[1].clientX,this.ea=a[1].clientY,!0):!1:!1};
f.onTouchMove=function(a){var b=a.touches;if(!b||0==b.length)return!1;if(1==b.length)return!0;this.ia=b[0].clientX;this.ka=b[0].clientY;this.ja=b[1].clientX;this.la=b[1].clientY;if(this.h)return this.R(!1,!1,a),!0;a=this.ia-this.ba;b=this.ka-this.da;var c=this.ja-this.ca,d=this.la-this.ea,e=10<=Math.abs(a+c),g=10<=Math.abs(b+d);if((0<a*c||0<b*d)&&(e||g))return!1;a=this.ia-this.ba;b=this.ka-this.da;c=this.ja-this.ca;d=this.la-this.ea;e=4<=Math.abs(a-c);g=4<=Math.abs(b-d);0>=a*c&&0>=b*d&&(e||g)&&this.signalReady(0);
return!0};f.onTouchEnd=function(a){var b=a.touches;b&&2>b.length&&this.ha(a)};f.acceptStart=function(){this.h=!0;this.O=this.X;this.Na=this.Ma=0;this.Va=.5*(this.ba+this.ca);this.Wa=.5*(this.da+this.ea);this.R(!0,!1,null)};f.acceptCancel=function(){this.h=!1};
f.R=function(a,b,c){this.H=Date.now();var d=this.H-this.O,e=Math.abs(this.ia-this.ba-(this.ja-this.ca)),g=Math.abs(this.ka-this.da-(this.la-this.ea));if(!b&&4<d||b&&16<d)this.B=N(e-this.Ma,d,this.B),this.C=N(g-this.Na,d,this.C),this.B=1E-4<Math.abs(this.B)?this.B:0,this.C=1E-4<Math.abs(this.C)?this.C:0,this.Ma=e,this.Na=g,this.O=this.H;d=this.ba;var h=this.ca,k=this.da,l=this.ea,p=this.ia,v=this.ja,ta=this.ka,ua=this.la;this.signalEmit({first:a,last:b,time:this.H,centerClientX:this.Va,centerClientY:this.Wa,
dir:Math.sign((p-v)*(p-v)+(ta-ua)*(ta-ua)-((d-h)*(d-h)+(k-l)*(k-l))),deltaX:.5*e,deltaY:.5*g,velocityX:.5*this.B,velocityY:.5*this.C},c)};f.ha=function(a){this.h&&(this.h=!1,this.R(!1,!0,a),this.signalEnd())};function U(a,b,c,d){return Math.min(Math.max(a,b-d),c+d)}function Ma(a,b){return Math.sqrt(a*a+b*b)};function V(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}};var Na=/(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;function Oa(a){var b=a.getAttribute("srcset");if(b){a=[];for(var c;c=Na.exec(b);){var d=c[1],e=void 0,g=void 0;if(c[2]){var h=c[3].toLowerCase();if("w"==h)e=parseInt(c[2],10);else if("x"==h)g=parseFloat(c[2]);else continue}else g=1;a.push({url:d,width:e,dpr:g})}return new W(a)}var k=y(a.getAttribute("src"),'Either non-empty "srcset" or "src" attribute must be specified: %s',a);return new W([{url:k,width:void 0,dpr:1}])}
function W(a){y(0<a.length,"Srcset must have at least one source");this.va=a;for(var b=!1,c=!1,d=0;d<a.length;d++){var e=a[d];b=b||!!e.width;c=c||!!e.dpr}y(!!(b^c),"Srcset must have width or dpr sources, but not both");a.sort(b?Pa:Qa);this.hb=b}
W.prototype.select=function(a,b){if(this.hb){b*=a;a=this.va;for(var c=0,d=Infinity,e=Infinity,g=0;g<a.length;g++){var h=a[g].width,k=Math.abs(h-b);if(k<=1.1*d||1.2<b/e)c=g,d=k,e=h;else break}b=c}else{a=this.va;c=0;d=Infinity;for(e=0;e<a.length;e++)if(g=Math.abs(a[e].dpr-b),g<=d)c=e,d=g;else break;b=c}return this.va[b].url};W.prototype.getUrls=function(){return this.va.map(function(a){return a.url})};
W.prototype.stringify=function(a){for(var b=[],c=this.va,d=0;d<c.length;d++){var e=c[d],g=e.url;a&&(g=a(g));g=this.hb?g+(" "+e.width+"w"):g+(" "+e.dpr+"x");b.push(g)}return b.join(", ")};function Pa(a,b){y(a.width!=b.width,"Duplicate width: %s",a.width);return a.width-b.width}function Qa(a,b){y(a.dpr!=b.dpr,"Duplicate dpr: %s",a.dpr);return a.dpr-b.dpr};var Ca=B(.4,0,.2,1.4),Ra=["aria-label","aria-describedby","aria-labelledby"],Sa={"amp-img":!0,"amp-anim":!0};function Ta(a){a=AMP.BaseElement.call(this,a)||this;a.F=null;a.Qa=null;a.aa=0;a.ua=0;a.G=null;a.N=null;a.Ca=null;a.Ba=null;a.A=1;a.Aa=1;a.Ga=1;a.Ja=1;a.xa=2;a.m=0;a.o=0;a.K=0;a.L=0;a.oa=0;a.pa=0;a.ma=0;a.na=0;a.I=null;a.qa=null;a.za=null;a.S=null;return a}q(Ta,AMP.BaseElement);f=Ta.prototype;
f.buildCallback=function(){this.element.classList.add("i-amphtml-image-viewer");var a=this.getRealChildren();y(1==a.length,"%s should have its target element as its one and only child","amp-image-viewer");y(Sa[a[0].tagName.toLowerCase()],"%s is not supported by %s",a[0].tagName,"amp-image-viewer");this.za=a[0];va(this.element).setOwner(this.za,this.element)};f.onMeasureChanged=function(){var a=this;ya(this.element)||this.S&&this.S.then(function(){return X(a)})};
f.layoutCallback=function(){var a=this;if(this.S)return this.S;if(ya(this.element))return t();var b=this.za,c=!!this.F,d=c?t():b.signals().whenSignal("load-end");c||va(this.element).scheduleLayout(this.element,b);return this.S=d.then(function(){return Ua(a)}).then(function(){return X(a)}).then(function(){return Va(a)})};f.pauseCallback=function(){var a=this;this.S&&this.S.then(function(){X(a);a.I&&(a.I.cleanup(),a.I=null)})};
f.resumeCallback=function(){var a=this;this.S&&this.S.then(function(){X(a);Va(a)})};f.unlayoutCallback=function(){this.I&&(this.I.cleanup(),this.I=null);this.S=null;return!0};f.isLayoutSupported=function(a){return"fill"==a};f.getImageBox=function(){return this.N};f.getImage=function(){return this.F};
f.getImageBoxWithOffset=function(){if(0==this.K&&0==this.L||!this.N)return this.N;var a=(this.A-1)/2;var b=this.N;b=V(b.left-b.width*a,b.top-b.height*a,b.width*(1+2*a),b.height*(1+2*a));var c=this.K,d=this.L;return 0==c&&0==d||0==b.width&&0==b.height?b:V(b.left+c,b.top+d,b.width,b.height)};function Wa(a,b){var c=za(b);a.measureElement(function(){c?(a.aa=c.naturalWidth||b.offsetWidth,a.ua=c.naturalHeight||b.offsetHeight):(a.aa=b.offsetWidth,a.ua=b.offsetHeight)})}
function Ua(a){if(a.F)return t();a.F=a.element.ownerDocument.createElement("img");a.F.classList.add("i-amphtml-image-viewer-image");var b=a.za;Wa(a,b);a.Qa=Oa(b);return a.mutateElement(function(){A(a.F,{top:0,left:0,width:0,height:0});ja(b);a.element.appendChild(a.F);return b.getImpl().then(function(b){b.propagateAttributes(Ra,a.F)})})}
function X(a){return a.measureElement(function(){var b=a.element.getBoundingClientRect();b=V(Number(b.left),Number(b.top),Number(b.width),Number(b.height));a.G=b;b=a.aa/a.ua;var c=Math.min(a.G.width/b,a.G.height),d=Math.min(a.G.height*b,a.G.width);16>=Math.abs(d-a.aa)&&Math.abs(16>=c-a.ua)&&(d=a.aa,c=a.ua);a.N=V(Math.round((a.G.width-d)/2),Math.round((a.G.height-c)/2),Math.round(d),Math.round(c));c=a.G.width/a.G.height;a.xa=Math.max(2,Math.max(c/b,b/c));a.Aa=a.A=1;a.m=a.K=0;a.o=a.L=0;Xa(a,a.A)}).then(function(){var b=
a.F;return a.mutateElement(function(){A(b,{top:a.N.top+"px",left:a.N.left+"px",width:a.N.width+"px",height:a.N.height+"px"});Y(a)},b)}).then(function(){return Ya(a)})}function Ya(a){if(!a.Qa)return t();a.Ga=Math.max(a.Ga,a.A);var b=a.Qa.select(Math.max(a.N.width*a.Ga,a.aa),self.devicePixelRatio||1);return b==a.F.getAttribute("src")?t():a.mutateElement(function(){a.F.setAttribute("src",b)},a.F)}
function Va(a){a.I=Ha(a.element);a.I.onGesture(P,function(b){var c=b.data;Za(a,1==a.A?a.xa:a.Ja,a.G.width/2-c.clientX,a.G.height/2-c.clientY,!0).then(function(){return $a(a)})});a.I.onGesture(O,function(b){b=b.data.target;var c=a.win;var d={detail:null};Object.assign(d,{bubbles:!0});"function"==typeof c.CustomEvent?d=new c.CustomEvent("click",d):(c=c.document.createEvent("CustomEvent"),c.initCustomEvent("click",!!d.bubbles,!!d.cancelable,null),d=c);b.dispatchEvent(d)});a.I.onGesture(S,function(b){b=
b.data;var c=b.deltaX,d=b.deltaY;ab(a,b.centerClientX,b.centerClientY,c,d,Math.abs(d)>Math.abs(c)?Math.sign(d):Math.sign(-c));b.last&&bb(a,b.centerClientX,b.centerClientY,b.deltaX,b.deltaY,b.velocityY,b.velocityY)});a.I.onGesture(T,function(b){b=b.data;ab(a,b.centerClientX,b.centerClientY,b.deltaX,b.deltaY,b.dir);b.last&&$a(a)})}
function cb(a){a.Ca=a.I.onGesture(R,function(b){b=b.data;var c=b.deltaY,d=U(a.m+b.deltaX,a.oa,a.ma,0);c=U(a.o+c,a.pa,a.na,0);Z(a,a.A,d,c,!1);b.last&&db(a,b.velocityX,b.velocityY)});a.Ba=a.I.onPointerDown(function(){a.qa&&a.qa.halt()})}function Xa(a,b){var c=0,d=0,e=a.G.height-a.N.height*b;0<=e?d=c=0:(d=e/2,c=-d);var g=0,h=0;b=a.G.width-a.N.width*b;0<=b?h=g=0:(h=b/2,g=-h);a.oa=h;a.pa=d;a.ma=g;a.na=c}
function Y(a){var b=a.F;var c=a.K;var d=a.L;"number"==typeof c&&(c+="px");void 0===d?c="translate("+c+")":("number"==typeof d&&(d+="px"),c="translate("+c+", "+d+")");A(b,{transform:c+" scale("+(a.A+")")})}function db(a,b,c){a.qa=Ka(a.F,a.K,a.L,b,c,function(b,c){b=U(b,a.oa,a.ma,0);c=U(c,a.pa,a.na,0);if(1>Math.abs(b-a.K)&&1>Math.abs(c-a.L))return!1;Z(a,a.A,b,c,!1);return!0});a.qa.thenAlways(function(){a.qa=null;return eb(a)})}
function ab(a,b,c,d,e,g){if(0!=g){var h=Ma(d,e);g=a.Aa*(1+g*h/100);var k=a.G.width/2-b,l=a.G.height/2-c;d=Math.min(k,h/100*k);e=Math.min(l,h/100*l);Za(a,g,d,e,!1)}}function Za(a,b,c,d,e){b=U(b,a.Ja,a.xa,.25);if(b!=a.A)return Xa(a,b),c=U(a.m+c*b,a.oa,a.ma,0),d=U(a.o+d*b,a.pa,a.na,0),Z(a,b,c,d,e)}function bb(a,b,c,d,e,g,h){(0==g&&0==h?t():Ka(a.F,d,e,g,h,function(d,e){ab(a,b,c,d,e,Math.abs(e)>Math.abs(d)?Math.sign(e):Math.sign(-d));return!0}).thenAlways()).then(function(){$a(a)})}
function $a(a){var b=a.A>a.Aa;return eb(a).then(function(){b&&Ya(a);1<a.A?cb(a):(a.Ca&&(a.Ca(),a.Ca=null,a.I.removeGesture(R)),a.Ba&&(a.Ba(),a.Ba=null))})}function Z(a,b,c,d,e){var g=b-a.A,h=Ma(c-a.K,d-a.L),k=0;e&&(k=Math.min(250,Math.max(2.5*h,250*Math.abs(g))));if(16<k&&e){var l=C(a.A,b),p=C(a.K,c),v=C(a.L,d);e=Ba(a.F,function(b){a.A=l(b);a.K=p(b);a.L=v(b);Y(a)},k).thenAlways(function(){a.A=b;a.K=c;a.L=d;Y(a)})}else a.A=b,a.K=c,a.L=d,Y(a),e=e?t():void 0;return e}
function eb(a){var b=U(a.A,a.Ja,a.xa,0);b!=a.A&&Xa(a,b);var c=U(a.K/a.A*b,a.oa,a.ma,0),d=U(a.L/a.A*b,a.pa,a.na,0);return Z(a,b,c,d,!0).then(function(){a.Aa=a.A;a.m=a.K;a.o=a.L})}(function(a){a.registerElement("amp-image-viewer",Ta,".i-amphtml-image-viewer-image{position:absolute;-o-object-fit:contain;object-fit:contain}.i-amphtml-image-viewer{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;transform:translateZ(0)}.i-amphtml-image-viewer>amp-img{min-width:1px;min-height:1px}\n/*# sourceURL=/extensions/amp-image-viewer/0.1/amp-image-viewer.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-image-viewer-0.1.js.map