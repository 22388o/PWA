(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[38],{616:function(a,e,n){"use strict";var t=n(1),i=n(88),c=n.n(i),s=(n(617),n(38)),o=n(7),l=n(91),r=n(609),d=n(19),u=n(4);e.a=function(a){var e=a.pageTitle,n=a.absolute,i=void 0!==n&&n,b=a.solid,h=void 0!==b&&b,v=a.enableBackButton,j=void 0!==v&&v,m=a.onHeight,p=void 0===m?o.b:m,O=Object(s.b)(),g=Object(t.useCallback)((function(){window.history.back()}),[]),f=Object(t.useCallback)((function(){O(Object(l.c)())}),[O]),k=Object(d.useSelector)((function(a){return a.node.publicKey})),N=Object(t.useCallback)((function(a){if(a)try{p(a.getBoundingClientRect().height)}catch(e){console.log("Error inside onHeight mechanism in MainNav:"),console.log(e)}}),[p]);return Object(u.jsxs)("div",{className:c()({"main-nav-container":!0,"main-nav-absolute":i,"main-nav-solid":h}),ref:N,"data-v-80304ae7":"",children:[j?Object(u.jsx)("div",{className:"main-nav-back",onClick:g,"data-v-80304ae7":"",children:Object(u.jsx)("i",{className:"icon icon-thin-back","data-v-80304ae7":""})}):Object(u.jsx)(r.a,{height:40,publicKey:k,"data-v-80304ae7":""}),Object(u.jsx)("p",{className:"main-nav-title unselectable","data-v-80304ae7":"",children:e}),Object(u.jsxs)("div",{className:"main-nav-menu-btn",onClick:f,"data-v-80304ae7":"",children:[Object(u.jsx)("div",{className:"main-nav-menu-dash","data-v-80304ae7":""}),Object(u.jsx)("div",{className:"main-nav-menu-dash","data-v-80304ae7":""}),Object(u.jsx)("div",{className:"main-nav-menu-dash","data-v-80304ae7":""})]})]})}},617:function(a,e,n){},767:function(a,e,n){},903:function(a,e,n){"use strict";n.r(e);var t=n(13),i=n(1),c=n(616),s=(n(767),n(29)),o=n(4);e.default=function(){var a=Object(i.useState)(""),e=Object(t.a)(a,2),n=e[0],l=e[1];return Object(i.useEffect)((function(){s.a.post("/api/lnd/newaddress",{type:"p2wkh"}).then((function(a){var e=a.data,n="https://buy-staging.moonpay.io/?apiKey=".concat("pk_live_oXjufSZTIzr14PJNrLv3XdCKM9BI6pdH","&currencyCode=btc&walletAddress=").concat(e.address);return fetch("https://moon-sign.shock.network/sign",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({originalUrl:n})})})).then((function(a){return a.json()})).then((function(a){a.urlWithSignature&&(l(a.urlWithSignature),console.log("MOONPAY SIGNATURE DONE"+a.urlWithSignature))})).catch((function(a){console.log("Error generating MoonPay signature"),console.log(a)}))}),[]),Object(o.jsxs)("div",{className:"moonPayContainer","data-v-430842e2":"",children:[Object(o.jsx)(c.a,{pageTitle:"MOONPAY",enableBackButton:!0,"data-v-430842e2":""}),Object(o.jsx)("iframe",{title:"moonpay-iframe",width:"100%",height:"100%",src:n,"data-v-430842e2":""})]})}}}]);
//# sourceMappingURL=38.41538129.chunk.js.map