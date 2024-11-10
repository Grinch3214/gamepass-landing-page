export function accordionTabs() {
	const accordion = document.querySelectorAll('.faq__inner-title');

	function closeAllAccordions() {
		accordion.forEach((item) => {
			item.classList.remove('active');
			if (item.nextElementSibling) {
				item.nextElementSibling.style.maxHeight = null;
			}
		});
	}

	function accordionAction() {
		accordion.forEach((elem) => {
			elem.addEventListener("click", function (event) {
				if (this.classList.contains('active')) {
					this.classList.remove('active');
					let list = this.nextElementSibling;
					list.style.maxHeight = null;
				} else {
					closeAllAccordions();

					this.classList.add('active');
					let list = this.nextElementSibling;
					list.style.maxHeight = list.scrollHeight + "px";
				}
			});
		});
	}

	accordionAction();
}