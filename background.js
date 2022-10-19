chrome.tabs.onUpdated.addListener(valid_url);

function valid_url(tabId, changeInfo, tab) {
	//if(typeof tab != "undefined" && typeof tab != "null" ) {
		//if (/youtube[.]com\/watch\?v=/.test(tab.url)) {
			chrome.pageAction.show(tabId);
		//}
	//}
};