/*
Primitve data types:
String, Number, Boolean, null, undefined, Symbol, BigInt
*/

/*
Non-primitve (reference) data types:
Array, Objects, Functions
*/

const myArr = ["A", "B", "C"]

const myObject = {
    "name": "Adnan",
    "age": 24
}

const myFunction = function(){
    console.log("Hello from the function!")
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Memory - Stack (Primitive) 
let myName = "Adnan Haider"
let fName = myName
fName = "Adnan"
console.log(myName) //Adnan Haider
console.log(fName) //Adnan

// Heap (Non-primiive)
let userOne = {
    email: "adnan@gmail.com",
    pass: "12345"
}
let userTwo = userOne
userTwo.email = "adusrk@gmail.com"
console.log(userOne.email) //same
console.log(userTwo.email) //same