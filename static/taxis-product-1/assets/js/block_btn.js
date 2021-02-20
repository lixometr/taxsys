let blockbtn = document.querySelectorAll('.blocked');

for (let index = 0; index < blockbtn.length; index++) {
    const element = blockbtn[index];
    element.addEventListener('click', function(e) {
        e.preventDefault();
        if (element.innerHTML === 'блокировать') {
            element.innerHTML = 'разблокировать';
            element.style = 'background:green;color:#fff';
        } else {
            element.innerHTML = 'блокировать';
            element.style = 'background:#F2994A;color:#333';
        }
    })

}