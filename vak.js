(function (document) {
  
  var imgArray = document.getElementsByTagName('img');
  for(var i = 0; i < imgArray.length; i++){
	  imgArray[i].src = chrome.runtime.getURL("vak.png");
  }

})(document);