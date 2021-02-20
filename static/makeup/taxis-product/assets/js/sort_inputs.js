let yandexinp = document.querySelector('.yandexinp');
let gettinp = document.querySelector('.gettinp');
let cityinp = document.querySelector('.citiinp');


yandexinp.addEventListener('click', function(e) {
    yandexinp.toggleAttribute('checked');
    if (!yandexinp.checked) {
        for (let index = 0; index < document.querySelectorAll('.y').length; index++) {
            const element = document.querySelectorAll('.y')[index];
            element.style = 'display:none';
        }
    } else {
        for (let index = 0; index < document.querySelectorAll('.y').length; index++) {
            const element = document.querySelectorAll('.y')[index];
            element.style = 'display:';
        }
    }
    if (!yandexinp.checked && !cityinp.checked) {
        for (let index = 0; index < document.querySelectorAll('.ys').length; index++) {
            const element = document.querySelectorAll('.ys')[index];
            element.style = 'display:none';
        }
    } else {
        for (let index = 0; index < document.querySelectorAll('.ys').length; index++) {
            const element = document.querySelectorAll('.ys')[index];
            element.style = 'display:';
        }
    }
    if (!yandexinp.checked && !gettinp.checked) {
        for (let index = 0; index < document.querySelectorAll('.yg').length; index++) {
            const element = document.querySelectorAll('.yg')[index];
            element.style = 'display:none';
        }
    } else {
        for (let index = 0; index < document.querySelectorAll('.yg').length; index++) {
            const element = document.querySelectorAll('.yg')[index];
            element.style = 'display:';
        }
    }
})

gettinp.addEventListener('click', function(e) {
    gettinp.toggleAttribute('checked');
    if (!gettinp.checked) {
        document.querySelector('.g').style = 'display:none';
    } else {
        document.querySelector('.g').style = 'display:';
    }
    if (!yandexinp.checked && !gettinp.checked) {
        for (let index = 0; index < document.querySelectorAll('.yg').length; index++) {
            const element = document.querySelectorAll('.yg')[index];
            element.style = 'display:none';
        }
    } else {
        for (let index = 0; index < document.querySelectorAll('.yg').length; index++) {
            const element = document.querySelectorAll('.yg')[index];
            element.style = 'display:';
        }
    }
    if (!cityinp.checked && !gettinp.checked) {
        for (let index = 0; index < document.querySelectorAll('.sg').length; index++) {
            const element = document.querySelectorAll('.sg')[index];
            element.style = 'display:none';
        }
    } else {
        for (let index = 0; index < document.querySelectorAll('.sg').length; index++) {
            const element = document.querySelectorAll('.sg')[index];
            element.style = 'display:';
        }
    }
})

cityinp.addEventListener('click', function(e) {
    cityinp.toggleAttribute('checked');
    if (!cityinp.checked) {
        for (let index = 0; index < document.querySelectorAll('.s').length; index++) {
            const element = document.querySelectorAll('.s')[index];
            element.style = 'display:none';
        }
    } else {
        for (let index = 0; index < document.querySelectorAll('.s').length; index++) {
            const element = document.querySelectorAll('.s')[index];
            element.style = 'display:';
        }
    }
    if (!yandexinp.checked && !cityinp.checked) {
        for (let index = 0; index < document.querySelectorAll('.ys').length; index++) {
            const element = document.querySelectorAll('.ys')[index];
            element.style = 'display:none';
        }
    } else {
        for (let index = 0; index < document.querySelectorAll('.ys').length; index++) {
            const element = document.querySelectorAll('.ys')[index];
            element.style = 'display:';
        }
    }
    if (!cityinp.checked && !gettinp.checked) {
        for (let index = 0; index < document.querySelectorAll('.sg').length; index++) {
            const element = document.querySelectorAll('.sg')[index];
            element.style = 'display:none';
        }
    } else {
        for (let index = 0; index < document.querySelectorAll('.sg').length; index++) {
            const element = document.querySelectorAll('.sg')[index];
            element.style = 'display:';
        }
    }
})

function dn() {
    for (let index = 0; index < document.querySelectorAll('.s').length; index++) {
        const element = document.querySelectorAll('.s')[index];
        element.style = 'display:none';
    }

    for (let index = 0; index < document.querySelectorAll('.y').length; index++) {
        const element = document.querySelectorAll('.y')[index];
        element.style = 'display:none';
    }
    for (let index = 0; index < document.querySelectorAll('.g').length; index++) {
        const element = document.querySelectorAll('.g')[index];
        element.style = 'display:none';
    }
    for (let index = 0; index < document.querySelectorAll('.ys').length; index++) {
        const element = document.querySelectorAll('.ys')[index];
        element.style = 'display:none';
    }
    for (let index = 0; index < document.querySelectorAll('.yg').length; index++) {
        const element = document.querySelectorAll('.yg')[index];
        element.style = 'display:none';
    }
    for (let index = 0; index < document.querySelectorAll('.sg').length; index++) {
        const element = document.querySelectorAll('.sg')[index];
        element.style = 'display:none';
    }
}
dn();