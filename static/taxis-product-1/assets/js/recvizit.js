let btn = document.querySelector('.btn__recv');
let item = document.querySelector('.recv__item');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    if (btn.innerHTML === 'редактировать') {
        btn.innerHTML = 'сохранить';
        item.classList.add('active');
    } else {
        btn.innerHTML = 'редактировать';
        item.classList.remove('active');

    }
})