(this.webpackJsonpaudio_play_client=this.webpackJsonpaudio_play_client||[]).push([[0],{277:function(e,t,a){e.exports=a.p+"static/media/logo2.d35b8452.png"},296:function(e,t,a){e.exports=a(612)},530:function(e,t,a){},531:function(e,t,a){},532:function(e,t,a){},533:function(e,t,a){},564:function(e,t,a){},565:function(e,t,a){},576:function(e,t,a){},577:function(e,t,a){},578:function(e,t,a){},589:function(e,t,a){},596:function(e,t,a){},607:function(e,t,a){},608:function(e,t,a){},609:function(e,t,a){},610:function(e,t,a){},611:function(e,t,a){},612:function(e,t,a){"use strict";a.r(t);a(297),a(346);var n=a(0),c=a.n(n),l=a(10),i=a.n(l),s=(a(530),a(6)),r=a(158),u=a(40),o=(a(531),a(532),a(614)),m=(a(533),a(270),a(613)),d=a(619),f=a(277),p=a.n(f),g=m.a.Header,E=m.a.Content,v=m.a.Sider,h=function(e){var t=e.config,a=Object(n.useState)(null),l=Object(s.a)(a,2),i=l[0],u=l[1];Object(n.useEffect)((function(){!1===t.haveSider?u(t.mainContent):t.sider.forEach((function(e){e.key===t.defaultSelectedSiderKey&&u(e.content)}))}),[t]);return c.a.createElement(m.a,{className:"title-bar"},c.a.createElement(g,{className:"header"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{className:"logo-image query-image",alt:"",src:p.a})),c.a.createElement(d.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[t.defaultSelectedHeaderKey]},t.header.map((function(e){return c.a.createElement(d.a.Item,{key:e.key,className:"top-menu-item"},c.a.createElement(r.b,{to:e.link},e.title))})))),c.a.createElement(E,{className:"content"},c.a.createElement(m.a,{className:"content-box"},c.a.createElement("div",null,t.haveSider?c.a.createElement(v,{className:"sider",width:200},c.a.createElement(d.a,{className:"menu-box",mode:"inline",defaultSelectedKeys:[t.defaultSelectedSiderKey]},t.sider.map((function(e,a){return c.a.createElement(d.a.Item,{key:e.key,onClick:function(){return function(e){u(t.sider[e].content)}(a)}},e.name)})))):"",t.haveNew?c.a.createElement("div",{className:"have-new-container"},t.handleHaveNew):""),c.a.createElement(E,{className:"main-content"},null===i?c.a.createElement("div",{className:"main-content-loading"},c.a.createElement(o.a,{size:"large"})):i))))},N=a(621),b=a(622),S=a(623),y={header:[{title:c.a.createElement("div",null,c.a.createElement(N.a,{style:{fontSize:"20px"}}),"\u4e3b\u9875"),key:"header1",link:"/home"},{title:c.a.createElement("div",null,c.a.createElement(b.a,{style:{fontSize:"20px"}}),"\u6536\u85cf\u5939"),key:"header2",link:"/list"},{title:c.a.createElement("div",null,c.a.createElement(S.a,{style:{fontSize:"20px"}}),"\u4e0a\u4f20\u97f3\u4e50"),key:"header3",link:"/upload"}]};a(564);var O=function(e){fetch("/api/all_music",{method:"GET"}).then((function(e){return e.json()})).then((function(t){100===t.code&&"success"===t.status?e(t.data):(console.error(t),e(null))})).catch((function(t){console.error(t),e(null)}))},j=(a(565),a(615));var C=function(e){fetch("/api/last_music",{method:"GET"}).then((function(e){return e.json()})).then((function(t){100===t.code&&"success"===t.status?e(t.data):(console.error(t),e(null))})).catch((function(t){console.error(t),e(null)}))},w=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){C((function(e){l(e)}))}),[]),c.a.createElement("div",{className:"home-carousel-container"},null===a?c.a.createElement("div",{className:"home-carousel-loading"},c.a.createElement(o.a,{size:"large"})):c.a.createElement(j.a,{autoplay:!0},a.map((function(e){return c.a.createElement("div",{className:"carousel-piece",key:"carousel"+e.music_id},c.a.createElement("img",{className:"carousel-piece-image query-image",src:"/public/image/"+e.music_name+".png",alt:e.music_name}))}))))},_=function(e){var t=e.changeMusic,a=Object(n.useState)(null),l=Object(s.a)(a,2),i=l[0],r=l[1];return Object(n.useEffect)((function(){O((function(e){r(e)}))}),[]),c.a.createElement("div",{className:"home-music-content-container"},null===i?"":c.a.createElement("div",{className:"home-music-content"},i.map((function(e){return c.a.createElement("div",{className:"home-music-content-music",key:"music"+e.music_id,onClick:function(){return t(e.music_id)}},c.a.createElement("div",{className:"music-content-image-container"},c.a.createElement("img",{className:"music-content-image query-image",src:"/public/image/"+e.music_name+".png",alt:e.music_name})),c.a.createElement("div",{className:"music-content-text-container"},c.a.createElement("div",{className:"music-content-text-music"},e.music_name.split("--")[0]),c.a.createElement("div",{className:"music-content-text-singer"},e.music_name.split("--")[1])))}))))},k=function(e){var t=e.changeMusic;return c.a.createElement("div",{className:"home-content-container"},c.a.createElement(w,null),c.a.createElement(_,{changeMusic:t}))},x=function(e){var t=e.changeMusic,a=Object(n.useState)(null),l=Object(s.a)(a,2),i=l[0],r=l[1];return Object(n.useEffect)((function(){var e=Object.assign({defaultSelectedHeaderKey:"header1",haveSider:!1,mainContent:c.a.createElement(k,{changeMusic:t}),haveNew:!1},y);r(e)}),[t]),c.a.createElement("div",{className:"page-home"},null===i?c.a.createElement("div",{className:"home-page-loading"},c.a.createElement(o.a,{size:"large"})):c.a.createElement(h,{config:i}))};a(576);var U=function(e){fetch("/api/collect_list",{method:"GET"}).then((function(e){return e.json()})).then((function(t){100===t.code&&"success"===t.status?e(t.data):(console.error(t),e(null))})).catch((function(t){console.error(t),e(null)}))};a(577);var L=function(e,t){e?fetch(function(e){return"/api/list?id="+e}(e),{method:"GET"}).then((function(e){return e.json()})).then((function(e){100===e.code&&"success"===e.status?t(e.data):(console.error(e),t(null))})).catch((function(e){console.error(e),t(null)})):t(null)},z=(a(578),a(620));var M=function(e,t){e?fetch(function(e){return"/api/status?id="+e}(e),{method:"GET"}).then((function(e){return e.json()})).then((function(e){100===e.code&&"success"===e.status?t(e.data):(console.error(e),t(null))})).catch((function(e){console.error(e),t(null)})):t(null)};var T=function(e,t,a){e&&t?fetch("/api/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({music_id:e,list_id:t})}).then((function(e){return e.json()})).then((function(e){100===e.code&&"success"===e.status?a(e.code):(console.error(e),a(null))})).catch((function(e){console.error(e),a(null)})):a(null)};var I=function(e,t,a){e&&t?fetch("/api/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({music_id:e,list_id:t})}).then((function(e){return e.json()})).then((function(e){100===e.code&&"success"===e.status?a(e.code):(console.error(e),a(null))})).catch((function(e){console.error(e),a(null)})):a(null)},P=a(624),H=function(e){var t=e.music_msg,a=e.closeCheckBox,l=Object(n.useState)(null),i=Object(s.a)(l,2),r=i[0],u=i[1],m=Object(n.useState)(null),d=Object(s.a)(m,2),f=d[0],p=d[1],g=Object(n.useState)(null),E=Object(s.a)(g,2),v=E[0],h=E[1];Object(n.useEffect)((function(){U((function(e){h(e)})),M(t.music_id,(function(e){u(e)})),p(t)}),[t]);return c.a.createElement("div",{className:"CheckStatus-page"},c.a.createElement("div",{className:"CheckStatus-container"},c.a.createElement("div",{className:"CheckStatus-close-box",onClick:function(){return a()}},c.a.createElement(P.a,{style:{fontSize:"28px"}})),null===f?"":c.a.createElement("div",{className:"CheckStatus-music-name"},f.music_name),null===r||null===f||null===v?c.a.createElement("div",{className:"CheckStatus-loading"},c.a.createElement(o.a,{size:"large"})):c.a.createElement("div",{className:"CheckStatus-content"},v.map((function(e,t){for(var a=0;a<r.length;a++)if(e.list_id===r[a].list_id)return c.a.createElement("div",{className:"CheckStatus-item",key:"\u6536\u85cf\u5939"+t},c.a.createElement("div",{className:"CheckStatus-list-name"},e.list_name),c.a.createElement("div",{className:"CheckStatus-list-status in-list",onClick:function(){return t=f.music_id,a=e.list_id,void I(t,a,(function(e){if(null!==e){z.a.success("\u79fb\u51fa\u6536\u85cf\u5939\u6210\u529f!");var t=r.slice();r.forEach((function(e,n){e.list_id===a&&t.splice(n,1)})),u(t)}else z.a.error("\u79fb\u51fa\u6536\u85cf\u5939\u5931\u8d25!")}));var t,a}},"\u5df2\u6536\u85cf"));return c.a.createElement("div",{className:"CheckStatus-item",key:"\u6536\u85cf\u5939"+t},c.a.createElement("div",{className:"CheckStatus-list-name"},e.list_name),c.a.createElement("div",{className:"CheckStatus-list-status not-in-list",onClick:function(){return a=f.music_id,n=e.list_id,c=t,void T(a,n,(function(e){if(null!==e){z.a.success("\u6dfb\u52a0\u6536\u85cf\u5939\u6210\u529f!");var t=r.slice();t.push(v[c]),u(t)}else z.a.error("\u6dfb\u52a0\u6536\u85cf\u5939\u5931\u8d25!")}));var a,n,c}},"\u6536\u85cf"))})))))};a(589);var F=function(e,t,a){e&&t?fetch("/api/update_list_msg",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({list_id:e,list_new_msg:t})}).then((function(e){return e.json()})).then((function(e){100===e.code&&"success"===e.status?a(e.code):(console.error(e),a(null))})).catch((function(e){console.error(e),a(null)})):a(null)};var G=function(e,t){e&&1===e.getAll("list_image").length?fetch("/api/upload_list_image",{method:"POST",body:e}).then((function(e){return e.json()})).then((function(e){100===e.code&&"success"===e.status?t(e.code):(console.error(e),t(null))})).catch((function(e){console.error(e),t(null)})):t(null)},B=a(618),q=a(90),A=a(625),D=a(626),K=B.a.TextArea,R=function(e){var t=e.list_msg,a=e.closeUpdateBox,l=Object(n.useState)(null),i=Object(s.a)(l,2),r=i[0],u=i[1],o=Object(n.useState)(!1),m=Object(s.a)(o,2),d=m[0],f=m[1],p=Object(n.useState)(!1),g=Object(s.a)(p,2),E=g[0],v=g[1];return c.a.createElement("div",{className:"UpdateListMsg-page"},c.a.createElement("div",{className:"UpdateListMsg-content"},c.a.createElement(K,{value:r,rows:10,maxLength:200,onInput:function(e){return t=e.target.value,void u(t);var t}})),c.a.createElement("div",{className:"UpdateListMsg-buttons"},c.a.createElement(q.a,{type:"primary",shape:"round",loading:d,icon:c.a.createElement(A.a,{style:{fontSize:"20px"}}),size:"large",onClick:function(){f(!0),function(){if(!t)return z.a.error("\u672a\u77e5\u9519\u8bef\uff01"),void f(!1);if(!r)return z.a.error("\u7b80\u4ecb\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a\uff01"),void f(!1);var e=t.list_id;F(e,r,(function(e){100===e?(f(!1),v(!0),z.a.success("\u66f4\u65b0\u6536\u85cf\u5939\u7b80\u4ecb\u6210\u529f\uff01")):(f(!1),z.a.error("\u66f4\u65b0\u6536\u85cf\u5939\u7b80\u4ecb\u5931\u8d25\uff01"))}))}()}},"\u66f4\u65b0\u7b80\u4ecb"),c.a.createElement(q.a,{type:"primary",shape:"round",size:"large",onClick:function(){return a(E)}},"\u53d6\u6d88")))},J=function(e){var t=e.list_msg,a=e.closeUpdateBox,l=Object(n.useState)(null),i=Object(s.a)(l,2),r=i[0],u=i[1],o=Object(n.useState)(null),m=Object(s.a)(o,2),d=m[0],f=m[1],p=Object(n.useState)(!1),g=Object(s.a)(p,2),E=g[0],v=g[1],h=Object(n.useState)(!1),N=Object(s.a)(h,2),b=N[0],S=N[1];return c.a.createElement("div",{className:"UpdateListImage-page"},c.a.createElement("div",{className:"UpdateListImage-content"},c.a.createElement("div",{className:"UpdateListImage-image-on-show"},null===d?"":c.a.createElement("img",{className:"UpdateListImage-image-content query-image",alt:"",src:d})),c.a.createElement("div",{className:"UpdateListImage-content-alert"},c.a.createElement("div",{className:"UpdateListImage-content-alert-icon"},c.a.createElement(D.a,{style:{fontSize:"50px"}})),c.a.createElement("div",{className:"UpdateListImage-content-alert-text"},"\u4e0a\u4f20\u56fe\u7247",c.a.createElement("div",null,"(PNG\u683c\u5f0f)"))),c.a.createElement("input",{type:"file",onChange:function(e){return function(e){if(e&&"image/png"===e.type){u(e),z.a.success("\u56fe\u7247\u6587\u4ef6\u5df2\u9009\u4e2d\u4e3a "+e.name);var t=new FileReader;t.readAsDataURL(e),t.onload=function(e){f(e.target.result)}}else u(null),z.a.error("\u56fe\u7247\u6587\u4ef6\u5fc5\u987b\u662fPNG\u683c\u5f0f\u6587\u4ef6\uff01")}(e.target.files[0])}})),c.a.createElement("div",{className:"UpdateListImage-button"},c.a.createElement(q.a,{type:"primary",shape:"round",loading:E,icon:c.a.createElement(A.a,{style:{fontSize:"20px"}}),size:"large",onClick:function(){v(!0),function(){if(!t)return z.a.error("\u672a\u77e5\u9519\u8bef\uff01"),void v(!1);if(!r)return z.a.error("\u8bf7\u9009\u62e9\u56fe\u7247\u6587\u4ef6\uff01"),void v(!1);var e=new File([r],t.list_name+".png",{type:r.type}),a=new FormData;a.append("list_image",e),G(a,(function(e){100===e?(v(!1),S(!0),z.a.success("\u66f4\u65b0\u6536\u85cf\u5939\u56fe\u7247\u6210\u529f\uff01")):(v(!1),z.a.error("\u66f4\u65b0\u6536\u85cf\u5939\u56fe\u7247\u5931\u8d25\uff01"))}))}()}},"\u66f4\u65b0\u56fe\u7247"),c.a.createElement(q.a,{type:"primary",shape:"round",size:"large",onClick:function(){return a(b)}},"\u53d6\u6d88")))},W=function(e){var t=e.list_msg,a=e.closeUpdateBox,l=Object(n.useState)(1),i=Object(s.a)(l,2),r=i[0],u=i[1];return c.a.createElement("div",{className:"UpdateList-page"},c.a.createElement("div",{className:"UpdateList-container"},c.a.createElement("div",{className:"UpdateList-choose-title"},c.a.createElement("div",{className:"UpdateList-update-image",style:1===r?{backgroundColor:"white"}:{backgroundColor:"rgba(24, 144, 255, 0.75)"},onClick:function(){return u(1)}},"\u66f4\u65b0\u56fe\u7247"),c.a.createElement("div",{className:"UpdateList-update-msg",style:2===r?{backgroundColor:"white"}:{backgroundColor:"rgba(24, 144, 255, 0.75)"},onClick:function(){return u(2)}},"\u66f4\u65b0\u7b80\u4ecb")),c.a.createElement("div",{className:"UpdateList-box"},1===r?c.a.createElement(J,{list_msg:t,closeUpdateBox:a}):c.a.createElement(R,{list_msg:t,closeUpdateBox:a}))))},$=a(627),Q=a(628),V=a(629),X=function(e){var t=e.listMsg,a=void 0===t?null:t,l=e.changeMusic,i=Object(n.useState)(null),r=Object(s.a)(i,2),u=r[0],m=r[1],d=Object(n.useState)(null),f=Object(s.a)(d,2),p=f[0],g=f[1],E=Object(n.useState)(null),v=Object(s.a)(E,2),h=v[0],N=v[1];Object(n.useEffect)((function(){L(a.list_id,(function(e){m(e)}))}),[a]);return c.a.createElement("div",{className:"list-content-container"},c.a.createElement("div",{className:"list-content-background-container"},c.a.createElement("img",{className:"list-content-background query-image",src:"/public/list/"+a.list_name+".png",alt:a.list_name})),c.a.createElement("div",{className:"list-content-opacity"}),c.a.createElement("div",{className:"list-content-list-container"},c.a.createElement("div",{className:"list-content-list-msg"},c.a.createElement("img",{className:"list-content-list-image",src:"/public/list/"+a.list_name+".png",alt:a.list_name}),c.a.createElement("div",{className:"list-content-list-text"},c.a.createElement("div",{className:"list-content-list-name"},a.list_name,c.a.createElement("div",{className:"list-content-edit-icon"},c.a.createElement($.a,{className:"list-content-edit-icon-button",style:{fontSize:"20px"},onClick:function(){N(a)}}))),c.a.createElement("div",{className:"list-content-list-msg-text"},a.list_msg))),c.a.createElement("div",{className:"list-content-music-container"},null===u?c.a.createElement("div",{className:"list-content-music-loading"},c.a.createElement(o.a,{size:"large"})):c.a.createElement("div",{className:"list-content-music-content"},u.map((function(e){return c.a.createElement("div",{className:"list-content-music",key:"list_music"+e.music_id},c.a.createElement("div",{className:"list-content-music-msg"},c.a.createElement("div",{className:"list-content-music-name"},e.music_name.split("--")[0]),c.a.createElement("div",{className:"list-content-music-signer"},e.music_name.split("--")[1])),c.a.createElement("div",{className:"list-content-music-button"},c.a.createElement("div",{className:"list-content-button-container"},c.a.createElement("div",{className:"list-content-button",onClick:function(){return l(e.music_id)}},c.a.createElement(Q.a,{style:{fontSize:"25px"}})),c.a.createElement("div",{className:"list-content-button",onClick:function(){g(e)}},c.a.createElement(V.a,{style:{fontSize:"28px"}})))))}))))),null===p?"":c.a.createElement("div",{className:"list-content-check-status"},c.a.createElement(H,{music_msg:p,closeCheckBox:function(){L(a.list_id,(function(e){m(e)})),g(null)}})),null===h?"":c.a.createElement("div",{className:"list-content-update-msg"},c.a.createElement(W,{list_msg:h,closeUpdateBox:function(e){N(null),!0===e&&window.location.reload()}})))},Y=(a(596),a(616)),Z=a(630);var ee=function(e,t,a){e&&t?fetch("/api/new_list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({list_name:e,list_msg:t})}).then((function(e){return e.json()})).then((function(e){100===e.code&&"success"===e.status?a(e.code):(console.error(e),a(null))})).catch((function(e){console.error(e),a(null)})):a(null)},te=B.a.TextArea,ae=function(e){var t=e.handleHideContainer,a=Object(n.useState)(null),l=Object(s.a)(a,2),i=l[0],r=l[1],u=Object(n.useState)(null),o=Object(s.a)(u,2),m=o[0],d=o[1],f=Object(n.useState)(null),p=Object(s.a)(f,2),g=p[0],E=p[1],v=Object(n.useState)(null),h=Object(s.a)(v,2),N=h[0],b=h[1],S=Object(n.useState)(!1),y=Object(s.a)(S,2),O=y[0],j=y[1],C=Object(n.useState)(!1),w=Object(s.a)(C,2),_=w[0],k=w[1],x=Object(n.useState)(!1),U=Object(s.a)(x,2),L=U[0],M=U[1];Object(n.useEffect)((function(){r(null),d(null),E(null),b(null),j(!1),k(!1),M(!1)}),[]);return c.a.createElement("div",{className:"NewListContainer-page"},c.a.createElement("div",{className:"NewListContainer-page-container"},c.a.createElement("div",{className:"NewListContainer-page-title"},"\u65b0\u5efa\u6536\u85cf\u5939"),c.a.createElement("div",{className:"NewListContainer-content"},c.a.createElement("div",{className:"NewListContainer-text-content"},c.a.createElement("div",{className:"NewListContainer-input-list-name"},c.a.createElement("div",null,"\u6536\u85cf\u5939\u540d"),c.a.createElement(B.a,{value:i,maxLength:20,onChange:function(e){return t=e.target.value,void r(t);var t}})),c.a.createElement("div",{className:"NewListContainer-input-list-msg"},c.a.createElement("div",null,"\u6536\u85cf\u5939\u7b80\u4ecb"),c.a.createElement(te,{value:m,rows:4,maxLength:200,onChange:function(e){return t=e.target.value,void d(t);var t}}))),c.a.createElement("div",{className:"NewListContainer-image-content"},c.a.createElement("div",{className:"NewListContainer-image-upload-review"},null===g?"":c.a.createElement("img",{className:"NewListContainer-image-upload-review-pic query-image",alt:"",src:N})),c.a.createElement("div",{className:"NewListContainer-image-content-text"},c.a.createElement("div",{className:"NewListContainer-image-content-text-icon"},c.a.createElement(D.a,{style:{fontSize:"50px"}})),c.a.createElement("div",{className:"NewListContainer-image-content-alert"},"\u4e0a\u4f20\u56fe\u7247",c.a.createElement("div",null,"(PNG\u683c\u5f0f)"))),c.a.createElement("input",{type:"file",onChange:function(e){return function(e){if(e&&"image/png"===e.type){E(e),z.a.success("\u56fe\u7247\u6587\u4ef6\u5df2\u9009\u4e2d\u4e3a "+e.name);var t=new FileReader;t.readAsDataURL(e),t.onload=function(e){b(e.target.result)}}else E(null),z.a.error("\u56fe\u7247\u6587\u4ef6\u5fc5\u987b\u662fPNG\u683c\u5f0f\u6587\u4ef6\uff01")}(e.target.files[0])}}))),c.a.createElement("div",{className:"NewListContainer-button"},c.a.createElement(q.a,{type:"primary",shape:"round",loading:_,icon:c.a.createElement(A.a,{style:{fontSize:"20px"}}),size:"large",onClick:function(){i?g?(m||d("\u8be5\u6536\u85cf\u5939\u672a\u586b\u5199\u7b80\u4ecb..."),j(!0),k(!0)):z.a.error("\u8bf7\u9009\u62e9\u56fe\u7247\u6587\u4ef6\uff01"):z.a.error("\u8bf7\u586b\u5199\u6536\u85cf\u5939\u540d\u79f0\uff01")}},"\u521b\u5efa\u6536\u85cf\u5939"),c.a.createElement(q.a,{type:"primary",shape:"round",size:"large",onClick:function(){return t(L)}},"\u53d6\u6d88"),c.a.createElement(Y.a,{title:"\u786e\u8ba4\u521b\u5efa\u6536\u85cf\u5939",visible:O,onOk:function(){j(!1),function(){var e=new File([g],i+".png",{type:g.type}),t=new FormData;t.append("list_image",e),ee(i,m,(function(e){100===e?G(t,(function(e){100===e?(k(!1),z.a.success("\u521b\u5efa\u6536\u85cf\u5939\u6210\u529f\uff01")):(k(!1),z.a.warning("\u56fe\u7247\u4e0a\u4f20\u5931\u8d25\uff01"))})):(k(!1),z.a.error("\u521b\u5efa\u6536\u85cf\u5939\u5931\u8d25\uff01"))})),r(null),d(null),E(null),b(null),M(!0)}()},onCancel:function(){j(!1),k(!1)}},c.a.createElement("p",null,'\u786e\u8ba4\u521b\u5efa\u6536\u85cf\u5939 "',i,'" ?'),c.a.createElement("p",null,'"',i,'" \u7684\u7b80\u4ecb\u4e3a: ',m),c.a.createElement("p",null,"\u540c\u65f6\u4e0a\u4f20\u6587\u4ef6: ",i+".png")))))},ne=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){l(!1)}),[]);return c.a.createElement("div",{className:"CreateNewList-page-container"},c.a.createElement("div",{className:"CreateNewList-page",onClick:function(){l(!0)}},c.a.createElement(Z.a,{style:{fontSize:"25px"}}),"\u65b0\u5efa\u6536\u85cf\u5939"),!1===a?"":c.a.createElement("div",{className:"CreateNewList-container"},c.a.createElement(ae,{handleHideContainer:function(e){l(!1),!0===e&&window.location.reload()}})))},ce=function(e){var t=e.changeMusic,a=Object(n.useState)(null),l=Object(s.a)(a,2),i=l[0],r=l[1];return Object(n.useEffect)((function(){U((function(e){var a=[];null!==e&&e.forEach((function(e,n){a.push({name:c.a.createElement("div",null,c.a.createElement("img",{className:"sider-image query-image",src:"/public/list/"+e.list_name+".png",alt:""}),e.list_name),id:e.list_id,key:"sider"+n,content:c.a.createElement(X,{listMsg:e,changeMusic:t})})}));var n=Object.assign({defaultSelectedHeaderKey:"header2",haveSider:!0,sider:a,defaultSelectedSiderKey:"sider0",haveNew:!0,handleHaveNew:c.a.createElement(ne,null)},y);r(n)}))}),[t]),c.a.createElement("div",{className:"page-list"},null===i?c.a.createElement("div",{className:"list-page-loading"},c.a.createElement(o.a,{size:"large"})):c.a.createElement(h,{config:i}))},le=(a(607),a(608),a(631)),ie=a(632);var se=function(e,t){e&&1===e.getAll("music_file").length?fetch("/api/upload_music",{method:"POST",body:e}).then((function(e){return e.json()})).then((function(e){100===e.code&&"success"===e.status?t(e.code):(console.error(e),t(null))})).catch((function(e){console.error(e),t(null)})):t(null)};var re=function(e,t){e&&1===e.getAll("music_image").length?fetch("/api/upload_music_image",{method:"POST",body:e}).then((function(e){return e.json()})).then((function(e){100===e.code&&"success"===e.status?t(e.code):(console.error(e),t(null))})).catch((function(e){console.error(e),t(null)})):t(null)},ue=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(null),r=Object(s.a)(i,2),u=r[0],o=r[1],m=Object(n.useState)(null),d=Object(s.a)(m,2),f=d[0],p=d[1],g=Object(n.useState)(null),E=Object(s.a)(g,2),v=E[0],h=E[1],N=Object(n.useState)(null),b=Object(s.a)(N,2),S=b[0],y=b[1],O=Object(n.useState)(!1),j=Object(s.a)(O,2),C=j[0],w=j[1],_=Object(n.useState)(!1),k=Object(s.a)(_,2),x=k[0],U=k[1];Object(n.useEffect)((function(){l(null),o(null),p(null),h(null),y(null),w(!1),U(!1)}),[]);return c.a.createElement("div",{className:"UploadContent-page"},c.a.createElement("div",{className:"UploadContent-music-file"},c.a.createElement("div",{className:"UploadContent-music-file-alert"},c.a.createElement("div",{className:"UploadContent-music-file-alert-icon"},c.a.createElement(le.a,{style:{fontSize:"75px"}})),c.a.createElement("div",{className:"UploadContent-music-file-alert-text"},c.a.createElement("div",{className:"first-text"},"\u4e0a\u4f20\u97f3\u9891\u6587\u4ef6"),c.a.createElement("div",{className:"second-text"},"\u70b9\u51fb\u6216\u8005\u62d6\u62fd\u4e0a\u4f20\uff0c\u4ec5\u652f\u6301\u5355\u6587\u4ef6\u4e0a\u4f20\uff0c\u6587\u4ef6\u89c4\u5b9a\u4e3aMP3\u683c\u5f0f\u6587\u4ef6"))),c.a.createElement("input",{type:"file",onChange:function(e){var t;(t=e.target.files[0])&&"audio/mp3"===t.type?(l(t),z.a.success("\u97f3\u9891\u6587\u4ef6\u5df2\u9009\u4e2d\u4e3a "+t.name)):(l(null),z.a.error("\u97f3\u9891\u6587\u4ef6\u5fc5\u987b\u662fMP3\u683c\u5f0f\u6587\u4ef6\uff01"))}})),c.a.createElement("div",{className:"UploadContent-music-info"},c.a.createElement("div",{className:"UploadContent-music-name"},c.a.createElement("div",{className:"UploadContent-music-name-alert"},"\u8bf7\u8f93\u5165\u97f3\u4e50\u540d"),c.a.createElement(B.a,{value:u,maxLength:20,onChange:function(e){return t=e.target.value,void o(t);var t}}),c.a.createElement("div",{className:"UploadContent-music-name-alert"},"\u8bf7\u8f93\u5165\u6b4c\u624b\u540d"),c.a.createElement(B.a,{value:f,maxLength:10,onChange:function(e){return t=e.target.value,void p(t);var t}})),c.a.createElement("div",{className:"UploadContent-music-image"},c.a.createElement("div",{className:"Upload-music-image-on-show"},null===S?"":c.a.createElement("img",{className:"Upload-music-image-on-show-pic query-image",src:S,alt:""})),c.a.createElement("div",{className:"UploadContent-music-image-alert"},c.a.createElement("div",{className:"UploadContent-music-image-alert-icon"},c.a.createElement(D.a,{style:{fontSize:"50px"}})),c.a.createElement("div",{className:"UploadContent-music-image-alert-text"},"\u4e0a\u4f20\u56fe\u7247",c.a.createElement("div",null,"(PNG\u683c\u5f0f)"))),c.a.createElement("input",{type:"file",onChange:function(e){return function(e){if(e&&"image/png"===e.type){h(e),z.a.success("\u56fe\u7247\u6587\u4ef6\u5df2\u9009\u4e2d\u4e3a "+e.name);var t=new FileReader;t.readAsDataURL(e),t.onload=function(e){y(e.target.result)}}else h(null),z.a.error("\u56fe\u7247\u6587\u4ef6\u5fc5\u987b\u662fPNG\u683c\u5f0f\u6587\u4ef6\uff01")}(e.target.files[0])}}))),c.a.createElement("div",{className:"UploadContent-submit-button"},c.a.createElement(q.a,{type:"primary",shape:"round",loading:x,icon:c.a.createElement(ie.a,{style:{fontSize:"20px"}}),size:"large",onClick:function(){a?v?u?f?(w(!0),U(!0)):z.a.error("\u8bf7\u8f93\u5165\u6b4c\u624b\u540d\uff01"):z.a.error("\u8bf7\u8f93\u5165\u97f3\u4e50\u540d\uff01"):z.a.error("\u8bf7\u9009\u62e9\u56fe\u7247\u6587\u4ef6\uff01"):z.a.error("\u8bf7\u9009\u62e9\u97f3\u9891\u6587\u4ef6\uff01")}},"\u4e0a\u4f20\u97f3\u4e50"),c.a.createElement(Y.a,{title:"\u786e\u8ba4\u4e0a\u4f20",visible:C,onOk:function(){w(!1),function(){var e=u+"--"+f,t=new File([a],e+".mp3",{type:a.type}),n=new File([v],e+".png",{type:v.type}),c=new FormData;c.append("music_file",t);var i=new FormData;i.append("music_image",n),se(c,(function(e){100===e?re(i,(function(e){100===e?(U(!1),z.a.success("\u97f3\u4e50\u4e0a\u4f20\u6210\u529f\uff01")):(U(!1),z.a.warning("\u56fe\u7247\u4e0a\u4f20\u5931\u8d25\uff01"))})):(U(!1),z.a.error("\u97f3\u4e50\u4e0a\u4f20\u5931\u8d25\uff01"))})),l(null),o(null),p(null),h(null),y(null)}()},onCancel:function(){w(!1),U(!1)}},c.a.createElement("p",null,'\u786e\u8ba4\u4e0a\u4f20\u97f3\u4e50 "',u+"--"+f,'" ?'),c.a.createElement("p",null,"\u540c\u65f6\u4e0a\u4f20\u4ee5\u4e0b\u6587\u4ef6:"),c.a.createElement("p",null,u+"--"+f+".mp3"),c.a.createElement("p",null,u+"--"+f+".png"))))},oe=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e=Object.assign({defaultSelectedHeaderKey:"header3",haveSider:!1,mainContent:c.a.createElement(ue,null),haveNew:!1},y);l(e)}),[]),c.a.createElement("div",{className:"page-upload"},null===a?c.a.createElement("div",{className:"upload-page-loading"},c.a.createElement(o.a,{size:"large"})):c.a.createElement(h,{config:a}))};var me=function(e,t){e?fetch(function(e){return"/api/music?id="+e}(e),{method:"GET"}).then((function(e){return e.json()})).then((function(e){100===e.code&&"success"===e.status?t(e.data):(console.error(e),t(null))})).catch((function(e){console.error(e),t(null)})):t(null)},de=(a(609),a(617)),fe=(a(610),function(e){var t=e.music_msg,a=e.closeUpdateBox,l=Object(n.useState)(null),i=Object(s.a)(l,2),r=i[0],u=i[1],o=Object(n.useState)(null),m=Object(s.a)(o,2),d=m[0],f=m[1],p=Object(n.useState)(!1),g=Object(s.a)(p,2),E=g[0],v=g[1];Object(n.useEffect)((function(){u(null),f(null),v(!1)}),[]);return c.a.createElement("div",{className:"UpdateMusicImage-page"},c.a.createElement("div",{className:"UpdateMusicImage-container"},c.a.createElement("div",{className:"UpdateMusicImage-title"},"\u66f4\u65b0\u97f3\u4e50\u56fe\u7247"),c.a.createElement("div",{className:"UpdateMusicImage-content"},c.a.createElement("div",{className:"UpdateMusicImage-image-on-show"},null===d?"":c.a.createElement("img",{className:"UpdateMusicImage-image query-image",alt:"",src:d})),c.a.createElement("div",{className:"UpdateMusicImage-alert"},c.a.createElement("div",{className:"UpdateMusicImage-icon"},c.a.createElement(D.a,{style:{fontSize:"50px"}})),c.a.createElement("div",{className:"UpdateMusicImage-alert-text"},"\u4e0a\u4f20\u56fe\u7247",c.a.createElement("div",null,"(PNG\u683c\u5f0f)"))),c.a.createElement("input",{type:"file",onChange:function(e){return function(e){if(e&&"image/png"===e.type){u(e),z.a.success("\u56fe\u7247\u6587\u4ef6\u5df2\u9009\u4e2d\u4e3a "+e.name);var t=new FileReader;t.readAsDataURL(e),t.onload=function(e){f(e.target.result)}}else u(null),z.a.error("\u56fe\u7247\u6587\u4ef6\u5fc5\u987b\u662fPNG\u683c\u5f0f\u6587\u4ef6\uff01")}(e.target.files[0])}})),c.a.createElement("div",{className:"UpdateMusicImage-button"},c.a.createElement(q.a,{type:"primary",shape:"round",loading:E,icon:c.a.createElement(A.a,{style:{fontSize:"20px"}}),size:"large",onClick:function(){v(!0),function(){if(!t)return z.a.error("\u672a\u77e5\u9519\u8bef\uff01"),void v(!1);if(!r)return z.a.error("\u8bf7\u9009\u62e9\u56fe\u7247\u6587\u4ef6\uff01"),void v(!1);var e=new File([r],t.music_name+".png",{type:r.type}),a=new FormData;a.append("music_image",e),re(a,(function(e){100===e?(v(!1),z.a.success("\u4e0a\u4f20\u97f3\u4e50\u56fe\u7247\u6210\u529f\uff0c\u5237\u65b0\u9875\u9762\u540e\u66f4\u65b0\uff01")):(v(!1),z.a.error("\u66f4\u65b0\u97f3\u4e50\u56fe\u7247\u5931\u8d25\uff01"))}))}()}},"\u66f4\u65b0\u56fe\u7247"),c.a.createElement(q.a,{type:"primary",shape:"round",size:"large",onClick:function(){return a()}},"\u53d6\u6d88"))))}),pe=a(633),ge=a(634),Ee=a(635),ve=a(636),he=a(637),Ne=function(e){var t=e.changeStatus,a=void 0===t?null:t,l=e.imageSrc,i=void 0===l?null:l,r=e.playStatus,u=void 0===r?null:r,m=e.changePlayStatus,d=void 0===m?null:m,f=e.maxTime,p=void 0===f?null:f,g=e.nowTime,E=void 0===g?null:g,v=e.changePlayTime,h=void 0===v?null:v,N=e.music_msg,b=void 0===N?null:N,S=Object(n.useState)(null),y=Object(s.a)(S,2),O=y[0],j=y[1],C=Object(n.useState)(null),w=Object(s.a)(C,2),_=w[0],k=w[1];return c.a.createElement("div",{className:"musicOnShow-page"},c.a.createElement("div",{className:"musicOnShow-change-status",onClick:a},c.a.createElement(pe.a,{style:{fontSize:"40px"}})),null!==i&&null!==u&&null!==p&&null!==E?c.a.createElement("div",null,null===O?"":c.a.createElement("div",{className:"musicOnShow-check-status-box"},c.a.createElement(H,{music_msg:O,closeCheckBox:function(){j(null)}})),null===_?"":c.a.createElement("div",{className:"musicOnSHow-update-music-image"},c.a.createElement(fe,{music_msg:_,closeUpdateBox:function(){k(null)}})),c.a.createElement("div",{className:"musicOnShow-background"},c.a.createElement("img",{className:"musicOnShow-background-image query-image",src:i,alt:""}),c.a.createElement("div",{className:"musicOnShow-background-opacity"})),c.a.createElement("div",{className:"musicOnShow-container"},c.a.createElement("div",{className:"musicOnShow-image-container"},c.a.createElement("img",{className:"musicOnShow-image query-image",src:i,alt:""}))),c.a.createElement("div",{className:"musicOnShow-player-container"},c.a.createElement(de.a,{className:"musicOnSHow-player-slider",min:0,max:p,value:E,onChange:function(e){return h(e)},tipFormatter:null}),c.a.createElement("div",{className:"musicOnShow-play-status"},c.a.createElement("div",{className:"musicOnShow-play-status-setting-button",onClick:function(){k(b)}},c.a.createElement(ge.a,{style:{fontSize:"40px"}})),c.a.createElement("div",{className:"musicOnShow-play-status-play-button",onClick:d},!0===u?c.a.createElement(Ee.a,{style:{fontSize:"50px"}}):c.a.createElement(ve.a,{style:{fontSize:"50px"}})),c.a.createElement("div",{className:"musicOnShow-play-status-check-status-button",onClick:function(){j(b)}},c.a.createElement(he.a,{style:{fontSize:"40px"}}))))):c.a.createElement("div",{className:"musicOnShow-loading"},c.a.createElement(o.a,{size:"large"})))},be=(a(611),a(638)),Se=function(e){var t=e.changeStatus,a=void 0===t?null:t,n=e.imageSrc,l=void 0===n?null:n,i=e.playStatus,s=void 0===i?null:i,r=e.changePlayStatus,u=void 0===r?null:r;return c.a.createElement("div",{className:"musicHide-page"},c.a.createElement("div",{className:"musicHide-change-status",onClick:a},c.a.createElement(be.a,{style:{fontSize:"30px"}})),null!==l&&null!==s?c.a.createElement("div",{className:"musicHide-container"},c.a.createElement("div",{className:"musicHide-image-container"},c.a.createElement("img",{className:"musicHide-image query-image",src:l,alt:""})),c.a.createElement("div",{className:"musicHide-play-status",onClick:u},!0===s?c.a.createElement(Ee.a,{style:{fontSize:"30px"}}):c.a.createElement(ve.a,{style:{fontSize:"30px"}}))):c.a.createElement("div",{className:"musicHide-loading"},c.a.createElement(o.a,null)))},ye=function(e){var t=e.musicStorage,a=Object(n.useState)(!1),l=Object(s.a)(a,2),i=l[0],r=l[1],u=Object(n.useState)(null),o=Object(s.a)(u,2),m=o[0],d=o[1],f=Object(n.useState)(null),p=Object(s.a)(f,2),g=p[0],E=p[1],v=Object(n.useState)(null),h=Object(s.a)(v,2),N=h[0],b=h[1],S=Object(n.useState)(null),y=Object(s.a)(S,2),O=y[0],j=y[1],C=Object(n.useState)(0),w=Object(s.a)(C,2),_=w[0],k=w[1];Object(n.useEffect)((function(){r(!1),j(!0)}),[]),Object(n.useEffect)((function(){null!==g&&g.pause(),me(t,(function(e){if(d(e),null!==e){var t="/public/music/"+e.music_name+".mp3",a=new Audio(t);a.addEventListener("ended",(function(){b(!1)})),a.addEventListener("timeupdate",(function(e){var t=e.path?e.path[0].currentTime:e.target.currentTime;k(parseInt(t))})),!0===O||null===O?(a.pause(),b(!1),j(!1)):(a.play(),b(!0)),E(a)}else E(null),b(null)}))}),[t]);var x=function(){r(!i)},U=function(){!0===N&&null!==g?(g.pause(),b(!N)):!1===N&&null!==g&&(g.play(),b(!N))};return c.a.createElement("div",{className:"music-page"},!0===i?c.a.createElement(Ne,{changeStatus:x,imageSrc:m?"/public/image/"+m.music_name+".png":null,playStatus:N,changePlayStatus:U,maxTime:null===g?null:parseInt(g.duration),nowTime:null===_?null:_,changePlayTime:function(e){return function(e){null!==g&&(g.currentTime=e,g.play(),b(!0))}(e)},music_msg:m}):c.a.createElement(Se,{changeStatus:x,imageSrc:m?"/public/image/"+m.music_name+".png":null,playStatus:N,changePlayStatus:U}))},Oe=function(){var e=Object(n.useState)(window.localStorage.getItem("music_id")),t=Object(s.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){l(window.localStorage.getItem("music_id"))}),[]);var i=function(e){window.localStorage.setItem("music_id",e),l(e)};return c.a.createElement("div",null,c.a.createElement(r.a,null,c.a.createElement(u.a,{exact:!0,path:"/",render:function(){return c.a.createElement(x,{changeMusic:i})}}),c.a.createElement(u.a,{path:"/home",render:function(){return c.a.createElement(x,{changeMusic:i})}}),c.a.createElement(u.a,{path:"/list",render:function(){return c.a.createElement(ce,{changeMusic:i})}}),c.a.createElement(u.a,{path:"/upload",render:function(){return c.a.createElement(oe,{changeMusic:i})}})),c.a.createElement(ye,{musicStorage:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[296,1,2]]]);
//# sourceMappingURL=main.1783356a.chunk.js.map