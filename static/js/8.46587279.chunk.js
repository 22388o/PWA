(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[8,36],{577:function(e,t,a){"use strict";var c=a(0),i=a(12),n=a(3),s=a(871),o=a(173),d=(a(602),a(580),a(4));t.a=function(e){var t=e.id,a=void 0===t?"":t,r=e.item,l=e.index,b=void 0===l?0:l,v=e.postId,j=void 0===v?"":v,u=e.tipValue,f=void 0===u?0:u,p=e.tipCounter,m=void 0===p?0:p,O=e.hideRibbon,h=void 0!==O&&O,x=e.width,g=void 0===x?null:x,y=e.disableZoom,C=void 0!==y&&y,k=e.style,N=void 0===k?{}:k,w=Object(n.useState)(!1),S=Object(i.a)(w,2),I=S[0],R=S[1],L=Object(n.useState)(!1),E=Object(i.a)(L,2),T=E[0],U=E[1],V=Object(n.useState)(!0),M=Object(i.a)(V,2),P=M[0],D=M[1],K=Object(n.useState)(null),A=Object(i.a)(K,2),Z=A[0],z=A[1],B=Object(n.useCallback)((function(e){if(clearTimeout(Z),R(e),!e&&T){U(!1);var t=setTimeout((function(){D(!0)}),200);z(t)}e&&D(!1)}),[Z,T,R,U,D,z]),J=decodeURIComponent(r.magnetURI.replace(/.*(ws=)/gi,"")),F=Object(c.a)(Object(c.a)({},N),{},{opacity:P?1:0});g&&(F.width=g);var W=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{className:"image torrent-img torrent-img-".concat(j,"-").concat(a),alt:"Post Media","data-torrent":r.magnetURI,"data-file-key":b,style:F,src:J,"data-v-d20b5d9d":""}),Object(d.jsx)("img",{className:"image enlarged-img enlarged-img-".concat(j,"-").concat(a),alt:"Post Media","data-file-key":b,onLoad:function(){U(!0)},style:{opacity:I?1:0,display:I?"block":"none"},src:J,"data-v-d20b5d9d":""}),!h&&Object(d.jsx)(o.a,{tipCounter:m,tipValue:f,zoomed:I,"data-v-d20b5d9d":""})]});return Object(d.jsx)("div",{className:"media-container","data-v-d20b5d9d":"",children:C?W:Object(d.jsx)(s.a,{isZoomed:I,onZoomChange:B,overlayBgColorStart:"#16191c00",overlayBgColorEnd:"#16191c","data-v-d20b5d9d":"",children:W})})}},580:function(e,t,a){},581:function(e,t,a){},582:function(e,t,a){},584:function(e,t,a){"use strict";a.r(t);var c=a(12),i=a(3),n=a(58),s=a(604),o=a(583),d=a(80),r=a.n(d),l=a(81),b=a(18),v=a(564),j=a(562),u=a(173),f=(a(581),a(4)),p=function(e){var t=e.id,a=void 0===t?"":t,c=e.item,i=e.index,n=void 0===i?0:i,s=e.postId,o=void 0===s?"":s,d=e.tipValue,r=void 0===d?0:d,l=e.tipCounter,b=void 0===l?0:l,v=e.hideRibbon,j=void 0!==v&&v,p=e.width,m=void 0===p?null:p,O=decodeURIComponent(c.magnetURI.replace(/.*(ws=)/gi,"")),h={};return m&&(h.width=m),Object(f.jsx)("div",{className:"media-container","data-v-8abb3523":"",children:Object(f.jsxs)("div",{className:"video-container",style:{cursor:"pointer"},"data-v-8abb3523":"",children:[Object(f.jsx)("video",{style:h,className:"torrent-video torrent-video-".concat(o,"-").concat(a),"data-torrent":c.magnetURI,"data-file-key":n,controls:!0,"data-played":"false",src:O,"data-v-8abb3523":""}),!j&&Object(f.jsx)(u.a,{tipCounter:b,tipValue:r,zoomed:!1,"data-v-8abb3523":""})]})})},m=a(577),O=a(174),h=(a(582),a.p+"static/media/share.8ed36b2d.svg");t.default=function(e){var t=e.id,a=e.timestamp,d=e.tipCounter,u=e.tipValue,x=e.publicKey,g=e.openTipModal,y=e.openUnlockModal,C=e.contentItems,k=void 0===C?{}:C,N=e.username,w=e.openDeleteModal,S=void 0===w?void 0:w,I=e.openShareModal,R=void 0===I?function(e){}:I,L=b.useSelector((function(e){return e.content.unlockedContent})),E=Object(s.useEmblaCarousel)({slidesToScroll:1,align:"center"}),T=Object(c.a)(E,2),U=T[0],V=T[1],M=Object(i.useState)(0),P=Object(c.a)(M,2),D=P[0],K=P[1],A=Object(i.useState)(0),Z=Object(c.a)(A,2),z=Z[0],B=Z[1],J=Object(i.useState)(!1),F=Object(c.a)(J,2),W=F[0],q=F[1],G=Object(i.useState)(""),H=Object(c.a)(G,2),Q=H[0],X=H[1],Y=Object(i.useState)(0),$=Object(c.a)(Y,2),_=$[0],ee=$[1],te=!0;Object(i.useEffect)((function(){var e=Object.values(k),t=e.find((function(e){return"video/embedded"===e.type&&"wasLive"===e.liveStatus})),a=e.find((function(e){return"stream/embedded"===e.type&&"live"===e.liveStatus})),c="";t&&(c="Was Live"),a&&(c="Is Live",a.viewersCounter&&ee(a.viewersCounter)),c&&X(c)}),[k,X]);var ae=Object(i.useCallback)((function(){return Object.entries(k).filter((function(e){var t=Object(c.a)(e,2);t[0];return"text/paragraph"!==t[1].type}))}),[k]);Object(i.useEffect)((function(){ae().forEach((function(e){var t=Object(c.a)(e,2),a=t[0],i=t[1],n="".concat(x,">posts>").concat(a);i.isPrivate&&!L[n]&&q(!0)}))}),[k,ae,x,L]);var ce=function(e,a){var i=Object(c.a)(e,2),n=i[0],s=i[1];if("text/paragraph"===s.type)return Object(f.jsx)("p",{"data-v-360f68b7":"",children:s.text},n);var o=s;if(s.isPrivate){var r="".concat(x,">posts>").concat(t),l=L[r];if(!l)return Object(f.jsx)("div",{"data-v-360f68b7":"",children:Object(f.jsx)("i",{className:"fas fa-lock fa-10x","data-v-360f68b7":""})},n);o.magnetURI=l}return"image/embedded"===s.type?Object(f.jsx)(m.a,{id:n,item:o,index:a,postId:t,tipCounter:d,tipValue:u,hideRibbon:void 0,width:void 0,"data-v-360f68b7":""},"".concat(t,"-").concat(a)):"video/embedded"===s.type?Object(f.jsx)(p,{id:n,item:o,index:a,postId:t,tipCounter:d,tipValue:u,hideRibbon:void 0,width:void 0,"data-v-360f68b7":""},"".concat(t,"-").concat(a)):"stream/embedded"===s.type?Object(f.jsx)(O.a,{id:n,item:o,index:a,postId:t,tipCounter:d,tipValue:u,hideRibbon:void 0,width:void 0,"data-v-360f68b7":""},"".concat(t,"-").concat(a)):null},ie=Object(i.useCallback)((function(){V&&V.canScrollNext()&&V.scrollNext()}),[V]),ne=Object(i.useCallback)((function(){V&&V.canScrollPrev()&&V.scrollPrev()}),[V]),se=Object(i.useCallback)((function(e){if(0!==D){var t=e.key;"ArrowRight"===t&&ie(),"ArrowLeft"===t&&ne()}}),[D,ne,ie]),oe=Object(i.useCallback)((function(){B(V.selectedScrollSnap())}),[V,B]);Object(i.useEffect)((function(){if(V)return V.on("scroll",oe),K(V.scrollSnapList().length),window.addEventListener("keydown",se),function(){window.removeEventListener("keydown",se),V.off("scroll",oe)}}),[V,D,se,oe]);var de=Object(i.useCallback)((function(){g({targetType:"post",postID:t,publicKey:x})}),[t,te,g,x]),re=Object(i.useCallback)((function(){y({targetType:"unlock",postID:t,publicKey:x})}),[t,te,y,x]),le=Object(i.useCallback)((function(){S({id:t,shared:!1})}),[t,S]),be=Object(i.useCallback)((function(){R({targetType:"share",postID:t,publicKey:x})}),[x,t,R]);return Object(i.useEffect)((function(){try{o.a.rebuild()}catch(e){console.log("Error inside <Post />: ",e)}}),[]),Object(f.jsxs)("div",{className:"post","data-v-360f68b7":"",children:[Object(f.jsxs)("div",{className:"head","data-v-360f68b7":"",children:[Object(f.jsxs)("div",{className:"user","data-v-360f68b7":"",children:[Object(f.jsx)(v.a,{height:50,publicKey:x,"data-v-360f68b7":""}),Object(f.jsx)(j.a,{amt:10,insideRow:!0,"data-v-360f68b7":""}),Object(f.jsxs)("div",{className:"details","data-v-360f68b7":"",children:[Object(f.jsxs)("div",{className:"username","data-v-360f68b7":"",children:[Object(f.jsx)(n.b,{to:"/otherUser/".concat(x),"data-v-360f68b7":"",children:N}),Q&&Object(f.jsxs)("p",{className:"liveStatus","data-v-360f68b7":"",children:[Q,Object(f.jsx)("i",{className:"fas fa-circle liveStatusIcon ".concat("Is Live"===Q?"liveIcon":""),"data-v-360f68b7":""}),"Is Live"===Q&&Object(f.jsxs)("span",{"data-v-360f68b7":"",children:[" | ",_," watching"]})]})]}),Object(f.jsx)("p",{"data-v-360f68b7":"",children:a&&"number"===typeof a?l.DateTime.fromMillis(a).toRelative():"Loading..."})]})]}),S&&Object(f.jsx)("i",{className:"fas fa-trash",onClick:le,"data-v-360f68b7":""})]}),Object(f.jsxs)("div",{className:"content","data-v-360f68b7":"",children:[Object.entries(k).filter((function(e){var t=Object(c.a)(e,2);return t[0],"text/paragraph"===t[1].type})).map(ce),Object(f.jsxs)("div",{className:"media-content-carousel","data-v-360f68b7":"",children:[D>1?Object(f.jsxs)("div",{className:"media-carousel-controls-container","data-v-360f68b7":"",children:[Object(f.jsx)("div",{className:"media-carousel-arrow fas fa-angle-left",onClick:ne,"data-v-360f68b7":""}),Object(f.jsx)("div",{className:"media-carousel-pages","data-v-360f68b7":"",children:Array.from({length:D}).map((function(e,t){return Object(f.jsx)("div",{className:r()({"media-carousel-page":!0,"active-carousel-page":z===t}),onClick:function(){return null===V||void 0===V?void 0:V.scrollTo(t)},"data-v-360f68b7":""},t)}))}),Object(f.jsx)("div",{className:"media-carousel-arrow fas fa-angle-right",onClick:ie,"data-v-360f68b7":""})]}):null,Object(f.jsx)("div",{className:"media-content-root",ref:U,"data-v-360f68b7":"",children:Object(f.jsx)("div",{className:"media-content-container","data-v-360f68b7":"",children:ae().map(ce)})})]})]}),Object(f.jsxs)("div",{className:"actions","data-v-360f68b7":"",children:[Object(f.jsx)("div",{"data-v-360f68b7":""}),Object(f.jsx)("div",{className:"icon-tip-btn","data-tip":W?"Unlock this post":"Tip this post",onClick:W?re:de,"data-v-360f68b7":"",children:Object(f.jsx)("div",{className:"tip-icon icon-thin-feed","data-v-360f68b7":""})}),R&&Object(f.jsx)("div",{className:"icon-tip-btn","data-tip":"share",onClick:be,"data-v-360f68b7":"",children:Object(f.jsx)("img",{alt:"Share this post",src:h,style:{color:"#4285b9",marginLeft:"auto"},"data-v-360f68b7":""})}),!R&&Object(f.jsx)("div",{"data-v-360f68b7":""})]})]})}}}]);
//# sourceMappingURL=8.46587279.chunk.js.map