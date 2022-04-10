"use strict";
//Typing
//implicit Typing
// let person = 'Roy';
// const buildPerson = (person)=>{
//     return `Your person is ${person}`;
// }
//explicit Typing
let person;
person = 'Roy';
const buildPerson = (person) => {
    return `Your person is ${person}`;
};
console.log(buildPerson(person));
//Union Types - used when more than one type can be used
let studentPhone;
studentPhone = '(555) 555 - 5555';
studentPhone = 5555555555;
// ============================
//Arrays in Ts
const myArr = [5, 6, 8, 2, 66, 9]; //Array of numbers of variable length
//varying types
const myArr1 = ['cat', 5, 'Dog', 10, 20];
// ============================
//Tuples
//typescript only -- not a Javascript datatype.
//use only when length is known
//when you know the type of data 
const student = [
    'sara',
    12,
    'math',
    'science'
];
// ============================
//Enum
//not a Javascript data type
//Used for a set of predefined values 
//you use Enum when you have a collection of constants  
//ex : months in year or days in week (items won't changes)
//to apply Enum in JavaScript we can do:
const compass = {
    points: ['North', 'South', 'East', 'West']
};
Object.freeze(compass); //A frozen object can no longer be changed
//Enum in TypeScript
var Compass_;
(function (Compass_) {
    Compass_[Compass_["North"] = 0] = "North";
    Compass_[Compass_["South"] = 1] = "South";
    Compass_[Compass_["East"] = 2] = "East";
    Compass_[Compass_["West"] = 3] = "West";
})(Compass_ || (Compass_ = {}));
//we Pass the enum as a data type
const move = (dist, directions) => {
    return `walk ${dist} paces ${directions}`;
};
//Another Ex
// enum UserResponse {
//     No = 0,
//     Yes = 1,
// }
// function respond(recipient: string, message: UserResponse): void {
//     // ...
// }
// respond("Princess Caroline", UserResponse.Yes);
// ============================
//Objects 
//in JavaScript
const stud1 = {
    name: "Mostafa",
    age: 15,
    enrolled: true
};
console.log(stud1.name);
//to add Properties //don't work in TypeScript
// stud1.course = 'math';
// console.log(stud1.course);
//in TypeScript 
const stud2 = {
    name: 'Mostafa',
    age: 15,
    enrolled: true
};
//we can 
stud2.enrolled = false;
//then create a vriable as student
const stud3 = {
    name: 'Ghonem', age: 15, enrolled: true
};
const stud4 = {
    name: 'Ahmed',
    age: 18,
    enrolled: true,
    course: 'Math'
};
// ---------------
//Duck Typing
const myFunc = (person) => {
    console.log(person);
};
myFunc(stud3);
const teacher = {
    name: 'Ebrahim',
    age: 35,
    enrolled: true
};
//Since teacher walks and quacks like the Student interface, it's Duck
myFunc(teacher);
const stud5 = {
    name: 'Kara',
    age: 16,
    enrolled: true,
    course: 'Math'
};
console.log(stud5);
