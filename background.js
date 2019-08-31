chrome.storage.onChanged.addListener(
  changes =>
    Object.keys(changes).includes('bingeMode') &&
    chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) =>
      chrome.tabs.reload(id)
    )
);
