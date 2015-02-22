  
chrome.runtime.onInstalled.addListener(function() {
  var context = "link";
  var title = "Download with file validator !";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context}); 
});

chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info, tab) {
  var sText = info.linkUrl;
  //var url = "https://www.google.com/search?q=" + encodeURIComponent(sText); 
 // window.open(sText);
    chrome.tabs.create(
		{"url" : sText });
};

/*
  var clickHandler = function(e) {
    var url = e.pageUrl;

    if (e.linkUrl) {
        url = e.linkUrl;
    }

    buzzPostUrl = encodeURI(url);

    // Open the page up.
    chrome.tabs.create(
          {"url" : buzzPostUrl });
};

chrome.contextMenus.create({
    "title": "Check this with File Validator and download",
    "contexts": ["link"]  ,
    "onclick" : clickHandler
  });

*/
// Set up context menu at install time.


// add click event


// The onClicked callback function.
