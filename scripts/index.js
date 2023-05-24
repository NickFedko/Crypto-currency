let menuBtn = document.querySelector('.header__nav__menu__btn');
let menu = document.querySelector('.header__nav__menu');
let blur = document.querySelector('.blur');

menuBtn.addEventListener('click', function() {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	blur.classList.toggle('active');
})