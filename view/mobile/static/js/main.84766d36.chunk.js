(this.webpackJsonpaudio_play_mobile=this.webpackJsonpaudio_play_mobile||[]).push([[0],{260:function(e,t,n){e.exports=n(534)},495:function(e,t,n){},534:function(e,t,n){"use strict";n.r(t);n(261),n(311);var a=n(0),i=n.n(a),c=n(44),l=n.n(c),o=(n(495),n(15)),r=n(566),s=Object(r.a)({page:{position:"absolute",width:"100%",height:"100%",top:0,left:0}}),u=Object(r.a)((function(e){return{page:{position:"absolute",zIndex:0,width:"100%",height:"100%",top:0,left:0},header:{position:"absolute",height:"100%",width:"100%",top:0,overflowY:"scroll"},content:{position:"absolute",width:"100%",height:"calc(100% - 112px)",margin:"56px 0px",overflowY:"scroll"},root:{position:"absolute",width:"100%",bottom:0,flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),m=n(568),d=n(569),g=n(570),f=n(571),h=n(572),p=n(246),b=n.n(p),x=n(245),v=n.n(x),E=function(e){var t=e.config,n=e.navigateTo,c=u(),l=Object(a.useState)(null),r=Object(o.a)(l,2),s=r[0],p=r[1];Object(a.useEffect)((function(){p(t.chooseValue)}),[t]);return i.a.createElement("div",{className:c.page},i.a.createElement("div",{className:c.header},i.a.createElement(m.a,{position:"static"},i.a.createElement(d.a,null,i.a.createElement(g.a,{variant:"h6",className:c.title},"\u5f00\u653e\u97f3\u4e50\u5e73\u53f0")))),i.a.createElement("div",{className:c.content},t.content),i.a.createElement("div",{className:c.root},i.a.createElement(f.a,{value:s,onChange:function(e,t){n(t)}},i.a.createElement(h.a,{label:"\u9996\u9875",value:"home",icon:i.a.createElement(v.a,null)}),i.a.createElement(h.a,{label:"\u6536\u85cf\u5939",value:"list",icon:i.a.createElement(b.a,null)}))))},w=Object(r.a)((function(e){return{page:{position:"absolute",width:"100%",height:"100%",overflowY:"scroll"},content:function(e){return{width:"100%",boxSizing:"border-box",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",flexWrap:"wrap",paddingLeft:.05*e.clientWidth,paddingRight:.05*e.clientWidth,paddingBottom:50}},music_container:function(e){return{width:.18*e.clientWidth,height:.18*e.clientWidth,marginTop:.03*e.clientWidth,boxSizing:"border-box",padding:.015*e.clientWidth,overflow:"hidden"}},background:{position:"relative",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},background_img:{width:"100%",height:"100%",objectFit:"cover"},text:{position:"relative",width:"100%",height:"100%",top:"-100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.4)"},word:{width:"100%",textAlign:"center",fontSize:5,color:"white",margin:"1px 0px",opacity:.9}}})),j=Object(r.a)((function(e){return{carousel_page:{width:"100%",height:353},loading:{width:"100%",height:"100%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center","& > * + *":{marginLeft:e.spacing(2)}},carousel:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},header:{boxSizing:"border-box",width:"100%",height:50,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingLeft:e.spacing(4),paddingRight:e.spacing(4),backgroundColor:e.palette.background.default},img_container:{height:255,width:"100%",boxSizing:"border-box",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},img:{width:"100%",height:"100%",objectFit:"cover"},mobile_stepper:{boxSizing:"border-box",width:"100%"}}}));var _=function(e){fetch("/api/all_music",{method:"GET"}).then((function(e){return e.json()})).then((function(t){100===t.code&&"success"===t.status?e(t.data):(console.error(t),e(null))})).catch((function(t){console.error(t),e(null)}))},y=n(62),N=n(580),O=n(535),S=n(574),C=n(573),k=n(166),I=n.n(k),z=n(167),D=n.n(z),W=n(247),T=n.n(W),B=n(248),M=Object(B.autoPlay)(T.a),P=function(e){var t=e.lastMusic,n=j(),c=Object(y.a)(),l=Object(a.useState)(0),r=Object(o.a)(l,2),s=r[0],u=r[1];return i.a.createElement("div",{className:n.carousel_page},null===t?i.a.createElement("div",{className:n.loading},i.a.createElement(C.a,null)):i.a.createElement("div",{className:n.carousel},i.a.createElement(O.a,{square:!0,elevation:0,className:n.header},i.a.createElement(g.a,null,t[s].music_name.split("--")[0]),i.a.createElement(g.a,null,t[s].music_name.split("--")[1])),i.a.createElement(M,{axis:"rtl"===c.direction?"x-reverse":"x",index:s,onChangeIndex:function(e){u(e)},enableMouseEvents:!0},t.map((function(e,t){return i.a.createElement("div",{className:n.img_container,key:e.music_name},Math.abs(s-t)<=2?i.a.createElement("img",{className:n.img,src:"/public/image/"+e.music_name+".png",alt:e.music_name}):null)}))),i.a.createElement(N.a,{className:n.mobile_stepper,position:"static",variant:"dots",steps:5,activeStep:s,nextButton:i.a.createElement(S.a,{size:"small",onClick:function(){u((function(e){return e+1===5?0:e+1}))}},"Next","rtl"===c.direction?i.a.createElement(I.a,null):i.a.createElement(D.a,null)),backButton:i.a.createElement(S.a,{size:"small",onClick:function(){u((function(e){return 0===e?4:e-1}))}},"rtl"===c.direction?i.a.createElement(D.a,null):i.a.createElement(I.a,null),"Back")})))},H=function(e){var t=e.changeMusic,n=w({clientWidth:document.body.clientWidth}),c=Object(a.useState)(null),l=Object(o.a)(c,2),r=l[0],s=l[1],u=Object(a.useState)(null),m=Object(o.a)(u,2),d=m[0],g=m[1];return Object(a.useEffect)((function(){_((function(e){null!==e&&(s(e),g(e.slice(0,5)))}))}),[]),i.a.createElement("div",{className:n.page},i.a.createElement(P,{lastMusic:d}),null===r?"":i.a.createElement("div",{className:n.content},r.map((function(e,a){return i.a.createElement("div",{className:n.music_container,key:"music"+a,onClick:function(){return t(e.music_id)}},i.a.createElement("div",{className:n.background},i.a.createElement("img",{className:n.background_img,alt:"",src:"/public/image/"+e.music_name+".png"})),i.a.createElement("div",{className:n.text},i.a.createElement("div",{className:n.word},e.music_name.split("--")[0]),i.a.createElement("div",{className:n.word},e.music_name.split("--")[1])))}))))},L=Object(r.a)((function(e){return{page:{position:"absolute",width:"100%",height:"100%",overflow:"hidden"},loading:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},container:{position:"absolute",width:"100%",height:"100%",top:0,left:0},background:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},background_img:{width:"100%",height:"100%",objectFit:"cover",filter:"blur(15px)"},content:{position:"absolute",width:"100%",height:"100%",top:0,left:0,paddingBottom:50,paddingTop:15,boxSizing:"border-box",overflowY:"scroll",overflowX:"hidden"},list_img_container:{width:110,height:50,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},list_img:{width:"100%",height:"100%",objectFit:"cover"},list_name:{height:50,width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:e.typography.pxToRem(15)},list_container:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},list_msg:{width:"100%",boxSizing:"border-box",textAlign:"center",fontSize:"small",margin:"8px 0px"},list_music:{width:"100%"},list_loading:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},music_container:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},music:{width:"100%",marginTop:10,borderBottom:"1px dotted rgba(0, 0, 0, 0.6)",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},music_msg:{width:"66%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},music_name:{marginLeft:"10%"},signer_name:{marginRight:"10%"},music_button:{width:"34%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},a_button:{margin:"0px 5%"},box:{position:"absolute",width:"100%",height:"100%",top:0,left:0,zIndex:1500,overflow:"hidden"}}}));var A=function(e){fetch("/api/collect_list",{method:"GET"}).then((function(e){return e.json()})).then((function(t){100===t.code&&"success"===t.status?e(t.data):(console.error(t),e(null))})).catch((function(t){console.error(t),e(null)}))};var F=function(e,t){e?fetch(function(e){return"/api/list?id="+e}(e),{method:"GET"}).then((function(e){return e.json()})).then((function(e){100===e.code&&"success"===e.status?t(e.data):(console.error(e),t(null))})).catch((function(e){console.error(e),t(null)})):t(null)},G=n(579),R=n(576),V=n(575),Y=n(250),J=n.n(Y),X=n(251),q=n.n(X),$=n(123),K=n.n($),Q=Object(r.a)({page:{width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.6)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},container:function(e){return{width:.75*e.maxWidth,height:.6*e.maxHeight,backgroundColor:"white"}},loading:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},content:{width:"100%",height:"100%"},close:{position:"relative",top:-38,left:5},text:{position:"relative",width:"calc(100% - 40px)",boxSizing:"border-box",top:25,margin:"0 20px",paddingBottom:10,borderBottom:"1px dotted black",textAlign:"center",fontSize:25,fontWeight:"bold"},list_content:{position:"relative",width:"100%",height:310,overflowY:"scroll",overflowX:"hidden",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",boxSizing:"border-box",padding:"0px 30px"},list:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid black",boxSizing:"border-box",paddingBottom:5,marginTop:10},list_name:{fontSize:18},button:{fontSize:18},already_in:{padding:0,textAlign:"center"},not_in:{padding:0,textAlign:"center"},loading_data:function(e){return{position:"relative",width:.75*e.maxWidth,height:.6*e.maxHeight,top:.6*-e.maxHeight,overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",boxSizing:"border-box",backgroundColor:"rgba(0, 0, 0, 0.1)"}}});var U=function(e,t){e?fetch(function(e){return"/api/status?id="+e}(e),{method:"GET"}).then((function(e){return e.json()})).then((function(e){100===e.code&&"success"===e.status?t(e.data):(console.error(e),t(null))})).catch((function(e){console.error(e),t(null)})):t(null)};var Z=function(e,t,n){e&&t?fetch("/api/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({music_id:e,list_id:t})}).then((function(e){return e.json()})).then((function(e){100===e.code&&"success"===e.status?n(e.code):(console.error(e),n(null))})).catch((function(e){console.error(e),n(null)})):n(null)};var ee=function(e,t,n){e&&t?fetch("/api/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({music_id:e,list_id:t})}).then((function(e){return e.json()})).then((function(e){100===e.code&&"success"===e.status?n(e.code):(console.error(e),n(null))})).catch((function(e){console.error(e),n(null)})):n(null)},te=n(249),ne=n.n(te),ae=n(578),ie=n(577);function ce(e){return i.a.createElement(ie.a,Object.assign({elevation:6,variant:"filled"},e))}var le=function(e){var t=e.maxWidth,n=e.maxHeight,c=e.musicID,l=e.closeBox,r=Q({maxWidth:t,maxHeight:n}),s=Object(a.useState)(null),u=Object(o.a)(s,2),m=u[0],d=u[1],g=Object(a.useState)(null),f=Object(o.a)(g,2),h=f[0],p=f[1],b=i.a.useState(!1),x=Object(o.a)(b,2),v=x[0],E=x[1],w=Object(a.useState)(""),j=Object(o.a)(w,2),_=j[0],y=j[1],N=Object(a.useState)("success"),O=Object(o.a)(N,2),k=O[0],I=O[1],z=Object(a.useState)(!1),D=Object(o.a)(z,2),W=D[0],T=D[1];Object(a.useEffect)((function(){U(c,(function(e){p(e)})),A((function(e){d(e)}))}),[c]);var B=function(e,t){"clickaway"!==t&&E(!1)};return i.a.createElement("div",{className:r.page},i.a.createElement(ae.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:v,autoHideDuration:3e3,onClose:B},i.a.createElement(ce,{onClose:B,severity:k},_)),i.a.createElement("div",{className:r.container},null===h||null===m?i.a.createElement("div",{className:r.loading},i.a.createElement(C.a,{fontSize:"large"})):i.a.createElement("div",{className:r.content},i.a.createElement("div",{className:r.text},"\u6536\u85cf\u5939"),i.a.createElement("div",{className:r.close,onClick:function(){return l()}},i.a.createElement(ne.a,{fontSize:"large"})),i.a.createElement("div",{className:r.list_content},m.map((function(e,t){return i.a.createElement("div",{className:r.list,key:"list"+t},i.a.createElement("div",{className:r.list_name},e.list_name),i.a.createElement("div",{className:r.button},function(){for(var t=0;t<h.length;t++)if(h[t].list_id===e.list_id)return i.a.createElement(S.a,{className:r.already_in,variant:"outlined",onClick:function(){return t=c,n=e.list_id,T(!0),void ee(t,n,(function(e){100===e?U(t,(function(e){e?(p(e),I("success"),y("\u53d6\u6d88\u6536\u85cf\u6210\u529f\uff01"),E(!0),T(!1)):(I("warning"),y("\u83b7\u53d6\u6570\u636e\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01"),E(!0),T(!1))})):(I("error"),y("\u53d6\u6d88\u6536\u85cf\u5931\u8d25\uff01"),E(!0),T(!1))}));var t,n}},"\u5df2\u6536\u85cf");return i.a.createElement(S.a,{className:r.not_in,variant:"outlined",color:"primary",onClick:function(){return t=c,n=e.list_id,T(!0),void Z(t,n,(function(e){100===e?U(t,(function(e){e?(p(e),I("success"),y("\u6536\u85cf\u6210\u529f\uff01"),E(!0),T(!1)):(I("warning"),y("\u83b7\u53d6\u6570\u636e\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01"),E(!0),T(!1))})):(I("error"),y("\u6536\u85cf\u5931\u8d25\uff01"),E(!0),T(!1))}));var t,n}},"\u6536\u85cf")}()))}))),!0===W?i.a.createElement("div",{className:r.loading_data},i.a.createElement(C.a,null)):"")))},oe=function(e){var t=e.changeMusic,n=L(),c=Object(a.useState)(null),l=Object(o.a)(c,2),r=l[0],s=l[1],u=Object(a.useState)(null),m=Object(o.a)(u,2),d=m[0],g=m[1],f=Object(a.useState)(!1),h=Object(o.a)(f,2),p=h[0],b=h[1],x=Object(a.useState)(null),v=Object(o.a)(x,2),E=v[0],w=v[1],j=Object(a.useState)(null),_=Object(o.a)(j,2),y=_[0],N=_[1];Object(a.useEffect)((function(){A((function(e){s(e)}))}),[]);return i.a.createElement("div",{className:n.page},null===r?i.a.createElement("div",{className:n.loading},i.a.createElement(C.a,null)):i.a.createElement("div",{className:n.container},i.a.createElement("div",{className:n.background},!1===p?"":i.a.createElement("img",{className:n.background_img,alt:"",src:"/public/list/"+p+".png"})),i.a.createElement("div",{className:n.content},r.map((function(e,a){return i.a.createElement(G.a,{style:E,expanded:p===e.list_name,onChange:(c=e,function(e,t){var n=!!t&&c.list_name;b(n),!1===n?(w(null),g(null)):(w({opacity:"0.75"}),F(c.list_id,(function(e){g(e)})))}),key:"panel"+a},i.a.createElement(V.a,{expandIcon:i.a.createElement(J.a,null),"aria-controls":"panel"+a,id:"panel"+a},i.a.createElement("div",{className:n.list_img_container},i.a.createElement("img",{className:n.list_img,alt:"",src:"/public/list/"+e.list_name+".png"})),i.a.createElement("div",{className:n.list_name},e.list_name)),i.a.createElement(R.a,null,i.a.createElement("div",{className:n.list_container},i.a.createElement("div",{className:n.list_msg},e.list_msg),i.a.createElement("div",{className:n.list_music},null===d?"":i.a.createElement("div",{className:n.music_container},d.map((function(e,a){return i.a.createElement("div",{className:n.music,key:"music"+a},i.a.createElement("div",{className:n.music_msg},i.a.createElement("div",{className:n.music_name},e.music_name.split("--")[0]),i.a.createElement("div",{className:n.signer_name},e.music_name.split("--")[1])),i.a.createElement("div",{className:n.music_button},i.a.createElement(q.a,{className:n.a_button,onClick:function(){return t(e.music_id)}}),i.a.createElement(K.a,{className:n.a_button,fontSize:"large",onClick:function(){return t=e.music_id,void N(t);var t}})))})))))));var c}))),null!==y?i.a.createElement("div",{className:n.box},i.a.createElement(le,{maxWidth:window.screen.width,maxHeight:window.screen.height,musicID:y,closeBox:function(){N(null)}})):""))},re=Object(r.a)({page:{}}),se=Object(r.a)({page:{position:"absolute",zIndex:1e3,width:"100%",height:"100%",top:0,left:0,backgroundColor:"white"},container:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},music_container:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},background_img:{width:"100%",height:"100%",objectFit:"cover",filter:"blur(5px)",opacity:.65},music_img_content:{width:"100%",height:"75%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},img_content:function(e){return{width:.8*e.clientWidth,height:.8*e.clientWidth,boxSizing:"border-box",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:.4*e.clientWidth,overflow:"hidden"}},img:{width:"100%",height:"100%",objectFit:"cover"},music_content:{width:"100%",height:"25%",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},music_name:{width:"50%",textAlign:"center",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},slider:{width:"80%",boxSizing:"border-box"},buttons:{width:"100%",marginTop:"3%",boxSizing:"border-box",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},a_button:{margin:"0 4%"},box:{position:"absolute",width:"100%",height:"100%",top:0,left:0,zIndex:1500,overflow:"hidden"}}),ue=Object(r.a)({page:{position:"absolute",zIndex:1e3,width:50,height:50,bottom:60,right:25,borderRadius:25,overflow:"hidden"},container:{position:"absolute",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},background:{width:"100%",height:"100%",objectFit:"cover"},canvas:{position:"absolute",width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.15)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}),me=n(125),de=n.n(me),ge=n(124),fe=n.n(ge),he=function(e){var t=e.changeOnShow,n=e.musicOnPlay,a=e.playStatus,c=ue();return i.a.createElement("div",{className:c.page},null===n?i.a.createElement("div",{className:c.container},i.a.createElement(C.a,null)):i.a.createElement("div",null,i.a.createElement("div",{className:c.container},i.a.createElement("img",{className:c.background,alt:"",src:"/public/image/"+n.music_name+".png"})),i.a.createElement("div",{className:c.canvas,onClick:function(){return t()}},!0===a?i.a.createElement(fe.a,null):i.a.createElement(de.a,null))))},pe=n(581),be=n(253),xe=n.n(be),ve=n(252),Ee=n.n(ve),we=n(254),je=n.n(we),_e=function(e){var t=e.changeOnShow,n=e.musicOnPlay,c=e.sliderValue,l=e.changeValue,r=e.playStatus,s=e.changeStatus,u=e.nextMusic,m=e.lastMusic,d=e.maxLength,g=se({clientWidth:document.body.clientWidth}),f=Object(a.useState)(!1),h=Object(o.a)(f,2),p=h[0],b=h[1];return i.a.createElement("div",{className:g.page},null===n?i.a.createElement("div",{className:g.container},i.a.createElement(C.a,{fontSize:"large"})):i.a.createElement("div",{className:g.container},i.a.createElement("div",{className:g.container},i.a.createElement("img",{className:g.background_img,alt:"",src:"/public/image/"+n.music_name+".png"})),i.a.createElement("div",{className:g.music_container},i.a.createElement("div",{className:g.music_img_content},i.a.createElement("div",{className:g.img_content},i.a.createElement("img",{className:g.img,alt:"",src:"/public/image/"+n.music_name+".png"}))),i.a.createElement("div",{className:g.music_content},i.a.createElement("div",{className:g.music_name},i.a.createElement("div",null,n.music_name.split("--")[0]),i.a.createElement("div",null,n.music_name.split("--")[1])),i.a.createElement("div",{className:g.slider},i.a.createElement(pe.a,{max:d,min:0,color:"secondary",value:c,onChange:function(e,t){return l(t)},"aria-labelledby":"continuous-slider"})),i.a.createElement("div",{className:g.buttons},i.a.createElement("div",{className:g.a_button},i.a.createElement(K.a,{fontSize:"large",onClick:function(){b(!0)}})),i.a.createElement("div",{className:g.a_button},i.a.createElement(Ee.a,{fontSize:"large",onClick:function(){return m()}})),i.a.createElement("div",{className:g.a_button},!0===r?i.a.createElement(fe.a,{fontSize:"large",onClick:function(){return s()}}):i.a.createElement(de.a,{fontSize:"large",onClick:function(){return s()}})),i.a.createElement("div",{className:g.a_button},i.a.createElement(xe.a,{fontSize:"large",onClick:function(){return u()}})),i.a.createElement("div",{className:g.a_button},i.a.createElement(je.a,{fontSize:"large",onClick:function(){return t()}}))))),i.a.createElement("div",null,!0===p?i.a.createElement("div",{className:g.box},i.a.createElement(le,{maxWidth:window.screen.width,maxHeight:window.screen.height,musicID:n.music_id,closeBox:function(){b(!1)}})):"")))};var ye=function(e,t){e?fetch(function(e){return"/api/music?id="+e}(e),{method:"GET"}).then((function(e){return e.json()})).then((function(e){100===e.code&&"success"===e.status?t(e.data):(console.error(e),t(null))})).catch((function(e){console.error(e),t(null)})):t(null)},Ne=function(e){var t=e.musicOnPlay,n=re(),c=Object(a.useState)(!1),l=Object(o.a)(c,2),r=l[0],s=l[1],u=Object(a.useState)(null),m=Object(o.a)(u,2),d=m[0],g=m[1],f=Object(a.useState)(null),h=Object(o.a)(f,2),p=h[0],b=h[1],x=Object(a.useState)(!1),v=Object(o.a)(x,2),E=v[0],w=v[1],j=Object(a.useState)(0),_=Object(o.a)(j,2),y=_[0],N=_[1],O=Object(a.useState)(!0),S=Object(o.a)(O,2),C=S[0],k=S[1];Object(a.useEffect)((function(){p&&p.pause(),ye(t,(function(e){if(g(e),null!==e){var t=new Audio("/public/music/"+e.music_name+".mp3");t.addEventListener("ended",(function(){w(!1)})),t.addEventListener("timeupdate",(function(e){var t=e.path?e.path[0].currentTime:e.target.currentTime;N(parseInt(t))})),!0===C?(t.pause(),w(!1),k(!1)):(t.play(),w(!0)),b(t)}}))}),[t]);var I=function(){s(!r)};return i.a.createElement("div",{className:n.page},!1===r?i.a.createElement(he,{changeOnShow:I,musicOnPlay:d,playStatus:E}):i.a.createElement(_e,{changeOnShow:I,musicOnPlay:d,sliderValue:y,changeValue:function(e){p&&e&&(p.currentTime=e,p.play(),w(!0))},playStatus:E,changeStatus:function(){p&&(!0===E?(p.pause(),w(!1)):(p.play(),w(!0)))},nextMusic:function(){console.log("next music")},lastMusic:function(){console.log("last music")},maxLength:p?parseInt(p.duration):1}))},Oe=function(){var e=s(),t=Object(a.useState)(null),n=Object(o.a)(t,2),c=n[0],l=n[1],r=Object(a.useState)(null),u=Object(o.a)(r,2),m=u[0],d=u[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem("page");e||(e="home"),l(e);var t=window.localStorage.getItem("musicOnPlay");t&&d(t)}),[]);var g=function(e){e&&(window.localStorage.setItem("musicOnPlay",e),d(e))};return i.a.createElement("div",{className:e.page},i.a.createElement(E,{navigateTo:function(e){window.localStorage.setItem("page",e),l(e)},config:{chooseValue:c,content:function(){switch(c){case"home":return i.a.createElement(H,{changeMusic:g});case"list":return i.a.createElement(oe,{changeMusic:g});default:return null}}()}}),i.a.createElement(Ne,{musicOnPlay:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[260,1,2]]]);
//# sourceMappingURL=main.84766d36.chunk.js.map