(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[16],{608:function(e,t,a){"use strict";a.d(t,"x",(function(){return l})),a.d(t,"p",(function(){return s})),a.d(t,"y",(function(){return r})),a.d(t,"i",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"e",(function(){return d})),a.d(t,"j",(function(){return u})),a.d(t,"A",(function(){return b})),a.d(t,"B",(function(){return j})),a.d(t,"z",(function(){return h})),a.d(t,"D",(function(){return f})),a.d(t,"l",(function(){return p})),a.d(t,"k",(function(){return m})),a.d(t,"h",(function(){return g})),a.d(t,"f",(function(){return O})),a.d(t,"g",(function(){return v})),a.d(t,"w",(function(){return _})),a.d(t,"n",(function(){return x})),a.d(t,"o",(function(){return k})),a.d(t,"q",(function(){return N})),a.d(t,"r",(function(){return w})),a.d(t,"a",(function(){return C})),a.d(t,"t",(function(){return y})),a.d(t,"c",(function(){return S})),a.d(t,"b",(function(){return z})),a.d(t,"u",(function(){return P})),a.d(t,"v",(function(){return U})),a.d(t,"m",(function(){return W})),a.d(t,"C",(function(){return E})),a.d(t,"s",(function(){return I}));var n=a(618),c=a.n(n),l=c.a.relative,s=c.a.flex,r=c.a.row,o=c.a.col,i=(c.a["start-align"],c.a["center-align"]),d=(c.a["end-align"],c.a["center-justify"]),u=c.a["col-centered"],b=c.a["space-around"],j=c.a["space-between"],h=c.a["row-centered"],f=(c.a["center-align-self"],c.a["flex-grow-1"],c.a["height-full"],c.a["width-auto"],c.a["width-100"]),p=(c.a["font-white"],c.a["font-black"],c.a.rotate90Ccw,c.a["common-padding-left"],c.a["common-padding-right"],c.a["common-padding-h"]),m=(c.a["common-margin-left"],c.a["common-margin-right"],c.a["common-margin-h"],c.a["common-margin-h-negative"]),g=(c.a["bg-black"],c.a["bg-white"],c.a["corners-rounded"],c.a["children-spaced-4"],c.a["children-spaced-8"]),O=(c.a["children-spaced-12"],c.a["children-spaced-16"],c.a["children-spaced-24"]),v=c.a["children-spaced-48-col"],_=(c.a["padding-0"],c.a["padding-2"],c.a["padding-4"],c.a["padding-8"],c.a["padding-12"]),x=(c.a["padding-16"],c.a["padding-24"],c.a["flat-btn"]),k=c.a["flat-btn-full-width"],N=(c.a["flat-btn-no-border"],c.a["font-size-4"],c.a["font-size-6"],c.a["font-size-8"],c.a["font-size-10"],c.a["font-size-12"]),w=(c.a["font-size-14"],c.a["font-size-16"],c.a["font-size-18"]),C=c.a.absolute,y=c.a["horizontally-centered-absolute"],S=(c.a["vertically-centered-absolute"],c.a["absolute-stick-to-top"]),z=(c.a["absolute-stick-to-bottom"],c.a["absolute-stick-to-left"],c.a["absolute-stick-to-right"],c.a["absolute-dead-center"]),P=(c.a["opacity-full"],c.a["opacity-half"],c.a["opacity-none"]),U=c.a["opacity-three-quarters"],W=c.a["display-none"],E=c.a.unselectable,I=c.a["hidden-input"]},611:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(1),c=a(88),l=a.n(c),s=a(7),r=(a(612),a(4)),o=73,i={minHeight:o};t.b=function(e){var t=e.pageTitle,a=e.drawerVisible,c=void 0!==a&&a,o=e.onHeight,d=void 0===o?s.b:o,u=Object(n.useCallback)((function(){window.history.back()}),[]),b=Object(n.useCallback)((function(e){if(e)try{d(e.getBoundingClientRect().height)}catch(t){console.log("Error inside onHeight mechanism in DialogNav:"),console.log(t)}}),[d]);return Object(r.jsxs)("div",{className:"dialog-nav-container",ref:b,style:i,"data-v-f1c12662":"",children:[Object(r.jsx)("div",{className:"dialog-nav-back",onClick:u,"data-v-f1c12662":"",children:Object(r.jsx)("i",{className:"icon icon-thin-back","data-v-f1c12662":""})}),Object(r.jsx)("p",{className:"dialog-nav-title","data-v-f1c12662":"",children:t}),Object(r.jsxs)("div",{className:l()({"dialog-nav-menu-btn":!0,"dialog-nav-hidden":!c}),"data-v-f1c12662":"",children:[Object(r.jsx)("div",{className:"dialog-nav-menu-dash","data-v-f1c12662":""}),Object(r.jsx)("div",{className:"dialog-nav-menu-dash","data-v-f1c12662":""}),Object(r.jsx)("div",{className:"dialog-nav-menu-dash","data-v-f1c12662":""})]})]})}},612:function(e,t,a){},613:function(e,t,a){"use strict";var n=a(49),c=(a(1),a(88)),l=a.n(c),s=a(7),r=(a(622),a(4));t.a=function(e){var t=e.label,a=void 0===t?"":t,c=e.name,o=void 0===c?"":c,i=e.onChange,d=e.inputAction,u=void 0===d?s.b:d,b=e.actionIcon,j=void 0===b?"":b,h=e.value,f=e.inputMode,p=void 0===f?"text":f,m=e.type,g=void 0===m?"text":m,O=e.element,v=void 0===O?"input":O,_=e.small,x=void 0!==_&&_,k=e.disabled,N=void 0!==k&&k;return Object(r.jsxs)("div",{className:l()({group:!0,"group-disabled":N,"group-small":x}),"data-v-960187ff":"",children:[a?Object(r.jsx)("p",{className:"group-label","data-v-960187ff":"",children:a}):null,Object(r.jsxs)("div",{className:l()({"group-input-container":!0,"group-input-textarea-container":"textarea"===v}),"data-v-960187ff":"",children:["textarea"===v?Object(r.jsx)("textarea",{className:"group-input group-input-textarea",name:o,onChange:i,inputMode:p,value:h,disabled:N,"data-v-960187ff":""}):Object(r.jsx)("input",{className:"group-input",type:g,name:o,onChange:i,inputMode:p,value:h,disabled:N,"data-v-960187ff":""}),u&&j?Object(r.jsx)("div",{className:"group-input-action",onClick:u,"data-v-960187ff":"",children:Object(r.jsx)("i",{className:l()(Object(n.a)({"group-input-action-icon":!0,fas:!0},j,!0)),onClick:u,"data-v-960187ff":""})}):null]})]})}},618:function(e,t,a){e.exports={PAD_H:"1em",relative:"global_relative__wwFd5",flex:"global_flex__3EqcS",row:"global_row__1A5FW global_flex__3EqcS",col:"global_col__3mp_5 global_flex__3EqcS","start-align":"global_start-align__-l9G8 global_flex__3EqcS","center-align":"global_center-align__2UEY8 global_flex__3EqcS","end-align":"global_end-align__1iZ_9 global_flex__3EqcS","center-justify":"global_center-justify__3etS9 global_flex__3EqcS","col-centered":"global_col-centered__1rqsl global_col__3mp_5 global_flex__3EqcS global_center-align__2UEY8 global_flex__3EqcS","space-around":"global_space-around__3HlTi global_flex__3EqcS","space-between":"global_space-between__2G6yv global_flex__3EqcS","row-centered":"global_row-centered__1H_cv global_row__1A5FW global_flex__3EqcS global_center-align__2UEY8 global_flex__3EqcS","center-align-self":"global_center-align-self__1GUs5","flex-grow-1":"global_flex-grow-1__2unHa global_flex__3EqcS","height-full":"global_height-full__1ZI6F","width-auto":"global_width-auto__1USRU","width-100":"global_width-100__29aAp","font-white":"global_font-white__NE-CT","font-black":"global_font-black__wjo9k",rotate90Ccw:"global_rotate90Ccw__11MjX","common-padding-left":"global_common-padding-left__2oqNo","common-padding-right":"global_common-padding-right__MpvbN","common-padding-h":"global_common-padding-h__8YHOB global_common-padding-left__2oqNo global_common-padding-right__MpvbN","common-margin-left":"global_common-margin-left__17kyp","common-margin-right":"global_common-margin-right__26jhw","common-margin-h":"global_common-margin-h__2btHF global_common-margin-left__17kyp global_common-margin-right__26jhw","common-margin-h-negative":"global_common-margin-h-negative__1DqlI","bg-black":"global_bg-black__AftPu","bg-white":"global_bg-white__3CREm","corners-rounded":"global_corners-rounded__12rFn","children-spaced-4":"global_children-spaced-4__1gmtr","children-spaced-8":"global_children-spaced-8__97gHF","children-spaced-12":"global_children-spaced-12__1mIIN","children-spaced-16":"global_children-spaced-16__GafSh","children-spaced-24":"global_children-spaced-24__2XpHO","children-spaced-48-col":"global_children-spaced-48-col__13vO_","padding-0":"global_padding-0__3w7nl","padding-2":"global_padding-2__3jsyO","padding-4":"global_padding-4__3mek9","padding-8":"global_padding-8__3xaKp","padding-12":"global_padding-12__1Fp31","padding-16":"global_padding-16__3S0ZC","padding-24":"global_padding-24__PWluU","flat-btn":"global_flat-btn__QCoQD","flat-btn-full-width":"global_flat-btn-full-width__1KMEz global_flat-btn__QCoQD global_width-100__29aAp","flat-btn-no-border":"global_flat-btn-no-border__1D6YS global_flat-btn__QCoQD","font-size-4":"global_font-size-4__152Yi","font-size-6":"global_font-size-6__1TiYJ","font-size-8":"global_font-size-8__3J8qe","font-size-10":"global_font-size-10__18w42","font-size-12":"global_font-size-12__3uTVa","font-size-14":"global_font-size-14__10gBO","font-size-16":"global_font-size-16__1VztM","font-size-18":"global_font-size-18__11bmr",absolute:"global_absolute__1CUuW","horizontally-centered-absolute":"global_horizontally-centered-absolute__U2Y8G global_absolute__1CUuW","vertically-centered-absolute":"global_vertically-centered-absolute__1G9Ok global_absolute__1CUuW","absolute-stick-to-top":"global_absolute-stick-to-top__2J4DW global_absolute__1CUuW","absolute-stick-to-bottom":"global_absolute-stick-to-bottom__3uJed global_absolute__1CUuW","absolute-stick-to-left":"global_absolute-stick-to-left__1p8ve global_absolute__1CUuW","absolute-stick-to-right":"global_absolute-stick-to-right__15ROv global_absolute__1CUuW","absolute-dead-center":"global_absolute-dead-center__3Tr4h","opacity-full":"global_opacity-full__3pv-G","opacity-half":"global_opacity-half__2Kryw","opacity-none":"global_opacity-none__1cDP9","opacity-three-quarters":"global_opacity-three-quarters__1uI42","display-none":"global_display-none__v9MKe",unselectable:"global_unselectable__20lft","hidden-input":"global_hidden-input__3enyw"}},622:function(e,t,a){},636:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(){return!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)}},643:function(e,t,a){"use strict";var n=a(660),c=a(636),l=(a(644),a(4)),s={wizard:{title:"SCAN A",target:"QR CODE",description:"Point your camera at a ShockWizard QR Code"},invoice:{title:"SCAN AN",target:"INVOICE",description:"Point your camera at an LND Invoice"}};t.a=function(e){var t=e.mode,a=void 0===t?"wizard":t,r=e.onScan,o=e.onError,i=e.onClose,d=s[a],u={};return Object(c.a)()||(u.facingMode={exact:"environment"}),Object(l.jsxs)("div",{className:"qr-code-scanner-container","data-v-22b8e4ac":"",children:[Object(l.jsx)("div",{className:"qr-scanner-top-section","data-v-22b8e4ac":"",children:Object(l.jsx)("i",{className:"fas fa-times",onClick:i,"data-v-22b8e4ac":""})}),Object(l.jsx)(n.a,{constraints:{video:u},onScan:r,onError:o,"data-v-22b8e4ac":""}),Object(l.jsx)("div",{className:"qr-scanner-target","data-v-22b8e4ac":""}),Object(l.jsxs)("div",{className:"qr-scanner-bottom-section","data-v-22b8e4ac":"",children:[Object(l.jsxs)("p",{className:"qr-scanner-bottom-title","data-v-22b8e4ac":"",children:[d.title," ",Object(l.jsx)("span",{className:"qr-scanner-bottom-title-highlight","data-v-22b8e4ac":"",children:d.target})]}),Object(l.jsx)("p",{className:"qr-scanner-bottom-description","data-v-22b8e4ac":"",children:d.description}),Object(l.jsx)("div",{className:"qr-scanner-btn",onClick:i,"data-v-22b8e4ac":"",children:"Cancel Scan"})]})]})}},644:function(e,t,a){},656:function(e,t,a){"use strict";var n=a(88),c=a.n(n),l=a(611),s=a(608),r=a(7),o=(a(673),a(4));t.a=function(e){var t=e.containerClassName,a=void 0===t?"":t,n=e.contentClassName,i=void 0===n?"":n,d=e.title,u=void 0===d?"":d,b=e.children,j=e.disableNav,h=void 0!==j&&j,f=e.onBack,p=void 0===f?r.b:f,m=e.showBackBtn,g=void 0!==m&&m,O=e.renderCommitHash,v=void 0!==O&&O;return Object(o.jsxs)("div",{className:"page-container dialog-page ".concat(a),style:h?{paddingTop:0}:{},"data-v-727e6d36":"",children:[g&&Object(o.jsx)("div",{className:"back-btn",onClick:p,"data-v-727e6d36":"",children:Object(o.jsx)("i",{className:c()("icon icon-thin-back",s.r),"data-v-727e6d36":""})}),h?null:Object(o.jsx)(l.b,{drawerVisible:!1,pageTitle:u,"data-v-727e6d36":""}),Object(o.jsx)("div",{className:"dialog-content-container ".concat(i),"data-v-727e6d36":"",children:b}),v&&Object(o.jsx)("span",{className:"commit-hash","data-v-727e6d36":"",children:"faa442f4"})]})}},673:function(e,t,a){},674:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=[{user:"tcUUzRkyzXYhIZQbmopiCLREyZ_kQJqQ-C4XesecOm4.GX1Dv-eGcfKuOPobBK9Q-Sc-o697XgVCQzOCfqfimIo",status:"ok",private:!1},{user:"CDfURSDaABun7sbzxt1LvUrTrtgLza_3NrCKrmUWIYU.Ssr3U9JN6cpFI9BZLL-1HLM2vS0ECEt-H4iUXvhkGzU",status:"ok",private:!1},{user:"Fd_7lUhwH7JoHbg6UKnGO9rYsZBOuR1KSbpZz8-Sbcw.fUu68TPuBWl83LBKgAbuiy0r1hMqnUevzyEgqPYu0B4",status:"ok",private:!1}]},755:function(e,t,a){},756:function(e,t,a){},757:function(e,t,a){},758:function(e,t,a){},759:function(e,t,a){},760:function(e,t,a){},908:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),l=a(5),s=a(13),r=a(1),o=a.n(r),i=a(38),d=a(185),u=a(27),b=a(40),j=a(19),h=a(656),f=a(88),p=a.n(f),m=function(e){var t=e.includes("@"),a=e.includes("#");if(t&&a){var n=e.split("#"),c=Object(s.a)(n,2),l=c[0],r=c[1].split("@"),o=Object(s.a)(r,2),i=o[0];return[o[1],i,l]}if(a){var d=e.split("#"),u=Object(s.a)(d,2),b=u[0];return[u[1],null,b]}if(t){var j=e.split("@"),h=Object(s.a)(j,2),f=h[0];return[h[1],f,null]}return[e,null,null]},g=a(4),O=function(e){var t=e.split(".");return 4===t.length&&!t.find((function(e){return isNaN(e)||parseInt(e,10)>255}))},v=function(e){if(console.log("check ip"),"localhost"===e||"http://localhost"===e)return e+":9835";if(O(e))return e+":9835";var t=e.startsWith("http")?e:"http://"+e,a=new URL(t);return!a.port&&O(a.hostname)?a.hostname+":9835":a.host},_=function(){var e=Object(i.b)(),t=Object(r.useState)(""),a=Object(s.a)(t,2),n=a[0],o=a[1],d=Object(r.useState)(""),u=Object(s.a)(d,2),h=u[0],f=u[1],O=Object(r.useState)(!1),_=Object(s.a)(O,2),x=_[0],k=_[1],N=Object(r.useCallback)((function(e){var t=e.target,a=t.value;switch(t.name){case"hostIP":return void f(a);default:return}}),[]),w=function(){var t=Object(l.a)(c.a.mark((function t(a){var n,l,r,i,d;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,a.preventDefault(),!x){t.next=4;break}return t.abrupt("return");case 4:return k(!0),o(null),n=m(h),l=Object(s.a)(n,2),r=l[0],i=l[1],d=v(r),t.next=10,Object(b.b)(d,!0,i)(e);case 10:t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),k(!1),o("Unable to connect to host");case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}(),C=Object(r.useCallback)((function(){e(Object(j.c)(null)),e(Object(j.d)(null))}),[e]);return Object(g.jsxs)("div",{className:"auth-form-container",children:[Object(g.jsxs)("div",{className:"vertical-flex-center",children:[Object(g.jsx)("h2",{children:"Configure Your Node"}),Object(g.jsxs)("p",{className:"text-center m-b-1",children:["Lightning.Page can connect to your own Lightning node, your node must be running"," ",Object(g.jsx)("a",{target:"_blank",href:"https://github.com/shocknet/api",className:"color-text-blue",rel:"noreferrer",children:"ShockAPI"})," ","with LND"]}),Object(g.jsxs)("p",{className:"text-center",children:["Umbrel, MyNode and Command Line instructions can be found"," ",Object(g.jsx)("a",{target:"_blank",href:"https://github.com/shocknet/api",className:"color-text-blue",rel:"noreferrer",children:"Here"})]})]}),Object(g.jsx)("div",{style:{height:"15vh"}}),!x&&Object(g.jsx)("p",{className:"auth-form-container-title",children:"Connect to Node"}),Object(g.jsx)("form",{className:"auth-form",onSubmit:w,children:x?Object(g.jsx)("p",{children:"Connecting..."}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("input",{autoCapitalize:"off",autoCorrect:"off",type:"text",name:"hostIP",placeholder:"Host Address (in IP or DNS form)",value:h,onChange:N,className:p()({"input-field":!0,"input-field-error":!!n})}),n?Object(g.jsx)("p",{className:"error-container",children:n}):null,Object(g.jsx)("button",{className:"submit-btn",type:"submit",children:"Connect"}),Object(g.jsx)("p",{className:"inline-link",onClick:C,children:"Choose another method"})]})})]})},x=a(183),k=a(18),N=function(){var e=Object(i.b)(),t=Object(r.useState)(),a=Object(s.a)(t,2),n=a[0],o=a[1],d=Object(r.useState)(""),u=Object(s.a)(d,2),h=u[0],f=u[1],p=k.useSelector((function(e){return e.node.alias})),m=Object(r.useState)(!1),O=Object(s.a)(m,2),v=O[0],_=O[1],N=Object(r.useState)(""),w=Object(s.a)(N,2),C=w[0],y=w[1],S=Object(r.useState)(!1),z=Object(s.a)(S,2),P=z[0],U=z[1],W=k.useSelector((function(e){return e.node.accessSecret})),E=Object(r.useCallback)((function(e){var t=e.target,a=t.value;switch(t.name){case"alias":return void f(a);case"password":return void y(a);default:return}}),[]),I=Object(r.useCallback)(function(){var t=Object(l.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),U(!0),t.prev=2,t.next=5,e(Object(b.g)({alias:h||p,password:C,accessSecret:W}));case 5:t.next=11;break;case 7:t.prev=7,t.t0=t.catch(2),o(t.t0.message),U(!1);case 11:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(e){return t.apply(this,arguments)}}(),[h,p,C,e,o,W]),q=Object(r.useCallback)((function(){e(Object(j.c)(null)),e(Object(j.d)(null))}),[e]),A=Object(r.useCallback)((function(){e(Object(j.d)("createGun"))}),[e]);return Object(g.jsxs)("div",{className:"auth-form-container",children:[P?Object(g.jsx)(x.a,{overlay:!0,fullScreen:!0,text:"Unlocking Wallet..."}):null,Object(g.jsx)("p",{className:"auth-form-container-title",children:"Unlock Wallet"}),Object(g.jsxs)("form",{className:"auth-form",onSubmit:I,children:[p&&!v?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:"row",width:"100%"},children:[Object(g.jsxs)("span",{children:["Alias: ",p]}),Object(g.jsx)("span",{className:"inline-link",style:{marginTop:"0px"},onClick:function(){_(!0)},children:"change"})]}),Object(g.jsx)("div",{style:{height:24}})]}):Object(g.jsx)("input",{type:"text",name:"alias",placeholder:"Wallet Alias",value:h,onChange:E,className:"input-field",autoCorrect:"off",autoCapitalize:"none"}),Object(g.jsx)("input",{type:"password",name:"password",placeholder:"Wallet Password",value:C,onChange:E,className:"input-field"}),n?Object(g.jsx)("p",{className:"error-container",children:n}):null,Object(g.jsx)("button",{className:"submit-btn",children:"Unlock"}),Object(g.jsx)("p",{className:"inline-link",onClick:A,children:"Create a new alias"}),Object(g.jsx)("p",{className:"inline-link",onClick:q,children:"Choose another method"})]})]})},w=function(){var e=Object(i.b)(),t=Object(r.useState)(""),a=Object(s.a)(t,2),n=a[0],o=a[1],d=Object(r.useState)(""),u=Object(s.a)(d,2),h=u[0],f=u[1],p=Object(r.useState)(""),m=Object(s.a)(p,2),O=m[0],v=m[1],_=Object(r.useState)(""),k=Object(s.a)(_,2),N=k[0],w=k[1],C=Object(r.useState)(!1),y=Object(s.a)(C,2),S=y[0],z=y[1],P=Object(r.useCallback)((function(e){var t=e.target,a=t.value;switch(t.name){case"alias":return void f(a);case"password":return void v(a);case"confirmPassword":return void w(a);default:return}}),[f,v,w]),U=Object(r.useCallback)(function(){var t=Object(l.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(h.length<3||h.length>32)){t.next=4;break}return o("Please specify an alias that is 3-32 characters long"),t.abrupt("return");case 4:if(O===N){t.next=7;break}return o("Password and Confirm password fields must match"),t.abrupt("return");case 7:if(!(O.length<8||O.length>32)){t.next=10;break}return o("Password length should be 8-32 characters long"),t.abrupt("return");case 10:return t.prev=10,z(!0),t.next=14,e(Object(b.d)({alias:h,password:O}));case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(10),o(t.t0.message);case 19:return t.prev=19,z(!1),t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[10,16,19,22]])})));return function(e){return t.apply(this,arguments)}}(),[h,O,N,e]),W=Object(r.useCallback)((function(){e(Object(j.c)(null)),e(Object(j.d)(null))}),[e]);return Object(g.jsxs)("div",{className:"auth-form-container",children:[S?Object(g.jsx)(x.a,{overlay:!0,fullScreen:!0,text:"Creating New Wallet..."}):null,Object(g.jsx)("p",{className:"auth-form-container-title",children:"Create New Wallet"}),Object(g.jsxs)("form",{className:"auth-form",onSubmit:U,children:[Object(g.jsx)("input",{type:"text",name:"alias",placeholder:"Wallet Alias",value:h,onChange:P,className:"input-field",autoCorrect:"off",autoCapitalize:"none"}),Object(g.jsx)("input",{type:"password",name:"password",placeholder:"Wallet Password",value:O,onChange:P,className:"input-field"}),Object(g.jsx)("input",{type:"password",name:"confirmPassword",placeholder:"Confirm Wallet Password",value:N,onChange:P,className:"input-field"}),n?Object(g.jsx)("p",{className:"error-container",children:n}):null,Object(g.jsx)("button",{className:"submit-btn",children:"Create"}),Object(g.jsx)("p",{className:"inline-link",onClick:W,children:"Choose another method"})]})]})},C=a.p+"static/media/shocklogo-dark.d7ab5340.png",y=(a(755),function(){return Object(g.jsx)("div",{className:"auth-logo-header","data-v-0cc150c2":"",children:Object(g.jsx)("img",{className:"auth-logo",src:C,alt:"Lightning.Page Logo","data-v-0cc150c2":""})})}),S=(a(756),function(e){var t=e.icon,a=e.details,n=e.method,c=Object(i.b)(),l=Object(r.useCallback)((function(){c(Object(j.c)(n))}),[c,n]);return Object(g.jsxs)("div",{className:"container",onClick:l,"data-v-de6e56c4":"",children:[Object(g.jsx)("div",{className:"icon-container","data-v-de6e56c4":"",children:Object(g.jsx)("i",{className:"icon fas fa-".concat(t),"data-v-de6e56c4":""})}),Object(g.jsx)("p",{className:"info","data-v-de6e56c4":"",children:a})]})}),z=(a(757),function(){var e=Object(i.b)(),t=Object(r.useCallback)((function(){e(Object(j.c)("shockCloud"))}),[e]);return Object(g.jsxs)("div",{className:"choices-step-container","data-v-8c1cffd0":"",children:[Object(g.jsx)("p",{className:"choices-title","data-v-8c1cffd0":"",children:"Node Up"}),Object(g.jsx)("p",{className:"choices-desc","data-v-8c1cffd0":"",children:"In a decentralized network, a node is like a personal server that works even as your mobile sleeps."}),Object(g.jsxs)("div",{className:"choices-container","data-v-8c1cffd0":"",children:[Object(g.jsx)(S,{icon:"code-branch",details:"I already have a node, and want to enter a network address",method:"manual","data-v-8c1cffd0":""}),Object(g.jsx)(S,{icon:"qrcode",details:"I'll install the ShockNode Wizard app on a computer",method:"shockWizard","data-v-8c1cffd0":""}),Object(g.jsx)(S,{icon:"cloud",details:"I'd like a personal cloud node provided as a service",method:"hostingTiers","data-v-8c1cffd0":""}),Object(g.jsx)("p",{className:"inline-link",onClick:t,"data-v-8c1cffd0":"",children:"I have a guest invite"})]})]})}),P=a(15),U="pool.shock.network",W=function(){var e=Object(i.b)(),t=Object(r.useState)(!1),a=Object(s.a)(t,2),n=a[0],o=a[1],d=Object(r.useState)(""),h=Object(s.a)(d,2),f=h[0],O=h[1],v=Object(r.useState)(""),_=Object(s.a)(v,2),x=_[0],k=_[1],N=Object(r.useState)(0),w=Object(s.a)(N,2),C=w[0],y=w[1],S=Object(r.useState)(0),z=Object(s.a)(S,2),W=z[0],E=z[1],I=Object(r.useState)(0),q=Object(s.a)(I,2),A=q[0],L=q[1],D=Object(r.useCallback)((function(e){var t=e.target,a=t.value;switch(t.name){case"inviteCode":return void k(a);default:return}}),[]),M=Object(r.useCallback)(function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){var n=t.match(/:(\d+)/);if(!n)return e(t);var c=new WebSocket("wss://".concat(U,"/ws/healthz"));c.addEventListener("open",(function(e){c.send("health(".concat(n[1],")"))})),c.addEventListener("message",(function(t){var a=JSON.parse(t.data),n=0;a.api_uri&&(E(1),n++),a.pod_ready&&(y(1),n++),a.lnd_ready&&(L(1),n++),3===n&&(c.close(),e(a.api_uri))}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[E,y,L]),H=Object(r.useCallback)(function(){var t=Object(l.a)(c.a.mark((function t(a){var n,l,r,i,d,j,h,f,p,g,v;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a.preventDefault(),O(null),o(!0),t.next=6,u.a.get("https://".concat(U,"/mainnet"),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(x)}});case 6:return n=t.sent,l=n.data,r=l.data.address,t.next=11,M(r);case 11:return i=t.sent,d=m(i),j=Object(s.a)(d,2),h=j[0],f=j[1],p=h.replace(/^http(s)?:\/\//gi,""),t.next=16,Object(b.b)(p,!0,f)(e);case 16:g=t.sent,v=g.withProtocolHostIP,Object(P.a)(v),t.next=25;break;case 21:t.prev=21,t.t0=t.catch(0),o(!1),O("Unable to connect to host");case 25:case"end":return t.stop()}}),t,null,[[0,21]])})));return function(e){return t.apply(this,arguments)}}(),[e,x,M]),B=Object(r.useCallback)((function(){e(Object(j.c)(null)),e(Object(j.d)(null))}),[e]),R=C+W+A,T=R/3*100;return Object(g.jsxs)("div",{className:"auth-form-container",children:[n&&Object(g.jsxs)("div",{className:"w-100",children:[Object(g.jsxs)("p",{className:"text-center",children:[0===R&&"Initializing Node...",1===R&&"Preparing API...",2===R&&"Synchronizing LND...",3===R&&"All set! Let's go!"]}),Object(g.jsx)("div",{className:"meter blue",children:Object(g.jsx)("span",{style:{width:"".concat(T||2,"%")}})})]}),Object(g.jsx)("p",{className:"auth-form-container-title",children:"Invitation Code"}),!n&&Object(g.jsxs)("form",{className:"auth-form",onSubmit:H,children:[Object(g.jsx)("input",{type:"text",name:"inviteCode",placeholder:"Enter your invitation code",value:x,onChange:D,className:p()({"input-field":!0,"input-field-error":!!f})}),f?Object(g.jsx)("p",{className:"error-container",children:f}):null,Object(g.jsx)("button",{className:"submit-btn",type:"submit",children:"Connect"}),Object(g.jsx)("p",{className:"inline-link",onClick:B,children:"Choose another method"})]})]})},E=a(643),I=function(){var e=Object(i.b)(),t=o.a.useState(""),a=Object(s.a)(t,2),n=(a[0],a[1]),d=Object(r.useState)(!1),u=Object(s.a)(d,2),h=u[0],f=u[1],p=Object(r.useState)(!1),O=Object(s.a)(p,2),v=O[0],_=O[1],k=Object(r.useState)(""),N=Object(s.a)(k,2),w=N[0],C=N[1],y=Object(r.useCallback)((function(){_(!0)}),[_]),S=Object(r.useCallback)(function(){var t=Object(l.a)(c.a.mark((function t(a,n){var l,r,o,i,d,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l=m(a),r=Object(s.a)(l,3),o=r[0],i=r[1],d=r[2],console.log("connectHostIP:",o),u=o.replace(/^http(s)?:\/\//gi,""),t.next=6,Object(b.b)("".concat(u,":").concat(n),!0,i,d)(e);case 6:return t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",!1);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,a){return t.apply(this,arguments)}}(),[e]),z=Object(r.useCallback)((function(e){e&&C(e.text)}),[C]),P=Object(r.useCallback)(function(){var e=Object(l.a)(c.a.mark((function e(t){var a,l,s,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}return e.abrupt("return");case 3:return f(!0),console.log("Scanned Code:",t),n(null),a=JSON.parse(t),l=a.internalIP,s=a.externalIP,r=a.walletPort,e.next=9,S(l,r);case 9:if(!e.sent){e.next=13;break}return f(!1),e.abrupt("return",!0);case 13:return e.next=15,S(s,r);case 15:if(!e.sent){e.next=19;break}return f(!1),e.abrupt("return",!0);case 19:n("Unable to connect to host, please ensure that your ShockWizard node is up and fully synced to the blockchain."),e.next=27;break;case 22:e.prev=22,e.t0=e.catch(0),f(!1),console.error(e.t0),n(e.t0.message);case 27:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(t){return e.apply(this,arguments)}}(),[S]);Object(r.useEffect)((function(){w&&P(w)}),[P,w]);var U=Object(r.useCallback)((function(e){console.error(e),n("Unable to detect a camera, please make sure that the Camera permission is allowed in order to be able to scan QR Codes")}),[]),W=Object(r.useCallback)((function(){e(Object(j.c)(null)),e(Object(j.d)(null))}),[e]),I=Object(r.useCallback)((function(){e(Object(j.c)(null)),e(Object(j.d)(null))}),[e]);return Object(g.jsxs)("div",{className:"auth-form-container",children:[h?Object(g.jsx)(x.a,{fullScreen:!0,overlay:!0,text:"Loading Host..."}):null,v&&Object(g.jsx)(E.a,{mode:"wizard",onScan:z,onError:U,onClose:W}),!v&&Object(g.jsx)("div",{className:"vertical-flex-center",children:Object(g.jsxs)("div",{className:"m-b-1 vertical-flex-center",children:[Object(g.jsx)("h2",{className:"m-auto text-center",style:{marginBottom:"1rem"},children:"Connect to ShockWizard"}),Object(g.jsx)("a",{target:"_blank",href:"https://github.com/shocknet/Wizard",className:"w-50 m-auto",style:{marginBottom:"1rem"},rel:"noreferrer",children:Object(g.jsx)("img",{alt:"Laptop running Shockwizard and phone running Lightning.Page",className:"w-100",src:"https://raw.githubusercontent.com/shocknet/Wizard/master/wizardSS_900tr.png"})}),Object(g.jsxs)("p",{className:"text-center m-b-5",children:["ShockWizard is an easy to install Lightning node for your Desktop or Laptop. Windows, MacOS and Desktop Linux users can download it"," ",Object(g.jsx)("a",{target:"_blank",href:"https://github.com/shocknet/Wizard/releases",className:"color-text-blue",rel:"noreferrer",children:"Here"})]}),Object(g.jsx)("p",{className:"text-center ",children:"At the end of the Wizard, scan the QR code to pair it with your mobile device."})]})}),Object(g.jsx)("div",{style:{height:"15vh"}}),!v&&Object(g.jsx)("button",{className:"submit-btn",onClick:y,children:"Scan QR"}),!v&&Object(g.jsx)("p",{className:"inline-link",onClick:I,children:"Choose another method"})]})},q=(a(758),function(){var e=Object(i.b)(),t=Object(r.useState)(""),a=Object(s.a)(t,2),n=a[0],o=a[1],d=Object(r.useState)(""),u=Object(s.a)(d,2),h=u[0],f=u[1],p=Object(r.useState)(""),m=Object(s.a)(p,2),O=m[0],v=m[1],_=Object(r.useState)(!1),N=Object(s.a)(_,2),w=N[0],C=N[1],y=Object(r.useState)(""),S=Object(s.a)(y,2),z=S[0],P=S[1],U=k.useSelector((function(e){return e.node.accessSecret})),W=Object(r.useCallback)((function(e){var t=e.target,a=t.value;switch(t.name){case"alias":return void f(a);case"password":return void v(a);case"confirmPassword":return void P(a);default:return}}),[f,v,P]),E=Object(r.useCallback)(function(){var t=Object(l.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(h.length<3||h.length>32)){t.next=4;break}return o("Please specify an alias that is 3-32 characters long"),t.abrupt("return");case 4:if(O===z){t.next=7;break}return o("Password and Confirm password fields must match"),t.abrupt("return");case 7:return t.prev=7,C(!0),t.next=11,e(Object(b.c)({alias:h,password:O,accessSecret:U}));case 11:t.sent,t.next=17;break;case 14:t.prev=14,t.t0=t.catch(7),o(t.t0.message);case 17:return t.prev=17,C(!1),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[7,14,17,20]])})));return function(e){return t.apply(this,arguments)}}(),[h,O,z,e,U]),I=Object(r.useCallback)((function(){e(Object(j.d)("unlockWallet"))}),[e]),q=Object(r.useCallback)((function(){e(Object(j.c)(null)),e(Object(j.d)(null))}),[e]);return Object(g.jsxs)("div",{className:"auth-form-container",children:[w?Object(g.jsx)(x.a,{overlay:!0,fullScreen:!0,text:"Creating New Wallet..."}):null,Object(g.jsx)("p",{className:"auth-form-container-title",children:"Create New Alias"}),Object(g.jsxs)("form",{className:"auth-form",onSubmit:E,children:[Object(g.jsx)("input",{type:"text",name:"alias",placeholder:"New Alias",value:h,onChange:W,className:"input-field",autoCorrect:"off",autoCapitalize:"none"}),Object(g.jsx)("input",{type:"password",name:"password",placeholder:"LND Wallet Password",value:O,onChange:W,className:"input-field"}),Object(g.jsx)("input",{type:"password",name:"confirmPassword",placeholder:"Confirm Wallet Password",value:z,onChange:W,className:"input-field"}),n?Object(g.jsx)("p",{className:"error-container",children:n}):null,Object(g.jsx)("button",{className:"submit-btn",children:"Create"}),Object(g.jsx)("p",{className:"inline-link",onClick:I,children:"Use existing alias"}),Object(g.jsx)("p",{className:"inline-link",onClick:q,children:"Choose another method"})]})]})}),A=(a(759),a(760),function(e){var t=e.price,a=e.title,n=e.content,c=e.url,l=Object(i.b)(),s=Object(r.useCallback)((function(){l(Object(j.c)("shockCloud"))}),[l]);return Object(g.jsxs)("a",{className:"container",href:c,target:"_blank",onClick:s,rel:"noreferrer","data-v-089133e4":"",children:[Object(g.jsx)("div",{className:"info-container","data-v-089133e4":"",children:Object(g.jsx)("p",{"data-v-089133e4":"",children:t})}),Object(g.jsx)("div",{className:"vertical-flex","data-v-089133e4":"",children:Object(g.jsxs)("div",{className:"info","data-v-089133e4":"",children:[Object(g.jsx)("p",{"data-v-089133e4":"",children:a}),Object(g.jsx)("p",{"data-v-089133e4":"",children:n})]})})]})}),L=function(){var e=Object(i.b)(),t=Object(r.useCallback)((function(){e(Object(j.c)("shockCloud"))}),[e]);return Object(g.jsxs)("div",{className:"tiers-step-container","data-v-927f2b91":"",children:[Object(g.jsx)("p",{className:"tiers-title","data-v-927f2b91":"",children:"Hosted Nodes"}),Object(g.jsx)("p",{className:"tiers-desc","data-v-927f2b91":"",children:"Support development of Lightning.Page and receive a hosted node, including a Lightning Channel from our highly connected router."}),Object(g.jsxs)("div",{className:"tiers-container","data-v-927f2b91":"",children:[Object(g.jsxs)("div",{className:"w-100 d-flex flex-align-center flex-justify-center","data-v-927f2b91":"",children:[Object(g.jsx)("h4",{className:"m-r-1","data-v-927f2b91":"",children:"USD"}),Object(g.jsxs)("label",{className:"switch","data-v-927f2b91":"",children:[Object(g.jsx)("input",{type:"checkbox",disabled:!0,"data-v-927f2b91":""}),Object(g.jsx)("span",{className:"slider round","data-v-927f2b91":""})]}),Object(g.jsx)("h4",{className:"m-l-1","data-v-927f2b91":"",children:"BTC"})]}),Object(g.jsxs)("div",{className:"d-flex flex-align-center m-b-1","data-v-927f2b91":"",children:[Object(g.jsx)("p",{className:"usd-icon","data-v-927f2b91":"",children:"$"}),Object(g.jsx)(A,{price:"15",title:"Casual node including a 250k sat capacity channel.",content:"Ocassionally receive tips and small payments.",url:"https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-1UN337076V329964EMCZ4UMQ","data-v-927f2b91":""})]}),Object(g.jsxs)("div",{className:"d-flex flex-align-center m-b-1","data-v-927f2b91":"",children:[Object(g.jsx)("p",{className:"usd-icon","data-v-927f2b91":"",children:"$"}),Object(g.jsx)(A,{price:"20",title:"Hustle node including a 615k sat capacity channel.",content:"Regularly receive tips and medium payments.",url:"https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-64A57641L62950043MCZ4VVY","data-v-927f2b91":""})]}),Object(g.jsxs)("div",{className:"d-flex flex-align-center m-b-1","data-v-927f2b91":"",children:[Object(g.jsx)("p",{className:"usd-icon","data-v-927f2b91":"",children:"$"}),Object(g.jsx)(A,{price:"25",title:"Power node including a 1.0M sat capacity channel.",content:"Regularly receive medium payments or lots of tips.",url:"https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-3C031681LU943680NMCZ46MY","data-v-927f2b91":""})]}),Object(g.jsxs)("div",{className:"d-flex flex-align-center m-b-1","data-v-927f2b91":"",children:[Object(g.jsx)("p",{className:"usd-icon","data-v-927f2b91":"",children:"$"}),Object(g.jsx)(A,{price:"50",title:"Baller node including a 2.1M sat capacity channel.",content:"Consistantly receive tips and significant payments.",url:"https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-47A940565R4261602MCZ473Y","data-v-927f2b91":""})]}),Object(g.jsxs)("div",{className:"d-flex flex-align-center m-b-1","data-v-927f2b91":"",children:[Object(g.jsx)("p",{className:"usd-icon","data-v-927f2b91":"",children:"$"}),Object(g.jsx)(A,{price:"75",title:"Whale node including a 6.15M sat capacity channel.",content:"Receive tips and substantial payments in volume.",url:"https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-9B5046250K1868737MCZ5AXQ","data-v-927f2b91":""})]}),Object(g.jsx)("p",{className:"inline-link",onClick:t,"data-v-927f2b91":"",children:"I have a guest invite"})]})]})},D=a(613),M=a(36),H=a(674);t.default=function(){var e=Object(i.b)(),t=k.useSelector((function(e){return e.node.hostIP})),a=k.useSelector((function(e){return e.node.relayId})),n=k.useSelector((function(e){return e.node.alias})),o=k.useSelector((function(e){return e.node.relayId})),f=Object(r.useState)(!!t),p=Object(s.a)(f,2),O=p[0],v=p[1],x=Object(r.useState)(null),C=Object(s.a)(x,2),S=C[0],P=C[1],U=Object(r.useState)(""),E=Object(s.a)(U,2),A=E[0],B=E[1],R=k.useSelector((function(e){return e.node.authTokenExpirationDate})),T=k.useSelector((function(e){return e.node.authToken})),Q=k.useSelector((function(e){return e.auth.authStep})),Y=k.useSelector((function(e){return e.auth.authMethod}));Object(r.useEffect)((function(){T||e(Object(M.h)(H.a))}),[T,e]);var G=Object(r.useCallback)((function(e){B(e.target.value)}),[B]);Object(r.useEffect)((function(){var e=t?t.replace("https://","").replace("http://",""):"",n=a?"".concat(a,"@").concat(e):t;B(n)}),[a,t,B]);var Z=Object(r.useCallback)((function(){P(null),e(Object(j.d)("host"))}),[P,e]),F=Object(r.useMemo)((function(){return"manual"===Y&&"host"===Q?Object(g.jsx)(_,{}):"shockWizard"===Y&&"scan"===Q?Object(g.jsx)(I,{}):"shockCloud"===Y&&"inviteCode"===Q?Object(g.jsx)(W,{}):"hostingTiers"===Y&&"chooseTier"===Q?Object(g.jsx)(L,{}):"unlockWallet"===Q||"gunAuth"===Q?Object(g.jsx)(N,{}):"createWallet"===Q?Object(g.jsx)(w,{}):"createGun"===Q?Object(g.jsx)(q,{}):Object(g.jsx)(z,{})}),[Q,Y]),J=Object(r.useCallback)(function(){var a=Object(l.a)(c.a.mark((function a(n,l){var s,r,i,h,f;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(P(null),s=n||t,a.prev=2,!s){a.next=25;break}return v(!0),console.log("Loading cached node IP"),a.next=8,Object(b.b)(s,!1,l||o)(e);case 8:if(!(T&&d.DateTime.fromSeconds(R).diffNow().milliseconds>0)){a.next=23;break}return a.next=11,u.a.get("/api/gun/auth");case 11:if(r=a.sent,(i=r.data).data){a.next=19;break}return a.next=16,u.a.get("/api/lnd/wallet/status");case 16:h=a.sent,f=h.data,console.log(f);case 19:return Object(j.d)("unlockWallet"),v(!1),e(Object(j.e)(i.data)),a.abrupt("return");case 23:T&&(Object(j.d)("unlockWallet"),v(!1)),v(!1);case 25:a.next=31;break;case 27:a.prev=27,a.t0=a.catch(2),P("Unable to connect to cached Node IP, make sure ShockAPI is up and running on your machine"),v(!1);case 31:case"end":return a.stop()}}),a,null,[[2,27]])})));return function(e,t){return a.apply(this,arguments)}}(),[t,o,e,T,R]);Object(r.useEffect)((function(){J()}),[J]);var K=Object(r.useCallback)((function(){var e=m(A),t=Object(s.a)(e,2),a=t[0],n=t[1];J(a,n)}),[A,J]),V=Object(r.useCallback)((function(){e(Object(j.b)()),Z()}),[e,Z]);return Object(g.jsxs)(h.a,{disableNav:!0,contentClassName:"auth-page-content",onBack:Z,showBackBtn:!!S,renderCommitHash:null===Q||"host"===Q,children:[Object(g.jsx)(y,{}),O&&Object(g.jsx)("span",{children:"Loading..."}),S&&Object(g.jsxs)("span",{children:["There was an error: ",S]}),S&&Object(g.jsxs)("div",{className:"error-info-container",children:[Object(g.jsx)("div",{className:"p-1",children:Object(g.jsx)(D.a,{label:"Cached node Url",value:A,onChange:G})}),Object(g.jsx)("div",{className:"p-1",children:Object(g.jsx)(D.a,{label:"Cached alias",value:n})}),Object(g.jsx)("button",{className:"p-1 btn-primary",onClick:K,children:"RETRY"}),Object(g.jsx)("button",{className:"p-1 m-t-1 btn-secondary",onClick:V,children:"CLEAR"})]}),!O&&!S&&F]})}}}]);
//# sourceMappingURL=16.749907b9.chunk.js.map