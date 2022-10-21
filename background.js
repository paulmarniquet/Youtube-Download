chrome.tabs.onUpdated.addListener(valid_url);

function valid_url(tabId, changeInfo, tab) {
	if(typeof tab != "undefined" && typeof tab != "null" ) {
		if (/youtube[.]com\/watch\?v=/.test(tab.url)) {
			chrome.pageAction.show(tabId);
		}
	}
};

window.onload = function() {
	chrome.tabs.getSelected(null, function(tab) {
		var url = tab.url;
		var apiUrl = "https://convert2mp3s.com/api/widgetv2?url=" + url;
		document.getElementById('iframe').src = apiUrl;
	});
}