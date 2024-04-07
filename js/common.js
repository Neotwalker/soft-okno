"use strict";

document.addEventListener("DOMContentLoaded", () => {

	const menu = document.querySelector('.menu');
	const menuItems = document.querySelectorAll('.menu > li');
	const subMenus = document.querySelectorAll('.menu .sub-menu');
	let timer;

	function resetSubMenus() {
		subMenus.forEach(subMenu => subMenu.classList.remove('active'));
		menuItems.forEach(item => item.classList.remove('active'));
	}

	menu.addEventListener('click', event => {
		if (event.target.closest('li')) {
			const clickedMenuItem = event.target.closest('li');
			const isActive = clickedMenuItem.classList.contains('active');
			resetSubMenus();
			if (!isActive) {
				clickedMenuItem.classList.add('active');
			} else {
				clickedMenuItem.classList.remove('active');
			}
		}
	});

	menuItems.forEach((menuItem, index) => {
		menuItem.addEventListener('mouseenter', () => {
			clearTimeout(timer);
			resetSubMenus();
			subMenus[index].classList.add('active');
		});

		menuItem.addEventListener('mouseleave', () => {
			timer = setTimeout(() => {
				subMenus[index].classList.remove('active');
			}, 400);
		});

		subMenus[index].addEventListener('mouseenter', () => {
			clearTimeout(timer);
		});

		subMenus[index].addEventListener('mouseleave', () => {
			timer = setTimeout(() => {
				subMenus[index].classList.remove('active');
			}, 400);
		});
	});

	document.addEventListener('click', function(event) {
		if (!event.target.closest('.menu')) {
			resetSubMenus();
		}
	});

	const burger = document.querySelector('.burger');
	const headerNav = document.querySelector('.header--nav');
	burger.addEventListener('click', e => {
		if (burger.classList.contains('active')) {
			headerNav.style.maxHeight = '0';
			headerNav.classList.remove('active');
		} else {
			const windowHeight = window.innerHeight - 80;
			headerNav.style.maxHeight = `${windowHeight}px`;
			headerNav.classList.add('active');
		}
		burger.classList.toggle('active');
	});

	const splideColored = document.querySelector('.main--colored__wrapper');
	if (splideColored){
		const splide = new Splide( '.main--colored__wrapper', {
			type: 'loop',
			gap: '24px',
			speed: 800,
			perPage: 4,
			breakpoints: {
				901: {
					perPage: 2,
				},
				650: {
					perPage: 1,
				},
				481: {
					perPage: 1,
					arrows: false,
					fixedWidth: '282px'
				}
			}
		});

		splide.mount();
	}

	const splideWorks = document.querySelector('.main--works__wrapper');
	if (splideWorks){
		const splide = new Splide( '.main--works__wrapper', {
			type: 'loop',
			gap: '24px',
			speed: 800,
			perPage: 4,
			breakpoints: {
				901: {
					perPage: 2,
				},
				650: {
					perPage: 1,
				},
				481: {
					perPage: 1,
					arrows: false,
					fixedWidth: '282px'
				}
			}
		});

		splide.mount();
	}

	const splideReviews = document.querySelector('.main--reviews__wrapper');
	if (splideReviews){
		const splide = new Splide( '.main--reviews__wrapper', {
			type: 'slide',
			gap: '24px',
			speed: 800,
			perPage: 3,
			breakpoints: {
				901: {
					perPage: 2,
				},
				650: {
					perPage: 1,
				},
				481: {
					perPage: 1,
					arrows: false,
					fixedWidth: '282px'
				}
			}
		});

		splide.mount();
	}

	Fancybox.bind("[data-fancybox]", {});

	let element3 = document.querySelector('.wpcf7-tel');
	if (element3) {
		let maskOptions3 = {
				mask: '+7 (000) 000-00-00',
				lazy: false
		} 
		let mask3 = new IMask(element3, maskOptions3);
	}
	
	let reviews = document.querySelectorAll(".main--reviews__item");
	reviews.forEach(function(review) {
		let button = review.querySelector('.button');
		let info = review.querySelector('.main--reviews__item--info');

		button.addEventListener("click", function() {
			button.classList.add('active');
			info.classList.add('active');
		});
	});

});