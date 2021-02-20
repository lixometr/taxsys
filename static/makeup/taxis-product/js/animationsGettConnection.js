$(document).ready(function(){
  let windowWidth = $(window).width();  
  
  //------- MONAY -------
  let gett1__Header_Os = $(".gett1__header").offset().top,
      gett2__info_Os = $(".gett2__info").offset().top,
      gett3__info_Os = $(".gett3__info").offset().top,
      gett4__info_Os = $(".gett4__info").offset().top,
      gett5__info_Os = $(".gett5__info").offset().top,
      gett6__info_Os = $(".gett6__info").offset().top,
      gett7__info_Os = $(".gett7__info").offset().top,
      gett8__info_Os = $(".gett8__info").offset().top,
      gett9__info_Os = $(".gett9__info").offset().top,
      money11_Footer_Os = $(".money11__footer").offset().top;
	
  //animate headers
  animateGett1();
  
  //animate blocks on load
  let scroll_amountOnload = $(window).scrollTop() + $(window).height()/1.4;
	 
  animateGett(scroll_amountOnload);	
  
  //animate blocks on scroll
  $(window).scroll(function() {
	let scroll_amount = $(window).scrollTop() + $(window).height()/1.4;
	 
	animateGett(scroll_amount);	
  });
  
  
  //------- YANDEX ANIMATIONS -------
  function animateGett(scroll_amount){
    animateGett1();
    animateGett2(scroll_amount);
    animateGett3(scroll_amount);
    animateGett4(scroll_amount);
    animateGett5(scroll_amount);
    animateGett6(scroll_amount);
    animateGett7(scroll_amount);
    animateGett8(scroll_amount);
    animateGett9(scroll_amount);
    animateMoney11(scroll_amount);
  }
  
  function animateGett1(){
    $(".navbar").animate({top: "0", opacity: 1}, 800);
    $(".gett1__header .left h1").delay(500).animate({opacity: 1}, 1000);
    $(".gett1__header .left ul li:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
    $(".gett1__header .left ul li:nth-child(2)").delay(1100).animate({top: "0", opacity: 1}, 1000);
    $(".gett1__header .left ul li:nth-child(3)").delay(1200).animate({top: "0", opacity: 1}, 1000);
    $(".gett1__header .left ul li:nth-child(4)").delay(1300).animate({top: "0", opacity: 1}, 1000);
    if(windowWidth > 992) {
      $(".gett1__header .right").delay(1000).animate({top: "0", opacity: 1}, 1000);
    } else {
      $(".gett1__header .right").delay(1500).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateGett2(scroll_amount){
    if(scroll_amount > gett2__info_Os){
      $(".gett2__info .left h2").delay(500).animate({opacity: 1}, 1000);
      $(".gett2__info .left .hr").delay(500).animate({opacity: 1}, 1000);
      $(".gett2__info .left .title2").delay(800).animate({opacity: 1}, 1000);
      $(".gett2__info .left ul li:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".gett2__info .left ul li:nth-child(2)").delay(1200).animate({top: "0", opacity: 1}, 1000);
      $(".gett2__info .left ul li:nth-child(3)").delay(1400).animate({top: "0", opacity: 1}, 1000);
      $(".gett2__info .left ul li:nth-child(4)").delay(1600).animate({top: "0", opacity: 1}, 1000);
      if(windowWidth > 992) {
        $(".gett2__info .right").delay(1000).animate({top: "0", opacity: 1}, 1000);
      } else {
        $(".gett2__info .right").delay(1600).animate({top: "0", opacity: 1}, 1000);
      }
    }
  }
  
  function animateGett3(scroll_amount){
    if(scroll_amount > gett3__info_Os){
      $(".gett3__info .left .title").delay(500).animate({opacity: 1}, 1000);
      $(".gett3__info .left .hr").delay(500).animate({opacity: 1}, 1000);
      $(".gett3__info .left .title2").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".gett3__info .left .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".gett3__info .right").delay(1000).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateGett4(scroll_amount){
    if(scroll_amount > gett4__info_Os){
      $(".gett4__info .title").delay(500).animate({opacity: 1}, 1000);
      $(".gett4__info .hr").delay(500).animate({opacity: 1}, 1000);
      $(".gett4__info .text").delay(500).animate({top: "0", opacity: 1}, 1000);
      if(windowWidth > 1140) {
        $(".gett4__info .col:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".gett4__info .col:nth-child(2)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".gett4__info .col:nth-child(3)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".gett4__info .col:nth-child(4)").delay(1500).animate({top: "0", opacity: 1}, 1000);
        $(".gett4__info .col:nth-child(5)").delay(1500).animate({top: "0", opacity: 1}, 1000);
        $(".gett4__info .col:nth-child(6)").delay(1500).animate({top: "0", opacity: 1}, 1000);
      } else if (windowWidth > 575) {
        $(".gett4__info .col:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".gett4__info .col:nth-child(2)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".gett4__info .col:nth-child(3)").delay(1500).animate({top: "0", opacity: 1}, 1000);
        $(".gett4__info .col:nth-child(4)").delay(1500).animate({top: "0", opacity: 1}, 1000);
        $(".gett4__info .col:nth-child(5)").delay(2000).animate({top: "0", opacity: 1}, 1000);
        $(".gett4__info .col:nth-child(6)").delay(2000).animate({top: "0", opacity: 1}, 1000);
      } else {
        $(".gett4__info .col:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".gett4__info .col:nth-child(2)").delay(1200).animate({top: "0", opacity: 1}, 1000);
        $(".gett4__info .col:nth-child(3)").delay(1400).animate({top: "0", opacity: 1}, 1000);
        $(".gett4__info .col:nth-child(4)").delay(1600).animate({top: "0", opacity: 1}, 1000);
        $(".gett4__info .col:nth-child(5)").delay(1800).animate({top: "0", opacity: 1}, 1000);
        $(".gett4__info .col:nth-child(6)").delay(2000).animate({top: "0", opacity: 1}, 1000);
      }
    }
  }
  
  function animateGett5(scroll_amount){
    if(scroll_amount > gett5__info_Os){
      $(".gett5__info .right .title").delay(500).animate({opacity: 1}, 1000);
      $(".gett5__info .right .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".gett5__info .right input").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".gett5__info .left").delay(1000).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateGett6(scroll_amount){
    if(scroll_amount > gett6__info_Os){
      $(".gett6__info .title").delay(500).animate({opacity: 1}, 1000);
      $(".gett6__info .hr").delay(500).animate({opacity: 1}, 1000);
      $(".gett6__info .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".gett6__info .right").delay(1000).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateGett7(scroll_amount){
    if(scroll_amount > gett7__info_Os){
      $(".gett7__info .right h3").delay(500).animate({opacity: 1}, 1000);
      $(".gett7__info .right .hr").delay(500).animate({opacity: 1}, 1000);
      $(".gett7__info .right .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".gett7__info .left").delay(1000).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateGett8(scroll_amount){
    if(scroll_amount > gett8__info_Os){
      $(".gett8__info .title").delay(500).animate({opacity: 1}, 1000);
      $(".gett8__info ul").delay(1000).animate({opacity: 1}, 1000);
    }
  }
  
  function animateGett9(scroll_amount){
    if(scroll_amount > gett9__info_Os){
      $(".gett9__info .right .title").delay(500).animate({opacity: 1}, 1000);
      $(".gett9__info .right .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".gett9__info .right input").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".gett9__info .left").delay(1000).animate({top: "0", opacity: 1}, 1000);
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