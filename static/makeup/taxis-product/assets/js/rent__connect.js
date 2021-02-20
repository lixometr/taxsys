let connect = document.querySelectorAll('.connect');
let rent = document.querySelectorAll('.rent');
let connect_btn = document.querySelector('.connect-btn');
let rent_btn = document.querySelector('.rent-btn');
rent_btn.addEventListener('click', function(e) {
    e.preventDefault();
    rent_btn.parentNode.classList.add('active');
    connect_btn.parentNode.classList.remove('active');
    rents();
})
connect_btn.addEventListener('click', function(e) {
    e.preventDefault();
    rent_btn.parentNode.classList.remove('active');
    connect_btn.parentNode.classList.add('active');
    connects();
})

function rents() {
    for (let index = 0; index < rent.length; index++) {
        const element = rent[index];
        element.style = 'display:block';
    }
    for (let index = 0; index < connect.length; index++) {
        const element = connect[index];
        element.style = 'display:none';
    }
}

function connects() {
    for (let index = 0; index < rent.length; index++) {
        const element = rent[index];
        element.style = 'display:none';
    }
    for (let index = 0; index < connect.length; index++) {
        const element = connect[index];
        element.style = 'display:block';
    }
}
connects();
if (document.querySelector('.odobr-btn') !== null) {
    document.querySelector('.odobr-btn').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.odobr-btn').parentNode.classList.remove('active');
        document.querySelector('.rent__buttons2').classList.add('active');
    })
}