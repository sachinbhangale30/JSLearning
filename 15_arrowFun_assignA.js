console.log(`--------------1] Arrow Function with no args and no return value----------------`);
let arrow1 = () => {
console.log("Good Morning,Today is Monday");
}
arrow1();

console.log(`--------------2] Arrow Function with 3 args and no return value----------------`);
let arrow2 = (n1,n2,n3=1) => {
console.log("Multiplied Values:",n1*n2*n3);
}
arrow2(5,5,2);
arrow2(10,4)

console.log(`--------------3] Arrow Function with 5 args and return value----------------`);
let arrow3 = (num1,num2,num3,num4,num5) => {
let result = num1+num2+num3+num4+num5;
return result;
}
const multiResult =  arrow3(100,100,200,349,756);
console.log("The addition of given values:",multiResult);
console.log("The addition of given values:",arrow3(" I am"," learning"," ES6"," features"," in depth"));
