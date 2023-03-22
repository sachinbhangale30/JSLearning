console.error(`-------------------Added 10 into each Element--------------------------------------`);
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];

const arrayNew = arrayNumbers.map(element => element + 10);
console.log(`${arrayNew}`);

console.error(`------------------Squared each Array Element--------------------------------------`);
const arraySquare = arrayNumbers.map(element => element**2);
console.log(`${arraySquare}`);

console.error(`-------------------Index values added into corresponding each Array Element---------------------------`);
const arrayIndex = arrayNumbers.map((element,index) => {
    return element + index;
});
console.log(`${arrayIndex}`);