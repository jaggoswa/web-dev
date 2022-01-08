const path = require('path')

let ext = path.extname('/Users/jaggoswa/Documents/web dev/FJP3_DEV/Node/myDirectory/f1.txt')
console.log('Extension name -> ' + ext)

let basename = path.basename('/Users/jaggoswa/Documents/web dev/FJP3_DEV/Node/myDirectory/f1.txt')
console.log('Basename -> ' + basename)

console.log('Current directory name -> ' + __dirname) // gets you the path of the current directory of this file
console.log('Current file name -> ' + __filename) // gets you the path of the file you are in