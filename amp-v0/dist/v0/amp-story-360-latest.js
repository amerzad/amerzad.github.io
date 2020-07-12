(self.AMP=self.AMP||[]).push({n:"amp-story-360",v:"2007102309000",f:(function(AMP,_){
var f,g="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function l(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return d}return function(){throw Error("Cannot find global object");}()}var m=l(this);"function"===typeof Symbol&&Symbol("x");var n;
if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var p;a:{var q={a:!0},r={};try{r.__proto__=q;p=r.a;break a}catch(a){}p=!1}n=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=n;function u(){var a=new Float32Array(9);a.fill(0);for(var b=0;3>b;++b)a[3*b+b]=1;return a}function w(a,b,c){console.assert(3>a&&3>b);var d=u(),e=Math.cos(c),h=Math.sin(c);d[3*a+a]=+e;d[3*a+b]=-h;d[3*b+a]=+h;d[3*b+b]=+e;return d}
function x(a){var b={alpha:!0,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!0},c=this.gl=a.getContext("webgl",b)||a.getContext("experimental-webgl",b);this.canvas=a;this.resize();this.rotation=null;this.scale=1;this.vertShader=c.createShader(c.VERTEX_SHADER);this.fragShaderFast=c.createShader(c.FRAGMENT_SHADER);this.fragShaderSlow=c.createShader(c.FRAGMENT_SHADER);this.progFast=c.createProgram();this.progSlow=c.createProgram();y(this,this.vertShader,"\n    uniform   vec2 uScale;\n    attribute vec2 aPos;\n    varying   vec2 vPos;\n\n    void main() {\n      gl_Position = vec4(aPos, 0.0, 1.0);\n      vPos = uScale * aPos;\n    }\n  ");
c.attachShader(this.progFast,this.vertShader);c.attachShader(this.progFast,this.fragShaderFast);c.attachShader(this.progSlow,this.vertShader);c.attachShader(this.progSlow,this.fragShaderSlow);this.setMapping("\n    bool unproject(vec2 p, out vec3 q) {\n      q = vec3(p, -1.0);\n      return true;\n    }\n  ");this.setCamera(u(),1);this.vbo=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,this.vbo);var d=new Float32Array([-1,-1,1,-1,-1,1,1,1]);c.bufferData(c.ARRAY_BUFFER,d,c.STATIC_DRAW);this.tex=c.createTexture();
c.bindTexture(c.TEXTURE_2D,this.tex);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.NEAREST);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.NEAREST);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE);c.bindTexture(c.TEXTURE_2D,null);c.bindBuffer(c.ARRAY_BUFFER,null)}f=x.prototype;
f.setImage=function(a){var b=this.gl;b.bindTexture(b.TEXTURE_2D,this.tex);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,a);b.bindTexture(b.TEXTURE_2D,null)};
f.setMapping=function(a){y(this,this.fragShaderFast,"\n    #ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp   float;\n    #else\n      precision mediump float;\n    #endif\n\n    const   float     pi = 3.14159265359;\n    uniform float     uPxSize;\n    uniform mat3      uRot;\n    uniform sampler2D uTex;\n    varying vec2      vPos;\n\n    bool unproject(vec2, out vec3);\n\n    vec4 sample(float dx, float dy) {\n      vec2 p = vPos + uPxSize * vec2(dx, dy);\n      vec3 q;\n      if(unproject(p, q)) {\n        vec3 dir = normalize(uRot * q);\n        float u = (-0.5 / pi) * atan(dir[1], dir[0]) + 0.5;\n        float v = (1.0 / pi) * acos(dir[2]);\n        return texture2D(uTex, vec2(u, v));\n      }\n      else {\n        return vec4(0.0);\n      }\n    }\n  \n    void main() {\n      gl_FragColor = sample(0.0, 0.0);\n    }\n  "+a);
y(this,this.fragShaderSlow,"\n    #ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp   float;\n    #else\n      precision mediump float;\n    #endif\n\n    const   float     pi = 3.14159265359;\n    uniform float     uPxSize;\n    uniform mat3      uRot;\n    uniform sampler2D uTex;\n    varying vec2      vPos;\n\n    bool unproject(vec2, out vec3);\n\n    vec4 sample(float dx, float dy) {\n      vec2 p = vPos + uPxSize * vec2(dx, dy);\n      vec3 q;\n      if(unproject(p, q)) {\n        vec3 dir = normalize(uRot * q);\n        float u = (-0.5 / pi) * atan(dir[1], dir[0]) + 0.5;\n        float v = (1.0 / pi) * acos(dir[2]);\n        return texture2D(uTex, vec2(u, v));\n      }\n      else {\n        return vec4(0.0);\n      }\n    }\n  \n    vec4 sampleSq(float dx, float dy) {\n      vec4 s = sample(dx, dy);\n      return vec4(s.xyz * s.xyz, s.w);\n    }\n\n    void main() {\n      // (2, 3) halton vector sequences.\n      vec4 acc = (1.0 / 16.0) * (\n        (((sampleSq( 1.0 /  2.0 - 0.5,  1.0 /  3.0 - 0.5) +\n           sampleSq( 1.0 /  4.0 - 0.5,  2.0 /  3.0 - 0.5)) +\n          (sampleSq( 3.0 /  4.0 - 0.5,  1.0 /  9.0 - 0.5) +\n           sampleSq( 1.0 /  8.0 - 0.5,  4.0 /  9.0 - 0.5))) +\n         ((sampleSq( 5.0 /  8.0 - 0.5,  7.0 /  9.0 - 0.5) +\n           sampleSq( 3.0 /  8.0 - 0.5,  2.0 /  9.0 - 0.5)) +\n          (sampleSq( 7.0 /  8.0 - 0.5,  5.0 /  9.0 - 0.5) +\n           sampleSq( 1.0 / 16.0 - 0.5,  8.0 /  9.0 - 0.5)))) +\n        (((sampleSq( 9.0 / 16.0 - 0.5,  1.0 / 27.0 - 0.5) +\n           sampleSq( 5.0 / 16.0 - 0.5, 10.0 / 27.0 - 0.5)) +\n          (sampleSq(13.0 / 16.0 - 0.5, 19.0 / 27.0 - 0.5) +\n           sampleSq( 3.0 / 16.0 - 0.5,  4.0 / 27.0 - 0.5))) +\n         ((sampleSq(11.0 / 16.0 - 0.5, 13.0 / 27.0 - 0.5) +\n           sampleSq( 7.0 / 16.0 - 0.5, 22.0 / 27.0 - 0.5)) +\n          (sampleSq(15.0 / 16.0 - 0.5,  7.0 / 27.0 - 0.5) +\n           sampleSq( 1.0 / 32.0 - 0.5, 16.0 / 27.0 - 0.5))))\n     );\n      gl_FragColor = vec4(sqrt(acc.xyz), acc.w);\n    }\n  "+
a);z(this,this.progFast);z(this,this.progSlow)};f.setCamera=function(a,b){this.rotation=a;this.scale=b};f.resize=function(){var a=this.canvas.getBoundingClientRect();this.canvas.width=a.width*devicePixelRatio;this.canvas.height=a.height*devicePixelRatio;this.gl.viewport(0,0,this.canvas.width,this.canvas.height)};
f.render=function(a){var b=this.gl;b.disable(b.BLEND);var c=a?this.progFast:this.progSlow;b.useProgram(c);var d=this.scale/Math.sqrt(b.drawingBufferWidth*b.drawingBufferHeight),e=d*b.drawingBufferWidth,h=d*b.drawingBufferHeight;b.uniformMatrix3fv(b.getUniformLocation(c,"uRot"),!1,this.rotation);b.uniform2f(b.getUniformLocation(c,"uScale"),e,h);b.uniform1f(b.getUniformLocation(c,"uPxSize"),2*d);b.enableVertexAttribArray(0);b.bindBuffer(b.ARRAY_BUFFER,this.vbo);b.vertexAttribPointer(0,2,b.FLOAT,!1,
0,0);b.activeTexture(b.TEXTURE0);b.bindTexture(b.TEXTURE_2D,this.tex);b.uniform1i(b.getUniformLocation(c,"uTex"),0);b.drawArrays(b.TRIANGLE_STRIP,0,4);b.bindTexture(b.TEXTURE_2D,null);b.bindBuffer(b.ARRAY_BUFFER,null);b.useProgram(null)};function y(a,b,c){a=a.gl;a.shaderSource(b,c);a.compileShader(b);var d=a.getShaderInfoLog(b);0<d.length&&console.log(d)}function z(a,b){a=a.gl;a.linkProgram(b);b=a.getProgramInfoLog(b);0<b.length&&console.log(b)};function A(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};var B=self.AMP_CONFIG||{},C=("string"==typeof B.cdnProxyRegex?new RegExp(B.cdnProxyRegex):B.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function D(a){if(self.document&&self.document.head&&(!self.location||!C.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}B.cdnUrl||D("runtime-host");B.geoApiUrl||D("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var E=self.__AMP_LOG;function F(){if(!E.user)throw Error("failed to call initLogConstructor");return E.user}function G(a,b){F().assert(a,b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});function H(a){var b=I(a);b=I(b);b=b.isSingleDoc()?b.win:b;return J(b,"owners")}function I(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=J(b,"ampdoc").getAmpDoc(a)}return a}function J(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function K(a){var b=a.tagName;4>b.length||b.lastIndexOf("AMP-",0);if(a.createdCallback)return Promise.resolve(a);a.__AMP_UPG_PRM||(b=new A,a.__AMP_UPG_PRM=b.promise,a.__AMP_UPG_RES=b.resolve);return a.__AMP_UPG_PRM};/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 Use of this source code is governed by a BSD-style
 license that can be found in the LICENSE file or at
 https://developers.google.com/open-source/licenses/bsd */
function L(a){var b=void 0===b?NaN:b;var c=a.toLowerCase().match(/^([0-9\.]+)\s*(s|ms)$/),d=c?c[1]:void 0,e=c?c[2]:void 0;return!c||3!==c.length||"s"!==e&&"ms"!==e?(F().warn("AMP-STORY","Invalid time string",a),b):Math.round(("s"==e?1E3:1)*parseFloat(d))};function M(a,b,c){this.theta=a;this.phi=b;this.scale=c}function N(a,b,c){function d(a){return a*Math.PI/180}return new M(d(-b-90),d(a),1/c)}m.Object.defineProperties(M.prototype,{rotation:{configurable:!0,enumerable:!0,get:function(){var a=w(1,2,this.theta),b=w(0,1,this.phi);console.assert(9==a.length&&9==b.length);for(var c=new Float32Array(9),d=0;3>d;++d)for(var e=0;3>e;++e){for(var h=0,k=0;3>k;++k)h+=a[3*d+k]*b[3*k+e];c[3*d+e]=h}return c}}});
function O(a,b){this.maxFrame=.06*a;this.orientations=b;this.currentFrame=this.currentHeadingIndex=0;this.framesPerSection=this.maxFrame/(b.length-1)}
O.prototype.getNextOrientation=function(){if(0>this.currentHeadingIndex||this.currentFrame==this.maxFrame-1)return null;this.currentFrame++;if(this.currentFrame>=(this.currentHeadingIndex+1)*this.framesPerSection)return this.currentHeadingIndex++,this.currentHeadingIndex==this.orientations.length?(this.currentHeadingIndex=-1,null):this.orientations[this.currentHeadingIndex];var a=this.currentFrame%this.framesPerSection/this.framesPerSection;a=.5>a?2*a*a:1-Math.pow(-2*a+2,2)/2;var b=this.orientations[this.currentHeadingIndex],
c=this.orientations[this.currentHeadingIndex+1];return new M(b.theta+(c.theta-b.theta)*a,b.phi+(c.phi-b.phi)*a,b.scale+(c.scale-b.scale)*a)};function P(a){a=AMP.BaseElement.call(this,a)||this;a.j=[];a.w=0;a.o=null;a.h=null;a.l=null;a.m=!1;return a}var Q=AMP.BaseElement;P.prototype=g(Q.prototype);P.prototype.constructor=P;if(t)t(P,Q);else for(var R in Q)if("prototype"!=R)if(Object.defineProperties){var S=Object.getOwnPropertyDescriptor(Q,R);S&&Object.defineProperty(P,R,S)}else P[R]=Q[R];P.A=Q.prototype;
f=P.prototype;
f.buildCallback=function(){function a(a){return b.element.getAttribute(a)}var b=this;a("duration")&&(this.w=L(a("duration"))||0);var c=parseFloat(a("heading-start")||0),d=parseFloat(a("pitch-start")||0),e=parseFloat(a("zoom-start")||1);this.j.push(N(c,d,e));if(void 0!==a("heading-end")||void 0!==a("pitch-end")||void 0!==a("zoom-end")){var h=parseFloat(a("heading-end")||0),k=parseFloat(a("pitch-end")||0),V=parseFloat(a("zoom-end")||1);this.j.push(N(h,k,V))}var v=this.element.ownerDocument.createElement("div");this.o=
this.element.ownerDocument.createElement("canvas");this.element.appendChild(v);v.appendChild(this.o);this.applyFillContent(v,!0)};f.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
f.layoutCallback=function(){var a=this,b=this.element.querySelector("amp-img");G(b,"amp-story-360 must contain an amp-img element.");var c=H(this.element);c.setOwner(b,this.element);c.scheduleLayout(this.element,b);return K(b).then(function(){return b.signals().whenSignal("load-end")}).then(function(){a.h=new x(a.o);a.h.setImage(a.element.querySelector("img"));a.h.resize();1>a.j.length||(T(a),a.canAnimate&&a.play())},function(){F().error("AMP_STORY_360","Failed to load the amp-img.")})};
f.onMeasureChanged=function(){var a=this;this.mutateElement(function(){a.h&&(a.h.resize(),a.m||a.h.render(!1))})};function T(a){a.mutateElement(function(){a.h.setCamera(a.j[0].rotation,a.j[0].scale);a.h.render(!1)})}function U(a){function b(){if(a.m&&a.l){var c=a.l.getNextOrientation();c?a.win.requestAnimationFrame(function(){a.h.setCamera(c.rotation,c.scale);a.h.render(!0);b()}):(a.m=!1,a.h.render(!1))}else a.h.render(!1)}a.l||(a.l=new O(a.w,a.j));a.mutateElement(function(){return b()})}
f.pause=function(){this.m=!1};f.play=function(){G(this.canAnimate,"amp-story-360 is either not configured to play an animation or still loading content.");this.m=!0;U(this)};f.rewind=function(){var a=this;this.canAnimate&&(this.l=null,this.win.requestAnimationFrame(function(){T(a);U(a)}))};m.Object.defineProperties(P.prototype,{canAnimate:{configurable:!0,enumerable:!0,get:function(){return 0<this.w&&1<this.j.length}}});(function(a){a.registerElement("amp-story-360",P,"amp-story-360 canvas{width:100%!important;height:100%!important}amp-story-360 amp-img{opacity:0!important}\n/*# sourceURL=/extensions/amp-story-360/0.1/amp-story-360.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-story-360-0.1.js.map