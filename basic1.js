console.log("Hello World!!"); //Printing/Output
// single and double quote are same

// Variable 
// --> Containers of data --> data can be change
// Make variable name meaningful
age = 24; //number
fullname = "Tony Stark"; // String
console.log(fullname);
price = 99.30; // float

x = null // no value 
y = undefined //Pta hi nhi isme kya value hai
z = true; //boolean --> true and false (two values only)

// Js is Dynamically typed language.
// Means we dont have to define datatype of variable.
p = 100;
console.log(p);
p = "Dynamic";
console.log(p);

// a = b means put value of right side to left side (Assignment Operator)

// let, const & var //
// var --> Old method to declare, not recommended. can redeclare and value can be updated
var a = 10;
var a = 30; // redeclaring

// let --> not let variable to redeclare but values can be updated. means if I want 
// let fullName = "Tony Stark";
// let fullName = "Tony Stark";
// This will show error
let fullName = "Tony Stark";
fullName = "Hello"; //Updating value
// const-->cant be redeclare nor updated
const q = 10;

let d; // let can be declared without initializing value but cant do for const
console.log(d); // underfined

// var is a gloabal scope variable means these can be used anywhere in the code 
// let and const are block scope variable means code in the {} are consider as one block.
/*
{
    let f = 10;
}
console.log(f);
// this code will show error as let is block scope. 
*/

// DataTypes //
/* Two Types:
    1. Primitive DT --> number,stirng, boolean, undefined, null, BigInt, symbol
    2. Non Primitive DT --> Objects (Array, Functions)

    Object is a collection of values
    Generally object have key:value pair
*/
let g = 10;
console.log(typeof(g));
let h = null;
console.log(typeof(h)); // will print object --> it is primitive only

// These are rarely used
j = BigInt('112334');
console.log(j); // 112334n
// at the end of bigint n would be there
j = Symbol('dfgdfg');
console.log(j)

// Object
const student = {
    fullName2: "Parth Kansal",
    age : 19,
    cgpa: 7.9,
    isPass: false
};

console.log(student);
// only want to access particular key's value
// M1
console.log(student.fullName2);
//M2
console.log(student['fullName2']);

// Changing value
student['age'] = student['age']+20;
console.log(student['age']);