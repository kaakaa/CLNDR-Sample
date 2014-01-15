function loadEvent() {
	httpObj = createXMLHttpRequest(displayData);
	if (httpObj && 'open' in httpObj) {
		httpObj.open("GET", "./events/sample.json", false);
		httpObj.send(null);
	} else {
		window.alert("Opening file is denied.");
	}
	return JSON.parse(httpObj.responseText);
}

function displayData() {
	if ((httpObj.readyState == 4) && (httpObj.status == 200)) {
		return httpObj.responseText;
	} else {
		return "Loading...";
	}
}
