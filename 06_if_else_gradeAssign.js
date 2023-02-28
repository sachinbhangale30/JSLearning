console.log(`********************Step 1*******************`);
function voteEligibility(age) {
    
    if (age>=18 && age<=100) {
        console.log(`Your age is ${age} He or She is eligible for Voting`);
    } 

    else if (age<=0 || age>100 || age==undefined || age==null) {
        console.log(`Invalid Data: ${age}`);
        
    }
   else {
        console.log(`Your age is ${age} He or She is not eligible for Voting`);
    }  
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);

console.log(`*******************Step 2******************`);
function gradCalculation(marks) {
    if (marks<=0 || marks>100 || (typeof marks!= "number") || isNaN(marks) || marks==null || marks==undefined ) {
      console.log(`Please provide valid marks: ${marks}`);  
    }
    if (marks>=90 && marks <= 100 ) {
        console.log(`Fantastic Marks: ${marks},Your grade is A+`); 
    }
    if (marks>=75 && marks<90) {
        console.log(`Excellent Marks: ${marks},Your grade is A`);
}
if (marks>=50 && marks<=75) {
    console.log(`Good Marks: ${marks},Your grade is B`);
}
if (marks>=35 && marks<=50) {
    console.log(`Marks: ${marks},Your grade is C,Need Improvement`);
}
}
gradCalculation(98);
gradCalculation(80);
gradCalculation(90);
gradCalculation(0);
gradCalculation(150);
gradCalculation(-7);
gradCalculation(35);
gradCalculation(29);
gradCalculation(64);
gradCalculation(49);
gradCalculation("91");
gradCalculation("Eighty");
gradCalculation(NaN);
gradCalculation(null);
gradCalculation(undefined);