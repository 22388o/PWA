(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[5],{499:function(e,t,a){},500:function(e,t,a){},501:function(e,t,a){},502:function(e,t,a){"use strict";a.r(t);var c=a(12),d=a(3),i=a(54),n=a(564),s=a(503),o=a(74),l=a.n(o),r=a(110),b=a(13),u=a(442),j=a(441),v=a(150),f=(a(499),a(4)),p=function(e){var t=e.id,a=e.item,c=e.index,d=e.postId,i=e.tipValue,n=e.tipCounter,s=e.hideRibbon,o=e.width,l=decodeURIComponent(a.magnetURI.replace(/.*(ws=)/gi,"")),r={};return o&&(r.width=o),Object(f.jsx)("div",{className:"media-container","data-v-c5478dc4":"",children:Object(f.jsxs)("div",{className:"video-container",style:{cursor:"pointer"},"data-v-c5478dc4":"",children:[Object(f.jsx)("video",{style:r,className:"torrent-video torrent-video-".concat(d,"-").concat(t),"data-torrent":a.magnetURI,"data-file-key":c,controls:!0,"data-played":"false",src:l,"data-v-c5478dc4":""}),!s&&Object(f.jsx)(v.a,{tipCounter:n,tipValue:i,"data-v-c5478dc4":""})]})})},m=a(729),O=(a(562),a(500),function(e){var t=e.id,a=e.item,i=e.index,n=e.postId,s=e.tipValue,o=e.tipCounter,l=e.hideRibbon,r=e.width,b=Object(d.useState)(!1),u=Object(c.a)(b,2),j=u[0],p=u[1],O=Object(d.useState)(!1),h=Object(c.a)(O,2),x=h[0],g=h[1],y=Object(d.useState)(!0),k=Object(c.a)(y,2),C=k[0],N=k[1],w=Object(d.useState)(null),S=Object(c.a)(w,2),I=S[0],R=S[1],E=Object(d.useCallback)((function(e){if(clearTimeout(I),p(e),!e&&x){g(!1);var t=setTimeout((function(){N(!0)}),200);R(t)}e&&N(!1)}),[I,x,p,g,N,R]),T=decodeURIComponent(a.magnetURI.replace(/.*(ws=)/gi,"")),U={opacity:C?1:0};return r&&(U.width=r),Object(f.jsx)("div",{className:"media-container","data-v-e3e8bbf3":"",children:Object(f.jsxs)(m.a,{isZoomed:j,onZoomChange:E,overlayBgColorStart:"#16191c00",overlayBgColorEnd:"#16191c","data-v-e3e8bbf3":"",children:[Object(f.jsx)("img",{className:"image torrent-img torrent-img-".concat(n,"-").concat(t),alt:"Post Media","data-torrent":a.magnetURI,"data-file-key":i,style:U,src:T,"data-v-e3e8bbf3":""}),Object(f.jsx)("img",{className:"image enlarged-img enlarged-img-".concat(n,"-").concat(t),alt:"Post Media","data-file-key":i,onLoad:function(){g(!0)},style:{opacity:j?1:0,display:j?"block":"none"},src:T,"data-v-e3e8bbf3":""}),!l&&Object(f.jsx)(v.a,{tipCounter:o,tipValue:s,zoomed:j,"data-v-e3e8bbf3":""})]})})}),h=a(155),x=(a(501),a.p+"static/media/share.8ed36b2d.svg");t.default=function(e){var t=e.id,a=e.timestamp,o=e.tipCounter,v=e.tipValue,m=e.publicKey,g=e.openTipModal,y=e.openUnlockModal,k=e.contentItems,C=void 0===k?{}:k,N=e.username,w=e.openDeleteModal,S=void 0===w?void 0:w,I=e.openShareModal,R=void 0===I?function(e){}:I,E=b.useSelector((function(e){return e.content.unlockedContent})),T=Object(n.useEmblaCarousel)({slidesToScroll:1,align:"center"}),U=Object(c.a)(T,2),L=U[0],V=U[1],M=Object(d.useState)(0),P=Object(c.a)(M,2),D=P[0],K=P[1],A=Object(d.useState)(0),B=Object(c.a)(A,2),J=B[0],Z=B[1],z=Object(d.useState)(!1),q=Object(c.a)(z,2),F=q[0],G=q[1],H=Object(d.useState)(""),Q=Object(c.a)(H,2),W=Q[0],X=Q[1],Y=!0;Object(d.useEffect)((function(){var e=Object.values(C),t=e.find((function(e){return"video/embedded"===e.type&&"wasLive"===e.liveStatus})),a=e.find((function(e){return"stream/embedded"===e.type&&"live"===e.liveStatus})),c="";t&&(c=t.liveStatus),a&&(c=a.liveStatus),c&&X(c)}),[C,X]);var $=Object(d.useCallback)((function(){return Object.entries(C).filter((function(e){var t=Object(c.a)(e,2);t[0];return"text/paragraph"!==t[1].type}))}),[C]);Object(d.useEffect)((function(){$().forEach((function(e){var t=Object(c.a)(e,2),a=t[0],d=t[1],i="".concat(m,">posts>").concat(a);d.isPrivate&&!E[i]&&G(!0)}))}),[C,$,m,E]);var _=function(e,a){var d=Object(c.a)(e,2),i=d[0],n=d[1];if("text/paragraph"===n.type)return Object(f.jsx)("p",{"data-v-f63131dd":"",children:n.text},i);var s=n;if(n.isPrivate){var l="".concat(m,">posts>").concat(t),r=E[l];if(!r)return Object(f.jsx)("div",{"data-v-f63131dd":"",children:Object(f.jsx)("i",{className:"fas fa-lock fa-10x","data-v-f63131dd":""})},i);s.magnetURI=r}return"image/embedded"===n.type?Object(f.jsx)(O,{id:i,item:s,index:a,postId:t,tipCounter:o,tipValue:v,hideRibbon:void 0,width:void 0,"data-v-f63131dd":""},"".concat(t,"-").concat(a)):"video/embedded"===n.type?Object(f.jsx)(p,{id:i,item:s,index:a,postId:t,tipCounter:o,tipValue:v,hideRibbon:void 0,width:void 0,"data-v-f63131dd":""},"".concat(t,"-").concat(a)):"stream/embedded"===n.type?Object(f.jsx)(h.a,{id:i,item:s,index:a,postId:t,tipCounter:o,tipValue:v,hideRibbon:void 0,width:void 0,"data-v-f63131dd":""},"".concat(t,"-").concat(a)):null},ee=Object(d.useCallback)((function(){V&&V.canScrollNext()&&V.scrollNext()}),[V]),te=Object(d.useCallback)((function(){V&&V.canScrollPrev()&&V.scrollPrev()}),[V]),ae=Object(d.useCallback)((function(e){if(0!==D){var t=e.key;"ArrowRight"===t&&ee(),"ArrowLeft"===t&&te()}}),[D,te,ee]),ce=Object(d.useCallback)((function(){Z(V.selectedScrollSnap())}),[V,Z]);Object(d.useEffect)((function(){if(V)return V.on("scroll",ce),K(V.scrollSnapList().length),window.addEventListener("keydown",ae),function(){window.removeEventListener("keydown",ae),V.off("scroll",ce)}}),[V,D,ae,ce]);var de=Object(d.useCallback)((function(){g({targetType:"post",postID:t,publicKey:m})}),[t,Y,g,m]),ie=Object(d.useCallback)((function(){y({targetType:"unlock",postID:t,publicKey:m})}),[t,Y,y,m]),ne=Object(d.useCallback)((function(){S({id:t,shared:!1})}),[t,S]),se=Object(d.useCallback)((function(){R({targetType:"share",postID:t,publicKey:m})}),[m,t,R]);return Object(d.useEffect)((function(){try{s.a.rebuild()}catch(e){console.log("Error inside <Post />: ",e)}}),[]),Object(f.jsxs)("div",{className:"post","data-v-f63131dd":"",children:[Object(f.jsxs)("div",{className:"head","data-v-f63131dd":"",children:[Object(f.jsxs)("div",{className:"user","data-v-f63131dd":"",children:[Object(f.jsx)(u.a,{height:50,publicKey:m,"data-v-f63131dd":""}),Object(f.jsx)(j.a,{amt:10,insideRow:!0,"data-v-f63131dd":""}),Object(f.jsxs)("div",{className:"details","data-v-f63131dd":"",children:[Object(f.jsxs)("div",{className:"username","data-v-f63131dd":"",children:[Object(f.jsx)(i.b,{to:"/otherUser/".concat(m),"data-v-f63131dd":"",children:N}),W&&Object(f.jsxs)("p",{className:"liveStatus","data-v-f63131dd":"",children:[W,Object(f.jsx)("i",{className:"fas fa-circle liveStatusIcon ".concat("live"===W?"liveIcon":""),"data-v-f63131dd":""})]})]}),Object(f.jsx)("p",{"data-v-f63131dd":"",children:a&&"number"===typeof a?r.DateTime.fromMillis(a).toRelative():"Loading..."})]})]}),S&&Object(f.jsx)("i",{className:"fas fa-trash",onClick:ne,"data-v-f63131dd":""})]}),Object(f.jsxs)("div",{className:"content","data-v-f63131dd":"",children:[Object.entries(C).filter((function(e){var t=Object(c.a)(e,2);return t[0],"text/paragraph"===t[1].type})).map(_),Object(f.jsxs)("div",{className:"media-content-carousel","data-v-f63131dd":"",children:[D>1?Object(f.jsxs)("div",{className:"media-carousel-controls-container","data-v-f63131dd":"",children:[Object(f.jsx)("div",{className:"media-carousel-arrow fas fa-angle-left",onClick:te,"data-v-f63131dd":""}),Object(f.jsx)("div",{className:"media-carousel-pages","data-v-f63131dd":"",children:Array.from({length:D}).map((function(e,t){return Object(f.jsx)("div",{className:l()({"media-carousel-page":!0,"active-carousel-page":J===t}),onClick:function(){return null===V||void 0===V?void 0:V.scrollTo(t)},"data-v-f63131dd":""},t)}))}),Object(f.jsx)("div",{className:"media-carousel-arrow fas fa-angle-right",onClick:ee,"data-v-f63131dd":""})]}):null,Object(f.jsx)("div",{className:"media-content-root",ref:L,"data-v-f63131dd":"",children:Object(f.jsx)("div",{className:"media-content-container","data-v-f63131dd":"",children:$().map(_)})})]})]}),Object(f.jsxs)("div",{className:"actions","data-v-f63131dd":"",children:[Object(f.jsx)("div",{"data-v-f63131dd":""}),Object(f.jsx)("div",{className:"icon-tip-btn","data-tip":F?"Unlock this post":"Tip this post",onClick:F?ie:de,"data-v-f63131dd":"",children:Object(f.jsx)("div",{className:"tip-icon icon-thin-feed","data-v-f63131dd":""})}),R&&Object(f.jsx)("div",{className:"icon-tip-btn","data-tip":"share",onClick:se,"data-v-f63131dd":"",children:Object(f.jsx)("img",{alt:"Share this post",src:x,style:{color:"#4285b9",marginLeft:"auto"},"data-v-f63131dd":""})}),!R&&Object(f.jsx)("div",{"data-v-f63131dd":""})]})]})}}}]);
//# sourceMappingURL=5.d4408f93.chunk.js.map