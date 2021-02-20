items = document.querySelectorAll('.sort__item');
yandex = document.querySelector('.popup__body-yandex');
gett = document.querySelector('.popup__body-gett');
city = document.querySelector('.popup__body-city');

items[0].addEventListener('click', function(e) {
    e.preventDefault();
    yandex.classList.add('active');
    gett.classList.remove('active');
    city.classList.remove('active');
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        element.classList.remove('active');
    }
    items[0].classList.add('active');
})
items[1].addEventListener('click', function(e) {
    e.preventDefault();
    yandex.classList.remove('active');
    gett.classList.add('active');
    city.classList.remove('active');
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        element.classList.remove('active');
    }
    items[1].classList.add('active');
})
items[2].addEventListener('click', function(e) {
    e.preventDefault();
    yandex.classList.remove('active');
    gett.classList.remove('active');
    city.classList.add('active');
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        element.classList.remove('active');
    }
    items[2].classList.add('active');
})