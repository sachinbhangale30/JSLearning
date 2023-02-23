var greet = "Good Morning";
console.log(typeof greet);
console.log(" Total number chars available into this string variable - greet ");
var greetLength = greet.length;
console.log("The Length of String: ",greetLength);

console.log("Find the character by index value");
var charAtIndex3 = greet.charAt(3);
console.log("Character available at index 3 is:",charAtIndex3);

console.log("Find the last character");
var charAtLastIndex =  greet.charAt(greetLength-1);
console.log("Last character: ",charAtLastIndex);

console.log("Find the index by character value");
var indexOfM = greet.indexOf("M");
console.log("Index of char M: ",indexOfM);

console.log("Index of char which is not available into the string: ",greet.indexOf("z"));

console.log("Index of o char:",greet.indexOf("o"));
console.log("Index of o char using lastIndexOf: ",greet.lastIndexOf("o"));

var replaceResult = greet.replace("Morning","Evening");
console.log("Without Replaced Result: ",greet);
console.log("Replaced Result: ",replaceResult);

console.log("Upper Case: ",replaceResult.toUpperCase());
console.log("Lower Case: ",replaceResult.toLowerCase());

var myName = "   Mohit  Sharma  ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start & end spaces using trim:",myNameAfterTrim,myName.length,myNameAfterTrim.length);

console.log("Find the total extra spaces removed from the string - myName");
var totalExtraSpaces = myName.length-myNameAfterTrim.length;
console.log("Total extra spaces removed: ",totalExtraSpaces);

var trimEndTotal = myName.trimEnd();
var trimEndResult = myName.length-trimEndTotal.length;
console.log("Total extra space removed from trail: ",trimEndResult);

console.log("Slice Method");
var sliceResult = greet.slice(5,12);
console.log(sliceResult);
console.log(greet.slice(2,5));

console.log("Split Method");
var splitResult = greet.split(" ");
console.log(splitResult);
console.log(typeof splitResult);
console.log("Total Words: ",splitResult.length);

var myFriendList = "Bill Gates,Steve Job,Elon Musk,Ratan Tata,Sundar Pichai,Narayan Murti,Nandan Nilekani,Larry Page,Surgey Brain,Tim Cook";
var splitResult1 = myFriendList.split(",");
console.log("Total Words: ",splitResult1.length);







