console.log("------------Step 1------------");
var totalNumberVowels = function(vowels) {
    var count = 0; 
    for (let index = 0; index <= vowels.length-1; index++) {
        var char = vowels.charAt(index);
        if(char == "a" || char == "A" || char == "e" || char == "i" || char == "I" || char == "o" || char == "O" || char == "u" ){
            count = count + 1;
    }
        }
    return count;
}
var result = totalNumberVowels("JavaScript is the language Of Internet");
console.log("1.1 JavaScript is the language Of Internet has  of Vowels: ",result);
 var result = totalNumberVowels("I am Angular Developer");
 console.log("1.2 I am Angular Developer: ",result);
var result = totalNumberVowels("Hard work and commitment is the key of success");
console.log("1.3 Hard work and commitment is the key of success: ",result);

console.log("------------Step 2------------");
function lastWordCharsCount(str) {
    var count = 0;
    for (let index = str.length-1; index < str.length ; index--) {
        var char = str.charAt(index);
        if (char == " ") {
            break;
        }
        count = count + 1
    }
    return count;
}
// var result = lastWordCharsCount("JavaScript is the language Of Internet");
console.log(`2.1 "JavaScript is the language Of Internet" : `,lastWordCharsCount("JavaScript is the language Of Internet"));
console.log(`2.2 "I am Angular Developer" :`,lastWordCharsCount("I am Angular Developer"));
console.log(`2.3 "Hard work and commitment is the key of success" :`,lastWordCharsCount("Hard work and commitment is the key of success"));
