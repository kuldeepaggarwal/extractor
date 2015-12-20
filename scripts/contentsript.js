(function() {
  var getPageContent = function() {
    var anchors = document.getElementsByTagName("a"),
        response = [];

    for(var i = 0; i < anchors.length; i++) {
      response.push(anchors[i].innerText);
    }

    // console.log(response, JSON.stringify(response));
    chrome.runtime.sendMessage({
      action: "gotpagecontent",
      data: JSON.stringify(response)
    });
  }

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.action) {
      case 'getpagecontent':
        getPageContent();
        break;
    }
  });
})();
