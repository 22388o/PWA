(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[30],{611:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(1),c=a(88),i=a.n(c),s=a(7),r=(a(612),a(4)),o=73,d={minHeight:o};t.b=function(e){var t=e.pageTitle,a=e.drawerVisible,c=void 0!==a&&a,o=e.onHeight,l=void 0===o?s.b:o,u=Object(n.useCallback)((function(){window.history.back()}),[]),b=Object(n.useCallback)((function(e){if(e)try{l(e.getBoundingClientRect().height)}catch(t){console.log("Error inside onHeight mechanism in DialogNav:"),console.log(t)}}),[l]);return Object(r.jsxs)("div",{className:"dialog-nav-container",ref:b,style:d,"data-v-f1c12662":"",children:[Object(r.jsx)("div",{className:"dialog-nav-back",onClick:u,"data-v-f1c12662":"",children:Object(r.jsx)("i",{className:"icon icon-thin-back","data-v-f1c12662":""})}),Object(r.jsx)("p",{className:"dialog-nav-title","data-v-f1c12662":"",children:t}),Object(r.jsxs)("div",{className:i()({"dialog-nav-menu-btn":!0,"dialog-nav-hidden":!c}),"data-v-f1c12662":"",children:[Object(r.jsx)("div",{className:"dialog-nav-menu-dash","data-v-f1c12662":""}),Object(r.jsx)("div",{className:"dialog-nav-menu-dash","data-v-f1c12662":""}),Object(r.jsx)("div",{className:"dialog-nav-menu-dash","data-v-f1c12662":""})]})]})}},612:function(e,t,a){},613:function(e,t,a){"use strict";var n=a(49),c=(a(1),a(88)),i=a.n(c),s=a(7),r=(a(622),a(4));t.a=function(e){var t=e.label,a=void 0===t?"":t,c=e.name,o=void 0===c?"":c,d=e.onChange,l=e.inputAction,u=void 0===l?s.b:l,b=e.actionIcon,v=void 0===b?"":b,j=e.value,p=e.inputMode,f=void 0===p?"text":p,m=e.type,h=void 0===m?"text":m,O=e.element,x=void 0===O?"input":O,g=e.small,k=void 0!==g&&g,N=e.disabled,C=void 0!==N&&N;return Object(r.jsxs)("div",{className:i()({group:!0,"group-disabled":C,"group-small":k}),"data-v-960187ff":"",children:[a?Object(r.jsx)("p",{className:"group-label","data-v-960187ff":"",children:a}):null,Object(r.jsxs)("div",{className:i()({"group-input-container":!0,"group-input-textarea-container":"textarea"===x}),"data-v-960187ff":"",children:["textarea"===x?Object(r.jsx)("textarea",{className:"group-input group-input-textarea",name:o,onChange:d,inputMode:f,value:j,disabled:C,"data-v-960187ff":""}):Object(r.jsx)("input",{className:"group-input",type:h,name:o,onChange:d,inputMode:f,value:j,disabled:C,"data-v-960187ff":""}),u&&v?Object(r.jsx)("div",{className:"group-input-action",onClick:u,"data-v-960187ff":"",children:Object(r.jsx)("i",{className:i()(Object(n.a)({"group-input-action-icon":!0,fas:!0},v,!0)),onClick:u,"data-v-960187ff":""})}):null]})]})}},622:function(e,t,a){},772:function(e,t,a){},904:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),i=a(5),s=a(13),r=a(1),o=a(38),d=a(611),l=a(183),u=a(613),b=a(117),v=a(26),j=(a(772),a(4));t.default=function(){var e=Object(o.b)(),t=Object(v.g)(),a=Object(o.c)((function(e){return e.content.seedInfo})),n=a.seedUrl,p=a.seedToken,f=Object(r.useState)(!1),m=Object(s.a)(f,2),h=m[0],O=m[1],x=Object(r.useState)(null),g=Object(s.a)(x,2),k=g[0],N=g[1],C=Object(r.useState)("torrentSeed"),y=Object(s.a)(C,2),w=y[0],S=y[1],T=Object(r.useState)(0),D=Object(s.a)(T,2),H=D[0],I=D[1],M=Object(r.useCallback)((function(e){var t=e.target,a=t.value,n=t.name;switch(e.preventDefault(),n){case"type":return void S(a);case"price":return void I(a);default:return}}),[S,I]),A=Object(r.useCallback)(function(){var a=Object(i.a)(c.a.mark((function a(i){var s,r,o;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(i.preventDefault(),n&&p){a.next=4;break}return N("seed url and token are not set in config"),a.abrupt("return");case 4:if(!(H<=0)){a.next=7;break}return N("service price must be greater than 0"),a.abrupt("return");case 7:return a.prev=7,O(!0),s={serviceType:w,serviceTitle:"Content Seeding",serviceDescription:"",serviceCondition:"",servicePrice:H},r={serviceSeedUrl:n,serviceSeedToken:p},a.next=13,Object(b.c)(s,r)(e);case 13:o=a.sent,console.log(o),O(!1),t.push("/profile"),a.next=23;break;case 19:a.prev=19,a.t0=a.catch(7),O(!1),N(a.t0.message||a.t0);case 23:case"end":return a.stop()}}),a,null,[[7,19]])})));return function(e){return a.apply(this,arguments)}}(),[w,H,t,e,n,p]),B=Object(r.useCallback)(function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),N(null),S("torrentSeed"),I(0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[N,S,I]);return Object(j.jsxs)("div",{className:"publish-content-form-container m-1",style:{overflow:"auto"},"data-v-5bed888b":"",children:[h?Object(j.jsx)(l.a,{overlay:!0,fullScreen:!0,text:"Creating service...","data-v-5bed888b":""}):null,Object(j.jsx)(d.b,{drawerVisible:!1,pageTitle:"","data-v-5bed888b":""}),Object(j.jsxs)("form",{className:"publish-content-form",onSubmit:A,onReset:B,"data-v-5bed888b":"",children:[Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"1rem"},"data-v-5bed888b":"",children:Object(j.jsxs)("div",{"data-v-5bed888b":"",children:[Object(j.jsx)("h2",{"data-v-5bed888b":"",children:"Offer service"}),Object(j.jsx)("div",{className:"line","data-v-5bed888b":""})]})}),Object(j.jsxs)("div",{"data-v-5bed888b":"",children:[Object(j.jsx)("select",{name:"type",value:w,onChange:M,"data-v-5bed888b":"",children:Object(j.jsx)("option",{value:"torrentSeed","data-v-5bed888b":"",children:"Content Seeding"})}),Object(j.jsx)(u.a,{label:"Service Price",name:"price",type:"number",actionIcon:null,value:H,onChange:M,disabled:!1,inputAction:null,"data-v-5bed888b":""})]}),k?Object(j.jsx)("p",{className:"error-container","data-v-5bed888b":"",children:k}):null,Object(j.jsxs)("div",{className:"flex-center","data-v-5bed888b":"",children:[Object(j.jsx)("input",{type:"reset",value:"reset",className:"shock-form-button m-1","data-v-5bed888b":""}),Object(j.jsx)("input",{type:"submit",value:"submit",className:"shock-form-button-confirm m-1","data-v-5bed888b":""})]})]})]})}}}]);
//# sourceMappingURL=30.d9067bcd.chunk.js.map