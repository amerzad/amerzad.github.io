(self.AMP=self.AMP||[]).push({n:"amp-date-display",v:"2007102309000",f:(function(AMP,_){
var d="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function f(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var e=b[c];if(e&&e.Math==Math)return}(function(){throw Error("Cannot find global object");})()}f(this);"function"===typeof Symbol&&Symbol("x");var g;
if("function"==typeof Object.setPrototypeOf)g=Object.setPrototypeOf;else{var h;a:{var k={a:!0},l={};try{l.__proto__=k;h=l.a;break a}catch(a){}h=!1}g=h?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var m=g;var n=self.AMP_CONFIG||{},p=("string"==typeof n.cdnProxyRegex?new RegExp(n.cdnProxyRegex):n.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function q(a){if(self.document&&self.document.head&&(!self.location||!p.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}n.cdnUrl||q("runtime-host");n.geoApiUrl||q("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var r=self.__AMP_LOG;function t(a,b,c){if(!r.user)throw Error("failed to call initLogConstructor");r.user.assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function u(a){a=AMP.BaseElement.call(this,a)||this;a.B=a.C.bind(a);a.h="";a.o=0;a.m=0;a.w="";a.A=0;a.l="";var b=a.win;b=b.__AMP_TOP||(b.__AMP_TOP=b);var c=b.__AMP_SERVICES;c||(c=b.__AMP_SERVICES={});b=c.templates;b.obj||(b.obj=new b.ctor(b.context),b.ctor=null,b.context=null,b.resolve&&b.resolve(b.obj));a.D=b.obj;a.j=null;return a}var v=AMP.BaseElement;u.prototype=d(v.prototype);u.prototype.constructor=u;
if(m)m(u,v);else for(var w in v)if("prototype"!=w)if(Object.defineProperties){var x=Object.getOwnPropertyDescriptor(v,w);x&&Object.defineProperty(u,w,x)}else u[w]=v[w];u.F=v.prototype;
u.prototype.buildCallback=function(){this.j=this.element.ownerDocument.createElement("div");this.element.appendChild(this.j);this.h=this.element.getAttribute("datetime")||"";this.o=Number(this.element.getAttribute("timestamp-seconds"));this.m=Number(this.element.getAttribute("timestamp-ms"));this.w=this.element.getAttribute("display-in")||"";this.A=Number(this.element.getAttribute("offset-seconds"))||0;this.l=this.element.getAttribute("locale")||"en";var a,b=a=this.win.Date;if("now"===this.h.toLowerCase())var c=
b.now();else this.h?(c=b.parse(this.h),t(!isNaN(c),"Invalid date: %s",this.h)):this.m?c=this.m:this.o&&(c=1E3*this.o);t(void 0!==c,"One of datetime, timestamp-ms, or timestamp-seconds is required");a=new a(c+1E3*this.A);"utc"===this.w.toLowerCase()?(b=this.l,a={year:a.getUTCFullYear(),month:a.getUTCMonth()+1,monthName:a.toLocaleDateString(b,{month:"long",timeZone:"UTC"}),monthNameShort:a.toLocaleDateString(b,{month:"short",timeZone:"UTC"}),day:a.getUTCDate(),dayName:a.toLocaleDateString(b,{weekday:"long",
timeZone:"UTC"}),dayNameShort:a.toLocaleDateString(b,{weekday:"short",timeZone:"UTC"}),hour:a.getUTCHours(),minute:a.getUTCMinutes(),second:a.getUTCSeconds(),iso:a.toISOString()}):(b=this.l,a={year:a.getFullYear(),month:a.getMonth()+1,monthName:a.toLocaleDateString(b,{month:"long"}),monthNameShort:a.toLocaleDateString(b,{month:"short"}),day:a.getDate(),dayName:a.toLocaleDateString(b,{weekday:"long"}),dayNameShort:a.toLocaleDateString(b,{weekday:"short"}),hour:a.getHours(),minute:a.getMinutes(),second:a.getSeconds(),
iso:a.toISOString()});b=a.hour%12||12;a=Object.assign({},a,{yearTwoDigit:y(a.year%100),monthTwoDigit:y(a.month),dayTwoDigit:y(a.day),hourTwoDigit:y(a.hour),hour12:b,hour12TwoDigit:y(b),minuteTwoDigit:y(a.minute),secondTwoDigit:y(a.second),dayPeriod:12>a.hour?"am":"pm"});this.D.findAndRenderTemplate(this.element,a).then(this.B)};u.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
function y(a){return 9<a?a.toString():"0"+a}u.prototype.C=function(a){var b=this;this.mutateElement(function(){for(var c=b.j;c.firstChild;)c.removeChild(c.firstChild);b.j.appendChild(a);var e=b.win;c={detail:null};Object.assign(c,{bubbles:!0});"function"==typeof e.CustomEvent?c=new e.CustomEvent("amp:dom-update",c):(e=e.document.createEvent("CustomEvent"),e.initCustomEvent("amp:dom-update",!!c.bubbles,!!c.cancelable,null),c=e);b.element.dispatchEvent(c)})};
(function(a){a.registerElement("amp-date-display",u)})(self.AMP);
})});

//# sourceMappingURL=amp-date-display-0.1.js.map