(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[3,4],{442:function(e,t,a){"use strict";a(3),a(455);var c=a(7);t.a=function(e){var t=e.tipCounter,a=e.tipValue,i=e.zoomed;return a>0?Object(c.jsxs)("div",{className:"ribbon-container",style:{opacity:i?0:1},"data-v-8bd7f0dd":"",children:[Object(c.jsx)("p",{className:"ribbon-title","data-v-8bd7f0dd":"",children:"Total Tips"}),Object(c.jsxs)("p",{className:"ribbon-value","data-v-8bd7f0dd":"",children:[t," ",1===t?"Tip":"Tips"]})]}):null}},455:function(e,t,a){},462:function(e,t,a){"use strict";var c=a(2),i=a.n(c),n=a(6),s=a(16),o=a(3),r=a(442),d=(a(463),a(148)),l=a(14),b=a(7),u="".concat("https://webtorrent.shock.network","/rtmpapi/api/streams/live");t.a=function(e){e.id;var t=e.item,a=(e.index,e.postId,e.tipValue),c=e.tipCounter,v=e.hideRibbon,j=e.width,p=e.timeout,m=void 0===p?1e4:p,f=Object(o.useRef)(null),O=Object(o.useState)(!1),h=Object(s.a)(O,2),x=h[0],g=h[1],y={width:"100%"};return j&&(y.width=j),Object(o.useEffect)((function(){var e=null,a=function(){var e=Object(n.a)(i.a.mark((function e(){var a,c,n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.magnetURI.split("/live/")[1].split("/index.m3u8"),c=Object(s.a)(a,1),n=c[0],e.next=4,l.a.get("".concat(u,"/").concat(n));case 4:if(e.sent.data.isLive){e.next=7;break}return e.abrupt("return",!1);case 7:return(o=Object(d.a)(f.current,{autoplay:!0,muted:!0,aspectRatio:"16:9"})).src({src:t.magnetURI,type:"application/x-mpegURL"}),o.play(),e.abrupt("return",!0);case 13:return e.prev=13,e.t0=e.catch(0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return a().then((function(t){t?g(!0):e=setInterval(Object(n.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a();case 2:if(!t.sent){t.next=7;break}return g(!0),clearInterval(e),t.abrupt("return");case 7:case"end":return t.stop()}}),t)}))),m)})),function(){clearInterval(e)}}),[t,m]),Object(b.jsx)("div",{className:"media-container w-100","data-v-97e98b47":"",children:Object(b.jsxs)("div",{className:"video-container w-100",style:{cursor:"pointer",width:"100%"},"data-v-97e98b47":"",children:[!x&&Object(b.jsx)("p",{"data-v-97e98b47":"",children:"The streamer has disconnected."}),Object(b.jsx)("div",{style:x?{width:"100%"}:{display:"none",width:"100%"},"data-v-97e98b47":"",children:Object(b.jsx)("video",{className:"video-js vjs-default-skin",ref:f,style:y,preload:"auto",controls:!0,muted:!0,autoPlay:!0,"data-v-97e98b47":""})}),!v&&Object(b.jsx)(r.a,{tipCounter:c,tipValue:a,zoomed:!1,"data-v-97e98b47":""})]})})}},463:function(e,t,a){},518:function(e,t,a){},519:function(e,t,a){},520:function(e,t,a){},560:function(e,t,a){"use strict";a.r(t);var c=a(16),i=a(3),n=a(52),s=a(558),o=a(521),r=a(72),d=a.n(r),l=a(108),b=a(18),u=(a(88),a(442)),v=(a(518),a(7)),j=function(e){var t=e.id,a=e.item,c=e.index,i=e.postId,n=e.tipValue,s=e.tipCounter,o=e.hideRibbon,r=e.width,d=decodeURIComponent(a.magnetURI.replace(/.*(ws=)/gi,"")),l={};return r&&(l.width=r),Object(v.jsx)("div",{className:"media-container","data-v-92435cae":"",children:Object(v.jsxs)("div",{className:"video-container",style:{cursor:"pointer"},"data-v-92435cae":"",children:[Object(v.jsx)("video",{style:l,className:"torrent-video torrent-video-".concat(i,"-").concat(t),"data-torrent":a.magnetURI,"data-file-key":c,controls:!0,"data-played":"false",src:d,"data-v-92435cae":""}),!o&&Object(v.jsx)(u.a,{tipCounter:s,tipValue:n,"data-v-92435cae":""})]})})},p=a(720),m=(a(470),a(519),function(e){var t=e.id,a=e.item,n=e.index,s=e.postId,o=e.tipValue,r=e.tipCounter,d=e.hideRibbon,l=e.width,b=Object(i.useState)(!1),j=Object(c.a)(b,2),m=j[0],f=j[1],O=Object(i.useState)(!1),h=Object(c.a)(O,2),x=h[0],g=h[1],y=Object(i.useState)(!0),k=Object(c.a)(y,2),N=k[0],w=k[1],C=Object(i.useState)(null),I=Object(c.a)(C,2),S=I[0],R=I[1],T=Object(i.useCallback)((function(e){if(clearTimeout(S),f(e),!e&&x){g(!1);var t=setTimeout((function(){w(!0)}),200);R(t)}e&&w(!1)}),[S,x,f,g,w,R]),U=decodeURIComponent(a.magnetURI.replace(/.*(ws=)/gi,"")),P={opacity:N?1:0};return l&&(P.width=l),Object(v.jsx)("div",{className:"media-container","data-v-00d777f8":"",children:Object(v.jsxs)(p.a,{isZoomed:m,onZoomChange:T,overlayBgColorStart:"#16191c00",overlayBgColorEnd:"#16191c","data-v-00d777f8":"",children:[Object(v.jsx)("img",{className:"image torrent-img torrent-img-".concat(s,"-").concat(t),alt:"Post Media","data-torrent":a.magnetURI,"data-file-key":n,style:P,src:U,"data-v-00d777f8":""}),Object(v.jsx)("img",{className:"image enlarged-img enlarged-img-".concat(s,"-").concat(t),alt:"Post Media","data-file-key":n,onLoad:function(){g(!0)},style:{opacity:m?1:0,display:m?"block":"none"},src:U,"data-v-00d777f8":""}),!d&&Object(v.jsx)(u.a,{tipCounter:r,tipValue:o,zoomed:m,"data-v-00d777f8":""})]})})}),f=a(462);a(520),t.default=function(e){var t=e.id,a=e.timestamp,r=e.avatar,u=e.tipCounter,p=e.tipValue,O=e.publicKey,h=e.openTipModal,x=e.openUnlockModal,g=e.contentItems,y=void 0===g?{}:g,k=e.username,N=e.openDeleteModal,w=void 0===N?void 0:N,C=b.useSelector((function(e){return e.content.unlockedContent})),I=Object(s.useEmblaCarousel)({slidesToScroll:1,align:"center"}),S=Object(c.a)(I,2),R=S[0],T=S[1],U=Object(i.useState)(0),P=Object(c.a)(U,2),V=P[0],M=P[1],E=Object(i.useState)(0),L=Object(c.a)(E,2),K=L[0],A=L[1],D=Object(i.useState)(!1),B=Object(c.a)(D,2),z=B[0],J=B[1],W=b.useSelector(b.selectSelfPublicKey)===O,Z=!0,q=Object(i.useCallback)((function(){return Object.entries(y).filter((function(e){var t=Object(c.a)(e,2);t[0];return"text/paragraph"!==t[1].type}))}),[y]);Object(i.useEffect)((function(){q().forEach((function(e){var t=Object(c.a)(e,2),a=t[0],i=t[1],n="".concat(O,">posts>").concat(a);i.isPrivate&&!C[n]&&J(!0)}))}),[y,q,O,C]);var F=function(e,a){var i=Object(c.a)(e,2),n=i[0],s=i[1];if("text/paragraph"===s.type)return Object(v.jsx)("p",{"data-v-57355e6b":"",children:s.text},n);var o=s;if(s.isPrivate){var r="".concat(O,">posts>").concat(t),d=C[r];if(!d)return Object(v.jsx)("div",{"data-v-57355e6b":"",children:Object(v.jsx)("i",{className:"fas fa-lock fa-10x","data-v-57355e6b":""})});o.magnetURI=d}return"image/embedded"===s.type?Object(v.jsx)(m,{id:n,item:o,index:a,postId:t,tipCounter:u,tipValue:p,hideRibbon:void 0,width:void 0,"data-v-57355e6b":""},"".concat(t,"-").concat(a)):"video/embedded"===s.type?Object(v.jsx)(j,{id:n,item:o,index:a,postId:t,tipCounter:u,tipValue:p,hideRibbon:void 0,width:void 0,"data-v-57355e6b":""},"".concat(t,"-").concat(a)):"stream/embedded"===s.type?Object(v.jsx)(f.a,{id:n,item:o,index:a,postId:t,tipCounter:u,tipValue:p,hideRibbon:void 0,width:void 0,"data-v-57355e6b":""},"".concat(t,"-").concat(a)):null},G=Object(i.useCallback)((function(){T&&T.canScrollNext()&&T.scrollNext()}),[T]),H=Object(i.useCallback)((function(){T&&T.canScrollPrev()&&T.scrollPrev()}),[T]),Q=Object(i.useCallback)((function(e){if(0!==V){var t=e.key;"ArrowRight"===t&&G(),"ArrowLeft"===t&&H()}}),[V,H,G]),X=Object(i.useCallback)((function(){A(T.selectedScrollSnap())}),[T,A]);Object(i.useEffect)((function(){if(T)return T.on("scroll",X),M(T.scrollSnapList().length),window.addEventListener("keydown",Q),function(){window.removeEventListener("keydown",Q),T.off("scroll",X)}}),[T,V,Q,X]);var Y=Object(i.useCallback)((function(){h({targetType:"post",postID:t,publicKey:O})}),[t,Z,h,O]),$=Object(i.useCallback)((function(){x({targetType:"unlock",postID:t,publicKey:O})}),[t,Z,x,O]),_=Object(i.useCallback)((function(){w({id:t,shared:!1})}),[t,w]);return Object(i.useEffect)((function(){try{o.a.rebuild()}catch(e){console.log("Error inside <Post />: ",e)}}),[]),Object(v.jsxs)("div",{className:"post","data-v-57355e6b":"",children:[Object(v.jsxs)("div",{className:"head","data-v-57355e6b":"",children:[Object(v.jsxs)("div",{className:"user","data-v-57355e6b":"",children:[Object(v.jsx)(n.b,{className:"av",to:W?"/profile":"/otherUser/".concat(O),style:{borderWidth:W?void 0:2,borderStyle:W?void 0:"solid",borderColor:W?void 0:"#39B54A",backgroundImage:"url(".concat(r,")")},"data-v-57355e6b":""}),Object(v.jsxs)("div",{className:"details","data-v-57355e6b":"",children:[Object(v.jsx)(n.b,{to:"/otherUser/".concat(O),"data-v-57355e6b":"",children:k}),Object(v.jsx)("p",{"data-v-57355e6b":"",children:a&&"number"===typeof a?l.DateTime.fromMillis(a).toRelative():"Loading..."})]})]}),w&&Object(v.jsx)("i",{className:"fas fa-trash",onClick:_,"data-v-57355e6b":""})]}),Object(v.jsxs)("div",{className:"content","data-v-57355e6b":"",children:[Object.entries(y).filter((function(e){var t=Object(c.a)(e,2);return t[0],"text/paragraph"===t[1].type})).map(F),Object(v.jsxs)("div",{className:"media-content-carousel","data-v-57355e6b":"",children:[V>1?Object(v.jsxs)("div",{className:"media-carousel-controls-container","data-v-57355e6b":"",children:[Object(v.jsx)("div",{className:"media-carousel-arrow fas fa-angle-left",onClick:H,"data-v-57355e6b":""}),Object(v.jsx)("div",{className:"media-carousel-pages","data-v-57355e6b":"",children:Array.from({length:V}).map((function(e,t){return Object(v.jsx)("div",{className:d()({"media-carousel-page":!0,"active-carousel-page":K===t}),onClick:function(){return null===T||void 0===T?void 0:T.scrollTo(t)},"data-v-57355e6b":""})}))}),Object(v.jsx)("div",{className:"media-carousel-arrow fas fa-angle-right",onClick:G,"data-v-57355e6b":""})]}):null,Object(v.jsx)("div",{className:"media-content-root",ref:R,"data-v-57355e6b":"",children:Object(v.jsx)("div",{className:"media-content-container","data-v-57355e6b":"",children:q().map(F)})})]})]}),Object(v.jsx)("div",{className:"actions","data-v-57355e6b":"",children:Object(v.jsx)("div",{className:"icon-tip-btn","data-tip":z?"Unlock this post":"Tip this post",onClick:z?$:Y,"data-v-57355e6b":"",children:Object(v.jsx)("div",{className:"tip-icon icon-thin-feed","data-v-57355e6b":""})})})]})}},699:function(e,t,a){},719:function(e,t,a){"use strict";a.r(t);var c=a(2),i=a.n(c),n=a(6),s=a(3),o=a(108),r=a(52),d=a(521),l=a(25),b=a(560),u=a.p+"static/media/av1.e1539bb2.jpg",v=(a(699),a(465)),j=a(145),p=a(18),m=(a(88),a(7));t.default=function(e){var t,a,c=e.sharerProfile,f=e.originalPostProfile,O=e.originalPost,h=e.sharedTimestamp,x=e.postPublicKey,g=e.openTipModal,y=e.openUnlockModal,k=e.openDeleteModal,N=void 0===k?void 0:k,w=O,C=Object(s.useCallback)(Object(n.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w&&Object(v.a)([w],!1);case 1:case"end":return e.stop()}}),e)}))),[w]),I=Object(s.useCallback)((function(){N({id:w.id,shared:!0})}),[w,N]);Object(s.useLayoutEffect)((function(){d.a.rebuild(),C()}),[C]);var S=p.useSelector(p.selectSelfPublicKey),R=c.publicKey===S,T=l.g(p.useSelector(p.selectUser(c.publicKey)).lastSeenApp);return Object(m.jsxs)("div",{className:"post shared-post","data-v-bb643a6c":"",children:[Object(m.jsxs)("div",{className:"head","data-v-bb643a6c":"",children:[Object(m.jsxs)("div",{className:"user","data-v-bb643a6c":"",children:[Object(m.jsx)(r.b,{to:R?"/profile":"/otherUser/".concat(c.publicKey),className:"av",style:{borderWidth:T&&!R?2:void 0,borderStyle:T&&!R?"solid":void 0,borderColor:T&&!R?"#39B54A":void 0,backgroundImage:"url(data:image/jpeg;base64,".concat(null===c||void 0===c?void 0:c.avatar,")")},"data-v-bb643a6c":""}),Object(m.jsxs)("div",{className:"details","data-v-bb643a6c":"",children:[Object(m.jsx)("p",{"data-v-bb643a6c":"",children:null===c||void 0===c?void 0:c.displayName}),Object(m.jsx)("p",{"data-v-bb643a6c":"",children:h&&"number"===typeof h?o.DateTime.fromMillis(h).toRelative():"Loading..."})]})]}),N&&Object(m.jsx)("i",{className:"fas fa-trash",onClick:I,"data-v-bb643a6c":""})]}),Object(m.jsx)("div",{className:"shared-content","data-v-bb643a6c":"",children:w&&f?Object(m.jsx)(b.default,{id:w.id,timestamp:w.date,avatar:f.avatar?"data:image/jpeg;base64,".concat(f.avatar):u,tipCounter:w.tipCounter||0,tipValue:w.tipValue||0,publicKey:x,openTipModal:g,openUnlockModal:y,contentItems:null!==(t=w.contentItems)&&void 0!==t?t:{},username:null!==(a=f.displayName)&&void 0!==a?a:f.alias,"data-v-bb643a6c":""}):Object(m.jsx)(j.a,{text:"Loading Post...","data-v-bb643a6c":""})})]})}}}]);
//# sourceMappingURL=3.c5c7cbb8.chunk.js.map