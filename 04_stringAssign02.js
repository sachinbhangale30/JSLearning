function stringHandsOn(){
    var str = "  Hey you are doing good, keep it up  ";
    return str;
}
var resultstringHandsOn = stringHandsOn();
console.log(resultstringHandsOn);
var strLength = resultstringHandsOn.length;
console.log("2.Total length of string is:", strLength);

var stringHandsOnTrim = resultstringHandsOn.trim();
console.log("3.Removing extra start and end spaces by using trim :", stringHandsOnTrim+".",);
console.log("Length of New String is: ", stringHandsOnTrim.length);

console.log("4.Total number extra spaces count: ", resultstringHandsOn.length - stringHandsOnTrim.length);

console.log("5.First Character:",stringHandsOnTrim.charAt(0),"Last Character: ", stringHandsOnTrim.charAt(stringHandsOnTrim.length-1));

var totalWordStr = stringHandsOnTrim.split(" ");
console.log("6.Total number of words are", totalWordStr);

console.log("7.Index of word good is:", stringHandsOnTrim.indexOf('good'));

var substring = stringHandsOnTrim.slice(22, stringHandsOnTrim.length); 
console.log("8.Substring starting from index 22", substring);

console.log("9.String ends with the word up: ",stringHandsOnTrim.includes("up"));

console.log("10.String starts with the word hey: ",stringHandsOnTrim.includes("Hey"));


