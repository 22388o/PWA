(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[15],{593:function(e,a,t){"use strict";var n=t(0),c=t(84),s=t.n(c),d=t(8),i=(t(598),t(4)),l=function(e){var a=e.children,t=e.style;return Object(i.jsx)("div",{className:"content",style:t,"data-v-7ac98d1b":"",children:a})},o=(t(599),function(e){var a=e.title,t=void 0===a?"":a,n=e.toggleModal,c=void 0===n?d.b:n,s=e.forceRenderTitleBar,l=void 0!==s&&s,o=e.hideXBtn,r=void 0!==o&&o;return t||l?Object(i.jsxs)("div",{className:"head","data-v-a440211e":"",children:[Object(i.jsx)("p",{className:"head-title","data-v-a440211e":"",children:t}),!r&&Object(i.jsx)("div",{className:"head-close",onClick:c,"data-v-a440211e":"",children:Object(i.jsx)("i",{className:"fas fa-times","data-v-a440211e":""})})]}):null});t(600),a.a=function(e){var a=e.modalOpen,t=void 0!==a&&a,c=e.toggleModal,r=e.modalTitle,b=void 0===r?"":r,v=e.children,j=e.contentStyle,u=void 0===j?{}:j,f=e.disableBackdropClose,h=void 0!==f&&f,m=e.forceRenderTitleBar,O=void 0!==m&&m,p=e.hideXBtn,x=void 0!==p&&p,N=e.noFullWidth,g=void 0!==N&&N,k=e.blueBtn,C=void 0===k?"":k,y=e.disableBlueBtn,S=void 0!==y&&y,_=e.onClickBlueBtn,w=void 0===_?d.b:_,M=e.redBtn,B=void 0===M?"":M,D=e.disableRedBtn,E=void 0!==D&&D,T=e.onClickRedBtn,P=void 0===T?d.b:T,R=Object(n.useCallback)((function(){c()}),[c]),K=Object(n.useCallback)((function(){h||c()}),[h,c]);return Object(i.jsxs)("div",{className:s()({modal:!0,open:t}),"data-v-f18f7976":"",children:[Object(i.jsx)("div",{className:"backdrop",onClick:K,"data-v-f18f7976":""}),Object(i.jsxs)("div",{className:s()({container:!0,"container-no-full-width":g}),"data-v-f18f7976":"",children:[Object(i.jsx)(o,{title:b,toggleModal:R,forceRenderTitleBar:O,hideXBtn:x,"data-v-f18f7976":""}),Object(i.jsx)(l,{style:u,"data-v-f18f7976":"",children:v}),Object(i.jsxs)("div",{className:"color-buttons","data-v-f18f7976":"",children:[C&&Object(i.jsx)("button",{disabled:S,className:s()("color-btn","blue-btn"),onClick:w,"data-v-f18f7976":"",children:C}),B&&Object(i.jsx)("button",{disabled:E,className:s()("color-btn","red-btn"),onClick:P,"data-v-f18f7976":"",children:B})]})]})]})}},595:function(e,a,t){"use strict";var n=t(46),c=t(84),s=t.n(c),d=(t(601),t(4));a.a=function(e){var a=e.label,t=e.name,c=e.onChange,i=e.inputAction,l=e.actionIcon,o=e.value,r=e.inputMode,b=void 0===r?"text":r,v=e.type,j=void 0===v?"text":v,u=e.element,f=void 0===u?"input":u,h=e.small,m=void 0!==h&&h,O=e.disabled;return Object(d.jsxs)("div",{className:s()({group:!0,"group-disabled":O,"group-small":m}),"data-v-1785d374":"",children:[a?Object(d.jsx)("p",{className:"group-label","data-v-1785d374":"",children:a}):null,Object(d.jsxs)("div",{className:s()({"group-input-container":!0,"group-input-textarea-container":"textarea"===f}),"data-v-1785d374":"",children:["textarea"===f?Object(d.jsx)("textarea",{className:"group-input group-input-textarea",name:t,onChange:c,inputMode:b,value:o,disabled:O,"data-v-1785d374":""}):Object(d.jsx)("input",{className:"group-input",type:j,name:t,onChange:c,inputMode:b,value:o,disabled:O,"data-v-1785d374":""}),i&&l?Object(d.jsx)("div",{className:"group-input-action",onClick:i,"data-v-1785d374":"",children:Object(d.jsx)("i",{className:s()(Object(n.a)({"group-input-action-icon":!0,fas:!0},l,!0)),onClick:i,"data-v-1785d374":""})}):null]})]})}},598:function(e,a,t){},599:function(e,a,t){},600:function(e,a,t){},601:function(e,a,t){},603:function(e,a,t){"use strict";var n=t(0),c=t(84),s=t.n(c),d=(t(604),t(37)),i=t(8),l=t(87),o=t(594),r=t(20),b=t(4);a.a=function(e){var a=e.pageTitle,t=e.absolute,c=void 0!==t&&t,v=e.solid,j=void 0!==v&&v,u=e.enableBackButton,f=void 0!==u&&u,h=e.onHeight,m=void 0===h?i.b:h,O=Object(d.b)(),p=Object(n.useCallback)((function(){window.history.back()}),[]),x=Object(n.useCallback)((function(){O(Object(l.c)())}),[O]),N=Object(r.useSelector)((function(e){return e.node.publicKey})),g=Object(n.useCallback)((function(e){if(e)try{m(e.getBoundingClientRect().height)}catch(a){console.log("Error inside onHeight mechanism in MainNav:"),console.log(a)}}),[m]);return Object(b.jsxs)("div",{className:s()({"main-nav-container":!0,"main-nav-absolute":c,"main-nav-solid":j}),ref:g,"data-v-4c73feca":"",children:[f?Object(b.jsx)("div",{className:"main-nav-back",onClick:p,"data-v-4c73feca":"",children:Object(b.jsx)("i",{className:"icon icon-thin-back","data-v-4c73feca":""})}):Object(b.jsx)(o.a,{height:40,publicKey:N,"data-v-4c73feca":""}),Object(b.jsx)("p",{className:"main-nav-title unselectable","data-v-4c73feca":"",children:a}),Object(b.jsxs)("div",{className:"main-nav-menu-btn",onClick:x,"data-v-4c73feca":"",children:[Object(b.jsx)("div",{className:"main-nav-menu-dash","data-v-4c73feca":""}),Object(b.jsx)("div",{className:"main-nav-menu-dash","data-v-4c73feca":""}),Object(b.jsx)("div",{className:"main-nav-menu-dash","data-v-4c73feca":""})]})]})}},604:function(e,a,t){},610:function(e,a,t){"use strict";var n=t(0),c=t(4);a.a=function(e){var a=e.color,t=e.length,s=e.type,d=e.width,i=Object(n.useMemo)((function(){return"vertical"===s?{borderLeftStyle:"solid",borderLeftWidth:"".concat(d/2,"px"),borderLeftColor:a,borderRightStyle:"solid",borderRightWidth:"".concat(d/2,"px"),borderRightColor:a,height:t}:"horizontal"===s?{borderTopStyle:"solid",borderTopWidth:d/2,borderTopColor:a,borderBottomStyle:"solid",borderBottomWidth:d/2,borderBottomColor:a,width:t}:{}}),[a,t,s,d]);return Object(c.jsx)("div",{style:i})}},612:function(e,a,t){"use strict";t.d(a,"b",(function(){return o})),t.d(a,"a",(function(){return r}));var n=t(17),c=t(188),s=t.n(c),d=/(\d+)(\d{3})/gi,i=1e8,l=function e(a){return d.test(a)?e(a.replace(d,"$1,$2")):a},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=e.split("."),t=Object(n.a)(a,2),c=t[0],s=t[1],d=l(c),i=s?"."+s:"";return d+i},r=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",t=s()(e).div(i).toString();return s()((null===a||void 0===a?void 0:a.toString())||"0").times(t)}},613:function(e,a,t){"use strict";var n=t(17),c=t(0),s=t(84),d=t.n(s),i=(t(614),t(4));a.a=function(e){var a=e.label,t=void 0===a?null:a,s=e.icon,l=void 0===s?null:s,o=e.iconURL,r=void 0===o?null:o,b=e.onClick,v=void 0===b?void 0:b,j=e.nestedMode,u=void 0!==j&&j,f=e.large,h=void 0!==f&&f,m=e.small,O=void 0!==m&&m,p=e.relative,x=void 0!==p&&p,N=e.children,g=void 0===N?null:N,k=e.style,C=void 0===k?{}:k,y=Object(c.useState)(!1),S=Object(n.a)(y,2),_=S[0],w=S[1],M=Object(c.useCallback)((function(){u&&w(!_)}),[_,u]),B=Object(c.useMemo)((function(){return r?Object(i.jsx)("img",{src:r,className:"add-btn-icon",alt:"","data-v-7baa91b1":""}):Object(i.jsx)("i",{className:"fas fa-".concat(null!==l&&void 0!==l?l:"plus"),"data-v-7baa91b1":""})}),[l,r]),D=Object(c.useMemo)((function(){return t?Object(i.jsx)("p",{className:"add-btn-label","data-v-7baa91b1":"",children:t}):null}),[t]);return Object(i.jsxs)("div",{className:d()({"add-btn-container":!0,"add-btn-round-container":!t,"add-btn-large":h,"add-btn-small":O}),"data-v-7baa91b1":"",children:[Object(i.jsxs)("div",{className:d()({"add-btn":!0,"add-btn-round":!t,"add-btn-extended":!!t,"add-btn-relative":x,"add-btn-open":_,"add-btn-nested":u}),onClick:null!==v&&void 0!==v?v:M,style:C,"data-v-7baa91b1":"",children:[B,D]}),g?Object(i.jsx)("div",{className:d()({"add-btn-options":!0,"add-btn-options-open":_}),"data-v-7baa91b1":"",children:g}):null]})}},614:function(e,a,t){},722:function(e,a,t){},723:function(e,a,t){},724:function(e,a,t){},725:function(e,a,t){},726:function(e,a,t){},727:function(e,a,t){},728:function(e,a,t){},729:function(e,a,t){},888:function(e,a,t){"use strict";t.r(a);var n=t(17),c=t(0),s=t.n(c),d=t(37),i=t(84),l=t.n(i),o=t(31),r=t(612),b=t(603),v=t(613),j=t(179),u=(t(722),t(4)),f=function(e){var a=e.hash,t=e.value,n=e.date,c=e.unconfirmed,s=Object(d.c)((function(e){var a;return null!==(a=e.wallet.USDRate)&&void 0!==a?a:"0"})),i=t.replace(/,/g,""),l=Object(r.b)(Object(r.a)(i,s).toFixed(2)),o=n?j.DateTime.fromSeconds(parseInt(n,10)).toRelative():"unknown";return Object(u.jsxs)("div",{className:"advanced-transaction-container","data-v-947f4e80":"",children:[Object(u.jsxs)("div",{className:"advanced-transaction-info","data-v-947f4e80":"",children:[Object(u.jsx)("div",{className:"advanced-transaction-avatar","data-v-947f4e80":""}),Object(u.jsxs)("div",{className:"advanced-transaction-author","data-v-947f4e80":"",children:[Object(u.jsx)("p",{className:"advanced-transaction-author-name","data-v-947f4e80":"",children:a}),Object(u.jsxs)("div",{style:{display:"flex"},"data-v-947f4e80":"",children:[Object(u.jsx)("p",{className:"advanced-transaction-type","data-v-947f4e80":"",children:"Payment"}),c&&Object(u.jsx)("i",{className:"far fa-clock",style:{marginLeft:"0.5rem",color:"red"},"data-v-947f4e80":""})]})]})]}),Object(u.jsxs)("div",{className:"advanced-transaction-value-container","data-v-947f4e80":"",children:[Object(u.jsx)("p",{className:"advanced-transaction-time","data-v-947f4e80":"",children:o}),Object(u.jsx)("p",{className:"advanced-transaction-value","data-v-947f4e80":"",children:t}),Object(u.jsxs)("p",{className:"advanced-transaction-usd","data-v-947f4e80":"",children:[l," USD"]})]})]})},h=t(183),m=t(8),O=t(592),p=t(610),x=(t(723),function(e){var a=e.publicKey,t=e.ip,n=e.sendable,c=e.receivable,d=e.active,i=e.pendingStatus,o=void 0===i?"":i,b=e.renderDivider,v=s.a.useMemo((function(){return Object(r.b)(n)}),[n]),j=s.a.useMemo((function(){return Object(r.b)(c)}),[c]),f=a+(!!t&&"@".concat(t)),x=s.a.useCallback((function(){navigator.clipboard?navigator.clipboard.writeText(f).then((function(){h.b.dark("Copied to clipboard")})).catch((function(e){m.e.error("Error inside <Channel />.onClick -> ",e),h.b.dark("Could not copy to clipboard: ".concat(e.message))})):h.b.dark("Could not copy to clipboard, enable clipboard access or use HTTPs.")}),[f]);return Object(u.jsxs)("div",{className:l()("advanced-channel-container",{"has-divider":b}),onClick:x,"data-v-d8759fc2":"",children:[Object(u.jsx)("div",{className:"advanced-channel-name-container","data-v-d8759fc2":"",children:Object(u.jsx)("p",{style:{marginLeft:"0.5rem"},"data-v-d8759fc2":"",children:o})}),Object(u.jsxs)("div",{className:"address-and-status","data-v-d8759fc2":"",children:[Object(u.jsx)("div",{className:l()({"advanced-channel-status":!0,"advanced-channel-status-offline":!d}),"data-v-d8759fc2":""}),Object(u.jsx)(O.a,{amt:12,insideRow:!0,"data-v-d8759fc2":""}),Object(u.jsx)("p",{className:"advanced-channel-address","data-v-d8759fc2":"",children:f})]}),Object(u.jsx)(O.a,{amt:12,"data-v-d8759fc2":""}),Object(u.jsxs)("div",{className:"advanced-channel-capacity-container","data-v-d8759fc2":"",children:[Object(u.jsxs)("div",{className:"advanced-channel-capacity","data-v-d8759fc2":"",children:["Sendable: ",v," sats"]}),Object(u.jsx)("div",{className:"line","data-v-d8759fc2":"",children:Object(u.jsx)(p.a,{color:"white",length:16,type:"vertical",width:2,"data-v-d8759fc2":""})}),Object(u.jsxs)("div",{className:"advanced-channel-capacity","data-v-d8759fc2":"",children:["Receivable: ",j," sats"]})]})]})}),N=(t(724),function(e){var a=e.sent,t=e.received,n=e.address,c=e.publicKey,d=e.renderDivider,i=Object(r.b)(a.toString()),o=Object(r.b)(t.toString()),b=s.a.useCallback((function(){navigator.clipboard?navigator.clipboard.writeText(n).then((function(){h.b.dark("Copied to clipboard")})).catch((function(e){m.e.error("Error inside <Peer />.onClick -> ",e),h.b.dark("Could not copy to clipboard: ".concat(e.message))})):h.b.dark("Could not copy to clipboard, enable clipboard access or use HTTPs.")}),[n]);return Object(u.jsxs)("div",{className:l()("peer-container",{"has-divider":d}),onClick:b,"data-v-e1ef346b":"",children:[Object(u.jsx)("h5",{className:"margin-0 padding-0","data-v-e1ef346b":"",children:n}),Object(u.jsx)(O.a,{amt:12,"data-v-e1ef346b":""}),Object(u.jsx)("p",{className:"advanced-peer-public-key","data-v-e1ef346b":"",children:Object(u.jsx)("span",{"data-v-e1ef346b":"",children:null!==c&&void 0!==c?c:"Unknown public key"})}),Object(u.jsx)(O.a,{amt:12,"data-v-e1ef346b":""}),Object(u.jsxs)("div",{className:"sent-and-received","data-v-e1ef346b":"",children:[Object(u.jsx)("p",{className:"advanced-peer-value","data-v-e1ef346b":"",children:Object(u.jsxs)("span",{"data-v-e1ef346b":"",children:[Object(u.jsx)("span",{className:"peer-value-title","data-v-e1ef346b":"",children:"Sent:"})," ",i]})}),Object(u.jsx)("div",{className:"line","data-v-e1ef346b":"",children:Object(u.jsx)(p.a,{color:"white",length:16,type:"vertical",width:2,"data-v-e1ef346b":""})}),Object(u.jsx)("p",{className:"advanced-peer-value","data-v-e1ef346b":"",children:Object(u.jsxs)("span",{"data-v-e1ef346b":"",children:[Object(u.jsx)("span",{className:"peer-value-title","data-v-e1ef346b":"",children:"Received:"})," ",o]})})]})]})}),g=t(3),k=t.n(g),C=t(6),y=t(593),S=t(595),_=(t(725),t(177)),w=function(e){var a=e.open,t=void 0!==a&&a,s=e.toggleModal,i=Object(d.b)(),l=Object(c.useState)(!1),r=Object(n.a)(l,2),b=r[0],v=r[1],j=Object(c.useState)(""),f=Object(n.a)(j,2),h=f[0],m=f[1],O=Object(c.useState)(""),p=Object(n.a)(O,2),x=p[0],N=p[1],g=Object(c.useState)(""),w=Object(n.a)(g,2),M=w[0],B=w[1],D=Object(c.useCallback)((function(e){var a=e.target,t=a.name,n=a.value;"publicKey"===t&&N(n),"host"===t&&m(n)}),[]),E=Object(c.useCallback)(function(){var e=Object(C.a)(k.a.mark((function e(a){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),v(!0),e.prev=2,e.next=5,i(Object(o.c)({publicKey:x,host:h}));case 5:s(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),B(null!==(t=null===e.t0||void 0===e.t0?void 0:e.t0.errorMessage)&&void 0!==t?t:null===e.t0||void 0===e.t0?void 0:e.t0.message);case 11:return e.prev=11,v(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[2,8,11,14]])})));return function(a){return e.apply(this,arguments)}}(),[i,x,h,s]);return Object(u.jsx)(y.a,{toggleModal:s,modalOpen:t,modalTitle:"ADD PEER","data-v-efe2448f":"",children:Object(u.jsxs)("form",{className:"modal-form",onSubmit:E,"data-v-efe2448f":"",children:[M?Object(u.jsx)("div",{className:"form-error","data-v-efe2448f":"",children:M}):null,b?Object(u.jsx)(_.a,{overlay:!0,text:"Adding Peer...","data-v-efe2448f":""}):null,Object(u.jsx)(S.a,{onChange:D,name:"publicKey",label:"Public Key",value:x,small:!0,"data-v-efe2448f":""}),Object(u.jsx)(S.a,{onChange:D,name:"host",label:"Host IP",value:h,small:!0,"data-v-efe2448f":""}),Object(u.jsx)("div",{className:"modal-submit-container","data-v-efe2448f":"",children:Object(u.jsx)("button",{className:"modal-submit-btn",type:"submit","data-v-efe2448f":"",children:"ADD PEER"})})]})})},M=(t(726),t(98)),B=function(e){var a=e.open,t=void 0!==a&&a,s=e.toggleModal,i=Object(d.b)(),l=Object(c.useState)(!1),r=Object(n.a)(l,2),b=r[0],v=r[1],j=Object(c.useState)(""),f=Object(n.a)(j,2),h=f[0],m=f[1],O=Object(c.useState)(""),p=Object(n.a)(O,2),x=p[0],N=p[1],g=Object(c.useState)(""),w=Object(n.a)(g,2),B=w[0],D=w[1],E=Object(c.useState)(""),T=Object(n.a)(E,2),P=T[0],R=T[1],K=Object(c.useCallback)((function(e){var a=e.target,t=a.name,n=a.value;"publicKey"===t&&D(n),"pushAmount"===t&&N(n),"channelCapacity"===t&&m(n)}),[]),A=Object(c.useCallback)(function(){var e=Object(C.a)(k.a.mark((function e(a){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),v(!0),e.prev=2,e.next=5,i(Object(M.b)());case 5:return e.next=7,i(Object(o.k)({publicKey:B,channelCapacity:h,pushAmount:x}));case 7:s(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),R(null!==(t=null===e.t0||void 0===e.t0?void 0:e.t0.errorMessage)&&void 0!==t?t:null===e.t0||void 0===e.t0?void 0:e.t0.message);case 13:return e.prev=13,v(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(a){return e.apply(this,arguments)}}(),[i,B,h,x,s]);return Object(u.jsx)(y.a,{toggleModal:s,modalOpen:t,modalTitle:"OPEN CHANNEL","data-v-f0b42201":"",children:Object(u.jsxs)("form",{className:"modal-form",onSubmit:A,"data-v-f0b42201":"",children:[P?Object(u.jsx)("div",{className:"form-error","data-v-f0b42201":"",children:P}):null,b?Object(u.jsx)(_.a,{overlay:!0,text:"Adding Peer...","data-v-f0b42201":""}):null,Object(u.jsx)(S.a,{onChange:K,name:"publicKey",label:"Node Public Key",value:B,small:!0,"data-v-f0b42201":""}),Object(u.jsx)(S.a,{onChange:K,name:"channelCapacity",label:"Channel Capacity (sats)",value:h,inputMode:"number",small:!0,"data-v-f0b42201":""}),Object(u.jsx)(S.a,{onChange:K,name:"pushAmount",label:"Push Amount (sats)",value:x,inputMode:"number",small:!0,"data-v-f0b42201":""}),Object(u.jsx)("div",{className:"modal-submit-container","data-v-f0b42201":"",children:Object(u.jsx)("button",{className:"modal-submit-btn",type:"submit","data-v-f0b42201":"",children:"OPEN CHANNEL"})})]})})},D=(t(727),t(728),function(e){var a=e.modalOpen,t=e.toggleModal,c=s.a.useState(null),d=Object(n.a)(c,2),i=d[0],l=d[1];s.a.useEffect((function(){a&&m.c.get("/healthz").then((function(e){l(e.data.LNDStatus.message)})).catch((function(e){m.e.error("Error while fetching node info inside <InfoModal /> -> ",e),alert("Error while fetching node info: ".concat(e.message))}))}),[a]);var o=Object(u.jsx)("span",{"data-v-be26f8fa":"",children:"Loading..."});return i&&(o=Object(u.jsxs)("div",{className:"container","data-v-be26f8fa":"",children:[Object(u.jsxs)("div",{className:"subtitle-and-icon-holder","data-v-be26f8fa":"",children:[Object(u.jsx)("span",{className:"subtitle","data-v-be26f8fa":"",children:"Synced to Chain"}),i.synced_to_chain?Object(u.jsx)("i",{className:"fas fa-check icon","data-v-be26f8fa":""}):Object(u.jsx)("i",{className:"far fa-clock icon","data-v-be26f8fa":""})]}),Object(u.jsx)(O.a,{amt:45,"data-v-be26f8fa":""}),Object(u.jsxs)("div",{className:"subtitle-and-icon-holder","data-v-be26f8fa":"",children:[Object(u.jsx)("span",{className:"subtitle","data-v-be26f8fa":"",children:"Synced to Graph"}),i.synced_to_graph?Object(u.jsx)("i",{className:"fas fa-check icon","data-v-be26f8fa":""}):Object(u.jsx)("i",{className:"far fa-clock icon","data-v-be26f8fa":""})]}),Object(u.jsx)(O.a,{amt:45,"data-v-be26f8fa":""}),Object(u.jsxs)("div",{className:"subtitle-and-icon-holder","data-v-be26f8fa":"",children:[Object(u.jsx)("span",{className:"subtitle","data-v-be26f8fa":"",children:"Lightning PubKey:"}),Object(u.jsx)("i",{className:"far fa-copy icon cursor-pointer",onClick:function(){try{navigator.clipboard.writeText(i.identity_pubkey),h.b.dark("Copied to clipboard")}catch(e){alert(e.message)}},"data-v-be26f8fa":""})]}),Object(u.jsxs)("span",{className:"data pubKey","data-v-be26f8fa":"",children:["...",i.identity_pubkey.slice(-14)]}),Object(u.jsx)(O.a,{amt:45,"data-v-be26f8fa":""}),Object(u.jsxs)("div",{className:"subtitle-and-icon-holder","data-v-be26f8fa":"",children:[Object(u.jsx)("span",{className:"subtitle","data-v-be26f8fa":"",children:"Uris"}),Object(u.jsx)("i",{className:"far fa-copy icon cursor-pointer",onClick:function(){try{navigator.clipboard.writeText(i.uris.join(" , ")),h.b.dark("Copied to clipboard")}catch(e){alert(e.message)}},"data-v-be26f8fa":""})]}),Object(u.jsx)("span",{className:"data","data-v-be26f8fa":"",children:"Number of Uris: ".concat(i.uris.length.toString())}),Object(u.jsx)(O.a,{amt:45,"data-v-be26f8fa":""}),Object(u.jsx)("div",{className:"subtitle-and-icon-holder","data-v-be26f8fa":"",children:Object(u.jsx)("span",{className:"subtitle","data-v-be26f8fa":"",children:"Pending Channels:"})}),Object(u.jsx)("span",{className:"data","data-v-be26f8fa":"",children:i.num_pending_channels.toString()}),Object(u.jsx)(O.a,{amt:45,"data-v-be26f8fa":""}),Object(u.jsx)("div",{className:"subtitle-and-icon-holder","data-v-be26f8fa":"",children:Object(u.jsx)("span",{className:"subtitle","data-v-be26f8fa":"",children:"Block Height:"})}),Object(u.jsx)("span",{className:"data","data-v-be26f8fa":"",children:i.block_height.toString()}),Object(u.jsx)(O.a,{amt:45,"data-v-be26f8fa":""}),Object(u.jsx)("div",{className:"subtitle-and-icon-holder","data-v-be26f8fa":"",children:Object(u.jsx)("span",{className:"subtitle","data-v-be26f8fa":"",children:"Block Height:"})}),Object(u.jsx)("span",{className:"data","data-v-be26f8fa":"",children:i.block_height.toString()}),Object(u.jsx)(O.a,{amt:45,"data-v-be26f8fa":""}),Object(u.jsx)("div",{className:"subtitle-and-icon-holder","data-v-be26f8fa":"",children:Object(u.jsx)("span",{className:"subtitle","data-v-be26f8fa":"",children:"Best Header Timestamp:"})}),Object(u.jsx)("span",{className:"data","data-v-be26f8fa":"",children:i.best_header_timestamp}),Object(u.jsx)(O.a,{amt:45,"data-v-be26f8fa":""}),Object(u.jsx)("div",{className:"subtitle-and-icon-holder","data-v-be26f8fa":"",children:Object(u.jsx)("span",{className:"subtitle","data-v-be26f8fa":"",children:"LND Version"})}),Object(u.jsx)("span",{className:"data","data-v-be26f8fa":"",children:i.version}),Object(u.jsx)(O.a,{amt:45,"data-v-be26f8fa":""}),Object(u.jsx)("div",{className:"btn",onClick:function(){alert("Coming soon")},"data-v-be26f8fa":"",children:Object(u.jsx)("span",{className:"btn-text","data-v-be26f8fa":"",children:"Download Backup"})}),Object(u.jsx)(O.a,{amt:18,"data-v-be26f8fa":""}),Object(u.jsxs)("span",{className:"footer","data-v-be26f8fa":"",children:[Object(u.jsx)("span",{className:"warning","data-v-be26f8fa":"",children:"Warning: "})," Consult documentation before use."]})]})),Object(u.jsxs)(y.a,{modalOpen:a,toggleModal:t,modalTitle:"Node Info","data-v-be26f8fa":"",children:[Object(u.jsx)(O.a,{amt:50,"data-v-be26f8fa":""}),o]})}),E=t(25),T=t(20);t(729),a.default=function(){var e=s.a.useState("none"),a=Object(n.a)(e,2),t=a[0],c=a[1],i=s.a.useState(1),j=Object(n.a)(i,1)[0],h=s.a.useState(!1),O=Object(n.a)(h,2),p=O[0],g=O[1],k=s.a.useState(!1),C=Object(n.a)(k,2),y=C[0],S=C[1],_=m.k(!1),M=Object(n.a)(_,2),P=M[0],R=M[1],K=s.a.useState([]),A=Object(n.a)(K,2),L=A[0],H=A[1],U=Object(d.b)(),I=T.useSelector((function(e){return e.wallet.confirmedBalance})),W=T.useSelector((function(e){return e.wallet.channelBalance})),F=T.useSelector((function(e){return e.wallet.transactions})),X=T.useSelector((function(e){return e.wallet.channels})),z=T.useSelector((function(e){return e.wallet.peers})),J=T.useSelector((function(e){return e.wallet.USDRate}));s.a.useEffect((function(){var e=1===j;U(Object(o.g)({page:j,reset:e})),U(Object(o.e)({page:j,reset:e})),U(Object(o.d)()),U(Object(o.f)())}),[j,U]),s.a.useEffect((function(){E.a.get("/api/lnd/pendingchannels").then((function(e){var a=e.data;console.log("pending channels:"),console.log(a);var t=function(e,a){return{remote_pubkey:e.remote_node_pub,remote_balance:e.remote_balance,local_balance:e.local_balance,ip:"",active:!1,pendingStatus:a}},n=[];a.pending_open_channels.forEach((function(e){var a=e.channel;n.push(t(a,"Pending Open"))})),a.waiting_close_channels.forEach((function(e){var a=e.channel;n.push(t(a,"Pending Close"))})),a.pending_force_closing_channels.forEach((function(e){var a=e.channel;n.push(t(a,"Pending Force Close"))})),H(n)}))}),[]);var V=s.a.useMemo((function(){return Object(r.b)(Object(r.a)(I,J).toFixed(2))}),[J,I]),$=s.a.useMemo((function(){return Object(r.b)(Object(r.a)(W,J).toFixed(2))}),[J,W]),G=s.a.useCallback((function(e){c((function(a){if(("channels"!==e||0!==X.length||0!==L.length)&&("peers"!==e||0!==z.length)&&("transactions"!==e||0!==F.content.length))return a===e?"none":e}))}),[]),q=s.a.useCallback((function(){g(!p)}),[p]),Q=s.a.useCallback((function(){S(!y)}),[y]),Y=s.a.useCallback((function(){G("transactions")}),[G]),Z=s.a.useCallback((function(){G("peers")}),[G]),ee=s.a.useCallback((function(){G("channels")}),[G]);return Object(u.jsxs)("div",{className:"page-container advanced-page","data-v-aeb52996":"",children:[Object(u.jsxs)("div",{className:"advanced-header","data-v-aeb52996":"",children:[Object(u.jsx)(b.a,{absolute:!0,pageTitle:"ADVANCED",enableBackButton:!1,"data-v-aeb52996":""}),Object(u.jsxs)("div",{className:"advanced-balance-container","data-v-aeb52996":"",children:[Object(u.jsx)("div",{className:"advanced-balance-icon-container","data-v-aeb52996":"",children:Object(u.jsx)("i",{className:"advanced-balance-icon fas fa-link","data-v-aeb52996":""})}),Object(u.jsxs)("div",{className:"advanced-balance-btc-container","data-v-aeb52996":"",children:[Object(u.jsx)("p",{className:"advanced-balance-btc","data-v-aeb52996":"",children:Object(r.b)(I)}),Object(u.jsxs)("p",{className:"advanced-balance-usd","data-v-aeb52996":"",children:[V," USD"]})]})]}),Object(u.jsxs)("div",{className:"advanced-balance-container",style:{paddingBottom:25},"data-v-aeb52996":"",children:[Object(u.jsx)("div",{className:"advanced-balance-icon-container","data-v-aeb52996":"",children:Object(u.jsx)("i",{className:"advanced-balance-icon fas fa-bolt","data-v-aeb52996":""})}),Object(u.jsxs)("div",{className:"advanced-balance-btc-container","data-v-aeb52996":"",children:[Object(u.jsx)("p",{className:"advanced-balance-btc","data-v-aeb52996":"",children:Object(r.b)(W)}),Object(u.jsxs)("p",{className:"advanced-balance-usd","data-v-aeb52996":"",children:[$," USD"]})]})]}),Object(u.jsxs)("span",{className:"open-info-btn",onClick:R,"data-v-aeb52996":"",children:["Node Info ",Object(u.jsx)("i",{className:"fas fa-info-circle","data-v-aeb52996":""})]})]}),Object(u.jsxs)("div",{className:"accordion","data-v-aeb52996":"",children:[Object(u.jsxs)("div",{className:l()({"accordion-section":!0,"section-open":"transactions"===t}),"data-v-aeb52996":"",children:[Object(u.jsx)("div",{className:"section-header",onClick:Y,"data-v-aeb52996":"",children:Object(u.jsx)("p",{className:"header-title","data-v-aeb52996":"",children:"Transactions"})}),Object(u.jsx)("div",{className:"section-content","data-v-aeb52996":"",children:Object(u.jsx)("div",{className:"content-inner","data-v-aeb52996":"",children:F.content.map((function(e){return Object(u.jsx)(f,{date:e.time_stamp,hash:e.tx_hash,value:Object(r.b)(e.amount),unconfirmed:0===e.num_confirmations,"data-v-aeb52996":""},e.tx_hash)}))})})]}),Object(u.jsxs)("div",{className:l()({"accordion-section":!0,"section-open":"peers"===t}),"data-v-aeb52996":"",children:[Object(u.jsx)("div",{className:"section-header",onClick:Z,"data-v-aeb52996":"",children:Object(u.jsx)("p",{className:"header-title","data-v-aeb52996":"",children:"Peers"})}),Object(u.jsxs)("div",{className:"section-content","data-v-aeb52996":"",children:[Object(u.jsx)("div",{className:"content-inner","data-v-aeb52996":"",children:z.map((function(e,a){return Object(u.jsx)(N,{address:e.address,publicKey:e.pub_key,sent:e.sat_sent,received:e.sat_recv,renderDivider:z.length>1&&a!==z.length-1,"data-v-aeb52996":""},e.address+e.pub_key)}))}),"peers"===t&&Object(u.jsx)(v.a,{nestedMode:!0,relative:!0,"data-v-aeb52996":"",children:Object(u.jsx)(v.a,{label:"ADD PEER",onClick:q,icon:"link","data-v-aeb52996":""})})]})]}),Object(u.jsxs)("div",{className:l()({"accordion-section":!0,"section-open":"channels"===t}),"data-v-aeb52996":"",children:[Object(u.jsx)("div",{className:"section-header",onClick:ee,"data-v-aeb52996":"",children:Object(u.jsx)("p",{className:"header-title","data-v-aeb52996":"",children:"Channels"})}),Object(u.jsx)("div",{className:"section-content","data-v-aeb52996":"",children:Object(u.jsxs)("div",{className:"content-inner","data-v-aeb52996":"",children:[X.map((function(e,a){var t,n=null===(t=z.find((function(e){return e.pub_key})))||void 0===t?void 0:t.address,c=X.length>1,s=a===X.length-1,d=L.length>0,i=c&&!s||d;return Object(u.jsx)(x,{publicKey:e.remote_pubkey,ip:n,receivable:e.remote_balance,sendable:e.local_balance,active:e.active,renderDivider:i,"data-v-aeb52996":""},e.chan_id)})),L.map((function(e,a){var t,n=null===(t=z.find((function(e){return e.pub_key})))||void 0===t?void 0:t.address;return Object(u.jsx)(x,{publicKey:e.remote_pubkey,ip:n,receivable:e.remote_balance,sendable:e.local_balance,active:e.active,pendingStatus:e.pendingStatus,renderDivider:L.length>1&&a!==L.length-1,"data-v-aeb52996":""},e.chan_id)})),"channels"===t&&Object(u.jsx)(v.a,{nestedMode:!0,relative:!0,"data-v-aeb52996":"",children:Object(u.jsx)(v.a,{label:"ADD CHANNEL",small:!0,onClick:Q,icon:"exchange-alt","data-v-aeb52996":""})})]})})]})]}),Object(u.jsx)(w,{open:p,toggleModal:q,"data-v-aeb52996":""}),Object(u.jsx)(B,{open:y,toggleModal:Q,"data-v-aeb52996":""}),Object(u.jsx)(D,{modalOpen:P,toggleModal:R,"data-v-aeb52996":""})]})}}}]);
//# sourceMappingURL=15.f9fae550.chunk.js.map