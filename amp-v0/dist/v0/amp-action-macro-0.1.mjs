(self.AMP=self.AMP||[]).push({n:"amp-action-macro",v:"2008290323002",f:function(AMP,_){function f(a,b=""){try{return decodeURIComponent(a)}catch(c){return b}}let h=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;let k=self.AMP_CONFIG||{},l=("string"==typeof k.cdnProxyRegex?new RegExp(k.cdnProxyRegex):k.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function m(a){if(self.document&&self.document.head&&(!self.location||!l.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}k.cdnUrl||m("runtime-host");k.geoApiUrl||m("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let n=self.__AMP_LOG;function p(a,b,c,d){if(!n.user)throw Error("failed to call initLogConstructor");n.user.assert(a,b,c,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0});function q(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);let b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){let d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){let d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(e){let a=e.getAttribute("content").split(",");for(c=0;c<a.length;c++)-1!=d.indexOf(a[c])&&(b[a[c]]=!0)}}Object.assign(b,r(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];a=a.location.originalHash||a.location.hash;var d=Object.create(null);if(a)for(var e;e=h.exec(a);){var g=f(e[1],e[1]);e=e[2]?f(e[2].replace(/\+/g," "),e[2]):"";d[g]=e}a=d;for(d=0;d<c.length;d++)g=a[`e-${c[d]}`],"1"==g&&(b[c[d]]=!0),"0"==g&&(b[c[d]]=!1)}return b}function r(a){let b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(d){}let c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(let b=0;b<c.length;b++)0!=c[b].length&&("-"==c[b][0]?a[c[b].substr(1)]=!1:a[c[b]]=!0);return a}function t(a){let b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c,e=!!q(c)["ampdoc-fie"];d&&!e?a=u(b,"action")?v(b,"action"):null:(a=w(a),a=w(a),a=a.isSingleDoc()?a.win:a,a=u(a,"action")?v(a,"action"):null);return a}function w(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=v(b,"ampdoc").getAmpDoc(a)}return a}function v(a,b){u(a,b);{let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});a=b}b=a[b];b.obj||(b.obj=new b.ctor(b.context),b.ctor=null,b.context=null,b.resolve&&b.resolve(b.obj));return b.obj}function u(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
class x extends AMP.BaseElement{constructor(a){super(a);this.j=null;this.h=[]}buildCallback(){p(!!q(this.win)["amp-action-macro"],"Experiment is off");let a=this.element;this.j=t(a);let b=a.getAttribute("arguments");b&&(this.h=b.split(",").map(a=>a.trim()));this.registerAction("execute",this.l.bind(this))}getLayoutPriority(){return 1}l(a){let b=a.actionEventType,c=a.args,d=a.event,e=a.trust;if(c&&0<this.h.length)for(let a in c)p(this.h.includes(a),'Variable argument name "%s" is not defined in %s',a,this.element);"amp-action-macro"===a.caller.tagName.toLowerCase()&&p(!!(this.element.compareDocumentPosition(a.caller)&Node.DOCUMENT_POSITION_FOLLOWING),'Action macro with ID "%s" cannot reference itself or macros defined after it',this.element.getAttribute("id"));this.j.trigger(this.element,`${b}`,d,e,c)}renderOutsideViewport(){return!0}isLayoutSupported(){return!0}}(a=>{a.registerElement("amp-action-macro",x)})(self.AMP)}});