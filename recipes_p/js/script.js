document.querySelector('.header__burger').onclick = function () {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
}

let arrow = document.querySelectorAll('.arrow');
let subContent = document.querySelectorAll('.recipes__content-sub');
for (let i = 0; i < arrow.length; i++) {
    arrow[i].onclick = function () {
        arrow[i].classList.toggle('turn');
        subContent[i].classList.toggle('open');
    };
};
