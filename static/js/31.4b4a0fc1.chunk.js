(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[31],{758:function(e,a,t){},759:function(e,a,t){},760:function(e,a,t){},895:function(e,a,t){"use strict";t.r(a);var c=t(17),n=t(0),s=t(85),r=t.n(s),i=t(633),l=(t(758),t(595)),d=(t(759),t(4)),o=function(e){var a=e.onInputChange,t=e.amount,c=e.description;return Object(d.jsxs)("div",{className:"container","data-v-794a3f2e":"",children:[Object(d.jsxs)("div",{className:"inputs-group","data-v-794a3f2e":"",children:[Object(d.jsx)(l.a,{name:"amount",label:"Enter Amount",onChange:a,value:t,inputMode:"decimal","data-v-794a3f2e":""}),Object(d.jsxs)("select",{name:"unit",className:"unit-dropdown",onChange:a,"data-v-794a3f2e":"",children:[Object(d.jsx)("option",{value:"sats","data-v-794a3f2e":"",children:"Sats"}),Object(d.jsx)("option",{value:"msats","data-v-794a3f2e":"",children:"mSats"}),Object(d.jsx)("option",{value:"btc","data-v-794a3f2e":"",children:"BTC"})]})]}),Object(d.jsx)(l.a,{name:"description",label:"Description",element:"textarea",onChange:a,value:c,"data-v-794a3f2e":""})]})},j=t(3),u=t.n(j),v=t(7),b=t(24),f=t(664),p=t.n(f),O=t(37),h=t(177),m=t(718),x=t(26),g=(t(760),t(670)),k=t(717),N=(t(47),t(592)),C=function(e){var a=e.amount,t=void 0===a?0:a,s=e.description,i=void 0===s?"N/A":s,l=e.unit,o=void 0===l?"":l,j=e.prevStep,f=(Object(O.b)(),Object(b.g)()),C=Object(n.useState)(""),w=Object(c.a)(C,2),y=w[0],S=w[1],A=Object(n.useState)(""),E=Object(c.a)(A,2),T=E[0],D=E[1],I=Object(n.useState)(!1),M=Object(c.a)(I,2),q=M[0],R=M[1],F=Object(n.useState)(!1),J=Object(c.a)(F,2),L=J[0],U=J[1],z=Object(n.useState)(),B=Object(c.a)(z,2),Q=B[0],W=B[1],_=Object(n.useState)(""),G=Object(c.a)(_,2),H=G[0],K=G[1],P=Object(n.useState)(!1),V=Object(c.a)(P,2),X=V[0],Y=V[1],Z=Object(n.useCallback)(Object(v.a)(u.a.mark((function e(){var a,c,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,R(!0),e.next=4,x.a.post("/api/lnd/addinvoice",{value:t,memo:i,expiry:100});case 4:a=e.sent,c=a.data,S(c.payment_request),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),K(null!==(n=null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s?void 0:s.data.errorMessage)&&void 0!==n?n:"An unknown error has occurred");case 12:return e.prev=12,R(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),[t,i]),$=Object(n.useCallback)(Object(v.a)(u.a.mark((function e(){var a,t,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,R(!0),e.next=4,x.a.post("/api/lnd/newaddress",{type:"p2wkh"});case 4:a=e.sent,t=a.data,D(t.address),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),K(null!==(c=null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n?void 0:n.data.errorMessage)&&void 0!==c?c:"An unknown error has occurred");case 12:return e.prev=12,R(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),[]),ee=Object(n.useCallback)(function(){var e=Object(v.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W(a);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),[]);Object(n.useEffect)((function(){X?Z():$()}),[Z,$,X]);var ae=Object(n.useCallback)((function(){Y(!X)}),[X]),te=Object(n.useRef)(),ce=Object(n.useCallback)((function(){try{var e=X?y:T;if(navigator.clipboard)navigator.clipboard.writeText(e);else{var a=te.current;if(!a)throw new ReferenceError("When trying to access the ref for the placeholder input to copy, the ref was null.");a.style.display="block",a.select(),document.execCommand("copy"),a.blur(),a.style.display="none"}}catch(t){console.error(t),K(t.message)}}),[X,y,T]),ne=Object(n.useCallback)(Object(v.a)(u.a.mark((function e(){var a,t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Q)try{U(!0),U(!1),f.push("/overview")}catch(n){K(null!==(a=null!==(t=null===n||void 0===n||null===(c=n.response)||void 0===c?void 0:c.data.errorMessage)&&void 0!==t?t:null===n||void 0===n?void 0:n.message)&&void 0!==a?a:"An unknown error has occurred"),U(!1)}case 1:case"end":return e.stop()}}),e)}))),[Q,f]);return Object(d.jsxs)("div",{className:"container","data-v-9c893f14":"",children:[L?Object(d.jsx)(h.a,{overlay:!0,text:"Sending Invoice...","data-v-9c893f14":""}):null,X?Q?Object(d.jsx)(g.a,{selected:!0,contact:Q,selectContact:ee,style:void 0,"data-v-9c893f14":""}):Object(d.jsx)(k.a,{selectContact:ee,features:["contact"],"data-v-9c893f14":""}):null,Object(d.jsxs)("div",{className:"qr-code-container","data-v-9c893f14":"",children:[Object(d.jsx)("div",{className:"qr-code","data-v-9c893f14":"",children:q?Object(d.jsx)(h.a,{overlay:!0,small:!0,text:"","data-v-9c893f14":""}):Object(d.jsx)(p.a,{value:X?y:T,size:180,fgColor:X?"#f5a623":"#4285b9",bgColor:"#001220","data-v-9c893f14":""})}),Object(d.jsxs)("div",{className:r()({mode:!0,"lightning-active":X}),onClick:ae,"data-v-9c893f14":"",children:[Object(d.jsx)("p",{className:"switch-name on-chain-switch","data-v-9c893f14":"",children:"On-Chain"}),Object(d.jsx)("div",{className:"switch","data-v-9c893f14":"",children:Object(d.jsx)("div",{className:"switch-handle","data-v-9c893f14":""})}),Object(d.jsx)("p",{className:"switch-name lightning-switch","data-v-9c893f14":"",children:"Lightning"})]})]}),Object(d.jsxs)("div",{className:"copy-clipboard-btn",onClick:ce,"data-v-9c893f14":"",children:[Object(d.jsx)("i",{className:"fas fa-copy","data-v-9c893f14":""}),Object(d.jsx)("p",{className:"copy-clipboard-btn-text","data-v-9c893f14":"",children:"Copy to Clipboard"})]}),!navigator.clipboard&&Object(d.jsx)("input",{className:N.s,readOnly:!0,ref:te,type:"text",value:X?y:T,"data-v-9c893f14":""}),H?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{"data-v-9c893f14":"",children:H}),Object(d.jsx)("br",{"data-v-9c893f14":""}),Object(d.jsx)("span",{className:"inline-link",onClick:K.bind(null,""),"data-v-9c893f14":"",children:"Dismiss"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"details","data-v-9c893f14":"",children:[Object(d.jsx)("p",{className:"details-change",onClick:j,"data-v-9c893f14":"",children:"Change"}),Object(d.jsxs)("div",{className:"detail","data-v-9c893f14":"",children:[Object(d.jsx)("p",{className:"detail-title","data-v-9c893f14":"",children:"Amount"}),Object(d.jsxs)("p",{className:"detail-value","data-v-9c893f14":"",children:[t," ",o.toUpperCase()]})]}),Object(d.jsxs)("div",{className:"detail","data-v-9c893f14":"",children:[Object(d.jsx)("p",{className:"detail-title","data-v-9c893f14":"",children:"Description"}),Object(d.jsx)("p",{className:"detail-value","data-v-9c893f14":"",children:i})]})]}),X&&Q?Object(d.jsx)(m.a,{wrapperStyle:{padding:0,marginTop:23},slideText:"SLIDE TO SEND",onSuccess:ne,disabled:!1,"data-v-9c893f14":""}):null]})]})},w=Array.from({length:2});a.default=function(){var e=Object(n.useState)(0),a=Object(c.a)(e,2),t=a[0],s=a[1],l=Object(n.useState)(""),j=Object(c.a)(l,2),u=j[0],v=j[1],b=Object(n.useState)(0),f=Object(c.a)(b,2),p=f[0],O=f[1],h=Object(n.useState)("sats"),m=Object(c.a)(h,2),x=m[0],g=m[1],k=Object(n.useCallback)((function(e){"amount"===e.target.name&&s(e.target.value),"description"===e.target.name&&v(e.target.value),"unit"===e.target.name&&g(e.target.value)}),[]),N=Object(n.useCallback)((function(){p<1&&O(p+1)}),[p]),y=Object(n.useCallback)((function(){p>0&&O(p-1)}),[p]),S=Object(n.useCallback)((function(){return 0===p?Object(d.jsx)(o,{amount:t,description:u,onInputChange:k,"data-v-e2cffda1":""}):1===p?Object(d.jsx)(C,{amount:t,description:u,unit:x,prevStep:y,"data-v-e2cffda1":""}):void 0}),[p,t,u,k,y,x]),A=1===p;return Object(d.jsxs)(i.a,{title:"REQUEST","data-v-e2cffda1":"",children:[S(),Object(d.jsxs)("div",{className:"footer","data-v-e2cffda1":"",children:[A?null:Object(d.jsxs)("div",{className:"controls","data-v-e2cffda1":"",children:[Object(d.jsx)("div",{className:"control",onClick:N,"data-v-e2cffda1":"",children:"Skip"}),Object(d.jsx)("div",{className:"control next",onClick:N,"data-v-e2cffda1":"",children:"Next"})]}),Object(d.jsx)("div",{className:"indicators","data-v-e2cffda1":"",children:w.map((function(e,a){return Object(d.jsx)("div",{className:r()({indicator:!0,"indicator-active":a===p}),"data-v-e2cffda1":""},a)}))})]})]})}}}]);
//# sourceMappingURL=31.4b4a0fc1.chunk.js.map