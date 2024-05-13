// background.js

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
  });
  
  // Example: Track tab activity
  chrome.tabs.onActivated.addListener((tab) => {
    console.log('Tab activated:', tab);
  });