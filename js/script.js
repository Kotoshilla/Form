'use strict';

let receive = document.querySelector('#receive'),
    modal = document.querySelector('.modal'),
    closeModal = document.querySelector('.close'),
    text = document.getElementsByName('message')[0],
    inputName = document.querySelector('.contactform_name');


receive.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

inputName.addEventListener('input', () => {
    text.value = `Меня зовут ${inputName.value} и у меня вопрос:`;
});


