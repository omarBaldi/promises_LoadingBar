/* DOM Elements */
const loadingBarProgressDOM = document.querySelector('.loadingBarProgress');
const loadingProgressPercentageDOM = document.querySelector(
	'.loadingProgressPercentage h3'
);

/* Constant variables */
const MAX_NUMBER_ARRAY_LENGTH = 100;
const DEFAULT_MILLISECONDS_VALUE = 50;
const arrayFilledWIthNumbers = [...Array(MAX_NUMBER_ARRAY_LENGTH).keys()].map(
	(el) => ++el
);

/* Logic */
(async () => {
	const waitTime = (ms) => {
		return new Promise((resolve, _) => setTimeout(resolve, ms));
	};

	const updateLoadingBarStatus = (currentNumber) => {
		loadingBarProgressDOM.style.width = `${currentNumber}%`;
		loadingProgressPercentageDOM.innerText = `${currentNumber}%`;
	};

	for (let number of arrayFilledWIthNumbers) {
		await waitTime(DEFAULT_MILLISECONDS_VALUE).then(() =>
			updateLoadingBarStatus(number)
		);
	}

	loadingProgressPercentageDOM.innerText = `Loading completed!`;
})();
