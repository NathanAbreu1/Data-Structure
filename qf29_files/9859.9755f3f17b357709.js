(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9859,3740,1598],{76208:function(n,r,e){"use strict";e.d(r,{Q:function(){return i}});var t=e(52322),o=e(62082);function a(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function c(n,r){if(null==n)return{};var e,t,o=function(n,r){if(null==n)return{};var e,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)e=a[t],r.indexOf(e)>=0||(o[e]=n[e]);return o}(n,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)e=a[t],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var i=function(n){return(0,o.q$)(n)};r.Z=function(n){var r=n.src,e=n.alt,o=n.loading,l=void 0===o?"lazy":o,u=c(n,["src","alt","loading"]);return(0,t.jsx)("img",function(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},t=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),t.forEach((function(r){a(n,r,e[r])}))}return n}({src:i(r),alt:e},u,{loading:l}))}},33816:function(n,r,e){"use strict";e.d(r,{Z:function(){return b}});var t=e(52322),o=e(2784),a=e(72779),c=e.n(a),i=e(24840),l=e(57866),u=e.n(l);function s(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function b(n){var r=n.userName,e=n.userImage,a=n.avatarClassName,l=i.T3[r.length%8],b=(0,o.useState)(!1),d=b[0],v=b[1];return(0,t.jsx)("div",{children:e&&!d?(0,t.jsx)("img",{className:c()(u().avatar,s({},a,a)),src:e,alt:r,width:35,height:35,onError:function(){return v(!0)}}):(0,t.jsx)("div",{style:{background:"".concat(l)},className:c()(u().avatar,u().avatar_initial_letter,s({},a,a)),"data-testid":"user-initials",children:r[0]})})}},24457:function(n,r,e){"use strict";var t=e(52322),o=e(72779),a=e.n(o),c=e(80912),i=e.n(c);function l(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}r.Z=function(n){var r=n.isOpen,e=n.popupHeight,o=n.parentClassName,c=n.popupClassName,u=n.children,s=n.popoverRef,b=n.hasBackdrop,d=void 0!==b&&b;return r?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{ref:s,className:a()(i().popup,"show-in-tablet",l({},"".concat(c),c)),style:{height:r?e:"0"},children:(0,t.jsx)("div",{className:a()(l({},"".concat(o),o)),children:u})}),d?(0,t.jsx)("div",{className:a()(i().backdrop,"show-in-tablet")}):null]}):null}},40792:function(n,r,e){"use strict";e.d(r,{Z:function(){return b}});var t=e(52322),o=e(2784),a=e(72779),c=e.n(a),i=e(57367),l=e.n(i),u=e(24457);function s(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function b(n){var r,e=n.sidebarClassName,a=n.anchorRef,i=n.isOpen,b=n.children,d=n.popupHeight,v=n.popupClassName,f=(0,o.useState)(!1),p=f[0],g=f[1];return(0,o.useEffect)((function(){g(!0)}),[]),(0,t.jsxs)("div",{ref:a||null,children:[(0,t.jsx)("div",{className:c()(l().sidebar_ui,i&&l().sidebar_open_ui,l().sidebar_container,"hide-in-tablet",(r={},s(r,l().transition,p),s(r,e,e),r)),children:b}),i?(0,t.jsx)(u.Z,{isOpen:i,popupHeight:d,parentClassName:e,popupClassName:v,children:b}):null]})}},88472:function(n,r,e){"use strict";e.d(r,{Z:function(){return f}});var t=e(56666),o=e(99980),a=e(2784),c=e(13980),i=e.n(c),l=e(72779),u=e.n(l),s=e(52641),b=["className","component","disabled","forwardedRef"];function d(n,r){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),e.push.apply(e,t)}return e}var v=function(n){var r=n.className,e=n.component,c=n.disabled,i=n.forwardedRef,l=(0,o.Z)(n,b);return a.createElement(e||"a",function(n){for(var r=arguments,e=function(e){var o=null!=r[e]?r[e]:{};e%2?d(Object(o),!0).forEach((function(r){(0,t.Z)(n,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(o,r))}))},o=1;o<arguments.length;o++)e(o);return n}({className:u()("tappable",{disabled:c},(0,t.Z)({},r,r)),ref:i},l))};v.propTypes={children:i().node,className:i().string,disabled:i().bool};var f=(0,s.Z)(v)},57866:function(n){n.exports={avatar:"avatar_avatar__u_XeA",avatar_initial_letter:"avatar_avatar_initial_letter__nosOq"}},80912:function(n){n.exports={popup:"popoverMobile_popup__xtxK4",backdrop:"popoverMobile_backdrop__KWrmO"}},57367:function(n){n.exports={sidebar_ui:"sidebar_sidebar_ui__IJWgB",transition:"sidebar_transition__MTYhS",sidebar_open_ui:"sidebar_sidebar_open_ui__Bhvzo"}},78165:function(n,r,e){"use strict";e.d(r,{_:function(){return t}});var t={exports:{}}},52011:function(n,r,e){"use strict";e.d(r,{m:function(){return t}});var t={}},58501:function(n,r,e){"use strict";e.d(r,{c:function(){return t}});var t={exports:{}}},91178:function(n,r,e){"use strict";e.d(r,{Z:function(){return d}});var t=e(76814),o=e(97570),a=e(2784),c=e(90383),i=e(60898),l=e(87257),u=e(46400);(0,e(38122).Z)('.tappable {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  flex: 0 0 auto;\n  cursor: pointer;\n}\n.tappable:hover {\n  background: rgba(1, 1, 1, 0.1);\n}\n.tappable:active {\n  background: rgba(1, 1, 1, 0.2);\n}\n.tappable.disabled {\n  pointer-events: none;\n  opacity: 0.7;\n  filter: grayscale(0.5);\n}\n.tappable.disabled.btn-tooltip {\n  pointer-events: unset;\n}\n.tappable.no-highlight:hover, .tappable.no-highlight:active {\n  background: transparent;\n}\n\n.btn {\n  padding: 1rem;\n  line-height: normal;\n  border-radius: 0.4rem;\n  background-color: #dcdcdc;\n}\n\n.btn-default {\n  color: var(--default-font-color);\n}\n.btn-default:hover, .btn-default:active {\n  background-color: #dcdcdc;\n}\n\n.btn-light {\n  background-color: transparent;\n  color: var(--light-font-color);\n}\n\n.btn-dark {\n  background-color: transparent;\n  color: var(--dark-font-color);\n}\n\n.btn-primary {\n  background: var(--primary-color);\n  color: var(--light-font-color);\n}\n.btn-primary:hover {\n  background: var(--primary-color-50);\n  color: var(--light-font-color);\n}\n.btn-primary:active {\n  background: var(--primary-color-70);\n}\n\n.btn-secondary {\n  background: var(--secondary-color);\n  color: var(--light-font-color);\n}\n.btn-secondary:hover {\n  background: var(--secondary-color-50);\n  color: var(--light-font-color);\n}\n.btn-secondary:active {\n  background: var(--secondary-color-70);\n}\n\n.btn-success {\n  background: var(--success-color);\n  color: var(--light-font-color);\n}\n.btn-success:hover {\n  background: var(--accent-color-v4-50);\n}\n.btn-success:active {\n  background: var(--accent-color-v4-70);\n}\n\n.btn-danger {\n  background: var(--danger-color);\n  color: var(--light-font-color);\n}\n.btn-danger:hover {\n  background: var(--accent-color-v5-50);\n}\n.btn-danger:active {\n  background: var(--accent-color-v5-70);\n}\n\n.btn-warning {\n  background: var(--warning-color);\n  color: var(--light-font-color);\n}\n.btn-warning:hover {\n  background: var(--accent-color-v6-50);\n}\n.btn-warning:active {\n  background: var(--accent-color-v6-70);\n}\n\n.btn-inverted {\n  background: none !important;\n  color: var(--default-font-color);\n}\n.btn-inverted:hover {\n  background: rgba(1, 1, 1, 0.1) !important;\n  color: var(--default-font-color);\n}\n.btn-inverted:active {\n  color: var(--default-font-color);\n}\n.btn-inverted.btn-primary {\n  color: var(--primary-color);\n}\n.btn-inverted.btn-primary:hover {\n  color: var(--primary-color);\n}\n.btn-inverted.btn-primary:active {\n  color: var(--primary-color-70);\n}\n.btn-inverted.btn-secondary {\n  color: var(--secondary-color);\n}\n.btn-inverted.btn-secondary:hover {\n  color: var(--secondary-color);\n}\n.btn-inverted.btn-secondary:active {\n  color: var(--secondary-color-70);\n}\n.btn-inverted.btn-success {\n  color: var(--success-color);\n}\n.btn-inverted.btn-success:hover {\n  color: var(--accent-color-v4-50);\n}\n.btn-inverted.btn-success:active {\n  color: var(--accent-color-v4-70);\n}\n.btn-inverted.btn-danger {\n  color: var(--danger-color);\n}\n.btn-inverted.btn-danger:hover {\n  color: var(--accent-color-v5-50);\n}\n.btn-inverted.btn-danger:active {\n  color: var(--accent-color-v5-70);\n}\n\n.btn-outlined {\n  background-color: transparent;\n  border: 0.1rem solid var(--default-font-color);\n  color: var(--default-font-color);\n}\n.btn-outlined:hover {\n  background: rgba(0, 0, 0, 0.05) !important;\n}\n.btn-outlined:active {\n  background: rgba(0, 0, 0, 0.05) !important;\n}\n.btn-outlined.btn-primary {\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.btn-outlined.btn-primary:hover {\n  border-color: var(--primary-color-50);\n}\n.btn-outlined.btn-primary:active {\n  border-color: var(--primary-color-70);\n}\n.btn-outlined.btn-secondary {\n  color: var(--secondary-color);\n  border-color: var(--secondary-color);\n}\n.btn-outlined.btn-secondary:hover {\n  border-color: var(--secondary-color-50);\n}\n.btn-outlined.btn-secondary:active {\n  border-color: var(--secondary-color-70);\n}\n.btn-outlined.btn-success {\n  color: var(--success-color);\n  border-color: var(--success-color);\n}\n.btn-outlined.btn-success:hover {\n  border-color: var(--accent-color-v4-50);\n}\n.btn-outlined.btn-success:active {\n  border-color: var(--accent-color-v4-70);\n}\n.btn-outlined.btn-danger {\n  color: var(--danger-color);\n  border-color: var(--danger-color);\n}\n.btn-outlined.btn-danger:hover {\n  border-color: var(--accent-color-v5-50);\n}\n.btn-outlined.btn-danger:active {\n  border-color: var(--accent-color-v5-70);\n}\n\n.btn-round {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n}\n.btn-round.btn-large {\n  width: 4.5rem;\n  height: 4.5rem;\n}\n.btn-round.btn-small {\n  width: math-div(3rem, 1.5);\n  height: math-div(3rem, 1.5);\n}\n\n.btn-long {\n  padding: 1rem 3rem;\n}\n\n.btn-small {\n  font-size: 1.2rem;\n  padding: 0.8rem;\n  text-transform: capitalize;\n}\n.btn-small.btn-long {\n  padding: 0.8rem 2.4rem;\n}\n\n.btn-large {\n  font-size: 2rem;\n  padding: 1.2rem;\n  text-transform: capitalize;\n}\n.btn-large.btn-long {\n  padding: 1.2rem 3.6rem;\n}\n\n.btn-icon [class^=icon-], .btn-icon [class*=" icon-"] {\n  font-size: 1.6rem;\n}\n.btn-icon.btn-large [class^=icon-], .btn-icon.btn-large [class*=" icon-"] {\n  font-size: 2rem;\n}\n.btn-icon.btn-small [class^=icon-], .btn-icon.btn-small [class*=" icon-"] {\n  font-size: 1.4rem;\n}\n\n.btn-sharp {\n  border-radius: 0;\n}\n\n.btn-disabled {\n  cursor: default;\n  opacity: 0.5;\n}\n\nhtml.can-touch .tappable:hover {\n  background: none;\n  color: var(--default-font-color);\n}\nhtml.can-touch .btn:hover {\n  background: var(--primary-color);\n  color: var(--light-font-color);\n}\nhtml.can-touch .btn-primary:hover {\n  background: var(--primary-color);\n}\nhtml.can-touch .btn-secondary:hover {\n  background: var(--secondary-color);\n}\nhtml.can-touch .btn-success:hover {\n  background: var(--success-color);\n}\nhtml.can-touch .btn-danger:hover {\n  background: var(--danger-color);\n}\nhtml.can-touch .btn-inverted:hover {\n  background: none !important;\n  color: var(--primary-color);\n}');var s=["className","component","disabled","forwardedRef"];function b(n,r){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),e.push.apply(e,t)}return e}var d=(0,i.Z)(l.Z,u.Z)((function(n){var r=n.className,e=n.component,i=n.disabled,l=n.forwardedRef,u=(0,o.Z)(n,s);return a.createElement(e||"a",function(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?b(Object(e),!0).forEach((function(r){(0,t.Z)(n,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))}))}return n}({className:(0,c.Z)("tappable",{disabled:i},(0,t.Z)({},r,r)),ref:l},u))}))},46400:function(n,r,e){"use strict";e.d(r,{Z:function(){return d}});var t=e(8714),o=e(76814),a=e(97570),c=e(2784);function i(n,r){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),e.push.apply(e,t)}return e}function l(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?i(Object(e),!0).forEach((function(r){(0,o.Z)(n,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))}))}return n}var u=["gtmEventType","gtmEventAction","gtmEventResult","gtmEventCategory","gtmEventData","gtmEventLink","onClick","onFocus"];function s(n,r){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),e.push.apply(e,t)}return e}function b(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?s(Object(e),!0).forEach((function(r){(0,o.Z)(n,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))}))}return n}function d(n){return function(r){var e=r.gtmEventType,o=r.gtmEventAction,i=r.gtmEventResult,s=r.gtmEventCategory,d=r.gtmEventData,v=void 0===d?{}:d,f=r.gtmEventLink,p=r.onClick,g=r.onFocus,m=(0,a.Z)(r,u),y=(0,c.useCallback)((function(n){if(o===n&&e){var r=f||v.link;!function(n,r,e,t,o){var a,c,i=r||n;c=n&&t?"".concat(t,"_").concat(n):n,null===(a=window.GTMHelper)||void 0===a||a.track("eventFormatter",l(l({element:i,tagName:c,category:t,eventType:e||"click"},o||{}),window.GTMHelper.getContext(t)||{}))}(e,i,o,s,b(b({},v),{},{link:r}))}}),[e,i,o,s,v,f]),h=(0,c.useCallback)((function(){y("click"),p&&p.apply(void 0,arguments)}),[p,y]),O=(0,c.useCallback)((function(){y("focus"),g&&g.apply(void 0,arguments)}),[g,y]);return c.createElement(n,(0,t.Z)({},m,{onClick:h,onFocus:O}))}}},60710:function(n,r,e){"use strict";function t(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}e.d(r,{Z:function(){return t}})},12525:function(n,r,e){"use strict";e.d(r,{Z:function(){return o}});var t=e(84235);function o(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var t,o,a=[],c=!0,i=!1;try{for(e=e.call(n);!(c=(t=e.next()).done)&&(a.push(t.value),!r||a.length!==r);c=!0);}catch(n){i=!0,o=n}finally{try{c||null==e.return||e.return()}finally{if(i)throw o}}return a}}(n,r)||(0,t.Z)(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},84235:function(n,r,e){"use strict";e.d(r,{Z:function(){return o}});var t=e(60710);function o(n,r){if(n){if("string"==typeof n)return(0,t.Z)(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,t.Z)(n,r):void 0}}},36104:function(n,r,e){"use strict";e.d(r,{G:function(){return d}});var t=e(8714),o=e(2784),a=e(13980),c=e.n(a),i=function(n,r,e,t,o,a,c,i){if(!n){var l;if(void 0===r)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[e,t,o,a,c,i],s=0;(l=new Error(r.replace(/%s/g,(function(){return u[s++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}},l=function(n){return n.replace(/[A-Z]/g,(function(n){return"-"+n.toLowerCase()})).toLowerCase()},u=function(n){var r="",e=Object.keys(n);return e.forEach((function(t,o){var a=n[t];(function(n){return/[height|width]$/.test(n)})(t=l(t))&&"number"==typeof a&&(a+="px"),r+=!0===a?t:!1===a?"not "+t:"("+t+": "+a+")",o<e.length-1&&(r+=" and ")})),r},s=function(n){var r="";return"string"==typeof n?n:n instanceof Array?(n.forEach((function(e,t){r+=u(e),t<n.length-1&&(r+=", ")})),r):u(n)},b=function(){function n(n,r,e){var t=this;this.nativeMediaQueryList=n.matchMedia(r),this.active=!0,this.cancellableListener=function(){t.matches=t.nativeMediaQueryList.matches,t.active&&e.apply(void 0,arguments)},this.nativeMediaQueryList.addListener(this.cancellableListener),this.matches=this.nativeMediaQueryList.matches}return n.prototype.cancel=function(){this.active=!1,this.nativeMediaQueryList.removeListener(this.cancellableListener)},n}(),d=function(n){var r=n.query,e=n.queries,a=n.defaultMatches,c=n.targetWindow,l=n.onChange;!function(n){var r=n.query,e=n.queries,t=n.defaultMatches;r||e||r&&e||i(!1),void 0!==t&&r&&"boolean"!=typeof t&&i(!1),void 0!==t&&e&&"object"!=typeof t&&i(!1)}({query:r,queries:e,defaultMatches:a});var u=(0,o.useRef)([]),d=function(){var n,r,e=u.current.reduce((function(n,r){var e,o=r.name,a=r.mqListener;return(0,t.Z)({},n,((e={})[o]=a.matches,e))}),{});return n=e,1===(r=Object.keys(n)).length&&"__DEFAULT__"===r[0]?n.__DEFAULT__:n},v=function(){g(d())},f=(0,o.useState)((function(){return"object"!=typeof window?void 0!==a?a:!!r||Object.keys(e).reduce((function(n,r){var e;return(0,t.Z)({},n,((e={})[r]=!0,e))}),{}):(function(){var n=c||window;"function"!=typeof n.matchMedia&&i(!1);var t=e||function(n){return{__DEFAULT__:n}}(r);u.current=Object.keys(t).map((function(r){var e=t[r],o="string"!=typeof e?s(e):e;return{name:r,mqListener:new b(n,o,v)}}))}(),d())})),p=f[0],g=f[1];return(0,o.useEffect)((function(){return function(){return u.current.forEach((function(n){return n.mqListener.cancel()}))}}),[]),(0,o.useEffect)((function(){l&&l(p)}),[p,l]),p},v=c().oneOfType([c().string,c().object,c().arrayOf(c().object.isRequired)]);c().oneOfType([c().bool,c().objectOf(c().bool)]),c().objectOf(v),c().func,c().oneOfType([c().node,c().func]),c().object,c().func},73855:function(n,r,e){"use strict";e.d(r,{GF:function(){return a}});e(2784);var t=e(13980),o=e.n(t);var a=o().oneOfType([o().string,o().elementType])}}]);