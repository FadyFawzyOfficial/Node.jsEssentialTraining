let hello = "Hello World from Node.js";
let justNode = hello.slice(17);

console.log(`Who let the ${justNode} out?`);
global.console.log(hello);
// console.log(global.hello); // undefined