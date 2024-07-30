hoistedFunction(); // Works due to hoisting

function hoistedFunction() {
    console.log("This function is hoisted!");
}
// Functions can also be defined using the Function constructor, but this is rarely used.
let funcConstructor = new Function('a', 'b', 'return a + b');
console.log(funcConstructor(2, 3)); // Outputs 5



// Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that is executed immediately after it is defined.
// (function() {
    // console.log("This is an IIFE.");
// })();

// The Function constructor in JavaScript creates a new function object. It can take a variable number of string arguments, with the last argument being the body of the function, and the preceding ones being the names of the function's parameters.


//Functional Constructor
// let funcConstructor = new Function('a', 'b', 'return a + b');
// console.log(funcConstructor(2, 3)); // Outputs 5