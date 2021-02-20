$(document).ready(function(){
  let windowWidth = $(window).width();  
  
  //------- MONAY -------
  let money1_Header_Os = $(".money1__header").offset().top,
      money2_Os = $(".money2__info").offset().top,
      money3_Os = $(".money3__info").offset().top,
      money4_Os = $(".money4__info").offset().top,
      money5_Os = $(".money5__info").offset().top,
      money6_Os = $(".money6__info").offset().top,
      money7_Os = $(".money7__info").offset().top,
      money8_Os = $(".money8__info").offset().top,
      money9_Os = $(".money9s1__info").offset().top,
      money10_Os = $(".money10__info").offset().top,
      money11_Footer_Os = $(".money11__footer").offset().top;
	
  //animate headers
  animateMoney1();
  
  //animate blocks on load
  let scroll_amountOnload = $(window).scrollTop() + $(window).height()/1.4;
	 
  animateMoney(scroll_amountOnload);	
  
  //animate blocks on scroll
  $(window).scroll(function() {
	let scroll_amount = $(window).scrollTop() + $(window).height()/1.4;
	 
	animateMoney(scroll_amount);	
  });
  
  
  //------- AUTOPARKPAY ANIMATIONS -------
  
  //------- MONAY ANIMATIONS -------
  function animateMoney(scroll_amount){
    animateMoney1();
    animateMoney2(scroll_amount);
    animateMoney3(scroll_amount);	
    animateMoney4(scroll_amount);	
    animateMoney5(scroll_amount);	
    animateMoney6(scroll_amount);	
    animateMoney7(scroll_amount);	
    animateMoney8(scroll_amount);	
    animateMoney9(scroll_amount);	
    animateMoney10(scroll_amount);
    animateMoney11(scroll_amount);
  }
  
  function animateMoney1(){
    $(".navbar").animate({top: "0", opacity: 1}, 800);
    $(".money1__header .left h1").delay(500).animate({opacity: 1}, 1000);
    $(".money1__header .left h2").delay(1000).animate({opacity: 1}, 1000);
    $(".money1__header .left ul li:nth-child(1)").delay(1500).animate({top: "0", opacity: 1}, 1000);
    $(".money1__header .left ul li:nth-child(2)").delay(1600).animate({top: "0", opacity: 1}, 1000);
    $(".money1__header .left ul li:nth-child(3)").delay(1700).animate({top: "0", opacity: 1}, 1000);
    $(".money1__header .left ul li:nth-child(4)").delay(1800).animate({top: "0", opacity: 1}, 1000);
    $(".money1__header .left ul li:nth-child(5)").delay(1900).animate({top: "0", opacity: 1}, 1000);
    $(".money1__header .left .buttons").delay(2000).animate({top: "0", opacity: 1}, 1000);
    if(windowWidth > 992) {
      $(".money1__header .right").delay(1000).animate({top: "0", opacity: 1}, 1000);
    } else {
      $(".money1__header .right").delay(2000).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateMoney2(scroll_amount){
    if(scroll_amount > money2_Os){
      $(".money2__info .left .title").delay(500).animate({opacity: 1}, 1000);
      $(".money2__info .left .hr").delay(500).animate({opacity: 1}, 1000);
      $(".money2__info .left ul li:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".money2__info .left ul li:nth-child(2)").delay(1200).animate({top: "0", opacity: 1}, 1000);
      $(".money2__info .left ul li:nth-child(3)").delay(1400).animate({top: "0", opacity: 1}, 1000);
      $(".money2__info .left ul li:nth-child(4)").delay(1600).animate({top: "0", opacity: 1}, 1000);
      $(".money2__info .left .buttons").delay(1800).animate({top: "0", opacity: 1}, 1000);
      if(windowWidth > 992) {
        $(".money2__info .right").delay(1000).animate({top: "0", opacity: 1}, 1000);
      } else {
        $(".money2__info .right").delay(1800).animate({top: "0", opacity: 1}, 1000);
      }
    }
  }
  
  function animateMoney3(scroll_amount){
    if(scroll_amount > money3_Os){
      $(".money3__info .left h2").delay(500).animate({opacity: 1}, 1000);
      $(".money3__info .left .hr").delay(500).animate({opacity: 1}, 1000);
      $(".money3__info .left .title").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".money3__info .left .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".money3__info .right").delay(1000).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateMoney4(scroll_amount){
    if(scroll_amount > money4_Os){
      $(".money4__info .title").delay(500).animate({opacity: 1}, 1000);
      $(".money4__info .hr").delay(500).animate({opacity: 1}, 1000);
      $(".money4__info .text").delay(500).animate({top: "0", opacity: 1}, 1000);
      if(windowWidth > 1140) {
        $(".money4__info .col:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".money4__info .col:nth-child(2)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".money4__info .col:nth-child(3)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".money4__info .col:nth-child(4)").delay(1500).animate({top: "0", opacity: 1}, 1000);
        $(".money4__info .col:nth-child(5)").delay(1500).animate({top: "0", opacity: 1}, 1000);
        $(".money4__info .col:nth-child(6)").delay(1500).animate({top: "0", opacity: 1}, 1000);
      } else if (windowWidth > 575) {
        $(".money4__info .col:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".money4__info .col:nth-child(2)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".money4__info .col:nth-child(3)").delay(1500).animate({top: "0", opacity: 1}, 1000);
        $(".money4__info .col:nth-child(4)").delay(1500).animate({top: "0", opacity: 1}, 1000);
        $(".money4__info .col:nth-child(5)").delay(2000).animate({top: "0", opacity: 1}, 1000);
        $(".money4__info .col:nth-child(6)").delay(2000).animate({top: "0", opacity: 1}, 1000);
      } else {
        $(".money4__info .col:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".money4__info .col:nth-child(2)").delay(1200).animate({top: "0", opacity: 1}, 1000);
        $(".money4__info .col:nth-child(3)").delay(1400).animate({top: "0", opacity: 1}, 1000);
        $(".money4__info .col:nth-child(4)").delay(1600).animate({top: "0", opacity: 1}, 1000);
        $(".money4__info .col:nth-child(5)").delay(1800).animate({top: "0", opacity: 1}, 1000);
        $(".money4__info .col:nth-child(6)").delay(2000).animate({top: "0", opacity: 1}, 1000);
      }
    }
  }
  
  function animateMoney5(scroll_amount){
    if(scroll_amount > money5_Os){
      $(".money5__info .right .title").delay(500).animate({opacity: 1}, 1000);
      $(".money5__info .right .hr").delay(500).animate({opacity: 1}, 1000);
      $(".money5__info .right .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".money5__info .left").delay(1000).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateMoney6(scroll_amount){
    if(scroll_amount > money6_Os){
      $(".money6__info .head .title").delay(500).animate({opacity: 1}, 1000);
      $(".money6__info .head .hr").delay(500).animate({opacity: 1}, 1000);
      $(".money6__info .body .titleSlide").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".money6__info .body .textSlide").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".money6__info .body .swiper-pagination").delay(1000).animate({opacity: 1}, 1000);
      $(".money6__info .body .swiper-button-prev").delay(1000).animate({opacity: 1}, 1000);
      $(".money6__info .body .swiper-button-next").delay(1000).animate({opacity: 1}, 1000);
      $(".money6__info .body .swiper-slide .right").delay(1500).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateMoney7(scroll_amount){
    if(scroll_amount > money7_Os){
      $(".money7__info .right h3").delay(500).animate({opacity: 1}, 1000);
      $(".money7__info .right p").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".money7__info .right input").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".money7__info .left").delay(1000).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateMoney8(scroll_amount){
    if(scroll_amount > money8_Os){
      $(".money8__info .left .title").delay(500).animate({opacity: 1}, 1000);
      $(".money8__info .left .hr").delay(500).animate({opacity: 1}, 1000);
      $(".money8__info .left .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".money8__info .left .buttons").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".money8__info .right").delay(1500).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateMoney9(scroll_amount){
    if(scroll_amount > money9_Os){
      $(".money9s1__info .title").delay(500).animate({opacity: 1}, 1000);
      $(".money9s1__info .hr").delay(500).animate({opacity: 1}, 1000);
      if(windowWidth > 992) {
        $(".money9s1__info .col:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".money9s1__info .col:nth-child(2)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".money9s1__info .col:nth-child(3)").delay(1000).animate({top: "0", opacity: 1}, 1000);
      } else {
        $(".money9s1__info .col:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".money9s1__info .col:nth-child(2)").delay(1300).animate({top: "0", opacity: 1}, 1000);
        $(".money9s1__info .col:nth-child(3)").delay(1600).animate({top: "0", opacity: 1}, 1000);
      }
      $(".money9s2__info .quote").delay(1700).animate({opacity: 1}, 1000);
      $(".money9s2__info .text").delay(1700).animate({opacity: 1}, 1000);
    }
  }
  
  function animateMoney10(scroll_amount){
    if(scroll_amount > money10_Os){
      $(".money10__info .right h4").delay(500).animate({opacity: 1}, 1000);
      $(".money10__info .right p").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".money10__info .right input").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".money10__info .left").delay(1000).animate({top: "0", opacity: 1}, 1000);
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