/** @format */

const form = document.querySelector("form");
const quantity = document.getElementById("quantity");
const minimum = document.getElementById("minimum");
const maximum = document.getElementById("maximum");
const noRepeat = document.getElementById("no-repeat");
const ul = document.getElementById("sorted-numbers");
const results = document.getElementById("results");
const sortAgainButton = document.getElementById("sort-again");

let result = 0;
let sorteio = 0;
let sortedNumbers = new Set();

// listen to the form submission event
form.addEventListener("submit", (e) => {
	e.preventDefault();

	// clear the list and the set
	sortedNumbers.clear();
	ul.innerHTML = "";

	const totalNumbers = parseInt(quantity.value);
	let delay = 0;

	for (let i = 0; i < totalNumbers; i++) {
		setTimeout(() => {
			drawNumber();
			addListItem();
		}, delay);
		delay += 500; // 0.5 seconds delay
	}

	// hide the form and show the results
	form.style.display = "none";
	results.style.display = "block";
});

// draw a number between the minimum and maximum values
function drawNumber() {
	const min = parseInt(minimum.value);
	const max = parseInt(maximum.value);
	const noRepeatChecked = noRepeat.checked; // Captura o estado do checkbox
	do {
		sorteio = Math.floor(Math.random() * (max - min + 1)) + min;
	} while (noRepeatChecked && sortedNumbers.has(sorteio));
	sortedNumbers.add(sorteio);
	console.log(sorteio);
}

// add a new item to the list
function addListItem() {
	const li = document.createElement("li");
	li.textContent = sorteio;
	ul.appendChild(li);
}

// listen to the sort again button click event
sortAgainButton.addEventListener("click", () => {
	// show the form and hide the results
	form.style.display = "block";
	results.style.display = "none";
});
