const ITEM = number => `
  <div class="fizz-buzz-item">
    <span>${number}</span>
  </div>
`;
const ITEM_FIZZ = `
  <div class="fizz-buzz-item fizz">
    <span>fizz</span>
  </div>
`;
const ITEM_BUZZ = `
  <div class="fizz-buzz-item buzz">
    <span>buzz</span>
  </div>
`;
const ITEM_FIZZBUZZ = `
  <div class="fizz-buzz-item fizzbuzz">
    <span>fizzbuzz</span>
  </div>
`;

function clearResults() {
	const container = document.querySelector(".resultsSection");
	container.innerHTML = "";
}

function submitForm(e) {
	e.preventDefault();
	clearResults();
	const input = document.querySelector(".fizzBuzzNumber");
	const container = document.querySelector(".resultsSection");
	for (let i = 1; i <= input.value; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			container.innerHTML += ITEM_FIZZBUZZ;
		} else if (i % 3 === 0) {
			container.innerHTML += ITEM_FIZZ;
		} else if (i % 5 === 0) {
			container.innerHTML += ITEM_BUZZ;
		} else {
			container.innerHTML += ITEM(i);
		}
	}
}

function deleteItem(e) {
	if (e.target.matches(".fizz-buzz-item")) {
		const container = document.querySelector(".resultsSection");
		const item = e.target;
		container.removeChild(item);
	}
}

function init() {
	document
		.querySelector("#fizzBuzzForm")
		.addEventListener("submit", submitForm);
	document
		.querySelector(".resultsSection")
		.addEventListener("click", deleteItem);
}

window.onload = init;
