(self.AMP=self.AMP||[]).push({n:"amp-vine",v:"2008290323002",f:function(AMP,_){let d=self.AMP_CONFIG||{},e=("string"==typeof d.cdnProxyRegex?new RegExp(d.cdnProxyRegex):d.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function f(a){if(self.document&&self.document.head&&(!self.location||!e.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}d.cdnUrl||f("runtime-host");d.geoApiUrl||f("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let g=self.__AMP_LOG;(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0});function h(a){a=a.__AMP_TOP||(a.__AMP_TOP=a);{let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b}a=a.preconnect;a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a=a.obj}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
class k extends AMP.BaseElement{constructor(a){super(a);this.h=null}preconnectCallback(a){h(this.win).url(this.getAmpDoc(),"https://vine.co",a);h(this.win).url(this.getAmpDoc(),"https://v.cdn.vine.co",a)}isLayoutSupported(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a}layoutCallback(){var a=this.element.getAttribute("data-vineid");var b=this.element;if(!g.user)throw Error("failed to call initLogConstructor");a=g.user.assert(a,"The data-vineid attribute is required for <amp-vine> %s",b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);let c=this.element.ownerDocument.createElement("iframe");c.setAttribute("frameborder","0");c.src="https://vine.co/v/"+encodeURIComponent(a)+"/embed/simple";this.applyFillContent(c);this.element.appendChild(c);this.h=c;return this.loadPromise(c)}pauseCallback(){this.h&&this.h.contentWindow&&this.h.contentWindow.postMessage("pause","*")}}(a=>{a.registerElement("amp-vine",k)})(self.AMP)}});