chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (key in changes) {
    console.log(key);
    if (key === "bingeMode") {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.reload(tabs[0].id);
      });
    }
  }
});
