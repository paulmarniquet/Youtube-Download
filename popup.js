
window.onload = function() {
	var dButton = document.getElementById('download');
	dButton.onclick = function () {
		chrome.tabs.getSelected(null, function(tab) {
			var tablink = tab.url
			alert(tablink);
		});
	};
}