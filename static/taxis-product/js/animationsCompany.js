$(document).ready(function() {
    let windowWidth = $(window).width();

    //------- MONAY -------
    let company1__Header_Os = $(".company1__header").offset().top,
        company2__info_Os = $(".company2__info").offset().top,
        company3__info_Os = $(".company3__info").offset().top,
        company4__info_Os = $(".company4__info").offset().top,
        company5__info_Os = $(".company5s1__info").offset().top,
        company6__info_Os = $(".company6s1__info").offset().top,
        company7__info_Os = $(".company7__info").offset().top,
        money11_Footer_Os = $(".money11__footer").offset().top;

    //animate headers
    animateCompany1();

    //animate blocks on load
    let scroll_amountOnload = $(window).scrollTop() + $(window).height() / 1.4;

    animateCityMobile(scroll_amountOnload);

    //animate blocks on scroll
    $(window).scroll(function() {
        let scroll_amount = $(window).scrollTop() + $(window).height() / 1.4;

        animateCityMobile(scroll_amount);
    });


    //------- YANDEX ANIMATIONS -------
    function animateCityMobile(scroll_amount) {
        animateCompany1();
        animateCompany2(scroll_amount);
        animateCompany3(scroll_amount);
        animateCompany4(scroll_amount);
        animateCompany5(scroll_amount);
        animateCompany6(scroll_amount);
        animateCompany7(scroll_amount);
        animateMoney11(scroll_amount);
    }

    function animateCompany1() {
        $(".navbar").animate({ top: "0", opacity: 1 }, 800);
        $(".company1__header .left h1").delay(500).animate({ opacity: 1 }, 1000);
        $(".company1__header .left").delay(500).animate({ opacity: 1 }, 1000);
        $(".company1__header .left ul li:nth-child(1)").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
        $(".company1__header .left ul li:nth-child(2)").delay(1100).animate({ top: "0", opacity: 1 }, 1000);
        $(".company1__header .left ul li:nth-child(3)").delay(1200).animate({ top: "0", opacity: 1 }, 1000);
        $(".company1__header .left ul li:nth-child(4)").delay(1300).animate({ top: "0", opacity: 1 }, 1000);
        if (windowWidth > 992) {
            $(".company1__header .right").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
        } else {
            $(".company1__header .right").delay(1500).animate({ top: "0", opacity: 1 }, 1000);
        }
    }

    function animateCompany2(scroll_amount) {
        if (scroll_amount > company2__info_Os) {
            $(".company2__info .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".company2__info .text").delay(700).animate({ top: "0", opacity: 1 }, 1000);
            $(".company2__info .swiper-slide .textSlide:nth-child(1)").delay(700).animate({ top: "0", opacity: 1 }, 1000);
            $(".company2__info .left ul li:nth-child(1)").delay(800).animate({ top: "0", opacity: 1 }, 1000);
            $(".company2__info .left ul li:nth-child(2)").delay(900).animate({ top: "0", opacity: 1 }, 1000);
            $(".company2__info .left ul li:nth-child(3)").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            $(".company2__info .left ul li:nth-child(4)").delay(1100).animate({ top: "0", opacity: 1 }, 1000);
            $(".company2__info .left ul li:nth-child(5)").delay(1200).animate({ top: "0", opacity: 1 }, 1000);
            $(".company2__info .swiper-slide .textSlide:nth-child(2)").delay(1200).animate({ top: "0", opacity: 1 }, 1000);
            $(".company2__info .right").delay(1200).animate({ top: "0", opacity: 1 }, 1000);
        }
    }

    function animateCompany3(scroll_amount) {
        if (scroll_amount > company3__info_Os) {
            $(".company3__info .left .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".company3__info .left .hr").delay(500).animate({ opacity: 1 }, 1000);
            $(".company3__info .left ul li:nth-child(1)").delay(500).animate({ top: "0", opacity: 1 }, 1000);
            $(".company3__info .left ul li:nth-child(2)").delay(600).animate({ top: "0", opacity: 1 }, 1000);
            $(".company3__info .left ul li:nth-child(3)").delay(700).animate({ top: "0", opacity: 1 }, 1000);
            $(".company3__info .left ul li:nth-child(4)").delay(800).animate({ top: "0", opacity: 1 }, 1000);
            $(".company3__info .left .buttons").delay(900).animate({ top: "0", opacity: 1 }, 1000);
            if (windowWidth > 992) {
                $(".company3__info .right").delay(500).animate({ top: "0", opacity: 1 }, 1000);
            } else {
                $(".company3__info .right").delay(900).animate({ top: "0", opacity: 1 }, 1000);
            }
        }
    }

    function animateCompany4(scroll_amount) {
        if (scroll_amount > company4__info_Os) {
            $(".company4__info .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".company4__info .text").delay(700).animate({ top: "0", opacity: 1 }, 1000);
            $(".company4__info .swiper-slide .textSlide:nth-child(1)").delay(700).animate({ top: "0", opacity: 1 }, 1000);
            $(".company4__info .left ul li:nth-child(1)").delay(800).animate({ top: "0", opacity: 1 }, 1000);
            $(".company4__info .left ul li:nth-child(2)").delay(900).animate({ top: "0", opacity: 1 }, 1000);
            $(".company4__info .left ul li:nth-child(3)").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            $(".company4__info .left ul li:nth-child(4)").delay(1100).animate({ top: "0", opacity: 1 }, 1000);
            $(".company4__info .left ul li:nth-child(5)").delay(1200).animate({ top: "0", opacity: 1 }, 1000);
            $(".company4__info .swiper-slide .textSlide:nth-child(2)").delay(1200).animate({ top: "0", opacity: 1 }, 1000);
            $(".company4__info .right").delay(1200).animate({ top: "0", opacity: 1 }, 1000);
        }
    }



    function animateCompany5(scroll_amount) {
        if (scroll_amount > company5__info_Os) {
            $(".company5s1__info .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".company5s1__info .hr").delay(500).animate({ opacity: 1 }, 1000);
            if (windowWidth > 992) {
                $(".company5s1__info .col:nth-child(1)").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
                $(".company5s1__info .col:nth-child(2)").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
                $(".company5s1__info .col:nth-child(3)").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
                $(".company5s1__info .col:nth-child(4)").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            } else {
                $(".company5s1__info .col:nth-child(1)").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
                $(".company5s1__info .col:nth-child(2)").delay(1300).animate({ top: "0", opacity: 1 }, 1000);
                $(".company5s1__info .col:nth-child(3)").delay(1600).animate({ top: "0", opacity: 1 }, 1000);
                $(".company5s1__info .col:nth-child(4)").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            }
            $(".company5s2__info .left").delay(1700).animate({ opacity: 1 }, 1000);
            $(".company5s2__info .right").delay(1700).animate({ opacity: 1 }, 1000);
        }
    }

    function animateCompany6(scroll_amount) {
        if (scroll_amount > company6__info_Os) {
            $(".company6s1__info .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".company6s1__info .hr").delay(500).animate({ opacity: 1 }, 1000);
            if (windowWidth > 992) {
                $(".company6s1__info .col:nth-child(1)").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
                $(".company6s1__info .col:nth-child(2)").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
                $(".company6s1__info .col:nth-child(3)").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            } else {
                $(".company6s1__info .col:nth-child(1)").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
                $(".company6s1__info .col:nth-child(2)").delay(1300).animate({ top: "0", opacity: 1 }, 1000);
                $(".company6s1__info .col:nth-child(3)").delay(1600).animate({ top: "0", opacity: 1 }, 1000);
            }
            $(".company6s2__info .quote").delay(1700).animate({ opacity: 1 }, 1000);
            $(".company6s2__info .text").delay(1700).animate({ opacity: 1 }, 1000);
        }
    }

    function animateCompany7(scroll_amount) {
        if (scroll_amount > company7__info_Os) {
            $(".company7__info .title").delay(500).animate({ opacity: 1 }, 1000);
            $(".company7__info .hr").delay(500).animate({ opacity: 1 }, 1000);
            $(".company7__info .text").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
            $(".company7__info .right").delay(1000).animate({ top: "0", opacity: 1 }, 1000);
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