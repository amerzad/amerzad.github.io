(self.AMP=self.AMP||[]).push({n:"amp-experiment",v:"2008290323002",f:function(AMP,_){let g=Object.prototype.toString;let k=self.AMP_CONFIG||{},l=("string"==typeof k.cdnProxyRegex?new RegExp(k.cdnProxyRegex):k.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function m(a){if(self.document&&self.document.head&&(!self.location||!l.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}k.cdnUrl||m("runtime-host");k.geoApiUrl||m("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let n=self.__AMP_LOG;function p(a,b,c,d,e,f){if(!n.user)throw Error("failed to call initLogConstructor");return n.user.assert(a,b,c,d,e,f,void 0,void 0,void 0,void 0,void 0)}let q=Object.prototype.hasOwnProperty;let r;function t(){return r?r:r=Promise.resolve(void 0)}class u{constructor(){let a,b;this.promise=new Promise((c,d)=>{a=c;b=d});this.resolve=a;this.reject=b}}(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0});function v(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return w(a,b)}function x(a,b){{a=y(a);let c=z(a,b);c?b=c:(a=A(a),a[b]=B(),b=a[b].promise)}return b}function C(a){return a.nodeType?v((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function y(a){a=C(a);return a.isSingleDoc()?a.win:a}function w(a,b){a=A(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function z(a,b){let c=A(a)[b];if(c){if(c.promise)return c.promise;w(a,b);return c.promise=Promise.resolve(c.obj)}return null}function A(a){let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function B(){let a=new u,b=a.promise,c=a.resolve,d=a.reject;b.catch(()=>{});return{obj:null,promise:b,resolve:c,reject:d,context:null,ctor:null}}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function D(a){return E(a).then(a=>p(a,"Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.","userNotificationManager","amp-user-notification","amp-user-notification","amp-user-notification"))}function E(a){let b=z(y(a),"userNotificationManager");if(b)return b;let c=C(a);return c.waitForBodyOpen().then(()=>{var a=c.win;var b=c.win.document.head;if(b){var f={};b=b.querySelectorAll("script[custom-element],script[custom-template]");for(let a=0;a<b.length;a++){var h=b[a];h=h.getAttribute("custom-element")||h.getAttribute("custom-template");f[h]=!0}f=Object.keys(f)}else f=[];return f.includes("amp-user-notification")?v(a,"extensions").waitForExtension(a,"amp-user-notification"):t()}).then(()=>{var b=c.win;return b.__AMP_EXTENDED_ELEMENTS&&b.__AMP_EXTENDED_ELEMENTS["amp-user-notification"]?x(a,"userNotificationManager"):null})}let F=/^[\w-]+$/;class G{constructor(a){this.ampdoc=a;this.h=new u}init(a){this.h.resolve(a)}getVariants(){return this.h.promise}whenReady(){return this.getVariants()}}function H(a,b,c){I(b);J(c);let d=a.getParam("amp-x-"+b);if(d&&q.call(c.variants,d))return Promise.resolve(d);let e=!1!==c.sticky,f=c.cidScope||"amp-experiment";let h=Promise.resolve(!0);if(e&&c.consentNotificationId){let b=a.getHeadNode();h=D(b).then(a=>a.getNotification(c.consentNotificationId)).then(a=>{p(a,`Notification not found: ${c.consentNotificationId}`);return a.isDismissed()})}return h.then(d=>d?K(a,c.group||b,e?f:null).then(a=>{let b=0;let d=Object.keys(c.variants).sort();for(let e=0;e<d.length;e++)if(b+=c.variants[d[e]],a<b)return d[e];return null}):null)}function J(a){let b=a.variants;p("[object Object]"===g.call(b)&&0<Object.keys(b).length,"Missing experiment variants config.");a.group&&I(a.group);let c=0;for(let a in b)if(q.call(b,a)){I(a);let e=b[a];p("number"===typeof e&&0<e&&100>e,"Invalid percentage %s:%s. Has to be greater than 0 and less than 100",a,e);c+=e}p(100>=c.toFixed(6),"Total percentage is bigger than 100: "+c)}function K(a,b,c){if(!c)return Promise.resolve(100*a.win.Math.random());let d=x(a,"cid").then(a=>a.get({scope:c,createCookieIfNotPresent:!0},t()));return Promise.all([d,v(a.win,"crypto")]).then(a=>a[1].uniform(b+":"+a[0])).then(a=>100*a)}function I(a){p(F.test(a),"Invalid name: %s. Allowed chars are [a-zA-Z0-9-_].",a)}function L(a){a=a.element.children;p(1==a.length&&"SCRIPT"==a[0].tagName&&"APPLICATION/JSON"==a[0].getAttribute("type").toUpperCase(),'<amp-experiment> should contain exactly one <script type="application/json"> child.');return JSON.parse(a[0].textContent)}class M extends AMP.BaseElement{isLayoutSupported(a){return"nodisplay"==a||"container"==a}prerenderAllowed(){return!0}isBuildRenderBlocking(){return!0}buildCallback(){return x(this.getAmpDoc(),"variant").then(a=>{try{let b=L(this),c=Object.create(null),d=Object.keys(b).map(a=>H(this.getAmpDoc(),a,b[a]).then(b=>{c[a]=b})),e=Promise.all(d).then(()=>c).then(this.j.bind(this));a.init(e)}catch(b){throw a.init({}),b}})}j(a){return this.getAmpDoc().waitForBodyOpen().then(b=>{for(let c in a)a[c]&&b.setAttribute("amp-x-"+c,a[c]);return a})}}(a=>{a.registerServiceForDoc("variant",G);a.registerElement("amp-experiment",M)})(self.AMP)}});