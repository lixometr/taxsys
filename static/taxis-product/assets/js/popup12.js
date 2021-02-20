let btn = document.querySelector('.popup__add-btn');
let inputs = document.querySelector('.inputs');
let addysl = document.querySelector('.add-ysl');
let timework = document.querySelector('.time-work');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    inputs.classList.add('active');
    btn.classList.remove('active');
})
addysl.addEventListener('click', function(e) {
    e.preventDefault();
    timework.classList.add('active');
    addysl.classList.remove('active');
})