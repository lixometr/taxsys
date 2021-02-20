/*Маска ввода для инпута число*/
$(".sts").keyup(function(e) {
    this.value = this.value.replace(/[^0-9]/gi, '');
});