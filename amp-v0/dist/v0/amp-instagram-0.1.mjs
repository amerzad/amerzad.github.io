(self.AMP=self.AMP||[]).push({n:"amp-instagram",v:"2008290323002",f:function(AMP,_){let h=Object.prototype.toString;let k=self.AMP_CONFIG||{},m=("string"==typeof k.cdnProxyRegex?new RegExp(k.cdnProxyRegex):k.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function n(a){if(self.document&&self.document.head&&(!self.location||!m.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}k.cdnUrl||n("runtime-host");k.geoApiUrl||n("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let p=self.__AMP_LOG;function q(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)}(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0});function r(a){a=a.__AMP_TOP||(a.__AMP_TOP=a);{let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b}a=a.preconnect;a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a=a.obj}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
let t;function u(a,b){let c,d=a,g=b;c=a=>{try{return g(a)}catch(l){throw self.__AMP_REPORT_ERROR(l),l}};let e=v();d.addEventListener("message",c,e?void 0:!1);return()=>{d&&d.removeEventListener("message",c,e?void 0:!1);c=d=g=null}}function v(){if(void 0!==t)return t;t=!1;try{let a={get capture(){t=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(a){}return t}function w(a,b){return u(a,b)}let x;let y="Webkit webkit Moz moz ms O o".split(" ");function z(a,b){for(let l in b){var d=a,g=b[l];a:{var c=d.style;var e=l;if(q(e,"--")){c=e;break a}x||(x=Object.create(null));let a=x[e];if(!a){a=e;if(void 0===c[e]){var f=e;f=f.charAt(0).toUpperCase()+f.slice(1);b:{for(let a=0;a<y.length;a++){let b=y[a]+f;if(void 0!==c[b]){f=b;break b}}f=""}void 0!==c[f]&&(a=f)}x[e]=a}c=a}c&&(q(c,"--")?d.style.setProperty(c,g):d.style[c]=g)}}class A extends AMP.BaseElement{constructor(a){super(a);this.h=null;this.j="";this.l=null;this.m="";this.o=null}preconnectCallback(a){r(this.win).url(this.getAmpDoc(),"https://www.instagram.com",a);r(this.win).url(this.getAmpDoc(),"https://instagram.fsnc1-1.fna.fbcdn.net",a)}renderOutsideViewport(){return!1}buildCallback(){var a=this.element.getAttribute("data-shortcode")||this.element.getAttribute("shortcode"),b=this.element;if(!p.user)throw Error("failed to call initLogConstructor");this.j=p.user.assert(a,"The data-shortcode attribute is required for <amp-instagram> %s",b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);this.m=this.element.hasAttribute("data-captioned")?"captioned/":""}createPlaceholderCallback(){let a=this.win.document.createElement("div");a.setAttribute("placeholder","");let b=this.win.document.createElement("img");this.getAmpDoc().whenFirstVisible().then(()=>{b.setAttribute("src","https://www.instagram.com/p/"+encodeURIComponent(this.j)+"/media/?size=l")});b.setAttribute("referrerpolicy","origin");z(b,{overflow:"hidden","max-width":"100%"});this.propagateAttributes(["alt"],b);this.element.hasAttribute("data-default-framing")&&this.element.classList.add("amp-instagram-default-framing");a.appendChild(b);z(a,{marginTop:"54px"});return a}isLayoutSupported(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a}layoutCallback(){let a=this.element.ownerDocument.createElement("iframe");this.h=a;this.l=w(this.win,this.w.bind(this));a.setAttribute("scrolling","no");a.setAttribute("frameborder","0");a.setAttribute("allowtransparency","true");a.setAttribute("title","Instagram: "+this.element.getAttribute("alt"));a.src="https://www.instagram.com/p/"+encodeURIComponent(this.j)+"/embed/"+this.m+"?cr=1&v=12";this.applyFillContent(a);this.element.appendChild(a);z(a,{opacity:0});return this.o=this.loadPromise(a).then(()=>{this.getVsync().mutate(()=>{z(a,{opacity:1})})})}w(a){if("https://www.instagram.com"==a.origin&&a.source==this.h.contentWindow){var b=a.data;if(b&&("[object Object]"===h.call(b)||q(b,"{"))){if("[object Object]"===h.call(b))var d=b;else try{d=JSON.parse(b)}catch(g){d=null}a=d;if(void 0!==a&&"MEASURE"==a.type&&a.details){let b=a.details.height;this.getVsync().measure(()=>{this.h&&this.h.offsetHeight!==b&&this.forceChangeHeight(b)})}}}}unlayoutOnPause(){return!0}unlayoutCallback(){if(this.h){var a=this.h;a.parentElement&&a.parentElement.removeChild(a);this.o=this.h=null}this.l&&this.l();return!0}}(a=>{a.registerElement("amp-instagram",A,"amp-instagram.amp-instagram-default-framing{border:1px solid #dbdbdb!important}\n/*# sourceURL=/extensions/amp-instagram/0.1/amp-instagram.css*/")})(self.AMP)}});