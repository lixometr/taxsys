(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8147e03e"],{"0a67":function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return o}));var r,n,i=a("ade3");(function(e){e["cash"]="cash",e["cashless"]="cashless",e["corp"]="corp"})(n||(n={}));var s,c=(r={},Object(i["a"])(r,n.cashless,{icon:a("98dc"),name:"Оплата картой"}),Object(i["a"])(r,n.corp,{icon:a("98dc"),name:"Оплата картой"}),Object(i["a"])(r,n.cash,{icon:a("c9a3"),name:"Наличными"}),r);(function(e){e["qiwi"]="qiwi",e["card"]="card"})(s||(s={}));var o={1:s.qiwi,0:s.card}},"0eb2":function(e,t,a){},1148:function(e,t,a){"use strict";var r=a("a691"),n=a("1d80");e.exports="".repeat||function(e){var t=String(n(this)),a="",i=r(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(a+=t);return a}},"408a":function(e,t,a){var r=a("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},4193:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("d3b7"),a("ac1f"),a("25f0"),a("96cf");var r=a("1da1"),n=a("a6f4"),i=a("1cc3");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.totalPages,a=e.nowPage,r=Object(n["e"])(a||1),i=Object(n["e"])(t||1),s=function(){r.value>=i.value||(r.value+=1)},c=function(){r.value<2||(r.value-=1)},o=function(e){Object(n["h"])(r,(function(t){e(t)}))},l=function(e){i.value=e},u=function(e){r.value=e};return{page:r,nextPage:s,prevPage:c,onChange:o,setTotalPages:l,totalPages:i,setPage:u}}var c=a("6f24");function o(e){var t={useQuery:!0},a=Object.assign({},e,t),o=a.useQuery,l=a.api,u=Object(c["a"])(),d=Object(n["e"])(),v=s({nowPage:o?+u.currentRoute.query.page:1}),p=v.onChange,f=v.setPage,m=v.page,g=v.nextPage,h=v.prevPage,b=v.setTotalPages,_=v.totalPages,y=function(){return g()},O=Object(i["a"])(),j=l({toast:{error:function(e){return"Ошибка при запросе данных"}}}),C=j.exec,w=j.result,x=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return O.show(),e.next=3,C(d.value);case 3:f(w.value.current_page),b(w.value.last_page),O.hide();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:f(w.value.current_page),b(w.value.last_page),Object(n["h"])(d,(function(){window.scrollTo(0,0),x()})),p((function(){o&&u.push({query:{page:m.value.toString()}})}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=Object(n["e"])([]);Object(n["h"])(w,(function(e){T.value=e.data}));var A=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.fetchData,d=a,e.next=4,P();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{page:m,nextPage:g,prevPage:h,showMore:y,items:T,totalPages:_,fetchItems:x,refreshItems:k,init:A}}},7944:function(e,t,a){"use strict";var r,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"agregator-badge"},[a("app-badge",[a("app-icon",{staticClass:"mr-10",attrs:{src:e.agregType.icon,alt:"yandex",width:"24"}}),e._v(" "+e._s(e.agregType.name)+" ")],1)],1)},i=[],s=(a("99af"),a("d4ec")),c=a("257e"),o=a("262e"),l=a("2caf"),u=a("ade3"),d=a("9ab4"),v=a("ca8a"),p=a("a6f4"),f=a("1b40"),m=(r=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;Object(s["a"])(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return e=t.call.apply(t,[this].concat(n)),Object(u["a"])(Object(c["a"])(e),"type",void 0),e}return a}(f["d"]),r);Object(d["a"])([Object(f["c"])(String)],m.prototype,"type",void 0),m=Object(d["a"])([Object(f["a"])({setup:function(e){var t=Object(p["g"])(e),a=t.type,r=function(e){return v["b"][e]||{name:"Неизвестно"}},n=Object(p["a"])((function(){return r(a.value)}));return{agregType:n,getAgregType:r}}})],m);var g=m,h=g,b=a("2877"),_=Object(b["a"])(h,n,i,!1,null,null,null);t["a"]=_.exports},"80bd6":function(e,t,a){e.exports=a.p+"img/suspicious_image.a1567336.png"},"84c1":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("0613");function n(){return r["a"]}},"84f9":function(e,t,a){},"8ba2":function(e,t,a){"use strict";a("99af"),a("b0c0"),a("b680");var r,n=a("d4ec"),i=a("bee2"),s=a("257e"),c=a("262e"),o=a("2caf"),l=a("ade3"),u=a("9ab4"),d=a("ca8a"),v=a("1b40"),p=(r=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){var e;Object(n["a"])(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),Object(l["a"])(Object(s["a"])(e),"item",void 0),e}return Object(i["a"])(a,[{key:"fees",get:function(){return this.item.fees||{}}},{key:"distanceKm",get:function(){return this.item.distance/1e3}},{key:"driverFullName",get:function(){var e,t,a,r,n,i,s="";null!==(e=this.item.driver)&&void 0!==e&&e.name&&(s+=null===(r=this.item.driver)||void 0===r?void 0:r.name);null!==(t=this.item.driver)&&void 0!==t&&t.middle_name&&(s+=" "+(null===(n=this.item.driver)||void 0===n?void 0:n.middle_name));null!==(a=this.item.driver)&&void 0!==a&&a.last_name&&(s+=" "+(null===(i=this.item.driver)||void 0===i?void 0:i.last_name));return s}},{key:"orderIdLink",get:function(){var e=this.item.OrderIDYandex,t=this.item.citimobil_id,a=this.item.Agreg;return a===d["a"].yandex?"https://lk.taximeter.yandex.ru/order/".concat(e):a===d["a"].citymobil?"https://fleet.city-mobil.ru/orders/".concat(t,"/info"):""}},{key:"orderId",get:function(){return this.item.Agreg===d["a"].yandex?this.item.short_id:this.item.id}},{key:"timeTrip",get:function(){var e=this.item.timeTrip,t=this.$moment.duration(e,"seconds"),a=t.minutes(),r=t.hours(),n=t.days();return{min:a,hours:r,days:n}}},{key:"agregComission",get:function(){return Math.abs(this.fees.agreg_fee)}},{key:"parkComission",get:function(){return Math.abs(this.fees.park_fee)}},{key:"totalCommission",get:function(){return this.agregComission+this.parkComission}},{key:"chargedDriver",get:function(){var e=this.item.Price+parseFloat(this.fees.agreg_fee||0)+parseFloat(this.fees.park_fee||0);return!isNaN(e)&&e!==1/0&&e.toFixed(2)}},{key:"totalSum",get:function(){return this.item.Price}},{key:"costPerKm",get:function(){var e=this.item.Price/this.distanceKm;if(isNaN(e)||e===1/0)return!1;var t=e.toFixed(2);return t}},{key:"costPerMin",get:function(){var e=this.item.Price/(this.item.timeTrip/60);if(isNaN(e)||e===1/0)return!1;var t=e.toFixed(2);return t}}]),a}(v["d"]),r);Object(u["a"])([Object(v["c"])(Object)],p.prototype,"item",void 0),p=Object(u["a"])([Object(v["a"])({})],p);var f,m,g=p,h=g,b=a("2877"),_=Object(b["a"])(h,f,m,!1,null,null,null);t["a"]=_.exports},"98dc":function(e,t,a){a("99af");var r=a("ded3"),n=a("4082");e.exports={functional:!0,render:function(e,t){var a=t._c,i=(t._v,t.data),s=t.children,c=void 0===s?[]:s,o=i.class,l=i.staticClass,u=i.style,d=i.staticStyle,v=i.attrs,p=void 0===v?{}:v,f=n(i,["class","staticClass","style","staticStyle","attrs"]);return a("svg",r({class:[o,l],style:[u,d],attrs:Object.assign({preserveAspectRatio:"xMidYMid",viewBox:"0 0 24 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p)},f),c.concat([a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 2a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1H3zM0 3a3 3 0 013-3h18a3 3 0 013 3v12a3 3 0 01-3 3H3a3 3 0 01-3-3V3z",fill:"#5D55D0"}}),a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 7a1 1 0 011-1h22a1 1 0 110 2H1a1 1 0 01-1-1z",fill:"#5D55D0"}})]))}}},9945:function(e,t,a){"use strict";a("84f9")},b3cb:function(e,t,a){"use strict";var r,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-title",class:{"page-title-between":e.between}},[e._t("default")],2)},i=[],s=(a("99af"),a("d4ec")),c=a("257e"),o=a("262e"),l=a("2caf"),u=a("ade3"),d=a("9ab4"),v=a("1b40"),p=(r=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;Object(s["a"])(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return e=t.call.apply(t,[this].concat(n)),Object(u["a"])(Object(c["a"])(e),"between",void 0),e}return a}(v["d"]),r);Object(d["a"])([Object(v["c"])({type:Boolean,default:!1})],p.prototype,"between",void 0),p=Object(d["a"])([v["a"]],p);var f=p,m=f,g=(a("df2d"),a("2877")),h=Object(g["a"])(m,n,i,!1,null,null,null);t["a"]=h.exports},b439:function(e,t,a){"use strict";a("0eb2")},b680:function(e,t,a){"use strict";var r=a("23e7"),n=a("a691"),i=a("408a"),s=a("1148"),c=a("d039"),o=1..toFixed,l=Math.floor,u=function(e,t,a){return 0===t?a:t%2===1?u(e,t-1,a*e):u(e*e,t/2,a)},d=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},v=function(e,t,a){var r=-1,n=a;while(++r<6)n+=t*e[r],e[r]=n%1e7,n=l(n/1e7)},p=function(e,t){var a=6,r=0;while(--a>=0)r+=e[a],e[a]=l(r/t),r=r%t*1e7},f=function(e){var t=6,a="";while(--t>=0)if(""!==a||0===t||0!==e[t]){var r=String(e[t]);a=""===a?r:a+s.call("0",7-r.length)+r}return a},m=o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){o.call({})}));r({target:"Number",proto:!0,forced:m},{toFixed:function(e){var t,a,r,c,o=i(this),l=n(e),m=[0,0,0,0,0,0],g="",h="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return String(o);if(o<0&&(g="-",o=-o),o>1e-21)if(t=d(o*u(2,69,1))-69,a=t<0?o*u(2,-t,1):o/u(2,t,1),a*=4503599627370496,t=52-t,t>0){v(m,0,a),r=l;while(r>=7)v(m,1e7,0),r-=7;v(m,u(10,r,1),0),r=t-1;while(r>=23)p(m,1<<23),r-=23;p(m,1<<r),v(m,1,1),p(m,2),h=f(m)}else v(m,0,a),v(m,1<<-t,0),h=f(m)+s.call("0",l);return l>0?(c=h.length,h=g+(c<=l?"0."+s.call("0",l-c)+h:h.slice(0,c-l)+"."+h.slice(c-l))):h=g+h,h}})},c823:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"suspicious-page-travels flex-layout flex-1 page-items"},[a("page-filters",{attrs:{calendar:e.date},on:{"update:calendar":function(t){e.date=t}},scopedSlots:e._u([{key:"filters",fn:function(){return[a("aggregator-filters",{model:{value:e.agregator,callback:function(t){e.agregator=t},expression:"agregator"}})]},proxy:!0}])}),e.items.length?a("div",{staticClass:"flex-1 flex-layout"},[a("page-title",[a("h2",[e._v("Подозрительные поездки")])]),a("div",{staticClass:"suspicious-travels-items flex flex-column flex-1"},[e._l(e.items,(function(t){return a("suspicious-travels-item",{key:t.id,attrs:{item:t},on:{deny:function(a){return e.itemDeny(t.id)},approve:function(a){return e.itemApprove(t.id)}}})})),a("app-pagination",{staticClass:"mt-auto",attrs:{nowPage:e.page,totalPages:e.totalPages},on:{next:e.nextPage,prev:e.prevPage,showMore:e.nextPage}})],2)],1):a("suspicious-travels-placeholder")],1)},n=[],i=(a("ac1f"),a("96cf"),a("1da1")),s=a("d4ec"),c=a("262e"),o=a("2caf"),l=a("9ab4"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("page-placeholder",{staticClass:"suspicious-travels-placeholder",scopedSlots:e._u([{key:"image",fn:function(){return[r("img",{attrs:{src:a("80bd6"),alt:"image"}})]},proxy:!0},{key:"text",fn:function(){return[e._v(" Наша система пока не обнаружила подозрительных поездок ваших водителей ")]},proxy:!0}])})},d=[],v=a("d0f3"),p=a("1b40"),f=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return a}(p["d"]);f=Object(l["a"])([Object(p["a"])({components:{PagePlaceholder:v["a"]}})],f);var m,g=f,h=g,b=(a("9945"),a("2877")),_=Object(b["a"])(h,u,d,!1,null,null,null),y=_.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"susp-travels-item page-items__item"},[a("app-accardion",{staticClass:"color-grey-2 mb-15 font-md",attrs:{contentClass:"font-sm color-3"},scopedSlots:e._u([{key:"header",fn:function(){var t;return[a("app-accardion-col",{class:e.responsiveCol},[e._v(e._s(e.item.id))]),a("app-accardion-col",{staticClass:"color-grey-3",class:e.responsiveCol},[e._v(e._s(e._f("dateTime")(e.item.created_at)))]),a("app-accardion-col",{class:e.responsiveCol},[e._v(e._s(e.driverFullName))]),a("app-accardion-col",{class:(t={},t[e.responsiveCol]=!0,t["color-red"]=e.antifraud.costTrip,t)},[e._v(e._s(e.item.Price)+" "+e._s(e.currency))]),a("app-accardion-col",{class:e.responsiveCol},[a("agregator-badge",{staticClass:"shrink-0",attrs:{type:e.item.Agreg}})],1),a("app-accardion-col",{class:e.responsiveCol},[a("app-badge",{staticClass:"shrink-0"},[a(e.getPaymentType(e.item.PaymentType).icon,{tag:"app-icon",staticClass:"mr-10 shrink-0",attrs:{width:"24",alt:"cash"}}),e._v(" "+e._s(e.getPaymentType(e.item.PaymentType).name)+" ")],1)],1)]},proxy:!0},{key:"default",fn:function(){return[a("app-accardion-col",{class:e.responsiveContent},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[e._v("Номер заказа:")]),a("div",{staticClass:"col-6 text-truncate"},[a("a",{attrs:{href:e.orderIdLink,target:"_blank"}},[e._v(" "+e._s(e.orderId))])])]),e.item.StartAdress?a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[e._v("Адрес подачи:")]),a("div",{staticClass:"col-6"},[e._v(" "+e._s(e.item.StartAdress)+" ")])]):e._e(),e.item.EndAdress?a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[e._v("Адрес назначения:")]),a("div",{staticClass:"col-6"},[e._v(e._s(e.item.EndAdress))])]):e._e(),a("div",{staticClass:"row mt-30"},[a("div",{staticClass:"col"},[a("app-button",{staticClass:"mb-15",attrs:{color:"orange",stroke:!0},on:{click:e.deny}},[e._v("Отказать")])],1),a("div",{staticClass:"col"},[a("app-button",{attrs:{color:"orange"},on:{click:e.approve}},[e._v("Одобрить")])],1)])]),a("app-accardion-col",{class:e.responsiveContent},[e.agregComission?a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[e._v("Комиссия агрегатора:")]),a("div",{staticClass:"col-6"},[e._v(e._s(e.agregComission)+" "+e._s(e.currency))])]):e._e(),e.parkComission?a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[e._v("Комиссия парка:")]),a("div",{staticClass:"col-6"},[e._v(e._s(e.parkComission)+" "+e._s(e.currency))])]):e._e(),e.chargedDriver?a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[e._v("Начислено водителю:")]),a("div",{staticClass:"col-6"},[e._v(e._s(e.chargedDriver)+" "+e._s(e.currency))])]):e._e(),e.item.surcharges?a("div",{staticClass:"row",class:{"color-red":e.antifraud.bonus}},[a("div",{staticClass:"col-6"},[e._v("Доплаты:")]),a("div",{staticClass:"col-6"},[e._v(e._s(e.item.surcharges))])]):e._e()]),a("app-accardion-col",{class:e.responsiveContent},[e.item.timeTrip?a("div",{staticClass:"row",class:{"color-red":e.antifraud.timeTrip}},[a("div",{staticClass:"col-6"},[e._v("Время:")]),a("div",{staticClass:"col-6"},[e.timeTrip.days?a("span",[e._v(e._s(e.timeTrip.days)+" д")]):e._e(),e.timeTrip.hours?a("span",[e._v(" "+e._s(e.timeTrip.hours)+" ч")]):e._e(),e.timeTrip.min?a("span",[e._v(" "+e._s(e.timeTrip.min)+" мин")]):e._e()])]):e._e(),e.item.distance?a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[e._v("Расстояние:")]),a("div",{staticClass:"col-6"},[e._v(e._s(e.distanceKm)+" км")])]):e._e(),e.costPerKm?a("div",{staticClass:"row",class:{"color-red":e.antifraud.costPerKm}},[a("div",{staticClass:"col-6"},[e._v("Cтоимость км:")]),a("div",{staticClass:"col-6"},[e._v(e._s(e.costPerKm)+" ₽")])]):e._e(),e.costPerMin?a("div",{staticClass:"row",class:{"color-red":e.antifraud.costPerMin}},[a("div",{staticClass:"col-6"},[e._v("Стоимость мин:")]),a("div",{staticClass:"col-6"},[e._v(e._s(e.costPerMin)+" ₽")])]):e._e(),a("div",{staticClass:"row",class:{"color-red":e.antifraud.tip}},[e.item.tip?a("div",{staticClass:"col-6"},[e._v("Чаевые:")]):e._e(),e.item.tip?a("div",{staticClass:"col-6"},[e._v(e._s(e.item.tip))]):e._e()])])]},proxy:!0}])})],1)},j=[],C=(a("99af"),a("caad"),a("d81d"),a("2532"),a("bee2")),w=a("257e"),x=a("ade3"),P=a("7944"),k=a("60a6"),T=a("84c1"),A=a("ca8a"),M=a("0a67"),S=a("a6f4"),F=a("8ba2"),D=(m=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){var e;Object(s["a"])(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return e=t.call.apply(t,[this].concat(n)),Object(x["a"])(Object(w["a"])(e),"item",void 0),e}return Object(C["a"])(a,[{key:"responsiveCol",get:function(){return" col-sm-6 col-md-4 col-xl-2"}},{key:"responsiveContent",get:function(){return" col-12 col-xl-4"}},{key:"warns",get:function(){var e;return(null===(e=this.item.antifraud_result)||void 0===e?void 0:e.warns)||[]}},{key:"antifraud",get:function(){var e=this.warns.map((function(e){return e.type})),t={timeTrip:e.includes("time_trip_more")||e.includes("time_trip_less"),costPerKm:e.includes("cost_km_more"),costPerMin:e.includes("cost_min_more")||e.includes("cost_min_less"),costTrip:e.includes("cost_trip_more"),bonus:e.includes("sum_bonus_more"),tip:e.includes("sum_tip_more_rub")||e.includes("sum_tip_more_perc")};return t}}]),a}(p["d"]),m);Object(l["a"])([Object(p["c"])(Object)],D.prototype,"item",void 0),D=Object(l["a"])([Object(p["a"])({mixins:[F["a"]],components:{AppIcon:k["a"],AgregatorBadge:P["a"]},setup:function(e,t){var a=t.emit,r=function(e){return M["d"][e]||{name:"Неизвестно"}},n=function(e){return A["b"][e]||{name:"Неизвестно"}},i=Object(T["a"])(),s=Object(S["a"])((function(){return i.getters.currency})),c=function(){a("deny")},o=function(){a("approve")};return{AgregatorType:A["b"],PaymentType:M["d"],PaymentName:M["c"],getPaymentType:r,getAgregType:n,currency:s,deny:c,approve:o}}})],D);var R=D,I=R,N=Object(b["a"])(I,O,j,!1,null,null,null),E=N.exports,z=a("70e2"),Y=a("0038"),K=a("b3cb"),H=a("85cd"),$=a("8234"),q=function(e){return Object(H["a"])((function(e){var t=e.dateFrom,a=e.dateTo,r=e.agregator,n=e.page;return{method:"GET",url:"/trips/suspicious",params:{page:n,date_from:t?Object($["a"])(t).format("DD-MM-YYYY"):void 0,date_to:a?Object($["a"])(a).format("DD-MM-YYYY"):void 0,agregator:r},data:{}}}),e)},B=function(e){return Object(H["a"])((function(e){var t=e.id,a=e.isApproved;return{method:"POST",url:"/trips/".concat(t,"/moderate_suspicious"),data:{suspicious_approved:a?1:2}}}),e)},V=a("4193"),J=a("a8f2"),L=a("8fbb"),Q=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return a}(p["d"]);Q=Object(l["a"])([Object(p["a"])({metaInfo:{title:"Подозрительные Поездки"},setup:function(){var e=Object(S["e"])("all"),t=Object(S["e"])({start:void 0,end:void 0}),a=Object(V["a"])({api:q}),r=a.page,n=a.nextPage,s=a.prevPage,c=a.showMore,o=a.items,l=a.totalPages,u=a.init,d=a.refreshItems,v=Object(S["a"])((function(){return{dateFrom:t.value.start,dateTo:t.value.end,page:r.value,agregator:e.value}}));u({fetchData:v});var p=B({toast:{error:Object(L["a"])()}}),f=p.exec,m=p.error,g=Object(J["a"])(),h=g.success,b=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f({id:t,isApproved:!0});case 2:if(!m.value){e.next=4;break}return e.abrupt("return");case 4:return h({message:"Поездка успешно одобрена"}),e.next=7,d();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f({id:t,isApproved:!1});case 2:if(!m.value){e.next=4;break}return e.abrupt("return");case 4:return h({message:"Поездка успешно отказана"}),e.next=7,d();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{itemDeny:_,itemApprove:b,agregator:e,date:t,page:r,showMore:c,nextPage:n,prevPage:s,items:o,totalPages:l}},components:{PageTitle:K["a"],PageFilters:Y["a"],AggregatorFilters:z["a"],SuspiciousTravelsItem:E,SuspiciousTravelsPlaceholder:y}})],Q);var G=Q,W=G,U=Object(b["a"])(W,r,n,!1,null,null,null);t["default"]=U.exports},c9a3:function(e,t,a){a("99af");var r=a("ded3"),n=a("4082");e.exports={functional:!0,render:function(e,t){var a=t._c,i=(t._v,t.data),s=t.children,c=void 0===s?[]:s,o=i.class,l=i.staticClass,u=i.style,d=i.staticStyle,v=i.attrs,p=void 0===v?{}:v,f=n(i,["class","staticClass","style","staticStyle","attrs"]);return a("svg",r({class:[o,l],style:[u,d],attrs:Object.assign({width:"24",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p)},f),c.concat([a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M21.736 2.615H2.264a.566.566 0 00-.566.566v9.872c0 .313.253.566.566.566h19.472a.566.566 0 00.566-.566V3.181a.566.566 0 00-.566-.566zM2.264.917A2.264 2.264 0 000 3.181v9.872a2.264 2.264 0 002.264 2.264h19.472A2.264 2.264 0 0024 13.053V3.181A2.264 2.264 0 0021.736.917H2.264z",fill:"#219653"}}),a("path",{attrs:{d:"M13.89 6.862a.87.87 0 00-.306-.69c-.203-.176-.47-.264-.801-.264h-1.5v1.909h1.5c.331 0 .598-.088.801-.264a.87.87 0 00.305-.69zm1.11 0c0 .549-.198.996-.593 1.343-.395.346-.905.52-1.53.52h-1.594v.502h2.367c.044 0 .08.013.108.039a.127.127 0 01.042.098v.545c0 .04-.014.073-.042.098a.154.154 0 01-.108.039h-2.367v.818c0 .04-.015.072-.045.098a.156.156 0 01-.105.038h-.783a.154.154 0 01-.108-.038.126.126 0 01-.042-.098v-.819H9.15a.154.154 0 01-.108-.038A.127.127 0 019 9.91v-.545c0-.04.014-.073.042-.098a.154.154 0 01.108-.039h1.05v-.503H9.15a.154.154 0 01-.108-.038A.127.127 0 019 8.588v-.635c0-.037.014-.069.042-.096a.15.15 0 01.108-.04h1.05v-2.68c0-.04.014-.073.042-.099A.154.154 0 0110.35 5h2.527c.625 0 1.135.173 1.53.52.395.346.593.794.593 1.342zM4.8 4.6a.6.6 0 11-1.2 0 .6.6 0 011.2 0zM20.4 4.6a.6.6 0 11-1.2 0 .6.6 0 011.2 0zM20.4 11.6a.6.6 0 11-1.2 0 .6.6 0 011.2 0zM4.8 11.6a.6.6 0 11-1.2 0 .6.6 0 011.2 0z",fill:"#219653"}})]))}}},d0f3:function(e,t,a){"use strict";var r,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex-1 flex-layout page-placeholder",class:{full:e.full}},[a("div",{staticClass:"app-card page-placeholder__card flex-1"},[a("div",{staticClass:"page-placeholder__image"},[e._t("image")],2),a("div",{staticClass:"page-placeholder__text"},[e._t("text")],2)])])},i=[],s=(a("99af"),a("d4ec")),c=a("257e"),o=a("262e"),l=a("2caf"),u=a("ade3"),d=a("9ab4"),v=a("1b40"),p=(r=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;Object(s["a"])(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return e=t.call.apply(t,[this].concat(n)),Object(u["a"])(Object(c["a"])(e),"full",void 0),e}return a}(v["d"]),r);Object(d["a"])([Object(v["c"])(Boolean)],p.prototype,"full",void 0),p=Object(d["a"])([v["a"]],p);var f=p,m=f,g=(a("b439"),a("2877")),h=Object(g["a"])(m,n,i,!1,null,null,null);t["a"]=h.exports},da9f:function(e,t,a){},df2d:function(e,t,a){"use strict";a("da9f")}}]);
//# sourceMappingURL=chunk-8147e03e.ed6c6ba2.js.map