(self.AMP=self.AMP||[]).push({n:"amp-anim",v:"2008290323002",f:function(AMP,_){let c=self.AMP_CONFIG||{},f=("string"==typeof c.cdnProxyRegex?new RegExp(c.cdnProxyRegex):c.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function h(a){if(self.document&&self.document.head&&(!self.location||!f.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}c.cdnUrl||h("runtime-host");c.geoApiUrl||h("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let k;let l="Webkit webkit Moz moz ms O o".split(" ");function n(a,b,m){var g=a.style;if(2>b.length||0!=b.lastIndexOf("--",0)){k||(k=Object.create(null));var d=k[b];if(!d){d=b;if(void 0===g[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);b:{for(let a=0;a<l.length;a++){let b=l[a]+e;if(void 0!==g[b]){e=b;break b}}e=""}void 0!==g[e]&&(d=e)}k[b]=d}b=d}b&&((2>b.length?0:0==b.lastIndexOf("--",0))?a.style.setProperty(b,m):a.style[b]=m)}function p(a,b){void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")}let q=["alt","aria-label","aria-describedby","aria-labelledby"],r=["src","srcset"];function t(a){let b=a.isInViewport();a.togglePlaceholder(!b);p(a.c,b)}class u extends AMP.BaseElement{constructor(a){super(a);this.c=null;this.h=!1}isLayoutSupported(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a}buildCallback(){this.c=new Image;this.c.setAttribute("decoding","async");this.propagateAttributes(q,this.c);this.applyFillContent(this.c,!0);var a=this.element,b=this.c;a.hasAttribute("object-fit")&&n(b,"object-fit",a.getAttribute("object-fit"));a.hasAttribute("object-position")&&n(b,"object-position",a.getAttribute("object-position"));"img"==this.element.getAttribute("role")&&(this.element.removeAttribute("role"),this.user().error("AMP-ANIM","Setting role=img on amp-anim elements breaks screen readers. Please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element."));p(this.c,!this.getPlaceholder());this.element.appendChild(this.c)}isRelayoutNeeded(){return!0}layoutCallback(){let a=this.c;this.propagateAttributes(r,a,!0);if(!a.hasAttribute("src")&&0=="srcset"in a){var b=a.getAttribute("srcset");b=/\S+/.exec(b);null!=b&&a.setAttribute("src",b[0])}return this.loadPromise(a)}firstLayoutCompleted(){this.h=!0;t(this)}viewportCallback(){this.h&&t(this)}unlayoutCallback(){this.c.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";this.c.srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";this.h=!1;return!0}}(a=>{a.registerElement("amp-anim",u)})(self.AMP)}});