(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[31],{757:function(e,a,c){},758:function(e,a,c){},759:function(e,a,c){},894:function(e,a,c){"use strict";c.r(a);var t=c(19),n=c(1),s=c(84),r=c.n(s),i=c(629),l=(c(757),c(593)),d=(c(758),c(4)),o=function(e){var a=e.onInputChange,c=e.amount,t=e.description;return Object(d.jsxs)("div",{className:"container","data-v-201807a9":"",children:[Object(d.jsxs)("div",{className:"inputs-group","data-v-201807a9":"",children:[Object(d.jsx)(l.a,{name:"amount",label:"Enter Amount",onChange:a,value:c,inputMode:"decimal","data-v-201807a9":""}),Object(d.jsxs)("select",{name:"unit",className:"unit-dropdown",onChange:a,"data-v-201807a9":"",children:[Object(d.jsx)("option",{value:"sats","data-v-201807a9":"",children:"Sats"}),Object(d.jsx)("option",{value:"msats","data-v-201807a9":"",children:"mSats"}),Object(d.jsx)("option",{value:"btc","data-v-201807a9":"",children:"BTC"})]})]}),Object(d.jsx)(l.a,{name:"description",label:"Description",element:"textarea",onChange:a,value:t,"data-v-201807a9":""})]})},b=c(3),j=c.n(b),u=c(6),v=c(25),p=c(637),O=c.n(p),h=c(37),m=c(177),x=c(717),f=c(23),g=(c(759),c(643)),k=c(716),N=(c(47),c(589)),C=function(e){var a=e.amount,c=void 0===a?0:a,s=e.description,i=void 0===s?"N/A":s,l=e.unit,o=void 0===l?"":l,b=e.prevStep,p=Object(h.b)(),C=Object(v.g)(),w=Object(n.useState)(""),y=Object(t.a)(w,2),S=y[0],A=y[1],E=Object(n.useState)(""),T=Object(t.a)(E,2),D=T[0],I=T[1],M=Object(n.useState)(!1),q=Object(t.a)(M,2),R=q[0],F=q[1],J=Object(n.useState)(!1),L=Object(t.a)(J,2),U=L[0],z=L[1],B=Object(n.useState)(),Q=Object(t.a)(B,2),W=Q[0],_=Q[1],G=Object(n.useState)(""),H=Object(t.a)(G,2),K=H[0],P=H[1],V=Object(n.useState)(!1),X=Object(t.a)(V,2),Y=X[0],Z=X[1],$=Object(n.useCallback)(Object(u.a)(j.a.mark((function e(){var a,t,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,F(!0),e.next=4,f.a.post("/api/lnd/addinvoice",{value:c,memo:i,expiry:100});case 4:a=e.sent,t=a.data,A(t.payment_request),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),P(null!==(n=null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s?void 0:s.data.errorMessage)&&void 0!==n?n:"An unknown error has occurred");case 12:return e.prev=12,F(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),[c,i]),ee=Object(n.useCallback)(Object(u.a)(j.a.mark((function e(){var a,c,t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,F(!0),e.next=4,f.a.post("/api/lnd/newaddress",{type:"p2wkh"});case 4:a=e.sent,c=a.data,I(c.address),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),P(null!==(t=null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n?void 0:n.data.errorMessage)&&void 0!==t?t:"An unknown error has occurred");case 12:return e.prev=12,F(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),[]),ae=Object(n.useCallback)(function(){var e=Object(u.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(a);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),[]);Object(n.useEffect)((function(){Y?$():ee()}),[$,ee,Y]);var ce=Object(n.useCallback)((function(){Z(!Y)}),[Y]),te=Object(n.useRef)(),ne=Object(n.useCallback)((function(){try{var e=Y?S:D;if(navigator.clipboard)navigator.clipboard.writeText(e);else{var a=te.current;if(!a)throw new ReferenceError("When trying to access the ref for the placeholder input to copy, the ref was null.");a.style.display="block",a.select(),document.execCommand("copy"),a.blur(),a.style.display="none"}}catch(c){console.error(c),P(c.message)}}),[Y,S,D]),se=Object(n.useCallback)(Object(u.a)(j.a.mark((function e(){var a,c,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(W)try{z(!0),z(!1),C.push("/overview")}catch(n){P(null!==(a=null!==(c=null===n||void 0===n||null===(t=n.response)||void 0===t?void 0:t.data.errorMessage)&&void 0!==c?c:null===n||void 0===n?void 0:n.message)&&void 0!==a?a:"An unknown error has occurred"),z(!1)}case 1:case"end":return e.stop()}}),e)}))),[W,S,p,C]);return Object(d.jsxs)("div",{className:"container","data-v-c2cb79c4":"",children:[U?Object(d.jsx)(m.a,{overlay:!0,text:"Sending Invoice...","data-v-c2cb79c4":""}):null,Y?W?Object(d.jsx)(g.a,{selected:!0,contact:W,selectContact:ae,"data-v-c2cb79c4":""}):Object(d.jsx)(k.a,{selectContact:ae,features:["contact"],"data-v-c2cb79c4":""}):null,Object(d.jsxs)("div",{className:"qr-code-container","data-v-c2cb79c4":"",children:[Object(d.jsx)("div",{className:"qr-code","data-v-c2cb79c4":"",children:R?Object(d.jsx)(m.a,{overlay:!0,small:!0,text:"","data-v-c2cb79c4":""}):Object(d.jsx)(O.a,{value:Y?S:D,size:180,fgColor:Y?"#f5a623":"#4285b9",bgColor:"#001220","data-v-c2cb79c4":""})}),Object(d.jsxs)("div",{className:r()({mode:!0,"lightning-active":Y}),onClick:ce,"data-v-c2cb79c4":"",children:[Object(d.jsx)("p",{className:"switch-name on-chain-switch","data-v-c2cb79c4":"",children:"On-Chain"}),Object(d.jsx)("div",{className:"switch","data-v-c2cb79c4":"",children:Object(d.jsx)("div",{className:"switch-handle","data-v-c2cb79c4":""})}),Object(d.jsx)("p",{className:"switch-name lightning-switch","data-v-c2cb79c4":"",children:"Lightning"})]})]}),Object(d.jsxs)("div",{className:"copy-clipboard-btn",onClick:ne,"data-v-c2cb79c4":"",children:[Object(d.jsx)("i",{className:"fas fa-copy","data-v-c2cb79c4":""}),Object(d.jsx)("p",{className:"copy-clipboard-btn-text","data-v-c2cb79c4":"",children:"Copy to Clipboard"})]}),!navigator.clipboard&&Object(d.jsx)("input",{className:N.s,readOnly:!0,ref:te,type:"text",value:Y?S:D,"data-v-c2cb79c4":""}),K?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{"data-v-c2cb79c4":"",children:K}),Object(d.jsx)("br",{"data-v-c2cb79c4":""}),Object(d.jsx)("span",{className:"inline-link",onClick:P.bind(null,""),"data-v-c2cb79c4":"",children:"Dismiss"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"details","data-v-c2cb79c4":"",children:[Object(d.jsx)("p",{className:"details-change",onClick:b,"data-v-c2cb79c4":"",children:"Change"}),Object(d.jsxs)("div",{className:"detail","data-v-c2cb79c4":"",children:[Object(d.jsx)("p",{className:"detail-title","data-v-c2cb79c4":"",children:"Amount"}),Object(d.jsxs)("p",{className:"detail-value","data-v-c2cb79c4":"",children:[c," ",o.toUpperCase()]})]}),Object(d.jsxs)("div",{className:"detail","data-v-c2cb79c4":"",children:[Object(d.jsx)("p",{className:"detail-title","data-v-c2cb79c4":"",children:"Description"}),Object(d.jsx)("p",{className:"detail-value","data-v-c2cb79c4":"",children:i})]})]}),Y&&W?Object(d.jsx)(x.a,{wrapperStyle:{padding:0,marginTop:23},slideText:"SLIDE TO SEND",onSuccess:se,"data-v-c2cb79c4":""}):null]})]})},w=Array.from({length:2});a.default=function(){var e=Object(n.useState)(0),a=Object(t.a)(e,2),c=a[0],s=a[1],l=Object(n.useState)(""),b=Object(t.a)(l,2),j=b[0],u=b[1],v=Object(n.useState)(0),p=Object(t.a)(v,2),O=p[0],h=p[1],m=Object(n.useState)("sats"),x=Object(t.a)(m,2),f=x[0],g=x[1],k=Object(n.useCallback)((function(e){"amount"===e.target.name&&s(e.target.value),"description"===e.target.name&&u(e.target.value),"unit"===e.target.name&&g(e.target.value)}),[]),N=Object(n.useCallback)((function(){O<1&&h(O+1)}),[O]),y=Object(n.useCallback)((function(){O>0&&h(O-1)}),[O]),S=Object(n.useCallback)((function(){return 0===O?Object(d.jsx)(o,{amount:c,description:j,onInputChange:k,"data-v-36cee8ec":""}):1===O?Object(d.jsx)(C,{amount:c,description:j,unit:f,prevStep:y,"data-v-36cee8ec":""}):void 0}),[O,c,j,k,y,f]),A=1===O;return Object(d.jsxs)(i.a,{title:"REQUEST","data-v-36cee8ec":"",children:[S(),Object(d.jsxs)("div",{className:"footer","data-v-36cee8ec":"",children:[A?null:Object(d.jsxs)("div",{className:"controls","data-v-36cee8ec":"",children:[Object(d.jsx)("div",{className:"control",onClick:N,"data-v-36cee8ec":"",children:"Skip"}),Object(d.jsx)("div",{className:"control next",onClick:N,"data-v-36cee8ec":"",children:"Next"})]}),Object(d.jsx)("div",{className:"indicators","data-v-36cee8ec":"",children:w.map((function(e,a){return Object(d.jsx)("div",{className:r()({indicator:!0,"indicator-active":a===O}),"data-v-36cee8ec":""},a)}))})]})]})}}}]);
//# sourceMappingURL=31.4b418564.chunk.js.map