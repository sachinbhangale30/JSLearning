function factorialOfWordCount(word)
{
     var result =1 ;
       //var len = word.length;
    if(word == null || word == undefined || typeof word == typeof isNaN(word))
    {
        return `You have entered '${word}'. please enter the valid input`;
    }
    let num = word.split(" ").length;
    if(word.length > 0)
    {
    for (let index = 1; index <= num; index++) 
    {
        result = result * index;
    }
    return `string: '${word}', length of the string is '${num}' and factorial of the string is '${result}'`;
    }
    else{
        return `string: "${word}", Length of the string <= 0`;
    }
}
var result = factorialOfWordCount("Revision is the mother of Success");
console.log(result);
console.log(factorialOfWordCount("We never fail,we always learn"));
console.log(factorialOfWordCount(null));
console.log(factorialOfWordCount(""));
console.log(factorialOfWordCount("Sachin Ashok Bhangale"));