console.log(`--------Find the greatest number--------`);
function greaterNumber(num1,num2){
    
var greater = num1>num2 ? num1 : num2;
console.log("Greater Number: ",greater);

} 
var greaterResult = greaterNumber(10,-10);
var greatResult = greaterNumber(800,899);

console.log(`-----------Step 2-----------`);
function isEvenOrOddNum(num){
    var evenOdd = num%2==0 ? "Even" :"Odd";
    return evenOdd;

}
var result = isEvenOrOddNum(29);
console.log(`Number 29: `,result);
var result = isEvenOrOddNum(44);
console.log(`Number 44: `,result);
var result = isEvenOrOddNum(0);
console.log(`Number 0: `,result);
var result = isEvenOrOddNum(101);
console.log(`Number 101: `,result);


console.log("----------Step 3-----------");
function wordLength(word){
var length = word.length;
var result = length%2==0 ? "Even" : "Odd" ;
return result;
}
var result = wordLength("JavaScript");
console.log(`Word JavaScript has ${result} length`);
console.log(`Word Developer has ${wordLength("Developer")} length`);
console.log(`Word Google has ${wordLength("Google")} length`);
