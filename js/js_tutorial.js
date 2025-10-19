//Primitive / Values types

//String, Number, Boolean, Undefined, NULL, Symbol
// In Js we don't have to declare data types explicitly like in other languages like C, C++, Java etc so Js is a dynamically typed language


let nae = 'piyusha';
console.log(nae)
console.log(typeof (nae))
// I'm changing the value of nae from string to number and it is allowed in js so Js is a dynamically typed language wheras in other languages like C, C++, Java it is not allowed, you can not change the data type of a variable once declared
nae = 8
console.log(typeof (nae))

//so in js all integers, floats are of number type

let num = 86;
console.log(num)
console.log(typeof (num))

let flo = 98.43;
console.log(flo)
console.log(typeof (flo))

let bool = true
console.log(bool)
console.log(typeof (bool))

let w;
console.log(w)
console.log(typeof (w))

let trail = undefined; // Not recommended but null if you want to give empty data type to anything
console.log(trail)
console.log(typeof (trail))

let null_var = null
console.log(trail)
console.log(typeof (trail))

// Reference / Non-Primitive types
// Object, Array, Function

// Object example -> Objects are used to bundle multiple related data and reperesent real world entities
let course = {
    title: 'Mathematics',
    description: 'Maths is the study of numbers',
    duration: 6 // months
};

console.log(course)
console.log(typeof (course))

console.log(course.description)
console.log(course['duration'])


