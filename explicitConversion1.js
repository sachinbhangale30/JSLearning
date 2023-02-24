// Explicit conversin Invalid String to number return NaN
console.log(`String to Number`);
result = Number('324');
console.log(result);

result = Number('324e-1');
console.log(result);

console.log(`Boolean to Number`);
result = Number(true);
console.log(result);

result = Number(false);
console.log(result);

console.log(`If a string is an invalid number,the result will ne NaN`);
var result;
result = Number('hello');
console.log('hello: ',result);

result = Number(undefined);
console.log(`undefined: `,result);

result = Number(NaN);
console.log(`NaN: `,result);