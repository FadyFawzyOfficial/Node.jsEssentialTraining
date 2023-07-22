const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

module.exports =  (questions, done) => {
    const answers = [];
    
    const answerQuestion = (answer) => {
      answers.push(answer.trim());
      
      if(answers.length < questions.length){
        rl.question(questions[answers.length], answerQuestion);
      } else {
        return done(answers);
      }
    };
    
    rl.question(questions[0], answerQuestion);
};