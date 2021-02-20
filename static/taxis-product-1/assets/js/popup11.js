let odobr = document.querySelector('.odobr');
let moment = document.querySelector('.moment');
let add = document.querySelector('.add-comision');

odobr.addEventListener('click', function(e) {
    e.preventDefault();
    moment.classList.remove('active');
    odobr.classList.add('active');
})

moment.addEventListener('click', function(e) {
    e.preventDefault();
    odobr.classList.remove('active');
    moment.classList.add('active');
})

add.addEventListener('click', function(e) {
    e.preventDefault();
    $(".comisii").append("<div class='row-row4'><div class='text'>За вывод суммы от</div><div class='row-row4-sub'><input type='text' class='ss'><div class='text'>₽</div></div><div class='text'>до</div> <div class='row-row4-sub'><input type='text' class='ss'><div class='text'>₽</div></div> &mdash;<div class='row-row4-sub'><input type='text' class='ss' maxlength='2'>    <div class='text'>%</div>    </div>    <a href=''><img src='/assets/img/trash-2.svg' alt=''></a>             </div>");
})