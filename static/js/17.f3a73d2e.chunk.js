(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[17],{439:function(e,t,a){"use strict";var n=a(3),c=a(74),i=a.n(c),o=(a(447),a(4)),s=function(e){var t=e.children,a=e.style;return Object(o.jsx)("div",{className:"content",style:a,"data-v-e8dad75a":"",children:t})},r=(a(448),function(e){var t=e.title,a=e.toggleModal;return t?Object(o.jsxs)("div",{className:"head","data-v-05aabff0":"",children:[Object(o.jsx)("p",{className:"head-title","data-v-05aabff0":"",children:t}),Object(o.jsx)("div",{className:"head-close",onClick:a,"data-v-05aabff0":"",children:Object(o.jsx)("i",{className:"fas fa-times","data-v-05aabff0":""})})]}):null});a(449),t.a=function(e){var t=e.modalOpen,a=void 0!==t&&t,c=e.toggleModal,l=e.modalTitle,d=void 0===l?"":l,u=e.children,b=e.contentStyle,j=void 0===b?{}:b,f=Object(n.useCallback)((function(){c()}),[c]);return Object(o.jsxs)("div",{className:i()({modal:!0,open:a}),"data-v-d9432371":"",children:[Object(o.jsx)("div",{className:"backdrop",onClick:f,"data-v-d9432371":""}),Object(o.jsxs)("div",{className:"container","data-v-d9432371":"",children:[Object(o.jsx)(r,{title:d,toggleModal:f,"data-v-d9432371":""}),Object(o.jsx)(s,{style:j,"data-v-d9432371":"",children:u})]})]})}},447:function(e,t,a){},448:function(e,t,a){},449:function(e,t,a){},453:function(e,t,a){"use strict";var n=a(54),c=a(4);t.a=function(){return Object(c.jsxs)("div",{className:"bottom-nav-container",children:[Object(c.jsx)(n.c,{className:"bottom-nav-btn",to:"/overview",activeClassName:"active-nav-btn",children:Object(c.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-wallet"})}),Object(c.jsx)(n.c,{className:"bottom-nav-btn",to:"/chat",activeClassName:"active-nav-btn",children:Object(c.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-chat"})}),Object(c.jsx)(n.c,{className:"bottom-nav-btn",to:"/profile",activeClassName:"active-nav-btn",children:Object(c.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-profile"})}),Object(c.jsx)(n.c,{className:"bottom-nav-btn",to:"/feed",activeClassName:"active-nav-btn",children:Object(c.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-feed"})})]})}},457:function(e,t,a){"use strict";var n=a(12),c=a(3),i=a(74),o=a.n(i),s=(a(458),a(4));t.a=function(e){var t=e.label,a=void 0===t?null:t,i=e.icon,r=void 0===i?null:i,l=e.iconURL,d=void 0===l?null:l,u=e.onClick,b=void 0===u?void 0:u,j=e.nestedMode,f=void 0!==j&&j,p=e.large,v=void 0!==p&&p,O=e.small,h=void 0!==O&&O,m=e.relative,x=void 0!==m&&m,g=e.children,k=void 0===g?null:g,y=e.style,C=void 0===y?{}:y,N=Object(c.useState)(!1),S=Object(n.a)(N,2),w=S[0],_=S[1],I=Object(c.useCallback)((function(){f&&_(!w)}),[w,f]),P=Object(c.useMemo)((function(){return d?Object(s.jsx)("img",{src:d,className:"add-btn-icon",alt:"","data-v-002f6dbc":""}):Object(s.jsx)("i",{className:"fas fa-".concat(null!==r&&void 0!==r?r:"plus"),"data-v-002f6dbc":""})}),[r,d]),R=Object(c.useMemo)((function(){return a?Object(s.jsx)("p",{className:"add-btn-label","data-v-002f6dbc":"",children:a}):null}),[a]);return Object(s.jsxs)("div",{className:o()({"add-btn-container":!0,"add-btn-round-container":!a,"add-btn-large":v,"add-btn-small":h}),"data-v-002f6dbc":"",children:[Object(s.jsxs)("div",{className:o()({"add-btn":!0,"add-btn-round":!a,"add-btn-extended":!!a,"add-btn-relative":x,"add-btn-open":w,"add-btn-nested":f}),onClick:null!==b&&void 0!==b?b:I,style:C,"data-v-002f6dbc":"",children:[P,R]}),k?Object(s.jsx)("div",{className:o()({"add-btn-options":!0,"add-btn-options-open":w}),"data-v-002f6dbc":"",children:k}):null]})}},458:function(e,t,a){},463:function(e,t,a){"use strict";var n=a(3),c=a(4);t.a=function(e){var t=e.color,a=e.length,i=e.type,o=e.width,s=Object(n.useMemo)((function(){return"vertical"===i?{borderLeftStyle:"solid",borderLeftWidth:"".concat(o/2,"px"),borderLeftColor:t,borderRightStyle:"solid",borderRightWidth:"".concat(o/2,"px"),borderRightColor:t,height:a}:"horizontal"===i?{borderTopStyle:"solid",borderTopWidth:o/2,borderTopColor:t,borderBottomStyle:"solid",borderBottomWidth:o/2,borderBottomColor:t,width:a}:{}}),[t,a,i,o]);return Object(c.jsx)("div",{style:s})}},475:function(e,t,a){"use strict";var n=a(74),c=a.n(n),i=a(440),o=a(463),s=a(476),r=a.n(s),l=a(4);t.a=function(e){var t=e.onChange,a=e.selected;return Object(l.jsxs)("div",{className:c()(i.C,i.y,i.z,i.v,r.a.container),children:[Object(l.jsx)("span",{className:c()(i.B,"posts"===a&&r.a.selected,"services"===a&&r.a.unselected),onClick:function(){t("posts")},children:"Posts"}),Object(l.jsx)("div",{className:i.a,children:Object(l.jsx)(o.a,{color:"white",length:16,type:"vertical",width:2})}),Object(l.jsx)("span",{className:c()(i.B,"services"===a&&r.a.selected,"posts"===a&&r.a.unselected),onClick:function(){t("services")},children:"Services"})]})}},476:function(e,t,a){e.exports={container:"ProfileDivider_container__3ob9k",selected:"ProfileDivider_selected__3U98y",unselected:"ProfileDivider_unselected__1Z_qd",divider:"ProfileDivider_divider__1IzYV"}},477:function(e,t,a){"use strict";t.a=a.p+"static/media/clipboard.beb19e1e.svg"},478:function(e,t,a){"use strict";t.a=a.p+"static/media/qrcode.69103c6c.svg"},585:function(e,t,a){e.exports={container:"ContentHostInputView_container__1CVAn","uri-or-token-input":"ContentHostInputView_uri-or-token-input__3vg5h","plus-or-paste-btn":"ContentHostInputView_plus-or-paste-btn__3z_k0"}},586:function(e,t,a){e.exports={"container-base":"Host_container-base__r5EJP","remove-or-cancel":"Host_remove-or-cancel__2sHhe Host_container-base__r5EJP",container:"Host_container__2hPww Host_container-base__r5EJP",pill:"Host_pill__1WzlY","display-name-or-uri":"Host_display-name-or-uri__2eaUy","price-and-status":"Host_price-and-status__3Q4n3",price:"Host_price__2oEgL",red:"Host_red__1kS00",yellow:"Host_yellow__3DLEG",blue:"Host_blue__3m2Kb"}},587:function(e,t,a){},720:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),i=a(6),o=a(12),s=a(3),r=a.n(s),l=a(41),d=a(474),u=a.n(d),b=a(54),j=a(74),f=a.n(j),p=a(24),v=a(91),O=a(46),h=a(101),m=a(440),x=a(453),g=a(457),k=a(439),y=a(148),C=a(442),N=a(21),S=a(13),w=a(49),_=a(50),I=a(585),P=a.n(I),R=a(586),D=a.n(R),U=a(4),T=function(e){var t=e.error,a=e.isBeingAddedOrDeleted,n=e.isDefault,c=e.onClickRemove,i=e.onClickWarning,r=e.price,l=e.publicKey,d=e.URI,u=S.useSelector(S.selectUser(l)),b=Object(s.useState)(!1),j=Object(o.a)(b,2),v=j[0],O=j[1],h=Object(s.useCallback)((function(){O((function(e){return!e}))}),[]),x=Object(s.useCallback)((function(){i(l||d)}),[i,l,d]),g=Object(s.useCallback)((function(){c(l||d)}),[c,l,d]),k=t&&a||l&&d||!l&&!d,y=t;return k&&(y="Malformed host provided to <Host />, it must have either a public key or an URI (though not both), and it must not have both truthy error and isAdding props at the same time: ".concat(JSON.stringify(k))),v?Object(U.jsxs)("div",{className:f()(m.y,m.d,m.C),children:[Object(U.jsx)("button",{onClick:g,className:f()(m.n),children:"Remove"}),Object(U.jsx)("button",{onClick:h,className:f()(m.n),children:"Cancel"})]}):Object(U.jsxs)("div",{className:f()(m.y,m.A,m.f,D.a.container),children:[Object(U.jsxs)("div",{className:f()(m.y,m.A,m.g,D.a.pill),children:[l?Object(U.jsx)(C.a,{height:24,publicKey:l}):Object(U.jsx)("i",{className:f()("fas fa-globe")}),Object(U.jsx)("span",{className:D.a["display-name-or-uri"],children:d&&d.toLowerCase()||u.displayName||p.f(l)}),a||y?Object(U.jsx)("div",{}):Object(U.jsx)("span",{className:"fas fa-times",onClick:h,style:{fontSize:12}})]}),Object(U.jsxs)("div",{className:f()(m.o,m.f,D.a["price-and-status"]),children:[Object(U.jsxs)("span",{className:f()(m.o,D.a.price),children:[r," sats"]}),y?Object(U.jsx)("i",{className:f()("fas fa-exclamation-triangle",m.p,D.a.yellow),onClick:x}):a?Object(U.jsx)("i",{className:f()("fas fa-hourglass-half",m.p,D.a.yellow)}):n?Object(U.jsx)("i",{className:f()("fas fa-check",m.p,D.a.blue)}):Object(U.jsx)("i",{className:f()("fas fa-link",m.p,D.a.blue)})]})]})},E=f()(m.y,m.C,m.d,m.e,m.v),M=function(e){var t,a=e.hosts,n=e.onAddHost,c=e.onRemoveHost,i=e.onRetryHost,r=Object(s.useState)({publicKeyOrServerURI:"",URIHostAwaitingForToken:""}),l=Object(o.a)(r,2),d=l[0],u=d.publicKeyOrServerURI,b=d.URIHostAwaitingForToken,j=l[1],p=Object(s.useState)(""),v=Object(o.a)(p,2),h=v[0],x=v[1],g=Object(s.useState)(!1),y=Object(o.a)(g,2),C=y[0],S=y[1],w=Object(s.useRef)(null),I=Object(s.useState)(!1),R=Object(o.a)(I,2),D=R[0],M=R[1],A=Object(s.useState)(""),H=Object(o.a)(A,2),K=H[0],B=H[1],z=Object(s.useRef)(null),L=Object(s.useState)(!1),F=Object(o.a)(L,2),W=F[0],V=F[1],q=Object(s.useMemo)((function(){return a.slice().sort((function(e,t){return t.dateAdded-e.dateAdded}))}),[a]),G=Object(s.useMemo)((function(){return q.filter((function(e){return e.isDefault}))}),[q]),J=Object(s.useMemo)((function(){return q.filter((function(e){return!e.isDefault}))}),[q]),Y=Object(s.useMemo)((function(){return[].concat(Object(N.a)(G),Object(N.a)(J))}),[G,J]),$=Object(s.useCallback)((function(){S(!0)}),[]),Q=Object(s.useCallback)((function(){D||(navigator.clipboard?(M(!0),navigator.clipboard.readText().then((function(e){j(Object(_.a)((function(t){t.publicKeyOrServerURI=e})))})).catch((function(e){alert("Could not paste: ".concat(e.message))})).finally((function(){M(!1)}))):w.current&&(w.current.focus(),document.execCommand("paste"),w.current.blur()))}),[D,M]),Z=Object(s.useCallback)((function(){j(Object(_.a)((function(e){var t=O.e(e.publicKeyOrServerURI);t&&(e.publicKeyOrServerURI=t,e.URIHostAwaitingForToken=t)}))),O.e(u)||n(u)}),[j,u,n]),X=Object(s.useCallback)((function(){W||(navigator.clipboard?(V(!0),navigator.clipboard.readText().then((function(e){B(e)})).catch((function(e){alert("Could not paste: ".concat(e.message))})).finally((function(){V(!1)}))):z.current&&(z.current.focus(),document.execCommand("paste"),z.current.blur()))}),[W,V,B]),ee=Object(s.useCallback)((function(){j(Object(_.a)((function(e){e.publicKeyOrServerURI="",e.URIHostAwaitingForToken=""}))),n(u,K)}),[j,n,u,K]),te=Object(s.useCallback)((function(e){c(e)}),[c]),ae=Object(s.useCallback)((function(){x("")}),[x]),ne=Object(s.useCallback)((function(){c(h),ae()}),[c,h,ae]),ce=Object(s.useCallback)((function(){i(h),x("")}),[i,h,x]);return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)("div",{className:f()(m.h,m.C,P.a.container),children:[Object(U.jsxs)("div",{className:(m.x,m.d),children:[Object(U.jsx)("input",{className:f()("input-field",P.a["uri-or-token-input"]),onChange:function(e){j(Object(_.a)((function(t){t.publicKeyOrServerURI=e.target.value,t.URIHostAwaitingForToken=""}))),B("")},type:"text",value:u,onKeyUp:function(e){"Enter"!==e.key&&13!==e.keyCode||Z()},autoCapitalize:"off",autoCorrect:"none",placeholder:"Provider Pubkey or Server URI (include https or http)",ref:w,onFocus:$}),0===u.length&&Object(U.jsx)("button",{className:f()(m.m,P.a["plus-or-paste-btn"]),disabled:D,onClick:Q,children:Object(U.jsx)("i",{className:"fas fa-paste"})}),u.length>0&&u!==b&&Object(U.jsx)("button",{className:f()(m.m,P.a["plus-or-paste-btn"]),disabled:0===u.length,onClick:Z,children:"+"})]}),u.length>0&&u===b&&Object(U.jsxs)("div",{className:(m.x,m.d),children:[Object(U.jsx)("input",{className:f()("input-field",P.a["uri-or-token-input"]),onChange:function(e){B(e.target.value)},type:"text",value:K,onKeyUp:function(e){"Enter"!==e.key&&13!==e.keyCode||ee()},autoCapitalize:"off",autoCorrect:"none",placeholder:"Token (required)",ref:z}),0===K.length&&Object(U.jsx)("button",{className:f()(m.m,P.a["plus-or-paste-btn"]),disabled:W,onClick:X,children:Object(U.jsx)("i",{className:"fas fa-paste"})}),K.length>0&&Object(U.jsx)("button",{className:f()(m.m,P.a["plus-or-paste-btn"]),disabled:0===K.length,onClick:ee,children:"+"})]}),Object(U.jsx)("div",{className:f()(m.h),children:(C?Y:G).map((function(e){return Object(U.jsx)(T,{URI:e.URI,dateAdded:0,error:e.error,isBeingAddedOrDeleted:e.isBeingAddedOrDeleted,isDefault:e.isDefault,onClickRemove:te,onClickWarning:x,price:e.price,publicKey:e.publicKey,token:e.token},e.publicKey||e.URI)}))})]}),Object(U.jsx)(k.a,{modalOpen:!!h,modalTitle:null===(t=Y.find((function(e){return e.publicKey===h||e.URI===h})))||void 0===t?void 0:t.error,toggleModal:ae,children:Object(U.jsxs)("div",{className:E,children:[Object(U.jsx)("button",{onClick:ne,className:"shock-form-button m-1",children:"REMOVE"}),Object(U.jsx)("button",{onClick:ce,className:"shock-form-button-confirm m-1",children:"RETRY"})]})})]})},A=a(32),H=function(){var e=Object(l.b)(),t=S.useSelector((function(e){return e.content.seedProviderPub})),a=S.useSelector((function(e){return e.userProfiles})),n=S.useSelector((function(e){return e.content.seedInfo})),c=n.seedUrl,i=n.seedToken,r=Object(s.useState)([]),d=Object(o.a)(r,2),u=d[0],b=d[1],j=Object(s.useState)(null),f=Object(o.a)(j,2),p=f[0],v=f[1],h=Object(s.useState)(""),m=Object(o.a)(h,2),x=m[0],g=m[1],k=Object(s.useState)(0),y=Object(o.a)(k,2),C=y[0],_=y[1],I=Object(s.useState)(""),P=Object(o.a)(I,2),R=P[0],D=P[1];Object(s.useEffect)((function(){var e=a[t];e?p&&e.avatar===p.avatar&&e.SeedServiceProvided===p.SeedServiceProvided||v(e):v(null)}),[a,t,p,v]),Object(s.useEffect)((function(){if(p){var e=p.SeedServiceProvided;e!==x&&g(e)}}),[p,x,g]),Object(s.useEffect)((function(){var e=[];c&&i&&e.push({URI:c,token:i,price:0,isBeingAddedOrDeleted:!1,dateAdded:Date.now(),isDefault:!0,error:null,publicKey:null}),t&&p&&e.push({dateAdded:Date.now(),isBeingAddedOrDeleted:!0,isDefault:!0,publicKey:t,price:0,URI:null,token:null,error:null}),b(e)}),[c,i,t,p,b]),Object(s.useEffect)((function(){x&&O.b.get("/api/gun/otheruser/".concat(t,"/load/offeredServices>").concat(x)).then((function(e){var t=e.data.data;_(t.servicePrice)})).catch((function(e){D(e)}))}),[x,t,_,D]),Object(s.useEffect)((function(){var e=Object(N.a)(u),t=e.findIndex((function(e){return!e.URI}));-1!==t&&e[t].price!==C&&(e[t].isBeingAddedOrDeleted=!1,e[t].price=C,b(e))}),[C,_,u,b]),Object(s.useEffect)((function(){var e=R.message||R,t=Object(N.a)(u),a=t.findIndex((function(e){return!e.URI}));-1!==a&&e!==t[a].error&&(t[a].isBeingAddedOrDeleted=!1,t[a].error=e,b(t))}),[R,D,u,b]);var T=Object(s.useCallback)((function(t,a){t.startsWith("http")?Object(A.j)(t,a)(e):Object(A.k)(t)(e)}),[e]),E=Object(s.useCallback)((function(t){t.startsWith("http")?Object(A.j)("","")(e):Object(A.k)("")(e)}),[e]);Object(s.useEffect)((function(){return e(Object(w.b)(t))}),[t,e]);var H=Object(s.useMemo)((function(){return u.filter((function(e){return e}))}),[u]);return Object(U.jsx)(M,{hosts:H,onAddHost:T,onRemoveHost:E,onRetryHost:function(){}})},K=a(475),B=a(441),z=a(477),L=a(478),F=a(19),W=(a(587),a(52)),V=a(53),q=a(35),G=r.a.lazy((function(){return Promise.all([a.e(1),a.e(5)]).then(a.bind(null,502))})),J=r.a.lazy((function(){return Promise.all([a.e(1),a.e(2),a.e(3),a.e(8)]).then(a.bind(null,708))})),Y=["https://shock.pub","https://shock.page","https://lightning.page","https://satoshi.watch"];t.default=function(){var e=Object(l.b)(),t=Object(s.useState)(!1),a=Object(o.a)(t,2),n=a[0],r=a[1],d=Object(s.useState)(null),j=Object(o.a)(d,2),N=j[0],w=j[1],_=S.useSelector((function(e){return e.feed.posts})),I=S.useSelector((function(e){return e.node.publicKey})),P=S.useSelector((function(e){return e.node.hostIP})),R=S.useSelector((function(e){return e.userProfiles})),D=S.useSelector((function(e){return e.orders.myServices})),T=Object(s.useState)("posts"),E=Object(o.a)(T,2),M=E[0],A=E[1],$=Object(l.c)(S.selectSelfUser),Q=Object(s.useMemo)((function(){return _&&_[I]?_[I].sort((function(e,t){var a=Object(V.c)(e)?e.shareDate:e.date;return(Object(V.c)(t)?t.shareDate:t.date)-a})):[]}),[_,I]);Object(s.useEffect)((function(){var t=Object(h.e)()(e);return Object(F.f)(t)}),[e]),Object(s.useEffect)((function(){var t=e(Object(W.f)(I)),a=e(Object(W.e)(I));return Object(F.f)(t,a)}),[e,I]);var Z=Object(s.useCallback)((function(){r(!n)}),[n]),X=Object(s.useState)(!1),ee=Object(o.a)(X,2),te=ee[0],ae=ee[1],ne=S.useSelector((function(e){return e.node.webClientPrefix})),ce=Object(s.useState)(ne),ie=Object(o.a)(ce,2),oe=ie[0],se=ie[1],re=Object(s.useCallback)((function(){if(navigator.clipboard)navigator.clipboard.writeText(oe+"/"+I);else{var e=document.querySelector("#web-client-url-holder");e.style.display="block",e.select(),document.execCommand("copy"),e.blur(),e.style.display="none"}}),[oe,I]),le=Object(s.useCallback)((function(){console.debug("Subbing to webclient prefix on hostIP --| ".concat(P," |-- and public key --| ").concat(I," |--"));var t=Object(F.e)({query:"$user::Profile>webClientPrefix::on",onData:function(t){"string"===typeof t&&t!==ne&&Object(q.e)(t)(e)},onError:function(e){console.error("There was an error fetching web client prefix: ".concat(e))}});return Object(F.f)(t)}),[P,I]);Object(s.useEffect)((function(){return le()}),[le]);var de=Object(s.useCallback)((function(e){A(e)}),[]),ue=oe!==ne,be=Object(s.useCallback)((function(){ae((function(e){return!e})),se(ne)}),[ne]),je=Object(s.useCallback)((function(){be()}),[be]),fe=Object(s.useCallback)((function(){oe!==ne&&(Object(q.e)(oe)(e),O.b.post("/api/gun/put",{path:"$user>Profile>webClientPrefix",value:oe}).catch((function(e){alert("There was an error setting your web client prefix: ".concat(e.message))}))),be()}),[be,oe,ne]),pe=Object(s.useRef)(null),ve=Object(s.useState)(!1),Oe=Object(o.a)(ve,2),he=Oe[0],me=Oe[1],xe=function(){var e=Object(i.a)(c.a.mark((function e(t){var a,n,i,s,r,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.preventDefault(),!he){e.next=4;break}return e.abrupt("return");case 4:if(me(!0),a=t.target,0!==(n=a.files).length){e.next=8;break}return e.abrupt("return");case 8:if(1===n.length){e.next=12;break}return O.d.error("Profile -> files.length !== 1"),alert("An error occurred while trying to set a header. This has been logged."),e.abrupt("return");case 12:return i=Object(o.a)(n,1),s=i[0],e.next=15,O.g(s,320,.7);case 15:return r=e.sent,"data:image/jpeg;base64,",l=r.slice("data:image/jpeg;base64,".length),e.next=20,O.b.post("/api/gun/put",{path:"$user>profileBinary>header",value:l});case 20:e.next=27;break;case 22:e.prev=22,e.t0=e.catch(0),O.d.error("Error while trying to load new header."),O.d.error(e.t0),alert("There was an error loading the new header, this has error has been logged.");case 27:return e.prev=27,me(!1),e.finish(27);case 30:case"end":return e.stop()}}),e,null,[[0,22,27,30]])})));return function(t){return e.apply(this,arguments)}}(),ge=Object(s.useCallback)((function(e){e.preventDefault();var t=pe.current;t||(O.d.error("File input element for avatar is falsy."),alert("There was an error and it was logged.")),t.click()}),[]),ke=Object(s.useCallback)((function(e){console.log(e),!N&&e||w(null),w(e)}),[N]),ye=Object(s.useCallback)((function(){w(null)}),[]),Ce=Object(s.useCallback)(Object(i.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,N&&N.id){t.next=3;break}return t.abrupt("return");case 3:return console.log("deleting:"),console.log(N),a=N.shared?"sharedPosts":"posts",t.next=8,O.b.post("/api/gun/put",{path:"$user>".concat(a,">").concat(N.id),value:null});case 8:e(Object(W.b)({id:N.id,authorId:I})),ke(null),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),console.log("Error when deleting post:"),console.log(t.t0),alert("Could not delete post: ".concat(t.t0.message));case 17:case"end":return t.stop()}}),t,null,[[0,12]])}))),[N,e,I,ke]),Ne=Object(s.useCallback)((function(){try{if(navigator.clipboard){var e="".concat(ne,"/").concat(I);navigator.clipboard.writeText(e)}else{var t=document.querySelector("#public-key-holder");t.style.display="block",t.select(),document.execCommand("copy"),t.blur(),t.style.display="none",r(!1)}}catch(a){alert("Could not copy to clipboard: ".concat(a.message))}}),[I]),Se=Object(s.useState)(!1),we=Object(o.a)(Se,2),_e=we[0],Ie=we[1],Pe=$.displayName,Re=Object(s.useState)($.displayName||"Anon"),De=Object(o.a)(Re,2),Ue=De[0],Te=De[1],Ee=Object(s.useState)(null),Me=Object(o.a)(Ee,2),Ae=Me[0],He=Me[1],Ke=Object(s.useCallback)((function(e){""!==e&&(He(e),O.b.put("/api/gun/me",{displayName:e}).catch((function(e){He(null),alert("There was an error setting a new display name: ".concat(e.message))})))}),[]);Object(s.useEffect)((function(){Ae===Pe&&(console.debug("Got display name round trip from api."),He(null))}),[Ae,Pe]);var Be=Object(s.useCallback)((function(){Te(Pe),Ie((function(e){return!e}))}),[Pe]),ze=Object(s.useCallback)((function(){Ue!==Pe&&Ke(Ue),Be()}),[Pe,Ue,Ke,Be]),Le=Object(s.useMemo)((function(){return{padding:"12px 24px"}}),[]),Fe=$.bio,We=Object(s.useState)(!1),Ve=Object(o.a)(We,2),qe=Ve[0],Ge=Ve[1],Je=Object(s.useState)(Fe||"bio"),Ye=Object(o.a)(Je,2),$e=Ye[0],Qe=Ye[1],Ze=Object(s.useState)(null),Xe=Object(o.a)(Ze,2),et=Xe[0],tt=Xe[1],at=Object(s.useCallback)((function(e){""!==e&&(tt(e),O.b.put("/api/gun/me",{bio:e}).catch((function(e){tt(null),alert("There was an error setting a new bio: ".concat(e.message))})))}),[]);Object(s.useEffect)((function(){et===Fe&&(console.debug("Got bio round trip from api."),tt(null))}),[et,Fe]);var nt=Object(s.useCallback)((function(){Qe(Fe),Ge((function(e){return!e}))}),[Fe]),ct=Object(s.useCallback)((function(){$e!==Fe&&at($e),nt()}),[Fe,$e,at,nt]),it=Object(s.useMemo)((function(){return{padding:"12px 24px"}}),[]);return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)("div",{className:"page-container profile-page","data-v-81a54921":"",children:[Object(U.jsxs)("div",{className:"profile-container no-scrollbar","data-v-81a54921":"",children:[Object(U.jsx)("div",{className:"profile-cover",onClick:ge,"data-v-81a54921":"",children:$.header&&Object(U.jsx)("img",{alt:"User set profile header.",src:"data:image/jpeg;base64,".concat($.header),"data-v-81a54921":""})}),Object(U.jsxs)("div",{className:"profile-info-container","data-v-81a54921":"",children:[Object(U.jsx)("div",{className:"profile-avatar",style:{height:"".concat(122,"px"),width:"".concat(122,"px")},"data-v-81a54921":"",children:Object(U.jsx)(C.a,{height:122,publicKey:I,setsAvatar:!0,greyBorder:!0,disableOnlineRing:!0,"data-v-81a54921":""})}),Object(U.jsxs)("div",{className:"profile-info","data-v-81a54921":"",children:[Object(U.jsx)("p",{className:f()(m.B,"profile-name"),onClick:Be,"data-v-81a54921":"",children:Ae||Pe}),Object(U.jsx)("p",{className:f()(m.B,"profile-desc"),onClick:nt,"data-v-81a54921":"",children:et||$.bio}),Object(U.jsxs)("div",{className:"config-btn",onClick:be,"data-v-81a54921":"",children:[Object(U.jsx)("i",{className:"config-btn-icon icon-solid-spending-rule","data-v-81a54921":""}),Object(U.jsx)("p",{className:"config-btn-text","data-v-81a54921":"",children:"Config"})]})]})]}),Object(U.jsxs)("div",{"data-v-81a54921":"",children:[Object(U.jsx)(b.b,{to:"/goLive",className:"profile-choice-container","data-v-81a54921":"",children:Object(U.jsxs)("div",{style:{backgroundColor:"red",color:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"0.2em 0.5em",borderRadius:"0.7em",fontSize:"16px",fontWeight:600},"data-v-81a54921":"",children:[Object(U.jsx)("i",{className:"fas fa-video","data-v-81a54921":""}),Object(U.jsx)("p",{"data-v-81a54921":"",children:"GO LIVE"})]})}),Object(U.jsxs)(b.b,{to:"/createPost",className:"profile-choice-container","data-v-81a54921":"",children:[Object(U.jsx)("i",{className:"profile-choice-icon fas fa-pen-square","data-v-81a54921":""}),Object(U.jsx)("p",{className:"profile-choice-text","data-v-81a54921":"",children:"Create Post"})]}),Object(U.jsxs)(b.b,{to:"/publishContent",className:"profile-choice-container","data-v-81a54921":"",children:[Object(U.jsx)("i",{className:"profile-choice-icon fab fa-youtube","data-v-81a54921":""}),Object(U.jsx)("p",{className:"profile-choice-text","data-v-81a54921":"",children:"Publish Content"})]}),Object(U.jsxs)("button",{className:"profile-choice-container","data-v-81a54921":"",children:[Object(U.jsx)("i",{className:"profile-choice-icon fas fa-shopping-cart","data-v-81a54921":""}),Object(U.jsx)("p",{className:"profile-choice-text","data-v-81a54921":"",children:"Offer a Product"})]}),Object(U.jsxs)(b.b,{to:"/offerService",className:"profile-choice-container","data-v-81a54921":"",children:[Object(U.jsx)("i",{className:"profile-choice-icon fas fa-running","data-v-81a54921":""}),Object(U.jsx)("p",{className:"profile-choice-text","data-v-81a54921":"",children:"Offer a Service"})]})]}),Object(U.jsx)(K.a,{onChange:de,selected:M,"data-v-81a54921":""}),Object(U.jsxs)("div",{className:"","data-v-81a54921":"",children:["posts"===M&&Q.map((function(e,t){if("shared"===e.type){if(!e.originalPost)return null;var a,n,c=Object.entries(e.originalPost.contentItems).find((function(e){var t=Object(o.a)(e,2);return t[0],"stream/embedded"===t[1].type}));if(c){var i=Object(o.a)(c,2);a=i[0],n=i[1]}if(n){if(!n.liveStatus)return;if("waiting"===n.liveStatus)return;if("wasLive"===n.liveStatus){if(!n.playbackMagnet)return;e.originalPost.contentItems[a].type="video/embedded",e.originalPost.contentItems[a].magnetURI=n.playbackMagnet}}var r=R[e.sharerId]||p.e(e.sharerId),l=e.originalAuthor,d=R[l]||p.e(l);return Object(U.jsx)(s.Suspense,{fallback:Object(U.jsx)(y.a,{"data-v-81a54921":""}),"data-v-81a54921":"",children:Object(U.jsx)(J,{originalPost:e.originalPost,originalPostProfile:d,sharedTimestamp:e.shareDate,sharerProfile:r,postPublicKey:l,openTipModal:function(){},openUnlockModal:function(){},openDeleteModal:ke,openShareModal:null,"data-v-81a54921":""})},e.sharerId+e.originalPost.id)}var u,b,j=Object.entries(e.contentItems).find((function(e){var t=Object(o.a)(e,2);return t[0],"stream/embedded"===t[1].type}));if(j){var f=Object(o.a)(j,2);u=f[0],b=f[1]}if(b){if(!b.liveStatus)return;if("waiting"===b.liveStatus)return;if("wasLive"===b.liveStatus){if(!b.playbackMagnet)return;e.contentItems[u].type="video/embedded",e.contentItems[u].magnetURI=b.playbackMagnet}}var O=R[e.authorId]||p.e(e.authorId);return Object(U.jsx)(s.Suspense,{fallback:Object(U.jsx)(y.a,{"data-v-81a54921":""}),"data-v-81a54921":"",children:Object(U.jsx)(G,{id:e.id,timestamp:e.date,contentItems:e.contentItems,username:Object(v.c)(null===O||void 0===O?void 0:O.publicKey,null===O||void 0===O?void 0:O.displayName),publicKey:e.authorId,openTipModal:function(){},openUnlockModal:function(){},tipCounter:e.tipCounter||0,tipValue:e.tipValue||0,openDeleteModal:ke,openShareModal:null,"data-v-81a54921":""})},e.id)})),"services"===M&&(console.log(D),Object.entries(D).filter((function(e){var t=Object(o.a)(e,2);return t[0],!!t[1]})).map((function(t){var a=Object(o.a)(t,2),n=a[0],c=a[1];return Object(U.jsxs)("div",{className:"post","data-v-81a54921":"",children:[Object(U.jsx)("strong",{"data-v-81a54921":"",children:"Service ID"}),Object(U.jsx)("p",{"data-v-81a54921":"",children:n}),Object(U.jsx)("strong",{"data-v-81a54921":"",children:"Service Tpe"}),Object(U.jsx)("p",{"data-v-81a54921":"",children:c.serviceType||""}),Object(U.jsx)("strong",{"data-v-81a54921":"",children:"Service Title"}),Object(U.jsx)("p",{"data-v-81a54921":"",children:c.serviceTitle||""}),Object(U.jsx)("strong",{"data-v-81a54921":"",children:"Service Description"}),Object(U.jsx)("p",{"data-v-81a54921":"",children:c.serviceDescription||""}),Object(U.jsx)("strong",{"data-v-81a54921":"",children:"Service Condition"}),Object(U.jsx)("p",{"data-v-81a54921":"",children:c.serviceCondition||""}),Object(U.jsx)("strong",{"data-v-81a54921":"",children:"Service Price"}),Object(U.jsx)("p",{"data-v-81a54921":"",children:c.servicePrice||""}),Object(U.jsx)("button",{onClick:function(){console.log("delete wtf"),Object(h.d)(n)(e)},"data-v-81a54921":"",children:"DELETE SERVICE"})]},n)})))]}),Object(U.jsx)(B.a,{amt:200,"data-v-81a54921":""}),Object(U.jsxs)(k.a,{toggleModal:Z,modalOpen:n,contentStyle:{padding:"40px 30px"},"data-v-81a54921":"",children:[Object(U.jsx)(u.a,{bgColor:"#23282d",fgColor:"#4285b9",value:"".concat(ne,"/").concat(I),size:180,className:"profile-qrcode","data-v-81a54921":""}),Object(U.jsx)("p",{className:"profile-qrcode-desc","data-v-81a54921":"",children:"Other users can scan this code to contact you"}),!navigator.clipboard&&Object(U.jsx)("input",{className:"hidden-input",id:"public-key-holder",readOnly:!0,type:"text",value:"".concat(ne,"/").concat(I),"data-v-81a54921":""}),Object(U.jsxs)("div",{className:"profile-clipboard-container",onClick:Ne,"data-v-81a54921":"",children:[Object(U.jsx)("img",{src:z.a,className:"profile-clipboard-icon",alt:"","data-v-81a54921":""}),Object(U.jsx)("p",{className:"profile-clipboard-text","data-v-81a54921":"",children:"Tap to copy to clipboard"})]})]}),Object(U.jsxs)(k.a,{toggleModal:be,modalOpen:te,contentStyle:{padding:"2em 2em"},"data-v-81a54921":"",children:[Object(U.jsx)("label",{htmlFor:"new-web-client-prefix","data-v-81a54921":"",children:"Web Client"}),Object(U.jsxs)("div",{className:"web-client-prefix-picker","data-v-81a54921":"",children:[Object(U.jsx)("i",{className:"far fa-copy",onClick:re,style:{fontSize:24},"data-v-81a54921":""}),Object(U.jsx)("select",{onChange:function(e){se(e.target.value)},name:"new-web-client-prefix",id:"new-web-client-prefix",value:oe,"data-v-81a54921":"",children:Y.map((function(e){return Object(U.jsx)("option",{value:e,"data-v-81a54921":"",children:e},e)}))}),Object(U.jsx)("span",{"data-v-81a54921":"",children:"/"}),Object(U.jsx)("span",{style:{fontSize:12},"data-v-81a54921":"",children:I})]}),!navigator.clipboard&&Object(U.jsx)("input",{className:"hidden-input",id:"web-client-url-holder",readOnly:!0,type:"text",value:oe+"/"+I,"data-v-81a54921":""}),Object(U.jsx)("br",{"data-v-81a54921":""}),Object(U.jsx)("label",{htmlFor:"content-host","data-v-81a54921":"",children:"Content Host"}),Object(U.jsx)(H,{"data-v-81a54921":""}),Object(U.jsx)("br",{"data-v-81a54921":""}),ue&&Object(U.jsxs)("div",{className:"flex-center",style:{marginTop:"auto"},"data-v-81a54921":"",children:[Object(U.jsx)("button",{onClick:je,className:"shock-form-button m-1","data-v-81a54921":"",children:"CANCEL"}),Object(U.jsx)("button",{onClick:fe,className:"shock-form-button-confirm m-1","data-v-81a54921":"",children:"SUBMIT"})]})]}),Object(U.jsxs)(k.a,{toggleModal:ke,modalOpen:N,contentStyle:{padding:"2em 2em"},"data-v-81a54921":"",children:[Object(U.jsx)("div",{"data-v-81a54921":"",children:"You sure delete"}),Object(U.jsxs)("div",{className:"flex-center",style:{marginTop:"auto"},"data-v-81a54921":"",children:[Object(U.jsx)("button",{onClick:ye,className:"shock-form-button m-1","data-v-81a54921":"",children:"CANCEL"}),Object(U.jsx)("button",{onClick:Ce,className:"shock-form-button-confirm m-1","data-v-81a54921":"",children:"DELETE"})]})]}),Object(U.jsx)(g.a,{onClick:Z,large:!0,iconURL:L.a,icon:null,label:null,"data-v-81a54921":""})]}),Object(U.jsx)(x.a,{"data-v-81a54921":""})]}),Object(U.jsx)("input",{type:"file",id:"avatar-file",ref:pe,hidden:!0,accept:"image/*",onChange:xe,"data-v-81a54921":""}),Object(U.jsxs)(k.a,{contentStyle:Le,modalOpen:_e,toggleModal:Be,"data-v-81a54921":"",children:[Object(U.jsx)("label",{htmlFor:"newDisplayName","data-v-81a54921":"",children:"Display Name"}),Object(U.jsx)("input",{autoCapitalize:"none",autoCorrect:"off",type:"text",className:"input-field",placeholder:"New display name",name:"newDisplayName",onChange:function(e){var t=e.target.value;Te(t)},value:Ue,"data-v-81a54921":""}),Ue!==Pe&&""!==Ue?Object(U.jsx)("button",{onClick:ze,className:"shock-form-button-confirm m-1","data-v-81a54921":"",children:"OK"}):Object(U.jsx)("button",{onClick:Be,className:"shock-form-button m-1","data-v-81a54921":"",children:"GO BACK"})]}),Object(U.jsxs)(k.a,{contentStyle:it,modalOpen:qe,toggleModal:nt,"data-v-81a54921":"",children:[Object(U.jsx)("label",{htmlFor:"newBio","data-v-81a54921":"",children:"New Bio"}),Object(U.jsx)("input",{autoCapitalize:"none",autoCorrect:"off",type:"text",className:"input-field",placeholder:"New bio",name:"newBio",onChange:function(e){var t=e.target.value;Qe(t)},value:$e,"data-v-81a54921":""}),$e!==Fe&&""!==$e?Object(U.jsx)("button",{onClick:ct,className:"shock-form-button-confirm m-1","data-v-81a54921":"",children:"OK"}):Object(U.jsx)("button",{onClick:nt,className:"shock-form-button m-1","data-v-81a54921":"",children:"GO BACK"})]})]})}}}]);
//# sourceMappingURL=17.f3a73d2e.chunk.js.map