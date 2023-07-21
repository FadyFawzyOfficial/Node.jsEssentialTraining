const waitTime = 3000;
const timerFinished = () => {
    console.log('\ndone');
    clearInterval(interval);
}

const waitInterval = 500;
let currentTime = 0;
const incTime = () => {
    currentTime += waitInterval;
    const percentage = Math.floor((currentTime / waitTime) * 100 );
    // process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${percentage}%`);
}

console.log(`Setting a ${waitTime / 1000} seconds delay`);
setTimeout(timerFinished, waitTime);

const interval = setInterval(incTime, waitInterval);