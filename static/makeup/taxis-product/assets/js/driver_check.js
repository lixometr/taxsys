/*driver-check*/



let verify = document.querySelector('.verify');

verify.parentNode.querySelector('a').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.check-driver').classList.add('none');
    document.querySelector('.windows8').classList.add('active');
    setTimeout(function() {
        document.querySelector('.windows8').classList.remove('active');
        document.querySelector('.accordion-no-open').classList.remove('show-hide');
    }, 5000);

})