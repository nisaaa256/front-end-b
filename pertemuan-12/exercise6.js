// Ubah ES5 ke ES6

// 1
const calculateAge = (birthYear) => 2019 - birthYear;

function yearUntilRetirement(object){
	const age = calculateAge(object.year);
	const retirement = 60 - age;

	if(retirement > 0){
    	console.log(object.firstName + ' retires in '+ retirement + ' years');
	} else {
    	console.log(object.firstName + ' is already retired.');
	}
};
yearUntilRetirement({year: 1987, firstName: 'John'});

//2
let addNumber = (a, b, c, d, e, f, g) => {
 	numbers = [a, b, c, d, e, f, g];
 	let sum = 0;
    //Change to map function
 	for(let i=0;i<numbers.length;i++){
     		sum += numbers[i];
 	}
 	return `The numbers of sum is ${sum}.`;
 }

console.log(addNumber(1,2,3,4,5,6,7));

//3
const phi = 3.14;
const power = 2;
let radius = 0;

const calculateArea = (obj) => phi * Math.pow(obj.radius, obj.power);

radius = 21;
const area21 = calculateArea({radius: radius, power: 2 });

radius = 7;
const area7 = calculateArea({radius: radius, power: 2 });

console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);

//4
const makeAjaxRequest = (url ='www.google.com', method = "GET") => {
console.log(url, method);
}

makeAjaxRequest();