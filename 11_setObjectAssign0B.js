console.log(`************************Objects Created using Class******************`);
class Bank  {
    constructor(bankName,location,accountNo,ifsc,intersestRate){
    this.bankName = bankName,
    this.location = location,
    this.accountNo = accountNo,
    this.ifsc = ifsc,
    this.intersestRate = intersestRate
    }
}

const axisBank = new Bank("Axis Bank","Mumbai",872687678,"AXIS763",10);
const sbiBank = new Bank("SBI Bank","Pune",5642545,"SBIN12702",11);
const iciciBank = new Bank("ICICI Bank","Nashik",785465,"ICICI534",12);
const kotakBank = new Bank("Kotak Bank","Thane",87220034,"Kotak875",13);
const hdfcBank = new Bank("HDFC Bank","Panvel",2347678,"HDFC957",14);
const punjabBank = new Bank("Punjab Bank","Nagpur",763529,"PUNJAB",15);

console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(punjabBank);


const setBank = new Set();
setBank.add(axisBank);
setBank.add(sbiBank);
setBank.add(iciciBank);
setBank.add(kotakBank);
setBank.add(hdfcBank);
setBank.add(punjabBank);

console.log(`******************All Object elements added in Set********************`);
console.log(setBank);


console.log(`****************Traversed this set Using For-Of Loop*******************`);
for (const bank of setBank) {
   console.log(`Bank Name:${bank.bankName}, Location: ${bank.location}`);
}