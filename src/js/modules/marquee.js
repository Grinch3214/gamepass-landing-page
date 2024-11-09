export function marquee(selector, speed, side = 'left') {
	const parentSelector = document.querySelector(selector);
	const clone = parentSelector.innerHTML;
	const totalWidth = parentSelector.scrollWidth;
	let position = side === 'right' ? -totalWidth : 0;
	let intervalId;
	let isPaused = false;

	parentSelector.insertAdjacentHTML('beforeend', clone);
	parentSelector.insertAdjacentHTML('beforeend', clone);
	parentSelector.insertAdjacentHTML('beforeend', clone);

	const animate = () => {
		intervalId = setInterval(function () {
			if (side === 'right') {
				parentSelector.style.transform = `translateX(${position}px)`;
				if (position > 0) {
					position = -totalWidth;
				}
			} else if (side === 'left') {
				parentSelector.style.transform = `translateX(-${position}px)`;
				if (position > totalWidth) {
					position = 0;
				}
			}
			position = position + speed;
		}, 0);
	};

	animate();

	parentSelector.addEventListener('mouseenter', () => {
		clearInterval(intervalId);
		isPaused = true;
	});

	parentSelector.addEventListener('mouseleave', () => {
		if (isPaused) {
			animate();
			isPaused = false;
		}
	});
}
