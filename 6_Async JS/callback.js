const fs = require("fs");

// //Callback function - Any function that is passed as an argument to another function.

// function printFirstName(firstName, cb){
//     console.log(firstName);
//     cb('Goswami');
// }

// function printLastName(lastName){
//     console.log(lastName);
// }

// printFirstName('Jagriti', printLastName);

// // Synchronous way of reading file

// console.log('Before');

// let data = fs.readFileSync("f1.txt");
// console.log(' ' + data);

// console.log("After");

// Asynchronous way of reading file
console.log('Before');

fs.readFile('f1.txt', cb1);
fs.readFile('f2.txt', cb2);

function cb1(err, data){
    if(err) {
        console.log(err);
    }else{
        console.log(' ' + data);
    }
}

function cb2(err, data){
    if(err) {
        console.log(err);
    }else{
        console.log(' ' + data);
    }
}

console.log("After");