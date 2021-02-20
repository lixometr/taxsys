$(document).ready(function() {
    let windowWidth = $(window).width();
    //------- MONAY -------
    let autoParkPay1__Header_Os = $(".autoParkPay1__header").offset().top
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
});
let items = document.querySelectorAll('.item-title');
let item = document.querySelectorAll('.item');
for (let index = 0; index < items.length; index++) {
    const element = items[index];
    element.addEventListener('click', function(e) {
        obnul();
        element.classList.add('active');
        item[index].classList.add('active');
    });
}

function obnul() {
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        element.classList.remove('active');
        item[index].classList.remove('active');
    }
};
$('.input').keyup(function() {
    if ($(this).val().match(/^\d{1}$/)) {
        $(this).next('input').focus();
    } else {
        $(this).val('');
    }
});


let worker = document.querySelector('.seconds');

let isTimerActive = false;

function update() {
    isTimerActive = true;
    let myTime = worker.innerHTML;
    let ss = myTime.split(":");
    let dt = new Date();
    dt.setMinutes(ss[0]);
    dt.setSeconds(ss[1]);
    let dt2 = new Date(dt.valueOf() - 1000);
    let temp = dt2.toTimeString().split(" ");
    let ts = temp[0].split(":");
    if (ts[1] + ts[2] + 1 >= 1) {
        worker.innerHTML = (ts[1] + ":" + ts[2]);
        setTimeout(update, 1000);
        if (ts[1] + ts[2] + 1 == 1) {
            isTimerActive = false;
            document.querySelector('.seconds').innerHTML = 'отправить повторно';
            document.querySelector('.seconds').addEventListener('click', function a(e) {
                setTimeout(() => {
                    if (document.querySelector('.seconds').innerHTML === 'отправить повторно') {
                        document.querySelector('.seconds').innerHTML = '02:00';
                        update();
                        e.preventDefault();
                    }
                }, 1000);
            });
        }
    }
}



let confirm = document.querySelector('.confirm');
let bodys = document.querySelectorAll('.popup__body');
let buttons = document.querySelectorAll('.popup-button');
let nambtel = document.querySelectorAll('.nambtel');
if (confirm !== null) {
    confirm.addEventListener('click', function(e) {
        e.preventDefault();
        bodys[0].classList.remove('active');
        bodys[1].classList.add('active');
        document.querySelector('.popup__footer').classList.remove('active');
        document.querySelector('.timer').classList.remove('active');
        buttons[0].classList.remove('active');
        buttons[1].classList.add('active');
    })
    document.querySelector('.popup-link1').addEventListener('click', function(e) {
        worker.innerHTML = '02:00';
        bodys[0].classList.add('active');
        bodys[1].classList.remove('active');
        document.querySelector('.popup__footer').classList.add('active');
        document.querySelector('.timer').classList.add('active');
        buttons[0].classList.add('active');
        buttons[1].classList.remove('active');
        if (isTimerActive === false) {
            update();
        }
        if (items[0].classList.contains('active')) {
            let value = nambtel[0].value;
            let b = document.querySelector('.popup__body').querySelector('b');
            b.innerHTML = value;
        } else if (items[1].classList.contains('active')) {
            let value = nambtel[1].value;
            let b = document.querySelector('.popup__body').querySelector('b');
            b.innerHTML = value;
        } else if (items[2].classList.contains('active')) {
            let value = nambtel[2].value;
            let b = document.querySelector('.popup__body').querySelector('b');
            b.innerHTML = value;
        }
    })
}


let input = document.querySelectorAll('.data');
let dateInputMask = function dateInputMask(elm) {
    elm.addEventListener('keydown', function(e) {
        if (e.keyCode === 8 || e.keyCode === 46) {
            this.value('');
        }
        if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
        let len = elm.value.length;
        if (len !== 1 || len !== 3) {
            if (e.keyCode == 47) {
                e.preventDefault();
            }
        }
        if (len === 2) {
            if (e.keyCode !== 8 && e.keyCode !== 46) {
                elm.value = elm.value + '.';
            }
        }
        if (len === 5) {
            if (e.keyCode !== 8 && e.keyCode !== 46) {
                elm.value = elm.value + '.';
            }
        }
    });
};
for (let index = 0; index < input.length; index++) {
    const element = input[index];
    dateInputMask(element);
}
$(".ss").keyup(function(e) {
    this.value = this.value.replace(/[^0-9,^+]/g, '');
});
$(function() {
    let availableTags = [
        "Мерседес",
        "AppleScript",
        "Asp",
        "BASIC",
        "C"
    ];
    if (document.querySelector('.gorod') !== null) {
        $(".gorod").autocomplete({
            source: availableTags
        });
    }
});