(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[15,17,30,34,36],{606:function(e,t,n){"use strict";var a=n(2),c=n(17),i=n(0),o=n(899),r=n(179),d=(n(623),n(607),n(4));t.a=function(e){var t=e.id,n=void 0===t?"":t,s=e.item,u=e.index,l=void 0===u?0:u,v=e.postId,b=void 0===v?"":v,f=e.tipValue,j=void 0===f?0:f,m=e.tipCounter,p=void 0===m?0:m,O=e.hideRibbon,h=void 0!==O&&O,g=e.width,x=void 0===g?null:g,y=e.disableZoom,w=void 0!==y&&y,k=e.style,I=void 0===k?{}:k,C=Object(i.useState)(!1),R=Object(c.a)(C,2),N=R[0],S=R[1],U=Object(i.useState)(!1),E=Object(c.a)(U,2),M=E[0],L=E[1],P=Object(i.useState)(!0),T=Object(c.a)(P,2),A=T[0],V=T[1],D=Object(i.useState)(null),K=Object(c.a)(D,2),W=K[0],q=K[1],z=Object(i.useCallback)((function(e){if(clearTimeout(W),S(e),!e&&M){L(!1);var t=setTimeout((function(){V(!0)}),200);q(t)}e&&V(!1)}),[W,M,S,L,V,q]),B=decodeURIComponent(s.magnetURI.replace(/.*(ws=)/gi,"")),Z=Object(a.a)(Object(a.a)({},I),{},{opacity:A?1:0});x&&(Z.width=x);var F=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{className:"image torrent-img torrent-img-".concat(b,"-").concat(n),alt:"Post Media","data-torrent":s.magnetURI,"data-file-key":l,style:Z,src:B,"data-v-02ab074d":""}),Object(d.jsx)("img",{className:"image enlarged-img enlarged-img-".concat(b,"-").concat(n),alt:"Post Media","data-file-key":l,onLoad:function(){L(!0)},style:{opacity:N?1:0,display:N?"block":"none"},src:B,"data-v-02ab074d":""}),!h&&Object(d.jsx)(r.a,{tipCounter:p,tipValue:j,zoomed:N,"data-v-02ab074d":""})]});return Object(d.jsx)("div",{className:"media-container","data-v-02ab074d":"",children:w?F:Object(d.jsx)(o.a,{isZoomed:N,onZoomChange:z,overlayBgColorStart:"#16191c00",overlayBgColorEnd:"#16191c","data-v-02ab074d":"",children:F})})}},607:function(e,t,n){},608:function(e,t,n){"use strict";n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return x}));var a=n(27),c=n(3),i=n.n(c),o=n(7),r=n(2),d=n(17),s=n(634),u=n.n(s),l=n(660),v=n.n(l),b=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,v.a._init){e.next=4;break}return e.next=4,new Promise((function(e,t){v.a.init("ShockWalletStore").then((function(){return console.log("File cache initialized!"),v.a.persist()})).then((function(n){n.persistent?e(n):t(n)}))}));case 4:return e.next=6,v.a.load(t);case 6:return n=e.sent,e.abrupt("return",n.createURL());case 10:return e.prev=10,e.t0=e.catch(0),console.warn(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e,t){var n=document.querySelectorAll(t);return n&&n.length&&n.forEach((function(t){t.src||(t.src=e,t.muted=!0,t.autoplay=!0)})),!!(null===n||void 0===n?void 0:n.length)},j=function(e,t){return v.a.save(e,t)},m=function(e){var t=Promise.resolve();return e.forEach((function(e){t=t.then((function(){return e()}))})),t},p={"video/embedded":{formats:["mp4","webm"],element:"video",options:{autoplay:!0,muted:!0}},"image/embedded":{formats:["jpg","png","webp","jpeg","gif"],element:"img",options:{}}},O=function(e){var t,n,a=null===(t=e.name)||void 0===t||null===(n=t.split("."))||void 0===n?void 0:n.slice(-1)[0],c=Object.entries(p).filter((function(e){var t=Object(d.a)(e,2);t[0];return t[1].formats.includes(a)}))[0];if(c){var i=Object(d.a)(c,2),o=i[0],s=i[1];return Object(r.a)({name:o},s)}return null},h=new u.a,g=function(e){var t=e.url,n=e.type,a=p[void 0===n?"video/embedded":n].formats.filter((function(e){return t.toLowerCase().endsWith(".".concat(e.toLowerCase()))}));return!!Object(d.a)(a,1)[0]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=e.map((function(e){var a=e.contentItems,c=e.id;return Object.entries(null!==a&&void 0!==a?a:{}).filter((function(e){var t=Object(d.a)(e,2),n=(t[0],t[1]);return p[n.type]})).map((function(e){var a=Object(d.a)(e,2),r=a[0],s=a[1];return function(){return new Promise((function(e){!h.get(s.magnetURI)||n?h.add(s.magnetURI,function(){var n=Object(o.a)(i.a.mark((function n(a){var u;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e(!0),(u=a.files.filter((function(e){var t,n,a=null===(t=e.name)||void 0===t||null===(n=t.split("."))||void 0===n?void 0:n.slice(-1)[0],c=Object.entries(p).filter((function(e){var t=Object(d.a)(e,2);t[0];return t[1].formats.includes(a)}))[0];return!!c&&Object(d.a)(c,2)[1].formats.includes(a)}))).map(function(){var e=Object(o.a)(i.a.mark((function e(n){var a,o,d,u,l,v;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=O(n)){e.next=3;break}return e.abrupt("return");case 3:return o="".concat(c,"-").concat(r,"-").concat(n.name),d=a.element,u="".concat(d,'[data-torrent="').concat(s.magnetURI,'"]'),e.next=8,b(o);case 8:if(!(l=e.sent)){e.next=14;break}return(v=h.get(s.magnetURI))&&v.destroy(),f(l,u),e.abrupt("return");case 14:document.querySelectorAll(u).forEach((function(e){var c=g({url:s.magnetURI,type:a.name}),i=e.getAttribute("src");if(t&&!i||!c)n.renderTo(e,a.options);else{var o=decodeURIComponent(s.magnetURI.replace(/.*(ws=)/gi,""));e.setAttribute("src",o)}}));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a.on("done",(function(){u.map((function(e){var t=O(e),n="".concat(c,"-").concat(r,"-").concat(e.name),a=t.element,d="".concat(a,'[data-torrent="').concat(s.magnetURI,'"]');return e.getBlob(function(){var e=Object(o.a)(i.a.mark((function e(t,a){var c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return console.warn(t),e.abrupt("return");case 3:return e.next=5,j(n,a);case 5:if("false"!==(null===(c=document.querySelector(d))||void 0===c?void 0:c.dataset.played)||(null===c||void 0===c?void 0:c.getAttribute("src"))){e.next=11;break}return e.next=9,b(n);case 9:o=e.sent,f(o,d);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e}))}));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()):e(!0)}))}}))})).reduce((function(e,t){return[].concat(Object(a.a)(e),Object(a.a)(t))}),[]);m(c)}},619:function(e,t,n){},620:function(e,t,n){},632:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(17),i=n(0),o=n.n(i),r=n(9),d=n(57),s=n(662),u=n(631),l=n(85),v=n.n(l),b=n(661),f=n.n(b),j=n(180),m=n(20),p=n(594),O=n(591),h=n(35),g=n(608),x=n(179),y=(n(619),n(4)),w=function(e){var t=e.id,n=void 0===t?"":t,a=e.item,c=e.index,o=void 0===c?0:c,r=e.postId,d=void 0===r?"":r,s=e.tipValue,u=void 0===s?0:s,l=e.tipCounter,v=void 0===l?0:l,b=e.hideRibbon,f=void 0!==b&&b,j=e.width,m=void 0===j?null:j,p=Object(i.useMemo)((function(){var e=a.magnetURI.replace(/.*(ws=)/gi,"");return Object(g.b)({url:e})?decodeURIComponent(e):null}),[a.magnetURI]),O={};return m&&(O.width=m),Object(y.jsx)("div",{className:"media-container","data-v-2a7d22b3":"",children:Object(y.jsxs)("div",{className:"video-container",style:{cursor:"pointer"},"data-v-2a7d22b3":"",children:[Object(y.jsx)("video",{style:O,className:"torrent-video torrent-video-".concat(d,"-").concat(n),"data-torrent":a.magnetURI,"data-file-key":o,controls:!0,"data-played":"false",src:p,"data-v-2a7d22b3":""}),!f&&Object(y.jsx)(x.a,{tipCounter:v,tipValue:u,zoomed:!1,"data-v-2a7d22b3":""})]})})},k=n(606),I=n(181),C=(n(620),n.p+"static/media/share.8ed36b2d.svg");t.default=function(e){var t=e.id,n=e.publicKey,l=e.openTipModal,b=e.openUnlockModal,g=e.openDeleteModal,x=void 0===g?void 0:g,R=e.openShareModal,N=void 0===R?function(e){}:R,S=m.useDispatch(),U=m.useSelector((function(e){return e.content.unlockedContent})),E=Object(s.useEmblaCarousel)({slidesToScroll:1,align:"center"}),M=Object(c.a)(E,2),L=M[0],P=M[1],T=m.useSelector(m.selectUser(n)),A=m.useSelector(m.selectSinglePost(n,t)),V=o.a.useMemo((function(){var e=Object.values(A.tips||{});return[e.length,f()(e)]}),[A]),D=Object(c.a)(V,2),K=D[0],W=D[1],q=Object(i.useState)(0),z=Object(c.a)(q,2),B=z[0],Z=z[1],F=Object(i.useState)(0),J=Object(c.a)(F,2),_=J[0],G=J[1],H=Object(i.useState)(!1),Q=Object(c.a)(H,2),X=Q[0],Y=Q[1],$=!0;Object(i.useEffect)((function(){return S(Object(h.l)(n,t))}),[S,t,n]),Object(i.useEffect)((function(){return S(Object(h.m)(n,t))}),[S,t,n]);var ee=o.a.useMemo((function(){var e,t=Object.values(null!==(e=A.contentItems)&&void 0!==e?e:{}).find((function(e){return"stream/embedded"===e.type}));return t?t.liveStatus:null}),[A.contentItems]),te=o.a.useMemo((function(){var e,t=Object.values(null!==(e=A.contentItems)&&void 0!==e?e:{}).find((function(e){return"stream/embedded"===e.type}));return t&&"live"===t.liveStatus?t.viewersCounter:null}),[A.contentItems]),ne=Object(i.useCallback)((function(){var e;return Object.entries(null!==(e=A.contentItems)&&void 0!==e?e:{}).filter((function(e){var t=Object(c.a)(e,2);t[0];return"text/paragraph"!==t[1].type}))}),[A.contentItems]);Object(i.useEffect)((function(){ne().forEach((function(e){var t=Object(c.a)(e,2),a=t[0],i=t[1],o="".concat(n,">posts>").concat(a);i.isPrivate&&!U[o]&&Y(!0)}))}),[ne,n,U]);var ae=function(e,i){var o=Object(c.a)(e,2),d=o[0],s=o[1];if("text/paragraph"===s.type)return Object(y.jsx)("p",{"data-v-dd6376d6":"",children:s.text},d);var u="";if(s.isPrivate){var l="".concat(n,">posts>").concat(t),v=U[l];if(!v)return Object(y.jsx)("div",{"data-v-dd6376d6":"",children:Object(y.jsx)("i",{className:"fas fa-lock fa-10x","data-v-dd6376d6":""})},d);u=v}return"image/embedded"===s.type?Object(y.jsx)(k.a,{id:d,item:Object(a.a)(Object(a.a)({},s),{},{magnetURI:u||s.magnetURI}),index:i,postId:t,tipCounter:K,tipValue:W,hideRibbon:void 0,width:void 0,"data-v-dd6376d6":""},"".concat(t,"-").concat(i)):"video/embedded"===s.type?Object(y.jsx)(w,{id:d,item:Object(a.a)(Object(a.a)({},s),{},{magnetURI:u||s.magnetURI}),index:i,postId:t,tipCounter:K,tipValue:W,hideRibbon:void 0,width:void 0,"data-v-dd6376d6":""},"".concat(t,"-").concat(i)):r.k(s)?s.playbackMagnet?Object(y.jsx)(w,{id:d,item:Object(a.a)(Object(a.a)({},s),{},{magnetURI:s.playbackMagnet}),index:i,postId:t,tipCounter:K,tipValue:W,hideRibbon:void 0,width:void 0,"data-v-dd6376d6":""},"".concat(t,"-").concat(i)):Object(y.jsx)(I.a,{id:d,item:Object(a.a)(Object(a.a)({},s),{},{magnetURI:u||s.magnetURI}),index:i,postId:t,tipCounter:K,tipValue:W,hideRibbon:void 0,width:void 0,"data-v-dd6376d6":""},"".concat(t,"-").concat(i)):null},ce=Object(i.useCallback)((function(){P&&P.canScrollNext()&&P.scrollNext()}),[P]),ie=Object(i.useCallback)((function(){P&&P.canScrollPrev()&&P.scrollPrev()}),[P]),oe=Object(i.useCallback)((function(e){if(0!==B){var t=e.key;"ArrowRight"===t&&ce(),"ArrowLeft"===t&&ie()}}),[B,ie,ce]),re=Object(i.useCallback)((function(){G(P.selectedScrollSnap())}),[P,G]);Object(i.useEffect)((function(){if(P)return P.on("scroll",re),Z(P.scrollSnapList().length),window.addEventListener("keydown",oe),function(){window.removeEventListener("keydown",oe),P.off("scroll",re)}}),[P,B,oe,re]);var de=Object(i.useCallback)((function(){l({targetType:"post",postID:t,publicKey:n})}),[t,$,l,n]),se=Object(i.useCallback)((function(){b({targetType:"unlock",postID:t,publicKey:n})}),[t,$,b,n]),ue=Object(i.useCallback)((function(){x({id:t,shared:!1})}),[t,x]),le=Object(i.useCallback)((function(){N({targetType:"share",postID:t,publicKey:n})}),[n,t,N]);Object(i.useEffect)((function(){try{u.a.rebuild()}catch(e){console.log("Error inside <Post />: ",e)}}),[]);return Object(y.jsxs)("div",{className:"post","data-v-dd6376d6":"",children:[Object(y.jsxs)("div",{className:"head","data-v-dd6376d6":"",children:[Object(y.jsxs)("div",{className:"user","data-v-dd6376d6":"",children:[Object(y.jsx)(p.a,{height:50,publicKey:n,"data-v-dd6376d6":""}),Object(y.jsx)(O.a,{amt:10,insideRow:!0,"data-v-dd6376d6":""}),Object(y.jsxs)("div",{className:"details","data-v-dd6376d6":"",children:[Object(y.jsxs)("div",{className:"username","data-v-dd6376d6":"",children:[Object(y.jsx)(d.b,{to:"/otherUser/".concat(n),"data-v-dd6376d6":"",children:T.displayName}),ee&&Object(y.jsxs)("p",{className:"liveStatus","data-v-dd6376d6":"",children:[{live:"Is Live",waiting:"Waiting",wasLive:"Was Live"}[ee],Object(y.jsx)("i",{className:"fas fa-circle liveStatusIcon ".concat("live"===ee?"liveIcon":""),"data-v-dd6376d6":""}),"live"===ee&&Object(y.jsxs)("span",{"data-v-dd6376d6":"",children:[" | ",te," watching"]})]})]}),Object(y.jsx)("p",{"data-v-dd6376d6":"",children:j.DateTime.fromMillis(A.date).toRelative()})]})]}),x&&Object(y.jsx)("i",{className:"fas fa-trash trash-icon",onClick:ue,"data-v-dd6376d6":""})]}),Object(y.jsxs)("div",{className:"content","data-v-dd6376d6":"",children:[function(){var e;return Object.entries(null!==(e=A.contentItems)&&void 0!==e?e:{}).filter((function(e){var t=Object(c.a)(e,2);t[0];return"text/paragraph"===t[1].type}))}().map(ae),Object(y.jsxs)("div",{className:"media-content-carousel","data-v-dd6376d6":"",children:[B>1?Object(y.jsxs)("div",{className:"media-carousel-controls-container","data-v-dd6376d6":"",children:[Object(y.jsx)("div",{className:"media-carousel-arrow fas fa-angle-left",onClick:ie,"data-v-dd6376d6":""}),Object(y.jsx)("div",{className:"media-carousel-pages","data-v-dd6376d6":"",children:Array.from({length:B}).map((function(e,t){return Object(y.jsx)("div",{className:v()({"media-carousel-page":!0,"active-carousel-page":_===t}),onClick:function(){return null===P||void 0===P?void 0:P.scrollTo(t)},"data-v-dd6376d6":""},t)}))}),Object(y.jsx)("div",{className:"media-carousel-arrow fas fa-angle-right",onClick:ce,"data-v-dd6376d6":""})]}):null,Object(y.jsx)("div",{className:"media-content-root",ref:L,"data-v-dd6376d6":"",children:Object(y.jsx)("div",{className:"media-content-container","data-v-dd6376d6":"",children:ne().map(ae)})})]})]}),Object(y.jsxs)("div",{className:"actions","data-v-dd6376d6":"",children:[Object(y.jsx)("div",{"data-v-dd6376d6":""}),Object(y.jsx)("div",{className:"icon-tip-btn","data-tip":X?"Unlock this post":"Tip this post",onClick:X?se:de,"data-v-dd6376d6":"",children:Object(y.jsx)("div",{className:"tip-icon icon-thin-feed","data-v-dd6376d6":""})}),N&&Object(y.jsx)("div",{className:"icon-tip-btn","data-tip":"share",onClick:le,"data-v-dd6376d6":"",children:Object(y.jsx)("img",{alt:"Share this post",src:C,style:{color:"#4285b9",marginLeft:"auto"},"data-v-dd6376d6":""})}),!N&&Object(y.jsx)("div",{"data-v-dd6376d6":""})]})]})}},636:function(e,t){},637:function(e,t){},638:function(e,t){},639:function(e,t){},640:function(e,t){},641:function(e,t){},642:function(e,t){},643:function(e,t){},644:function(e,t){},646:function(e,t){},647:function(e,t){},648:function(e,t){},649:function(e,t){},650:function(e,t){},651:function(e,t){},652:function(e,t){},653:function(e,t){},654:function(e,t){},655:function(e,t){},656:function(e,t){},657:function(e,t){},659:function(e,t){}}]);
//# sourceMappingURL=15.e6e4443f.chunk.js.map