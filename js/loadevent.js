function loadEvent(year, month) {
	httpObj = createXMLHttpRequest(displayData);
	var fName = "events/" + year + "/" + month + ".json";
	if (httpObj && 'open' in httpObj) {
		httpObj.open("GET", fName, false);
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
