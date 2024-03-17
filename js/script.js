'use strict';
document.addEventListener('click', documentActions);

function documentActions(e) {
    const targetElement = e.target;

    if (targetElement.closest('.icon-menu')) {
        document.body.classList.toggle('menu-open');
    }

    if (targetElement.closest('.form-submit')) {
        document.body.classList.add('show');
    } else {
        document.body.classList.remove('show');
    }
    // e.preventDefault();
}