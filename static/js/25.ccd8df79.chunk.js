(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[25],{487:function(e,t,n){"use strict";var a=n(26),c=n(73),r=n.n(c),s=(n(496),n(7));t.a=function(e){var t=e.label,n=e.name,c=e.onChange,i=e.inputAction,l=e.actionIcon,o=e.value,u=e.inputMode,d=void 0===u?"text":u,b=e.type,j=void 0===b?"text":b,p=e.element,v=void 0===p?"input":p,m=e.small,O=void 0!==m&&m,f=e.disabled;return Object(s.jsxs)("div",{className:r()({group:!0,"group-disabled":f,"group-small":O}),children:[t?Object(s.jsx)("p",{className:"group-label",children:t}):null,Object(s.jsxs)("div",{className:r()({"group-input-container":!0,"group-input-textarea-container":"textarea"===v}),children:["textarea"===v?Object(s.jsx)("textarea",{className:"group-input group-input-textarea",name:n,onChange:c,inputMode:d,value:o,disabled:f}):Object(s.jsx)("input",{className:"group-input",type:j,name:n,onChange:c,inputMode:d,value:o,disabled:f}),i&&l?Object(s.jsx)("div",{className:"group-input-action",onClick:i,children:Object(s.jsx)("i",{className:r()(Object(a.a)({"group-input-action-icon":!0,fas:!0},l,!0)),onClick:i})}):null]})]})}},488:function(e,t,n){"use strict";var a=n(3),c=n(73),r=n.n(c),s=(n(489),n(7));t.a=function(e){var t=e.pageTitle,n=e.drawerVisible,c=Object(a.useCallback)((function(){window.history.back()}),[]);return Object(s.jsxs)("div",{className:"dialog-nav-container",children:[Object(s.jsx)("div",{className:"dialog-nav-back",onClick:c,children:Object(s.jsx)("i",{className:"icon icon-thin-back"})}),Object(s.jsx)("p",{className:"dialog-nav-title",children:t}),Object(s.jsxs)("div",{className:r()({"dialog-nav-menu-btn":!0,"dialog-nav-hidden":!n}),children:[Object(s.jsx)("div",{className:"dialog-nav-menu-dash"}),Object(s.jsx)("div",{className:"dialog-nav-menu-dash"}),Object(s.jsx)("div",{className:"dialog-nav-menu-dash"})]})]})}},489:function(e,t,n){},496:function(e,t,n){},749:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(5),s=n(17),i=n(3),l=n(37),o=n(488),u=n(150),d=n(487),b=n(105),j=n(22),p=n(7);t.default=function(){var e=Object(l.c)(),t=Object(j.g)(),n=Object(l.d)((function(e){return e.content.seedInfo})),a=n.seedUrl,v=n.seedToken,m=Object(l.d)((function(e){return e.node.publicKey})),O=Object(l.d)((function(e){return e.userProfiles})),f=Object(i.useState)(!1),h=Object(s.a)(f,2),x=h[0],g=h[1],k=Object(i.useState)(null),N=Object(s.a)(k,2),S=N[0],y=N[1],C=Object(i.useState)("torrentSeed"),w=Object(s.a)(C,2),T=w[0],P=w[1],D=Object(i.useState)(0),I=Object(s.a)(D,2),M=I[0],A=I[1],J=Object(i.useCallback)((function(e){var t=e.target,n=t.value,a=t.name;switch(e.preventDefault(),a){case"type":return void P(n);case"price":return void A(n);default:return}}),[P,A]),U=Object(i.useCallback)(function(){var n=Object(r.a)(c.a.mark((function n(r){var s,i,l,o;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),a&&v){n.next=4;break}return y("seed url and token are not set in config"),n.abrupt("return");case 4:if(!(M<=0)){n.next=7;break}return y("service price must be greater than 0"),n.abrupt("return");case 7:return n.prev=7,g(!0),s="",O[m]&&O[m].SeedServiceProvided&&(s=O[m].SeedServiceProvided),i={serviceType:T,serviceTitle:"Content Seeding",serviceDescription:"",serviceCondition:"",servicePrice:M},l={serviceSeedUrl:a,serviceSeedToken:v},n.next=15,Object(b.c)(i,l,s)(e);case 15:o=n.sent,console.log(o),g(!1),t.push("/profile"),n.next=25;break;case 21:n.prev=21,n.t0=n.catch(7),g(!1),y(n.t0.message||n.t0);case 25:case"end":return n.stop()}}),n,null,[[7,21]])})));return function(e){return n.apply(this,arguments)}}(),[T,M,t]),V=Object(i.useCallback)(function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),y(null),P("torrentSeed"),A(0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[y,P,A]);return Object(p.jsxs)("div",{className:"publish-content-form-container m-1",style:{overflow:"auto"},children:[x?Object(p.jsx)(u.a,{overlay:!0,fullScreen:!0,text:"Creating service..."}):null,Object(p.jsx)(o.a,{drawerVisible:!1,pageTitle:""}),Object(p.jsxs)("form",{className:"publish-content-form",onSubmit:U,onReset:V,children:[Object(p.jsx)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"1rem"},children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Offer service"}),Object(p.jsx)("div",{className:"line"})]})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("select",{name:"type",value:T,onChange:J,children:Object(p.jsx)("option",{value:"torrentSeed",children:"Content Seeding"})}),Object(p.jsx)(d.a,{label:"Service Price",name:"price",type:"number",actionIcon:null,value:M,onChange:J,disabled:!1,inputAction:null})]}),S?Object(p.jsx)("p",{className:"error-container",children:S}):null,Object(p.jsxs)("div",{className:"flex-center",children:[Object(p.jsx)("input",{type:"reset",value:"reset",className:"shock-form-button m-1"}),Object(p.jsx)("input",{type:"submit",value:"submit",className:"shock-form-button-confirm m-1"})]})]})]})}}}]);
//# sourceMappingURL=25.ccd8df79.chunk.js.map