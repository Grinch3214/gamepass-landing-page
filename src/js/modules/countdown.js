export function startCountdown() {
	const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

	// Set start date here (example, 1 nov 2024)
	const startDate = new Date("2024-11-01T00:00:00").getTime();
	// Set end date here on 20 days
	const endDate = startDate + 20 * day;

	function padZero(num) {
		return num < 10 ? `0${num}` : num;
	}

	function updateCountdown(countdown) {
		const now = new Date().getTime(),
			distance = endDate - now;

		countdown.querySelector(".countdown__days").innerText = padZero(Math.floor(distance / day));
		countdown.querySelector(".countdown__hours").innerText = padZero(Math.floor((distance % day) / hour));
		countdown.querySelector(".countdown__minutes").innerText = padZero(Math.floor((distance % hour) / minute));
		countdown.querySelector(".countdown__seconds").innerText = padZero(Math.floor((distance % minute) / second));

		if (distance < 0) {
			countdown.previousElementSibling.innerText = "Offer has ended";
			countdown.style.display = "none";
			countdown.nextElementSibling.style.display = "block";
		}
	}

	const countdowns = document.querySelectorAll(".boost__box-inner-countdown.countdown");
	setInterval(() => {
		countdowns.forEach(updateCountdown);
	}, 1000);
}