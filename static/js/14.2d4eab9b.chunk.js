(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[14],{482:function(e,t,c){"use strict";var n=c(3),a=c(72),r=c.n(a),s=(c(485),c(7)),o=function(e){var t=e.children,c=e.style;return Object(s.jsx)("div",{className:"modal-content",style:c,children:t})},i=(c(486),function(e){var t=e.title,c=e.toggleModal;return t?Object(s.jsxs)("div",{className:"modal-head",children:[Object(s.jsx)("p",{className:"modal-head-title",children:t}),Object(s.jsx)("div",{className:"modal-head-close",onClick:c,children:Object(s.jsx)("i",{className:"fas fa-times"})})]}):null});c(487),t.a=function(e){var t=e.modalOpen,c=void 0!==t&&t,a=e.toggleModal,l=e.modalTitle,u=void 0===l?"":l,d=e.children,b=e.contentStyle,j=void 0===b?{}:b,p=Object(n.useCallback)((function(){a()}),[a]);return Object(s.jsxs)("div",{className:r()({modal:!0,"modal-open":c}),children:[Object(s.jsx)("div",{className:"modal-backdrop",onClick:p}),Object(s.jsxs)("div",{className:"modal-container",children:[Object(s.jsx)(i,{title:u,toggleModal:p}),Object(s.jsx)(o,{style:j,children:d})]})]})}},485:function(e,t,c){},486:function(e,t,c){},487:function(e,t,c){},492:function(e,t,c){"use strict";var n=c(27),a=c(72),r=c.n(a),s=(c(497),c(7));t.a=function(e){var t=e.label,c=e.name,a=e.onChange,o=e.inputAction,i=e.actionIcon,l=e.value,u=e.inputMode,d=void 0===u?"text":u,b=e.type,j=void 0===b?"text":b,p=e.element,f=void 0===p?"input":p,O=e.small,v=void 0!==O&&O,h=e.disabled;return Object(s.jsxs)("div",{className:r()({group:!0,"group-disabled":h,"group-small":v}),children:[t?Object(s.jsx)("p",{className:"group-label",children:t}):null,Object(s.jsxs)("div",{className:r()({"group-input-container":!0,"group-input-textarea-container":"textarea"===f}),children:["textarea"===f?Object(s.jsx)("textarea",{className:"group-input group-input-textarea",name:c,onChange:a,inputMode:d,value:l,disabled:h}):Object(s.jsx)("input",{className:"group-input",type:j,name:c,onChange:a,inputMode:d,value:l,disabled:h}),o&&i?Object(s.jsx)("div",{className:"group-input-action",onClick:o,children:Object(s.jsx)("i",{className:r()(Object(n.a)({"group-input-action-icon":!0,fas:!0},i,!0)),onClick:o})}):null]})]})}},494:function(e,t,c){"use strict";var n=c(52),a=c(7);t.a=function(){return Object(a.jsxs)("div",{className:"bottom-nav-container",children:[Object(a.jsx)(n.c,{className:"bottom-nav-btn",to:"/overview",activeClassName:"active-nav-btn",children:Object(a.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-wallet"})}),Object(a.jsx)(n.c,{className:"bottom-nav-btn",to:"/chat",activeClassName:"active-nav-btn",children:Object(a.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-chat"})}),Object(a.jsx)(n.c,{className:"bottom-nav-btn",to:"/profile",activeClassName:"active-nav-btn",children:Object(a.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-profile"})}),Object(a.jsx)(n.c,{className:"bottom-nav-btn",to:"/feed",activeClassName:"active-nav-btn",children:Object(a.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-feed"})})]})}},497:function(e,t,c){},501:function(e,t,c){"use strict";var n=c(14),a=c(3),r=c(72),s=c.n(r),o=(c(502),c(7));t.a=function(e){var t=e.label,c=void 0===t?null:t,r=e.icon,i=void 0===r?null:r,l=e.iconURL,u=void 0===l?null:l,d=e.onClick,b=void 0===d?void 0:d,j=e.nestedMode,p=void 0!==j&&j,f=e.large,O=void 0!==f&&f,v=e.small,h=void 0!==v&&v,m=e.relative,x=void 0!==m&&m,g=e.children,_=void 0===g?null:g,N=e.style,k=void 0===N?{}:N,C=Object(a.useState)(!1),y=Object(n.a)(C,2),S=y[0],w=y[1],U=Object(a.useCallback)((function(){p&&w(!S)}),[S,p]),P=Object(a.useMemo)((function(){return u?Object(o.jsx)("img",{src:u,className:"add-btn-icon",alt:""}):Object(o.jsx)("i",{className:"fas fa-".concat(null!==i&&void 0!==i?i:"plus")})}),[i,u]),D=Object(a.useMemo)((function(){return c?Object(o.jsx)("p",{className:"add-btn-label",children:c}):null}),[c]);return Object(o.jsxs)("div",{className:s()({"add-btn-container":!0,"add-btn-round-container":!c,"add-btn-large":O,"add-btn-small":h}),children:[Object(o.jsxs)("div",{className:s()({"add-btn":!0,"add-btn-round":!c,"add-btn-extended":!!c,"add-btn-relative":x,"add-btn-open":S,"add-btn-nested":p}),onClick:null!==b&&void 0!==b?b:U,style:k,children:[P,D]}),_?Object(o.jsx)("div",{className:s()({"add-btn-options":!0,"add-btn-options-open":S}),children:_}):null]})}},502:function(e,t,c){},510:function(e,t,c){"use strict";c(3),c(567);var n=c(7);t.a=function(e){var t=e.text,c=void 0===t?"Submit":t,a=e.onClick;return Object(n.jsx)("div",{className:"modal-submit-btn",onClick:a,children:Object(n.jsx)("p",{className:"modal-submit-btn-text",children:c})})}},512:function(e,t,c){"use strict";var n=c(3),a=c(7);t.a=function(e){var t=e.color,c=e.length,r=e.type,s=e.width,o=Object(n.useMemo)((function(){return"vertical"===r?{borderLeftStyle:"solid",borderLeftWidth:"".concat(s/2,"px"),borderLeftColor:t,borderRightStyle:"solid",borderRightWidth:"".concat(s/2,"px"),borderRightColor:t,height:c}:"horizontal"===r?{borderTopStyle:"solid",borderTopWidth:s/2,borderTopColor:t,borderBottomStyle:"solid",borderBottomWidth:s/2,borderBottomColor:t,width:c}:{}}),[t,c,r,s]);return Object(a.jsx)("div",{style:o})}},527:function(e,t,c){"use strict";var n=c(72),a=c.n(n),r=c(483),s=c(512),o=c(528),i=c.n(o),l=c(7);t.a=function(e){var t=e.onChange,c=e.selected;return Object(l.jsxs)("div",{className:a()(r.y,r.u,r.v,r.s,i.a.container),children:[Object(l.jsx)("span",{className:a()(r.x,"posts"===c&&i.a.selected,"services"===c&&i.a.unselected),onClick:function(){t("posts")},children:"Posts"}),Object(l.jsx)("div",{className:r.a,children:Object(l.jsx)(s.a,{color:"white",length:16,type:"vertical",width:2})}),Object(l.jsx)("span",{className:a()(r.x,"services"===c&&i.a.selected,"posts"===c&&i.a.unselected),onClick:function(){t("services")},children:"Services"})]})}},528:function(e,t,c){e.exports={container:"ProfileDivider_container__3ob9k",selected:"ProfileDivider_selected__3U98y",unselected:"ProfileDivider_unselected__1Z_qd",divider:"ProfileDivider_divider__1IzYV"}},529:function(e,t,c){"use strict";t.a=c.p+"static/media/clipboard.beb19e1e.svg"},530:function(e,t,c){"use strict";t.a=c.p+"static/media/qrcode.69103c6c.svg"},566:function(e,t,c){"use strict";var n=c(2),a=c.n(n),r=c(5),s=c(14),o=c(3),i=c(33),l=c(482),u=c(510),d=c(492),b=c(21),j=c(150),p=(c(568),c(7));t.a=function(e){var t=e.tipData,c=e.toggleOpen,n=Object(i.c)(),f=Object(o.useState)(""),O=Object(s.a)(f,2),v=O[0],h=O[1],m=Object(o.useState)(!1),x=Object(s.a)(m,2),g=x[0],_=x[1],N=Object(o.useState)(0),k=Object(s.a)(N,2),C=k[0],y=k[1],S=Object(o.useState)(!1),w=Object(s.a)(S,2),U=w[0],P=w[1],D=Object(o.useCallback)((function(e){"amount"===e.target.name&&y(e.target.value)}),[]),M=Object(o.useCallback)(function(){var e=Object(r.a)(a.a.mark((function e(c){var r,s,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,_(!0),e.next=5,n(Object(b.c)({amount:C,publicKey:t.publicKey,postId:t.postID}));case 5:P(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),t&&(o=e.t0.message,i=null===(r=e.t0.response)||void 0===r||null===(s=r.data)||void 0===s?void 0:s.errorMessage,h(null!==i&&void 0!==i?i:o));case 12:return e.prev=12,_(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(t){return e.apply(this,arguments)}}(),[n,C,t]);return Object(o.useEffect)((function(){t||(_(!1),h(null),P(!1))}),[t]),Object(p.jsx)(l.a,{toggleModal:c,modalOpen:!!t,modalTitle:"Send Tip",children:U?Object(p.jsxs)("div",{className:"tip-modal-success",children:[Object(p.jsx)("i",{className:"tip-success-icon fas fa-check-circle"}),Object(p.jsx)("p",{className:"tip-success-title",children:"Post tipped successfully!"}),Object(p.jsx)("p",{className:"tip-success-desc"})]}):Object(p.jsxs)("form",{className:"modal-form tip-form",onSubmit:M,children:[v?Object(p.jsx)("div",{className:"form-error",children:v}):null,g?Object(p.jsx)(j.a,{overlay:!0,text:"Sending Tip..."}):null,Object(p.jsx)("p",{className:"tip-modal-desc",children:"Please specify the amount of sats you'd like to tip this user with below."}),Object(p.jsx)(d.a,{name:"amount",onChange:D,value:C,inputMode:"decimal",small:!0}),Object(p.jsx)(u.a,{text:"SEND TIP",onClick:M})]})})}},567:function(e,t,c){},568:function(e,t,c){},569:function(e,t,c){"use strict";var n=c(2),a=c.n(n),r=c(5),s=c(14),o=c(3),i=c(33),l=c(482),u=c(510),d=c(42),b=c(150),j=(c(570),c(7));t.a=function(e){var t=e.unlockData,c=e.toggleOpen,n=Object(i.c)(),p=Object(o.useState)(""),f=Object(s.a)(p,2),O=f[0],v=f[1],h=Object(o.useState)(!1),m=Object(s.a)(h,2),x=m[0],g=m[1],_=Object(o.useState)(!1),N=Object(s.a)(_,2),k=N[0],C=N[1],y=Object(o.useCallback)(function(){var e=Object(r.a)(a.a.mark((function e(c){var r,s,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,g(!0),e.next=5,Object(d.j)(100,t.publicKey,t.postID)(n);case 5:C(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),t&&(o=e.t0.message,i=null===(r=e.t0.response)||void 0===r||null===(s=r.data)||void 0===s?void 0:s.errorMessage,v(null!==i&&void 0!==i?i:o));case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(t){return e.apply(this,arguments)}}(),[n,t]);return Object(o.useEffect)((function(){t||(g(!1),v(null),C(!1))}),[t]),Object(j.jsx)(l.a,{toggleModal:c,modalOpen:!!t,modalTitle:"Unlock content",children:k?Object(j.jsxs)("div",{className:"tip-modal-success",children:[Object(j.jsx)("i",{className:"tip-success-icon fas fa-check-circle"}),Object(j.jsx)("p",{className:"tip-success-title",children:"Content unlocked successfully!"})]}):Object(j.jsxs)("form",{className:"modal-form tip-form",onSubmit:y,children:[O?Object(j.jsx)("div",{className:"form-error",children:O}):null,x?Object(j.jsx)(b.a,{overlay:!0,text:"Sending Tip..."}):null,Object(j.jsx)("p",{className:"tip-modal-desc",children:"100 sats will be sent to the owner of the post to unlock the content"}),Object(j.jsx)(u.a,{text:"UNLOCK",onClick:y})]})})}},570:function(e,t,c){},725:function(e,t,c){},726:function(e,t,c){e.exports={"profile-page":"OtherUser_profile-page__OhC-_","profile-container":"OtherUser_profile-container__2oq7s","profile-cover":"OtherUser_profile-cover__3Fq6P","profile-info-container":"OtherUser_profile-info-container__3qnqN","profile-avatar":"OtherUser_profile-avatar__S6INq","profile-name":"OtherUser_profile-name__3chmC","profile-desc":"OtherUser_profile-desc__f9Dsj","config-btn":"OtherUser_config-btn__t33_B","config-btn-icon":"OtherUser_config-btn-icon__1p_6O","config-btn-text":"OtherUser_config-btn-text__1Wg_T","profile-choice-container":"OtherUser_profile-choice-container__3-xgF","profile-choice-icon":"OtherUser_profile-choice-icon__3iOE1","profile-choice-text":"OtherUser_profile-choice-text__deYLl","profile-qrcode":"OtherUser_profile-qrcode__2Ok54","profile-qrcode-desc":"OtherUser_profile-qrcode-desc__3cp0P","profile-clipboard-container":"OtherUser_profile-clipboard-container__1P_p8","profile-clipboard-icon":"OtherUser_profile-clipboard-icon__1nW2U","profile-clipboard-text":"OtherUser_profile-clipboard-text__2g4AC","publish-content-form":"OtherUser_publish-content-form__1YdVa","publish-content-title":"OtherUser_publish-content-title__3EsYE","publish-content-icon":"OtherUser_publish-content-icon__291ch","m-1":"OtherUser_m-1__1dpvP"}},727:function(e,t,c){e.exports={container:"FollowBtn_container__2c7Cj",icon:"FollowBtn_icon__3orep",text:"FollowBtn_text__1o7CS"}},762:function(e,t,c){"use strict";c.r(t);var n=c(16),a=c(2),r=c.n(a),s=c(0),o=c(5),i=c(14),l=c(3),u=c.n(l),d=c(33),b=c(526),j=c.n(b),p=c(23),f=c(72),O=c.n(f),v=c(88),h=c(15),m=c(91),x=c(32),g=c(22),_=c(494),N=c(501),k=c(482),C=c(150),y=c(493),S=c(527),w=c(491),U=c(529),P=c(530),D=c(566),M=c(569),T=c(510),I=c(104),E=c(42),q=(c(725),c(7)),B=function(e){var t=e.service,c=e.toggleOpen,n=Object(d.c)(),a=Object(l.useState)(""),s=Object(i.a)(a,2),u=s[0],b=s[1],j=Object(l.useState)(!1),p=Object(i.a)(j,2),f=p[0],O=p[1],v=Object(l.useState)(null),h=Object(i.a)(v,2),m=h[0],x=h[1],g=Object(l.useState)(!1),_=Object(i.a)(g,2),N=_[0],y=_[1],S=Object(l.useCallback)(function(){var e=Object(o.a)(r.a.mark((function e(c){var a,s,o,i,l,u,d,j,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),e.prev=1,a=t.servicePrice,s=t.owner,o=t.serviceID,i=t.serviceType,s&&o&&"number"===typeof Number(a)){e.next=7;break}return console.error("invalid service provided"),console.error(t),e.abrupt("return");case 7:return O(!0),e.next=10,Object(I.b)(s,o,a)(n);case 10:l=e.sent,console.log(l),x(l),"torrentSeed"===i&&Object(E.b)(l.seedUrl,l.tokens[0])(n),"streamSeed"===i&&Object(E.e)(l.seedUrl,l.tokens[0])(n),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),console.error(e.t0),t&&(j=e.t0.message,p=null===(u=e.t0.response)||void 0===u||null===(d=u.data)||void 0===d?void 0:d.errorMessage,b(null!==p&&void 0!==p?p:j));case 21:return e.prev=21,O(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[1,17,21,24]])})));return function(t){return e.apply(this,arguments)}}(),[n,t]);Object(l.useEffect)((function(){t||(O(!1),b(null),x(null))}),[m]);var w=Object(l.useCallback)((function(){navigator.clipboard.writeText(JSON.stringify(m)),y(!0)}),[m,y]);return Object(q.jsx)(k.a,{toggleModal:c,modalOpen:!!t,modalTitle:"Buy Service",children:m?Object(q.jsxs)("div",{className:"tip-modal-success",children:[Object(q.jsx)("i",{className:"tip-success-icon fas fa-check-circle"}),Object(q.jsx)("p",{className:"tip-success-title",children:"You successfully bought this service!"}),Object(q.jsx)("p",{children:JSON.stringify(m)}),Object(q.jsx)("button",{onClick:w,children:"COPY TO CLIPBOARD"}),N&&Object(q.jsx)("p",{children:"Copied!"})]}):Object(q.jsxs)("form",{className:"modal-form tip-form",onSubmit:S,children:[u?Object(q.jsx)("div",{className:"form-error",children:u}):null,f?Object(q.jsx)(C.a,{overlay:!0,text:"Sending Tip..."}):null,Object(q.jsxs)("p",{className:"tip-modal-desc",children:[t&&t.servicePrice," sats will be sent to the owner of the service provider"]}),Object(q.jsx)(T.a,{text:"BUY",onClick:S})]})})},K=c(19),L=c(726),Y=c.n(L),A=c(89),F=c(483),R=c(727),W=c.n(R),z=function(e){var t=e.publicKey,c=!!K.useSelector(K.selectFollows).find((function(e){return e.user===t})),n=Object(l.useState)(!1),a=Object(i.a)(n,2),s=a[0],u=a[1],d=Object(l.useCallback)(Object(o.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!s){e.next=3;break}return e.abrupt("return");case 3:if(u(!0),n={status:-1,data:{errorMessage:""}},!c){e.next=11;break}return e.next=8,A.b.delete("/api/gun/follows/".concat(t));case 8:n=e.sent,e.next=14;break;case 11:return e.next=13,A.b.put("/api/gun/follows/".concat(t),{});case 13:n=e.sent;case 14:if(200===n.status){e.next=16;break}throw new Error(n.data.errorMessage);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),c?alert("Could not unfollow: ".concat(e.t0.message)):alert("Could not follow: ".concat(e.t0.message));case 21:return e.prev=21,u(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])}))),[s,u,c,t]);return Object(q.jsxs)("div",{className:W.a.container,onClick:d,children:[Object(q.jsx)("i",{className:O()(W.a.icon,"fas","fa-user-plus")}),Object(q.jsx)("p",{className:O()(F.x,W.a.text),children:s?"...":c?"Unfollow":"Follow"})]})},J=u.a.lazy((function(){return Promise.all([c.e(1),c.e(3)]).then(c.bind(null,524))})),V=u.a.lazy((function(){return Promise.all([c.e(2),c.e(1),c.e(5)]).then(c.bind(null,749))}));t.default=function(){var e=Object(d.c)(),t=Object(l.useState)(!1),c=Object(i.a)(t,2),a=c[0],u=c[1],b=Object(d.d)((function(e){return e.node.hostIP})),f=Object(d.d)((function(e){return e.userProfiles})),T=Object(p.i)().publicKey,I=K.useSelector(K.selectUser(T)),E=Object(l.useState)([]),L=Object(i.a)(E,2),A=L[0],F=L[1],R=Object(l.useState)([]),W=Object(i.a)(R,2),Z=W[0],G=W[1],H=Object(l.useState)([]),Q=Object(i.a)(H,2),X=Q[0],$=Q[1],ee=Object(l.useState)({}),te=Object(i.a)(ee,2),ce=te[0],ne=te[1],ae=Object(l.useState)(null),re=Object(i.a)(ae,2),se=re[0],oe=re[1],ie=Object(l.useState)(null),le=Object(i.a)(ie,2),ue=le[0],de=le[1],be=Object(l.useState)(null),je=Object(i.a)(be,2),pe=je[0],fe=je[1],Oe=Object(l.useState)("posts"),ve=Object(i.a)(Oe,2),he=ve[0],me=ve[1],xe=Object(l.useCallback)(Object(o.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(T,"::posts::on"),e.next=3,Object(g.e)({query:t,reconnect:!1,onData:function(){var e=Object(o.a)(r.a.mark((function e(t){var c,n,a,l,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object.entries(t),n=c.filter((function(e){var t=Object(i.a)(e,2),c=t[0];return null!==t[1]&&!v.a.includes(c)})).map((function(e){return Object(i.a)(e,1)[0]})),a=n.map(function(){var e=Object(o.a)(r.a.mark((function e(t){var c,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/gun/otheruser/".concat(T,"/load/posts>").concat(t));case 2:return c=e.sent,n=c.data,e.abrupt("return",Object(s.a)(Object(s.a)({},n.data),{},{id:t,authorId:T}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=5,Promise.allSettled(a);case 5:l=e.sent,u=l.filter((function(e){return"fulfilled"===e.status})).map((function(e){return e.value})),F(u);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});case 3:return c=e.sent,e.abrupt("return",(function(){c.off()}));case 5:case"end":return e.stop()}}),e)}))),[T]),ge=Object(l.useCallback)(Object(o.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(T,"::sharedPosts::on"),e.next=3,Object(g.e)({query:t,reconnect:!1,onData:function(){var e=Object(o.a)(r.a.mark((function e(t){var c,n,a,l,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object.entries(t),n=c.filter((function(e){var t=Object(i.a)(e,2),c=t[0];return null!==t[1]&&!v.a.includes(c)})).map((function(e){return Object(i.a)(e,1)[0]})),a=n.map(function(){var e=Object(o.a)(r.a.mark((function e(t){var c,n,a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/gun/otheruser/".concat(T,"/load/sharedPosts>").concat(t));case 2:return c=e.sent,n=c.data,e.next=6,h.a.get("/api/gun/otheruser/".concat(n.data.originalAuthor,"/load/posts>").concat(t));case 6:return a=e.sent,o=a.data,e.abrupt("return",Object(s.a)(Object(s.a)({},n.data),{},{originalPost:Object(s.a)(Object(s.a)({},o.data),{},{id:t}),authorId:T,type:"shared"}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=5,Promise.allSettled(a);case 5:l=e.sent,u=l.filter((function(e){return"fulfilled"===e.status})).map((function(e){return e.value})),G(u);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});case 3:return c=e.sent,e.abrupt("return",(function(){c.off()}));case 5:case"end":return e.stop()}}),e)}))),[b,T]);Object(l.useEffect)((function(){return e(Object(x.b)(T)),function(){e(Object(x.c)(T))}}),[e,T]),Object(l.useEffect)((function(){xe()}),[xe]),Object(l.useEffect)((function(){ge()}),[ge]),Object(l.useEffect)((function(){var t=[].concat(Object(n.a)(A),Object(n.a)(Z)).sort((function(e,t){return t.date-e.date}));$(t);var c=Z.filter((function(e){return!f[e.originalAuthor]})).map((function(t){var c=t.originalAuthor;return e(Object(x.b)(c)),function(){e(Object(x.c)(c))}}));return function(){c.forEach((function(e){return e()}))}}),[e,A,f,Z]),Object(l.useEffect)((function(){h.a.get("/api/gun/otheruser/".concat(T,"/load/offeredServices")).then((function(e){var t=e.data;ne(t.data)}))}),[T]);var _e=Object(l.useCallback)((function(){u(!a)}),[a]),Ne=Object(l.useCallback)((function(e){!se&&e||oe(null),oe(e)}),[se]),ke=Object(l.useCallback)((function(e){!pe&&e||fe(null),fe(e)}),[pe]),Ce=Object(l.useCallback)((function(e){!ue&&e||de(null),de(e)}),[ue]),ye=Object(l.useCallback)((function(){navigator.clipboard.writeText(T)}),[T]),Se=Object(l.useCallback)((function(e){me(e)}),[]);return Object(q.jsxs)("div",{className:O()("page-container",Y.a["profile-page"]),children:[Object(q.jsxs)("div",{className:Y.a["profile-container"],children:[Object(q.jsx)("div",{className:"profile-cover",children:I.header&&Object(q.jsx)("img",{alt:"User set profile header.",src:"data:image/jpeg;base64,".concat(I.header)})}),Object(q.jsxs)("div",{className:Y.a["profile-info-container"],children:[Object(q.jsx)("div",{className:Y.a["profile-avatar"],style:{height:"".concat(122,"px"),width:"".concat(122,"px")},children:Object(q.jsx)(y.a,{height:122,publicKey:T,greyBorder:!0})}),Object(q.jsxs)("div",{className:Y.a["profile-info"],children:[Object(q.jsx)("p",{className:Y.a["profile-name"],children:I.displayName}),Object(q.jsx)("p",{className:Y.a["profile-desc"],children:I.bio||"Shockwallet user"}),Object(q.jsx)(z,{publicKey:T})]})]}),Object(q.jsx)(S.a,{onChange:Se,selected:he}),Object(q.jsxs)("div",{children:["posts"===he&&X.map((function(e,t){var c=f[e.authorId];if("shared"===e.type){var n=e.originalAuthor,a=f[n];return Object(q.jsx)(l.Suspense,{fallback:Object(q.jsx)(C.a,{}),children:Object(q.jsx)(V,{originalPost:e.originalPost,originalPostProfile:a,sharedTimestamp:e.shareDate,sharerProfile:c,postPublicKey:n,openTipModal:Ne,openUnlockModal:Ce,openDeleteModal:null})},t)}return Object(q.jsx)(l.Suspense,{fallback:Object(q.jsx)(C.a,{}),children:Object(q.jsx)(J,{id:e.id,timestamp:e.date,contentItems:e.contentItems,avatar:"data:image/jpeg;base64,".concat(null===c||void 0===c?void 0:c.avatar),username:Object(m.c)(null===c||void 0===c?void 0:c.user,null===c||void 0===c?void 0:c.displayName),publicKey:e.authorId,openTipModal:Ne,openUnlockModal:Ce,tipCounter:0,tipValue:0,openDeleteModal:null})},t)})),"services"===he&&Object.entries(ce).filter((function(e){var t=Object(i.a)(e,2);return t[0],!!t[1]})).map((function(e){var t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(q.jsxs)("div",{className:Y.a.post,children:[Object(q.jsx)("strong",{children:"Service ID"}),Object(q.jsx)("p",{children:c}),Object(q.jsx)("strong",{children:"Service Tpe"}),Object(q.jsx)("p",{children:n.serviceType}),Object(q.jsx)("strong",{children:"Service Title"}),Object(q.jsx)("p",{children:n.serviceTitle}),Object(q.jsx)("strong",{children:"Service Description"}),Object(q.jsx)("p",{children:n.serviceDescription}),Object(q.jsx)("strong",{children:"Service Condition"}),Object(q.jsx)("p",{children:n.serviceCondition}),Object(q.jsx)("strong",{children:"Service Price"}),Object(q.jsx)("p",{children:n.servicePrice}),Object(q.jsx)("button",{onClick:function(){fe(Object(s.a)(Object(s.a)({},n),{},{serviceID:c,owner:T}))},children:"BUY SERVICE"})]})}))]}),Object(q.jsx)(w.a,{amt:200}),Object(q.jsxs)(k.a,{toggleModal:_e,modalOpen:a,contentStyle:{padding:"40px 30px"},children:[Object(q.jsx)(j.a,{bgColor:"#23282d",fgColor:"#4285b9",value:T,size:180,className:Y.a["profile-qrcode"]}),Object(q.jsx)("p",{className:Y.a["profile-qrcode-desc"],children:"Scan this code to contact this user"}),Object(q.jsxs)("div",{className:Y.a["profile-clipboard-container"],onClick:ye,children:[Object(q.jsx)("img",{src:U.a,className:Y.a["profile-clipboard-icon"],alt:""}),Object(q.jsx)("p",{className:Y.a["profile-clipboard-text"],children:"Tap to copy to clipboard"})]})]}),Object(q.jsx)(D.a,{tipData:se,toggleOpen:Ne}),Object(q.jsx)(M.a,{unlockData:ue,toggleOpen:Ce}),Object(q.jsx)(B,{service:pe,toggleOpen:ke}),Object(q.jsx)(N.a,{onClick:_e,large:!0,iconURL:P.a,style:{backgroundColor:"var(--yellow)"},icon:null,label:null})]}),Object(q.jsx)(_.a,{})]})}}}]);
//# sourceMappingURL=14.2d4eab9b.chunk.js.map