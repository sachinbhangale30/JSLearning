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

const axisBank = new Bank("Axis Bank","Mumbai","AXIS872687678","AXIS763",10);
const sbiBank = new Bank("SBI Bank","Pune","SBI5642545","SBIN12702",11);
const iciciBank = new Bank("ICICI Bank","Nashik","ICICI785465","ICICI534",12);
const kotakBank = new Bank("Kotak Bank","Thane","Kotak87220034","Kotak875",13);
const hdfcBank = new Bank("HDFC Bank","Panvel","HDFC2347678","HDFC957",14);
const punjabBank = new Bank("Punjab Bank","Nagpur","PUNJAB763529","PUNJAB",15);

console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(punjabBank);

const mapBank = new Map();
mapBank.set("AXIS872687678",axisBank);
mapBank.set("SBI5642545",sbiBank);
mapBank.set("ICICI785465",iciciBank);
mapBank.set("Kotak87220034",kotakBank);
mapBank.set("HDFC2347678",hdfcBank);
mapBank.set("PUNJAB763529",punjabBank);

console.log(`***********************Mapped in such a way that the Key is Account NO & Value is Object**********************`);
console.log(mapBank);

console.log(`********************************Traversed the Map********************************`);

 const keyOfMap = mapBank.keys();
for (const key of keyOfMap) {
    const element = mapBank.get(key)
    console.log(`Bank Name: ${element.bankName}, Account No: ${element.accountNo}, InteresRate: ${element.intersestRate}`);
 }
