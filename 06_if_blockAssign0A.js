console.log('*************Even OR ODD**************');
function checkEvenOdd(num) {
    if (num%2==0) {
        return "Even";
    }
    if (num%2!=0) {
        return "Odd";
    }
}
var result = checkEvenOdd(45);
console.log(`Given Number 45: ${result}`);
console.log(`Given Number 70: ${checkEvenOdd(70)}`);
console.log(`Given Number 67: ${checkEvenOdd(67)}`);
console.log(`Given Number 98: ${checkEvenOdd(98)}`);

console.log(`*********Person is eligible for vote or not**********`);
function voteEligibility(age) {
if (age>=18) {
    console.log(`You are Eligible for Vote`);
    console.log(`Age is: ${age}`);
}
if (age<18) {
    console.log(`You are not Eligible for Vote`);
    console.log(`Age is: ${age}`);
}
    
}
var result = voteEligibility(18);
voteEligibility(20);
voteEligibility(17);
voteEligibility(40);

console.log(`******************String contains more than 10 character or not******************`);
function stringContains(char) {
    if (char.length>=10) {
        console.log(`${"JavaScript-ES6"} contains more than 10 character`);
    }
    if (char.length<=10) {
        console.log(`${"JavaScript-ES6"} does not contains more than 10 character`);
    }
}
var result = stringContains("JavaScript-ES6");

console.log(`**************Check if string starts with "Java"*************`);
function stringStart(string) {
    if (string.startsWith("Java")) {
        console.log(`yes string ${string} contains Java`);  
    }   
    }
var result = stringStart("JavaScript Language");