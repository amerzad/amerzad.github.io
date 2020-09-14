(self.AMP=self.AMP||[]).push({n:"amp-app-banner",v:"2008290323002",f:function(AMP,_){let h;function m(){return h?h:h=Promise.resolve(void 0)}class n{constructor(){let a,b;this.promise=new Promise((c,d)=>{a=c;b=d});this.resolve=a;this.reject=b}}function p(a,b=""){try{return decodeURIComponent(a)}catch(c){return b}}let q=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;let r=self.AMP_CONFIG||{},t=("string"==typeof r.cdnProxyRegex?new RegExp(r.cdnProxyRegex):r.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function u(a){if(self.document&&self.document.head&&(!self.location||!t.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}r.cdnUrl||u("runtime-host");r.geoApiUrl||u("amp-geo-api");function v(a){var b=null;let c="";for(let a=0;a<arguments.length;a++){var d=arguments[a];if(d instanceof Error&&!b)a:{b=d;if((d=Object.getOwnPropertyDescriptor(b,"message"))&&d.writable)break a;d=b.stack;let a=Error(b.message);for(let c in b)a[c]=b[c];a.stack=d;b=a}else c&&(c+=" "),c+=d}b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function w(a){let b=v.apply(null,arguments);setTimeout(()=>{self.__AMP_REPORT_ERROR(b);throw b})}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let x=self.__AMP_LOG;function y(){if(!x.user)throw Error("failed to call initLogConstructor");return x.user}function z(){if(x.dev)return x.dev;throw Error("failed to call initLogConstructor")}function A(a,b,c,d){return y().assert(a,b,c,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function B(a){return a||{}}B({c:!0,v:!0,a:!0,ad:!0});function C(a){let b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(d){}let c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(let b=0;b<c.length;b++)0!=c[b].length&&("-"==c[b][0]?a[c[b].substr(1)]=!1:a[c[b]]=!0);return a}function D(a){let b=a.ownerDocument.defaultView;var c=b.__AMP_TOP||(b.__AMP_TOP=b);let d=b!=c;if(c.__AMP__EXPERIMENT_TOGGLES)var e=c.__AMP__EXPERIMENT_TOGGLES;else{c.__AMP__EXPERIMENT_TOGGLES=Object.create(null);e=c.__AMP__EXPERIMENT_TOGGLES;if(c.AMP_CONFIG)for(var g in c.AMP_CONFIG){var f=c.AMP_CONFIG[g];"number"===typeof f&&0<=f&&1>=f&&(e[g]=Math.random()<f)}if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-doc-opt-in"])&&0<c.AMP_CONFIG["allow-doc-opt-in"].length&&(g=c.AMP_CONFIG["allow-doc-opt-in"],f=c.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){f=f.getAttribute("content").split(",");for(var k=0;k<f.length;k++)-1!=g.indexOf(f[k])&&(e[f[k]]=!0)}Object.assign(e,C(c));if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-url-opt-in"])&&0<c.AMP_CONFIG["allow-url-opt-in"].length){g=c.AMP_CONFIG["allow-url-opt-in"];c=c.location.originalHash||c.location.hash;f=Object.create(null);if(c)for(var l;l=q.exec(c);)k=p(l[1],l[1]),l=l[2]?p(l[2].replace(/\+/g," "),l[2]):"",f[k]=l;c=f;for(f=0;f<g.length;f++)k=c[`e-${g[f]}`],"1"==k&&(e[g[f]]=!0),"0"==k&&(e[g[f]]=!1)}}let T=!!e["ampdoc-fie"];d&&!T?a=E(b,"url")?F(b,"url"):null:(a=G(a),a=H(a),a=E(a,"url")?F(a,"url"):null);return a}function I(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return F(a,b)}function J(a,b){var c=G(a);c=H(c);return F(c,b)}function G(a){return a.nodeType?I((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function H(a){a=G(a);return a.isSingleDoc()?a.win:a}function F(a,b){E(a,b);a=K(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function L(a){var b;(b=K(a).storage)?b.promise?b=b.promise:(F(a,"storage"),b=b.promise=Promise.resolve(b.obj)):b=null;let c=b;if(c)return c;a=K(a);a.storage=M();return a.storage.promise}function K(a){let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function E(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}function M(){let a=new n,b=a.promise,c=a.resolve,d=a.reject;b.catch(()=>{});return{obj:null,promise:b,resolve:c,reject:d,context:null,ctor:null}}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function N(a,b){try{a.open(b,"_top",void 0)}catch(c){z().error("DOM","Failed to open url on target: ","_top",c)}}function O(a,b,c,d){b.addEventListener("click",()=>{a.openButtonClicked(c,d)})}function P(a){return"amp-app-banner:"+A(a.element.id,"amp-app-banner should have an id.")}function Q(a){return a.getVsync().runPromise({measure:void 0,mutate:R},{element:a.element,viewport:a.getViewport()})}function S(a){a.isDismissed().then(b=>{if(b)Q(a);else{{var c=a.win.document.createElement("i-amphtml-app-banner-top-padding");a.element.appendChild(c);c=a.win.document.createElement("button");c.classList.add("amp-app-banner-dismiss-button");c.setAttribute("aria-label",a.element.getAttribute("data-dismiss-button-aria-label")||"Dismiss");let b=a.B.bind(a);c.addEventListener("click",b);a.element.appendChild(c)}a.getVsync().run({measure:U,mutate:V},{element:a.element,viewport:a.getViewport()});a.expand()}})}class W extends AMP.BaseElement{constructor(a){super(a);this.m=null;this.j=!1}openButtonClicked(){}B(){this.getVsync().run({measure:void 0,mutate:X},{element:this.element,viewport:this.getViewport(),storagePromise:L(H(this.getAmpDoc())),storageKey:P(this)})}isDismissed(){return L(H(this.getAmpDoc())).then(a=>a.get(P(this))).then(a=>!!a,a=>{z().error("amp-app-banner","Failed to read storage",a);return!1})}}class Y extends W{constructor(a){super(a)}upgradeCallback(){let a=I(this.win,"platform");return a.isIos()?new Z(this.element):a.isAndroid()?new aa(this.element):null}layoutCallback(){return Q(this)}}function ba(a,b){let c={};b.replace(/\s/,"").split(",").forEach(a=>{let b=a.split("=");c[b[0]]=b[1]});var d=c["app-id"];let e=c["app-argument"];e?A(D(a.element).isProtocolValid(e),"The url in app-argument has invalid protocol: %s",e):y().error("amp-app-banner",'<meta name="apple-itunes-app">\'s content should contain app-argument to allow opening an already installed application on iOS.');d=`https://itunes.apple.com/us/app/id${d}`;O(a,a.m,e||d,d)}class Z extends W{constructor(a){super(a);this.w=this.h=null}preconnectCallback(a){this.element.parentNode&&I(this.win,"preconnect").url(this.getAmpDoc(),"https://itunes.apple.com",a)}buildCallback(){this.h=J(this.getAmpDoc(),"viewer");let a=I(this.win,"platform");(this.j=!this.h.isEmbedded()&&a.isSafari())?Q(this):this.h.isEmbedded()&&!this.h.hasCapability("navigateTo")?Q(this):(this.w=this.getAmpDoc().getMetaByName("apple-itunes-app"),null===this.w?Q(this):(this.m=A(this.element.querySelector("button[open-button]"),"<button open-button> is required inside %s: %s","amp-app-banner",this.element),ba(this,this.w),S(this)))}layoutCallback(){return m()}openButtonClicked(a,b){this.h.isEmbedded()?(I(this.win,"timer").delay(()=>{this.h.sendMessage("navigateTo",B({url:b}))},1500),this.h.sendMessage("navigateTo",B({url:a}))):(I(this.win,"timer").delay(()=>{N(this.win,b)},1500),N(this.win,a))}}class aa extends W{constructor(a){super(a);this.o=null;this.l="";this.A=!1}preconnectCallback(a){this.element.parentNode&&(I(this.win,"preconnect").url(this.getAmpDoc(),"https://play.google.com",a),this.l&&I(this.win,"preconnect").preload(this.getAmpDoc(),this.l))}buildCallback(){let a=this.win,b=this.element,c=J(this.getAmpDoc(),"viewer");this.o=a.document.head.querySelector("link[rel=manifest],link[rel=origin-manifest]");let d=I(a,"platform"),e=D(b),g=d.isAndroid()&&d.isChrome();(this.j=!e.isProxyOrigin(a.location)&&!c.isEmbedded()&&g)?Q(this):(this.A=d.isAndroid()&&!this.o)?Q(this):(this.l=this.o.getAttribute("href"),e.assertHttpsUrl(this.l,b,"manifest href"),this.m=A(b.querySelector("button[open-button]"),"<button open-button> is required inside %s: %s","amp-app-banner",b),S(this))}layoutCallback(){return this.A||this.j?m():I(this.win,"xhr").fetchJson(this.l,{}).then(a=>a.json()).then(a=>{var b=a.related_applications;if(b)for(var c=0;c<b.length;c++){var d=b[c];if("play"==d.platform){b=`https://play.google.com/store/apps/details?id=${d.id}`;d=d.id;c=this.element;var{canonicalUrl:e}=J(c,"documentInfo").get();c=D(c).parse(e);e=c.protocol.replace(":","");d=`android-app://${d}/${e}/${c.host}${c.pathname}`;O(this,this.m,d,b);break}}}).catch(a=>{Q(this);w(a)})}openButtonClicked(a,b){I(this.win,"timer").delay(()=>{this.win.top.location.assign(b)},1500);N(this.win,a)}}function X(a){R(a);a.storagePromise.then(b=>{b.set(a.storageKey,!0)})}function R(a){a.viewport.removeFromFixedLayer(a.element);var b=a.element;b.parentElement&&b.parentElement.removeChild(b);a.viewport.updatePaddingBottom(0)}function U(a){a.bannerHeight=a.viewport.getLayoutRect(a.element).height}function V(a){a.viewport.updatePaddingBottom(a.bannerHeight);a.viewport.addToFixedLayer(a.element)}(a=>{a.registerElement("amp-app-banner",Y,"amp-app-banner{position:fixed!important;bottom:0!important;left:0;width:100%;max-height:100px!important;box-sizing:border-box;background:#fff;z-index:13;box-shadow:0 0 5px 0 rgba(0,0,0,0.2)!important}i-amphtml-app-banner-top-padding{position:absolute;top:0;left:0;right:0;background:#fff;height:4px;z-index:15}.amp-app-banner-dismiss-button{position:absolute;width:28px;height:28px;top:-28px;right:0;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='13' viewBox='341 8 13 13' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%234F4F4F' d='M354 9.31L352.69 8l-5.19 5.19L342.31 8 341 9.31l5.19 5.19-5.19 5.19 1.31 1.31 5.19-5.19 5.19 5.19 1.31-1.31-5.19-5.19z' fill-rule='evenodd'/%3E%3C/svg%3E\");background-size:13px 13px;background-position:9px;background-color:#fff;background-repeat:no-repeat;z-index:14;box-shadow:0 -1px 1px 0 rgba(0,0,0,0.2);border:none;border-radius:12px 0 0 0}.amp-app-banner-dismiss-button:before{position:absolute;content:\"\";top:-20px;right:0;left:-20px;bottom:0}[dir=rtl] .amp-app-banner-dismiss-button{right:auto;left:0;border-top-left-radius:0;border-top-right-radius:12px;background-position:6px}[dir=rtl] .amp-app-banner-dismiss-button:before{right:-20px;left:0}\n/*# sourceURL=/extensions/amp-app-banner/0.1/amp-app-banner.css*/")})(self.AMP)}});