(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[29],{567:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(3),c=a(81),i=a.n(c),r=a(19),s=(a(568),a(4)),o=73,d={minHeight:o};t.b=function(e){var t=e.pageTitle,a=e.drawerVisible,c=void 0!==a&&a,o=e.onHeight,l=void 0===o?r.a:o,b=Object(n.useCallback)((function(){window.history.back()}),[]),u=Object(n.useCallback)((function(e){if(e)try{l(e.getBoundingClientRect().height)}catch(t){console.log("Error inside onHeight mechanism in DialogNav:"),console.log(t)}}),[l]);return Object(s.jsxs)("div",{className:"dialog-nav-container",ref:u,style:d,"data-v-44444778":"",children:[Object(s.jsx)("div",{className:"dialog-nav-back",onClick:b,"data-v-44444778":"",children:Object(s.jsx)("i",{className:"icon icon-thin-back","data-v-44444778":""})}),Object(s.jsx)("p",{className:"dialog-nav-title","data-v-44444778":"",children:t}),Object(s.jsxs)("div",{className:i()({"dialog-nav-menu-btn":!0,"dialog-nav-hidden":!c}),"data-v-44444778":"",children:[Object(s.jsx)("div",{className:"dialog-nav-menu-dash","data-v-44444778":""}),Object(s.jsx)("div",{className:"dialog-nav-menu-dash","data-v-44444778":""}),Object(s.jsx)("div",{className:"dialog-nav-menu-dash","data-v-44444778":""})]})]})}},568:function(e,t,a){},569:function(e,t,a){"use strict";var n=a(26),c=a(81),i=a.n(c),r=(a(577),a(4));t.a=function(e){var t=e.label,a=e.name,c=e.onChange,s=e.inputAction,o=e.actionIcon,d=e.value,l=e.inputMode,b=void 0===l?"text":l,u=e.type,v=void 0===u?"text":u,j=e.element,p=void 0===j?"input":j,m=e.small,h=void 0!==m&&m,O=e.disabled;return Object(r.jsxs)("div",{className:i()({group:!0,"group-disabled":O,"group-small":h}),"data-v-b091aa3b":"",children:[t?Object(r.jsx)("p",{className:"group-label","data-v-b091aa3b":"",children:t}):null,Object(r.jsxs)("div",{className:i()({"group-input-container":!0,"group-input-textarea-container":"textarea"===p}),"data-v-b091aa3b":"",children:["textarea"===p?Object(r.jsx)("textarea",{className:"group-input group-input-textarea",name:a,onChange:c,inputMode:b,value:d,disabled:O,"data-v-b091aa3b":""}):Object(r.jsx)("input",{className:"group-input",type:v,name:a,onChange:c,inputMode:b,value:d,disabled:O,"data-v-b091aa3b":""}),s&&o?Object(r.jsx)("div",{className:"group-input-action",onClick:s,"data-v-b091aa3b":"",children:Object(r.jsx)("i",{className:i()(Object(n.a)({"group-input-action-icon":!0,fas:!0},o,!0)),onClick:s,"data-v-b091aa3b":""})}):null]})]})}},577:function(e,t,a){},816:function(e,t,a){},854:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),i=a(5),r=a(12),s=a(3),o=a(44),d=a(567),l=a(172),b=a(569),u=a(113),v=a(25),j=(a(816),a(4));t.default=function(){var e=Object(o.b)(),t=Object(v.g)(),a=Object(o.c)((function(e){return e.content.seedInfo})),n=a.seedUrl,p=a.seedToken,m=Object(o.c)((function(e){return e.node.publicKey})),h=Object(o.c)((function(e){return e.userProfiles})),O=Object(s.useState)(!1),f=Object(r.a)(O,2),x=f[0],g=f[1],k=Object(s.useState)(null),N=Object(r.a)(k,2),y=N[0],C=N[1],S=Object(s.useState)("torrentSeed"),w=Object(r.a)(S,2),T=w[0],D=w[1],P=Object(s.useState)(0),H=Object(r.a)(P,2),I=H[0],M=H[1],A=Object(s.useCallback)((function(e){var t=e.target,a=t.value,n=t.name;switch(e.preventDefault(),n){case"type":return void D(a);case"price":return void M(a);default:return}}),[D,M]),B=Object(s.useCallback)(function(){var a=Object(i.a)(c.a.mark((function a(i){var r,s,o,d;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(i.preventDefault(),n&&p){a.next=4;break}return C("seed url and token are not set in config"),a.abrupt("return");case 4:if(!(I<=0)){a.next=7;break}return C("service price must be greater than 0"),a.abrupt("return");case 7:return a.prev=7,g(!0),r="",h[m]&&h[m].SeedServiceProvided&&(r=h[m].SeedServiceProvided),s={serviceType:T,serviceTitle:"Content Seeding",serviceDescription:"",serviceCondition:"",servicePrice:I},o={serviceSeedUrl:n,serviceSeedToken:p},a.next=15,Object(u.c)(s,o,r)(e);case 15:d=a.sent,console.log(d),g(!1),t.push("/profile"),a.next=25;break;case 21:a.prev=21,a.t0=a.catch(7),g(!1),C(a.t0.message||a.t0);case 25:case"end":return a.stop()}}),a,null,[[7,21]])})));return function(e){return a.apply(this,arguments)}}(),[T,I,t]),J=Object(s.useCallback)(function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),C(null),D("torrentSeed"),M(0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[C,D,M]);return Object(j.jsxs)("div",{className:"publish-content-form-container m-1",style:{overflow:"auto"},"data-v-5bed888b":"",children:[x?Object(j.jsx)(l.a,{overlay:!0,fullScreen:!0,text:"Creating service...","data-v-5bed888b":""}):null,Object(j.jsx)(d.b,{drawerVisible:!1,pageTitle:"","data-v-5bed888b":""}),Object(j.jsxs)("form",{className:"publish-content-form",onSubmit:B,onReset:J,"data-v-5bed888b":"",children:[Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"1rem"},"data-v-5bed888b":"",children:Object(j.jsxs)("div",{"data-v-5bed888b":"",children:[Object(j.jsx)("h2",{"data-v-5bed888b":"",children:"Offer service"}),Object(j.jsx)("div",{className:"line","data-v-5bed888b":""})]})}),Object(j.jsxs)("div",{"data-v-5bed888b":"",children:[Object(j.jsx)("select",{name:"type",value:T,onChange:A,"data-v-5bed888b":"",children:Object(j.jsx)("option",{value:"torrentSeed","data-v-5bed888b":"",children:"Content Seeding"})}),Object(j.jsx)(b.a,{label:"Service Price",name:"price",type:"number",actionIcon:null,value:I,onChange:A,disabled:!1,inputAction:null,"data-v-5bed888b":""})]}),y?Object(j.jsx)("p",{className:"error-container","data-v-5bed888b":"",children:y}):null,Object(j.jsxs)("div",{className:"flex-center","data-v-5bed888b":"",children:[Object(j.jsx)("input",{type:"reset",value:"reset",className:"shock-form-button m-1","data-v-5bed888b":""}),Object(j.jsx)("input",{type:"submit",value:"submit",className:"shock-form-button-confirm m-1","data-v-5bed888b":""})]})]})]})}}}]);
//# sourceMappingURL=29.f0d7f00e.chunk.js.map