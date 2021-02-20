$(".VIN").keyup(function(e) {
    this.value = this.value.replace(/[^0-9,a-h,j-n,p,r-z]/i, '');
});