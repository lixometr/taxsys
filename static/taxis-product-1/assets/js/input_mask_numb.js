/*Маска ввода для инпута число*/
$(".ss").keyup(function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});