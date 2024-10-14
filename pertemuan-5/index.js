 //JavaScript Function
 //syntax penulisan JavaScript

// //Cara 1. Function Declaration
// function greetings1() {
//     console.log("Hello World");
// };
// greetings1(); // Call / Execute Function

// //Cara 2. Function Expression
// let greetings2 = function () {
//     console.log("Hello World");
// };
// greetings2();

//Parameter & Argument (input), Return(Output)
//Cara 1
//                  parameter(boleh lebih dari 1 parameter)
// function greetings1(fullName){
//     return "Hello " + fullName;
// }
// //          argument
// let output1 = greetings1("John Doe");
// console.log(output1)

// //Cara2
// let greetings2 = function(fullName) {
//     return "Hello " + fullName
// }
// let output2 = greetings2("John Doe");
// console.log(output2)

//Function Hoisting
//Cara 1
// let output1 = greetings1("John Doe");
// console.log(output1)
// //                  parameter(boleh lebih dari 1 parameter)
// function greetings1(fullName){
//     return "Hello " + fullName;
// }

//Global Scope & Local Scope

let x = 10; //Global

function foo() {
    let y = 20; //Local Function
    console.log(x);
    console.log(y)
    if (y>10){ //disebut blok
        let z = 30;
        console.log(z)
        console.log(x)
        console.log(y)
    }
}

foo();