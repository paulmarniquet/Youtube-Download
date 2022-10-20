var apiKey = "AIzaSyAUCElm6Xj284rPWUAV-rkKoD7XBcezvvY";

function youtube_parser(url){
	var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
	var match = url.match(regExp);
	return (match&&match[7].length==11)? match[7] : false;
}

const getJSON = async url => {
	const response = await fetch(url);
	if(!response.ok)
		throw new Error(response.statusText);
	const data = response.json();
	return data;
}

window.onload = function() {
		chrome.tabs.getSelected(null, function(tab) {
			var id = youtube_parser(tab.url);

			getJSON("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + id + "&fields=items(id%2Csnippet)&key=" + apiKey).then(data => {
				document.getElementById('title').innerHTML = data.items[0].snippet.title;
				document.getElementById('thumbnails').src = data.items[0].snippet.thumbnails.default.url;
		});

			var DLButton = document.getElementById('download');
			DLButton.onclick = function () {
				chrome.tabs.getSelected(null, function(tab) {
					alert("Downloaded");
				});
			};
	});
}