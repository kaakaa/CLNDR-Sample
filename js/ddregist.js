function onDrop(event) {
	var text = event.dataTransfer.getData('text');
	console.log(text);
	event.preventDefault();
}
function onDragOver(event) {
	event.preventDefault();
}
