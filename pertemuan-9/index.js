//JavaScript Loop

//Array Object
let students = [
    {
        id: 1,
        firstName: "John",
        grade: 80
    },
    {
        id: 2,
        firstName: "Jane",
        grade: 90,
    },
    {
        id: 3,
        firstName: "Bob",
        grade: 100,
    }
];
console.log(students)

//1. For-Loop
// for(let i=0; i<students.length; i++){
//     console.log(students[i].firstName);
// }

//2. While-Loop
// let i = 0;
// while(i<students.length) {
//     console.log(students[1].firstName);
//     i++;
// }

//3. Do-While
// let i = 0
// do{
//     console.log(students[i],firstName);
// }while(i < students.length)

//4. Array Built-in method
//4.a forEach()

// students.forEach(function(item) {
//     console.log(item.firstName);
// });

// //4.b map()
// students.forEach(function(item) {
//     return item.firstName;
// });
// console.log(output)

//4c. Filter()
// let outputFilter = students.filter(function(item) {
//     return item.grade>=90;
// });
// console.log(outputFilter)

//4d. Find()
// let outputFind = students.find(function(item) {
//     return item.grade >= 90;
// });
// console.log(outputFind)

//4.e FindIndex
let outputFindIndex = students.findIndex(function(item) {
    return item.firstName == "Jane";
});
console.log(outputFindIndex);