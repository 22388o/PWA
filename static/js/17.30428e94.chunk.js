(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[17],{482:function(e,t,n){"use strict";var c=n(3),a=n(72),o=n.n(a),i=(n(485),n(7)),s=function(e){var t=e.children,n=e.style;return Object(i.jsx)("div",{className:"modal-content",style:n,children:t})},r=(n(486),function(e){var t=e.title,n=e.toggleModal;return t?Object(i.jsxs)("div",{className:"modal-head",children:[Object(i.jsx)("p",{className:"modal-head-title",children:t}),Object(i.jsx)("div",{className:"modal-head-close",onClick:n,children:Object(i.jsx)("i",{className:"fas fa-times"})})]}):null});n(487),t.a=function(e){var t=e.modalOpen,n=void 0!==t&&t,a=e.toggleModal,l=e.modalTitle,u=void 0===l?"":l,d=e.children,b=e.contentStyle,j=void 0===b?{}:b,f=Object(c.useCallback)((function(){a()}),[a]);return Object(i.jsxs)("div",{className:o()({modal:!0,"modal-open":n}),children:[Object(i.jsx)("div",{className:"modal-backdrop",onClick:f}),Object(i.jsxs)("div",{className:"modal-container",children:[Object(i.jsx)(r,{title:u,toggleModal:f}),Object(i.jsx)(s,{style:j,children:d})]})]})}},485:function(e,t,n){},486:function(e,t,n){},487:function(e,t,n){},494:function(e,t,n){"use strict";var c=n(52),a=n(7);t.a=function(){return Object(a.jsxs)("div",{className:"bottom-nav-container",children:[Object(a.jsx)(c.c,{className:"bottom-nav-btn",to:"/overview",activeClassName:"active-nav-btn",children:Object(a.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-wallet"})}),Object(a.jsx)(c.c,{className:"bottom-nav-btn",to:"/chat",activeClassName:"active-nav-btn",children:Object(a.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-chat"})}),Object(a.jsx)(c.c,{className:"bottom-nav-btn",to:"/profile",activeClassName:"active-nav-btn",children:Object(a.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-profile"})}),Object(a.jsx)(c.c,{className:"bottom-nav-btn",to:"/feed",activeClassName:"active-nav-btn",children:Object(a.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-feed"})})]})}},501:function(e,t,n){"use strict";var c=n(14),a=n(3),o=n(72),i=n.n(o),s=(n(502),n(7));t.a=function(e){var t=e.label,n=void 0===t?null:t,o=e.icon,r=void 0===o?null:o,l=e.iconURL,u=void 0===l?null:l,d=e.onClick,b=void 0===d?void 0:d,j=e.nestedMode,f=void 0!==j&&j,p=e.large,O=void 0!==p&&p,h=e.small,m=void 0!==h&&h,v=e.relative,x=void 0!==v&&v,g=e.children,k=void 0===g?null:g,C=e.style,y=void 0===C?{}:C,N=Object(a.useState)(!1),S=Object(c.a)(N,2),w=S[0],_=S[1],I=Object(a.useCallback)((function(){f&&_(!w)}),[w,f]),P=Object(a.useMemo)((function(){return u?Object(s.jsx)("img",{src:u,className:"add-btn-icon",alt:""}):Object(s.jsx)("i",{className:"fas fa-".concat(null!==r&&void 0!==r?r:"plus")})}),[r,u]),R=Object(a.useMemo)((function(){return n?Object(s.jsx)("p",{className:"add-btn-label",children:n}):null}),[n]);return Object(s.jsxs)("div",{className:i()({"add-btn-container":!0,"add-btn-round-container":!n,"add-btn-large":O,"add-btn-small":m}),children:[Object(s.jsxs)("div",{className:i()({"add-btn":!0,"add-btn-round":!n,"add-btn-extended":!!n,"add-btn-relative":x,"add-btn-open":w,"add-btn-nested":f}),onClick:null!==b&&void 0!==b?b:I,style:y,children:[P,R]}),k?Object(s.jsx)("div",{className:i()({"add-btn-options":!0,"add-btn-options-open":w}),children:k}):null]})}},502:function(e,t,n){},503:function(e,t,n){},512:function(e,t,n){"use strict";var c=n(3),a=n(7);t.a=function(e){var t=e.color,n=e.length,o=e.type,i=e.width,s=Object(c.useMemo)((function(){return"vertical"===o?{borderLeftStyle:"solid",borderLeftWidth:"".concat(i/2,"px"),borderLeftColor:t,borderRightStyle:"solid",borderRightWidth:"".concat(i/2,"px"),borderRightColor:t,height:n}:"horizontal"===o?{borderTopStyle:"solid",borderTopWidth:i/2,borderTopColor:t,borderBottomStyle:"solid",borderBottomWidth:i/2,borderBottomColor:t,width:n}:{}}),[t,n,o,i]);return Object(a.jsx)("div",{style:s})}},527:function(e,t,n){"use strict";var c=n(72),a=n.n(c),o=n(483),i=n(512),s=n(528),r=n.n(s),l=n(7);t.a=function(e){var t=e.onChange,n=e.selected;return Object(l.jsxs)("div",{className:a()(o.y,o.u,o.v,o.s,r.a.container),children:[Object(l.jsx)("span",{className:a()(o.x,"posts"===n&&r.a.selected,"services"===n&&r.a.unselected),onClick:function(){t("posts")},children:"Posts"}),Object(l.jsx)("div",{className:o.a,children:Object(l.jsx)(i.a,{color:"white",length:16,type:"vertical",width:2})}),Object(l.jsx)("span",{className:a()(o.x,"services"===n&&r.a.selected,"posts"===n&&r.a.unselected),onClick:function(){t("services")},children:"Services"})]})}},528:function(e,t,n){e.exports={container:"ProfileDivider_container__3ob9k",selected:"ProfileDivider_selected__3U98y",unselected:"ProfileDivider_unselected__1Z_qd",divider:"ProfileDivider_divider__1IzYV"}},529:function(e,t,n){"use strict";t.a=n.p+"static/media/clipboard.beb19e1e.svg"},530:function(e,t,n){"use strict";t.a=n.p+"static/media/qrcode.69103c6c.svg"},628:function(e,t,n){e.exports={container:"ContentHostInputView_container__1CVAn","uri-or-token-input":"ContentHostInputView_uri-or-token-input__3vg5h","plus-or-paste-btn":"ContentHostInputView_plus-or-paste-btn__3z_k0"}},629:function(e,t,n){e.exports={"container-base":"Host_container-base__r5EJP","remove-or-cancel":"Host_remove-or-cancel__2sHhe Host_container-base__r5EJP",container:"Host_container__2hPww Host_container-base__r5EJP",pill:"Host_pill__1WzlY","display-name-or-uri":"Host_display-name-or-uri__2eaUy","price-and-status":"Host_price-and-status__3Q4n3",price:"Host_price__2oEgL",red:"Host_red__1kS00",yellow:"Host_yellow__3DLEG",blue:"Host_blue__3m2Kb"}},759:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),o=n(5),i=n(14),s=n(3),r=n.n(s),l=n(33),u=n(526),d=n.n(u),b=n(52),j=n(72),f=n.n(j),p=n(24),O=n(91),h=n(89),m=n(104),v=n(483),x=n(494),g=n(501),k=n(482),C=n(150),y=n(493),N=n(16),S=n(19),w=n(32),_=n(83),I=n(628),P=n.n(I),R=n(629),D=n.n(R),T=n(7),U=function(e){var t=e.error,n=e.isBeingAddedOrDeleted,c=e.isDefault,a=e.onClickRemove,o=e.onClickWarning,r=e.price,l=e.publicKey,u=e.URI,d=S.useSelector(S.selectUser(l)),b=Object(s.useState)(!1),j=Object(i.a)(b,2),O=j[0],h=j[1],m=Object(s.useCallback)((function(){h((function(e){return!e}))}),[]),x=Object(s.useCallback)((function(){o(l||u)}),[o,l,u]),g=Object(s.useCallback)((function(){a(l||u)}),[a,l,u]),k=t&&n||l&&u||!l&&!u,C=t;return k&&(C="Malformed host provided to <Host />, it must have either a public key or an URI (though not both), and it must not have both truthy error and isAdding props at the same time: ".concat(JSON.stringify(k))),O?Object(T.jsxs)("div",{className:f()(v.u,v.d,v.y),children:[Object(T.jsx)("button",{onClick:g,className:f()(v.l),children:"Remove"}),Object(T.jsx)("button",{onClick:m,className:f()(v.l),children:"Cancel"})]}):Object(T.jsxs)("div",{className:f()(v.u,v.w,v.f,D.a.container),children:[Object(T.jsxs)("div",{className:f()(v.u,v.w,v.g,D.a.pill),children:[l?Object(T.jsx)(y.a,{height:24,publicKey:l}):Object(T.jsx)("i",{className:f()("fas fa-globe")}),Object(T.jsx)("span",{className:D.a["display-name-or-uri"],children:u&&u.toLowerCase()||d.displayName||p.e(l)}),n||C?Object(T.jsx)("div",{}):Object(T.jsx)("span",{className:"fas fa-times",onClick:m,style:{fontSize:12}})]}),Object(T.jsxs)("div",{className:f()(v.m,v.f,D.a["price-and-status"]),children:[Object(T.jsxs)("span",{className:f()(v.m,D.a.price),children:[r," sats"]}),C?Object(T.jsx)("i",{className:f()("fas fa-exclamation-triangle",v.n,D.a.yellow),onClick:x}):n?Object(T.jsx)("i",{className:f()("fas fa-hourglass-half",v.n,D.a.yellow)}):c?Object(T.jsx)("i",{className:f()("fas fa-check",v.n,D.a.blue)}):Object(T.jsx)("i",{className:f()("fas fa-link",v.n,D.a.blue)})]})]})},E=f()(v.u,v.y,v.d,v.e,v.s),M=function(e){var t,n=e.hosts,c=e.onAddHost,a=e.onRemoveHost,o=e.onRetryHost,r=Object(s.useState)({publicKeyOrServerURI:"",URIHostAwaitingForToken:""}),l=Object(i.a)(r,2),u=l[0],d=u.publicKeyOrServerURI,b=u.URIHostAwaitingForToken,j=l[1],p=Object(s.useState)(""),O=Object(i.a)(p,2),m=O[0],x=O[1],g=Object(s.useState)(!1),C=Object(i.a)(g,2),y=C[0],S=C[1],w=Object(s.useRef)(null),I=Object(s.useState)(!1),R=Object(i.a)(I,2),D=R[0],M=R[1],H=Object(s.useState)(""),A=Object(i.a)(H,2),K=A[0],B=A[1],z=Object(s.useRef)(null),L=Object(s.useState)(!1),F=Object(i.a)(L,2),W=F[0],q=F[1],V=Object(s.useMemo)((function(){return n.slice().sort((function(e,t){return t.dateAdded-e.dateAdded}))}),[n]),G=Object(s.useMemo)((function(){return V.filter((function(e){return e.isDefault}))}),[V]),J=Object(s.useMemo)((function(){return V.filter((function(e){return!e.isDefault}))}),[V]),$=Object(s.useMemo)((function(){return[].concat(Object(N.a)(G),Object(N.a)(J))}),[G,J]),Y=Object(s.useCallback)((function(){S(!0)}),[]),Q=Object(s.useCallback)((function(){D||(navigator.clipboard?(M(!0),navigator.clipboard.readText().then((function(e){j(Object(_.a)((function(t){t.publicKeyOrServerURI=e})))})).catch((function(e){alert("Could not paste: ".concat(e.message))})).finally((function(){M(!1)}))):w.current&&(w.current.focus(),document.execCommand("paste"),w.current.blur()))}),[D,M]),Z=Object(s.useCallback)((function(){j(Object(_.a)((function(e){var t=h.f(e.publicKeyOrServerURI);t&&(e.publicKeyOrServerURI=t,e.URIHostAwaitingForToken=t)}))),h.f(d)||c(d)}),[j,d,c]),X=Object(s.useCallback)((function(){W||(navigator.clipboard?(q(!0),navigator.clipboard.readText().then((function(e){B(e)})).catch((function(e){alert("Could not paste: ".concat(e.message))})).finally((function(){q(!1)}))):z.current&&(z.current.focus(),document.execCommand("paste"),z.current.blur()))}),[W,q,B]),ee=Object(s.useCallback)((function(){j(Object(_.a)((function(e){e.publicKeyOrServerURI="",e.URIHostAwaitingForToken=""}))),c(d,K)}),[j,c,d,K]),te=Object(s.useCallback)((function(e){a(e)}),[a]),ne=Object(s.useCallback)((function(){x("")}),[x]),ce=Object(s.useCallback)((function(){a(m),ne()}),[a,m,ne]),ae=Object(s.useCallback)((function(){o(m),x("")}),[o,m,x]);return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:f()(v.h,v.y,P.a.container),children:[Object(T.jsxs)("div",{className:(v.t,v.d),children:[Object(T.jsx)("input",{className:f()("input-field",P.a["uri-or-token-input"]),onChange:function(e){j(Object(_.a)((function(t){t.publicKeyOrServerURI=e.target.value,t.URIHostAwaitingForToken=""}))),B("")},type:"text",value:d,onKeyUp:function(e){"Enter"!==e.key&&13!==e.keyCode||Z()},autoCapitalize:"off",autoCorrect:"none",placeholder:"Provider Pubkey or Server URI (include https or http)",ref:w,onFocus:Y}),0===d.length&&Object(T.jsx)("button",{className:f()(v.k,P.a["plus-or-paste-btn"]),disabled:D,onClick:Q,children:Object(T.jsx)("i",{className:"fas fa-paste"})}),d.length>0&&d!==b&&Object(T.jsx)("button",{className:f()(v.k,P.a["plus-or-paste-btn"]),disabled:0===d.length,onClick:Z,children:"+"})]}),d.length>0&&d===b&&Object(T.jsxs)("div",{className:(v.t,v.d),children:[Object(T.jsx)("input",{className:f()("input-field",P.a["uri-or-token-input"]),onChange:function(e){B(e.target.value)},type:"text",value:K,onKeyUp:function(e){"Enter"!==e.key&&13!==e.keyCode||ee()},autoCapitalize:"off",autoCorrect:"none",placeholder:"Token (required)",ref:z}),0===K.length&&Object(T.jsx)("button",{className:f()(v.k,P.a["plus-or-paste-btn"]),disabled:W,onClick:X,children:Object(T.jsx)("i",{className:"fas fa-paste"})}),K.length>0&&Object(T.jsx)("button",{className:f()(v.k,P.a["plus-or-paste-btn"]),disabled:0===K.length,onClick:ee,children:"+"})]}),Object(T.jsx)("div",{className:f()(v.h),children:(y?$:G).map((function(e){return Object(T.jsx)(U,{URI:e.URI,dateAdded:0,error:e.error,isBeingAddedOrDeleted:e.isBeingAddedOrDeleted,isDefault:e.isDefault,onClickRemove:te,onClickWarning:x,price:e.price,publicKey:e.publicKey,token:e.token},e.publicKey||e.URI)}))})]}),Object(T.jsx)(k.a,{modalOpen:!!m,modalTitle:null===(t=$.find((function(e){return e.publicKey===m||e.URI===m})))||void 0===t?void 0:t.error,toggleModal:ne,children:Object(T.jsxs)("div",{className:E,children:[Object(T.jsx)("button",{onClick:ce,className:"shock-form-button m-1",children:"REMOVE"}),Object(T.jsx)("button",{onClick:ae,className:"shock-form-button-confirm m-1",children:"RETRY"})]})})]})},H=n(42),A=function(){var e=Object(l.c)(),t=S.useSelector((function(e){return e.content.seedProviderPub})),n=S.useSelector((function(e){return e.userProfiles})),c=S.useSelector((function(e){return e.content.seedInfo})),a=c.seedUrl,o=c.seedToken,r=Object(s.useState)([]),u=Object(i.a)(r,2),d=u[0],b=u[1],j=Object(s.useState)(null),f=Object(i.a)(j,2),p=f[0],O=f[1],m=Object(s.useState)(""),v=Object(i.a)(m,2),x=v[0],g=v[1];Object(s.useEffect)((function(){var e=n[t];e?p&&e.avatar===p.avatar&&e.SeedServiceProvided===p.SeedServiceProvided||O(e):O(null)}),[n,t,p,O]),Object(s.useEffect)((function(){if(p){var e=p.SeedServiceProvided;e!==x&&g(e)}}),[p,x,g]),Object(s.useEffect)((function(){var e=[];a&&o&&e.push({URI:a,token:o,price:0,isBeingAddedOrDeleted:!1,dateAdded:Date.now(),isDefault:!0,error:null,publicKey:null}),t&&p&&e.push({dateAdded:Date.now(),isBeingAddedOrDeleted:!0,isDefault:!0,publicKey:t,price:0,URI:null,token:null,error:null}),b(e)}),[a,o,t,p,b]),Object(s.useEffect)((function(){x&&h.b.get("/api/gun/otheruser/".concat(t,"/load/offeredServices>").concat(x)).then((function(e){var t=e.data.data,n=Object(N.a)(d),c=n.findIndex((function(e){return!e.URI}));-1!==c&&(n[c].isBeingAddedOrDeleted=!1,n[c].price=t.servicePrice,b(n))})).catch((function(e){var t=Object(N.a)(d),n=t.findIndex((function(e){return!e.URI}));t[n].isBeingAddedOrDeleted=!1,t[n].error=e.message||e,b(t)}))}),[x,d,b,t]);var k=Object(s.useCallback)((function(t,n){t.startsWith("http")?Object(H.h)(t,n)(e):Object(H.i)(t)(e)}),[e]),C=Object(s.useCallback)((function(t){t.startsWith("http")?Object(H.h)("","")(e):Object(H.i)("")(e)}),[e]);Object(s.useEffect)((function(){return e(Object(w.b)(t)),function(){e(Object(w.c)(t))}}),[t,e]);var y=Object(s.useMemo)((function(){return d.filter((function(e){return e}))}),[d]);return Object(T.jsx)(M,{hosts:y,onAddHost:k,onRemoveHost:C,onRetryHost:function(){}})},K=n(527),B=n(491),z=n(529),L=n(530),F=n(22),W=(n(503),n(21)),q=n(55),V=r.a.lazy((function(){return Promise.all([n.e(1),n.e(3)]).then(n.bind(null,524))})),G=r.a.lazy((function(){return Promise.all([n.e(2),n.e(1),n.e(5)]).then(n.bind(null,749))})),J=["https://shock.pub","https://shock.page","https://lightning.page","https://satoshi.watch"];t.default=function(){var e=Object(l.c)(),t=Object(s.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1],u=Object(s.useState)(null),j=Object(i.a)(u,2),N=j[0],w=j[1],_=S.useSelector((function(e){return e.feed.posts})),I=S.useSelector((function(e){return e.node.publicKey})),P=S.useSelector((function(e){return e.node.hostIP})),R=S.useSelector((function(e){return e.userProfiles})),D=S.useSelector((function(e){return e.orders.myServices})),U=Object(s.useState)("posts"),E=Object(i.a)(U,2),M=E[0],H=E[1],$=Object(l.d)(S.selectSelfUser),Y=Object(s.useMemo)((function(){return _&&_[I]?_[I].sort((function(e,t){var n=Object(q.b)(e)?e.shareDate:e.date;return(Object(q.b)(t)?t.shareDate:t.date)-n})):[]}),[_,I]);console.debug(_),console.debug(Y),Object(s.useEffect)((function(){var t=Object(m.e)(P)(e);return function(){t.then((function(e){return e()}))}}),[P,e]);var Q=Object(s.useCallback)((function(){r(!c)}),[c]),Z=Object(s.useState)(!1),X=Object(i.a)(Z,2),ee=X[0],te=X[1],ne=Object(s.useState)(J[0]),ce=Object(i.a)(ne,2),ae=ce[0],oe=ce[1],ie=Object(s.useState)(J[0]),se=Object(i.a)(ie,2),re=se[0],le=se[1],ue=Object(s.useCallback)((function(){if(navigator.clipboard)navigator.clipboard.writeText(re+"/"+I);else{var e=document.querySelector("#web-client-url-holder");e.style.display="block",e.select(),document.execCommand("copy"),e.blur(),e.style.display="none"}}),[re,I]),de=Object(s.useCallback)(Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.debug("Subbing to webclient prefix on hostIP --| ".concat(P," |-- and public key --| ").concat(I," |--")),"$user::Profile>webClientPrefix::on",e.next=4,Object(F.e)({query:"$user::Profile>webClientPrefix::on",onData:function(e){"string"===typeof e?oe(e):h.b.post("/api/gun/put",{path:"$user>Profile>webClientPrefix",value:J[0]}).catch((function(e){alert("Error setting default web client prefix: ".concat(e.message))}))},onError:function(e){alert("There was an error fetching web client prefix: ".concat(e))}});case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)}))),[P,I]);Object(s.useEffect)((function(){var e=de();return function(){e.then((function(e){var t;return null===(t=e.off)||void 0===t?void 0:t.call(e)}))}}),[de]);var be=Object(s.useCallback)((function(e){H(e)}),[]),je=re!==ae,fe=Object(s.useCallback)((function(){te((function(e){return!e})),le(ae)}),[ae]),pe=Object(s.useCallback)((function(){fe()}),[fe]),Oe=Object(s.useCallback)((function(){re!==ae&&h.b.post("/api/gun/put",{path:"$user>Profile>webClientPrefix",value:re}).catch((function(e){alert("There was an error setting your web client prefix: ".concat(e.message))})),fe()}),[fe,re,ae]),he=Object(s.useRef)(null),me=Object(s.useState)(!1),ve=Object(i.a)(me,2),xe=ve[0],ge=ve[1],ke=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,c,o,s,r,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.preventDefault(),!xe){e.next=4;break}return e.abrupt("return");case 4:if(ge(!0),n=t.target,0!==(c=n.files).length){e.next=8;break}return e.abrupt("return");case 8:if(1===c.length){e.next=12;break}return h.e.error("Profile -> files.length !== 1"),alert("An error occurred while trying to set a header. This has been logged."),e.abrupt("return");case 12:return o=Object(i.a)(c,1),s=o[0],e.next=15,h.g(s,320,.7);case 15:return r=e.sent,"data:image/jpeg;base64,",l=r.slice("data:image/jpeg;base64,".length),e.next=20,h.b.post("/api/gun/put",{path:"$user>profileBinary>header",value:l});case 20:e.next=27;break;case 22:e.prev=22,e.t0=e.catch(0),h.e.error("Error while trying to load new header."),h.e.error(e.t0),alert("There was an error loading the new header, this has error has been logged.");case 27:return e.prev=27,ge(!1),e.finish(27);case 30:case"end":return e.stop()}}),e,null,[[0,22,27,30]])})));return function(t){return e.apply(this,arguments)}}(),Ce=Object(s.useCallback)((function(e){e.preventDefault();var t=he.current;t||(h.e.error("File input element for avatar is falsy."),alert("There was an error and it was logged.")),t.click()}),[]),ye=Object(s.useCallback)((function(e){console.log(e),!N&&e||w(null),w(e)}),[N]),Ne=Object(s.useCallback)((function(){w(null)}),[]),Se=Object(s.useCallback)(Object(o.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,N&&N.id){t.next=3;break}return t.abrupt("return");case 3:return console.log("deleting:"),console.log(N),n=N.shared?"sharedPosts":"posts",t.next=8,h.b.post("/api/gun/put",{path:"$user>".concat(n,">").concat(N.id),value:null});case 8:e(Object(W.b)({id:N.id,authorId:I})),ye(null),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),console.log("Error when deleting post:"),console.log(t.t0),alert("Could not delete post: ".concat(t.t0.message));case 17:case"end":return t.stop()}}),t,null,[[0,12]])}))),[N,e,I,ye]),we=Object(s.useCallback)((function(){try{if(navigator.clipboard)navigator.clipboard.writeText(I);else{var e=document.querySelector("#public-key-holder");e.style.display="block",e.select(),document.execCommand("copy"),e.blur(),e.style.display="none",r(!1)}}catch(t){alert("Could not copy to clipboard: ".concat(t.message))}}),[I]),_e=Object(s.useState)(!1),Ie=Object(i.a)(_e,2),Pe=Ie[0],Re=Ie[1],De=$.displayName,Te=Object(s.useState)($.displayName),Ue=Object(i.a)(Te,2),Ee=Ue[0],Me=Ue[1],He=Object(s.useState)(null),Ae=Object(i.a)(He,2),Ke=Ae[0],Be=Ae[1],ze=Object(s.useCallback)((function(e){""!==e&&(Be(e),h.b.put("/api/gun/me",{displayName:e}).catch((function(e){Be(null),alert("There was an error setting a new display name: ".concat(e.message))})))}),[]);Object(s.useEffect)((function(){Ke===De&&(console.debug("Got display name round trip from api."),Be(null))}),[Ke,De]);var Le=Object(s.useCallback)((function(){Me(De),Re((function(e){return!e}))}),[De]),Fe=Object(s.useCallback)((function(){Ee!==De&&ze(Ee),Le()}),[De,Ee,ze,Le]),We=Object(s.useMemo)((function(){return{padding:"12px 24px"}}),[]),qe=$.bio,Ve=Object(s.useState)(!1),Ge=Object(i.a)(Ve,2),Je=Ge[0],$e=Ge[1],Ye=Object(s.useState)(qe),Qe=Object(i.a)(Ye,2),Ze=Qe[0],Xe=Qe[1],et=Object(s.useState)(null),tt=Object(i.a)(et,2),nt=tt[0],ct=tt[1],at=Object(s.useCallback)((function(e){""!==e&&(ct(e),h.b.put("/api/gun/me",{bio:e}).catch((function(e){ct(null),alert("There was an error setting a new bio: ".concat(e.message))})))}),[]);Object(s.useEffect)((function(){nt===qe&&(console.debug("Got bio round trip from api."),ct(null))}),[nt,qe]);var ot=Object(s.useCallback)((function(){Xe(qe),$e((function(e){return!e}))}),[qe]),it=Object(s.useCallback)((function(){Ze!==qe&&at(Ze),ot()}),[qe,Ze,at,ot]),st=Object(s.useMemo)((function(){return{padding:"12px 24px"}}),[]);return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"page-container profile-page",children:[Object(T.jsxs)("div",{className:"profile-container",children:[Object(T.jsx)("div",{className:"profile-cover",onClick:Ce,children:$.header&&Object(T.jsx)("img",{alt:"User set profile header.",src:"data:image/jpeg;base64,".concat($.header)})}),Object(T.jsxs)("div",{className:"profile-info-container",children:[Object(T.jsx)("div",{className:"profile-avatar",style:{height:"".concat(122,"px"),width:"".concat(122,"px")},children:Object(T.jsx)(y.a,{height:122,publicKey:I,setsAvatar:!0,greyBorder:!0})}),Object(T.jsxs)("div",{className:"profile-info",children:[Object(T.jsx)("p",{className:f()(v.x,"profile-name"),onClick:Le,children:Ke||De}),Object(T.jsx)("p",{className:f()(v.x,"profile-desc"),onClick:ot,children:nt||$.bio}),Object(T.jsxs)("div",{className:"config-btn",onClick:fe,children:[Object(T.jsx)("i",{className:"config-btn-icon icon-solid-spending-rule"}),Object(T.jsx)("p",{className:"config-btn-text",children:"Config"})]})]})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)(b.b,{to:"/goLive",className:"profile-choice-container",children:Object(T.jsxs)("div",{style:{backgroundColor:"red",color:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"0.2em 0.5em",borderRadius:"0.7em",fontSize:"16px",fontWeight:600},children:[Object(T.jsx)("i",{className:"fas fa-video"}),Object(T.jsx)("p",{children:"GO LIVE"})]})}),Object(T.jsxs)(b.b,{to:"/createPost",className:"profile-choice-container",children:[Object(T.jsx)("i",{className:"profile-choice-icon fas fa-pen-square"}),Object(T.jsx)("p",{className:"profile-choice-text",children:"Create Post"})]}),Object(T.jsxs)(b.b,{to:"/publishContent",className:"profile-choice-container",children:[Object(T.jsx)("i",{className:"profile-choice-icon fab fa-youtube"}),Object(T.jsx)("p",{className:"profile-choice-text",children:"Publish Content"})]}),Object(T.jsxs)("button",{className:"profile-choice-container",children:[Object(T.jsx)("i",{className:"profile-choice-icon fas fa-shopping-cart"}),Object(T.jsx)("p",{className:"profile-choice-text",children:"Offer a Product"})]}),Object(T.jsxs)(b.b,{to:"/offerService",className:"profile-choice-container",children:[Object(T.jsx)("i",{className:"profile-choice-icon fas fa-running"}),Object(T.jsx)("p",{className:"profile-choice-text",children:"Offer a Service"})]})]}),Object(T.jsx)(K.a,{onChange:be,selected:M}),Object(T.jsxs)("div",{className:"",children:["posts"===M&&Y.map((function(e,t){if("shared"===e.type){var n=R[e.sharerId]||p.d(e.sharerId),c=e.originalAuthor,a=R[c]||p.d(c);return Object(T.jsx)(s.Suspense,{fallback:Object(T.jsx)(C.a,{}),children:Object(T.jsx)(G,{originalPost:e.originalPost,originalPostProfile:a,sharedTimestamp:e.shareDate,sharerProfile:n,postPublicKey:c,openTipModal:function(){},openUnlockModal:function(){},openDeleteModal:ye})},e.sharerId+e.originalPost.id)}var o=R[e.authorId]||p.d(e.authorId);return Object(T.jsx)(s.Suspense,{fallback:Object(T.jsx)(C.a,{}),children:Object(T.jsx)(V,{id:e.id,timestamp:e.date,contentItems:e.contentItems,avatar:"data:image/jpeg;base64,".concat(null===o||void 0===o?void 0:o.avatar),username:Object(O.c)(null===o||void 0===o?void 0:o.publicKey,null===o||void 0===o?void 0:o.displayName),publicKey:e.authorId,openTipModal:function(){},openUnlockModal:function(){},tipCounter:0,tipValue:0,openDeleteModal:ye})},e.id)})),"services"===M&&(console.log(D),Object.entries(D).filter((function(e){var t=Object(i.a)(e,2);return t[0],!!t[1]})).map((function(t){var n=Object(i.a)(t,2),c=n[0],a=n[1];return Object(T.jsxs)("div",{className:"post",children:[Object(T.jsx)("strong",{children:"Service ID"}),Object(T.jsx)("p",{children:c}),Object(T.jsx)("strong",{children:"Service Tpe"}),Object(T.jsx)("p",{children:a.serviceType||""}),Object(T.jsx)("strong",{children:"Service Title"}),Object(T.jsx)("p",{children:a.serviceTitle||""}),Object(T.jsx)("strong",{children:"Service Description"}),Object(T.jsx)("p",{children:a.serviceDescription||""}),Object(T.jsx)("strong",{children:"Service Condition"}),Object(T.jsx)("p",{children:a.serviceCondition||""}),Object(T.jsx)("strong",{children:"Service Price"}),Object(T.jsx)("p",{children:a.servicePrice||""}),Object(T.jsx)("button",{onClick:function(){console.log("delete wtf"),Object(m.d)(c)(e)},children:"DELETE SERVICE"})]},c)})))]}),Object(T.jsx)(B.a,{amt:200}),Object(T.jsxs)(k.a,{toggleModal:Q,modalOpen:c,contentStyle:{padding:"40px 30px"},children:[Object(T.jsx)(d.a,{bgColor:"#23282d",fgColor:"#4285b9",value:I,size:180,className:"profile-qrcode"}),Object(T.jsx)("p",{className:"profile-qrcode-desc",children:"Other users can scan this code to contact you"}),!navigator.clipboard&&Object(T.jsx)("input",{className:"hidden-input",id:"public-key-holder",readOnly:!0,type:"text",value:I}),Object(T.jsxs)("div",{className:"profile-clipboard-container",onClick:we,children:[Object(T.jsx)("img",{src:z.a,className:"profile-clipboard-icon",alt:""}),Object(T.jsx)("p",{className:"profile-clipboard-text",children:"Tap to copy to clipboard"})]})]}),Object(T.jsxs)(k.a,{toggleModal:fe,modalOpen:ee,contentStyle:{padding:"2em 2em"},children:[Object(T.jsx)("label",{htmlFor:"new-web-client-prefix",children:"Web Client"}),Object(T.jsxs)("div",{className:"web-client-prefix-picker",children:[Object(T.jsx)("i",{className:"far fa-copy",onClick:ue,style:{fontSize:24}}),Object(T.jsx)("select",{onChange:function(e){le(e.target.value)},name:"new-web-client-prefix",id:"new-web-client-prefix",value:re,children:J.map((function(e){return Object(T.jsx)("option",{value:e,children:e},e)}))}),Object(T.jsx)("span",{children:"/"}),Object(T.jsx)("span",{style:{fontSize:12},children:I})]}),!navigator.clipboard&&Object(T.jsx)("input",{className:"hidden-input",id:"web-client-url-holder",readOnly:!0,type:"text",value:re+"/"+I}),Object(T.jsx)("br",{}),Object(T.jsx)("label",{htmlFor:"content-host",children:"Content Host"}),Object(T.jsx)(A,{}),Object(T.jsx)("br",{}),je&&Object(T.jsxs)("div",{className:"flex-center",style:{marginTop:"auto"},children:[Object(T.jsx)("button",{onClick:pe,className:"shock-form-button m-1",children:"CANCEL"}),Object(T.jsx)("button",{onClick:Oe,className:"shock-form-button-confirm m-1",children:"SUBMIT"})]})]}),Object(T.jsxs)(k.a,{toggleModal:ye,modalOpen:N,contentStyle:{padding:"2em 2em"},children:[Object(T.jsx)("div",{children:"You sure delete"}),Object(T.jsxs)("div",{className:"flex-center",style:{marginTop:"auto"},children:[Object(T.jsx)("button",{onClick:Ne,className:"shock-form-button m-1",children:"CANCEL"}),Object(T.jsx)("button",{onClick:Se,className:"shock-form-button-confirm m-1",children:"DELETE"})]})]}),Object(T.jsx)(g.a,{onClick:Q,large:!0,iconURL:L.a,style:{backgroundColor:"var(--yellow)"},icon:null,label:null})]}),Object(T.jsx)(x.a,{})]}),Object(T.jsx)("input",{type:"file",id:"avatar-file",ref:he,hidden:!0,accept:"image/*",onChange:ke}),Object(T.jsxs)(k.a,{contentStyle:We,modalOpen:Pe,toggleModal:Le,children:[Object(T.jsx)("label",{htmlFor:"newDisplayName",children:"Display Name"}),Object(T.jsx)("input",{autoCapitalize:"none",autoCorrect:"off",type:"text",className:"input-field",placeholder:"New display name",name:"newDisplayName",onChange:function(e){var t=e.target.value;Me(t)},value:Ee}),Ee!==De&&""!==Ee?Object(T.jsx)("button",{onClick:Fe,className:"shock-form-button-confirm m-1",children:"OK"}):Object(T.jsx)("button",{onClick:Le,className:"shock-form-button m-1",children:"GO BACK"})]}),Object(T.jsxs)(k.a,{contentStyle:st,modalOpen:Je,toggleModal:ot,children:[Object(T.jsx)("label",{htmlFor:"newBio",children:"New Bio"}),Object(T.jsx)("input",{autoCapitalize:"none",autoCorrect:"off",type:"text",className:"input-field",placeholder:"New bio",name:"newBio",onChange:function(e){var t=e.target.value;Xe(t)},value:Ze}),Ze!==qe&&""!==Ze?Object(T.jsx)("button",{onClick:it,className:"shock-form-button-confirm m-1",children:"OK"}):Object(T.jsx)("button",{onClick:ot,className:"shock-form-button m-1",children:"GO BACK"})]})]})}}}]);
//# sourceMappingURL=17.30428e94.chunk.js.map