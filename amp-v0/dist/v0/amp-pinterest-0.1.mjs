(self.AMP=self.AMP||[]).push({n:"amp-pinterest",v:"2008290323002",f:function(AMP,_){let e="";for(let a=0;12>a;a+=1)e+="0123456789ABCDEFGHJKLMNPQRSTUVWXYZ_abcdefghijkmnopqrstuvwxyz".substr(Math.floor(60*Math.random()),1);function h(a){try{return(new DOMParser).parseFromString(a,"text/html").body.textContent}catch(c){return a}}var l=e;function m(a){let c=new Image;let b="https://log.pinterest.com/?guid="+e;b+="&amp=1";a&&(b+=a);b=b+"&via="+encodeURIComponent(window.location.href);c.src=b}function n(a,c){let d,f,b=null;for(d in c){b=a.createElement(d);for(f in c[d])if("string"===typeof c[d][f]){a=b;var g=f,k=c[d][f];"string"===typeof a[g]?a[g]=k:a.setAttribute(g,k)}break}return b}let p=self.AMP_CONFIG||{},q=("string"==typeof p.cdnProxyRegex?new RegExp(p.cdnProxyRegex):p.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function r(a){if(self.document&&self.document.head&&(!self.location||!q.test(self.location.origin))){var c=self.document.head.querySelector(`meta[name="${a}"]`);c&&c.getAttribute("content")}}p.cdnUrl||r("runtime-host");p.geoApiUrl||r("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let t=self.__AMP_LOG;function u(){if(!t.user)throw Error("failed to call initLogConstructor");return t.user}function v(a,c,b,d,f){return u().assert(a,c,b,d,f,void 0,void 0,void 0,void 0,void 0,void 0)}class w{constructor(a){this.o=a;this.l=this.m=0;this.h=Object.create(null)}has(a){return!!this.h[a]}get(a){let c=this.h[a];if(c)return c.access=++this.l,c.payload}put(a,c){this.has(a)||this.m++;this.h[a]={payload:c,access:this.l};if(!(this.m<=this.o)){a=this.h;var b=this.l+1;for(let c in a){let{access:f}=a[c];if(f<b){b=f;var d=c}}void 0!==d&&(delete a[d],this.m--)}}}(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0});let x,y;function z(a){x||(x=self.document.createElement("a"),y=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new w(100)));var c=y,b=x;if(c&&c.has(a))a=c.get(a);else{b.href=a;b.protocol||(b.href=b.href);var d={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:"0"==b.port?"":b.port,pathname:b.pathname,search:b.search,hash:b.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=b.origin&&"null"!=b.origin?b.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;c&&c.put(a,d);a=d}return a}function A(a,c){v(null!=a,"%s %s must be available",c,"source");var b=a;"string"==typeof b&&(b=z(b));var d;(d="https:"==b.protocol||"localhost"==b.hostname||"127.0.0.1"==b.hostname)||(b=b.hostname,d=b.length-10,d=0<=d&&b.indexOf(".localhost",d)==d);v(d||/^(\/\/)/.test(a),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',c,"source",a);return a}function B(a){return new Promise(c=>{c(a())})}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function C(a,c,b,d){let f;try{f=a.open(c,b,d)}catch(H){if(t.dev)var g=t.dev;else throw Error("failed to call initLogConstructor");g.error("DOM","Failed to open url on target: ",b,H)}if(!(b=f||"_top"==b)){b=d||"";var k;"number"!==typeof k&&(k=0);b=k+8>b.length?!1:-1!==b.indexOf("noopener",k)}b||a.open(c,"_top")}class D{constructor(a){v(a.getAttribute("data-href"),"The data-href attribute is required for follow buttons");v(a.getAttribute("data-label"),"The data-label attribute is required for follow buttons");this.element=a;this.label=a.getAttribute("data-label");this.href=A(a.getAttribute("data-href"),a)}handleClick(a){a.preventDefault();C(window,this.href,"pin"+Date.now(),"status=no,resizable=yes,scrollbars=yes,\n  personalbar=no,directories=no,location=no,toolbar=no,\n  menubar=no,width=1040,height=640,left=0,top=0");m(`&type=button_follow&href=${this.href}`)}renderTemplate(){let a=n(this.element.ownerDocument,{a:{class:"-amp-pinterest-follow-button",href:this.href,textContent:this.label}});a.appendChild(n(this.element.ownerDocument,{i:{}}));a.onclick=this.handleClick.bind(this);return a}render(){"/"!==this.href.substr(-1)&&(this.href+="/");this.href+=`pins/follow/?guid=${l}`;return B(()=>this.renderTemplate())}}function E(a,c){a=a.__AMP_TOP||(a.__AMP_TOP=a);{let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b}c=a[c];c.obj||(c.obj=new c.ctor(c.context),c.ctor=null,c.context=null,c.resolve&&c.resolve(c.obj));return c=c.obj}let F;function G(){return F?F:F=Promise.resolve(void 0)}class I{constructor(a){v(a.getAttribute("data-url"),"The data-url attribute is required for Pin widgets");this.element=a;this.xhr=E(a.ownerDocument.defaultView,"xhr");this.layout=this.width=this.pinUrl=this.alt=this.pinId=""}handleKeyDown(a){"Enter"!=a.key&&" "!=a.key||this.handleClick(a)}handleClick(a){a.preventDefault();a=a.target;let c=a.getAttribute("data-pin-pop")||!1,b=a.getAttribute("data-pin-href"),d=a.getAttribute("data-pin-log");b&&(v(/^https?:/i.test(b),'URL must start with "http://" or "https://". Invalid value: %s',b),z(b),c?C(window,b,"_pinit","status=no,resizable=yes,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=900,height=500,left=0,top=0"):C(window,`${b}?amp=1&guid=${l}`,"_blank"));d&&m("&type="+d)}fetchPin(){return this.xhr.fetchJson(`https://widgets.pinterest.com/v3/pidgets/pins/info/?pin_ids=${this.pinId}&sub=www&base_scheme=https`,{}).then(a=>a.json()).then(a=>{try{return a.data[0]}catch(c){return null}})}renderPin(a){let c="-amp-pinterest-embed-pin",b=A(a.images["237x"].url,this.element);"medium"===this.width||"large"===this.width?(c+="-medium",b=b.replace(/237/,"345"),m("&type=pidget&pin_count_medium=1")):m("&type=pidget&pin_count=1");"responsive"===this.layout&&(c+=" -amp-pinterest-embed-pin-responsive");let d=n(this.element.ownerDocument,{span:{}});d.className=c+" i-amphtml-fill-content";let f=n(this.element.ownerDocument,{span:{className:"-amp-pinterest-embed-pin-inner","data-pin-log":"embed_pin"}});!this.alt&&a.attribution&&(this.alt=a.attribution.title);var g=n(this.element.ownerDocument,{img:{src:b,className:"-amp-pinterest-embed-pin-image","data-pin-no-hover":!0,"data-pin-href":"https://www.pinterest.com/pin/"+a.id+"/","data-pin-log":"embed_pin_img",alt:this.alt}});f.appendChild(g);let k=n(this.element.ownerDocument,{span:{className:"-amp-pinterest-rect -amp-pinterest-en-red -amp-pinterest-embed-pin-repin -amp-pinterest-save-button-tall","data-pin-log":"embed_pin_repin","data-pin-pop":"1","data-pin-href":"https://www.pinterest.com/pin/"+a.id+"/repin/x/?amp=1&guid="+l,textContent:"Save",role:"button","aria-label":"Repin this image: "+this.alt,tabindex:"0"}});f.appendChild(k);g=n(this.element.ownerDocument,{span:{className:"-amp-pinterest-embed-pin-text"}});if(a.description){let b=n(this.element.ownerDocument,{span:{className:"-amp-pinterest-embed-pin-text-block -amp-pinterest-embed-pin-description",textContent:h(a.description)}});g.appendChild(b)}if(a.attribution){let b=n(this.element.ownerDocument,{span:{className:"-amp-pinterest-embed-pin-text-block -amp-pinterest-embed-pin-attribution"}});b.appendChild(n(this.element.ownerDocument,{img:{className:"-amp-pinterest-embed-pin-text-icon-attrib",src:a.attribution.provider_icon_url,alt:"from "+a.attribution.provider_name}}));b.appendChild(n(this.element.ownerDocument,{span:{textContent:" by "}}));b.appendChild(n(this.element.ownerDocument,{span:{"data-pin-href":a.attribution.url,textContent:h(a.attribution.author_name)}}));g.appendChild(b)}if(a.repin_count||a.like_count){let b=n(this.element.ownerDocument,{span:{className:"-amp-pinterest-embed-pin-text-block -amp-pinterest-embed-pin-stats"}});if(a.repin_count){let c=n(this.element.ownerDocument,{span:{className:"-amp-pinterest-embed-pin-stats-repins",textContent:String(a.repin_count)}});b.appendChild(c)}if(a.like_count){let c=n(this.element.ownerDocument,{span:{className:"-amp-pinterest-embed-pin-stats-likes",textContent:String(a.like_count)}});b.appendChild(c)}g.appendChild(b)}if(a.pinner){let b=n(this.element.ownerDocument,{span:{className:"-amp-pinterest-embed-pin-text-block -amp-pinterest-embed-pin-pinner"}});b.appendChild(n(this.element.ownerDocument,{img:{className:"-amp-pinterest-embed-pin-pinner-avatar",alt:h(a.pinner.full_name),title:h(a.pinner.full_name),src:a.pinner.image_small_url,"data-pin-href":a.pinner.profile_url}}));b.appendChild(n(this.element.ownerDocument,{span:{className:"-amp-pinterest-embed-pin-pinner-name",textContent:h(a.pinner.full_name),"data-pin-href":a.pinner.profile_url}}));b.appendChild(n(this.element.ownerDocument,{span:{className:"-amp-pinterest-embed-pin-board-name",textContent:h(a.board.name),"data-pin-href":"https://www.pinterest.com/"+a.board.url}}));g.appendChild(b)}f.appendChild(g);d.appendChild(f);d.addEventListener("click",this.handleClick.bind(this));d.addEventListener("keypress",this.handleKeyDown.bind(this));return d}render(){this.pinUrl=this.element.getAttribute("data-url");this.width=this.element.getAttribute("data-width");this.layout=this.element.getAttribute("layout");this.alt=this.element.getAttribute("alt");this.pinId="";try{this.pinId=this.pinUrl.split("/pin/")[1].split("/")[0]}catch(a){return Promise.reject(u().createError("Invalid pinterest url: %s",this.pinUrl))}return this.fetchPin().then(this.renderPin.bind(this))}}function J(a,c){var b=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c&&(d=d.filter((function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})));b.push.apply(b,d)}return b}function K(a){for(var c=1;c<arguments.length;c++){var b=null!=arguments[c]?arguments[c]:{};c%2?J(Object(b),!0).forEach((function(c){var d=b[c];c in a?Object.defineProperty(a,c,{value:d,enumerable:!0,configurable:!0,writable:!0}):a[c]=d})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):J(Object(b)).forEach((function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}))}return a}class L{constructor(a){v(a.getAttribute("data-url"),"The data-url attribute is required for Save buttons");v(a.getAttribute("data-media"),"The data-media attribute is required for Save buttons");v(a.getAttribute("data-description"),"The data-description attribute is required for Save buttons");this.element=a;this.xhr=E(a.ownerDocument.defaultView,"xhr");this.color=a.getAttribute("data-color");this.count=a.getAttribute("data-count");this.lang=a.getAttribute("data-lang");let c=a.hasAttribute("height")&&a.hasAttribute("width")&&a.getAttribute("height")===a.getAttribute("width");this.round=a.getAttribute("data-round")||c;this.tall=a.getAttribute("data-tall");this.description=a.getAttribute("data-description");this.href=this.url=this.media=null}handleClick(a){a.preventDefault();C(window,this.href,"_pinit","status=no,resizable=yes,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=900,height=500,left=0,top=0");m("&type=button_pinit")}fetchCount(){return this.xhr.fetchJson(`https://widgets.pinterest.com/v1/urls/count.json?return_jsonp=false&url=${this.url}`,{}).then(a=>a.json())}formatPinCount(a){999<a&&(a=1e6>a?parseInt(a/1e3,10)+"K+":1e9>a?parseInt(a/1e6,10)+"M+":"++");return String(a)}renderCount(a,c){m("&type=pidget&button_count=1");return n(this.element.ownerDocument,{span:{class:`-amp-pinterest-bubble-${this.count}${c}`,textContent:this.formatPinCount(a)}})}renderTemplate(a){let c={shape:this.round?"-round":"",height:this.tall?"-tall":"",lang:"ja"===this.lang?"-ja":"-en",color:-1!==["gray","white"].indexOf(this.color)?this.color:"red"},b=[`-amp-pinterest${c.shape}${c.height}`,"i-amphtml-fill-content"];let d=null;this.round||(b.push(`-amp-pinterest-save-button${c.height}`),b.push(`-amp-pinterest${c.lang}-${c.color}${c.height}`),a&&(b.push(`-amp-pinterest-count-pad-${this.count}${c.height}`),d=this.renderCount(a.count,c.height)));a="ja"===this.lang?"保存":"Save";let f=this.round?"":a,g=n(this.element.ownerDocument,{a:K({class:b.join(" "),href:this.href,textContent:f},!f&&{"aria-label":a})});d&&g.appendChild(d);g.onclick=this.handleClick.bind(this);return g}render(){this.description=encodeURIComponent(this.description);this.media=encodeURIComponent(this.element.getAttribute("data-media"));this.url=encodeURIComponent(this.element.getAttribute("data-url"));this.href=`https://www.pinterest.com/pin/create/button/?${["amp=1",`guid=${l}`,`url=${this.url}`,`media=${this.media}`,`description=${this.description}`].join("&")}`;return("above"===this.count||"beside"===this.count?this.fetchCount():G()).then(this.renderTemplate.bind(this))}}let M;let N=['<svg viewBox="0 0 72 72"><path fill=currentColor d="M36,26c-5.52,0-9.99,4.47-9.99,9.99c0,4.24,2.63,7.85,6.35,9.31c-0.09-0.79-0.16-2.01,0.03-2.87\n            c0.18-0.78,1.17-4.97,1.17-4.97s-0.3-0.6-0.3-1.48c0-1.39,0.81-2.43,1.81-2.43c0.86,0,1.27,0.64,1.27,1.41\n            c0,0.86-0.54,2.14-0.83,3.33c-0.24,1,0.5,1.81,1.48,1.81c1.78,0,3.14-1.88,3.14-4.57c0-2.39-1.72-4.06-4.18-4.06\n            c-2.85,0-4.51,2.13-4.51,4.33c0,0.86,0.33,1.78,0.74,2.28c0.08,0.1,0.09,0.19,0.07,0.29c-0.07,0.31-0.25,1-0.28,1.13\n            c-0.04,0.18-0.15,0.22-0.34,0.13c-1.25-0.58-2.03-2.4-2.03-3.87c0-3.15,2.29-6.04,6.6-6.04c3.46,0,6.16,2.47,6.16,5.77\n            c0,3.45-2.17,6.22-5.18,6.22c-1.01,0-1.97-0.53-2.29-1.15c0,0-0.5,1.91-0.62,2.38c-0.22,0.87-0.83,1.96-1.24,2.62\n            c0.94,0.29,1.92,0.44,2.96,0.44c5.52,0,9.99-4.47,9.99-9.99C45.99,30.47,41.52,26,36,26z"/></svg>'];class O extends AMP.BaseElement{constructor(a){super(a);this.j=""}preconnectCallback(a){E(this.win,"preconnect").url(this.getAmpDoc(),"https://widgets.pinterest.com",a)}isLayoutSupported(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a}buildCallback(){this.j=v(this.element.getAttribute("data-do"),"The data-do attribute is required for <amp-pinterest> %s",this.element)}layoutCallback(){return this.render().then(a=>this.element.appendChild(a))}render(){switch(this.j){case"embedPin":return new I(this.element).render();case"buttonPin":return new L(this.element).render();case"buttonFollow":return new D(this.element).render()}return Promise.reject(u().createError("Invalid type: %s",this.j))}createLoaderLogoCallback(){if("embedPin"!=this.j)var a={};else{a=this.element;a=a.ownerDocument||a;M&&M.ownerDocument===a||(M=a.createElement("div"));{a=M;a.innerHTML=N[0];let c=a.firstElementChild;a.removeChild(c);a=c}a={color:"#E60019",content:a}}return a}}(a=>{a.registerElement("amp-pinterest",O,".-amp-pinterest-round{background-size:16px 16px;height:16px;width:16px}.-amp-pinterest-round,.-amp-pinterest-round-tall{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='30' width='30' viewBox='-1 -1 31 31'%3E%3Cpath d='M29.449 14.662c0 8.06-6.581 14.594-14.699 14.594-8.118 0-14.699-6.534-14.699-14.594C.051 6.601 6.632.067 14.75.067c8.118 0 14.699 6.534 14.699 14.595' fill='%23fff' stroke='%23fff'/%3E%3Cpath d='M14.733 1.686c-7.217 0-13.068 5.809-13.068 12.976 0 5.497 3.444 10.192 8.305 12.082-.114-1.026-.217-2.601.046-3.722.237-1.012 1.532-6.45 1.532-6.45s-.391-.777-.391-1.926c0-1.804 1.054-3.151 2.365-3.151 1.115 0 1.653.831 1.653 1.828 0 1.113-.713 2.777-1.082 4.32-.308 1.292.652 2.345 1.935 2.345 2.323 0 4.108-2.432 4.108-5.942 0-3.107-2.248-5.279-5.458-5.279-3.719 0-5.901 2.769-5.901 5.631 0 1.115.433 2.311.972 2.961a.385.385 0 01.091.372c-.099.41-.32 1.292-.363 1.472-.057.237-.189.288-.437.173-1.632-.754-2.653-3.124-2.653-5.027 0-4.093 2.996-7.852 8.635-7.852 4.533 0 8.056 3.208 8.056 7.494 0 4.472-2.839 8.071-6.781 8.071-1.324 0-2.569-.683-2.995-1.49 0 0-.655 2.478-.814 3.085-.295 1.127-1.092 2.539-1.625 3.401 1.223.376 2.523.579 3.87.579 7.217 0 13.068-5.809 13.068-12.975 0-7.167-5.851-12.976-13.068-12.976' fill='%23e60023'/%3E%3C/svg%3E\")}.-amp-pinterest-round-tall{background-size:32px 32px;height:32px;width:32px}.-amp-pinterest-rect{height:20px;width:40px;background:url() 0 -20px no-repeat;background-size:40px 60px}.-amp-pinterest-rect:active{background-position:0 -40px}.-amp-pinterest-save-button{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='30' width='30' viewBox='-1 -1 31 31'%3E%3Cpath d='M29.449 14.662c0 8.06-6.581 14.594-14.699 14.594-8.118 0-14.699-6.534-14.699-14.594C.051 6.601 6.632.067 14.75.067c8.118 0 14.699 6.534 14.699 14.595' fill='%23fff' stroke='%23fff'/%3E%3Cpath d='M14.733 1.686c-7.217 0-13.068 5.809-13.068 12.976 0 5.497 3.444 10.192 8.305 12.082-.114-1.026-.217-2.601.046-3.722.237-1.012 1.532-6.45 1.532-6.45s-.391-.777-.391-1.926c0-1.804 1.054-3.151 2.365-3.151 1.115 0 1.653.831 1.653 1.828 0 1.113-.713 2.777-1.082 4.32-.308 1.292.652 2.345 1.935 2.345 2.323 0 4.108-2.432 4.108-5.942 0-3.107-2.248-5.279-5.458-5.279-3.719 0-5.901 2.769-5.901 5.631 0 1.115.433 2.311.972 2.961a.385.385 0 01.091.372c-.099.41-.32 1.292-.363 1.472-.057.237-.189.288-.437.173-1.632-.754-2.653-3.124-2.653-5.027 0-4.093 2.996-7.852 8.635-7.852 4.533 0 8.056 3.208 8.056 7.494 0 4.472-2.839 8.071-6.781 8.071-1.324 0-2.569-.683-2.995-1.49 0 0-.655 2.478-.814 3.085-.295 1.127-1.092 2.539-1.625 3.401 1.223.376 2.523.579 3.87.579 7.217 0 13.068-5.809 13.068-12.975 0-7.167-5.851-12.976-13.068-12.976' fill='%23e60023'/%3E%3C/svg%3E\") 3px 5px no-repeat;background-size:10px 10px;border-radius:2px;font:9px/20px Helvetica Neue,Helvetica,sans-serif;font-weight:700;max-height:20px;max-width:40px;min-height:20px;min-width:40px;text-indent:16px;text-decoration:none;-webkit-font-smoothing:antialiased}.-amp-pinterest-save-button-tall{background:#e60023 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='30' width='30' viewBox='-1 -1 31 31'%3E%3Cpath d='M29.449 14.662c0 8.06-6.581 14.594-14.699 14.594-8.118 0-14.699-6.534-14.699-14.594C.051 6.601 6.632.067 14.75.067c8.118 0 14.699 6.534 14.699 14.595' fill='%23fff' stroke='%23fff'/%3E%3Cpath d='M14.733 1.686c-7.217 0-13.068 5.809-13.068 12.976 0 5.497 3.444 10.192 8.305 12.082-.114-1.026-.217-2.601.046-3.722.237-1.012 1.532-6.45 1.532-6.45s-.391-.777-.391-1.926c0-1.804 1.054-3.151 2.365-3.151 1.115 0 1.653.831 1.653 1.828 0 1.113-.713 2.777-1.082 4.32-.308 1.292.652 2.345 1.935 2.345 2.323 0 4.108-2.432 4.108-5.942 0-3.107-2.248-5.279-5.458-5.279-3.719 0-5.901 2.769-5.901 5.631 0 1.115.433 2.311.972 2.961a.385.385 0 01.091.372c-.099.41-.32 1.292-.363 1.472-.057.237-.189.288-.437.173-1.632-.754-2.653-3.124-2.653-5.027 0-4.093 2.996-7.852 8.635-7.852 4.533 0 8.056 3.208 8.056 7.494 0 4.472-2.839 8.071-6.781 8.071-1.324 0-2.569-.683-2.995-1.49 0 0-.655 2.478-.814 3.085-.295 1.127-1.092 2.539-1.625 3.401 1.223.376 2.523.579 3.87.579 7.217 0 13.068-5.809 13.068-12.975 0-7.167-5.851-12.976-13.068-12.976' fill='%23e60023'/%3E%3C/svg%3E\") 3px 6px no-repeat;background-position-x:4px;background-size:15px 15px;border-radius:4px;max-height:28px;max-width:56px;min-height:28px;min-width:56px;text-indent:23px;text-decoration:none;font:12px/28px Helvetica Neue,Helvetica,Arial,\"sans-serif\";font-weight:700;-webkit-font-smoothing:antialiased}.-amp-pinterest-en-gray,.-amp-pinterest-en-gray-tall,.-amp-pinterest-ja-gray,.-amp-pinterest-ja-gray-tall{color:#555;background-color:#efefef}.-amp-pinterest-en-red,.-amp-pinterest-en-red-tall,.-amp-pinterest-ja-red,.-amp-pinterest-ja-red-tall{color:#fff;background-color:#e60023}.-amp-pinterest-en-white,.-amp-pinterest-en-white-tall,.-amp-pinterest-ja-white,.-amp-pinterest-ja-white-tall{color:#e60023;background-color:#fff;box-sizing:border-box;box-shadow:inset 0 0 1px #e60023}.-amp-pinterest-rect-tall{height:28px;width:56px;background:url() 0 -28px no-repeat;background-size:56px 84px}.-amp-pinterest-rect-tall:active{background-position:0 -56px}.-amp-pinterest-count-pad-above{margin-top:26px}.-amp-pinterest-count-pad-above-tall{margin-top:40px}.-amp-pinterest-bubble-above{position:absolute;left:0;text-align:center;text-decoration:none;text-indent:0;color:#555;top:-26px;height:20px;width:40px;background:#efefef;background-size:40px 20px;border-radius:4px;line-height:20px}.-amp-pinterest-bubble-above:after{border-top:7px solid #efefef;border-right:7px solid transparent;border-left:7px solid transparent;bottom:-4px;left:4px;content:\"\";position:absolute}.-amp-pinterest-bubble-above-tall{position:absolute;left:0;text-align:center;text-decoration:none;color:#555;top:-40px;bottom:29px;height:34px;width:56px;background:#efefef;border-radius:4px;text-indent:0;line-height:34px}.-amp-pinterest-bubble-above-tall:after{border-top:7px solid #efefef;border-right:7px solid transparent;border-left:7px solid transparent;bottom:-4px;left:7px;content:\"\";position:absolute}.-amp-pinterest-count-pad-beside{margin-left:0;width:86px}.-amp-pinterest-count-pad-beside-tall{margin-left:0;width:120px}.-amp-pinterest-bubble-beside{position:absolute;top:0;right:-46px;height:20px;width:40px;text-align:center;text-indent:0;text-decoration:none;color:#555;background:#efefef;background-size:40px 20px;border-radius:4px;line-height:20px}.-amp-pinterest-bubble-beside:before{top:3px;left:-4px;border-right:7px solid #efefef;border-top:7px solid transparent;border-bottom:7px solid transparent;content:\"\";position:absolute}.-amp-pinterest-bubble-beside-tall{position:absolute;top:0;right:-62px;height:28px;width:56px;text-align:center;text-indent:0;text-decoration:none;color:#555;background:#efefef;background-size:56px 28px;border-radius:4px;line-height:28px}.-amp-pinterest-bubble-beside-tall:before{top:7px;left:-4px;border-right:7px solid #efefef;border-top:7px solid transparent;border-bottom:7px solid transparent;content:\"\";position:absolute}.-amp-pinterest-follow-button{background-color:#efefef;background-size:200px 60px;border-radius:3px;box-sizing:border-box;box-shadow:inset 0 0 1px #888;color:#363636;cursor:pointer;display:inline-block;font:700 normal normal 11px/20px Helvetica Neue,helvetica,arial,san-serif;height:20px;padding:0 4px 0 20px;position:relative;text-decoration:none;vertical-align:baseline}.-amp-pinterest-follow-button i{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='30' width='30' viewBox='-1 -1 31 31'%3E%3Cpath d='M29.449 14.662c0 8.06-6.581 14.594-14.699 14.594-8.118 0-14.699-6.534-14.699-14.594C.051 6.601 6.632.067 14.75.067c8.118 0 14.699 6.534 14.699 14.595' fill='%23fff' stroke='%23fff'/%3E%3Cpath d='M14.733 1.686c-7.217 0-13.068 5.809-13.068 12.976 0 5.497 3.444 10.192 8.305 12.082-.114-1.026-.217-2.601.046-3.722.237-1.012 1.532-6.45 1.532-6.45s-.391-.777-.391-1.926c0-1.804 1.054-3.151 2.365-3.151 1.115 0 1.653.831 1.653 1.828 0 1.113-.713 2.777-1.082 4.32-.308 1.292.652 2.345 1.935 2.345 2.323 0 4.108-2.432 4.108-5.942 0-3.107-2.248-5.279-5.458-5.279-3.719 0-5.901 2.769-5.901 5.631 0 1.115.433 2.311.972 2.961a.385.385 0 01.091.372c-.099.41-.32 1.292-.363 1.472-.057.237-.189.288-.437.173-1.632-.754-2.653-3.124-2.653-5.027 0-4.093 2.996-7.852 8.635-7.852 4.533 0 8.056 3.208 8.056 7.494 0 4.472-2.839 8.071-6.781 8.071-1.324 0-2.569-.683-2.995-1.49 0 0-.655 2.478-.814 3.085-.295 1.127-1.092 2.539-1.625 3.401 1.223.376 2.523.579 3.87.579 7.217 0 13.068-5.809 13.068-12.975 0-7.167-5.851-12.976-13.068-12.976' fill='%23e60023'/%3E%3C/svg%3E\");background-size:14px 14px;height:14px;left:3px;position:absolute;top:3px;width:14px}.-amp-pinterest-embed-pin,.-amp-pinterest-embed-pin-medium{box-sizing:border-box;padding:5px;width:237px}.-amp-pinterest-embed-pin-medium{width:345px}.-amp-pinterest-embed-pin-responsive{width:100%}.-amp-pinterest-embed-pin-responsive .-amp-pinterest-embed-pin-image{max-width:100%}.-amp-pinterest-embed-pin-inner{display:block;position:relative;-webkit-font-smoothing:antialiased;cursor:pointer;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.33);border-radius:3px;width:100%}.-amp-pinterest-embed-pin-text{color:#a8a8a8;white-space:normal;font-family:Helvetica Neue,arial,sans-serif;font-size:11px;line-height:18px;font-weight:700}.-amp-pinterest-embed-pin-image{border-radius:3px 3px 0 0}.-amp-pinterest-embed-pin-text-block{display:block;line-height:30px;padding:0 12px}.-amp-pinterest-embed-pin-text-icon-attrib{height:16px;width:16px;vertical-align:middle}.-amp-pinterest-embed-pin-stats{height:16px;line-height:16px;padding:8px 12px}.-amp-pinterest-embed-pin-stats-likes{padding-left:14px;background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAAAAAClR+AmAAAAUElEQVR4AT2HMQpFIQwEc/+zbXhFLBW8QUihIAT2E8Q/xe6M0Jv2zK7NKUcBzAlAjzjqtdZl4c8S2nOjMPS6BoWMr/wLVnAbYJs3mGMkXzx+OeRqUf5HHRoAAAAASUVORK5CYII=) 0 2px no-repeat}.-amp-pinterest-embed-pin-stats-repins{padding:0 10px 0 18px;background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAAAAABq7uO+AAAASklEQVQI10WNMQrAMBRCvf/Z3pQcImPplsIPdqhNXOSJqLxVtnWQsuUO9IM3cHlV8dSSDZQHAOPH2YA2FU+qtH7MRhaVh/xt/PQCEW6N4EV+CPEAAAAASUVORK5CYII=) 0 0 no-repeat}.-amp-pinterest-embed-pin-description{color:#363636;font-weight:400;font-size:14px;line-height:17px;padding-top:5px}.-amp-pinterest-embed-pin-pinner{padding:12px;border-top:1px solid rgba(0,0,0,0.09)}.-amp-pinterest-embed-pin-pinner-avatar{border-radius:15px;border:none;height:30px;width:30px;vertical-align:middle;margin:0 8px 12px 0;float:left}.-amp-pinterest-embed-pin-board-name,.-amp-pinterest-embed-pin-pinner-name{display:block;height:15px;line-height:15px}.-amp-pinterest-embed-pin-pinner-name{color:#777}.-amp-pinterest-embed-pin-repin{border-radius:4px;position:absolute;top:12px;left:12px;cursor:pointer}\n/*# sourceURL=/extensions/amp-pinterest/0.1/amp-pinterest.css*/")})(self.AMP)}});