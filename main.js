console.log("Hi everyone!");

//Exercise 2
let givenname = "brett";
let greeting = "hello how are you" + " " + givenname;
console.log(greeting)

//Exercise 3
let high = 50;
let low = 10;

//let math = high - low;
//console.log(math);
//A : 50

let math = high - "5";
console.log(math);
//A : 45

let mathone = high + low;
console.log(mathone);
//A:60

let mathtwo = high * low;
console.log(mathtwo);
//A: 500

let maththree = high/low;
console.log(maththree);
//A: 5

let mathfour = high -low - low;
console.log(mathfour);
//A: 30

//Exercise 4
/*let name = "mandy";
let born = 1980;
let today = 2017;
let age = today - born;
console.log(name + "is" + age +"years old.");
//A: mandy is 37 years old. Like when did that happen?*/

let yourName = "mandy";
let instructorName = "josh";
let statement = yourName + "is taking a class at The Iron Yard, my instructor's name is" + instructorName;
console.log(statement);

//Exercise 5
let myAge = 45;
let AgeTest = myAge + 45;
console.log(AgeTest);

if (AgeTest >= 100) {
   console.log("is old");
} else if (AgeTest > 20) {
   console.log("false");
 }

//Exercise 6
//1. the error is in the third line
//2. the error is due to syntax - lastName needs to be written the same in both places (proper case)
//3.
let firstName = "Julia";
let lastName = "Roberts";
let fullName = firstName + lastName;
console.log(fullName);

//not sure where errors are, the blocks below produce the result desired.
let yearBorn = 1975;
let currentYear = 2016;
let age = currentYear - yearBorn;
console.log(age)
