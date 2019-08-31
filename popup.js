document.addEventListener('DOMContentLoaded', async () => {
  const mode = await new Promise(resolve =>
    chrome.storage.sync.get(['bingeMode'], ({ bingeMode }) =>
      resolve(bingeMode)
    )
  );

  document.getElementById('mode').textContent = mode ? 'on' : 'off';

  document.getElementById('toggleBingeMode').addEventListener('click', () =>
    chrome.storage.sync.get(['bingeMode'], ({ bingeMode }) => {
      chrome.storage.sync.set({ bingeMode: !bingeMode });
      document.getElementById('mode').textContent = !bingeMode ? 'on' : 'off';
    })
  );
});
