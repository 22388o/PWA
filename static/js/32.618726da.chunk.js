(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[32,34,39,41,43],{615:function(e,t,a){"use strict";var n=a(0),c=a(13),r=a(1),i=a(922),o=a(186),s=(a(639),a(623),a(4));t.a=function(e){var t=e.id,a=void 0===t?"":t,u=e.item,l=e.index,d=void 0===l?0:l,b=e.postId,v=void 0===b?"":b,f=e.tipValue,m=void 0===f?0:f,p=e.tipCounter,j=void 0===p?0:p,O=e.hideRibbon,h=void 0!==O&&O,g=e.width,x=void 0===g?null:g,y=e.disableZoom,k=void 0!==y&&y,w=e.style,I=void 0===w?{}:w,N=Object(r.useState)(!1),C=Object(c.a)(N,2),S=C[0],R=C[1],U=Object(r.useState)(!1),L=Object(c.a)(U,2),E=L[0],M=L[1],T=Object(r.useState)(!0),P=Object(c.a)(T,2),V=P[0],F=P[1],A=Object(r.useState)(null),q=Object(c.a)(A,2),D=q[0],K=q[1],W=Object(r.useCallback)((function(e){if(clearTimeout(D),R(e),!e&&E){M(!1);var t=setTimeout((function(){F(!0)}),200);K(t)}e&&F(!1)}),[D,E,R,M,F,K]),B=decodeURIComponent(u.magnetURI.replace(/.*(ws=)/gi,"")),Z=Object(n.a)(Object(n.a)({},I),{},{opacity:V?1:0});x&&(Z.width=x);var z=Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("img",{className:"image torrent-img torrent-img-".concat(v,"-").concat(a),alt:"Post Media","data-torrent":u.magnetURI,"data-file-key":d,style:Z,src:B,"data-v-2dbb52a0":""}),Object(s.jsx)("img",{className:"image enlarged-img enlarged-img-".concat(v,"-").concat(a),alt:"Post Media","data-file-key":d,onLoad:function(){M(!0)},style:{opacity:S?1:0,display:S?"block":"none"},src:B,"data-v-2dbb52a0":""}),!h&&Object(s.jsx)(o.a,{tipCounter:j,tipValue:m,zoomed:S,"data-v-2dbb52a0":""})]});return Object(s.jsx)("div",{className:"media-container","data-v-2dbb52a0":"",children:k?z:Object(s.jsx)(i.a,{isZoomed:S,onZoomChange:W,overlayBgColorStart:"#16191c00",overlayBgColorEnd:"#16191c","data-v-2dbb52a0":"",children:z})})}},623:function(e,t,a){},625:function(e,t,a){"use strict";a.d(t,"a",(function(){return k})),a.d(t,"b",(function(){return w}));var n=a(3),c=a.n(n),r=a(5),i=a(0),o=a(13),s=a(23),u=a(649),l=a.n(u),d=function(){var e=Object(r.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,l.a._init){e.next=4;break}return e.next=4,new Promise((function(e,t){l.a.init("ShockWalletStore").then((function(){return console.log("File cache initialized!"),l.a.persist()})).then((function(a){a.persistent?e(a):t(a)}))}));case 4:return e.next=6,l.a.load(t);case 6:return a=e.sent,e.abrupt("return",a.createURL());case 10:return e.prev=10,e.t0=e.catch(0),console.warn(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e,t){var a=document.querySelectorAll(t);return a&&a.length&&a.forEach((function(t){t.src||(t.src=e,t.muted=!0,t.autoplay=!1)})),!!(null===a||void 0===a?void 0:a.length)},v=function(e,t){return l.a.save(e,t)},f=function(e){var t=Promise.resolve();return e.forEach((function(e){t=t.then((function(){return e()}))})),t},m={"video/embedded":{formats:["mp4","webm"],element:"video",options:{autoplay:!1,muted:!0}},"image/embedded":{formats:["jpg","png","webp","jpeg"],element:"img",options:{}}},p=(Object.values(m).reduce((function(e,t){return[].concat(Object(s.a)(e),Object(s.a)(t.formats))}),[]),function(e){var t,a;if(!e)return null;var n=null===(t=e.name)||void 0===t||null===(a=t.split("."))||void 0===a?void 0:a.slice(-1)[0],c=Object.entries(m).filter((function(e){var t=Object(o.a)(e,2);t[0];return t[1].formats.includes(n)})),r=Object(o.a)(c,1)[0];if(r){var s=Object(o.a)(r,2),u=s[0],l=s[1];return Object(i.a)({name:u},l)}return null}),j=null,O=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=5;break}return e.next=3,Promise.all([a.e(14),a.e(20)]).then(a.t.bind(null,907,7));case 3:t=e.sent,j=new t.default;case 5:return e.abrupt("return",j);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(e){var t,a,n,c=e.thumbnailFile,r=e.fileType,i=e.item,o=p(c),s="".concat(null!==(t=null===o||void 0===o?void 0:o.element)&&void 0!==t?t:"img",'[data-torrent="').concat(i.magnetURI,'"]'),u='.dynamic-thumbnail[data-torrent="'.concat(i.magnetURI,'"]');c||"video"!==r.element||(null===(a=document.querySelector(s))||void 0===a||a.classList.add("hidden"),null===(n=document.querySelector(u))||void 0===n||n.classList.remove("hidden"))},g=function(e){var t=e.id,a=e.key;return function(e){return"".concat(t,"-").concat(a,"-").concat(e.name)}},x=function(e){var t=e.file,a=e.type,n=e.torrentMode,c=e.torrent,r=a.element,i="".concat(r,'[data-torrent="').concat(c.magnetURI,'"]'),s=document.querySelectorAll(i);console.log("Torrent Elements:",s),s.forEach((function(e){if(!e.classList.contains("hidden")){var r=decodeURIComponent(c.magnetURI.replace(/.*(ws=)/gi,"")),i=a.formats.filter((function(e){return r.toLowerCase().endsWith(".".concat(e.toLowerCase()))})),s=Object(o.a)(i,1)[0];!n&&s?e.setAttribute("src",r):t.renderTo(e,a.options)}}))},y=function(e){var t=e.thumbnailFileNames,a=e.getCacheFileName,n=e.torrentMode;return function(){var e=Object(r.a)(c.a.mark((function e(r){var i,o,s,u,l,v,f,m,j,O,g,y,k;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.fileName,s=r.thumbnails,u=r.item,l=r.fileType,v=o.split(".").slice(0,-1).join("."),f="".concat(v,"-thumb"),m=t.indexOf(f),j=s[m],O=j?p(j):null,g="".concat(null!==(i=null===O||void 0===O?void 0:O.element)&&void 0!==i?i:"img",'[data-torrent="').concat(u.magnetURI,'"]'),"video"!==l.element||!j){e.next=17;break}return e.next=10,d(a(j));case 10:if(k=e.sent,null===(y=document.querySelector(g))||void 0===y||y.classList.remove("hidden"),!k){e.next=15;break}return b(k,g),e.abrupt("return");case 15:return x({file:j,type:O,torrentMode:n,torrent:u}),e.abrupt("return");case 17:if("video"!==l.element||j){e.next=20;break}return h({thumbnailFile:j,fileType:l,item:u}),e.abrupt("return");case 20:return e.abrupt("return",{thumbnailFile:j});case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a,n,i,u=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:[],a=!(u.length>1&&void 0!==u[1])||u[1],e.next=4,Promise.all(t.map(function(){var e=Object(r.a)(c.a.mark((function e(t){var n,i,s,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.contentItems,i=t.id,s=Object.entries(n).filter((function(e){var t=Object(o.a)(e,2)[1];return m[t.type]}))){e.next=4;break}return e.abrupt("return",[]);case 4:return e.next=6,O();case 6:return u=e.sent,e.abrupt("return",s.map((function(e){var t=Object(o.a)(e,2),n=t[0],s=t[1];return function(){return new Promise((function(e){var t=g({id:i,key:n});u.get(s.magnetURI)?e(!0):u.add(s.magnetURI,function(){var n=Object(r.a)(c.a.mark((function n(i){var o,l,f,j;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e(!0),o=i.files.filter((function(e){var t,a,n=null===(t=e.name)||void 0===t||null===(a=t.split("."))||void 0===a?void 0:a.slice(-1)[0],c=Object.values(m).filter((function(e){return e.formats.includes(n)}))[0];return!!c&&c.formats.includes(n)})),l=o.filter((function(e){return e.name.match(/-thumb\.([\w\d]){2,4}$/gi)})),f=l.map((function(e){return e.name.replace(/\.([\w\d]){2,4}$/gi,"")})),j=y({getCacheFileName:t,thumbnailFileNames:f,torrentMode:a}),o.map(function(){var e=Object(r.a)(c.a.mark((function e(n){var r,i,o,v,m,O;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f.includes(n.name)){e.next=2;break}return e.abrupt("return");case 2:if(r=p(n)){e.next=5;break}return e.abrupt("return");case 5:return i=t(n),o=r.element,v="".concat(o,'[data-torrent="').concat(s.magnetURI,'"]'),e.next=10,d(i);case 10:if(m=e.sent,j({fileName:n.name,thumbnails:l,fileType:r,item:s}),!m){e.next=17;break}return(O=u.get(s.magnetURI))&&O.destroy(),b(m,v),e.abrupt("return");case 17:x({file:n,type:r,torrentMode:a,torrent:s});case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),i.on("done",(function(){o.map((function(e){var a=p(e),n=t(e),i=a.element,o="".concat(i,'.torrent-video[data-torrent="').concat(s.magnetURI,'"]');e.getBlob(function(){var e=Object(r.a)(c.a.mark((function e(t,a){var r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return console.warn(t),e.abrupt("return");case 3:return console.log("Caching loaded file...",n,a),e.next=6,v(n,a);case 6:if("false"!==(null===(r=document.querySelector(o))||void 0===r?void 0:r.dataset.played)||(null===r||void 0===r?void 0:r.getAttribute("src"))){e.next=12;break}return e.next=10,d(n);case 10:i=e.sent,b(i,o);case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}))}));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}))}})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:n=e.sent,i=n.reduce((function(e,t){return[].concat(Object(s.a)(e),Object(s.a)(t))}),[]),f(i);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(r.a)(c.a.mark((function e(t){var a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.magnetURI,e.next=3,O();case 3:if(n=e.sent,!(r=n.get(a))){e.next=8;break}return r.destroy(),e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},626:function(e,t,a){},627:function(e,t,a){},638:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(13),r=a(1),i=a.n(r),o=a(9),s=a(59),u=a(624),l=a(653),d=a(631),b=a(88),v=a.n(b),f=a(652),m=a.n(f),p=a(185),j=a(19),O=a(625),h=a(36),g=a(186),x=(a(626),a(4)),y=function(e){var t=e.item,a=e.index,n=void 0===a?0:a,i=e.tipValue,o=void 0===i?0:i,s=e.tipCounter,l=void 0===s?0:s,d=e.hideRibbon,b=void 0!==d&&d,f=Object(r.useRef)(null),m=Object(r.useState)(!1),p=Object(c.a)(m,2),j=p[0],O=p[1],h=Object(u.a)({trackVisibility:!1,delay:100,onEnter:function(){f.current&&(O(!0),f.current.play())},onLeave:function(){f.current&&(O(!1),f.current.pause())}}).observe,y=Object(r.useCallback)((function(){var e=!j;if(O(e),f.current){if(!e)return void f.current.pause();console.log("Playing video",e),f.current.play()}}),[j]),k=Object(r.useMemo)((function(){return CSS.supports("aspect-ratio: 16 / 9")?{aspectRatio:"16 / 9"}:{height:400}}),[]),w=Object(r.useCallback)((function(){var e;4===(null===(e=f.current)||void 0===e?void 0:e.readyState)&&O(!1)}),[f]);return Object(x.jsx)("div",{className:"media-container",ref:h,"data-v-1570052a":"",children:Object(x.jsxs)("div",{className:"video-container",style:k,"data-v-1570052a":"",children:[Object(x.jsxs)("div",{className:v()({"thumbnail-container":!0,"video-hidden":j}),onClick:y,"data-v-1570052a":"",children:[Object(x.jsx)("div",{className:"play-btn","data-v-1570052a":"",children:Object(x.jsx)("i",{className:"fas fa-play","data-v-1570052a":""})}),Object(x.jsx)("img",{className:"video-thumbnail hidden","data-torrent":t.magnetURI,"data-file-key":n,alt:"Video thumbnail","data-v-1570052a":""}),Object(x.jsx)("video",{className:"dynamic-thumbnail hidden","data-torrent":t.magnetURI,"data-file-key":n,"data-played":"false",controls:!1,muted:!0,"data-v-1570052a":""})]}),Object(x.jsx)("video",{className:v()({"torrent-video video-js vjs-default-skin":!0,"video-hidden":!j}),"data-torrent":t.magnetURI,"data-file-key":n,"data-played":"false",controls:!0,ref:f,muted:!0,onPause:w,"data-v-1570052a":""}),!b&&Object(x.jsx)(g.a,{tipCounter:l,tipValue:o,"data-v-1570052a":""})]})})},k=a(615),w=a(188),I=a(609),N=a(607),C=a.p+"static/media/share.8ed36b2d.svg";a(627),t.default=function(e){var t=e.id,a=e.publicKey,b=e.openTipModal,f=e.openUnlockModal,g=e.openDeleteModal,S=void 0===g?void 0:g,R=e.openShareModal,U=void 0===R?function(e){}:R,L=j.useDispatch(),E=j.useSelector((function(e){return e.content.unlockedContent})),M=j.useSelector((function(e){return e.auth.authenticated})),T=Object(l.useEmblaCarousel)({slidesToScroll:1,align:"center"}),P=Object(c.a)(T,2),V=P[0],F=P[1],A=j.useSelector(j.selectUser(a)),q=j.useSelector(j.selectSinglePost(a,t)),D=i.a.useMemo((function(){var e=Object.values(q.tips||{});return[e.length,m()(e)]}),[q]),K=Object(c.a)(D,2),W=K[0],B=K[1],Z=Object(r.useState)(0),z=Object(c.a)(Z,2),J=z[0],$=z[1],_=Object(r.useState)(0),G=Object(c.a)(_,2),H=G[0],Q=G[1],X=Object(r.useState)(!1),Y=Object(c.a)(X,2),ee=Y[0],te=Y[1],ae=Object(r.useState)(!1),ne=Object(c.a)(ae,2),ce=ne[0],re=ne[1],ie=Object(r.useState)(!1),oe=Object(c.a)(ie,2),se=oe[0],ue=oe[1],le=Object(u.a)({trackVisibility:!1,delay:100,onEnter:function(){re(!0)},onLeave:function(){ue(!0)}}).observe,de=!0;Object(r.useEffect)((function(){return L(Object(h.l)(a,t))}),[L,t,a]),Object(r.useEffect)((function(){return L(Object(h.m)(a,t))}),[L,t,a]);var be=i.a.useMemo((function(){var e,t=Object.values(null!==(e=q.contentItems)&&void 0!==e?e:{}).find((function(e){return"stream/embedded"===e.type}));return t?t.liveStatus:null}),[q.contentItems]),ve=i.a.useMemo((function(){var e,t=Object.values(null!==(e=q.contentItems)&&void 0!==e?e:{}).find((function(e){return"stream/embedded"===e.type}));return t&&"live"===t.liveStatus?t.viewersCounter:null}),[q.contentItems]),fe=Object(r.useCallback)((function(){var e;return Object.entries(null!==(e=q.contentItems)&&void 0!==e?e:{}).filter((function(e){var t=Object(c.a)(e,2);t[0];return"text/paragraph"!==t[1].type}))}),[q.contentItems]);Object(r.useEffect)((function(){fe().forEach((function(e){var t=Object(c.a)(e,2),n=t[0],r=t[1],i="".concat(a,">posts>").concat(n);r.isPrivate&&!E[i]&&te(!0)}))}),[fe,a,E]);var me=function(e,r){var i=Object(c.a)(e,2),s=i[0],u=i[1];if("text/paragraph"===u.type)return Object(x.jsx)("p",{"data-v-b71c099a":"",children:u.text},s);var l="";if(u.isPrivate){var d="".concat(a,">posts>").concat(t),b=E[d];if(!b)return Object(x.jsx)("div",{"data-v-b71c099a":"",children:Object(x.jsx)("i",{className:"fas fa-lock fa-10x","data-v-b71c099a":""})},s);l=b}return"image/embedded"===u.type?Object(x.jsx)(k.a,{id:s,item:Object(n.a)(Object(n.a)({},u),{},{magnetURI:l||u.magnetURI}),index:r,postId:t,tipCounter:W,tipValue:B,hideRibbon:void 0,width:void 0,"data-v-b71c099a":""},"".concat(t,"-").concat(r)):"video/embedded"===u.type?Object(x.jsx)(y,{item:Object(n.a)(Object(n.a)({},u),{},{magnetURI:l||u.magnetURI}),index:r,tipCounter:W,tipValue:B,"data-v-b71c099a":""},"".concat(t,"-").concat(r)):o.k(u)?u.playbackMagnet?Object(x.jsx)(y,{item:Object(n.a)(Object(n.a)({},u),{},{magnetURI:u.playbackMagnet}),index:r,tipCounter:W,tipValue:B,"data-v-b71c099a":""},"".concat(t,"-").concat(r)):Object(x.jsx)(w.a,{id:s,item:Object(n.a)(Object(n.a)({},u),{},{magnetURI:l||u.magnetURI}),index:r,postId:t,tipCounter:W,tipValue:B,hideRibbon:void 0,width:void 0,"data-v-b71c099a":""},"".concat(t,"-").concat(r)):null},pe=Object(r.useCallback)((function(){F&&F.canScrollNext()&&F.scrollNext()}),[F]),je=Object(r.useCallback)((function(){F&&F.canScrollPrev()&&F.scrollPrev()}),[F]),Oe=Object(r.useCallback)((function(e){if(0!==J){var t=e.key;"ArrowRight"===t&&pe(),"ArrowLeft"===t&&je()}}),[J,je,pe]),he=Object(r.useCallback)((function(){Q(F.selectedScrollSnap())}),[F,Q]);Object(r.useEffect)((function(){if(F)return F.on("scroll",he),$(F.scrollSnapList().length),window.addEventListener("keydown",Oe),function(){window.removeEventListener("keydown",Oe),F.off("scroll",he)}}),[F,J,Oe,he]);var ge=Object(r.useCallback)((function(){b({targetType:"post",postID:t,publicKey:a})}),[t,de,b,a]),xe=Object(r.useCallback)((function(){f({targetType:"unlock",postID:t,publicKey:a})}),[t,de,f,a]),ye=Object(r.useCallback)((function(){S({id:t,shared:!1})}),[t,S]),ke=Object(r.useCallback)((function(){if(!M){var e="https://".concat(window.location.host,"/").concat(a,"/post/").concat(t);return navigator.share?void navigator.share({text:"Check out ".concat(A.displayName,"'s post on Lightning.Page!"),url:e}):void navigator.clipboard.writeText(e)}U({targetType:"share",postID:t,publicKey:a})}),[a,t,U]);Object(r.useEffect)((function(){try{d.a.rebuild()}catch(e){console.log("Error inside <Post />: ",e)}}),[]),Object(r.useLayoutEffect)((function(){ce&&Object(O.a)([q],!1),se&&Object.entries(q.contentItems).map((function(e){var t=Object(c.a)(e,2),a=(t[0],t[1]);"magnetURI"in a&&Object(O.b)({magnetURI:a.magnetURI})}))}),[ce,se]);return Object(x.jsxs)("div",{className:"post",ref:le,"data-v-b71c099a":"",children:[Object(x.jsxs)("div",{className:"head","data-v-b71c099a":"",children:[Object(x.jsxs)("div",{className:"user","data-v-b71c099a":"",children:[Object(x.jsx)(I.a,{height:50,publicKey:a,"data-v-b71c099a":""}),Object(x.jsx)(N.a,{amt:10,insideRow:!0,"data-v-b71c099a":""}),Object(x.jsxs)("div",{className:"details","data-v-b71c099a":"",children:[Object(x.jsxs)("div",{className:"username","data-v-b71c099a":"",children:[Object(x.jsx)(s.b,{to:"/otherUser/".concat(a),"data-v-b71c099a":"",children:A.displayName}),be&&Object(x.jsxs)("p",{className:"liveStatus","data-v-b71c099a":"",children:[{live:"Is Live",waiting:"Waiting",wasLive:"Was Live"}[be],Object(x.jsx)("i",{className:"fas fa-circle liveStatusIcon ".concat("live"===be?"liveIcon":""),"data-v-b71c099a":""}),"live"===be&&Object(x.jsxs)("span",{"data-v-b71c099a":"",children:[" | ",ve," watching"]})]})]}),Object(x.jsx)("p",{"data-v-b71c099a":"",children:p.DateTime.fromMillis(q.date).toRelative()})]})]}),S&&Object(x.jsx)("i",{className:"fas fa-trash trash-icon",onClick:ye,"data-v-b71c099a":""})]}),Object(x.jsxs)("div",{className:"content","data-v-b71c099a":"",children:[function(){var e;return Object.entries(null!==(e=q.contentItems)&&void 0!==e?e:{}).filter((function(e){var t=Object(c.a)(e,2);t[0];return"text/paragraph"===t[1].type}))}().map(me),Object(x.jsxs)("div",{className:"media-content-carousel","data-v-b71c099a":"",children:[J>1?Object(x.jsxs)("div",{className:"media-carousel-controls-container","data-v-b71c099a":"",children:[Object(x.jsx)("div",{className:"media-carousel-arrow fas fa-angle-left",onClick:je,"data-v-b71c099a":""}),Object(x.jsx)("div",{className:"media-carousel-pages","data-v-b71c099a":"",children:Array.from({length:J}).map((function(e,t){return Object(x.jsx)("div",{className:v()({"media-carousel-page":!0,"active-carousel-page":H===t}),onClick:function(){return null===F||void 0===F?void 0:F.scrollTo(t)},"data-v-b71c099a":""},t)}))}),Object(x.jsx)("div",{className:"media-carousel-arrow fas fa-angle-right",onClick:pe,"data-v-b71c099a":""})]}):null,Object(x.jsx)("div",{className:"media-content-root",ref:V,"data-v-b71c099a":"",children:Object(x.jsx)("div",{className:"media-content-container","data-v-b71c099a":"",children:fe().map(me)})})]})]}),Object(x.jsxs)("div",{className:"actions","data-v-b71c099a":"",children:[Object(x.jsx)("div",{"data-v-b71c099a":""}),Object(x.jsx)("div",{className:"icon-tip-btn","data-tip":ee?"Unlock this post":"Tip this post",onClick:ee?xe:ge,"data-v-b71c099a":"",children:Object(x.jsx)("div",{className:"tip-icon icon-thin-feed","data-v-b71c099a":""})}),U&&Object(x.jsx)("div",{className:"icon-tip-btn","data-tip":"share",onClick:ke,"data-v-b71c099a":"",children:Object(x.jsx)("img",{alt:"Share this post",src:C,style:{color:"#4285b9",marginLeft:"auto"},"data-v-b71c099a":""})}),!U&&Object(x.jsx)("div",{"data-v-b71c099a":""})]})]})}}}]);
//# sourceMappingURL=32.618726da.chunk.js.map