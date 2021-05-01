(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[27],{589:function(a,e,t){},590:function(a,e,t){},591:function(a,e,t){},714:function(a,e,t){"use strict";t.r(e);var c=t(16),n=t(3),s=t(72),r=t.n(s),i=t(466),l=(t(589),t(444)),d=(t(590),t(7)),o=function(a){var e=a.onInputChange,t=a.amount,c=a.description;return Object(d.jsxs)("div",{className:"container","data-v-19c4afb8":"",children:[Object(d.jsxs)("div",{className:"inputs-group","data-v-19c4afb8":"",children:[Object(d.jsx)(l.a,{name:"amount",label:"Enter Amount",onChange:e,value:t,inputMode:"decimal","data-v-19c4afb8":""}),Object(d.jsxs)("select",{name:"unit",className:"unit-dropdown",onChange:e,"data-v-19c4afb8":"",children:[Object(d.jsx)("option",{value:"sats","data-v-19c4afb8":"",children:"Sats"}),Object(d.jsx)("option",{value:"msats","data-v-19c4afb8":"",children:"mSats"}),Object(d.jsx)("option",{value:"btc","data-v-19c4afb8":"",children:"BTC"})]})]}),Object(d.jsx)(l.a,{name:"description",label:"Description",element:"textarea",onChange:e,value:c,"data-v-19c4afb8":""})]})},b=t(2),u=t.n(b),j=t(6),v=t(22),p=t(471),O=t.n(p),h=t(40),m=t(145),x=t(561),f=t(14),g=(t(591),t(477)),k=t(559),C=t(24),N=t(435),w=function(a){var e=a.amount,t=void 0===e?0:e,s=a.description,i=void 0===s?"N/A":s,l=a.unit,o=void 0===l?"":l,b=a.prevStep,p=Object(h.b)(),w=Object(v.g)(),y=Object(n.useState)(""),S=Object(c.a)(y,2),E=S[0],A=S[1],I=Object(n.useState)(""),T=Object(c.a)(I,2),_=T[0],D=T[1],L=Object(n.useState)(!1),M=Object(c.a)(L,2),q=M[0],R=M[1],F=Object(n.useState)(!1),J=Object(c.a)(F,2),K=J[0],U=J[1],W=Object(n.useState)(),$=Object(c.a)(W,2),z=$[0],B=$[1],H=Object(n.useState)(""),Q=Object(c.a)(H,2),V=Q[0],G=Q[1],P=Object(n.useState)(!1),X=Object(c.a)(P,2),Y=X[0],Z=X[1],aa=Object(n.useCallback)(Object(j.a)(u.a.mark((function a(){var e,c,n,s;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,R(!0),a.next=4,f.a.post("/api/lnd/addinvoice",{value:t,memo:i,expiry:100});case 4:e=a.sent,c=e.data,A(c.payment_request),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),G(null!==(n=null===a.t0||void 0===a.t0||null===(s=a.t0.response)||void 0===s?void 0:s.data.errorMessage)&&void 0!==n?n:"An unknown error has occurred");case 12:return a.prev=12,R(!1),a.finish(12);case 15:case"end":return a.stop()}}),a,null,[[0,9,12,15]])}))),[t,i]),ea=Object(n.useCallback)(Object(j.a)(u.a.mark((function a(){var e,t,c,n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,R(!0),a.next=4,f.a.post("/api/lnd/newaddress",{type:"p2wkh"});case 4:e=a.sent,t=e.data,D(t.address),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),G(null!==(c=null===a.t0||void 0===a.t0||null===(n=a.t0.response)||void 0===n?void 0:n.data.errorMessage)&&void 0!==c?c:"An unknown error has occurred");case 12:return a.prev=12,R(!1),a.finish(12);case 15:case"end":return a.stop()}}),a,null,[[0,9,12,15]])}))),[]),ta=Object(n.useCallback)(function(){var a=Object(j.a)(u.a.mark((function a(e){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:B(e);case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),[]);Object(n.useEffect)((function(){Y?aa():ea()}),[aa,ea,Y]);var ca=Object(n.useCallback)((function(){Z(!Y)}),[Y]),na=Object(n.useRef)(),sa=Object(n.useCallback)((function(){try{var a=Y?E:_;if(navigator.clipboard)navigator.clipboard.writeText(a);else{var e=na.current;if(!e)throw new ReferenceError("When trying to access the ref for the placeholder input to copy, the ref was null.");e.style.display="block",e.select(),document.execCommand("copy"),e.blur(),e.style.display="none"}}catch(t){console.error(t),G(t.message)}}),[Y,E,_]),ra=Object(n.useCallback)(Object(j.a)(u.a.mark((function a(){var e,t,c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!z){a.next=13;break}return a.prev=1,U(!0),a.next=5,Object(C.g)({publicKey:z.pk,message:"$$__SHOCKWALLET__INVOICE__"+E})(p);case 5:U(!1),w.push("/overview"),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),G(null!==(e=null!==(t=null===a.t0||void 0===a.t0||null===(c=a.t0.response)||void 0===c?void 0:c.data.errorMessage)&&void 0!==t?t:null===a.t0||void 0===a.t0?void 0:a.t0.message)&&void 0!==e?e:"An unknown error has occurred"),U(!1);case 13:case"end":return a.stop()}}),a,null,[[1,9]])}))),[z,E,p,w]);return Object(d.jsxs)("div",{className:"container","data-v-1646ca6a":"",children:[K?Object(d.jsx)(m.a,{overlay:!0,text:"Sending Invoice...","data-v-1646ca6a":""}):null,Y?z?Object(d.jsx)(g.a,{selected:!0,contact:z,selectContact:ta,"data-v-1646ca6a":""}):Object(d.jsx)(k.a,{selectContact:ta,features:["contact"],"data-v-1646ca6a":""}):null,Object(d.jsxs)("div",{className:"qr-code-container","data-v-1646ca6a":"",children:[Object(d.jsx)("div",{className:"qr-code","data-v-1646ca6a":"",children:q?Object(d.jsx)(m.a,{overlay:!0,small:!0,text:"","data-v-1646ca6a":""}):Object(d.jsx)(O.a,{value:Y?E:_,size:180,fgColor:Y?"#f5a623":"#4285b9",bgColor:"#001220","data-v-1646ca6a":""})}),Object(d.jsxs)("div",{className:r()({mode:!0,"lightning-active":Y}),onClick:ca,"data-v-1646ca6a":"",children:[Object(d.jsx)("p",{className:"switch-name on-chain-switch","data-v-1646ca6a":"",children:"On-Chain"}),Object(d.jsx)("div",{className:"switch","data-v-1646ca6a":"",children:Object(d.jsx)("div",{className:"switch-handle","data-v-1646ca6a":""})}),Object(d.jsx)("p",{className:"switch-name lightning-switch","data-v-1646ca6a":"",children:"Lightning"})]})]}),Object(d.jsxs)("div",{className:"copy-clipboard-btn",onClick:sa,"data-v-1646ca6a":"",children:[Object(d.jsx)("i",{className:"fas fa-copy","data-v-1646ca6a":""}),Object(d.jsx)("p",{className:"copy-clipboard-btn-text","data-v-1646ca6a":"",children:"Copy to Clipboard"})]}),!navigator.clipboard&&Object(d.jsx)("input",{className:N.hiddenInput,readOnly:!0,ref:na,type:"text",value:Y?E:_,"data-v-1646ca6a":""}),V?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{"data-v-1646ca6a":"",children:V}),Object(d.jsx)("br",{"data-v-1646ca6a":""}),Object(d.jsx)("span",{className:"inline-link",onClick:G.bind(null,""),"data-v-1646ca6a":"",children:"Dismiss"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"details","data-v-1646ca6a":"",children:[Object(d.jsx)("p",{className:"details-change",onClick:b,"data-v-1646ca6a":"",children:"Change"}),Object(d.jsxs)("div",{className:"detail","data-v-1646ca6a":"",children:[Object(d.jsx)("p",{className:"detail-title","data-v-1646ca6a":"",children:"Amount"}),Object(d.jsxs)("p",{className:"detail-value","data-v-1646ca6a":"",children:[t," ",o.toUpperCase()]})]}),Object(d.jsxs)("div",{className:"detail","data-v-1646ca6a":"",children:[Object(d.jsx)("p",{className:"detail-title","data-v-1646ca6a":"",children:"Description"}),Object(d.jsx)("p",{className:"detail-value","data-v-1646ca6a":"",children:i})]})]}),Y&&z?Object(d.jsx)(x.a,{wrapperStyle:{padding:0,marginTop:23},slideText:"SLIDE TO SEND",onSuccess:ra,"data-v-1646ca6a":""}):null]})]})};e.default=function(){var a=Object(n.useState)(0),e=Object(c.a)(a,2),t=e[0],s=e[1],l=Object(n.useState)(""),b=Object(c.a)(l,2),u=b[0],j=b[1],v=Object(n.useState)(0),p=Object(c.a)(v,2),O=p[0],h=p[1],m=Object(n.useState)("sats"),x=Object(c.a)(m,2),f=x[0],g=x[1],k=Object(n.useCallback)((function(a){"amount"===a.target.name&&s(a.target.value),"description"===a.target.name&&j(a.target.value),"unit"===a.target.name&&g(a.target.value)}),[]),C=Object(n.useCallback)((function(){O<1&&h(O+1)}),[O]),N=Object(n.useCallback)((function(){O>0&&h(O-1)}),[O]),y=Object(n.useCallback)((function(){return 0===O?Object(d.jsx)(o,{amount:t,description:u,onInputChange:k,"data-v-4db668aa":""}):1===O?Object(d.jsx)(w,{amount:t,description:u,unit:f,prevStep:N,"data-v-4db668aa":""}):void 0}),[O,t,u,k,N,f]),S=1===O,E=Array.from({length:2});return Object(d.jsxs)(i.a,{title:"REQUEST","data-v-4db668aa":"",children:[y(),Object(d.jsxs)("div",{className:"footer","data-v-4db668aa":"",children:[S?null:Object(d.jsxs)("div",{className:"controls","data-v-4db668aa":"",children:[Object(d.jsx)("div",{className:"control",onClick:C,"data-v-4db668aa":"",children:"Skip"}),Object(d.jsx)("div",{className:"control next",onClick:C,"data-v-4db668aa":"",children:"Next"})]}),Object(d.jsx)("div",{className:"indicators","data-v-4db668aa":"",children:E.map((function(a,e){return Object(d.jsx)("div",{className:r()({indicator:!0,"indicator-active":e===O}),"data-v-4db668aa":""})}))})]})]})}}}]);
//# sourceMappingURL=27.62c0bb48.chunk.js.map