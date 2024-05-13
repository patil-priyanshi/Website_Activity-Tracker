// content.js

let startTime;

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    startTime = new Date();
  } else {
    const endTime = new Date();
    const timeSpent = endTime - startTime;
    console.log('Time spent:', timeSpent);
  }
});