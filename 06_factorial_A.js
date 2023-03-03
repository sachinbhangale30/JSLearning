function factorialOfNum(num) {
    if (num == null || num == undefined || isNaN(num)) {
        console.log(`You have entered ${num} which is Invalid Input`);
    } 
    var factorial = 1;
    
    for (let index = num; index >= 1; index--) {
        factorial = factorial * index; 
       
        
    }
    
    return factorial;
}
var factorial = factorialOfNum(5);
console.log(`The Factorial of 5: ${factorial}`);
console.log(`The Factorial of 3: ${factorialOfNum(3)}`);
factorialOfNum(null);
console.log(`The Factorial of 8: ${factorialOfNum(8)}`);
factorialOfNum(undefined);
console.log(`The Factorial of 9: ${factorialOfNum(9)}`);
console.log(`The Factorial of 0: ${factorialOfNum(0)}`);
factorialOfNum(NaN);


