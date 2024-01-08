console.log("welcome to Revision sessions!!!");

name = "tony Stark";
age = 45;

x = null;
y = undefined;
isFollow = false;
console.log(name, age, x, y, isFollow);

// Js is Dynamically typed lang =>

let num1 = 23; // number type
num1 = "Hello"; // string type
const PI = 3.14; // constant variable can't be reass
var obj = {};
obj.name = "Tony";
console.log(PI, obj.name);

// Type Conversion
let strNum = "46";
let intNum = Number(strNum);
console.log(intNum);
let boolVal = true;
let strBool = String(boolVal);
console.log(strBool);
// Operators in JS

console.log(`The value of pi is ${PI}`);

// Arithmetic operators: + - * / % ++ --
// Assignment operators : += -= *= /= %=>= <<= >>= >>>=
// Comparison operators < > <= >= == != === !==
// Logical operators && || !
// Ternary operator ? :

let result = age > 30 ? "Adult" : "Teen";
console.log(result);

// Bitwise operators & | ^ ~ << >>

let a = 8;
let b = 7;
let c = a & b; // 8&7=0
let d = a | b; // 8|7=15
let e = a ^ b; // 8^7=15
let f = ~a; // bitwise not of 8=-9
let g = a << 2; // left shift 8*2=32
let h = a >> 2; // right shift 8/2=2

console.log(c, d, e, f, g, h);

// Primitive Data Types
// Undefined null and boolean , string,  typeOf, Number, BigInt , Symbol

let _x = BigInt(25);
console.log(_x);

// object is a collection of Values , data is stored as key Value
// property name must be a valid JavaScript identifier . It follows some rules:
/* A valid identifier consists of the following parts:
- The first character must be a letter, an underscore (_), or a backquote (`).
- Subsequent characters can include letters, digits (0 to 9), underscores,
and hyphens (-).
- After any initial underscore, digit, or letter, there cannot be two consecutive
underscores, digits, or hyphens. */

const student = {
  fullName: "Jhon",
  id: 456,
  subject: ["Maths", "Science"],
};

// Comments in JS
/* Multiline comment  */

// Artihemqtic Operators
let ador = 15;
let vaby = 2;
ador += vaby; // ador = ador + vaby

console.log(ador, "ador=>>");

let rem = ador % vaby == 1;
console.log(rem, "rem");

// Unary Operators
// Increment Decrement operators ++ --

ador++;
console.log(ador, "<===>>>");
--ador;
console.log(ador, "<<<====");

// Bitwise operators
// AND | OR ^ Not ~ LShift RShift
// << >>

// Post and pre increment decrement
// a++ will increment but will reflate in nxt line (pre increrment)
// ++a will (pre increment will update simultaneously)

//Conditional Statements

// let age = 25;
if (age > 18) {
  console.log("u can vote!");
}

if (age < 18) {
  console.log("u cannot Vote!");
}

let mode = "DARK";
let color;
if (mode == "DARK") {
  color = "BLACK";
}
if ((mode = "LIGHT")) {
  color = "White";
}

//  Loops and strings
// Loops are used to execute a piece of code again & again

// Syntax : for(initialization ; condition ; iteration){ //code }
for (let i = 0; i <= 5; i++) {
  console.log("Hi learning loops ");
}
// do {

// } while (condition);

// for of array,strings
for (const element of "Hello World!") {
  console.log(element, "char by char");
}

// for in
let person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

//  Strings is a sequence of characters
// Template Literals
// String Interpolations
console.log(`My Name Is ${person.name}, I am ${person.age} years`);

// str.toUpperCae;
// str.toLowerCase();
// str.trim(); // white spaces removes
// str.length
// str.slice(strt idx,end idx)
// str.indexOf(searchValue,fromIndex);
// str.startsWith(), endsWith()
// str.replace(searchVal, newVal)
// str.charAt(idx)
// strings are immutable => str.replace(val,replace val)

// Arrays in Js
let marks = [21, 545, 78, 98, 987];
console.log(marks, "marks=>>>>>>>>", marks.length);

// Accessing elements using index
//Looping Over an Array
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i], "marks Printed!!");
}

let cities = ["delhi", "pune", "mumbai"];

for (let ci of cities) {
  console.log(ci);
}

let itemsPrices = [250, 645, 300, 900, 50];

for (let i = 0; i < itemsPrices; i++) {
  // calculating the discount
  let offer = itemsPrices[i] / 10;

  // getting and updating the value
  itemsPrices[i] -= offer;
  console.log(itemsPrices, "offer=>>>");
}

// Array methods
// Push()-> add to end,
// Pop()-> delete from end and return,
// toString()-> converts array to string
// concat-> join multiple arrays & results new array

let marvel = ["ironMan", "spiderMan"];
let dcHeroes = ["superman", "batman"];

let manupilated_arr = marvel.concat(dcHeroes);
console.log(manupilated_arr);

// unshift() => add to start
// shift() => delete from start & return
// slice(starIdx, endIdx) => return a piece of the array
// splice(add,remove,replace) => change orignal arr

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.splice(2);

let company = ["Bloomberg", "Microsoft", "Uber"];

company.shift();
console.log(company);
company.splice(2, 1, "ola");
console.log(company);
company.push("amazon");
console.log(company);

//Functions in js
// Block of code that performs a specific task, can be invoked whenever needed

// redundancy => repeated code

function functionName(msg) {
  // function k andr call ko parameter bolte hai
  //parameter -> input
  // params are local variable and they have block scope

  // work here
  console.log(msg);
}

functionName("JJJ"); // argument // fun jb invoke hota hai us wakt argument bolte hai

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
      count++;
  }
  console.log(count, "=>>>");
}

// countVowels("aaaaaaaaaaaattttttttuyuu[utdae");
console.log(countVowels("aaaaaaaaaaaattttttttuyuu[utdae"));

// forEach in arrays

let _arr = [1, 2, 3, 4, 5, 6, 78];
_arr.forEach((item, index) => {
  console.log(item, index);
});

arr.filter((val) => {
  return val % 2 != 0;
});
 