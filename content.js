$(() => {
  const bingeModeStart = () => {
    $('#vilos-player')
      .parents()
      .siblings()
      .hide();
    $('#vilos-player').css({ position: 'fixed', left: '0', top: '0' });
  };

  chrome.storage.sync.get(['bingeMode'], ({ bingeMode }) => {
    if (bingeMode === undefined) {
      chrome.storage.sync.set({ bingeMode: false });
    }
    if (bingeMode) {
      setTimeout(bingeModeStart, 2000);
    }
  });
});
