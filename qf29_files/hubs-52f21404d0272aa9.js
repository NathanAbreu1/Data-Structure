(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9328],{98140:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hubs",function(){return n(65213)}])},65865:function(e,t,n){"use strict";var r=n(52322),i=n(19759),a=n.n(i);t.Z=function(e){var t=e.title,n=void 0===t?"No data found !!!":t,i=e.description,c=void 0===i?"Try altering query ":i;return(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsx)("h4",{"data-testid":"title",children:n}),(0,r.jsx)("h5",{"data-testid":"description",children:c})]})}},77287:function(e,t,n){"use strict";var r=n(52322),i=n(2784),a=n(96577),c=n.n(a),o=n(76208),u=n(34337);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}function _(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}t.Z=function(e){var t=e.src,n=e.fallbackSrc,a=void 0===n?"/images/img_placeholder.svg":n,s=_(e,["src","fallbackSrc"]),d=(0,i.useState)(!1),f=d[0],b=d[1];return((0,u.xb)(t)||f)&&a.startsWith("/images")?(0,r.jsx)(o.Z,l({},s,{src:a})):(0,r.jsx)(c(),l({loading:"lazy"},s,{src:t,unoptimized:!0,onError:function(){b(!0)},onErrorCapture:function(){b(!0)}}))}},50895:function(e,t,n){"use strict";var r=n(52322),i=n(39097),a=n.n(i),c=n(72779),o=n.n(c),u=n(77287),s=n(73722),l=n.n(s),_=n(94102);t.Z=function(e){var t=e.heading,n=e.description,i=e.modules_count,c=e.color,s=void 0===c?"#D6DEE5":c,d=e.link,f=e.hubImg,b=e.eligible_for_certificate,h=void 0!==b&&b;return(0,r.jsx)(a(),{href:d,passHref:!0,children:(0,r.jsx)("a",{"data-name":"hub_card","data-id":"hub_card","data-heading":t,className:l().linkContainer,children:(0,r.jsxs)("div",{className:l().container,children:[(0,r.jsx)("div",{style:{background:"".concat(s)},className:l().thumbnail,children:(0,r.jsx)(u.Z,{fallbackSrc:"/images/img_placeholder.svg",src:f||"",unoptimized:!0,layout:"fill",objectFit:"cover",className:l().image_container,alt:t})}),(0,r.jsxs)("div",{className:l().content,children:[(0,r.jsx)("div",{"data-testid":"heading",className:o()(l().heading,"h3 m-b-10"),children:t}),(0,r.jsx)("div",{className:o()(l().description,"h5"),title:n,children:n}),(0,r.jsxs)("div",{className:o()(l().hub_footer,"m-t-20"),children:[(0,r.jsxs)("div",{className:o()(l().modules),children:["".concat(i," Modules")," "]}),h?(0,r.jsx)(_.Z,{title:"Certificate Included",titleClassName:l().certificate}):null]})]})]})})})}},94102:function(e,t,n){"use strict";var r=n(52322),i=n(76208),a=n(50351),c=n(72779),o=n.n(c),u=n(95993),s=n.n(u);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.Z=function(e){var t,n=e.icon,c=void 0===n?"/images/certificate_icon_blue.webp":n,u=e.title,_=void 0===u?"Certificates":u,d=e.titleClassName,f=e.badgeImgClass,b=e.certificateBadgeClass,h=e.courseCertificate,p=e.onClose;return h&&(c="/images/certificate_icon_blue.webp"),(0,r.jsxs)("div",{className:o()(s().main_container,b),children:[(0,r.jsxs)("div",{className:s().container,children:[(0,r.jsx)(i.Z,{src:c,alt:"certificate icon",width:16,height:16,className:o()(s().icon_image,(t={},l(t,"".concat(f),f),l(t,s().margin_course_icon,h),t))}),(0,r.jsx)("div",{className:o()(s().title,l({},"".concat(d),d)),children:_})]}),p?(0,r.jsx)(a.Z,{name:"close",className:"show-in-tablet",onClick:p}):null]})}},11713:function(e,t,n){"use strict";n.d(t,{L9:function(){return v},Mw:function(){return h},RH:function(){return j},bd:function(){return m},yR:function(){return p},yo:function(){return f}});var r=n(94776),i=n.n(r),a=n(66902),c=n(24840),o=n(62082),u=n(67636);function s(e,t,n,r,i,a,c){try{var o=e[a](c),u=o.value}catch(s){return void n(s)}o.done?t(u):Promise.resolve(u).then(r,i)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function c(e){s(a,r,i,c,o,"next",e)}function o(e){s(a,r,i,c,o,"throw",e)}c(void 0)}))}}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){_(e,t,n[t])}))}return e}var f={fetchCategory:"".concat(o.GW,"/v1/hubs/categories"),fetchHubs:"".concat(o.GW,"/v1/search/hubs"),fetchUserHubs:"".concat(o.GW,"/v1/users/bookmarks/hub"),fetchMyHubs:"".concat(o.GW,"/v1/users/hubs"),fetchMyCourses:"".concat(o.GW,"/v1/users/courses")},b=function(e){return{fetchHubDetails:"".concat(o.GW,"/v1/hub/").concat(e),fetchUserMeta:"".concat(o.GW,"/v1/users/hub/").concat(e,"/progress"),registerHub:"".concat(o.GW,"/v1/users/hub/").concat(e)}};function h(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"desc",c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,a.Nv)(a.f2.POST,f.fetchHubs,{filters:{page:{limit:t,current_page:e},sort:{key:r,order:i},tags:n||[],q:c}})}function p(e,t,n,r){return(0,a.Nv)(a.f2.POST,f.fetchUserHubs,{filters:{page:{limit:t,current_page:e},sort:{key:r,order:"asc"},tags:n?[n]:[]}})}function m(e){return g.apply(this,arguments)}function g(){return g=l(i().mark((function e(t){var n,r,o,s=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:c.L8,r=s.length>2&&void 0!==s[2]&&s[2],e.next=3,(0,a.Nv)(a.f2.POST,f.fetchMyHubs,{filters:{page:{current_page:t,limit:n,exclude_completed:r}}});case 3:return o=e.sent,e.abrupt("return",(0,u.HC)(o));case 5:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return x=l(i().mark((function e(t){var n,r,o,s=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:c.L8,r=s.length>2&&void 0!==s[2]&&s[2],e.next=3,(0,a.Nv)(a.f2.GET,f.fetchMyCourses,{q:null,current_page:t,limit:n,exclude_completed:r});case 3:return o=e.sent,e.abrupt("return",(0,u.HC)(o));case 5:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function j(e){return(0,a.Nv)(a.f2.POST,b(e).registerHub).catch((function(){}))}!function(){var e=l(i().mark((function e(){var t,n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[{attributes:{title:"All",slug:"all"}}],n=[{title:"All",slug:"all"}],r=Promise.all([h(1,6,"","created_at","asc")]),e.next=6,r;case 6:return a=e.sent.reduce((function(e,n,r){var i=n.data,a=t[r],c=d({},a.attributes,{hubs:i});return d({},e,_({},a.attributes.slug,c))}),{}),e.abrupt("return",[n,a]);case 10:e.prev=10,e.t0=e.catch(0);case 12:return e.abrupt("return",[[],{}]);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))}()},65213:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return k},default:function(){return O}});var r=n(52322),i=n(97729),a=n(13401),c=n(44385),o=n(2784),u=n(72779),s=n.n(u),l=n(63308),_=n(24840),d=n(49857),f=n(65865),b=n(23833),h=n.n(b),p=n(11713),m=n(50895),g=n(57394),v=n.n(g),x=function(e){var t=e.hubs;return(0,r.jsx)("div",{className:v().container,children:null===t||void 0===t?void 0:t.map((function(e,t){var n=e.attributes,i=n.slug,a=n.title,c=n.description,o=n.modules_count,u=n.cover_image,s=n.eligible_for_certificate;return(0,r.jsx)(m.Z,{heading:a,hubImg:u,description:c,color:_.e9[t%_.e9.length],modules_count:o,link:"/".concat(i),eligible_for_certificate:s},i)}))})},j=n(80107),y=n(90143),N=n(52876),w=function(){var e=(0,o.useContext)(a.Es),t=e.activePage,n=e.setActivePage,i=(0,d.ZP)("".concat(p.yo.fetchHubs,"?page=").concat(t,"&limit=").concat(_.L8),(function(){return(0,p.Mw)(t,_.L8,"","created_at","asc")})),c=i.data,u=i.error;(0,N.Z)({page_number:t});return(0,r.jsxs)("div",{className:s()("sr-container",h().pageContainer),children:[(0,r.jsx)(y.Z,{className:h().track_breadcrumb,items:[{title:"Reading Tracks",slug:"reading-tracks"}]}),(0,r.jsx)("div",{className:h().sortContainer}),(0,r.jsxs)("div",{className:h().tempContainer,children:[(0,r.jsx)("div",{className:h().tempHeader,children:"Reading Tracks "}),function(){var e;return c||u?(null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.length)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{hubs:c.data}),c.total_count>_.L8?(0,r.jsx)(l.Z,{forcePage:t-1,onPageChange:function(e){var t=e.selected;return n(t+1)},pageCount:c.total_count/_.L8,marginPagesDisplayed:1,pageRangeDisplayed:4}):null]}):(0,r.jsx)(f.Z,{}):(0,r.jsx)(j.Z,{})}()]})]})},C=n(63103),k=!0,O=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(C.Z,{}),(0,r.jsx)(i.default,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://www.scaler.com/topics/hubs/"})}),(0,r.jsxs)(a.ZP,{defaultTab:"all",children:[(0,r.jsx)(c.Z,{classNames:"show-in-mobile show-in-tablet"}),(0,r.jsx)(w,{})]})]})}},19759:function(e){e.exports={container:"no-data-found_container__Trjpy"}},73722:function(e){e.exports={linkContainer:"card_linkContainer__D46Nt",container:"card_container__fCXlS",thumbnail:"card_thumbnail__OSmjR",image_container:"card_image_container___hVpI",content:"card_content__PD2hZ",description:"card_description__DiYVu",heading:"card_heading__BzcrB",modules:"card_modules__XxOBK",hub_footer:"card_hub_footer__ddQ_t",certificate:"card_certificate__qvN1h"}},95993:function(e){e.exports={main_container:"badge_main_container__H7SeI",container:"badge_container__Oy2cY",title:"badge_title__RE0eP",icon_image:"badge_icon_image__EE_Gg",margin_course_icon:"badge_margin_course_icon__wICP5"}},23833:function(e){e.exports={aboveTablet:"(min-width: 769px)",pageContainer:"hub_pageContainer__sjA5m",container:"hub_container__5mNE6",banner:"hub_banner__3nDHB",backdrop:"hub_backdrop__XDohl",active:"hub_active__kn3FX",navigation:"hub_navigation__TiNl8",list:"hub_list__9oIRp",activeItem:"hub_activeItem__2D_ji",content:"hub_content__pJHLc",module:"hub_module__qEilS",fab:"hub_fab___f1oo",sortContainer:"hub_sortContainer__iCX3m",sortBy:"hub_sortBy__nj8nE",tempContainer:"hub_tempContainer__4gMQ8",tempHeader:"hub_tempHeader__iy9nP",module_order:"hub_module_order__we2Lb",module_title:"hub_module_title__UnpnN",certificate_title:"hub_certificate_title__NhnZ0",active_certificate_title:"hub_active_certificate_title__LzCRf",popup_style:"hub_popup_style__uMU99",popup_content:"hub_popup_content__cUF7z",popup_close:"hub_popup_close__c_FfC",popup_navigation:"hub_popup_navigation__8hkir",breadcrumb:"hub_breadcrumb__Bpm9s",track_breadcrumb:"hub_track_breadcrumb__h5QjS",hub_sidebox:"hub_hub_sidebox__zmP6c",hub_detail_page:"hub_hub_detail_page__qsisD",course_module_container:"hub_course_module_container__I0H2E",module_box:"hub_module_box__8c1M2",module_header_container:"hub_module_header_container__XwVGd"}},57394:function(e){e.exports={container:"list_container____W9G"}}},function(e){e.O(0,[3710,7414,6577,8629,2419,6775,8214,9774,2888,179],(function(){return t=98140,e(e.s=t);var t}));var t=e.O();_N_E=t}]);