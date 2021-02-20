let block = document.querySelectorAll('.column__accordion21');
for (let index = 0; index < block.length; index++) {
    const element = block[index];
    element.querySelector('a').addEventListener('click', function(e) {
        e.preventDefault();
        text = element.querySelector('p');
        text.style = 'white-space:normal';
        element.querySelector('a').style = 'display:none';
    })
}
let block2 = document.querySelectorAll('.column__accordion22');
for (let index = 0; index < block2.length; index++) {
    const element = block2[index];
    element.querySelector('.column__adress-start').querySelector('a').addEventListener('click', function(e) {
        e.preventDefault();
        let li = element.parentNode.querySelectorAll('li');
        for (let index = 0; index < li.length; index++) {
            const el = li[index];
            el.style = 'display:list-item';
        }
        element.querySelector('.column__adress-start').querySelector('a').style = 'display:none';
    })
}

let visible = document.querySelectorAll('.hedden');
let give = document.querySelectorAll('.give');

for (let index = 0; index < visible.length; index++) {
    const element = visible[index];
    element.addEventListener('click', function(e) {
        e.preventDefault();
        give[index].classList.toggle('active');

    })

}