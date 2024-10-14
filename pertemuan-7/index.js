//Array in Java Script
//Deklarasi Variable Array

// //Cara 1. Array Literal
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers)

// //Cara 2. Kata kunci New
// let numbers2 = new Array(6,7,8,9,10);
// console.log(numbers2)

//Tipe data yang bisa disimpan dalam Array
let numbers = [1,2,3,4,5]; //numbers
let students = ["John", "Jane", "Bob"]; //string
let john = ["John",30,true, [80,90,100]]; //mixed

console.log(john);

//Array Length
console.log(numbers.length)
console.log(students.length)

//Cara mengakses element/data tertentu dalam array
//Melalui index array, index selalu dimulai dari 0
console.log(numbers[2]) //3
console.log(students[1]) //jane
console.log(john[2]) //true
console.log(john[3] [1]) //90

//Mengakses elemen/data terakhir dalam array
let numbers2 = [1,2,3,4,5,6,7,8,9,10]
console.log(numbers2[numbers2.length-1])
let index = numbers2.findIndex(function(item) {
    return item=="Togo";
});
console.log(index)
console.log(countries[204]);

//Array method
let array = [1,2,3, "Hello", false, true]