(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b9aabe80"],{"0eb2":function(t,e,a){},"4c64":function(t,e,a){"use strict";a("f10e")},"85d02":function(t,e,a){t.exports=a.p+"img/payment_group_placeholder.5e41ee8e.png"},"96bb":function(t,e,a){},"9f54":function(t,e,a){"use strict";a("96bb")},af22:function(t,e,a){a("99af");var n=a("ded3"),c=a("4082");t.exports={functional:!0,render:function(t,e){var a=e._c,r=(e._v,e.data),l=e.children,s=void 0===l?[]:l,o=r.class,i=r.staticClass,u=r.style,d=r.staticStyle,f=r.attrs,p=void 0===f?{}:f,v=c(r,["class","staticClass","style","staticStyle","attrs"]);return a("svg",n({class:[o,i],style:[u,d],attrs:Object.assign({preserveAspectRatio:"xMidYMid",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p)},v),s.concat([a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.5 4.5a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H2.25a.75.75 0 01-.75-.75z",fill:"currentColor"}}),a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.5 2.25a.75.75 0 00-.75.75v.75h4.5V3a.75.75 0 00-.75-.75h-3zm5.25 1.5V3A2.25 2.25 0 0010.5.75h-3A2.25 2.25 0 005.25 3v.75h-1.5A.75.75 0 003 4.5V15a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0015 15V4.5a.75.75 0 00-.75-.75h-1.5zM4.5 5.25V15a.75.75 0 00.75.75h7.5a.75.75 0 00.75-.75V5.25h-9z",fill:"currentColor"}}),a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.5 7.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75zM10.5 7.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75z",fill:"currentColor"}})]))}}},b3cb:function(t,e,a){"use strict";var n,c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-title",class:{"page-title-between":t.between}},[t._t("default")],2)},r=[],l=(a("99af"),a("d4ec")),s=a("257e"),o=a("262e"),i=a("2caf"),u=a("ade3"),d=a("9ab4"),f=a("1b40"),p=(n=function(t){Object(o["a"])(a,t);var e=Object(i["a"])(a);function a(){var t;Object(l["a"])(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return t=e.call.apply(e,[this].concat(c)),Object(u["a"])(Object(s["a"])(t),"between",void 0),t}return a}(f["d"]),n);Object(d["a"])([Object(f["c"])({type:Boolean,default:!1})],p.prototype,"between",void 0),p=Object(d["a"])([f["a"]],p);var v=p,b=v,m=(a("df2d"),a("2877")),h=Object(m["a"])(b,c,r,!1,null,null,null);e["a"]=h.exports},b439:function(t,e,a){"use strict";a("0eb2")},b787:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settings-payment-groups page-items flex-layout flex-1"},[a("page-title",{attrs:{between:!0}},[a("div",[a("h2",[t._v("Группы выплат")])]),a("div",[a("app-button",{attrs:{color:"orange",shadow:!0},on:{click:t.addPaymentGroup}},[t._v("Добавить группу "),a("svgPlus",{staticClass:"ml-10"})],1)],1)]),t.items.length?a("div",{staticClass:"settings-payment-groups-items flex-layout flex-1"},t._l(t.items,(function(e,n){return a("payment-groups-item",{key:n,attrs:{item:e},on:{delete:function(a){return t.onDeleteItem(e.id)}}})})),1):a("payment-group-placeholder")],1)},c=[],r=(a("ac1f"),a("96cf"),a("1da1")),l=a("d4ec"),s=a("262e"),o=a("2caf"),i=a("9ab4"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-placeholder",{staticClass:"payment-group-placeholder",attrs:{full:!0},scopedSlots:t._u([{key:"image",fn:function(){return[n("img",{attrs:{src:a("85d02"),alt:"image"}})]},proxy:!0},{key:"text",fn:function(){return[t._v(" Перед добавлением группы выплат вам необходимо добавить свою диспетчерскую и платежную систему. "),n("div",{staticClass:"mt-10 font-500"},[t._v("А пока действуют централизованные настройки выплат")])]},proxy:!0}])})},d=[],f=a("d0f3"),p=a("1b40"),v=function(t){Object(s["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(l["a"])(this,a),e.apply(this,arguments)}return a}(p["d"]);v=Object(i["a"])([Object(p["a"])({components:{PagePlaceholder:f["a"]}})],v);var b,m=v,h=m,y=(a("9f54"),a("2877")),g=Object(y["a"])(h,u,d,!1,null,null,null),O=g.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payment-groups-item page-items__item"},[a("app-accardion",{staticClass:"color-grey-2 mb-15 font-md",attrs:{contentClass:"font-sm color-grey-3"},scopedSlots:t._u([{key:"header",fn:function(){return[a("app-accardion-col",{staticClass:"col-12"},[a("div",{staticClass:"color-purple"},[t._v(t._s(t.item.name))])])]},proxy:!0},{key:"default",fn:function(){return[a("app-accardion-col",{class:t.responsiveContent},t._l(t.col1,(function(e,n){return a("div",{key:n,staticClass:"row"},[a("div",{staticClass:"col-lg-8 col-7 color-grey-3"},[t._v(t._s(e.name))]),a("div",{staticClass:"col-lg-4 col-5 color-grey-2"},[t._v(t._s(e.value))])])})),0),a("app-accardion-col",{class:t.responsiveContent},t._l(t.col2,(function(e,n){return a("div",{key:n,staticClass:"row"},[a("div",{staticClass:"col-lg-8 col-7 color-grey-3"},[t._v(t._s(e.name))]),a("div",{staticClass:"col-lg-4 col-5 color-grey-2"},[t._v(t._s(e.value))])])})),0),a("app-accardion-col",{class:t.responsiveContent},t._l(t.col3,(function(e,n){return a("div",{key:n,staticClass:"row"},[a("div",{staticClass:"col-lg-8 col-7 color-grey-3"},[t._v(t._s(e.name))]),a("div",{staticClass:"col-lg-4 col-5 color-grey-2"},[t._v(t._s(e.value))])])})),0)]},proxy:!0},{key:"actions",fn:function(){return[a("div",{staticClass:"payment-groups-item__action"},[a("svgTrash",{attrs:{widht:"20"},on:{click:t.onDelete}})],1)]},proxy:!0}])})],1)},_=[],C=(a("99af"),a("d81d"),a("5530")),x=a("bee2"),w=a("257e"),k=a("ade3"),A=a("af22"),P=a.n(A),E=(b=function(t){Object(s["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;Object(l["a"])(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return t=e.call.apply(e,[this].concat(c)),Object(k["a"])(Object(w["a"])(t),"item",void 0),t}return Object(x["a"])(a,[{key:"responsiveContent",get:function(){return"col-12 col-xl-4"}},{key:"currency",get:function(){return this.$store.getters.currency}},{key:"getApplicationsPeriod",get:function(){var t={AllTime:"Ежедневно и круглосуточно",OnceADay:"Раз в день"};return t[this.item.AcceptApplications]}},{key:"col1",get:function(){return[{name:"Выплаты",value:"С одобрением"},{name:"Принимать заявки",value:this.getApplicationsPeriod},{name:"Авто. выплаты при достижении",value:"5 000 ₽"},{name:"Оплата за приложение",value:"5 ₽ / с первым заказом "}]}},{key:"col2",get:function(){var t=this,e=[{name:"Минимальная сумма на счету",value:"500"},{name:"Минимальная сумма заявки",value:this.item.minOrder},{name:"Максимальная сумма заявки",value:this.item.maxOrder},{name:"Ограничение выплаты в день",value:this.item.maxPerDay}];return e.map((function(e){return Object(C["a"])(Object(C["a"])({},e),{},{value:e.value+" ".concat(t.currency)})}))}},{key:"col3",get:function(){return[{name:"Комиссия за вывод суммыс 500 до 1500",value:"2%"},{name:"Комиссия за вывод суммы с 1 500 до 3 000",value:"1.5%"},{name:"Комиссия за вывод суммы с 3 000 до 10 000",value:"1%"},{name:"Комиссия за вывод суммы более 10 000",value:"0%"}]}}]),a}(p["d"]),b);Object(i["a"])([Object(p["c"])(Object)],E.prototype,"item",void 0),E=Object(i["a"])([Object(p["a"])({components:{svgTrash:P.a},setup:function(t,e){var a=e.emit,n=function(){a("delete")};return{onDelete:n}}})],E);var V=E,M=V,z=(a("4c64"),Object(y["a"])(M,j,_,!1,null,null,null)),D=z.exports,G=a("b3cb"),S=a("a6f4"),T=a("ce2b"),$=a("eb38"),B=a.n($),H=a("008a"),I=a("6664"),R=a("8fbb"),J=a("1cc3"),L=function(t){Object(s["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(l["a"])(this,a),e.apply(this,arguments)}return a}(p["d"]);L=Object(i["a"])([Object(p["a"])({metaInfo:{title:"Группы выплат"},setup:function(){var t=Object(J["a"])(),e=Object(T["b"])({toast:{error:Object(R["a"])()}}),a=e.exec,n=e.result;t.show(),a().then((function(){return t.hide()}));var c=Object(S["e"])([]);Object(S["h"])(n,(function(t){c.value=t}));var l=function(){var t=Object(H["a"])(),e=t.showByName;e(I["b"].addPaymentGroup)},s=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(T["a"])({toast:{error:Object(R["a"])(),success:function(){return"Группа выплат успешно удалена!"}}}),c=n.exec,r=n.error,t.next=3,c({id:e});case 3:if(!r.value){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,a();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{onDeleteItem:s,items:c,addPaymentGroup:l}},components:{PageTitle:G["a"],svgPlus:B.a,PaymentGroupsItem:D,PaymentGroupPlaceholder:O}})],L);var N=L,Y=N,q=Object(y["a"])(Y,n,c,!1,null,null,null);e["default"]=q.exports},ce2b:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return l}));var n=a("5530"),c=a("85cd"),r=function(t){return Object(c["a"])((function(){return{method:"GET",url:"/partner/payment_groups"}}),Object(n["a"])({},t))},l=function(t){return Object(c["a"])((function(t){var e=t.id;return{method:"DELETE",url:"/partner/payment_groups/".concat(e)}}),Object(n["a"])({},t))}},d0f3:function(t,e,a){"use strict";var n,c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-1 flex-layout page-placeholder",class:{full:t.full}},[a("div",{staticClass:"app-card page-placeholder__card flex-1"},[a("div",{staticClass:"page-placeholder__image"},[t._t("image")],2),a("div",{staticClass:"page-placeholder__text"},[t._t("text")],2)])])},r=[],l=(a("99af"),a("d4ec")),s=a("257e"),o=a("262e"),i=a("2caf"),u=a("ade3"),d=a("9ab4"),f=a("1b40"),p=(n=function(t){Object(o["a"])(a,t);var e=Object(i["a"])(a);function a(){var t;Object(l["a"])(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return t=e.call.apply(e,[this].concat(c)),Object(u["a"])(Object(s["a"])(t),"full",void 0),t}return a}(f["d"]),n);Object(d["a"])([Object(f["c"])(Boolean)],p.prototype,"full",void 0),p=Object(d["a"])([f["a"]],p);var v=p,b=v,m=(a("b439"),a("2877")),h=Object(m["a"])(b,c,r,!1,null,null,null);e["a"]=h.exports},da9f:function(t,e,a){},df2d:function(t,e,a){"use strict";a("da9f")},eb38:function(t,e,a){a("99af");var n=a("ded3"),c=a("4082");t.exports={functional:!0,render:function(t,e){var a=e._c,r=(e._v,e.data),l=e.children,s=void 0===l?[]:l,o=r.class,i=r.staticClass,u=r.style,d=r.staticStyle,f=r.attrs,p=void 0===f?{}:f,v=c(r,["class","staticClass","style","staticStyle","attrs"]);return a("svg",n({class:[o,i],style:[u,d],attrs:Object.assign({width:"10",height:"11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p)},v),s.concat([a("path",{attrs:{d:"M5.508 4.773h4.326v1.094H5.508v4.707H4.326V5.867H.088V4.773h4.238V.223h1.182v4.55z",fill:"currentColor"}})]))}}},f10e:function(t,e,a){}}]);
//# sourceMappingURL=chunk-b9aabe80.ab328965.js.map