$(document).ready(() => {
  bingeModeStart = () => {
    $("#vilos-player")
      .parents()
      .siblings()
      .hide();
    $("#vilos-player").css({ position: "fixed", left: "0", top: "0" });
  };

  chrome.storage.sync.get(["bingeMode"], result => {
    if (result.bingeMode === undefined) {
      chrome.storage.sync.set({ bingeMode: true });
    }
    if (result.bingeMode) {
      setTimeout(bingeModeStart, 2000);
    }
  });
});
