let drivers = document.querySelector('.drivers').querySelectorAll('.drivers__row');





function sbros() {
    for (let index = 0; index < drivers.length; index++) {
        const element = drivers[index];
        if (element.querySelector('input:checked') !== null) {
            element.querySelector('input').checked = false;
        };
    }
}

for (let index = 0; index < drivers.length; index++) {
    const element = drivers[index];
    element.querySelector('input').addEventListener('click', function(e) {
        sbros();
        element.querySelector('input').checked = true;



    })

}