// Implicit conversion to String
console.log(`Numeric string used with + gives string type`);
var result;
result = '3' + 2;
console.log(result);

result = '3' + true;
console.log(result);

result = '3' + undefined;
console.log(result);

result = '3' + null;
console.log(result);

result = 'Good' + 'Morning';
console.log(result);

// Implicit Boolean conversion to Number
console.log(`If boolean is used,true is 1,false is 0`);
var result;
result = '4' - true;
console.log(result);

result = '4' + true;
console.log(result);

result = 4 + true;
console.log(result);

result = 4 + false;
console.log(result);

// Implicit string conversion to Number
console.log(`Numeric String used with -,/,* results number type`);

var result;
result = '4' - '2';
console.log('ANS:',result);

result = '4' - 2;
console.log(result);

result = '4' * 2;
console.log('ANS:',result);

result = '4' / 2;
console.log('ANS:',result);







