(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47d5491b"],{"0221":function(e,t,r){"use strict";var a,n,i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-tooltip",class:e.position},[r("div",{staticClass:"app-tooltip__inner"},[e._t("default")],2)])},c=[],s=(r("99af"),r("d4ec")),o=r("257e"),u=r("262e"),l=r("2caf"),f=r("ade3"),d=r("9ab4"),p=r("1b40");(function(e){e[e["left"]=0]="left",e[e["top"]=1]="top",e[e["right"]=2]="right",e[e["bottom"]=3]="bottom"})(n||(n={}));var v=(a=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){var e;Object(s["a"])(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return e=t.call.apply(t,[this].concat(n)),Object(f["a"])(Object(o["a"])(e),"position",void 0),e}return r}(p["d"]),a);Object(d["a"])([Object(p["c"])(String)],v.prototype,"position",void 0),v=Object(d["a"])([p["a"]],v);var b=v,m=b,h=(r("eb15"),r("2877")),O=Object(h["a"])(m,i,c,!1,null,null,null);t["a"]=O.exports},1050:function(e,t,r){"use strict";r("9aa5")},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c9":function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return o}));r("b0c0");var a=r("5530"),n=r("85cd"),i=r("8234"),c=function(e){return Object(n["a"])((function(e){var t=e.surname,r=e.name,a=e.lastname,n=e.dateOfBirth,c=e.numberOfPassport,s=e.driverLicense,o=e.dateDriverLicense;return{method:"POST",url:"/driver/check",data:{surname:t,name:r,lastname:a,DateOfBirth:Object(i["a"])(n).format("YYYY-MM-DD"),NumberOfPassport:c,SerialDriverLicense:s,DateDriverLicense:Object(i["a"])(o).format("YYYY-MM-DD")}}}),Object(a["a"])({},e))},s=function(e){return Object(n["a"])((function(e){var t=e.page;return{method:"GET",url:"/driver/check",params:{page:t}}}),Object(a["a"])({},e))},o=function(e){return Object(n["a"])((function(e){var t=e.id;return{method:"GET",url:"/driver/check/".concat(t)}}),Object(a["a"])({},e))}},2416:function(e,t,r){"use strict";r("d40d")},"270e":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-tooltip-info"},[r("svgInfo",{staticClass:"cursor-pointer",on:{mouseenter:function(t){e.showInfo=!0},mouseleave:function(t){e.showInfo=!1}}}),r("transition",{attrs:{name:"fade"}},[e.showInfo?r("app-tooltip",{staticClass:"app-tooltip-info__tooltip",attrs:{position:"left"}},[e._t("default")],2):e._e()],1)],1)},n=[],i=r("d4ec"),c=r("262e"),s=r("2caf"),o=r("9ab4"),u=r("0221"),l=r("1b40"),f=r("76ed"),d=r.n(f),p=r("a6f4"),v=function(e){Object(c["a"])(r,e);var t=Object(s["a"])(r);function r(){return Object(i["a"])(this,r),t.apply(this,arguments)}return r}(l["d"]);v=Object(o["a"])([Object(l["a"])({setup:function(){var e=Object(p["e"])(!1);return{showInfo:e}},components:{AppTooltip:u["a"],svgInfo:d.a}})],v);var b=v,m=b,h=(r("a9a5"),r("2877")),O=Object(h["a"])(m,a,n,!1,null,null,null);t["a"]=O.exports},"30af":function(e,t,r){},"399c":function(e,t,r){},4193:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("d3b7"),r("ac1f"),r("25f0"),r("96cf");var a=r("1da1"),n=r("a6f4"),i=r("1cc3");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.totalPages,r=e.nowPage,a=Object(n["e"])(r||1),i=Object(n["e"])(t||1),c=function(){a.value>=i.value||(a.value+=1)},s=function(){a.value<2||(a.value-=1)},o=function(e){Object(n["h"])(a,(function(t){e(t)}))},u=function(e){i.value=e},l=function(e){a.value=e};return{page:a,nextPage:c,prevPage:s,onChange:o,setTotalPages:u,totalPages:i,setPage:l}}var s=r("6f24");function o(e){var t={useQuery:!0},r=Object.assign({},e,t),o=r.useQuery,u=r.api,l=Object(s["a"])(),f=Object(n["e"])(),d=c({nowPage:o?+l.currentRoute.query.page:1}),p=d.onChange,v=d.setPage,b=d.page,m=d.nextPage,h=d.prevPage,O=d.setTotalPages,g=d.totalPages,j=function(){return m()},y=Object(i["a"])(),_=u({toast:{error:function(e){return"Ошибка при запросе данных"}}}),w=_.exec,k=_.result,x=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return y.show(),e.next=3,w(f.value);case 3:v(k.value.current_page),O(k.value.last_page),y.hide();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:v(k.value.current_page),O(k.value.last_page),Object(n["h"])(f,(function(){window.scrollTo(0,0),x()})),p((function(){o&&l.push({query:{page:b.value.toString()}})}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=Object(n["e"])([]);Object(n["h"])(k,(function(e){D.value=e.data}));var L=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.fetchData,f=r,e.next=4,P();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{page:b,nextPage:m,prevPage:h,showMore:j,items:D,totalPages:g,fetchItems:x,refreshItems:C,init:L}}},"44e7":function(e,t,r){var a=r("861d"),n=r("c6b6"),i=r("b622"),c=i("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[c])?!!t:"RegExp"==n(e))}},"5cf4":function(e,t,r){"use strict";r("30af")},"76ed":function(e,t,r){r("99af");var a=r("ded3"),n=r("4082");e.exports={functional:!0,render:function(e,t){var r=t._c,i=(t._v,t.data),c=t.children,s=void 0===c?[]:c,o=i.class,u=i.staticClass,l=i.style,f=i.staticStyle,d=i.attrs,p=void 0===d?{}:d,v=n(i,["class","staticClass","style","staticStyle","attrs"]);return r("svg",a({class:[o,u],style:[l,f],attrs:Object.assign({width:"22",height:"22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p)},v),s.concat([r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11 2a9 9 0 100 18 9 9 0 000-18zM0 11C0 4.925 4.925 0 11 0s11 4.925 11 11-4.925 11-11 11S0 17.075 0 11z",fill:"#5D55D0"}}),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11 10a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z",fill:"#5D55D0"}}),r("path",{attrs:{d:"M12 7a1 1 0 11-2 0 1 1 0 012 0z",fill:"#5D55D0"}})]))}}},"841c":function(e,t,r){"use strict";var a=r("d784"),n=r("825a"),i=r("1d80"),c=r("129f"),s=r("14c3");a("search",1,(function(e,t,r){return[function(t){var r=i(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,r):new RegExp(t)[e](String(r))},function(e){var a=r(t,e,this);if(a.done)return a.value;var i=n(e),o=String(this),u=i.lastIndex;c(u,0)||(i.lastIndex=0);var l=s(i,o);return c(i.lastIndex,u)||(i.lastIndex=u),null===l?-1:l.index}]}))},"9aa5":function(e,t,r){},a9a5:function(e,t,r){"use strict";r("399c")},aa8a:function(e,t,r){"use strict";r.d(t,"m",(function(){return u})),r.d(t,"l",(function(){return l})),r.d(t,"j",(function(){return f})),r.d(t,"u",(function(){return d})),r.d(t,"d",(function(){return p})),r.d(t,"c",(function(){return v})),r.d(t,"q",(function(){return b})),r.d(t,"b",(function(){return m})),r.d(t,"e",(function(){return h})),r.d(t,"g",(function(){return O})),r.d(t,"f",(function(){return g})),r.d(t,"n",(function(){return j})),r.d(t,"o",(function(){return y})),r.d(t,"p",(function(){return _})),r.d(t,"k",(function(){return x})),r.d(t,"i",(function(){return P})),r.d(t,"s",(function(){return C})),r.d(t,"r",(function(){return D})),r.d(t,"t",(function(){return L})),r.d(t,"a",(function(){return I})),r.d(t,"h",(function(){return q}));var a,n=r("ade3"),i=r("ff7e"),c=r("e940"),s=r("ca8a"),o=r("506a"),u=(r("f708"),Object(c["a"])("",[o["string"]().required().test("","Можно вводить только русские буквы",(function(e){return/^[а-яА-Я]*$/i.test(e)}))])),l=Object(c["a"])("",[o["string"]().required().test("","Можно вводить только русские буквы",(function(e){return/^[а-яА-Я]*$/i.test(e)}))]),f=Object(c["a"])("",[o["string"]().required().test("","Можно вводить только русские буквы",(function(e){return/^[а-яА-Я]*$/i.test(e)}))]),d=Object(c["a"])("",[o["string"]().required().length(10)]),p=Object(c["a"])("",[o["string"]().required()]),v=Object(c["a"])(null,[o["number"]().required()]),b=Object(c["a"])("",[o["number"]().typeError("Введите корректный номер телефона")]),m=Object(c["a"])("",[o["date"]().required()]),h=Object(c["a"])("",[o["date"]().required()]),O=Object(c["a"])("",[o["date"]().required()]),g=Object(c["a"])("",[o["number"]().required()]),j=Object(c["a"])("",[o["string"]().required().length(10)]),y=Object(c["a"])("",[o["date"]().required()]),_=Object(c["a"])("",[o["string"]().required()]),w=Object(i["a"])({validators:{learningDate:o["string"]().nullable(),gettId:o["number"]().nullable().optional()},onlyOne:!0}),k=w.group,x=k.learningDate,P=k.gettId,C=Object(c["a"])(null,[o["string"]().required()]),D=Object(c["a"])(null,[o["string"]().required()]),L=Object(c["a"])(null,[o["string"]().required()]),I={name:u,middleName:l,lastName:f,serialLicense:d,countryLicense:p,city:v,phone:b,birthday:m},q=(a={},Object(n["a"])(a,s["a"].yandex,{passport:j,dateLicense:h,endTimeLicense:O,driverExp:g}),Object(n["a"])(a,s["a"].gett,{passport:j,gettId:P,learningDate:x,photoPassport:C,photoLicense:D,selfiDriver:L}),Object(n["a"])(a,s["a"].citymobil,{endTimeLicense:O,dateLicense:h,passport:j,passportDate:y,passportWho:_,photoPassport:C}),a)},abb8:function(e,t,r){},b3cb:function(e,t,r){"use strict";var a,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-title",class:{"page-title-between":e.between}},[e._t("default")],2)},i=[],c=(r("99af"),r("d4ec")),s=r("257e"),o=r("262e"),u=r("2caf"),l=r("ade3"),f=r("9ab4"),d=r("1b40"),p=(a=function(e){Object(o["a"])(r,e);var t=Object(u["a"])(r);function r(){var e;Object(c["a"])(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return e=t.call.apply(t,[this].concat(n)),Object(l["a"])(Object(s["a"])(e),"between",void 0),e}return r}(d["d"]),a);Object(f["a"])([Object(d["c"])({type:Boolean,default:!1})],p.prototype,"between",void 0),p=Object(f["a"])([d["a"]],p);var v=p,b=v,m=(r("df2d"),r("2877")),h=Object(m["a"])(b,n,i,!1,null,null,null);t["a"]=h.exports},caf2:function(e,t,r){"use strict";r.r(t);var a,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-driver-check"},[r("page-title",[r("h2",[e._v("Проверка водителя")])]),r("div",{staticClass:"driver-check-form__wrapper"},[r("driver-check-form")],1),r("driver-check-history",{staticClass:"mt-20"})],1)},i=[],c=r("d4ec"),s=r("262e"),o=r("2caf"),u=r("9ab4"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"driver-check-history flex-layout"},[r("div",{staticClass:"app-card"},[r("div",{staticClass:"driver-check-history__title"},[e._v("История проверок")]),r("div",{staticClass:"driver-check-history__items"},e._l(e.items,(function(e){return r("driver-check-history-item",{key:e.id,attrs:{item:e}})})),1)]),r("app-pagination",{staticClass:"mt-30",attrs:{nowPage:e.page,totalPages:e.totalPages},on:{next:e.nextPage,prev:e.prevPage,showMore:e.showMore}})],1)},f=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-link",{staticClass:"driver-check-history-item",attrs:{to:{name:"DriverCheckInfo",params:{id:e.item.id}}}},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"driver-check-history-item__date color-grey-3"},[e._v(" "+e._s(e._f("dateTime")(e.item.created_at))+" ")])]),r("div",{staticClass:"col-md-7"},[r("div",{staticClass:"driver-check-history-item__driver-name"},[e._v(" "+e._s(e.item.surname)+" "+e._s(e.item.name)+" "+e._s(e.item.lastname)+" ")])]),r("div",{staticClass:"col-md-2"},[r("div",{staticClass:"driver-check-history-item__status"},[r("app-status",{attrs:{size:"sm",color:"green",stroke:!0}},[e._v(e._s(e.statusName))])],1)])])])},p=[],v=(r("99af"),r("bee2")),b=r("257e"),m=r("ade3"),h=r("1b40"),O=(a=function(e){Object(s["a"])(r,e);var t=Object(o["a"])(r);function r(){var e;Object(c["a"])(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return e=t.call.apply(t,[this].concat(n)),Object(m["a"])(Object(b["a"])(e),"item",void 0),e}return Object(v["a"])(r,[{key:"statusName",get:function(){return"Проверено"}}]),r}(h["d"]),a);Object(u["a"])([Object(h["c"])({type:Object,default:function(){return{}}})],O.prototype,"item",void 0),O=Object(u["a"])([h["a"]],O);var g=O,j=g,y=(r("2416"),r("2877")),_=Object(y["a"])(j,d,p,!1,null,null,null),w=_.exports,k=r("14c9"),x=r("4193"),P=r("a6f4"),C=function(e){Object(s["a"])(r,e);var t=Object(o["a"])(r);function r(){return Object(c["a"])(this,r),t.apply(this,arguments)}return r}(h["d"]);C=Object(u["a"])([Object(h["a"])({components:{DriverCheckHistoryItem:w},setup:function(){var e=Object(x["a"])({api:k["c"],useQuery:!1}),t=e.init,r=e.nextPage,a=e.prevPage,n=e.page,i=e.totalPages,c=e.showMore,s=e.items,o=Object(P["a"])((function(){return{page:n.value}}));return t({fetchData:o}),{page:n,nextPage:r,prevPage:a,totalPages:i,showMore:c,items:s}}})],C);var D=C,L=D,I=(r("f34c"),Object(y["a"])(L,l,f,!1,null,null,null)),q=I.exports,T=r("b3cb"),R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"driver-check-form"},[r("form",{staticClass:"driver-check-form__form",attrs:{action:"#"},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("form-schema",{staticClass:"row",attrs:{schema:e.schema}}),r("div",{staticClass:"flex justify-content-center align-items-center driver-check-form__btn-wrapper"},[r("app-button",{attrs:{type:"submit",color:"purple-grad driver-check-form__btn"}},[e._v("ПРОВЕРИТЬ")]),r("app-tooltip-info",{staticClass:"driver-check-form__info-wrapper"},[e._v(" Услуга проверка водителя является платной и составляет 20 рублей за одну проверку. "),r("p",{staticClass:"mt-5 mb-5"},[e._v("Оплата списывается с баланса TaxSys.")]),e._v(" Информация носит исключительно справочный характер. Заказывая данную услугу вы полностью и безоговорочно соглашаетесь с условием оферты. ")])],1)],1)])},S=[],E=(r("b0c0"),r("d3b7"),r("ac1f"),r("ddb0"),r("96cf"),r("1da1")),M=r("16a2"),N=r("270e"),$=r("ed81"),Y=r("0221"),z=r("d5c2"),A=r("76ed"),B=r.n(A),Q=r("6f24"),F=r("aa8a"),G={birthday:F["b"],dateLicense:F["e"],lastName:F["j"],middleName:F["l"],name:F["m"],passport:F["n"],serialLicense:F["u"]},H=[{type:"app-input",field:F["j"],props:{label:"Фамилия"},class:"col-md-3",sort:1},{type:"app-input",field:F["m"],props:{label:"Имя"},class:"col-md-3",sort:2},{type:"app-input",field:F["l"],props:{label:"Отчество"},class:"col-md-3",sort:3},{name:"birthday",type:"app-date-picker",field:F["b"],props:{label:"Дата рождения"},class:"col-md-3",sort:4},{type:"app-input",field:F["n"],props:{maskPlaceholder:"",mask:"**********",label:"Серия и номер паспорта"},class:"col-md-4",sort:12},{type:"app-input",field:F["u"],props:{maskPlaceholder:"",mask:"**********",label:"Серия/номер В.У."},class:"col-md-4",sort:7},{type:"app-date-picker",field:F["e"],props:{label:"Дата выдачи В.У."},class:"col-md-4",sort:8}],J=function(e){Object(s["a"])(r,e);var t=Object(o["a"])(r);function r(){return Object(c["a"])(this,r),t.apply(this,arguments)}return r}(h["d"]);J=Object(u["a"])([Object(h["a"])({setup:function(e,t){t.emit;var r=Object(Q["a"])(),a=r.currentRoute.query,n={name:a.name,lastName:a.surname,middleName:a.lastname,passport:a.numberOfPassport,serialLicense:a.driverLicense};if(a.dateOfBirth&&"string"===typeof a.dateOfBirth){var i=new Date(a.dateOfBirth);n.birthday=i}if(a.dateDriverLicense&&"string"===typeof a.dateDriverLicense){var c=new Date(a.dateDriverLicense);n.dateLicense=c}var s=Object(k["a"])({toast:{error:function(e){return e.data.message},success:function(e){return e.message}}}),o=s.exec,u=(s.result,s.error,Object(z["a"])({fields:G,rename:{lastName:"surname",middleName:"lastname",birthday:"dateOfBirth",passport:"numberOfPassport",serialLicense:"driverLicense",dateLicense:"dateDriverLicense"}}));Object.assign(u.values,n);var l=u.handleSubmit(Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(u.serialize()),e.next=3,o(u.serialize());case 3:case"end":return e.stop()}}),e)})))),f=Object(P["e"])(!1);return{form:u,onSubmit:l,showInfo:f,schema:H}},components:{svgInfo:B.a,AppTooltip:Y["a"],AppDatePicker:$["a"],AppTooltipInfo:N["a"],FormSchema:M["a"]}})],J);var V=J,W=V,K=(r("1050"),Object(y["a"])(W,R,S,!1,null,null,null)),U=K.exports,X=function(e){Object(s["a"])(r,e);var t=Object(o["a"])(r);function r(){return Object(c["a"])(this,r),t.apply(this,arguments)}return r}(h["d"]);X=Object(u["a"])([Object(h["a"])({metaInfo:{title:"Проверка водителя"},setup:function(){return{}},components:{DriverCheckForm:U,PageTitle:T["a"],DriverCheckHistory:q}})],X);var Z=X,ee=Z,te=(r("5cf4"),Object(y["a"])(ee,n,i,!1,null,null,null));t["default"]=te.exports},ceea:function(e,t,r){},d40d:function(e,t,r){},da9f:function(e,t,r){},df2d:function(e,t,r){"use strict";r("da9f")},eb15:function(e,t,r){"use strict";r("ceea")},f34c:function(e,t,r){"use strict";r("abb8")},ff7e:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("d81d"),r("b64b");var a=r("e940");function n(e){var t=e.validators,r=e.onlyOne,n=void 0!==r&&r,i={},c=function(e){Object.keys(i).map((function(t){t!==e&&(i[t].value.value=null)}))},s=function(e){return Object.keys(i).some((function(t){if(t!==e&&i[t].value.value)return!0}))};return Object.keys(t).map((function(e){var r=t[e];i[e]=Object(a["a"])(null,[r.test("","Заполните одно из полей",(function(t){return setTimeout((function(){if(i[e].value.value&&n)return c(e),!0}),0),!!t||!!s(e)}))],{watchValue:!0})})),{group:i}}}}]);
//# sourceMappingURL=chunk-47d5491b.8bc2d2a0.js.map