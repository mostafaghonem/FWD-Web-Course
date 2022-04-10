//Typing

//implicit Typing
// let person = 'Roy';
// const buildPerson = (person)=>{
//     return `Your person is ${person}`;
// }

//explicit Typing
let person: string;
person = 'Roy';
const buildPerson = (person:string): string=>{
    return `Your person is ${person}`;
}

console.log(buildPerson(person));

//Union Types - used when more than one type can be used
let studentPhone: (number | string);
studentPhone = '(555) 555 - 5555';
studentPhone = 5555555555;

// ============================
//Arrays in Ts
const myArr:number[] = [5,6,8,2,66,9]; //Array of numbers of variable length

//varying types
const myArr1: (string|number)[] = ['cat' , 5 , 'Dog' , 10 ,20];

// ============================
//Tuples
//typescript only -- not a Javascript datatype.
//use only when length is known
//when you know the type of data 
const student: [string , number , string , string] =[
    'sara' ,
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
    points :['North' , 'South' , 'East' , 'West']
}
Object.freeze(compass); //A frozen object can no longer be changed

//Enum in TypeScript
enum Compass_ {//Use PascalCase to type the Keys
    North ,
    South , 
    East ,
    West
}
//we Pass the enum as a data type
const move = (dist:number , directions:Compass_)=>{
    return `walk ${dist} paces ${directions}`;
}

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
const stud1 ={
    name:"Mostafa",
    age:15,
    enrolled:true
};
console.log(stud1.name);
//to add Properties //don't work in TypeScript
// stud1.course = 'math';
// console.log(stud1.course);


//in TypeScript 
const stud2: {
    name:string,
    age:number,
    enrolled:boolean} ={
        name : 'Mostafa',
        age:15,
        enrolled:true
    }
//we can 
stud2.enrolled = false;
//but it will fail
// stud2.course = 'Math';

//So, objects in TypeScript is difficult so, we Use Interfaces:Perfered Type for Objects
interface Student_{
    name:string;
    age:number;
    enrolled:boolean;
}
//then create a vriable as student
const stud3:Student_ = {
    name:'Ghonem' , age:15 , enrolled:true
}
//Interface can add properties by extending it
//here Student_ is the parent class
interface UnderGrad extends Student_{
    course : string;
}

const stud4: UnderGrad ={
    name:'Ahmed',
    age:18,
    enrolled:true,
    course:'Math'
}
// ---------------
//Duck Typing
const myFunc = (person:Student_)=>{
    console.log(person);
}
myFunc(stud3);

interface Teacher {
    name:string;
    age:number;
    enrolled:boolean;
}
const teacher:Teacher ={
    name:'Ebrahim',
    age:35,
    enrolled:true
}
//Since teacher walks and quacks like the Student interface, it's Duck
myFunc(teacher);

// ---------------
//Optional properties
interface Student_{
    course?:string;
}

const stud5 :Student_={
    name:'Kara',
    age:16,
    enrolled:true,
    course:'Math'
}
console.log(stud5);
// ---------------
//ReadOnly property
//can't be changed
interface Stud_{
    readonly id:number;
}

const stud6:Stud_ ={
    id:1
}