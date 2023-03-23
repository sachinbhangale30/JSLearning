const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
const arrayGreater = arrayNumbers.filter((element) => {
return element >= 50;
});
console.error(`------------------------The numbers Greater than 50--------------------------`);
console.log(`${arrayGreater}`);

console.error(`---------------------------Even numbers -----------------------------------`);
const arrayEven = arrayNumbers.filter(element => element%2==0);
console.log(`${arrayEven}`);

console.error(`------------------------------Odd numbers ---------------------------------`);
const arrayOdd = arrayNumbers.filter(element => element%2!=0);
console.log(`${arrayOdd}`);

console.error(`--------------------------Numbers which are multiple of 5 --------------------------`);
const arrayMultiple = arrayNumbers.filter(element => element%5==0);
console.log(`${arrayMultiple}`);

console.error(`--------------------------Numbers which are between 20 and 50 --------------------------`);
const arrayNumBetween = arrayNumbers.filter(element => {
    if (element>=20 && element<=50) {
       return element;
    }
});
console.log(`${arrayNumBetween}`);