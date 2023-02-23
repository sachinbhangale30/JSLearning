function interviewEligibility(gradScore,hscScore,sscScore,candidateName){
console.log((gradScore >=70 || hscScore >=80 || sscScore > 90) ?`Congrates ${candidateName} you are eligible for TCS Interview ` : `Unfortunately ${candidateName} you are not eligible for interview`);

}
var result = interviewEligibility(80,86,90,"Sachin Bhangale");
// console.log(interviewEligibility(70,65,55,"Steve Jobs"));
interviewEligibility(70,65,55,"Steve Jobs");
interviewEligibility(60,79,88,"Elon Musk");
