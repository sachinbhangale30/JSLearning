var java = "Javascript";
var gChrome = "Google Chrome";
var devsmart = "Developer Smart";

function squareOfWordLength(valuel){
    console. log( `The Given string is : ${valuel}`);
    console. log( `The length of word is ${valuel} : ${valuel.length}`);
    console. log(`The square of the string is : ${valuel.length ** 2}`);
    console.log(`**********************************************`);
}
squareOfWordLength(java);
squareOfWordLength (gChrome) ;
squareOfWordLength (devsmart);

function angularD(){
    var angu = "I am Angular Developer";
    return angu;
}
var angularDev = angularD();
var strLength =  angularDev.length;
console.log(`The given string is "I am Angula Developer" and its length is: ${angularDev.length}`);
var strWord = angularDev.split(" ");
var strDivision = strLength/strWord.length;
var strMultiplication = strLength * strWord.length;
console.log(`The result of string length divided by total number of words is: ${strDivision}`);
console.log(`The result of string length multiplication by total number of words is: ${strMultiplication}`);

