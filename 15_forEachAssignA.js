console.error(`---------------------------------------------------------`);
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((element,index) => {
    console.log(` Index Value: ${index}, Current Value: ${element}`);
});

console.error(`---------------------------------------------------------`);
const postive = [];
arrayNumbers.forEach(element => {
    if (element>0) {
        postive.push(element);
    }
});
console.log(`Founded Positive numbers: ${postive}`);
console.error(`---------------------------------------------------------`);
let newArray = [];
arrayNumbers.forEach(element => {
    if (element<0) {
        newArray.push(element);
    }
});
console.log(`Founded Negative numbers & added in new Array:${newArray}`);

console.error(`---------------------------------------------------------`);
const evenArray = [];
arrayNumbers.forEach(element => {
    if (element%2==0) {
        evenArray.push(element);
    }
});
console.log(`Even Numbers: ${evenArray}`);

console.error(`---------------------------------------------------------`);
let sumArray = 0;
arrayNumbers.forEach(element => {
   sumArray =  sumArray + element;
});
console.log(`Sum of all elements in Array: ${sumArray}`);

console.error(`---------------------------------------------------------`);
const indexArray = [];
arrayNumbers.forEach((element,index) => {
    if (index%2==0) {
        indexArray.push(element);
    }
});
console.log(`Even Indexed Array Values: ${indexArray}`);