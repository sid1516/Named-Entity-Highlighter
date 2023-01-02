chrome.action.onClicked.addListener((tab) => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["thirdParty/jquery-3.6.3.min.js","thirdParty/jquery.mark.min.js", "contentScript.js"]
    });
});
  