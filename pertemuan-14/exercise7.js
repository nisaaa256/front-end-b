// Destructuring (Array & Object)

// 1. Array 
const fruits = ['mango', 'orange', 'grape'];
const [a, b] = fruits;
console.log(a); // mango
console.log(b); // orange

// 2. Object 
const person = { name: 'Nisa', age: 20 };
const { name, age } = person;
console.log(name, age); // Nisa 20

// Destructuring dengan mengambil sebagian item (Array & Object)

// 1. Array
const colors = ['red', 'green', 'blue'];
const [primary, ...others] = colors;
console.log(primary, others); // red [ 'green', 'blue' ]

// 2. Object
const vehicle = { brand: 'Honda', type: 'Civic', year: 2020, color: 'blue' };
const { brand, type, ...additionalInfo } = vehicle;
console.log(brand, type, additionalInfo); // Honda Civic { year: 2020, color: 'blue' }

// Destructuring dengan menggunakan default value (Array & Object)

// 1. Array
const numbers = [1];
const [first = 10, second = 20] = numbers;
console.log(first, second); // 1 20

// 2. Object 
const book = { title: '1984' };
const { title, author = 'Unknown' } = book;
console.log(title, author); // 1984 Unknown

// Destructuring dengan menggunakan rest operator (Array & Object)

// 1. Array
const scores = [90, 85, 80, 70];
const [topScore, ...restScores] = scores;
console.log(topScore, restScores); // 90 [ 85, 80, 70 ]

// 2. Object
const user = { username: 'johnDoe', password: '1234', email: 'john@example.com' };
const { password, ...userDetails } = user;
console.log(password, userDetails); // 1234 { username: 'johnDoe', email: 'john@example.com' }


// EXERCISE 6 YANG DIUBAH MENJADI DESTRUCTURING
console.log("Exercise 6");
// 1. yearUntilRetirement dengan Destructuring Parameter
console.log("1. yearUntilRetirement dengan Destructuring Parameter");
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

yearUntilRetirement({ year: 1987, firstName: "John" });

// 3. calculateArea dengan Destructuring Parameter
console.log("3. calculateArea dengan Destructuring Parameter");
const phi = 3.14;

const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);
