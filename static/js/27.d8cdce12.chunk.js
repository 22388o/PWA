(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[27,8,34],{578:function(e,a,t){"use strict";var c=t(0),i=t(12),d=t(3),s=t(868),n=t(173),o=(t(603),t(581),t(4));a.a=function(e){var a=e.id,t=void 0===a?"":a,l=e.item,r=e.index,v=void 0===r?0:r,u=e.postId,j=void 0===u?"":u,b=e.tipValue,f=void 0===b?0:b,p=e.tipCounter,m=void 0===p?0:p,O=e.hideRibbon,h=void 0!==O&&O,x=e.width,g=void 0===x?null:x,y=e.disableZoom,k=void 0!==y&&y,C=e.style,N=void 0===C?{}:C,w=Object(d.useState)(!1),S=Object(i.a)(w,2),I=S[0],R=S[1],L=Object(d.useState)(!1),M=Object(i.a)(L,2),P=M[0],T=M[1],U=Object(d.useState)(!0),K=Object(i.a)(U,2),E=K[0],V=K[1],D=Object(d.useState)(null),A=Object(i.a)(D,2),Z=A[0],z=A[1],B=Object(d.useCallback)((function(e){if(clearTimeout(Z),R(e),!e&&P){T(!1);var a=setTimeout((function(){V(!0)}),200);z(a)}e&&V(!1)}),[Z,P,R,T,V,z]),J=decodeURIComponent(l.magnetURI.replace(/.*(ws=)/gi,"")),F=Object(c.a)(Object(c.a)({},N),{},{opacity:E?1:0});g&&(F.width=g);var W=Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{className:"image torrent-img torrent-img-".concat(j,"-").concat(t),alt:"Post Media","data-torrent":l.magnetURI,"data-file-key":v,style:F,src:J,"data-v-d7222cfd":""}),Object(o.jsx)("img",{className:"image enlarged-img enlarged-img-".concat(j,"-").concat(t),alt:"Post Media","data-file-key":v,onLoad:function(){T(!0)},style:{opacity:I?1:0,display:I?"block":"none"},src:J,"data-v-d7222cfd":""}),!h&&Object(o.jsx)(n.a,{tipCounter:m,tipValue:f,zoomed:I,"data-v-d7222cfd":""})]});return Object(o.jsx)("div",{className:"media-container","data-v-d7222cfd":"",children:k?W:Object(o.jsx)(s.a,{isZoomed:I,onZoomChange:B,overlayBgColorStart:"#16191c00",overlayBgColorEnd:"#16191c","data-v-d7222cfd":"",children:W})})}},581:function(e,a,t){},582:function(e,a,t){},583:function(e,a,t){},585:function(e,a,t){"use strict";t.r(a);var c=t(12),i=t(3),d=t(56),s=t(605),n=t(584),o=t(81),l=t.n(o),r=t(82),v=t(18),u=t(566),j=t(564),b=t(173),f=(t(582),t(4)),p=function(e){var a=e.id,t=void 0===a?"":a,c=e.item,i=e.index,d=void 0===i?0:i,s=e.postId,n=void 0===s?"":s,o=e.tipValue,l=void 0===o?0:o,r=e.tipCounter,v=void 0===r?0:r,u=e.hideRibbon,j=void 0!==u&&u,p=e.width,m=void 0===p?null:p,O=decodeURIComponent(c.magnetURI.replace(/.*(ws=)/gi,"")),h={};return m&&(h.width=m),Object(f.jsx)("div",{className:"media-container","data-v-68fe5cae":"",children:Object(f.jsxs)("div",{className:"video-container",style:{cursor:"pointer"},"data-v-68fe5cae":"",children:[Object(f.jsx)("video",{style:h,className:"torrent-video torrent-video-".concat(n,"-").concat(t),"data-torrent":c.magnetURI,"data-file-key":d,controls:!0,"data-played":"false",src:O,"data-v-68fe5cae":""}),!j&&Object(f.jsx)(b.a,{tipCounter:v,tipValue:l,zoomed:!1,"data-v-68fe5cae":""})]})})},m=t(578),O=t(174),h=(t(583),t.p+"static/media/share.8ed36b2d.svg");a.default=function(e){var a=e.id,t=e.timestamp,o=e.tipCounter,b=e.tipValue,x=e.publicKey,g=e.openTipModal,y=e.openUnlockModal,k=e.contentItems,C=void 0===k?{}:k,N=e.username,w=e.openDeleteModal,S=void 0===w?void 0:w,I=e.openShareModal,R=void 0===I?function(e){}:I,L=v.useSelector((function(e){return e.content.unlockedContent})),M=Object(s.useEmblaCarousel)({slidesToScroll:1,align:"center"}),P=Object(c.a)(M,2),T=P[0],U=P[1],K=Object(i.useState)(0),E=Object(c.a)(K,2),V=E[0],D=E[1],A=Object(i.useState)(0),Z=Object(c.a)(A,2),z=Z[0],B=Z[1],J=Object(i.useState)(!1),F=Object(c.a)(J,2),W=F[0],q=F[1],G=Object(i.useState)(""),H=Object(c.a)(G,2),Q=H[0],X=H[1],Y=Object(i.useState)(0),$=Object(c.a)(Y,2),_=$[0],ee=$[1],ae=!0;Object(i.useEffect)((function(){var e=Object.values(C),a=e.find((function(e){return"video/embedded"===e.type&&"wasLive"===e.liveStatus})),t=e.find((function(e){return"stream/embedded"===e.type&&"live"===e.liveStatus})),c="";a&&(c="Was Live"),t&&(c="Is Live",t.viewersCounter&&ee(t.viewersCounter)),c&&X(c)}),[C,X]);var te=Object(i.useCallback)((function(){return Object.entries(C).filter((function(e){var a=Object(c.a)(e,2);a[0];return"text/paragraph"!==a[1].type}))}),[C]);Object(i.useEffect)((function(){te().forEach((function(e){var a=Object(c.a)(e,2),t=a[0],i=a[1],d="".concat(x,">posts>").concat(t);i.isPrivate&&!L[d]&&q(!0)}))}),[C,te,x,L]);var ce=function(e,t){var i=Object(c.a)(e,2),d=i[0],s=i[1];if("text/paragraph"===s.type)return Object(f.jsx)("p",{"data-v-8afad641":"",children:s.text},d);var n=s;if(s.isPrivate){var l="".concat(x,">posts>").concat(a),r=L[l];if(!r)return Object(f.jsx)("div",{"data-v-8afad641":"",children:Object(f.jsx)("i",{className:"fas fa-lock fa-10x","data-v-8afad641":""})},d);n.magnetURI=r}return"image/embedded"===s.type?Object(f.jsx)(m.a,{id:d,item:n,index:t,postId:a,tipCounter:o,tipValue:b,hideRibbon:void 0,width:void 0,"data-v-8afad641":""},"".concat(a,"-").concat(t)):"video/embedded"===s.type?Object(f.jsx)(p,{id:d,item:n,index:t,postId:a,tipCounter:o,tipValue:b,hideRibbon:void 0,width:void 0,"data-v-8afad641":""},"".concat(a,"-").concat(t)):"stream/embedded"===s.type?Object(f.jsx)(O.a,{id:d,item:n,index:t,postId:a,tipCounter:o,tipValue:b,hideRibbon:void 0,width:void 0,"data-v-8afad641":""},"".concat(a,"-").concat(t)):null},ie=Object(i.useCallback)((function(){U&&U.canScrollNext()&&U.scrollNext()}),[U]),de=Object(i.useCallback)((function(){U&&U.canScrollPrev()&&U.scrollPrev()}),[U]),se=Object(i.useCallback)((function(e){if(0!==V){var a=e.key;"ArrowRight"===a&&ie(),"ArrowLeft"===a&&de()}}),[V,de,ie]),ne=Object(i.useCallback)((function(){B(U.selectedScrollSnap())}),[U,B]);Object(i.useEffect)((function(){if(U)return U.on("scroll",ne),D(U.scrollSnapList().length),window.addEventListener("keydown",se),function(){window.removeEventListener("keydown",se),U.off("scroll",ne)}}),[U,V,se,ne]);var oe=Object(i.useCallback)((function(){g({targetType:"post",postID:a,publicKey:x})}),[a,ae,g,x]),le=Object(i.useCallback)((function(){y({targetType:"unlock",postID:a,publicKey:x})}),[a,ae,y,x]),re=Object(i.useCallback)((function(){S({id:a,shared:!1})}),[a,S]),ve=Object(i.useCallback)((function(){R({targetType:"share",postID:a,publicKey:x})}),[x,a,R]);return Object(i.useEffect)((function(){try{n.a.rebuild()}catch(e){console.log("Error inside <Post />: ",e)}}),[]),Object(f.jsxs)("div",{className:"post","data-v-8afad641":"",children:[Object(f.jsxs)("div",{className:"head","data-v-8afad641":"",children:[Object(f.jsxs)("div",{className:"user","data-v-8afad641":"",children:[Object(f.jsx)(u.a,{height:50,publicKey:x,"data-v-8afad641":""}),Object(f.jsx)(j.a,{amt:10,insideRow:!0,"data-v-8afad641":""}),Object(f.jsxs)("div",{className:"details","data-v-8afad641":"",children:[Object(f.jsxs)("div",{className:"username","data-v-8afad641":"",children:[Object(f.jsx)(d.b,{to:"/otherUser/".concat(x),"data-v-8afad641":"",children:N}),Q&&Object(f.jsxs)("p",{className:"liveStatus","data-v-8afad641":"",children:[Q,Object(f.jsx)("i",{className:"fas fa-circle liveStatusIcon ".concat("Is Live"===Q?"liveIcon":""),"data-v-8afad641":""}),"Is Live"===Q&&Object(f.jsxs)("span",{"data-v-8afad641":"",children:[" | ",_," watching"]})]})]}),Object(f.jsx)("p",{"data-v-8afad641":"",children:t&&"number"===typeof t?r.DateTime.fromMillis(t).toRelative():"Loading..."})]})]}),S&&Object(f.jsx)("i",{className:"fas fa-trash",onClick:re,"data-v-8afad641":""})]}),Object(f.jsxs)("div",{className:"content","data-v-8afad641":"",children:[Object.entries(C).filter((function(e){var a=Object(c.a)(e,2);return a[0],"text/paragraph"===a[1].type})).map(ce),Object(f.jsxs)("div",{className:"media-content-carousel","data-v-8afad641":"",children:[V>1?Object(f.jsxs)("div",{className:"media-carousel-controls-container","data-v-8afad641":"",children:[Object(f.jsx)("div",{className:"media-carousel-arrow fas fa-angle-left",onClick:de,"data-v-8afad641":""}),Object(f.jsx)("div",{className:"media-carousel-pages","data-v-8afad641":"",children:Array.from({length:V}).map((function(e,a){return Object(f.jsx)("div",{className:l()({"media-carousel-page":!0,"active-carousel-page":z===a}),onClick:function(){return null===U||void 0===U?void 0:U.scrollTo(a)},"data-v-8afad641":""},a)}))}),Object(f.jsx)("div",{className:"media-carousel-arrow fas fa-angle-right",onClick:ie,"data-v-8afad641":""})]}):null,Object(f.jsx)("div",{className:"media-content-root",ref:T,"data-v-8afad641":"",children:Object(f.jsx)("div",{className:"media-content-container","data-v-8afad641":"",children:te().map(ce)})})]})]}),Object(f.jsxs)("div",{className:"actions","data-v-8afad641":"",children:[Object(f.jsx)("div",{"data-v-8afad641":""}),Object(f.jsx)("div",{className:"icon-tip-btn","data-tip":W?"Unlock this post":"Tip this post",onClick:W?le:oe,"data-v-8afad641":"",children:Object(f.jsx)("div",{className:"tip-icon icon-thin-feed","data-v-8afad641":""})}),R&&Object(f.jsx)("div",{className:"icon-tip-btn","data-tip":"share",onClick:ve,"data-v-8afad641":"",children:Object(f.jsx)("img",{alt:"Share this post",src:h,style:{color:"#4285b9",marginLeft:"auto"},"data-v-8afad641":""})}),!R&&Object(f.jsx)("div",{"data-v-8afad641":""})]})]})}},606:function(e,a,t){},657:function(e,a,t){"use strict";t.r(a);var c=t(2),i=t.n(c),d=t(5),s=t(3),n=t(82),o=t(584),l=t(25),r=t(585),v=(t.p,t(606),t(595)),u=t(171),j=t(18),b=t(566),f=t(564),p=t(4);a.default=function(e){var a,t,c=e.sharerProfile,m=e.originalPostProfile,O=e.originalPost,h=e.sharedTimestamp,x=e.postPublicKey,g=e.openTipModal,y=e.openUnlockModal,k=e.openDeleteModal,C=void 0===k?void 0:k,N=e.openShareModal,w=void 0===N?function(e){}:N,S=O,I=Object(s.useCallback)(Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S&&Object(v.a)([S],!1);case 1:case"end":return e.stop()}}),e)}))),[S]),R=Object(s.useCallback)((function(){C({id:S.id,shared:!0})}),[S,C]);Object(s.useLayoutEffect)((function(){o.a.rebuild(),I()}),[I]);var L=j.useSelector(j.selectSelfPublicKey);c.publicKey,l.g(j.useSelector(j.selectUser(c.publicKey)).lastSeenApp);return Object(p.jsxs)("div",{className:"post shared-post","data-v-6a9c9889":"",children:[Object(p.jsxs)("div",{className:"head","data-v-6a9c9889":"",children:[Object(p.jsxs)("div",{className:"user","data-v-6a9c9889":"",children:[Object(p.jsx)(b.a,{height:50,publicKey:c.publicKey,"data-v-6a9c9889":""}),Object(p.jsx)(f.a,{amt:10,insideRow:!0,"data-v-6a9c9889":""}),Object(p.jsxs)("div",{className:"details","data-v-6a9c9889":"",children:[Object(p.jsx)("p",{"data-v-6a9c9889":"",children:null===c||void 0===c?void 0:c.displayName}),Object(p.jsx)("p",{"data-v-6a9c9889":"",children:h&&"number"===typeof h?n.DateTime.fromMillis(h).toRelative():"Loading..."})]})]}),C&&Object(p.jsx)("i",{className:"fas fa-trash",onClick:R,"data-v-6a9c9889":""})]}),Object(p.jsx)("div",{className:"shared-content","data-v-6a9c9889":"",children:S&&m?Object(p.jsx)(r.default,{id:S.id,timestamp:S.date,tipCounter:S.tipCounter||0,tipValue:S.tipValue||0,publicKey:x,openTipModal:g,openUnlockModal:y,contentItems:null!==(a=S.contentItems)&&void 0!==a?a:{},username:null!==(t=m.displayName)&&void 0!==t?t:m.alias,openShareModal:w,"data-v-6a9c9889":""}):Object(p.jsx)(u.a,{text:"Loading Post...","data-v-6a9c9889":""})})]})}}}]);
//# sourceMappingURL=27.d8cdce12.chunk.js.map