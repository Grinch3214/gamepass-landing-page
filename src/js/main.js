import '../scss/style.scss';
import { animationNavbar, addFilterClass } from './modules/header.js';
import { burgerMenu } from './modules/burger.js';
import { startCountdown } from './modules/countdown.js';
import { marquee } from './modules/marquee.js';
import { footerAccordionOnMobile } from './modules/footer.js';
import { accordionTabs } from './modules/tabs.js';

let mask = document.querySelector('.mask');

function initializeModules() {
	return new Promise((resolve) => {

		animationNavbar();
		addFilterClass();
		burgerMenu();
		startCountdown();
		marquee('.marquee__first', 0.155, 'left');
		marquee('.marquee__second', 0.155, 'right');
		footerAccordionOnMobile();
		accordionTabs();

		setTimeout(resolve, 100);
	});
}

document.addEventListener("DOMContentLoaded", () => {
	window.addEventListener('load', async () => {
		try {
			await initializeModules();
			setTimeout(() => {
				mask.classList.add('hide');
				mask.remove();
			}, 600);
		} catch (error) {
			console.error('Error during initialization:', error);
		}
	});
});