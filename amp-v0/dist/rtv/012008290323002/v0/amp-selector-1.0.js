(self.AMP=self.AMP||[]).push({n:"amp-selector",v:"2008290323002",f:(function(AMP,_){
'use strict';var q,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var w;
if("function"==typeof Object.setPrototypeOf)w=Object.setPrototypeOf;else{var x;a:{var ca={a:!0},da={};try{da.__proto__=ca;x=da.a;break a}catch(a){}x=!1}w=x?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=w;
function fa(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(ea)ea(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.G=b.prototype}var y,B,ha,ia,ja,ka,C={},E=[],la=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function F(a,b){for(var c in b)a[c]=b[c];return a}function ma(a){var b=a.parentNode;b&&b.removeChild(a)}
function na(a,b,c){var d,g=arguments,f={};for(d in b)"key"!==d&&"ref"!==d&&(f[d]=b[d]);if(3<arguments.length)for(c=[c],d=3;d<arguments.length;d++)c.push(g[d]);if(null!=c&&(f.children=c),"function"==typeof a&&null!=a.defaultProps)for(d in a.defaultProps)void 0===f[d]&&(f[d]=a.defaultProps[d]);return G(a,f,b&&b.key,b&&b.ref)}function G(a,b,c,d){a={type:a,props:b,key:c,ref:d,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return y.vnode&&y.vnode(a),a}
function H(a){return a.children}function I(a,b){this.props=a;this.context=b}function J(a,b){if(null==b)return a.__?J(a.__,a.__.__k.indexOf(a)+1):null;for(var c;b<a.__k.length;b++)if(null!=(c=a.__k[b])&&null!=c.__e)return c.__e;return"function"==typeof a.type?J(a):null}function oa(a){var b,c;if(null!=(a=a.__)&&null!=a.__c){a.__e=a.__c.base=null;for(b=0;b<a.__k.length;b++)if(null!=(c=a.__k[b])&&null!=c.__e){a.__e=a.__c.base=c.__e;break}return oa(a)}}
function K(a){(!a.__d&&(a.__d=!0)&&1===B.push(a)||ia!==y.debounceRendering)&&((ia=y.debounceRendering)||ha)(pa)}function pa(){var a,b,c,d,g,f,n;for(B.sort(function(a,b){return b.__v.__b-a.__v.__b});a=B.pop();)a.__d&&(c=void 0,d=void 0,f=(g=(b=a).__v).__e,(n=b.__P)&&(c=[],d=L(n,g,F({},g),b.__n,void 0!==n.ownerSVGElement,null,c,null==f?J(g):f),qa(c,g),d!=f&&oa(g)))}
function ra(a,b,c,d,g,f,n,l,k){var h,e,p,m,r,v,u,t=c&&c.__k||E,z=t.length;if(l==C&&(l=null!=f?f[0]:z?J(c,0):null),h=0,b.__k=M(b.__k,function(c){if(null!=c){if(c.__=b,c.__b=b.__b+1,null===(p=t[h])||p&&c.key==p.key&&c.type===p.type)t[h]=void 0;else for(e=0;e<z;e++){if((p=t[e])&&c.key==p.key&&c.type===p.type){t[e]=void 0;break}p=null}if(m=L(a,c,p=p||C,d,g,f,n,l,k),(e=c.ref)&&p.ref!=e&&(u||(u=[]),p.ref&&u.push(p.ref,null,c),u.push(e,c.__c||m,c)),null!=m){if(null==v&&(v=m),null!=c.__d)m=c.__d,c.__d=null;
else if(f==p||m!=l||null==m.parentNode){a:if(null==l||l.parentNode!==a)a.appendChild(m);else{r=l;for(e=0;(r=r.nextSibling)&&e<z;e+=2)if(r==m)break a;a.insertBefore(m,l)}"option"==b.type&&(a.value="")}l=m.nextSibling;"function"==typeof b.type&&(b.__d=m)}}return h++,c}),b.__e=v,null!=f&&"function"!=typeof b.type)for(h=f.length;h--;)null!=f[h]&&ma(f[h]);for(h=z;h--;)null!=t[h]&&sa(t[h],t[h]);if(u)for(h=0;h<u.length;h++)ta(u[h],u[++h],u[++h])}
function M(a,b,c){if(null==c&&(c=[]),null==a||"boolean"==typeof a)b&&c.push(b(null));else if(Array.isArray(a))for(var d=0;d<a.length;d++)M(a[d],b,c);else c.push(b?b("string"==typeof a||"number"==typeof a?G(null,a,null,null):null!=a.__e||null!=a.__c?G(a.type,a.props,a.key,null):a):a);return c}function ua(a,b,c){"-"===b[0]?a.setProperty(b,c):a[b]="number"==typeof c&&!1===la.test(b)?c+"px":null==c?"":c}
function va(a,b,c,d,g){var f,n,l,k;if(g?"className"===b&&(b="class"):"class"===b&&(b="className"),"key"!==b&&"children"!==b)if("style"===b)if(a=a.style,"string"==typeof c)a.cssText=c;else{if("string"==typeof d&&(a.cssText="",d=null),d)for(f in d)c&&f in c||ua(a,f,"");if(c)for(n in c)d&&c[n]===d[n]||ua(a,n,c[n])}else"o"===b[0]&&"n"===b[1]?(l=b!==(b=b.replace(/Capture$/,"")),k=b.toLowerCase(),b=(k in a?k:b).slice(2),c?(d||a.addEventListener(b,wa,l),(a.l||(a.l={}))[b]=c):a.removeEventListener(b,wa,l)):
"list"!==b&&"tagName"!==b&&"form"!==b&&"type"!==b&&!g&&b in a?a[b]=null==c?"":c:"function"!=typeof c&&"dangerouslySetInnerHTML"!==b&&(b!==(b=b.replace(/^xlink:?/,""))?null==c||!1===c?a.removeAttributeNS("http://www.w3.org/1999/xlink",b.toLowerCase()):a.setAttributeNS("http://www.w3.org/1999/xlink",b.toLowerCase(),c):null==c||!1===c?a.removeAttribute(b):a.setAttribute(b,c))}function wa(a){this.l[a.type](y.event?y.event(a):a)}
function L(a,b,c,d,g,f,n,l,k){var h,e,p,m,r,v,u,t,z,D,A=b.type;if(void 0!==b.constructor)return null;(h=y.__b)&&h(b);try{a:if("function"==typeof A){if(t=b.props,z=(h=A.contextType)&&d[h.__c],D=h?z?z.props.value:h.__:d,c.__c?u=(e=b.__c=c.__c).__=e.__E:("prototype"in A&&A.prototype.render?b.__c=e=new A(t,D):(b.__c=e=new I(t,D),e.constructor=A,e.render=xa),z&&z.sub(e),e.props=t,e.state||(e.state={}),e.context=D,e.__n=d,p=e.__d=!0,e.__h=[]),null==e.__s&&(e.__s=e.state),null!=A.getDerivedStateFromProps&&
(e.__s==e.state&&(e.__s=F({},e.__s)),F(e.__s,A.getDerivedStateFromProps(t,e.__s))),m=e.props,r=e.state,p)null==A.getDerivedStateFromProps&&null!=e.componentWillMount&&e.componentWillMount(),null!=e.componentDidMount&&e.__h.push(e.componentDidMount);else{if(null==A.getDerivedStateFromProps&&t!==m&&null!=e.componentWillReceiveProps&&e.componentWillReceiveProps(t,D),!e.__e&&null!=e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(t,e.__s,D)){e.props=t;e.state=e.__s;e.__d=!1;e.__v=b;b.__e=c.__e;b.__k=
c.__k;e.__h.length&&n.push(e);for(h=0;h<b.__k.length;h++)b.__k[h]&&(b.__k[h].__=b);break a}null!=e.componentWillUpdate&&e.componentWillUpdate(t,e.__s,D);null!=e.componentDidUpdate&&e.__h.push(function(){e.componentDidUpdate(m,r,v)})}e.context=D;e.props=t;e.state=e.__s;(h=y.__r)&&h(b);e.__d=!1;e.__v=b;e.__P=a;h=e.render(e.props,e.state,e.context);b.__k=M(null!=h&&h.type==H&&null==h.key?h.props.children:h);null!=e.getChildContext&&(d=F(F({},d),e.getChildContext()));p||null==e.getSnapshotBeforeUpdate||
(v=e.getSnapshotBeforeUpdate(m,r));ra(a,b,c,d,g,f,n,l,k);e.base=b.__e;e.__h.length&&n.push(e);u&&(e.__E=e.__=null);e.__e=null}else b.__e=ya(c.__e,b,c,d,g,f,n,k);(h=y.diffed)&&h(b)}catch(bb){y.__e(bb,b,c)}return b.__e}function qa(a,b){y.__c&&y.__c(b,a);a.some(function(b){try{a=b.__h,b.__h=[],a.some(function(a){a.call(b)})}catch(d){y.__e(d,b.__v)}})}
function ya(a,b,c,d,g,f,n,l){var k,h,e,p=c.props,m=b.props;if(g="svg"===b.type||g,null==a&&null!=f)for(k=0;k<f.length;k++)if(null!=(h=f[k])&&(null===b.type?3===h.nodeType:h.localName===b.type)){a=h;f[k]=null;break}if(null==a){if(null===b.type)return document.createTextNode(m);a=g?document.createElementNS("http://www.w3.org/2000/svg",b.type):document.createElement(b.type);f=null}if(null===b.type)null!=f&&(f[f.indexOf(a)]=null),p!==m&&a.data!=m&&(a.data=m);else if(b!==c){if(null!=f&&(f=E.slice.call(a.childNodes)),
h=(p=c.props||C).dangerouslySetInnerHTML,k=m.dangerouslySetInnerHTML,!l){if(p===C)for(p={},e=0;e<a.attributes.length;e++)p[a.attributes[e].name]=a.attributes[e].value;(k||h)&&(k&&h&&k.__html==h.__html||(a.innerHTML=k&&k.__html||""))}h=a;e=g;for(var r in p)r in m||va(h,r,null,p[r],e);for(r in m)l&&"function"!=typeof m[r]||"value"===r||"checked"===r||p[r]===m[r]||va(h,r,m[r],p[r],e);b.__k=b.props.children;k||ra(a,b,c,d,"foreignObject"!==b.type&&g,f,n,C,l);l||("value"in m&&void 0!==m.value&&m.value!==
a.value&&(a.value=null==m.value?"":m.value),"checked"in m&&void 0!==m.checked&&m.checked!==a.checked&&(a.checked=m.checked))}return a}function ta(a,b,c){try{"function"==typeof a?a(b):a.current=b}catch(d){y.__e(d,c)}}
function sa(a,b,c){var d,g;if(y.unmount&&y.unmount(a),(d=a.ref)&&(d.current&&d.current!==a.__e||ta(d,null,b)),c||"function"==typeof a.type||(c=null!=(g=a.__e)),a.__e=a.__d=null,null!=(d=a.__c)){if(d.componentWillUnmount)try{d.componentWillUnmount()}catch(f){y.__e(f,b)}d.base=d.__P=null}if(d=a.__k)for(a=0;a<d.length;a++)d[a]&&sa(d[a],b,c);null!=g&&ma(g)}function xa(a,b,c){return this.constructor(a,c)}
function za(a,b){var c;y.__&&y.__(a,b);var d=(c=void 0===ja)?null:b.__k;a=na(H,null,[a]);var g=[];L(b,b.__k=a,d||C,C,void 0!==b.ownerSVGElement,d?null:E.slice.call(b.childNodes),g,C,c);qa(g,a)}
function Aa(a){var b={},c={__c:"__cC"+ka++,__:a,Consumer:function(a,b){return a.children(b)},Provider:function(a){var d,f=this;return this.getChildContext||(d=[],this.getChildContext=function(){return b[c.__c]=f,b},this.shouldComponentUpdate=function(b){a.value!==b.value&&d.some(function(a){a.context=b.value;K(a)})},this.sub=function(a){d.push(a);var b=a.componentWillUnmount;a.componentWillUnmount=function(){d.splice(d.indexOf(a),1);b&&b.call(a)}}),a.children}};return c.Consumer.contextType=c,c}
y={__e:function(a,b){for(var c,d;b=b.__;)if((c=b.__c)&&!c.__)try{if(c.constructor&&null!=c.constructor.getDerivedStateFromError&&(d=!0,c.setState(c.constructor.getDerivedStateFromError(a))),null!=c.componentDidCatch&&(d=!0,c.componentDidCatch(a)),d)return K(c.__E=c)}catch(g){a=g}throw a;}};I.prototype.setState=function(a,b){var c=this.__s!==this.state?this.__s:this.__s=F({},this.state);"function"==typeof a&&(a=a(c,this.props));a&&F(c,a);null!=a&&this.__v&&(this.__e=!1,b&&this.__h.push(b),K(this))};
I.prototype.forceUpdate=function(a){this.__v&&(this.__e=!0,a&&this.__h.push(a),K(this))};I.prototype.render=H;B=[];ha="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout;ja=C;ka=0;var Ba,N,Ca,Da=[],Ea=y.__r,Fa=y.diffed,Ga=y.__c,Ha=y.unmount;function O(){var a=Ba++;y.__h&&y.__h(N);var b=N.__H||(N.__H={t:[],u:[]});return a>=b.t.length&&b.t.push({}),b.t[a]}function Ia(){return Ja(function(){return{current:null}})}function Ja(a){var b=[],c=O();return Ka(c.o,b)?(c.o=b,c.v=a,c.i=a()):c.i}function La(a){var b=N.context[a.__c];if(!b)return a.__;a=O();return null==a.i&&(a.i=!0,b.sub(N)),b.props.value}
function Ma(){Da.some(function(a){a.__P&&(a.__H.u.forEach(Na),a.__H.u.forEach(Oa),a.__H.u=[])});Da=[]}function Na(a){a.m&&a.m()}function Oa(a){var b=a.i();"function"==typeof b&&(a.m=b)}function Ka(a,b){return!a||b.some(function(b,d){return b!==a[d]})}y.__r=function(a){Ea&&Ea(a);Ba=0;(N=a.__c).__H&&(N.__H.u.forEach(Na),N.__H.u.forEach(Oa),N.__H.u=[])};
y.diffed=function(a){Fa&&Fa(a);if(a=a.__c){var b=a.__H;b&&b.u.length&&(1!==Da.push(a)&&Ca===y.requestAnimationFrame||((Ca=y.requestAnimationFrame)||function(a){function b(){clearTimeout(f);cancelAnimationFrame(c);setTimeout(a)}var c,f=setTimeout(b,100);"undefined"!=typeof window&&(c=requestAnimationFrame(b))})(Ma))}};y.__c=function(a,b){b.some(function(a){a.__h.forEach(Na);a.__h=a.__h.filter(function(a){return!a.i||Oa(a)})});Ga&&Ga(a,b)};
y.unmount=function(a){Ha&&Ha(a);(a=a.__c)&&(a=a.__H)&&a.t.forEach(function(a){return a.m&&a.m()})};function P(a,b,c){return na.apply(void 0,arguments)}function Pa(a){return a.children}function Qa(a,b){var c=O();Ka(c.o,b)&&(c.i=a,c.o=b,N.__H.u.push(c))}function Q(a,b){var c=O();Ka(c.o,b)&&(c.i=a,c.o=b,N.__h.push(c))};function Ra(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var Sa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function R(a){return a?Array.prototype.slice.call(a):[]};var S=self.AMP_CONFIG||{},Ta=("string"==typeof S.cdnProxyRegex?new RegExp(S.cdnProxyRegex):S.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function Ua(a){if(self.document&&self.document.head&&(!self.location||!Ta.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}S.cdnUrl||Ua("runtime-host");S.geoApiUrl||Ua("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var T=self.__AMP_LOG;function U(a,b){if(!T.user)throw Error("failed to call initLogConstructor");T.user.assert(a,b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var Va={cursor:"pointer"},Wa={cursor:"auto",outline:"solid 1px rgba(0, 0, 0, 0.7)"},Xa={cursor:"auto",outline:"none"},Ya={cursor:"pointer",outline:"solid 1px rgba(0, 0, 0, 0.7)"};var Za=Aa({});
function $a(a){var b=Object.assign({},a),c=void 0===a.as?"div":a.as,d=a.disabled,g=a.onClick,f=a.option,n=void 0===a.role?"option":a.role,l=a.style;a=(delete b.as,delete b.disabled,delete b.onClick,delete b.option,delete b.role,delete b.style,b);b=La(Za);var k=b.selectOption,h=b.disabled,e=b.multiple,p=b.selected.includes(f),m=Object.assign({},a,{disabled:d,"aria-disabled":d,onClick:function(a){h||d||(g&&g(a),k(f))},option:f,role:n,selected:p,style:Object.assign({},d||h?Xa:p?e?Ya:Wa:Va,l)});return P(c,
Object.assign({},m))};function ab(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};var cb;function db(){return cb||(cb=Aa({renderable:!0,playable:!0}))}function eb(a){var b=db(),c=La(b),d=Object.assign({},a,{renderable:c.renderable&&a.renderable,playable:c.playable&&a.playable,children:void 0});return P(b.Provider,{children:a.children,value:d})};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var fb=Object.prototype.hasOwnProperty;function V(a){return a||{}}function gb(a,b){if(null==a||null==b)return a===b;for(var c in a)if(a[c]!==b[c])return!1;for(var d in b)if(b[d]!==a[d])return!1;return!0};function hb(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function ib(a){return a.closest?a.closest("[option]"):hb(a,function(a){return jb(a,"[option]")})}function jb(a,b){var c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return c?c.call(a,b):!1}function W(a,b,c){var d=a.hasAttribute(b),g=void 0!==c?c:!d;g!==d&&(g?a.setAttribute(b,""):a.removeAttribute(b))};function kb(a,b,c){a.setAttribute("slot",b);return P(lb,Object.assign({},c||{},{name:b}))}
function lb(a){var b=La(db()),c=Ia(),d=Object.assign({},a,{ref:c});Qa(function(){var d=c.current,f=a.assignedElements||R(d.assignedElements());d.__assignedElements=f;d.setAttribute("i-amphtml-context",JSON.stringify(b));f.forEach(function(a){a.__assignedSlot=d;a.setAttribute("i-amphtml-context",JSON.stringify(b))});a.retarget&&f.forEach(function(a){for(var b=d.attributes,c=0,e=b.length;c<e;c++){var f=b[c],g=f.name;f=f.value;"name"!=g&&"class"!=g&&"style"!=g&&"i-amphtml-context"!=g&&a.setAttribute(g,
f)}a.disabled=d.hasAttribute("disabled");a.hidden=d.hasAttribute("hidden");W(a,"selected",d.hasAttribute("selected"));W(a,"expanded",d.hasAttribute("expanded"));a["i-amphtml-event-distr"]||(a["i-amphtml-event-distr"]=!0,a.addEventListener("click",function(a){a.stopPropagation();a.preventDefault();a=new Event("click",{bubbles:!0,cancelable:!0,composed:!1});d.dispatchEvent(a)}))});if(!gb(d["i-amphtml-context"],b)){d["i-amphtml-context"]=b;var n=[];f.forEach(function(a){a["i-amphtml-context"]=b;n.push.apply(n,
mb(a))});n.forEach(function(a){var c=new Event("i-amphtml-context-changed",{bubbles:!1,cancelable:!0,composed:!0});c.data=b;a.dispatchEvent(c)})}a.postRender&&a.postRender()});Qa(function(){var b=c.current;return function(){var c=[];(a.assignedElements||R(b.assignedElements())).forEach(function(a){c.push.apply(c,mb(a))});c.forEach(function(a){var b=new Event("i-amphtml-unmounted",{bubbles:!1,cancelable:!0,composed:!0});a.dispatchEvent(b)})}},[]);return P("slot",Object.assign({},d))}
function mb(a){var b=R(a.querySelectorAll(".i-amphtml-element"));jb(a,".i-amphtml-element")&&b.unshift(a);return b};V({c:!0,v:!0,a:!0,ad:!0});function nb(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var g=a.AMP_CONFIG["allow-doc-opt-in"],f=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
if(f){var n=f.getAttribute("content").split(",");for(c=0;c<n.length;c++)-1!=g.indexOf(n[c])&&(b[n[c]]=!0)}}Object.assign(b,ob(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];var l=a.location.originalHash||a.location.hash;a=Object.create(null);if(l)for(var k;k=Sa.exec(l);){var h=Ra(k[1],k[1]);k=k[2]?Ra(k[2].replace(/\+/g," "),k[2]):"";a[h]=k}for(l=0;l<c.length;l++)h=a["e-"+c[l]],"1"==h&&(b[c[l]]=!0),
"0"==h&&(b[c[l]]=!1)}return b}function ob(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(g){if(T.dev)a=T.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function pb(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c,g=!!nb(c)["ampdoc-fie"];d&&!g?a=qb(b,"action")?rb(b,"action"):null:(a=sb(a),a=sb(a),a=a.isSingleDoc()?a.win:a,a=qb(a,"action")?rb(a,"action"):null);return a}function sb(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=rb(b,"ampdoc").getAmpDoc(a)}return a}
function rb(a,b){qb(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function qb(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 Use of this source code is governed by a BSD-style
 license that can be found in the LICENSE file or at
 https://developers.google.com/open-source/licenses/bsd */
var tb={childList:!0},ub={childList:!0,characterData:!0},vb={position:"absolute",width:"100%",height:"100%"};
function X(a){var b=AMP.BaseElement.call(this,a)||this;b.h=null;b.B=!1;b.A={renderable:!1,playable:!1,notify:function(){return b.mutateElement(function(){})}};b.D=function(){b.B=!1;if(b.C){var a=b.constructor;if(!b.h)if(a.children||a.passthrough||a.passthroughNonEmpty){var d=b.element.attachShadow({mode:"open"});b.h=d;var g=a.shadowCss;if(g){var f=b.element.tagName,n=d.ownerDocument,l=n.defaultView;if(void 0!==d.adoptedStyleSheets&&void 0!==l.CSSStyleSheet.prototype.replaceSync){n=l.__AMP_SHADOW_CSS||
(l.__AMP_SHADOW_CSS={});var k=n[f];k||(k=new l.CSSStyleSheet,k.replaceSync(g),n[f]=k);d.adoptedStyleSheets=d.adoptedStyleSheets.concat(k)}else l=n.createElement("style"),l.setAttribute("data-name",f),l.textContent=g,d.appendChild(l)}d=b.win.document.createElement("slot");d.setAttribute("name","i-amphtml-svc");b.h.appendChild(d)}else d=b.win.document.createElement("i-amphtml-c"),b.h=d,b.applyFillContent(d),a.detached||b.element.appendChild(d);d=wb(a,b.element,b.j);a=P(eb,Object.assign({},b.A),P(a.Component,
d));za(a,b.h);if(a=b.w)a.resolve(),b.w=null}};b.w=null;b.j=null;b.C=!0;b.observer=null;return b}fa(X,AMP.BaseElement);q=X.prototype;q.init=function(){};
q.buildCallback=function(){var a=this,b=this.constructor;this.observer=new MutationObserver(this.F.bind(this));this.observer.observe(this.element,Object.assign({},{attributes:!0},b.children?tb:null,b.passthrough||b.passthroughNonEmpty?ub:null));this.j=this.init()||null;Y(this);this.element.addEventListener("i-amphtml-context-changed",function(b){b.stopPropagation();Y(a)});this.element.addEventListener("i-amphtml-unmounted",function(b){b.stopPropagation();a.C=!1;a.h&&(b=P(Pa,null),za(b,a.h))})};
q.layoutCallback=function(){var a=this.w||(this.w=new ab);this.A.renderable=!0;this.A.playable=!0;Y(this);return a.promise};q.unlayoutCallback=function(){return!1};q.mutatedAttributesCallback=function(){this.h&&Y(this)};q.mutateProps=function(a){this.j=Object.assign({},this.j,a);Y(this)};
q.F=function(a){var b=this.constructor;a.some(function(a){a:{var c=a.type;if("attributes"==c){c=b.props;for(var g in c)if(a.attributeName==c[g].attr){a=!0;break a}a=!1}else a="childList"==c?xb(a.addedNodes)||xb(a.removedNodes):!1}return a})&&Y(this)};function Y(a){a.B||(a.B=!0,a.mutateElement(a.D))}q.getProp=function(a,b){return fb.call(this.j,a)?this.j[a]:b};X.Component=function(){};X.layoutSizeDefined=!1;X.className="";X.passthrough=!1;X.passthroughNonEmpty=!1;X.shadowCss=null;X.detached=!1;
X.props={};X.children=null;var yb=P(lb,null),zb=P(lb,null);
function wb(a,b,c){var d=Object.assign({},c),g=a.className,f=a.layoutSizeDefined,n=a.props,l=a.passthrough,k=a.passthroughNonEmpty,h=a.children;g&&(d.className=g);f&&(d.style=vb,d.containSize=!0);for(var e in n){var p=n[e];a="boolean"==p.type?b.hasAttribute(p.attr):b.getAttribute(p.attr);null==a?void 0!==p.default&&(d[e]=p.default):(a="number"==p.type?parseFloat(a):"Element"==p.type?{current:b.getRootNode().getElementById(a)}:a,d[e]=a)}if(l)d.children=[yb];else if(k)d.children=b.getRealChildNodes().every(function(a){return 3===
a.nodeType&&0===a.nodeValue.trim().length})?null:[zb];else if(h)for(e=[],d.children=e,b=b.getRealChildNodes(),a=0;a<b.length;a++){var m=b[a],r=Ab(m,h);if(r){var v=r;r=v.name;var u=void 0===v.props?{}:v.props;v.single?d[r]=kb(m,m.getAttribute("slot")||"i-amphtml-"+r,u):(v="children"==r?e:d[r]||(d[r]=[]),v.push(kb(m,m.getAttribute("slot")||"i-amphtml-"+r+"-"+v.length,u)))}}return d}function Ab(a,b){for(var c in b){var d=b[c];if(jb(a,"string"==typeof d?d:d.selector))return d}return null}
function xb(a){for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType){var d=c.tagName;if((9>d.length?0:0==d.lastIndexOf("I-AMPHTML",0))||"i-amphtml-svc"==c.getAttribute("slot"))continue;return!0}if(3==c.nodeType)return!0}return!1};function Z(){return X.apply(this,arguments)||this}fa(Z,X);
Z.prototype.init=function(){function a(a,h,e){var f=b.win;h=V({targetOption:h,selectedOptions:a});var k={detail:h};Object.assign(k,void 0);"function"==typeof f.CustomEvent?f=new f.CustomEvent("amp-selector.select",k):(f=f.document.createEvent("CustomEvent"),f.initCustomEvent("amp-selector.select",!!k.bubbles,!!k.cancelable,h));d.trigger(c,"select",f,e);g=!0;b.mutateProps(V({value:a}))}var b=this,c=this.element,d=pb(this.element),g=!1;this.registerAction("clear",function(){g=!0;b.mutateProps(V({value:[]}))});
this.registerAction("selectUp",function(c){var d=c.args,e=c.trust;d=d&&void 0!==d.delta?-d.delta:-1;var f=b.getProp("value",[]);d=Bb(d,f,l);a(d.value,d.option,e)});this.registerAction("selectDown",function(c){var d=c.args;c=c.trust;d=d&&void 0!==d.delta?d.delta:1;var e=b.getProp("value",[]);d=Bb(d,e,l);a(d.value,d.option,c)});this.registerAction("toggle",function(c){var d=c.trust;c=c.args;var e=c.index,f=c.value;c=b.getProp("value",[]);a:{U(e,"'index' must be specified");U(0<=e,"'index' must be greater than 0");
U(e<l.length,"'index' must be less than the length of options in the <amp-selector>");e=l[e];var g=c.indexOf(e);if(-1===g){if(0==f){c=void 0;break a}c.push(e)}else{if(1==f){c=void 0;break a}c.splice(g,1)}c=V({value:c,option:e})}var k=c;k&&a(k.value,k.option,d)},1);var f=new MutationObserver(function(){g?g=!1:b.mutateProps(Cb(c,f))});f.observe(c,{attributeFilter:["option","selected","disabled"],subtree:!0});var n=Cb(c,f),l=n.options;return V({shimDomElement:c,children:n.children,value:n.value,onChange:function(b){a(b.value,
b.option,3)}})};Z.prototype.isLayoutSupported=function(){U(!!nb(this.win)["amp-selector-bento"],"expected amp-selector-bento experiment to be enabled");return!0};
function Cb(a,b){var c=[],d=[],g=[];R(a.querySelectorAll("[option]")).filter(function(a){return!ib(a.parentElement)}).forEach(function(a){var f=a.getAttribute("option"),l=a.hasAttribute("selected"),k=a.hasAttribute("disabled");a={as:Db,option:f,disabled:k,role:a.getAttribute("role")||"option",shimDomElement:a,postRender:function(){b.takeRecords()},selected:l};l&&f&&g.push(f);var h=P($a,Object.assign({},a));d.push(f);c.push(h)});return V({value:g,children:c,options:d})}
function Bb(a,b,c){var d=c.indexOf(b.shift());a=-1===d&&0>a?a:d+a;var g=c.length;c=c[0<a&&0<g?a%g:(a%g+g)%g];-1===b.indexOf(c)&&b.push(c);return{value:b,option:c}}var Eb=P("div",null);
function Db(a){var b=a.shimDomElement,c=a.onClick,d=a.selected,g=a.disabled,f=void 0===a.role?"option":a.role;Q(function(){if(c)return b.addEventListener("click",c),function(){b.removeEventListener("click",c)}},[b,c]);Q(function(){W(b,"selected",d)},[b,d]);Q(function(){W(b,"disabled",g);b.setAttribute("aria-disabled",!!g)},[b,g]);Q(function(){b.setAttribute("role",f)},[b,f]);return Eb}(function(a){a.registerElement("amp-selector",Z,"amp-selector [option]{cursor:pointer}amp-selector[multiple] [option][selected]{cursor:pointer;outline:1px solid rgba(0,0,0,0.7)}amp-selector [option][selected]{cursor:auto;outline:1px solid rgba(0,0,0,0.7)}amp-selector [disabled][option],amp-selector[disabled] [option],amp-selector[disabled] [selected],amp-selector [selected][disabled]{cursor:auto;outline:none}\n/*# sourceURL=/extensions/amp-selector/1.0/amp-selector.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-selector-1.0.js.map