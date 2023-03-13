console.log(`***************************Using Function Constructor Created Objects*******************************`);
function Bank(bankName,location,ifscCode,branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    this.show = function () {
        console.log(`Bank Details:${this.bankName},${this.location},${this.ifscCode},${this.branchCode}.`);
    }
}
const yesBank = new Bank("Yes Bank","Pune","YES80280","YES930");
yesBank.show();
const sbiBank = new Bank("SBI Bank","Mumbai","SBIN0012702","SBI897");
sbiBank.show();
const mahaBank = new Bank("Maharashtra Bank","Nagpur","Maha98786","Maha737");
mahaBank.show();
const axisBank = new Bank("Axis Bank","Nashik","Axis97797","Axis765");
axisBank.show();

console.log(`--------------------------------------------------------------------------------------`);
console.log(`***************************After adding Data Member using Prototype****************************`);

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`Open Time: ${sbiBank.openTime} and  Close Time: ${sbiBank.closeTime} of Object SBI Bank`);
console.log(`Bank Name: ${axisBank.bankName} and  Close Time: ${axisBank.closeTime} of Object Axis Bank`);
console.log(`Bank Name: ${yesBank.bankName},Branch Code: ${yesBank.branchCode} and Open Time: ${yesBank.openTime} of Object Yes Bank`);

