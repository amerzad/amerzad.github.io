(self.AMP=self.AMP||[]).push({n:"amp-social-share",v:"2008290323002",f:(function(AMP,_){
'use strict';var r,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var t;
if("function"==typeof Object.setPrototypeOf)t=Object.setPrototypeOf;else{var w;a:{var ca={a:!0},da={};try{da.__proto__=ca;w=da.a;break a}catch(a){}w=!1}t=w?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=t;
function fa(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(ea)ea(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.G=b.prototype};function ha(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ia=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function y(a){var b=Object.create(null);if(!a)return b;for(var c;c=ia.exec(a);){var d=ha(c[1],c[1]),g=c[2]?ha(c[2].replace(/\+/g," "),c[2]):"";b[d]=g}return b};function z(a){return a?Array.prototype.slice.call(a):[]};var C=self.AMP_CONFIG||{},ja=("string"==typeof C.cdnProxyRegex?new RegExp(C.cdnProxyRegex):C.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function ka(a){if(self.document&&self.document.head&&(!self.location||!ja.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}C.cdnUrl||ka("runtime-host");C.geoApiUrl||ka("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var D=self.__AMP_LOG;function la(){if(D.dev)return D.dev;throw Error("failed to call initLogConstructor");}function ma(a,b,c){if(!D.user)throw Error("failed to call initLogConstructor");return D.user.assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var na=Object.prototype.hasOwnProperty;function F(a){return a||{}}function oa(a,b){if(null==a||null==b)return a===b;for(var c in a)if(a[c]!==b[c])return!1;for(var d in b)if(b[d]!==a[d])return!1;return!0};var G,H,pa,qa,ra,sa,I={},J=[],ta=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function K(a,b){for(var c in b)a[c]=b[c];return a}function ua(a){var b=a.parentNode;b&&b.removeChild(a)}
function va(a,b,c){var d,g=arguments,f={};for(d in b)"key"!==d&&"ref"!==d&&(f[d]=b[d]);if(3<arguments.length)for(c=[c],d=3;d<arguments.length;d++)c.push(g[d]);if(null!=c&&(f.children=c),"function"==typeof a&&null!=a.defaultProps)for(d in a.defaultProps)void 0===f[d]&&(f[d]=a.defaultProps[d]);return L(a,f,b&&b.key,b&&b.ref)}function L(a,b,c,d){a={type:a,props:b,key:c,ref:d,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return G.vnode&&G.vnode(a),a}
function M(a){return a.children}function N(a,b){this.props=a;this.context=b}function O(a,b){if(null==b)return a.__?O(a.__,a.__.__k.indexOf(a)+1):null;for(var c;b<a.__k.length;b++)if(null!=(c=a.__k[b])&&null!=c.__e)return c.__e;return"function"==typeof a.type?O(a):null}function wa(a){var b,c;if(null!=(a=a.__)&&null!=a.__c){a.__e=a.__c.base=null;for(b=0;b<a.__k.length;b++)if(null!=(c=a.__k[b])&&null!=c.__e){a.__e=a.__c.base=c.__e;break}return wa(a)}}
function P(a){(!a.__d&&(a.__d=!0)&&1===H.push(a)||qa!==G.debounceRendering)&&((qa=G.debounceRendering)||pa)(xa)}function xa(){var a,b,c,d,g,f,m;for(H.sort(function(a,b){return b.__v.__b-a.__v.__b});a=H.pop();)a.__d&&(c=void 0,d=void 0,f=(g=(b=a).__v).__e,(m=b.__P)&&(c=[],d=Q(m,g,K({},g),b.__n,void 0!==m.ownerSVGElement,null,c,null==f?O(g):f),ya(c,g),d!=f&&wa(g)))}
function za(a,b,c,d,g,f,m,k,p){var h,e,n,l,q,v,x,u=c&&c.__k||J,A=u.length;if(k==I&&(k=null!=f?f[0]:A?O(c,0):null),h=0,b.__k=R(b.__k,function(c){if(null!=c){if(c.__=b,c.__b=b.__b+1,null===(n=u[h])||n&&c.key==n.key&&c.type===n.type)u[h]=void 0;else for(e=0;e<A;e++){if((n=u[e])&&c.key==n.key&&c.type===n.type){u[e]=void 0;break}n=null}if(l=Q(a,c,n=n||I,d,g,f,m,k,p),(e=c.ref)&&n.ref!=e&&(x||(x=[]),n.ref&&x.push(n.ref,null,c),x.push(e,c.__c||l,c)),null!=l){if(null==v&&(v=l),null!=c.__d)l=c.__d,c.__d=null;
else if(f==n||l!=k||null==l.parentNode){a:if(null==k||k.parentNode!==a)a.appendChild(l);else{q=k;for(e=0;(q=q.nextSibling)&&e<A;e+=2)if(q==l)break a;a.insertBefore(l,k)}"option"==b.type&&(a.value="")}k=l.nextSibling;"function"==typeof b.type&&(b.__d=l)}}return h++,c}),b.__e=v,null!=f&&"function"!=typeof b.type)for(h=f.length;h--;)null!=f[h]&&ua(f[h]);for(h=A;h--;)null!=u[h]&&Aa(u[h],u[h]);if(x)for(h=0;h<x.length;h++)Ba(x[h],x[++h],x[++h])}
function R(a,b,c){if(null==c&&(c=[]),null==a||"boolean"==typeof a)b&&c.push(b(null));else if(Array.isArray(a))for(var d=0;d<a.length;d++)R(a[d],b,c);else c.push(b?b("string"==typeof a||"number"==typeof a?L(null,a,null,null):null!=a.__e||null!=a.__c?L(a.type,a.props,a.key,null):a):a);return c}function Ca(a,b,c){"-"===b[0]?a.setProperty(b,c):a[b]="number"==typeof c&&!1===ta.test(b)?c+"px":null==c?"":c}
function Da(a,b,c,d,g){var f,m,k,p;if(g?"className"===b&&(b="class"):"class"===b&&(b="className"),"key"!==b&&"children"!==b)if("style"===b)if(a=a.style,"string"==typeof c)a.cssText=c;else{if("string"==typeof d&&(a.cssText="",d=null),d)for(f in d)c&&f in c||Ca(a,f,"");if(c)for(m in c)d&&c[m]===d[m]||Ca(a,m,c[m])}else"o"===b[0]&&"n"===b[1]?(k=b!==(b=b.replace(/Capture$/,"")),p=b.toLowerCase(),b=(p in a?p:b).slice(2),c?(d||a.addEventListener(b,Ea,k),(a.l||(a.l={}))[b]=c):a.removeEventListener(b,Ea,k)):
"list"!==b&&"tagName"!==b&&"form"!==b&&"type"!==b&&!g&&b in a?a[b]=null==c?"":c:"function"!=typeof c&&"dangerouslySetInnerHTML"!==b&&(b!==(b=b.replace(/^xlink:?/,""))?null==c||!1===c?a.removeAttributeNS("http://www.w3.org/1999/xlink",b.toLowerCase()):a.setAttributeNS("http://www.w3.org/1999/xlink",b.toLowerCase(),c):null==c||!1===c?a.removeAttribute(b):a.setAttribute(b,c))}function Ea(a){this.l[a.type](G.event?G.event(a):a)}
function Q(a,b,c,d,g,f,m,k,p){var h,e,n,l,q,v,x,u,A,E,B=b.type;if(void 0!==b.constructor)return null;(h=G.__b)&&h(b);try{a:if("function"==typeof B){if(u=b.props,A=(h=B.contextType)&&d[h.__c],E=h?A?A.props.value:h.__:d,c.__c?x=(e=b.__c=c.__c).__=e.__E:("prototype"in B&&B.prototype.render?b.__c=e=new B(u,E):(b.__c=e=new N(u,E),e.constructor=B,e.render=Fa),A&&A.sub(e),e.props=u,e.state||(e.state={}),e.context=E,e.__n=d,n=e.__d=!0,e.__h=[]),null==e.__s&&(e.__s=e.state),null!=B.getDerivedStateFromProps&&
(e.__s==e.state&&(e.__s=K({},e.__s)),K(e.__s,B.getDerivedStateFromProps(u,e.__s))),l=e.props,q=e.state,n)null==B.getDerivedStateFromProps&&null!=e.componentWillMount&&e.componentWillMount(),null!=e.componentDidMount&&e.__h.push(e.componentDidMount);else{if(null==B.getDerivedStateFromProps&&u!==l&&null!=e.componentWillReceiveProps&&e.componentWillReceiveProps(u,E),!e.__e&&null!=e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,e.__s,E)){e.props=u;e.state=e.__s;e.__d=!1;e.__v=b;b.__e=c.__e;b.__k=
c.__k;e.__h.length&&m.push(e);for(h=0;h<b.__k.length;h++)b.__k[h]&&(b.__k[h].__=b);break a}null!=e.componentWillUpdate&&e.componentWillUpdate(u,e.__s,E);null!=e.componentDidUpdate&&e.__h.push(function(){e.componentDidUpdate(l,q,v)})}e.context=E;e.props=u;e.state=e.__s;(h=G.__r)&&h(b);e.__d=!1;e.__v=b;e.__P=a;h=e.render(e.props,e.state,e.context);b.__k=R(null!=h&&h.type==M&&null==h.key?h.props.children:h);null!=e.getChildContext&&(d=K(K({},d),e.getChildContext()));n||null==e.getSnapshotBeforeUpdate||
(v=e.getSnapshotBeforeUpdate(l,q));za(a,b,c,d,g,f,m,k,p);e.base=b.__e;e.__h.length&&m.push(e);x&&(e.__E=e.__=null);e.__e=null}else b.__e=Ga(c.__e,b,c,d,g,f,m,p);(h=G.diffed)&&h(b)}catch(mb){G.__e(mb,b,c)}return b.__e}function ya(a,b){G.__c&&G.__c(b,a);a.some(function(b){try{a=b.__h,b.__h=[],a.some(function(a){a.call(b)})}catch(d){G.__e(d,b.__v)}})}
function Ga(a,b,c,d,g,f,m,k){var p,h,e,n=c.props,l=b.props;if(g="svg"===b.type||g,null==a&&null!=f)for(p=0;p<f.length;p++)if(null!=(h=f[p])&&(null===b.type?3===h.nodeType:h.localName===b.type)){a=h;f[p]=null;break}if(null==a){if(null===b.type)return document.createTextNode(l);a=g?document.createElementNS("http://www.w3.org/2000/svg",b.type):document.createElement(b.type);f=null}if(null===b.type)null!=f&&(f[f.indexOf(a)]=null),n!==l&&a.data!=l&&(a.data=l);else if(b!==c){if(null!=f&&(f=J.slice.call(a.childNodes)),
h=(n=c.props||I).dangerouslySetInnerHTML,p=l.dangerouslySetInnerHTML,!k){if(n===I)for(n={},e=0;e<a.attributes.length;e++)n[a.attributes[e].name]=a.attributes[e].value;(p||h)&&(p&&h&&p.__html==h.__html||(a.innerHTML=p&&p.__html||""))}h=a;e=g;for(var q in n)q in l||Da(h,q,null,n[q],e);for(q in l)k&&"function"!=typeof l[q]||"value"===q||"checked"===q||n[q]===l[q]||Da(h,q,l[q],n[q],e);b.__k=b.props.children;p||za(a,b,c,d,"foreignObject"!==b.type&&g,f,m,I,k);k||("value"in l&&void 0!==l.value&&l.value!==
a.value&&(a.value=null==l.value?"":l.value),"checked"in l&&void 0!==l.checked&&l.checked!==a.checked&&(a.checked=l.checked))}return a}function Ba(a,b,c){try{"function"==typeof a?a(b):a.current=b}catch(d){G.__e(d,c)}}
function Aa(a,b,c){var d,g;if(G.unmount&&G.unmount(a),(d=a.ref)&&(d.current&&d.current!==a.__e||Ba(d,null,b)),c||"function"==typeof a.type||(c=null!=(g=a.__e)),a.__e=a.__d=null,null!=(d=a.__c)){if(d.componentWillUnmount)try{d.componentWillUnmount()}catch(f){G.__e(f,b)}d.base=d.__P=null}if(d=a.__k)for(a=0;a<d.length;a++)d[a]&&Aa(d[a],b,c);null!=g&&ua(g)}function Fa(a,b,c){return this.constructor(a,c)}
function Ha(a,b){var c;G.__&&G.__(a,b);var d=(c=void 0===ra)?null:b.__k;a=va(M,null,[a]);var g=[];Q(b,b.__k=a,d||I,I,void 0!==b.ownerSVGElement,d?null:J.slice.call(b.childNodes),g,I,c);ya(g,a)}
function Ia(){var a={},b={__c:"__cC"+sa++,__:{renderable:!0,playable:!0},Consumer:function(a,b){return a.children(b)},Provider:function(c){var d,g=this;return this.getChildContext||(d=[],this.getChildContext=function(){return a[b.__c]=g,a},this.shouldComponentUpdate=function(a){c.value!==a.value&&d.some(function(b){b.context=a.value;P(b)})},this.sub=function(a){d.push(a);var b=a.componentWillUnmount;a.componentWillUnmount=function(){d.splice(d.indexOf(a),1);b&&b.call(a)}}),c.children}};return b.Consumer.contextType=
b,b}G={__e:function(a,b){for(var c,d;b=b.__;)if((c=b.__c)&&!c.__)try{if(c.constructor&&null!=c.constructor.getDerivedStateFromError&&(d=!0,c.setState(c.constructor.getDerivedStateFromError(a))),null!=c.componentDidCatch&&(d=!0,c.componentDidCatch(a)),d)return P(c.__E=c)}catch(g){a=g}throw a;}};N.prototype.setState=function(a,b){var c=this.__s!==this.state?this.__s:this.__s=K({},this.state);"function"==typeof a&&(a=a(c,this.props));a&&K(c,a);null!=a&&this.__v&&(this.__e=!1,b&&this.__h.push(b),P(this))};
N.prototype.forceUpdate=function(a){this.__v&&(this.__e=!0,a&&this.__h.push(a),P(this))};N.prototype.render=M;H=[];pa="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout;ra=I;sa=0;var Ja,S,Ka,La=[],Ma=G.__r,Na=G.diffed,Oa=G.__c,Pa=G.unmount;function T(){var a=Ja++;G.__h&&G.__h(S);var b=S.__H||(S.__H={t:[],u:[]});return a>=b.t.length&&b.t.push({}),b.t[a]}function Qa(){return Ra(function(){return{current:null}})}function Ra(a){var b=[],c=T();return Sa(c.o,b)?(c.o=b,c.v=a,c.i=a()):c.i}function Ta(a){var b=S.context[a.__c];if(!b)return a.__;a=T();return null==a.i&&(a.i=!0,b.sub(S)),b.props.value}
function Ua(){La.some(function(a){a.__P&&(a.__H.u.forEach(Va),a.__H.u.forEach(Wa),a.__H.u=[])});La=[]}function Va(a){a.m&&a.m()}function Wa(a){var b=a.i();"function"==typeof b&&(a.m=b)}function Sa(a,b){return!a||b.some(function(b,d){return b!==a[d]})}G.__r=function(a){Ma&&Ma(a);Ja=0;(S=a.__c).__H&&(S.__H.u.forEach(Va),S.__H.u.forEach(Wa),S.__H.u=[])};
G.diffed=function(a){Na&&Na(a);if(a=a.__c){var b=a.__H;b&&b.u.length&&(1!==La.push(a)&&Ka===G.requestAnimationFrame||((Ka=G.requestAnimationFrame)||function(a){function b(){clearTimeout(f);cancelAnimationFrame(c);setTimeout(a)}var c,f=setTimeout(b,100);"undefined"!=typeof window&&(c=requestAnimationFrame(b))})(Ua))}};G.__c=function(a,b){b.some(function(a){a.__h.forEach(Va);a.__h=a.__h.filter(function(a){return!a.i||Wa(a)})});Oa&&Oa(a,b)};
G.unmount=function(a){Pa&&Pa(a);(a=a.__c)&&(a=a.__H)&&a.t.forEach(function(a){return a.m&&a.m()})};function U(a,b,c){return va.apply(void 0,arguments)}function Xa(a){return a.children}function Ya(a,b){var c=T();Sa(c.o,b)&&(c.i=a,c.o=b,S.__H.u.push(c))}function Za(a){var b=T();Sa(b.o,void 0)&&(b.i=a,b.o=void 0,S.__h.push(b))};function $a(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};var V;function ab(a){var b=V||(V=Ia()),c=Ta(b),d=Object.assign({},a,{renderable:c.renderable&&a.renderable,playable:c.playable&&a.playable,children:void 0});return U(b.Provider,{children:a.children,value:d})};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function bb(a,b){var c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return c?c.call(a,b):!1}function cb(a){function b(a){return a}var c=a.dataset;a={};var d=/^param(.+)/,g;for(g in c){var f=g.match(d);f&&(f=f[1][0].toLowerCase()+f[1].substr(1),a[b(f)]=c[g])}return a}
function db(a,b,c){try{var d=a.open(b,c,"resizable,scrollbars,width=640,height=480")}catch(f){la().error("DOM","Failed to open url on target: ",c,f)}if(!(c=d||"_top"==c)){var g;"number"!==typeof g&&(g=0);c=41<g+8?!1:-1!=="resizable,scrollbars,width=640,height=480".indexOf("noopener",g)}c||a.open(b,"_top")}function eb(a,b,c){var d=a.hasAttribute(b),g=void 0!==c?c:!d;g!==d&&(g?a.setAttribute(b,""):a.removeAttribute(b))};function fb(){var a=Ta(V||(V=Ia())).notify;Za(function(){a&&a()})};function gb(a,b,c){a.setAttribute("slot",b);return U(hb,Object.assign({},c||{},{name:b}))}
function hb(a){var b=Ta(V||(V=Ia())),c=Qa(),d=Object.assign({},a,{ref:c});Ya(function(){var d=c.current,f=a.assignedElements||z(d.assignedElements());d.__assignedElements=f;d.setAttribute("i-amphtml-context",JSON.stringify(b));f.forEach(function(a){a.__assignedSlot=d;a.setAttribute("i-amphtml-context",JSON.stringify(b))});a.retarget&&f.forEach(function(a){for(var b=d.attributes,c=0,e=b.length;c<e;c++){var f=b[c],g=f.name;f=f.value;"name"!=g&&"class"!=g&&"style"!=g&&"i-amphtml-context"!=g&&a.setAttribute(g,
f)}a.disabled=d.hasAttribute("disabled");a.hidden=d.hasAttribute("hidden");eb(a,"selected",d.hasAttribute("selected"));eb(a,"expanded",d.hasAttribute("expanded"));a["i-amphtml-event-distr"]||(a["i-amphtml-event-distr"]=!0,a.addEventListener("click",function(a){a.stopPropagation();a.preventDefault();a=new Event("click",{bubbles:!0,cancelable:!0,composed:!1});d.dispatchEvent(a)}))});if(!oa(d["i-amphtml-context"],b)){d["i-amphtml-context"]=b;var m=[];f.forEach(function(a){a["i-amphtml-context"]=b;m.push.apply(m,
ib(a))});m.forEach(function(a){var c=new Event("i-amphtml-context-changed",{bubbles:!1,cancelable:!0,composed:!0});c.data=b;a.dispatchEvent(c)})}a.postRender&&a.postRender()});Ya(function(){var b=c.current;return function(){var c=[];(a.assignedElements||z(b.assignedElements())).forEach(function(a){c.push.apply(c,ib(a))});c.forEach(function(a){var b=new Event("i-amphtml-unmounted",{bubbles:!1,cancelable:!0,composed:!0});a.dispatchEvent(b)})}},[]);return U("slot",Object.assign({},d))}
function ib(a){var b=z(a.querySelectorAll(".i-amphtml-element"));bb(a,".i-amphtml-element")&&b.unshift(a);return b};F({c:!0,v:!0,a:!0,ad:!0});function jb(a,b){if(!b)return a;var c=a.split("#",2),d=c[0].split("?",2),g=d[0]+(d[1]?"?"+d[1]+"&"+b:"?"+b);return g+=c[1]?"#"+c[1]:""}function kb(a){var b=[],c;for(c in a){var d=a[c];if(null!=d)if(Array.isArray(d))for(var g=0;g<d.length;g++){var f=d[g];b.push(encodeURIComponent(c)+"="+encodeURIComponent(f))}else b.push(encodeURIComponent(c)+"="+encodeURIComponent(d))}return b.join("&")};function lb(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var g=a.AMP_CONFIG["allow-doc-opt-in"],f=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
if(f){var m=f.getAttribute("content").split(",");for(c=0;c<m.length;c++)-1!=g.indexOf(m[c])&&(b[m[c]]=!0)}}Object.assign(b,nb(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];a=y(a.location.originalHash||a.location.hash);for(var k=0;k<c.length;k++){var p=a["e-"+c[k]];"1"==p&&(b[c[k]]=!0);"0"==p&&(b[c[k]]=!1)}}return b}
function nb(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(g){la().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function ob(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),g=c!=d,f=!!lb(d)["ampdoc-fie"];g&&!f?b=pb(c,b)?W(c,b):null:(a=qb(a),a=rb(a),b=pb(a,b)?W(a,b):null);return b}function sb(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return W(a,b)}function qb(a){return a.nodeType?sb((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function rb(a){a=qb(a);return a.isSingleDoc()?a.win:a}
function W(a,b){pb(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function pb(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 Use of this source code is governed by a BSD-style
 license that can be found in the LICENSE file or at
 https://developers.google.com/open-source/licenses/bsd */
var tb={childList:!0},ub={childList:!0,characterData:!0},vb={position:"absolute",width:"100%",height:"100%"};
function X(a){var b=AMP.BaseElement.call(this,a)||this;b.h=null;b.B=!1;b.A={renderable:!1,playable:!1,notify:function(){return b.mutateElement(function(){})}};b.D=function(){b.B=!1;if(b.C){var a=b.constructor;if(!b.h)if(a.children||a.passthrough||a.passthroughNonEmpty){var d=b.element.attachShadow({mode:"open"});b.h=d;var g=a.shadowCss;if(g){var f=b.element.tagName,m=d.ownerDocument,k=m.defaultView;if(void 0!==d.adoptedStyleSheets&&void 0!==k.CSSStyleSheet.prototype.replaceSync){m=k.__AMP_SHADOW_CSS||
(k.__AMP_SHADOW_CSS={});var p=m[f];p||(p=new k.CSSStyleSheet,p.replaceSync(g),m[f]=p);d.adoptedStyleSheets=d.adoptedStyleSheets.concat(p)}else k=m.createElement("style"),k.setAttribute("data-name",f),k.textContent=g,d.appendChild(k)}d=b.win.document.createElement("slot");d.setAttribute("name","i-amphtml-svc");b.h.appendChild(d)}else d=b.win.document.createElement("i-amphtml-c"),b.h=d,b.applyFillContent(d),a.detached||b.element.appendChild(d);d=wb(a,b.element,b.j);a=U(ab,Object.assign({},b.A),U(a.Component,
d));Ha(a,b.h);if(a=b.w)a.resolve(),b.w=null}};b.w=null;b.j=null;b.C=!0;b.observer=null;return b}fa(X,AMP.BaseElement);r=X.prototype;r.init=function(){};
r.buildCallback=function(){var a=this,b=this.constructor;this.observer=new MutationObserver(this.F.bind(this));this.observer.observe(this.element,Object.assign({},{attributes:!0},b.children?tb:null,b.passthrough||b.passthroughNonEmpty?ub:null));this.j=this.init()||null;Y(this);this.element.addEventListener("i-amphtml-context-changed",function(b){b.stopPropagation();Y(a)});this.element.addEventListener("i-amphtml-unmounted",function(b){b.stopPropagation();a.C=!1;a.h&&(b=U(Xa,null),Ha(b,a.h))})};
r.layoutCallback=function(){var a=this.w||(this.w=new $a);this.A.renderable=!0;this.A.playable=!0;Y(this);return a.promise};r.unlayoutCallback=function(){return!1};r.mutatedAttributesCallback=function(){this.h&&Y(this)};r.mutateProps=function(a){this.j=Object.assign({},this.j,a);Y(this)};
r.F=function(a){var b=this.constructor;a.some(function(a){a:{var c=a.type;if("attributes"==c){c=b.props;for(var g in c)if(a.attributeName==c[g].attr){a=!0;break a}a=!1}else a="childList"==c?xb(a.addedNodes)||xb(a.removedNodes):!1}return a})&&Y(this)};function Y(a){a.B||(a.B=!0,a.mutateElement(a.D))}r.getProp=function(a,b){return na.call(this.j,a)?this.j[a]:b};X.Component=function(){};X.layoutSizeDefined=!1;X.className="";X.passthrough=!1;X.passthroughNonEmpty=!1;X.shadowCss=null;X.detached=!1;
X.props={};X.children=null;var yb=U(hb,null),zb=U(hb,null);
function wb(a,b,c){var d=Object.assign({},c),g=a.className,f=a.layoutSizeDefined,m=a.props,k=a.passthrough,p=a.passthroughNonEmpty,h=a.children;g&&(d.className=g);f&&(d.style=vb,d.containSize=!0);for(var e in m){var n=m[e];a="boolean"==n.type?b.hasAttribute(n.attr):b.getAttribute(n.attr);null==a?void 0!==n.default&&(d[e]=n.default):(a="number"==n.type?parseFloat(a):"Element"==n.type?{current:b.getRootNode().getElementById(a)}:a,d[e]=a)}if(k)d.children=[yb];else if(p)d.children=b.getRealChildNodes().every(function(a){return 3===
a.nodeType&&0===a.nodeValue.trim().length})?null:[zb];else if(h)for(e=[],d.children=e,b=b.getRealChildNodes(),a=0;a<b.length;a++){var l=b[a],q=Ab(l,h);if(q){var v=q;q=v.name;var x=void 0===v.props?{}:v.props;v.single?d[q]=gb(l,l.getAttribute("slot")||"i-amphtml-"+q,x):(v="children"==q?e:d[q]||(d[q]=[]),v.push(gb(l,l.getAttribute("slot")||"i-amphtml-"+q+"-"+v.length,x)))}}return d}function Ab(a,b){for(var c in b){var d=b[c];if(bb(a,"string"==typeof d?d:d.selector))return d}return null}
function xb(a){for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType){var d=c.tagName;if((9>d.length?0:0==d.lastIndexOf("I-AMPHTML",0))||"i-amphtml-svc"==c.getAttribute("slot"))continue;return!0}if(3==c.nodeType)return!0}return!1};var Bb={textDecoration:"none",cursor:"pointer",position:"relative"};var Cb=U("path",{fill:"currentColor",d:"M211.9 197.4h-36.7v59.9h36.7v175.8h70.5V256.5h49.2l5.2-59.1h-54.4v-33.7c0-13.9 2.8-19.5 16.3-19.5h38.2V82.9h-48.8c-52.5 0-76.1 23.1-76.1 67.3-.1 38.6-.1 47.2-.1 47.2z"}),Db=U("path",{fill:"currentColor",d:"M266.6 76.5c-100.2 0-150.7 71.8-150.7 131.7 0 36.3 13.7 68.5 43.2 80.6 4.8 2 9.2.1 10.6-5.3 1-3.7 3.3-13 4.3-16.9 1.4-5.3.9-7.1-3-11.8-8.5-10-13.9-23-13.9-41.3 0-53.3 39.9-101 103.8-101 56.6 0 87.7 34.6 87.7 80.8 0 60.8-26.9 112.1-66.8 112.1-22.1 0-38.6-18.2-33.3-40.6 6.3-26.7 18.6-55.5 18.6-74.8 0-17.3-9.3-31.7-28.4-31.7-22.5 0-40.7 23.3-40.7 54.6 0 19.9 6.7 33.4 6.7 33.4s-23.1 97.8-27.1 114.9c-8.1 34.1-1.2 75.9-.6 80.1.3 2.5 3.6 3.1 5 1.2 2.1-2.7 28.9-35.9 38.1-69 2.6-9.4 14.8-58 14.8-58 7.3 14 28.7 26.3 51.5 26.3 67.8 0 113.8-61.8 113.8-144.5-.1-62.6-53.1-120.8-133.6-120.8z"}),
Eb=U("path",{fill:"currentColor",d:"M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z"}),Fb=U("path",{fill:"currentColor",d:"M101.3 141.6v228.9h309.5V141.6H101.3zm274.4 26.2L256 259.3l-119.6-91.5h239.3zm-248.1 26.3l64.1 49.1-64.1 64.1V194.1zm.2 150.1l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7H127.8zm256.6-36.4L320 243.4l64.4-49.3v113.7z"}),
Gb=U("path",{fill:"currentColor",d:"M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36-12.6 7.5-26.5 12.9-41.3 15.8C357.6 146 340.7 138 322 138c-42 0-72.9 39.2-63.4 79.9-54.1-2.7-102.1-28.6-134.2-68-17 29.2-8.8 67.5 20.1 86.9-10.7-.3-20.7-3.3-29.5-8.1-.7 30.2 20.9 58.4 52.2 64.6-9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2-27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6 12.9-9.1 23.9-20.5 32.6-33.6z"}),Hb=U("path",{fill:"currentColor",
d:"M210.8 80.3c-2.3 18.3-6.4 33.4-12.4 45.2-6 11.9-13.9 22-23.9 30.5-9.9 8.5-21.8 14.9-35.7 19.5v50.6h38.9v124.5c0 16.2 1.7 28.6 5.1 37.1 3.4 8.5 9.5 16.6 18.3 24.2 8.8 7.6 19.4 13.4 31.9 17.5s26.8 6.1 43 6.1c14.3 0 27.6-1.4 39.9-4.3 12.3-2.9 26-7.9 41.2-15v-55.9c-17.8 11.7-35.7 17.5-53.7 17.5-10.1 0-19.1-2.4-27-7.1-5.9-3.5-10-8.2-12.2-14-2.2-5.8-3.3-19.1-3.3-39.7v-91.1h84.6v-55.8h-84.4v-90h-50.3z"}),Ib=U("path",{fill:"currentColor",d:"M35.4 10.4C32 6.9 27.3 5 22.5 5 12.3 5 4.1 13.3 4.2 23.4c0 3.2.9 6.3 2.4 9.1L4 42l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM22.5 38.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L9.9 32l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9 7.2-4.4 16.5-2.3 20.9 4.9 4.4 7.2 2.3 16.5-4.9 20.9-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"}),
Jb=U("path",{fill:"currentColor",d:"M443.2 233.29c0-84.14-84.35-152.6-188-152.6s-188 68.46-188 152.6c0 75.43 66.9 138.61 157.26 150.55 6.13 1.32 14.46 4 16.57 9.27 1.89 4.76 1.24 12.2.61 17 0 0-2.21 13.26-2.69 16.09-.82 4.75-3.78 18.6 16.29 10.14s108.21-63.76 147.66-109.16c27.25-29.89 40.3-60.18 40.3-93.89zm-254.38 44.92a3.67 3.67 0 01-3.66 3.67h-52.69a3.6 3.6 0 01-2.53-1l-.06-.05v-.05a3.65 3.65 0 01-1-2.53v-81.96a3.66 3.66 0 013.66-3.66h13.19a3.66 3.66 0 013.66 3.66v65.07h35.84a3.66 3.66 0 013.66 3.66zm31.8 0a3.65 3.65 0 01-3.66 3.65h-13.2a3.65 3.65 0 01-3.66-3.65v-81.92a3.66 3.66 0 013.66-3.66H217a3.66 3.66 0 013.66 3.66zm90.78 0a3.65 3.65 0 01-3.66 3.65h-13.19a3.67 3.67 0 01-.94-.12h-.05l-.25-.08h-.11l-.18-.08-.17-.08-.11-.06-.22-.14a3.45 3.45 0 01-.93-.9L254 229.56v48.66a3.66 3.66 0 01-3.67 3.65H237.1a3.65 3.65 0 01-3.66-3.65v-81.93a3.66 3.66 0 013.66-3.66h13.86l.21.05h.13l.21.07h.12a1.31 1.31 0 01.21.08l.12.06.19.11a.41.41 0 01.11.07l.19.13.1.07.19.16.07.07a2.28 2.28 0 01.22.22 3.58 3.58 0 01.28.37L290.89 245v-48.71a3.66 3.66 0 013.66-3.66h13.19a3.66 3.66 0 013.66 3.66zm72.83-68.74a3.66 3.66 0 01-3.65 3.67h-35.84V227h35.84a3.66 3.66 0 013.65 3.67v13.19a3.65 3.65 0 01-3.65 3.66h-35.84v13.85h35.84a3.65 3.65 0 013.65 3.66v13.19a3.66 3.66 0 01-3.65 3.67h-52.7a3.66 3.66 0 01-2.53-1l-.05-.05a.12.12 0 01-.05-.05 3.65 3.65 0 01-1-2.53V196.3a3.6 3.6 0 011-2.52l.06-.07a3.63 3.63 0 012.54-1h52.7a3.66 3.66 0 013.65 3.67z",
"data-name":"\u30ec\u30a4\u30e4\u30fc 1"}),Kb=U("path",{fill:"currentColor",d:"M70 75v290h60v90l150-90h166v-290h-376zm30 30h316v230h-136l-120 72v-72h-60v-246z"}),Lb=U("path",{fill:"currentColor",d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"});
function Mb(a){switch(a.type){case "FACEBOOK":return U("svg",Object.assign({},a,{viewBox:"0 0 512 512"}),Cb);case "PINTEREST":return U("svg",Object.assign({},a,{viewBox:"0 0 512 512"}),Db);case "LINKEDIN":return U("svg",Object.assign({},a,{viewBox:"0 0 512 512"}),Eb);case "EMAIL":return U("svg",Object.assign({},a,{viewBox:"0 0 512 512"}),Fb);case "TWITTER":return U("svg",Object.assign({},a,{viewBox:"0 0 512 512"}),Gb);case "TUMBLR":return U("svg",Object.assign({},a,{viewBox:"0 0 512 512"}),Hb);case "WHATSAPP":return U("svg",
Object.assign({},a,{viewBox:"0 0 46 46"}),Ib);case "LINE":return U("svg",Object.assign({},a,{viewBox:"0 0 512 512"}),Jb);case "SMS":return U("svg",Object.assign({},a,{viewBox:"0 0 512 512"}),Kb);case "SYSTEM":return U("svg",Object.assign({},a,{viewBox:"0 0 24 24"}),Lb);default:return U("svg",Object.assign({},a))}};var Nb={twitter:{shareEndpoint:"https://twitter.com/intent/tweet",defaultParams:F({text:"TITLE",url:"CANONICAL_URL"}),defaultColor:"ffffff",defaultBackgroundColor:"1da1f2"},facebook:{shareEndpoint:"https://www.facebook.com/dialog/share",defaultParams:F({href:"CANONICAL_URL"}),defaultColor:"ffffff",defaultBackgroundColor:"32529f"},pinterest:{shareEndpoint:"https://www.pinterest.com/pin/create/button/",defaultParams:F({url:"CANONICAL_URL",description:"TITLE"}),defaultColor:"ffffff",defaultBackgroundColor:"e60023"},
linkedin:{shareEndpoint:"https://www.linkedin.com/shareArticle",defaultParams:F({url:"CANONICAL_URL",mini:"true"}),defaultColor:"ffffff",defaultBackgroundColor:"0077b5"},email:{shareEndpoint:"mailto:RECIPIENT",defaultParams:F({subject:"TITLE",body:"CANONICAL_URL",recipient:""}),defaultColor:"ffffff",defaultBackgroundColor:"000000",bindings:["recipient"]},tumblr:{shareEndpoint:"https://www.tumblr.com/share/link",defaultParams:F({name:"TITLE",url:"CANONICAL_URL"}),defaultColor:"ffffff",defaultBackgroundColor:"3c5a77"},
whatsapp:{shareEndpoint:"https://api.whatsapp.com/send",defaultParams:F({text:"TITLE - CANONICAL_URL"}),defaultColor:"ffffff",defaultBackgroundColor:"25d366"},line:{shareEndpoint:"https://social-plugins.line.me/lineit/share",defaultParams:F({text:"TITLE",url:"CANONICAL_URL"}),defaultColor:"ffffff",defaultBackgroundColor:"52b448"},sms:{shareEndpoint:"sms:",defaultParams:F({body:"TITLE - CANONICAL_URL"}),defaultColor:"ffffff",defaultBackgroundColor:"ca2b63"},system:{shareEndpoint:"navigator-share:",
defaultParams:F({text:"TITLE",url:"CANONICAL_URL"}),defaultColor:"ffffff",defaultBackgroundColor:"000000"}};function Ob(a,b,c,d,g){if(b)return b;var f=Nb[a]||{},m=F({color:c||f.defaultColor,backgroundColor:d||f.defaultBackgroundColor});return U(Mb,{style:Object.assign({},m,Bb,g),type:a.toUpperCase()})}
function Pb(a,b,c,d,g,f){if(void 0===a)throw Error("The type attribute is required. SocialShare");var m=Nb[a]||{},k=b||m.shareEndpoint;if(void 0===k)throw Error("An endpoint is required if not using a pre-configured type. SocialShare");"email"!==a||b||(k="mailto:"+(f&&f.recipient||""));return{finalEndpoint:jb(k,kb(f)),checkedWidth:d||60,checkedHeight:g||44,checkedTarget:c||"_blank"}}
function Qb(a,b){var c=a.split(":",1)[0];"navigator-share"===c?window&&window.navigator&&window.navigator.share?(a=y(Rb(a)),window.navigator.share(a).catch(function(a){console.warn(a.message+". SocialShare")})):console.warn("Could not complete system share.  Navigator unavailable. SocialShare"):"sms"===c||"mailto"===c?db(window,"sms"===c?a.replace("?","?&"):a,window&&window.navigator&&window.navigator.userAgent&&0<=window.navigator.userAgent.search(/iPhone|iPad|iPod/i)?"_top":b):db(window,a,b)}
function Rb(a){var b=a.indexOf("?"),c=a.indexOf("#");b=-1===b?a.length:b;c=-1===c?a.length:c;return a.slice(b,c)};function Sb(a,b){var c=a.isWebviewEmbedded()&&b.isChrome();return"share"in navigator&&!c}function Z(){return X.apply(this,arguments)||this}fa(Z,X);
Z.prototype.init=function(){var a=qb(this.element);a=rb(a);var b=W(a,"viewer");var c=sb(window,"platform");a=ma(this.element.getAttribute("type"),"The type attribute is required. %s",this.element);a:{if("system"===a){if(!Sb(b,c)){b=void 0;break a}}else if(Sb(b,c)&&window.document.querySelector("amp-social-share[type=system][data-mode=replace]")){b=void 0;break a}b=Nb[a]||{}}if(b){this.element.classList.add("amp-social-share-"+a);Tb(this,b);var d="responsive"===this.element.getAttribute("layout")&&
"100%";return F({width:d||this.element.getAttribute("width"),height:d||this.element.getAttribute("height"),color:"currentColor",background:"inherit"})}a=this.element;b=!1;void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")};Z.prototype.isLayoutSupported=function(){ma(!!lb(this.win)["amp-social-share-bento"],"expected amp-social-share-bento experiment to be enabled");return!0};
function Tb(a,b){var c=a.element.getAttribute("data-share-endpoint"),d=c||b.shareEndpoint||"",g=b.defaultParams||{};Object.assign(g,cb(a.element));var f=jb(d,kb(g)),m=ob(a.element,"url-replace"),k=b.bindings,p={};k&&k.forEach(function(a){var b=a.toUpperCase();p[b]=g[a]});m.expandUrlAsync(f,p).then(function(b){var d=ob(a.element,"url").parse(b).search,f=a.element.getAttribute("data-target")||"_blank";c?a.mutateProps(F({endpoint:b,target:f})):a.mutateProps(F({params:y(d),target:f}))})}
Z.Component=function(a){var b=Object.assign({},a),c=a.type,d=a.endpoint,g=a.params,f=a.target,m=a.width,k=a.height,p=a.color,h=a.background,e=void 0===a.tabIndex?0:a.tabIndex,n=a.style;a=a.children;var l=(delete b.type,delete b.endpoint,delete b.params,delete b.target,delete b.width,delete b.height,delete b.color,delete b.background,delete b.tabIndex,delete b.style,delete b.children,b);fb();b=Pb(c,d,f,m,k,g);var q=b.finalEndpoint,v=b.checkedTarget;b=F({width:b.checkedWidth,height:b.checkedHeight});
return U("div",Object.assign({},l,{role:"button",tabindex:e,onKeyDown:function(a){var b=a.key;if(" "==b||"Enter"==b)a.preventDefault(),Qb(q,v)},onClick:function(){return Qb(q,v)},style:Object.assign({},b,n)}),Ob(c,a,p,h,b))};Z.passthroughNonEmpty=!0;Z.props={tabIndex:{attr:"tabindex"},type:{attr:"type"}};(function(a){a.registerElement("amp-social-share",Z,".amp-social-share-twitter{color:#fff;background-color:#1da1f2}.amp-social-share-facebook{color:#fff;background-color:#32529f}.amp-social-share-pinterest{color:#fff;background-color:#e60023}.amp-social-share-linkedin{color:#fff;background-color:#0077b5}.amp-social-share-tumblr{color:#fff;background-color:#3c5a77}.amp-social-share-email{color:#fff;background-color:#000}.amp-social-share-whatsapp{color:#fff;background-color:#25d366}.amp-social-share-line{color:#fff;background-color:#52b448}.amp-social-share-sms{color:#fff;background-color:#ca2b63}.amp-social-share-system{color:#fff;background-color:#000}\n/*# sourceURL=/extensions/amp-social-share/1.0/amp-social-share.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-social-share-1.0.js.map