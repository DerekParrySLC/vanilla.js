// logic variables
var b = document.querySelector("body");

// prepare logic
function plusOne() {
	var newValue = getCounter() + 1;
	localStorage.setItem("counter",newValue);
	b.innerHTML = m.helloWorld();
}

//execute logic
b.innerHTML = m.helloWorld();