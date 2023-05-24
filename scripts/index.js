let menuBtn = document.querySelector('.header__nav__menu__btn');
let menu = document.querySelector('.header__nav__menu');

menuBtn.addEventListener('click', function() {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})