let buttons = document.querySelectorAll('.butons__item2');
let checkboxs = document.querySelectorAll('.app-checkboxs');
let forms = document.querySelectorAll('.app-forms');
let btn = document.querySelector('.plus-btn');
let form = document.querySelector('.app__form');
let arrow = document.querySelector('.boom');
let apps = document.querySelectorAll('.app-done');
let itogbtn = document.querySelector('.app__form-itog-btn-btn');
let app = document.querySelectorAll('.app');
let zakaz = document.querySelector('.zakaz');
let disign = document.querySelector('.disign');
let pokypka = document.querySelector('.pokypka');
let arenda = document.querySelector('.arenda');

restore();

function restore() {
    if (apps.length > 0) {
        app[0].classList.remove('active');
    } else {
        app[0].classList.add('active');
    }
}
app[0].querySelector('.app__btn').addEventListener('click', function(e) {
    e.preventDefault();
    app[0].classList.remove('active');
    form.classList.add('active');
    for (let index = 0; index < apps.length; index++) {
        const element = apps[index];
        element.classList.remove('active');
        app.classList.remove('active');
    }
    for (let index = 0; index < checkboxs.length; index++) {
        const element = checkboxs[index];
        const el2 = forms[index];
        element.classList.remove('active');
        el2.classList.remove('active');

    }
    arrow.classList.add('active');

})
for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    const el2 = checkboxs[index];
    const el3 = forms[index];
    element.addEventListener('click', function(e) {
        e.preventDefault();
        if (element.innerHTML === 'редактировать') {
            element.innerHTML = 'сохранить';
            el2.classList.add('active');
            el3.classList.add('active');

        } else if (element.innerHTML = 'сохранить') {
            element.innerHTML = 'редактировать';
            el2.classList.remove('active');
            el3.classList.remove('active');
        };
    })
}
btn.addEventListener('click', function(e) {
    e.preventDefault();
    arrow.classList.add('active');
    app[0].classList.remove('active');
    app[1].classList.remove('active');
    form.classList.add('active');
    for (let index = 0; index < apps.length; index++) {
        const element = apps[index];
        element.classList.remove('active');
    }
    checkboxs
    for (let index = 0; index < checkboxs.length; index++) {
        const element = checkboxs[index];
        const el2 = forms[index];
        element.classList.remove('active');
        el2.classList.remove('active');
    }
    arrow.classList.add('active');
    document.querySelector('.plus-btn').classList.remove('active');
})
arrow.addEventListener('click', function(e) {
    e.preventDefault();
    restore();
    form.classList.remove('active');
    arrow.classList.remove('active');
    for (let index = 0; index < apps.length; index++) {
        const element = apps[index];
        element.classList.add('active');
    }
    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index];
        element.innerHTML = 'редактировать';
    }
    document.querySelector('.plus-btn').classList.add('active');
})
itogbtn.addEventListener('click', function(e) {
    e.preventDefault();
    app[1].classList.add('active');
    app[0].classList.remove('active');
    form.classList.remove('active');
    arrow.classList.remove('active');
    for (let index = 0; index < apps.length; index++) {
        const element = apps[index];
        element.classList.add('active');
    }
    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index];
        element.innerHTML = 'редактировать';
    }
    document.querySelector('.plus-btn').classList.add('active');
})
zakaz.addEventListener('click', function(e) {
    e.preventDefault();
    zakaz.classList.add('active');
    disign.classList.remove('active');
    document.querySelector('.zakaz-input').classList.remove('active');
    document.querySelector('.my-disign-input').classList.remove('active');
    cena();
})
disign.addEventListener('click', function(e) {
    e.preventDefault();
    disign.classList.add('active');
    zakaz.classList.remove('active');
    document.querySelector('.zakaz-input').classList.add('active');
    document.querySelector('.my-disign-input').classList.add('active');
    cena();
})
arenda.addEventListener('click', function(e) {
    e.preventDefault();
    pokypka.classList.remove('active');
    arenda.classList.add('active');
    document.querySelector('.zakaz-app').classList.add('visible');
    document.querySelector('.my__disign').classList.add('visible');
    if (zakaz.classList.contains('active')) {
        document.querySelector('.zakaz-input').classList.remove('active');
        document.querySelector('.my-disign-input').classList.remove('active');
    } else {
        document.querySelector('.zakaz-input').classList.add('active');
        document.querySelector('.my-disign-input').classList.add('active');
    }
    cena();
})
pokypka.addEventListener('click', function(e) {
    e.preventDefault();
    arenda.classList.remove('active');
    pokypka.classList.add('active');
    document.querySelector('.zakaz-app').classList.remove('visible');
    document.querySelector('.my__disign').classList.remove('visible');
    document.querySelector('.zakaz-input').classList.remove('active');
    document.querySelector('.my-disign-input').classList.remove('active');
    cena();
})

function cena() {
    if (pokypka.classList.contains('active')) {
        document.querySelector('.app__form-itog-summa').innerHTML = "200 000₽";
    } else if (arenda.classList.contains('active')) {
        document.querySelector('.app__form-itog-summa').innerHTML = "7 000₽";
        if (zakaz.classList.contains('active')) {
            document.querySelector('.app__form-itog-summa').innerHTML = "22 000₽";
        }
    }
}