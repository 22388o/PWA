(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[15],{434:function(e,t,a){"use strict";var c=a(3),n=a(72),r=a.n(n),s=(a(436),a(7)),i=function(e){var t=e.children,a=e.style;return Object(s.jsx)("div",{className:"content",style:a,"data-v-bbd57d52":"",children:t})},o=(a(437),function(e){var t=e.title,a=e.toggleModal;return t?Object(s.jsxs)("div",{className:"head","data-v-72ba8ba4":"",children:[Object(s.jsx)("p",{className:"head-title","data-v-72ba8ba4":"",children:t}),Object(s.jsx)("div",{className:"head-close",onClick:a,"data-v-72ba8ba4":"",children:Object(s.jsx)("i",{className:"fas fa-times","data-v-72ba8ba4":""})})]}):null});a(438),t.a=function(e){var t=e.modalOpen,a=void 0!==t&&t,n=e.toggleModal,l=e.modalTitle,d=void 0===l?"":l,u=e.children,b=e.contentStyle,j=void 0===b?{}:b,p=Object(c.useCallback)((function(){n()}),[n]);return Object(s.jsxs)("div",{className:r()({modal:!0,open:a}),"data-v-f13c32fb":"",children:[Object(s.jsx)("div",{className:"backdrop",onClick:p,"data-v-f13c32fb":""}),Object(s.jsxs)("div",{className:"container","data-v-f13c32fb":"",children:[Object(s.jsx)(o,{title:d,toggleModal:p,"data-v-f13c32fb":""}),Object(s.jsx)(i,{style:j,"data-v-f13c32fb":"",children:u})]})]})}},436:function(e,t,a){},437:function(e,t,a){},438:function(e,t,a){},444:function(e,t,a){"use strict";var c=a(26),n=a(72),r=a.n(n),s=(a(449),a(7));t.a=function(e){var t=e.label,a=e.name,n=e.onChange,i=e.inputAction,o=e.actionIcon,l=e.value,d=e.inputMode,u=void 0===d?"text":d,b=e.type,j=void 0===b?"text":b,p=e.element,f=void 0===p?"input":p,v=e.small,O=void 0!==v&&v,h=e.disabled;return Object(s.jsxs)("div",{className:r()({group:!0,"group-disabled":h,"group-small":O}),"data-v-deca56cc":"",children:[t?Object(s.jsx)("p",{className:"group-label","data-v-deca56cc":"",children:t}):null,Object(s.jsxs)("div",{className:r()({"group-input-container":!0,"group-input-textarea-container":"textarea"===f}),"data-v-deca56cc":"",children:["textarea"===f?Object(s.jsx)("textarea",{className:"group-input group-input-textarea",name:a,onChange:n,inputMode:u,value:l,disabled:h,"data-v-deca56cc":""}):Object(s.jsx)("input",{className:"group-input",type:j,name:a,onChange:n,inputMode:u,value:l,disabled:h,"data-v-deca56cc":""}),i&&o?Object(s.jsx)("div",{className:"group-input-action",onClick:i,"data-v-deca56cc":"",children:Object(s.jsx)("i",{className:r()(Object(c.a)({"group-input-action-icon":!0,fas:!0},o,!0)),onClick:i,"data-v-deca56cc":""})}):null]})]})}},446:function(e,t,a){"use strict";var c=a(52),n=a(7);t.a=function(){return Object(n.jsxs)("div",{className:"bottom-nav-container",children:[Object(n.jsx)(c.c,{className:"bottom-nav-btn",to:"/overview",activeClassName:"active-nav-btn",children:Object(n.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-wallet"})}),Object(n.jsx)(c.c,{className:"bottom-nav-btn",to:"/chat",activeClassName:"active-nav-btn",children:Object(n.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-chat"})}),Object(n.jsx)(c.c,{className:"bottom-nav-btn",to:"/profile",activeClassName:"active-nav-btn",children:Object(n.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-profile"})}),Object(n.jsx)(c.c,{className:"bottom-nav-btn",to:"/feed",activeClassName:"active-nav-btn",children:Object(n.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-feed"})})]})}},449:function(e,t,a){},452:function(e,t,a){"use strict";var c=a(16),n=a(3),r=a(72),s=a.n(r),i=(a(453),a(7));t.a=function(e){var t=e.label,a=void 0===t?null:t,r=e.icon,o=void 0===r?null:r,l=e.iconURL,d=void 0===l?null:l,u=e.onClick,b=void 0===u?void 0:u,j=e.nestedMode,p=void 0!==j&&j,f=e.large,v=void 0!==f&&f,O=e.small,h=void 0!==O&&O,m=e.relative,x=void 0!==m&&m,g=e.children,_=void 0===g?null:g,N=e.style,k=void 0===N?{}:N,C=Object(n.useState)(!1),S=Object(c.a)(C,2),y=S[0],w=S[1],U=Object(n.useCallback)((function(){p&&w(!y)}),[y,p]),P=Object(n.useMemo)((function(){return d?Object(i.jsx)("img",{src:d,className:"add-btn-icon",alt:"","data-v-e8d381a4":""}):Object(i.jsx)("i",{className:"fas fa-".concat(null!==o&&void 0!==o?o:"plus"),"data-v-e8d381a4":""})}),[o,d]),D=Object(n.useMemo)((function(){return a?Object(i.jsx)("p",{className:"add-btn-label","data-v-e8d381a4":"",children:a}):null}),[a]);return Object(i.jsxs)("div",{className:s()({"add-btn-container":!0,"add-btn-round-container":!a,"add-btn-large":v,"add-btn-small":h}),"data-v-e8d381a4":"",children:[Object(i.jsxs)("div",{className:s()({"add-btn":!0,"add-btn-round":!a,"add-btn-extended":!!a,"add-btn-relative":x,"add-btn-open":y,"add-btn-nested":p}),onClick:null!==b&&void 0!==b?b:U,style:k,"data-v-e8d381a4":"",children:[P,D]}),_?Object(i.jsx)("div",{className:s()({"add-btn-options":!0,"add-btn-options-open":y}),"data-v-e8d381a4":"",children:_}):null]})}},453:function(e,t,a){},458:function(e,t,a){"use strict";a(3),a(511);var c=a(7);t.a=function(e){var t=e.text,a=void 0===t?"Submit":t,n=e.onClick;return Object(c.jsx)("div",{className:"submit-btn",onClick:n,"data-v-bd044ae4":"",children:Object(c.jsx)("p",{className:"submit-btn-text","data-v-bd044ae4":"",children:a})})}},459:function(e,t,a){"use strict";var c=a(3),n=a(7);t.a=function(e){var t=e.color,a=e.length,r=e.type,s=e.width,i=Object(c.useMemo)((function(){return"vertical"===r?{borderLeftStyle:"solid",borderLeftWidth:"".concat(s/2,"px"),borderLeftColor:t,borderRightStyle:"solid",borderRightWidth:"".concat(s/2,"px"),borderRightColor:t,height:a}:"horizontal"===r?{borderTopStyle:"solid",borderTopWidth:s/2,borderTopColor:t,borderBottomStyle:"solid",borderBottomWidth:s/2,borderBottomColor:t,width:a}:{}}),[t,a,r,s]);return Object(n.jsx)("div",{style:i})}},472:function(e,t,a){"use strict";var c=a(72),n=a.n(c),r=a(435),s=a(459),i=a(473),o=a.n(i),l=a(7);t.a=function(e){var t=e.onChange,a=e.selected;return Object(l.jsxs)("div",{className:n()(r.width100,r.rowCentered,r.spaceAround,r.padding12,o.a.container),children:[Object(l.jsx)("span",{className:n()(r.unselectable,"posts"===a&&o.a.selected,"services"===a&&o.a.unselected),onClick:function(){t("posts")},children:"Posts"}),Object(l.jsx)("div",{className:r.absolute,children:Object(l.jsx)(s.a,{color:"white",length:16,type:"vertical",width:2})}),Object(l.jsx)("span",{className:n()(r.unselectable,"services"===a&&o.a.selected,"posts"===a&&o.a.unselected),onClick:function(){t("services")},children:"Services"})]})}},473:function(e,t,a){e.exports={container:"ProfileDivider_container__3ob9k",selected:"ProfileDivider_selected__3U98y",unselected:"ProfileDivider_unselected__1Z_qd",divider:"ProfileDivider_divider__1IzYV"}},474:function(e,t,a){"use strict";t.a=a.p+"static/media/clipboard.beb19e1e.svg"},475:function(e,t,a){"use strict";t.a=a.p+"static/media/qrcode.69103c6c.svg"},510:function(e,t,a){"use strict";var c=a(2),n=a.n(c),r=a(6),s=a(16),i=a(3),o=a(40),l=a(434),d=a(458),u=a(444),b=a(50),j=a(145),p=(a(512),a(7));t.a=function(e){var t=e.tipData,a=e.toggleOpen,c=Object(o.b)(),f=Object(i.useState)(""),v=Object(s.a)(f,2),O=v[0],h=v[1],m=Object(i.useState)(!1),x=Object(s.a)(m,2),g=x[0],_=x[1],N=Object(i.useState)(0),k=Object(s.a)(N,2),C=k[0],S=k[1],y=Object(i.useState)(!1),w=Object(s.a)(y,2),U=w[0],P=w[1],D=Object(i.useCallback)((function(e){"amount"===e.target.name&&S(e.target.value)}),[]),M=Object(i.useCallback)(function(){var e=Object(r.a)(n.a.mark((function e(a){var r,s,i,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,_(!0),e.next=5,c(Object(b.c)({amount:C,publicKey:t.publicKey,postId:t.postID}));case 5:P(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),t&&(i=e.t0.message,o=null===(r=e.t0.response)||void 0===r||null===(s=r.data)||void 0===s?void 0:s.errorMessage,h(null!==o&&void 0!==o?o:i));case 12:return e.prev=12,_(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(t){return e.apply(this,arguments)}}(),[c,C,t]);return Object(i.useEffect)((function(){t||(_(!1),h(null),P(!1))}),[t]),Object(p.jsx)(l.a,{toggleModal:a,modalOpen:!!t,modalTitle:"Send Tip","data-v-b0a0084a":"",children:U?Object(p.jsxs)("div",{className:"tip-modal-success","data-v-b0a0084a":"",children:[Object(p.jsx)("i",{className:"tip-success-icon fas fa-check-circle","data-v-b0a0084a":""}),Object(p.jsx)("p",{className:"tip-success-title","data-v-b0a0084a":"",children:"Post tipped successfully!"}),Object(p.jsx)("p",{className:"tip-success-desc","data-v-b0a0084a":""})]}):Object(p.jsxs)("form",{className:"modal-form tip-form",onSubmit:M,"data-v-b0a0084a":"",children:[O?Object(p.jsx)("div",{className:"form-error","data-v-b0a0084a":"",children:O}):null,g?Object(p.jsx)(j.a,{overlay:!0,text:"Sending Tip...","data-v-b0a0084a":""}):null,Object(p.jsx)("p",{className:"tip-modal-desc","data-v-b0a0084a":"",children:"Please specify the amount of sats you'd like to tip this user with below."}),Object(p.jsx)(u.a,{name:"amount",onChange:D,value:C,inputMode:"decimal",small:!0,"data-v-b0a0084a":""}),Object(p.jsx)(d.a,{text:"SEND TIP",onClick:M,"data-v-b0a0084a":""})]})})}},511:function(e,t,a){},512:function(e,t,a){},513:function(e,t,a){"use strict";var c=a(2),n=a.n(c),r=a(6),s=a(16),i=a(3),o=a(40),l=a(434),d=a(458),u=a(39),b=a(145),j=(a(514),a(7));t.a=function(e){var t=e.unlockData,a=e.toggleOpen,c=Object(o.b)(),p=Object(i.useState)(""),f=Object(s.a)(p,2),v=f[0],O=f[1],h=Object(i.useState)(!1),m=Object(s.a)(h,2),x=m[0],g=m[1],_=Object(i.useState)(!1),N=Object(s.a)(_,2),k=N[0],C=N[1],S=Object(i.useCallback)(function(){var e=Object(r.a)(n.a.mark((function e(a){var r,s,i,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,g(!0),e.next=5,Object(u.j)(100,t.publicKey,t.postID)(c);case 5:C(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),t&&(i=e.t0.message,o=null===(r=e.t0.response)||void 0===r||null===(s=r.data)||void 0===s?void 0:s.errorMessage,O(null!==o&&void 0!==o?o:i));case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(t){return e.apply(this,arguments)}}(),[c,t]);return Object(i.useEffect)((function(){t||(g(!1),O(null),C(!1))}),[t]),Object(j.jsx)(l.a,{toggleModal:a,modalOpen:!!t,modalTitle:"Unlock content","data-v-1c0e4f07":"",children:k?Object(j.jsxs)("div",{className:"tip-modal-success","data-v-1c0e4f07":"",children:[Object(j.jsx)("i",{className:"tip-success-icon fas fa-check-circle","data-v-1c0e4f07":""}),Object(j.jsx)("p",{className:"tip-success-title","data-v-1c0e4f07":"",children:"Content unlocked successfully!"})]}):Object(j.jsxs)("form",{className:"modal-form tip-form",onSubmit:S,"data-v-1c0e4f07":"",children:[v?Object(j.jsx)("div",{className:"form-error","data-v-1c0e4f07":"",children:v}):null,x?Object(j.jsx)(b.a,{overlay:!0,text:"Sending Tip...","data-v-1c0e4f07":""}):null,Object(j.jsx)("p",{className:"tip-modal-desc","data-v-1c0e4f07":"",children:"100 sats will be sent to the owner of the post to unlock the content"}),Object(j.jsx)(d.a,{text:"UNLOCK",onClick:S,"data-v-1c0e4f07":""})]})})}},514:function(e,t,a){},675:function(e,t,a){},676:function(e,t,a){e.exports={"profile-page":"OtherUser_profile-page__OhC-_","profile-container":"OtherUser_profile-container__2oq7s","profile-cover":"OtherUser_profile-cover__3Fq6P","profile-info-container":"OtherUser_profile-info-container__3qnqN","profile-avatar":"OtherUser_profile-avatar__S6INq","profile-name":"OtherUser_profile-name__3chmC","profile-desc":"OtherUser_profile-desc__f9Dsj","config-btn":"OtherUser_config-btn__t33_B","config-btn-icon":"OtherUser_config-btn-icon__1p_6O","config-btn-text":"OtherUser_config-btn-text__1Wg_T","profile-choice-container":"OtherUser_profile-choice-container__3-xgF","profile-choice-icon":"OtherUser_profile-choice-icon__3iOE1","profile-choice-text":"OtherUser_profile-choice-text__deYLl","profile-qrcode":"OtherUser_profile-qrcode__2Ok54","profile-qrcode-desc":"OtherUser_profile-qrcode-desc__3cp0P","profile-clipboard-container":"OtherUser_profile-clipboard-container__1P_p8","profile-clipboard-icon":"OtherUser_profile-clipboard-icon__1nW2U","profile-clipboard-text":"OtherUser_profile-clipboard-text__2g4AC","publish-content-form":"OtherUser_publish-content-form__1YdVa","publish-content-title":"OtherUser_publish-content-title__3EsYE","publish-content-icon":"OtherUser_publish-content-icon__291ch","m-1":"OtherUser_m-1__1dpvP"}},677:function(e,t,a){e.exports={container:"FollowBtn_container__2c7Cj",icon:"FollowBtn_icon__3orep",text:"FollowBtn_text__1o7CS"}},712:function(e,t,a){"use strict";a.r(t);var c=a(21),n=a(2),r=a.n(n),s=a(0),i=a(6),o=a(16),l=a(3),d=a.n(l),u=a(40),b=a(471),j=a.n(b),p=a(22),f=a(72),v=a.n(f),O=a(87),h=a(14),m=a(90),x=a(48),g=a(20),_=a(446),N=a(452),k=a(434),C=a(145),S=a(445),y=a(472),w=a(443),U=a(474),P=a(475),D=a(510),M=a(513),T=a(458),E=a(100),I=a(39),q=(a(675),a(7)),B=function(e){var t=e.service,a=e.toggleOpen,c=Object(u.b)(),n=Object(l.useState)(""),s=Object(o.a)(n,2),d=s[0],b=s[1],j=Object(l.useState)(!1),p=Object(o.a)(j,2),f=p[0],v=p[1],O=Object(l.useState)(null),h=Object(o.a)(O,2),m=h[0],x=h[1],g=Object(l.useState)(!1),_=Object(o.a)(g,2),N=_[0],S=_[1],y=Object(l.useCallback)(function(){var e=Object(i.a)(r.a.mark((function e(a){var n,s,i,o,l,d,u,j,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),e.prev=1,n=t.servicePrice,s=t.owner,i=t.serviceID,o=t.serviceType,s&&i&&"number"===typeof Number(n)){e.next=7;break}return console.error("invalid service provided"),console.error(t),e.abrupt("return");case 7:return v(!0),e.next=10,Object(E.b)(s,i,n)(c);case 10:l=e.sent,console.log(l),x(l),"torrentSeed"===o&&Object(I.b)(l.seedUrl,l.tokens[0])(c),"streamSeed"===o&&Object(I.e)(l.seedUrl,l.tokens[0])(c),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),console.error(e.t0),t&&(j=e.t0.message,p=null===(d=e.t0.response)||void 0===d||null===(u=d.data)||void 0===u?void 0:u.errorMessage,b(null!==p&&void 0!==p?p:j));case 21:return e.prev=21,v(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[1,17,21,24]])})));return function(t){return e.apply(this,arguments)}}(),[c,t]);Object(l.useEffect)((function(){t||(v(!1),b(null),x(null))}),[m]);var w=Object(l.useCallback)((function(){navigator.clipboard.writeText(JSON.stringify(m)),S(!0)}),[m,S]);return Object(q.jsx)(k.a,{toggleModal:a,modalOpen:!!t,modalTitle:"Buy Service","data-v-a152ead3":"",children:m?Object(q.jsxs)("div",{className:"tip-modal-success","data-v-a152ead3":"",children:[Object(q.jsx)("i",{className:"tip-success-icon fas fa-check-circle","data-v-a152ead3":""}),Object(q.jsx)("p",{className:"tip-success-title","data-v-a152ead3":"",children:"You successfully bought this service!"}),Object(q.jsx)("p",{"data-v-a152ead3":"",children:JSON.stringify(m)}),Object(q.jsx)("button",{onClick:w,"data-v-a152ead3":"",children:"COPY TO CLIPBOARD"}),N&&Object(q.jsx)("p",{"data-v-a152ead3":"",children:"Copied!"})]}):Object(q.jsxs)("form",{className:"modal-form tip-form",onSubmit:y,"data-v-a152ead3":"",children:[d?Object(q.jsx)("div",{className:"form-error","data-v-a152ead3":"",children:d}):null,f?Object(q.jsx)(C.a,{overlay:!0,text:"Sending Tip...","data-v-a152ead3":""}):null,Object(q.jsxs)("p",{className:"tip-modal-desc","data-v-a152ead3":"",children:[t&&t.servicePrice," sats will be sent to the owner of the service provider"]}),Object(q.jsx)(T.a,{text:"BUY",onClick:y,"data-v-a152ead3":""})]})})},K=a(18),A=a(676),L=a.n(A),Y=a(88),F=a(435),R=a(677),V=a.n(R),W=function(e){var t=e.publicKey,a=!!K.useSelector(K.selectFollows).find((function(e){return e.user===t})),c=Object(l.useState)(!1),n=Object(o.a)(c,2),s=n[0],d=n[1],u=Object(l.useCallback)(Object(i.a)(r.a.mark((function e(){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!s){e.next=3;break}return e.abrupt("return");case 3:if(d(!0),c={status:-1,data:{errorMessage:""}},!a){e.next=11;break}return e.next=8,Y.b.delete("/api/gun/follows/".concat(t));case 8:c=e.sent,e.next=14;break;case 11:return e.next=13,Y.b.put("/api/gun/follows/".concat(t),{});case 13:c=e.sent;case 14:if(200===c.status){e.next=16;break}throw new Error(c.data.errorMessage);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),a?alert("Could not unfollow: ".concat(e.t0.message)):alert("Could not follow: ".concat(e.t0.message));case 21:return e.prev=21,d(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])}))),[s,d,a,t]);return Object(q.jsxs)("div",{className:V.a.container,onClick:u,children:[Object(q.jsx)("i",{className:v()(V.a.icon,"fas","fa-user-plus")}),Object(q.jsx)("p",{className:v()(F.unselectable,V.a.text),children:s?"...":a?"Unfollow":"Follow"})]})},z=a(50),J=d.a.lazy((function(){return Promise.all([a.e(1),a.e(4)]).then(a.bind(null,560))})),Z=d.a.lazy((function(){return Promise.all([a.e(2),a.e(1),a.e(3),a.e(7)]).then(a.bind(null,719))}));t.default=function(){var e=Object(u.b)(),t=Object(l.useState)(!1),a=Object(o.a)(t,2),n=a[0],d=a[1],b=Object(u.c)((function(e){return e.userProfiles})),f=Object(p.i)().publicKey,T=K.useSelector(K.selectUser(f)),E=Object(l.useState)([]),I=Object(o.a)(E,2),A=I[0],Y=I[1],F=Object(l.useState)([]),R=Object(o.a)(F,2),V=R[0],G=R[1],H=Object(l.useState)([]),Q=Object(o.a)(H,2),X=Q[0],$=Q[1],ee=Object(l.useState)({}),te=Object(o.a)(ee,2),ae=te[0],ce=te[1],ne=Object(l.useState)(null),re=Object(o.a)(ne,2),se=re[0],ie=re[1],oe=Object(l.useState)(null),le=Object(o.a)(oe,2),de=le[0],ue=le[1],be=Object(l.useState)(null),je=Object(o.a)(be,2),pe=je[0],fe=je[1],ve=Object(l.useState)("posts"),Oe=Object(o.a)(ve,2),he=Oe[0],me=Oe[1];Object(l.useEffect)((function(){return Object(z.d)()(e),function(){Object(z.g)()}}),[]);var xe=Object(l.useCallback)((function(){var e="".concat(f,"::posts::on"),t=Object(g.e)({query:e,reconnect:!1,onData:function(){var e=Object(i.a)(r.a.mark((function e(t){var a,c,n,l,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.entries(t),c=a.filter((function(e){var t=Object(o.a)(e,2),a=t[0];return null!==t[1]&&!O.a.includes(a)})).map((function(e){return Object(o.a)(e,1)[0]})),n=c.map(function(){var e=Object(i.a)(r.a.mark((function e(t){var a,c,n,i,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/gun/otheruser/".concat(f,"/load/posts>").concat(t));case 2:return a=e.sent,c=a.data,n=c.data.tipsSet?Object.values(c.data.tipsSet):[],i=n.length,o=i>0?n.reduce((function(e,t){return Number(t)+Number(e)})):0,e.abrupt("return",Object(s.a)(Object(s.a)({},c.data),{},{id:t,authorId:f,tipCounter:i,tipValue:o}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=5,Promise.allSettled(n);case 5:l=e.sent,d=l.filter((function(e){return"fulfilled"===e.status})).map((function(e){return e.value})),Y(d);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});return Object(g.f)(t)}),[f]),ge=Object(l.useCallback)((function(){var e="".concat(f,"::sharedPosts::on"),t=Object(g.e)({query:e,reconnect:!1,onData:function(){var e=Object(i.a)(r.a.mark((function e(t){var a,c,n,l,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.entries(t),c=a.filter((function(e){var t=Object(o.a)(e,2),a=t[0];return null!==t[1]&&!O.a.includes(a)})).map((function(e){return Object(o.a)(e,1)[0]})),n=c.map(function(){var e=Object(i.a)(r.a.mark((function e(t){var a,c,n,i,o,l,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/gun/otheruser/".concat(f,"/load/sharedPosts>").concat(t));case 2:if(a=e.sent,(c=a.data).data&&c.data.originalAuthor){e.next=6;break}throw new Error("invalid shared post provided for user "+f);case 6:return e.next=8,h.a.get("/api/gun/otheruser/".concat(c.data.originalAuthor,"/load/posts>").concat(t));case 8:return n=e.sent,i=n.data,o=i.data.tipsSet?Object.values(i.data.tipsSet):[],l=o.length,d=l>0?o.reduce((function(e,t){return Number(t)+Number(e)})):0,e.abrupt("return",Object(s.a)(Object(s.a)({},c.data),{},{originalPost:Object(s.a)(Object(s.a)({},i.data),{},{id:t,tipCounter:l,tipValue:d}),authorId:f,type:"shared"}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=5,Promise.allSettled(n);case 5:l=e.sent,d=l.filter((function(e){return"fulfilled"===e.status})).map((function(e){return e.value})),G(d);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});return Object(g.f)(t)}),[f]);Object(l.useEffect)((function(){return e(Object(x.b)(f))}),[e,f]),Object(l.useEffect)((function(){return xe()}),[xe]),Object(l.useEffect)((function(){return ge()}),[ge]),Object(l.useEffect)((function(){var t=[].concat(Object(c.a)(A),Object(c.a)(V)).sort((function(e,t){return t.date-e.date}));$(t);var a=V.filter((function(e){return!b[e.originalAuthor]})).map((function(t){var a=t.originalAuthor;return e(Object(x.b)(a)),function(){e(Object(x.c)(a))}}));return function(){a.forEach((function(e){return e()}))}}),[e,A,b,V]),Object(l.useEffect)((function(){h.a.get("/api/gun/otheruser/".concat(f,"/load/offeredServices")).then((function(e){var t=e.data;ce(t.data)}))}),[f]);var _e=Object(l.useCallback)((function(){d(!n)}),[n]),Ne=Object(l.useCallback)((function(e){!se&&e||ie(null),ie(e)}),[se]),ke=Object(l.useCallback)((function(e){!pe&&e||fe(null),fe(e)}),[pe]),Ce=Object(l.useCallback)((function(e){!de&&e||ue(null),ue(e)}),[de]),Se=Object(l.useCallback)((function(){navigator.clipboard.writeText(f)}),[f]),ye=Object(l.useCallback)((function(e){me(e)}),[]);return Object(q.jsxs)("div",{className:v()("page-container",L.a["profile-page"]),children:[Object(q.jsxs)("div",{className:L.a["profile-container"],children:[Object(q.jsx)("div",{className:"profile-cover",children:T.header&&Object(q.jsx)("img",{alt:"User set profile header.",src:"data:image/jpeg;base64,".concat(T.header)})}),Object(q.jsxs)("div",{className:L.a["profile-info-container"],children:[Object(q.jsx)("div",{className:L.a["profile-avatar"],style:{height:"".concat(122,"px"),width:"".concat(122,"px")},children:Object(q.jsx)(S.a,{height:122,publicKey:f,greyBorder:!0})}),Object(q.jsxs)("div",{className:L.a["profile-info"],children:[Object(q.jsx)("p",{className:L.a["profile-name"],children:T.displayName}),Object(q.jsx)("p",{className:L.a["profile-desc"],children:T.bio||"Shockwallet user"}),Object(q.jsx)(W,{publicKey:f})]})]}),Object(q.jsx)(y.a,{onChange:ye,selected:he}),Object(q.jsxs)("div",{children:["posts"===he&&X.map((function(e,t){var a=b[e.authorId];if("shared"===e.type){if(!e.originalPost)return null;var c=e.originalAuthor,n=b[c];return Object(q.jsx)(l.Suspense,{fallback:Object(q.jsx)(C.a,{}),children:Object(q.jsx)(Z,{originalPost:e.originalPost,originalPostProfile:n,sharedTimestamp:e.shareDate,sharerProfile:a,postPublicKey:c,openTipModal:Ne,openUnlockModal:Ce,openDeleteModal:null})},t)}return Object(q.jsx)(l.Suspense,{fallback:Object(q.jsx)(C.a,{}),children:Object(q.jsx)(J,{id:e.id,timestamp:e.date,contentItems:e.contentItems,avatar:"data:image/jpeg;base64,".concat(null===a||void 0===a?void 0:a.avatar),username:Object(m.c)(null===a||void 0===a?void 0:a.user,null===a||void 0===a?void 0:a.displayName),publicKey:e.authorId,openTipModal:Ne,openUnlockModal:Ce,tipCounter:e.tipCounter||0,tipValue:e.tipValue||0,openDeleteModal:null})},t)})),"services"===he&&Object.entries(ae).filter((function(e){var t=Object(o.a)(e,2);return t[0],!!t[1]})).map((function(e){var t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(q.jsxs)("div",{className:L.a.post,children:[Object(q.jsx)("strong",{children:"Service ID"}),Object(q.jsx)("p",{children:a}),Object(q.jsx)("strong",{children:"Service Tpe"}),Object(q.jsx)("p",{children:c.serviceType}),Object(q.jsx)("strong",{children:"Service Title"}),Object(q.jsx)("p",{children:c.serviceTitle}),Object(q.jsx)("strong",{children:"Service Description"}),Object(q.jsx)("p",{children:c.serviceDescription}),Object(q.jsx)("strong",{children:"Service Condition"}),Object(q.jsx)("p",{children:c.serviceCondition}),Object(q.jsx)("strong",{children:"Service Price"}),Object(q.jsx)("p",{children:c.servicePrice}),Object(q.jsx)("button",{onClick:function(){fe(Object(s.a)(Object(s.a)({},c),{},{serviceID:a,owner:f}))},children:"BUY SERVICE"})]})}))]}),Object(q.jsx)(w.a,{amt:200}),Object(q.jsxs)(k.a,{toggleModal:_e,modalOpen:n,contentStyle:{padding:"40px 30px"},children:[Object(q.jsx)(j.a,{bgColor:"#23282d",fgColor:"#4285b9",value:f,size:180,className:L.a["profile-qrcode"]}),Object(q.jsx)("p",{className:L.a["profile-qrcode-desc"],children:"Scan this code to contact this user"}),Object(q.jsxs)("div",{className:L.a["profile-clipboard-container"],onClick:Se,children:[Object(q.jsx)("img",{src:U.a,className:L.a["profile-clipboard-icon"],alt:""}),Object(q.jsx)("p",{className:L.a["profile-clipboard-text"],children:"Tap to copy to clipboard"})]})]}),Object(q.jsx)(D.a,{tipData:se,toggleOpen:Ne}),Object(q.jsx)(M.a,{unlockData:de,toggleOpen:Ce}),Object(q.jsx)(B,{service:pe,toggleOpen:ke}),Object(q.jsx)(N.a,{onClick:_e,large:!0,iconURL:P.a,style:{backgroundColor:"var(--yellow)"},icon:null,label:null})]}),Object(q.jsx)(_.a,{})]})}}}]);
//# sourceMappingURL=15.e0b26777.chunk.js.map