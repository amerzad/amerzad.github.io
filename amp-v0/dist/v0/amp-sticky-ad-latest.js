(self.AMP=self.AMP||[]).push({n:"amp-sticky-ad",v:"2007102309000",f:(function(AMP,_){
var g,h="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function n(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}n(this);"function"===typeof Symbol&&Symbol("x");var p;
if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var r={a:!0},u={};try{u.__proto__=r;q=u.a;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var v=p,w;function x(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function y(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function z(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var A=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var B=self.AMP_CONFIG||{},C=("string"==typeof B.cdnProxyRegex?new RegExp(B.cdnProxyRegex):B.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function D(a){if(self.document&&self.document.head&&(!self.location||!C.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}B.cdnUrl||D("runtime-host");B.geoApiUrl||D("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var E=self.__AMP_LOG;function F(){if(!E.user)throw Error("failed to call initLogConstructor");return E.user}function G(a){F().assert(a,"amp-sticky-ad must have a single amp-ad child",void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var H=Object.prototype.hasOwnProperty;(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});function I(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var e=a.AMP_CONFIG["allow-doc-opt-in"],k=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
if(k){var m=k.getAttribute("content").split(",");for(c=0;c<m.length;c++)-1!=e.indexOf(m[c])&&(b[m[c]]=!0)}}Object.assign(b,J(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];var f=a.location.originalHash||a.location.hash;a=Object.create(null);if(f)for(var l;l=A.exec(f);){var t=z(l[1],l[1]);l=l[2]?z(l[2].replace(/\+/g," "),l[2]):"";a[t]=l}for(f=0;f<c.length;f++)t=a["e-"+c[f]],"1"==t&&(b[c[f]]=!0),"0"==
t&&(b[c[f]]=!1)}return b}function J(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){if(E.dev)a=E.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a}
function K(a,b){a.__AMP_EXPERIMENT_BRANCHES=a.__AMP_EXPERIMENT_BRANCHES||{};for(var c=0;c<b.length;c++){var d=b[c],e=d.experimentId;H.call(a.__AMP_EXPERIMENT_BRANCHES,e)||(d.isTrafficEligible&&d.isTrafficEligible(a)?!a.__AMP_EXPERIMENT_BRANCHES[e]&&I(a)[e]&&(d=d.branches,a.__AMP_EXPERIMENT_BRANCHES[e]=d[Math.floor(Math.random()*d.length)]||null):a.__AMP_EXPERIMENT_BRANCHES[e]=null)}}function L(a){return a.__AMP_EXPERIMENT_BRANCHES?a.__AMP_EXPERIMENT_BRANCHES["sticky-ad-padding-bottom"]:null};function M(a){var b=N(a);b=N(b);b=b.isSingleDoc()?b.win:b;return O(b,"owners")}function N(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=O(b,"ampdoc").getAmpDoc(a)}return a}function O(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function P(a){x(a.tagName,"AMP-");if(a.createdCallback)return Promise.resolve(a);if(!a.__AMP_UPG_PRM){var b=new y;a.__AMP_UPG_PRM=b.promise;a.__AMP_UPG_RES=b.resolve}return a.__AMP_UPG_PRM};JSON.parse('{"_ping_":{"renderStartImplemented":true,"clientIdScope":"_PING_","consentHandlingOverride":true},"1wo":{},"24smi":{"prefetch":"https://jsn.24smi.net/smi.js","preconnect":"https://data.24smi.net"},"a8":{"prefetch":"https://statics.a8.net/amp/ad.js","renderStartImplemented":true},"a9":{"prefetch":"https://z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"},"accesstrade":{"prefetch":"https://h.accesstrade.net/js/amp/amp.js"},"adagio":{"prefetch":"https://js-ssl.neodatagroup.com/adagio_amp.js","preconnect":["https://ad-aws-it.neodatagroup.com","https://tracker.neodatagroup.com"],"renderStartImplemented":true},"adblade":{"prefetch":"https://web.adblade.com/js/ads/async/show.js","preconnect":["https://staticd.cdn.adblade.com","https://static.adblade.com"],"renderStartImplemented":true},"adbutler":{"prefetch":"https://servedbyadbutler.com/app.js"},"adform":{},"adfox":{"prefetch":"https://yastatic.net/pcode/adfox/loader.js","renderStartImplemented":true},"adgeneration":{"prefetch":"https://i.socdm.com/sdk/js/adg-script-loader.js"},"adglare":{"renderStartImplemented":true},"adhese":{"renderStartImplemented":true},"adincube":{"renderStartImplemented":true},"adition":{},"adman":{},"admanmedia":{"renderStartImplemented":true},"admixer":{"renderStartImplemented":true,"preconnect":["https://inv-nets.admixer.net","https://cdn.admixer.net"]},"adocean":{"consentHandlingOverride":true},"adop":{},"adpicker":{"renderStartImplemented":true},"adplugg":{"prefetch":"https://www.adplugg.com/serve/js/ad.js","renderStartImplemented":true},"adpon":{"prefetch":"https://ad.adpon.jp/amp.js","clientIdScope":"AMP_ECID_ADPON"},"adreactor":{},"adsensor":{"prefetch":"https://wfpscripts.webspectator.com/amp/adsensor-amp.js","clientIdScope":"amp_ecid_adensor","renderStartImplemented":true},"adservsolutions":{},"adsloom":{"clientIdScope":"AMP_ECID_ADSLOOM"},"adsnative":{"prefetch":"https://static.adsnative.com/static/js/render.v1.js","preconnect":"https://api.adsnative.com"},"adspeed":{"preconnect":"https://g.adspeed.net","renderStartImplemented":true},"adspirit":{},"adstir":{"prefetch":"https://js.ad-stir.com/js/adstir_async.js","preconnect":"https://ad.ad-stir.com"},"adstyle":{"prefetch":"https://widgets.ad.style/amp.js","preconnect":["https://w.ad.style"]},"adtech":{"prefetch":"https://s.aolcdn.com/os/ads/adsWrapper3.js","preconnect":["https://mads.at.atwola.com","https://aka-cdn.adtechus.com"]},"adthrive":{"prefetch":["https://www.googletagservices.com/tag/js/gpt.js"],"preconnect":["https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true},"adunity":{"preconnect":["https://content.adunity.com"],"renderStartImplemented":true},"aduptech":{"prefetch":"https://s.d.adup-tech.com/jsapi","preconnect":["https://d.adup-tech.com","https://m.adup-tech.com"],"renderStartImplemented":true},"adventive":{"preconnect":["https://ads.adventive.com","https://amp.adventivedev.com"],"renderStartImplemented":true},"adverline":{"prefetch":"https://ads.adverline.com/richmedias/amp.js","preconnect":["https://adnext.fr"],"renderStartImplemented":true},"adverticum":{},"advertserve":{"renderStartImplemented":true},"adyoulike":{"consentHandlingOverride":true,"prefetch":"https://fo-static.omnitagjs.com/amp.js","renderStartImplemented":true},"adzerk":{},"affiliateb":{"prefetch":"https://track.affiliate-b.com/amp/a.js","renderStartImplemented":true},"aja":{"prefetch":["https://cdn.as.amanad.adtdp.com/sdk/asot-amp.js","https://cdn.as.amanad.adtdp.com/sdk/asot-v2.js"],"preconnect":["https://ad.as.amanad.adtdp.com"]},"appvador":{"prefetch":["https://cdn.apvdr.com/js/VastAdUnit.min.js","https://cdn.apvdr.com/js/VideoAd.min.js","https://cdn.apvdr.com/js/VideoAd3PAS.min.js","https://cdn.apvdr.com/js/VideoAdAutoPlay.min.js","https://cdn.apvdr.com/js/VideoAdNative.min.js"],"renderStartImplemented":true},"amoad":{"prefetch":["https://j.amoad.com/js/a.js","https://j.amoad.com/js/n.js"],"preconnect":["https://d.amoad.com","https://i.amoad.com","https://m.amoad.com","https://v.amoad.com"]},"aniview":{"renderStartImplemented":true},"anyclip":{"prefetch":"https://player.anyclip.com/anyclip-widget/lre-widget/prod/v1/src/lre.js","preconnect":["https://trafficmanager.anyclip.com","https://lreprx-server.anyclip.com"],"renderStartImplemented":true},"appnexus":{"prefetch":"https://acdn.adnxs.com/ast/ast.js","preconnect":"https://ib.adnxs.com","renderStartImplemented":true},"atomx":{"prefetch":"https://s.ato.mx/p.js"},"beaverads":{"renderStartImplemented":true},"beopinion":{"prefetch":"https://widget.beop.io/sdk.js","preconnect":["https://t.beop.io","https://s.beop.io","https://data.beop.io"],"renderStartImplemented":true},"bidtellect":{},"blade":{"prefetch":"https://sdk.streamrail.com/blade/sr.blade.js","renderStartImplemented":true},"brainy":{},"bringhub":{"renderStartImplemented":true,"preconnect":["https://static.bh-cdn.com","https://core-api.bringhub.io"]},"broadstreetads":{"prefetch":"https://cdn.broadstreetads.com/init-2.min.js"},"byplay":{},"caajainfeed":{"prefetch":["https://cdn.amanad.adtdp.com/sdk/ajaamp.js"],"preconnect":["https://ad.amanad.adtdp.com"]},"capirs":{"renderStartImplemented":true},"caprofitx":{"prefetch":["https://cdn.caprofitx.com/pfx.min.js","https://cdn.caprofitx.com/tags/amp/profitx_amp.js"],"preconnect":"https://ad.caprofitx.adtdp.com"},"cedato":{"renderStartImplemented":true},"chargeads":{},"colombia":{"prefetch":"https://static.clmbtech.com/ad/commons/js/colombia-amp.js"},"conative":{"renderStartImplemented":true},"connatix":{"renderStartImplemented":true},"contentad":{},"criteo":{"prefetch":"https://static.criteo.net/js/ld/publishertag.js","preconnect":"https://cas.criteo.com"},"csa":{"prefetch":"https://www.google.com/adsense/search/ads.js"},"dable":{"preconnect":["https://static.dable.io","https://api.dable.io","https://images.dable.io"],"renderStartImplemented":true},"directadvert":{"renderStartImplemented":true},"distroscale":{"preconnect":["https://c.jsrdn.com","https://s.jsrdn.com","https://i.jsrdn.com"],"renderStartImplemented":true},"dotandads":{"prefetch":"https://amp.ad.dotandad.com/dotandadsAmp.js","preconnect":"https://bal.ad.dotandad.com"},"dynad":{"preconnect":["https://t.dynad.net","https://tm.jsuol.com.br"]},"eadv":{"renderStartImplemented":true,"clientIdScope":"AMP_ECID_EADV","prefetch":["https://www.eadv.it/track/esr.min.js","https://www.eadv.it/track/ead.min.js"]},"eas":{"prefetch":"https://amp.emediate.eu/amp.v0.js","renderStartImplemented":true},"empower":{"prefetch":"https://cdn.empower.net/sdk/amp-ad.min.js","renderStartImplemented":true},"engageya":{},"epeex":{},"eplanning":{"prefetch":"https://us.img.e-planning.net/layers/epl-amp.js"},"ezoic":{"prefetch":["https://www.googletagservices.com/tag/js/gpt.js","https://g.ezoic.net/ezoic/ampad.js"],"clientIdScope":"AMP_ECID_EZOIC","consentHandlingOverride":true},"f1e":{"prefetch":"https://img.ak.impact-ad.jp/util/f1e_amp.min.js"},"f1h":{"preconnect":"https://img.ak.impact-ad.jp","renderStartImplemented":true},"fake":{},"felmat":{"prefetch":"https://t.felmat.net/js/fmamp.js","renderStartImplemented":true},"flite":{},"fluct":{"preconnect":["https://cdn-fluct.sh.adingo.jp","https://s.sh.adingo.jp","https://i.adingo.jp"]},"forkmedia":{"renderStartImplemented":true},"freewheel":{"prefetch":"https://cdn.stickyadstv.com/prime-time/fw-amp.min.js","renderStartImplemented":true},"fusion":{"prefetch":"https://assets.adtomafusion.net/fusion/latest/fusion-amp.min.js"},"genieessp":{"prefetch":"https://js.gsspcln.jp/l/amp.js"},"giraff":{"renderStartImplemented":true},"gmossp":{"prefetch":"https://cdn.gmossp-sp.jp/ads/amp.js"},"gumgum":{"prefetch":"https://js.gumgum.com/slot.js","renderStartImplemented":true},"holder":{"prefetch":"https://i.holder.com.ua/js2/holder/ajax/ampv1.js","preconnect":"https://h.holder.com.ua","renderStartImplemented":true},"ibillboard":{},"idealmedia":{"renderStartImplemented":true,"preconnect":["https://jsc.idealmedia.io","https://servicer.idealmedia.io","https://s-img.idealmedia.io/"]},"imedia":{"prefetch":"https://i.imedia.cz/js/im3.js","renderStartImplemented":true},"imobile":{"prefetch":"https://spamp.i-mobile.co.jp/script/amp.js","preconnect":"https://spad.i-mobile.co.jp"},"imonomy":{"renderStartImplemented":true},"improvedigital":{},"industrybrains":{"prefetch":"https://web.industrybrains.com/js/ads/async/show.js","preconnect":["https://staticd.cdn.industrybrains.com","https://static.industrybrains.com"],"renderStartImplemented":true},"inmobi":{"prefetch":"https://cf.cdn.inmobi.com/ad/inmobi.secure.js","renderStartImplemented":true},"innity":{"prefetch":"https://cdn.innity.net/admanager.js","preconnect":"https://as.innity.com","renderStartImplemented":true},"insticator":{"preconnect":"https://d3lcz8vpax4lo2.cloudfront.net","renderStartImplemented":true},"invibes":{"prefetch":"https://k.r66net.com/GetAmpLink","renderStartImplemented":true,"consentHandlingOverride":true},"iprom":{"prefetch":"https://cdn.ipromcloud.com/ipromNS.js"},"ix":{"prefetch":["https://js-sec.indexww.com/apl/amp.js"],"preconnect":"https://as-sec.casalemedia.com","renderStartImplemented":true},"jubna":{},"kargo":{},"kiosked":{"renderStartImplemented":true},"kixer":{"prefetch":"https://cdn.kixer.com/ad/load.js","renderStartImplemented":true},"kuadio":{},"lentainform":{"renderStartImplemented":true,"preconnect":["https://jsc.lentainform.com","https://servicer.lentainform.com","https://s-img.lentainform.com"]},"ligatus":{"prefetch":"https://ssl.ligatus.com/render/ligrend.js","renderStartImplemented":true},"lockerdome":{"prefetch":"https://cdn2.lockerdomecdn.com/_js/amp.js","renderStartImplemented":true},"logly":{"preconnect":["https://l.logly.co.jp","https://cdn.logly.co.jp"],"renderStartImplemented":true},"loka":{"prefetch":"https://loka-cdn.akamaized.net/scene/amp.js","preconnect":["https://scene-front.lokaplatform.com","https://loka-materials.akamaized.net"],"renderStartImplemented":true},"mads":{"prefetch":"https://eu2.madsone.com/js/tags.js"},"mantis-display":{"prefetch":"https://assets.mantisadnetwork.com/mantodea.min.js","preconnect":["https://mantodea.mantisadnetwork.com","https://res.cloudinary.com","https://resize.mantisadnetwork.com"]},"marfeel":{"prefetch":"https://www.googletagservices.com/tag/js/gpt.js","preconnect":"https://live.mrf.io","consentHandlingOverride":true},"mantis-recommend":{"prefetch":"https://assets.mantisadnetwork.com/recommend.min.js","preconnect":["https://mantodea.mantisadnetwork.com","https://resize.mantisadnetwork.com"]},"mediaad":{},"medianet":{"preconnect":"https://contextual.media.net","renderStartImplemented":true},"mediavine":{"prefetch":"https://amp.mediavine.com/wrapper.min.js","preconnect":["https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true,"consentHandlingOverride":true},"medyanet":{"renderStartImplemented":true},"meg":{"renderStartImplemented":true},"mgid":{"renderStartImplemented":true,"preconnect":["https://jsc.mgid.com","https://servicer.mgid.com","https://s-img.mgid.com"]},"microad":{"prefetch":"https://j.microad.net/js/camp.js","preconnect":["https://s-rtb.send.microad.jp","https://s-rtb.send.microadinc.com","https://cache.send.microad.jp","https://cache.send.microadinc.com","https://deb.send.microad.jp"]},"miximedia":{"renderStartImplemented":true},"mixpo":{"prefetch":"https://cdn.mixpo.com/js/loader.js","preconnect":["https://player1.mixpo.com","https://player2.mixpo.com"]},"monetizer101":{"renderStartImplemented":true},"mox":{"prefetch":["https://ad.mox.tv/js/amp.min.js","https://ad.mox.tv/mox/mwayss_invocation.min.js"],"renderStartImplemented":true},"my6sense":{"renderStartImplemented":true},"mytarget":{"prefetch":"https://ad.mail.ru/static/ads-async.js","renderStartImplemented":true},"mywidget":{"preconnect":"https://likemore-fe.go.mail.ru","prefetch":"https://likemore-go.imgsmail.ru/widget_amp.js","renderStartImplemented":true},"nativeroll":{"prefetch":"https://cdn01.nativeroll.tv/js/seedr-player.min.js"},"nativery":{"preconnect":"https://cdn.nativery.com"},"nativo":{"prefetch":"https://s.ntv.io/serve/load.js"},"navegg":{"renderStartImplemented":true},"nend":{"prefetch":"https://js1.nend.net/js/amp.js","preconnect":["https://output.nend.net","https://img1.nend.net"]},"netletix":{"preconnect":["https://call.netzathleten-media.de"],"renderStartImplemented":true},"noddus":{"prefetch":"https://noddus.com/amp_loader.js","renderStartImplemented":true},"nokta":{"prefetch":"https://static.virgul.com/theme/mockups/noktaamp/ampjs.js","renderStartImplemented":true},"nws":{},"oblivki":{"renderStartImplemented":true},"onead":{"prefetch":"https://ad-specs.guoshipartners.com/static/js/onead-amp.min.js","renderStartImplemented":true},"onnetwork":{"renderStartImplemented":true},"openadstream":{},"openx":{"prefetch":"https://www.googletagservices.com/tag/js/gpt.js","preconnect":["https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true},"opinary":{},"outbrain":{"renderStartImplemented":true,"prefetch":"https://widgets.outbrain.com/widgetAMP/outbrainAMP.min.js","preconnect":["https://odb.outbrain.com"],"consentHandlingOverride":true},"pixels":{"prefetch":"https://cdn.adsfactor.net/amp/pixels-amp.min.js","clientIdCookieName":"__AF","renderStartImplemented":true},"plista":{},"polymorphicads":{"prefetch":"https://www.polymorphicads.jp/js/amp.js","preconnect":["https://img.polymorphicads.jp","https://ad.polymorphicads.jp"],"renderStartImplemented":true},"popin":{"renderStartImplemented":true},"postquare":{},"ppstudio":{"renderStartImplemented":true},"pressboard":{"renderStartImplemented":true},"promoteiq":{},"pubexchange":{},"pubguru":{"renderStartImplemented":true},"pubmatic":{"prefetch":"https://ads.pubmatic.com/AdServer/js/amp.js"},"pubmine":{"prefetch":["https://s.pubmine.com/head.js"],"preconnect":"https://delivery.g.switchadhub.com","renderStartImplemented":true},"puffnetwork":{"prefetch":"https://static.puffnetwork.com/amp_ad.js","renderStartImplemented":true},"pulsepoint":{"prefetch":"https://ads.contextweb.com/TagPublish/getjs.static.js","preconnect":"https://tag.contextweb.com"},"purch":{"prefetch":"https://ramp.purch.com/serve/creative_amp.js","renderStartImplemented":true},"quoraad":{"prefetch":"https://a.quora.com/amp_ad.js","preconnect":"https://ampad.quora.com","renderStartImplemented":true},"rakutenunifiedads":{"prefetch":"https://s-cdn.rmp.rakuten.co.jp/js/amp.js","renderStartImplemented":true},"rbinfox":{"renderStartImplemented":true},"readmo":{"renderStartImplemented":true},"realclick":{"renderStartImplemented":true},"recomad":{"renderStartImplemented":true},"recreativ":{"prefetch":"https://go.rcvlink.com/static/amp.js","renderStartImplemented":true},"relap":{"renderStartImplemented":true},"relappro":{"prefetch":"https://cdn.relappro.com/adservices/amp/relappro.amp.min.js","preconnect":"https://tags.relappro.com","renderStartImplemented":true},"revcontent":{"prefetch":"https://labs-cdn.revcontent.com/build/amphtml/revcontent.amp.min.js","preconnect":["https://trends.revcontent.com","https://cdn.revcontent.com","https://img.revcontent.com"],"renderStartImplemented":true},"revjet":{"prefetch":"https://cdn.revjet.com/~cdn/JS/03/amp.js","renderStartImplemented":true},"rfp":{"prefetch":"https://js.rfp.fout.jp/rfp-amp.js","preconnect":"https://ad.rfp.fout.jp","renderStartImplemented":true},"rnetplus":{},"rubicon":{},"runative":{"prefetch":"https://cdn.run-syndicate.com/sdk/v1/n.js","renderStartImplemented":true},"sas":{"renderStartImplemented":true},"seedingalliance":{},"sekindo":{"renderStartImplemented":true},"sharethrough":{"renderStartImplemented":true},"shemedia":{"prefetch":["https://securepubads.g.doubleclick.net/tag/js/gpt.js","https://ads.shemedia.com/static/amp.js"],"preconnect":["https://partner.googleadservices.com","https://tpc.googlesyndication.com","https://ads.blogherads.com"],"renderStartImplemented":true},"sklik":{"prefetch":"https://c.imedia.cz/js/amp.js"},"slimcutmedia":{"preconnect":["https://sb.freeskreen.com","https://static.freeskreen.com","https://video.freeskreen.com"],"renderStartImplemented":true},"smartads":{"prefetch":"https://smart-ads.biz/amp.js"},"smartadserver":{"prefetch":"https://ec-ns.sascdn.com/diff/js/amp.v0.js","preconnect":"https://static.sascdn.com","renderStartImplemented":true},"smartclip":{"prefetch":"https://cdn.smartclip.net/amp/amp.v0.js","preconnect":"https://des.smartclip.net","renderStartImplemented":true},"smi2":{"renderStartImplemented":true},"smilewanted":{"prefetch":"https://prebid.smilewanted.com/amp/amp.js","preconnect":"https://static.smilewanted.com","renderStartImplemented":true},"sogouad":{"prefetch":"https://theta.sogoucdn.com/wap/js/aw.js","renderStartImplemented":true},"sortable":{"prefetch":"https://www.googletagservices.com/tag/js/gpt.js","preconnect":["https://tags-cdn.deployads.com","https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true},"sovrn":{"prefetch":"https://ap.lijit.com/www/sovrn_amp/sovrn_ads.js"},"speakol":{"renderStartImplemented":true},"spotx":{"preconnect":"https://js.spotx.tv","renderStartImplemented":true},"springAds":{"prefetch":"https://www.asadcdn.com/adlib/adlib_seq.js","preconnect":["https://ib.adnxs.com"],"renderStartImplemented":true},"ssp":{"prefetch":"https://ssp.imedia.cz/static/js/ssp.js","renderStartImplemented":true,"consentHandlingOverride":true},"strossle":{"preconnect":["https://amp.spklw.com","https://widgets.sprinklecontent.com","https://images.sprinklecontent.com"]},"sunmedia":{"prefetch":"https://vod.addevweb.com/sunmedia/amp/ads/sunmedia.js","preconnect":"https://static.addevweb.com","renderStartImplemented":true},"svknative":{"renderStartImplemented":true,"prefetch":"https://widget.svk-native.ru/js/embed.js"},"swoop":{"prefetch":"https://www.swoop-amp.com/amp.js","preconnect":["https://www.swpsvc.com","https://client.swpcld.com"],"renderStartImplemented":true},"taboola":{},"tcsemotion":{"prefetch":"https://ads.tcsemotion.com/www/delivery/amphb.js","renderStartImplemented":true},"teads":{"prefetch":"https://s8t.teads.tv/media/format/v3/teads-format.min.js","preconnect":["https://cdn2.teads.tv","https://a.teads.tv","https://t.teads.tv","https://r.teads.tv"],"consentHandlingOverride":true},"temedya":{"prefetch":["https://widget.cdn.vidyome.com/builds/loader-amp.js","https://vidyome-com.cdn.vidyome.com/vidyome/builds/widgets.js"],"renderStartImplemented":true},"torimochi":{"renderStartImplemented":true},"tracdelight":{"prefetch":"https://scripts.tracdelight.io/amp.js","renderStartImplemented":true},"triplelift":{},"trugaze":{"clientIdScope":"__tg_amp","renderStartImplemented":true},"uas":{"prefetch":"https://ads.pubmatic.com/AdServer/js/phoenix.js"},"ucfunnel":{"renderStartImplemented":true},"uzou":{"preconnect":["https://speee-ad.akamaized.net"],"renderStartImplemented":true},"unruly":{"prefetch":"https://video.unrulymedia.com/native/native-loader.js","renderStartImplemented":true},"valuecommerce":{"prefetch":"https://amp.valuecommerce.com/amp_bridge.js","preconnect":["https://ad.jp.ap.valuecommerce.com"],"renderStartImplemented":true},"vdoai":{"prefetch":"https://a.vdo.ai/core/dependencies_amp/vdo.min.js","renderStartImplemented":true},"videointelligence":{"preconnect":"https://s.vi-serve.com","renderStartImplemented":true},"videonow":{"renderStartImplemented":true},"viralize":{"renderStartImplemented":true},"vmfive":{"prefetch":"https://man.vm5apis.com/dist/adn-web-sdk.js","preconnect":["https://vawpro.vm5apis.com","https://vahfront.vm5apis.com"],"renderStartImplemented":true},"webediads":{"prefetch":"https://eu1.wbdds.com/amp.min.js","preconnect":["https://goutee.top","https://mediaathay.org.uk"],"renderStartImplemented":true},"weborama-display":{"prefetch":["https://cstatic.weborama.fr/js/advertiserv2/adperf_launch_1.0.0_scrambled.js","https://cstatic.weborama.fr/js/advertiserv2/adperf_core_1.0.0_scrambled.js"]},"whopainfeed":{"prefetch":"https://widget.infeed.com.ar/widget/widget-amp.js"},"widespace":{},"wisteria":{"renderStartImplemented":true},"wpmedia":{"prefetch":"https://std.wpcdn.pl/wpjslib/wpjslib-amp.js","preconnect":["https://www.wp.pl","https://v.wpimg.pl"],"renderStartImplemented":true},"xlift":{"prefetch":"https://cdn.x-lift.jp/resources/common/xlift_amp.js","renderStartImplemented":true},"yahoo":{"prefetch":"https://s.yimg.com/aaq/ampad/display.js","preconnect":"https://us.adserver.yahoo.com"},"yahoofedads":{"renderStartImplemented":true},"yahoojp":{"prefetch":["https://s.yimg.jp/images/listing/tool/yads/ydn/amp/amp.js","https://yads.c.yimg.jp/js/yads.js"],"preconnect":"https://yads.yahoo.co.jp"},"yahoonativeads":{"renderStartImplemented":true},"yandex":{"prefetch":"https://an.yandex.ru/system/context_amp.js","renderStartImplemented":true},"yengo":{"renderStartImplemented":true},"yieldbot":{"prefetch":["https://cdn.yldbt.com/js/yieldbot.intent.amp.js","https://msg.yldbt.com/js/ybmsg.html"],"preconnect":"https://i.yldbt.com"},"yieldmo":{"prefetch":"https://static.yieldmo.com/ym.1.js","preconnect":["https://s.yieldmo.com","https://ads.yieldmo.com"],"renderStartImplemented":true},"yieldone":{"prefetch":"https://img.ak.impact-ad.jp/ic/pone/commonjs/yone-amp.js"},"yieldpro":{"preconnect":"https://creatives.yieldpro.eu","renderStartImplemented":true},"zedo":{"prefetch":"https://ss3.zedo.com/gecko/tag/Gecko.amp.min.js","renderStartImplemented":true},"zen":{"prefetch":"https://zen.yandex.ru/widget-loader","preconnect":["https://yastatic.net/"],"renderStartImplemented":true},"zergnet":{},"zucks":{"preconnect":["https://j.zucks.net.zimg.jp","https://sh.zucks.net","https://k.zucks.net","https://static.zucks.net.zimg.jp"]},"baidu":{"prefetch":"https://dup.baidustatic.com/js/dm.js","renderStartImplemented":true},"sulvo":{}}');var Q,R="Webkit webkit Moz moz ms O o".split(" ");function S(a,b,c){var d=a.style;if(!x(b,"--")){Q||(Q=Object.create(null));var e=Q[b];if(!e){e=b;if(void 0===d[b]){var k=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var m=0;m<R.length;m++){var f=R[m]+k;if(void 0!==d[f]){k=f;break b}}k=""}void 0!==d[k]&&(e=k)}Q[b]=e}b=e}b&&(x(b,"--")?a.style.setProperty(b,c):a.style[b]=c)}function T(a,b){void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")};function U(a){a=AMP.BaseElement.call(this,a)||this;a.o=a.getVsync();a.j=null;a.h=null;a.m=!1;a.l=null;a.A=!1;a.w=null;return a}var V=AMP.BaseElement;U.prototype=h(V.prototype);U.prototype.constructor=U;if(v)v(U,V);else for(var W in V)if("prototype"!=W)if(Object.defineProperties){var X=Object.getOwnPropertyDescriptor(V,W);X&&Object.defineProperty(U,W,X)}else U[W]=V[W];U.D=V.prototype;g=U.prototype;
g.buildCallback=function(){var a=this;this.h=this.getViewport();this.element.classList.add("i-amphtml-sticky-ad-layout");I(this.win)["sticky-ad-padding-bottom"]&&(K(this.win,[{experimentId:"sticky-ad-padding-bottom",isTrafficEligible:function(){return!0},branches:["21066401","21066402"]}]),"21066402"==L(this.win)&&S(this.element,"padding-bottom","env(safe-area-inset-bottom, 0px)"));var b=this.getRealChildren();G(1==b.length&&"AMP-AD"==b[0].tagName);this.j=b[0];M(this.element).setOwner(this.j,this.element);
this.w=P(this.j).then(function(a){return a.whenBuilt()}).then(function(){return a.mutateElement(function(){T(a.element,!0)})});var c=this.win.document.createElement("amp-sticky-ad-top-padding");c.classList.add("amp-sticky-ad-top-padding");this.element.insertBefore(c,this.j);this.win.setTimeout(function(){a.l=a.h.onScroll(function(){1<a.h.getScrollTop()&&Y(a)})})};
g.layoutCallback=function(){if(this.m){T(this.element,!0);this.h.updatePaddingBottom(this.element.offsetHeight);var a=M(this.element);a.updateInViewport(this.element,this.j,!0);a.scheduleLayout(this.element,this.j)}w||(w=Promise.resolve(void 0));var b=w;return b};g.isAlwaysFixed=function(){return!0};g.unlayoutCallback=function(){this.h.updatePaddingBottom(0);return!0};g.detachedCallback=function(){Z(this)};g.collapsedCallback=function(){var a=this;this.A=!0;this.m=!1;T(this.element,!1);this.o.mutate(function(){a.h.updatePaddingBottom(0)})};
function Z(a){a.l&&(a.l(),a.l=null)}function Y(a){Z(a);a.w.then(function(){a.mutateElement(function(){a.A||(a.m=!0,aa(a),a.h.addToFixedLayer(a.element,!0).then(function(){return ba(a)}))})})}function ba(a){P(a.j).then(function(b){b.whenBuilt().then(a.B.bind(a))})}
g.B=function(){var a=this,b=this.j,c=M(this.element);c.updateInViewport(this.element,b,!0);c.scheduleLayout(this.element,b);return b.signals().whenSignal("render-start").then(function(){var b;return a.measureElement(function(){b=(a.win.getComputedStyle(a.element)||Object.create(null)).backgroundColor}).then(function(){return a.o.mutatePromise(function(){a.element.setAttribute("visible","");a.h.updatePaddingBottom(a.element.offsetHeight);var c=b,d=c.replace(/\(([^,]+),([^,]+),([^,)]+),[^)]+\)/g,"($1,$2,$3, 1)");
c!=d&&(F().warn("AMP-STICKY-AD","Do not allow container to be semitransparent"),S(a.element,"background-color",d))})})})};function aa(a){var b=a.win.document.createElement("button");b.classList.add("amp-sticky-ad-close-button");b.setAttribute("aria-label",a.element.getAttribute("data-close-button-aria-label")||"Close this ad");var c=a.C.bind(a);b.addEventListener("click",c);a.element.appendChild(b)}
g.C=function(){var a=this;this.o.mutate(function(){a.m=!1;M(a.element).scheduleUnlayout(a.element,a.j);a.h.removeFromFixedLayer(a.element);var b=a.element;b.parentElement&&b.parentElement.removeChild(b);a.h.updatePaddingBottom(0)})};(function(a){a.registerElement("amp-sticky-ad",U,"amp-sticky-ad{position:fixed!important;text-align:center;bottom:0!important;left:0;width:100%!important;z-index:11;max-height:100px!important;box-sizing:border-box;opacity:1!important;background-image:none!important;background-color:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,0.2)!important;margin-bottom:0!important}amp-sticky-ad-top-padding{display:block;width:100%!important;background:#fff;height:4px;max-height:5px!important;z-index:12}.i-amphtml-sticky-ad-layout{display:-ms-flexbox;display:flex;visibility:hidden!important;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;overflow:visible!important;transform:translateZ(0)!important}amp-sticky-ad[visible]{visibility:visible!important}.i-amphtml-sticky-ad-layout>amp-ad{display:block}.amp-sticky-ad-close-button{position:absolute;visibility:hidden;width:28px;height:28px;top:-28px;right:0;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='13' viewBox='341 8 13 13' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%234F4F4F' d='M354 9.31L352.69 8l-5.19 5.19L342.31 8 341 9.31l5.19 5.19-5.19 5.19 1.31 1.31 5.19-5.19 5.19 5.19 1.31-1.31-5.19-5.19z' fill-rule='evenodd'/%3E%3C/svg%3E\");background-size:13px 13px;background-position:9px;background-color:#fff;background-repeat:no-repeat;box-shadow:0 -1px 1px 0 rgba(0,0,0,0.2);border:none;border-radius:12px 0 0 0}amp-sticky-ad[visible]>.amp-sticky-ad-close-button{visibility:visible}.amp-sticky-ad-close-button:before{position:absolute;content:\"\";top:-20px;right:0;left:-20px;bottom:0}[dir=rtl] .amp-sticky-ad-close-button{right:auto;left:0;border-top-left-radius:0;border-top-right-radius:12px;background-position:6px}[dir=rtl] .amp-sticky-ad-close-button:before{right:-20px;left:0}\n/*# sourceURL=/extensions/amp-sticky-ad/1.0/amp-sticky-ad.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-sticky-ad-1.0.js.map