const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given Array: ${arrayNumbers}`);

console.log(`-----------------------------------1st----------------------------------`);

console.log(`Total elements available in array: ${arrayNumbers.length}`);

console.log(`-----------------------------------2nd----------------------------------`);

console.log(`First element in array: ${arrayNumbers[0]} & Last element in array: ${arrayNumbers[arrayNumbers.length-1]}`);

console.log(`-----------------------------------3rd----------------------------------`);

console.log(`The Third last element in array: ${arrayNumbers[arrayNumbers.length-3]}`);

console.log(`-----------------------------------4th----------------------------------`);

console.log(`Even Numbers`);
function evenNumber(arg) {
   
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    
    if (element%2==0) {
      console.log(element);
      } 
   }
   
}
  evenNumber(arrayNumbers);
 
  console.log(`-----------------------------------5th----------------------------------`);


   console.log(`Odd Numbers`);
      for (let index = 0; index < arrayNumbers.length; index++) {
         const element = arrayNumbers[index];
if (element%2 != 0) {
 
console.log(element);
 }
}

console.log(`-----------------------------------6th----------------------------------`);
// function evenSum(arr,n) {

// }
console.log(`Even position elements in the array`);
let even = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
   const element = arrayNumbers[index];
if (index%2 == 0) {
even +=  element;

}
console.log(` ${element}`);
}
// evenSum(arrayNumbers,arrayNumbers.length);

console.log("Even index positions sum ",even);

console.log(`-----------------------------------7th----------------------------------`);

   console.log(`Odd position elements in the array`);
let sum1 = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
   const element = arrayNumbers[index];
if (index%2 != 0) {
sum1 = sum1 + element;
console.log(` ${element}`);
}

}
console.log(`Odd index positions sum ${sum1}`);

console.log(`-----------------------------------8th----------------------------------`);

function sumArray(array) {
   // const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
let arraySum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    arraySum = arraySum + element;
   
}
return arraySum;
}
console.log("Sum of the all elements present in the array: ",sumArray(arrayNumbers));

console.log(`-----------------------------------9th----------------------------------`);
console.log(`Multiple of 5`);
for (let index = 0; index < arrayNumbers.length; index++) {
   const element = arrayNumbers[index];
   if (element%5 == 0) {
      console.log(` ${element}`);
   }
   
}

console.log(`-----------------------------------10th----------------------------------`);

console.log(`Is Number 115 available in array:`,arrayNumbers.includes(115));

console.log(`-----------------------------------11th----------------------------------`);

console.log(`Is Number 23 available in array:`,arrayNumbers.includes(23));

console.log(`-----------------------------------12th----------------------------------`);

arrayNumbers.splice(arrayNumbers.length-8,0,55,66);
console.log(`55 & 66 added in the array before index 3: ${arrayNumbers}`);

console.log(`-----------------------------------13th----------------------------------`);

arrayNumbers.splice(4,3);
console.log(`3 elements deleted from the index 4 in the array: ${arrayNumbers}`);