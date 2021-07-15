(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[31],{748:function(e,a,t){},749:function(e,a,t){},750:function(e,a,t){},883:function(e,a,t){"use strict";t.r(a);var c=t(17),n=t(2),d=t(83),s=t.n(d),r=t(624),i=(t(748),t(582)),l=(t(749),t(4)),o=function(e){var a=e.onInputChange,t=e.amount,c=e.description;return Object(l.jsxs)("div",{className:"container","data-v-d3e0554e":"",children:[Object(l.jsxs)("div",{className:"inputs-group","data-v-d3e0554e":"",children:[Object(l.jsx)(i.a,{name:"amount",label:"Enter Amount",onChange:a,value:t,inputMode:"decimal","data-v-d3e0554e":""}),Object(l.jsxs)("select",{name:"unit",className:"unit-dropdown",onChange:a,"data-v-d3e0554e":"",children:[Object(l.jsx)("option",{value:"sats","data-v-d3e0554e":"",children:"Sats"}),Object(l.jsx)("option",{value:"msats","data-v-d3e0554e":"",children:"mSats"}),Object(l.jsx)("option",{value:"btc","data-v-d3e0554e":"",children:"BTC"})]})]}),Object(l.jsx)(i.a,{name:"description",label:"Description",element:"textarea",onChange:a,value:c,"data-v-d3e0554e":""})]})},u=t(3),j=t.n(u),v=t(5),b=t(26),p=t(629),O=t.n(p),h=t(47),m=t(176),x=t(708),f=t(18),g=(t(750),t(635)),k=t(707),C=t(30),N=t(579),w=function(e){var a=e.amount,t=void 0===a?0:a,d=e.description,r=void 0===d?"N/A":d,i=e.unit,o=void 0===i?"":i,u=e.prevStep,p=Object(h.b)(),w=Object(b.g)(),y=Object(n.useState)(""),S=Object(c.a)(y,2),E=S[0],A=S[1],T=Object(n.useState)(""),_=Object(c.a)(T,2),I=_[0],D=_[1],L=Object(n.useState)(!1),M=Object(c.a)(L,2),q=M[0],R=M[1],F=Object(n.useState)(!1),J=Object(c.a)(F,2),K=J[0],U=J[1],W=Object(n.useState)(),$=Object(c.a)(W,2),z=$[0],B=$[1],H=Object(n.useState)(""),Q=Object(c.a)(H,2),V=Q[0],G=Q[1],P=Object(n.useState)(!1),X=Object(c.a)(P,2),Y=X[0],Z=X[1],ee=Object(n.useCallback)(Object(v.a)(j.a.mark((function e(){var a,c,n,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,R(!0),e.next=4,f.a.post("/api/lnd/addinvoice",{value:t,memo:r,expiry:100});case 4:a=e.sent,c=a.data,A(c.payment_request),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),G(null!==(n=null===e.t0||void 0===e.t0||null===(d=e.t0.response)||void 0===d?void 0:d.data.errorMessage)&&void 0!==n?n:"An unknown error has occurred");case 12:return e.prev=12,R(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),[t,r]),ae=Object(n.useCallback)(Object(v.a)(j.a.mark((function e(){var a,t,c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,R(!0),e.next=4,f.a.post("/api/lnd/newaddress",{type:"p2wkh"});case 4:a=e.sent,t=a.data,D(t.address),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),G(null!==(c=null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n?void 0:n.data.errorMessage)&&void 0!==c?c:"An unknown error has occurred");case 12:return e.prev=12,R(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),[]),te=Object(n.useCallback)(function(){var e=Object(v.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B(a);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),[]);Object(n.useEffect)((function(){Y?ee():ae()}),[ee,ae,Y]);var ce=Object(n.useCallback)((function(){Z(!Y)}),[Y]),ne=Object(n.useRef)(),de=Object(n.useCallback)((function(){try{var e=Y?E:I;if(navigator.clipboard)navigator.clipboard.writeText(e);else{var a=ne.current;if(!a)throw new ReferenceError("When trying to access the ref for the placeholder input to copy, the ref was null.");a.style.display="block",a.select(),document.execCommand("copy"),a.blur(),a.style.display="none"}}catch(t){console.error(t),G(t.message)}}),[Y,E,I]),se=Object(n.useCallback)(Object(v.a)(j.a.mark((function e(){var a,t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!z){e.next=13;break}return e.prev=1,U(!0),e.next=5,Object(C.h)({publicKey:z.pk,message:"$$__SHOCKWALLET__INVOICE__"+E})(p);case 5:U(!1),w.push("/overview"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),G(null!==(a=null!==(t=null===e.t0||void 0===e.t0||null===(c=e.t0.response)||void 0===c?void 0:c.data.errorMessage)&&void 0!==t?t:null===e.t0||void 0===e.t0?void 0:e.t0.message)&&void 0!==a?a:"An unknown error has occurred"),U(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),[z,E,p,w]);return Object(l.jsxs)("div",{className:"container","data-v-d0d067d6":"",children:[K?Object(l.jsx)(m.a,{overlay:!0,text:"Sending Invoice...","data-v-d0d067d6":""}):null,Y?z?Object(l.jsx)(g.a,{selected:!0,contact:z,selectContact:te,"data-v-d0d067d6":""}):Object(l.jsx)(k.a,{selectContact:te,features:["contact"],"data-v-d0d067d6":""}):null,Object(l.jsxs)("div",{className:"qr-code-container","data-v-d0d067d6":"",children:[Object(l.jsx)("div",{className:"qr-code","data-v-d0d067d6":"",children:q?Object(l.jsx)(m.a,{overlay:!0,small:!0,text:"","data-v-d0d067d6":""}):Object(l.jsx)(O.a,{value:Y?E:I,size:180,fgColor:Y?"#f5a623":"#4285b9",bgColor:"#001220","data-v-d0d067d6":""})}),Object(l.jsxs)("div",{className:s()({mode:!0,"lightning-active":Y}),onClick:ce,"data-v-d0d067d6":"",children:[Object(l.jsx)("p",{className:"switch-name on-chain-switch","data-v-d0d067d6":"",children:"On-Chain"}),Object(l.jsx)("div",{className:"switch","data-v-d0d067d6":"",children:Object(l.jsx)("div",{className:"switch-handle","data-v-d0d067d6":""})}),Object(l.jsx)("p",{className:"switch-name lightning-switch","data-v-d0d067d6":"",children:"Lightning"})]})]}),Object(l.jsxs)("div",{className:"copy-clipboard-btn",onClick:de,"data-v-d0d067d6":"",children:[Object(l.jsx)("i",{className:"fas fa-copy","data-v-d0d067d6":""}),Object(l.jsx)("p",{className:"copy-clipboard-btn-text","data-v-d0d067d6":"",children:"Copy to Clipboard"})]}),!navigator.clipboard&&Object(l.jsx)("input",{className:N.s,readOnly:!0,ref:ne,type:"text",value:Y?E:I,"data-v-d0d067d6":""}),V?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("span",{"data-v-d0d067d6":"",children:V}),Object(l.jsx)("br",{"data-v-d0d067d6":""}),Object(l.jsx)("span",{className:"inline-link",onClick:G.bind(null,""),"data-v-d0d067d6":"",children:"Dismiss"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"details","data-v-d0d067d6":"",children:[Object(l.jsx)("p",{className:"details-change",onClick:u,"data-v-d0d067d6":"",children:"Change"}),Object(l.jsxs)("div",{className:"detail","data-v-d0d067d6":"",children:[Object(l.jsx)("p",{className:"detail-title","data-v-d0d067d6":"",children:"Amount"}),Object(l.jsxs)("p",{className:"detail-value","data-v-d0d067d6":"",children:[t," ",o.toUpperCase()]})]}),Object(l.jsxs)("div",{className:"detail","data-v-d0d067d6":"",children:[Object(l.jsx)("p",{className:"detail-title","data-v-d0d067d6":"",children:"Description"}),Object(l.jsx)("p",{className:"detail-value","data-v-d0d067d6":"",children:r})]})]}),Y&&z?Object(l.jsx)(x.a,{wrapperStyle:{padding:0,marginTop:23},slideText:"SLIDE TO SEND",onSuccess:se,"data-v-d0d067d6":""}):null]})]})},y=Array.from({length:2});a.default=function(){var e=Object(n.useState)(0),a=Object(c.a)(e,2),t=a[0],d=a[1],i=Object(n.useState)(""),u=Object(c.a)(i,2),j=u[0],v=u[1],b=Object(n.useState)(0),p=Object(c.a)(b,2),O=p[0],h=p[1],m=Object(n.useState)("sats"),x=Object(c.a)(m,2),f=x[0],g=x[1],k=Object(n.useCallback)((function(e){"amount"===e.target.name&&d(e.target.value),"description"===e.target.name&&v(e.target.value),"unit"===e.target.name&&g(e.target.value)}),[]),C=Object(n.useCallback)((function(){O<1&&h(O+1)}),[O]),N=Object(n.useCallback)((function(){O>0&&h(O-1)}),[O]),S=Object(n.useCallback)((function(){return 0===O?Object(l.jsx)(o,{amount:t,description:j,onInputChange:k,"data-v-36cee8ec":""}):1===O?Object(l.jsx)(w,{amount:t,description:j,unit:f,prevStep:N,"data-v-36cee8ec":""}):void 0}),[O,t,j,k,N,f]),E=1===O;return Object(l.jsxs)(r.a,{title:"REQUEST","data-v-36cee8ec":"",children:[S(),Object(l.jsxs)("div",{className:"footer","data-v-36cee8ec":"",children:[E?null:Object(l.jsxs)("div",{className:"controls","data-v-36cee8ec":"",children:[Object(l.jsx)("div",{className:"control",onClick:C,"data-v-36cee8ec":"",children:"Skip"}),Object(l.jsx)("div",{className:"control next",onClick:C,"data-v-36cee8ec":"",children:"Next"})]}),Object(l.jsx)("div",{className:"indicators","data-v-36cee8ec":"",children:y.map((function(e,a){return Object(l.jsx)("div",{className:s()({indicator:!0,"indicator-active":a===O}),"data-v-36cee8ec":""},a)}))})]})]})}}}]);
//# sourceMappingURL=31.43ad3a06.chunk.js.map