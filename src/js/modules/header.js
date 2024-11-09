//? ----- for animation header -----
function animationNavbar() {
	const navbar = document.querySelector('.header__navbar');
	let anim = setTimeout(function () {
		navbar.classList.add('active');
		clearTimeout(anim);
	}, 150)
};


export { animationNavbar };