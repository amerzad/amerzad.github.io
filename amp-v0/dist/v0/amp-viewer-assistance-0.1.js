(self.AMP=self.AMP||[]).push({n:"amp-viewer-assistance",v:"2007102309000",f:(function(AMP,_){
function l(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var m=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var n=self.AMP_CONFIG||{},p=("string"==typeof n.cdnProxyRegex?new RegExp(n.cdnProxyRegex):n.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function r(a){if(self.document&&self.document.head&&(!self.location||!p.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}n.cdnUrl||r("runtime-host");n.geoApiUrl||r("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var t=self.__AMP_LOG;function u(){if(!t.user)throw Error("failed to call initLogConstructor");return t.user};var v=Object.prototype.hasOwnProperty;function w(a){return a||{}};w({c:!0,v:!0,a:!0,ad:!0,action:!0});function x(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var e=a.AMP_CONFIG["allow-doc-opt-in"],f=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
if(f){var h=f.getAttribute("content").split(",");for(c=0;c<h.length;c++)-1!=e.indexOf(h[c])&&(b[h[c]]=!0)}}Object.assign(b,y(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];var g=a.location.originalHash||a.location.hash;a=Object.create(null);if(g)for(var k;k=m.exec(g);){var q=l(k[1],k[1]);k=k[2]?l(k[2].replace(/\+/g," "),k[2]):"";a[q]=k}for(g=0;g<c.length;g++)q=a["e-"+c[g]],"1"==q&&(b[c[g]]=!0),"0"==
q&&(b[c[g]]=!1)}return b}function y(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){if(t.dev)a=t.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var z=[{experimentId:"ampdoc-fie",isTrafficEligible:function(){return!0},branches:["21065001","21065002"]}];function A(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c,e;if(x(c)["ampdoc-fie"]){c.__AMP_EXPERIMENT_BRANCHES=c.__AMP_EXPERIMENT_BRANCHES||{};for(e=0;e<z.length;e++){var f=z[e],h=f.experimentId;v.call(c.__AMP_EXPERIMENT_BRANCHES,h)||(f.isTrafficEligible&&f.isTrafficEligible(c)?!c.__AMP_EXPERIMENT_BRANCHES[h]&&x(c)[h]&&(f=f.branches,c.__AMP_EXPERIMENT_BRANCHES[h]=f[Math.floor(Math.random()*f.length)]||null):c.__AMP_EXPERIMENT_BRANCHES[h]=null)}e="21065002"===(c.__AMP_EXPERIMENT_BRANCHES?
c.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else e=!1;var g=e;d&&!g?a=B(b,"action")?C(b,"action"):null:(a=D(a),a=E(a),a=B(a,"action")?C(a,"action"):null);return a}function F(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return C(a,b)}function G(a){var b=D(a);b=E(b);return C(b,"viewer")}function D(a){return a.nodeType?F((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function E(a){a=D(a);return a.isSingleDoc()?a.win:a}
function C(a,b){B(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function B(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function H(a,b){try{return JSON.parse(a)}catch(c){return b&&b(c),null}};var I=["ACTIVE_ACTION_STATUS","FAILED_ACTION_STATUS","COMPLETED_ACTION_STATUS"];function J(a){var b=a.getElementById("amp-viewer-assistance");if(this.l=!!b)this.o=a,this.j=b,this.A=H(this.j.textContent,function(a){throw u().createError('Failed to parse "amp-viewer-assistance" JSON: '+a);}),this.h=G(a),this.m=A(this.j),this.B=F(a.win,"vsync")}
J.prototype.w=function(a){var b=this,c=a.method,d=a.args;"updateActionState"==c?a.satisfiesTrust(1)&&K(d).then(function(a){return b.h.sendMessageAwaitResponse(c,a)}).catch(function(a){u().error("amp-viewer-assistance",a.toString())}):"signIn"==c&&a.satisfiesTrust(2)&&L(this);return null};
function M(a){return a.l?a.h.isTrustedViewer().then(function(b){if(!b&&!x(a.o.win)["amp-viewer-assistance-untrusted"])return a.l=!1,u().error("amp-viewer-assistance","amp-viewer-assistance is currently only supported on trusted viewers."),a;a.m.installActionHandler(a.j,a.w.bind(a));a.getIdTokenPromise();a.h.sendMessage("viewerAssistanceConfig",w({config:a.A}));return a}):(u().error("amp-viewer-assistance","Could not find #amp-viewer-assistance element."),a)}
J.prototype.getIdTokenPromise=function(){var a=this;return this.h.sendMessageAwaitResponse("getAccessTokenPassive",w({providers:["actions-on-google-gsi"]})).then(function(b){N(a,!!b);return b}).catch(function(){N(a,!1)})};function L(a){a.h.sendMessageAwaitResponse("requestSignIn",w({providers:["actions-on-google-gsi"]})).then(function(b){u().info("amp-viewer-assistance","Token: "+b);b?(N(a,!0),a.m.trigger(a.j,"signedIn",null,2)):N(a,!1)})}
function K(a){if(!a)return Promise.reject('"updateActionState" was called with no arguments!"');var b=a.update,c=a.error;if(c&&b)return Promise.reject('"updateActionState" must have only one of the parameters "error" and "update".');if(c)return c&&"function"===typeof c.text?c.text().then(function(a){return w({update:{actionStatus:"FAILED_ACTION_STATUS",result:{code:c.status,message:a}}})}):Promise.reject('"updateActionState" action "error" parameter must contain a valid "response" object.');if(b){var d=
b&&b.actionStatus;return d&&I.includes(d)?Promise.resolve(a):Promise.reject('"updateActionState" action "update" parameter must contain a valid "actionStatus" field.')}return Promise.reject('"updateActionState" action must have an "update" or "error" parameter.')}function N(a,b){a.B.mutate(function(){var c=a.o.getRootNode();(c.documentElement||c.body||c).classList.toggle("amp-viewer-assistance-identity-available",b)})}(function(a){a.registerServiceForDoc("amp-viewer-assistance",function(a){return M(new J(a))})})(self.AMP);
})});

//# sourceMappingURL=amp-viewer-assistance-0.1.js.map
