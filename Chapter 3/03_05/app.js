const events = require('events');

const customEventKey = 'customEvent'

let emitter = new events.EventEmitter();

emitter.on(customEventKey, (message, user) => {
    console.log(`${user}: ${message}`);
});

emitter.emit(customEventKey, 'Hello World', 'Computer');
emitter.emit(customEventKey, 'That\'s pretty cool', 'Fady');

process.stdout.write('Write \'exit\' to exit!\n');
process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    if(input === 'exit'){
        emitter.emit(customEventKey, 'Goodbye!', 'Process');
        process.exit();
    }
    emitter.emit(customEventKey, input, 'terminal');
});