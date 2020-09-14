(function(){'use strict';function detectLongTasks(a){(new a.PerformanceObserver(function(a){for(var c=a.getEntries(),b=0;b<c.length;b++)if("longtask"==c[b].entryType&&"cross-origin-descendant"==c[b].name){var d=c[b].attribution[0];if(d&&d.containerSrc){var g=c[b].duration,e=d.containerSrc;if(d.containerName){var f=d.containerName.match(/"type":"([^"]*)"/);1<f.length&&(e='<amp-ad type="'+f[1]+'">')}console.log("%c LONG TASK %c "+g+"ms from "+e,"background: red; color: white","background: #fff; color: #000")}}})).observe({entryTypes:["longtask"]})}
function isLongTaskApiSupported(a){return!!a.PerformanceObserver&&!!a.TaskAttributionTiming&&"containerName"in a.TaskAttributionTiming.prototype}isLongTaskApiSupported(self)&&detectLongTasks(self);})();

//# sourceMappingURL=examiner.js.map
