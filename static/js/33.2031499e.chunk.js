(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[33],{574:function(a,t,n){"use strict";var e=n(3),c=n(81),i=n.n(c),s=(n(575),n(43)),o=n(21),l=n(85),r=n(566),d=n(17),u=n(4);t.a=function(a){var t=a.pageTitle,n=a.absolute,c=void 0!==n&&n,b=a.solid,h=void 0!==b&&b,v=a.enableBackButton,j=void 0!==v&&v,m=a.onHeight,O=void 0===m?o.a:m,p=Object(s.b)(),g=Object(e.useCallback)((function(){window.history.back()}),[]),f=Object(e.useCallback)((function(){p(Object(l.c)())}),[p]),k=Object(d.useSelector)((function(a){return a.node.publicKey})),y=Object(e.useCallback)((function(a){if(a)try{O(a.getBoundingClientRect().height)}catch(t){console.log("Error inside onHeight mechanism in MainNav:"),console.log(t)}}),[O]);return Object(u.jsxs)("div",{className:i()({"main-nav-container":!0,"main-nav-absolute":c,"main-nav-solid":h}),ref:y,"data-v-4cc001a2":"",children:[j?Object(u.jsx)("div",{className:"main-nav-back",onClick:g,"data-v-4cc001a2":"",children:Object(u.jsx)("i",{className:"icon icon-thin-back","data-v-4cc001a2":""})}):Object(u.jsx)(r.a,{height:40,publicKey:k,"data-v-4cc001a2":""}),Object(u.jsx)("p",{className:"main-nav-title unselectable","data-v-4cc001a2":"",children:t}),Object(u.jsxs)("div",{className:"main-nav-menu-btn",onClick:f,"data-v-4cc001a2":"",children:[Object(u.jsx)("div",{className:"main-nav-menu-dash","data-v-4cc001a2":""}),Object(u.jsx)("div",{className:"main-nav-menu-dash","data-v-4cc001a2":""}),Object(u.jsx)("div",{className:"main-nav-menu-dash","data-v-4cc001a2":""})]})]})}},575:function(a,t,n){},808:function(a,t,n){},850:function(a,t,n){"use strict";n.r(t);var e=n(12),c=n(3),i=n(574),s=(n(808),n(13)),o=n(4);t.default=function(){var a=Object(c.useState)(""),t=Object(e.a)(a,2),n=t[0],l=t[1];return Object(c.useEffect)((function(){s.a.post("/api/lnd/newaddress",{type:"p2wkh"}).then((function(a){var t=a.data,n="https://buy-staging.moonpay.io/?apiKey=".concat("pk_test_C8jSPDtsKQqXwP7nkScpqZI5tsaOiQPH","&currencyCode=btc&walletAddress=").concat(t.address);return fetch("https://moon-sign.shock.network/sign",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({originalUrl:n})})})).then((function(a){return a.json()})).then((function(a){a.urlWithSignature&&(l(a.urlWithSignature),console.log("MOONPAY SIGNATURE DONE"+a.urlWithSignature))})).catch((function(a){console.log("Error generating MoonPay signature"),console.log(a)}))}),[]),Object(o.jsxs)("div",{className:"moonPayContainer","data-v-5b007de5":"",children:[Object(o.jsx)(i.a,{pageTitle:"MOONPAY",enableBackButton:!0,"data-v-5b007de5":""}),Object(o.jsx)("iframe",{title:"moonpay-iframe",width:"100%",height:"100%",src:n,"data-v-5b007de5":""})]})}}}]);
//# sourceMappingURL=33.2031499e.chunk.js.map