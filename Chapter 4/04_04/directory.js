const fileSystem = require("fs");

if (fileSystem.existsSync("./Chapter 4/04_04/your-files-here"))
  console.log("Already there");
else
  fileSystem.mkdir("./Chapter 4/04_04/your-files-here", function (error) {
    if (error) console.log(`ERROR: ${error}`);
    else console.log("Directory is Created");
  });
