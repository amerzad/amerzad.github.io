(self.AMP=self.AMP||[]).push({n:"amp-autocomplete",v:"2008290323002",f:function(AMP,_){let k;function m(){return k?k:k=Promise.resolve(void 0)}function n(a,b=""){try{return decodeURIComponent(a)}catch(c){return b}}let aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function p(a){let b=Object.create(null);if(!a)return b;let c;for(;c=aa.exec(a);){let a=n(c[1],c[1]),e=c[2]?n(c[2].replace(/\+/g," "),c[2]):"";b[a]=e}return b}let ba=Object.prototype.toString;function q(a){return Array.isArray(a)}function ca(a){let b=!1,c=null,d=a;return(...a)=>{b||(c=d.apply(self,a),b=!0,d=null);return c}}let r=self.AMP_CONFIG||{},t=("string"==typeof r.cdnProxyRegex?new RegExp(r.cdnProxyRegex):r.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function u(a){if(!self.document||!self.document.head||self.location&&t.test(self.location.origin))return null;let b=self.document.head.querySelector(`meta[name="${a}"]`);return b&&b.getAttribute("content")||null}let da={thirdParty:r.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:r.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof r.thirdPartyFrameRegex?new RegExp(r.thirdPartyFrameRegex):r.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:r.cdnUrl||u("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:t,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:r.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:r.betaErrorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:r.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:r.geoApiUrl||u("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let v=self.__AMP_LOG;function x(){if(!v.user)throw Error("failed to call initLogConstructor");return v.user}function ea(){}function y(a,b,c,d,e){x().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)}let z=Object.prototype.hasOwnProperty;function A(a){return a||{}}function B(a,b){if(z.call(a,b))return a[b]}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function C(a,b){var c;"number"!==typeof c&&(c=0);return c+b.length>a.length?!1:-1!==a.indexOf(b,c)}class fa{constructor(a){let b=a.element;this.W=b;this.G=this.W.getAttribute("inline");y(""!==this.G,'Empty value for the "inline" attr is unsupported, %s. %s',"amp-autocomplete",b);y(""!==this.G,"AutocompleteBindingInline does not support an empty value in the constructor.");this.C=null;let c=this.G.replace(/([()[{*+.$^\\|?])/g,"\\$1");this.ca=new RegExp(`((${c}|^${c})(\\w+)?)`,"gm")}shouldAutocomplete(a){var b;if(b=this.ca){for(var e,f,c=a.value,d=a.selectionStart;null!==(e=b.exec(c))&&!(e[0].length+B(e,"index")>d);)f=e;b=!f||f[0].length+B(f,"index")<d?null:f}else b=null;this.C=b;return!!b}getUserInputForUpdate(){return this.C&&this.C[0]?this.C[0].slice(this.G.length):""}getUserInputForUpdateWithSelection(a,b,c){if(!this.C)return b.value;let d=b.selectionStart;let e=Number(B(this.C,"index")),f=c.length;d>=e+f&&(d-=f);try{b.focus()}catch(l){}d=d+a.length+1;b.setSelectionRange(d,d);this.C=null;b=b.value;let g=b.slice(0,e+this.G.length),h=b.slice(e+this.G.length+f);return g+a+" "+h}resetInputOnWrapAround(){}shouldSuggestFirst(){return this.W.hasAttribute("suggest-first")}shouldShowOnFocus(){return!1}displayActiveItemInInput(){}removeSelectionHighlighting(){}shouldPreventDefaultOnEnter(a){return a}}class ha{constructor(a){a=a.element;this.A=a.hasAttribute("suggest-first");let b=a.getAttribute("filter");this.A&&"prefix"!==b&&(this.A=!1);this.ea=a.hasAttribute("submit-on-enter")}shouldAutocomplete(){return!0}getUserInputForUpdate(a){return a.value||""}getUserInputForUpdateWithSelection(a){return a}resetInputOnWrapAround(a,b){b.value=a}shouldSuggestFirst(){return this.A}shouldShowOnFocus(){return!0}displayActiveItemInInput(a,b,c){a.value=b;this.A&&a.setSelectionRange(c.length,b.length)}removeSelectionHighlighting(a){let b=a.value.length;a.setSelectionRange(b,b)}shouldPreventDefaultOnEnter(){return!this.ea}}function D(a,b){void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")}class ia{constructor(a){this.aa=a;this.O=this.U=0;this.K=Object.create(null)}has(a){return!!this.K[a]}get(a){let b=this.K[a];if(b)return b.access=++this.O,b.payload}put(a,b){this.has(a)||this.U++;this.K[a]={payload:b,access:this.O};if(!(this.U<=this.aa)){a=this.K;var c=this.O+1;for(let b in a){let{access:e}=a[b];if(e<c){c=e;var d=b}}void 0!==d&&(delete a[d],this.U--)}}}let ja=A({c:!0,v:!0,a:!0,ad:!0});let E,F;let ka=/[?&]amp_js[^&]*/,la=/[?&]amp_gsa[^&]*/,ma=/[?&]amp_r[^&]*/,oa=/[?&]amp_kit[^&]*/,pa=/[?&]usqp[^&]*/;function G(a){E||(E=self.document.createElement("a"),F=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new ia(100)));var b=F,c=E;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a}function H(a,b,c){if(b=`${encodeURIComponent(b)}=${encodeURIComponent(c)}`)a=a.split("#",2),c=a[0].split("?",2),b=c[0]+(c[1]?`?${c[1]}&${b}`:`?${b}`),a=b+=a[1]?`#${a[1]}`:"";return a}function qa(a){let b=[];for(let d in a){let e=a[d];if(null!=e)if(q(e))for(var c=0;c<e.length;c++){let a=e[c];b.push(`${encodeURIComponent(d)}=${encodeURIComponent(a)}`)}else c=e,b.push(`${encodeURIComponent(d)}=${encodeURIComponent(c)}`)}return b.join("&")}function ra(a,b){y(null!=a,"%s %s must be available",b,"source");var c=a;"string"==typeof c&&(c=G(c));var d;(d="https:"==c.protocol||"localhost"==c.hostname||"127.0.0.1"==c.hostname)||(c=c.hostname,d=c.length-10,d=0<=d&&c.indexOf(".localhost",d)==d);y(d||/^(\/\/)/.test(a),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',b,"source",a)}function sa(a){let b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(d){}let c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(let b=0;b<c.length;b++)0!=c[b].length&&("-"==c[b][0]?a[c[b].substr(1)]=!1:a[c[b]]=!0);return a}function I(a,b){let c=a.ownerDocument.defaultView;var d=c.__AMP_TOP||(c.__AMP_TOP=c);let e=c!=d;if(d.__AMP__EXPERIMENT_TOGGLES)var f=d.__AMP__EXPERIMENT_TOGGLES;else{d.__AMP__EXPERIMENT_TOGGLES=Object.create(null);f=d.__AMP__EXPERIMENT_TOGGLES;if(d.AMP_CONFIG)for(var g in d.AMP_CONFIG){var h=d.AMP_CONFIG[g];"number"===typeof h&&0<=h&&1>=h&&(f[g]=Math.random()<h)}if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-doc-opt-in"])&&0<d.AMP_CONFIG["allow-doc-opt-in"].length&&(g=d.AMP_CONFIG["allow-doc-opt-in"],h=d.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){h=h.getAttribute("content").split(",");for(var l=0;l<h.length;l++)-1!=g.indexOf(h[l])&&(f[h[l]]=!0)}Object.assign(f,sa(d));if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-url-opt-in"])&&0<d.AMP_CONFIG["allow-url-opt-in"].length)for(g=d.AMP_CONFIG["allow-url-opt-in"],d=p(d.location.originalHash||d.location.hash),h=0;h<g.length;h++)l=d[`e-${g[h]}`],"1"==l&&(f[g[h]]=!0),"0"==l&&(f[g[h]]=!1)}let w=!!f["ampdoc-fie"];e&&!w?b=J(c,b)?K(c,b):null:(a=L(a),a=M(a),b=J(a,b)?K(a,b):null);return b}function N(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return K(a,b)}function O(a,b){var c=L(a);c=M(c);return K(c,b)}function L(a){return a.nodeType?N((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function M(a){a=L(a);return a.isSingleDoc()?a.win:a}function K(a,b){J(a,b);{let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b}b=a[b];b.obj||(b.obj=new b.ctor(b.context),b.ctor=null,b.context=null,b.resolve&&b.resolve(b.obj));return b.obj}function J(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}function ta(a){return!!a&&"function"==typeof a.getFormData}function ua(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter((function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})));c.push.apply(c,d)}return c}function va(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?ua(Object(c),!0).forEach((function(b){var d=c[b];b in a?Object.defineProperty(a,b,{value:d,enumerable:!0,configurable:!0,writable:!0}):a[b]=d})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):ua(Object(c)).forEach((function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))}))}return a}let wa=["GET","POST"],xa=[q,function(a){return"[object Object]"===ba.call(a)}];function ya(a){a=a||{};var b=a.method;void 0===b?b="GET":(b=b.toUpperCase(),wa.includes(b));a.method=b;a.headers=a.headers||A({});a.headers.Accept="application/json";return a}function za(a){let b=ya(a);"POST"!=b.method||ta(b.body)||(ea(xa.some(a=>a(b.body))),b.headers["Content-Type"]=b.headers["Content-Type"]||"text/plain;charset=utf-8",b.body="application/x-www-form-urlencoded"===b.headers["Content-Type"]?qa(b.body):JSON.stringify(b.body))}function Aa(a,b,c,d,e={}){let f=A({type:a.da}),g=d&&d.successTemplate?d.successTemplate:c;g&&(f.successTemplate={type:"amp-mustache",payload:g.innerHTML});let h=d&&d.errorTemplate?d.errorTemplate:null;h&&(f.errorTemplate={type:"amp-mustache",payload:h.innerHTML});e&&Object.assign(f,e);a=b.xhrUrl;c=b.fetchOpt;b=va({},c);if(ta(c.body)){c=c.body;b.headers["Content-Type"]="multipart/form-data;charset=utf-8";c=c.entries();d=[];for(e=c.next();!e.done;e=c.next())d.push(e.value);c=d;b.body=c}a={input:a,init:b};return A({originalRequest:a,ampComponent:f})}class Ba{constructor(a,b,c){this.N=b;this.D=c;this.da=a}isEnabled(){let a=this.N.getAmpDoc();return a.isSingleDoc()&&a.getRootNode().documentElement.hasAttribute("allow-viewer-render-template")?this.N.hasCapability("viewerRenderTemplate"):!1}assertTrustedViewer(a){return this.N.isTrustedViewer().then(b=>{y(b,"Refused to attempt SSR in untrusted viewer: ",a)})}ssr(a,b,c=null,d={}){let e;c||(e=this.D.maybeFindTemplate(a));return this.assertTrustedViewer(a).then(()=>this.N.sendMessageAwaitResponse("viewerRenderTemplate",Aa(this,b,e,c,d)))}applySsrOrCsrTemplate(a,b){let c;this.isEnabled()?(y("string"===typeof b.html,"Server side html response must be defined"),c=this.assertTrustedViewer(a).then(()=>this.D.findAndSetHtmlForTemplate(a,b.html))):c=q(b)?this.D.findAndRenderTemplateArray(a,b):this.D.findAndRenderTemplate(a,b);return c}}function P(a,b){if("."==b)return a;b=b.split(".");for(let c=0;c<b.length;c++){let d=b[c];if(d&&a&&void 0!==a[d]&&(null==a||"object"!=typeof a?0:Object.prototype.hasOwnProperty.call(a,d)))a=a[d];else{a=void 0;break}}return a}function Ca(a,b){try{return JSON.parse(a)}catch(c){return b&&b(c),null}}function Da(a,b,{expr:c=".",urlReplacement:d=0,refresh:e=!1,xssiPrefix:f}={}){ra(b.getAttribute("src"),b);let g=N(a.win,"batched-xhr");return Ea(b,d,e).then(a=>g.fetchJson(a.xhrUrl,a.fetchOpt)).then(b=>N(a.win,"xhr").xssiJson(b,f)).then(a=>{if(null==a)throw Error("Response is undefined.");return P(a,c||".")}).catch(a=>{throw x().createError("failed fetching JSON data",a)})}function Ea(a,b,c){let d=a.getAttribute("src"),e=I(a,"url-replace");return(1<=b?e.expandUrlAsync(d):Promise.resolve(d)).then(d=>{if(1==b){let b=e.collectDisallowedVarsSync(a);if(0<b.length)throw x().createError(`URL variable substitutions in CORS fetches from dynamic URLs (e.g. via amp-bind) require opt-in. Please add data-amp-replace="${b.join(" ")}" to the <${a.tagName}> element. See https://bit.ly/amp-var-subs.`)}let f={};a.hasAttribute("credentials")&&(f.credentials=a.getAttribute("credentials"));c&&(f.cache="reload");return{xhrUrl:d,fetchOpt:f}})}function Fa(a,b,c,d){let e={detail:c};Object.assign(e,d);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,e);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!e.bubbles,!!e.cancelable,c);return a}function Ga(a){let b=a.documentElement;return["⚡4email","amp4email"].some(a=>b.hasAttribute(a))}function Ha(a,b){return 0<a&&0<b?a%b:(a%b+b)%b}function Ia(a,b){var c=b.length,d=a.length;if(d>c)return!1;if(d===c&&a===b)return!0;var e=0,f=0;a:for(;e<d;e++){for(var g=a.charCodeAt(e);f<c;)if(b.charCodeAt(f++)===g)continue a;return!1}return!0}let Ja={SUBSTRING:"substring",PREFIX:"prefix",TOKEN_PREFIX:"token-prefix",FUZZY:"fuzzy",CUSTOM:"custom",NONE:"none"};function Ka(a,b){b=Ca(b.textContent,a=>{throw a});let c=a.element.getAttribute("items")||"items",d=P(b,c);return d?x().assertArray(d):[]}function La(a){if(a.L){var b=Ma(a,a.l);a.element.setAttribute("src",b)}}function Q(a){let b=a.getAmpDoc(),c=a.element.getAttribute("items")||"items";La(a);return a.I?Ea(a.element,2,!1).then(b=>{var d=a.win,f=b.xhrUrl;if(!1!==b.fetchOpt.ampCors){var g=G(f);g=p(g.search);y(!("__amp_source_origin"in g),"Source origin is not allowed in %s",f);d=d.location.href;"string"==typeof d&&(d=G(d));g=d;"string"==typeof g&&(g=G(g));if(da.cdnProxyRegex.test(g.origin)){g=d.pathname.split("/");y(ja[g[1]],"Unknown path prefix in url %s",d.href);var h=g[2],l="s"==h?"https://"+decodeURIComponent(g[3]):"http://"+decodeURIComponent(h);y(0<l.indexOf("."),"Expected a . in origin %s",l);g.splice(1,"s"==h?3:2);g=l+g.join("/");h=(h=d.search)&&"?"!=h?(h=h.replace(ka,"").replace(la,"").replace(ma,"").replace(oa,"").replace(pa,"").replace(/^[?&]/,""))?"?"+h:"":"";d=g+h+(d.hash||"")}else d=d.href;d=G(d).origin;f=H(f,"__amp_source_origin",d)}b.xhrUrl=f;d=b.xhrUrl;f=(f=b.fetchOpt)||{};g=a.win;g=g.origin||G(g.location.href).origin;d=G(d).origin;g==d&&(f.headers=f.headers||{},f.headers["AMP-Same-Origin"]="true");b.fetchOpt=f;za(b.fetchOpt);f=A({ampAutocompleteAttributes:{items:c,maxItems:a.J}});return a.getSsrTemplateHelper().ssr(a.element,b,null,f)}):Da(b,a.element,{expr:c,urlReplacement:2}).catch(()=>[])}function Ma(a,b=""){return H(a.M,a.L,b)}function Na(a){let b=a.$.getHeight()||0;return a.h.getBoundingClientRect().top>b/2}function Oa(a){if(a.Y||!a.element.hasAttribute("src"))return m();a.Y=!0;return Q(a).then(b=>{a.o=b;R(a,a.o)},b=>{Pa(a,b)})}function Qa(a){a.w.shouldAutocomplete(a.h)?Ra(a):a.mutateElement(()=>{S(a)})}function Sa(a,b){switch(b.key){case"ArrowDown":b.preventDefault();if(T(a)){if(a.F===Ta(a).length-1){U(a);m();break}V(a,1);break}a.mutateElement(()=>{R(a,a.o,a.l);W(a,!0)});break;case"ArrowUp":b.preventDefault();if(0===a.F){U(a);m();break}V(a,-1);break;case"Enter":let c=a.w.shouldPreventDefaultOnEnter(!!a.m);T(a)&&c&&b.preventDefault();a.w.removeSelectionHighlighting(a.h);if(T(a)&&a.m){let b=X(a,a.m);a.mutateElement(()=>{Y(a,b);Z(a)});break}a.mutateElement(()=>{W(a,!1)});break;case"Escape":a.mutateElement(()=>{a.H||(b.preventDefault(),U(a),W(a,!1))});break;case"Tab":if(T(a)&&a.m){b.preventDefault();let c=X(a,a.m);a.mutateElement(()=>{Y(a,c)});break}m();break;case"Backspace":a.R=a.A;m();break;default:m()}}function Ua(a,b){let c=a.h.form||null;c&&(b?c.setAttribute("autocomplete","off"):a.T?c.setAttribute("autocomplete",a.T):c.removeAttribute("autocomplete"));let d=!1;a.measureMutateElement(()=>{d=Na(a)},()=>{b||(a.l=a.h.value,R(a,a.o,a.l),Z(a));a.j.classList.toggle("i-amphtml-autocomplete-results-up",d);W(a,b)})}function Va(a,b){let c=X(a,Wa(a,b.target));a.mutateElement(()=>{Y(a,c)})}function R(a,b,c=""){S(a);c.length<a.Z||!b?a=m():a.I?a=z.call(b,"html")?Xa(a,b,a.j,c):m():b.length?(b=Ya(a,b,c),a=Xa(a,b,a.j,c)):a=m();return a}function Pa(a,b){if(!a.H)if(S(a),a.getFallback())a.H=!0,a.toggleFallback(!0);else throw b}function Za(a,b,c=""){let d=a.element.ownerDocument.createElement("div");d.classList.add("i-amphtml-autocomplete-item");d.setAttribute("role","option");d.setAttribute("data-value",b);d.setAttribute("dir","auto");d.textContent=b;let e=d.childNodes[0],f=b.toLocaleLowerCase(),g=c.toLocaleLowerCase();if(a.X&&c&&c.length<=b.length&&C(f,g)){let h=f.indexOf(g),l=a.element.ownerDocument.createElement("span");l.classList.add("autocomplete-partial");l.appendChild(a.element.ownerDocument.createTextNode(b.slice(h,h+c.length)));let w=e.splitText(h);w.splitText(c.length);d.replaceChild(l,w)}return d}function Ra(a){let b=0===a.l.length&&1===a.h.value.length;a.l=a.w.getUserInputForUpdate(a.h);(a.I||a.L?Q(a):Promise.resolve(a.o)).then(c=>{a.o=c;return a.mutateElement(()=>{R(a,a.o,a.l).then(()=>{W(a,!0);a.A&&(a.R&&!b||V(a,1),a.R=!1)})})})}function S(a){a.H=!1;for(a=a.j;a.firstChild;)a.removeChild(a.firstChild)}function W(a,b){a.h.setAttribute("aria-expanded",b);D(a.j,b)}function V(a,b){if(0===b||!T(a)||a.H)m();else{var c=-1===a.F&&0>b?b:a.F+b,d=Ta(a);if(0===d.length)m();else{var e=Ha(c,d.length),f=d[e];c=f.getAttribute("data-value");a.w.displayActiveItemInInput(a.h,c,a.l);var g,h;a.measureMutateElement(()=>{let c=f.offsetTop,d=f.offsetHeight,e=a.j.scrollTop,na=a.j.offsetHeight;g=e>c||e+na<c+d;h=0<b?c+d-na:c},()=>{g&&(a.j.scrollTop=h);Z(a);f.classList.add("i-amphtml-autocomplete-item-active");f.setAttribute("aria-selected","true");let b=f.getAttribute("id");b||(b=a.ba+"_AMP_content_"+e,f.setAttribute("id",b));a.h.setAttribute("aria-activedescendant",b);a.F=e;a.m=f;try{a.m.focus()}catch(w){}})}}}function X(a,b){if(null===b||b.hasAttribute("data-disabled"))return null;b=b.getAttribute("data-value")||b.textContent||"";a.h.value=a.w.getUserInputForUpdateWithSelection(b,a.h,a.l);a.l=a.w.getUserInputForUpdate(a.h);return b}function Wa(a,b){return null===b?null:b.classList.contains("i-amphtml-autocomplete-item")?b:Wa(a,b.parentElement)}function Y(a,b){if(null!==b){{let c=Fa(a.win,"amp-autocomplete.select",{value:b});a.V.trigger(a.element,"select",c,3);b=Fa(a.win,"change",{value:b},{bubbles:!0});a.h.dispatchEvent(b)}S(a);W(a,!1)}}function Xa(a,b,c,d){let e=m();Z(a);a.S?e=a.getSsrTemplateHelper().applySsrOrCsrTemplate(a.element,b).then(a=>{(q(a)?a:[a]).forEach(a=>{a.hasAttribute("data-disabled")?a.setAttribute("aria-disabled","true"):a.hasAttribute("data-value");a.classList.add("i-amphtml-autocomplete-item");a.setAttribute("role","option");c.appendChild(a)})}):b.forEach(b=>{y("string"===typeof b,"%s data must provide template for non-string items. %s","amp-autocomplete",a.element);c.appendChild(Za(a,b,d))});return e}function Ya(a,b,c){if("none"===a.B)return $a(a,b);c=c.toLocaleLowerCase();let d=a.element.getAttribute("filter-value")||"value";b=b.filter(b=>{"object"===typeof b&&(b=P(b,d));y("string"===typeof b,'%s data property "%s" must map to string type. %s',"amp-autocomplete",d,a.element);b=b.toLocaleLowerCase();switch(a.B){case"substring":return C(b,c);case"prefix":return c.length>b.length?!1:0==b.lastIndexOf(c,0);case"token-prefix":return ab(b,c);case"fuzzy":return Ia(c,b);case"custom":throw Error("Filter not yet supported: %s",a.B,a.element);default:throw Error("Unexpected filter: %s",a.B,a.element)}});return $a(a,b)}function Z(a){a.m&&(a.m.classList.toggle("i-amphtml-autocomplete-item-active",!1),a.m.removeAttribute("aria-selected"),"autocomplete-selected"===a.m.getAttribute("id")&&a.m.removeAttribute("id"),a.h.removeAttribute("aria-activedescendent"),a.m=null,a.F=-1)}function $a(a,b){a.J&&a.J<b.length&&(b=b.slice(0,a.J));return b}function ab(a,b){if(""===b)return!0;let c=bb(a),d=bb(b),e=cb(c),f=d[d.length-1];d.splice(d.length-1,1);a=!0;for(b=0;b<d.length;b++){let c=d[b];if(""===c)continue;if(!z.call(e,c)){a=!1;break}let f=Number(B(e,c));1<f?e[c]=f-1:delete e[c]}let g=Object.keys(e);return a&&(""===f||g.some(a=>f.length>a.length?!1:0==a.lastIndexOf(f,0)))}function bb(a){a=a.replace(/[\.]+/g,"");return a.split(/[`~(){}_|+\-;:'",\[\]\\\/ ]+/g)}function cb(a){let b=Object.create(null);a.forEach(a=>{let c=z.call(b,a)?B(b,a)+1:1;b[a]=c});return b}function T(a){return!a.j.hasAttribute("hidden")&&0<a.j.children.length}function Ta(a){return a.j.querySelectorAll(".i-amphtml-autocomplete-item:not([data-disabled])")}function U(a){a.w.resetInputOnWrapAround(a.l,a.h);Z(a)}class db extends AMP.BaseElement{constructor(a){super(a);this.h=this.o=this.w=null;this.B=this.l="";this.Z=1;this.J=null;this.X=this.R=this.A=!1;this.L=this.M="";this.F=-1;this.m=null;this.ba=a.id?a.id:Math.floor(100*Math.random());this.j=null;this.H=!1;this.T=null;this.D=N(this.win,"templates");this.S=!1;this.getSsrTemplateHelper=ca(()=>new Ba("amp-autocomplete",O(this.element,"viewer"),this.D));this.I=!1;this.$=this.V=null;this.Y=!1;this.P=a.id?a.id:Math.floor(100*Math.random())+"_AMP_content_"}buildCallback(){var a=this.element.ownerDocument;let b=a&&Ga(a);y(!b||a.documentElement.hasAttribute("data-amp-autocomplete-opt-in"),"<amp-autocomplete> is not currently available in AMP4Email.");this.V=I(this.element,"action");this.$=O(this.element,"viewport");a=this.element.querySelectorAll("input,textarea");y(1==a.length,"%s should contain exactly one <input> or <textarea> descendant %s","amp-autocomplete",this.element);this.h=a=a[0];let c=this.h.getAttribute("type");y(!this.h.hasAttribute("type")||"text"===c||"search"===c,'%s requires the "type" attribute to be "text" or "search" if present on <input>. %s',"amp-autocomplete",this.element);this.w=this.element.hasAttribute("inline")?new fa(this):new ha(this);this.L=this.element.getAttribute("query");this.M=this.element.getAttribute("src");let d=this.element.querySelector('script[type="application/json"]');d?this.o=Ka(this,d):this.element.hasAttribute("src");this.h.setAttribute("dir","auto");this.h.setAttribute("aria-autocomplete","both");this.h.setAttribute("role","textbox");this.h.setAttribute("aria-controls",this.P);"INPUT"===this.h.tagName&&(this.element.setAttribute("role","combobox"),this.h.setAttribute("aria-multiline","false"));this.element.setAttribute("aria-haspopup","listbox");this.element.setAttribute("aria-expanded","false");this.element.setAttribute("aria-owns",this.P);(a=this.h.form||null)&&a.hasAttribute("autocomplete")&&(this.T=a.getAttribute("autocomplete"));this.I=this.getSsrTemplateHelper().isEnabled();this.S=this.D.hasTemplate(this.element,"template, script[template]");this.I&&(y(this.M,'%s requires data to be provided via "src" attribute for server-side rendering. %s',"amp-autocomplete",this.element),y(this.S,'amp-autocomplete should provide a <template> or <script type="plain/text"> element.'),y(!this.element.hasAttribute("filter"),"amp-autocomplete does not support client-side filter when server-side render is required."));this.B=this.element.getAttribute("filter")||"none";a:{for(e in Ja)if(Ja[e]===this.B){var e=!0;break a}e=!1}y(e,"Unexpected filter: %s. %s",this.B,this.element);this.Z=this.element.hasAttribute("min-characters")?parseInt(this.element.getAttribute("min-characters"),10):1;this.element.hasAttribute("max-entries");let f=this.element.getAttribute("max-items")||this.element.getAttribute("max-entries");this.J=f?parseInt(f,10):null;this.A=this.w.shouldSuggestFirst();this.X=this.element.hasAttribute("highlight-user-entry");e=this.element.ownerDocument.createElement("div");e.classList.add("i-amphtml-autocomplete-results");Na(this)&&e.classList.add("i-amphtml-autocomplete-results-up");e.setAttribute("role","listbox");e.setAttribute("id",this.P);D(e,!1);this.j=e;this.element.appendChild(this.j);return m()}layoutCallback(){this.h.setAttribute("autocomplete","off");this.h.addEventListener("touchstart",()=>{Oa(this)},{passive:!0});this.h.addEventListener("input",()=>{Qa(this)});this.h.addEventListener("keydown",a=>{Sa(this,a)});this.h.addEventListener("focus",()=>{Oa(this).then(()=>{let a=this.w.shouldShowOnFocus();Ua(this,a)})});this.h.addEventListener("blur",()=>{Ua(this,!1)});this.j.addEventListener("mousedown",a=>{Va(this,a)});return R(this,this.o,this.l)}mutatedAttributesCallback(a){let b=a.src;if(void 0===b||null===b)return m();if("string"===typeof b)return this.M=b,Q(this).then(a=>{this.o=a||[];R(this,this.o,this.l)},a=>{Pa(this,a)});if("object"===typeof b)return this.o=b.items||[],R(this,this.o,this.l);x().error("amp-autocomplete",'Unexpected "src" type: '+b)}isLayoutSupported(a){return"container"==a}}(a=>{a.registerElement("amp-autocomplete",db,"amp-autocomplete,amp-autocomplete>input,amp-autocomplete>textarea{font-family:sans-serif}amp-autocomplete>input,amp-autocomplete>textarea{border-radius:4px;box-sizing:border-box}.i-amphtml-autocomplete-results{position:absolute;top:100%;width:calc(100% + 1rem);min-width:calc(2em + 2rem);max-height:40vh;margin-top:.5rem;margin-left:-.5rem;border-radius:4px;overflow-y:auto;overflow-x:hidden;background-color:#fff;box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);z-index:10}.i-amphtml-autocomplete-results-up{top:auto;bottom:100%;margin-bottom:.5rem}.i-amphtml-autocomplete-item{position:relative;padding:.5rem 1rem;cursor:pointer}.i-amphtml-autocomplete-item:first-child{border-radius:4px 4px 0px 0px}.i-amphtml-autocomplete-item:nth-last-child(2){border-radius:0px 0px 4px 4px}.i-amphtml-autocomplete-item-active:not([data-disabled]),.i-amphtml-autocomplete-item:hover:not([data-disabled]){background-color:rgba(0,0,0,0.15)}.i-amphtml-autocomplete-item[data-disabled]{color:rgba(0,0,0,0.33)}\n/*# sourceURL=/extensions/amp-autocomplete/0.1/amp-autocomplete.css*/")})(self.AMP)}});