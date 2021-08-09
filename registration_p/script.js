document.querySelector('#sbtn').onclick = function () {
    document.querySelector('.authorization__registration').classList.toggle('inactive');
    document.querySelector('.authorization__sign-in').classList.toggle('active');
}
document.querySelector('#rbtn').onclick = function () {
    document.querySelector('.authorization__registration').classList.remove('inactive');
    document.querySelector('.authorization__sign-in').classList.remove('active');
}
document.querySelector('.header__burger').onclick = function () {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
}
