// const myModule = require('./myModule');

// console.log(myModule.anything);
// console.log(myModule.inc());

const {inc, dec, getCount } = require('./myModule');

inc();
inc();
inc();

console.log(`the count is ${getCount()}`);