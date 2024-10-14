// //IIFI & CALLBACK
// // 1. IIFI (Immediately Invokad Function Expression)
// // a. No parameter, Args & Return Value

// (function () {
//     console.log("Hello World");
// })()

// //b. with params & argus & return value
// let output = (function (fullName) {
//     return "Hello " + fullName;
// })("John Doe");
// console.log(output)

// // 2. Callback Function
// //a. no params, args & return value
// function sayHello(callback) {
//     callback()
// }

// sayHello(function () {
//     console.log ("Hello World"); //callback function
// });

//b. with params & args & return value
function sayHello(callback) {
    let result = callback("John Doe");
    return result;
}

let output = sayHello(function(fullName) {
    return "Hello " + fullName
});
console.log(output)