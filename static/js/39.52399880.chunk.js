(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[39],{802:function(a,e,t){"use strict";t.r(e);var c=t(3),n=t.n(c),s=t(5),i=t(13),d=t(0),o=t(18),l=t(803),r=t.n(l),u=t(650),b=t(807),j=t.n(b),p=t(47),v=t(183),m=(t(810),t(32)),O=t(4);e.default=function(a){var e=a.publicKey,t=a.tipData,c=a.toggleOpen,l=Object(o.useDispatch)(),b=Object(o.useSelector)((function(a){return a.guest.user})),h=Object(o.useSelector)((function(a){var e;return null===(e=a.guest.paymentRequest)||void 0===e?void 0:e.response})),f=Object(d.useState)(!1),x=Object(i.a)(f,2),N=x[0],g=x[1],y=Object(d.useState)("10"),k=Object(i.a)(y,2),C=k[0],I=k[1],w=Object(d.useState)(!1),S=Object(i.a)(w,2),T=S[0],P=S[1],q=Object(d.useState)(""),E=Object(i.a)(q,2),R=E[0],D=E[1],V=Object(d.useState)(!1),A=Object(i.a)(V,2),J=A[0],K=A[1],Y=Object(d.useCallback)((function(){P(!0),u.a.rebuild();var a=setTimeout((function(){P(!1),u.a.rebuild()}),500);return function(){clearTimeout(a)}}),[]),z=Object(d.useCallback)(Object(s.a)(n.a.mark((function a(){var c,s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,g(!0),a.next=4,l(Object(p.d)({senderPair:b,recipientPublicKey:e,amount:parseFloat(C),metadata:{targetType:"tip",ackInfo:t.postID}}));case 4:c=a.sent,s=c.ackNode,g(!1),s&&D(s),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.error(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])}))),[l,b,e,C,t.postID]);Object(d.useEffect)((function(){R&&Object(m.e)({query:"".concat(e,"::orderToResponse/").concat(R,"::on")}).then((function(){return Object(m.e)({query:"".concat(e,"::orderToResponse/").concat(R)})})).then((function(a){"orderAck"===a.type&&K(!0)}))}),[R,e,K]);var B=Object(d.useCallback)((function(){c()}),[c]),F="";return h&&(F="paymentRequest"),J&&(F="done"),Object(O.jsxs)("div",{className:"tip-modal","data-v-90d294aa":"",children:[N?Object(O.jsx)("div",{className:"tip-modal-loading","data-v-90d294aa":"",children:Object(O.jsx)(v.a,{text:"Submitting Tip Request...",style:{marginBottom:0},"data-v-90d294aa":""})}):null,Object(O.jsx)("div",{className:"tip-modal-head","data-v-90d294aa":"",children:Object(O.jsx)("div",{className:"tip-modal-title","data-v-90d294aa":"",children:"Send Tip"})}),""===F&&Object(O.jsxs)("div",{className:"tip-modal-content","data-v-90d294aa":"",children:[Object(O.jsx)("p",{className:"tip-modal-instructions","data-v-90d294aa":"",children:"Please specify the amount of sats you'd like to tip this user with below and we'll generate an invoice for you to scan."}),Object(O.jsx)("input",{className:"tip-modal-input",value:C,onChange:function(a){return I(a.target.value)},"data-v-90d294aa":""})]}),"paymentRequest"===F&&Object(O.jsxs)("div",{className:"tip-modal-content","data-v-90d294aa":"",children:[Object(O.jsx)("p",{className:"tip-modal-instructions","data-v-90d294aa":"",children:"We've successfully generated an invoice for you to tip, please scan the QR Code below using a Lightning wallet to pay it!"}),Object(O.jsx)("div",{className:"tip-modal-qr-code-container","data-v-90d294aa":"",children:Object(O.jsx)(j.a,{value:h,size:210,bgColor:"#4db1ff",fgColor:"#1b2129","data-v-90d294aa":""})}),Object(O.jsxs)("div",{className:"tip-modal-action-btns","data-v-90d294aa":"",children:[Object(O.jsx)("a",{href:"lightning:".concat(h),className:"tip-modal-action-btn","data-v-90d294aa":"",children:"PAY INVOICE"}),Object(O.jsx)(r.a,{text:h,onCopy:Y,"data-v-90d294aa":"",children:Object(O.jsx)("div",{className:"tip-modal-action-btn","data-v-90d294aa":"",children:T?"INVOICE COPIED!":"COPY INVOICE"})})]})]}),"done"===F&&Object(O.jsx)("div",{className:"tip-modal-footer",onClick:B,"data-v-90d294aa":"",children:Object(O.jsx)("div",{className:"tip-modal-submit","data-v-90d294aa":"",children:"TIP SENT!"})}),""===F&&Object(O.jsx)("div",{className:"tip-modal-footer",onClick:z,"data-v-90d294aa":"",children:Object(O.jsx)("div",{className:"tip-modal-submit","data-v-90d294aa":"",children:"SEND TIP"})})]})}},810:function(a,e,t){}}]);
//# sourceMappingURL=39.52399880.chunk.js.map