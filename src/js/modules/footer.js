export function footerAccordionOnMobile() {
	const accordion = document.querySelectorAll('.footer__title');

	function accordionOnMobile() {
		accordion.forEach((elem) => {
			elem.addEventListener("click", function (event) {
				if (window.innerWidth <= 768) {
					this.classList.toggle('active');
					let list = this.nextElementSibling;
					if (!list.style.maxHeight) {
						list.style.maxHeight = list.scrollHeight + "px";
					} else {
						list.style.maxHeight = null;
					}
				}
			});
		});
	}
	accordionOnMobile();
};