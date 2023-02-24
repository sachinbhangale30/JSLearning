console.log(`Explicit conversion String to Number using + Operator`);

var numberInString = "100";
console.log(`Data type of "100": `,typeof numberInString);

var myNumber = +numberInString;
console.log(`Data type of myNumber:`,typeof myNumber);

console.log(`Explicit conversion Number to String data type conversion using toString() method`);

var myNumber = 100;
console.log(`myNumber data type:`,typeof myNumber);

var afterConversion = myNumber.toString();
console.log(`afterConversion data type:`,typeof afterConversion);

