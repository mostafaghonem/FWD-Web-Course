"use strict";
//Typing
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
    'science',
];
// ============================
//Enum
//not a Javascript data type
//Used for a set of predefined values
//you use Enum when you have a collection of constants
//ex : months in year or days in week (items won't changes)
//to apply Enum in JavaScript we can do:
const compass = {
    points: ['North', 'South', 'East', 'West'],
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
    name: 'Mostafa',
    age: 15,
    enrolled: true,
};
console.log(stud1.name);
//to add Properties //don't work in TypeScript
// stud1.course = 'math';
// console.log(stud1.course);
//in TypeScript
const stud2 = {
    name: 'Mostafa',
    age: 15,
    enrolled: true,
};
//we can
stud2.enrolled = false;
//then create a vriable as student
const stud3 = {
    name: 'Ghonem',
    age: 15,
    enrolled: true,
};
const stud4 = {
    name: 'Ahmed',
    age: 18,
    enrolled: true,
    course: 'Math',
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
    enrolled: true,
};
//Since teacher walks and quacks like the Student interface, it's Duck
myFunc(teacher);
const greet1 = {
    name: 'Mostafa',
    greeting: function () {
        console.log(this.name);
    },
};
const stud5 = {
    name: 'Kara',
    age: 16,
    enrolled: true,
    course: 'Math',
};
console.log(stud5);
const stud6 = {
    id: 1,
};
//Type in Variables
const stud7 = { name: 'Mostfa', age: 22, field: 'Computer Science' };
const myStudent = { name: 'Mary', age: 10 };
//Type in arguments
const enroll = (student) => {
    console.log(student);
};
// ==============================
//Classes
//JavaScript Class
// class Stud{
//     grade;
//     constructor(grade){
//         this.grade = grade;
//     }
// }
//TypeScript exactly like JS
class Stud {
    constructor(grade) {
        this.grade = grade;
    }
}
//Access Modifiers: Private , Puplic and Proteceted for Class Members
//Members in TypeScript are Public by default:
//Private : can't be accessed outside the class
//Protected : like Private but can be accessed from the parent and child class
// class Stud__{
//     public grade:number;
//     public constructor(grade:number){
//         this.grade = grade;
//     }
//     private id:number;
//     protected nickname : string;
// }
// ====================
//Factory  function: is a function that returns a new object
//if YOu want to work with factory function in TS ,
//you can create an interface for the obj and use the interface as the return type
const studentFactory = (name, age, enrolled, course) => {
    return {
        name,
        age,
        enrolled,
        course,
    };
};
const stud9 = studentFactory('Alaa', 29, true, 'Math');
// ====================
//Generics
//resueable components that can be used with different types
//allow us to use generic types as parameters
//ex: i want a fnc that takes array of (strings or numbers) and return the first element
//i can do that with 2 fncs one for Numbers and one for strings,
//but i can with one fnc with Genrics
const getItem = (arr) => {
    return arr[1];
};
console.log(getItem(['cat', 'dog']));
console.log(getItem([5, 6]));
// ============================
//Asynchronous TypeScript
//Async/await alawys return a promise
//use Generics to tell Promise<type> to set the type returned as the Generic
//Ex:
// const myFnc = async (): Promise<void> => {
//     //Async code
// };
//Fnc that retuens a Promise
//Promises that type is Generic
const step1 = () => {
    return new Promise((reject, resolve) => {
        setTimeout(() => {
            try {
                const nextStep = 1;
                console.log('Complete Setp 1');
                resolve(nextStep);
            }
            catch (err) {
                reject(err);
            }
        }, 1000);
    });
};
const step2 = (step) => {
    return new Promise((reject, resolve) => {
        setTimeout(() => {
            try {
                const nextStep = step + 1;
                console.log(`completed step ${nextStep}`);
                resolve(nextStep);
            }
            catch (err) {
                reject(err);
            }
        }, 1000);
    });
};
// step1()
// .then((result)=>{
//     return step2(result);
// })
// .then(()=>{
//     console.log('Ur house is done.');
// })
// .catch(()=>{
//     console.log('There was an error building');
// })
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res1 = yield step1();
        yield step2(res1);
        console.log('Ur house is done.');
    }
    catch (err) {
        console.log('There was an error building');
    }
});
run();
//==================================
//third-party modules with type defination
//to install module as type defination to work with it in TS
//npm i --save-dev @types/packageName
//What happens if there are no Definitions?
//-code will compile with errors
//-will run as expected
//-type-checking does occur for third-party modules
//all type definition files end with .d.ts -> d for definitions
//i can found it iun node_modules/@types/PackageName/common
//ex:
const lodash_1 = __importDefault(require("lodash"));
console.log(lodash_1.default.add(4, 3));
console.log(lodash_1.default.multiply(2, 5));
// ======================
//Session 2
//we can type numbering systems dierct in TS:
let normal = 1;
let hexa = 0x111;
let octa = 0o123;
let binary = 0b11011;
//Enum
var status;
(function (status) {
    status["pending"] = "Pending";
    status["ready"] = "Ready";
    status["completed"] = "Completed";
})(status || (status = {}));
//sometimes we must use any type
function updateObje(obj) {
    return Object.keys(obj);
}
//Type assertion (casting)
let a = '5';
let b = 125;
b = a;
//Interface
//Omit like readonly property
//===================================
//spread operator :in JavaScript ES6
//The JavaScript spread operator (...) allows us to quickly 
//copy all or part of an existing array or object into another array or object.
// function sum(x, y, z) {
//     return x + y + z;
// }
// const numbers = [1, 2, 3];
// console.log(sum(...numbers));
// // expected output: 6
// console.log(sum.apply(null, numbers));
// // expected output: 6
//=================================
//Nullish coalescing : ??
//returns its right-hand side operand when its left-hand side operand is null or undefined,
// and otherwise returns its left-hand side operand.
// const foo = null ?? 'default string';
// console.log(foo);
// // expected output: "default string"
// const baz = 0 ?? 42;
// console.log(baz);
// // expected output: 0
// =======================================
//Fnc to test jasmine framework
function myFnc(num) {
    return num * num;
}
// export default myFnc;
//differ between .toEqual() and .toBe()
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 3];
module.exports = { arr2, arr3, myFnc };
