chrome.tabs.onUpdated.addListener(valid_url);
chrome.pageAction.onClicked.addListener(GetURL);

function valid_url(tabId, changeInfo, tab) {
	if(typeof tab != "undefined" && typeof tab != "null" ) {
		if (/youtube[.]com\/watch\?v=/.test(tab.url)) {
			chrome.pageAction.show(tabId);
		}
	}
};

function GetURL() {
	$.getJSON('https://noembed.com/embed',
		{format: 'json', url: document.URL}, function (data)
		{alert(data.title);});
}