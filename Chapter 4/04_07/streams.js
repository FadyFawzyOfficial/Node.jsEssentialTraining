const fileSystem = require("fs");

// fileSystem.readFile(
//   "./Chapter 4/04_07/chat-logs/george-ben-chat.log",
//   "utf-8",
//   (error, chatLog) => console.log(chatLog.length)
// );

let stream = fileSystem.createReadStream(
  "./Chapter 4/04_07/chat-logs/george-ben-chat.log",
  "utf-8"
);

stream.on("data", (chunk) => {
  console.log("Read Stream Started");
  console.log("===================");
  console.log(chunk);
});

let data;

stream.on("data", (chunk) => {
  console.log(`chunk: ${chunk.length}`);
  data += chunk;
});

stream.on("end", () => {
  console.log(`Finished at ${data.length}`);
});

console.log("Reading the File");
