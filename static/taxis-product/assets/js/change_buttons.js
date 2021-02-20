let new__avto = document.querySelector('.new__avto ');
let existing__car = document.querySelector('.existing__car');

let row8 = document.querySelector('.form__row8');
let row9 = document.querySelector('.form__row9');
let row10 = document.querySelector('.form__row10');
let row11 = document.querySelector('.form__row11');

let row12 = document.querySelector('.form__row12');
let row13 = document.querySelector('.form__row13');

new__avto.addEventListener('click', function(e) {
    e.preventDefault();
    new__avto.classList.add('active');
    existing__car.classList.remove('active');
    row8.classList.add('active');
    row9.classList.add('active');
    row10.classList.add('active');
    row11.classList.add('active');
    row12.classList.remove('active');
    row13.classList.remove('active');
})
existing__car.addEventListener('click', function(e) {
    e.preventDefault();
    new__avto.classList.remove('active');
    existing__car.classList.add('active');
    row8.classList.remove('active');
    row9.classList.remove('active');
    row10.classList.remove('active');
    row11.classList.remove('active');
    row12.classList.add('active');
    row13.classList.add('active');
})