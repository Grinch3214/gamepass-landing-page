import '../scss/style.scss';
import { animationNavbar, addFilterClass } from './modules/header.js';
import { burgerMenu } from './modules/burger.js';
import { startCountdown } from './modules/countdown.js';
import { marquee } from './modules/marquee.js';

animationNavbar();
addFilterClass();
burgerMenu();
startCountdown();
marquee('.marquee__first', 0.155, 'left');
marquee('.marquee__second', 0.155, 'right');

document.addEventListener("DOMContentLoaded", () => {
});