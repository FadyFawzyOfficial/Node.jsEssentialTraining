const fileSystem = require("fs");

// fileSystem.renameSync(
//   "./Chapter 4/04_06/assets/logs",
//   "./Chapter 4/04_06/accounts/logs"
// );

// console.log("Logs Folder moved");

// fileSystem.rmdir("./Chapter 4/04_06/assets", (error) => {
//   if (error) console.log(error);
//   else console.log("assets directory removed");
// });

fileSystem
  .readdirSync("./Chapter 4/04_06/accounts")
  .forEach((file) =>
    fileSystem.renameSync(
      `./Chapter 4/04_06/accounts/${file}`,
      `./Chapter 4/04_06/library/${file}`
    )
  );
console.log("Files Removed");
fileSystem.rmdirSync("./Chapter 4/04_06/accounts");
console.log("Folder Removed");
