document.addEventListener("DOMContentLoaded", function() {
  var toggle = document.getElementById("toggleBingeMode");

  toggle.addEventListener("click", function() {
    chrome.storage.sync.get(["bingeMode"], result => {
      chrome.storage.sync.set({ bingeMode: !result.bingeMode });
    });
  });
});
