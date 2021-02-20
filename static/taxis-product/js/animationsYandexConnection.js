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
      $(".yandex8__info .right input").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".yandex8__info .left").delay(1000).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateYandex9(scroll_amount){
    if(scroll_amount > yandex9__info_Os){
      $(".yandex9__info h3").delay(500).animate({opacity: 1}, 1000);
      $(".yandex9__info .hr").delay(500).animate({opacity: 1}, 1000);
      $(".yandex9__info .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".yandex9__info .right").delay(1000).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateYandex10(scroll_amount){
    if(scroll_amount > yandex10__info_Os){
      $(".yandex10__info .title").delay(500).animate({opacity: 1}, 1000);
      $(".yandex10__info ul").delay(1000).animate({opacity: 1}, 1000);
    }
  }
  
  function animateMoney11(scroll_amount){
    if(scroll_amount > money11_Footer_Os){
      $(".money11__footer .top .logo").delay(500).animate({opacity: 1}, 1000);
      $(".money11__footer .top ul").delay(700).animate({opacity: 1}, 1000);
      $(".money11__footer .bottom").delay(900).animate({opacity: 1}, 1000);
    }
  }
});