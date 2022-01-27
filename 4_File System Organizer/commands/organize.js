const fs = require("fs");
const path = require("path");

let types = {
  media: ["mp4", "mkv", "mp3", "jpg", "jpeg", "png"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};

function organizeFn(dirpath) {
  let destPath;

  // Check whether root directory path is passed or not
  if (dirpath == undefined) {
    console.log("Please enter a valid Directory Path");
    return;
  } else {
    // Check root directory path exists or not
    let doesExist = fs.existsSync(dirpath);

    if (doesExist == true) {
      destPath = path.join(dirpath, "organized_file");

      //create the organized folder if it doesn't already exist
      if (fs.existsSync(destPath) == false) {
        fs.mkdirSync(destPath);
      } else {
        console.log("Organized folder already exists");
      }
    } else {
      console.log("Please enter a valid path");
      return;
    }
  }

  organizeHelper(dirpath, destPath);
}

// Function to categorize files
function organizeHelper(src, dest) {
  //Get all files and folders inside the src
  let childNames = fs.readdirSync(src);

  for (let i = 0; i < childNames.length; i++) {
    let childAddress = path.join(src, childNames[i]);
    let isFile = fs.lstatSync(childAddress).isFile(); // Checking to identify only files

    if (isFile == true) {
      let fileCategory = getCategory(childNames[i]);
      sendFiles(childAddress, dest, fileCategory);
    }
  }
}

function getCategory(filename) {
  let ext = path.extname(filename);
  ext = ext.slice(1);

  for (let type in types) {
    let cTypeArr = types[type];
    for (let i = 0; i < cTypeArr.length; i++) {
      if (ext == cTypeArr[i]) return type;
    }
  }
  return "others";
}

function sendFiles(srcFilePath, destPath, category) {
  let catPath = path.join(destPath, category);

  if (fs.existsSync(catPath) == false) {
    fs.mkdirSync(catPath);
  }

  let fileName = path.basename(srcFilePath); /// we took out the names of the files
  let destFilePath = path.join(catPath, fileName); // here we created a path for the files in category folders

  fs.copyFileSync(srcFilePath, destFilePath); // copied files from src to dest
  fs.unlinkSync(srcFilePath); // deleted the files from src
}

module.exports = {
  organizeFn: organizeFn,
};
