$(document).ready(function() {

    //NAVBAR DROPDOWN
    let navbarLi = $(".navbarLi");

    navbarLi.bind("mouseenter", function() {
        $(this).find(".ico_arrow").toggleClass("active");
        $(this).toggleClass("active");
        $(this).find(".dropdown").fadeToggle(300);
    });

    navbarLi.bind("mouseleave", function() {
        $(this).find(".ico_arrow").toggleClass("active");
        $(this).toggleClass("active");
        $(this).find(".dropdown").fadeToggle(300);
    });

    //NAVBAR TOGGLER
    let navbar = $(".navbar"),
        navbarToggler = $(".navbarToggler"),
        navbarBox = $(".navbarBox"),
        navbarClose = $(".navbarClose");

    navbarToggler.bind("click", function() {
        $(this).find(".hamburger").toggleClass("is-active");
        navbarClose.show();
        navbarBox.animate({ top: "80px", left: 0 }, 500);
    });

    navbarClose.bind("click", function() {
        navbarClose.hide();
        navbarToggler.find(".hamburger").toggleClass("is-active");
        navbarBox.animate({ top: "-100px", left: "-500px" }, 500);
    });

    let windowWidth = $(window).width();

    colorNavbarOnScroll();

    $(window).scroll(function() {
        colorNavbarOnScroll();
    });

    function colorNavbarOnScroll() {
        let scroll_amountOnload = $(window).scrollTop();
        if (scroll_amountOnload != 0) {
            navbar.css("background-color", "rgba(74, 45, 121, 0.9)");
        } else {
            navbar.css("background-color", "rgba(74, 45, 121, 0.5)");
        }
    }

    //SWIPER MONEY
    var swiper1 = new Swiper('.swiperMoney', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '"></span>';
            }
        },
        autoplay: {
            delay: 5000,
        },
    });

    //SWIPER AUTOPARKPAY1
    var swiper2 = new Swiper('.swiperAutoParkPay1', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-paginationAutoParkPay1',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '"></span>';
            }
        },
        autoplay: {
            delay: 5000,
        },
    });

    //SWIPER AUTOPARKPAY2
    var swiper3 = new Swiper('.swiperAutoParkPay2', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-paginationAutoParkPay2',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '"></span>';
            }
        },
        autoplay: {
            delay: 5000,
        },
    });

    //SWIPER AUTOPARKPAY3
    var swiper4 = new Swiper('.swiperAutoParkPay3', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-paginationAutoParkPay3',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '"></span>';
            }
        },
        autoplay: {
            delay: 5000,
        },
    });

    // TABS
    let tabsLi = $(".autoParkPay3__info .tabs ul li");

    tabActive();

    function tabActive(tmp) {
        $.each(tabsLi, function(index) {
            if ($(this).hasClass("active")) {
                $(".autoParkPay3__info").find(".tab").hide();
                $(".autoParkPay3__info").find(".tab" + (index + 1) + "").show();
                if (tmp) {
                    $(".autoParkPay3__info .tab .tabTitle").css("opacity", "0");
                    $(".autoParkPay3__info .tab .tabText").css("opacity", "0");
                    $(".autoParkPay3__info .tab .left").css("top", "200px");
                    $(".autoParkPay3__info .tab .left").css("opacity", "0");
                    $(".autoParkPay3__info .tab .tabTitle").stop(0).animate({ opacity: 1 }, 500);
                    $(".autoParkPay3__info .tab .tabText").stop(0).animate({ opacity: 1 }, 500);
                    $(".autoParkPay3__info .tab .left").stop(0).animate({ top: "0", opacity: 1 }, 500);
                }
            }
        });
    }

    tabsLi.bind("click", function() {
        let tmp = false;
        if ($(this).hasClass("active")) {
            tmp = false;
        } else {
            tmp = true;
        }
        tabsLi.removeClass("active");
        $(this).addClass("active");
        tabActive(tmp);
    });
    // TABS2
    let tabsLi3 = $(".taxsys4__info .tabs ul li");

    tabActive3();

    function tabActive3(tmp) {
        $.each(tabsLi3, function(index) {
            if ($(this).hasClass("active")) {
                $(".taxsys4__info").find(".tab").hide();
                $(".taxsys4__info").find(".tab" + (index + 1) + "").show();
                if (tmp) {
                    $(".taxsys4__info .tab .tabTitle").css("opacity", "0");
                    $(".taxsys4__info .tab .tabText").css("opacity", "0");
                    $(".taxsys4__info .tab .left").css("top", "200px");
                    $(".taxsys4__info .tab .left").css("opacity", "0");
                    $(".taxsys4__info .tab .tabTitle").stop(0).animate({ opacity: 1 }, 500);
                    $(".taxsys4__info .tab .tabText").stop(0).animate({ opacity: 1 }, 500);
                    $(".taxsys4__info .tab .left").stop(0).animate({ top: "0", opacity: 1 }, 500);
                }
            }
        });
    }

    tabsLi3.bind("click", function() {
        let tmp = false;
        if ($(this).hasClass("active")) {
            tmp = false;
        } else {
            tmp = true;
        }
        tabsLi3.removeClass("active");
        $(this).addClass("active");
        tabActive3(tmp);
    });

    //autoparkpay6 gif
    let gif = $(".autoParkPay6__info .left");

    if (windowWidth <= 992) {
        gif.css("height", windowWidth + "px");
    }

    //autoparkpay6 card
    let cardText = $(".autoParkPay8__info .row .left .cardText");

    if (windowWidth <= 992) {
        $(".autoParkPay8__info .row .left").html("<div class='cardImg1'></div><div><p class='cardTitle'>Устранение спорных ситуаций при аренде авто</p><p class='cardText'>Водитель сдал машину с повреждениями?<br><br>Для избежания разногласий приложение имеет поля для комментариев: при получении машины<span>водитель может вручную описать имеющиеся повреждения</span>, если таковые есть.<br><br>Таким образом, при сдаче авто станет понятно, были ли повреждения до приема машины, или появились после.</p></div>");
        cardText.remove();
    }

    let autoPark8Title = $(".autoParkPay8__info .title");

    if (windowWidth <= 1140) {
        autoPark8Title.html("<p class='title'>Арендные автомобили требуют много внимания?<span>Приложение Taxis</span><br><span>отследит состояние машин!</span></p>");
    }

    let yandex2Title = $(".yandex2__info h2");

    if (windowWidth <= 575) {
        yandex2Title.html("<h2>Быстрая автоматическая регистрация — начните работать с Яндекс.Такси<br><span>уже через 15 минут!</span></h2>");
    }

    let branding4__infoTitle = $(".branding4__info .title");

    if (windowWidth <= 768) {
        branding4__infoTitle.html("<p class='title'><span>Надежная защита<br></span><span>ваших интересов</span> и гарантия безопасности таксопарка</p>");
    }

    let branding7__infoTitle = $(".branding7__info .title");

    if (windowWidth <= 768) {
        branding7__infoTitle.html("<p class='title'>Брендированное приложение от Taxis —<br><span>обеспечьте процветание<br></span><span>своего таксопарка!</span></p>");
    }

    //accordion yandex/gett
    let accOpen = $(".yandex10__info .open, .gett8__info .open, .cityMobile8__info .open"),
        accArrow = $(".yandex10__info .arrow, .gett8__info .arrow, .cityMobile8__info .arrow"),
        accClose = $(".yandex10__info .close, .gett8__info .close, .cityMobile8__info .close");

    accOpen.each(function() {
        if ($(this).hasClass("active")) {
            $(this).addClass("active");
            $(this).find(".arrow").addClass("active");
            $(this).next().slideDown(0);
        }
    });

    accOpen.bind("click", function() {
        if (!$(this).hasClass("active")) {
            accOpen.removeClass("active");
            accArrow.removeClass("active");
            accClose.slideUp(500);
            $(this).addClass("active");
            $(this).find(".arrow").addClass("active");
            $(this).next().slideDown(500);
        } else {
            $(this).removeClass("active");
            $(this).find(".arrow").removeClass("active");
            $(this).next().slideUp(500);
        }
    });


    // TABS BRANDING
    let tabsLi2 = $(".branding3__info .right ul li");

    tabActive2();

    function tabActive2(tmp) {
        $.each(tabsLi2, function(index) {
            if ($(this).hasClass("active")) {
                $(".branding3__info").find(".tab").hide();
                $(".branding3__info").find(".tab" + (index + 1) + "").show();
                if (tmp) {
                    $(".branding3__info .tab .img").css({ top: "200px", opacity: "0" });
                    $(".branding3__info .tab .message").css({ top: "200px", opacity: "0" });
                    $(".branding3__info .tab .img").stop(0).animate({ top: "0", opacity: 1 }, 500);
                    $(".branding3__info .tab .message").stop(0).animate({ top: "0", opacity: 1 }, 500);
                }
            }
        });
    }

    tabsLi2.bind("click", function() {
        let tmp = false;
        if ($(this).hasClass("active")) {
            tmp = false;
        } else {
            tmp = true;
        }
        tabsLi2.removeClass("active");
        $(this).addClass("active");
        tabActive2(tmp);
    });
});

$('input[type=checkbox]').on('click', function () {
    $(this).parent().toggleClass("checkbox--active");
    let checkboxStatus = $(this).prop('checked')
    console.log(checkboxStatus)
})