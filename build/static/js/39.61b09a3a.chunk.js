(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[39,43],{625:function(e,t,n){"use strict";n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return w}));var a=n(3),c=n.n(a),r=n(5),i=n(0),o=n(13),s=n(23),u=n(649),l=n.n(u),d=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,l.a._init){e.next=4;break}return e.next=4,new Promise((function(e,t){l.a.init("ShockWalletStore").then((function(){return console.log("File cache initialized!"),l.a.persist()})).then((function(n){n.persistent?e(n):t(n)}))}));case 4:return e.next=6,l.a.load(t);case 6:return n=e.sent,e.abrupt("return",n.createURL());case 10:return e.prev=10,e.t0=e.catch(0),console.warn(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e,t){var n=document.querySelectorAll(t);return n&&n.length&&n.forEach((function(t){t.src||(t.src=e,t.muted=!0,t.autoplay=!1)})),!!(null===n||void 0===n?void 0:n.length)},v=function(e,t){return l.a.save(e,t)},f=function(e){var t=Promise.resolve();return e.forEach((function(e){t=t.then((function(){return e()}))})),t},m={"video/embedded":{formats:["mp4","webm"],element:"video",options:{autoplay:!1,muted:!0}},"image/embedded":{formats:["jpg","png","webp","jpeg"],element:"img",options:{}}},p=(Object.values(m).reduce((function(e,t){return[].concat(Object(s.a)(e),Object(s.a)(t.formats))}),[]),function(e){var t,n;if(!e)return null;var a=null===(t=e.name)||void 0===t||null===(n=t.split("."))||void 0===n?void 0:n.slice(-1)[0],c=Object.entries(m).filter((function(e){var t=Object(o.a)(e,2);t[0];return t[1].formats.includes(a)})),r=Object(o.a)(c,1)[0];if(r){var s=Object(o.a)(r,2),u=s[0],l=s[1];return Object(i.a)({name:u},l)}return null}),j=null,h=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=5;break}return e.next=3,Promise.all([n.e(14),n.e(20)]).then(n.t.bind(null,907,7));case 3:t=e.sent,j=new t.default;case 5:return e.abrupt("return",j);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(e){var t,n,a,c=e.thumbnailFile,r=e.fileType,i=e.item,o=p(c),s="".concat(null!==(t=null===o||void 0===o?void 0:o.element)&&void 0!==t?t:"img",'[data-torrent="').concat(i.magnetURI,'"]'),u='.dynamic-thumbnail[data-torrent="'.concat(i.magnetURI,'"]');c||"video"!==r.element||(null===(n=document.querySelector(s))||void 0===n||n.classList.add("hidden"),null===(a=document.querySelector(u))||void 0===a||a.classList.remove("hidden"))},x=function(e){var t=e.id,n=e.key;return function(e){return"".concat(t,"-").concat(n,"-").concat(e.name)}},g=function(e){var t=e.file,n=e.type,a=e.torrentMode,c=e.torrent,r=n.element,i="".concat(r,'[data-torrent="').concat(c.magnetURI,'"]'),s=document.querySelectorAll(i);console.log("Torrent Elements:",s),s.forEach((function(e){if(!e.classList.contains("hidden")){var r=decodeURIComponent(c.magnetURI.replace(/.*(ws=)/gi,"")),i=n.formats.filter((function(e){return r.toLowerCase().endsWith(".".concat(e.toLowerCase()))})),s=Object(o.a)(i,1)[0];!a&&s?e.setAttribute("src",r):t.renderTo(e,n.options)}}))},y=function(e){var t=e.thumbnailFileNames,n=e.getCacheFileName,a=e.torrentMode;return function(){var e=Object(r.a)(c.a.mark((function e(r){var i,o,s,u,l,v,f,m,j,h,x,y,k;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.fileName,s=r.thumbnails,u=r.item,l=r.fileType,v=o.split(".").slice(0,-1).join("."),f="".concat(v,"-thumb"),m=t.indexOf(f),j=s[m],h=j?p(j):null,x="".concat(null!==(i=null===h||void 0===h?void 0:h.element)&&void 0!==i?i:"img",'[data-torrent="').concat(u.magnetURI,'"]'),"video"!==l.element||!j){e.next=17;break}return e.next=10,d(n(j));case 10:if(k=e.sent,null===(y=document.querySelector(x))||void 0===y||y.classList.remove("hidden"),!k){e.next=15;break}return b(k,x),e.abrupt("return");case 15:return g({file:j,type:h,torrentMode:a,torrent:u}),e.abrupt("return");case 17:if("video"!==l.element||j){e.next=20;break}return O({thumbnailFile:j,fileType:l,item:u}),e.abrupt("return");case 20:return e.abrupt("return",{thumbnailFile:j});case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){var e=Object(r.a)(c.a.mark((function e(){var t,n,a,i,u=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:[],n=!(u.length>1&&void 0!==u[1])||u[1],e.next=4,Promise.all(t.map(function(){var e=Object(r.a)(c.a.mark((function e(t){var a,i,s,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.contentItems,i=t.id,s=Object.entries(a).filter((function(e){var t=Object(o.a)(e,2)[1];return m[t.type]}))){e.next=4;break}return e.abrupt("return",[]);case 4:return e.next=6,h();case 6:return u=e.sent,e.abrupt("return",s.map((function(e){var t=Object(o.a)(e,2),a=t[0],s=t[1];return function(){return new Promise((function(e){var t=x({id:i,key:a});u.get(s.magnetURI)?e(!0):u.add(s.magnetURI,function(){var a=Object(r.a)(c.a.mark((function a(i){var o,l,f,j;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e(!0),o=i.files.filter((function(e){var t,n,a=null===(t=e.name)||void 0===t||null===(n=t.split("."))||void 0===n?void 0:n.slice(-1)[0],c=Object.values(m).filter((function(e){return e.formats.includes(a)}))[0];return!!c&&c.formats.includes(a)})),l=o.filter((function(e){return e.name.match(/-thumb\.([\w\d]){2,4}$/gi)})),f=l.map((function(e){return e.name.replace(/\.([\w\d]){2,4}$/gi,"")})),j=y({getCacheFileName:t,thumbnailFileNames:f,torrentMode:n}),o.map(function(){var e=Object(r.a)(c.a.mark((function e(a){var r,i,o,v,m,h;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f.includes(a.name)){e.next=2;break}return e.abrupt("return");case 2:if(r=p(a)){e.next=5;break}return e.abrupt("return");case 5:return i=t(a),o=r.element,v="".concat(o,'[data-torrent="').concat(s.magnetURI,'"]'),e.next=10,d(i);case 10:if(m=e.sent,j({fileName:a.name,thumbnails:l,fileType:r,item:s}),!m){e.next=17;break}return(h=u.get(s.magnetURI))&&h.destroy(),b(m,v),e.abrupt("return");case 17:g({file:a,type:r,torrentMode:n,torrent:s});case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),i.on("done",(function(){o.map((function(e){var n=p(e),a=t(e),i=n.element,o="".concat(i,'.torrent-video[data-torrent="').concat(s.magnetURI,'"]');e.getBlob(function(){var e=Object(r.a)(c.a.mark((function e(t,n){var r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return console.warn(t),e.abrupt("return");case 3:return console.log("Caching loaded file...",a,n),e.next=6,v(a,n);case 6:if("false"!==(null===(r=document.querySelector(o))||void 0===r?void 0:r.dataset.played)||(null===r||void 0===r?void 0:r.getAttribute("src"))){e.next=12;break}return e.next=10,d(a);case 10:i=e.sent,b(i,o);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}))}));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}))}})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:a=e.sent,i=a.reduce((function(e,t){return[].concat(Object(s.a)(e),Object(s.a)(t))}),[]),f(i);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.magnetURI,e.next=3,h();case 3:if(a=e.sent,!(r=a.get(n))){e.next=8;break}return r.destroy(),e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},626:function(e,t,n){},627:function(e,t,n){},638:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(13),r=n(1),i=n.n(r),o=n(9),s=n(59),u=n(624),l=n(653),d=n(631),b=n(88),v=n.n(b),f=n(652),m=n.n(f),p=n(185),j=n(18),h=n(625),O=n(36),x=n(186),g=(n(626),n(4)),y=function(e){var t=e.item,n=e.index,a=void 0===n?0:n,i=e.tipValue,o=void 0===i?0:i,s=e.tipCounter,l=void 0===s?0:s,d=e.hideRibbon,b=void 0!==d&&d,f=Object(r.useRef)(null),m=Object(r.useState)(!1),p=Object(c.a)(m,2),j=p[0],h=p[1],O=Object(u.a)({trackVisibility:!1,delay:100,onEnter:function(){f.current&&(h(!0),f.current.play())},onLeave:function(){f.current&&(h(!1),f.current.pause())}}).observe,y=Object(r.useCallback)((function(){var e=!j;if(h(e),f.current){if(!e)return void f.current.pause();console.log("Playing video",e),f.current.play()}}),[j]),k=Object(r.useMemo)((function(){return CSS.supports("aspect-ratio: 16 / 9")?{aspectRatio:"16 / 9"}:{height:400}}),[]),w=Object(r.useCallback)((function(){var e;4===(null===(e=f.current)||void 0===e?void 0:e.readyState)&&h(!1)}),[f]);return Object(g.jsx)("div",{className:"media-container",ref:O,"data-v-8d84acb3":"",children:Object(g.jsxs)("div",{className:"video-container",style:k,"data-v-8d84acb3":"",children:[Object(g.jsxs)("div",{className:v()({"thumbnail-container":!0,"video-hidden":j}),onClick:y,"data-v-8d84acb3":"",children:[Object(g.jsx)("div",{className:"play-btn","data-v-8d84acb3":"",children:Object(g.jsx)("i",{className:"fas fa-play","data-v-8d84acb3":""})}),Object(g.jsx)("img",{className:"video-thumbnail hidden","data-torrent":t.magnetURI,"data-file-key":a,alt:"Video thumbnail","data-v-8d84acb3":""}),Object(g.jsx)("video",{className:"dynamic-thumbnail hidden","data-torrent":t.magnetURI,"data-file-key":a,"data-played":"false",controls:!1,muted:!0,"data-v-8d84acb3":""})]}),Object(g.jsx)("video",{className:v()({"torrent-video video-js vjs-default-skin":!0,"video-hidden":!j}),"data-torrent":t.magnetURI,"data-file-key":a,"data-played":"false",controls:!0,ref:f,muted:!0,onPause:w,"data-v-8d84acb3":""}),!b&&Object(g.jsx)(x.a,{tipCounter:l,tipValue:o,"data-v-8d84acb3":""})]})})},k=n(615),w=n(188),I=n(609),N=n(607),C=n.p+"static/media/share.8ed36b2d.svg";n(627),t.default=function(e){var t=e.id,n=e.publicKey,b=e.openTipModal,f=e.openUnlockModal,x=e.openDeleteModal,R=void 0===x?void 0:x,S=e.openShareModal,U=void 0===S?function(e){}:S,L=j.useDispatch(),E=j.useSelector((function(e){return e.content.unlockedContent})),M=j.useSelector((function(e){return e.auth.authenticated})),T=Object(l.useEmblaCarousel)({slidesToScroll:1,align:"center"}),P=Object(c.a)(T,2),V=P[0],F=P[1],A=j.useSelector(j.selectUser(n)),q=j.useSelector(j.selectSinglePost(n,t)),D=i.a.useMemo((function(){var e=Object.values(q.tips||{});return[e.length,m()(e)]}),[q]),K=Object(c.a)(D,2),W=K[0],J=K[1],$=Object(r.useState)(0),z=Object(c.a)($,2),B=z[0],_=z[1],G=Object(r.useState)(0),H=Object(c.a)(G,2),Q=H[0],X=H[1],Y=Object(r.useState)(!1),Z=Object(c.a)(Y,2),ee=Z[0],te=Z[1],ne=Object(r.useState)(!1),ae=Object(c.a)(ne,2),ce=ae[0],re=ae[1],ie=Object(r.useState)(!1),oe=Object(c.a)(ie,2),se=oe[0],ue=oe[1],le=Object(u.a)({trackVisibility:!1,delay:100,onEnter:function(){re(!0)},onLeave:function(){ue(!0)}}).observe,de=!0;Object(r.useEffect)((function(){return L(Object(O.l)(n,t))}),[L,t,n]),Object(r.useEffect)((function(){return L(Object(O.m)(n,t))}),[L,t,n]);var be=i.a.useMemo((function(){var e,t=Object.values(null!==(e=q.contentItems)&&void 0!==e?e:{}).find((function(e){return"stream/embedded"===e.type}));return t?t.liveStatus:null}),[q.contentItems]),ve=i.a.useMemo((function(){var e,t=Object.values(null!==(e=q.contentItems)&&void 0!==e?e:{}).find((function(e){return"stream/embedded"===e.type}));return t&&"live"===t.liveStatus?t.viewersCounter:null}),[q.contentItems]),fe=Object(r.useCallback)((function(){var e;return Object.entries(null!==(e=q.contentItems)&&void 0!==e?e:{}).filter((function(e){var t=Object(c.a)(e,2);t[0];return"text/paragraph"!==t[1].type}))}),[q.contentItems]);Object(r.useEffect)((function(){fe().forEach((function(e){var t=Object(c.a)(e,2),a=t[0],r=t[1],i="".concat(n,">posts>").concat(a);r.isPrivate&&!E[i]&&te(!0)}))}),[fe,n,E]);var me=function(e,r){var i=Object(c.a)(e,2),s=i[0],u=i[1];if("text/paragraph"===u.type)return Object(g.jsx)("p",{"data-v-c8cde69b":"",children:u.text},s);var l="";if(u.isPrivate){var d="".concat(n,">posts>").concat(t),b=E[d];if(!b)return Object(g.jsx)("div",{"data-v-c8cde69b":"",children:Object(g.jsx)("i",{className:"fas fa-lock fa-10x","data-v-c8cde69b":""})},s);l=b}return"image/embedded"===u.type?Object(g.jsx)(k.a,{id:s,item:Object(a.a)(Object(a.a)({},u),{},{magnetURI:l||u.magnetURI}),index:r,postId:t,tipCounter:W,tipValue:J,hideRibbon:void 0,width:void 0,"data-v-c8cde69b":""},"".concat(t,"-").concat(r)):"video/embedded"===u.type?Object(g.jsx)(y,{item:Object(a.a)(Object(a.a)({},u),{},{magnetURI:l||u.magnetURI}),index:r,tipCounter:W,tipValue:J,"data-v-c8cde69b":""},"".concat(t,"-").concat(r)):o.k(u)?u.playbackMagnet?Object(g.jsx)(y,{item:Object(a.a)(Object(a.a)({},u),{},{magnetURI:u.playbackMagnet}),index:r,tipCounter:W,tipValue:J,"data-v-c8cde69b":""},"".concat(t,"-").concat(r)):Object(g.jsx)(w.a,{id:s,item:Object(a.a)(Object(a.a)({},u),{},{magnetURI:l||u.magnetURI}),index:r,postId:t,tipCounter:W,tipValue:J,hideRibbon:void 0,width:void 0,"data-v-c8cde69b":""},"".concat(t,"-").concat(r)):null},pe=Object(r.useCallback)((function(){F&&F.canScrollNext()&&F.scrollNext()}),[F]),je=Object(r.useCallback)((function(){F&&F.canScrollPrev()&&F.scrollPrev()}),[F]),he=Object(r.useCallback)((function(e){if(0!==B){var t=e.key;"ArrowRight"===t&&pe(),"ArrowLeft"===t&&je()}}),[B,je,pe]),Oe=Object(r.useCallback)((function(){X(F.selectedScrollSnap())}),[F,X]);Object(r.useEffect)((function(){if(F)return F.on("scroll",Oe),_(F.scrollSnapList().length),window.addEventListener("keydown",he),function(){window.removeEventListener("keydown",he),F.off("scroll",Oe)}}),[F,B,he,Oe]);var xe=Object(r.useCallback)((function(){b({targetType:"post",postID:t,publicKey:n})}),[t,de,b,n]),ge=Object(r.useCallback)((function(){f({targetType:"unlock",postID:t,publicKey:n})}),[t,de,f,n]),ye=Object(r.useCallback)((function(){R({id:t,shared:!1})}),[t,R]),ke=Object(r.useCallback)((function(){if(!M){var e="https://".concat(window.location.host,"/").concat(n,"/post/").concat(t);return navigator.share?void navigator.share({text:"Check out ".concat(A.displayName,"'s post on Lightning.Page!"),url:e}):void navigator.clipboard.writeText(e)}U({targetType:"share",postID:t,publicKey:n})}),[n,t,U]);Object(r.useEffect)((function(){try{d.a.rebuild()}catch(e){console.log("Error inside <Post />: ",e)}}),[]),Object(r.useLayoutEffect)((function(){ce&&Object(h.a)([q],!1),se&&Object.entries(q.contentItems).map((function(e){var t=Object(c.a)(e,2),n=(t[0],t[1]);"magnetURI"in n&&Object(h.b)({magnetURI:n.magnetURI})}))}),[ce,se]);return Object(g.jsxs)("div",{className:"post",ref:le,"data-v-c8cde69b":"",children:[Object(g.jsxs)("div",{className:"head","data-v-c8cde69b":"",children:[Object(g.jsxs)("div",{className:"user","data-v-c8cde69b":"",children:[Object(g.jsx)(I.a,{height:50,publicKey:n,"data-v-c8cde69b":""}),Object(g.jsx)(N.a,{amt:10,insideRow:!0,"data-v-c8cde69b":""}),Object(g.jsxs)("div",{className:"details","data-v-c8cde69b":"",children:[Object(g.jsxs)("div",{className:"username","data-v-c8cde69b":"",children:[Object(g.jsx)(s.b,{to:"/otherUser/".concat(n),"data-v-c8cde69b":"",children:A.displayName}),be&&Object(g.jsxs)("p",{className:"liveStatus","data-v-c8cde69b":"",children:[{live:"Is Live",waiting:"Waiting",wasLive:"Was Live"}[be],Object(g.jsx)("i",{className:"fas fa-circle liveStatusIcon ".concat("live"===be?"liveIcon":""),"data-v-c8cde69b":""}),"live"===be&&Object(g.jsxs)("span",{"data-v-c8cde69b":"",children:[" | ",ve," watching"]})]})]}),Object(g.jsx)("p",{"data-v-c8cde69b":"",children:p.DateTime.fromMillis(q.date).toRelative()})]})]}),R&&Object(g.jsx)("i",{className:"fas fa-trash trash-icon",onClick:ye,"data-v-c8cde69b":""})]}),Object(g.jsxs)("div",{className:"content","data-v-c8cde69b":"",children:[function(){var e;return Object.entries(null!==(e=q.contentItems)&&void 0!==e?e:{}).filter((function(e){var t=Object(c.a)(e,2);t[0];return"text/paragraph"===t[1].type}))}().map(me),Object(g.jsxs)("div",{className:"media-content-carousel","data-v-c8cde69b":"",children:[B>1?Object(g.jsxs)("div",{className:"media-carousel-controls-container","data-v-c8cde69b":"",children:[Object(g.jsx)("div",{className:"media-carousel-arrow fas fa-angle-left",onClick:je,"data-v-c8cde69b":""}),Object(g.jsx)("div",{className:"media-carousel-pages","data-v-c8cde69b":"",children:Array.from({length:B}).map((function(e,t){return Object(g.jsx)("div",{className:v()({"media-carousel-page":!0,"active-carousel-page":Q===t}),onClick:function(){return null===F||void 0===F?void 0:F.scrollTo(t)},"data-v-c8cde69b":""},t)}))}),Object(g.jsx)("div",{className:"media-carousel-arrow fas fa-angle-right",onClick:pe,"data-v-c8cde69b":""})]}):null,Object(g.jsx)("div",{className:"media-content-root",ref:V,"data-v-c8cde69b":"",children:Object(g.jsx)("div",{className:"media-content-container","data-v-c8cde69b":"",children:fe().map(me)})})]})]}),Object(g.jsxs)("div",{className:"actions","data-v-c8cde69b":"",children:[Object(g.jsx)("div",{"data-v-c8cde69b":""}),Object(g.jsx)("div",{className:"icon-tip-btn","data-tip":ee?"Unlock this post":"Tip this post",onClick:ee?ge:xe,"data-v-c8cde69b":"",children:Object(g.jsx)("div",{className:"tip-icon icon-thin-feed","data-v-c8cde69b":""})}),U&&Object(g.jsx)("div",{className:"icon-tip-btn","data-tip":"share",onClick:ke,"data-v-c8cde69b":"",children:Object(g.jsx)("img",{alt:"Share this post",src:C,style:{color:"#4285b9",marginLeft:"auto"},"data-v-c8cde69b":""})}),!U&&Object(g.jsx)("div",{"data-v-c8cde69b":""})]})]})}}}]);
//# sourceMappingURL=39.61b09a3a.chunk.js.map