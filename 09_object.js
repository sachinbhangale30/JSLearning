// Object Literals
let student = {
    firstName: "Sachin",
    lastName: "Bhangale",
    isWorking: false,
    age: 32,
    collegeName: "ABC",
    id: 123456,
    address: {
        street: "Wakad",
        city: "Pune",
        pin: 431204,
    },
    school: "Podar School",
    friends: ["Bill","Steve","Elon"],
    show: function() {
        console.log("I am show () function");
    },
    addressDetails: function(){ 
        return `Address is: Street ${this.address.street}, City ${this.address.city}, PIN ${this.address.pin}` 
    }
};

student.marks = {
    math: 80,
    physics: 60,
    drawing: 70
}

let resultAddress = student.addressDetails();
console.log(resultAddress);

student.show();


console.log(student.friends[student.friends.length-1]);

console.log(student.marks); 

console.log(typeof student);

console.log(typeof student.id);

console.log(typeof student.address);

// . Dot Notation
console.log(student.firstName);

// [] Notation
console.log(student["lastName"]);

// Update Property
student.collegeName = "COEP PUNE";

console.log(student.age);

// Add new property city = "Mumbai"
student.city = "Mumbai";
student.country = "India";
console.log(student); 
student.country = "India"
// console.table(student);

// Delete the property
delete student.isWorking
console.table(student);

// // Empty object
let teacher ={};

teacher.firstName = "Mohit"
console.table(teacher);



console.log(student.address.city);

student.address.pin = 431205;
console.table(student);