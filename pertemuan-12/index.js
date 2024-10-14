// //String Literals, Arrow Function, Default Parameter

// //1. String Literals
// let fullName = "John Doe"
// let age = 33
// let address = "Manado"

// //Hallo Nama Saya John Doe, Umur Saya 33 Tahun
// //Dan saya Tinggal di Manado

// let kalimat = "Halo nama saya " + fullName + ", Umur saya " + age + " dan saya tinggal di " + address;
// let kalimat2 = `Halo nama saya ${fullName}, umur saya ${age} dan saya tinggal di ${address}`

// console.log (kalimat)
// console.log (kalimat2)

//Arrow Function

function sayGreetings1(fullName) {
    return `Halo nama saya ${fullName}`;
}
console.log(sayGreetings1("John Doe"));

const sayGreetings2 = (fullName) => `Halo nama saya ${fullName}`

console.log(sayGreetings2("John Doe"))

//Arrow function pada IIFE
let output1 = (() => `Hello`)();
console.log (output1)

//Arrow function pada Callback
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2);

//3. Default Parameter
const sayGreetings3 =(fullName, age, address) =>  {
    if (!fullName) {
        fullName = "John Doe";
    }
    if (!age){
        age = 30;
    }
    if (!address) {
        address = "Manado"
    }
    console.log(`Halo nama saya ${fullName} umur saya ${age} dan saya tinggal di ${address}`)
};

sayGreetings3("Stenly", 35, "Airmadidi");

const sayGreetings4 = (fullName = "John Doe", age = 30, address = "Manado") {
    console.log(
        `Halo nama saya ${fullName} umur saya ${age} dan saya tinggal di ${address} `
    )
}
