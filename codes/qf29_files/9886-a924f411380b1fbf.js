(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9886],{23432:function(e,r,n){"use strict";var t=n(52322),a=n(2784),i=n(72779),o=n.n(i),s=n(81125),c=n(45479),l=n.n(c);r.Z=function(){return(0,t.jsx)("div",{className:l().page_container,children:(0,t.jsxs)("div",{className:l().page_content_shimmer,children:[(0,t.jsx)(s.Z,{variant:"text",width:180,height:40,color:"$neutral-scale-3",className:o()(l().page_lines,"m-v-20","hide-in-tablet"),animationDisabled:!0},"skeleton-1"),(0,t.jsx)(s.Z,{variant:"text",width:120,height:35,color:"$neutral-scale-3",className:o()(l().page_lines,"m-v-20","show-in-tablet"),animationDisabled:!0},"skeleton-2"),(0,t.jsx)(s.Z,{variant:"text",width:464,height:16,color:"$neutral-scale-3",className:o()(l().page_lines,"m-v-20","hide-in-tablet"),animationDisabled:!0},"skeleton-3"),(0,t.jsx)(s.Z,{variant:"text",width:254,height:16,color:"$neutral-scale-3",className:o()(l().page_line,"show-in-tablet"),animationDisabled:!0},"skeleton-4"),(0,t.jsx)("div",{className:l().page_details_shimmer,children:Array.from({length:7}).map((function(e,r){return(0,t.jsxs)(a.Fragment,{children:[(0,t.jsx)(s.Z,{variant:"text",width:"100%",height:20,color:"$neutral-scale-3",className:o()(l().page_lines_details,"hide-in-tablet"),animationDisabled:!0},r),(0,t.jsx)(s.Z,{variant:"text",width:"100%",height:20,color:"$neutral-scale-3",className:o()(l().page_lines_details,"show-in-tablet"),animationDisabled:!0},"next_".concat(r))]},"".concat(r,"line"))}))},"shimmer_1")]},"shimmer_1")})}},40792:function(e,r,n){"use strict";n.d(r,{Z:function(){return p}});var t=n(52322),a=n(2784),i=n(72779),o=n.n(i),s=n(57367),c=n.n(s),l=n(24457);function u(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e){var r,n=e.sidebarClassName,i=e.anchorRef,s=e.isOpen,p=e.children,d=e.popupHeight,m=e.popupClassName,h=(0,a.useState)(!1),g=h[0],f=h[1];return(0,a.useEffect)((function(){f(!0)}),[]),(0,t.jsxs)("div",{ref:i||null,children:[(0,t.jsx)("div",{className:o()(c().sidebar_ui,s&&c().sidebar_open_ui,c().sidebar_container,"hide-in-tablet",(r={},u(r,c().transition,g),u(r,n,n),r)),children:p}),s?(0,t.jsx)(l.Z,{isOpen:s,popupHeight:d,parentClassName:n,popupClassName:m,children:p}):null]})}},99455:function(e,r,n){"use strict";var t=n(49857),a=n(34442);r.Z=function(e){var r,n=(0,t.ZP)("".concat((0,a.HK)(e).fetchCourseChapter),(function(){return(0,a.xA)(e)}),{revalidateOnFocus:!1,revalidateIfStale:!1,revalidateOnReconnect:!1}),i=n.data,o=n.error;return{moduleList:i||[],totalCourseTime:null===i||void 0===i||null===(r=i.meta_data)||void 0===r?void 0:r.total_course_time,error:o,moduleDataLoading:!(i||i||o)}}},66912:function(e,r,n){"use strict";var t=n(94776),a=n.n(t),i=n(2784),o=n(49857),s=n(34442),c=n(92308);function l(e,r,n,t,a,i,o){try{var s=e[i](o),c=s.value}catch(l){return void n(l)}s.done?r(c):Promise.resolve(c).then(t,a)}function u(e){return function(){var r=this,n=arguments;return new Promise((function(t,a){var i=e.apply(r,n);function o(e){l(i,t,a,o,s,"next",e)}function s(e){l(i,t,a,o,s,"throw",e)}o(void 0)}))}}function p(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){p(e,r,n[r])}))}return e}var m=function(){var e=u(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},r.modules.forEach((function(e){var r=e.entities_progress.reduce((function(e,r){return d({},e,p({},r.uuid,r.progress))}),{});n=d({},n,r,p({},e.slug,Number(e.module_progress)||0))})),e.abrupt("return",{progressMap:n,progressResponse:r});case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();r.Z=function(e){var r=(0,c.Z)().user,n=(0,o.ZP)(r?"".concat((0,s.HK)().fetchCourseProgress,"/").concat(r.id,"/").concat(e,"_progress"):null,u(a().mark((function r(){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,s.iC)(e);case 2:return n=r.sent,r.abrupt("return",m(n[0]));case 4:case"end":return r.stop()}}),r)})))),t=n.data,l=n.error,p=n.mutate,d=(0,i.useMemo)((function(){return!l&&t?t:null}),[t,l]),h=(0,i.useCallback)(function(){var e=u(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.L0)(r);case 3:return n=e.sent,e.abrupt("return",{last_chapter_entity:n.last_chapter_entity});case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.abrupt("return",{last_chapter_entity:""});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),[]),g=(0,i.useCallback)((function(){p()}),[p]);return{courseProgressInfo:(null===d||void 0===d?void 0:d.progressResponse)||null,progressMap:(null===d||void 0===d?void 0:d.progressMap)||{},registerCourseData:h,mutateCourseProgress:g,isLoading:!t&&!l&&(null===r||void 0===r?void 0:r.id)}}},45479:function(e){e.exports={page_container:"article_page_skeleton_page_container__NRVIv",page_side_data:"article_page_skeleton_page_side_data__dVXnN",page_content_shimmer:"article_page_skeleton_page_content_shimmer__8YQ0L",page_details_shimmer:"article_page_skeleton_page_details_shimmer__2LC4K",page_lines_details:"article_page_skeleton_page_lines_details__r52Z8"}},57367:function(e){e.exports={sidebar_ui:"sidebar_sidebar_ui__IJWgB",transition:"sidebar_transition__MTYhS",sidebar_open_ui:"sidebar_sidebar_open_ui__Bhvzo"}},67689:function(e,r,n){"use strict";n.d(r,{Z:function(){return d}});var t=n(8714),a=n(76814),i=n(97570),o=n(2784),s=n(90383);(0,n(38122).Z)(".progressbar {\n  display: flex;\n  justify-content: space-between;\n  border: 0.1rem solid var(--default-border-color);\n  border-radius: 0.8rem;\n  background-color: var(--body-background-color);\n  height: 1.7rem;\n  position: relative;\n}\n.progressbar__checkpoint {\n  position: absolute;\n}\n.progressbar__checkpoint-wrapper {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.2rem;\n}\n.progressbar__checkpoint-wrapper span {\n  margin-left: -0.5rem;\n}\n.progressbar__checkpoint-icon {\n  width: 3rem;\n  margin-top: -0.5rem;\n}\n.progressbar__checkpoint-text {\n  white-space: nowrap;\n  transform: translateX(-35%);\n}\n.progressbar__checkpoint-mark {\n  width: 0.1rem;\n  height: 2.5rem;\n  background-color: var(--neutral-scale-12);\n}\n.progressbar__color {\n  text-align: right;\n  border-radius: 0.8rem;\n  padding-right: 0.7rem;\n  background-color: var(--accent-color-v2-60);\n  font-size: 1.2rem;\n  color: var(--light-font-color);\n}\n.progressbar__limit {\n  font-size: 1.2rem;\n  padding-right: 0.5rem;\n}\n\n.width-percent {\n  padding-right: 0.5rem;\n}");var c=["className","min","value","limit","renderValue","progressbarClassName","orientation","minProgressWidth","checkpoints","showProgressLimit","widthPercentClass","showWidthPercent"];function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){(0,a.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var p=function(e){var r=e.value,n=e.bonus,t=e.min,a=e.limit,i=e.icon,c=e.text,l=e.link,u=e.linkUrl,p=e.linkClass,d=e.showValue,m=void 0===d||d,h=e.showLine,g=void 0===h||h,f=(r-t)/(a-t)*100;return o.createElement("div",{className:"progressbar__checkpoint",style:{left:"".concat(f,"%")}},o.createElement("div",{className:"progressbar__checkpoint-wrapper"},i&&o.createElement("img",{className:"progressbar__checkpoint-icon",src:i,alt:i}),n&&o.createElement("span",null,"".concat(100*n,"%")),g?o.createElement("div",{className:"progressbar__checkpoint-mark"}):"",m?o.createElement("span",null,r):"",c&&o.createElement("div",{className:"progressbar__checkpoint-text"},c),l&&o.createElement("a",{className:(0,s.Z)("progressbar__checkpoint-link",p),href:u},l)))};function d(e){var r=e.className,n=e.min,l=e.value,d=e.limit,m=e.renderValue,h=void 0!==m&&m,g=e.progressbarClassName,f=e.orientation,_=e.minProgressWidth,b=e.checkpoints,v=e.showProgressLimit,w=void 0!==v&&v,k=e.widthPercentClass,y=e.showWidthPercent,O=void 0===y||y,j=(0,i.Z)(e,c),x=(l-n)/(d-n)*100,P=u(u({},"horizontal"===f?{width:h&&x<8?_||"2.5rem":"".concat(String(x),"%")}:{width:"1.3rem",height:h&&x<8?"1.5rem":"".concat(String(x),"%")}),{},{display:h||0!==x?"block":"none"});return o.createElement(o.Fragment,null,O?o.createElement("div",{className:(0,s.Z)("width-percent",(0,a.Z)({},k,k))},x.toFixed(2),"%"):null,o.createElement("div",(0,t.Z)({className:(0,s.Z)("progressbar",(0,a.Z)({},r,r))},j),b&&b.length>0&&b.map((function(e){return o.createElement(p,{key:e.threshold,value:e.threshold,bonus:e.amount,min:n,limit:d,icon:e.icon,text:e.text,link:e.link,linkUrl:e.linkUrl,linkClass:e.linkClass,showValue:e.showValue,showLine:e.showLine})})),o.createElement("div",{className:(0,s.Z)("progressbar__color",(0,a.Z)({},g,g)),style:P},h?l:null),w&&x<100?o.createElement("div",{className:"progressbar__limit"},d):null))}d.orientation=Object.freeze({horizontal:"horizontal",vertical:"vertical"}),d.defaultProps={min:0,renderValue:!1,orientation:"horizontal",showProgressLimit:!1,value:69,limit:100,showWidthPercent:!0}},81125:function(e,r,n){"use strict";n.d(r,{Z:function(){return m}});var t=n(76814),a=n(97570),i=n(2784),o=n(13980),s=n.n(o),c=n(90383),l=n(73855);(0,n(38122).Z)(".skeleton {\n  background-image: linear-gradient(to right, #f6f7f8 0%, #e8eaed 20%, #f6f7f8 40%, #f6f7f8 100%);\n  background-color: #f6f7f8;\n  background-repeat: no-repeat;\n  background-size: 90rem 100rem;\n  animation: shimmer 720ms linear infinite;\n  animation-fill-mode: forwards;\n  border-radius: 0.4rem;\n}\n.skeleton--circle {\n  border-radius: 50%;\n}\n.skeleton--no-animation {\n  background-image: none;\n}");var u=["className","component","height","style","variant","width","animationDisabled","color"];function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function m(e){var r=e.className,n=e.component,o=e.height,s=e.style,l=e.variant,p=e.width,m=e.animationDisabled,h=e.color,g=(0,a.Z)(e,u);"text"===l?o=o||16:"circle"===l&&(o=p=p||36);var f={};return h&&(f={backgroundColor:h}),(0,i.createElement)(n,d({className:(0,c.Z)("skeleton","skeleton--".concat(l),{"skeleton--no-animation":m},(0,t.Z)({},r,r)),style:d(d({height:o,width:p},s),f)},g))}m.defaultProps={variant:"rect",component:"div"},m.propTypes={className:s().string,component:l.GF.isRequired,height:s().oneOfType([s().number,s().string]),variant:s().oneOf(["circle","rect","text"]).isRequired,width:s().oneOfType([s().number,s().string])}},73855:function(e,r,n){"use strict";n.d(r,{GF:function(){return i}});n(2784);var t=n(13980),a=n.n(t);var i=a().oneOfType([a().string,a().elementType])}}]);