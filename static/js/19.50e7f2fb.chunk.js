(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[19],{434:function(e,a,t){"use strict";var c=t(3),s=t(72),n=t.n(s),i=(t(436),t(7)),d=function(e){var a=e.children,t=e.style;return Object(i.jsx)("div",{className:"content",style:t,"data-v-ecebadd7":"",children:a})},l=(t(437),function(e){var a=e.title,t=e.toggleModal;return a?Object(i.jsxs)("div",{className:"head","data-v-89c96401":"",children:[Object(i.jsx)("p",{className:"head-title","data-v-89c96401":"",children:a}),Object(i.jsx)("div",{className:"head-close",onClick:t,"data-v-89c96401":"",children:Object(i.jsx)("i",{className:"fas fa-times","data-v-89c96401":""})})]}):null});t(438),a.a=function(e){var a=e.modalOpen,t=void 0!==a&&a,s=e.toggleModal,r=e.modalTitle,o=void 0===r?"":r,b=e.children,u=e.contentStyle,v=void 0===u?{}:u,j=Object(c.useCallback)((function(){s()}),[s]);return Object(i.jsxs)("div",{className:n()({modal:!0,open:t}),"data-v-7e395622":"",children:[Object(i.jsx)("div",{className:"backdrop",onClick:j,"data-v-7e395622":""}),Object(i.jsxs)("div",{className:"container","data-v-7e395622":"",children:[Object(i.jsx)(l,{title:o,toggleModal:j,"data-v-7e395622":""}),Object(i.jsx)(d,{style:v,"data-v-7e395622":"",children:b})]})]})}},436:function(e,a,t){},437:function(e,a,t){},438:function(e,a,t){},446:function(e,a,t){"use strict";var c=t(52),s=t(7);a.a=function(){return Object(s.jsxs)("div",{className:"bottom-nav-container",children:[Object(s.jsx)(c.c,{className:"bottom-nav-btn",to:"/overview",activeClassName:"active-nav-btn",children:Object(s.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-wallet"})}),Object(s.jsx)(c.c,{className:"bottom-nav-btn",to:"/chat",activeClassName:"active-nav-btn",children:Object(s.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-chat"})}),Object(s.jsx)(c.c,{className:"bottom-nav-btn",to:"/profile",activeClassName:"active-nav-btn",children:Object(s.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-profile"})}),Object(s.jsx)(c.c,{className:"bottom-nav-btn",to:"/feed",activeClassName:"active-nav-btn",children:Object(s.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-feed"})})]})}},447:function(e,a,t){"use strict";var c=t(3),s=t(72),n=t.n(s),i=(t(448),t(40)),d=t(88),l=t(76),r=t(445),o=t(18),b=t(7);a.a=function(e){var a=e.pageTitle,t=e.absolute,s=void 0!==t&&t,u=e.solid,v=void 0!==u&&u,j=e.enableBackButton,m=void 0!==j&&j,h=e.onHeight,O=void 0===h?d.a:h,p=Object(i.b)(),x=Object(c.useCallback)((function(){window.history.back()}),[]),f=Object(c.useCallback)((function(){p(Object(l.c)())}),[p]),N=Object(o.useSelector)((function(e){return e.node.publicKey})),g=Object(c.useCallback)((function(e){if(e)try{O(e.getBoundingClientRect().height)}catch(a){console.log("Error inside onHeight mechanism in MainNav:"),console.log(a)}}),[O]);return Object(b.jsxs)("div",{className:n()({"main-nav-container":!0,"main-nav-absolute":s,"main-nav-solid":v}),ref:g,"data-v-1d355764":"",children:[m?Object(b.jsx)("div",{className:"main-nav-back",onClick:x,"data-v-1d355764":"",children:Object(b.jsx)("i",{className:"icon icon-thin-back","data-v-1d355764":""})}):Object(b.jsx)(r.a,{height:40,publicKey:N,"data-v-1d355764":""}),Object(b.jsx)("p",{className:"main-nav-title unselectable","data-v-1d355764":"",children:a}),Object(b.jsxs)("div",{className:"main-nav-menu-btn",onClick:f,"data-v-1d355764":"",children:[Object(b.jsx)("div",{className:"main-nav-menu-dash","data-v-1d355764":""}),Object(b.jsx)("div",{className:"main-nav-menu-dash","data-v-1d355764":""}),Object(b.jsx)("div",{className:"main-nav-menu-dash","data-v-1d355764":""})]})]})}},448:function(e,a,t){},452:function(e,a,t){"use strict";var c=t(16),s=t(3),n=t(72),i=t.n(n),d=(t(453),t(7));a.a=function(e){var a=e.label,t=void 0===a?null:a,n=e.icon,l=void 0===n?null:n,r=e.iconURL,o=void 0===r?null:r,b=e.onClick,u=void 0===b?void 0:b,v=e.nestedMode,j=void 0!==v&&v,m=e.large,h=void 0!==m&&m,O=e.small,p=void 0!==O&&O,x=e.relative,f=void 0!==x&&x,N=e.children,g=void 0===N?null:N,k=e.style,y=void 0===k?{}:k,q=Object(s.useState)(!1),C=Object(c.a)(q,2),S=C[0],w=C[1],R=Object(s.useCallback)((function(){j&&w(!S)}),[S,j]),K=Object(s.useMemo)((function(){return o?Object(d.jsx)("img",{src:o,className:"add-btn-icon",alt:"","data-v-d5ea2a8d":""}):Object(d.jsx)("i",{className:"fas fa-".concat(null!==l&&void 0!==l?l:"plus"),"data-v-d5ea2a8d":""})}),[l,o]),E=Object(s.useMemo)((function(){return t?Object(d.jsx)("p",{className:"add-btn-label","data-v-d5ea2a8d":"",children:t}):null}),[t]);return Object(d.jsxs)("div",{className:i()({"add-btn-container":!0,"add-btn-round-container":!t,"add-btn-large":h,"add-btn-small":p}),"data-v-d5ea2a8d":"",children:[Object(d.jsxs)("div",{className:i()({"add-btn":!0,"add-btn-round":!t,"add-btn-extended":!!t,"add-btn-relative":f,"add-btn-open":S,"add-btn-nested":j}),onClick:null!==u&&void 0!==u?u:R,style:y,"data-v-d5ea2a8d":"",children:[K,E]}),g?Object(d.jsx)("div",{className:i()({"add-btn-options":!0,"add-btn-options-open":S}),"data-v-d5ea2a8d":"",children:g}):null]})}},453:function(e,a,t){},570:function(e,a,t){},571:function(e,a,t){},572:function(e,a,t){},711:function(e,a,t){"use strict";t.r(a);var c=t(21),s=t(2),n=t.n(s),i=t(6),d=t(16),l=t(3),r=t(40),o=t(108),b=t(24),u=t(48),v=t(446),j=t(52),m=t(445),h={height:"55px",width:"55px"},O=t(18),p=(t(570),t(20)),x=t(7),f=function(e){var a=e.subtitle,t=void 0===a?"":a,c=e.time,s=e.publicKey,n=e.chatLoaded,i=void 0!==n&&n,d=Object(r.b)(),o=O.useSelector((function(e){return e.node.publicKey})),u=O.useSelector(O.selectUser(s)),v=Object(l.useCallback)((function(){var e=d(Object(b.h)(o,s));return Object(p.f)(e)}),[d,o,s]);return Object(l.useEffect)((function(){if(i)return v()}),[v,s,i]),Object(x.jsxs)(j.b,{to:"/chat/".concat(s),className:"container","data-v-949577d8":"",children:[Object(x.jsxs)("div",{className:"author-container","data-v-949577d8":"",children:[Object(x.jsx)("div",{className:"author-avatar",style:h,"data-v-949577d8":"",children:Object(x.jsx)(m.a,{publicKey:s,height:55,"data-v-949577d8":""})}),Object(x.jsxs)("div",{className:"author-details","data-v-949577d8":"",children:[Object(x.jsx)("p",{className:"author-username","data-v-949577d8":"",children:u.displayName}),Object(x.jsx)("p",{className:"author-text","data-v-949577d8":"",children:t})]})]}),Object(x.jsx)("p",{className:"timestamp","data-v-949577d8":"",children:c})]})},N=(t(571),function(e){var a=e.publicKey,t=void 0===a?"":a,c=e.time,s=e.sent,n=O.useSelector(O.selectUser(t));return Object(x.jsxs)(j.b,{to:"/chat/".concat(t),className:"request-container","data-v-a648525e":"",children:[Object(x.jsxs)("div",{className:"request-author-container","data-v-a648525e":"",children:[Object(x.jsx)("div",{className:"request-author-avatar",style:h,"data-v-a648525e":"",children:Object(x.jsx)(m.a,{publicKey:t,height:55,"data-v-a648525e":""})}),Object(x.jsxs)("div",{className:"request-author-details","data-v-a648525e":"",children:[Object(x.jsxs)("p",{className:"request-author-username","data-v-a648525e":"",children:[s?"Sent Request":"Received Request"," - ",n.displayName]}),Object(x.jsx)("p",{className:"request-author-text","data-v-a648525e":"",children:"Request pending acceptance..."})]})]}),Object(x.jsx)("p",{className:"request-timestamp","data-v-a648525e":"",children:c})]})}),g=t(447),k=t(452),y=t(145),q=t(66),C=(t(572),t(434));a.default=function(){var e=Object(r.b)(),a=Object(l.useState)(!1),t=Object(d.a)(a,2),s=t[0],j=t[1],m=Object(l.useState)(""),h=Object(d.a)(m,2),p=h[0],S=h[1],w=Object(l.useState)(!1),R=Object(d.a)(w,2),K=R[0],E=R[1],M=Object(l.useState)(!1),T=Object(d.a)(M,2),A=T[0],U=T[1],P=O.useSelector((function(e){return e.chat.contacts})),B=O.useSelector((function(e){return e.chat.messages})),D=O.useSelector((function(e){return e.chat.sentRequests})),L=O.useSelector((function(e){return e.chat.receivedRequests})),Q=Object(l.useCallback)(Object(i.a)(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Object(b.c)());case 2:U(!0);case 3:case"end":return a.stop()}}),a)}))),[e]);Object(l.useEffect)((function(){Q()}),[Q]),Object(l.useEffect)((function(){var a=[].concat(Object(c.a)(P),Object(c.a)(D),Object(c.a)(L)).map((function(a){return e(Object(u.b)(a.pk))}));return function(){a.map((function(e){return e()}))}}),[P,D,L,e]);var H=Object(l.useCallback)((function(){j(!s)}),[s]),I=Object(l.useCallback)(function(){var a=Object(i.a)(n.a.mark((function a(t){var c,s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,S(null),E(!0),null===(c=(n=t).startsWith("http")?n.split("/").slice(-1)[0]:n)||void 0===c?void 0:c.length){a.next=6;break}throw new q.a({field:"publicKey",message:"Please specify a public key"});case 6:if(/^[0-9A-Za-z\-_.+/]+[=]{0,3}/.test(c)){a.next=8;break}throw new q.a({field:"publicKey",message:"Invalid public key format specified"});case 8:return a.next=10,e(Object(b.f)(t));case 10:j(!1),a.next=18;break;case 13:a.prev=13,a.t0=a.catch(0),s=a.t0 instanceof q.a?a.t0.message:"An unknown error has occurred",console.error(a.t0),S(s);case 18:return a.prev=18,E(!1),a.finish(18);case 21:case"end":return a.stop()}var n}),a,null,[[0,13,18,21]])})));return function(e){return a.apply(this,arguments)}}(),[e]),J=Object(l.useCallback)(Object(i.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.readText();case 3:return a=e.sent,e.abrupt("return",I(a));case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[I]);return Object(x.jsxs)("div",{className:"page-container messages-page","data-v-8b899a6b":"",children:[Object(x.jsx)(g.a,{solid:!0,pageTitle:"MESSAGES","data-v-8b899a6b":""}),Object(x.jsxs)("div",{className:"messages-container","data-v-8b899a6b":"",children:[Object(x.jsxs)("div",{className:"message-list-container","data-v-8b899a6b":"",children:[D.length>0?Object(x.jsx)("p",{className:"messages-section-title","data-v-8b899a6b":"",children:"Sent Requests"}):null,D.map((function(e){return Object(x.jsx)(N,{publicKey:e.pk,sent:!0,time:void 0,"data-v-8b899a6b":""},e.pk)})),L.length>0?Object(x.jsx)("p",{className:"messages-section-title","data-v-8b899a6b":"",children:"Received Requests"}):null,L.map((function(e){return Object(x.jsx)(N,{publicKey:e.pk,sent:!1,time:void 0,"data-v-8b899a6b":""},e.pk)})),P.length>0?Object(x.jsx)("p",{className:"messages-section-title","data-v-8b899a6b":"",children:"Messages"}):null,P.map((function(e){var a,t,c=null!==(t=(null!==(a=B[e.pk])&&void 0!==a?a:[])[0])&&void 0!==t?t:{body:"Unable to preview last message...",timestamp:Date.now()};return Object(x.jsx)(f,{publicKey:e.pk,subtitle:c.body,time:o.DateTime.fromMillis(c.timestamp).toRelative(),chatLoaded:A,"data-v-8b899a6b":""},e.pk)}))]}),Object(x.jsx)(k.a,{onClick:H,label:"REQUEST","data-v-8b899a6b":""}),Object(x.jsxs)(C.a,{modalTitle:"SEND REQUEST",toggleModal:H,modalOpen:s,"data-v-8b899a6b":"",children:[K?Object(x.jsx)(y.a,{text:"Sending Request...",overlay:!0,style:{borderRadius:"0 0 15px 15px"},"data-v-8b899a6b":""}):null,p?Object(x.jsx)("div",{className:"send-request-error","data-v-8b899a6b":"",children:p}):null,Object(x.jsxs)("div",{className:"send-request-cards","data-v-8b899a6b":"",children:[Object(x.jsxs)("div",{className:"send-request-card",onClick:I,"data-v-8b899a6b":"",children:[Object(x.jsx)("i",{className:"send-request-card-icon fas fa-qrcode","data-v-8b899a6b":""}),Object(x.jsx)("p",{className:"send-request-card-title","data-v-8b899a6b":"",children:"SCAN QR"}),Object(x.jsx)("p",{className:"send-request-card-desc","data-v-8b899a6b":"",children:"Scan another users QR to send a message request."})]}),Object(x.jsxs)("div",{className:"send-request-card",onClick:J,"data-v-8b899a6b":"",children:[Object(x.jsx)("i",{className:"send-request-card-icon fas fa-clipboard","data-v-8b899a6b":""}),Object(x.jsx)("p",{className:"send-request-card-title","data-v-8b899a6b":"",children:"PASTE CLIPBOARD"}),Object(x.jsx)("p",{className:"send-request-card-desc","data-v-8b899a6b":"",children:"Paste another users Public Key to send a message request."})]})]})]})]}),Object(x.jsx)(v.a,{"data-v-8b899a6b":""})]})}}}]);
//# sourceMappingURL=19.50e7f2fb.chunk.js.map