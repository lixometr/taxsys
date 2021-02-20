$(document).ready(function() {
    let windowWidth = $(window).width();

    //------- MONAY -------
    let taxsys1_Header_Os = $(".taxsys1__header").offset().top,
        taxsys2_Os = $(".taxsys2__info").offset().top,
        taxsys3_Os = $(".taxsys3__info").offset().top,
        taxsys4_Os = $(".taxsys4__info").offset().top,
        taxsys5_Os = $(".taxsys5__info").offset().top,
        taxsys6_Os = $(".taxsys6__info").offset().top,
        taxsys7_Os = $(".taxsys7__info").offset().top,
        taxsys8_Os = $(".taxsys8__info").offset().top,
        taxsys9_Os = $(".taxsys9__info").offset().top,
        money11_Footer_Os = $(".money11__footer").offset().top;

    //animate headers
    animateTaxsys1();

    //animate blocks on load
    let scroll_amountOnload = $(window).scrollTop() + $(window).height() / 1.4;

    animateTaxsys(scroll_amountOnload);

    //animate blocks on scroll
    $(window).scroll(function() {
        let scroll_amount = $(window).scrollTop() + $(window).height() / 1.4;

        animateTaxsys(scroll_amount);
    });


    //------- AUTOPARKPAY ANIMATIONS -------

    //------- MONAY ANIMATIONS -------
    function animateTaxsys(scroll_amount) {
        animateTaxsys1();
        animateTaxsys2(scroll_amount);
        animateTaxsys3(scroll_amount);
        animateTaxsys4(scroll_amount);
        animateTaxsys5(scroll_amount);
        animateTaxsys6(scroll_amount);
        animateTaxsys7(scroll_amount);
        animateTaxsys8(scroll_amount);
        animateTaxsys9(scroll_amount);
        animateMoney11(scroll_amount);
    }

    function animateTaxsys1() {
        $(".navbar").animate({ top: "0", opacity: 1 }, 800);
        $(".taxsys1__header .left h1").delay(500).animate({ opacity: 1 }, 1000);
        $(".taxsys1__header .left h2").delay(600).animate({ opacity: 1 }, 1000);
        $(".taxsys1__header .left ul li:nth-child(1)").delay(750).animate({ top: "0", opacity: 1 }, 1000);
        $(".taxsys1__header .left ul li:nth-child(2)").delay(800).animate({ top: "0", opacity: 1 }, 1000);
        $(".taxsys1__header .left ul li:nth-child(3)").delay(850).animate({ top: "0", opacity: 1 }, 1000);
        $(".taxsys1__header .left ul li:nth-child(4)").delay(900).animate({ top: "0", opacity: 1 }, 1000);
        $(".taxsys1__header .left ul li:nth-child(5)").delay(950).animate({ top: "0", opacity: 1 }, 1000);
        $(".taxsys1__header .left ul li:nth-child(6)").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
        $(".taxsys1__header .left .buttons").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
        if (windowWidth > 992) {
            $(".taxsys1__header .right").delay(500).animate({ top: "0", opacity: 1 }, 1000);
        } else {
            $(".taxsys1__header .right").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
        }
    }

    function animateTaxsys2(scroll_amount) {
        if (scroll_amount > taxsys2_Os) {
            $(".taxsys2__info .left .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys2__info .left .hr").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys2__info .left ul li:nth-child(1)").delay(500).animate({ top: "0", opacity: 1 }, 1000);
            $(".taxsys2__info .left ul li:nth-child(2)").delay(600).animate({ top: "0", opacity: 1 }, 1000);
            $(".taxsys2__info .left ul li:nth-child(3)").delay(700).animate({ top: "0", opacity: 1 }, 1000);
            $(".taxsys2__info .left ul li:nth-child(4)").delay(800).animate({ top: "0", opacity: 1 }, 1000);
            $(".taxsys2__info .left .buttons").delay(900).animate({ top: "0", opacity: 1 }, 1000);
            if (windowWidth > 992) {
                $(".taxsys2__info .right").delay(500).animate({ top: "0", opacity: 1 }, 1000);
            } else {
                $(".taxsys2__info .right").delay(900).animate({ top: "0", opacity: 1 }, 1000);
            }
        }
    }

    function animateTaxsys3(scroll_amount) {
        if (scroll_amount > taxsys3_Os) {
            $(".taxsys3__info .left h3").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys3__info .left .text").delay(500).animate({ top: "0", opacity: 1 }, 1000);
            $(".taxsys3__info .left input").delay(500).animate({ top: "0", opacity: 1 }, 1000);
            $(".taxsys3__info .right").delay(500).animate({ opacity: 1 }, 1000);
        }
    }



    function animateTaxsys4(scroll_amount) {
        if (scroll_amount > taxsys4_Os) {
            $(".taxsys4__info .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys4__info .sub__title").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys4__info .hr").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys4__info .tabs").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys4__info .right").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys4__info .tab .tabTitle").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys4__info .tab .tabText").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys4__info .tab .left").delay(700).animate({ top: "0", opacity: 1 }, 1000);
        }
    }

    function animateTaxsys5(scroll_amount) {
        if (scroll_amount > taxsys5_Os) {
            $(".taxsys5__info .left .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys5__info .left .hr").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys5__info .left ul li:nth-child(1)").delay(500).animate({ top: "0", opacity: 1 }, 1000);
            $(".taxsys5__info .left ul li:nth-child(2)").delay(600).animate({ top: "0", opacity: 1 }, 1000);
            $(".taxsys5__info .left ul li:nth-child(3)").delay(700).animate({ top: "0", opacity: 1 }, 1000);
            $(".taxsys5__info .left ul li:nth-child(4)").delay(800).animate({ top: "0", opacity: 1 }, 1000);
            $(".taxsys5__info .left .buttons").delay(900).animate({ top: "0", opacity: 1 }, 1000);
            if (windowWidth > 992) {
                $(".taxsys5__info .right").delay(500).animate({ top: "0", opacity: 1 }, 1000);
            } else {
                $(".taxsys5__info .right").delay(900).animate({ top: "0", opacity: 1 }, 1000);
            }
        }
    }

    function animateTaxsys6(scroll_amount) {
        if (scroll_amount > taxsys6_Os) {
            $(".taxsys6__info .title").delay(500).animate({ opacity: 1 }, 1000);
            if (windowWidth > 1140) {
                $(".taxsys6__info .row1 .col:nth-child(1)").delay(500).animate({ top: "0", opacity: 1 }, 1000);
                $(".taxsys6__info .row1 .col:nth-child(2)").delay(500).animate({ top: "0", opacity: 1 }, 1000);
                $(".taxsys6__info .row1 .col:nth-child(3)").delay(500).animate({ top: "0", opacity: 1 }, 1000);
                $(".taxsys6__info .row2 .col:nth-child(1)").delay(750).animate({ top: "0", opacity: 1 }, 1000);
                $(".taxsys6__info .row2 .col:nth-child(2)").delay(750).animate({ top: "0", opacity: 1 }, 1000);
            } else {
                $(".taxsys6__info .row1 .col:nth-child(1)").delay(500).animate({ top: "0", opacity: 1 }, 1000);
                $(".taxsys6__info .row1 .col:nth-child(2)").delay(600).animate({ top: "0", opacity: 1 }, 1000);
                $(".taxsys6__info .row1 .col:nth-child(3)").delay(700).animate({ top: "0", opacity: 1 }, 1000);
                $(".taxsys6__info .row2 .col:nth-child(1)").delay(800).animate({ top: "0", opacity: 1 }, 1000);
                $(".taxsys6__info .row2 .col:nth-child(2)").delay(900).animate({ top: "0", opacity: 1 }, 1000);
            }
        }
    }

    function animateTaxsys7(scroll_amount) {
        if (scroll_amount > taxsys7_Os) {
            $(".taxsys7__info .head .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys7__info .head .hr").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys7__info .body .titleSlide").delay(500).animate({ top: "0", opacity: 1 }, 1000);
            $(".taxsys7__info .body .textSlide").delay(500).animate({ top: "0", opacity: 1 }, 1000);
            $(".taxsys7__info .body .swiper-pagination").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys7__info .body .swiper-button-prev").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys7__info .body .swiper-button-next").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys7__info .body .swiper-slide .right").delay(750).animate({ top: "0", opacity: 1 }, 1000);
        }
    }

    function animateTaxsys8(scroll_amount) {
        if (scroll_amount > taxsys8_Os) {
            $(".taxsys8__info .left .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys8__info .left .hr").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys8__info .left ul li:nth-child(1)").delay(500).animate({ top: "0", opacity: 1 }, 1000);
            $(".taxsys8__info .left ul li:nth-child(2)").delay(600).animate({ top: "0", opacity: 1 }, 1000);
            $(".taxsys8__info .left ul li:nth-child(3)").delay(700).animate({ top: "0", opacity: 1 }, 1000);
            $(".taxsys8__info .left ul li:nth-child(4)").delay(800).animate({ top: "0", opacity: 1 }, 1000);
            $(".taxsys8__info .left .buttons").delay(900).animate({ top: "0", opacity: 1 }, 1000);
            if (windowWidth > 992) {
                $(".taxsys8__info .right").delay(500).animate({ top: "0", opacity: 1 }, 1000);
            } else {
                $(".taxsys8__info .right").delay(900).animate({ top: "0", opacity: 1 }, 1000);
            }
        }
    }

    function animateTaxsys9(scroll_amount) {
        if (scroll_amount > taxsys9_Os) {
            $(".taxsys9__info .left h2").delay(500).animate({ opacity: 1 }, 1000);
            $(".taxsys9__info .left p").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            $(".taxsys9__info .left input").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            $(".taxsys9__info .right").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
        }
    }


    function animateMoney11(scroll_amount) {
        if (scroll_amount > money11_Footer_Os) {
            $(".money11__footer .top .logo").delay(500).animate({ opacity: 1 }, 1000);
            $(".money11__footer .top ul").delay(700).animate({ opacity: 1 }, 1000);
            $(".money11__footer .bottom").delay(900).animate({ opacity: 1 }, 1000);
        }
    }

});