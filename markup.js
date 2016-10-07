// pre-markup
if(localStorage.getItem("counter") == null) {
	localStorage.setItem("counter", 0)
}

function getCounter() {
	return JSON.parse(localStorage.getItem("counter"));
}

// markup
var m = {
	helloWorld: function() {
		return `
			<h1>Welcome to Vanilla.js</h1>
			<button onclick="plusOne()">click me</button>
			<p>Clicks: ${getCounter()}</p>
		`;
	}
}