$(".gosnomer").keydown(function(e) {
    this.value = this.value.replace(/[^0-9\А\В\Е\К\М\Н\О\Р\С\Т\У\Х]\Z/gi, '');
});