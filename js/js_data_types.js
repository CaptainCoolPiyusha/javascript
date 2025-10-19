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


// Value type vs Reference type
let x = 10;
let y = x;
// VAlues of x and y before changing x
console.log('Value of x, before changing x: ', x)
console.log('Value of y, before changing x: ', y)
// Values of x and y after changing x
x = 20;

console.log('Value of x, after changing x: ', x)
console.log('Value of y, after changing x: ', y)

// Reference type example
let Person = {
    name: 'Piyusha',
    age: 21
}
let anotherPerson = Person;
// Values of name of Person and anotherPerson before changing Person
console.log('Before changing name ', Person.name)
console.log('Before changing name ', anotherPerson.name)
// Values of name of Person and anotherPerson after changing Person
Person.name = 'Rajvardhan';
console.log('After changing name ', Person.name)
console.log('After changing name ', anotherPerson.name)

// When we copy primitive data types, a new copy of the value is created in memory
// When we copy reerence data types, a new reference to the same object is created in memory
// Hense, changes made to one reference type variable will affect the other variable as both point to the same object in memory
// whereas changes made to one primitive type variable will not affect the other variable as both have their own copies in memory

// Arrays in Js are dynamic in size as well as in data type.
let arrya_type = ['Piyusha', 'Raj', 'Kuldeep', 'Siloni', 'Aaji', 23, 21, 52, 47, 70]
console.log(arrya_type)
console.log(typeof (arrya_type[0]))
console.log(typeof (arrya_type[6]))
arrya_type[10] = 'Patil family'
console.log(arrya_type[10])
console.log('Type of arrya_type: ', typeof (arrya_type))


// Function in Js
function greet(name) {
    console.log('Hello ' + name)
}

//calling the function
greet('Piyusha')
greet('Rajvardhan')
greet('Kuldeep')
console.log('Type of function is ', typeof (greet))