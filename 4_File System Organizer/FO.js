// We will be creating a file system organizer //
// Feature of the project:
// If you have numerous files in a folder and they are not properly arranged
//So you can use this tool to arrange them in specific directory according to their extension

const help = require("./commands/help");
const organize = require("./commands/organize");
const tree = require("./commands/tree");

let inputArr = process.argv.slice(2);
let cmd = inputArr[0];

switch (cmd) {
  case "tree":
    tree.treeFn(inputArr[1]);
    break;
  case "organize":
    organize.organizeFn(inputArr[1]);
    break;
  case "help":
    help.helpFn();
    break;
  default:
    console.log("Please enter a valid command");
    break;
}
