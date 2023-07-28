const fileSystem = require("fs");

fileSystem.readdir("./", (error, files) => {
  if (error) throw error;
  console.log(files);
});

console.log("reading files...");
