$('.bh').click(function(e) {
    e.preventDefault();
    let $this = $(this),
        blockId = $this.parent('.accordion__item');
    if ($(blockId).children('.acz').css('display') === "none") {
        $(blockId).children('.acz').css('display', '');
        $(blockId).children('.acz').css('opacity', '');
        $(blockId).children('.acz').css('visibility', '');
        $(blockId).children('.bh').css('margin-bottom', '');
    } else {
        $(blockId).children('.acz').css('opacity', '0');
        $(blockId).children('.acz').css('visibility', 'hidden');
        $(blockId).children('.acz').css('display', 'none');
        $(blockId).children('.bh').css('margin-bottom', '0');
    }
});