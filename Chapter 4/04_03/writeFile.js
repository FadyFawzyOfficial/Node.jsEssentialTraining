const fileSystem = require("fs");

let md = `
        This is a New File
        ==================

        ES6 Template Strings and cool. They honor whitespace.

        * Template Strings
        * Node File System
        * ReadLine CLIs
`;

fileSystem.writeFile("./Chapter 4/04_03/javascript.md", md, (error) => {
  if (error) throw error;
  fileSystem.appendFileSync(
    "./Chapter 4/04_03/javascript.md",
    "\n\n### Node.js Everyone!"
  );
});

console.log("Markdown Created");
