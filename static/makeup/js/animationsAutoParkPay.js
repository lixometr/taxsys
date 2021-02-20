$(document).ready(function() {
    let windowWidth = $(window).width();

    //------- MONAY -------
    let autoParkPay1__Header_Os = $(".autoParkPay1__header").offset().top,
        autoParkPay2__info_Os = $(".autoParkPay2__info").offset().top,
        autoParkPay3__info_Os = $(".autoParkPay3__info").offset().top,
        autoParkPay4__info_Os = $(".autoParkPay4__info").offset().top,
        autoParkPay5__info_Os = $(".autoParkPay5__info").offset().top,
        autoParkPay6__info_Os = $(".autoParkPay6__info").offset().top,
        autoParkPay7__info_Os = $(".autoParkPay7__info").offset().top,
        autoParkPay8__info_Os = $(".autoParkPay8__info").offset().top,
        money9_Os = $(".money9s1__info").offset().top,
        autoParkPay10__info_Os = $(".autoParkPay10__info").offset().top,
        autoParkPay11__info_Os = $(".autoParkPay11__info").offset().top,
        autoParkPay12__info_Os = $(".autoParkPay12__info").offset().top,
        money11_Footer_Os = $(".money11__footer").offset().top;

    //animate headers
    animateAutoParkPay1();

    //animate blocks on load
    let scroll_amountOnload = $(window).scrollTop() + $(window).height() / 1.4;

    animateAutoParkPay(scroll_amountOnload);

    //animate blocks on scroll
    $(window).scroll(function() {
        let scroll_amount = $(window).scrollTop() + $(window).height() / 1.4;

        animateAutoParkPay(scroll_amount);
    });


    //------- AUTOPARKPAY ANIMATIONS -------
    function animateAutoParkPay(scroll_amount) {
        animateAutoParkPay1();
        animateAutoParkPay2(scroll_amount);
        animateAutoParkPay3(scroll_amount);
        animateAutoParkPay4(scroll_amount);
        animateAutoParkPay5(scroll_amount);
        animateAutoParkPay6(scroll_amount);
        animateAutoParkPay7(scroll_amount);
        animateAutoParkPay8(scroll_amount);
        animateMoney9(scroll_amount);
        animateAutoParkPay10(scroll_amount);
        animateAutoParkPay11(scroll_amount);
        animateAutoParkPay12(scroll_amount);
        animateMoney11(scroll_amount);
    }

    function animateAutoParkPay1() {
        $(".navbar").animate({ top: "0", opacity: 1 }, 800);
        $(".autoParkPay1__header .left h1").delay(500).animate({ opacity: 1 }, 1000);
        $(".autoParkPay1__header .left p.title").delay(1000).animate({ opacity: 1 }, 1000);
        $(".autoParkPay1__header .left ul li:nth-child(1)").delay(1500).animate({ top: "0", opacity: 1 }, 1000);
        $(".autoParkPay1__header .left ul li:nth-child(2)").delay(1600).animate({ top: "0", opacity: 1 }, 1000);
        $(".autoParkPay1__header .left ul li:nth-child(3)").delay(1700).animate({ top: "0", opacity: 1 }, 1000);
        $(".autoParkPay1__header .left .buttons").delay(1800).animate({ top: "0", opacity: 1 }, 1000);
        if (windowWidth > 992) {
            $(".autoParkPay1__header .right").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay1__header .swiper-pagination, .autoParkPay1__header .swiper-button-prev, .autoParkPay1__header .swiper-button-next").delay(1000).fadeIn(1000);
        } else {
            $(".autoParkPay1__header .right").delay(2000).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay1__header .swiper-pagination").delay(2000).fadeIn(1000);
        }
    }

    function animateAutoParkPay2(scroll_amount) {
        if (scroll_amount > autoParkPay2__info_Os) {
            $(".autoParkPay2__info .left .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".autoParkPay2__info .right").delay(700).animate({ top: "0", opacity: 1 }, 1000);
        }
    }

    function animateAutoParkPay3(scroll_amount) {
        if (scroll_amount > autoParkPay3__info_Os) {
            $(".autoParkPay3__info .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".autoParkPay3__info .tabs").delay(500).animate({ opacity: 1 }, 1000);
            $(".autoParkPay3__info .tab .tabTitle").delay(500).animate({ opacity: 1 }, 1000);
            $(".autoParkPay3__info .tab .tabText").delay(500).animate({ opacity: 1 }, 1000);
            $(".autoParkPay3__info .tab .left").delay(700).animate({ top: "0", opacity: 1 }, 1000);
        }
    }

    function animateAutoParkPay4(scroll_amount) {
        if (scroll_amount > autoParkPay4__info_Os) {
            $(".autoParkPay4__info .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".autoParkPay4__info .hr").delay(500).animate({ opacity: 1 }, 1000);
            $(".autoParkPay4__info .text").delay(500).animate({ opacity: 1 }, 1000);
            $(".autoParkPay4__info .swiper-slide .titleSlide").delay(700).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay4__info .swiper-slide .textSlide").delay(700).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay4__info .swiper-slide .left").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay4__info .swiper-pagination").delay(1000).animate({ opacity: 1 }, 1000);
            $(".autoParkPay4__info .swiper-button-prev").delay(1000).animate({ opacity: 1 }, 1000);
            $(".autoParkPay4__info .swiper-button-next").delay(1000).animate({ opacity: 1 }, 1000);
        }
    }

    function animateAutoParkPay5(scroll_amount) {
        if (scroll_amount > autoParkPay5__info_Os) {
            $(".autoParkPay5__info .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".autoParkPay5__info .text").delay(700).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay4__info .swiper-slide .textSlide:nth-child(1)").delay(700).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay5__info .left ul li:nth-child(1)").delay(800).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay5__info .left ul li:nth-child(2)").delay(900).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay5__info .left ul li:nth-child(3)").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay5__info .left ul li:nth-child(4)").delay(1100).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay4__info .swiper-slide .textSlide:nth-child(2)").delay(1200).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay5__info .right").delay(1200).animate({ top: "0", opacity: 1 }, 1000);
        }
    }

    function animateAutoParkPay6(scroll_amount) {
        if (scroll_amount > autoParkPay6__info_Os) {
            $(".autoParkPay6__info .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".autoParkPay6__info .hr").delay(500).animate({ opacity: 1 }, 1000);
            $(".autoParkPay6__info .text").delay(700).animate({ opacity: 1 }, 1000);
            $(".autoParkPay6__info .left").delay(700).animate({ opacity: 1 }, 1000);
            $(".autoParkPay6__info .swiper-slide .titleSlide").delay(900).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay6__info .swiper-slide .textSlide").delay(1100).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay6__info .swiper-pagination").delay(1100).animate({ opacity: 1 }, 1000);
            $(".autoParkPay6__info .swiper-button-prev").delay(1100).animate({ opacity: 1 }, 1000);
            $(".autoParkPay6__info .swiper-button-next").delay(1100).animate({ opacity: 1 }, 1000);
        }
    }

    function animateAutoParkPay7(scroll_amount) {
        if (scroll_amount > autoParkPay7__info_Os) {
            $(".autoParkPay7__info .left h2").delay(500).animate({ opacity: 1 }, 1000);
            $(".autoParkPay7__info .left p").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay7__info .left input").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay7__info .right").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
        }
    }

    function animateAutoParkPay8(scroll_amount) {
        if (scroll_amount > autoParkPay8__info_Os) {
            $(".autoParkPay8__info .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".autoParkPay8__info .hr").delay(500).animate({ opacity: 1 }, 1000);
            $(".autoParkPay8__info .text").delay(1000).animate({ opacity: 1 }, 1000);
            $(".autoParkPay8__info .left").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay8__info .top").delay(1500).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay8__info .bottom").delay(2000).animate({ top: "0", opacity: 1 }, 1000);
        }
    }

    function animateMoney9(scroll_amount) {
        if (scroll_amount > money9_Os) {
            $(".money9s1__info .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".money9s1__info .hr").delay(500).animate({ opacity: 1 }, 1000);
            if (windowWidth > 992) {
                $(".money9s1__info .col:nth-child(1)").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
                $(".money9s1__info .col:nth-child(2)").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
                $(".money9s1__info .col:nth-child(3)").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            } else {
                $(".money9s1__info .col:nth-child(1)").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
                $(".money9s1__info .col:nth-child(2)").delay(1300).animate({ top: "0", opacity: 1 }, 1000);
                $(".money9s1__info .col:nth-child(3)").delay(1600).animate({ top: "0", opacity: 1 }, 1000);
            }
            $(".money9s2__info .quote").delay(1700).animate({ opacity: 1 }, 1000);
            $(".money9s2__info .text").delay(1700).animate({ opacity: 1 }, 1000);
        }
    }

    function animateAutoParkPay10(scroll_amount) {
        if (scroll_amount > autoParkPay10__info_Os) {
            $(".autoParkPay10__info .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".autoParkPay10__info .hr").delay(500).animate({ opacity: 1 }, 1000);
            $(".autoParkPay10__info .text").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay10__info .right").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
        }
    }

    function animateAutoParkPay11(scroll_amount) {
        if (scroll_amount > autoParkPay11__info_Os) {
            $(".autoParkPay11__info .right .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".autoParkPay11__info .right .text").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay11__info .right input").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay11__info .left").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
        }
    }

    function animateAutoParkPay12(scroll_amount) {
        if (scroll_amount > autoParkPay12__info_Os) {
            $(".autoParkPay12__info .left h3").delay(500).animate({ opacity: 1 }, 1000);
            $(".autoParkPay12__info .left .text").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay12__info .left input").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            $(".autoParkPay12__info .right").delay(1000).animate({ opacity: 1 }, 1000);
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