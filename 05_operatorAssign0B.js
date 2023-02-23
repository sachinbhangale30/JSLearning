console.log(`***********Male Marriage Eligibility**********`);

function maleMarriageEligibility(gender,age,boyName){
  var result = (gender=="Male" && age>=21) ?`Hey ${boyName} you are eligible for Marriage` : `Hey ${boyName} you are Not Eligible for Marriage`;
return result;
}
var result = maleMarriageEligibility("Male",25,"BillGates");
console.log(result);
console.log(maleMarriageEligibility("Male",17,"Steve Jobs"));


console.log(`***********Female Marriage Eligibility**********`);

function femaleMarriageEligibility(gender,age,girlName){
 var result   = (gender=="Female" && age>=18) ? `Hey ${girlName} you are eligible for Marriage` :`Hey ${girlName} you are Not Eligible for Marriage`;
 return result;
}
var result = femaleMarriageEligibility("Female",16,"Jenifer");
console.log(result);
console.log(femaleMarriageEligibility("Female",27,"Malinda Gates"));