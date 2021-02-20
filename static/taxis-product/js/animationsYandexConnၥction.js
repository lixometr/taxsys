$(document).ready(function(){
  let windowWidth = $(window).width();  
  
  //------- MONAY -------
  let yandex1__Header_Os = $(".yandex1__header").offset().top,
      yandex2__info_Os = $(".yandex2__info").offset().top,
      yandex3__info_Os = $(".yandex3__info").offset().top,
      yandex4__info_Os = $(".yandex4__info").offset().top,
      yandex5__info_Os = $(".yandex5__info").offset().top,
      yandex6__info_Os = $(".yandex6__info").offset().top,
      yandex7__info_Os = $(".yandex7__info").offset().top,
      yandex8__info_Os = $(".yandex8__info").offset().top,
      yandex9__info_Os = $(".yandex9__info").offset().top,
      yandex10__info_Os = $(".yandex10__info").offset().top,
      money11_Footer_Os = $(".money11__footer").offset().top;
	
  //animate headers
  animateYandex1();
  
  //animate blocks on load
  let scroll_amountOnload = $(window).scrollTop() + $(window).height()/1.4;
	 
  animateYandex(scroll_amountOnload);	
  
  //animate blocks on scroll
  $(window).scroll(function() {
	let scroll_amount = $(window).scrollTop() + $(window).height()/1.4;
	 
	animateYandex(scroll_amount);	
  });
  
  
  //------- YANDEX ANIMATIONS -------
  function animateYandex(scroll_amount){
    animateYandex1();
    animateYandex2(scroll_amount);
    animateYandex3(scroll_amount);
    animateYandex4(scroll_amount);
    animateYandex5(scroll_amount);
    animateYandex6(scroll_amount);
    animateYandex7(scroll_amount);
    animateYandex8(scroll_amount);
    animateYandex9(scroll_amount);
    animateYandex10(scroll_amount);
    animateMoney11(scroll_amount);
  }
  
  function animateYandex1(){
    $(".navbar").animate({top: "0", opacity: 1}, 800);
    $(".yandex1__header .left h1").delay(500).animate({opacity: 1}, 1000);
    $(".yandex1__header .left .text").delay(1000).animate({opacity: 1}, 1000);
    $(".yandex1__header .left ul li:nth-child(1)").delay(1500).animate({top: "0", opacity: 1}, 1000);
    $(".yandex1__header .left ul li:nth-child(2)").delay(1600).animate({top: "0", opacity: 1}, 1000);
    $(".yandex1__header .left ul li:nth-child(3)").delay(1700).animate({top: "0", opacity: 1}, 1000);
    $(".yandex1__header .left ul li:nth-child(4)").delay(1800).animate({top: "0", opacity: 1}, 1000);
    $(".yandex1__header .left ul li:nth-child(5)").delay(1900).animate({top: "0", opacity: 1}, 1000);
    if(windowWidth > 992) {
      $(".yandex1__header .right").delay(1000).animate({top: "0", opacity: 1}, 1000);
    } else {
      $(".yandex1__header .right").delay(2000).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateYandex2(scroll_amount){
    if(scroll_amount > yandex2__info_Os){
      $(".yandex2__info .left h2").delay(500).animate({opacity: 1}, 1000);
      $(".yandex2__info .left .hr").delay(500).animate({opacity: 1}, 1000);
      $(".yandex2__info .left ul li:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".yandex2__info .left ul li:nth-child(2)").delay(1200).animate({top: "0", opacity: 1}, 1000);
      $(".yandex2__info .left ul li:nth-child(3)").delay(1400).animate({top: "0", opacity: 1}, 1000);
      $(".yandex2__info .left ul li:nth-child(4)").delay(1600).animate({top: "0", opacity: 1}, 1000);
      if(windowWidth > 992) {
        $(".yandex2__info .right").delay(1000).animate({top: "0", opacity: 1}, 1000);
      } else {
        $(".yandex2__info .right").delay(1600).animate({top: "0", opacity: 1}, 1000);
      }
    }
  }
  
  function animateYandex3(scroll_amount){
    if(scroll_amount > yandex3__info_Os){
      $(".yandex3__info .left .title").delay(500).animate({opacity: 1}, 1000);
      $(".yandex3__info .left .hr").delay(500).animate({opacity: 1}, 1000);
      $(".yandex3__info .left .title2").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".yandex3__info .left .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".yandex3__info .right").delay(1000).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateYandex4(scroll_amount){
    if(scroll_amount > yandex4__info_Os){
      $(".yandex4__info .right .title").delay(500).animate({opacity: 1}, 1000);
      $(".yandex4__info .right .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".yandex4__info .right input").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".yandex4__info .left").delay(1000).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateYandex5(scroll_amount){
    if(scroll_amount > yandex5__info_Os){
      $(".yandex5__info .title").delay(500).animate({opacity: 1}, 1000);
      $(".yandex5__info .hr").delay(500).animate({opacity: 1}, 1000);
      $(".yandex5__info .text").delay(500).animate({top: "0", opacity: 1}, 1000);
      if(windowWidth > 1140) {
        $(".yandex5__info .col:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".yandex5__info .col:nth-child(2)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".yandex5__info .col:nth-child(3)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".yandex5__info .col:nth-child(4)").delay(1500).animate({top: "0", opacity: 1}, 1000);
        $(".yandex5__info .col:nth-child(5)").delay(1500).animate({top: "0", opacity: 1}, 1000);
        $(".yandex5__info .col:nth-child(6)").delay(1500).animate({top: "0", opacity: 1}, 1000);
      } else if (windowWidth > 575) {
        $(".yandex5__info .col:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".yandex5__info .col:nth-child(2)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".yandex5__info .col:nth-child(3)").delay(1500).animate({top: "0", opacity: 1}, 1000);
        $(".yandex5__info .col:nth-child(4)").delay(1500).animate({top: "0", opacity: 1}, 1000);
        $(".yandex5__info .col:nth-child(5)").delay(2000).animate({top: "0", opacity: 1}, 1000);
        $(".yandex5__info .col:nth-child(6)").delay(2000).animate({top: "0", opacity: 1}, 1000);
      } else {
        $(".yandex5__info .col:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".yandex5__info .col:nth-child(2)").delay(1200).animate({top: "0", opacity: 1}, 1000);
        $(".yandex5__info .col:nth-child(3)").delay(1400).animate({top: "0", opacity: 1}, 1000);
        $(".yandex5__info .col:nth-child(4)").delay(1600).animate({top: "0", opacity: 1}, 1000);
        $(".yandex5__info .col:nth-child(5)").delay(1800).animate({top: "0", opacity: 1}, 1000);
        $(".yandex5__info .col:nth-child(6)").delay(2000).animate({top: "0", opacity: 1}, 1000);
      }
    }
  }
  
  function animateYandex6(scroll_amount){
    if(scroll_amount > yandex6__info_Os){
      $(".yandex6__info .right .title").delay(500).animate({opacity: 1}, 1000);
      $(".yandex6__info .right .hr").delay(500).animate({opacity: 1}, 1000);
      $(".yandex6__info .text").delay(500).animate({top: "0", opacity: 1}, 1000);
      $(".yandex6__info .right .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".yandex6__info .left").delay(1000).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateYandex7(scroll_amount){
    if(scroll_amount > yandex7__info_Os){
      $(".yandex7__info .title").delay(500).animate({opacity: 1}, 1000);
      $(".yandex7__info .hr").delay(500).animate({opacity: 1}, 1000);
      $(".yandex7__info .textSlide").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".yandex7__info .swiper-pagination").delay(1000).animate({opacity: 1}, 1000);
      $(".yandex7__info .swiper-button-prev").delay(1000).fadeIn(1000);
      $(".yandex7__info .swiper-button-next").delay(1000).fadeIn(1000);
      $(".yandex7__info .right").delay(1500).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateYandex8(scroll_amount){
    if(scroll_amount > yandex8__info_Os){
      $(".yandex8__info .right .title").delay(500).animate({opacity: 1}, 1000);
      $(".yandex8__info .right .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".yandex8__info .right input").delay(1000).animate({top: "0", opacieQ;â1}>¥´1? º$€ >0* /ùAgDlÀ8_z¦.ï	Kã$.-®a7~tí79ô:n!nQevaú®"pÆ'",(Wøi+;Uğ;$}¼ 0u-7ï
!"Ùb`]I ¶=NDˆÔUnbeIm,`qoim¡äÔKekdE<i(rz8El4oiloÕ.v(ûM
 ")iÃ©2vSlL$_k¿OMN|eşğŞjfá8IébÆ}×jz)ö5Hd§ğh òˆ#niqO$åx©ÚYffî`.j"y~Åp`di­±èD)DQşùsk\m€{jq±jÉiÉ>€1y.;p!4pK(ã$"Ò(ïı¡Dluplßaíf¶"0Xp`"´ahaù­5
7!¢ÅömMúå#}OøA7I¤araqxlÀ°)¹Q?B0h` p‚­",!áJ'ü}şSØnFg`*tQˆrj*-ºœXkm­˜44#¾akI|x6äˆqfip¶<Šc< íqÁZ+v1ú ñk¹711©+:Å”¦$H"78ÿ¸`&@7b=İ_k"†w@9bo«Htw¹ªîELh9$5&P¨'1oiÁEğex
ke¶B†h$$îğ[Jâin $lNÈw0p;	KP˜(i,"Qo
s²" ¦U'#âi.´Cæ`hc%%QaN,P|q&Skri¾lm[ïuï}ik«ä¨!`MDIùcv,üm6 M+ı/<bt|Áêqmr§0VV	bfå}ş í{M[*`A#`¢@`
.Ùk/$%ØÙiN\Û$.5¹¨eç	
le5cy)$t¹Bcnæ\Evç¢{qioñVù;°1{,èÙa1p™;
* ¨=Etd¨)íY¡nheU3T×C}~âï uLƒmºhåm#g
0p2h&Q~)| x 
w6!Ecw,˜x
3}¤¢2yµË;HA %ïª$Px(= 
)dFtgcdæo"	Îqïd$E+ïfí}™98rs
¯dmRyUİUöu­~N ¦`iö¸9rcn/v!ıg7ZTx>%monÁy uÛÖDgtk2ÊSHš'i  )  {,"JojneØ9±`è4e
 ov]zcjÌKga¢$DgOÅ|8-¶0 n1oiDN•e¼o/s%btÆš"`},Ä0,p0‰;1¡@äêumr®ksO5ó1}^oCpAp jp«	 5í*j;OõMaq(Ÿ00ìQÇIma4õ =&qAs!•½X#1ı¼;((`	3Ëª 5 €²$(3Nîkou|³ğgkteã(Fmxt
Ï'9!å,i|É98h.aîqy9¯(Icê`wHly:à¹tnõ8¶ ¡?=
 i*8<…f`PÿØ
]»