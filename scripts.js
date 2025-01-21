/** @format */

const form = document.querySelector("form");
const quantity = document.getElementById("quantity");
const minimum = document.getElementById("minimum");
const maximum = document.getElementById("maximum");
const noRepeat = document.getElementById("no-repeat");
const ul = document.getElementById("sorted-numbers");

let result = 0;
let sorteio = 0;
let sortedNumbers = new Set();

// listen to the form submission event
form.addEventListener("submit", (e) => {
	e.preventDefault();

	// clear the list and the set
	sortedNumbers.clear();
	ul.innerHTML = "";
	for (let i = 0; i < quantity.value; i++) {
		drawNumber();
		addListItem();
	}
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
