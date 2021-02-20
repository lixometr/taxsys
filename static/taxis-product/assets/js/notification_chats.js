/*Переключение между группами левого меню notification*/


let incoming = document.querySelector('.incoming__notification');
let outgoing = document.querySelector('.outgoing__notification');
let create = document.querySelector('.create__notification');
let windows = document.querySelector('.window__chat');
let chatbar = document.querySelector('.chat-bar');
let search = document.querySelector('.search2');
let chartitem = document.querySelector('.create').querySelectorAll('.chats__item');
let out = document.querySelector('.outgoing');
let incom = document.querySelector('.incoming');
let creat = document.querySelector('.create');


incoming.addEventListener('click', function(e) {

    incoming.classList.add('active');
    outgoing.classList.remove('active');
    create.classList.remove('active');
    windows.classList.add('active');
    chatbar.classList.remove('active');
    search.classList.remove('active');
    out.classList.remove('active');
    creat.classList.remove('active');
    incom.classList.add('active');

});
outgoing.addEventListener('click', function(e) {
    incoming.classList.remove('active');
    outgoing.classList.add('active');
    create.classList.remove('active');
    windows.classList.remove('active');
    chatbar.classList.add('active');
    search.classList.remove('active');
    out.classList.add('active');
    creat.classList.remove('active');
    incom.classList.remove('active');

});
create.addEventListener('click', function(e) {
    incoming.classList.remove('active');
    outgoing.classList.remove('active');
    create.classList.add('active');
    windows.classList.remove('active');
    chatbar.classList.add('active');
    search.classList.add('active');
    out.classList.remove('active');
    creat.classList.add('active');
    incom.classList.remove('active');

});
document.querySelector('button.text').addEventListener('click', function(e) {
    e.preventDefault();
    for (let index = 0; index < chartitem.length; index++) {
        const element = chartitem[index];
        element.querySelector('input').toggleAttribute('checked');
    }
})


let redact = document.querySelectorAll('.redact');
for (let index = 0; index < redact.length; index++) {
    const element = redact[index];
    element.addEventListener('click', function(e) {
        e.preventDefault();
        let text = element.parentNode.parentNode.querySelector('.message__text').innerHTML;
        document.querySelector('.message-text').value = text;

    })
}