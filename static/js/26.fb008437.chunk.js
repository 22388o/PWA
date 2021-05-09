(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[26],{595:function(e,a,t){},596:function(e,a,t){},597:function(e,a,t){},723:function(e,a,t){"use strict";t.r(a);var c=t(12),n=t(3),s=t(74),r=t.n(s),i=t(467),l=(t(595),t(448)),d=(t(596),t(4)),o=function(e){var a=e.onInputChange,t=e.amount,c=e.description;return Object(d.jsxs)("div",{className:"container","data-v-51d1b94f":"",children:[Object(d.jsxs)("div",{className:"inputs-group","data-v-51d1b94f":"",children:[Object(d.jsx)(l.a,{name:"amount",label:"Enter Amount",onChange:a,value:t,inputMode:"decimal","data-v-51d1b94f":""}),Object(d.jsxs)("select",{name:"unit",className:"unit-dropdown",onChange:a,"data-v-51d1b94f":"",children:[Object(d.jsx)("option",{value:"sats","data-v-51d1b94f":"",children:"Sats"}),Object(d.jsx)("option",{value:"msats","data-v-51d1b94f":"",children:"mSats"}),Object(d.jsx)("option",{value:"btc","data-v-51d1b94f":"",children:"BTC"})]})]}),Object(d.jsx)(l.a,{name:"description",label:"Description",element:"textarea",onChange:a,value:c,"data-v-51d1b94f":""})]})},b=t(2),u=t.n(b),j=t(6),v=t(22),p=t(473),O=t.n(p),h=t(41),m=t(146),x=t(564),f=t(16),g=(t(597),t(479)),k=t(563),C=t(23),N=t(439),w=function(e){var a=e.amount,t=void 0===a?0:a,s=e.description,i=void 0===s?"N/A":s,l=e.unit,o=void 0===l?"":l,b=e.prevStep,p=Object(h.b)(),w=Object(v.g)(),y=Object(n.useState)(""),S=Object(c.a)(y,2),E=S[0],A=S[1],T=Object(n.useState)(""),_=Object(c.a)(T,2),I=_[0],D=_[1],L=Object(n.useState)(!1),M=Object(c.a)(L,2),q=M[0],R=M[1],F=Object(n.useState)(!1),J=Object(c.a)(F,2),K=J[0],U=J[1],W=Object(n.useState)(),$=Object(c.a)(W,2),z=$[0],B=$[1],H=Object(n.useState)(""),Q=Object(c.a)(H,2),V=Q[0],G=Q[1],P=Object(n.useState)(!1),X=Object(c.a)(P,2),Y=X[0],Z=X[1],ee=Object(n.useCallback)(Object(j.a)(u.a.mark((function e(){var a,c,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,R(!0),e.next=4,f.a.post("/api/lnd/addinvoice",{value:t,memo:i,expiry:100});case 4:a=e.sent,c=a.data,A(c.payment_request),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),G(null!==(n=null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s?void 0:s.data.errorMessage)&&void 0!==n?n:"An unknown error has occurred");case 12:return e.prev=12,R(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),[t,i]),ae=Object(n.useCallback)(Object(j.a)(u.a.mark((function e(){var a,t,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,R(!0),e.next=4,f.a.post("/api/lnd/newaddress",{type:"p2wkh"});case 4:a=e.sent,t=a.data,D(t.address),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),G(null!==(c=null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n?void 0:n.data.errorMessage)&&void 0!==c?c:"An unknown error has occurred");case 12:return e.prev=12,R(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),[]),te=Object(n.useCallback)(function(){var e=Object(j.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B(a);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),[]);Object(n.useEffect)((function(){Y?ee():ae()}),[ee,ae,Y]);var ce=Object(n.useCallback)((function(){Z(!Y)}),[Y]),ne=Object(n.useRef)(),se=Object(n.useCallback)((function(){try{var e=Y?E:I;if(navigator.clipboard)navigator.clipboard.writeText(e);else{var a=ne.current;if(!a)throw new ReferenceError("When trying to access the ref for the placeholder input to copy, the ref was null.");a.style.display="block",a.select(),document.execCommand("copy"),a.blur(),a.style.display="none"}}catch(t){console.error(t),G(t.message)}}),[Y,E,I]),re=Object(n.useCallback)(Object(j.a)(u.a.mark((function e(){var a,t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!z){e.next=13;break}return e.prev=1,U(!0),e.next=5,Object(C.h)({publicKey:z.pk,message:"$$__SHOCKWALLET__INVOICE__"+E})(p);case 5:U(!1),w.push("/overview"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),G(null!==(a=null!==(t=null===e.t0||void 0===e.t0||null===(c=e.t0.response)||void 0===c?void 0:c.data.errorMessage)&&void 0!==t?t:null===e.t0||void 0===e.t0?void 0:e.t0.message)&&void 0!==a?a:"An unknown error has occurred"),U(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),[z,E,p,w]);return Object(d.jsxs)("div",{className:"container","data-v-97467893":"",children:[K?Object(d.jsx)(m.a,{overlay:!0,text:"Sending Invoice...","data-v-97467893":""}):null,Y?z?Object(d.jsx)(g.a,{selected:!0,contact:z,selectContact:te,"data-v-97467893":""}):Object(d.jsx)(k.a,{selectContact:te,features:["contact"],"data-v-97467893":""}):null,Object(d.jsxs)("div",{className:"qr-code-container","data-v-97467893":"",children:[Object(d.jsx)("div",{className:"qr-code","data-v-97467893":"",children:q?Object(d.jsx)(m.a,{overlay:!0,small:!0,text:"","data-v-97467893":""}):Object(d.jsx)(O.a,{value:Y?E:I,size:180,fgColor:Y?"#f5a623":"#4285b9",bgColor:"#001220","data-v-97467893":""})}),Object(d.jsxs)("div",{className:r()({mode:!0,"lightning-active":Y}),onClick:ce,"data-v-97467893":"",children:[Object(d.jsx)("p",{className:"switch-name on-chain-switch","data-v-97467893":"",children:"On-Chain"}),Object(d.jsx)("div",{className:"switch","data-v-97467893":"",children:Object(d.jsx)("div",{className:"switch-handle","data-v-97467893":""})}),Object(d.jsx)("p",{className:"switch-name lightning-switch","data-v-97467893":"",children:"Lightning"})]})]}),Object(d.jsxs)("div",{className:"copy-clipboard-btn",onClick:se,"data-v-97467893":"",children:[Object(d.jsx)("i",{className:"fas fa-copy","data-v-97467893":""}),Object(d.jsx)("p",{className:"copy-clipboard-btn-text","data-v-97467893":"",children:"Copy to Clipboard"})]}),!navigator.clipboard&&Object(d.jsx)("input",{className:N.r,readOnly:!0,ref:ne,type:"text",value:Y?E:I,"data-v-97467893":""}),V?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{"data-v-97467893":"",children:V}),Object(d.jsx)("br",{"data-v-97467893":""}),Object(d.jsx)("span",{className:"inline-link",onClick:G.bind(null,""),"data-v-97467893":"",children:"Dismiss"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"details","data-v-97467893":"",children:[Object(d.jsx)("p",{className:"details-change",onClick:b,"data-v-97467893":"",children:"Change"}),Object(d.jsxs)("div",{className:"detail","data-v-97467893":"",children:[Object(d.jsx)("p",{className:"detail-title","data-v-97467893":"",children:"Amount"}),Object(d.jsxs)("p",{className:"detail-value","data-v-97467893":"",children:[t," ",o.toUpperCase()]})]}),Object(d.jsxs)("div",{className:"detail","data-v-97467893":"",children:[Object(d.jsx)("p",{className:"detail-title","data-v-97467893":"",children:"Description"}),Object(d.jsx)("p",{className:"detail-value","data-v-97467893":"",children:i})]})]}),Y&&z?Object(d.jsx)(x.a,{wrapperStyle:{padding:0,marginTop:23},slideText:"SLIDE TO SEND",onSuccess:re,"data-v-97467893":""}):null]})]})},y=Array.from({length:2});a.default=function(){var e=Object(n.useState)(0),a=Object(c.a)(e,2),t=a[0],s=a[1],l=Object(n.useState)(""),b=Object(c.a)(l,2),u=b[0],j=b[1],v=Object(n.useState)(0),p=Object(c.a)(v,2),O=p[0],h=p[1],m=Object(n.useState)("sats"),x=Object(c.a)(m,2),f=x[0],g=x[1],k=Object(n.useCallback)((function(e){"amount"===e.target.name&&s(e.target.value),"description"===e.target.name&&j(e.target.value),"unit"===e.target.name&&g(e.target.value)}),[]),C=Object(n.useCallback)((function(){O<1&&h(O+1)}),[O]),N=Object(n.useCallback)((function(){O>0&&h(O-1)}),[O]),S=Object(n.useCallback)((function(){return 0===O?Object(d.jsx)(o,{amount:t,description:u,onInputChange:k,"data-v-4db668aa":""}):1===O?Object(d.jsx)(w,{amount:t,description:u,unit:f,prevStep:N,"data-v-4db668aa":""}):void 0}),[O,t,u,k,N,f]),E=1===O;return Object(d.jsxs)(i.a,{title:"REQUEST","data-v-4db668aa":"",children:[S(),Object(d.jsxs)("div",{className:"footer","data-v-4db668aa":"",children:[E?null:Object(d.jsxs)("div",{className:"controls","data-v-4db668aa":"",children:[Object(d.jsx)("div",{className:"control",onClick:C,"data-v-4db668aa":"",children:"Skip"}),Object(d.jsx)("div",{className:"control next",onClick:C,"data-v-4db668aa":"",children:"Next"})]}),Object(d.jsx)("div",{className:"indicators","data-v-4db668aa":"",children:y.map((function(e,a){return Object(d.jsx)("div",{className:r()({indicator:!0,"indicator-active":a===O}),"data-v-4db668aa":""},a)}))})]})]})}}}]);
//# sourceMappingURL=26.fb008437.chunk.js.map