(function () {
  buttonYes.addEventListener('click', function() {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "getpagecontent"
      })
    });

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      switch(request.action) {
        case 'gotpagecontent':
          var anchorNames = JSON.parse(request.data),
              listHTML = "";

          for(var i = 0; i < anchorNames.length; i++) {
            if(anchorNames[i])
              listHTML += "<li>" + anchorNames[i] + "</li>";
          }
          anchors.innerHTML = listHTML;
          break;
      }
    });
  });
})();
