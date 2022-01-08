// //variable declaration

// //var, let, const

// var a //variable will be initialized with undefined
// console.log(a);

// //JS is a dynamically typed language - datatype is not specified
// a = 2;
// console.log(a)

// a = 'I am a string'
// console.log(a)

// a = true
// console.log(a)

// a = null
// console.log(a)


// //Datatypes in Javascript - number, string, undefined, null
// var b = 2.3 //number
// var c = 'd' //string
// var d = 'I am a string' //string

// //var has some problems

// //1st problem with var: Redeclaration
// var b = 'hello'
// console.log(b)
// var b = 'bye'
// console.log(b)

// //Overcoming redeclaration - use let keyword
// let b = 'hello'
// console.log(b)
// let b = 'bye' //redeclaration not allowed with let keyword
// console.log(b)

// let b = 'hello'
// console.log(b)
// b = 'bye' //reassigning is allowed
// console.log(b)

// //loops
// //for loop

// //Prime number
// var num = 13
// var flag = true

// for(var i=2; i*i <= num; i++){
//     if(num % i == 0){
//         flag = true
//         break;
//     }
// }

// if(flag == true){
//     console.log('Number is Prime')
// }else{
//     console.log('Number is not prime')
// }

//2nd problem with var : Scoping

if(10%2 == 0){
    var a = 2 //var is function scoped
    console.log(a)
}

console.log(a)

//let keyword is block scoped