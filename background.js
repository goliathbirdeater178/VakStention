chrome.browserAction.onClicked.addListener(function(tab){
	console.log("bg loaded");
	chrome.tabs.executeScript(null, {
		file: "vak.js"
	})
	
})