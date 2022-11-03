"use strict"
const popupEl = document.querySelector('.popup_js');
const buttonBuy = document.querySelectorAll('.button_buy_js');
const closeBtn = document.querySelectorAll('.close_popup_js');
const POPUP_CLASS_ACTIVE = 'popup_active';


/* вызов и удаление, попап*/
buttonBuy.forEach(button => {
button.addEventListener('click', function(e) {
    e.preventDefault();
    popupEl.classList.add(POPUP_CLASS_ACTIVE);
});
});
closeBtn.forEach(close =>{
    close.addEventListener('click', () => {
        popupEl.classList.remove(POPUP_CLASS_ACTIVE);
    })
});


popupEl.onclick = function (e) {
    if (e.target == popupEl) {
        popupEl.classList.remove(POPUP_CLASS_ACTIVE);
    } 
};
document.onkeydown = function (e) {
    if (e.keyCode === 27) {
        popupEl.classList.remove(POPUP_CLASS_ACTIVE);
    }
}
/* Кнопка НАВЕРХ */

const backToBtn = document.querySelector('.back_to_top');
const targetBackTop = document.getElementById('back_top');

window.onscroll = function() {
    if (window.pageYOffset > 1500) {
        backToBtn.classList.add('back_to_top_show');
    } else { backToBtn.classList.remove('back_to_top_show');}
};

backToBtn.onclick = function(e) {
    e.preventDefault();
    targetBackTop.scrollIntoView();
};
/* Отправка формы и валидация*/
const formEl = document.getElementById('f-1');
const inputUser = document.querySelectorAll('.input_user');


formEl.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    alert('Ваша заявка оформлена! Мы перезвоним вам в ближайшее время!');
    popupEl.classList.remove(POPUP_CLASS_ACTIVE);
    formEl.reset();
});
