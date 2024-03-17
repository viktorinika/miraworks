'use strict';
const submitFormButtonEl = document.querySelector('.form-submit');
if (submitFormButtonEl instanceof HTMLElement) {
    submitFormButtonEl.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.classList.add('show');
    });
}


const iconMenuButtonEl = document.querySelector('.icon-menu');
if (iconMenuButtonEl instanceof HTMLElement) {
    iconMenuButtonEl.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.classList.toggle('menu-open');
    });
}