(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-978662d6"],{"0285":function(t,e,c){},"14c9":function(t,e,c){"use strict";c.d(e,"a",(function(){return s})),c.d(e,"c",(function(){return o})),c.d(e,"b",(function(){return n}));c("b0c0");var a=c("5530"),i=c("85cd"),r=c("8234"),s=function(t){return Object(i["a"])((function(t){var e=t.surname,c=t.name,a=t.lastname,i=t.dateOfBirth,s=t.numberOfPassport,o=t.driverLicense,n=t.dateDriverLicense;return{method:"POST",url:"/driver/check",data:{surname:e,name:c,lastname:a,DateOfBirth:Object(r["a"])(i).format("YYYY-MM-DD"),NumberOfPassport:s,SerialDriverLicense:o,DateDriverLicense:Object(r["a"])(n).format("YYYY-MM-DD")}}}),Object(a["a"])({},t))},o=function(t){return Object(i["a"])((function(t){var e=t.page;return{method:"GET",url:"/driver/check",params:{page:e}}}),Object(a["a"])({},t))},n=function(t){return Object(i["a"])((function(t){var e=t.id;return{method:"GET",url:"/driver/check/".concat(e)}}),Object(a["a"])({},t))}},"33a0":function(t,e,c){"use strict";c("e55b")},"6c8e":function(t,e,c){},"78b7":function(t,e,c){},ac2a:function(t,e,c){"use strict";c("78b7")},b199:function(t,e,c){"use strict";c.r(e);var a,i=function(){var t=this,e=t.$createElement,c=t._self._c||e;return t.isLoading?t._e():c("div",{staticClass:"driver-check-info"},[c("page-title",[c("h2",[t._v("Проверка водителя")])]),c("driver-check-info-driver",{staticClass:"mb-30",attrs:{item:t.item}}),c("driver-check-info-fcp",{staticClass:"mb-30",attrs:{item:t.item}}),c("driver-check-info-data",{attrs:{item:t.item}})],1)},r=[],s=(c("99af"),c("ac1f"),c("d4ec")),o=c("257e"),n=c("262e"),l=c("2caf"),v=c("ade3"),d=c("9ab4"),u=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"driver-check-info-data page-items__item"},[c("div",{staticClass:"app-card"},[c("div",{staticClass:"row row-no-gutter"},[c("app-accardion-col",{staticClass:"col-12"},[c("div",{staticClass:"font-md color-violet"},[t._v("База водителей")])])],1),t.showDrivers?c("div",t._l(t.items,(function(t,e){return c("driver-check-info-data-item",{key:e,staticClass:"driver-check-info-data__item",attrs:{item:t}})})),1):t._e(),t.isLoadingDriver?c("div",{ref:"loadingContainer",staticClass:"driver-check-info-data-loading"}):t._e()])])},f=[],h=c("bee2"),b=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",{staticClass:"row row-no-gutter"},[c("app-accardion-col",{staticClass:"col-lg-4"},[c("div",{staticClass:"row mb-15"},[c("div",{staticClass:"col-lg-3 col color-grey-3"},[t._v("ФИО:")]),c("div",{staticClass:"col-lg-9 col color-grey-2"},[t._v(t._s(t.name))])]),c("div",{staticClass:"row mb-15"},[c("div",{staticClass:"col color-grey-3"},[t._v("Телефон:")]),c("div",{staticClass:"col color-grey-2"},[t._v(t._s(t.phone))])]),c("div",{staticClass:"row mb-15"},[c("div",{staticClass:"col color-grey-3"},[t._v("Фотоконтроль:")]),c("div",{staticClass:"col color-grey-2"},[t.hasPhotoControl?c("svgCheckmark",{staticClass:"checkmark"}):t._e()],1)])]),c("app-accardion-col",{staticClass:"col-lg-4"},[c("div",{staticClass:"row mb-15"},[c("div",{staticClass:"col color-grey-3"},[t._v("Парк:")]),c("div",{staticClass:"col color-grey-2"},[t._v(t._s(t.park))])]),c("div",{staticClass:"row mb-15"},[c("div",{staticClass:"col color-grey-3"},[t._v("Гос. номер:")]),c("div",{staticClass:"col color-grey-2"},[t._v(t._s(t.carNumber))])]),c("div",{staticClass:"row mb-15"},[c("div",{staticClass:"col color-grey-3"},[t._v("Транспортное средство:")]),c("div",{staticClass:"col color-grey-2"},[t._v(t._s(t.car))])])]),c("app-accardion-col",{staticClass:"col-lg-4"},[c("div",{staticClass:"row mb-15"},[c("div",{staticClass:"col color-grey-3"},[t._v("Дата приёма:")]),c("div",{staticClass:"col color-grey-2"},[t._v(t._s(t.hireDate))])]),c("div",{staticClass:"row mb-15"},[c("div",{staticClass:"col color-grey-3"},[t._v("Дата увольнения:")]),c("div",{staticClass:"col color-grey-2"},[t._v("11.12.1980")])]),c("div",{staticClass:"row mb-15"},[c("div",{staticClass:"col color-grey-3"},[t._v("Долг пред парком:")]),c("div",{staticClass:"col",class:{"color-green":!t.debt,"color-red":!!t.debt}},[t._v(" "+t._s(t.debt?t.debt:"Отсутствует")+" ")])])])],1),t.comment?c("div",{staticClass:"row row-no-gutter"},[c("app-accardion-col",{staticClass:"col-12"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-4 col color-grey-3 text-right"},[t._v("Примечание:")]),c("div",{staticClass:"col-lg-8 col color-grey-2",domProps:{innerHTML:t._s(t.comment)}})])])],1):t._e()])},p=[],m=c("1b40"),g=c("c84e"),_=c.n(g),C=c("8234"),O=(a=function(t){Object(n["a"])(c,t);var e=Object(l["a"])(c);function c(){var t;Object(s["a"])(this,c);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i)),Object(v["a"])(Object(o["a"])(t),"item",void 0),t}return Object(h["a"])(c,[{key:"name",get:function(){var t,e,c,a;return"".concat(null===(t=this.item)||void 0===t||null===(e=t.driver)||void 0===e?void 0:e.first_name," ").concat(null===(c=this.item)||void 0===c||null===(a=c.driver)||void 0===a?void 0:a.last_name)}},{key:"comment",get:function(){var t,e;return null===(t=this.item)||void 0===t||null===(e=t.driver)||void 0===e?void 0:e.check_message}},{key:"phone",get:function(){var t,e,c,a;return(null===(t=this.item)||void 0===t||null===(e=t.driver)||void 0===e?void 0:e.phones)&&(null===(c=this.item)||void 0===c||null===(a=c.driver)||void 0===a?void 0:a.phones[0])}},{key:"carNumber",get:function(){var t,e;return null===(t=this.item)||void 0===t||null===(e=t.vehicle)||void 0===e?void 0:e.number}},{key:"car",get:function(){var t,e,c,a;return"".concat(null===(t=this.item)||void 0===t||null===(e=t.vehicle)||void 0===e?void 0:e.brand," ").concat(null===(c=this.item)||void 0===c||null===(a=c.vehicle)||void 0===a?void 0:a.model)}},{key:"park",get:function(){var t;return null===(t=this.item)||void 0===t?void 0:t.park_name}},{key:"hireDate",get:function(){var t,e;return Object(C["a"])(null===(t=this.item)||void 0===t||null===(e=t.driver)||void 0===e?void 0:e.hire_date).format("DD.MM.YYYY")}},{key:"hasPhotoControl",get:function(){var t,e;return null===(t=this.item)||void 0===t||null===(e=t.driver)||void 0===e?void 0:e.dkk_is_blocked}},{key:"debt",get:function(){var t,e;return null===(t=this.item)||void 0===t||null===(e=t.debt)||void 0===e?void 0:e.bounds_to}}]),c}(m["d"]),a);Object(d["a"])([Object(m["c"])({type:Object,default:function(){return{}}})],O.prototype,"item",void 0),O=Object(d["a"])([Object(m["a"])({components:{svgCheckmark:_.a}})],O);var y,j=O,k=j,w=c("2877"),D=Object(w["a"])(k,b,p,!1,null,null,null),Y=D.exports,x=c("a6f4"),L=c("cc2d"),M=(y=function(t){Object(n["a"])(c,t);var e=Object(l["a"])(c);function c(){var t;Object(s["a"])(this,c);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i)),Object(v["a"])(Object(o["a"])(t),"item",void 0),t}return Object(h["a"])(c,[{key:"result",get:function(){try{var t;if("done"!==(null===(t=this.item.yandex_check)||void 0===t?void 0:t.status))return null;var e=JSON.parse(this.item.yandex_check.result);return e}catch(c){return null}}},{key:"items",get:function(){var t,e;return this.result?(console.log(this.result),null===(t=this.result)||void 0===t||null===(e=t.free_scoring)||void 0===e?void 0:e.report):[]}},{key:"showDrivers",get:function(){return"done"===this.item.statuses.yandex}}]),c}(m["d"]),y);Object(d["a"])([Object(m["c"])({type:Object,default:function(){return{}}})],M.prototype,"item",void 0),M=Object(d["a"])([Object(m["a"])({components:{DriverCheckInfoDataItem:Y},setup:function(t){var e=Object(x["g"])(t),c=e.item,a=Object(x["a"])((function(){return"done"!==c.value.statuses.yandex&&"error"!==c.value.statuses.yandex})),i=Object(x["e"])(null);return Object(x["c"])((function(){if(a.value){var t=Object(L["a"])({container:i.value,isFullPage:!1,width:40,height:40}),e=t.show;e()}})),{loadingContainer:i,isLoadingDriver:a}}})],M);var P,A=M,E=A,F=(c("ac2a"),Object(w["a"])(E,u,f,!1,null,null,null)),I=F.exports,S=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"driver-check-info-fcp"},[c("div",{staticClass:"app-card"},[c("div",{staticClass:"row row-no-gutter"},[c("app-accardion-col",{staticClass:"col-12"},[c("div",{staticClass:"font-md color-violet"},[t._v("ФССП")])])],1),t.showFcp?c("div",t._l(t.items,(function(t,e){return c("driver-check-info-fcp-item",{key:e,staticClass:"driver-check-info-fcp__item",attrs:{item:t}})})),1):t._e(),t.isLoadingFcp?c("div",{ref:"loadingContainer",staticClass:"driver-check-info-fcp-loading"}):t._e()])])},$=[],N=(c("13d5"),function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",{staticClass:"row row-no-gutter"},[c("app-accardion-col",{staticClass:"col-lg-12"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-4 col color-grey-3"},[t._v("ФИО:")]),c("div",{staticClass:"col-lg-8 col color-grey-2"},[t._v(t._s(t.item.name))])])])],1),c("div",{staticClass:"row row-no-gutter"},[c("app-accardion-col",{staticClass:"col-12"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-4 col color-grey-3"},[t._v(" Исполнительное производство: ")]),c("div",{staticClass:"col-lg-8 col color-grey-2"},[t._v(" "+t._s(t.item.exe_production)+" ")])])]),c("app-accardion-col",{staticClass:"col-12"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-4 col color-grey-3"},[t._v(" Исполнительная документация: ")]),c("div",{staticClass:"col-lg-8 col color-grey-2"},[t._v(" "+t._s(t.item.details)+" ")])])]),c("app-accardion-col",{staticClass:"col-12"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-4 col color-grey-3"},[t._v(" Сумма к исполнению: ")]),c("div",{staticClass:"col-lg-8 col color-grey-2"},[t._v(" "+t._s(t.item.subject)+" ")])])])],1)])}),T=[],B=(P=function(t){Object(n["a"])(c,t);var e=Object(l["a"])(c);function c(){var t;Object(s["a"])(this,c);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i)),Object(v["a"])(Object(o["a"])(t),"item",void 0),t}return c}(m["d"]),P);Object(d["a"])([Object(m["c"])({type:Object,default:function(){return{}}})],B.prototype,"item",void 0),B=Object(d["a"])([m["a"]],B);var J,V=B,G=V,H=Object(w["a"])(G,N,T,!1,null,null,null),R=H.exports,q=(J=function(t){Object(n["a"])(c,t);var e=Object(l["a"])(c);function c(){var t;Object(s["a"])(this,c);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i)),Object(v["a"])(Object(o["a"])(t),"item",void 0),t}return Object(h["a"])(c,[{key:"items",get:function(){var t;return"done"!==this.item.statuses.fssp?[]:Array.isArray(null===(t=this.item.fssp_check)||void 0===t?void 0:t.result)?this.item.fssp_check.result.reduce((function(t,e){return Array.isArray(e.result)?t.concat(e.result):t}),[]):[]}},{key:"showFcp",get:function(){return"done"===this.item.statuses.fssp}}]),c}(m["d"]),J);Object(d["a"])([Object(m["c"])({type:Object,default:function(){return{}}})],q.prototype,"item",void 0),q=Object(d["a"])([Object(m["a"])({components:{DriverCheckInfoFcpItem:R},setup:function(t){var e=Object(x["g"])(t),c=e.item,a=Object(x["a"])((function(){return"done"!==c.value.statuses.fssp&&"error"!==c.value.statuses.fssp})),i=Object(x["e"])(null);return Object(x["c"])((function(){if(a.value){var t=Object(L["a"])({container:i.value,isFullPage:!1,width:40,height:40}),e=t.show;e()}})),{loadingContainer:i,isLoadingFcp:a}}})],q);var z,K=q,Q=K,U=(c("33a0"),Object(w["a"])(Q,S,$,!1,null,null,null)),W=U.exports,X=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"driver-check-info-driver page-items__item"},[c("app-accardion",{attrs:{showArrow:!1,isOpen:!0,headerClass:"border"},scopedSlots:t._u([{key:"header",fn:function(){return[c("app-accardion-col",{class:t.headerCol},[c("div",[t._v(t._s(t.item.name)+" "+t._s(t.item.lastname)+" "+t._s(t.item.surname))])]),c("app-accardion-col",{class:t.headerCol},[c("div",{staticClass:"driver-check-info-driver__header-item"},[c("span",[t._v(" Паспорт")]),c("span",{staticClass:"driver-check-info-driver__header-info"},[t._v(" "+t._s(t.item.NumberOfPassport)+" ")]),t.isPassportValid?c("svgCheckmarkCircle"):t._e()],1)]),c("app-accardion-col",{class:t.headerCol},[c("div",{staticClass:"driver-check-info-driver__header-item"},[c("span",[t._v(" В.У.")]),c("span",{staticClass:"driver-check-info-driver__header-info"},[t._v(" "+t._s(t.item.SerialDriverLicense)+" ")]),t.isPassportValid?c("svgCheckmarkCircle"):t._e()],1)])]},proxy:!0}])},[[c("div",{staticClass:"w-100"},[t.showLicense?c("div",{staticClass:"row w-100 row-no-gutter"},[c("app-accardion-col",{staticClass:"col-12"},[c("div",{staticClass:"color-violet font-md mb-0"},[t._v("Проверка В.У.")])]),c("app-accardion-col",{class:t.contentCol},[c("div",{staticClass:"row"},[c("div",{staticClass:"col color-grey-3"},[t._v("Дата рождения:")]),c("div",{staticClass:"col color-grey-2"},[t._v(" "+t._s(t._f("moment")(t.item.DateOfBirth,"DD.MM.YYYY"))+" ")])]),c("div",{staticClass:"row"},[c("div",{staticClass:"col color-grey-3"},[t._v("Дата выдачи:")]),c("div",{staticClass:"col color-grey-2"},[t._v(" "+t._s(t._f("moment")(t.item.DateDriverLicense,"DD.MM.YYYY"))+" ")])]),c("div",{staticClass:"row"},[c("div",{staticClass:"col color-grey-3"},[t._v("Срок действия:")]),c("div",{staticClass:"col color-grey-2"},[t._v(" "+t._s(t._f("moment")(t.item.license_check.date,"DD.MM.YYYY"))+" ")])]),c("div",{staticClass:"row"},[c("div",{staticClass:"col color-grey-3"},[t._v("Категории ТС:")]),c("div",{staticClass:"col color-grey-2"},[t._v(t._s(t.licenseCheck.cat))])])]),t._l(t.decis,(function(e,a){return c("app-accardion-col",{key:a,class:t.contentCol},[c("div",{staticClass:"color-grey-3 font-500"},[c("span",[t._v("Лишение права управления #"+t._s(a+1))])]),c("div",{staticClass:"row"},[c("div",{staticClass:"col color-grey-3"},[t._v("Дата постановления:")]),c("div",{staticClass:"col color-grey-2"},[t._v(" "+t._s(t._f("moment")(e.date,"DD.MM.YYYY"))+" ")])]),c("div",{staticClass:"row"},[c("div",{staticClass:"col color-grey-3"},[t._v("Срок лишения:")]),c("div",{staticClass:"col color-grey-2"},[t._v(t._s(e.srok)+" мес")])]),c("div",{staticClass:"row"},[c("div",{staticClass:"col color-grey-3"},[t._v("Состояние:")]),c("div",{staticClass:"col color-grey-2"},[t._v(t._s(e.comment))])])])}))],2):t._e(),t.loadingLicense?c("div",{ref:"loadingContainer",staticClass:"driver-check-info-driver-loading"}):t._e()])]],2)],1)},Z=[],tt=(z=function(t){Object(n["a"])(c,t);var e=Object(l["a"])(c);function c(){var t;Object(s["a"])(this,c);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i)),Object(v["a"])(Object(o["a"])(t),"item",void 0),t}return Object(h["a"])(c,[{key:"headerCol",get:function(){return"col-lg-4 font-md grey-1"}},{key:"contentCol",get:function(){return"col-lg-4"}},{key:"licenseCheck",get:function(){return this.item.license_check||{}}},{key:"showLicense",get:function(){return"done"===this.item.statuses.license}},{key:"isPassportValid",get:function(){var t;return"done"===this.item.statuses.passport&&!(null===(t=this.item.passport_check)||void 0===t||!t.is_valid_passport)}},{key:"decis",get:function(){try{var t,e=JSON.parse(null===(t=this.item.license_check)||void 0===t?void 0:t.decis);return e||[]}catch(c){return[]}}}]),c}(m["d"]),z);Object(d["a"])([Object(m["c"])({type:Object,default:function(){return{}}})],tt.prototype,"item",void 0),tt=Object(d["a"])([Object(m["a"])({components:{svgCheckmarkCircle:_.a},setup:function(t){var e=Object(x["g"])(t),c=e.item,a=Object(x["e"])(null),i=Object(x["a"])((function(){return"done"!==c.value.statuses.license&&"error"!==c.value.statuses.license}));return Object(x["c"])((function(){if(i.value){var t=Object(L["a"])({container:a.value,isFullPage:!1,width:40,height:40}),e=t.show;e()}})),{loadingContainer:a,loadingLicense:i}}})],tt);var et,ct=tt,at=ct,it=(c("f411"),Object(w["a"])(at,X,Z,!1,null,null,null)),rt=it.exports,st=c("b3cb"),ot=c("14c9"),nt=c("6f24"),lt=c("8fbb"),vt=(et=function(t){Object(n["a"])(c,t);var e=Object(l["a"])(c);function c(){var t;Object(s["a"])(this,c);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i)),Object(v["a"])(Object(o["a"])(t),"id",void 0),t}return c}(m["d"]),et);Object(d["a"])([Object(m["c"])(String)],vt.prototype,"id",void 0),vt=Object(d["a"])([Object(m["a"])({metaInfo:{title:"Проверка водителя"},components:{PageTitle:st["a"],DriverCheckInfoDriver:rt,DriverCheckInfoFcp:W,DriverCheckInfoData:I},setup:function(t){var e=Object(nt["a"])(),c=e.currentRoute.params.id,a=Object(ot["b"])({loading:!0,toast:{error:function(t){return e.push({name:"DriverCheck"}),Object(lt["a"])()(t)}}}),i=a.exec,r=a.result,s=(a.error,a.isLoading);i({id:parseInt(c)});var o=Object(x["a"])((function(){return r.value||{}})),n=Object(x["a"])((function(){return"done"===o.value.statuses.passport}));return{showPassport:n,isLoading:s,item:o}}})],vt);var dt=vt,ut=dt,ft=(c("fa35"),Object(w["a"])(ut,i,r,!1,null,null,null));e["default"]=ft.exports},b3cb:function(t,e,c){"use strict";var a,i=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"page-title",class:{"page-title-between":t.between}},[t._t("default")],2)},r=[],s=(c("99af"),c("d4ec")),o=c("257e"),n=c("262e"),l=c("2caf"),v=c("ade3"),d=c("9ab4"),u=c("1b40"),f=(a=function(t){Object(n["a"])(c,t);var e=Object(l["a"])(c);function c(){var t;Object(s["a"])(this,c);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i)),Object(v["a"])(Object(o["a"])(t),"between",void 0),t}return c}(u["d"]),a);Object(d["a"])([Object(u["c"])({type:Boolean,default:!1})],f.prototype,"between",void 0),f=Object(d["a"])([u["a"]],f);var h=f,b=h,p=(c("df2d"),c("2877")),m=Object(p["a"])(b,i,r,!1,null,null,null);e["a"]=m.exports},c84e:function(t,e,c){c("99af");var a=c("ded3"),i=c("4082");t.exports={functional:!0,render:function(t,e){var c=e._c,r=(e._v,e.data),s=e.children,o=void 0===s?[]:s,n=r.class,l=r.staticClass,v=r.style,d=r.staticStyle,u=r.attrs,f=void 0===u?{}:u,h=i(r,["class","staticClass","style","staticStyle","attrs"]);return c("svg",a({class:[n,l],style:[v,d],attrs:Object.assign({width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f)},h),o.concat([c("rect",{attrs:{width:"24",height:"24",rx:"12",fill:"#27AE60"}}),c("path",{attrs:{d:"M17.6 7.8l-7.7 7.7L6.4 12",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]))}}},da9f:function(t,e,c){},df2d:function(t,e,c){"use strict";c("da9f")},e55b:function(t,e,c){},f411:function(t,e,c){"use strict";c("6c8e")},fa35:function(t,e,c){"use strict";c("0285")}}]);
//# sourceMappingURL=chunk-978662d6.87f66708.js.map