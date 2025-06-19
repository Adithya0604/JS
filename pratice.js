// // // function fruit() {
// // //   price = 20;
// // //   Name = "apple";
// // //   console.log(Name);
// // //   console.log(price);
// // // }
// // // fruit();

// const { memo } = require("react");

// // // for (var i = 0; i < 3; i++) {
// // //   setTimeout(() => console.log(i), 1);
// // // }

// // // console.warn(+true);
// // // console.warn(typeof +true);

// // // console.warn(!'ani');
// // // console.warn(typeof ('ani'));

// // // let data = "size";
// // // const bird = {
// // //   size: "small",
// // // };
// // // console.warn(bird[data]);
// // // console.warn(bird["size"]);
// // // console.warn(bird.size);
// // // console.warn(bird.data);

// // console.log("Start");

// // setTimeout(() => {
// //     console.log("Timeout 1");
// // }, 1000);

// // Promise.resolve().then(() => {
// //     console.log("Promise 1");
// // });

// // setTimeout(() => {
// //     console.log("Timeout 2");
// // }, 15000);

// // Promise.reject().catch(() => {
// //     console.log("Promise 2");
// //     return Promise.resolve();
// // }).then(() => {
// //     console.log("Promise 3");
// // });

// // console.log("End");

// // // Now, let's add this async function
// // async function complexOperation() {
// //     console.log("Async start");

// //     await new Promise(resolve => {
// //         setTimeout(() => {
// //             console.log("Inside timeout");
// //             resolve();
// //         }, 100);
// //     });

// //     console.log("After await");
// //     return "Done";
// // }

// // complexOperation().then(result => {
// //     console.log("Final result:", result);
// // });

// // console.log("After async call");

// // let see = function adithya(){
// //     let firstname = "Sandhyabhiksham";
// //     let see2 = function lastname(){
// //         console.log(firstname);
// //     }
// //     see2();
// //     return "This is for outer fucntion..."
// // }
// // console.log("==> ",see());

// // for (let i of array){
//     //     console.log(i);
//     // }

//     // let array = [12,3,4];

// Object.prototype.JustToCheck = function ToFindLength(){
//     for(let i of Object.entries(this)){
//         console.log(i)
//     }
// }

// let person ={
//     name: 'adithya',
//     age: 21
// };

// console.log(Object.getOwnPropertyDescriptor(person, 'age'));
// console.log(Object.getOwnPropertyDescriptors(person));
// console.log(Object.hasOwn(person, 'name'));

// Object.seal(person);
// person.age = 20;
// console.log(person.age);
// delete person.age;
// console.log(person.age);

// const person2 = {
//   isHuman: false,
//   printIntroduction() {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   },
// };

// console.log(person2.printIntroduction());

// function Animal(type){
//     this.type = type
// }

// Animal.prototype.speak = function(){
//     return `${this.type} will speak...`
// }

// function Dog(name){
//     Animal.call(this, "Dog");
//     this.name = name;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function(){
//     return `${this.name} will bark...`
// }

// const rex = new Dog('Rex')

// console.log(rex.speak());
// console.log(rex.bark());

// let a = 1;
// let b = 2;

// console.log(a != b ?. a>b);

// console.log(typeof typeof);

// class sayhelo{
//     constructor(name){
//         this.name = name
//     }
//     call(){
//         return `Hey ${this.name} says helo`;
//     }
// }

// const person = new sayhelo('Adithya Sharma');
// console.log(person.call());

// CALL
// var person1 = { firstname: "Adithya", lastname: "Sharma" };
// var person2 = { firstname: "john", lastname: "Sharma" };

// function invite(greeting1, greeting2){
//     console.log(greeting1 + ` ${this.firstname} ${this.lastname} ` + greeting2);
// }

// invite.call(person1, 'Hello', 'how are you??');
// invite.call(person2, 'Hello', 'how are you??');

// console.log(v);
// let v;

// function c(){
//     return "hey this is c";
// }

// function B(fnC){
//     const ans = fnC();
//     return `This is from func B ${ans}`
// }

// function a(fnB, fnC){
//     const result = fnB(fnC);
//     console.log(`${result}`);
// }

// a(B, c)

// console.log("A");

// setTimeout(() => {
//     console.log('B');

// });

// ['C', 'D'].forEach(x => {
//     console.log(x);
// });

// console.log('E');

// const add = (a, b, c, d) => a + b + c + d;

// function memoOne(fn) {
//     // creating the cache for the computed results
//     const cacheObj = {};
//     // console.log(cacheObj([...args]);
    
//     return function(...args){
//     const key = args.join(',');
    
//     if (cacheObj[key] !== undefined){
//         console.log('From cache...', key);
//         return cacheObj[key]
//     }
//         const ans = fn(...args);
//         cacheObj[key] = ans;
//         console.log('Computed Results...');
//         return ans;
    
// }
// }

// const memoAdd = memoOne(add);

// console.log(memoAdd(1, 2, 3, 4));
// console.log(memoAdd(1, 2, 3, 4));
// // console.log(memoAdd(2, 2));
// // console.log(memoAdd(2, 2));



matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let Array = [];

let lowerMatrix = 0;
let upperMatrix = 0;

for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[1].length; j++){
        if(i >= j){
            lowerMatrix += matrix[i][j]
        }
        if(j >= i){
             upperMatrix += matrix[i][j]
        }
    }
}
Array.push(lowerMatrix, upperMatrix);
console.log("Completed in 40 MIN...");

console.log('Array:- ', Array);

