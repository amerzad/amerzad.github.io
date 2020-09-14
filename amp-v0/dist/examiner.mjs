(function(){function detectLongTasks(a){new a.PerformanceObserver((function(a){let b=a.getEntries();for(let a=0;a<b.length;a++){if("longtask"!=b[a].entryType||"cross-origin-descendant"!=b[a].name)continue;let c=b[a].attribution[0];if(!c||!c.containerSrc)continue;let{duration:e}=b[a];let d=c.containerSrc;if(c.containerName){let a=c.containerName.match(/"type":"([^"]*)"/);1<a.length&&(d=`<amp-ad type="${a[1]}">`)}console.log(`%c LONG TASK %c ${e}ms from ${d}`,"background: red; color: white","background: #fff; color: #000")}})).observe({entryTypes:["longtask"]})}function isLongTaskApiSupported(a){return!!a.PerformanceObserver&&!!a.TaskAttributionTiming&&"containerName"in a.TaskAttributionTiming.prototype}isLongTaskApiSupported(self)&&detectLongTasks(self)})();