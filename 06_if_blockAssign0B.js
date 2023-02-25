console.log(`******************Male Marriage Eligibility**************`);
function maleMarriageEligibility(gender,age,boyName) {
    if (gender=="Male" && age>=21) {
        console.log(`Hey ${boyName} are eligible for Marriage`);
    } else {
        console.log(`Hey ${boyName} Unfortunately are not eligible Marriage`);
    }
}
maleMarriageEligibility("Male",25,"Bill Gates");
maleMarriageEligibility("Male",17,"Steve Jobs");

console.log(`***************Female Marriage Eligibility**************`);
function femaleMarriageEligibility(gender,age,girlName) {
    if (gender=="Female" && age>=18) {
        console.log(`Hey ${girlName} you are eligible for Marriage`);
    } else {
        console.log(`Hey ${girlName} Unfortunately you are not eligible for Marriage`);
    }
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");