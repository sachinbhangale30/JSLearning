console.log(`---------------------------------------------------------------------------------------------------------------`);
const bankSbi = {
    bankName: "SBI Bank",
    accountNo: 98738974,
    ifscCode: "SBIN0012702",
    cifNo: 6732576768,
    
}

const bankLocation = {
    street: "Lamington Road",
    city: "Mumbai",
    pinCode: 400001,
}


const cloned_bankSbi = Object.assign({},bankSbi);
console.log("Cloned Bank SBI using Object.Assign:", cloned_bankSbi);
const clone_bankSbi = {...bankSbi};
console.log("Cloned Bank SBI using spread Operator:",clone_bankSbi);

const cloned_bankLocation = Object.assign({},bankLocation);
console.log("Cloned Bank Location using Object.Assign:",cloned_bankLocation);
const clone_bankLocation = {...bankLocation};
console.log("Cloned Bank Location using spread Operator:",clone_bankLocation);


console.log(`---------------------------------------------------------------------------------------------------------------`);
const rateOfInterest = {
    homeLoanInterest: 12,
    personalLoanInterest: 13,
    dueInterest: 14,

}
console.log(`**************Merged Bank SBI,Bank Location,Rate Of Interest in SBI Details****************`);
const sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log(sbiDetails);
console.table(sbiDetails);

console.log(`---------------------------------------------------------------------------------------------------------------`);
console.log(`***************Traversed the Merged Object***************`);
for (const key in sbiDetails) {
    console.log(`${key} : ${sbiDetails[key]}`);
}

