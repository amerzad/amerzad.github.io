(self.AMP=self.AMP||[]).push({n:"amp-connatix-player",v:"2008290323002",f:function(AMP,_){let f=self.AMP_CONFIG||{},h=("string"==typeof f.cdnProxyRegex?new RegExp(f.cdnProxyRegex):f.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function k(b){if(self.document&&self.document.head&&(!self.location||!h.test(self.location.origin))){var a=self.document.head.querySelector(`meta[name="${b}"]`);a&&a.getAttribute("content")}}f.cdnUrl||k("runtime-host");f.geoApiUrl||k("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let l=self.__AMP_LOG;
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */function m(b){b.win.addEventListener("message",a=>{b.c&&a.source===b.c.contentWindow&&"cnx_close"===a.data&&(b.c&&(a=b.c,a.parentElement&&a.parentElement.removeChild(a),b.c=null),b.attemptCollapse())})}class n extends AMP.BaseElement{constructor(b){super(b);this.j=this.l="";this.h="https://cdm.connatix.com";this.c=null}buildCallback(){let b=this.element;b.classList.add("i-amphtml-media-component");var a=b.getAttribute("data-player-id");if(!l.user)throw Error("failed to call initLogConstructor");this.l=l.user.assert(a,"The data-player-id attribute is required for <amp-connatix-player> %s",b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);this.j=b.getAttribute("data-media-id")||"";m(this)}preconnectCallback(b){var a=this.win;a=a.__AMP_TOP||(a.__AMP_TOP=a);{let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b}a=a.preconnect;a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));a=a.obj;a.url(this.getAmpDoc(),this.h,b)}isLayoutSupported(b){return"fixed"==b||"fixed-height"==b||"responsive"==b||"fill"==b||"flex-item"==b||"fluid"==b||"intrinsic"==b}layoutCallback(){let b=this.element;var a=this.h+"/amp-embed/index.html";var c={playerId:this.l||void 0,mediaId:this.j||void 0};var d=[];for(let a in c){var g=c[a];if(null!=g)if(Array.isArray(g))for(let b=0;b<g.length;b++){let c=g[b];d.push(`${encodeURIComponent(a)}=${encodeURIComponent(c)}`)}else d.push(`${encodeURIComponent(a)}=${encodeURIComponent(g)}`)}c=d.join("&");c&&(a=a.split("#",2),d=a[0].split("?",2),c=d[0]+(d[1]?`?${d[1]}&${c}`:`?${c}`),a=c+=a[1]?`#${a[1]}`:"");let e=b.ownerDocument.createElement("iframe");e.setAttribute("frameborder","0");e.setAttribute("allowfullscreen","true");e.src=a;this.applyFillContent(e,!0);b.appendChild(e);this.c=e;return this.loadPromise(e)}pauseCallback(){this.c&&this.c.contentWindow&&this.c.contentWindow.postMessage("pause",this.h)}unlayoutCallback(){if(this.c){var b=this.c;b.parentElement&&b.parentElement.removeChild(b);this.c=null}return!0}}(b=>{b.registerElement("amp-connatix-player",n)})(self.AMP)}});