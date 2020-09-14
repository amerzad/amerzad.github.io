(self.AMP=self.AMP||[]).push({n:"amp-crypto-polyfill",v:"2008290323002",f:function(AMP,_){let x=self.AMP_CONFIG||{},K=("string"==typeof x.cdnProxyRegex?new RegExp(x.cdnProxyRegex):x.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function L(k){if(self.document&&self.document.head&&(!self.location||!K.test(self.location.origin))){var g=self.document.head.querySelector(`meta[name="${k}"]`);g&&g.getAttribute("content")}}x.cdnUrl||L("runtime-host");x.geoApiUrl||L("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};(function(k){return k||{}})({c:!0,v:!0,a:!0,ad:!0});function U(k,g){k=k.__AMP_TOP||(k.__AMP_TOP=k);{var l=k;let y=V(l);let h=y["crypto-polyfill"];h||(h=y["crypto-polyfill"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});h.ctor||h.obj||(h.ctor=g,h.context=k,h.resolve&&(g=V(l)["crypto-polyfill"],g.obj||(g.obj=new g.ctor(g.context),g.ctor=null,g.context=null,g.resolve&&g.resolve(g.obj))))}}function V(k){let g=k.__AMP_SERVICES;g||(g=k.__AMP_SERVICES={});return g}let Z=function(){function k(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function g(a,b){function d(){}d.prototype=b.prototype;a.v=b.prototype;a.prototype=new d;a.prototype.constructor=a;a.u=function(a,e,d){for(var c=Array(arguments.length-2),f=2;f<arguments.length;f++)c[f-2]=arguments[f];return b.prototype[e].apply(a,c)}}function l(a,b){this.b=0|a;this.a=0|b}function y(a){return 0<a?0x8000000000000000<=a?W:new l(a,a/4294967296):0>a?-0x8000000000000000>=a?z:n(new l(-a,-a/4294967296)):A}function h(a,b){return new l(a,b)}function B(a){return 4294967296*a.a+(a.b>>>0)}function C(a){return 0==a.b&&0==a.a}function v(a,b){return a.b==b.b&&a.a==b.a}function M(a,b){return a.a==b.a?a.b==b.b?0:a.b>>>0>b.b>>>0?1:-1:a.a>b.a?1:-1}function n(a){var b=~a.b+1|0;return h(b,~a.a+!b|0)}function E(a,b){if(C(a))return a;if(C(b))return b;var d=a.a>>>16,c=65535&a.a,e=a.b>>>16;a=65535&a.b;var f=b.a>>>16,m=65535&b.a,g=b.b>>>16;b=65535&b.b;var l=a*b,k=(l>>>16)+e*b,q=k>>>16;k=(65535&k)+a*g;q=q+(k>>>16)+c*b;var r=q>>>16;q=(65535&q)+e*g;r+=q>>>16;q=(65535&q)+a*m;r=r+(q>>>16)+(d*b+c*g+e*m+a*f)&65535;return h((65535&k)<<16|65535&l,r<<16|65535&q)}function w(a,b){if(C(b))throw Error("division by zero");if(0>a.a){if(v(a,z)){if(v(b,F)||v(b,N))return z;if(v(b,z))return F;var d=1;if(0==d)d=a;else{var c=a.a;d=32>d?h(a.b>>>d|c<<32-d,c>>d):h(c>>d-32,0<=c?0:-1)}d=w(d,b);c=1;if(0!=c){var e=d.b;d=32>c?h(e<<c,d.a<<c|e>>>32-c):h(0,e<<c-32)}if(v(d,A))return 0>b.a?F:N;a=a.add(n(E(b,d)));return d.add(w(a,b))}return 0>b.a?w(n(a),n(b)):n(w(n(a),b))}if(C(a))return A;if(0>b.a)return v(b,z)?A:n(w(a,n(b)));for(c=A;0<=M(a,b);){d=Math.max(1,Math.floor(B(a)/B(b)));e=Math.ceil(Math.log(d)/Math.LN2);e=48>=e?1:Math.pow(2,e-48);for(var f=y(d),m=E(f,b);0>m.a||0<M(m,a);)d-=e,f=y(d),m=E(f,b);C(f)&&(f=F);c=c.add(f);a=a.add(n(m))}return c}function G(a,b){this.f=128;this.h=O.Uint8Array?new Uint8Array(this.f):Array(this.f);this.j=this.g=0;this.c=[];this.l=a;this.s=[];this.o=P(b);this.i=!1;this.j=this.g=0;a=this.o;b=a.length;if(0<b){for(var d=Array(b),c=0;c<b;c++)d[c]=a[c];a=d}else a=[];this.c=a;this.i=!1}function H(a,b,d){d=void 0!==d?d:b.length;if(a.i)throw Error("this hasher needs to be reset");var c=a.g;if("string"==typeof b)for(var e=0;e<d;e++){var f=b.charCodeAt(e);if(255<f)throw Error("Characters must be in range [0,255]");a.h[c++]=f;c==a.f&&(I(a),c=0)}else if(e=k(b),"array"==e||"object"==e&&"number"==typeof b.length)for(e=0;e<d;e++){f=b[e];if("number"!=typeof f||0>f||255<f||f!=(0|f))throw Error("message must be a byte array");a.h[c++]=f;c==a.f&&(I(a),c=0)}else throw Error("message must be string or array");a.g=c;a.j+=d}function I(a){for(var b=a.h,d=a.s,c=0;16>c;c++){var e=8*c;d[c]=new l(b[e+4]<<24|b[e+5]<<16|b[e+6]<<8|b[e+7],b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3])}for(c=16;80>c;c++){e=d[c-15];b=e.b;e=e.a;var f=d[c-2],m=f.b;f=f.a;d[c]=a.m(d[c-16],d[c-7],new l(b>>>1^e<<31^b>>>8^e<<24^b>>>7^e<<25,e>>>1^b<<31^e>>>8^b<<24^e>>>7),new l(m>>>19^f<<13^f>>>29^m<<3^m>>>6^f<<26,f>>>19^m<<13^m>>>29^f<<3^f>>>6))}b=a.c[0];e=a.c[1];m=a.c[2];f=a.c[3];var g=a.c[4],h=a.c[5],k=a.c[6],q=a.c[7];for(c=0;80>c;c++){var r=b.b,p=b.a;r=new l(r>>>28^p<<4^p>>>2^r<<30^p>>>7^r<<25,p>>>28^r<<4^r>>>2^p<<30^r>>>7^p<<25).add(new l(b.b&e.b|e.b&m.b|b.b&m.b,b.a&e.a|e.a&m.a|b.a&m.a));p=g.b;var n=g.a,t=g.b,u=g.a;p=a.m(q,new l(p>>>14^n<<18^p>>>18^n<<14^n>>>9^p<<23,n>>>14^p<<18^n>>>18^p<<14^p>>>9^n<<23),new l(t&h.b|~t&k.b,u&h.a|~u&k.a),X[c],d[c]);q=k;k=h;h=g;g=f.add(p);f=m;m=e;e=b;b=p.add(r)}a.c[0]=a.c[0].add(b);a.c[1]=a.c[1].add(e);a.c[2]=a.c[2].add(m);a.c[3]=a.c[3].add(f);a.c[4]=a.c[4].add(g);a.c[5]=a.c[5].add(h);a.c[6]=a.c[6].add(k);a.c[7]=a.c[7].add(q)}function P(a){for(var b=[],d=0;d<a.length;d+=2)b.push(new l(a[d+1],a[d]));return b}function Q(){G.call(this,6,Y)}function R(a){var b=new Q;H(b,a);a=Uint8Array;if(b.i)throw Error("this hasher needs to be reset");var d=8*b.j;112>b.g?H(b,S,112-b.g):H(b,S,b.f-b.g+112);for(var c=127;112<=c;c--)b.h[c]=255&d,d/=256;I(b);d=0;var e=Array(8*b.l);for(c=0;c<b.l;c++){var f=b.c[c],g=f.a;f=f.b;for(var h=24;0<=h;h-=8)e[d++]=g>>h&255;for(h=24;0<=h;h-=8)e[d++]=f>>h&255}b.i=!0;return new a(e)}var O=this,A=h(0,0),F=h(1,0),N=h(-1,-1),W=h(4294967295,2147483647),z=h(0,2147483648);l.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);var b=this.a>>21;if(0==b||-1==b&&(0!=this.b||-2097152!=this.a))return b=B(this),10==a?""+b:b.toString(a);b=14-(a>>2);var d=Math.pow(a,b),c=h(d,d/4294967296);d=w(this,c);c=Math.abs(B(this.add(n(E(d,c)))));var e=10==a?""+c:c.toString(a);e.length<b&&(e="0000000000000".substr(e.length-b)+e);c=B(d);return(10==a?c:c.toString(a))+e};l.prototype.add=function(a){var b=this.a>>>16,d=65535&this.a,c=this.b>>>16,e=a.a>>>16,f=65535&a.a,g=a.b>>>16;a=(65535&this.b)+(65535&a.b);g=(a>>>16)+(c+g);c=(g>>>16)+(d+f);return h((65535&g)<<16|65535&a,((c>>>16)+(b+e)&65535)<<16|65535&c)};l.prototype.and=function(a){return h(this.b&a.b,this.a&a.a)};l.prototype.or=function(a){return h(this.b|a.b,this.a|a.a)};l.prototype.xor=function(a){return h(this.b^a.b,this.a^a.a)};g(G,(function(){this.f=-1}));for(var T=[],J=0;127>J;J++)T[J]=0;var S=function(a){return Array.prototype.concat.apply([],arguments)}([128],T);G.prototype.m=function(a,b,d){for(var c=(2147483648^a.b)+(2147483648^b.b),e=a.a+b.a,f=arguments.length-1;2<=f;--f)c+=2147483648^arguments[f].b,e+=arguments[f].a;1&arguments.length&&(c+=2147483648);e+=arguments.length>>1;e+=Math.floor(c/4294967296);return new l(c,e)};var X=P([1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591]);g(Q,G);var Y=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428],D=["ampSha384Digest"],t=window||O;D[0]in t||"undefined"==typeof t.execScript||t.execScript("var "+D[0]);for(var u;D.length&&(u=D.shift());)D.length||void 0===R?t[u]&&t[u]!==Object.prototype[u]?t=t[u]:t=t[u]={}:t[u]=R;return ampSha384Digest}.call(window);(function(k){U(k,(function(){return Z}))})(window)}});