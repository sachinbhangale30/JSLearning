

var firstName; // Variable declaration  
firstName = "Virat";  // Variable Initialization

var lastName = "Kohli"; // Variable declaration and Initialization
firstName = "King Kohli"; // Variable update

var firstName; // Variable re-declaration
console.log(firstName);

let city; // Variable declaration
console.log("Value of city:", city);
city = "Delhi"; // Variable  Initialization

// let city = "Mumbai"; // Not allowed Variable re-declaration

const PI= "3.14";
// PI = 3.56; // Update or modify not allowed
console.log(PI);
// const PI = 3.1412; // Re-declaration of const variable is not allowed

var num = 10;
if(num==10){
    let word = "Revision is the mother of Success";
}
// console.log(word);

function sayHi(arg){
    var greet = "Hi Good Morning";
    if (arg%2==0) {
        var isEven = true; 
    } else {
        var isEven = false; 
    }
    return isEven;
}
// console.log(greet);
let result = sayHi(10);
console.log(result);
// console.log(greet);

var fullName = "MS Dhoni";
if (true) {
    console.log("Hello", age);
} else {
    var age = 37;
}
console.log(age);




