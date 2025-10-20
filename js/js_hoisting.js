console.log(a)
greet('Piyusha')

//I'm able to access the variable and function before its declaration due to hoisting

// IN JS, Execution Context means the environment in which the code is executed.
// When JS code is executed, it goes through two phases:
// 1. Memory Creation Phase: In this phase, the JS engine allocates memory for variables and functions. Variables are initialized with 'undefined', and function declarations are stored in memory.
// 2. Code Execution Phase: In this phase, the JS engine executes the code line by line. Variables are assigned their actual values, and functions can be invoked.

// Thats why JS is synchronous and single-threaded language. It executes one command at a time in a specific order.

// Global Execution Context (GEC) is the default or base execution context where the code runs initially. It creates a global object (like 'window' in browsers) and a 'this' keyword that refers to the global object.

// Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the memory creation phase. This allows you to use variables and functions before they are declared in the code.

// However, only the declarations are hoisted, not the initializations. So, if you try to access a variable before its initialization, it will return 'undefined'.

// GEC vs Script Tag Execution Context:
// The Global Execution Context (GEC) is created when the JavaScript code starts executing. It sets up the global environment for the code to run.
// The Script Tag Execution Context is a specific instance of the GEC that is created when a script tag is encountered in an HTML document. Each script tag has its own execution context, but they all share the same global context.
var a = 10;

console.log(a)

function greet(name) {
    console.log('Hello ' + name)
}

greet('Rajvardhan')

// This, Window and Global Object in JS means in short:
// In a browser environment, the 'window' object represents the global object that contains all global variables and functions.
// The 'this' keyword, when used in the global context, refers to the 'window' object.
// Therefore, any global variable or function can be accessed as a property of the 'window' object using 'this' keyword.
console.log("Value of b, this, window")
console.log(b)
console.log(this.b)
console.log(window.b)

var b = 20;

console.log(b)
console.log(this.b)
console.log(window.b)
console.log(this == window)

// Let, Var, Const
const cint = 10
// cint = 20 cant reassign const variable

// const and let are strictly block scoped than var
// we cant access let and const before their declaration like var
console.log('Age: ', age) // In script tag execution context
console.log('Pi: ', pi) // In script tag execution context
console.log('Name: ', name) // var will in Global (if u see in browser window.name))

let age = 21;
const pi = 3.14;
var name = 'Piyusha';


