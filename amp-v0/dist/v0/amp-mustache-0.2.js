(self.AMP=self.AMP||[]).push({n:"amp-mustache",v:"2008290323002",f:(function(AMP,_){
'use strict';function ea(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ea(this);"function"===typeof Symbol&&Symbol("x");var fa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=ha;function m(a){return a||{}};function pa(a){var b=a.documentElement;return["\u26a14email","amp4email"].some(function(a){return b.hasAttribute(a)})};function qa(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ra=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var w=self.AMP_CONFIG||{},sa=("string"==typeof w.cdnProxyRegex?new RegExp(w.cdnProxyRegex):w.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function ta(a){if(!self.document||!self.document.head||self.location&&sa.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}
var ua={thirdParty:w.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:w.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof w.thirdPartyFrameRegex?new RegExp(w.thirdPartyFrameRegex):w.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:w.cdnUrl||ta("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:sa,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:w.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:w.betaErrorReportingUrl||
"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:w.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:w.geoApiUrl||ta("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var va=self.__AMP_LOG;function A(){if(!va.user)throw Error("failed to call initLogConstructor");return va.user}function G(a,b,c){A().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function wa(){this.G=100;this.o=this.w=0;this.l=Object.create(null)}wa.prototype.has=function(a){return!!this.l[a]};wa.prototype.get=function(a){var b=this.l[a];if(b)return b.access=++this.o,b.payload};
wa.prototype.put=function(a,b){this.has(a)||this.w++;this.l[a]={payload:b,access:this.o};if(!(this.w<=this.G)){if(va.dev)a=va.dev;else throw Error("failed to call initLogConstructor");a.warn("lru-cache","Trimming LRU cache");a=this.l;var c=this.o+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.w--)}};function H(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};var xa=m({c:!0,v:!0,a:!0,ad:!0}),ya,za,Aa=/[?&]amp_js[^&]*/,Ba=/[?&]amp_gsa[^&]*/,Na=/[?&]amp_r[^&]*/,Oa=/[?&]amp_kit[^&]*/,Pa=/[?&]usqp[^&]*/;
function K(a){ya||(ya=self.document.createElement("a"),za=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new wa));var b=za,c=ya;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a}function Qa(a){"string"==typeof a&&(a=K(a));return ua.cdnProxyRegex.test(a.origin)}
function Ra(a){"string"==typeof a&&(a=K(a));if(!Qa(a))return a.href;var b=a.pathname.split("/");G(xa[b[1]],"Unknown path prefix in url %s",a.href);var c=b[2],d="s"==c?"https://"+decodeURIComponent(b[3]):"http://"+decodeURIComponent(c);G(0<d.indexOf("."),"Expected a . in origin %s",d);b.splice(1,"s"==c?3:2);b=d+b.join("/");d=(d=a.search)&&"?"!=d?(d=d.replace(Aa,"").replace(Ba,"").replace(Na,"").replace(Oa,"").replace(Pa,"").replace(/^[?&]/,""))?"?"+d:"":"";return b+d+(a.hash||"")}
function Sa(a,b){"string"==typeof b&&(b=K(b));if("function"==typeof URL)var c=(new URL(a,b.href)).toString();else{c=a;var d=b;"string"==typeof d&&(d=K(d));c=c.replace(/\\/g,"/");var e=K(c);c=H(c.toLowerCase(),e.protocol)?e.href:H(c,"//")?d.protocol+c:H(c,"/")?d.origin+c:d.origin+d.pathname.replace(/\/[^/]*$/,"/")+c}return c}
function Ta(a){var b=K(a).search,c=Object.create(null);if(b)for(var d;d=ra.exec(b);){var e=qa(d[1],d[1]);d=d[2]?qa(d[2].replace(/\+/g," "),d[2]):"";c[e]=d}G(!("__amp_source_origin"in c),"Source origin is not allowed in %s",a)};var Ua=/(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;function Va(a){for(var b=[],c;c=Ua.exec(a);){var d=c[1],e=void 0,f=void 0;if(c[2]){var q=c[3].toLowerCase();if("w"==q)e=parseInt(c[2],10);else if("x"==q)f=parseFloat(c[2]);else continue}else f=1;b.push({url:d,width:e,dpr:f})}return new Wa(b)}
function Wa(a){G(0<a.length,"Srcset must have at least one source");this.j=a;for(var b=!1,c=!1,d=0;d<a.length;d++){var e=a[d];b=b||!!e.width;c=c||!!e.dpr}G(!!(b^c),"Srcset must have width or dpr sources, but not both");a.sort(b?Xa:Ya);this.F=b}
Wa.prototype.select=function(a,b){if(this.F){b*=a;a=this.j;for(var c=0,d=Infinity,e=Infinity,f=0;f<a.length;f++){var q=a[f].width,n=Math.abs(q-b);if(n<=1.1*d||1.2<b/e)c=f,d=n,e=q;else break}b=c}else{a=this.j;c=0;d=Infinity;for(e=0;e<a.length;e++)if(f=Math.abs(a[e].dpr-b),f<=d)c=e,d=f;else break;b=c}return this.j[b].url};Wa.prototype.getUrls=function(){return this.j.map(function(a){return a.url})};
Wa.prototype.stringify=function(a){for(var b=[],c=this.j,d=0;d<c.length;d++){var e=c[d],f=e.url;a&&(f=a(f));f=this.F?f+(" "+e.width+"w"):f+(" "+e.dpr+"x");b.push(f)}return b.join(", ")};function Xa(a,b){G(a.width!=b.width,"Duplicate width: %s",a.width);return a.width-b.width}function Ya(a,b){G(a.dpr!=b.dpr,"Duplicate dpr: %s",a.dpr);return a.dpr-b.dpr};function Za(a,b,c){return $a(b)?ab(a,b,c):c}function $a(a){return"src"==a||"href"==a||"xlink:href"==a||"srcset"==a}function ab(a,b,c){var d=self.location;Ta(c);var e=Qa(d),f=K(Ra(d));if("href"==b&&!H(c,"#"))return Sa(c,f);if("src"==b)return"amp-img"==a?bb(c,f,e):Sa(c,f);if("srcset"==b){try{var q=Va(c)}catch(n){return A().error("URL-REWRITE","Failed to parse srcset: ",n),c}return q.stringify(function(a){return bb(a,f,e)})}return c}
function bb(a,b,c){a=K(Sa(a,b));return"data:"==a.protocol||Qa(a)||!c?a.href:ua.cdn+"/i/"+("https:"==a.protocol?"s/":"")+encodeURIComponent(a.host)+a.pathname+(a.search||"")+(a.hash||"")};var cb={"AMP-IMG":["src","srcset","layout","width","height"]};function db(a,b){var c=H(a.tagName,"AMP-"),d=a.hasAttribute("i-amphtml-binding");if(!d&&cb[a.tagName])a.setAttribute("i-amphtml-ignore","");else if(d||c)a.hasAttribute("i-amphtml-key")||a.setAttribute("i-amphtml-key",b())}
var eb={applet:!0,audio:!0,base:!0,embed:!0,frame:!0,frameset:!0,iframe:!0,img:!0,link:!0,meta:!0,object:!0,style:!0,video:!0},fb={"amp-accordion":!0,"amp-anim":!0,"amp-bind-macro":!0,"amp-carousel":!0,"amp-fit-text":!0,"amp-img":!0,"amp-layout":!0,"amp-selector":!0,"amp-sidebar":!0,"amp-timeago":!0},gb="a b br caption code col colgroup dd del div dl dt em hr i ins li mark ol p q s small span strong sub sup table tbody td tfoot th thead time tr u ul".split(" "),hb="amp-fx fallback heights layout min-font-size max-font-size on option placeholder submitting submit-success submit-error validation-for verify-error visible-when-invalid href style text subscriptions-action subscriptions-actions subscriptions-decorate subscriptions-dialog subscriptions-display subscriptions-section subscriptions-service subscriptions-google-rtc amp-nested-submenu amp-nested-submenu-open amp-nested-submenu-close itemprop".split(" "),
ib={a:["rel","target"],div:["template"],form:["action-xhr","verify-xhr","custom-validation-reporting","target"],input:["mask-output"],template:["type"],textarea:["autoexpand"]},jb=["_top","_blank"],kb=/^(?:\w+script|data|blob):/i,lb=/^(?:blob):/i,mb=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,wb=Object.freeze(m({input:{type:/(?:image|button)/i}})),xb=Object.freeze(m({input:{type:/(?:button|file|image|password)/i}})),yb=Object.freeze("form formaction formmethod formtarget formnovalidate formenctype".split(" ")),
zb=Object.freeze(m({input:yb,textarea:yb,select:yb})),Ab=Object.freeze(m({"amp-anim":["controls"],form:["name"]})),Bb=/!important|position\s*:\s*fixed|position\s*:\s*sticky/i;
function Cb(a,b,c,d){var e=!0;e=void 0===e?!1:e;var f=c?c.replace(mb,""):"";if(!e){if(H(b,"on")&&"on"!=b)return!1;var q=f.toLowerCase();if(0<=q.indexOf("<script")||0<=q.indexOf("\x3c/script")||kb.test(f))return!1}if(lb.test(f))return!1;if("style"==b)return!Bb.test(c);if("class"==b&&c&&/(^|\W)i-amphtml-/i.test(c)||$a(b)&&/__amp_source_origin/.test(c))return!1;var n=pa(d),v=Object.assign(Object.create(null),zb,n?Ab:{})[a];if(v&&-1!=v.indexOf(b))return!1;var D=Object.assign(Object.create(null),wb,n?
xb:{})[a];if(D){var B=D[b];if(B&&-1!=c.search(B))return!1}return!0};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function Db(a,b){for(var c=a.length,d=0;d<c;d++)b(a[d],d)};var M=Object.freeze||function(a){return a},Eb=M("a abbr acronym address area article aside audio b bdi bdo big blink blockquote body br button canvas caption center cite code col colgroup content data datalist dd decorator del details dfn dir div dl dt element em fieldset figcaption figure font footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i img input ins kbd label legend li main map mark marquee menu menuitem meter nav nobr ol optgroup option output p pre progress q rp rt ruby s samp section select shadow small source spacer span strike strong style sub summary sup table tbody td template textarea tfoot th thead time tr track tt u ul var video wbr".split(" ")),
Fb=M("svg a altglyph altglyphdef altglyphitem animatecolor animatemotion animatetransform audio canvas circle clippath defs desc ellipse filter font g glyph glyphref hkern image line lineargradient marker mask metadata mpath path pattern polygon polyline radialgradient rect stop style switch symbol text textpath title tref tspan video view vkern".split(" ")),Gb=M("feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence".split(" ")),
Hb=M("math menclose merror mfenced mfrac mglyph mi mlabeledtr mmultiscripts mn mo mover mpadded mphantom mroot mrow ms mspace msqrt mstyle msub msup msubsup mtable mtd mtext mtr munder munderover".split(" ")),Ib=M(["#text"]),Jb=Object.freeze||function(a){return a},Kb=Jb("accept action align alt autocomplete background bgcolor border cellpadding cellspacing checked cite class clear color cols colspan controls coords crossorigin datetime default dir disabled download enctype face for headers height hidden high href hreflang id integrity ismap label lang list loop low max maxlength media method min minlength multiple name noshade novalidate nowrap open optimum pattern placeholder poster preload pubdate radiogroup readonly rel required rev reversed role rows rowspan spellcheck scope selected shape size sizes span srclang start src srcset step style summary tabindex title type usemap valign value width xmlns".split(" ")),
Lb=Jb("accent-height accumulate additive alignment-baseline ascent attributename attributetype azimuth basefrequency baseline-shift begin bias by class clip clip-path clip-rule color color-interpolation color-interpolation-filters color-profile color-rendering cx cy d dx dy diffuseconstant direction display divisor dur edgemode elevation end fill fill-opacity fill-rule filter filterunits flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight fx fy g1 g2 glyph-name glyphref gradientunits gradienttransform height href id image-rendering in in2 k k1 k2 k3 k4 kerning keypoints keysplines keytimes lang lengthadjust letter-spacing kernelmatrix kernelunitlength lighting-color local marker-end marker-mid marker-start markerheight markerunits markerwidth maskcontentunits maskunits max mask media method mode min name numoctaves offset operator opacity order orient orientation origin overflow paint-order path pathlength patterncontentunits patterntransform patternunits points preservealpha preserveaspectratio primitiveunits r rx ry radius refx refy repeatcount repeatdur restart result rotate scale seed shape-rendering specularconstant specularexponent spreadmethod stddeviation stitchtiles stop-color stop-opacity stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke stroke-width style surfacescale tabindex targetx targety transform text-anchor text-decoration text-rendering textlength type u1 u2 unicode values viewbox visibility version vert-adv-y vert-origin-x vert-origin-y width word-spacing wrap writing-mode xchannelselector ychannelselector x x1 x2 xmlns y y1 y2 z zoomandpan".split(" ")),
Mb=Jb("accent accentunder align bevelled close columnsalign columnlines columnspan denomalign depth dir display displaystyle encoding fence frame height href id largeop length linethickness lspace lquote mathbackground mathcolor mathsize mathvariant maxsize minsize movablelimits notation numalign open rowalign rowlines rowspacing rowspan rspace rquote scriptlevel scriptminsize scriptsizemultiplier selection separator separators stretchy subscriptshift supscriptshift symmetric voffset width xmlns".split(" ")),
Nb=Jb(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ob=Object.hasOwnProperty,Pb=Object.setPrototypeOf,Qb=("undefined"!==typeof Reflect&&Reflect).apply;Qb||(Qb=function(a,b,c){return a.apply(b,c)});function N(a,b){Pb&&Pb(a,null);for(var c=b.length;c--;){var d=b[c];if("string"===typeof d){var e=d.toLowerCase();e!==d&&(Object.isFrozen(b)||(b[c]=e),d=e)}a[d]=!0}return a}function Rb(a){var b={},c=void 0;for(c in a)Qb(Ob,a,[c])&&(b[c]=a[c]);return b}
var Q=Object.seal||function(a){return a},Sb=Q(/\{\{[\s\S]*|[\s\S]*\}\}/gm),Tb=Q(/<%[\s\S]*|[\s\S]*%>/gm),Ub=Q(/^data-[\-\w.\u00B7-\uFFFF]/),Vb=Q(/^aria-[\-\w]+$/),Wb=Q(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Xb=Q(/^(?:\w+script|data):/i),Yb=Q(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),W="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===
Symbol&&a!==Symbol.prototype?"symbol":typeof a};function X(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var Zb=("undefined"!==typeof Reflect&&Reflect).apply,$b=Array.prototype.slice,ac=Object.freeze;Zb||(Zb=function(a,b,c){return a.apply(b,c)});
function bc(a,b){if("object"!==("undefined"===typeof a?"undefined":W(a))||"function"!==typeof a.createPolicy)return null;var c=null;b.currentScript&&b.currentScript.hasAttribute("data-tt-policy-suffix")&&(c=b.currentScript.getAttribute("data-tt-policy-suffix"));var d="dompurify"+(c?"#"+c:"");try{return a.createPolicy(d,{createHTML:function(a){return a}})}catch(e){return console.warn("TrustedTypes policy "+d+" could not be created."),null}}
function cc(){function a(a){var c,ma=void 0,k;d("beforeSanitizeAttributes",a,null);var e=a.attributes;if(e){var u={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:r};for(k=e.length;k--;){var p=c=e[k],F=p.name,f=p.namespaceURI;c=c.value.trim();var g=F.toLowerCase();u.attrName=g;u.attrValue=c;u.keepAttr=!0;d("uponSanitizeAttribute",a,u);c=u.attrValue;if("name"===g&&"IMG"===a.nodeName&&e.id)ma=e.id,e=Zb($b,e,[]),v("id",a),v(F,a),e.indexOf(ma)>k&&a.setAttribute("id",ma.value);else if("INPUT"!==
a.nodeName||"type"!==g||"file"!==c||!u.keepAttr||!r[g]&&Ca[g])"id"===F&&a.setAttribute(F,""),v(F,a);else continue;if(u.keepAttr)if(/svg|math/i.test(a.namespaceURI)&&(new RegExp("</("+Object.keys(ob).join("|")+")","i")).test(c))v(F,a);else{R&&(c=c.replace(Sb," "),c=c.replace(Tb," "));var z=a.nodeName.toLowerCase();if(b(z,g,c))try{f?a.setAttributeNS(f,F,c):a.setAttribute(F,c),h.removed.pop()}catch(Ec){}}}d("afterSanitizeAttributes",a,null)}}function b(a,b,c){if(pb&&("id"===b||"name"===b)&&(c in x||
c in qc))return!1;if(!Da||!Ub.test(b))if(!qb||!Vb.test(b))if(!r[b]||Ca[b]||!(Ea[b]||t.test(c.replace(Yb,""))||("src"===b||"xlink:href"===b||"href"===b)&&"script"!==a&&0===c.indexOf("data:")&&rc[a]||rb&&!Xb.test(c.replace(Yb,"")))&&c)return!1;return!0}function c(a){d("beforeSanitizeElements",a,null);if(f(a))return D(a),!0;var b=a.nodeName.toLowerCase();d("uponSanitizeElement",a,{tagName:b,allowedTags:l});if(("svg"===b||"math"===b)&&0!==a.querySelectorAll("p, br").length)return D(a),!0;if(!l[b]||E[b]){if(Fa&&
!ob[b]&&"function"===typeof a.insertAdjacentHTML)try{var c=a.innerHTML;a.insertAdjacentHTML("AfterEnd",u?u.createHTML(c):c)}catch(Cc){}D(a);return!0}if("noscript"===b&&/<\/noscript/i.test(a.innerHTML)||"noembed"===b&&/<\/noembed/i.test(a.innerHTML))return D(a),!0;!sb||a.firstElementChild||a.content&&a.content.firstElementChild||!/</g.test(a.textContent)||(h.removed.push({element:a.cloneNode()}),a.innerHTML=a.innerHTML?a.innerHTML.replace(/</g,"&lt;"):a.textContent.replace(/</g,"&lt;"));R&&3===a.nodeType&&
(b=a.textContent,b=b.replace(Sb," "),b=b.replace(Tb," "),a.textContent!==b&&(h.removed.push({element:a.cloneNode()}),a.textContent=b));d("afterSanitizeElements",a,null);return!1}function d(a,b,c){y[a]&&y[a].forEach(function(a){a.call(h,b,c,S)})}function e(a){return"object"===("undefined"===typeof T?"undefined":W(T))?a instanceof T:a&&"object"===("undefined"===typeof a?"undefined":W(a))&&"number"===typeof a.nodeType&&"string"===typeof a.nodeName}function f(a){return a instanceof Ga||a instanceof aa?
!1:"string"===typeof a.nodeName&&"string"===typeof a.textContent&&"function"===typeof a.removeChild&&a.attributes instanceof Ha&&"function"===typeof a.removeAttribute&&"function"===typeof a.setAttribute&&"string"===typeof a.namespaceURI?!1:!0}function q(a){return sc.call(a.ownerDocument||a,a,U.SHOW_ELEMENT|U.SHOW_COMMENT|U.SHOW_TEXT,function(){return U.FILTER_ACCEPT},!1)}function n(a){var b=void 0,c=void 0;if(Ia)a="<remove></remove>"+a;else{var d=a.match(/^[\s]+/);(c=d&&d[0])&&(a=a.slice(c.length))}if(O)try{b=
(new k).parseFromString(a,"text/html")}catch(Dc){}I&&N(E,["title"]);b&&b.documentElement||(b=Ja.createHTMLDocument(""),d=b.body,d.parentNode.removeChild(d.parentNode.firstElementChild),d.outerHTML=u?u.createHTML(a):a);a&&c&&b.body.insertBefore(x.createTextNode(c),b.body.childNodes[0]||null);return L.call(b,ba?"html":"body")[0]}function v(a,b){try{h.removed.push({attribute:b.getAttributeNode(a),from:b})}catch(nb){h.removed.push({attribute:null,from:b})}b.removeAttribute(a)}function D(a){h.removed.push({element:a});
try{a.parentNode.removeChild(a)}catch(pc){a.outerHTML=F}}function B(a){S&&S===a||(a&&"object"===("undefined"===typeof a?"undefined":W(a))||(a={}),l="ALLOWED_TAGS"in a?N({},a.ALLOWED_TAGS):C,r="ALLOWED_ATTR"in a?N({},a.ALLOWED_ATTR):tb,Ea="ADD_URI_SAFE_ATTR"in a?N(Rb(ub),a.ADD_URI_SAFE_ATTR):ub,E="FORBID_TAGS"in a?N({},a.FORBID_TAGS):{},Ca="FORBID_ATTR"in a?N({},a.FORBID_ATTR):{},V="USE_PROFILES"in a?a.USE_PROFILES:!1,qb=!1!==a.ALLOW_ARIA_ATTR,Da=!1!==a.ALLOW_DATA_ATTR,rb=a.ALLOW_UNKNOWN_PROTOCOLS||
!1,sb=a.SAFE_FOR_JQUERY||!1,R=a.SAFE_FOR_TEMPLATES||!1,ba=a.WHOLE_DOCUMENT||!1,ca=a.RETURN_DOM||!1,Ka=a.RETURN_DOM_FRAGMENT||!1,vb=a.RETURN_DOM_IMPORT||!1,La=a.RETURN_TRUSTED_TYPE||!1,Ia=a.FORCE_BODY||!1,pb=!1!==a.SANITIZE_DOM,Fa=!1!==a.KEEP_CONTENT,na=a.IN_PLACE||!1,t=a.ALLOWED_URI_REGEXP||t,R&&(Da=!1),Ka&&(ca=!0),V&&(l=N({},[].concat(X(Ib))),r=[],!0===V.html&&(N(l,Eb),N(r,Kb)),!0===V.svg&&(N(l,Fb),N(r,Lb),N(r,Nb)),!0===V.svgFilters&&(N(l,Gb),N(r,Lb),N(r,Nb)),!0===V.mathMl&&(N(l,Hb),N(r,Mb),N(r,
Nb))),a.ADD_TAGS&&(l===C&&(l=Rb(l)),N(l,a.ADD_TAGS)),a.ADD_ATTR&&(r===tb&&(r=Rb(r)),N(r,a.ADD_ATTR)),a.ADD_URI_SAFE_ATTR&&N(Ea,a.ADD_URI_SAFE_ATTR),Fa&&(l["#text"]=!0),ba&&N(l,["html","head","body"]),l.table&&(N(l,["tbody"]),delete E.tbody),ac&&ac(a),S=a)}function h(a){return cc(a)}var g=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"undefined"===typeof window?null:window;h.version="2.0.7";h.removed=[];if(!g||!g.document||9!==g.document.nodeType)return h.isSupported=!1,h;var da=g.document,
O=!1,I=!1,x=g.document,oa=g.DocumentFragment,T=g.Node,U=g.NodeFilter,J=g.NamedNodeMap,Ha=void 0===J?g.NamedNodeMap||g.MozNamedAttrMap:J,Ga=g.Text,aa=g.Comment,k=g.DOMParser,p=g.TrustedTypes;"function"===typeof g.HTMLTemplateElement&&(J=x.createElement("template"),J.content&&J.content.ownerDocument&&(x=J.content.ownerDocument));var u=bc(p,da),F=u?u.createHTML(""):"",z=x,Ja=z.implementation,sc=z.createNodeIterator,L=z.getElementsByTagName,tc=z.createDocumentFragment,P=da.importNode,y={};h.isSupported=
Ja&&"undefined"!==typeof Ja.createHTMLDocument&&9!==x.documentMode;var t=Wb,l=null,C=N({},[].concat(X(Eb),X(Fb),X(Gb),X(Hb),X(Ib))),r=null,tb=N({},[].concat(X(Kb),X(Lb),X(Mb),X(Nb))),E=null,Ca=null,qb=!0,Da=!0,rb=!1,sb=!1,R=!1,ba=!1,Ma=!1,Ia=!1,ca=!1,Ka=!1,vb=!1,La=!1,pb=!0,Fa=!0,na=!1,V={},ob=N({},"annotation-xml audio colgroup desc foreignobject head iframe math mi mn mo ms mtext noembed noframes plaintext script style svg template thead title video xmp".split(" ")),rc=N({},["audio","video","img",
"source","image"]),Ea=null,ub=N({},"alt class for id label name pattern placeholder summary title value style xmlns".split(" ")),S=null,qc=x.createElement("form");h.isSupported&&(function(){try{n('<svg><p><textarea><img src="</textarea><img src=x abc=1//">').querySelector("svg img")&&(O=!0)}catch(ma){}}(),function(){try{var a=n("<x/><title>&lt;/title&gt;&lt;img&gt;");/<\/title/.test(a.querySelector("title").innerHTML)&&(I=!0)}catch(pc){}}());var uc=function nb(b){var k=void 0,e=q(b);for(d("beforeSanitizeShadowDOM",
b,null);k=e.nextNode();)d("uponSanitizeShadowNode",k,null),c(k)||(k.content instanceof oa&&nb(k.content),a(k));d("afterSanitizeShadowDOM",b,null)};h.sanitize=function(b,d){var k=void 0,p=void 0,f=void 0,z=void 0;b||(b="\x3c!--\x3e");if("string"!==typeof b&&!e(b)){if("function"!==typeof b.toString)throw new TypeError("toString is not a function");b=b.toString();if("string"!==typeof b)throw new TypeError("dirty is not a string, aborting");}if(!h.isSupported){if("object"===W(g.toStaticHTML)||"function"===
typeof g.toStaticHTML){if("string"===typeof b)return g.toStaticHTML(b);if(e(b))return g.toStaticHTML(b.outerHTML)}return b}Ma||B(d);h.removed=[];if(!na)if(b instanceof T)k=n("\x3c!--\x3e"),p=k.ownerDocument.importNode(b,!0),1===p.nodeType&&"BODY"===p.nodeName?k=p:"HTML"===p.nodeName?k=p:k.appendChild(p);else{if(!ca&&!R&&!ba&&La&&-1===b.indexOf("<"))return u?u.createHTML(b):b;k=n(b);if(!k)return ca?null:F}k&&Ia&&D(k.firstChild);for(var l=q(na?b:k);d=l.nextNode();)3===d.nodeType&&d===f||c(d)||(d.content instanceof
oa&&uc(d.content),a(d),f=d);f=null;if(na)return b;if(ca){if(Ka)for(z=tc.call(k.ownerDocument);k.firstChild;)z.appendChild(k.firstChild);else z=k;vb&&(z=P.call(da,z,!0));return z}var L=ba?k.outerHTML:k.innerHTML;R&&(L=L.replace(Sb," "),L=L.replace(Tb," "));return u&&La?u.createHTML(L):L};h.setConfig=function(a){B(a);Ma=!0};h.clearConfig=function(){S=null;Ma=!1};h.isValidAttribute=function(a,c,d){S||B({});a=a.toLowerCase();c=c.toLowerCase();return b(a,c,d)};h.addHook=function(a,b){"function"===typeof b&&
(y[a]=y[a]||[],y[a].push(b))};h.removeHook=function(a){y[a]&&y[a].pop()};h.removeHooks=function(a){y[a]&&(y[a]=[])};h.removeAllHooks=function(){y={}};return h}var dc=cc();var ec={script:{attribute:"type",values:["application/json","application/ld+json"]}},fc={USE_PROFILES:{html:!0,svg:!0,svgFilters:!0}};function gc(a){this.m=a;this.H=1;this.h=dc(self);this.A=dc(self);a=Object.assign({},Object.assign({},fc,{ADD_ATTR:hb,ADD_TAGS:["use"],FORBID_TAGS:Object.keys(eb),FORCE_BODY:!0,RETURN_DOM:!0,ALLOW_UNKNOWN_PROTOCOLS:!0}));this.h.setConfig(a);hc(this,this.h);ic(this.A)}gc.prototype.purifyHtml=function(a){return this.h.sanitize(a)};
gc.prototype.purifyTagsForTripleMustache=function(a){a=this.A.sanitize(a,{ALLOWED_TAGS:gb,FORCE_BODY:!0,RETURN_DOM_FRAGMENT:!0});var b=this.m.createElement("div");b.appendChild(a);return b.innerHTML};gc.prototype.getAllowedTags=function(){var a={};this.h.addHook("uponSanitizeElement",function(b,d){Object.assign(a,d.allowedTags)});var b=this.m.createElement("p");this.h.sanitize(b);Object.keys(eb).forEach(function(b){a[b]=!1});this.h.removeHook("uponSanitizeElement");return a};
gc.prototype.validateAttributeChange=function(a,b,c){var d=a.nodeName.toLowerCase(),e=ec[d];if(e){var f=e.values;if(e.attribute===b&&(null==c||!f.includes(c)))return!1}if("a"===d&&"target"===b&&(null==c||!jb.includes(c)))return!1;if(null==c)return!0;if(jc(b)!==kc)return!1;if(!this.h.isValidAttribute(d,b,c)){var q=ib[d];if(!(q&&q.includes(b)||H(d,"amp-")))return!1}a=a.ownerDocument?a.ownerDocument:a;return c&&!Cb(d,b,c,a)?!1:!0};
function hc(a,b){var c=pa(a.m),d,e=[],f,q=[];b.addHook("uponSanitizeElement",function(a,b){var f=b.tagName;d=b.allowedTags;H(f,"amp-")&&(d[f]=!c||fb[f]);"a"===f&&a.hasAttribute("href")&&!a.hasAttribute("target")&&a.setAttribute("target","_top");var n=ec[f];n&&(b=n.attribute,n=n.values,a.hasAttribute(b)&&n.includes(a.getAttribute(b))&&(d[f]=!0,e.push(f)))});b.addHook("afterSanitizeElements",function(){e.forEach(function(a){delete d[a]});e.length=0});b.addHook("uponSanitizeAttribute",function(b,c){function d(){f[h]||
(f[h]=!0,q.push(h))}var e=b.nodeName.toLowerCase(),h=c.attrName,g=c.attrValue;f=c.allowedAttributes;if(H(e,"amp-"))d();else{if("a"==e&&"target"==h){var n=g.toLowerCase();g=jb.includes(n)?n:"_top"}var v=ib[e];v&&v.includes(h)&&d()}var I=jc(h);I===lc&&(v=h.substring(1,h.length-1),b.setAttribute("data-amp-bind-"+v,g));I!==kc&&b.setAttribute("i-amphtml-binding","");Cb(e,h,g,a.m)?Za&&g&&!H(h,"data-amp-bind-")&&(g=Za(e,h,g)):(c.keepAttr=!1,A().error("purifier",'Removed invalid attribute %s[%s="%s"].',e,
h,g));c.attrValue=g});b.addHook("afterSanitizeAttributes",function(b){db(b,function(){return String(a.H++)});q.forEach(function(a){delete f[a]});q.length=0;"use"===b.nodeName.toLowerCase()&&["href","xlink:href"].forEach(function(a){b.hasAttribute(a)&&!H(b.getAttribute(a),"#")&&(b.parentElement&&b.parentElement.removeChild(b),A().error("purifier",'Removed invalid <use>. use[href] must start with "#".'))})})}
function ic(a){var b;a.addHook("uponSanitizeElement",function(a,d){var c=d.tagName;b=d.allowedTags;"template"===c&&(a=a.getAttribute("type"))&&"amp-mustache"===a.toLowerCase()&&(b.template=!0)});a.addHook("afterSanitizeElements",function(){b.template=!1})}var kc=0,lc=1,mc=2;function jc(a){return"["==a[0]&&"]"==a[a.length-1]?lc:H(a,"data-amp-bind-")?mc:kc};function nc(a,b){var c=a=a.__AMP_TOP||(a.__AMP_TOP=a),d=oc(c),e=d.purifier;e||(e=d.purifier={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});e.ctor||e.obj||(e.ctor=b,e.context=a,e.resolve&&vc(c))}function wc(a){a=a.__AMP_TOP||(a.__AMP_TOP=a);return vc(a)}function vc(a){a=oc(a).purifier;a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function oc(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b};/*
 mustache.js - Logic-less {{mustache}} templates with JavaScript
 http://github.com/janl/mustache.js
*/
var xc={};
(function(a){function b(a){return"function"===typeof a}function c(a){return O(a)?"array":typeof a}function d(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function e(a,b){return null!=a&&"object"===typeof a&&Object.prototype.hasOwnProperty.call(a,b)}function f(a,b){return I.call(a,b)}function q(a){return!f(x,a)}function n(b,c){function k(){if(g&&!h)for(;f.length;)delete p[f.pop()];else f=[];h=g=!1}if(!b)return[];var e=[],p=[],f=[],g=!1,h=!1,n,P,y;(function(a){"string"===typeof a&&(a=a.split(U,
2));if(!O(a)||2!==a.length)throw Error("Invalid tags: "+a);n=new RegExp(d(a[0])+"\\s*");P=new RegExp("\\s*"+d(a[1]));y=new RegExp("\\s*"+d("}"+a[1]))})(c||a.tags);for(var t=new B(b),l,C,r,x,E;!t.eos();){b=t.pos;if(C=t.scanUntil(n)){l=0;for(var I=C.length;l<I;++l)r=C.charAt(l),q(r)?f.push(p.length):h=!0,p.push(["text",r,b,b+1]),b+=1,"\n"===r&&k()}if(!t.scan(n))break;g=!0;l=t.scan(Ga)||"name";t.scan(T);"="===l?(C=t.scanUntil(J),t.scan(J),t.scanUntil(P)):"{"===l?(C=t.scanUntil(y),t.scan(Ha),t.scanUntil(P),
l="&"):C=t.scanUntil(P);if(!t.scan(P))throw Error("Unclosed tag at "+t.pos);x=[l,C,b,t.pos];p.push(x);if("#"===l||"^"===l)e.push(x);else if("/"===l){E=e.pop();if(!E)throw Error('Unopened section "'+C+'" at '+b);if(E[1]!==C)throw Error('Unclosed section "'+E[1]+'" at '+b);}else if("name"===l||"{"===l||"&"===l)h=!0}if(E=e.pop())throw Error('Unclosed section "'+E[1]+'" at '+t.pos);return D(v(p))}function v(a){for(var b=[],c,d,k=0,e=a.length;k<e;++k)if(c=a[k])"text"===c[0]&&d&&"text"===d[0]?(d[1]+=c[1],
d[3]=c[3]):(b.push(c),d=c);return b}function D(a){for(var b=[],c=b,d=[],k,e,f=0,g=a.length;f<g;++f)switch(k=a[f],k[0]){case "#":case "^":c.push(k);d.push(k);c=k[4]=[];break;case "/":e=d.pop();e[5]=k[2];c=0<d.length?d[d.length-1][4]:b;break;default:c.push(k)}return b}function B(a){this.tail=this.string=a;this.pos=0}function h(a,b){this.view=a;this.cache={".":this.view};this.parent=b}function g(){this.cache={}}var da=Object.prototype.toString,O=Array.isArray||function(a){return"[object Array]"===da.call(a)},
I=RegExp.prototype.test,x=/\S/,oa={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},T=/\s*/,U=/\s+/,J=/\s*=/,Ha=/\s*\}/,Ga=/#|\^|\/|>|\{|&|=|!/;B.prototype.eos=function(){return""===this.tail};B.prototype.scan=function(a){a=this.tail.match(a);if(!a||0!==a.index)return"";a=a[0];this.tail=this.tail.substring(a.length);this.pos+=a.length;return a};B.prototype.scanUntil=function(a){a=this.tail.search(a);switch(a){case -1:var b=this.tail;this.tail="";break;
case 0:b="";break;default:b=this.tail.substring(0,a),this.tail=this.tail.substring(a)}this.pos+=b.length;return b};h.prototype.push=function(a){return new h(a,this)};h.prototype.lookup=function(a){var c=this.cache;if(c.hasOwnProperty(a))var d=c[a];else{for(var k=this,f,g,h=!1;k;){if(0<a.indexOf("."))for(d=k.view,f=a.split("."),g=0;null!=d&&g<f.length;){if(!e(d,f[g])){d=null;break}g===f.length-1&&(h=!0);d=d[f[g++]]}else e(k.view,a)?(d=k.view[a],h=!0):d=null;if(h)break;k=k.parent}c[a]=d}b(d)&&(d=d.call(this.view));
return d};g.prototype.clearCache=function(){this.cache={}};g.prototype.parse=function(a,b){var c=this.cache,d=c[a];null==d&&(d=c[a]=n(a,b));return d};g.prototype.render=function(a,b,c){var d=this.parse(a);b=b instanceof h?b:new h(b);return this.renderTokens(d,b,c,a)};g.prototype.renderTokens=function(a,b,c,d){for(var k="",e,f,g,h=0,p=a.length;h<p;++h)g=void 0,e=a[h],f=e[0],"#"===f?g=this.renderSection(e,b,c,d):"^"===f?g=this.renderInverted(e,b,c,d):">"===f?g=this.renderPartial(e,b,c,d):"&"===f?g=
this.unescapedValue(e,b):"name"===f?g=this.escapedValue(e,b):"text"===f&&(g=this.rawValue(e)),void 0!==g&&(k+=g);return k};g.prototype.renderSection=function(a,c,d,e){function k(a){return f.render(a,c,d)}var f=this,g="",h=c.lookup(a[1]);if(h){if(O(h))for(var p=0,u=h.length;p<u;++p)g+=this.renderTokens(a[4],c.push(h[p]),d,e);else if("object"===typeof h||"string"===typeof h||"number"===typeof h)g+=this.renderTokens(a[4],c.push(h),d,e);else if(b(h)){if("string"!==typeof e)throw Error("Cannot use higher-order sections without the original template");
h=h.call(c.view,e.slice(a[3],a[5]),k);null!=h&&(g+=h)}else g+=this.renderTokens(a[4],c,d,e);return g}};g.prototype.renderInverted=function(a,b,c,d){var e=b.lookup(a[1]);if(!e||O(e)&&0===e.length)return this.renderTokens(a[4],b,c,d)};g.prototype.renderPartial=function(a,c,d){if(d&&(a=b(d)?d(a[1]):d[a[1]],null!=a))return this.renderTokens(this.parse(a),c,d,a)};g.prototype.unescapedValue=function(b,c){b=c.lookup(b[1]);if(null!=b)return a.sanitizeUnescaped?a.sanitizeUnescaped(b):b};g.prototype.escapedValue=
function(b,c){b=c.lookup(b[1]);if(null!=b)return a.escape(b)};g.prototype.rawValue=function(a){return a[1]};a.name="mustache.js";a.version="2.2.0";a.tags=["{{","}}"];var aa=new g;a.clearCache=function(){return aa.clearCache()};a.parse=function(a,b){return aa.parse(a,b)};a.render=function(a,b,d){if("string"!==typeof a)throw new TypeError('Invalid template! Template should be a "string" but "'+c(a)+'" was given as the first argument for mustache#render(template, view, partials)');return aa.render(a,
b,d)};a.to_html=function(c,d,e,f){c=a.render(c,d,e);if(b(f))f(c);else return c};a.escape=function(a){return String(a).replace(/[&<>"'`=\/]/g,function(a){return oa[a]})};a.sanitizeUnescaped=null;a.setUnescapedSanitizer=function(b){a.sanitizeUnescaped=b};a.Scanner=B;a.Context=h;a.Writer=g})(xc);var Y=AMP.BaseTemplate;function Z(a,b){var c=Y.call(this,a,b)||this;nc(b,function(){return new gc(b.document)});c.C=wc(b);xc.setUnescapedSanitizer(function(a){return c.C.purifyTagsForTripleMustache(a)});return c}Z.prototype=fa(Y.prototype);Z.prototype.constructor=Z;if(la)la(Z,Y);else for(var yc in Y)if("prototype"!=yc)if(Object.defineProperties){var zc=Object.getOwnPropertyDescriptor(Y,yc);zc&&Object.defineProperty(Z,yc,zc)}else Z[yc]=Y[yc];Z.I=Y.prototype;
Z.prototype.compileCallback=function(){if(!this.viewerCanRenderTemplates()){this.B={};if("TEMPLATE"==this.element.tagName){var a=this.element;if("content"in a)var b=a.content.cloneNode(!0);else{b=a.ownerDocument.createDocumentFragment();var c=b.ownerDocument.createDocumentFragment();for(a=a.firstChild;a;a=a.nextSibling)c.appendChild(a.cloneNode(!0));b.appendChild(c)}Ac(this,b);c=this.element.ownerDocument.createElement("div");c.appendChild(b);b=c.innerHTML}else b="SCRIPT"==this.element.tagName?this.element.textContent:
"";this.D=b;try{xc.parse(this.D,void 0)}catch(d){A().error("amp-mustache",d.message,this.element)}}};function Ac(a,b){var c=b.querySelectorAll("template");Db(c,function(b,c){c="__AMP_NESTED_TEMPLATE_"+c;a.B[c]=b.outerHTML;var d=a.element.ownerDocument.createTextNode("{{{"+c+"}}}");b.parentNode.replaceChild(d,b)})}Z.prototype.setHtml=function(a){var b=Bc(this,"<div>"+a+"</div>");return this.unwrapChildren(b)};
Z.prototype.render=function(a){var b=a;"object"===typeof a&&(b=Object.assign({},a,this.B));a=xc.render(this.D,b,void 0);return Bc(this,a)};function Bc(a,b){b=a.C.purifyHtml("<div>"+b+"</div>").firstElementChild;return a.tryUnwrap(b)}(function(a){a.registerTemplate("amp-mustache",Z)})(self.AMP);
})});

//# sourceMappingURL=amp-mustache-0.2.js.map
