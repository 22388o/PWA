(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[35],{617:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(){return!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)}},757:function(e,t,a){},879:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a.n(n),c=a(7),r=a(17),d=a(0),i=a(24),o=a(58),u=a(25),b=a(718),l=a(595),p=a(717),v=a(633),j=a(670),m=a(178),O=(a(757),a(617)),f=a(4);t.default=function(){var e=Object(i.h)(),t=Object(i.g)(),a=Object(d.useState)(0),n=Object(r.a)(a,2),x=n[0],h=n[1],k=Object(d.useState)(""),y=Object(r.a)(k,2),g=y[0],w=y[1],C=Object(d.useState)("sats"),S=Object(r.a)(C,2),q=S[0],N=S[1],R=Object(d.useState)(),P=Object(r.a)(R,2),E=P[0],D=P[1],M=Object(d.useState)(""),A=Object(r.a)(M,2),J=A[0],L=A[1],Q=Object(d.useState)(!1),B=Object(r.a)(Q,2),I=(B[0],B[1]),T=Object(d.useState)(!1),_=Object(r.a)(T,2),z=_[0],F=_[1],G=Object(d.useMemo)((function(){return Object(O.a)()}),[]),H=Object(d.useCallback)((function(e){"amount"===e.target.name&&h(e.target.value),"description"===e.target.name&&w(e.target.value),"unit"===e.target.name&&N(e.target.value)}),[]),K=Object(d.useCallback)(function(){var e=Object(c.a)(s.a.mark((function e(t){var a,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("selectContact:",t),I(!0),D(t),!t||"invoice"!==t.type){e.next=12;break}return e.next=6,u.a.post("/api/lnd/decodePayReq",{payReq:t.paymentRequest});case 6:a=e.sent,n=a.data,c=n.decodedRequest,h(c.num_satoshis),N("sats"),w(c.description);case 12:I(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);Object(d.useEffect)((function(){var t=e.state;if(t&&t.data&&t.data.type){var a=t.data;switch(a.type){case"btc":K({type:"btc",address:a.address}),a.amount&&h(a.amount);break;case"ln":K({type:"invoice",paymentRequest:a.request});break;case"keysend":K({type:"keysend",dest:a.address})}e.state={}}}),[e,K,h]);var U=Object(d.useCallback)(Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E){e.next=6;break}return e.next=3,u.a.post("/api/lnd/sendcoins",{addr:E.address,amount:x});case 3:t=e.sent,a=t.data,console.log(a);case 6:case"end":return e.stop()}}),e)}))),[x,E]),V=Object(d.useCallback)(Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E){e.next=6;break}return e.next=3,u.a.post("/api/lnd/sendpayment",{dest:E.dest,payreq:E.paymentRequest,amt:E.paymentRequest?"0":x,feeLimit:.006*x+10,keysend:"keysend"===E.type});case 3:t=e.sent,a=t.data,console.log(a);case 6:case"end":return e.stop()}}),e)}))),[x,E]),W=Object(d.useCallback)(Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E){e.next=5;break}return e.next=3,u.a.post("/api/gun/sendpayment",{recipientPub:E.pk,amount:parseInt(x),feeLimit:.006*x+10,memo:g});case 3:t=e.sent,t.data;case 5:case"end":return e.stop()}}),e)}))),[x,E,g]),X=Object(d.useCallback)(Object(c.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,L(""),F(!0),"btc"!==(null===E||void 0===E?void 0:E.type)){e.next=6;break}return e.next=6,U();case 6:if(!["invoice","keysend"].includes(null===E||void 0===E?void 0:E.type)){e.next=9;break}return e.next=9,V();case 9:if("contact"!==(null===E||void 0===E?void 0:E.type)){e.next=12;break}return e.next=12,W();case 12:t.push("/overview"),F(!1),e.next=22;break;case 16:throw e.prev=16,e.t0=e.catch(0),console.error(e.t0),L(null!==(a=null===(n=e.t0.response)||void 0===n?void 0:n.data.errorMessage)&&void 0!==a?a:e.t0.message),F(!1),e.t0;case 22:case"end":return e.stop()}}),e,null,[[0,16]])}))),[E,t,U,W,V]);return Object(f.jsxs)(v.a,{containerClassName:"send-page",title:"SEND","data-v-1ba8d053":"",children:[Object(f.jsxs)("div",{className:"send-form-container","data-v-1ba8d053":"",children:[z?Object(f.jsx)(m.a,{fullScreen:!0,overlay:!0,text:"Processing Payment...","data-v-1ba8d053":""}):null,J?Object(f.jsx)("p",{className:"form-error","data-v-1ba8d053":"",children:J}):null,E?null:Object(f.jsxs)(o.b,{className:"scan-qr-btn",to:"/QRScanner","data-v-1ba8d053":"",children:[Object(f.jsx)("i",{className:"scan-qr-icon icon icon-solid-scan","data-v-1ba8d053":""}),Object(f.jsx)("p",{className:"scan-qr-text","data-v-1ba8d053":"",children:"Scan QR"})]}),E?Object(f.jsx)(j.a,{selected:!0,contact:E,selectContact:K,"data-v-1ba8d053":""}):Object(f.jsx)(p.a,{selectContact:K,features:["btc","keysend","contact","invoice"],"data-v-1ba8d053":""}),Object(f.jsxs)("div",{className:"inputs-group","data-v-1ba8d053":"",children:[Object(f.jsx)(l.a,{name:"amount",label:"Enter Amount",onChange:H,value:x,disabled:"invoice"===(null===E||void 0===E?void 0:E.type),inputMode:"decimal","data-v-1ba8d053":""}),Object(f.jsxs)("select",{name:"unit",className:"unit-dropdown",onChange:H,value:q,disabled:"invoice"===(null===E||void 0===E?void 0:E.type),"data-v-1ba8d053":"",children:[Object(f.jsx)("option",{value:"sats","data-v-1ba8d053":"",children:"sats"}),Object(f.jsx)("option",{value:"btc","data-v-1ba8d053":"",children:"BTC"})]})]}),Object(f.jsx)(l.a,{name:"description",label:"Description",element:"textarea",onChange:H,type:"textarea",value:g,disabled:"invoice"===(null===E||void 0===E?void 0:E.type),"data-v-1ba8d053":""})]}),G&&Object(f.jsx)("div",{className:"w-100 flex-center m-b-3","data-v-1ba8d053":"",children:Object(f.jsx)("button",{disabled:!E,onClick:X,className:"shock-form-button-confirm","data-v-1ba8d053":"",children:"SEND"})}),!G&&Object(f.jsx)(b.a,{disabled:!E,onSuccess:X,"data-v-1ba8d053":""})]})}}}]);
//# sourceMappingURL=35.30c88bce.chunk.js.map