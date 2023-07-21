const waitTime = 3000;
const timerFinished = () => console.log('done');

console.log(`Setting a ${waitTime / 1000} seconds delay`);
setTimeout(timerFinished, waitTime);