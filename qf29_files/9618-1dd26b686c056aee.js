(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9618],{68950:function(e,n,t){"use strict";t.d(n,{l:function(){return h}});var r=t(52322),a=t(2784),i=t(72779),_=t.n(i),o=t(97632),s=t(88472),d=t(67636),c=t(62082),l=t(68113),m=t.n(l),u=t(68217),p=t(57105),h=[{title:"My Reading Tracks",link:"".concat((0,c.bv)(),"/user/reading-tracks/"),hideInApp:!1},{title:"Saved Articles",link:"".concat((0,c.bv)(),"/articles/saved"),hideInApp:!1},{title:"My Certificates",link:"".concat((0,c.bv)(),"/certificates"),hideInApp:!1},{title:"My Challenges",link:"".concat((0,c.bv)(),"/user/challenges"),hideInApp:!1},{title:"My Contests",link:"".concat((0,c.bv)(),"/user/contests"),hideInApp:!1},{title:"My InProgress Items",link:"".concat((0,c.bv)(),"/user/in-progress/"),hideInApp:!1},{title:"Settings",link:"/settings",hideInApp:!0}];n.Z=function(e){var n,t=e.userData,i=(0,a.useContext)(u.fC).sendClickEvent,c=(0,a.useContext)(p.N).setModalStage,l=(0,a.useCallback)((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";i({type:"navbar_click",action:"click",text:e,url:n,section:"nav_user"})}),[i]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.Z,{"data-name":"account_dropdown","data-id":"name",className:_()("dropdown-item",m().dropdown__user_name),component:s.Z,onClick:function(){l("")},children:["Hi!"," ",null!==(n=t.name)&&void 0!==n?n:"User"]}),h.map((function(e,n){var t=e.title,a=e.link;return(0,r.jsx)(o.Z,{"data-name":"account_dropdown","data-id":t,className:_()(m().dropdown__list,m().account_dropdown_list),component:s.Z,href:a,onClick:function(){l(t,a)},children:t},n)})),(0,r.jsx)(o.Z,{"data-name":"account_dropdown","data-id":"name",className:_()(m().dropdown__list,m().account_dropdown_list),component:s.Z,onClick:function(){return(0,d.TX)(c)},children:"Logout"},"logout")]})}},99618:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var r=t(52322),a=t(2784),i=t(72779),_=t.n(i),o=t(97632),s=t(67636),d=t(11713),c=t(88472),l=t(57105),m=t(68113),u=t.n(m),p=t(31872),h=t(66902),f=t(40792),g=t(59568),v=t(84557),w=t(49857),b=t(62082),x=t(50351),j=function(e){var n=e.isTapped,t=e.onTapped,a=e.children,i=e.heading;return(0,r.jsxs)("div",{className:_()(u().nav_container,"cursor"),"data-id":"sidebar-ham-menu-item",onClick:function(){return t&&t()},"aria-hidden":!0,children:[(0,r.jsxs)("div",{className:_()(u().nav_item),children:[(0,r.jsxs)("span",{className:n?_()(u().nav_title,"m-b-20"):u().nav_title,children:[" ",i," "]}),a?(0,r.jsx)(r.Fragment,{children:n?(0,r.jsx)(x.Z,{name:"dash",className:u().dash_icon,onClick:t}):(0,r.jsx)(x.Z,{name:"add",className:u().add_icon,onClick:t})}):null]}),n?(0,r.jsx)("div",{children:a}):null]})},C=t(39097),k=t.n(C),y=t(68950),N=t(33816),Z=t(92308);function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function I(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return O(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S="show-sidebar",A="hide-sidebar",T="show-complete",D="hide-complete";window.emitter=b.uY,window.showHamburger=function(){window.emitter.emit(S)},window.hideHamburger=function(){window.emitter.emit(A)};var P=function(){(0,h.$c)("showingHamburger")},H=function(){(0,h.$c)("hidingHamburger")},E=function(e){var n=e.isUserDataPresent,t=e.className,i=e.popupHeight,m=void 0===i?"90%":i,x=e.toggleSidebar,C=void 0===x?function(){}:x,O=(0,a.useState)(!1),E=O[0],M=O[1],L=(0,a.useState)(!1),F=L[0],Q=L[1],U=(0,a.useState)(!1),W=U[0],z=U[1],V=(0,a.useState)(!1),X=V[0],q=V[1],G=(0,Z.Z)().user,B=(0,a.useContext)(p.CB).appMode,J=(0,a.useContext)(l.N).setModalStage,K=(0,a.useCallback)((function(){M(!0)}),[]),R=(0,a.useCallback)((function(){M(!1)}),[]);(0,a.useEffect)((function(){return window.emitter.on(S,K),window.emitter.on(A,R),window.emitter.on(T,P),window.emitter.on(D,H),function(){window.emitter.off(S,K),window.emitter.off(A,R),window.emitter.off(T,P),window.emitter.off(D,H)}}),[R,K]),(0,a.useEffect)((function(){E?window.emitter.emit(T):window.emitter.emit(D)}),[E]);var Y=I(g.K).filter((function(e){return!0===e.isActive})),$=(0,w.ZP)("".concat(d.yo.fetchHubs),(function(){return(0,d.Mw)(1,10,[],"created_at","asc")}),{revalidateIfStale:!1,revalidateOnReconnect:!1}).data,ee=function(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(B&&a)return null;var i=(0,r.jsx)(o.Z,{"data-name":"account_dropdown","data-id":e,component:c.Z,onClick:function(){M(!1),C(!1)},href:n,children:(0,r.jsx)("div",{className:_()(u().nav_item),children:(0,r.jsxs)("span",{className:u().nav_title,children:[" ",e," "]})})},n);return t?(0,r.jsx)(k(),{href:n,passHref:!0,children:i},n):i},ne=(0,a.useContext)(l.N),te=ne.isAuthModalOpen,re=ne.setAuthModalOpen;return(0,r.jsxs)(f.Z,{sidebarClassName:_()(u().sidebar_content,t),isOpen:E,popupHeight:m,popupClassName:u().popover_classname,children:[(0,r.jsxs)("div",{className:u().nav_items,children:[(0,r.jsx)(j,{isTapped:F,onTapped:function(){return Q(!F)},heading:"Topics",children:(null===$||void 0===$?void 0:$.data)&&$.data.map((function(e){return ee(e.attributes.title,"/".concat(e.attributes.slug))}))}),(0,r.jsx)(j,{isTapped:W,onTapped:function(){return z(!W)},heading:"Explore",children:Y.map((function(e,n){return(0,r.jsx)(o.Z,{"data-name":"account_dropdown",className:_()(u().dropdown__list,u().dropdown_item__spacing),component:c.Z,onClick:function(){M(!1),C(!1)},children:(0,r.jsx)(v.Z,{categoryData:e,isLinkVisible:!1,width:80,height:80,iconClassName:u().mobile_category_icon,contentClassName:u().card_content,cardContainerClass:u().hamburger_explore_card_class,cardImageClass:u().hamburger_card_image_class},n)},"".concat((0,b.bv)(),"/").concat(e.viewCategoryLink))}))}),(0,r.jsx)(k(),{href:"/courses",passHref:!0,children:(0,r.jsx)("a",{children:(0,r.jsx)(j,{isTapped:W,onTapped:function(){M(!1),C(!1)},heading:"Courses"})})}),(0,r.jsx)(k(),{href:"/events",passHref:!0,children:(0,r.jsx)("a",{children:(0,r.jsx)(j,{isTapped:W,onTapped:function(){M(!1),C(!1)},heading:"Events"})})}),n?(0,r.jsx)(j,{isTapped:X,onTapped:function(){return q(!X)},heading:(0,r.jsxs)("div",{className:"row flex-c h4",children:[(0,r.jsx)("span",{className:"m-r-5","data-name":"account_dropdown","data-id":"greeting",children:(0,r.jsx)(N.Z,{userImage:null===G||void 0===G?void 0:G.image,userName:(null===G||void 0===G?void 0:G.name)||"NA"})}),(0,r.jsxs)("div",{children:[" ","Hi! "," ",null===G||void 0===G?void 0:G.name]})]}),children:(0,r.jsxs)(r.Fragment,{children:[y.l.map((function(e){var n=e.title,t=e.link,r=e.hideInApp;return ee(n,t,!1,r)})),B?null:(0,r.jsx)("div",{className:"m-t-xs",children:(0,r.jsx)(c.Z,{component:"a",onClick:function(){return(0,s.TX)(J)},className:_()(u().log_button,u().logout),children:"Log out"})})]})}):null]}),(0,r.jsx)("div",{className:u().signin_component,children:n?null:(0,r.jsx)(c.Z,{component:"a",onClick:function(){return(0,h.mC)(B,te,re)},className:_()(u().log_button,u().signin),children:"Sign in"})})]})}},68113:function(e){e.exports={headerContainer:"header_items_headerContainer__Ea7gR",headItems:"header_items_headItems__qhL4j",middleItem:"header_items_middleItem__6JSjC",signInClass:"header_items_signInClass__M77VG",headLinks:"header_items_headLinks__y1htd",user_img:"header_items_user_img__uG6Dg",header_middle_item:"header_items_header_middle_item__Pyg_d",tapped_btn:"header_items_tapped_btn__kc7Qx",dropdown__user_name:"header_items_dropdown__user_name__KcrQm",app_card:"header_items_app_card___kyfz",dropdown__list:"header_items_dropdown__list__WLDwO",account_dropdown_list:"header_items_account_dropdown_list__POV_g",dropdown_item__spacing:"header_items_dropdown_item__spacing__yi_7g",media_popover_ui:"header_items_media_popover_ui__aWqlJ",popover_container:"header_items_popover_container__ZVNIx",userdata_media_ui:"header_items_userdata_media_ui__OSZ0W",media_popover_open_ui:"header_items_media_popover_open_ui__tmDDo",popover_close_btn:"header_items_popover_close_btn__9GrSX",account_dropdown:"header_items_account_dropdown__Lajvk",account_popover:"header_items_account_popover__U5k7_",popover_dropdown_items:"header_items_popover_dropdown_items__zhmnW",items_separator:"header_items_items_separator__yDXIJ",hamburger_icon:"header_items_hamburger_icon__3lUyt",hamburger_btn:"header_items_hamburger_btn__xaYX0",user_name:"header_items_user_name__JlpBz",dropdown_icon:"header_items_dropdown_icon__F__ut",search_bar:"header_items_search_bar__vmysN",dropDown:"header_items_dropDown__xYFDQ",dropdown_className:"header_items_dropdown_className__cZSqm",sidebar_content:"header_items_sidebar_content__bfq08",popover_classname:"header_items_popover_classname__MTVik",nav_item:"header_items_nav_item__DCQOr",nav_container:"header_items_nav_container__6TShv",nav_items:"header_items_nav_items__BaInW",add_icon:"header_items_add_icon__wUVIA",dash_icon:"header_items_dash_icon__HIWSP",nav_title:"header_items_nav_title__8cGOl",nav_content:"header_items_nav_content__srcI5",log_button:"header_items_log_button__9KnH9",signin:"header_items_signin__13LF1",logout:"header_items_logout__O46s2",nav_img:"header_items_nav_img__D_EOy",signin_component:"header_items_signin_component__nplIw",sidebar_list:"header_items_sidebar_list__qugOo",header_title:"header_items_header_title__y_fDv",text_spacing:"header_items_text_spacing__cwEQD",mobile_category_icon:"header_items_mobile_category_icon___r7Lt",card_content:"header_items_card_content__7U0iK",drodown_card:"header_items_drodown_card__WjzbW",hamburger_card_image_class:"header_items_hamburger_card_image_class__QFQGX",hamburger_explore_card_class:"header_items_hamburger_explore_card_class__OnQV0",explore_card_class:"header_items_explore_card_class__4yf3j",explore_width:"header_items_explore_width__FHFy0",topics_list:"header_items_topics_list__LQPzu",download_btn:"header_items_download_btn___P7ii",download_container:"header_items_download_container__Ck9RJ",progressbarContainer:"header_items_progressbarContainer__o_sZh",progressBar:"header_items_progressBar__ukoN1",courseHeader:"header_items_courseHeader__tc6ep",course_label:"header_items_course_label__zIX1N",course_title:"header_items_course_title__6jkyU",course_icon:"header_items_course_icon__ONSnA",back_arrow:"header_items_back_arrow__phw0Z",explore_item__container:"header_items_explore_item__container__Kd2zP"}},97632:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var r=t(76814),a=t(97570),i=t(2784),_=t(13980),o=t.n(_),s=t(90383),d=t(34337),c=t(73855),l=t(92817),m=t(91178),u=t(46400),p=["className","component","onClick"];function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){var n=e.className,t=e.component,_=e.onClick,o=(0,a.Z)(e,p),c=(0,i.useContext)(l.Z).handleClose,m=(0,i.useCallback)((function(e){(0,d.mf)(_)&&_(e),c()}),[c,_]);return(0,i.createElement)(t,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({className:(0,s.Z)("dropdown-item",(0,r.Z)({},n,n)),onClick:m},o))}f.defaultProps={component:m.Z},f.propTypes={className:o().string,component:c.GF.isRequired,onClick:o().func};var g=(0,u.Z)(f)},92817:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(2784).createContext)({handleClose:function(){}})}}]);