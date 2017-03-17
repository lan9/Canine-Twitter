canineTwitterEnabled = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  canineTwitterEnabled = !!!canineTwitterEnabled;
  alert('Canine Twitter enabled?' + canineTwitterEnabled);
});
