(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[31],{639:function(e,t,a){},743:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(6),r=a(21),i=a(3),o=a(26),u=a(18),l=a(612),d=a(493),b=a(611),p=a(523),j=a(534),v=a(156),m=(a(639),a(8));t.default=function(){var e=Object(o.h)(),t=Object(o.g)(),a=Object(i.useState)(0),n=Object(r.a)(a,2),O=n[0],x=n[1],f=Object(i.useState)(""),k=Object(r.a)(f,2),y=k[0],h=k[1],g=Object(i.useState)("sats"),w=Object(r.a)(g,2),C=w[0],q=w[1],S=Object(i.useState)(),N=Object(r.a)(S,2),R=N[0],P=N[1],E=Object(i.useState)(""),D=Object(r.a)(E,2),J=D[0],L=D[1],M=Object(i.useState)(!1),A=Object(r.a)(M,2),B=(A[0],A[1]),I=Object(i.useState)(!1),Q=Object(r.a)(I,2),T=Q[0],_=Q[1],z=Object(i.useCallback)((function(e){"amount"===e.target.name&&x(e.target.value),"description"===e.target.name&&h(e.target.value),"unit"===e.target.name&&q(e.target.value)}),[]),F=Object(i.useCallback)(function(){var e=Object(c.a)(s.a.mark((function e(t){var a,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("selectContact:",t),B(!0),P(t),!t||"invoice"!==t.type){e.next=12;break}return e.next=6,u.a.post("/api/lnd/decodePayReq",{payReq:t.paymentRequest});case 6:a=e.sent,n=a.data,c=n.decodedRequest,x(c.num_satoshis),q("sats"),h(c.description);case 12:B(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);Object(i.useEffect)((function(){var t=e.state;if(t&&t.data&&t.data.type){var a=t.data;switch(a.type){case"btc":F({type:"btc",address:a.address}),a.amount&&x(a.amount);break;case"ln":F({type:"invoice",paymentRequest:a.request});break;case"keysend":F({type:"keysend",dest:a.address})}e.state={}}}),[e,F,x]);var G=Object(i.useCallback)(Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!R){e.next=6;break}return e.next=3,u.a.post("/api/lnd/sendcoins",{addr:R.address,amount:O});case 3:t=e.sent,a=t.data,console.log(a);case 6:case"end":return e.stop()}}),e)}))),[O,R]),H=Object(i.useCallback)(Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!R){e.next=6;break}return e.next=3,u.a.post("/api/lnd/sendpayment",{dest:R.dest,payreq:R.paymentRequest,amt:R.paymentRequest?"0":O,feeLimit:.006*O+10,keysend:"keysend"===R.type});case 3:t=e.sent,a=t.data,console.log(a);case 6:case"end":return e.stop()}}),e)}))),[O,R]),K=Object(i.useCallback)(Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!R){e.next=5;break}return e.next=3,u.a.post("/api/gun/sendpayment",{recipientPub:R.pk,amount:parseInt(O),feeLimit:.006*O+10,memo:y});case 3:t=e.sent,t.data;case 5:case"end":return e.stop()}}),e)}))),[O,R,y]),U=Object(i.useCallback)(Object(c.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,L(""),_(!0),"btc"!==(null===R||void 0===R?void 0:R.type)){e.next=6;break}return e.next=6,G();case 6:if(!["invoice","keysend"].includes(null===R||void 0===R?void 0:R.type)){e.next=9;break}return e.next=9,H();case 9:if("contact"!==(null===R||void 0===R?void 0:R.type)){e.next=12;break}return e.next=12,K();case 12:t.push("/overview"),_(!1),e.next=22;break;case 16:throw e.prev=16,e.t0=e.catch(0),console.error(e.t0),L(null!==(a=null===(n=e.t0.response)||void 0===n?void 0:n.data.errorMessage)&&void 0!==a?a:e.t0.message),_(!1),e.t0;case 22:case"end":return e.stop()}}),e,null,[[0,16]])}))),[R,t,G,K,H]);return Object(m.jsxs)(p.a,{containerClassName:"send-page",title:"SEND",children:[Object(m.jsxs)("div",{className:"send-form-container",children:[T?Object(m.jsx)(v.a,{fullScreen:!0,overlay:!0,text:"Processing Payment..."}):null,J?Object(m.jsx)("p",{className:"form-error",children:J}):null,R?null:Object(m.jsxs)("div",{className:"scan-qr-btn",children:[Object(m.jsx)("i",{className:"scan-qr-icon icon icon-solid-scan"}),Object(m.jsx)("p",{className:"scan-qr-text",children:"Scan QR"})]}),R?Object(m.jsx)(j.a,{selected:!0,contact:R,selectContact:F}):Object(m.jsx)(b.a,{selectContact:F,features:["btc","keysend","contact","invoice"]}),Object(m.jsxs)("div",{className:"inputs-group",children:[Object(m.jsx)(d.a,{name:"amount",label:"Enter Amount",onChange:z,value:O,disabled:"invoice"===(null===R||void 0===R?void 0:R.type),inputMode:"decimal"}),Object(m.jsxs)("select",{name:"unit",className:"unit-dropdown",onChange:z,value:C,disabled:"invoice"===(null===R||void 0===R?void 0:R.type),children:[Object(m.jsx)("option",{value:"sats",children:"sats"}),Object(m.jsx)("option",{value:"btc",children:"BTC"})]})]}),Object(m.jsx)(d.a,{name:"description",label:"Description",element:"textarea",onChange:z,type:"textarea",value:y,disabled:"invoice"===(null===R||void 0===R?void 0:R.type)})]}),Object(m.jsx)(l.a,{disabled:!R,onSuccess:U})]})}}}]);
//# sourceMappingURL=31.ce7536d2.chunk.js.map