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