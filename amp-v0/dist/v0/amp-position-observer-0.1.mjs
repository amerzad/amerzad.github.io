(self.AMP=self.AMP||[]).push({n:"amp-position-observer",v:"2008290323002",f:function(AMP,_){function l(a,b=""){try{return decodeURIComponent(a)}catch(c){return b}}let m=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;let n=self.AMP_CONFIG||{},p=("string"==typeof n.cdnProxyRegex?new RegExp(n.cdnProxyRegex):n.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function q(a){if(self.document&&self.document.head&&(!self.location||!p.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}n.cdnUrl||q("runtime-host");n.geoApiUrl||q("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let r=self.__AMP_LOG;function t(){if(!r.user)throw Error("failed to call initLogConstructor");return r.user}function u(a,b,c){return t().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function v(a){return a||{}}v({c:!0,v:!0,a:!0,ad:!0});function w(a){let b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(d){}let c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(let b=0;b<c.length;b++)0!=c[b].length&&("-"==c[b][0]?a[c[b].substr(1)]=!1:a[c[b]]=!0);return a}function x(a){let b=a.ownerDocument.defaultView;var c=b.__AMP_TOP||(b.__AMP_TOP=b);let d=b!=c;if(c.__AMP__EXPERIMENT_TOGGLES)var g=c.__AMP__EXPERIMENT_TOGGLES;else{c.__AMP__EXPERIMENT_TOGGLES=Object.create(null);g=c.__AMP__EXPERIMENT_TOGGLES;if(c.AMP_CONFIG)for(var f in c.AMP_CONFIG){var e=c.AMP_CONFIG[f];"number"===typeof e&&0<=e&&1>=e&&(g[f]=Math.random()<e)}if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-doc-opt-in"])&&0<c.AMP_CONFIG["allow-doc-opt-in"].length&&(f=c.AMP_CONFIG["allow-doc-opt-in"],e=c.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=e.getAttribute("content").split(",");for(var h=0;h<e.length;h++)-1!=f.indexOf(e[h])&&(g[e[h]]=!0)}Object.assign(g,w(c));if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-url-opt-in"])&&0<c.AMP_CONFIG["allow-url-opt-in"].length){f=c.AMP_CONFIG["allow-url-opt-in"];c=c.location.originalHash||c.location.hash;e=Object.create(null);if(c)for(var k;k=m.exec(c);)h=l(k[1],k[1]),k=k[2]?l(k[2].replace(/\+/g," "),k[2]):"",e[h]=k;c=e;for(e=0;e<f.length;e++)h=c[`e-${f[e]}`],"1"==h&&(g[f[e]]=!0),"0"==h&&(g[f[e]]=!1)}}let Q=!!g["ampdoc-fie"];d&&!Q?a=y(b,"action")?z(b,"action"):null:(a=A(a),a=B(a),a=y(a,"action")?z(a,"action"):null);return a}function C(a){var b=D;let c=A(a);{var d=B(c);let a=E(d);let f=a["position-observer"];f||(f=a["position-observer"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});f.ctor||f.obj||(f.ctor=b,f.context=c,f.resolve&&z(d,"position-observer"))}}function F(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return z(a,b)}function G(a,b){var c=A(a);c=B(c);return z(c,b)}function A(a){return a.nodeType?F((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function B(a){a=A(a);return a.isSingleDoc()?a.win:a}function z(a,b){y(a,b);a=E(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function E(a){let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function y(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function H(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function I(a,b){return a.top<b.top?"top":a.bottom>b.bottom?"bottom":"inside"}function J(a,b){return a&&b?a.left==b.left&&a.top==b.top&&a.width==b.width&&a.height==b.height:!1}class K{constructor(a,b,c,d){this.element=b;this.P=d;this.fidelity=c;this.turn=0==c?Math.floor(4*Math.random()):0;this.B=null;this.j=G(a,"viewport")}update(a){if(!a){if(0!=this.turn){this.turn--;return}0==this.fidelity&&(this.turn=4)}let b=this.j.getSize(),c=H(0,0,b.width,b.height);this.j.getClientRectAsync(this.element).then(a=>{var b={positionRect:a,viewportRect:c,relativePos:null},d=this.B;if(!(d&&J(d.positionRect,b.positionRect)&&J(d.viewportRect,b.viewportRect))){d=b.positionRect;b.relativePos=I(d,b.viewportRect);var e=b.viewportRect;d.top<=e.bottom&&e.top<=d.bottom&&d.left<=e.right&&e.left<=d.right?(this.B=b,this.P(b)):this.B&&(this.B=null,b.positionRect=null,this.P(b))}})}}function L(a){u(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(a),"Invalid length value: %s",a);return a}function M(a,b,c){let d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function N(a,b){function c(){d=0;let e=500-(a.Date.now()-g);if(0<e)d=a.setTimeout(c,e);else{var h=f;f=null;b.apply(null,h)}}let d=0,g=0,f=null;return function(...b){g=a.Date.now();f=b;d||(d=a.setTimeout(c,500))}}function O(a){a.K=!0;a.H.push(a.j.onScroll(()=>{a.W();a.L=!0;a.M||P(a)}));a.H.push(a.j.onResize(()=>{a.updateAllEntries(!0)}))}function R(a){for(a.K=!1;a.H.length;)a.H.pop()()}function P(a){a.updateAllEntries();a.M=!0;a.L?a.Z.measure(()=>{P(a)}):a.M=!1}class D{constructor(a){this.V=a;this.U=a.win;this.h=[];this.Z=F(this.U,"vsync");this.j=G(a,"viewport");this.H=[];this.K=this.M=this.L=!1;this.W=N(this.U,()=>{this.L=!1})}observe(a,b,c){let d=new K(this.V,a,b,c);this.h.push(d);this.K||O(this);d.update();return()=>{for(let a=0;a<this.h.length;a++)if(this.h[a]==d){this.h.splice(a,1);0==this.h.length&&R(this);break}}}unobserve(a){for(let b=0;b<this.h.length;b++)if(this.h[b].element==a){this.h.splice(b,1);0==this.h.length&&R(this);return}if(r.dev)a=r.dev;else throw Error("failed to call initLogConstructor");a.error("POSITION_OBSERVER","cannot unobserve unobserved element")}updateAllEntries(a){for(let b=0;b<this.h.length;b++)this.h[b].update(a)}}function S(a){let b=a.element.getAttribute("intersection-ratios");if(b){let c=b.trim().split(" ");a.G=T(c[0]);a.o=a.G;c[1]&&(a.o=T(c[1]))}var c=a.element.getAttribute("viewport-margins");c&&(c=c.trim().split(" "),a.N=c[0],a.J=a.N,c[1]&&(a.J=c[1]));a.F=a.element.getAttribute("target")}function U(a){let b;b=a.F?t().assertElement(a.win.document.getElementById(a.F),"No element found with id:"+a.F):a.element.parentNode;a.win.document.body===b&&(b=a.win.document.documentElement);return b}function V(a){let b=a.j.getScrollTop(),c=v({"start-scroll-offset":b,"end-scroll-offset":b+a.R,"initial-inview-percent":a.D}),d=M(a.win,"amp-position-observer.scroll",v({percent:a.D,positionObserverData:c}));a.w.trigger(a.element,"scroll",d,1)}function T(a){let b=parseFloat(a);u(0<=b&&1>=b,"Ratios must be a decimal between 0 and 1: "+a);return b}function W(a,b){b="number"==typeof b?b+"px":b&&/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(b)?/^\d+(\.\d+)?$/.test(b)?b+"px":b:void 0;b=L(b);var c=b;L(c);c=u(/[a-z]+/i.exec(c),"Failed to read units from %s",c)[0];var d=parseFloat(b);d="number"===typeof d&&isFinite(d)?d:void 0;if(!d)return 0;u("px"==c||"vh"==c,"Only pixel or vh are valid as units for exclusion margins: "+b);"vh"==c&&(d=d/100*a.I.height);return d}class X extends AMP.BaseElement{constructor(a){super(a);this.j=this.m=this.w=null;this.l=!1;this.o=this.G=0;this.J=this.N="0";this.S=this.C=0;this.A=this.F=this.I=null;this.R=this.D=0;this.O=this.T=!1}buildCallback(){this.getAmpDoc().whenFirstVisible().then(this.X.bind(this));this.T=this.element.hasAttribute("once")}X(){S(this);this.w=x(this.element);this.j=G(this.element,"viewport");this.m||(C(this.getAmpDoc()),this.m=G(this.element,"position-observer"));this.getAmpDoc().whenReady().then(()=>{let a=U(this);this.m.observe(a,1,this.Y.bind(this))})}Y(a){if(!this.T||!this.O){var b=this.l,c=this.I&&this.I.height;this.A||(this.A=a.viewportRect.height);var d=this.A-a.viewportRect.height,g=0;150>Math.abs(d)?g=d:this.A=null;a.viewportRect=H(a.viewportRect.left,a.viewportRect.top,a.viewportRect.width,a.viewportRect.height+g);this.I=a.viewportRect;c!=a.viewportRect.height&&(this.C=W(this,this.N),this.S=W(this,this.J));d=a.viewportRect;var f=d=H(d.left,d.top+this.C,d.width,d.height-this.S-this.C);d=a.positionRect;var e;if(d)if(g=e=I(d,f),"inside"==g)this.l=!0;else{var h=d.height*("top"==g?this.G:this.o);this.l="bottom"==g?d.top<=f.bottom-h:d.bottom>=f.top+h}else this.l=!1,e=a.relativePos;b&&!this.l&&(this.D="bottom"==e?0:1,V(this),g=M(this.win,"amp-position-observer.exit",v({})),this.w.trigger(this.element,"exit",g,1),this.O=!0);!b&&this.l&&(g=M(this.win,"amp-position-observer.enter",v({})),this.w.trigger(this.element,"enter",g,1));this.l&&(d&&(g=f.height+d.height-(d.height*this.o+d.height*this.G),d=Math.abs(d.top-this.C-(f.height-d.height*this.o)),this.D=d/g,this.R=g-d),V(this))}}$(){if(this.m){let a=U(this);this.m.unobserve(a);this.m=null}}}(a=>{a.registerElement("amp-position-observer",X)})(self.AMP)}});