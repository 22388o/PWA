(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[21,41],{615:function(e,t,c){"use strict";var n=c(0),a=c(13),r=c(1),i=c(922),o=c(186),s=(c(639),c(623),c(4));t.a=function(e){var t=e.id,c=void 0===t?"":t,l=e.item,d=e.index,b=void 0===d?0:d,u=e.postId,j=void 0===u?"":u,p=e.tipValue,f=void 0===p?0:p,O=e.tipCounter,h=void 0===O?0:O,v=e.hideRibbon,x=void 0!==v&&v,m=e.width,g=void 0===m?null:m,_=e.disableZoom,C=void 0!==_&&_,y=e.style,S=void 0===y?{}:y,k=Object(r.useState)(!1),N=Object(a.a)(k,2),w=N[0],U=N[1],P=Object(r.useState)(!1),D=Object(a.a)(P,2),T=D[0],q=D[1],I=Object(r.useState)(!0),B=Object(a.a)(I,2),M=B[0],E=B[1],R=Object(r.useState)(null),K=Object(a.a)(R,2),F=K[0],L=K[1],z=Object(r.useCallback)((function(e){if(clearTimeout(F),U(e),!e&&T){q(!1);var t=setTimeout((function(){E(!0)}),200);L(t)}e&&E(!1)}),[F,T,U,q,E,L]),W=decodeURIComponent(l.magnetURI.replace(/.*(ws=)/gi,"")),Y=Object(n.a)(Object(n.a)({},S),{},{opacity:M?1:0});g&&(Y.width=g);var J=Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("img",{className:"image torrent-img torrent-img-".concat(j,"-").concat(c),alt:"Post Media","data-torrent":l.magnetURI,"data-file-key":b,style:Y,src:W,"data-v-e5022f5f":""}),Object(s.jsx)("img",{className:"image enlarged-img enlarged-img-".concat(j,"-").concat(c),alt:"Post Media","data-file-key":b,onLoad:function(){q(!0)},style:{opacity:w?1:0,display:w?"block":"none"},src:W,"data-v-e5022f5f":""}),!x&&Object(s.jsx)(o.a,{tipCounter:h,tipValue:f,zoomed:w,"data-v-e5022f5f":""})]});return Object(s.jsx)("div",{className:"media-container","data-v-e5022f5f":"",children:C?J:Object(s.jsx)(i.a,{isZoomed:w,onZoomChange:z,overlayBgColorStart:"#16191c00",overlayBgColorEnd:"#16191c","data-v-e5022f5f":"",children:J})})}},623:function(e,t,c){},630:function(e,t,c){"use strict";var n=c(1),a=c(4);t.a=function(e){var t=e.color,c=e.length,r=e.type,i=e.width,o=Object(n.useMemo)((function(){return"vertical"===r?{borderLeftStyle:"solid",borderLeftWidth:"".concat(i/2,"px"),borderLeftColor:t,borderRightStyle:"solid",borderRightWidth:"".concat(i/2,"px"),borderRightColor:t,height:c}:"horizontal"===r?{borderTopStyle:"solid",borderTopWidth:i/2,borderTopColor:t,borderBottomStyle:"solid",borderBottomWidth:i/2,borderBottomColor:t,width:c}:{}}),[t,c,r,i]);return Object(a.jsx)("div",{style:o})}},667:function(e,t,c){"use strict";var n=c(88),a=c.n(n),r=c(608),i=c(630),o=c(668),s=c.n(o),l=c(4);t.a=function(e){var t=e.onChange,c=e.selected,n=e.showContentBtn;return Object(l.jsxs)("div",{className:a()(r.D,r.z,r.A,r.w,s.a.container),children:[Object(l.jsx)("span",{className:a()(r.C,"posts"===c?s.a.selected:s.a.unselected),onClick:function(){t("posts")},children:"Posts"}),Object(l.jsx)("div",{className:a()(r.a,n&&s.a["left-line"]),children:Object(l.jsx)(i.a,{color:"white",length:16,type:"vertical",width:2})}),Object(l.jsx)("span",{className:a()(r.C,"services"===c?s.a.selected:s.a.unselected),onClick:function(){t("services")},children:"Services"}),n&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:a()(r.a,s.a["right-line"]),children:Object(l.jsx)(i.a,{color:"white",length:16,type:"vertical",width:2})}),Object(l.jsx)("span",{className:a()(r.C,"content"===c?s.a.selected:s.a.unselected),onClick:function(){t("content")},children:"Content"})]})]})}},668:function(e,t,c){e.exports={container:"ProfileDivider_container__3ob9k",selected:"ProfileDivider_selected__3U98y",unselected:"ProfileDivider_unselected__1Z_qd","left-line":"ProfileDivider_left-line__2xjlN","right-line":"ProfileDivider_right-line__1d2KH"}},669:function(e,t,c){"use strict";t.a=c.p+"static/media/clipboard.beb19e1e.svg"},670:function(e,t,c){"use strict";t.a=c.p+"static/media/qrcode.69103c6c.svg"},785:function(e,t,c){},786:function(e,t,c){},787:function(e,t,c){e.exports={"profile-page":"OtherUser_profile-page__OhC-_","profile-container":"OtherUser_profile-container__2oq7s","profile-cover":"OtherUser_profile-cover__3Fq6P","profile-info-container":"OtherUser_profile-info-container__3qnqN","profile-avatar":"OtherUser_profile-avatar__S6INq","profile-name":"OtherUser_profile-name__3chmC","profile-desc":"OtherUser_profile-desc__f9Dsj","config-btn":"OtherUser_config-btn__t33_B","config-btn-icon":"OtherUser_config-btn-icon__1p_6O","config-btn-text":"OtherUser_config-btn-text__1Wg_T","profile-choice-container":"OtherUser_profile-choice-container__3-xgF","profile-choice-icon":"OtherUser_profile-choice-icon__3iOE1","profile-choice-text":"OtherUser_profile-choice-text__deYLl","profile-qrcode":"OtherUser_profile-qrcode__2Ok54","profile-qrcode-desc":"OtherUser_profile-qrcode-desc__3cp0P","profile-clipboard-container":"OtherUser_profile-clipboard-container__1P_p8","profile-clipboard-icon":"OtherUser_profile-clipboard-icon__1nW2U","profile-clipboard-text":"OtherUser_profile-clipboard-text__2g4AC","publish-content-form":"OtherUser_publish-content-form__1YdVa","publish-content-title":"OtherUser_publish-content-title__3EsYE","publish-content-icon":"OtherUser_publish-content-icon__291ch","m-1":"OtherUser_m-1__1dpvP","content-container":"OtherUser_content-container__1lOOL"}},788:function(e,t,c){e.exports={container:"FollowBtn_container__2c7Cj",text:"FollowBtn_text__1o7CS"}},789:function(e,t,c){e.exports={container:"SendReqBtn_container__2nY4E",text:"SendReqBtn_text__2_2zC"}},911:function(e,t,c){"use strict";c.r(t);var n=c(49),a=c(0),r=c(13),i=c(1),o=c.n(i),s=c(661),l=c.n(s),d=c(26),b=c(88),u=c.n(b),j=c(9),p=c(81),f=c(15),O=c(68),h=c(628),v=c(629),x=c(610),m=c(183),g=c(609),_=c(667),C=c(607),y=c(28),S=c(46),k=c(7),N=c(615),w=(c(785),c(4)),U={height:100,width:100,objectFit:"contain"},P=function(e){var t=e.publicKey,c=Object(d.g)(),n=o.a.useState({}),a=Object(r.a)(n,2),i=a[0],s=a[1],l=o.a.useState(""),b=Object(r.a)(l,2),u=b[0],j=b[1];o.a.useEffect((function(){var e=Object(f.b)({query:"".concat(t,"::publishedContentPublic::map.on"),onError:function(e){j(JSON.stringify(e,null,4))},onData:function(e,c){s(Object(y.a)((function(n){S.e(e)?n[c]=e:k.g.warn("Invalid/incomplete public published content found for public key ...".concat(t.slice(-8),", might be due to pending replication or was deleted if null: ").concat(JSON.stringify(e,null,4)))})))}});return function(){e.then((function(e){return e.off()}))}}),[t]);var p=o.a.useMemo((function(){return Object.values(i).sort((function(e,t){return t.timestamp-e.timestamp}))}),[i]);return u?Object(w.jsx)("p",{"data-v-f1c2ba60":"",children:u}):Object(w.jsx)(w.Fragment,{children:p.map((function(e,t){return Object(w.jsxs)("div",{className:"item",onClick:function(){c.push("/item/".concat(e.author,"/").concat(e.id))},"data-v-f1c2ba60":"",children:["image/embedded"===e.type&&Object(w.jsx)("div",{style:U,"data-v-f1c2ba60":"",children:Object(w.jsx)(N.a,{disableZoom:!0,hideRibbon:!0,id:e.id,index:t,item:e,postId:null,tipCounter:null,tipValue:null,style:U,"data-v-f1c2ba60":""})}),"video/embedded"===e.type&&Object(w.jsx)("div",{className:"video-placeholder",style:U,"data-v-f1c2ba60":"",children:Object(w.jsx)("i",{className:"fas fa-video video-icon","data-v-f1c2ba60":""})}),Object(w.jsxs)("div",{className:"title-and-description","data-v-f1c2ba60":"",children:[Object(w.jsx)("h2",{className:"title","data-v-f1c2ba60":"",children:e.title}),Object(w.jsx)("p",{className:"description","data-v-f1c2ba60":"",children:e.description||" "}),Object(w.jsx)("span",{className:"timestamp","data-v-f1c2ba60":"",children:k.f(e.timestamp)})]})]},e.id)}))})},D=c(687),T=c(669),q=c(670),I=c.p+"static/media/logo-alone-2.512c5854.png",B=c(684),M=c(686),E=c(3),R=c.n(E),K=c(5),F=c(38),L=c(650),z=c(117),W=c(30),Y=(c(786),function(e){var t=e.service,c=e.toggleOpen,n=Object(F.b)(),a=Object(i.useState)(""),o=Object(r.a)(a,2),s=o[0],l=o[1],d=Object(i.useState)(!1),b=Object(r.a)(d,2),u=b[0],j=b[1],p=Object(i.useState)(null),f=Object(r.a)(p,2),O=f[0],h=f[1],v=Object(i.useState)(!1),g=Object(r.a)(v,2),_=g[0],C=g[1],y=Object(i.useCallback)(function(){var e=Object(K.a)(R.a.mark((function e(c){var a,r,i,o,s,d,b,u,p;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),e.prev=1,a=t.servicePrice,r=t.owner,i=t.serviceID,o=t.serviceType,r&&i&&"number"===typeof Number(a)){e.next=7;break}return console.error("invalid service provided"),console.error(t),e.abrupt("return");case 7:return j(!0),e.next=10,Object(z.b)(r,i,a)(n);case 10:s=e.sent,console.log(s),h(s),"torrentSeed"===o&&Object(W.b)(s.seedUrl,s.tokens[0])(n),"streamSeed"===o&&Object(W.e)(s.seedUrl,s.tokens[0])(n),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),console.error(e.t0),t&&(u=e.t0.message,p=null===(d=e.t0.response)||void 0===d||null===(b=d.data)||void 0===b?void 0:b.errorMessage,l(null!==p&&void 0!==p?p:u));case 21:return e.prev=21,j(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[1,17,21,24]])})));return function(t){return e.apply(this,arguments)}}(),[n,t]);Object(i.useEffect)((function(){t||(j(!1),l(null),h(null))}),[O,t]);var S=Object(i.useCallback)((function(){navigator.clipboard.writeText(JSON.stringify(O)),C(!0)}),[O,C]);return Object(w.jsx)(x.a,{toggleModal:c,modalOpen:!!t,modalTitle:"Buy Service","data-v-e56d454b":"",children:O?Object(w.jsxs)("div",{className:"tip-modal-success","data-v-e56d454b":"",children:[Object(w.jsx)("i",{className:"tip-success-icon fas fa-check-circle","data-v-e56d454b":""}),Object(w.jsx)("p",{className:"tip-success-title","data-v-e56d454b":"",children:"You successfully bought this service!"}),Object(w.jsx)("p",{"data-v-e56d454b":"",children:JSON.stringify(O)}),Object(w.jsx)("button",{onClick:S,"data-v-e56d454b":"",children:"COPY TO CLIPBOARD"}),_&&Object(w.jsx)("p",{"data-v-e56d454b":"",children:"Copied!"})]}):Object(w.jsxs)("form",{className:"modal-form tip-form",onSubmit:y,"data-v-e56d454b":"",children:[s?Object(w.jsx)("div",{className:"form-error","data-v-e56d454b":"",children:s}):null,u?Object(w.jsx)(m.a,{overlay:!0,text:"Sending Tip...","data-v-e56d454b":""}):null,Object(w.jsxs)("p",{className:"tip-modal-desc","data-v-e56d454b":"",children:[t&&t.servicePrice," sats will be sent to the owner of the service provider"]}),Object(w.jsx)(L.a,{text:"BUY",onClick:y,"data-v-e56d454b":""})]})})}),J=c(685),V=c(19),Z=c(608),A=c(787),H=c.n(A),G=c(788),Q=c.n(G),X=c(47),$=function(e){var t=e.publicKey,c=Object(k.n)(),n=V.useSelector((function(e){return e.auth.authenticated})),a=!!V.useSelector(V.selectFollows).find((function(e){return e.user===t})),o=Object(i.useState)(!1),s=Object(r.a)(o,2),l=s[0],d=s[1],b=Object(i.useCallback)(Object(K.a)(R.a.mark((function e(){var c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!l){e.next=3;break}return e.abrupt("return");case 3:if(d(!0),c={status:-1,data:{errorMessage:""}},!a){e.next=11;break}return e.next=8,k.d.delete("/api/gun/follows/".concat(t));case 8:c=e.sent,e.next=14;break;case 11:return e.next=13,k.d.put("/api/gun/follows/".concat(t),{});case 13:c=e.sent;case 14:if(200===c.status){e.next=16;break}throw new Error(c.data.errorMessage);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),a?alert("Could not unfollow: ".concat(e.t0.message)):alert("Could not follow: ".concat(e.t0.message));case 21:return e.prev=21,d(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])}))),[l,d,a,t]),j=Object(i.useCallback)((function(){c(Object(X.c)({publicKey:t}))}),[c,t]);return Object(w.jsx)("div",{className:Q.a.container,onClick:n?b:j,children:Object(w.jsx)("p",{className:u()(Z.C,Q.a.text),children:l?"...":a?"Unfollow":"Follow"})})},ee=c(50),te=c(789),ce=c.n(te),ne=function(e){var t=e.publicKey,c=Object(F.b)(),n=Object(d.g)(),a=V.useSelector(V.selectIsInContact(t)),o=Object(i.useState)(!1),s=Object(r.a)(o,2),l=s[0],b=s[1],j=Object(i.useCallback)(Object(K.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!l){e.next=3;break}return e.abrupt("return");case 3:if(!a){e.next=6;break}return n.push("/chat/".concat(t)),e.abrupt("return");case 6:return b(!0),e.next=9,c(Object(ee.l)(t));case 9:b(!1),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),alert("Could not send contact request: ".concat(e.t0.message)),k.g.error(e.t0),b(!1);case 17:case"end":return e.stop()}}),e,null,[[0,12]])}))),[l,c,n,a,t]);return Object(w.jsx)("div",{className:u()(ce.a.container),onClick:j,children:Object(w.jsx)("p",{className:u()(Z.C,ce.a.text),children:l?"...":a?"Message":"Request Contact"})})},ae=c(36),re=o.a.lazy((function(){return Promise.all([c.e(1),c.e(3),c.e(4),c.e(39)]).then(c.bind(null,638))})),ie=o.a.lazy((function(){return Promise.all([c.e(1),c.e(3),c.e(4),c.e(10),c.e(43)]).then(c.bind(null,691))})),oe={src:I,height:36,width:36,excavate:!0};t.default=function(){var e=V.useDispatch(),t=Object(d.g)(),c=V.useSelector((function(e){return e.node.publicKey})),o=V.useSelector((function(e){return e.auth.authenticated})),s=Object(i.useState)(!1),b=Object(r.a)(s,2),y=b[0],S=b[1],N=Object(d.i)(),U=N.publicKey,I=N.selectedView,E=void 0===I?"posts":I,R=V.useSelector(V.selectUser(U)),K=Object(i.useState)({}),F=Object(r.a)(K,2),L=F[0],z=F[1],W=Object(i.useState)(null),A=Object(r.a)(W,2),G=A[0],Q=A[1],X=Object(i.useState)(null),ee=Object(r.a)(X,2),te=ee[0],ce=ee[1],se=Object(i.useState)(null),le=Object(r.a)(se,2),de=le[0],be=le[1],ue=Object(i.useState)(null),je=Object(r.a)(ue,2),pe=je[0],fe=je[1],Oe=c===R.publicKey;Object(i.useEffect)((function(){return e(Object(ae.p)()),function(){e(Object(ae.r)())}}),[e]),Object(i.useEffect)((function(){var t=e(Object(ae.q)(U)),c=e(Object(ae.n)(U)),n=e(Object(O.b)(U));return function(){t(),c(),n()}}),[e,U]),Object(i.useEffect)((function(){var e=Object(f.b)({onData:function(e,t){z((function(c){return Object(a.a)(Object(a.a)({},c),{},Object(n.a)({},t,e))}))},query:"".concat(U,"::offeredServices::map.on"),onError:function(e){var t=k.e(e);t.startsWith("timeout of ")||"TIMEOUT_ERR"===t?k.g.warn("Could not fetch this user's (...".concat(U.slice(-8),") offered services due to a timeout error, this can be expected if the data hasn't been populated yet.")):(p.b.dark("There was an error fetching ".concat(R.displayName,"'s offered services: ").concat(t)),k.g.error(e))}});return function(){e.then((function(e){e.off()}))}}),[R.displayName,U]);var he=Object(i.useCallback)((function(){S(!y)}),[y]),ve=Object(i.useCallback)((function(e){!G&&e||Q(null),Q(e)}),[G]),xe=Object(i.useCallback)((function(e){!de&&e||be(null),be(e)}),[de]),me=Object(i.useCallback)((function(e){!te&&e||ce(null),ce(e)}),[te]),ge=Object(i.useCallback)((function(e){console.log("share click yo"),console.log(e),!pe&&e||fe(null),fe(e)}),[pe]),_e=V.useSelector(V.selectPostsNewestToOldest(U)),Ce=(Object(i.useCallback)((function(){t.push("/auth")}),[t]),Object(i.useCallback)((function(){navigator.clipboard.writeText(U)}),[U])),ye=Object(i.useCallback)((function(e){t.replace("/otherUser/".concat(U,"/").concat(e))}),[t,U]);return Object(w.jsxs)("div",{className:u()("page-container",H.a["profile-page"]),children:[Object(w.jsxs)("div",{className:u()(H.a["profile-container"]),children:[Object(w.jsx)("div",{className:"profile-cover",children:R.header&&Object(w.jsx)("img",{className:"w-100",alt:"User set profile header.",src:"data:image/jpeg;base64,".concat(R.header)})}),Object(w.jsxs)("div",{className:H.a["profile-info-container"],children:[Object(w.jsx)("div",{className:H.a["profile-avatar"],style:{height:"".concat(122,"px"),width:"".concat(122,"px")},children:Object(w.jsx)(g.a,{height:122,publicKey:U,greyBorder:!0})}),Object(w.jsxs)("div",{children:[Object(w.jsx)("p",{className:H.a["profile-name"],children:R.displayName}),Object(w.jsx)("p",{className:H.a["profile-desc"],children:R.bio||"Lightning.Page user"}),Object(w.jsxs)("div",{className:Z.z,children:[!Oe&&Object(w.jsx)($,{publicKey:U}),Object(w.jsx)(C.a,{amt:24,insideRow:!0}),!Oe&&Object(w.jsx)(ne,{publicKey:U})]})]})]}),Object(w.jsx)(_.a,{onChange:ye,selected:E,showContentBtn:!0}),Object(w.jsx)(C.a,{amt:30}),Object(w.jsxs)("div",{children:["posts"===E&&(0===_e.length?Object(w.jsx)(m.a,{text:"loading posts..."}):_e.map((function(e){return j.o(e)?Object(w.jsx)(i.Suspense,{fallback:Object(w.jsx)(m.a,{}),children:Object(w.jsx)(ie,{openTipModal:ve,openUnlockModal:me,openShareModal:ge,postID:e.originalPostID,sharerPublicKey:e.sharedBy})},e.originalPostID):Object(w.jsx)(i.Suspense,{fallback:Object(w.jsx)(m.a,{}),children:Object(w.jsx)(re,{id:e.id,publicKey:e.authorId,openTipModal:ve,openUnlockModal:me,openDeleteModal:null,openShareModal:ge})},e.id)}))),"services"===E&&Object.entries(L).filter((function(e){var t=Object(r.a)(e,2);return t[0],!!t[1]})).map((function(e){var t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(w.jsxs)("div",{className:H.a.post,children:[Object(w.jsx)("strong",{children:"Service ID"}),Object(w.jsx)("p",{children:c}),Object(w.jsx)("strong",{children:"Service Tpe"}),Object(w.jsx)("p",{children:n.serviceType}),Object(w.jsx)("strong",{children:"Service Title"}),Object(w.jsx)("p",{children:n.serviceTitle}),Object(w.jsx)("strong",{children:"Service Description"}),Object(w.jsx)("p",{children:n.serviceDescription}),Object(w.jsx)("strong",{children:"Service Condition"}),Object(w.jsx)("p",{children:n.serviceCondition}),Object(w.jsx)("strong",{children:"Service Price"}),Object(w.jsx)("p",{children:n.servicePrice}),Object(w.jsx)("button",{onClick:function(){be(Object(a.a)(Object(a.a)({},n),{},{serviceID:c,owner:U}))},children:"BUY SERVICE"})]})})),"content"===E&&Object(w.jsx)("div",{className:H.a["content-container"],children:Object(w.jsx)(P,{publicKey:U})})]}),Object(w.jsx)(C.a,{amt:200}),Object(w.jsxs)(x.a,{toggleModal:he,modalOpen:y,contentStyle:{padding:"40px 30px"},noFullWidth:!0,children:[Object(w.jsx)(l.a,{bgColor:"#23282d",fgColor:"#64bbff",value:U,size:180,className:H.a["profile-qrcode"],imageSettings:oe}),Object(w.jsx)("p",{className:H.a["profile-qrcode-desc"],children:"Scan this code to contact this user"}),Object(w.jsxs)("div",{className:H.a["profile-clipboard-container"],onClick:Ce,children:[Object(w.jsx)("img",{src:T.a,className:H.a["profile-clipboard-icon"],alt:""}),Object(w.jsx)("p",{className:H.a["profile-clipboard-text"],children:"Tap to copy to clipboard"})]})]}),Object(w.jsx)(B.a,{tipData:G,toggleOpen:ve}),Object(w.jsx)(D.a,{publicKey:U,tipData:G,toggleOpen:ve}),Object(w.jsx)(M.a,{unlockData:te,toggleOpen:me}),Object(w.jsx)(Y,{service:de,toggleOpen:xe}),Object(w.jsx)(J.a,{shareData:pe,toggleOpen:ge})]}),o&&Object(w.jsx)(v.a,{onClick:he,large:!0,iconURL:q.a,icon:null,label:null}),Object(w.jsx)(h.a,{})]})}}}]);
//# sourceMappingURL=21.d1e4fe37.chunk.js.map