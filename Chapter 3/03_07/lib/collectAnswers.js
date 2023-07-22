const readline = require("readline");
const {EventEmitter} = require('events');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

module.exports =  (questions, done) => {
    const answers = [];
    const [firstQuestion] = questions;
    const emitter = new EventEmitter();
    
    const answerQuestion = (answer) => {
      emitter.emit('answer', answer);
      answers.push(answer.trim());
      
      if(answers.length < questions.length){
        rl.question(questions[answers.length], answerQuestion);
      } else {
        return done(answers);
      }
    };
    
    rl.question(firstQuestion, answerQuestion);
    return emitter;
};