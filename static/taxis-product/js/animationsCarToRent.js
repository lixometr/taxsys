$(document).ready(function(){
  let windowWidth = $(window).width();  
    
  //------- MONAY -------
  let carToRent1__Header_Os = $(".carToRent1__header").offset().top,
      carToRent2__info_Os = $(".carToRent2__info").offset().top,
      carToRent3__info_Os = $(".carToRent3__info").offset().top,
      money11_Footer_Os = $(".money11__footer").offset().top;
      
  //animate headers
  animateCarToRent1();
    
  //animate blocks on load
  let scroll_amountOnload = $(window).scrollTop() + $(window).height()/1.4;
       
  animateCarToRent(scroll_amountOnload);	
    
  //animate blocks on scroll
  $(window).scroll(function() {
    let scroll_amount = $(window).scrollTop() + $(window).height()/1.4;
       
    animateCarToRent(scroll_amount);	
  });
    
    
  //------- YANDEX ANIMATIONS -------
  function animateCarToRent(scroll_amount){
    animateCarToRent1();
    animateCarToRent2(scroll_amount);
    animateCarToRent3(scroll_amount);
    animateMoney11(scroll_amount);
  }
    
  function animateCarToRent1(){
    $(".navbar").animate({top: "0", opacity: 1}, 800);
    $(".carToRent1__header .left h1").delay(500).animate({opacity: 1}, 1000);
    $(".carToRent1__header .left .text").delay(1000).animate({opacity: 1}, 1000);
    $(".carToRent1__header .left ul li:nth-child(1)").delay(1000).animate({top: "0", opacity: 1}, 1000);
    $(".carToRent1__header .left ul li:nth-child(2)").delay(1100).animate({top: "0", opacity: 1}, 1000);
    $(".carToRent1__header .left ul li:nth-child(3)").delay(1200).animate({top: "0", opacity: 1}, 1000);
    $(".carToRent1__header .left ul li:nth-child(4)").delay(1300).animate({top: "0", opacity: 1}, 1000);
    $(".carToRent1__header .left ul li:nth-child(5)").delay(1400).animate({top: "0", opacity: 1}, 1000);
    $(".carToRent1__header .left ul li:nth-child(6)").delay(1500).animate({top: "0", opacity: 1}, 1000);
    if(windowWidth > 992) {
      $(".carToRent1__header .right").delay(1000).animate({top: "0", opacity: 1}, 1000);
    } else {
      $(".carToRent1__header .right").delay(1700).animate({top: "0", opacity: 1}, 1000);
    }
  }
    
  function animateCarToRent2(scroll_amount){
    if(scroll_amount > carToRent2__info_Os){
      $(".carToRent2__info .title").delay(500).animate({opacity: 1}, 1000);
        $(".carToRent2__info .hr").delay(500).animate({opacity: 1}, 1000);
        $(".carToRent2__info .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
        $(".carToRent2__info .right").delay(1000).animate({top: "0", opacity: 1}, 1000);
    }
  }
  
  function animateCarToRent3(scroll_amount){
	  if(scroll_amount > carToRent3__info_Os){
	    $(".carToRent3__info .right .title").delay(500).animate({opacity: 1}, 1000);
      $(".carToRent3__info .right .text").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".carToRent3__info .right input").delay(1000).animate({top: "0", opacity: 1}, 1000);
      $(".carToRent3__info .left").delay(1000).animate({top: "0", opacity: 1}, 1000);
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