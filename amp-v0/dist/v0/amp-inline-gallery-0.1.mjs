(self.AMP=self.AMP||[]).push({n:"amp-inline-gallery",v:"2008290323002",f:function(AMP,_){function f(a){return a?Array.prototype.slice.call(a):[]}let g=self.AMP_CONFIG||{},h=("string"==typeof g.cdnProxyRegex?new RegExp(g.cdnProxyRegex):g.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function k(a){if(self.document&&self.document.head&&(!self.location||!h.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}g.cdnUrl||k("runtime-host");g.geoApiUrl||k("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};function l(a){return a||{}}let n;function p(a){let b=a.ownerDocument||a;n&&n.ownerDocument===b||(n=b.createElement("div"));return q}function q(a){var b=n;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return b=a}let r;let t="Webkit webkit Moz moz ms O o".split(" ");function u(a,b,c){if(2>b.length?0:0==b.lastIndexOf("--",0))return b;r||(r=Object.create(null));let d=r[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(let b=0;b<t.length;b++){let c=t[b]+e;if(void 0!==a[c]){e=c;break a}}e=""}let c=e;void 0!==a[c]&&(d=c)}c||(r[b]=d)}return d}function v(a,b){let c=u(a.style,"padding-right",void 0);if(c){var d=b+"%";(2>c.length?0:0==c.lastIndexOf("--",0))?a.style.setProperty(c,d):a.style[c]=d}}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
let w;function x(a){try{let b=a.ownerDocument,c=b.createElement("div"),d=b.createElement("div");c.appendChild(d);return c.querySelector(":scope div")===d}catch(b){return!1}}function y(a,b){a.classList.add("i-amphtml-scoped");let c=b.replace(/^|,/g,"$&.i-amphtml-scoped ");b=a.querySelectorAll(c);a.classList.remove("i-amphtml-scoped");return b}function z(a,b){if(void 0!==w?w:w=x(a))return a.querySelector(b.replace(/^|,/g,"$&:scope "));let c=y(a,b);return void 0===c[0]?null:c[0]}function A(a,b){return(void 0!==w?w:w=x(a))?a.querySelectorAll(b.replace(/^|,/g,"$&:scope ")):y(a,b)}function B(a,b){let c=a.length;for(let d=0;d<c;d++)b(a[d],d)}function C(a,b){let c={detail:b};Object.assign(c,{bubbles:!0});if("function"==typeof a.CustomEvent)return new a.CustomEvent("amp-inline-gallery:go-to-slide",c);a=a.document.createEvent("CustomEvent");a.initCustomEvent("amp-inline-gallery:go-to-slide",!!c.bubbles,!!c.cancelable,b);return a}let D=["<div class=i-amphtml-inline-gallery-pagination-container aria-hidden=true><div class=i-amphtml-inline-gallery-pagination-dots hidden><div class=i-amphtml-inline-gallery-pagination-frosting></div><div class=i-amphtml-inline-gallery-pagination-backdrop></div><div class=i-amphtml-inline-gallery-pagination-background></div></div><div class=i-amphtml-inline-gallery-pagination-numbers hidden><div class=i-amphtml-inline-gallery-pagination-frosting></div><div class=i-amphtml-inline-gallery-pagination-backdrop></div><div class=i-amphtml-inline-gallery-pagination-background></div><div class=i-amphtml-inline-gallery-pagination-count><span class=i-amphtml-inline-gallery-pagination-index></span> <span>/ </span><span class=i-amphtml-inline-gallery-pagination-total></span></div></div></div>"],E=["<div class=i-amphtml-inline-gallery-pagination-dot-container><div class=i-amphtml-inline-gallery-pagination-dot><div class=i-amphtml-inline-gallery-pagination-dot-progress></div></div></div>"];function F(a,b){let c=p(a.element)(E);c.onclick=()=>{let c=C(a.win,l({index:b}));a.element.dispatchEvent(c)};return c}function G(a){return f(A(a.h,"> .i-amphtml-inline-gallery-pagination-dot-container"))}function H(a,b,c){G(a).forEach((a,e)=>{{var d={"--percentage-falloff":Math.max(0,1-1/Math.pow(Math.max(1-Math.abs(e-(b+c)),0),-.5))};let m=a.style;for(let a in d)m.setProperty(u(m,a),d[a].toString(),"important")}0==c&&a.setAttribute("i-amphtml-inline-gallery-pagination-dot-active",e===b)})}class I extends AMP.BaseElement{constructor(a){super(a);this.j=0;this.o=this.l=this.m=this.h=this.A=null}isLayoutSupported(a){return"fixed-height"==a}prerenderAllowed(){return!0}buildCallback(){this.element.appendChild(p(this.element)(D));this.h=this.element.querySelector(".i-amphtml-inline-gallery-pagination-dots");this.m=this.element.querySelector(".i-amphtml-inline-gallery-pagination-numbers");this.l=this.element.querySelector(".i-amphtml-inline-gallery-pagination-index");this.o=this.element.querySelector(".i-amphtml-inline-gallery-pagination-total")}updateProgress(a,b,c){this.mutateElement(()=>{if(a!=this.j){var d=8>=a,e=d?a:0;if(a!==this.j||d!==this.A){this.j=a;this.A=d;this.h.hidden=!d;this.m.hidden=d;this.o.textContent=a;d=G(this);for(let a=e;a<d.length;a++)this.h.removeChild(d[a]);for(d=d.length;d<e;d++)this.h.appendChild(F(this,d))}}H(this,b,c);this.l.textContent=b+1})}}let J=["<div class=i-amphtml-inline-gallery-thumbnails-container><div class=i-amphtml-inline-gallery-thumbnails-thumbnail><div class=i-amphtml-inline-gallery-thumbnails-resizer></div></div></div>"],K=['<amp-base-carousel layout=fill loop=true mixed-length=true snap=false snap-align=center controls="(pointer: fine) always, never" aria-hidden=true></amp-base-carousel>'];function L(a,b,c){let d=p(a.element)(J),e=b.offsetWidth/b.offsetHeight,m=a.w||e||1;v(d.querySelector(".i-amphtml-inline-gallery-thumbnails-resizer"),100*m);d.querySelector(".i-amphtml-inline-gallery-thumbnails-thumbnail").appendChild(M(b));d.onclick=()=>{a.element.dispatchEvent(C(a.win,l({index:c})));a.c.getImpl().then(a=>{a.goToSlide(c,{smoothScroll:!0})})};return d}function N(a,b){a.c&&a.element.removeChild(a.c);a.c=p(a.element)(K);b.forEach(b=>a.c.appendChild(b));a.propagateAttributes(["loop"],a.c);a.element.appendChild(a.c)}function M(a){var b;a=(b=(b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector)?b.call(a,"amp-img, img"):!1)?a:z(a,"> amp-img, > img");if(!a)return a=document.createElement("div"),a.className="i-amphtml-inline-gallery-thumbnails-default",a;let c=document.createElement("amp-img");c.className="i-amphtml-inline-gallery-thumbnails-image";c.setAttribute("layout","fill");(b=a.getAttribute("src"))&&c.setAttribute("src",b);(b=a.getAttribute("srcset"))&&c.setAttribute("srcset",b);let d=a.getAttribute("sizes");d&&c.setAttribute("sizes",d);return c}class O extends AMP.BaseElement{constructor(a){super(a);this.w=this.c=null}isLayoutSupported(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a}prerenderAllowed(){return!0}buildCallback(){let a=Number(this.element.getAttribute("aspect-ratio-width"))||0,b=Number(this.element.getAttribute("aspect-ratio-height"))||0;a&&b&&(this.w=a/b);this.element.addEventListener("amp-carousel:offsetchange",a=>{a.stopPropagation()});this.element.addEventListener("amp-carousel:indexchange",a=>{a.stopPropagation()})}setSlides(a){let b=a.map((a,b)=>L(this,a,b));this.mutateElement(()=>{N(this,b)})}}function P(a,b){let c=b.detail.index;B(A(a.element,"> amp-base-carousel, :not(amp-inline-gallery-thumbnails) > amp-base-carousel"),a=>{a.getImpl().then(a=>{a.goToSlide(c,{smoothScroll:!0})})})}function Q(a,b,c,d){B(A(a.element,"amp-inline-gallery-pagination"),a=>{a.getImpl().then(a=>{a.updateProgress(b,c,d)})})}class R extends AMP.BaseElement{constructor(a){super(a)}buildCallback(){this.element.addEventListener("amp-carousel:offsetchange",a=>{a=a.detail;Q(this,a.total,a.index,a.offset)});this.element.addEventListener("amp-carousel:indexchange",a=>{a=a.detail;Q(this,a.total,a.index,0)});this.element.addEventListener("amp-inline-gallery:go-to-slide",a=>{P(this,a)});Promise.all([z(this.element,"> amp-base-carousel, :not(amp-inline-gallery-thumbnails) > amp-base-carousel").getImpl(),Promise.all(f(A(this.element,"amp-inline-gallery-thumbnails")).map(a=>a.getImpl()))]).then(a=>{let b=a[1],c=a[0].getSlides();f(b).forEach(a=>a.setSlides(c))})}prerenderAllowed(){return!0}isLayoutSupported(a){return"container"===a}}(a=>{a.registerElement("amp-inline-gallery-pagination",I,"amp-inline-gallery-pagination{font-size:12px;font-family:sans-serif;line-height:1}.i-amphtml-inline-gallery-pagination-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.i-amphtml-inline-gallery-pagination-dots{-ms-flex-item-align:center;align-self:center;z-index:0;-ms-flex-align:center;align-items:center;height:100%;max-width:60%}.i-amphtml-inline-gallery-pagination-dot-container,.i-amphtml-inline-gallery-pagination-dots{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.i-amphtml-inline-gallery-pagination-dot-container{z-index:1;width:16px;min-width:14px}.i-amphtml-inline-gallery-pagination-dot{position:relative;background-color:rgba(0,0,0,0.2)}.i-amphtml-inline-gallery-pagination-dot-progress{position:absolute;top:0;background-color:rgba(0,0,0,0.6);opacity:0;opacity:calc(1 - var(--percentage-falloff))}[i-amphtml-inline-gallery-pagination-dot-active=true] .i-amphtml-inline-gallery-pagination-dot-progress{opacity:1;opacity:calc(1 - var(--percentage-falloff))}.i-amphtml-inline-gallery-pagination-dot,.i-amphtml-inline-gallery-pagination-dot-progress{width:8px;height:8px;border-radius:50%}.i-amphtml-inline-gallery-pagination-numbers{position:relative;-ms-flex-item-align:end;align-self:flex-end;z-index:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:100%;padding:0 8px}.i-amphtml-inline-gallery-pagination-count{z-index:1}.i-amphtml-inline-gallery-pagination-dots[hidden],.i-amphtml-inline-gallery-pagination-numbers[hidden]{display:none}amp-inline-gallery-pagination[inset]:not(.i-amphtml-hidden-by-media-query){position:absolute!important;left:0;right:0;bottom:0;bottom:var(--i-amphtml-caption-height,0);display:-ms-flexbox!important;display:flex!important}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-container{margin:18px;height:20px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-backdrop,amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-background,amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-frosting{position:absolute;top:0;bottom:0;left:0;right:0;border-radius:12px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-frosting{-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-backdrop{-webkit-backdrop-filter:blur(12px) invert(1) grayscale(0.6) brightness(0.8);backdrop-filter:blur(12px) invert(1) grayscale(0.6) brightness(0.8);opacity:0.5}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-background{background-color:rgba(0,0,0,0.3)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dots{padding:0 4px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-numbers{color:#fff}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dot{background-color:hsla(0,0%,100%,0.35)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dot-progress{background-color:#fff}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-pagination.css*/");a.registerElement("amp-inline-gallery-thumbnails",O,"amp-inline-gallery-thumbnails .i-amphtml-carousel-content{padding:0;padding:0 calc(var(--thumbnail-margin, 0)/2)}.i-amphtml-inline-gallery-thumbnails-container{box-sizing:border-box;width:auto!important;height:100%;-ms-flex-preferred-size:content;flex-basis:content;padding:0;padding:var(--thumbnail-margin,0) calc(var(--thumbnail-margin, 0)/2);-ms-writing-mode:tb-lr;writing-mode:vertical-lr}.i-amphtml-inline-gallery-thumbnails-thumbnail{position:relative;width:auto;height:100%}.i-amphtml-inline-gallery-thumbnails-resizer{position:static;height:100%}.i-amphtml-inline-gallery-thumbnails-default,.i-amphtml-inline-gallery-thumbnails-image{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-inline-gallery-thumbnails-default{background-color:#999}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-thumbnails.css*/");a.registerElement("amp-inline-gallery",R,"amp-inline-gallery{--i-amphtml-caption-height:0px}amp-inline-gallery>amp-base-carousel{padding-bottom:var(--i-amphtml-caption-height)}amp-inline-gallery .i-amphtml-base-carousel-arrow-next-slot,amp-inline-gallery .i-amphtml-base-carousel-arrow-prev-slot{margin-bottom:var(--i-amphtml-caption-height)}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery.css*/")})(self.AMP)}});