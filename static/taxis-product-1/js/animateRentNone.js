$(document).ready(function(){
    let windowWidth = $(window).width();  
    
    //------- MONAY -------
    let 
        money11_Footer_Os = $(".money11__footer").offset().top;
      
    
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
 
      animateMoney11(scroll_amount);
    }
    
  
    function animateMoney11(scroll_amount){
      if(scroll_amount > money11_Footer_Os){
        $(".money11__footer .top .logo").delay(500).animate({opacity: 1}, 1000);
        $(".money11__footer .top ul").delay(700).animate({opacity: 1}, 1000);
        $(".money11__footer .bottom").delay(900).animate({opacity: 1}, 1000);
      }
    }
    
  });