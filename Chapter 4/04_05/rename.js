const fileSystem = require("fs");

// fileSystem.renameSync(
//   "./Chapter 4/04_05/lib/config.js",
//   "./Chapter 4/04_05/lib/project-config.js"
// );

// console.log("Config.js file renamed");

// fileSystem.rename(
//   "./Chapter 4/04_05/lib/notes.md",
//   "./Chapter 4/04_05/notes.md",
//   function (error) {
//     if (error) throw error;
//     console.log("Notes markdown file moved");
//   }
// );

// fileSystem.unlinkSync("./Chapter 4/04_05/lib/project-config.js");

fileSystem.unlink("./Chapter 4/04_05/notes.md", function (error) {
  if (error) throw error;
  console.log("Notes are gone");
});
