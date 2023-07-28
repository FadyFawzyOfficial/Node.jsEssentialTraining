const fileSystem = require("fs");

let questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?",
];

let answers = [];
let answerStream;

function ask(questionIndex) {
  process.stdout.write(`${questions[questionIndex]}`);
  process.stdout.write(`  >  `);
}

process.stdin.once("data", (data) => {
  let name = data.toString().trim();
  let fileName = `./${name}.md`;
  if (fileSystem.existsSync(fileName)) fileSystem.unlinkSync(fileName);
  answerStream = fileSystem.createWriteStream(fileName);
  answerStream.write(
    `Question Answers for ${name}\n============================\n`
  );
});

process.stdin.on("data", (data) => {
  let question = questions[answers.length];
  let answer = data.toString().trim();

  answerStream.write(`Question: ${question}\nAnswer: ${answer}\n`, () => {
    if (answers.length < questions.length) {
      ask(answers.length);
    } else {
      process.exit();
    }
  });

  answers.push(answer);
});

process.on("exit", () => {
  answerStream.close();
  process.stdout.write("\n");
  process.stdout.write(
    `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later!`
  );
  process.stdout.write("\n\n");
});

ask(answers.length);
