//? ----- for animation header -----
function animationNavbar() {
	const navbar = document.querySelector('.header__navbar');
	let anim = setTimeout(function () {
		navbar.classList.add('active');
		clearTimeout(anim);
	}, 650)
};

function addFilterClass() {
	window.addEventListener('scroll', () => {
		const navigation = document.getElementById('navigation');
		navigation.classList.toggle('filter', window.scrollY >= 80);
	});
}


export { animationNavbar, addFilterClass };