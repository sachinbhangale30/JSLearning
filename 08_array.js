let arrayOfNumbers = [0,2,4,5,6,8,4,0,8,"Nine","Ten"];
console.log(arrayOfNumbers);
// console.table(arrayOfNumbers);
const totalArrayElements = arrayOfNumbers.length;
console.log(`Total elements available in array is: ${totalArrayElements}`);

console.log(`---------------------------------------------------`);

const is8Available = arrayOfNumbers.includes(8);
console.log(`Is 8 available: ${is8Available}`);

const is9Available = arrayOfNumbers.includes(9);
console.log(`Is 9 available: ${is9Available}`);

console.log(`---------------------------------------------------`);

const indexOf8 = arrayOfNumbers.indexOf(8);
console.log(`Index of 8 element: ${indexOf8}`);

const indexOf100 = arrayOfNumbers.indexOf(100);
console.log(`Index of 100 element: ${indexOf100}`);



var arrayOfNumber = [10,20,25,15,30,5];
const valueAtIndex2 = arrayOfNumber[2];
console.log(`Value at index 2: ${valueAtIndex2}`);

console.log(`---------------------------------------------------`);

arrayOfNumber[3] = 35;
console.log(`Value at index 3 is 15 which is changed to: ${arrayOfNumber}`);

arrayOfNumber[1] = 50;
console.log(`Value at index 1 is 20 which is changed to: ${arrayOfNumber}`);

console.log(`---------------------------------------------------`);

var arrayOfNumber = [10,20,25,15,30,5];
console.log("===Adding element in the last using push() ===");
arrayOfNumber.push(40);
console.log(arrayOfNumber);

console.log("===Adding element in the first using unshift() ===");
arrayOfNumber.unshift(5);
console.log(arrayOfNumber);
console.log(`---------------------------------------------------`);

var arrayOfNumber = [10,20,25,15,30,5];
console.log(arrayOfNumber);
console.log(`====Removing last element Using pop====`);
arrayOfNumber.pop();
console.log(arrayOfNumber);

console.log(`====Removing first element Using shift====`);
arrayOfNumber.shift();
console.log(arrayOfNumber);

console.log(`---------------------------------------------------`);
var arrayOfNumber = [10,20,25,15,30,5];
console.log(`====Slice(StartIndex)====`);
const arrayFromIndex3 = arrayOfNumber.slice(3);
console.log(arrayFromIndex3);

console.log(`====Slice(StartIndex,EndIndex)====`);
const subArray = arrayOfNumber.slice(1,5);
console.log(subArray);

console.log(`---------------------------------------------------`);
var arrayOfNumber = [10,20,25,15,40,45];
console.log(`====Splice(StartIndex)====`);
const splicedArray = arrayOfNumber.splice(3);
console.log(`Removed elements from array: ${splicedArray}`);
console.log(arrayOfNumber);

var arrayOfNumber = [10,20,25,15,40,45];
console.log(`====Splice(StartIndex,DeleteCount)====`);
const splicedArrayWithDeleteCount = arrayOfNumber.splice(2,2);
console.log(`Removed elements using deletecount:`,splicedArrayWithDeleteCount);
console.log(arrayOfNumber);

var arrayOfNumber = [10,20,25,15,40,45];
console.log(arrayOfNumber);
const spliced = arrayOfNumber.splice(3,1);
console.log(`Removed element: ${spliced}`);
console.log(arrayOfNumber);

console.log(`====Splice() to insert one element without replacing existing element====`);
var arrayOfNumber = [10,20,25,15,40,45];
arrayOfNumber.splice(2,0,22);
console.log(arrayOfNumber);

console.log(`====Splice() to insert three element without replacing existing element====`);
var arrayOfNumber = [10,20,25,15,40,45];
arrayOfNumber.splice(4,0,5,35,55);
console.log(arrayOfNumber);

console.log(`====Splice() to replace two element ====`);
var arrayOfNumber = [10,20,25,15,40,45];
arrayOfNumber.splice(2,1,50,60);
console.log(arrayOfNumber);










