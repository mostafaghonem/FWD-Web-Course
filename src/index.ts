//Typing

//implicit Typing
// let person = 'Roy';
// const buildPerson = (person)=>{
//     return `Your person is ${person}`;
// }

//explicit Typing
let person: string;
person = 'Roy';
const buildPerson = (person: string): string => {
    return `Your person is ${person}`;
};

console.log(buildPerson(person));

//Union Types - used when more than one type can be used
let studentPhone: number | string;
studentPhone = '(555) 555 - 5555';
studentPhone = 5555555555;

// ============================
//Arrays in Ts
const myArr: number[] = [5, 6, 8, 2, 66, 9]; //Array of numbers of variable length

//varying types
const myArr1: (string | number)[] = ['cat', 5, 'Dog', 10, 20];

// ============================
//Tuples
//typescript only -- not a Javascript datatype.
//use only when length is known
//when you know the type of data
const student: [string, number, string, string] = [
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
enum Compass_ { //Use PascalCase to type the Keys
    North,
    South,
    East,
    West,
}
//we Pass the enum as a data type
const move = (dist: number, directions: Compass_) => {
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
const stud2: {
    name: string;
    age: number;
    enrolled: boolean;
} = {
    name: 'Mostafa',
    age: 15,
    enrolled: true,
};
//we can
stud2.enrolled = false;
//but it will fail
// stud2.course = 'Math';

//So, objects in TypeScript is difficult so, we Use Interfaces:Perfered Type for Objects

interface Student_ {
    name: string;
    age: number;
    enrolled: boolean;
}
//then create a vriable as student
const stud3: Student_ = {
    name: 'Ghonem',
    age: 15,
    enrolled: true,
};
//Interface can add properties by extending it
//here Student_ is the parent class
interface UnderGrad extends Student_ {
    course: string;
}

const stud4: UnderGrad = {
    name: 'Ahmed',
    age: 18,
    enrolled: true,
    course: 'Math',
};
// ---------------
//Duck Typing
const myFunc = (person: Student_) => {
    console.log(person);
};
myFunc(stud3);

interface Teacher {
    name: string;
    age: number;
    enrolled: boolean;
}
const teacher: Teacher = {
    name: 'Ebrahim',
    age: 35,
    enrolled: true,
};
//Since teacher walks and quacks like the Student interface, it's Duck
myFunc(teacher);

//Note : that interfave we can't implement a fnc inside an interface
//we declare a fnc only and define  it in the variable created from it
interface greeting {
    name: string;
    greeting: Function;
}
const greet1: greeting = {
    name: 'Mostafa',
    greeting: function () {
        console.log(this.name);
    },
};

// ---------------
//Optional properties
interface Student_ {
    course?: string;
}

const stud5: Student_ = {
    name: 'Kara',
    age: 16,
    enrolled: true,
    course: 'Math',
};
console.log(stud5);
// ---------------
//ReadOnly property
//can't be changed
interface Stud_ {
    readonly id: number;
}

const stud6: Stud_ = {
    id: 1,
};

// ==============================
//Type Aliases
//Doesnot create a new Type , but rename it
type Name = string;
//can works with unions and tuples
type Input = string | number;
type Coord = [number, number];
//for Typing Objects
//similar to interfaces, bigest difference is that can't be changed
type Student__ = {
    name: string;
    age: number;
};
//we can't add property but can extend the type:
type Phd = Student__ & {
    field: string;
};
//Type in Variables
const stud7: Phd = { name: 'Mostfa', age: 22, field: 'Computer Science' };
const myStudent: Student__ = { name: 'Mary', age: 10 };

//Type in arguments
const enroll = (student: Student__) => {
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
    grade: number;
    constructor(grade: number) {
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
const studentFactory = (
    name: string,
    age: number,
    enrolled: boolean,
    course: string
): Student_ => {
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
const getItem = <T>(arr: T[]): T => {
    return arr[1];
};
console.log(getItem<string>(['cat', 'dog']));
console.log(getItem<number>([5, 6]));

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
const step1 = (): Promise<number> => {
    return new Promise((reject, resolve) => {
        setTimeout(() => {
            try {
                const nextStep = 1;
                console.log('Complete Setp 1');
                resolve(nextStep);
            } catch (err) {
                reject(err as number);
            }
        }, 1000);
    });
};

const step2 = (step: unknown): Promise<number> => {
    return new Promise((reject, resolve) => {
        setTimeout(() => {
            try {
                const nextStep = (step as number) + 1;
                console.log(`completed step ${nextStep}`);
                resolve(nextStep);
            } catch (err) {
                reject(err as number);
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

const run = async (): Promise<void> => {
    try {
        const res1 = await step1();
        await step2(res1);
        console.log('Ur house is done.');
    } catch (err) {
        console.log('There was an error building');
    }
};
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
import _ from 'lodash';

console.log(_.add(4, 3));
console.log(_.multiply(2, 5));

// ======================
//Session 2
//we can type numbering systems dierct in TS:
let normal: number = 1;
let hexa: number = 0x111;
let octa: number = 0o123;
let binary: number = 0b11011;

//Enum
enum status {
    pending = 'Pending',
    ready = 'Ready',
    completed = 'Completed',
}

//sometimes we must use any type
function updateObje(obj: any) {
    return Object.keys(obj);
}

//Type assertion (casting)
let a: string = '5';
let b: number = 125;

b = a as unknown as number;

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
function myFnc(num:number):number{
    return num*num;
}

// export default myFnc;

//differ between .toEqual() and .toBe()
const arr2 =[1,2,3];
const arr3 =[1,2,3];

module.exports = {arr2 , arr3 , myFnc};
// =============================================
