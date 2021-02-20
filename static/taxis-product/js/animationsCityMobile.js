$(document).ready(function(){
  let windowWidth = $(window).width();  
  
  //------- MONAY -------
  let cityMobile1__Header_Os = $(".cityMobile1__header").offset().top,
      cityMobile2__info_Os = $(".cityMobile2__info").offset().top,
      cityMobile3__info_Os = $(".cityMobile3__info").offset().top,
      cityMobile4__info_Os = $(".cityMobile4__info").offset().top,
      cityMobile5__info_Os = $(".cityMobile5__info").offset().top,
      cityMobile6__info_Os = $(".cityMobile6__info").offset().top,
      cityMobile7__info_Os = $(".cityMobile7__info").offset().top,
      cityMobile8__info_Os = $(".cityMobile8__info").offset().top,
      cityMobile9__info_Os = $(".cityMobile9__info").offset().top,
      money11_Footer_Os = $(".money11__footer").offset().top;
	
  //animate headers
  animateCityMobile1();
  
  //animate blocks on load
  let scroll_amountOnload = $(window).scrollTop() + $(window).height()/1.4;
	 
  animateCityMobile(scroll_amountOnload);	
  
  //animate blocks on scroll
  $(window).scroll(function() {
	let scroll_amount = $(window).scrollTop() + $(window).height()/1.4;
	 
	animateCityMobile(scroll_amount);	
  });
  
  
  //------- YANDEX ANIMATIONS -------
  function animateCityMobile(scroll_amount){
    animateCityMobile1();
    animateCityMobile2(scroll_amount);
    animateCityMobile3(scroll_amount);
    animateCityMobile4(scroll_amount);
    animateCityMobile5(scroll_amount);
    animateCityMobile6(scroll_amount);
    animateCityMobile7(scroll_amount);
    animateCityMobile8(scroll_amount);
    animateCityMobile9(scroll_amount);
    animateMoney11(scroll_amount);
  }
  
  function animateCityMobile1(){
    $(".navbar").animate({top: "0", opacity: 1}, 800);
    $(".cityMobile1__header .left h1").delay(500).animate({opacity: 1}, 1000);
    $(".cityMobile1__header .left ul li:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
    $(".cityMobile1__header .left ul li:nth-child(2)").delay(1100).animate({top: "0", opacity: 1}, 1000);
    $(".cityMobile1__header .left ul li:nth-child(3)").delay(1200).animate({top: "0", opacity: 1}, 1000);
    $(".cityMobile1__header .left ul li:nth-child(4)").delay(1300).animate({top: "0", opacity: 1}, 1000);
    if(windowWidth > 992) {
      $(".cityMobile1__header .right").delay(1000).animate({top: "0", opacity: 1}, 1000);
    } else {
      $(".cityMobile1__header .right").delay(1500).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateCityMobile2(scroll_amount){
    if(scroll_amount > cityMobile2__info_Os){
      $(".cityMobile2__info .left h2").delay(500).animate({opacity: 1}, 1000);
      $(".cityMobile2__info .left .hr").delay(500).animate({opacity: 1}, 1000);
      $(".cityMobile2__info .left .title2").delay(800).animate({opacity: 1}, 1000);
      $(".cityMobile2__info .left ul li:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".cityMobile2__info .left ul li:nth-child(2)").delay(1200).animate({top: "0", opacity: 1}, 1000);
      $(".cityMobile2__info .left ul li:nth-child(3)").delay(1400).animate({top: "0", opacity: 1}, 1000);
      $(".cityMobile2__info .left ul li:nth-child(4)").delay(1600).animate({top: "0", opacity: 1}, 1000);
      if(windowWidth > 992) {
        $(".cityMobile2__info .right").delay(1000).animate({top: "0", opacity: 1}, 1000);
      } else {
        $(".cityMobile2__info .right").delay(1600).animate({top: "0", opacity: 1}, 1000);
      }
    }
  }
  
  function animateCityMobile3(scroll_amount){
    if(scroll_amount > cityMobile3__info_Os){
      $(".cityMobile3__info .left .title").delay(500).animate({opacity: 1}, 1000);
      $(".cityMobile3__info .left .hr").delay(500).animate({opacity: 1}, 1000);
      $(".cityMobile3__info .left .title2").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".cityMobile3__info .left .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".cityMobile3__info .right").delay(1000).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateCityMobile4(scroll_amount){
    if(scroll_amount > cityMobile4__info_Os){
      $(".cityMobile4__info .title").delay(500).animate({opacity: 1}, 1000);
      $(".cityMobile4__info .hr").delay(500).animate({opacity: 1}, 1000);
      $(".cityMobile4__info .text").delay(500).animate({top: "0", opacity: 1}, 1000);
      if(windowWidth > 1140) {
        $(".cityMobile4__info .col:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".cityMobile4__info .col:nth-child(2)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".cityMobile4__info .col:nth-child(3)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".cityMobile4__info .col:nth-child(4)").delay(1500).animate({top: "0", opacity: 1}, 1000);
        $(".cityMobile4__info .col:nth-child(5)").delay(1500).animate({top: "0", opacity: 1}, 1000);
        $(".cityMobile4__info .col:nth-child(6)").delay(1500).animate({top: "0", opacity: 1}, 1000);
      } else if (windowWidth > 575) {
        $(".cityMobile4__info .col:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".cityMobile4__info .col:nth-child(2)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".cityMobile4__info .col:nth-child(3)").delay(1500).animate({top: "0", opacity: 1}, 1000);
        $(".cityMobile4__info .col:nth-child(4)").delay(1500).animate({top: "0", opacity: 1}, 1000);
        $(".cityMobile4__info .col:nth-child(5)").delay(2000).animate({top: "0", opacity: 1}, 1000);
        $(".cityMobile4__info .col:nth-child(6)").delay(2000).animate({top: "0", opacity: 1}, 1000);
      } else {
        $(".cityMobile4__info .col:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".cityMobile4__info .col:nth-child(2)").delay(1200).animate({top: "0", opacity: 1}, 1000);
        $(".cityMobile4__info .col:nth-child(3)").delay(1400).animate({top: "0", opacity: 1}, 1000);
        $(".cityMobile4__info .col:nth-child(4)").delay(1600).animate({top: "0", opacity: 1}, 1000);
        $(".cityMobile4__info .col:nth-child(5)").delay(1800).animate({top: "0", opacity: 1}, 1000);
        $(".cityMobile4__info .col:nth-child(6)").delay(2000).animate({top: "0", opacity: 1}, 1000);
      }
    }
  }
  
  function animateCityMobile5(scroll_amount){
    if(scroll_amount > cityMobile5__info_Os){
      $(".cityMobile5__info .title").delay(500).animate({opacity: 1}, 1000);
      $(".cityMobile5__info .hr").delay(500).animate({opacity: 1}, 1000);
      $(".cityMobile5__info .textSlide").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".cityMobile5__info .swiper-pagination").delay(1000).animate({opacity: 1}, 1000);
      $(".cityMobile5__info .swiper-button-prev").delay(1000).fadeIn(1000);
      $(".cityMobile5__info .swiper-button-next").delay(1000).fadeIn(1000);
      $(".cityMobile5__info .right").delay(1500).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateCityMobile6(scroll_amount){
    if(scroll_amount > cityMobile6__info_Os){
      $(".cityMobile6__info .right .title").delay(500).animate({opacity: 1}, 1000);
      $(".cityMobile6__info .right .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".cityMobile6__info .right input").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".cityMobile6__info .left").delay(1000).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateCityMobile7(scroll_amount){
    if(scroll_amount > cityMobile7__info_Os){
      $(".cityMobile7__info h3").delay(500).animate({opacity: 1}, 1000);
      $(".cityMobile7__info .hr").delay(500).animate({opacity: 1}, 1000);
      $(".cityMobile7__info .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".cityMobile7__info .right").delay(1000).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateCityMobile8(scroll_amount){
    if(scroll_amount > cityMobile8__info_Os){
      $(".cityMobile8__info .title").delay(500).animate({opacity: 1}, 1000);
      $(".cityMobile8__info ul").delay(1000).animate({opacity: 1}, 1000);
    }
  }
  
  function animateCityMobile9(scroll_amount){
    if(scroll_amount > cityMobile9__info_Os){
      $(".cityMobile9__info .right .title").delay(500).animate({opacity: 1}, 1000);
      $(".cityMobile9__info .right .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".cityMobile9__info .right input").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".cityMobile9__info .left").delay(1000).animate({top: "0", opacity: 1}, 1000);
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