(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[37],{616:function(a,e,c){"use strict";var t=c(1),n=c(88),i=c.n(n),s=(c(617),c(38)),d=c(7),b=c(91),l=c(609),o=c(19),r=c(4);e.a=function(a){var e=a.pageTitle,c=a.absolute,n=void 0!==c&&c,u=a.solid,j=void 0!==u&&u,v=a.enableBackButton,h=void 0!==v&&v,O=a.onHeight,f=void 0===O?d.b:O,p=Object(s.b)(),m=Object(t.useCallback)((function(){window.history.back()}),[]),k=Object(t.useCallback)((function(){p(Object(b.c)())}),[p]),x=Object(o.useSelector)((function(a){return a.node.publicKey})),g=Object(t.useCallback)((function(a){if(a)try{f(a.getBoundingClientRect().height)}catch(e){console.log("Error inside onHeight mechanism in MainNav:"),console.log(e)}}),[f]);return Object(r.jsxs)("div",{className:i()({"main-nav-container":!0,"main-nav-absolute":n,"main-nav-solid":j}),ref:g,"data-v-e377fb6b":"",children:[h?Object(r.jsx)("div",{className:"main-nav-back",onClick:m,"data-v-e377fb6b":"",children:Object(r.jsx)("i",{className:"icon icon-thin-back","data-v-e377fb6b":""})}):Object(r.jsx)(l.a,{height:40,publicKey:x,"data-v-e377fb6b":""}),Object(r.jsx)("p",{className:"main-nav-title unselectable","data-v-e377fb6b":"",children:e}),Object(r.jsxs)("div",{className:"main-nav-menu-btn",onClick:k,"data-v-e377fb6b":"",children:[Object(r.jsx)("div",{className:"main-nav-menu-dash","data-v-e377fb6b":""}),Object(r.jsx)("div",{className:"main-nav-menu-dash","data-v-e377fb6b":""}),Object(r.jsx)("div",{className:"main-nav-menu-dash","data-v-e377fb6b":""})]})]})}},617:function(a,e,c){},800:function(a,e,c){},905:function(a,e,c){"use strict";c.r(e);var t=c(13),n=c(1),i=c(616),s=(c(800),c(29)),d=c(19),b=c(4);e.default=function(){var a=Object(n.useState)(""),e=Object(t.a)(a,2),c=e[0],l=e[1],o=Object(n.useState)(null),r=Object(t.a)(o,2),u=r[0],j=r[1],v=Object(n.useState)(!1),h=Object(t.a)(v,2),O=h[0],f=h[1],p=d.useSelector((function(a){return a.wallet.lightningInfo})).identity_pubkey,m=d.useSelector((function(a){return a.node.publicKey}));Object(n.useEffect)((function(){s.a.get("/api/gun/user/once/seedBackup",{headers:{"public-key-for-decryption":m}}).then((function(a){var e=a.data.data;l(e)}))}),[m]),Object(n.useEffect)((function(){s.a.get("/api/gun/user/once/channelsBackup",{headers:{"public-key-for-decryption":m}}).then((function(a){var e=a.data.data;j(e)}))}),[m]);var k=Object(n.useCallback)((function(){navigator.clipboard.writeText(JSON.stringify(u)),f(!0)}),[u]);return Object(b.jsxs)("div",{className:"moonPayContainer","data-v-2c49a7d5":"",children:[Object(b.jsx)(i.a,{pageTitle:"BACKUPS",enableBackButton:!0,"data-v-2c49a7d5":""}),Object(b.jsxs)("div",{className:"backupsContainer","data-v-2c49a7d5":"",children:[Object(b.jsxs)("div",{className:"innerContainer","data-v-2c49a7d5":"",children:[Object(b.jsx)("h1",{"data-v-2c49a7d5":"",children:"Lightning Public Key"}),Object(b.jsx)("h3",{"data-v-2c49a7d5":"",children:p})]}),Object(b.jsxs)("div",{className:"innerContainer","data-v-2c49a7d5":"",children:[Object(b.jsx)("h1",{"data-v-2c49a7d5":"",children:"Seed Backup"}),c&&Object(b.jsx)("h3",{"data-v-2c49a7d5":"",children:c}),!c&&Object(b.jsx)("h3",{"data-v-2c49a7d5":"",children:"backup not available on this node"})]}),Object(b.jsxs)("div",{className:"innerContainer","data-v-2c49a7d5":"",children:[Object(b.jsx)("h2",{"data-v-2c49a7d5":"",children:"Channels Backups"}),u&&Object(b.jsxs)("div",{className:"copyContainer","data-v-2c49a7d5":"",children:[Object(b.jsx)("p",{"data-v-2c49a7d5":"",children:"copy channel backups: "}),O&&Object(b.jsx)("i",{className:"fas fa-check",onClick:k,"data-v-2c49a7d5":""}),!O&&Object(b.jsx)("i",{className:"fas fa-copy",onClick:k,"data-v-2c49a7d5":""})]}),!u&&Object(b.jsx)("h3",{"data-v-2c49a7d5":"",children:"backup not available on this node"})]})]})]})}}}]);
//# sourceMappingURL=37.01950187.chunk.js.map