// child process is a node module used to create sub process within a script
// you can different tasks with your script

const cp = require('child_process')
// console.log('Opening calculator')
// cp.execSync('calc')
// console.log('Calculator opened')

// console.log('Trying to open VS code')
// cp.execSync('code .')

// cp.execSync('start chrome https://www.pepcoding.com/')

console.log('output -> ' + cp.execSync('node test.js'))