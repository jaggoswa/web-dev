const fs = require("fs");
const path = require("path");

function treeFn(dirPath) {
  if (dirPath == undefined) {
    console.log("Please enter a valid Directory Path");
    return;
  } else {
    // Check root directory path exists or not
    let doesExist = fs.existsSync(dirPath);
    if (doesExist == true) {
      treeHelper(dirPath, " ");
    }
  }
}

function treeHelper(targetPath, indent) {
  let isFile = fs.lstatSync(targetPath).isFile();

  if (isFile == true) {
    let filename = path.basename(targetPath);
    console.log(indent + "├──" + filename);
  } else {
    let dirName = path.basename(targetPath);
    console.log(indent + "└──" + dirName);

    let children = fs.readdirSync(targetPath); //We took out all the children of current folder
    for (let i = 0; i < children.length; i++) {
      let childPath = path.join(targetPath, children[i]);
      treeHelper(childPath, indent + "\t"); //Using recursion to repeat the process for all files and folders
    }
  }
}

module.exports = {
  treeFn: treeFn,
};
