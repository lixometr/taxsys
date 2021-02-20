let daytime = document.querySelectorAll('.daytime');

for (let index = 0; index < daytime.length; index++) {
    const element = daytime[index];
    element.addEventListener('keyup', function(e) {
        if (element.value > 24 || element.value < 0) {
            element.value = '';
        }
    })


}