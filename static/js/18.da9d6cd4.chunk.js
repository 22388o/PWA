(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[18],{590:function(e,t,a){"use strict";var c=a(1),n=a(84),s=a.n(n),i=(a(596),a(4)),d=function(e){var t=e.children,a=e.style;return Object(i.jsx)("div",{className:"content",style:a,"data-v-1a393af4":"",children:t})},l=(a(597),function(e){var t=e.title,a=e.toggleModal;return t?Object(i.jsxs)("div",{className:"head","data-v-15dacb63":"",children:[Object(i.jsx)("p",{className:"head-title","data-v-15dacb63":"",children:t}),Object(i.jsx)("div",{className:"head-close",onClick:a,"data-v-15dacb63":"",children:Object(i.jsx)("i",{className:"fas fa-times","data-v-15dacb63":""})})]}):null});a(598),t.a=function(e){var t=e.modalOpen,a=void 0!==t&&t,n=e.toggleModal,r=e.modalTitle,o=void 0===r?"":r,b=e.children,u=e.contentStyle,v=void 0===u?{}:u,j=e.disableBackdropClose,m=void 0!==j&&j,f=Object(c.useCallback)((function(){n()}),[n]),h=Object(c.useCallback)((function(){m||n()}),[m,n]);return Object(i.jsxs)("div",{className:s()({modal:!0,open:a}),"data-v-6c508060":"",children:[Object(i.jsx)("div",{className:"backdrop",onClick:h,"data-v-6c508060":""}),Object(i.jsxs)("div",{className:"container","data-v-6c508060":"",children:[Object(i.jsx)(l,{title:o,toggleModal:f,"data-v-6c508060":""}),Object(i.jsx)(d,{style:v,"data-v-6c508060":"",children:b})]})]})}},596:function(e,t,a){},597:function(e,t,a){},598:function(e,t,a){},601:function(e,t,a){"use strict";var c=a(1),n=a(84),s=a.n(n),i=(a(602),a(37)),d=a(8),l=a(87),r=a(592),o=a(20),b=a(4);t.a=function(e){var t=e.pageTitle,a=e.absolute,n=void 0!==a&&a,u=e.solid,v=void 0!==u&&u,j=e.enableBackButton,m=void 0!==j&&j,f=e.onHeight,h=void 0===f?d.b:f,O=Object(i.b)(),x=Object(c.useCallback)((function(){window.history.back()}),[]),p=Object(c.useCallback)((function(){O(Object(l.c)())}),[O]),N=Object(o.useSelector)((function(e){return e.node.publicKey})),g=Object(c.useCallback)((function(e){if(e)try{h(e.getBoundingClientRect().height)}catch(t){console.log("Error inside onHeight mechanism in MainNav:"),console.log(t)}}),[h]);return Object(b.jsxs)("div",{className:s()({"main-nav-container":!0,"main-nav-absolute":n,"main-nav-solid":v}),ref:g,"data-v-b51b5c5b":"",children:[m?Object(b.jsx)("div",{className:"main-nav-back",onClick:x,"data-v-b51b5c5b":"",children:Object(b.jsx)("i",{className:"icon icon-thin-back","data-v-b51b5c5b":""})}):Object(b.jsx)(r.a,{height:40,publicKey:N,"data-v-b51b5c5b":""}),Object(b.jsx)("p",{className:"main-nav-title unselectable","data-v-b51b5c5b":"",children:t}),Object(b.jsxs)("div",{className:"main-nav-menu-btn",onClick:p,"data-v-b51b5c5b":"",children:[Object(b.jsx)("div",{className:"main-nav-menu-dash","data-v-b51b5c5b":""}),Object(b.jsx)("div",{className:"main-nav-menu-dash","data-v-b51b5c5b":""}),Object(b.jsx)("div",{className:"main-nav-menu-dash","data-v-b51b5c5b":""})]})]})}},602:function(e,t,a){},605:function(e,t,a){"use strict";var c=a(60),n=a(4);t.a=function(){return Object(n.jsxs)("div",{className:"bottom-nav-container",children:[Object(n.jsx)(c.c,{className:"bottom-nav-btn",to:"/overview",activeClassName:"active-nav-btn",children:Object(n.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-wallet"})}),Object(n.jsx)(c.c,{className:"bottom-nav-btn",to:"/chat",activeClassName:"active-nav-btn",children:Object(n.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-chat"})}),Object(n.jsx)(c.c,{className:"bottom-nav-btn",to:"/profile",activeClassName:"active-nav-btn",children:Object(n.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-profile"})}),Object(n.jsx)(c.c,{className:"bottom-nav-btn",to:"/feed",activeClassName:"active-nav-btn",children:Object(n.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-feed"})})]})}},610:function(e,t,a){"use strict";var c=a(19),n=a(1),s=a(84),i=a.n(s),d=(a(611),a(4));t.a=function(e){var t=e.label,a=void 0===t?null:t,s=e.icon,l=void 0===s?null:s,r=e.iconURL,o=void 0===r?null:r,b=e.onClick,u=void 0===b?void 0:b,v=e.nestedMode,j=void 0!==v&&v,m=e.large,f=void 0!==m&&m,h=e.small,O=void 0!==h&&h,x=e.relative,p=void 0!==x&&x,N=e.children,g=void 0===N?null:N,k=e.style,C=void 0===k?{}:k,y=Object(n.useState)(!1),q=Object(c.a)(y,2),S=q[0],w=q[1],R=Object(n.useCallback)((function(){j&&w(!S)}),[S,j]),E=Object(n.useMemo)((function(){return o?Object(d.jsx)("img",{src:o,className:"add-btn-icon",alt:"","data-v-12801f58":""}):Object(d.jsx)("i",{className:"fas fa-".concat(null!==l&&void 0!==l?l:"plus"),"data-v-12801f58":""})}),[l,o]),A=Object(n.useMemo)((function(){return a?Object(d.jsx)("p",{className:"add-btn-label","data-v-12801f58":"",children:a}):null}),[a]);return Object(d.jsxs)("div",{className:i()({"add-btn-container":!0,"add-btn-round-container":!a,"add-btn-large":f,"add-btn-small":O}),"data-v-12801f58":"",children:[Object(d.jsxs)("div",{className:i()({"add-btn":!0,"add-btn-round":!a,"add-btn-extended":!!a,"add-btn-relative":p,"add-btn-open":S,"add-btn-nested":j}),onClick:null!==u&&void 0!==u?u:R,style:C,"data-v-12801f58":"",children:[E,A]}),g?Object(d.jsx)("div",{className:i()({"add-btn-options":!0,"add-btn-options-open":S}),"data-v-12801f58":"",children:g}):null]})}},611:function(e,t,a){},613:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var c=function(){return!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)}},617:function(e,t,a){"use strict";var c=a(636),n=a(613),s=(a(618),a(4)),i={wizard:{title:"SCAN A",target:"QR CODE",description:"Point your camera at a ShockWizard QR Code"},invoice:{title:"SCAN AN",target:"INVOICE",description:"Point your camera at an LND Invoice"}};t.a=function(e){var t=e.mode,a=void 0===t?"wizard":t,d=e.onScan,l=e.onError,r=e.onClose,o=i[a],b={};return Object(n.a)()||(b.facingMode={exact:"environment"}),Object(s.jsxs)("div",{className:"qr-code-scanner-container","data-v-5cb1e403":"",children:[Object(s.jsx)("div",{className:"qr-scanner-top-section","data-v-5cb1e403":"",children:Object(s.jsx)("i",{className:"fas fa-times",onClick:r,"data-v-5cb1e403":""})}),Object(s.jsx)(c.a,{constraints:{video:b},onScan:d,onError:l,"data-v-5cb1e403":""}),Object(s.jsx)("div",{className:"qr-scanner-target","data-v-5cb1e403":""}),Object(s.jsxs)("div",{className:"qr-scanner-bottom-section","data-v-5cb1e403":"",children:[Object(s.jsxs)("p",{className:"qr-scanner-bottom-title","data-v-5cb1e403":"",children:[o.title," ",Object(s.jsx)("span",{className:"qr-scanner-bottom-title-highlight","data-v-5cb1e403":"",children:o.target})]}),Object(s.jsx)("p",{className:"qr-scanner-bottom-description","data-v-5cb1e403":"",children:o.description}),Object(s.jsx)("div",{className:"qr-scanner-btn",onClick:r,"data-v-5cb1e403":"",children:"Cancel Scan"})]})]})}},618:function(e,t,a){},737:function(e,t,a){},738:function(e,t,a){},739:function(e,t,a){},892:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a.n(c),s=a(6),i=a(26),d=a(19),l=a(1),r=a(9),o=a(179),b=a(47),u=a(57),v=a(605),j=a(60),m=a(20),f=a(592),h={height:"55px",width:"55px"},O=a(186),x=(a(737),a(4)),p=function(e){var t=e.subtitle,a=void 0===t?"":t,c=e.time,n=e.publicKey,s=e.id,i=m.useSelector(m.selectUser(n));return Object(x.jsxs)(j.b,{to:"/chat/".concat(s),className:"container","data-v-89a9418b":"",children:[Object(x.jsxs)("div",{className:"author-container","data-v-89a9418b":"",children:[Object(x.jsx)("div",{className:"author-avatar",style:h,"data-v-89a9418b":"",children:Object(x.jsx)(f.a,{publicKey:n,height:55,"data-v-89a9418b":""})}),Object(x.jsxs)("div",{className:"author-details","data-v-89a9418b":"",children:[Object(x.jsx)("p",{className:"author-username","data-v-89a9418b":"",children:Object(O.b)(i.publicKey,i.displayName)}),Object(x.jsx)("p",{className:"author-text","data-v-89a9418b":"",children:a})]})]}),Object(x.jsx)("p",{className:"timestamp","data-v-89a9418b":"",children:c})]})},N=(a(738),function(e){var t=e.publicKey,a=void 0===t?"":t,c=e.time,n=e.sent,s=e.id,i=m.useSelector(m.selectUser(a));return Object(x.jsxs)(j.b,{to:"/chat/".concat(s),className:"request-container","data-v-4d6adf76":"",children:[Object(x.jsxs)("div",{className:"request-author-container","data-v-4d6adf76":"",children:[Object(x.jsx)("div",{className:"request-author-avatar",style:h,"data-v-4d6adf76":"",children:Object(x.jsx)(f.a,{publicKey:a,height:55,"data-v-4d6adf76":""})}),Object(x.jsxs)("div",{className:"request-author-details","data-v-4d6adf76":"",children:[Object(x.jsxs)("p",{className:"request-author-username","data-v-4d6adf76":"",children:[n?"Sent Request":"Received Request"," - ",i.displayName]}),Object(x.jsx)("p",{className:"request-author-text","data-v-4d6adf76":"",children:"Request pending acceptance..."})]})]}),Object(x.jsx)("p",{className:"request-timestamp","data-v-4d6adf76":"",children:c})]})}),g=a(601),k=a(610),C=a(177),y=a(80),q=(a(739),a(590)),S=a(617),w=a(8);t.default=function(){var e=w.l(),t=Object(l.useState)(!1),a=Object(d.a)(t,2),c=a[0],j=a[1],f=Object(l.useState)(""),h=Object(d.a)(f,2),O=h[0],R=h[1],E=Object(l.useState)(!1),A=Object(d.a)(E,2),K=A[0],M=A[1],P=m.useSelector(m.selectConvos),T=m.useSelector(m.selectAllMessages),D=w.a,Q=m.useSelector(m.selectReceivedRequests),B=Object(l.useState)(!1),I=Object(d.a)(B,2),U=I[0],z=I[1],H=m.useSelector(m.selectCurrentHandshakeAddress);Object(l.useEffect)((function(){var t=e(Object(b.p)());return function(){t.then((function(e){return e.off()}))}}),[e]),Object(l.useEffect)((function(){var t=e(Object(b.q)(H));return function(){t.then((function(e){return e.off()}))}}),[H,e]),Object(l.useEffect)((function(){var t=e(Object(b.o)());return function(){t.then((function(e){return e.off()}))}})),Object(l.useEffect)((function(){var t=P.map((function(t){return e(Object(u.b)(t.with))}));return t.push.apply(t,Object(i.a)(Q.map((function(t){return e(Object(u.b)(t.from))})))),function(){t.map((function(e){return e()}))}}),[P,e,Q]);var L=Object(l.useCallback)((function(){j(!c)}),[c]),W=Object(l.useCallback)(function(){var t=Object(s.a)(n.a.mark((function t(a){var c,s,i,d;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return");case 2:if(t.prev=2,c=a,a.startsWith("https://")&&(s=a.split("/"),c=s[s.length-1]),R(null),M(!0),null===(i=(n=c).startsWith("http")?n.split("/").slice(-1)[0]:n)||void 0===i?void 0:i.length){t.next=10;break}throw new y.a({field:"publicKey",message:"Please specify a public key"});case 10:if(/^[0-9A-Za-z\-_.+/]+[=]{0,3}/.test(i)){t.next=12;break}throw new y.a({field:"publicKey",message:"Invalid public key format specified"});case 12:return t.next=14,e(Object(b.l)(c));case 14:j(!1),t.next=22;break;case 17:t.prev=17,t.t0=t.catch(2),d=t.t0 instanceof y.a?t.t0.message:"An unknown error has occurred",console.error(t.t0),R(d);case 22:return t.prev=22,M(!1),t.finish(22);case 25:case"end":return t.stop()}var n}),t,null,[[2,17,22,25]])})));return function(e){return t.apply(this,arguments)}}(),[e]),J=Object(l.useCallback)(Object(s.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.readText();case 3:return t=e.sent,e.abrupt("return",W(t));case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[W]),G=Object(l.useCallback)((function(){z(!0)}),[z]),V=Object(l.useCallback)((function(){z(!1)}),[z]),Z=Object(l.useCallback)((function(e){console.log(e),R(e.message)}),[R]),_=Object(l.useCallback)((function(e){e&&e.text&&(W(e.text),z(!1),console.log(e.text))}),[W,z]);return U?Object(x.jsx)("div",{"data-v-b965f3d7":"",children:Object(x.jsx)(S.a,{mode:"invoice",onClose:V,onError:Z,onScan:_,"data-v-b965f3d7":""})}):(console.log(O),Object(x.jsxs)("div",{className:"page-container messages-page","data-v-b965f3d7":"",children:[Object(x.jsx)(g.a,{solid:!0,pageTitle:"MESSAGES","data-v-b965f3d7":""}),Object(x.jsxs)("div",{className:"messages-container","data-v-b965f3d7":"",children:[Object(x.jsxs)("div",{className:"message-list-container no-scrollbar","data-v-b965f3d7":"",children:[D.length>0?Object(x.jsx)("p",{className:"messages-section-title","data-v-b965f3d7":"",children:"Sent Requests"}):null,D.map((function(e){return Object(x.jsx)(N,{publicKey:e.pk,sent:!0,time:void 0,id:e.id,"data-v-b965f3d7":""},e.id)})),Q.length>0?Object(x.jsx)("p",{className:"messages-section-title","data-v-b965f3d7":"",children:"Received Requests"}):null,Q.map((function(e){return Object(x.jsx)(N,{publicKey:e.from,sent:!1,time:void 0,id:e.id,"data-v-b965f3d7":""},e.id)})),P.length>0?Object(x.jsx)("p",{className:"messages-section-title","data-v-b965f3d7":"",children:"Messages"}):null,P.map((function(e){var t,a=Object.values(null!==(t=T[e.id])&&void 0!==t?t:[]),c=a[a.length-1];return Object(x.jsx)(p,{publicKey:e.with,subtitle:0===a.length||(null===c||void 0===c?void 0:c.body)===r.a?"No messages yet":"received"===(null===c||void 0===c?void 0:c.state)?"> "+c.body:c.body,time:o.DateTime.fromMillis((null===c||void 0===c?void 0:c.timestamp)||Date.now()).toRelative(),id:e.id,"data-v-b965f3d7":""},e.id)}))]}),Object(x.jsx)(k.a,{onClick:L,label:"REQUEST","data-v-b965f3d7":""}),Object(x.jsxs)(q.a,{modalTitle:"SEND REQUEST",toggleModal:L,modalOpen:c,"data-v-b965f3d7":"",children:[K?Object(x.jsx)(C.a,{text:"Sending Request...",overlay:!0,style:{borderRadius:"0 0 15px 15px"},"data-v-b965f3d7":""}):null,O?Object(x.jsx)("div",{className:"send-request-error","data-v-b965f3d7":"",children:O}):null,Object(x.jsxs)("div",{className:"send-request-cards","data-v-b965f3d7":"",children:[Object(x.jsxs)("div",{className:"send-request-card",onClick:G,"data-v-b965f3d7":"",children:[Object(x.jsx)("i",{className:"send-request-card-icon fas fa-qrcode","data-v-b965f3d7":""}),Object(x.jsx)("p",{className:"send-request-card-title","data-v-b965f3d7":"",children:"SCAN QR"}),Object(x.jsx)("p",{className:"send-request-card-desc","data-v-b965f3d7":"",children:"Scan another users QR to send a message request."})]}),Object(x.jsxs)("div",{className:"send-request-card",onClick:J,"data-v-b965f3d7":"",children:[Object(x.jsx)("i",{className:"send-request-card-icon fas fa-clipboard","data-v-b965f3d7":""}),Object(x.jsx)("p",{className:"send-request-card-title","data-v-b965f3d7":"",children:"PASTE CLIPBOARD"}),Object(x.jsx)("p",{className:"send-request-card-desc","data-v-b965f3d7":"",children:"Paste another users Public Key to send a message request."})]})]})]})]}),Object(x.jsx)(v.a,{"data-v-b965f3d7":""})]}))}}}]);
//# sourceMappingURL=18.da9d6cd4.chunk.js.map