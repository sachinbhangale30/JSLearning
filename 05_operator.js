console.log(`====Arithmetic Operator====`);
var num1 = 10;
var num2 = 2;
var result = num1 + num2;
console.log(`Addition: ${result}`);

var subResult = num1 - num2;
console.log(`Subtraction: ${subResult}`);

var multiResult = num1 * num2;
console.log(`Multiplication: ${multiResult}`);

var expoResult = num1 ** num2;
console.log(`Exponential: ${expoResult}`);

var divResult = num1/num2;
console.log(`Division: ${divResult}`);

var modResult = num1 % num2;
console.log(`Modulus: ${modResult}`);

var num = 10;
num+=20; //  num = num + 20
console.log(`Compound addition += ${num}`);

console.log(`Comparison Operators`);
var num3 = 10;
console.log(num3==10);
var num4 = "10";
var num5 = 10; 
console.log(num4==num5); // In backgroung process it 1st convert (implicit conversion) data type frm string to number & then compare it
console.log(num4===num5);  // It won't go for implicit conversion

console.log(num3 != num4);  //   ! Not

console.log(10 > 20); // > Greater than
 
var marks = 35;
console.log(marks >= 35); // >= Greater than equal

var marks = 70;
var result = marks >=60 ? "Allow him for Interview" :"Dont Allow";
console.log(result);

var age = 20;
var res = age>= 21 ? "true" : "false";
console.log(res);

console.log("Even or Odd");
var myNumber = 7;
// Even -Divide by 2 and reminder is 0
var result =  myNumber%2==0 ? "Even" : "Odd";
console.log(result);

function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);








