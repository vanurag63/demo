// demoapp.js

// this is a simple JavaScript program that logs a message to the console
console.log('Hello, welcome to the demo app.');

// defining a function
function greet(name) {
  console.log(`Hello, ${name}.`);
}

// invoking a function
greet('User');

// defining an object
let user = {
  name: 'User',
  age: 20,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// invoking a method
user.greet();

// defining an array
let array = [1, 2, 3, 4, 5];

// looping through an array
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
