(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[16],{592:function(e,t,a){"use strict";a.d(t,"y",(function(){return l})),a.d(t,"q",(function(){return s})),a.d(t,"z",(function(){return r})),a.d(t,"j",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"e",(function(){return d})),a.d(t,"k",(function(){return u})),a.d(t,"B",(function(){return b})),a.d(t,"C",(function(){return j})),a.d(t,"A",(function(){return h})),a.d(t,"E",(function(){return p})),a.d(t,"m",(function(){return f})),a.d(t,"l",(function(){return m})),a.d(t,"i",(function(){return g})),a.d(t,"f",(function(){return O})),a.d(t,"g",(function(){return v})),a.d(t,"h",(function(){return _})),a.d(t,"x",(function(){return x})),a.d(t,"o",(function(){return k})),a.d(t,"p",(function(){return N})),a.d(t,"r",(function(){return w})),a.d(t,"s",(function(){return C})),a.d(t,"a",(function(){return y})),a.d(t,"u",(function(){return S})),a.d(t,"c",(function(){return z})),a.d(t,"b",(function(){return P})),a.d(t,"v",(function(){return W})),a.d(t,"w",(function(){return E})),a.d(t,"n",(function(){return U})),a.d(t,"D",(function(){return I})),a.d(t,"t",(function(){return q}));var n=a(605),c=a.n(n),l=c.a.relative,s=c.a.flex,r=c.a.row,o=c.a.col,i=(c.a["start-align"],c.a["center-align"]),d=(c.a["end-align"],c.a["center-justify"]),u=c.a["col-centered"],b=c.a["space-around"],j=c.a["space-between"],h=c.a["row-centered"],p=(c.a["center-align-self"],c.a["flex-grow-1"],c.a["height-full"],c.a["width-auto"],c.a["width-100"]),f=(c.a["font-white"],c.a["font-black"],c.a.rotate90Ccw,c.a["common-padding-left"],c.a["common-padding-right"],c.a["common-padding-h"]),m=(c.a["common-margin-left"],c.a["common-margin-right"],c.a["common-margin-h"],c.a["common-margin-h-negative"]),g=(c.a["bg-black"],c.a["bg-white"],c.a["corners-rounded"],c.a["children-spaced-4"],c.a["children-spaced-8"]),O=(c.a["children-spaced-12"],c.a["children-spaced-16"]),v=c.a["children-spaced-24"],_=c.a["children-spaced-48-col"],x=(c.a["padding-0"],c.a["padding-2"],c.a["padding-4"],c.a["padding-8"],c.a["padding-12"]),k=(c.a["padding-16"],c.a["padding-24"],c.a["flat-btn"]),N=c.a["flat-btn-full-width"],w=(c.a["flat-btn-no-border"],c.a["font-size-4"],c.a["font-size-6"],c.a["font-size-8"],c.a["font-size-10"],c.a["font-size-12"]),C=(c.a["font-size-14"],c.a["font-size-16"],c.a["font-size-18"]),y=c.a.absolute,S=c.a["horizontally-centered-absolute"],z=(c.a["vertically-centered-absolute"],c.a["absolute-stick-to-top"]),P=(c.a["absolute-stick-to-bottom"],c.a["absolute-stick-to-left"],c.a["absolute-stick-to-right"],c.a["absolute-dead-center"]),W=(c.a["opacity-full"],c.a["opacity-half"],c.a["opacity-none"]),E=c.a["opacity-three-quarters"],U=c.a["display-none"],I=c.a.unselectable,q=c.a["hidden-input"]},595:function(e,t,a){"use strict";var n=a(46),c=(a(0),a(84)),l=a.n(c),s=a(8),r=(a(601),a(4));t.a=function(e){var t=e.label,a=void 0===t?"":t,c=e.name,o=void 0===c?"":c,i=e.onChange,d=e.inputAction,u=void 0===d?s.b:d,b=e.actionIcon,j=void 0===b?"":b,h=e.value,p=e.inputMode,f=void 0===p?"text":p,m=e.type,g=void 0===m?"text":m,O=e.element,v=void 0===O?"input":O,_=e.small,x=void 0!==_&&_,k=e.disabled,N=void 0!==k&&k;return Object(r.jsxs)("div",{className:l()({group:!0,"group-disabled":N,"group-small":x}),"data-v-1785d374":"",children:[a?Object(r.jsx)("p",{className:"group-label","data-v-1785d374":"",children:a}):null,Object(r.jsxs)("div",{className:l()({"group-input-container":!0,"group-input-textarea-container":"textarea"===v}),"data-v-1785d374":"",children:["textarea"===v?Object(r.jsx)("textarea",{className:"group-input group-input-textarea",name:o,onChange:i,inputMode:f,value:h,disabled:N,"data-v-1785d374":""}):Object(r.jsx)("input",{className:"group-input",type:g,name:o,onChange:i,inputMode:f,value:h,disabled:N,"data-v-1785d374":""}),u&&j?Object(r.jsx)("div",{className:"group-input-action",onClick:u,"data-v-1785d374":"",children:Object(r.jsx)("i",{className:l()(Object(n.a)({"group-input-action-icon":!0,fas:!0},j,!0)),onClick:u,"data-v-1785d374":""})}):null]})]})}},596:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),c=a(84),l=a.n(c),s=a(8),r=(a(597),a(4)),o=73,i={minHeight:o};t.b=function(e){var t=e.pageTitle,a=e.drawerVisible,c=void 0!==a&&a,o=e.onHeight,d=void 0===o?s.b:o,u=Object(n.useCallback)((function(){window.history.back()}),[]),b=Object(n.useCallback)((function(e){if(e)try{d(e.getBoundingClientRect().height)}catch(t){console.log("Error inside onHeight mechanism in DialogNav:"),console.log(t)}}),[d]);return Object(r.jsxs)("div",{className:"dialog-nav-container",ref:b,style:i,"data-v-9810b4e3":"",children:[Object(r.jsx)("div",{className:"dialog-nav-back",onClick:u,"data-v-9810b4e3":"",children:Object(r.jsx)("i",{className:"icon icon-thin-back","data-v-9810b4e3":""})}),Object(r.jsx)("p",{className:"dialog-nav-title","data-v-9810b4e3":"",children:t}),Object(r.jsxs)("div",{className:l()({"dialog-nav-menu-btn":!0,"dialog-nav-hidden":!c}),"data-v-9810b4e3":"",children:[Object(r.jsx)("div",{className:"dialog-nav-menu-dash","data-v-9810b4e3":""}),Object(r.jsx)("div",{className:"dialog-nav-menu-dash","data-v-9810b4e3":""}),Object(r.jsx)("div",{className:"dialog-nav-menu-dash","data-v-9810b4e3":""})]})]})}},597:function(e,t,a){},601:function(e,t,a){},605:function(e,t,a){e.exports={PAD_H:"1em",relative:"global_relative__wwFd5",flex:"global_flex__3EqcS",row:"global_row__1A5FW global_flex__3EqcS",col:"global_col__3mp_5 global_flex__3EqcS","start-align":"global_start-align__-l9G8 global_flex__3EqcS","center-align":"global_center-align__2UEY8 global_flex__3EqcS","end-align":"global_end-align__1iZ_9 global_flex__3EqcS","center-justify":"global_center-justify__3etS9 global_flex__3EqcS","col-centered":"global_col-centered__1rqsl global_col__3mp_5 global_flex__3EqcS global_center-align__2UEY8 global_flex__3EqcS","space-around":"global_space-around__3HlTi global_flex__3EqcS","space-between":"global_space-between__2G6yv global_flex__3EqcS","row-centered":"global_row-centered__1H_cv global_row__1A5FW global_flex__3EqcS global_center-align__2UEY8 global_flex__3EqcS","center-align-self":"global_center-align-self__1GUs5","flex-grow-1":"global_flex-grow-1__2unHa global_flex__3EqcS","height-full":"global_height-full__1ZI6F","width-auto":"global_width-auto__1USRU","width-100":"global_width-100__29aAp","font-white":"global_font-white__NE-CT","font-black":"global_font-black__wjo9k",rotate90Ccw:"global_rotate90Ccw__11MjX","common-padding-left":"global_common-padding-left__2oqNo","common-padding-right":"global_common-padding-right__MpvbN","common-padding-h":"global_common-padding-h__8YHOB global_common-padding-left__2oqNo global_common-padding-right__MpvbN","common-margin-left":"global_common-margin-left__17kyp","common-margin-right":"global_common-margin-right__26jhw","common-margin-h":"global_common-margin-h__2btHF global_common-margin-left__17kyp global_common-margin-right__26jhw","common-margin-h-negative":"global_common-margin-h-negative__1DqlI","bg-black":"global_bg-black__AftPu","bg-white":"global_bg-white__3CREm","corners-rounded":"global_corners-rounded__12rFn","children-spaced-4":"global_children-spaced-4__1gmtr","children-spaced-8":"global_children-spaced-8__97gHF","children-spaced-12":"global_children-spaced-12__1mIIN","children-spaced-16":"global_children-spaced-16__GafSh","children-spaced-24":"global_children-spaced-24__2XpHO","children-spaced-48-col":"global_children-spaced-48-col__13vO_","padding-0":"global_padding-0__3w7nl","padding-2":"global_padding-2__3jsyO","padding-4":"global_padding-4__3mek9","padding-8":"global_padding-8__3xaKp","padding-12":"global_padding-12__1Fp31","padding-16":"global_padding-16__3S0ZC","padding-24":"global_padding-24__PWluU","flat-btn":"global_flat-btn__QCoQD","flat-btn-full-width":"global_flat-btn-full-width__1KMEz global_flat-btn__QCoQD global_width-100__29aAp","flat-btn-no-border":"global_flat-btn-no-border__1D6YS global_flat-btn__QCoQD","font-size-4":"global_font-size-4__152Yi","font-size-6":"global_font-size-6__1TiYJ","font-size-8":"global_font-size-8__3J8qe","font-size-10":"global_font-size-10__18w42","font-size-12":"global_font-size-12__3uTVa","font-size-14":"global_font-size-14__10gBO","font-size-16":"global_font-size-16__1VztM","font-size-18":"global_font-size-18__11bmr",absolute:"global_absolute__1CUuW","horizontally-centered-absolute":"global_horizontally-centered-absolute__U2Y8G global_absolute__1CUuW","vertically-centered-absolute":"global_vertically-centered-absolute__1G9Ok global_absolute__1CUuW","absolute-stick-to-top":"global_absolute-stick-to-top__2J4DW global_absolute__1CUuW","absolute-stick-to-bottom":"global_absolute-stick-to-bottom__3uJed global_absolute__1CUuW","absolute-stick-to-left":"global_absolute-stick-to-left__1p8ve global_absolute__1CUuW","absolute-stick-to-right":"global_absolute-stick-to-right__15ROv global_absolute__1CUuW","absolute-dead-center":"global_absolute-dead-center__3Tr4h","opacity-full":"global_opacity-full__3pv-G","opacity-half":"global_opacity-half__2Kryw","opacity-none":"global_opacity-none__1cDP9","opacity-three-quarters":"global_opacity-three-quarters__1uI42","display-none":"global_display-none__v9MKe",unselectable:"global_unselectable__20lft","hidden-input":"global_hidden-input__3enyw"}},616:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(){return!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)}},620:function(e,t,a){"use strict";var n=a(637),c=a(616),l=(a(621),a(4)),s={wizard:{title:"SCAN A",target:"QR CODE",description:"Point your camera at a ShockWizard QR Code"},invoice:{title:"SCAN AN",target:"INVOICE",description:"Point your camera at an LND Invoice"}};t.a=function(e){var t=e.mode,a=void 0===t?"wizard":t,r=e.onScan,o=e.onError,i=e.onClose,d=s[a],u={};return Object(c.a)()||(u.facingMode={exact:"environment"}),Object(l.jsxs)("div",{className:"qr-code-scanner-container","data-v-f571b36f":"",children:[Object(l.jsx)("div",{className:"qr-scanner-top-section","data-v-f571b36f":"",children:Object(l.jsx)("i",{className:"fas fa-times",onClick:i,"data-v-f571b36f":""})}),Object(l.jsx)(n.a,{constraints:{video:u},onScan:r,onError:o,"data-v-f571b36f":""}),Object(l.jsx)("div",{className:"qr-scanner-target","data-v-f571b36f":""}),Object(l.jsxs)("div",{className:"qr-scanner-bottom-section","data-v-f571b36f":"",children:[Object(l.jsxs)("p",{className:"qr-scanner-bottom-title","data-v-f571b36f":"",children:[d.title," ",Object(l.jsx)("span",{className:"qr-scanner-bottom-title-highlight","data-v-f571b36f":"",children:d.target})]}),Object(l.jsx)("p",{className:"qr-scanner-bottom-description","data-v-f571b36f":"",children:d.description}),Object(l.jsx)("div",{className:"qr-scanner-btn",onClick:i,"data-v-f571b36f":"",children:"Cancel Scan"})]})]})}},621:function(e,t,a){},630:function(e,t,a){"use strict";var n=a(84),c=a.n(n),l=a(596),s=a(592),r=a(8),o=(a(645),a(4));t.a=function(e){var t=e.containerClassName,a=void 0===t?"":t,n=e.contentClassName,i=void 0===n?"":n,d=e.title,u=void 0===d?"":d,b=e.children,j=e.disableNav,h=void 0!==j&&j,p=e.onBack,f=void 0===p?r.b:p,m=e.showBackBtn,g=void 0!==m&&m,O=e.renderCommitHash,v=void 0!==O&&O;return Object(o.jsxs)("div",{className:"page-container dialog-page ".concat(a),style:h?{paddingTop:0}:{},"data-v-a634d05b":"",children:[g&&Object(o.jsx)("div",{className:"back-btn",onClick:f,"data-v-a634d05b":"",children:Object(o.jsx)("i",{className:c()("icon icon-thin-back",s.s),"data-v-a634d05b":""})}),h?null:Object(o.jsx)(l.b,{drawerVisible:!1,pageTitle:u,"data-v-a634d05b":""}),Object(o.jsx)("div",{className:"dialog-content-container ".concat(i),"data-v-a634d05b":"",children:b}),v&&Object(o.jsx)("span",{className:"commit-hash","data-v-a634d05b":"",children:"9de773c"})]})}},645:function(e,t,a){},761:function(e,t,a){},762:function(e,t,a){},763:function(e,t,a){},764:function(e,t,a){},765:function(e,t,a){},766:function(e,t,a){},885:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),l=a(6),s=a(17),r=a(0),o=a.n(r),i=a(37),d=a(179),u=a(25),b=a(43),j=a(18),h=a(630),p=a(84),f=a.n(p),m=function(e){var t=e,a=null;if(e.includes("@")){var n=e.split("@"),c=Object(s.a)(n,2);a=c[0],t=c[1]}return[t,a]},g=a(4),O=function(e){var t=e.split(".");return 4===t.length&&!t.find((function(e){return isNaN(e)||parseInt(e,10)>255}))},v=function(e){if(console.log("check ip"),"localhost"===e||"http://localhost"===e)return e+":9835";if(O(e))return e+":9835";var t=e.startsWith("http")?e:"http://"+e,a=new URL(t);return!a.port&&O(a.hostname)?a.hostname+":9835":a.host},_=function(){var e=Object(i.b)(),t=Object(r.useState)(),a=Object(s.a)(t,2),n=a[0],o=a[1],d=Object(r.useState)(""),u=Object(s.a)(d,2),h=u[0],p=u[1],O=Object(r.useState)(!1),_=Object(s.a)(O,2),x=_[0],k=_[1],N=Object(r.useCallback)((function(e){var t=e.target,a=t.value;switch(t.name){case"hostIP":return void p(a);default:return}}),[]),w=function(){var t=Object(l.a)(c.a.mark((function t(a){var n,l,r,i,d,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,a.preventDefault(),!x){t.next=4;break}return t.abrupt("return");case 4:return k(!0),o(null),n=m(h),l=Object(s.a)(n,2),r=l[0],i=l[1],d=v(r),t.next=10,Object(b.b)(d,!0,i)(e);case 10:u=t.sent,u.withProtocolHostIP,t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),k(!1),o("Unable to connect to host");case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),C=Object(r.useCallback)((function(){e(Object(j.c)(null)),e(Object(j.d)(null))}),[e]);return Object(g.jsxs)("div",{className:"auth-form-container",children:[Object(g.jsxs)("div",{className:"vertical-flex-center",children:[Object(g.jsx)("h2",{children:"Configure Your Node"}),Object(g.jsxs)("p",{className:"text-center m-b-1",children:["Lightning.Page can connect to your own Lightning node, your node must be running"," ",Object(g.jsx)("a",{target:"_blank",href:"https://github.com/shocknet/api",className:"color-text-blue",children:"ShockAPI"})," ","with LND"]}),Object(g.jsxs)("p",{className:"text-center",children:["Umbrel, MyNode and Command Line instructions can be found"," ",Object(g.jsx)("a",{target:"_blank",href:"https://github.com/shocknet/api",className:"color-text-blue",children:"Here"})]})]}),Object(g.jsx)("div",{style:{height:"15vh"}}),!x&&Object(g.jsx)("p",{className:"auth-form-container-title",children:"Connect to Node"}),Object(g.jsx)("form",{className:"auth-form",onSubmit:w,children:x?Object(g.jsx)("p",{children:"Connecting..."}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("input",{autoCapitalize:"off",autoCorrect:"off",type:"text",name:"hostIP",placeholder:"Host Address (in IP or DNS form)",value:h,onChange:N,className:f()({"input-field":!0,"input-field-error":!!n})}),n?Object(g.jsx)("p",{className:"error-container",children:n}):null,Object(g.jsx)("button",{className:"submit-btn",type:"submit",children:"Connect"}),Object(g.jsx)("p",{className:"inline-link",onClick:C,children:"Choose another method"})]})})]})},x=a(177),k=a(20),N=function(){var e=Object(i.b)(),t=Object(r.useState)(),a=Object(s.a)(t,2),n=a[0],o=a[1],d=Object(r.useState)(""),u=Object(s.a)(d,2),h=u[0],p=u[1],f=k.useSelector((function(e){return e.node.alias})),m=Object(r.useState)(!1),O=Object(s.a)(m,2),v=O[0],_=O[1],N=Object(r.useState)(""),w=Object(s.a)(N,2),C=w[0],y=w[1],S=Object(r.useState)(!1),z=Object(s.a)(S,2),P=z[0],W=z[1],E=Object(r.useCallback)((function(e){var t=e.target,a=t.value;switch(t.name){case"alias":return void p(a);case"password":return void y(a);default:return}}),[]),U=Object(r.useCallback)(function(){var t=Object(l.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),W(!0),t.prev=2,t.next=5,e(Object(b.g)({alias:h||f,password:C}));case 5:t.sent,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(2),o(t.t0.message),W(!1);case 12:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}(),[h,v,f,C,e,o]),I=Object(r.useCallback)((function(){e(Object(j.c)(null)),e(Object(j.d)(null))}),[e]),q=Object(r.useCallback)((function(){e(Object(j.d)("createGun"))}),[e]);return Object(g.jsxs)("div",{className:"auth-form-container",children:[P?Object(g.jsx)(x.a,{overlay:!0,fullScreen:!0,text:"Unlocking Wallet..."}):null,Object(g.jsx)("p",{className:"auth-form-container-title",children:"Unlock Wallet"}),Object(g.jsxs)("form",{className:"auth-form",onSubmit:U,children:[f&&!v?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:"row",width:"100%"},children:[Object(g.jsxs)("span",{children:["Alias: ",f]}),Object(g.jsx)("span",{className:"inline-link",style:{marginTop:"0px"},onClick:function(){_(!0)},children:"change"})]}),Object(g.jsx)("div",{style:{height:24}})]}):Object(g.jsx)("input",{type:"text",name:"alias",placeholder:"Wallet Alias",value:h,onChange:E,className:"input-field",autoCorrect:"off",autoCapitalize:"none"}),Object(g.jsx)("input",{type:"password",name:"password",placeholder:"Wallet Password",value:C,onChange:E,className:"input-field"}),n?Object(g.jsx)("p",{className:"error-container",children:n}):null,Object(g.jsx)("button",{className:"submit-btn",children:"Unlock"}),Object(g.jsx)("p",{className:"inline-link",onClick:q,children:"Create a new alias"}),Object(g.jsx)("p",{className:"inline-link",onClick:I,children:"Choose another method"})]})]})},w=function(){var e=Object(i.b)(),t=Object(r.useState)(),a=Object(s.a)(t,2),n=a[0],o=a[1],d=Object(r.useState)(""),u=Object(s.a)(d,2),h=u[0],p=u[1],f=Object(r.useState)(""),m=Object(s.a)(f,2),O=m[0],v=m[1],_=Object(r.useState)(""),k=Object(s.a)(_,2),N=k[0],w=k[1],C=Object(r.useState)(!1),y=Object(s.a)(C,2),S=y[0],z=y[1],P=Object(r.useCallback)((function(e){var t=e.target,a=t.value;switch(t.name){case"alias":return void p(a);case"password":return void v(a);case"confirmPassword":return void w(a);default:return}}),[p,v,w]),W=Object(r.useCallback)(function(){var t=Object(l.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(h.length<3||h.length>32)){t.next=4;break}return o("Please specify an alias that is 3-32 characters long"),t.abrupt("return");case 4:if(O===N){t.next=7;break}return o("Password and Confirm password fields must match"),t.abrupt("return");case 7:if(!(O.length<8||O.length>32)){t.next=10;break}return o("Password length should be 8-32 characters long"),t.abrupt("return");case 10:return t.prev=10,z(!0),t.next=14,e(Object(b.d)({alias:h,password:O}));case 14:t.sent,t.next=20;break;case 17:t.prev=17,t.t0=t.catch(10),o(t.t0.message);case 20:return t.prev=20,z(!1),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[10,17,20,23]])})));return function(e){return t.apply(this,arguments)}}(),[h,O,N,e]),E=Object(r.useCallback)((function(){e(Object(j.c)(null)),e(Object(j.d)(null))}),[e]);return Object(g.jsxs)("div",{className:"auth-form-container",children:[S?Object(g.jsx)(x.a,{overlay:!0,fullScreen:!0,text:"Creating New Wallet..."}):null,Object(g.jsx)("p",{className:"auth-form-container-title",children:"Create New Wallet"}),Object(g.jsxs)("form",{className:"auth-form",onSubmit:W,children:[Object(g.jsx)("input",{type:"text",name:"alias",placeholder:"Wallet Alias",value:h,onChange:P,className:"input-field",autoCorrect:"off",autoCapitalize:"none"}),Object(g.jsx)("input",{type:"password",name:"password",placeholder:"Wallet Password",value:O,onChange:P,className:"input-field"}),Object(g.jsx)("input",{type:"password",name:"confirmPassword",placeholder:"Confirm Wallet Password",value:N,onChange:P,className:"input-field"}),n?Object(g.jsx)("p",{className:"error-container",children:n}):null,Object(g.jsx)("button",{className:"submit-btn",children:"Create"}),Object(g.jsx)("p",{className:"inline-link",onClick:E,children:"Choose another method"})]})]})},C=a.p+"static/media/shocklogo-dark.d7ab5340.png",y=(a(761),function(){return Object(g.jsx)("div",{className:"auth-logo-header","data-v-9de245d9":"",children:Object(g.jsx)("img",{className:"auth-logo",src:C,alt:"Lightning.Page Logo","data-v-9de245d9":""})})}),S=(a(762),function(e){var t=e.icon,a=e.details,n=e.method,c=Object(i.b)(),l=Object(r.useCallback)((function(){c(Object(j.c)(n))}),[c,n]);return Object(g.jsxs)("div",{className:"container",onClick:l,"data-v-42c4402b":"",children:[Object(g.jsx)("div",{className:"icon-container","data-v-42c4402b":"",children:Object(g.jsx)("i",{className:"icon fas fa-".concat(t),"data-v-42c4402b":""})}),Object(g.jsx)("p",{className:"info","data-v-42c4402b":"",children:a})]})}),z=(a(763),function(){var e=Object(i.b)(),t=Object(r.useCallback)((function(){e(Object(j.c)("shockCloud"))}),[e]);return Object(g.jsxs)("div",{className:"choices-step-container","data-v-d8aee41a":"",children:[Object(g.jsx)("p",{className:"choices-title","data-v-d8aee41a":"",children:"Node Up"}),Object(g.jsx)("p",{className:"choices-desc","data-v-d8aee41a":"",children:"In a decentralized network, a node is like a personal server that works even as your mobile sleeps."}),Object(g.jsxs)("div",{className:"choices-container","data-v-d8aee41a":"",children:[Object(g.jsx)(S,{icon:"code-branch",details:"I already have a node, and want to enter a network address",method:"manual","data-v-d8aee41a":""}),Object(g.jsx)(S,{icon:"qrcode",details:"I'll install the ShockNode Wizard app on a computer",method:"shockWizard","data-v-d8aee41a":""}),Object(g.jsx)(S,{icon:"cloud",details:"I'd like a personal cloud node provided as a service",method:"hostingTiers","data-v-d8aee41a":""}),Object(g.jsx)("p",{className:"inline-link",onClick:t,"data-v-d8aee41a":"",children:"I have a guest invite"})]})]})}),P=a(14),W="pool.shock.network",E=function(){var e=Object(i.b)(),t=Object(r.useState)(!1),a=Object(s.a)(t,2),n=a[0],o=a[1],d=Object(r.useState)(""),h=Object(s.a)(d,2),p=h[0],O=h[1],v=Object(r.useState)(""),_=Object(s.a)(v,2),x=_[0],k=_[1],N=Object(r.useState)(0),w=Object(s.a)(N,2),C=w[0],y=w[1],S=Object(r.useState)(0),z=Object(s.a)(S,2),E=z[0],U=z[1],I=Object(r.useState)(0),q=Object(s.a)(I,2),A=q[0],L=q[1],D=Object(r.useCallback)((function(e){var t=e.target,a=t.value;switch(t.name){case"inviteCode":return void k(a);default:return}}),[]),H=Object(r.useCallback)(function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){var n=t.match(/:(\d+)/);if(!n)return e(t);var c=new WebSocket("wss://".concat(W,"/ws/healthz"));c.addEventListener("open",(function(e){c.send("health(".concat(n[1],")"))})),c.addEventListener("message",(function(t){var a=JSON.parse(t.data),n=0;a.api_uri&&(U(1),n++),a.pod_ready&&(y(1),n++),a.lnd_ready&&(L(1),n++),3===n&&(c.close(),e(a.api_uri))}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[U,y,L]),M=Object(r.useCallback)(function(){var t=Object(l.a)(c.a.mark((function t(a){var n,l,r,i,d,j,h,p,f,g,v;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a.preventDefault(),O(null),o(!0),t.next=6,u.a.get("https://".concat(W,"/mainnet"),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(x)}});case 6:return n=t.sent,l=n.data,r=l.data.address,t.next=11,H(r);case 11:return i=t.sent,d=m(i),j=Object(s.a)(d,2),h=j[0],p=j[1],f=h.replace(/^http(s)?:\/\//gi,""),t.next=16,Object(b.b)(f,!0,p)(e);case 16:g=t.sent,v=g.withProtocolHostIP,Object(P.a)(v),t.next=25;break;case 21:t.prev=21,t.t0=t.catch(0),o(!1),O("Unable to connect to host");case 25:case"end":return t.stop()}}),t,null,[[0,21]])})));return function(e){return t.apply(this,arguments)}}(),[e,x]),R=Object(r.useCallback)((function(){e(Object(j.c)(null)),e(Object(j.d)(null))}),[e]),B=C+E+A,T=B/3*100;return Object(g.jsxs)("div",{className:"auth-form-container",children:[n&&Object(g.jsxs)("div",{className:"w-100",children:[Object(g.jsxs)("p",{className:"text-center",children:[0===B&&"Initializing Node...",1===B&&"Preparing API...",2===B&&"Synchronizing LND...",3===B&&"All set! Let's go!"]}),Object(g.jsx)("div",{className:"meter blue",children:Object(g.jsx)("span",{style:{width:"".concat(T||2,"%")}})})]}),Object(g.jsx)("p",{className:"auth-form-container-title",children:"Invitation Code"}),!n&&Object(g.jsxs)("form",{className:"auth-form",onSubmit:M,children:[Object(g.jsx)("input",{type:"text",name:"inviteCode",placeholder:"Enter your invitation code",value:x,onChange:D,className:f()({"input-field":!0,"input-field-error":!!p})}),p?Object(g.jsx)("p",{className:"error-container",children:p}):null,Object(g.jsx)("button",{className:"submit-btn",type:"submit",children:"Connect"}),Object(g.jsx)("p",{className:"inline-link",onClick:R,children:"Choose another method"})]})]})},U=a(620),I=function(){var e=Object(i.b)(),t=o.a.useState(""),a=Object(s.a)(t,2),n=(a[0],a[1]),d=Object(r.useState)(!1),u=Object(s.a)(d,2),h=u[0],p=u[1],f=Object(r.useState)(!1),O=Object(s.a)(f,2),v=O[0],_=O[1],k=Object(r.useState)(""),N=Object(s.a)(k,2),w=N[0],C=N[1],y=Object(r.useCallback)((function(){_(!0)}),[_]),S=Object(r.useCallback)(function(){var t=Object(l.a)(c.a.mark((function t(a,n){var l,r,o,i,d,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l=m(a),r=Object(s.a)(l,2),o=r[0],i=r[1],console.log("connectHostIP:",o),d=o.replace(/^http(s)?:\/\//gi,""),t.next=6,Object(b.b)("".concat(d,":").concat(n),!0,i)(e);case 6:return u=t.sent,u.withProtocolHostIP,t.abrupt("return",!0);case 11:return t.prev=11,t.t0=t.catch(0),t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,a){return t.apply(this,arguments)}}(),[e]),z=Object(r.useCallback)((function(e){e&&C(e.text)}),[C]),P=Object(r.useCallback)(function(){var e=Object(l.a)(c.a.mark((function e(t){var a,l,s,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}return e.abrupt("return");case 3:return p(!0),console.log("Scanned Code:",t),n(null),a=JSON.parse(t),l=a.internalIP,s=a.externalIP,r=a.walletPort,e.next=9,S(l,r);case 9:if(!e.sent){e.next=13;break}return p(!1),e.abrupt("return",!0);case 13:return e.next=15,S(s,r);case 15:if(!e.sent){e.next=19;break}return p(!1),e.abrupt("return",!0);case 19:n("Unable to connect to host, please ensure that your ShockWizard node is up and fully synced to the blockchain."),e.next=27;break;case 22:e.prev=22,e.t0=e.catch(0),p(!1),console.error(e.t0),n(e.t0.message);case 27:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(t){return e.apply(this,arguments)}}(),[S]);Object(r.useEffect)((function(){w&&P(w)}),[P,w]);var W=Object(r.useCallback)((function(e){console.error(e),n("Unable to detect a camera, please make sure that the Camera permission is allowed in order to be able to scan QR Codes")}),[]),E=Object(r.useCallback)((function(){e(Object(j.c)(null)),e(Object(j.d)(null))}),[e]),I=Object(r.useCallback)((function(){e(Object(j.c)(null)),e(Object(j.d)(null))}),[e]);return Object(g.jsxs)("div",{className:"auth-form-container",children:[h?Object(g.jsx)(x.a,{fullScreen:!0,overlay:!0,text:"Loading Host..."}):null,v&&Object(g.jsx)(U.a,{mode:"wizard",onScan:z,onError:W,onClose:E}),!v&&Object(g.jsx)("div",{className:"vertical-flex-center",children:Object(g.jsxs)("div",{className:"m-b-1 vertical-flex-center",children:[Object(g.jsx)("h2",{className:"m-auto text-center",style:{marginBottom:"1rem"},children:"Connect to ShockWizard"}),Object(g.jsx)("a",{target:"_blank",href:"https://github.com/shocknet/Wizard",className:"w-50 m-auto",style:{marginBottom:"1rem"},rel:"noreferrer",children:Object(g.jsx)("img",{alt:"Laptop running Shockwizard and phone running Lightning.Page",className:"w-100",src:"https://raw.githubusercontent.com/shocknet/Wizard/master/wizardSS_900tr.png"})}),Object(g.jsxs)("p",{className:"text-center m-b-5",children:["ShockWizard is an easy to install Lightning node for your Desktop or Laptop. Windows, MacOS and Desktop Linux users can download it"," ",Object(g.jsx)("a",{target:"_blank",href:"https://github.com/shocknet/Wizard/releases",className:"color-text-blue",rel:"noreferrer",children:"Here"})]}),Object(g.jsx)("p",{className:"text-center ",children:"At the end of the Wizard, scan the QR code to pair it with your mobile device."})]})}),Object(g.jsx)("div",{style:{height:"15vh"}}),!v&&Object(g.jsx)("button",{className:"submit-btn",onClick:y,children:"Scan QR"}),!v&&Object(g.jsx)("p",{className:"inline-link",onClick:I,children:"Choose another method"})]})},q=(a(764),function(){var e=Object(i.b)(),t=Object(r.useState)(),a=Object(s.a)(t,2),n=a[0],o=a[1],d=Object(r.useState)(""),u=Object(s.a)(d,2),h=u[0],p=u[1],f=Object(r.useState)(""),m=Object(s.a)(f,2),O=m[0],v=m[1],_=Object(r.useState)(!1),k=Object(s.a)(_,2),N=k[0],w=k[1],C=Object(r.useState)(""),y=Object(s.a)(C,2),S=y[0],z=y[1],P=Object(r.useCallback)((function(e){var t=e.target,a=t.value;switch(t.name){case"alias":return void p(a);case"password":return void v(a);case"confirmPassword":return void z(a);default:return}}),[p,v,z]),W=Object(r.useCallback)(function(){var t=Object(l.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(h.length<3||h.length>32)){t.next=4;break}return o("Please specify an alias that is 3-32 characters long"),t.abrupt("return");case 4:if(O===S){t.next=7;break}return o("Password and Confirm password fields must match"),t.abrupt("return");case 7:return t.prev=7,w(!0),t.next=11,e(Object(b.c)({alias:h,password:O}));case 11:t.sent,t.next=17;break;case 14:t.prev=14,t.t0=t.catch(7),o(t.t0.message);case 17:return t.prev=17,w(!1),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[7,14,17,20]])})));return function(e){return t.apply(this,arguments)}}(),[h,O,S,e]),E=Object(r.useCallback)((function(){e(Object(j.d)("unlockWallet"))}),[e]),U=Object(r.useCallback)((function(){e(Object(j.c)(null)),e(Object(j.d)(null))}),[e]);return Object(g.jsxs)("div",{className:"auth-form-container",children:[N?Object(g.jsx)(x.a,{overlay:!0,fullScreen:!0,text:"Creating New Wallet..."}):null,Object(g.jsx)("p",{className:"auth-form-container-title",children:"Create New Alias"}),Object(g.jsxs)("form",{className:"auth-form",onSubmit:W,children:[Object(g.jsx)("input",{type:"text",name:"alias",placeholder:"New Alias",value:h,onChange:P,className:"input-field",autoCorrect:"off",autoCapitalize:"none"}),Object(g.jsx)("input",{type:"password",name:"password",placeholder:"LND Wallet Password",value:O,onChange:P,className:"input-field"}),Object(g.jsx)("input",{type:"password",name:"confirmPassword",placeholder:"Confirm Wallet Password",value:S,onChange:P,className:"input-field"}),n?Object(g.jsx)("p",{className:"error-container",children:n}):null,Object(g.jsx)("button",{className:"submit-btn",children:"Create"}),Object(g.jsx)("p",{className:"inline-link",onClick:E,children:"Use existing alias"}),Object(g.jsx)("p",{className:"inline-link",onClick:U,children:"Choose another method"})]})]})}),A=(a(765),a(73),a(766),function(e){var t=e.price,a=e.title,n=e.content,c=e.url,l=Object(i.b)(),s=Object(r.useCallback)((function(){l(Object(j.c)("shockCloud"))}),[l]);return Object(g.jsxs)("a",{className:"container",href:c,target:"_blank",onClick:s,"data-v-06368c33":"",children:[Object(g.jsx)("div",{className:"info-container","data-v-06368c33":"",children:Object(g.jsx)("p",{"data-v-06368c33":"",children:t})}),Object(g.jsx)("div",{className:"vertical-flex","data-v-06368c33":"",children:Object(g.jsxs)("div",{className:"info","data-v-06368c33":"",children:[Object(g.jsx)("p",{"data-v-06368c33":"",children:a}),Object(g.jsx)("p",{"data-v-06368c33":"",children:n})]})})]})}),L=function(){var e=Object(i.b)(),t=Object(r.useCallback)((function(){e(Object(j.c)("shockCloud"))}),[e]);return Object(g.jsxs)("div",{className:"tiers-step-container","data-v-7398f5a8":"",children:[Object(g.jsx)("p",{className:"tiers-title","data-v-7398f5a8":"",children:"Hosted Nodes"}),Object(g.jsx)("p",{className:"tiers-desc","data-v-7398f5a8":"",children:"Support development of Lightning.Page and receive a hosted node, including a Lightning Channel from our highly connected router."}),Object(g.jsxs)("div",{className:"tiers-container","data-v-7398f5a8":"",children:[Object(g.jsxs)("div",{className:"w-100 d-flex flex-align-center flex-justify-center","data-v-7398f5a8":"",children:[Object(g.jsx)("h4",{className:"m-r-1","data-v-7398f5a8":"",children:"USD"}),Object(g.jsxs)("label",{className:"switch","data-v-7398f5a8":"",children:[Object(g.jsx)("input",{type:"checkbox",disabled:!0,"data-v-7398f5a8":""}),Object(g.jsx)("span",{className:"slider round","data-v-7398f5a8":""})]}),Object(g.jsx)("h4",{className:"m-l-1","data-v-7398f5a8":"",children:"BTC"})]}),Object(g.jsxs)("div",{className:"d-flex flex-align-center m-b-1","data-v-7398f5a8":"",children:[Object(g.jsx)("p",{className:"usd-icon","data-v-7398f5a8":"",children:"$"}),Object(g.jsx)(A,{price:"15",title:"Casual node including a 250k sat capacity channel.",content:"Ocassionally receive tips and small payments.",url:"https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-1UN337076V329964EMCZ4UMQ","data-v-7398f5a8":""})]}),Object(g.jsxs)("div",{className:"d-flex flex-align-center m-b-1","data-v-7398f5a8":"",children:[Object(g.jsx)("p",{className:"usd-icon","data-v-7398f5a8":"",children:"$"}),Object(g.jsx)(A,{price:"20",title:"Hustle node including a 615k sat capacity channel.",content:"Regularly receive tips and medium payments.",url:"https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-64A57641L62950043MCZ4VVY","data-v-7398f5a8":""})]}),Object(g.jsxs)("div",{className:"d-flex flex-align-center m-b-1","data-v-7398f5a8":"",children:[Object(g.jsx)("p",{className:"usd-icon","data-v-7398f5a8":"",children:"$"}),Object(g.jsx)(A,{price:"25",title:"Power node including a 1.0M sat capacity channel.",content:"Regularly receive medium payments or lots of tips.",url:"https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-3C031681LU943680NMCZ46MY","data-v-7398f5a8":""})]}),Object(g.jsxs)("div",{className:"d-flex flex-align-center m-b-1","data-v-7398f5a8":"",children:[Object(g.jsx)("p",{className:"usd-icon","data-v-7398f5a8":"",children:"$"}),Object(g.jsx)(A,{price:"50",title:"Baller node including a 2.1M sat capacity channel.",content:"Consistantly receive tips and significant payments.",url:"https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-47A940565R4261602MCZ473Y","data-v-7398f5a8":""})]}),Object(g.jsxs)("div",{className:"d-flex flex-align-center m-b-1","data-v-7398f5a8":"",children:[Object(g.jsx)("p",{className:"usd-icon","data-v-7398f5a8":"",children:"$"}),Object(g.jsx)(A,{price:"75",title:"Whale node including a 6.15M sat capacity channel.",content:"Receive tips and substantial payments in volume.",url:"https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-9B5046250K1868737MCZ5AXQ","data-v-7398f5a8":""})]}),Object(g.jsx)("p",{className:"inline-link",onClick:t,"data-v-7398f5a8":"",children:"I have a guest invite"})]})]})},D=a(595),H=a(35);t.default=function(){var e=Object(i.b)(),t=k.useSelector((function(e){return e.node.hostIP})),a=k.useSelector((function(e){return e.node.relayId})),n=k.useSelector((function(e){return e.node.alias})),o=k.useSelector((function(e){return e.node.relayId})),p=Object(r.useState)(!!t),f=Object(s.a)(p,2),O=f[0],v=f[1],x=Object(r.useState)(null),C=Object(s.a)(x,2),S=C[0],P=C[1],W=Object(r.useState)(""),U=Object(s.a)(W,2),A=U[0],M=U[1],R=k.useSelector((function(e){return e.node.authTokenExpirationDate})),B=k.useSelector((function(e){return e.node.authToken})),T=k.useSelector((function(e){return e.auth.authStep})),Q=k.useSelector((function(e){return e.auth.authMethod}));Object(r.useEffect)((function(){B||e(Object(H.h)([{user:"tcUUzRkyzXYhIZQbmopiCLREyZ_kQJqQ-C4XesecOm4.GX1Dv-eGcfKuOPobBK9Q-Sc-o697XgVCQzOCfqfimIo",status:"ok",private:!1},{user:"CDfURSDaABun7sbzxt1LvUrTrtgLza_3NrCKrmUWIYU.Ssr3U9JN6cpFI9BZLL-1HLM2vS0ECEt-H4iUXvhkGzU",status:"ok",private:!1}]))}),[B,e]);var Y=Object(r.useCallback)((function(e){M(e.target.value)}),[M]);Object(r.useEffect)((function(){var e=t?t.replace("https://","").replace("http://",""):"",n=a?"".concat(a,"@").concat(e):t;M(n)}),[a,t,M]);var G=Object(r.useCallback)((function(){P(null),e(Object(j.d)("host"))}),[P,e]),F=Object(r.useMemo)((function(){return"manual"===Q&&"host"===T?Object(g.jsx)(_,{}):"shockWizard"===Q&&"scan"===T?Object(g.jsx)(I,{}):"shockCloud"===Q&&"inviteCode"===T?Object(g.jsx)(E,{}):"hostingTiers"===Q&&"chooseTier"===T?Object(g.jsx)(L,{}):"unlockWallet"===T||"gunAuth"===T?Object(g.jsx)(N,{}):"createWallet"===T?Object(g.jsx)(w,{}):"createGun"===T?Object(g.jsx)(q,{}):Object(g.jsx)(z,{})}),[T,Q]),Z=Object(r.useCallback)(function(){var a=Object(l.a)(c.a.mark((function a(n,l){var s,r,i,h,p;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(P(null),s=n||t,a.prev=2,!s){a.next=25;break}return v(!0),console.log("Loading cached node IP"),a.next=8,Object(b.b)(s,!1,l||o)(e);case 8:if(!(B&&d.DateTime.fromSeconds(R).diffNow().milliseconds>0)){a.next=23;break}return a.next=11,u.a.get("/api/gun/auth");case 11:if(r=a.sent,(i=r.data).data){a.next=19;break}return a.next=16,u.a.get("/api/lnd/wallet/status");case 16:h=a.sent,p=h.data,console.log(p);case 19:return Object(j.d)("unlockWallet"),v(!1),e(Object(j.e)(i.data)),a.abrupt("return");case 23:B&&(Object(j.d)("unlockWallet"),v(!1)),v(!1);case 25:a.next=31;break;case 27:a.prev=27,a.t0=a.catch(2),P("Unable to connect to cached Node IP, make sure ShockAPI is up and running on your machine"),v(!1);case 31:case"end":return a.stop()}}),a,null,[[2,27]])})));return function(e,t){return a.apply(this,arguments)}}(),[t,o,e,B,R]);Object(r.useEffect)((function(){Z()}),[Z]);var J=Object(r.useCallback)((function(){var e=m(A),t=Object(s.a)(e,2),a=t[0],n=t[1];Z(a,n)}),[A,Z]),V=Object(r.useCallback)((function(){e(Object(j.b)()),G()}),[e,G]);return Object(g.jsxs)(h.a,{disableNav:!0,contentClassName:"auth-page-content",onBack:G,showBackBtn:!!S,renderCommitHash:null===T||"host"===T,children:[Object(g.jsx)(y,{}),O&&Object(g.jsx)("span",{children:"Loading..."}),S&&Object(g.jsxs)("span",{children:["There was an error: ",S]}),S&&Object(g.jsxs)("div",{className:"error-info-container",children:[Object(g.jsx)("div",{className:"p-1",children:Object(g.jsx)(D.a,{label:"Cached node Url",value:A,onChange:Y})}),Object(g.jsx)("div",{className:"p-1",children:Object(g.jsx)(D.a,{label:"Cached alias",value:n})}),Object(g.jsx)("button",{className:"p-1 btn-primary",onClick:J,children:"RETRY"}),Object(g.jsx)("button",{className:"p-1 m-t-1 btn-secondary",onClick:V,children:"CLEAR"})]}),!O&&!S&&F]})}}}]);
//# sourceMappingURL=16.3b6b41c1.chunk.js.map