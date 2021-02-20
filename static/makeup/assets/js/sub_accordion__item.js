/*sub-accordion__item*/
let header = document.querySelectorAll('.accordion .accordion-header .strelka'); //active
let subbody = document.querySelectorAll('.accordion-sub-body'); //active
let telo = document.querySelectorAll('.accordion-sub-body__telo'); //visible
let item = document.querySelectorAll('.accordion__item'); //active
let title = document.querySelectorAll('.accordion-sub-body__title ');
for (let index = 0; index < header.length; index++) {
    const element = header[index];
    element.addEventListener('click', function(e) {
        e.preventDefault();
        item[index].classList.toggle('active');
        subbody[index].classList.toggle('active');
        telo[index].classList.remove('visible');
    })
}
for (let index = 0; index < title.length; index++) {
    const element = title[index];
    element.addEventListener('click', function(e) {
        e.preventDefault();
        telo[index].classList.toggle('visible');
    })
}
for (let index = 0; index < telo.length; index++) {
    const element = telo[index];
    let rows = element.querySelectorAll('.telo__row');
    let itogs = 0;
    for (let index = 0; index < rows.length; index++) {
        const element = rows[index];
        let row_sum = element.querySelector('.row__sum');
        let text_sum = element.querySelectorAll('.text');
        if (text_sum[0].innerHTML === text_sum[1].innerHTML) {
            row_sum.parentNode.querySelector('.row__oplata').style = 'display:none';
            row_sum.parentNode.querySelector('.row__spisat').style = 'display:none';
        }
        if (text_sum[0].innerHTML < text_sum[1].innerHTML) {
            itogs++;
        }
    }
    if (itogs > 0) {
        document.querySelectorAll('.first')[index].innerHTML = 'Не оплачен';
    }
}