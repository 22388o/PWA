(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[12,17,36],{593:function(e,t,c){"use strict";var n=c(0),a=c(85),r=c.n(a),i=c(6),o=c(178),s=(c(598),c(4)),l=function(e){var t=e.children,c=void 0===t?null:t,n=e.style,a=void 0===n?{}:n,i=e.contentClass,o=void 0===i?"":i;return Object(s.jsx)("div",{className:r()("content",o),style:a,"data-v-76fccb9d":"",children:c})},d=(c(599),function(e){var t=e.title,c=void 0===t?"":t,n=e.toggleModal,a=void 0===n?i.b:n,r=e.forceRenderTitleBar,o=void 0!==r&&r,l=e.hideXBtn,d=void 0!==l&&l;return c||o?Object(s.jsxs)("div",{className:"head","data-v-f0c12e81":"",children:[Object(s.jsx)("p",{className:"head-title","data-v-f0c12e81":"",children:c}),!d&&Object(s.jsx)("div",{className:"head-close",onClick:a,"data-v-f0c12e81":"",children:Object(s.jsx)("i",{className:"fas fa-times","data-v-f0c12e81":""})})]}):null}),u=(c(600),{borderRadius:"15px"});t.a=function(e){var t=e.modalOpen,c=void 0!==t&&t,a=e.toggleModal,b=e.modalTitle,j=void 0===b?"":b,f=e.children,p=e.contentStyle,v=void 0===p?i.c:p,O=e.disableBackdropClose,h=void 0!==O&&O,m=e.forceRenderTitleBar,x=void 0!==m&&m,g=e.hideXBtn,N=void 0!==g&&g,k=e.noFullWidth,_=void 0!==k&&k,y=e.blueBtn,C=void 0===y?"":y,S=e.disableBlueBtn,w=void 0!==S&&S,U=e.onClickBlueBtn,B=void 0===U?i.b:U,D=e.redBtn,T=void 0===D?"":D,I=e.disableRedBtn,P=void 0!==I&&I,R=e.onClickRedBtn,M=void 0===R?i.b:R,E=e.contentClass,q=void 0===E?"":E,K=e.error,L=void 0===K?"":K,F=e.textIfLoading,W=void 0===F?"":F,A=Object(n.useCallback)((function(){a()}),[a]),Y=Object(n.useCallback)((function(){h||a()}),[h,a]);return Object(s.jsxs)("div",{className:r()({modal:!0,open:c}),"data-v-73549cd0":"",children:[Object(s.jsx)("div",{className:"backdrop",onClick:Y,"data-v-73549cd0":""}),Object(s.jsxs)("div",{className:r()({container:!0,"container-no-full-width":_}),"data-v-73549cd0":"",children:[W&&Object(s.jsx)(o.a,{overlay:!0,style:u,text:W,"data-v-73549cd0":""}),Object(s.jsx)(d,{title:j,toggleModal:A,forceRenderTitleBar:x,hideXBtn:N,"data-v-73549cd0":""}),L&&Object(s.jsx)("div",{className:"form-error form-error-margin","data-v-73549cd0":"",children:L}),Object(s.jsx)(l,{style:v,contentClass:q,"data-v-73549cd0":"",children:"string"===typeof f?Object(s.jsx)("p",{className:"text-align-center","data-v-73549cd0":"",children:f}):f}),Object(s.jsxs)("div",{className:"color-buttons","data-v-73549cd0":"",children:[C&&Object(s.jsx)("button",{disabled:w,className:r()("color-btn","blue-btn"),onClick:B,"data-v-73549cd0":"",children:C}),T&&Object(s.jsx)("button",{disabled:P,className:r()("color-btn","red-btn"),onClick:M,"data-v-73549cd0":"",children:T})]})]})]})}},595:function(e,t,c){"use strict";var n=c(46),a=(c(0),c(85)),r=c.n(a),i=c(6),o=(c(601),c(4));t.a=function(e){var t=e.label,c=void 0===t?"":t,a=e.name,s=void 0===a?"":a,l=e.onChange,d=e.inputAction,u=void 0===d?i.b:d,b=e.actionIcon,j=void 0===b?"":b,f=e.value,p=e.inputMode,v=void 0===p?"text":p,O=e.type,h=void 0===O?"text":O,m=e.element,x=void 0===m?"input":m,g=e.small,N=void 0!==g&&g,k=e.disabled,_=void 0!==k&&k;return Object(o.jsxs)("div",{className:r()({group:!0,"group-disabled":_,"group-small":N}),"data-v-6bc9fed2":"",children:[c?Object(o.jsx)("p",{className:"group-label","data-v-6bc9fed2":"",children:c}):null,Object(o.jsxs)("div",{className:r()({"group-input-container":!0,"group-input-textarea-container":"textarea"===x}),"data-v-6bc9fed2":"",children:["textarea"===x?Object(o.jsx)("textarea",{className:"group-input group-input-textarea",name:s,onChange:l,inputMode:v,value:f,disabled:_,"data-v-6bc9fed2":""}):Object(o.jsx)("input",{className:"group-input",type:h,name:s,onChange:l,inputMode:v,value:f,disabled:_,"data-v-6bc9fed2":""}),u&&j?Object(o.jsx)("div",{className:"group-input-action",onClick:u,"data-v-6bc9fed2":"",children:Object(o.jsx)("i",{className:r()(Object(n.a)({"group-input-action-icon":!0,fas:!0},j,!0)),onClick:u,"data-v-6bc9fed2":""})}):null]})]})}},598:function(e,t,c){},599:function(e,t,c){},600:function(e,t,c){},601:function(e,t,c){},606:function(e,t,c){"use strict";var n=c(2),a=c(17),r=c(0),i=c(899),o=c(180),s=(c(623),c(607),c(4));t.a=function(e){var t=e.id,c=void 0===t?"":t,l=e.item,d=e.index,u=void 0===d?0:d,b=e.postId,j=void 0===b?"":b,f=e.tipValue,p=void 0===f?0:f,v=e.tipCounter,O=void 0===v?0:v,h=e.hideRibbon,m=void 0!==h&&h,x=e.width,g=void 0===x?null:x,N=e.disableZoom,k=void 0!==N&&N,_=e.style,y=void 0===_?{}:_,C=Object(r.useState)(!1),S=Object(a.a)(C,2),w=S[0],U=S[1],B=Object(r.useState)(!1),D=Object(a.a)(B,2),T=D[0],I=D[1],P=Object(r.useState)(!0),R=Object(a.a)(P,2),M=R[0],E=R[1],q=Object(r.useState)(null),K=Object(a.a)(q,2),L=K[0],F=K[1],W=Object(r.useCallback)((function(e){if(clearTimeout(L),U(e),!e&&T){I(!1);var t=setTimeout((function(){E(!0)}),200);F(t)}e&&E(!1)}),[L,T,U,I,E,F]),A=decodeURIComponent(l.magnetURI.replace(/.*(ws=)/gi,"")),Y=Object(n.a)(Object(n.a)({},y),{},{opacity:M?1:0});g&&(Y.width=g);var z=Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("img",{className:"image torrent-img torrent-img-".concat(j,"-").concat(c),alt:"Post Media","data-torrent":l.magnetURI,"data-file-key":u,style:Y,src:A,"data-v-83587b8b":""}),Object(s.jsx)("img",{className:"image enlarged-img enlarged-img-".concat(j,"-").concat(c),alt:"Post Media","data-file-key":u,onLoad:function(){I(!0)},style:{opacity:w?1:0,display:w?"block":"none"},src:A,"data-v-83587b8b":""}),!m&&Object(s.jsx)(o.a,{tipCounter:O,tipValue:p,zoomed:w,"data-v-83587b8b":""})]});return Object(s.jsx)("div",{className:"media-container","data-v-83587b8b":"",children:k?z:Object(s.jsx)(i.a,{isZoomed:w,onZoomChange:W,overlayBgColorStart:"#16191c00",overlayBgColorEnd:"#16191c","data-v-83587b8b":"",children:z})})}},607:function(e,t,c){},608:function(e,t,c){"use strict";c.d(t,"b",(function(){return x})),c.d(t,"a",(function(){return g}));var n=c(27),a=c(3),r=c.n(a),i=c(7),o=c(2),s=c(17),l=c(634),d=c.n(l),u=c(660),b=c.n(u),j=function(){var e=Object(i.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,b.a._init){e.next=4;break}return e.next=4,new Promise((function(e,t){b.a.init("ShockWalletStore").then((function(){return console.log("File cache initialized!"),b.a.persist()})).then((function(c){c.persistent?e(c):t(c)}))}));case 4:return e.next=6,b.a.load(t);case 6:return c=e.sent,e.abrupt("return",c.createURL());case 10:return e.prev=10,e.t0=e.catch(0),console.warn(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e,t){var c=document.querySelectorAll(t);return c&&c.length&&c.forEach((function(t){t.src||(t.src=e,t.muted=!0,t.autoplay=!0)})),!!(null===c||void 0===c?void 0:c.length)},p=function(e,t){return b.a.save(e,t)},v=function(e){var t=Promise.resolve();return e.forEach((function(e){t=t.then((function(){return e()}))})),t},O={"video/embedded":{formats:["mp4","webm"],element:"video",options:{autoplay:!0,muted:!0}},"image/embedded":{formats:["jpg","png","webp","jpeg","gif"],element:"img",options:{}}},h=function(e){var t,c,n=null===(t=e.name)||void 0===t||null===(c=t.split("."))||void 0===c?void 0:c.slice(-1)[0],a=Object.entries(O).filter((function(e){var t=Object(s.a)(e,2);t[0];return t[1].formats.includes(n)}))[0];if(a){var r=Object(s.a)(a,2),i=r[0],l=r[1];return Object(o.a)({name:i},l)}return null},m=new d.a,x=function(e){var t=e.url,c=e.type,n=O[void 0===c?"video/embedded":c].formats.filter((function(e){return t.toLowerCase().endsWith(".".concat(e.toLowerCase()))}));return!!Object(s.a)(n,1)[0]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],c=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=e.map((function(e){var n=e.contentItems,a=e.id;return Object.entries(null!==n&&void 0!==n?n:{}).filter((function(e){var t=Object(s.a)(e,2),c=(t[0],t[1]);return O[c.type]})).map((function(e){var n=Object(s.a)(e,2),o=n[0],l=n[1];return function(){return new Promise((function(e){!m.get(l.magnetURI)||c?m.add(l.magnetURI,function(){var c=Object(i.a)(r.a.mark((function c(n){var d;return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:e(!0),(d=n.files.filter((function(e){var t,c,n=null===(t=e.name)||void 0===t||null===(c=t.split("."))||void 0===c?void 0:c.slice(-1)[0],a=Object.entries(O).filter((function(e){var t=Object(s.a)(e,2);t[0];return t[1].formats.includes(n)}))[0];return!!a&&Object(s.a)(a,2)[1].formats.includes(n)}))).map(function(){var e=Object(i.a)(r.a.mark((function e(c){var n,i,s,d,u,b;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=h(c)){e.next=3;break}return e.abrupt("return");case 3:return i="".concat(a,"-").concat(o,"-").concat(c.name),s=n.element,d="".concat(s,'[data-torrent="').concat(l.magnetURI,'"]'),e.next=8,j(i);case 8:if(!(u=e.sent)){e.next=14;break}return(b=m.get(l.magnetURI))&&b.destroy(),f(u,d),e.abrupt("return");case 14:document.querySelectorAll(d).forEach((function(e){var a=x({url:l.magnetURI,type:n.name}),r=e.getAttribute("src");if(t&&!r||!a)c.renderTo(e,n.options);else{var i=decodeURIComponent(l.magnetURI.replace(/.*(ws=)/gi,""));e.setAttribute("src",i)}}));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.on("done",(function(){d.map((function(e){var t=h(e),c="".concat(a,"-").concat(o,"-").concat(e.name),n=t.element,s="".concat(n,'[data-torrent="').concat(l.magnetURI,'"]');return e.getBlob(function(){var e=Object(i.a)(r.a.mark((function e(t,n){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return console.warn(t),e.abrupt("return");case 3:return e.next=5,p(c,n);case 5:if("false"!==(null===(a=document.querySelector(s))||void 0===a?void 0:a.dataset.played)||(null===a||void 0===a?void 0:a.getAttribute("src"))){e.next=11;break}return e.next=9,j(c);case 9:i=e.sent,f(i,s);case 11:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),e}))}));case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()):e(!0)}))}}))})).reduce((function(e,t){return[].concat(Object(n.a)(e),Object(n.a)(t))}),[]);v(a)}},609:function(e,t,c){"use strict";var n=c(58),a=c(4);t.a=function(){return Object(a.jsxs)("div",{className:"bottom-nav-container",children:[Object(a.jsx)(n.c,{className:"bottom-nav-btn",to:"/overview",activeClassName:"active-nav-btn",children:Object(a.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-wallet"})}),Object(a.jsx)(n.c,{className:"bottom-nav-btn",to:"/chat",activeClassName:"active-nav-btn",children:Object(a.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-chat"})}),Object(a.jsx)(n.c,{className:"bottom-nav-btn",to:"/profile",activeClassName:"active-nav-btn",children:Object(a.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-profile"})}),Object(a.jsx)(n.c,{className:"bottom-nav-btn",to:"/feed",activeClassName:"active-nav-btn",children:Object(a.jsx)("i",{className:"bottom-nav-btn-icon icon-thin-feed"})})]})}},610:function(e,t,c){"use strict";var n=c(0),a=c(4);t.a=function(e){var t=e.color,c=e.length,r=e.type,i=e.width,o=Object(n.useMemo)((function(){return"vertical"===r?{borderLeftStyle:"solid",borderLeftWidth:"".concat(i/2,"px"),borderLeftColor:t,borderRightStyle:"solid",borderRightWidth:"".concat(i/2,"px"),borderRightColor:t,height:c}:"horizontal"===r?{borderTopStyle:"solid",borderTopWidth:i/2,borderTopColor:t,borderBottomStyle:"solid",borderBottomWidth:i/2,borderBottomColor:t,width:c}:{}}),[t,c,r,i]);return Object(a.jsx)("div",{style:o})}},611:function(e,t,c){"use strict";c(629);var n=c(4);t.a=function(e){var t=e.text,c=void 0===t?"Submit":t,a=e.onClick;return Object(n.jsx)("div",{className:"submit-btn",onClick:a,"data-v-7d829c36":"",children:Object(n.jsx)("p",{"data-v-7d829c36":"",children:c})})}},614:function(e,t,c){"use strict";var n=c(17),a=c(0),r=c(85),i=c.n(r),o=(c(615),c(4));t.a=function(e){var t=e.label,c=void 0===t?null:t,r=e.icon,s=void 0===r?null:r,l=e.iconURL,d=void 0===l?null:l,u=e.onClick,b=void 0===u?void 0:u,j=e.nestedMode,f=void 0!==j&&j,p=e.large,v=void 0!==p&&p,O=e.small,h=void 0!==O&&O,m=e.relative,x=void 0!==m&&m,g=e.children,N=void 0===g?null:g,k=e.style,_=void 0===k?{}:k,y=Object(a.useState)(!1),C=Object(n.a)(y,2),S=C[0],w=C[1],U=Object(a.useCallback)((function(){f&&w(!S)}),[S,f]),B=Object(a.useMemo)((function(){return d?Object(o.jsx)("img",{src:d,className:"add-btn-icon",alt:"","data-v-8ebf652e":""}):Object(o.jsx)("i",{className:"fas fa-".concat(null!==s&&void 0!==s?s:"plus"),"data-v-8ebf652e":""})}),[s,d]),D=Object(a.useMemo)((function(){return c?Object(o.jsx)("p",{className:"add-btn-label","data-v-8ebf652e":"",children:c}):null}),[c]);return Object(o.jsxs)("div",{className:i()({"add-btn-container":!0,"add-btn-round-container":!c,"add-btn-large":v,"add-btn-small":h}),"data-v-8ebf652e":"",children:[Object(o.jsxs)("div",{className:i()({"add-btn":!0,"add-btn-round":!c,"add-btn-extended":!!c,"add-btn-relative":x,"add-btn-open":S,"add-btn-nested":f}),onClick:null!==b&&void 0!==b?b:U,style:_,"data-v-8ebf652e":"",children:[B,D]}),N?Object(o.jsx)("div",{className:i()({"add-btn-options":!0,"add-btn-options-open":S}),"data-v-8ebf652e":"",children:N}):null]})}},615:function(e,t,c){},629:function(e,t,c){},636:function(e,t){},637:function(e,t){},638:function(e,t){},639:function(e,t){},640:function(e,t){},641:function(e,t){},642:function(e,t){},643:function(e,t){},644:function(e,t){},646:function(e,t){},647:function(e,t){},648:function(e,t){},649:function(e,t){},650:function(e,t){},651:function(e,t){},652:function(e,t){},653:function(e,t){},654:function(e,t){},655:function(e,t){},656:function(e,t){},657:function(e,t){},659:function(e,t){},665:function(e,t,c){"use strict";var n=c(85),a=c.n(n),r=c(592),i=c(610),o=c(666),s=c.n(o),l=c(4);t.a=function(e){var t=e.onChange,c=e.selected,n=e.showContentBtn;return Object(l.jsxs)("div",{className:a()(r.E,r.A,r.B,r.x,s.a.container),children:[Object(l.jsx)("span",{className:a()(r.D,"posts"===c?s.a.selected:s.a.unselected),onClick:function(){t("posts")},children:"Posts"}),Object(l.jsx)("div",{className:a()(r.a,n&&s.a["left-line"]),children:Object(l.jsx)(i.a,{color:"white",length:16,type:"vertical",width:2})}),Object(l.jsx)("span",{className:a()(r.D,"services"===c?s.a.selected:s.a.unselected),onClick:function(){t("services")},children:"Services"}),n&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:a()(r.a,s.a["right-line"]),children:Object(l.jsx)(i.a,{color:"white",length:16,type:"vertical",width:2})}),Object(l.jsx)("span",{className:a()(r.D,"content"===c?s.a.selected:s.a.unselected),onClick:function(){t("content")},children:"Content"})]})]})}},666:function(e,t,c){e.exports={container:"ProfileDivider_container__3ob9k",selected:"ProfileDivider_selected__3U98y",unselected:"ProfileDivider_unselected__1Z_qd","left-line":"ProfileDivider_left-line__2xjlN","right-line":"ProfileDivider_right-line__1d2KH"}},667:function(e,t,c){"use strict";t.a=c.p+"static/media/clipboard.beb19e1e.svg"},668:function(e,t,c){"use strict";t.a=c.p+"static/media/qrcode.69103c6c.svg"},678:function(e,t,c){"use strict";var n=c(3),a=c.n(n),r=c(7),i=c(17),o=c(0),s=c(37),l=c(593),d=c(611),u=c(595),b=c(35),j=c(178),f=(c(679),c(4));t.a=function(e){var t=e.tipData,c=e.toggleOpen,n=Object(s.b)(),p=Object(o.useState)(""),v=Object(i.a)(p,2),O=v[0],h=v[1],m=Object(o.useState)(!1),x=Object(i.a)(m,2),g=x[0],N=x[1],k=Object(o.useState)(""),_=Object(i.a)(k,2),y=_[0],C=_[1],S=Object(o.useState)(!1),w=Object(i.a)(S,2),U=w[0],B=w[1],D=Object(o.useCallback)((function(e){"amount"===e.target.name&&C(e.target.value)}),[]),T=Object(o.useCallback)(function(){var e=Object(r.a)(a.a.mark((function e(c){var r,i,o,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),!g){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,N(!0),e.next=7,n(Object(b.i)({amount:y,publicKey:t.publicKey,postId:t.postID}));case 7:B(!0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.error(e.t0),t&&(o=e.t0.message,s=null===(r=e.t0.response)||void 0===r||null===(i=r.data)||void 0===i?void 0:i.errorMessage,h(null!==s&&void 0!==s?s:o));case 14:return e.prev=14,N(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[3,10,14,17]])})));return function(t){return e.apply(this,arguments)}}(),[n,y,g,t]);return Object(o.useEffect)((function(){t||(N(!1),h(null),B(!1))}),[t]),Object(f.jsx)(l.a,{toggleModal:c,modalOpen:!!t,modalTitle:"Send Tip",noFullWidth:!0,"data-v-3760c224":"",children:U?Object(f.jsxs)("div",{className:"tip-modal-success m-1","data-v-3760c224":"",children:[Object(f.jsx)("i",{className:"tip-success-icon fas fa-check-circle","data-v-3760c224":""}),Object(f.jsx)("p",{className:"tip-success-title","data-v-3760c224":"",children:"Post tipped successfully!"}),Object(f.jsx)("p",{className:"tip-success-desc","data-v-3760c224":""})]}):Object(f.jsxs)("form",{className:"modal-form tip-form m-1",onSubmit:T,"data-v-3760c224":"",children:[O?Object(f.jsx)("div",{className:"form-error","data-v-3760c224":"",children:O}):null,g?Object(f.jsx)(j.a,{overlay:!0,text:"Sending Tip...","data-v-3760c224":""}):null,Object(f.jsx)("p",{className:"tip-modal-desc m-1","data-v-3760c224":"",children:"Please specify the amount of sats you'd like to tip this user with below."}),Object(f.jsx)(u.a,{name:"amount",onChange:D,value:y,inputMode:"decimal",small:!0,"data-v-3760c224":""}),Object(f.jsx)(d.a,{text:"SEND TIP",onClick:T,"data-v-3760c224":""})]})})}},679:function(e,t,c){},680:function(e,t,c){"use strict";var n=c(3),a=c.n(n),r=c(7),i=c(17),o=c(0),s=c(593),l=c(178),d=(c(681),c(6)),u=c(4);t.a=function(e){var t=e.shareData,c=e.toggleOpen,n=Object(o.useState)(""),b=Object(i.a)(n,2),j=b[0],f=b[1],p=Object(o.useState)(!1),v=Object(i.a)(p,2),O=v[0],h=v[1],m=Object(o.useState)(!1),x=Object(i.a)(m,2),g=x[0],N=x[1],k=Object(o.useCallback)(function(){var e=Object(r.a)(a.a.mark((function e(c){var n,r,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),!O){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,h(!0),n=t.postID,r=t.publicKey,i={originalAuthor:r,shareDate:Date.now()},e.next=9,d.d.post("/api/gun/put",{path:"$user>sharedPosts>".concat(n),value:i});case 9:o=e.sent,o.data.ok?N(!0):f("Share operation failed"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.error(e.t0);case 17:return e.prev=17,h(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[3,14,17,20]])})));return function(t){return e.apply(this,arguments)}}(),[t,O]),_=Object(o.useCallback)((function(){c(null)}),[c]);return Object(o.useEffect)((function(){t||(h(!1),f(null),N(!1))}),[t]),Object(u.jsx)(s.a,{toggleModal:c,modalOpen:!!t,modalTitle:"Share post",blueBtn:O||j||g?(g||j)&&"OK":"SHARE",disableBlueBtn:O,onClickBlueBtn:g||j?_:k,hideXBtn:g,noFullWidth:!0,"data-v-065c8612":"",children:g?Object(u.jsxs)("div",{className:"tip-modal-success m-1","data-v-065c8612":"",children:[Object(u.jsx)("i",{className:"tip-success-icon fas fa-check-circle","data-v-065c8612":""}),Object(u.jsx)("p",{className:"tip-success-title","data-v-065c8612":"",children:"Post shared successfully!"})]}):Object(u.jsxs)("form",{className:"modal-form tip-form m-1",onSubmit:k,"data-v-065c8612":"",children:[j?Object(u.jsx)("p",{className:"form-error","data-v-065c8612":"",children:j}):null,j&&Object(u.jsx)("p",{className:"tip-modal-desc m-1","data-v-065c8612":"",children:"You can try again."}),O?Object(u.jsx)(l.a,{text:"Sharing...","data-v-065c8612":""}):null,!j&&!O&&Object(u.jsx)("p",{className:"tip-modal-desc m-1","data-v-065c8612":"",children:"This post will be shared on your profile"})]})})}},681:function(e,t,c){},682:function(e,t,c){"use strict";var n=c(3),a=c.n(n),r=c(7),i=c(17),o=c(0),s=c(37),l=c(593),d=c(611),u=c(30),b=c(178),j=(c(683),c(4));t.a=function(e){var t=e.unlockData,c=e.toggleOpen,n=Object(s.b)(),f=Object(o.useState)(""),p=Object(i.a)(f,2),v=p[0],O=p[1],h=Object(o.useState)(!1),m=Object(i.a)(h,2),x=m[0],g=m[1],N=Object(o.useState)(!1),k=Object(i.a)(N,2),_=k[0],y=k[1],C=Object(o.useCallback)(function(){var e=Object(r.a)(a.a.mark((function e(c){var r,i,o,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),!x){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,g(!0),e.next=7,Object(u.o)(100,t.publicKey,t.postID)(n);case 7:y(!0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.error(e.t0),t&&(o=e.t0.message,s=null===(r=e.t0.response)||void 0===r||null===(i=r.data)||void 0===i?void 0:i.errorMessage,O(null!==s&&void 0!==s?s:o));case 14:return e.prev=14,g(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[3,10,14,17]])})));return function(t){return e.apply(this,arguments)}}(),[n,x,t]);return Object(o.useEffect)((function(){t||(g(!1),O(null),y(!1))}),[t]),Object(j.jsx)(l.a,{toggleModal:c,modalOpen:!!t,modalTitle:"Unlock content","data-v-b0d04e8b":"",children:_?Object(j.jsxs)("div",{className:"tip-modal-success","data-v-b0d04e8b":"",children:[Object(j.jsx)("i",{className:"tip-success-icon fas fa-check-circle","data-v-b0d04e8b":""}),Object(j.jsx)("p",{className:"tip-success-title","data-v-b0d04e8b":"",children:"Content unlocked successfully!"})]}):Object(j.jsxs)("form",{className:"modal-form tip-form",onSubmit:C,"data-v-b0d04e8b":"",children:[v?Object(j.jsx)("div",{className:"form-error","data-v-b0d04e8b":"",children:v}):null,x?Object(j.jsx)(b.a,{overlay:!0,text:"Sending Tip...","data-v-b0d04e8b":""}):null,Object(j.jsx)("p",{className:"tip-modal-desc","data-v-b0d04e8b":"",children:"100 sats will be sent to the owner of the post to unlock the content"}),Object(j.jsx)(d.a,{text:"UNLOCK",onClick:C,"data-v-b0d04e8b":""})]})})}},683:function(e,t,c){},854:function(e,t,c){},855:function(e,t,c){},856:function(e,t,c){e.exports={"profile-page":"OtherUser_profile-page__OhC-_","profile-container":"OtherUser_profile-container__2oq7s","profile-cover":"OtherUser_profile-cover__3Fq6P","profile-info-container":"OtherUser_profile-info-container__3qnqN","profile-avatar":"OtherUser_profile-avatar__S6INq","profile-name":"OtherUser_profile-name__3chmC","profile-desc":"OtherUser_profile-desc__f9Dsj","config-btn":"OtherUser_config-btn__t33_B","config-btn-icon":"OtherUser_config-btn-icon__1p_6O","config-btn-text":"OtherUser_config-btn-text__1Wg_T","profile-choice-container":"OtherUser_profile-choice-container__3-xgF","profile-choice-icon":"OtherUser_profile-choice-icon__3iOE1","profile-choice-text":"OtherUser_profile-choice-text__deYLl","profile-qrcode":"OtherUser_profile-qrcode__2Ok54","profile-qrcode-desc":"OtherUser_profile-qrcode-desc__3cp0P","profile-clipboard-container":"OtherUser_profile-clipboard-container__1P_p8","profile-clipboard-icon":"OtherUser_profile-clipboard-icon__1nW2U","profile-clipboard-text":"OtherUser_profile-clipboard-text__2g4AC","publish-content-form":"OtherUser_publish-content-form__1YdVa","publish-content-title":"OtherUser_publish-content-title__3EsYE","publish-content-icon":"OtherUser_publish-content-icon__291ch","m-1":"OtherUser_m-1__1dpvP","content-container":"OtherUser_content-container__1lOOL"}},857:function(e,t,c){e.exports={container:"FollowBtn_container__2c7Cj",text:"FollowBtn_text__1o7CS"}},858:function(e,t,c){e.exports={container:"SendReqBtn_container__2nY4E",text:"SendReqBtn_text__2_2zC"}},888:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(17),r=c(0),i=c.n(r),o=c(664),s=c.n(o),l=c(24),d=c(85),u=c.n(d),b=c(9),j=c(79),f=c(25),p=c(59),v=c(609),O=c(614),h=c(593),m=c(178),x=c(594),g=c(665),N=c(591),k=c(29),_=c(14),y=c(44),C=c(6),S=c(606),w=(c(854),c(4)),U={height:100,width:100,objectFit:"contain"},B=function(e){var t=e.publicKey,c=Object(l.g)(),n=i.a.useState({}),r=Object(a.a)(n,2),o=r[0],s=r[1],d=i.a.useState(""),u=Object(a.a)(d,2),b=u[0],j=u[1];i.a.useEffect((function(){var e=Object(_.b)({query:"".concat(t,"::publishedContentPublic::map.on"),onError:function(e){j(JSON.stringify(e,null,4))},onData:function(e,c){s(Object(k.a)((function(n){y.e(e)?n[c]=e:C.g.warn("Invalid/incomplete public published content found for public key ...".concat(t.slice(-8),", might be due to pending replication or was deleted if null: ").concat(JSON.stringify(e,null,4)))})))}});return function(){e.then((function(e){return e.off()}))}}),[t]);var f=i.a.useMemo((function(){return Object.values(o).sort((function(e,t){return t.timestamp-e.timestamp}))}),[o]);return b?Object(w.jsx)("p",{"data-v-9202bbcb":"",children:b}):Object(w.jsx)(w.Fragment,{children:f.map((function(e,t){return Object(w.jsxs)("div",{className:"item",onClick:function(){c.push("/item/".concat(e.author,"/").concat(e.id))},"data-v-9202bbcb":"",children:["image/embedded"===e.type&&Object(w.jsx)("div",{style:U,"data-v-9202bbcb":"",children:Object(w.jsx)(S.a,{disableZoom:!0,hideRibbon:!0,id:e.id,index:t,item:e,postId:null,tipCounter:null,tipValue:null,style:U,"data-v-9202bbcb":""})}),"video/embedded"===e.type&&Object(w.jsx)("div",{className:"video-placeholder",style:U,"data-v-9202bbcb":"",children:Object(w.jsx)("i",{className:"fas fa-video video-icon","data-v-9202bbcb":""})}),Object(w.jsxs)("div",{className:"title-and-description","data-v-9202bbcb":"",children:[Object(w.jsx)("h2",{className:"title","data-v-9202bbcb":"",children:e.title}),Object(w.jsx)("p",{className:"description","data-v-9202bbcb":"",children:e.description||" "}),Object(w.jsx)("span",{className:"timestamp","data-v-9202bbcb":"",children:C.f(e.timestamp)})]})]},e.id)}))})},D=c(667),T=c(668),I=c.p+"static/media/logo-alone-2.512c5854.png",P=c(678),R=c(682),M=c(3),E=c.n(M),q=c(7),K=c(37),L=c(611),F=c(114),W=c(30),A=(c(855),function(e){var t=e.service,c=e.toggleOpen,n=Object(K.b)(),i=Object(r.useState)(""),o=Object(a.a)(i,2),s=o[0],l=o[1],d=Object(r.useState)(!1),u=Object(a.a)(d,2),b=u[0],j=u[1],f=Object(r.useState)(null),p=Object(a.a)(f,2),v=p[0],O=p[1],x=Object(r.useState)(!1),g=Object(a.a)(x,2),N=g[0],k=g[1],_=Object(r.useCallback)(function(){var e=Object(q.a)(E.a.mark((function e(c){var a,r,i,o,s,d,u,b,f;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),e.prev=1,a=t.servicePrice,r=t.owner,i=t.serviceID,o=t.serviceType,r&&i&&"number"===typeof Number(a)){e.next=7;break}return console.error("invalid service provided"),console.error(t),e.abrupt("return");case 7:return j(!0),e.next=10,Object(F.b)(r,i,a)(n);case 10:s=e.sent,console.log(s),O(s),"torrentSeed"===o&&Object(W.b)(s.seedUrl,s.tokens[0])(n),"streamSeed"===o&&Object(W.e)(s.seedUrl,s.tokens[0])(n),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),console.error(e.t0),t&&(b=e.t0.message,f=null===(d=e.t0.response)||void 0===d||null===(u=d.data)||void 0===u?void 0:u.errorMessage,l(null!==f&&void 0!==f?f:b));case 21:return e.prev=21,j(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[1,17,21,24]])})));return function(t){return e.apply(this,arguments)}}(),[n,t]);Object(r.useEffect)((function(){t||(j(!1),l(null),O(null))}),[v]);var y=Object(r.useCallback)((function(){navigator.clipboard.writeText(JSON.stringify(v)),k(!0)}),[v,k]);return Object(w.jsx)(h.a,{toggleModal:c,modalOpen:!!t,modalTitle:"Buy Service","data-v-3be3f19d":"",children:v?Object(w.jsxs)("div",{className:"tip-modal-success","data-v-3be3f19d":"",children:[Object(w.jsx)("i",{className:"tip-success-icon fas fa-check-circle","data-v-3be3f19d":""}),Object(w.jsx)("p",{className:"tip-success-title","data-v-3be3f19d":"",children:"You successfully bought this service!"}),Object(w.jsx)("p",{"data-v-3be3f19d":"",children:JSON.stringify(v)}),Object(w.jsx)("button",{onClick:y,"data-v-3be3f19d":"",children:"COPY TO CLIPBOARD"}),N&&Object(w.jsx)("p",{"data-v-3be3f19d":"",children:"Copied!"})]}):Object(w.jsxs)("form",{className:"modal-form tip-form",onSubmit:_,"data-v-3be3f19d":"",children:[s?Object(w.jsx)("div",{className:"form-error","data-v-3be3f19d":"",children:s}):null,b?Object(w.jsx)(m.a,{overlay:!0,text:"Sending Tip...","data-v-3be3f19d":""}):null,Object(w.jsxs)("p",{className:"tip-modal-desc","data-v-3be3f19d":"",children:[t&&t.servicePrice," sats will be sent to the owner of the service provider"]}),Object(w.jsx)(L.a,{text:"BUY",onClick:_,"data-v-3be3f19d":""})]})})}),Y=c(680),z=c(20),J=c(592),V=c(856),Z=c.n(V),X=c(857),H=c.n(X),$=function(e){var t=e.publicKey,c=!!z.useSelector(z.selectFollows).find((function(e){return e.user===t})),n=Object(r.useState)(!1),i=Object(a.a)(n,2),o=i[0],s=i[1],l=Object(r.useCallback)(Object(q.a)(E.a.mark((function e(){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!o){e.next=3;break}return e.abrupt("return");case 3:if(s(!0),n={status:-1,data:{errorMessage:""}},!c){e.next=11;break}return e.next=8,C.d.delete("/api/gun/follows/".concat(t));case 8:n=e.sent,e.next=14;break;case 11:return e.next=13,C.d.put("/api/gun/follows/".concat(t),{});case 13:n=e.sent;case 14:if(200===n.status){e.next=16;break}throw new Error(n.data.errorMessage);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),c?alert("Could not unfollow: ".concat(e.t0.message)):alert("Could not follow: ".concat(e.t0.message));case 21:return e.prev=21,s(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])}))),[o,s,c,t]);return Object(w.jsx)("div",{className:H.a.container,onClick:l,children:Object(w.jsx)("p",{className:u()(J.D,H.a.text),children:o?"...":c?"Unfollow":"Follow"})})},G=c(47),Q=c(858),ee=c.n(Q),te=function(e){var t=e.publicKey,c=Object(K.b)(),n=Object(l.g)(),i=z.useSelector(z.selectIsInContact(t)),o=Object(r.useState)(!1),s=Object(a.a)(o,2),d=s[0],b=s[1],j=Object(r.useCallback)(Object(q.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!d){e.next=3;break}return e.abrupt("return");case 3:if(!i){e.next=6;break}return n.push("/chat/".concat(t)),e.abrupt("return");case 6:return b(!0),e.next=9,c(Object(G.l)(t));case 9:b(!1),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),alert("Could not send contact request: ".concat(e.t0.message)),C.g.error(e.t0),b(!1);case 17:case"end":return e.stop()}}),e,null,[[0,12]])}))),[d,c,n,i,t]);return Object(w.jsx)("div",{className:u()(ee.a.container),onClick:j,children:Object(w.jsx)("p",{className:u()(J.D,ee.a.text),children:d?"...":i?"Message":"Request Contact"})})},ce=c(35),ne=c(608),ae=i.a.lazy((function(){return Promise.all([c.e(2),c.e(34)]).then(c.bind(null,632))})),re=i.a.lazy((function(){return Promise.all([c.e(2),c.e(5)]).then(c.bind(null,876))})),ie={src:I,height:36,width:36,excavate:!0};t.default=function(){var e=z.useDispatch(),t=Object(l.g)(),c=z.useSelector((function(e){return e.node.publicKey})),i=Object(r.useState)(!1),o=Object(a.a)(i,2),d=o[0],k=o[1],_=Object(l.i)(),y=_.publicKey,S=_.selectedView,U=void 0===S?"posts":S,I=z.useSelector(z.selectUser(y)),M=Object(r.useState)({}),E=Object(a.a)(M,2),q=E[0],K=E[1],L=Object(r.useState)(null),F=Object(a.a)(L,2),W=F[0],V=F[1],X=Object(r.useState)(null),H=Object(a.a)(X,2),G=H[0],Q=H[1],ee=Object(r.useState)(null),oe=Object(a.a)(ee,2),se=oe[0],le=oe[1],de=Object(r.useState)(null),ue=Object(a.a)(de,2),be=ue[0],je=ue[1],fe=c===I.publicKey;Object(r.useEffect)((function(){return e(Object(ce.p)()),function(){e(Object(ce.r)())}}),[e]),Object(r.useEffect)((function(){return e(Object(ce.q)(y))}),[e,y]),Object(r.useEffect)((function(){return e(Object(ce.n)(y))}),[e,y]),Object(r.useEffect)((function(){return e(Object(p.b)(y))}),[e,y]),Object(r.useEffect)((function(){f.a.get("/api/gun/otheruser/".concat(y,"/load/offeredServices")).then((function(e){var t=e.data;K(t.data)})).catch((function(e){var t=C.e(e);t.startsWith("timeout of ")||"TIMEOUT_ERR"===t?C.g.warn("Could not fetch this user's (...".concat(y.slice(-8),") offered services due to a timeout error, this can be expected if the data hasn't been populated yet.")):(j.b.dark("There was an error fetching ".concat(I.displayName,"'s offered services: ").concat(t)),C.g.error(e))}))}),[I.displayName,y]);var pe=Object(r.useCallback)((function(){k(!d)}),[d]),ve=Object(r.useCallback)((function(e){!W&&e||V(null),V(e)}),[W]),Oe=Object(r.useCallback)((function(e){!se&&e||le(null),le(e)}),[se]),he=Object(r.useCallback)((function(e){!G&&e||Q(null),Q(e)}),[G]),me=Object(r.useCallback)((function(e){console.log("share click yo"),console.log(e),!be&&e||je(null),je(e)}),[be]),xe=z.useSelector(z.selectPostsNewestToOldest(y)),ge=Object(r.useCallback)((function(){navigator.clipboard.writeText(y)}),[y]),Ne=Object(r.useCallback)((function(e){t.replace("/otherUser/".concat(y,"/").concat(e))}),[t,y]);return Object(r.useLayoutEffect)((function(){Object(ne.a)(xe.filter((function(e){return!b.o(e)})),!1)}),[xe]),Object(w.jsxs)("div",{className:u()("page-container",Z.a["profile-page"]),children:[Object(w.jsxs)("div",{className:u()(Z.a["profile-container"]),children:[Object(w.jsx)("div",{className:"profile-cover",children:I.header&&Object(w.jsx)("img",{className:"w-100",alt:"User set profile header.",src:"data:image/jpeg;base64,".concat(I.header)})}),Object(w.jsxs)("div",{className:Z.a["profile-info-container"],children:[Object(w.jsx)("div",{className:Z.a["profile-avatar"],style:{height:"".concat(122,"px"),width:"".concat(122,"px")},children:Object(w.jsx)(x.a,{height:122,publicKey:y,greyBorder:!0})}),Object(w.jsxs)("div",{children:[Object(w.jsx)("p",{className:Z.a["profile-name"],children:I.displayName}),Object(w.jsx)("p",{className:Z.a["profile-desc"],children:I.bio||"Lightning.Page user"}),Object(w.jsxs)("div",{className:J.A,children:[!fe&&Object(w.jsx)($,{publicKey:y}),Object(w.jsx)(N.a,{amt:24,insideRow:!0}),!fe&&Object(w.jsx)(te,{publicKey:y})]})]})]}),Object(w.jsx)(g.a,{onChange:Ne,selected:U,showContentBtn:!0}),Object(w.jsxs)("div",{children:["posts"===U&&(0===xe.length?Object(w.jsx)(m.a,{text:"loading posts..."}):xe.map((function(e){return b.o(e)?Object(w.jsx)(r.Suspense,{fallback:Object(w.jsx)(m.a,{}),children:Object(w.jsx)(re,{openTipModal:ve,openUnlockModal:he,openShareModal:me,postID:e.originalPostID,sharerPublicKey:e.sharedBy})},e.originalPostID):Object(w.jsx)(r.Suspense,{fallback:Object(w.jsx)(m.a,{}),children:Object(w.jsx)(ae,{id:e.id,publicKey:e.authorId,openTipModal:ve,openUnlockModal:he,openDeleteModal:null,openShareModal:me})},e.id)}))),"services"===U&&Object.entries(q).filter((function(e){var t=Object(a.a)(e,2);return t[0],!!t[1]})).map((function(e){var t=Object(a.a)(e,2),c=t[0],r=t[1];return Object(w.jsxs)("div",{className:Z.a.post,children:[Object(w.jsx)("strong",{children:"Service ID"}),Object(w.jsx)("p",{children:c}),Object(w.jsx)("strong",{children:"Service Tpe"}),Object(w.jsx)("p",{children:r.serviceType}),Object(w.jsx)("strong",{children:"Service Title"}),Object(w.jsx)("p",{children:r.serviceTitle}),Object(w.jsx)("strong",{children:"Service Description"}),Object(w.jsx)("p",{children:r.serviceDescription}),Object(w.jsx)("strong",{children:"Service Condition"}),Object(w.jsx)("p",{children:r.serviceCondition}),Object(w.jsx)("strong",{children:"Service Price"}),Object(w.jsx)("p",{children:r.servicePrice}),Object(w.jsx)("button",{onClick:function(){le(Object(n.a)(Object(n.a)({},r),{},{serviceID:c,owner:y}))},children:"BUY SERVICE"})]})})),"content"===U&&Object(w.jsx)("div",{className:Z.a["content-container"],children:Object(w.jsx)(B,{publicKey:y})})]}),Object(w.jsx)(N.a,{amt:200}),Object(w.jsxs)(h.a,{toggleModal:pe,modalOpen:d,contentStyle:{padding:"40px 30px"},noFullWidth:!0,children:[Object(w.jsx)(s.a,{bgColor:"#23282d",fgColor:"#64bbff",value:y,size:180,className:Z.a["profile-qrcode"],imageSettings:ie}),Object(w.jsx)("p",{className:Z.a["profile-qrcode-desc"],children:"Scan this code to contact this user"}),Object(w.jsxs)("div",{className:Z.a["profile-clipboard-container"],onClick:ge,children:[Object(w.jsx)("img",{src:D.a,className:Z.a["profile-clipboard-icon"],alt:""}),Object(w.jsx)("p",{className:Z.a["profile-clipboard-text"],children:"Tap to copy to clipboard"})]})]}),Object(w.jsx)(P.a,{tipData:W,toggleOpen:ve}),Object(w.jsx)(R.a,{unlockData:G,toggleOpen:he}),Object(w.jsx)(A,{service:se,toggleOpen:Oe}),Object(w.jsx)(Y.a,{shareData:be,toggleOpen:me}),Object(w.jsx)(O.a,{onClick:pe,large:!0,iconURL:T.a,icon:null,label:null})]}),Object(w.jsx)(v.a,{})]})}}}]);
//# sourceMappingURL=12.7b3251e1.chunk.js.map