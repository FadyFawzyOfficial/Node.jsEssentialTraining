const waitTime = 3000;
const timerFinished = () => {
    console.log('done');
    clearInterval(interval);
}

const waitInterval = 500;
let currentTime = 0;
const incTime = () => {
    currentTime += waitInterval;
    console.log(`waiting ${currentTime / 1000 } seconds`);
}


console.log(`Setting a ${waitTime / 1000} seconds delay`);
setTimeout(timerFinished, waitTime);

const interval = setInterval(incTime, waitInterval);