const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with Node.js? ",
];

function collectAnswers(questions, done) {
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
}

collectAnswers(questions, (answers) => {
  console.log('Thank you for your answers:');
  console.log(answers);
  process.exit();
});