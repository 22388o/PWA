(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[29],{595:function(e,t,a){"use strict";var c=a(46),n=(a(0),a(84)),r=a.n(n),s=a(8),o=(a(601),a(4));t.a=function(e){var t=e.label,a=void 0===t?"":t,n=e.name,i=void 0===n?"":n,l=e.onChange,d=e.inputAction,u=void 0===d?s.b:d,b=e.actionIcon,p=void 0===b?"":b,f=e.value,j=e.inputMode,v=void 0===j?"text":j,m=e.type,O=void 0===m?"text":m,h=e.element,x=void 0===h?"input":h,k=e.small,g=void 0!==k&&k,y=e.disabled,S=void 0!==y&&y;return Object(o.jsxs)("div",{className:r()({group:!0,"group-disabled":S,"group-small":g}),"data-v-1785d374":"",children:[a?Object(o.jsx)("p",{className:"group-label","data-v-1785d374":"",children:a}):null,Object(o.jsxs)("div",{className:r()({"group-input-container":!0,"group-input-textarea-container":"textarea"===x}),"data-v-1785d374":"",children:["textarea"===x?Object(o.jsx)("textarea",{className:"group-input group-input-textarea",name:i,onChange:l,inputMode:v,value:f,disabled:S,"data-v-1785d374":""}):Object(o.jsx)("input",{className:"group-input",type:O,name:i,onChange:l,inputMode:v,value:f,disabled:S,"data-v-1785d374":""}),u&&p?Object(o.jsx)("div",{className:"group-input-action",onClick:u,"data-v-1785d374":"",children:Object(o.jsx)("i",{className:r()(Object(c.a)({"group-input-action-icon":!0,fas:!0},p,!0)),onClick:u,"data-v-1785d374":""})}):null]})]})}},601:function(e,t,a){},609:function(e,t,a){"use strict";var c=a(0),n=a(4);t.a=function(e){var t=e.color,a=e.length,r=e.type,s=e.width,o=Object(c.useMemo)((function(){return"vertical"===r?{borderLeftStyle:"solid",borderLeftWidth:"".concat(s/2,"px"),borderLeftColor:t,borderRightStyle:"solid",borderRightWidth:"".concat(s/2,"px"),borderRightColor:t,height:a}:"horizontal"===r?{borderTopStyle:"solid",borderTopWidth:s/2,borderTopColor:t,borderBottomStyle:"solid",borderBottomWidth:s/2,borderBottomColor:t,width:a}:{}}),[t,a,r,s]);return Object(n.jsx)("div",{style:o})}},845:function(e,t,a){},846:function(e,t,a){e.exports={"stream-type-btn":"GoLive_stream-type-btn__3sNtJ","stream-type-btn-icon":"GoLive_stream-type-btn-icon__2p9-P","obs-logo":"GoLive_obs-logo__1p3Hh"}},896:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a.n(c),r=a(6),s=a(17),o=a(0),i=a.n(o),l=a(37),d=a(84),u=a.n(d),b=(a(845),a(30)),p=a(177),f=a(25),j=a.p+"static/media/obs-2.7c61e78e.svg",v=a(714),m=a(24),O=a(593),h=a(20),x=a(611),k=a(592),g=a(609),y=a(591),S=a(846),C=a.n(S),w=a(595),N=a(4);t.default=function(){var e=Object(l.b)(),t=Object(m.g)(),a=h.useSelector((function(e){return e.node.hostIP})),c=h.useSelector((function(e){return e.node.relayId})),d=h.useSelector((function(e){return e.content.seedProviderPub})),S=h.useSelector((function(e){return e.content.seedInfo})),T=S.seedUrl,I=S.seedToken,P=h.useSelector((function(e){return e.content.streamLiveToken})),U=h.useSelector((function(e){return e.content.streamUserToken})),B=h.useSelector((function(e){return e.content.availableTokens})),L=h.useSelector((function(e){return e.content.streamBroadcasterUrl})),_=h.useSelector((function(e){return e.content.streamContentId})),M=h.useSelector((function(e){return e.content.tipOverlayUrl})),F=h.useSelector((function(e){return e.content.streamPostId})),R=h.useSelector((function(e){return e.userProfiles})),W=Object(o.useState)("obs"),D=Object(s.a)(W,2),A=D[0],E=D[1],G=Object(o.useState)(!1),z=Object(s.a)(G,2),J=z[0],K=z[1],H=Object(o.useState)(P),V=Object(s.a)(H,2),Y=V[0],q=V[1],Q=Object(o.useState)(U),X=Object(s.a)(Q,2)[1],Z=Object(o.useState)("Look I'm streaming!"),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ae=Object(o.useState)(null),ce=Object(s.a)(ae,2),ne=ce[0],re=ce[1],se=Object(o.useState)(null),oe=Object(s.a)(se,2),ie=oe[0],le=oe[1],de=Object(o.useState)(!1),ue=Object(s.a)(de,2),be=ue[0],pe=ue[1],fe=Object(o.useState)(!1),je=Object(s.a)(fe,2),ve=je[0],me=je[1],Oe=Object(o.useState)(!1),he=Object(s.a)(Oe,2),xe=he[0],ke=he[1],ge=Object(o.useState)(!1),ye=Object(s.a)(ge,2),Se=ye[0],Ce=ye[1],we=Object(o.useState)(!0),Ne=Object(s.a)(we,2),Te=Ne[0],Ie=Ne[1],Pe=i.a.useCallback(function(){var t=Object(r.a)(n.a.mark((function t(r,o){var i,l,u,p,j,m,O,h,x,k,g,y,S,C,w,N,P,U,L,_,M,F,R,W,D,A,E,G,z,J;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,K(!0),t.next=4,Object(v.a)({availableTokens:B,seedProviderPub:d,seedToken:I,seedUrl:T,serviceID:o,servicePrice:r});case 4:return i=t.sent,l=i.seedUrl,u=i.tokens,p=Object(s.a)(u,1),j=p[0],X(j),t.next=11,f.a.post("".concat(l,"/api/stream/auth"),{token:j});case 11:return m=t.sent,O=m.data,h=O.data.token,console.log(h),x="".concat(j,"?key=").concat(h),q("".concat(j,"?key=").concat(h)),k="".concat(l,"/rtmpapi/live/").concat(j,"/index.m3u8"),g=l.replace("https","rtmp"),y="".concat(g,"/live"),S="".concat(l,"/rtmpapi/api/streams/live/").concat(j),C="".concat(l.replace("https","wss"),"/websocket"),w=[],""!==ee&&w.push({type:"text/paragraph",text:ee}),N={height:0,isPreview:!1,isPrivate:!1,liveStatus:"waiting",magnetURI:k,playbackMagnet:"",statusUrl:S,type:"stream/embedded",userToken:j,viewersCounter:0,width:0,viewersSocketUrl:C},w.push(N),t.next=28,f.a.post("/api/gun/wall",{tags:[],title:"Post",contentItems:w,enableTipsOverlay:Te});case 28:if(200!==(P=t.sent).status){t.next=43;break}return L=P.data,_=L,M=Object(s.a)(_,3),F=M[0],R=M[1],W=M[2],D="",W&&(A=c?"&x-shock-hybrid-relay-id-x=".concat(c):"",D="".concat(a,"/api/subscribeStream?accessId=").concat(W).concat(A)),console.log(R.contentItems),E=Object.entries(null!==(U=R.contentItems)&&void 0!==U?U:{}).find((function(e){var t=Object(s.a)(e,2),a=(t[0],t[1]);return"stream/embedded"===a.type&&a.magnetURI===k})),G=Object(s.a)(E,1),z=G[0],Object(b.d)({seedToken:j,liveToken:x,streamUrl:k,streamPostId:F,streamContentId:z,streamStatusUrl:S,streamBroadcasterUrl:y,tipOverlayUrl:D})(e),t.next=39,f.a.post("/api/listenStream",{postId:F,contentId:z,statusUrl:"".concat(l,"/rtmpapi/api/streams/live/").concat(j)});case 39:console.log("post created successfully"),K(!1),t.next=45;break;case 43:re("invalid response status"),K(!1);case 45:t.next=52;break;case 47:t.prev=47,t.t0=t.catch(0),console.log(t.t0),re(null!==(J=null===t.t0||void 0===t.t0?void 0:t.t0.errorMessage)&&void 0!==J?J:null===t.t0||void 0===t.t0?void 0:t.t0.message),K(!1);case 52:case"end":return t.stop()}}),t,null,[[0,47]])})));return function(e,a){return t.apply(this,arguments)}}(),[B,d,I,T,Te,e,ee]),Ue=Object(o.useCallback)((function(){le(null)}),[le]),Be=Object(o.useCallback)((function(){var e=ie.servicePrice,t=ie.serviceID;Pe(e,t),le(null)}),[ie,Pe,le]),Le=Object(o.useCallback)(function(){var e=Object(r.a)(n.a.mark((function e(t){var a,c,r,s,o,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!be){e.next=3;break}return e.abrupt("return");case 3:pe(!0),t.preventDefault(),a=!1,e.t0=n.a.keys(B);case 7:if((e.t1=e.t0()).done){e.next=16;break}if(c=e.t1.value,!Object.prototype.hasOwnProperty.call(B,c)){e.next=14;break}if(!B[c][0]){e.next=14;break}return a=!0,e.abrupt("break",16);case 14:e.next=7;break;case 16:if(r="",R[d]&&(r=R[d].offerSeedService),!(a||T&&I)){e.next=22;break}Pe(),e.next=33;break;case 22:if(!r||!d){e.next=32;break}return e.next=25,f.a.get("/api/gun/otheruser/".concat(d,"/load/offeredServices>").concat(r));case 25:s=e.sent,o=s.data,i=o.data.servicePrice,console.log(o),le({servicePrice:i,serviceID:r}),e.next=33;break;case 32:re("No way found to publish content");case 33:e.next=38;break;case 35:e.prev=35,e.t2=e.catch(0),re(e.t2.message);case 38:return e.prev=38,pe(!1),e.finish(38);case 41:case"end":return e.stop()}}),e,null,[[0,35,38,41]])})));return function(t){return e.apply(this,arguments)}}(),[be,R,d,T,I,B,Pe]),_e=Object(o.useCallback)((function(){navigator.clipboard.writeText(Y),ke(!0)}),[Y,ke]),Me=Object(o.useCallback)((function(){navigator.clipboard.writeText(M),Ce(!0)}),[M,Ce]),Fe=Object(o.useCallback)((function(){navigator.clipboard.writeText(L),me(!0)}),[L,me]),Re=Object(o.useCallback)((function(e){var t=e.target,a=t.value;switch(t.name){case"paragraph":return void te(a);case"source":return void E(a);default:return}}),[te,E]),We=Object(o.useCallback)((function(){Ie(!Te)}),[Te,Ie]),De=Object(o.useCallback)((function(){f.a.post("/api/stopStream",{postId:F,contentId:_,endUrl:"https://stream.shock.network/api/stream/end",urlForMagnet:"https://stream.shock.network/api/stream/torrent/".concat(U),obsToken:P}),Object(b.i)()(e),console.info(U),t.push("/profile")}),[e,t,_,P,F,U]),Ae=u()(k.j,k.e,k.d,C.a["stream-type-btn"]);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(x.a,{pageTitle:"GO LIVE",scrolls:!0,"data-v-c4af1635":"",children:[Object(N.jsxs)("div",{className:u()(k.A,k.E),"data-v-c4af1635":"",children:[Object(N.jsxs)("div",{className:Ae,onClick:E.bind(null,"camera"),"data-v-c4af1635":"",children:[Object(N.jsx)("i",{className:u()(C.a["stream-type-btn-icon"],"fas","fa-camera"),"data-v-c4af1635":""}),Object(N.jsx)(y.a,{amt:16,"data-v-c4af1635":""}),Object(N.jsx)(g.a,{color:"camera"===A?"#4285b9":"white",length:36,type:"horizontal",width:2,"data-v-c4af1635":""})]}),Object(N.jsxs)("div",{className:Ae,onClick:E.bind(null,"obs"),"data-v-c4af1635":"",children:[Object(N.jsx)("img",{alt:"",className:C.a["obs-logo"],src:j,"data-v-c4af1635":""}),Object(N.jsx)(y.a,{amt:16,"data-v-c4af1635":""}),Object(N.jsx)(g.a,{color:"obs"===A?"#4285b9":"white",length:36,type:"horizontal",width:2,"data-v-c4af1635":""})]})]}),Object(N.jsx)("div",{className:k.m,"data-v-c4af1635":"",children:ne?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("p",{"data-v-c4af1635":"",children:" An error ocurred: "}),Object(N.jsx)("br",{"data-v-c4af1635":""}),Object(N.jsx)("p",{className:"error-container","data-v-c4af1635":"",children:ne}),Object(N.jsx)("button",{className:"shock-form-button",onClick:re.bind(null,null),"data-v-c4af1635":"",children:"Dismiss"})]}):Y?Object(N.jsxs)(N.Fragment,{children:["obs"===A&&Object(N.jsx)("p",{className:"m-b-1","data-v-c4af1635":"",children:"You are ready to go! setup the stream with OBS and watch it from your profile"}),Object(N.jsx)("p",{"data-v-c4af1635":"",children:"Broadcaster:"}),Object(N.jsxs)("div",{className:"d-flex flex-align-center","data-v-c4af1635":"",children:[Object(N.jsx)(w.a,{name:"Streamer Url",value:L,disabled:!0,"data-v-c4af1635":""}),Object(N.jsx)("i",{className:ve?"fas fa-check fa-lg m-1":"far fa-copy fa-lg m-1",onClick:Fe,"data-v-c4af1635":""})]}),Object(N.jsx)("p",{"data-v-c4af1635":"",children:"Stream Key:"}),Object(N.jsxs)("div",{className:"d-flex flex-align-center","data-v-c4af1635":"",children:[Object(N.jsx)(w.a,{name:"Stream Key",value:Y,disabled:!0,"data-v-c4af1635":""}),Object(N.jsx)("i",{className:xe?"fas fa-check fa-lg m-1":"far fa-copy fa-lg m-1",onClick:_e,"data-v-c4af1635":""})]}),M&&Object(N.jsx)("p",{"data-v-c4af1635":"",children:"Tips notifications overlay Url:"}),M&&Object(N.jsxs)("div",{className:"d-flex flex-align-center","data-v-c4af1635":"",children:[Object(N.jsx)(w.a,{name:"Overlay Url",value:M,disabled:!0,"data-v-c4af1635":""}),Object(N.jsx)("i",{className:Se?"fas fa-check fa-lg m-1":"far fa-copy fa-lg m-1",onClick:Me,"data-v-c4af1635":""})]}),Object(N.jsx)("div",{className:"flex-center","data-v-c4af1635":"",children:Object(N.jsx)("button",{onClick:De,className:"shock-form-button-confirm","data-v-c4af1635":"",children:"STOP"})})]}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("input",{className:"input-field",type:"text",name:"paragraph",id:"paragraph",value:ee,onChange:Re,"data-v-c4af1635":""}),Object(N.jsxs)("label",{htmlFor:"enable-tips-notifications","data-v-c4af1635":"",children:["Enable Tips notifications overlay"," "]}),Object(N.jsx)("input",{type:"checkbox",name:"enable-tips-notifications",id:"enable-tips-notifications",checked:Te,onClick:We,"data-v-c4af1635":""}),Object(N.jsx)("button",{onClick:Le,className:u()(k.E,"shock-form-button-confirm"),disabled:"camera"===A||be,"data-v-c4af1635":"",children:be?"...":"START NOW"})]})})]}),ie&&Object(N.jsx)(O.a,{modalOpen:ie&&!J,toggleModal:Ue,contentClass:"p-1",blueBtn:"Confirm",onClickBlueBtn:Be,forceRenderTitleBar:!0,noFullWidth:!0,"data-v-c4af1635":"",children:Object(N.jsxs)("p",{className:"text-center","data-v-c4af1635":"",children:["The service from the default service provider will cost:"," ",Object(N.jsxs)("strong",{"data-v-c4af1635":"",children:[ie.servicePrice," sats"]})]})}),J?Object(N.jsx)(p.a,{overlay:!0,fullScreen:!0,text:"Creating stream...","data-v-c4af1635":""}):null]})}}}]);
//# sourceMappingURL=29.4917a9ed.chunk.js.map