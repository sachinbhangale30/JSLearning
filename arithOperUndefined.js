console.log("Arithmetic operation of udefined with number,boolean or null gives NaN");
var result;
result = 4 + undefined;
console.log(`4 + undefined:`,result);

result = 4 - undefined;
console.log(`4 - undefined:`,result);

result = true + undefined;
console.log(`true + undefined:`,result);

result = null + undefined;
console.log(`null + undefined:`,result);