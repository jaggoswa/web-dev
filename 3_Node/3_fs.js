//File system module
const fs = require('fs')
const path = require('path')

/****** Files ******/

// //Reading from a file
// let content = fs.readFileSync('f1.txt')
// console.log('This is F1 data -> ' + content)

// //Writing to a file
// fs.writeFileSync('f2.txt', 'This data will be written on F2') //Creates a file if it doesn't exist
// console.log('Data written')

// // Append to a file
// fs.appendFileSync('f2.txt', ' This is some new data')
// console.log('Data appened')

// //Delete a file
// fs.unlinkSync('f2.txt')
// console.log('f2.txt deleted')

/****** Folders ******/

// //Create directory
// fs.mkdirSync('myDirectory')
// console.log('Directory Created')

// //Delete directory
// fs.rmdirSync('myDirectory')
// console.log('Directory deleted')

// //To check whether a directory exists or not
// let doesExist = fs.existsSync('myDirectory')
// console.log(doesExist)

// // To get statistics of a directory
// let statsOfDir = fs.lstatSync('myDirectory')
// console.log(statsOfDir)

// console.log('isFile?', statsOfDir.isFile())
// console.log('isDirectory?', statsOfDir.isDirectory())


//Copying files

//src file, destination path

let srcFilePath = '/Users/jaggoswa/Documents/web dev/FJP3_DEV/Node/myDirectory/f1.txt'
let destinationFilePath = '/Users/jaggoswa/Documents/web dev/FJP3_DEV/Node/myDirectory2'

let toBeCopiedFileName = path.basename(srcFilePath)
console.log(toBeCopiedFileName)

let destPath = path.join(destinationFilePath, toBeCopiedFileName)
console.log(destPath)

fs.copyFileSync(srcFilePath , destPath)
console.log('File Copied')