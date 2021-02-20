let arrows = document.querySelector('.accordion').querySelectorAll('.accordion-header');

for (let index = 0; index < arrows.length; index++) {
    const element = arrows[index];
    element.querySelector('.arrow').addEventListener('click', function(e) {
        e.preventDefault();
        let item = element.parentNode;
        item.classList.toggle('active');
    })

}