(self.AMP=self.AMP||[]).push({n:"amp-carousel",v:"2007102309000",f:(function(AMP,_){
var h,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var p;
if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var ca={a:!0},da={};try{da.__proto__=ca;q=da.a;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=p,r;function t(){return r?r:r=Promise.resolve(void 0)};function fa(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ha=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var u=self.AMP_CONFIG||{},ia=("string"==typeof u.cdnProxyRegex?new RegExp(u.cdnProxyRegex):u.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function ja(a){if(self.document&&self.document.head&&(!self.location||!ia.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}u.cdnUrl||ja("runtime-host");u.geoApiUrl||ja("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var v=self.__AMP_LOG;function w(a,b){return 0<a&&0<b?a%b:(a%b+b)%b};var ka=Object.prototype.hasOwnProperty;function x(a){return a||{}};function y(a){return 2>a.length?!1:0==a.lastIndexOf("--",0)};var z,la="Webkit webkit Moz moz ms O o".split(" ");function A(a,b,c){if(y(b))return b;z||(z=Object.create(null));var d=z[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<la.length;f++){var g=la[f]+e;if(void 0!==a[g]){e=g;break a}}e=""}var k=e;void 0!==a[k]&&(d=k)}c||(z[b]=d)}return d}function ma(a,b){a=a.style;for(var c in b)a.setProperty(A(a,c),b[c].toString(),"important")}
function B(a,b,c){(b=A(a.style,b,void 0))&&(y(b)?a.style.setProperty(b,c):a.style[b]=c)};function C(a,b){var c=b.getBoundingClientRect();b=c.top;var d=c.bottom,e=c.height,f=c.left,g=c.right;c=c.width;return{start:0==a?f:b,end:0==a?g:d,length:0==a?c:e}}function D(a,b){a=C(a,b);return(a.start+a.end)/2}function E(a,b,c){return"start"==b?C(a,c).start:D(a,c)}function F(a,b,c){0==a?B(b,"width",c+"px"):B(b,"height",c+"px")}function G(a,b,c){a=C(a,b);b=a.end;return a.start<=c&&c<b}function na(a,b,c,d){var e=E(a,b,d),f=E(a,b,c),g=C(a,d).length;return(e-f)/g}
function oa(a,b,c,d,e){var f=E(a,b,c);if(G(a,d[e],f))return e;for(b=1;b<=d.length/2;b++){var g=w(e+b,d.length),k=w(e-b,d.length);if(G(a,d[g],f))return g;if(G(a,d[k],f))return k}};function pa(a,b,c){function d(){e=0;var k=c-(a.Date.now()-f);if(0<k)e=a.setTimeout(d,k);else{var l=g;g=null;b.apply(null,l)}}var e=0,f=0,g=null;return function(b){for(var k=[],m=0;m<arguments.length;++m)k[m-0]=arguments[m];f=a.Date.now();g=k;e||(e=a.setTimeout(d,c))}};var H;function qa(a,b,c,d){var e=a,f=c;var g=function(a){try{return f(a)}catch(n){throw self.__AMP_REPORT_ERROR(n),n;}};var k=ra(),l=!1;d&&(l=d.capture);e.addEventListener(b,g,k?d:l);return function(){e&&e.removeEventListener(b,g,k?d:l);g=e=f=null}}function ra(){if(void 0!==H)return H;H=!1;try{var a={get capture(){H=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return H};function sa(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ta(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function ua(a){return a.closest?a.closest("[i-amphtml-scale-animation]"):ta(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"[i-amphtml-scale-animation]"):!1})}function va(a,b){for(var c=a.length,d=0;d<c;d++)b(a[d],d)};function I(a,b,c,d){var e={detail:c};Object.assign(e,d);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,e);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!e.bubbles,!!e.cancelable,c);return a}function J(a,b,c,d){qa(a,b,c,d)}function wa(a){var b=a,c=qa(window,"touchend",function(a){try{b(a)}finally{b=null,c()}},{capture:!0,passive:!0})};function xa(a){var b=this,c=a.element,d=a.scrollContainer,e=a.advanceable;this.M=a.win;this.h=d;this.Ia=e;this.ea=0;this.A=!1;this.fa=1;this.ga=1E3;this.Ga=this.sa=!1;this.ka=null;this.Ca=Number.POSITIVE_INFINITY;this.Ja=c.getAmpDoc();ya(this,this.ga);this.h.addEventListener("scroll",function(){return b.ma()},!0);J(this.h,"touchstart",function(){return b.na()},{capture:!0,passive:!0});J(c,"amp-carousel:indexchange",function(a){(a=a.detail.actionSource)&&4!==a&&b.stop()})}h=xa.prototype;
h.stop=function(){this.Ga=!0};h.pause=function(){this.sa=!0};h.resume=function(){this.sa=!1;K(this)};h.updateAutoAdvance=function(a){this.A=a;K(this)};h.updateAutoAdvanceCount=function(a){this.fa=a;K(this)};h.updateAutoAdvanceInterval=function(a){this.ga=Math.max(a,1E3);ya(this,this.ga);K(this)};h.updateMaxAdvances=function(a){this.Ca=a};function ya(a,b){var c=pa(a.M,function(){c==a.ka&&za(a)&&(a.Ia.advance(a.fa,{actionSource:4,allowWrap:!0}),a.ea+=a.fa)},b);a.ka=c}
h.na=function(){var a=this;this.pause();wa(function(){a.resume()})};function za(a){return a.A&&a.Ja.isVisible()&&!a.sa&&!a.Ga&&a.ea<a.Ca}h.ma=function(){K(this)};function K(a){za(a)&&a.ka()};function Aa(a){var b=this,c=a.element,d=a.scrollContainer,e=a.runMutate,f=a.stoppable;this.M=a.win;this.h=d;this.K=e;this.j=[];this.w=1;this.L=this.O=!1;this.za=0;c.addEventListener("focus",function(){f.stop()},!0);c.addEventListener("amp-carousel:indexchange",function(a){b.ra(a)})}h=Aa.prototype;h.updateMixedLength=function(a){this.O=a};h.updateUi=function(){var a=this;this.L||(this.L=!0,this.K(function(){a.L=!1;Ba(a);Ca(a)}))};h.updateSlides=function(a){this.j=a;this.updateUi()};
h.updateVisibleCount=function(a){this.w=a;this.updateUi()};function Ba(a){a.O||2<=a.w?(a.h.removeAttribute("aria-live"),a.h.setAttribute("role","list"),a.j.forEach(function(a){a.setAttribute("role","listitem")})):(a.h.setAttribute("aria-live","polite"),a.h.removeAttribute("role"),a.j.forEach(function(a){a.removeAttribute("role")}))}function Ca(a){a.j.forEach(function(b,c){b.setAttribute("aria-hidden",!(a.O||2<=a.w)&&c!==a.za)})}h.ra=function(a){var b=this;this.za=a.detail.index;this.K(function(){Ca(b)})};function Da(a,b){var c=(c=A(a.style,"scrollBehavior",void 0))?y(c)?a.style.getPropertyValue(c):a.style[c]:void 0;B(a,"scrollBehavior","auto");b();B(a,"scrollBehavior",c)}function L(a){return a.reduce(function(a,c){return a+c},0)}
function Ea(a){var b=this,c=a.win,d=a.element,e=a.scrollContainer;a=a.runMutate;this.M=c;this.K=a;this.V=d;this.h=e;this.A=new xa({win:c,element:d,scrollContainer:e,advanceable:this});this.ia=new Aa({win:c,element:d,scrollContainer:e,runMutate:a,stoppable:this.A});this.xa=pa(c,function(){return M(b)},200);this.da=1;this.wa=Number.POSITIVE_INFINITY;this.O=!1;this.j=[];this.Ha=!0;this.L=!1;this.R=[];this.$=[];this.P=[];this.va=[];this.N=this.qa=!1;this.ja=0;this.B=null;this.aa=NaN;this.ta=this.ba=!1;
this.G=void 0;this.C="start";this.D=0;this.ya=this.S=!0;this.o=0;this.Ba=!1;this.Fa=!0;this.w=this.Ea=1;this.h.addEventListener("scroll",function(){return b.ma()},!0);this.h.addEventListener("scrollend",function(){null===b.B&&M(b)},!0);J(this.h,"touchstart",function(){return b.na()},{capture:!0,passive:!0});J(this.h,"wheel",function(){b.G=2;b.B=null;b.N=!1},{capture:!0,passive:!0})}h=Ea.prototype;h.next=function(a){this.advance(this.da,{actionSource:a})};h.prev=function(a){this.advance(-this.da,{actionSource:a})};
h.advance=function(a,b){var c=void 0===b?{}:b;b=c.actionSource;var d=void 0===c.allowWrap?!1:c.allowWrap;c=this.o;var e=this.B;c=null!==e?e:c;var f=c+a,g=this.j.length-1,k=0===c,l=c===g,m=0>f,n=f>g;a=this.isLooping()?w(f,g+1):d?0<a&&Fa(this,c)&&Fa(this,f)?0:m&&k||n&&!l?g:m&&!k||n&&l?0:f:Math.min(Math.max(f,0),g);this.goToSlide(a,{actionSource:b})};h.pauseLayout=function(){this.qa=!0;this.A.pause()};h.resumeLayout=function(){this.qa=!1;this.updateUi();this.A.resume()};h.getCurrentIndex=function(){return this.o};
h.getVisibleCount=function(){return this.w};h.isLooping=function(){return this.Ba&&3<=this.j.length/this.w};h.goToSlide=function(a,b){b=void 0===b?{}:b;var c=void 0===b.smoothScroll?!0:b.smoothScroll;b=b.actionSource;0>a||a>this.j.length-1||isNaN(a)||a===this.o||this.ba||this.ta&&(3===this.G||2===this.G)||(this.N=!1,this.B=a,this.G=b,Ga(this,this.j[a],{smoothScroll:c}))};h.updateAdvanceCount=function(a){this.da=a};h.updateAlignment=function(a){this.C="start"===a?"start":"center";this.updateUi()};
h.updateAutoAdvance=function(a){this.A.updateAutoAdvance(a)};h.updateAutoAdvanceCount=function(a){this.A.updateAutoAdvanceCount(a)};h.updateAutoAdvanceInterval=function(a){this.A.updateAutoAdvanceInterval(a)};h.updateAutoAdvanceLoops=function(a){this.wa=a;this.updateUi()};h.updateForwards=function(a){this.S=a;this.updateUi()};h.updateHideScrollbar=function(a){this.ya=a;this.updateUi()};h.updateHorizontal=function(a){this.D=a?0:1;this.updateUi()};h.updateLoop=function(a){this.Ba=a;this.updateUi()};
h.updateMixedLength=function(a){this.O=a;this.ia.updateMixedLength(a);this.updateUi()};h.updateSlides=function(a){this.j=a;this.ia.updateSlides(a)};h.updateSnap=function(a){this.Fa=a;this.updateUi()};h.updateSnapBy=function(a){this.Ea=Math.max(1,a);this.updateUi()};h.updateUserScrollable=function(a){this.Ha=a;this.updateUi()};
h.updateUi=function(){var a=this;this.L||this.qa||(this.L=!0,this.K(function(){a.L=!1;a.h.setAttribute("mixed-length",a.O);a.h.setAttribute("user-scrollable",a.Ha);a.h.setAttribute("hide-scrollbar",a.ya);a.h.setAttribute("horizontal",0===a.D);a.h.setAttribute("loop",a.isLooping());a.h.setAttribute("snap",a.Fa);ma(a.h,{"--visible-count":a.w});a.j.length&&(a.A.updateMaxAdvances(a.wa*a.j.length-1),Ha(a),Ia(a),Ja(a),M(a,!0))}))};
h.updateVisibleCount=function(a){this.w=Math.max(1,a);this.ia.updateVisibleCount(a);this.updateUi()};function Ka(a,b,c){a.o=b;a.ja=c;a.V.dispatchEvent(I(a.M,"amp-carousel:offsetchange",x({index:b,total:a.j.length,offset:a.S?-c:c,slides:a.j}),{bubbles:!0}))}h.notifyScrollStart=function(){this.V.dispatchEvent(I(this.M,"amp-carousel:scrollstart",null))};h.na=function(){var a=this;this.ba=!0;this.G=3;this.B=null;this.N=!1;wa(function(){a.ba=!1;a.xa()})};
h.ma=function(){this.N?this.N=!1:(this.ta=!0,La(this),this.notifyScrollStart(),this.xa())};function N(a,b,c,d){var e=a.D,f=c*d*(a.S?1:-1);a=0==e?f:0;e=0==e?0:f;B(b,"transform","translate("+a+"px, "+e+"px)");ma(b,{"--content-transform":"translate("+a+"px, "+e+"px)"});b._revolutions=c}function Ma(a,b){a.j.forEach(function(c){N(a,c,0,b)})}function O(a){return a.j.map(function(b){return C(a.D,b).length})}h.isAtEnd=function(){return this.isLooping()?!1:this.S?this.isScrollAtRightEdge():this.isScrollAtLeftEdge()};
h.isAtStart=function(){return this.isLooping()?!1:this.S?this.isScrollAtLeftEdge():this.isScrollAtRightEdge()};h.isScrollAtRightEdge=function(){var a=this.h,b=a.getBoundingClientRect().width;return a.scrollLeft+Math.ceil(b)>=a.scrollWidth};h.isScrollAtLeftEdge=function(){return 0>=this.h.scrollLeft};function P(a){for(var b=[],c=0;c<a;c++){var d=document.createElement("div");d.className="i-amphtml-carousel-spacer";b.push(d)}return b}
function Ha(a){var b=a.D,c=a.j,d=O(a),e=L(d),f=a.isLooping()?c.length:0;a.R.forEach(function(b){a.h.removeChild(b)});a.R=P(f);a.R.forEach(function(e,f){F(b,e,d[f]);a.h.insertBefore(e,c[0])});a.$.forEach(function(b){a.h.removeChild(b)});a.$=P(f);a.$.forEach(function(c,f){F(b,c,d[f]);N(a,c,-1,e);a.h.appendChild(c)});a.P.forEach(function(b){a.h.removeChild(b)});a.P=P(f);a.P.forEach(function(c,f){F(b,c,d[f]);N(a,c,-1,e);a.h.appendChild(c)});a.va=a.R.concat(a.$,a.P)}
function Ia(a){var b=a.j.length,c="start"===a.C,d=1===w(a.w,2),e=c||d?"0%":"50%";va(a.h.children,function(c,d){d=w(d,b);var f=0===w(d,a.Ea);d={"scroll-snap-align":f?a.C:"none","scroll-snap-coordinate":f?e:"none"};for(var g in d)B(c,g,d[g])})}
function Ja(a){var b=a.P,c=a.R,d=a.o,e=a.j,f=Math.max(0,e.length-d-1),g=Math.max(0,d-1);c.forEach(function(a,b){var g=c.length;g=d===b?g:w(d-b,g);a.hidden=g>e.length-1||b<e.length-f});b.forEach(function(a,c){var f=b.length;f=d===c?f:w(c-d,f);a.hidden=f>e.length-1||c>g})}function La(a){var b=a.va,c=a.C,d=a.D,e=a.o,f=a.h,g=a.j,k=L(O(a)),l=!!b.length,m=l?b:g,n=oa(d,c,f,m,l?e+g.length:e);void 0!==n&&(b=n%g.length,c=na(d,c,f,m[n]),Ka(a,b,c),b!==e&&a.K(function(){Na(a,k)}))}
function M(a,b){b=void 0===b?!1:b;var c=a.G;if(!a.ba&&(a.G=void 0,a.ta=!1,a.K(function(){a.V.dispatchEvent(I(a.M,"amp-carousel:scrollpositionchange",null))}),a.aa!==a.o||null!==a.B||b)){null!==a.B&&(a.o=a.B,a.B=null);var d=L(O(a));a.K(function(){var b=a.o;a.aa!==b&&(a.aa=b,a.V.dispatchEvent(I(a.M,"amp-carousel:indexchange",x({index:b,total:a.j.length,actionSource:c,slides:a.j}),{bubbles:!0})));Ka(a,a.o,a.ja);Ma(a,d);Ja(a);Na(a,d);Oa(a)})}}
function Oa(a){var b=a.D,c=a.ja,d=a.h,e=a.j[a.o],f=na(b,a.C,d,e)-c;c=C(b,e).length;var g=f*c;g&&(a.N=!0,Da(d,function(){var a=(0==b?d.scrollLeft:d.scrollTop)+g;0==b?d.scrollLeft=a:d.scrollTop=a}))}function Ga(a,b,c){(c.smoothScroll?function(a,b){return b()}:Da)(a.h,function(){var c=a.D,e=a.h;var f=void 0===f?0:f;var g="start"==a.C,k=C(c,b).length,l=g?C(c,b).start:D(c,b);g=g?C(c,e).start:D(c,e);f=(0==c?e.scrollLeft:e.scrollTop)+(l-g-f*k);0==c?e.scrollLeft=f:e.scrollTop=f})}
function Pa(a,b,c,d){for(var e=a.o,f=a.aa,g=a.j,k=g[e]._revolutions||0,l=d?1:-1,m=1;m<=c;m++){var n=w(e+m*l,g.length);if(n===f&&e!==f)break;N(a,g[n],n>e!==d?k+l:k,b)}}function Na(a,b){if(a.isLooping()){var c=a.j,d=a.w,e="start"===a.C?d-1:0,f=(c.length-1+e)/2;Pa(a,b,Math.round((c.length-1-e)/2),!1);Pa(a,b,Math.round(f),!0)}}function Fa(a,b){var c=a.w;return b>=a.j.length-("start"===a.C?c:c/2)};x({c:!0,v:!0,a:!0,ad:!0,action:!0});function Qa(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var e=a.AMP_CONFIG["allow-doc-opt-in"],f=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
if(f){var g=f.getAttribute("content").split(",");for(c=0;c<g.length;c++)-1!=e.indexOf(g[c])&&(b[g[c]]=!0)}}Object.assign(b,Ra(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];var k=a.location.originalHash||a.location.hash;a=Object.create(null);if(k)for(var l;l=ha.exec(k);){var m=fa(l[1],l[1]);l=l[2]?fa(l[2].replace(/\+/g," "),l[2]):"";a[m]=l}for(k=0;k<c.length;k++)m=a["e-"+c[k]],"1"==m&&(b[c[k]]=!0),
"0"==m&&(b[c[k]]=!1)}return b}function Ra(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){if(v.dev)a=v.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var Sa=[{experimentId:"ampdoc-fie",isTrafficEligible:function(){return!0},branches:["21065001","21065002"]}];function Ta(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c,e;if(Qa(c)["ampdoc-fie"]){c.__AMP_EXPERIMENT_BRANCHES=c.__AMP_EXPERIMENT_BRANCHES||{};for(e=0;e<Sa.length;e++){var f=Sa[e],g=f.experimentId;ka.call(c.__AMP_EXPERIMENT_BRANCHES,g)||(f.isTrafficEligible&&f.isTrafficEligible(c)?!c.__AMP_EXPERIMENT_BRANCHES[g]&&Qa(c)[g]&&(f=f.branches,c.__AMP_EXPERIMENT_BRANCHES[g]=f[Math.floor(Math.random()*f.length)]||null):c.__AMP_EXPERIMENT_BRANCHES[g]=null)}e="21065002"===(c.__AMP_EXPERIMENT_BRANCHES?
c.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else e=!1;var k=e;d&&!k?a=Q(b,"action")?R(b,"action"):null:(a=S(a),a=T(a),a=Q(a,"action")?R(a,"action"):null);return a}function U(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return R(a,b)}function Ua(a){var b=S(a);b=T(b);return R(b,"owners")}function S(a){return a.nodeType?U((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function T(a){a=S(a);return a.isSingleDoc()?a.win:a}
function R(a,b){Q(a,b);a=Va(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function Wa(a){var b=Va(a)["amp-analytics-instrumentation"];if(b){if(b.promise)return b.promise;R(a,"amp-analytics-instrumentation");return b.promise=Promise.resolve(b.obj)}return null}function Va(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function Q(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}
function Xa(){var a=new sa,b=a.promise,c=a.resolve;a=a.reject;b.catch(function(){});return{obj:null,promise:b,resolve:c,reject:a,context:null,ctor:null}};function Ya(a){var b=Wa(T(a));if(b)return b;var c=S(a);return c.waitForBodyOpen().then(function(){var a=c.win;var b=c.win.document.head;if(b){var f={};b=b.querySelectorAll("script[custom-element],script[custom-template]");for(var g=0;g<b.length;g++){var k=b[g];k=k.getAttribute("custom-element")||k.getAttribute("custom-template");f[k]=!0}f=Object.keys(f)}else f=[];return f.includes("amp-analytics")?U(a,"extensions").waitForExtension(a,"amp-analytics"):t()}).then(function(){var b=c.win;if(b.__AMP_EXTENDED_ELEMENTS&&
b.__AMP_EXTENDED_ELEMENTS["amp-analytics"]){b=T(a);var e=Wa(b);e?b=e:(b=Va(b),b["amp-analytics-instrumentation"]=Xa(),b=b["amp-analytics-instrumentation"].promise)}else b=null;return b})};function Za(a){var b=a.ampElement,c=a.intersectionElement,d=void 0===a.intersectionThreshold?.01:a.intersectionThreshold,e=void 0===a.nearbyMarginInPercent?100:a.nearbyMarginInPercent,f=void 0===a.viewportIntersectionThreshold?d:a.viewportIntersectionThreshold,g=void 0===a.viewportIntersectionCallback?function(){}:a.viewportIntersectionCallback;this.H=b;this.Y=Ua(b.element);this.oa=c;this.Aa=d;this.Da=e;this.La=f;this.Ka=g;this.Z=!1;this.m=[];this.W=this.U=this.X=null;this.T=!1}h=Za.prototype;
h.setQueueChanges=function(a){this.Z=a};function $a(a,b,c){c?a.Y.scheduleLayout(a.H.element,b):a.Y.scheduleUnlayout(a.H.element,b)}function ab(a,b,c){a.Y.updateInViewport(a.H.element,b,c);a.Ka(b,c)}
function bb(a){if(!(a.X&&a.U&&a.W)){var b=a.H.win;a.X=new b.IntersectionObserver(function(b){return cb(a,b)},{root:a.oa,rootMargin:a.Da+"%",threshold:a.Aa});a.U=new b.IntersectionObserver(function(b){return db(a,b)},{root:a.oa,rootMargin:a.Da+10+"%",threshold:a.Aa});a.W=new b.IntersectionObserver(function(b){return eb(a,b)},{root:a.oa,rootMargin:"0%",threshold:a.La})}}
function cb(a,b){b.filter(function(a){return a.isIntersecting}).forEach(function(a){a.target.__AMP_CAROUSEL_NEAR_VIEWPORT=0});a.Z||fb(a)}function db(a,b){b.filter(function(a){return!a.isIntersecting}).forEach(function(a){a.target.__AMP_CAROUSEL_NEAR_VIEWPORT=1});a.Z||gb(a)}function eb(a,b){b.forEach(function(a){a.target.__AMP_CAROUSEL_IN_VIEWPORT=a.isIntersecting?0:1});a.Z||hb(a)}h.flushChanges=function(){fb(this);gb(this);hb(this)};
function fb(a){for(var b=0;b<a.m.length;b++){var c=a.m[b];0==c.__AMP_CAROUSEL_NEAR_VIEWPORT&&($a(a,c,!0),c.__AMP_CAROUSEL_NEAR_VIEWPORT=null)}}function gb(a){for(var b=0;b<a.m.length;b++){var c=a.m[b];1==c.__AMP_CAROUSEL_NEAR_VIEWPORT&&($a(a,c,!1),c.__AMP_CAROUSEL_NEAR_VIEWPORT=null)}}function hb(a){for(var b=0;b<a.m.length;b++){var c=a.m[b];0==c.__AMP_CAROUSEL_IN_VIEWPORT?ab(a,c,!0):1==c.__AMP_CAROUSEL_IN_VIEWPORT&&ab(a,c,!1);c.__AMP_CAROUSEL_IN_VIEWPORT=null}}
function V(a,b){if("IntersectionObserver"in a.H.win)if(bb(a),b)for(var c=0;c<a.m.length;c++)a.X.observe(a.m[c]),a.U.observe(a.m[c]),a.W.observe(a.m[c]);else a.X.disconnect(),a.U.disconnect(),a.W.disconnect()}h.updateChildren=function(a){this.m=a;if("IntersectionObserver"in this.H.win){for(a=0;a<this.m.length;a++)this.Y.setOwner(this.m[a],this.H.element);V(this,!1);V(this,this.T)}};h.wasLaidOut=function(){this.T=!0;V(this,this.T)};
h.wasUnlaidOut=function(){this.T=!1;V(this,this.T);for(var a=0;a<this.m.length;a++)$a(this,this.m[a],!1),ab(this,this.m[a],!1)};var W;function ib(a){a=a.ownerDocument||a;W&&W.ownerDocument===a||(W=a.createElement("div"));return jb}function jb(a){var b=W;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function kb(a,b,c){c=void 0===c?{}:c;var d=void 0===d?!0:d;Ya(a).then(function(e){e&&e.triggerEventForTarget(a,b,c,d)})};var lb=['<div class=i-amphtml-carousel-content><div class=i-amphtml-carousel-scroll></div><div class=i-amphtml-carousel-arrows><div tabindex=0 class="amp-carousel-button amp-carousel-button-prev"></div><div tabindex=0 class="amp-carousel-button amp-carousel-button-next"></div></div></div>'];function X(a){a=AMP.BaseElement.call(this,a)||this;a.pa=U(a.win,"platform").isIos();a.l=null;a.h=null;a.j=[];a.o=null;a.ca="carousel";a.ha=!1;a.I=null;a.J=null;a.la=!1;a.ua=null;a.F=null;return a}var Y=AMP.BaseElement;
X.prototype=aa(Y.prototype);X.prototype.constructor=X;if(ea)ea(X,Y);else for(var Z in Y)if("prototype"!=Z)if(Object.defineProperties){var mb=Object.getOwnPropertyDescriptor(Y,Z);mb&&Object.defineProperty(X,Z,mb)}else X[Z]=Y[Z];X.Ma=Y.prototype;
function nb(a){a.registerAction("goToSlide",function(b){var c=b.args,d=b.trust,e=Number(c.index||0),f=!isNaN(e);c=c.index;var g=a.element;if(!v.user)throw Error("failed to call initLogConstructor");v.user.assert(f,"Unexpected slide index for goToSlide action: %s. %s",c,g,void 0,void 0,void 0,void 0,void 0,void 0,void 0);a.l.goToSlide(e,{actionSource:2<=d?0:1})},1);a.registerAction("toggleAutoplay",function(b){b=b.args;ob(a,b?b.toggleOn:void 0)},1)}h=X.prototype;
h.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};h.prerenderAllowed=function(){return!0};
h.buildCallback=function(){var a=this;this.ua=Ta(this.element);var b=this.element,c=this.win,d=this.getRealChildren();b.appendChild(ib(this.element)(lb));this.h=this.element.querySelector(".i-amphtml-carousel-scroll");this.J=this.element.querySelector(".amp-carousel-button-prev");this.I=this.element.querySelector(".amp-carousel-button-next");this.l=new Ea({win:c,element:b,scrollContainer:this.h,initialIndex:Number(this.element.getAttribute("slide")),runMutate:function(b){return a.mutateElement(b)}});
pb(this,d);nb(this);this.element.addEventListener("amp-carousel:indexchange",function(b){a.ra(b)});this.element.addEventListener("amp-carousel:scrollstart",function(){a.F.setQueueChanges(a.pa)});this.element.addEventListener("amp-carousel:scrollpositionchange",function(){a.F.flushChanges();a.F.setQueueChanges(!1);qb(a)});this.J.addEventListener("click",function(){return a.interactionPrev()});this.I.addEventListener("click",function(){return a.interactionNext()});var e=Ua(b);this.F=new Za({ampElement:this,
intersectionElement:this.h,nearbyMarginInPercent:this.pa?200:100,viewportIntersectionCallback:function(b,c){c?e.scheduleResume(a.element,b):e.schedulePause(a.element,b)}});this.F.setQueueChanges(this.pa);this.F.updateChildren(this.j);this.l.updateSlides(this.j);this.l.goToSlide(Number(this.element.getAttribute("slide")||"0"));return this.mutateElement(function(){})};h.isRelayoutNeeded=function(){return!0};
h.layoutCallback=function(){if(ua(this.element))return t();this.F.wasLaidOut();this.l.updateUi();return t()};h.unlayoutCallback=function(){this.F.wasUnlaidOut();return!0};h.pauseCallback=function(){this.l.pauseLayout()};h.resumeCallback=function(){this.l.resumeLayout()};h.mutatedAttributesCallback=function(a){void 0!==a.slide&&this.l.goToSlide(Number(a.slide))};h.goToSlide=function(a){this.l.goToSlide(a,{smoothScroll:!1})};h.interactionNext=function(){"carousel"==this.ca?rb(this,!0):this.l.next(0)};
h.interactionPrev=function(){"carousel"==this.ca?rb(this,!1):this.l.prev(0)};function rb(a,b){var c=a.h;a=(a.win.getComputedStyle(c)||Object.create(null)).direction;c.scrollLeft+=c.offsetWidth*(b?1:-1)*("rtl"==a?-1:1)}
function pb(a,b){var c=a.element.getAttribute("dir")||(a.win.getComputedStyle(a.element)||Object.create(null)).direction,d=a.element.hasAttribute("loop"),e=a.element.getAttribute("autoplay"),f=a.element.getAttribute("delay"),g=a.element.getAttribute("type"),k=null!=e,l=e?Number(e):Number.POSITIVE_INFINITY,m=Math.max(Number(f)||5E3,1E3);a.l.updateForwards("rtl"!=c);a.l.updateLoop(d||k);a.l.updateAutoAdvanceLoops(l);a.l.updateAutoAdvanceInterval(m);a.mutateElement(function(){a.J.setAttribute("dir",
c);a.I.setAttribute("dir",c)});ob(a,k);sb(a,g,b);qb(a)}function tb(a,b){var c=String(b+1),d=String(a.j.length);return" "+(a.element.getAttribute("data-button-count-format")||"(%s of %s)").replace("%s",c).replace("%s",d)}
function qb(a){var b=a.l.getCurrentIndex(),c=a.la&&!a.element.hasAttribute("controls"),d=c||a.l.isAtStart(),e=c||a.l.isAtEnd();a.J.classList.toggle("amp-disabled",d);a.J.setAttribute("aria-disabled",d);var f=a.J;var g=0<=b-1?b-1:a.element.hasAttribute("loop")?a.j.length-1:null;g=null==g?0:g;g=(a.element.getAttribute("data-prev-button-aria-label")||"Previous item in carousel")+tb(a,g);f.title=g;a.I.classList.toggle("amp-disabled",e);a.I.setAttribute("aria-disabled",e);f=a.I;b=b+1<a.j.length?b+1:a.element.hasAttribute("loop")?
0:null;b=null==b?a.j.length-1:b;a=(a.element.getAttribute("data-next-button-aria-label")||"Next item in carousel")+tb(a,b);f.title=a}
function sb(a,b,c){var d="slides"==b;a.ca=d?"slides":"carousel";a.l.updateAlignment(d?"center":"start");a.l.updateHideScrollbar(d);a.l.updateMixedLength(!d);a.l.updateSnap(d);var e=d?"button":"presentation";a.J.setAttribute("role",e);a.I.setAttribute("role",e);a.j=c.map(function(a){a.classList.add("amp-carousel-slide");if(d){var b=document.createElement("div");b.className="i-amphtml-carousel-slotted";b.appendChild(a);return b}return a});a.j.forEach(function(b){a.h.appendChild(b);d?b.classList.add("i-amphtml-carousel-slide-item"):
b.classList.add("amp-scrollable-carousel-slide")})}function ub(a,b){return null==b?"null":a.j[b].getAttribute("data-slide-id")||String(b)}function ob(a,b){a.ha=void 0!==b?b:!a.ha;a.l.updateAutoAdvance(a.ha)}
h.ra=function(a){var b=a.detail;a=b.index;var c=b.actionSource;this.la=this.la||3==c;qb(this);if("carousel"!=this.ca&&(b=this.o,this.o=a,null!=b)){var d=x({index:a});c=2==c||3==c||0==c?3:1;var e=I(this.win,"slidescroll.slideChange",d);this.ua.trigger(this.element,"slideChange",e,c);this.element.dispatchCustomEvent("slideChange",d);d=a-b;c=this.j.length;d=(this.l.isLooping()?0<d&&.5>d/c||0>d&&-.5>d/c:0<d)?"amp-carousel-next":"amp-carousel-prev";a=x({fromSlide:ub(this,b),toSlide:ub(this,a)});kb(this.element,
"amp-carousel-change",a);kb(this.element,d,a)}};(function(a){a.registerElement("amp-carousel",X,".i-amphtml-carousel-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-carousel-scroll{display:-ms-flexbox;display:flex;width:100%;height:100%;-ms-flex-align:center;align-items:center;outline:none;scroll-behavior:smooth;-webkit-overflow-scrolling:touch!important;--visible-count:1}.i-amphtml-carousel-scroll[hide-scrollbar=true]{scrollbar-width:none}.i-amphtml-carousel-scroll[hide-scrollbar=true]::-webkit-scrollbar{display:none;box-sizing:content-box!important}.i-amphtml-carousel-scroll[horizontal=true]{-ms-flex-direction:row;flex-direction:row;scroll-snap-type-x:mandatory;scroll-snap-type:x mandatory;padding-bottom:20px!important;overflow-y:hidden}.i-amphtml-carousel-scroll[horizontal=false]{-ms-flex-direction:column;flex-direction:column;scroll-snap-type-y:mandatory;scroll-snap-type:y mandatory;padding-right:20px!important;overflow-x:hidden}.i-amphtml-carousel-scroll[snap=false]{scroll-snap-type:none}.i-amphtml-carousel-scroll[user-scrollable=false]{overflow:hidden}.i-amphtml-carousel-spacer{z-index:-1}.i-amphtml-carousel-slotted,.i-amphtml-carousel-spacer{box-sizing:border-box!important;margin:0!important;-ms-flex-negative:0!important;flex-shrink:0!important;width:100%;height:100%;scroll-snap-stop:always}.i-amphtml-carousel-scroll[horizontal=true][mixed-length=false]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=true][mixed-length=false]>.i-amphtml-carousel-spacer{width:calc(100%/var(--visible-count))!important;min-width:auto!important;max-width:none!important}.i-amphtml-carousel-scroll[horizontal=false][mixed-length=false]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=false][mixed-length=false]>.i-amphtml-carousel-spacer{height:calc(100%/var(--visible-count))!important;min-height:auto!important;max-height:none!important}.i-amphtml-carousel-scroll[horizontal=true][snap=true][mixed-length=true]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=true][snap=true][mixed-length=true]>.i-amphtml-carousel-spacer{max-width:100%!important}.i-amphtml-carousel-scroll[horizontal=false][snap=true][mixed-length=true]>.i-amphtml-carousel-slotted,.i-amphtml-carousel-scroll[horizontal=false][snap=true][mixed-length=true]>.i-amphtml-carousel-spacer{max-height:100%!important}.i-amphtml-carousel-scroll>.i-amphtml-carousel-slotted{will-change:transform}amp-carousel .i-amphtml-carousel-scroll[horizontal=true]{padding-bottom:0!important}amp-carousel:not([type=slides]) .i-amphtml-carousel-scroll{display:block!important;white-space:nowrap!important}amp-carousel:not([type=slides]) .i-amphtml-carousel-content{position:static}.amp-scrollable-carousel-slide{display:inline-block!important;margin-left:8px;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0}.amp-scrollable-carousel-slide:first-child{margin-left:0px;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0}.i-amphtml-carousel-arrows{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;pointer-events:none}.amp-carousel-button[dir=rtl]{transform:scaleX(-1)}.amp-carousel-button{position:relative;box-sizing:border-box;height:34px;width:34px;margin:16px;border-style:none;border-radius:2px;background-color:rgba(0,0,0,0.5);background-position:50% 50%;background-repeat:no-repeat;z-index:10;pointer-events:all}.amp-carousel-button.amp-disabled{animation:none;opacity:0;visibility:hidden;pointer-events:none}.amp-carousel-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff'%3E%3Cpath d='M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z'/%3E%3C/svg%3E\");background-size:18px 18px}.amp-carousel-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='%23fff'%3E%3Cpath d='M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z'/%3E%3C/svg%3E\");background-size:18px 18px}.i-amphtml-carousel-slide-item{position:relative!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center!important;justify-content:center!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-carousel-slide-item>*{width:100%;height:100%;overflow:hidden!important}.amp-carousel-slide>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}\n/*# sourceURL=/extensions/amp-carousel/0.2/amp-carousel.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-carousel-0.2.js.map
