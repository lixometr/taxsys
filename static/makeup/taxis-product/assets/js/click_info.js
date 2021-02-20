let block = document.querySelectorAll('.shtrafi__info-btn');
for (let index = 0; index < block.length; index++) {
    const element = block[index];
    element.addEventListener('click', function(e) {
        e.preventDefault();
        text = element.parentNode.querySelector('.column__adress-start');
        text.style = 'white-space:normal';
        element.style = 'display:none';
    })
}