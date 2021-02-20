/*popup's*/
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;
const timeout = 0;
if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popuplink = popupLinks[index];
        popuplink.addEventListener('click', function(e) {
            const popupName = popuplink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            e.preventDefault();
            popupOpen(curentPopup);
        })
    }
}
(function() {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.MatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    };
})();
(function() {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function(css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            const doUnlock = false;
            popupClose(popupActive, doUnlock);
        } else {
            bodyLock();
        };
        curentPopup.classList.add('open');
        document.querySelector('.popup-overlay').classList.add('active');
        curentPopup.parentNode.parentNode.querySelector('.popup-overlay').addEventListener('click', function(e) {
            if (!e.target.closest('.popup')) {
                popupClose(e.target.parentNode);
            }
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function(e) {
            popupClose(el.parentNode.parentNode.parentNode.parentNode);
            e.preventDefault();
        })
    }
}

function popupClose(popupActive, doUnlock) {
    doUnlock = doUnlock === undefined ? true : doUnlock;
    if (unlock) {
        popupActive.querySelector('.popup.open').classList.remove('open');
        popupActive.querySelector('.popup-overlay.active').classList.remove('active');
        if (doUnlock) {
            bodyUnlock();
        };
    };
    if (document.querySelector('.popup__form') !== null) {
        document.querySelector('.popup__form').classList.remove('active');
        agregators.classList.remove('active');
        btn.parentNode.parentNode.style = 'display:flex';
        for (let index = 0; index < rows.length; index++) {
            const element = rows[index];
            element.style = 'display:flex';
        }
    }
    if (document.querySelector('.popup__add-btn') !== null) {

        document.querySelector('.popup__add-btn').classList.add('active');
        document.querySelector('.inputs').classList.remove('active');
        document.querySelector('.add-ysl').classList.add('active');
        document.querySelector('.time-work').classList.remove('active');
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.classList.add('lock');
    unlock = false;
    setTimeout(function() {
        unlock = true;

    }, timeout);

}

function bodyUnlock() {
    setTimeout(function() {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);
    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}
document.addEventListener('keydown', function(e) {
    if (e.which === 27) {
        const popupActive = document;
        popupClose(popupActive);
    }
});

/*Переключение кнопок в попап2*/

let writeoff = document.querySelector('.write_off');
let replenish = document.querySelector('.replenish');
let popupcheckbox = document.querySelector('.popup__checkbox');
if (writeoff !== null) {
    writeoff.addEventListener('click', function(e) {
        e.preventDefault();
        writeoff.classList.add('active');
        replenish.classList.remove('active');
        popupcheckbox.classList.add('active');
    });
    replenish.addEventListener('click', function(e) {
        e.preventDefault();
        writeoff.classList.remove('active');
        replenish.classList.add('active');
        popupcheckbox.classList.remove('active');
    })
}