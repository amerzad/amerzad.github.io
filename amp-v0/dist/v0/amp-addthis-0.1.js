(self.AMP=self.AMP||[]).push({n:"amp-addthis",v:"2007102309000",f:(function(AMP,_){
var k,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var l;
if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var r;a:{var ca={a:!0},da={};try{da.__proto__=ca;r=da.a;break a}catch(a){}r=!1}l=r?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ea=l,fa="url title media description email_template email_vars passthrough url_transforms".split(" "),ha="services_exclude services_compact services_expanded services_custom ui_click ui_disable ui_delay ui_hover_direction ui_language ui_offset_top ui_offset_left ui_tabindex track_addressbar track_clickback ga_property ga_social".split(" "),w=/[A-Z]/gi,ia=/[^a-zA-Z]/g,la=/\s/g;var ma=/[0-9\-].*/;function z(){this.m={}}z.prototype.record=function(a){var b=(a.id||a.pco||"").replace(ma,"");b&&!this.m[b]&&w.test(b)&&(this.m[b]=b)};z.prototype.recordProductCode=function(a){a&&!this.m[a]&&w.test(a)&&(this.m[a]=a)};z.prototype.getActivePcos=function(){return Object.keys(this.m)};var A;function E(a,b,c){var d=na();a.addEventListener(b,function(a){try{return c(a)}catch(e){throw self.__AMP_REPORT_ERROR(e),e;}},d?void 0:!1)}function na(){if(void 0!==A)return A;A=!1;try{var a={get capture(){A=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return A};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var oa=Object.prototype.toString;function pa(a){return a?Array.prototype.slice.call(a):[]};var F=self.AMP_CONFIG||{},qa=("string"==typeof F.cdnProxyRegex?new RegExp(F.cdnProxyRegex):F.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function ra(a){if(self.document&&self.document.head&&(!self.location||!qa.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}F.cdnUrl||ra("runtime-host");F.geoApiUrl||ra("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var G=self.__AMP_LOG;function H(a,b,c){if(!G.user)throw Error("failed to call initLogConstructor");G.user.assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function J(a){return a||{}};function K(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function L(a,b,c){a=a.createElement(b);for(var d in c)a.setAttribute(d,c[d]);return a};function sa(a,b){E(a,"pagehide",b)};function ta(){this.w={};this.W=0;this.l=this.I=null}k=ta.prototype;k.startForDoc=function(a){this.l=a.win;this.I=this.l.document.activeElement;var b=this.aa.bind(this);E(this.l,"blur",b);b=this.ba.bind(this);E(this.l,"click",b)};k.aa=function(){var a=this.l.document.activeElement;if(a){var b=a!==this.I;if("IFRAME"===a.tagName&&b){var c=a.src.split("://").pop();this.w[c]?this.w[c]++:this.w[c]=1}this.I=a}};k.ba=function(){this.W++;this.I=this.l.document.activeElement};k.getPageClicks=function(){return this.W};
k.getIframeClickString=function(){var a=this;return Object.keys(this.w).map(function(b){return b+"|"+a.w[b]}).join(",")};function ua(a){var b=a.widgetId;var c=a.productCode,d=va(a.pubId);b=wa(b);var f="string"===typeof c&&("shin"===c||"shfs"===c);if(d){if(b&&!f)return 1;if(!b&&f)return 2}else if(!b&&f)return 3;return-1}function va(a){return"string"===typeof a&&0<a.length}function wa(a){return"string"===typeof a&&4===a.length};function M(){this.h={};this.H=[];this.o=null}M.prototype.receiveConfiguration=function(a){var b=this,c=a.config,d=a.pubId,f=a.source;if(this.H.some(function(a){return a.contentWindow===f})){var e=this.h[d];e.config=c;e.requestStatus=2;e.iframeData.forEach(function(a){xa(b,{iframe:a.iframe,widgetId:a.widgetId,pubId:d,shareConfig:a.shareConfig,atConfig:a.atConfig,productCode:a.productCode,containerClassName:a.containerClassName})})}};
function xa(a,b){var c=b.iframe,d=b.widgetId,f=b.pubId,e=b.productCode,g=a.h[f],h=g.config,u=g.requestStatus,O=J({event:"addthis.amp.configuration",shareConfig:b.shareConfig,atConfig:b.atConfig,pubId:f,widgetId:d,productCode:e,containerClassName:b.containerClassName,configRequestStatus:u,dashboardConfig:h});if(h&&h.widgets&&0<Object.keys(h.widgets).length)switch(ua({pubId:f,widgetId:d,productCode:e})){case 1:d&&h.widgets[d]&&a.o.record(h.widgets[d]);break;case 2:e&&a.o.recordProductCode(e);break;
case 3:e&&a.o.recordProductCode(e);return;default:return}c.contentWindow.postMessage(JSON.stringify(O),"https://s7.addthis.com");0===u&&(a.H.push(c),g.requestStatus=1)}
M.prototype.register=function(a){var b=this,c=a.pubId,d=a.widgetId,f=a.productCode,e=a.containerClassName,g=a.iframe,h=a.iframeLoadPromise,u=a.shareConfig,O=a.atConfig,Ya=a.activeToolsMonitor;this.o||(this.o=Ya);this.h[c]||(this.h[c]={});a=this.h[c];a.requestStatus||(a.requestStatus=0);a.iframeData||(a.iframeData=[]);a.iframeData.push({iframe:g,shareConfig:u,atConfig:O,widgetId:d,productCode:f,containerClassName:e});h.then(function(){return xa(b,{iframe:g,pubId:c,widgetId:d,shareConfig:u,atConfig:O,
productCode:f,containerClassName:e})})};M.prototype.unregister=function(a){var b=a.pubId,c=a.iframe;this.H=this.H.filter(function(a){return a!==c});a=this.h[b]||{};a.iframeData&&(a.iframeData=a.iframeData.filter(function(a){return a.iframe!==c}))};function N(){this.P=0;this.F=null}N.prototype.startForDoc=function(a){this.F=a;this.F.onVisibilityChanged(this.listener.bind(this))};N.prototype.listener=function(){if(!this.F.isVisible()){var a=this.F.getLastVisibleTime()||0;this.P+=Date.now()-a}};N.prototype.getDwellTime=function(){return this.P};function ya(){this.B={}}ya.prototype.on=function(a,b){this.B[a]||(this.B[a]=[]);this.B[a].push(b)};function za(a,b,c){a.B[b]&&a.B[b].forEach(function(a){return a(c)})}
ya.prototype.handleAddThisMessage=function(a){if("https://s7.addthis.com"===a.origin&&a.data){var b=a.data;if("[object Object]"!==oa.call(b)){if("string"===typeof b&&K(b,"{"))try{var c=JSON.parse(b)}catch(d){c=null}else c=void 0;b=c}b=b||{};switch(b.event){case "addthis.amp.configuration":za(this,"addthis.amp.configuration",Object.assign({},b,{source:a.source}));break;case "addthis.share":za(this,"addthis.share",b)}}};function P(){this.$=100;this.L=this.T=0;this.G=Object.create(null)}P.prototype.has=function(a){return!!this.G[a]};P.prototype.get=function(a){var b=this.G[a];if(b)return b.access=++this.L,b.payload};
P.prototype.put=function(a,b){this.has(a)||this.T++;this.G[a]={payload:b,access:this.L};if(!(this.T<=this.$)){if(G.dev)a=G.dev;else throw Error("failed to call initLogConstructor");a.warn("lru-cache","Trimming LRU cache");a=this.G;var c=this.L+1,d;for(d in a){var f=a[d].access;if(f<c){c=f;var e=d}}void 0!==e&&(delete a[e],this.T--)}};J({c:!0,v:!0,a:!0,ad:!0,action:!0});var Aa,Ba;
function Q(a){Aa||(Aa=self.document.createElement("a"),Ba=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new P));var b=Ba,c=Aa;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a}function Ca(a,b){if(!b)return a;var c=a.split("#",2),d=c[0].split("?",2),f=d[0]+(d[1]?"?"+d[1]+"&"+b:"?"+b);return f+=c[1]?"#"+c[1]:""}
function Da(a){var b=[],c;for(c in a){var d=a[c];if(null!=d)if(Array.isArray(d))for(var f=0;f<d.length;f++){var e=d[f];b.push(encodeURIComponent(c)+"="+encodeURIComponent(e))}else b.push(encodeURIComponent(c)+"="+encodeURIComponent(d))}return b.join("&")};function Ea(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return Fa(a,b)}function R(a,b){var c=Ga(a);c=Ga(c);c=c.isSingleDoc()?c.win:c;return Fa(c,b)}function Ga(a){return a.nodeType?Ea((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function Fa(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};function S(){this.j=null;this.J=this.C=this.R=0}S.prototype.startForDoc=function(a){this.j=R(a,"viewport");this.R=this.j.getHeight()||0;this.C=this.j.getScrollTop()||0;this.J=this.C+this.R;this.j.onScroll(this.listener.bind(this))};S.prototype.listener=function(){var a=this.j.getScrollTop()||0;this.C=Math.max(this.C,a);this.J=Math.max(this.J,(this.j.getHeight()||0)+a)};S.prototype.getInitialViewHeight=function(){return this.R};S.prototype.getScrollHeight=function(){return this.J-this.C};var Ha=/^[0-9a-f]{16}$/,Ia=Date.now();var Ja=function(){return(Ia/1E3&4294967295).toString(16)+("00000000"+Math.floor(4294967296*Math.random()).toString(16)).slice(-8)}();var T,Ka="Webkit webkit Moz moz ms O o".split(" ");function La(a,b,c){var d=a.style;if(!K(b,"--")){T||(T=Object.create(null));var f=T[b];if(!f){f=b;if(void 0===d[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var g=0;g<Ka.length;g++){var h=Ka[g]+e;if(void 0!==d[h]){e=h;break b}}e=""}void 0!==d[e]&&(f=e)}T[b]=f}b=f}b&&(K(b,"--")?a.style.setProperty(b,c):a.style[b]=c)};var Ma=/#iframe$/;function Na(a){var b=a.map(function(a){var b=a.delay;return Object.assign({},a,{delay:Array.isArray(b)&&b.length?b:[0]})}).map(function(a){return a.delay.map(function(b){return{delay:b,pixels:[a]}})}).reduce(function(a,b){return a.concat(b)},[]).reduce(function(a,b){var c=b.delay,d=b.pixels;a[c]||(a[c]=[]);a[c]=a[c].concat(d);return a},{});return Object.keys(b).map(function(a){return{delay:Number(a),pixels:b[a]}})}
function Oa(a,b){b=b.win.document;var c=L(b,"amp-pixel",J({layout:"nodisplay",referrerpolicy:"no-referrer",src:a}));b.body.appendChild(c)}
function Pa(a,b){var c=b.sid,d=b.ampDoc;Na(a).forEach(function(a){var b=a.delay,f=a.pixels;setTimeout(function(){var a=f.map(function(a){var b=a.url,c=Ma.test(b);if(-1!==b.indexOf("//"))if(c){var f=Q(b).host.split(".").concat("pxltr frame".replace(/\s/,"_"));c=d.win.document;b=L(c,"iframe",J({frameborder:0,width:0,height:0,name:f,title:"Pxltr Frame",src:b}));f=!1;void 0===f&&(f=b.hasAttribute("hidden"));f?b.removeAttribute("hidden"):b.setAttribute("hidden","");f={position:"absolute",clip:"rect(0px 0px 0px 0px)"};
for(var e in f)La(b,e,f[e]);c.body.appendChild(b)}else Oa(b,d);return a.id}),e=J({delay:""+b,ids:a.join("-"),sid:c});e=Ca("https://m.addthisedge.com/live/prender",Da(e));d.win.navigator.sendBeacon?d.win.navigator.sendBeacon(e,"{}"):Oa(e,d)},1E3*b)})}function Qa(a){var b={};if(void 0===a||null===a)return b;var c="string"===typeof a?a:JSON.stringify(a);try{var d=JSON.parse(c);if("[object Object]"===oa.call(d))for(var f in d)b[f]=d[f]}catch(e){}return b}
function Ra(a){var b=a.ampDoc,c=a.endpoint,d=Qa(a.data);a=Ca(c,Da(d));Ea(b.win,"xhr").fetchJson(a,{mode:"cors",method:"GET",ampCors:!1,credentials:"include"}).then(function(a){return a.json()}).then(function(a){a=void 0===a.pixels?[]:a.pixels;0<a.length&&Pa(a,{sid:d.sid,ampDoc:b})},function(){})};function U(a){return{name:(a.getAttribute("property")||a.name||"").toLowerCase(),content:a.content||""}};function Sa(a){return a.replace(w,function(a){a=a.charCodeAt(0);return String.fromCharCode((90>=a?90:122)>=a+13?a+13:a-13)})}function Ta(a){return a.reduce(function(a,c){a[Sa(c)]=1;return a},{})};var Ua=/^(?:q|search|bs|wd|p|kw|keyword|query|qry|querytext|text|searchcriteria|searchstring|searchtext|sp_q)=(.*)/i,Va=/ws\/results\/(web|images|video|news)/,Wa=/google.*\/(search|url|aclk|m\?)/,Xa=/aol.*\/aol/,Za=Ta("cbea cbeab kkk zvys gvgf shpxf chfflyvcf pernzcvr svfgvat wvmm fcybbtr flovna".split(" ")),$a=Ta(["phz"]);function ab(a,b){a=void 0===a?"":a;b=void 0===b?!1:b;for(var c=0,d=a.toLowerCase().split(ia),f=0;f<d.length;f++){var e=d[f];if(Za[e]||!b&&$a[e]){c|=1;break}}return c}
function bb(a,b){var c=ab(a.title)|ab(a.hostname,!0);b.forEach(function(a){var b=U(a),d=b.name;b=b.content;if("description"===d||"keywords"===d)c|=ab(b);if("rating"===d){d=c;var g=0;b=(void 0===b?"":b).toLowerCase().replace(la,"");if("mature"===b||"adult"===b||"rta-5042-1996-1400-1577-rta"===b)g|=1;c=d|g}});return c}
function cb(a,b,c){var d=0;if(a&&b){d=b.host===c.host?d|2:d|4;var f=a;f=void 0===f?"":f;var e=f.toLowerCase();if(e.match(Va))e=!0;else{a:{f=f.split("?").pop().toLowerCase().split("&");for(var g,h=0;h<f.length;h++)if(g=Ua.exec(f[h])){f=g[1];break a}f=void 0}e=void 0===f?!1:-1===e.indexOf("addthis")&&(Wa.test(e)||Xa.test(e)||-1<e.indexOf("/pagead/aclk?")||-1<e.indexOf(".com/url")||-1<e.indexOf(".com/l.php")||-1<e.indexOf("/search?")||-1<e.indexOf("/search/?")||-1<e.indexOf("search?")||-1<e.indexOf("yandex.ru/clck/jsredir?")||
-1<e.indexOf(".com/search")||-1<e.indexOf(".org/search")||-1<e.indexOf("/search.html?")||-1<e.indexOf("search/results.")||-1<e.indexOf(".com/s?bs")||-1<e.indexOf(".com/s?wd")||-1<e.indexOf(".com/mb?search")||-1<e.indexOf(".com/mvc/search")||-1<e.indexOf(".com/web")||-1<e.indexOf("hotbot.com/"))}e&&(d|=1)}return d}
function db(a,b){return a.getElementById("product")||0<(a.getElementsByClassName("product")||[]).length||a.getElementById("productDescription")||a.getElementById("page-product")||a.getElementById("vm_cart_products")||window.Virtuemart?!0:"product"===b.reduce(function(a,b){var c=U(b);b=c.name;c=c.content;if(K(b,"og:")){var d=b.split(":").pop();a[d]=c}return a},{}).type}
function eb(a){return a.filter(function(a){return"keywords"===U(a).name.toLowerCase()}).map(function(a){var b=[];a=U(a).content.split(",");for(var d=0,f=0;f<a.length;f++){var e=(a[f]||"").trim();if(e){if(200<=e.length+d+1)break;b.push(e);d+=e.length+1}}return b}).reduce(function(a,c){return a.concat(c)},[]).join(",")};var fb=/^\.[a-z0-9\-_]{11}(\.[a-z0-9_]+)?$/i;function gb(a){a=a.split("#").pop();a=a.split(";").shift();if(fb.test(a))return a};var hb=/\.gov|\.mil/;var ib="backgroundColor borderRadius counterColor counts countsFontSize desktopPosition elements hideDevice hideEmailSharingConfirmation hideLabel iconColor label mobilePosition numPreferredServices offset originalServices postShareFollowMsg postShareRecommendedMsg postShareTitle responsive shareCountThreshold size style textColor thankyou titleFontSize __hideOnHomepage originalServices services".split(" ");
function jb(a){var b=J({});ib.forEach(function(c){var d=a.element.getAttribute("data-attr-"+c);if("string"===typeof d||"number"===typeof d||"boolean"===typeof d)b[String(c)]=d});var c=JSON.stringify(b);return"{}"===c?"":c};var W=new M,kb=new S,lb=new N,mb=new ta,nb=new z,ob=!0;function X(a){a=AMP.BaseElement.call(this,a)||this;a.A=null;a.D="";a.U="";a.K="";a.V="";a.N="";a.X="";a.Y=null;a.M=null;a.Z="";a.S=-1;a.O="";return a}var Y=AMP.BaseElement;X.prototype=aa(Y.prototype);X.prototype.constructor=X;if(ea)ea(X,Y);else for(var Z in Y)if("prototype"!=Z)if(Object.defineProperties){var pb=Object.getOwnPropertyDescriptor(Y,Z);pb&&Object.defineProperty(X,Z,pb)}else X[Z]=Y[Z];X.ca=Y.prototype;k=X.prototype;
k.buildCallback=function(){var a=this,b=this.element.getAttribute("data-pub-id")||"",c=this.element.getAttribute("data-widget-id")||"",d=this.element.getAttribute("data-product-code")||"";this.S=ua({pubId:b,widgetId:c,productCode:d});-1===this.S&&(va(b)?"shin"===d||"shfs"===d||wa(c)?("shin"===d||"shfs"===d)&&wa(c)&&H(d,"Only widget id or product code is required <amp-addthis> %s",this.element):H(c,"Widget id or product code is required for <amp-addthis> %s",this.element):H(b,"The data-pub-id attribute is required for <amp-addthis> %s",
this.element));this.O=this.element.getAttribute("data-class-name")||"";this.D=b;this.U=3===this.S?jb(this):c;this.K=d;"shfs"===this.K&&this.element.setAttribute("data-widget-type","floating");var f=this.getAmpDoc();this.V=this.element.getAttribute("data-canonical-url")||R(this.element,"documentInfo").get().canonicalUrl||f.getUrl();this.N=this.element.getAttribute("data-canonical-title")||f.win.document.title;this.Z=this.element.getAttribute("data-widget-type");this.Y=qb(this);this.M=rb(this,f);if(ob){ob=
!1;var e=R(f,"viewer"),g=Q(this.V);f.whenFirstVisible().then(function(){return e.getReferrerUrl()}).then(function(b){a.X=b;var c=a.N,d=a.D,e=a.M,h=g.href,u=g.hostname,B=g.host,x=g.search,p=g.pathname,C=g.hash,v=g.protocol,I=g.port;c={du:h.split("#").shift(),hostname:u,href:h,referrer:b,search:x,pathname:p,title:c,hash:C,protocol:v,port:I};h=b?Q(b):{};p=e.ui_language.split("-");x=p[0];p=p.slice(1);C=(C=gb(c.du))?C.split(".").slice(2).shift():void 0;v=f.win;I=pa(v.document.head.querySelectorAll("meta"));
var sb=v.navigator.doNotTrack&&"unspecified"!==v.navigator.doNotTrack&&"no"!==v.navigator.doNotTrack&&"0"!==v.navigator.doNotTrack,tb=0|(!1!==e.use_cookies?1:0)|(!0===e.track_textcopy?2:0)|(!0===e.track_addressbar?4:0),ub=bb(c,I),vb=Date.now();e=!1!==e.track_clickback&&!1!==e.track_linkback?1:0;var wb=B===h.host?void 0:h.host;var V=C?"":(V=gb(c.du))?V.split(".").slice(1).shift():void 0;var y=c.du;if(gb(y))var n=!0;else{n=y.split("#").pop();var t;if(t=n&&n.match(Ha)){t=new Date;try{t=new Date(1E3*
parseInt(n.substr(0,8),16))}catch(Ab){}var q=t;q.setDate(q.getDate()-1);var D=new Date;if(q.getFullYear()<D.getFullYear())n=!1;else{n=q.getFullYear()>D.getFullYear();t=q.getFullYear()===D.getFullYear();var xb=q.getMonth()>D.getMonth(),yb=q.getMonth()===D.getMonth();q=q.getDate()>D.getDate();n=n||t&&xb||t&&yb&&q}t=!n}n=t||-1<y.indexOf("#at_pco=")?!0:!1}y=n?y.split("#").shift():y;b=J({amp:1,bl:tb,cb:ub,colc:vb,ct:e,dc:1,dp:B,dr:wb,fcu:V,fp:Q(y).pathname,fr:h.pathname||"",gen:100,ln:x,lnlc:p,mk:eb(I),
of:sb?4:hb.test(u)?1:0,pd:db(v.document,I)?1:0,pub:d,rb:cb(b,h,Q(c.du)),sid:Ja,skipb:1,sr:C});Ra({ampDoc:f,endpoint:"https://m.addthis.com/live/red_lojson/300lo.json",data:b});lb.startForDoc(f);kb.startForDoc(f);mb.startForDoc(f)});zb(this,{ampDoc:f,loc:g,pubId:this.D});if("messages"===this.element.getAttribute("data-widget-type")){var h=L(this.win.document,"button",J({"class":"i-amphtml-addthis-close"}));h.onclick=function(){var b=a.element;b.parentElement&&b.parentElement.removeChild(b)};this.element.appendChild(h)}}};
k.preconnectCallback=function(a){var b=Ea(this.win,"preconnect"),c=this.getAmpDoc();b.url(c,"https://s7.addthis.com",a);b.url(c,"https://m.addthis.com",a);b.url(c,"https://m.addthisedge.com",a);b.url(c,"https://api-public.addthis.com",a);b.url(c,"https://cache.addthiscdn.com",a);b.url(c,"https://su.addthis.com",a)};k.isAlwaysFixed=function(){return"floating"===this.Z};
k.createPlaceholderCallback=function(){var a=L(this.win.document,"div",J({placeholder:""}));La(a,"background-color","#fff");var b=L(this.win.document,"amp-img",J({src:"https://cache.addthiscdn.com/icons/v3/thumbs/32x32/addthis.png",layout:"fixed",width:"32",height:"32",referrerpolicy:"origin",alt:"AddThis Website Tools"}));a.appendChild(b);return a};
k.layoutCallback=function(){var a=L(this.element.ownerDocument,"iframe",J({frameborder:0,title:"AddThis Website Tools",src:"https://s7.addthis.com/dc/amp-addthis.html?_amp_=2007102309000",id:this.U,pco:this.K,containerClassName:this.O})),b=this.loadPromise(a);this.applyFillContent(a);this.element.appendChild(a);this.A=a;W.register({pubId:this.D,widgetId:this.U,productCode:this.K,shareConfig:this.Y,atConfig:this.M,containerClassName:this.O,iframe:a,iframeLoadPromise:b,activeToolsMonitor:nb});return b};
k.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};k.unlayoutCallback=function(){if(this.A){var a=this.A;a.parentElement&&a.parentElement.removeChild(a);W.unregister({pubId:this.D,iframe:this.A});this.A=null}return!0};
function qb(a){var b={};fa.map(function(c){var d=a.element.getAttribute("data-"+c);d?b[c]=d:"url"===c?b[c]=a.getAmpDoc().getUrl():"title"===c?b[c]=a.getAmpDoc().win.document.title:"media"===c&&(d=a.getAmpDoc().win.document.head.querySelector('meta[property="og:image"]'),b[c]=d?d.content:"")});return b}
function rb(a,b){return ha.reduce(function(c,d){var f=a.element.getAttribute("data-"+d);f?c[d]=f:(f=b.win,"ui_language"===d&&(c[d]=f.document.documentElement.lang||f.navigator.language||f.navigator.userLanguage||"en"));return c},{})}
function zb(a,b){var c=b.ampDoc,d=b.loc,f=b.pubId;sa(c.win,function(){var a=d.host;var b=d.pathname;var e=d.hash;var g=R(c,"viewport");var m=nb.getActivePcos().join(",")||void 0;var ja=lb.getDwellTime();b=b.replace(e,"");e=mb.getIframeClickString();var ka=kb.getInitialViewHeight();var B=mb.getPageClicks();var x=c.win.navigator.sendBeacon?0:1;g=g.getHeight();var p=kb.getScrollHeight();m=J({al:m,amp:1,dc:1,dp:a,dt:ja,fp:b,ict:e,ivh:ka,pct:B,pfm:x,ph:g,pub:f,sh:p,sid:Ja});m=Ca("https://m.addthis.com/live/red_lojson/100eng.json",
Da(m));c.win.navigator.sendBeacon?c.win.navigator.sendBeacon(m,"{}"):Oa(m,c)});var e=new ya,g=e.handleAddThisMessage.bind(e);E(c.win,"message",g);e.on("addthis.share",function(b){var e=a.X,g=a.N,h=d.href,m=d.hostname,ja=d.search,ka=d.pathname,B=d.hash,x=d.protocol,p=d.port;g={du:h.split("#").shift(),hostname:m,href:h,referrer:e,search:ja,pathname:ka,title:g,hash:B,protocol:x,port:p};h=e?Q(e):{};m=pa(c.win.document.head.querySelectorAll("meta"));b={amp:1,cb:bb(g,m),dc:1,dest:b.service,gen:300,mk:eb(m),
pub:f,rb:cb(e,h,Q(g.du)),sid:Ja,url:b.url};Ra({ampDoc:c,endpoint:"https://m.addthis.com/live/red_pjson",data:b})});e.on("addthis.amp.configuration",W.receiveConfiguration.bind(W))}(function(a){a.registerElement("amp-addthis",X,'amp-addthis[data-widget-type=messages]{position:fixed!important;width:100%!important;top:0}amp-addthis .i-amphtml-addthis-close{right:10px!important;top:10px!important;width:32px!important;height:32px!important;opacity:0.5!important;float:right!important;cursor:pointer!important;position:relative!important;z-index:1!important;background-color:transparent!important;border:none!important}amp-addthis .i-amphtml-addthis-close:hover{opacity:1!important}.i-amphtml-addthis-close:after,amp-addthis .i-amphtml-addthis-close:before{position:absolute;content:" ";height:20px;width:2px;background-color:#fff}amp-addthis .i-amphtml-addthis-close:before{transform:rotate(45deg)}amp-addthis .i-amphtml-addthis-close:after{transform:rotate(-45deg)}@media only screen and (max-width:979px){amp-addthis[data-widget-type=floating]{position:fixed!important;width:100%!important;height:50px;bottom:0}}@media only screen and (min-width:979px){amp-addthis[data-widget-type=floating]{position:fixed!important;width:70px!important;height:320px!important;top:200px}}\n/*# sourceURL=/extensions/amp-addthis/0.1/amp-addthis.css*/')})(self.AMP);
})});

//# sourceMappingURL=amp-addthis-0.1.js.map
