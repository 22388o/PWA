(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[26,8,35],{577:function(e,a,t){"use strict";var c=t(0),i=t(12),d=t(3),s=t(868),n=t(173),o=(t(600),t(579),t(4));a.a=function(e){var a=e.id,t=void 0===a?"":a,l=e.item,r=e.index,v=void 0===r?0:r,u=e.postId,b=void 0===u?"":u,j=e.tipValue,p=void 0===j?0:j,m=e.tipCounter,O=void 0===m?0:m,f=e.hideRibbon,h=void 0!==f&&f,x=e.width,g=void 0===x?null:x,y=e.disableZoom,k=void 0!==y&&y,C=e.style,N=void 0===C?{}:C,w=Object(d.useState)(!1),S=Object(i.a)(w,2),I=S[0],R=S[1],L=Object(d.useState)(!1),M=Object(i.a)(L,2),P=M[0],T=M[1],U=Object(d.useState)(!0),K=Object(i.a)(U,2),E=K[0],V=K[1],D=Object(d.useState)(null),A=Object(i.a)(D,2),Z=A[0],z=A[1],B=Object(d.useCallback)((function(e){if(clearTimeout(Z),R(e),!e&&P){T(!1);var a=setTimeout((function(){V(!0)}),200);z(a)}e&&V(!1)}),[Z,P,R,T,V,z]),J=decodeURIComponent(l.magnetURI.replace(/.*(ws=)/gi,"")),F=Object(c.a)(Object(c.a)({},N),{},{opacity:E?1:0});g&&(F.width=g);var W=Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{className:"image torrent-img torrent-img-".concat(b,"-").concat(t),alt:"Post Media","data-torrent":l.magnetURI,"data-file-key":v,style:F,src:J,"data-v-3a98b91e":""}),Object(o.jsx)("img",{className:"image enlarged-img enlarged-img-".concat(b,"-").concat(t),alt:"Post Media","data-file-key":v,onLoad:function(){T(!0)},style:{opacity:I?1:0,display:I?"block":"none"},src:J,"data-v-3a98b91e":""}),!h&&Object(o.jsx)(n.a,{tipCounter:O,tipValue:p,zoomed:I,"data-v-3a98b91e":""})]});return Object(o.jsx)("div",{className:"media-container","data-v-3a98b91e":"",children:k?W:Object(o.jsx)(s.a,{isZoomed:I,onZoomChange:B,overlayBgColorStart:"#16191c00",overlayBgColorEnd:"#16191c","data-v-3a98b91e":"",children:W})})}},579:function(e,a,t){},580:function(e,a,t){},581:function(e,a,t){},584:function(e,a,t){"use strict";t.r(a);var c=t(12),i=t(3),d=t(55),s=t(602),n=t(583),o=t(80),l=t.n(o),r=t(81),v=t(17),u=t(564),b=t(562),j=t(173),p=(t(580),t(4)),m=function(e){var a=e.id,t=void 0===a?"":a,c=e.item,i=e.index,d=void 0===i?0:i,s=e.postId,n=void 0===s?"":s,o=e.tipValue,l=void 0===o?0:o,r=e.tipCounter,v=void 0===r?0:r,u=e.hideRibbon,b=void 0!==u&&u,m=e.width,O=void 0===m?null:m,f=decodeURIComponent(c.magnetURI.replace(/.*(ws=)/gi,"")),h={};return O&&(h.width=O),Object(p.jsx)("div",{className:"media-container","data-v-a2c32d7f":"",children:Object(p.jsxs)("div",{className:"video-container",style:{cursor:"pointer"},"data-v-a2c32d7f":"",children:[Object(p.jsx)("video",{style:h,className:"torrent-video torrent-video-".concat(n,"-").concat(t),"data-torrent":c.magnetURI,"data-file-key":d,controls:!0,"data-played":"false",src:f,"data-v-a2c32d7f":""}),!b&&Object(p.jsx)(j.a,{tipCounter:v,tipValue:l,zoomed:!1,"data-v-a2c32d7f":""})]})})},O=t(577),f=t(174),h=(t(581),t.p+"static/media/share.8ed36b2d.svg");a.default=function(e){var a=e.id,t=e.timestamp,o=e.tipCounter,j=e.tipValue,x=e.publicKey,g=e.openTipModal,y=e.openUnlockModal,k=e.contentItems,C=void 0===k?{}:k,N=e.username,w=e.openDeleteModal,S=void 0===w?void 0:w,I=e.openShareModal,R=void 0===I?function(e){}:I,L=v.useSelector((function(e){return e.content.unlockedContent})),M=Object(s.useEmblaCarousel)({slidesToScroll:1,align:"center"}),P=Object(c.a)(M,2),T=P[0],U=P[1],K=Object(i.useState)(0),E=Object(c.a)(K,2),V=E[0],D=E[1],A=Object(i.useState)(0),Z=Object(c.a)(A,2),z=Z[0],B=Z[1],J=Object(i.useState)(!1),F=Object(c.a)(J,2),W=F[0],q=F[1],G=Object(i.useState)(""),H=Object(c.a)(G,2),Q=H[0],X=H[1],Y=Object(i.useState)(0),$=Object(c.a)(Y,2),_=$[0],ee=$[1],ae=!0;Object(i.useEffect)((function(){var e=Object.values(C),a=e.find((function(e){return"video/embedded"===e.type&&"wasLive"===e.liveStatus})),t=e.find((function(e){return"stream/embedded"===e.type&&"live"===e.liveStatus})),c="";a&&(c="Was Live"),t&&(c="Is Live",t.viewersCounter&&ee(t.viewersCounter)),c&&X(c)}),[C,X]);var te=Object(i.useCallback)((function(){return Object.entries(C).filter((function(e){var a=Object(c.a)(e,2);a[0];return"text/paragraph"!==a[1].type}))}),[C]);Object(i.useEffect)((function(){te().forEach((function(e){var a=Object(c.a)(e,2),t=a[0],i=a[1],d="".concat(x,">posts>").concat(t);i.isPrivate&&!L[d]&&q(!0)}))}),[C,te,x,L]);var ce=function(e,t){var i=Object(c.a)(e,2),d=i[0],s=i[1];if("text/paragraph"===s.type)return Object(p.jsx)("p",{"data-v-e3552a2d":"",children:s.text},d);var n=s;if(s.isPrivate){var l="".concat(x,">posts>").concat(a),r=L[l];if(!r)return Object(p.jsx)("div",{"data-v-e3552a2d":"",children:Object(p.jsx)("i",{className:"fas fa-lock fa-10x","data-v-e3552a2d":""})},d);n.magnetURI=r}return"image/embedded"===s.type?Object(p.jsx)(O.a,{id:d,item:n,index:t,postId:a,tipCounter:o,tipValue:j,hideRibbon:void 0,width:void 0,"data-v-e3552a2d":""},"".concat(a,"-").concat(t)):"video/embedded"===s.type?Object(p.jsx)(m,{id:d,item:n,index:t,postId:a,tipCounter:o,tipValue:j,hideRibbon:void 0,width:void 0,"data-v-e3552a2d":""},"".concat(a,"-").concat(t)):"stream/embedded"===s.type?Object(p.jsx)(f.a,{id:d,item:n,index:t,postId:a,tipCounter:o,tipValue:j,hideRibbon:void 0,width:void 0,"data-v-e3552a2d":""},"".concat(a,"-").concat(t)):null},ie=Object(i.useCallback)((function(){U&&U.canScrollNext()&&U.scrollNext()}),[U]),de=Object(i.useCallback)((function(){U&&U.canScrollPrev()&&U.scrollPrev()}),[U]),se=Object(i.useCallback)((function(e){if(0!==V){var a=e.key;"ArrowRight"===a&&ie(),"ArrowLeft"===a&&de()}}),[V,de,ie]),ne=Object(i.useCallback)((function(){B(U.selectedScrollSnap())}),[U,B]);Object(i.useEffect)((function(){if(U)return U.on("scroll",ne),D(U.scrollSnapList().length),window.addEventListener("keydown",se),function(){window.removeEventListener("keydown",se),U.off("scroll",ne)}}),[U,V,se,ne]);var oe=Object(i.useCallback)((function(){g({targetType:"post",postID:a,publicKey:x})}),[a,ae,g,x]),le=Object(i.useCallback)((function(){y({targetType:"unlock",postID:a,publicKey:x})}),[a,ae,y,x]),re=Object(i.useCallback)((function(){S({id:a,shared:!1})}),[a,S]),ve=Object(i.useCallback)((function(){R({targetType:"share",postID:a,publicKey:x})}),[x,a,R]);return Object(i.useEffect)((function(){try{n.a.rebuild()}catch(e){console.log("Error inside <Post />: ",e)}}),[]),Object(p.jsxs)("div",{className:"post","data-v-e3552a2d":"",children:[Object(p.jsxs)("div",{className:"head","data-v-e3552a2d":"",children:[Object(p.jsxs)("div",{className:"user","data-v-e3552a2d":"",children:[Object(p.jsx)(u.a,{height:50,publicKey:x,"data-v-e3552a2d":""}),Object(p.jsx)(b.a,{amt:10,insideRow:!0,"data-v-e3552a2d":""}),Object(p.jsxs)("div",{className:"details","data-v-e3552a2d":"",children:[Object(p.jsxs)("div",{className:"username","data-v-e3552a2d":"",children:[Object(p.jsx)(d.b,{to:"/otherUser/".concat(x),"data-v-e3552a2d":"",children:N}),Q&&Object(p.jsxs)("p",{className:"liveStatus","data-v-e3552a2d":"",children:[Q,Object(p.jsx)("i",{className:"fas fa-circle liveStatusIcon ".concat("Is Live"===Q?"liveIcon":""),"data-v-e3552a2d":""}),"Is Live"===Q&&Object(p.jsxs)("span",{"data-v-e3552a2d":"",children:[" | ",_," watching"]})]})]}),Object(p.jsx)("p",{"data-v-e3552a2d":"",children:t&&"number"===typeof t?r.DateTime.fromMillis(t).toRelative():"Loading..."})]})]}),S&&Object(p.jsx)("i",{className:"fas fa-trash",onClick:re,"data-v-e3552a2d":""})]}),Object(p.jsxs)("div",{className:"content","data-v-e3552a2d":"",children:[Object.entries(C).filter((function(e){var a=Object(c.a)(e,2);return a[0],"text/paragraph"===a[1].type})).map(ce),Object(p.jsxs)("div",{className:"media-content-carousel","data-v-e3552a2d":"",children:[V>1?Object(p.jsxs)("div",{className:"media-carousel-controls-container","data-v-e3552a2d":"",children:[Object(p.jsx)("div",{className:"media-carousel-arrow fas fa-angle-left",onClick:de,"data-v-e3552a2d":""}),Object(p.jsx)("div",{className:"media-carousel-pages","data-v-e3552a2d":"",children:Array.from({length:V}).map((function(e,a){return Object(p.jsx)("div",{className:l()({"media-carousel-page":!0,"active-carousel-page":z===a}),onClick:function(){return null===U||void 0===U?void 0:U.scrollTo(a)},"data-v-e3552a2d":""},a)}))}),Object(p.jsx)("div",{className:"media-carousel-arrow fas fa-angle-right",onClick:ie,"data-v-e3552a2d":""})]}):null,Object(p.jsx)("div",{className:"media-content-root",ref:T,"data-v-e3552a2d":"",children:Object(p.jsx)("div",{className:"media-content-container","data-v-e3552a2d":"",children:te().map(ce)})})]})]}),Object(p.jsxs)("div",{className:"actions","data-v-e3552a2d":"",children:[Object(p.jsx)("div",{"data-v-e3552a2d":""}),Object(p.jsx)("div",{className:"icon-tip-btn","data-tip":W?"Unlock this post":"Tip this post",onClick:W?le:oe,"data-v-e3552a2d":"",children:Object(p.jsx)("div",{className:"tip-icon icon-thin-feed","data-v-e3552a2d":""})}),R&&Object(p.jsx)("div",{className:"icon-tip-btn","data-tip":"share",onClick:ve,"data-v-e3552a2d":"",children:Object(p.jsx)("img",{alt:"Share this post",src:h,style:{color:"#4285b9",marginLeft:"auto"},"data-v-e3552a2d":""})}),!R&&Object(p.jsx)("div",{"data-v-e3552a2d":""})]})]})}},603:function(e,a,t){},658:function(e,a,t){"use strict";t.r(a);var c=t(2),i=t.n(c),d=t(5),s=t(3),n=t(81),o=t(583),l=t(24),r=t(584),v=(t.p,t(603),t(594)),u=t(171),b=t(17),j=t(564),p=t(562),m=t(4);a.default=function(e){var a,t,c=e.sharerProfile,O=e.originalPostProfile,f=e.originalPost,h=e.sharedTimestamp,x=e.postPublicKey,g=e.openTipModal,y=e.openUnlockModal,k=e.openDeleteModal,C=void 0===k?void 0:k,N=e.openShareModal,w=void 0===N?function(e){}:N,S=f,I=Object(s.useCallback)(Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S&&Object(v.a)([S],!1);case 1:case"end":return e.stop()}}),e)}))),[S]),R=Object(s.useCallback)((function(){C({id:S.id,shared:!0})}),[S,C]);Object(s.useLayoutEffect)((function(){o.a.rebuild(),I()}),[I]);var L=b.useSelector(b.selectSelfPublicKey);c.publicKey,l.g(b.useSelector(b.selectUser(c.publicKey)).lastSeenApp);return Object(m.jsxs)("div",{className:"post shared-post","data-v-6a9c9889":"",children:[Object(m.jsxs)("div",{className:"head","data-v-6a9c9889":"",children:[Object(m.jsxs)("div",{className:"user","data-v-6a9c9889":"",children:[Object(m.jsx)(j.a,{height:50,publicKey:c.publicKey,"data-v-6a9c9889":""}),Object(m.jsx)(p.a,{amt:10,insideRow:!0,"data-v-6a9c9889":""}),Object(m.jsxs)("div",{className:"details","data-v-6a9c9889":"",children:[Object(m.jsx)("p",{"data-v-6a9c9889":"",children:null===c||void 0===c?void 0:c.displayName}),Object(m.jsx)("p",{"data-v-6a9c9889":"",children:h&&"number"===typeof h?n.DateTime.fromMillis(h).toRelative():"Loading..."})]})]}),C&&Object(m.jsx)("i",{className:"fas fa-trash",onClick:R,"data-v-6a9c9889":""})]}),Object(m.jsx)("div",{className:"shared-content","data-v-6a9c9889":"",children:S&&O?Object(m.jsx)(r.default,{id:S.id,timestamp:S.date,tipCounter:S.tipCounter||0,tipValue:S.tipValue||0,publicKey:x,openTipModal:g,openUnlockModal:y,contentItems:null!==(a=S.contentItems)&&void 0!==a?a:{},username:null!==(t=O.displayName)&&void 0!==t?t:O.alias,openShareModal:w,"data-v-6a9c9889":""}):Object(m.jsx)(u.a,{text:"Loading Post...","data-v-6a9c9889":""})})]})}}}]);
//# sourceMappingURL=26.76490580.chunk.js.map