(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4498c888"],{"0765":function(e,t,a){},"684c":function(e,t,a){},"712c":function(e,t,a){"use strict";function n(e,t){var a=document.createElement("a");a.download=t,a.href=e,document.body.appendChild(a),a.click(),document.body.removeChild(a)}a.d(t,"a",(function(){return n}))},"8ba6":function(e,t,a){e.exports=a.p+"img/driver_list_rent.33af1d4a.png"},"948a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-driver-list page-items flex-layout flex-1"},[a("page-filters",{attrs:{calendar:e.date},on:{"update:calendar":function(t){e.date=t}},scopedSlots:e._u([{key:"filters",fn:function(){return[a("driver-list-filters",{model:{value:e.entity,callback:function(t){e.entity=t},expression:"entity"}})]},proxy:!0}])}),e.items.length&&!e.isLoading?a("div",{staticClass:"flex-layout flex-1"},[a("page-title",{attrs:{between:!0}},[a("div",[a("h2",[e._v("Список водителей")])]),a("div",[a("download-btn",{on:{click:e.downloadList}})],1)]),a("div",{staticClass:"driver-list-items flex flex-column flex-1"},[e._l(e.items,(function(t){return a("driver-list-item",{key:t.id,attrs:{item:t,showAgregators:!0,antifrauds:e.antifrauds,paymentGroups:e.paymentGroups},on:{refresh:e.refresh}})})),a("app-pagination",{staticClass:"mt-auto",attrs:{nowPage:e.page,totalPages:e.totalPages},on:{next:e.nextPage,prev:e.prevPage,showMore:e.showMore}})],2)],1):a("div",{key:"noItems",staticClass:"flex-layout flex-1"},["park"===e.entity?a("driver-list-connect-placeholder"):e._e(),"rent"===e.entity?a("driver-list-rent-placeholder"):e._e()],1)],1)},r=[],c=(a("ac1f"),a("96cf"),a("1da1")),i=a("d4ec"),s=a("262e"),l=a("2caf"),o=a("9ab4"),u=a("96cfb"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page-placeholder",{staticClass:"driver-list-rent-placeholder",attrs:{full:!0},scopedSlots:e._u([{key:"image",fn:function(){return[n("img",{attrs:{src:a("8ba6"),alt:"image"}})]},proxy:!0},{key:"text",fn:function(){return[n("div",[e._v(" В списке водителей на аренде появятся данные после того, как вы добавите автомобиль для аренды в нашем сервисе и свяжете его с водителем ")]),n("app-button",{staticClass:"mt-25",attrs:{color:"orange-grad"},on:{click:e.addCar}},[e._v("Добавить автомобиль")])]},proxy:!0}])})},f=[],p=a("d0f3"),v=a("1b40"),b=a("6f24"),m=function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return a}(v["d"]);m=Object(o["a"])([Object(v["a"])({setup:function(){var e=Object(b["a"])(),t=function(){e.push({name:"CarAdd"})};return{addCar:t}},components:{PagePlaceholder:p["a"]}})],m);var g=m,h=g,j=(a("db24"),a("2877")),O=Object(j["a"])(h,d,f,!1,null,null,null),y=O.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page-placeholder",{staticClass:"driver-list-connect-placeholder",attrs:{full:!0},scopedSlots:e._u([{key:"image",fn:function(){return[n("img",{attrs:{src:a("e436"),alt:"image"}})]},proxy:!0},{key:"text",fn:function(){return[e._v(" После выполнения первой поездки водители будет перемещен со страницы заявки водителей на данную страницу. ")]},proxy:!0}])})},w=[],_=function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return a}(v["d"]);_=Object(o["a"])([Object(v["a"])({components:{PagePlaceholder:p["a"]}})],_);var k,C=_,P=C,L=(a("ba11"),Object(j["a"])(P,x,w,!1,null,null,null)),D=L.exports,E=a("82be"),M=a("45c2"),R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"driver-list-filters filter-btns"},e._l(e.filters,(function(t,n){return a("app-button",{key:n,staticClass:"filter-btns__btn",attrs:{active:t.key===e.value,size:"sm",color:"purple",stroke:!0},on:{click:function(a){return e.selectItem(t)}}},[e._v(" "+e._s(t.name)+" ")])})),1)},$=[],I=(a("99af"),a("257e")),S=a("ade3"),F=(k=function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;Object(i["a"])(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return e=t.call.apply(t,[this].concat(r)),Object(S["a"])(Object(I["a"])(e),"value",void 0),e}return a}(v["d"]),k);Object(o["a"])([Object(v["c"])(String)],F.prototype,"value",void 0),F=Object(o["a"])([Object(v["a"])({setup:function(e,t){var a=t.emit,n=[{key:"park",name:"Парк"},{key:"rent",name:"Аренда"}],r=function(e){a("input",e.key)};return{filters:n,selectItem:r}}})],F);var z=F,A=z,B=Object(j["a"])(A,R,$,!1,null,null,null),G=B.exports,J=a("0038"),T=a("b3cb"),V=a("a6f4"),H=a("eb38"),q=a.n(H),K=a("4193"),N=a("7098"),Q=a("2bcd"),U=a("ce2b"),W=a("8fbb"),X=a("712c"),Y=function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return a}(v["d"]);Y=Object(o["a"])([Object(v["a"])({components:{PageTitle:T["a"],PageFilters:J["a"],DriverListFilters:G,AppButton:M["a"],svgPlus:q.a,DriverListItem:E["a"],DriverListConnectPlaceholder:D,DriverListRentPlaceholder:y,DownloadBtn:u["a"]},metaInfo:{title:"Список водителей"},setup:function(){var e=Object(V["e"])(!1),t=(Object(b["a"])(),Object(V["e"])("park")),a=Object(V["e"])({start:void 0,end:void 0}),n=Object(K["a"])({api:N["l"]}),r=n.page,i=n.nextPage,s=n.prevPage,l=n.showMore,o=n.items,u=n.totalPages,d=n.init,f=n.refreshItems,p=Object(V["a"])((function(){return{page:r.value,dateFrom:a.value.start,dateEnd:a.value.end}}));d({fetchData:p});var v=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=Object(Q["c"])(),g=m.exec,h=m.result,j=Object(U["b"])(),O=j.exec,y=j.result,x=function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.value=!0,t.next=3,g({paginate:!1});case 3:return t.next=5,O();case 5:e.value=!1;case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();x();var w=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Object(N["b"])({toast:{error:Object(W["a"])()}}),a=t.exec,n=t.error,r=t.result,e.next=3,a({dateFrom:p.value.dateFrom,dateTo:p.value.dateEnd});case 3:if(!n.value){e.next=5;break}return e.abrupt("return");case 5:Object(X["a"])("data:text/csv,".concat(r.value),"data.csv");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{isLoading:e,downloadList:w,paymentGroups:y,antifrauds:h,refresh:v,entity:t,date:a,page:r,nextPage:i,prevPage:s,showMore:l,items:o,totalPages:u}}})],Y);var Z=Y,ee=Z,te=Object(j["a"])(ee,n,r,!1,null,null,null);t["default"]=te.exports},"96cfb":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",e._g(e._b({staticClass:"download-btn"},"button",e.$attrs,!1),e.$listeners),[e._v(" Выгрузить реестр "),a("svgDownload",{attrs:{width:"20"}})],1)},r=[],c=a("d4ec"),i=a("262e"),s=a("2caf"),l=a("9ab4"),o=a("1b40"),u=a("f28e"),d=a.n(u),f=function(e){Object(i["a"])(a,e);var t=Object(s["a"])(a);function a(){return Object(c["a"])(this,a),t.apply(this,arguments)}return a}(o["d"]);f=Object(l["a"])([Object(o["a"])({components:{svgDownload:d.a}})],f);var p=f,v=p,b=(a("ce5a"),a("2877")),m=Object(b["a"])(v,n,r,!1,null,null,null);t["a"]=m.exports},ba11:function(e,t,a){"use strict";a("ecab")},ce5a:function(e,t,a){"use strict";a("0765")},db24:function(e,t,a){"use strict";a("684c")},e436:function(e,t,a){e.exports=a.p+"img/driver_list_connect.1bc883c8.png"},ecab:function(e,t,a){},f28e:function(e,t,a){a("99af");var n=a("ded3"),r=a("4082");e.exports={functional:!0,render:function(e,t){var a=t._c,c=(t._v,t.data),i=t.children,s=void 0===i?[]:i,l=c.class,o=c.staticClass,u=c.style,d=c.staticStyle,f=c.attrs,p=void 0===f?{}:f,v=r(c,["class","staticClass","style","staticStyle","attrs"]);return a("svg",n({class:[l,o],style:[u,d],attrs:Object.assign({viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p)},v),s.concat([a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.5 11.667c.46 0 .833.373.833.833v3.333a.833.833 0 00.833.834h11.667a.833.833 0 00.833-.834V12.5a.833.833 0 111.667 0v3.333a2.5 2.5 0 01-2.5 2.5H4.167a2.5 2.5 0 01-2.5-2.5V12.5c0-.46.373-.833.833-.833z",fill:"currentColor"}}),a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.244 7.744a.833.833 0 011.179 0L10 11.322l3.577-3.578a.833.833 0 111.179 1.179l-4.167 4.166a.833.833 0 01-1.178 0L5.244 8.923a.833.833 0 010-1.179z",fill:"currentColor"}}),a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10 1.667c.46 0 .833.373.833.833v10a.833.833 0 01-1.667 0v-10c0-.46.374-.833.834-.833z",fill:"currentColor"}})]))}}}}]);
//# sourceMappingURL=chunk-4498c888.9ec27184.js.map