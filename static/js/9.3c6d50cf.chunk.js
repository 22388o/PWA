(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[9,34,36],{608:function(e,t,a){"use strict";var c=a(2),i=a(17),n=a(0),o=a(899),s=a(180),d=(a(625),a(609),a(4));t.a=function(e){var t=e.id,a=void 0===t?"":t,l=e.item,r=e.index,v=void 0===r?0:r,u=e.postId,b=void 0===u?"":u,j=e.tipValue,m=void 0===j?0:j,p=e.tipCounter,f=void 0===p?0:p,O=e.hideRibbon,h=void 0!==O&&O,x=e.width,g=void 0===x?null:x,y=e.disableZoom,k=void 0!==y&&y,C=e.style,N=void 0===C?{}:C,w=Object(n.useState)(!1),I=Object(i.a)(w,2),S=I[0],R=I[1],M=Object(n.useState)(!1),U=Object(i.a)(M,2),E=U[0],T=U[1],L=Object(n.useState)(!0),P=Object(i.a)(L,2),V=P[0],D=P[1],K=Object(n.useState)(null),A=Object(i.a)(K,2),Z=A[0],z=A[1],B=Object(n.useCallback)((function(e){if(clearTimeout(Z),R(e),!e&&E){T(!1);var t=setTimeout((function(){D(!0)}),200);z(t)}e&&D(!1)}),[Z,E,R,T,D,z]),J=decodeURIComponent(l.magnetURI.replace(/.*(ws=)/gi,"")),W=Object(c.a)(Object(c.a)({},N),{},{opacity:V?1:0});g&&(W.width=g);var F=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{className:"image torrent-img torrent-img-".concat(b,"-").concat(a),alt:"Post Media","data-torrent":l.magnetURI,"data-file-key":v,style:W,src:J,"data-v-6ab10dbb":""}),Object(d.jsx)("img",{className:"image enlarged-img enlarged-img-".concat(b,"-").concat(a),alt:"Post Media","data-file-key":v,onLoad:function(){T(!0)},style:{opacity:S?1:0,display:S?"block":"none"},src:J,"data-v-6ab10dbb":""}),!h&&Object(d.jsx)(s.a,{tipCounter:f,tipValue:m,zoomed:S,"data-v-6ab10dbb":""})]});return Object(d.jsx)("div",{className:"media-container","data-v-6ab10dbb":"",children:k?F:Object(d.jsx)(o.a,{isZoomed:S,onZoomChange:B,overlayBgColorStart:"#16191c00",overlayBgColorEnd:"#16191c","data-v-6ab10dbb":"",children:F})})}},609:function(e,t,a){},627:function(e,t,a){},628:function(e,t,a){},636:function(e,t,a){"use strict";a.r(t);var c=a(2),i=a(17),n=a(0),o=a.n(n),s=a(9),d=a(58),l=a(683),r=a(634),v=a(84),u=a.n(v),b=a(682),j=a.n(b),m=a(179),p=a(20),f=a(594),O=a(592),h=a(35),x=a(180),g=(a(627),a(4)),y=function(e){var t=e.id,a=void 0===t?"":t,c=e.item,i=e.index,n=void 0===i?0:i,o=e.postId,s=void 0===o?"":o,d=e.tipValue,l=void 0===d?0:d,r=e.tipCounter,v=void 0===r?0:r,u=e.hideRibbon,b=void 0!==u&&u,j=e.width,m=void 0===j?null:j,p=decodeURIComponent(c.magnetURI.replace(/.*(ws=)/gi,"")),f={};return m&&(f.width=m),Object(g.jsx)("div",{className:"media-container","data-v-fde916f7":"",children:Object(g.jsxs)("div",{className:"video-container",style:{cursor:"pointer"},"data-v-fde916f7":"",children:[Object(g.jsx)("video",{style:f,className:"torrent-video torrent-video-".concat(s,"-").concat(a),"data-torrent":c.magnetURI,"data-file-key":n,controls:!0,"data-played":"false",src:p,"data-v-fde916f7":""}),!b&&Object(g.jsx)(x.a,{tipCounter:v,tipValue:l,zoomed:!1,"data-v-fde916f7":""})]})})},k=a(608),C=a(182),N=(a(628),a.p+"static/media/share.8ed36b2d.svg");t.default=function(e){var t=e.id,a=e.publicKey,v=e.openTipModal,b=e.openUnlockModal,x=e.openDeleteModal,w=void 0===x?void 0:x,I=e.openShareModal,S=void 0===I?function(e){}:I,R=p.useDispatch(),M=p.useSelector((function(e){return e.content.unlockedContent})),U=Object(l.useEmblaCarousel)({slidesToScroll:1,align:"center"}),E=Object(i.a)(U,2),T=E[0],L=E[1],P=p.useSelector(p.selectUser(a)),V=p.useSelector(p.selectSinglePost(a,t)),D=o.a.useMemo((function(){var e=Object.values(V.tips||{});return[e.length,j()(e)]}),[V]),K=Object(i.a)(D,2),A=K[0],Z=K[1],z=Object(n.useState)(0),B=Object(i.a)(z,2),J=B[0],W=B[1],F=Object(n.useState)(0),q=Object(i.a)(F,2),G=q[0],H=q[1],Q=Object(n.useState)(!1),X=Object(i.a)(Q,2),Y=X[0],$=X[1],_=!0;Object(n.useEffect)((function(){return R(Object(h.l)(a,t))}),[R,t,a]),Object(n.useEffect)((function(){return R(Object(h.m)(a,t))}),[R,t,a]);var ee=o.a.useMemo((function(){var e,t=Object.values(null!==(e=V.contentItems)&&void 0!==e?e:{}).find((function(e){return"stream/embedded"===e.type}));return t?t.liveStatus:null}),[V.contentItems]),te=o.a.useMemo((function(){var e,t=Object.values(null!==(e=V.contentItems)&&void 0!==e?e:{}).find((function(e){return"stream/embedded"===e.type}));return t&&"live"===t.liveStatus?t.viewersCounter:null}),[V.contentItems]),ae=Object(n.useCallback)((function(){var e;return Object.entries(null!==(e=V.contentItems)&&void 0!==e?e:{}).filter((function(e){var t=Object(i.a)(e,2);t[0];return"text/paragraph"!==t[1].type}))}),[V.contentItems]);Object(n.useEffect)((function(){ae().forEach((function(e){var t=Object(i.a)(e,2),c=t[0],n=t[1],o="".concat(a,">posts>").concat(c);n.isPrivate&&!M[o]&&$(!0)}))}),[ae,a,M]);var ce=function(e,n){var o=Object(i.a)(e,2),d=o[0],l=o[1];if("text/paragraph"===l.type)return Object(g.jsx)("p",{"data-v-1749c96e":"",children:l.text},d);var r=l;if(l.isPrivate){var v="".concat(a,">posts>").concat(t),u=M[v];if(!u)return Object(g.jsx)("div",{"data-v-1749c96e":"",children:Object(g.jsx)("i",{className:"fas fa-lock fa-10x","data-v-1749c96e":""})},d);r.magnetURI=u}return"image/embedded"===l.type?Object(g.jsx)(k.a,{id:d,item:r,index:n,postId:t,tipCounter:A,tipValue:Z,hideRibbon:void 0,width:void 0,"data-v-1749c96e":""},"".concat(t,"-").concat(n)):"video/embedded"===l.type?Object(g.jsx)(y,{id:d,item:r,index:n,postId:t,tipCounter:A,tipValue:Z,hideRibbon:void 0,width:void 0,"data-v-1749c96e":""},"".concat(t,"-").concat(n)):s.k(r)?l.playbackMagnet?Object(g.jsx)(y,{id:d,item:Object(c.a)(Object(c.a)({},r),{},{magnetURI:r.playbackMagnet}),index:n,postId:t,tipCounter:A,tipValue:Z,hideRibbon:void 0,width:void 0,"data-v-1749c96e":""},"".concat(t,"-").concat(n)):Object(g.jsx)(C.a,{id:d,item:r,index:n,postId:t,tipCounter:A,tipValue:Z,hideRibbon:void 0,width:void 0,"data-v-1749c96e":""},"".concat(t,"-").concat(n)):null},ie=Object(n.useCallback)((function(){L&&L.canScrollNext()&&L.scrollNext()}),[L]),ne=Object(n.useCallback)((function(){L&&L.canScrollPrev()&&L.scrollPrev()}),[L]),oe=Object(n.useCallback)((function(e){if(0!==J){var t=e.key;"ArrowRight"===t&&ie(),"ArrowLeft"===t&&ne()}}),[J,ne,ie]),se=Object(n.useCallback)((function(){H(L.selectedScrollSnap())}),[L,H]);Object(n.useEffect)((function(){if(L)return L.on("scroll",se),W(L.scrollSnapList().length),window.addEventListener("keydown",oe),function(){window.removeEventListener("keydown",oe),L.off("scroll",se)}}),[L,J,oe,se]);var de=Object(n.useCallback)((function(){v({targetType:"post",postID:t,publicKey:a})}),[t,_,v,a]),le=Object(n.useCallback)((function(){b({targetType:"unlock",postID:t,publicKey:a})}),[t,_,b,a]),re=Object(n.useCallback)((function(){w({id:t,shared:!1})}),[t,w]),ve=Object(n.useCallback)((function(){S({targetType:"share",postID:t,publicKey:a})}),[a,t,S]);Object(n.useEffect)((function(){try{r.a.rebuild()}catch(e){console.log("Error inside <Post />: ",e)}}),[]);return Object(g.jsxs)("div",{className:"post","data-v-1749c96e":"",children:[Object(g.jsxs)("div",{className:"head","data-v-1749c96e":"",children:[Object(g.jsxs)("div",{className:"user","data-v-1749c96e":"",children:[Object(g.jsx)(f.a,{height:50,publicKey:a,"data-v-1749c96e":""}),Object(g.jsx)(O.a,{amt:10,insideRow:!0,"data-v-1749c96e":""}),Object(g.jsxs)("div",{className:"details","data-v-1749c96e":"",children:[Object(g.jsxs)("div",{className:"username","data-v-1749c96e":"",children:[Object(g.jsx)(d.b,{to:"/otherUser/".concat(a),"data-v-1749c96e":"",children:P.displayName}),ee&&Object(g.jsxs)("p",{className:"liveStatus","data-v-1749c96e":"",children:[{live:"Is Live",waiting:"Waiting",wasLive:"Was Live"}[ee],Object(g.jsx)("i",{className:"fas fa-circle liveStatusIcon ".concat("live"===ee?"liveIcon":""),"data-v-1749c96e":""}),"live"===ee&&Object(g.jsxs)("span",{"data-v-1749c96e":"",children:[" | ",te," watching"]})]})]}),Object(g.jsx)("p",{"data-v-1749c96e":"",children:m.DateTime.fromMillis(V.date).toRelative()})]})]}),w&&Object(g.jsx)("i",{className:"fas fa-trash trash-icon",onClick:re,"data-v-1749c96e":""})]}),Object(g.jsxs)("div",{className:"content","data-v-1749c96e":"",children:[function(){var e;return Object.entries(null!==(e=V.contentItems)&&void 0!==e?e:{}).filter((function(e){var t=Object(i.a)(e,2);t[0];return"text/paragraph"===t[1].type}))}().map(ce),Object(g.jsxs)("div",{className:"media-content-carousel","data-v-1749c96e":"",children:[J>1?Object(g.jsxs)("div",{className:"media-carousel-controls-container","data-v-1749c96e":"",children:[Object(g.jsx)("div",{className:"media-carousel-arrow fas fa-angle-left",onClick:ne,"data-v-1749c96e":""}),Object(g.jsx)("div",{className:"media-carousel-pages","data-v-1749c96e":"",children:Array.from({length:J}).map((function(e,t){return Object(g.jsx)("div",{className:u()({"media-carousel-page":!0,"active-carousel-page":G===t}),onClick:function(){return null===L||void 0===L?void 0:L.scrollTo(t)},"data-v-1749c96e":""},t)}))}),Object(g.jsx)("div",{className:"media-carousel-arrow fas fa-angle-right",onClick:ie,"data-v-1749c96e":""})]}):null,Object(g.jsx)("div",{className:"media-content-root",ref:T,"data-v-1749c96e":"",children:Object(g.jsx)("div",{className:"media-content-container","data-v-1749c96e":"",children:ae().map(ce)})})]})]}),Object(g.jsxs)("div",{className:"actions","data-v-1749c96e":"",children:[Object(g.jsx)("div",{"data-v-1749c96e":""}),Object(g.jsx)("div",{className:"icon-tip-btn","data-tip":Y?"Unlock this post":"Tip this post",onClick:Y?le:de,"data-v-1749c96e":"",children:Object(g.jsx)("div",{className:"tip-icon icon-thin-feed","data-v-1749c96e":""})}),S&&Object(g.jsx)("div",{className:"icon-tip-btn","data-tip":"share",onClick:ve,"data-v-1749c96e":"",children:Object(g.jsx)("img",{alt:"Share this post",src:N,style:{color:"#4285b9",marginLeft:"auto"},"data-v-1749c96e":""})}),!S&&Object(g.jsx)("div",{"data-v-1749c96e":""})]})]})}}}]);
//# sourceMappingURL=9.3c6d50cf.chunk.js.map