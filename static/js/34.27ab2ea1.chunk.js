(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[34],{628:function(e,t,a){},629:function(e,t,a){},637:function(e,t,a){"use strict";a.r(t);var c=a(2),d=a(17),i=a(0),n=a.n(i),s=a(9),o=a(60),l=a(684),r=a(635),v=a(84),u=a.n(v),b=a(683),j=a.n(b),p=a(179),f=a(20),m=a(594),O=a(592),h=a(35),x=a(180),g=(a(628),a(4)),k=function(e){var t=e.id,a=void 0===t?"":t,c=e.item,d=e.index,i=void 0===d?0:d,n=e.postId,s=void 0===n?"":n,o=e.tipValue,l=void 0===o?0:o,r=e.tipCounter,v=void 0===r?0:r,u=e.hideRibbon,b=void 0!==u&&u,j=e.width,p=void 0===j?null:j,f=decodeURIComponent(c.magnetURI.replace(/.*(ws=)/gi,"")),m={};return p&&(m.width=p),Object(g.jsx)("div",{className:"media-container","data-v-3a81bfb6":"",children:Object(g.jsxs)("div",{className:"video-container",style:{cursor:"pointer"},"data-v-3a81bfb6":"",children:[Object(g.jsx)("video",{style:m,className:"torrent-video torrent-video-".concat(s,"-").concat(a),"data-torrent":c.magnetURI,"data-file-key":i,controls:!0,"data-played":"false",src:f,"data-v-3a81bfb6":""}),!b&&Object(g.jsx)(x.a,{tipCounter:v,tipValue:l,zoomed:!1,"data-v-3a81bfb6":""})]})})},y=a(608),N=a(182),w=(a(629),a.p+"static/media/share.8ed36b2d.svg");t.default=function(e){var t=e.id,a=e.publicKey,v=e.openTipModal,b=e.openUnlockModal,x=e.openDeleteModal,C=void 0===x?void 0:x,I=e.openShareModal,S=void 0===I?function(e){}:I,R=f.useDispatch(),E=f.useSelector((function(e){return e.content.unlockedContent})),M=Object(l.useEmblaCarousel)({slidesToScroll:1,align:"center"}),U=Object(d.a)(M,2),L=U[0],T=U[1],D=f.useSelector(f.selectUser(a)),P=f.useSelector(f.selectSinglePost(a,t)),V=n.a.useMemo((function(){var e=Object.values(P.tips||{});return[e.length,j()(e)]}),[P]),K=Object(d.a)(V,2),A=K[0],J=K[1],W=Object(i.useState)(0),z=Object(d.a)(W,2),q=z[0],B=z[1],F=Object(i.useState)(0),G=Object(d.a)(F,2),H=G[0],Q=G[1],X=Object(i.useState)(!1),Y=Object(d.a)(X,2),Z=Y[0],$=Y[1],_=!0;Object(i.useEffect)((function(){return R(Object(h.l)(a,t))}),[R,t,a]),Object(i.useEffect)((function(){return R(Object(h.m)(a,t))}),[R,t,a]);var ee=n.a.useMemo((function(){var e,t=Object.values(null!==(e=P.contentItems)&&void 0!==e?e:{}).find((function(e){return"stream/embedded"===e.type}));return t?t.liveStatus:null}),[P.contentItems]),te=n.a.useMemo((function(){var e,t=Object.values(null!==(e=P.contentItems)&&void 0!==e?e:{}).find((function(e){return"stream/embedded"===e.type}));return t&&"live"===t.liveStatus?t.viewersCounter:null}),[P.contentItems]),ae=Object(i.useCallback)((function(){var e;return Object.entries(null!==(e=P.contentItems)&&void 0!==e?e:{}).filter((function(e){var t=Object(d.a)(e,2);t[0];return"text/paragraph"!==t[1].type}))}),[P.contentItems]);Object(i.useEffect)((function(){ae().forEach((function(e){var t=Object(d.a)(e,2),c=t[0],i=t[1],n="".concat(a,">posts>").concat(c);i.isPrivate&&!E[n]&&$(!0)}))}),[ae,a,E]);var ce=function(e,i){var n=Object(d.a)(e,2),o=n[0],l=n[1];if("text/paragraph"===l.type)return Object(g.jsx)("p",{"data-v-213d124d":"",children:l.text},o);var r=l;if(l.isPrivate){var v="".concat(a,">posts>").concat(t),u=E[v];if(!u)return Object(g.jsx)("div",{"data-v-213d124d":"",children:Object(g.jsx)("i",{className:"fas fa-lock fa-10x","data-v-213d124d":""})},o);r.magnetURI=u}return"image/embedded"===l.type?Object(g.jsx)(y.a,{id:o,item:r,index:i,postId:t,tipCounter:A,tipValue:J,hideRibbon:void 0,width:void 0,"data-v-213d124d":""},"".concat(t,"-").concat(i)):"video/embedded"===l.type?Object(g.jsx)(k,{id:o,item:r,index:i,postId:t,tipCounter:A,tipValue:J,hideRibbon:void 0,width:void 0,"data-v-213d124d":""},"".concat(t,"-").concat(i)):s.k(r)?l.playbackMagnet?Object(g.jsx)(k,{id:o,item:Object(c.a)(Object(c.a)({},r),{},{magnetURI:r.playbackMagnet}),index:i,postId:t,tipCounter:A,tipValue:J,hideRibbon:void 0,width:void 0,"data-v-213d124d":""},"".concat(t,"-").concat(i)):Object(g.jsx)(N.a,{id:o,item:r,index:i,postId:t,tipCounter:A,tipValue:J,hideRibbon:void 0,width:void 0,"data-v-213d124d":""},"".concat(t,"-").concat(i)):null},de=Object(i.useCallback)((function(){T&&T.canScrollNext()&&T.scrollNext()}),[T]),ie=Object(i.useCallback)((function(){T&&T.canScrollPrev()&&T.scrollPrev()}),[T]),ne=Object(i.useCallback)((function(e){if(0!==q){var t=e.key;"ArrowRight"===t&&de(),"ArrowLeft"===t&&ie()}}),[q,ie,de]),se=Object(i.useCallback)((function(){Q(T.selectedScrollSnap())}),[T,Q]);Object(i.useEffect)((function(){if(T)return T.on("scroll",se),B(T.scrollSnapList().length),window.addEventListener("keydown",ne),function(){window.removeEventListener("keydown",ne),T.off("scroll",se)}}),[T,q,ne,se]);var oe=Object(i.useCallback)((function(){v({targetType:"post",postID:t,publicKey:a})}),[t,_,v,a]),le=Object(i.useCallback)((function(){b({targetType:"unlock",postID:t,publicKey:a})}),[t,_,b,a]),re=Object(i.useCallback)((function(){C({id:t,shared:!1})}),[t,C]),ve=Object(i.useCallback)((function(){S({targetType:"share",postID:t,publicKey:a})}),[a,t,S]);Object(i.useEffect)((function(){try{r.a.rebuild()}catch(e){console.log("Error inside <Post />: ",e)}}),[]);return Object(g.jsxs)("div",{className:"post","data-v-213d124d":"",children:[Object(g.jsxs)("div",{className:"head","data-v-213d124d":"",children:[Object(g.jsxs)("div",{className:"user","data-v-213d124d":"",children:[Object(g.jsx)(m.a,{height:50,publicKey:a,"data-v-213d124d":""}),Object(g.jsx)(O.a,{amt:10,insideRow:!0,"data-v-213d124d":""}),Object(g.jsxs)("div",{className:"details","data-v-213d124d":"",children:[Object(g.jsxs)("div",{className:"username","data-v-213d124d":"",children:[Object(g.jsx)(o.b,{to:"/otherUser/".concat(a),"data-v-213d124d":"",children:D.displayName}),ee&&Object(g.jsxs)("p",{className:"liveStatus","data-v-213d124d":"",children:[{live:"Is Live",waiting:"Waiting",wasLive:"Was Live"}[ee],Object(g.jsx)("i",{className:"fas fa-circle liveStatusIcon ".concat("live"===ee?"liveIcon":""),"data-v-213d124d":""}),"live"===ee&&Object(g.jsxs)("span",{"data-v-213d124d":"",children:[" | ",te," watching"]})]})]}),Object(g.jsx)("p",{"data-v-213d124d":"",children:p.DateTime.fromMillis(P.date).toRelative()})]})]}),C&&Object(g.jsx)("i",{className:"fas fa-trash",onClick:re,"data-v-213d124d":""})]}),Object(g.jsxs)("div",{className:"content","data-v-213d124d":"",children:[function(){var e;return Object.entries(null!==(e=P.contentItems)&&void 0!==e?e:{}).filter((function(e){var t=Object(d.a)(e,2);t[0];return"text/paragraph"===t[1].type}))}().map(ce),Object(g.jsxs)("div",{className:"media-content-carousel","data-v-213d124d":"",children:[q>1?Object(g.jsxs)("div",{className:"media-carousel-controls-container","data-v-213d124d":"",children:[Object(g.jsx)("div",{className:"media-carousel-arrow fas fa-angle-left",onClick:ie,"data-v-213d124d":""}),Object(g.jsx)("div",{className:"media-carousel-pages","data-v-213d124d":"",children:Array.from({length:q}).map((function(e,t){return Object(g.jsx)("div",{className:u()({"media-carousel-page":!0,"active-carousel-page":H===t}),onClick:function(){return null===T||void 0===T?void 0:T.scrollTo(t)},"data-v-213d124d":""},t)}))}),Object(g.jsx)("div",{className:"media-carousel-arrow fas fa-angle-right",onClick:de,"data-v-213d124d":""})]}):null,Object(g.jsx)("div",{className:"media-content-root",ref:L,"data-v-213d124d":"",children:Object(g.jsx)("div",{className:"media-content-container","data-v-213d124d":"",children:ae().map(ce)})})]})]}),Object(g.jsxs)("div",{className:"actions","data-v-213d124d":"",children:[Object(g.jsx)("div",{"data-v-213d124d":""}),Object(g.jsx)("div",{className:"icon-tip-btn","data-tip":Z?"Unlock this post":"Tip this post",onClick:Z?le:oe,"data-v-213d124d":"",children:Object(g.jsx)("div",{className:"tip-icon icon-thin-feed","data-v-213d124d":""})}),S&&Object(g.jsx)("div",{className:"icon-tip-btn","data-tip":"share",onClick:ve,"data-v-213d124d":"",children:Object(g.jsx)("img",{alt:"Share this post",src:w,style:{color:"#4285b9",marginLeft:"auto"},"data-v-213d124d":""})}),!S&&Object(g.jsx)("div",{"data-v-213d124d":""})]})]})}}}]);
//# sourceMappingURL=34.27ab2ea1.chunk.js.map