const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];

console.error(`---------------------Reverse Array----------------------`);
arrayRollNumbers.reverse();
console.log(`${arrayRollNumbers}`);

console.error(`---------------------Used Sort()Method without using any Custom Logic----------------------`);
arrayRollNumbers.sort();
console.log(`${arrayRollNumbers} 
Issue: If numbers are sorted as strings,it considers only 1st digit & compares them due to which we get incorrect values.`);

console.error(`---------------Sort Array in Ascending order using Custom Logic-------------`);
arrayRollNumbers.sort((a,b) => a-b);
console.log(`${arrayRollNumbers}`);

console.error(`-------------Greatest Number from the Array---------------`);
console.log(arrayRollNumbers[arrayRollNumbers.length-1]);

console.error(`-------------Smallest Number from the Array---------------`);
console.log(arrayRollNumbers[0]);

console.error(`-------------------Removed Duplicates  from the array----------------------------------`);
const arrayDuplicates = [...new Set(arrayRollNumbers)];
console.log(`${arrayDuplicates}`);