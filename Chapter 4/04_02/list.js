const fileSystem = require("fs");

fileSystem.readFile("./Chapter 4/04_02/readme.md", "utf-8", (error, ipsum) => {
  if (error) throw error;
  console.log(ipsum);
});

console.log("reading the file...");
