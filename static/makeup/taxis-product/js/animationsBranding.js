$(document).ready(function(){
  let windowWidth = $(window).width();  
  
  //------- MONAY -------
  let branding1__Header_Os = $(".branding1__header").offset().top,
	    branding2__info_Os = $(".branding2__info").offset().top,
      branding3__info_Os = $(".branding3__info").offset().top,
      branding4__info_Os = $(".branding4__info").offset().top,
      branding5__info_Os = $(".branding5__info").offset().top,
      branding6__info_Os = $(".branding6__info").offset().top,
      branding7__info_Os = $(".branding7__info").offset().top,
      branding8__info_Os = $(".branding8__info").offset().top,
      money11_Footer_Os = $(".money11__footer").offset().top;
	
  //animate headers
  animateBranding1();
  
  //animate blocks on load
  let scroll_amountOnload = $(window).scrollTop() + $(window).height()/1.4;
	 
  animateBranding(scroll_amountOnload);	
  
  //animate blocks on scroll
  $(window).scroll(function() {
	let scroll_amount = $(window).scrollTop() + $(window).height()/1.4;
	 
	animateBranding(scroll_amount);	
  });
  
  
  //------- YANDEX ANIMATIONS -------
  function animateBranding(scroll_amount){
    animateBranding1();
    animateBranding2(scroll_amount);
    animateBranding3(scroll_amount);
    animateBranding4(scroll_amount);
    animateBranding5(scroll_amount);
    animateBranding6(scroll_amount);
    animateBranding7(scroll_amount);
    animateBranding8(scroll_amount);
    animateMoney11(scroll_amount);
  }
  
  function animateBranding1(){
    $(".navbar").animate({top: "0", opacity: 1}, 800);
    $(".branding1__header .left h1").delay(500).animate({opacity: 1}, 1000);
    $(".branding1__header .left ul li:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
    $(".branding1__header .left ul li:nth-child(2)").delay(1100).animate({top: "0", opacity: 1}, 1000);
    $(".branding1__header .left ul li:nth-child(3)").delay(1200).animate({top: "0", opacity: 1}, 1000);
    $(".branding1__header .left ul li:nth-child(4)").delay(1300).animate({top: "0", opacity: 1}, 1000);
    $(".branding1__header .left ul li:nth-child(5)").delay(1400).animate({top: "0", opacity: 1}, 1000);
    if(windowWidth > 992) {
      $(".branding1__header .right").delay(1000).animate({top: "0", opacity: 1}, 1000);
    } else {
      $(".branding1__header .right").delay(1600).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateBranding2(scroll_amount){
	  if(scroll_amount > branding2__info_Os){
	    $(".branding2__info .title").delay(500).animate({opacity: 1}, 1000);
      $(".branding2__info .hr").delay(500).animate({opacity: 1}, 1000);
      $(".branding2__info .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".branding2__info .right").delay(1000).animate({top: "0", opacity: 1}, 1000);
	  }
  }
  
  function animateBranding3(scroll_amount){
	  if(scroll_amount > branding3__info_Os){
	    $(".branding3__info h2").delay(500).animate({opacity: 1}, 1000);
	    $(".branding3__info .right").delay(500).animate({opacity: 1}, 1000);
      $(".branding3__info .tab .img").delay(700).animate({top: "0", opacity: 1}, 1000);
      $(".branding3__info .tab .message").delay(700).animate({top: "0", opacity: 1}, 1000);
	  }
  }
  
  function animateBranding4(scroll_amount){
	  if(scroll_amount > branding4__info_Os){
	    $(".branding4__info .title").delay(500).animate({opacity: 1}, 1000);
      if(windowWidth > 1140) {
        $(".branding4__info .row1 .col:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".branding4__info .row1 .col:nth-child(2)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".branding4__info .row1 .col:nth-child(3)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".branding4__info .row2 .col:nth-child(1)").delay(1500).animate({top: "0", opacity: 1}, 1000);
        $(".branding4__info .row2 .col:nth-child(2)").delay(1500).animate({top: "0", opacity: 1}, 1000);
      } else {
        $(".branding4__info .row1 .col:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".branding4__info .row1 .col:nth-child(2)").delay(1200).animate({top: "0", opacity: 1}, 1000);
        $(".branding4__info .row1 .col:nth-child(3)").delay(1400).animate({top: "0", opacity: 1}, 1000);
        $(".branding4__info .row2 .col:nth-child(1)").delay(1600).animate({top: "0", opacity: 1}, 1000);
        $(".branding4__info .row2 .col:nth-child(2)").delay(1800).animate({top: "0", opacity: 1}, 1000);
      }
	  }
  }
  
  function animateBranding5(scroll_amount){
	  if(scroll_amount > branding5__info_Os){
	    $(".branding5__info .right h4").delay(500).animate({opacity: 1}, 1000);
      $(".branding5__info .right .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".branding5__info .right input").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".branding5__info .left").delay(1000).animate({top: "0", opacity: 1}, 1000);
	  }
  }
  
  function animateBranding6(scroll_amount){
    if(scroll_amount > branding6__info_Os){
      $(".branding6__info .title").delay(500).animate({opacity: 1}, 1000);
      $(".branding6__info .hr").delay(500).animate({opacity: 1}, 1000);
      $(".branding6__info .swiper-slide .titleSlide").delay(700).animate({top: "0", opacity: 1}, 1000);
      $(".branding6__info .swiper-slide .textSlide").delay(700).animate({top: "0", opacity: 1}, 1000);
      $(".branding6__info .swiper-slide .left").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".branding6__info .swiper-pagination").delay(1000).fadeIn(1000);
      $(".branding6__info .swiper-button-prev").delay(1000).fadeIn(1000);
      $(".branding6__info .swiper-button-next").delay(1000).fadeIn(1000);
    }
  }
  
  function animateBranding7(scroll_amount){
    if(scroll_amount > branding7__info_Os){
      $(".branding7__info .title").delay(500).animate({opacity: 1}, 1000);
      $(".branding7__info .hr").delay(500).animate({opacity: 1}, 1000);
      $(".branding7__info .text").delay(500).animate({top: "0", opacity: 1}, 1000);
      if(windowWidth > 1140) {
        $(".branding7__info .col:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".branding7__info .col:nth-child(2)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".branding7__info .col:nth-child(3)").delay(1200).animate({top: "0", opacity: 1}, 1000);
        $(".branding7__info .col:nth-child(4)").delay(1200).animate({top: "0", opacity: 1}, 1000);
        $(".branding7__info .col:nth-child(5)").delay(1400).animate({top: "0", opacity: 1}, 1000);
        $(".branding7__info .col:nth-child(6)").delay(1400).animate({top: "0", opacity: 1}, 1000);
      } else {
        $(".branding7__info .col:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".branding7__info .col:nth-child(2)").delay(1200).animate({top: "0", opacity: 1}, 1000);
        $(".branding7__info .col:nth-child(3)").delay(1400).animate({top: "0", opacity: 1}, 1000);
        $(".branding7__info .col:nth-child(4)").delay(1600).animate({top: "0", opacity: 1}, 1000);
        $(".branding7__info .col:nth-child(5)").delay(1800).animate({top: "0", opacity: 1}, 1000);
        $(".branding7__info .col:nth-child(6)").delay(2000).animate({top: "0", opacity: 1}, 1000);
      }
	  }
  }
  
  function animateBranding8(scroll_amount){
    if(scroll_amount > branding8__info_Os){
      $(".branding8__info .right h4").delay(500).animate({opacity: 1}, 1000);
      $(".branding8__info .right .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".branding8__info .right input").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".branding8__info .left").delay(1000).animate({top: "0", opacity: 1}, 1000);
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