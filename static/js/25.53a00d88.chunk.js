(this["webpackJsonpshocknet-pwa"]=this["webpackJsonpshocknet-pwa"]||[]).push([[25],{443:function(e,t,a){"use strict";var c=a(27),n=a(74),r=a.n(n),s=(a(450),a(4));t.a=function(e){var t=e.label,a=e.name,n=e.onChange,o=e.inputAction,i=e.actionIcon,l=e.value,d=e.inputMode,u=void 0===d?"text":d,b=e.type,j=void 0===b?"text":b,v=e.element,f=void 0===v?"input":v,p=e.small,m=void 0!==p&&p,h=e.disabled;return Object(s.jsxs)("div",{className:r()({group:!0,"group-disabled":h,"group-small":m}),"data-v-1c969e13":"",children:[t?Object(s.jsx)("p",{className:"group-label","data-v-1c969e13":"",children:t}):null,Object(s.jsxs)("div",{className:r()({"group-input-container":!0,"group-input-textarea-container":"textarea"===f}),"data-v-1c969e13":"",children:["textarea"===f?Object(s.jsx)("textarea",{className:"group-input group-input-textarea",name:a,onChange:n,inputMode:u,value:l,disabled:h,"data-v-1c969e13":""}):Object(s.jsx)("input",{className:"group-input",type:j,name:a,onChange:n,inputMode:u,value:l,disabled:h,"data-v-1c969e13":""}),o&&i?Object(s.jsx)("div",{className:"group-input-action",onClick:o,"data-v-1c969e13":"",children:Object(s.jsx)("i",{className:r()(Object(c.a)({"group-input-action-icon":!0,fas:!0},i,!0)),onClick:o,"data-v-1c969e13":""})}):null]})]})}},450:function(e,t,a){},463:function(e,t,a){"use strict";var c=a(3),n=a(4);t.a=function(e){var t=e.color,a=e.length,r=e.type,s=e.width,o=Object(c.useMemo)((function(){return"vertical"===r?{borderLeftStyle:"solid",borderLeftWidth:"".concat(s/2,"px"),borderLeftColor:t,borderRightStyle:"solid",borderRightWidth:"".concat(s/2,"px"),borderRightColor:t,height:a}:"horizontal"===r?{borderTopStyle:"solid",borderTopWidth:s/2,borderTopColor:t,borderBottomStyle:"solid",borderBottomWidth:s/2,borderBottomColor:t,width:a}:{}}),[t,a,r,s]);return Object(n.jsx)("div",{style:o})}},680:function(e,t,a){},681:function(e,t,a){e.exports={"stream-type-btn":"GoLive_stream-type-btn__3sNtJ","stream-type-btn-icon":"GoLive_stream-type-btn-icon__2p9-P","obs-logo":"GoLive_obs-logo__1p3Hh"}},726:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),r=a(6),s=a(12),o=a(3),i=a(41),l=a(74),d=a.n(l),u=(a(680),a(32)),b=a(148),j=a(16),v=a.p+"static/media/obs-2.7c61e78e.svg",f=a(559),p=a(439),m=a(13),h=a(472),O=a(440),x=a(463),g=a(441),k=a(681),y=a.n(k),S=a(443),C=a(4);t.default=function(){var e=Object(i.b)(),t=m.useSelector((function(e){return e.content.seedProviderPub})),a=m.useSelector((function(e){return e.content.seedInfo})),c=a.seedUrl,l=a.seedToken,k=m.useSelector((function(e){return e.content.streamLiveToken})),N=m.useSelector((function(e){return e.content.streamUserToken})),w=m.useSelector((function(e){return e.content.availableTokens})),T=m.useSelector((function(e){return e.content.streamBroadcasterUrl})),P=(m.useSelector((function(e){return e.content.streamUrl})),m.useSelector((function(e){return e.userProfiles}))),I=Object(o.useState)("obs"),U=Object(s.a)(I,2),L=U[0],_=U[1],B=Object(o.useState)(!1),M=Object(s.a)(B,2),R=M[0],D=M[1],W=Object(o.useState)(k),F=Object(s.a)(W,2),G=F[0],z=F[1],A=Object(o.useState)(N),J=Object(s.a)(A,2)[1],K=Object(o.useState)("Look I'm streaming!"),E=Object(s.a)(K,2),H=E[0],V=E[1],Y=Object(o.useState)(null),q=Object(s.a)(Y,2),Q=q[0],X=q[1],Z=Object(o.useState)(""),$=Object(s.a)(Z,2),ee=($[0],$[1],Object(o.useState)(null)),te=Object(s.a)(ee,2),ae=te[0],ce=te[1],ne=Object(o.useState)(!1),re=Object(s.a)(ne,2),se=re[0],oe=re[1],ie=Object(o.useState)(!1),le=Object(s.a)(ie,2),de=le[0],ue=le[1],be=Object(o.useState)(!1),je=Object(s.a)(be,2),ve=je[0],fe=je[1],pe=Object(o.useCallback)(function(){var a=Object(r.a)(n.a.mark((function a(r,o){var i,d,b,v,p,m,h,O,x,g,k,y,S,C,N,T,P,I,U,L,_,B,M;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,D(!0),a.next=4,Object(f.a)({availableTokens:w,seedProviderPub:t,seedToken:l,seedUrl:c,serviceID:o,servicePrice:r});case 4:return i=a.sent,d=i.seedUrl,b=i.tokens,v=Object(s.a)(b,1),p=v[0],J(p),a.next=11,j.a.post("".concat(d,"/api/stream/auth"),{token:p});case 11:return m=a.sent,h=m.data,O=h.data.token,console.log(O),x="".concat(p,"?key=").concat(O),z("".concat(p,"?key=").concat(O)),g="".concat(d,"/rtmpapi/live/").concat(p,"/index.m3u8"),k=d.replace("https","rtmp"),y="".concat(k,"/live"),S="".concat(d,"/rtmpapi/api/streams/live/").concat(p),C=[],""!==H&&C.push({type:"text/paragraph",text:H}),C.push({type:"stream/embedded",width:0,height:0,magnetURI:g,isPreview:!1,isPrivate:!1,userToken:p,liveStatus:"waiting",statusUrl:S}),a.next=26,j.a.post("/api/gun/wall",{tags:[],title:"Post",contentItems:C});case 26:if(200!==(N=a.sent).status){a.next=39;break}return T=N.data,P=Object(s.a)(T,2),I=P[0],U=P[1],console.log(U.contentItems),L=Object.entries(U.contentItems).find((function(e){var t=Object(s.a)(e,2);t[0];return t[1].magnetURI===g})),_=Object(s.a)(L,1),B=_[0],Object(u.d)({seedToken:p,liveToken:x,streamUrl:g,streamPostId:I,streamContentId:B,streamStatusUrl:S,streamBroadcasterUrl:y})(e),a.next=35,j.a.post("/api/listenStream",{postId:I,contentId:B,statusUrl:"".concat(d,"/rtmpapi/api/streams/live/").concat(p)});case 35:console.log("post created successfully"),D(!1),a.next=41;break;case 39:X("invalid response status"),D(!1);case 41:a.next=48;break;case 43:a.prev=43,a.t0=a.catch(0),console.log(a.t0),X(null!==(M=null===a.t0||void 0===a.t0?void 0:a.t0.errorMessage)&&void 0!==M?M:null===a.t0||void 0===a.t0?void 0:a.t0.message),D(!1);case 48:case"end":return a.stop()}}),a,null,[[0,43]])})));return function(e,t){return a.apply(this,arguments)}}(),[w,t,l,c,e,H]),me=Object(o.useCallback)((function(){ce(null)}),[ce]),he=Object(o.useCallback)((function(){var e=ae.servicePrice,t=ae.serviceID;pe(e,t),ce(null)}),[ae,pe,ce]),Oe=Object(o.useCallback)(function(){var e=Object(r.a)(n.a.mark((function e(a){var r,s,o,i,d,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!se){e.next=3;break}return e.abrupt("return");case 3:oe(!0),a.preventDefault(),r=!1,e.t0=n.a.keys(w);case 7:if((e.t1=e.t0()).done){e.next=16;break}if(s=e.t1.value,!Object.prototype.hasOwnProperty.call(w,s)){e.next=14;break}if(!w[s][0]){e.next=14;break}return r=!0,e.abrupt("break",16);case 14:e.next=7;break;case 16:if(o="",P[t]&&(o=P[t].SeedServiceProvided),!(r||c&&l)){e.next=22;break}pe(),e.next=33;break;case 22:if(!o||!t){e.next=32;break}return e.next=25,j.a.get("/api/gun/otheruser/".concat(t,"/load/offeredServices>").concat(o));case 25:i=e.sent,d=i.data,u=d.data.servicePrice,console.log(d),ce({servicePrice:u,serviceID:o}),e.next=33;break;case 32:X("No way found to publish content");case 33:e.next=38;break;case 35:e.prev=35,e.t2=e.catch(0),X(e.t2.message);case 38:return e.prev=38,oe(!1),e.finish(38);case 41:case"end":return e.stop()}}),e,null,[[0,35,38,41]])})));return function(t){return e.apply(this,arguments)}}(),[se,P,t,c,l,w,pe]),xe=Object(o.useCallback)((function(){navigator.clipboard.writeText(G),fe(!0)}),[G,fe]),ge=Object(o.useCallback)((function(){navigator.clipboard.writeText(T),ue(!0)}),[T,ue]),ke=Object(o.useCallback)((function(e){var t=e.target,a=t.value;switch(t.name){case"paragraph":return void V(a);case"source":return void _(a);default:return}}),[V,_]),ye=Object(o.useCallback)((function(){Object(u.h)()(e)}),[e,u.h]),Se=d()(O.h,O.d,O.c,y.a["stream-type-btn"]);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(h.a,{pageTitle:"GO LIVE",scrolls:!0,"data-v-c4af1635":"",children:[Object(C.jsxs)("div",{className:d()(O.y,O.C),"data-v-c4af1635":"",children:[Object(C.jsxs)("div",{className:Se,onClick:_.bind(null,"camera"),"data-v-c4af1635":"",children:[Object(C.jsx)("i",{className:d()(y.a["stream-type-btn-icon"],"fas","fa-camera"),"data-v-c4af1635":""}),Object(C.jsx)(g.a,{amt:16,"data-v-c4af1635":""}),Object(C.jsx)(x.a,{color:"camera"===L?"#4285b9":"white",length:36,type:"horizontal",width:2,"data-v-c4af1635":""})]}),Object(C.jsxs)("div",{className:Se,onClick:_.bind(null,"obs"),"data-v-c4af1635":"",children:[Object(C.jsx)("img",{alt:"",className:y.a["obs-logo"],src:v,"data-v-c4af1635":""}),Object(C.jsx)(g.a,{amt:16,"data-v-c4af1635":""}),Object(C.jsx)(x.a,{color:"obs"===L?"#4285b9":"white",length:36,type:"horizontal",width:2,"data-v-c4af1635":""})]})]}),Object(C.jsx)("div",{className:O.k,"data-v-c4af1635":"",children:Q?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("p",{"data-v-c4af1635":"",children:" An error ocurred: "}),Object(C.jsx)("br",{"data-v-c4af1635":""}),Object(C.jsx)("p",{className:"error-container","data-v-c4af1635":"",children:Q}),Object(C.jsx)("button",{className:"shock-form-button",onClick:X.bind(null,null),"data-v-c4af1635":"",children:"Dismiss"})]}):G?Object(C.jsxs)(C.Fragment,{children:["obs"===L&&Object(C.jsx)("p",{className:"m-b-1","data-v-c4af1635":"",children:"You are ready to go! setup the stream with OBS and watch it from your profile"}),Object(C.jsx)("p",{"data-v-c4af1635":"",children:"Broadcaster:"}),Object(C.jsxs)("div",{className:"d-flex flex-align-center","data-v-c4af1635":"",children:[Object(C.jsx)(S.a,{name:"Streamer Url",value:T,disabled:!0,"data-v-c4af1635":""}),Object(C.jsx)("i",{className:de?"fas fa-check fa-lg m-1":"far fa-copy fa-lg m-1",onClick:ge,"data-v-c4af1635":""})]}),Object(C.jsx)("p",{"data-v-c4af1635":"",children:"Stream Key:"}),Object(C.jsxs)("div",{className:"d-flex flex-align-center","data-v-c4af1635":"",children:[Object(C.jsx)(S.a,{name:"Stream Key",value:G,disabled:!0,"data-v-c4af1635":""}),Object(C.jsx)("i",{className:ve?"fas fa-check fa-lg m-1":"far fa-copy fa-lg m-1",onClick:xe,"data-v-c4af1635":""})]}),Object(C.jsx)("div",{className:"flex-center","data-v-c4af1635":"",children:Object(C.jsx)("button",{onClick:ye,className:"shock-form-button-confirm","data-v-c4af1635":"",children:"STOP"})})]}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("input",{className:"input-field",type:"text",name:"paragraph",id:"paragraph",value:H,onChange:ke,"data-v-c4af1635":""}),Object(C.jsx)("button",{onClick:Oe,className:d()(O.C,"shock-form-button-confirm"),disabled:"camera"===L||se,"data-v-c4af1635":"",children:se?"...":"START NOW"})]})})]}),ae&&Object(C.jsxs)(p.a,{modalOpen:ae&&!R,toggleModal:me,contentStyle:{padding:"1rem"},"data-v-c4af1635":"",children:[Object(C.jsxs)("p",{"data-v-c4af1635":"",children:["The service from the default service provider will cost:"," ",Object(C.jsxs)("strong",{"data-v-c4af1635":"",children:[ae.servicePrice," sats"]})]}),Object(C.jsxs)("div",{className:O.y,"data-v-c4af1635":"",children:[Object(C.jsx)("button",{className:"shock-form-button m-1",onClick:me,"data-v-c4af1635":"",children:"Cancel"}),Object(C.jsx)("button",{className:"shock-form-button-confirm m-1",onClick:he,"data-v-c4af1635":"",children:"Confirm"})]})]}),R?Object(C.jsx)(b.a,{overlay:!0,fullScreen:!0,text:"Creating stream...","data-v-c4af1635":""}):null]})}}}]);
//# sourceMappingURL=25.53a00d88.chunk.js.map