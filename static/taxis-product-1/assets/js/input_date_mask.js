let input = document.querySelectorAll('.data');
let dateInputMask = function dateInputMask(elm) {
    elm.addEventListener('keydown', function(e) {
        if (e.keyCode === 8 || e.keyCode === 46) {
            this.value('');
        }
        if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
        let len = elm.value.length;
        if (len !== 1 || len !== 3) {
            if (e.keyCode == 47) {
                e.preventDefault();
            }
        }
        if (len === 2) {
            if (e.keyCode !== 8 && e.keyCode !== 46) {
                elm.value = elm.value + '.';
            }
        }
        if (len === 5) {
            if (e.keyCode !== 8 && e.keyCode !== 46) {
                elm.value = elm.value + '.';
            }
        }

    });
};
for (let index = 0; index < input.length; index++) {
    const element = input[index];
    dateInputMask(element);
}