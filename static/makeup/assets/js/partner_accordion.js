/*accordion__item*/
$('.partner__item-header').click(function(e) {
    e.preventDefault();
    let $this = $(this),
        blockId = $this.parent('.partner__item ');
    $(blockId).toggleClass('active');
});