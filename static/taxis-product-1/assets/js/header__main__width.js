/*header__main__width*/
$('#header').hover(function() {
    $('#main').addClass('active');
}, function() {
    $('#main').removeClass('active');
});

document.querySelector('.mob-menu__spana').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.mob-menus').classList.toggle('active');
})