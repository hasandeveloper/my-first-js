// In JavaScript, functions are fundamental building blocks and come in various forms. Here are the main types of functions you can use in JavaScript:




// ### 1. Function Declarations

// Function declarations are the most common way to define functions. They are hoisted, meaning they can be called before they are defined in the code.


function greet() {
  console.log('Hello!');
}

greet(); // Output: Hello!


// ### 2. Function Expressions

// Function expressions define a function as part of an expression. These functions are not hoisted, so they cannot be called before they are defined.


const greet = function() {
  console.log('Hello!');
};

greet(); // Output: Hello!


// ### 3. Arrow Functions

// Arrow functions provide a more concise syntax. They do not have their own `this`, `arguments`, `super`, or `new.target`, and they are always anonymous.


const greet = () => {
  console.log('Hello!');
};

greet(); // Output: Hello!


// ### 4. Anonymous Functions

// Anonymous functions are functions without a name. They are often used as arguments to other functions or assigned to variables.


setTimeout(function() {
  console.log('Hello after 1 second!');
}, 1000);


// ### 5. Immediately Invoked Function Expressions (IIFE)

// IIFEs are functions that are executed immediately after they are defined. They are often used to create a local scope.


(function() {
  console.log('This function runs immediately!');
})();


// ### 6. Constructor Functions

// Constructor functions are used to create objects. They are called with the `new` keyword.


function Person(name) {
  this.name = name;
}

const john = new Person('John');
console.log(john.name); // Output: John


// ### 7. Generator Functions

// Generator functions can pause and resume their execution. They are defined with an asterisk `*` and use the `yield` keyword.


function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generatorFunction();

console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3


// ### 8. Async Functions

// Async functions enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.


async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}

fetchData();


// ### 9. Methods

// Methods are functions that are properties of an object. They are defined within an object and are used to perform actions on that object.


const person = {
  name: 'John',
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};

person.greet(); // Output: Hello, John


// ### 10. Callback Functions

// Callback functions are passed as arguments to other functions and are executed within those functions. They allow asynchronous operations to be performed.


function doSomething(callback) {
  console.log('Doing something...');
  callback();
}

doSomething(function() {
  console.log('Callback executed!');
});


// ### Summary

// JavaScript provides a variety of ways to define and use functions, each serving different purposes and use cases. Understanding these different types of functions allows you to write more flexible and efficient code.