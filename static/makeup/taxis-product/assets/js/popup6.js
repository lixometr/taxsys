let btn = document.querySelector('.body-random__add-driver').querySelector('a');
let rows = document.querySelector('.body-random__drivers').querySelectorAll('.drivers');
let agregators = document.querySelector('.body-random__drivers').querySelector('.agregators');
let pops = document.querySelectorAll('.popup-link');
let rowcheck = document.querySelector('.drivers__row').querySelectorAll('input');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.popup__form').classList.add('active');
    agregators.classList.add('active');
    btn.parentNode.parentNode.style = 'display:none';
    for (let index = 0; index < rows.length; index++) {
        const element = rows[index];
        element.style = 'display:none';
    }
})
for (let index = 0; index < rowcheck.length; index++) {
    const element = rowcheck[index];
    element.addEventListener('click', function(e) {
        element.removeAttribute('checked');

    })
}