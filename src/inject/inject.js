setInterval(function() {
	
	let skip_btn = document.getElementsByClassName('ytp-ad-skip-button');
	if(skip_btn != undefined && skip_btn.length > 0){
		skip_btn[0].click();
	}
},500);


chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});