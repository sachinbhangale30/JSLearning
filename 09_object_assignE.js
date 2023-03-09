const sbiBank = {
    bankName: "SBI Bank",
    location: "Mumbai",
    accountNo: 080803809,
    ifsc: 737939,
    interestRate: 5,
    showDetails: function () {
        console.log(`Bank Name: ${sbiBank.bankName}  Location: ${sbiBank.location}  Account No: ${sbiBank.accountNo}  IFSC Code: ${sbiBank.ifsc}  Interest Rate: ${sbiBank.interestRate}`);

    }
}
sbiBank.showDetails();

const axisBank = {
    bankName: "Axis Bank",
    location: "Pune",
    accountNo: 02367647,
    ifsc: 893878,
    interestRate: 6,
    showDetails: function () {
        console.log(`Bank Name: ${axisBank.bankName}  Location: ${axisBank.location}  Account No: ${axisBank.accountNo}  IFSC Code: ${axisBank.ifsc}  Interest Rate: ${axisBank.interestRate}`);
    }
}
axisBank.showDetails();

const hdfcBank = {
    bankName: "HDFC Bank",
    location: "Bangalore",
    accountNo: 23556377,
    ifsc: 76736722,
    interestRate: 7,
    showDetails: function (){
        console.log(`Bank Name: ${hdfcBank.bankName}  Location: ${hdfcBank.location}  Account No: ${hdfcBank.accountNo}  IFSC Code: ${hdfcBank.ifsc}  Interest Rate: ${hdfcBank.interestRate}`);
 }  
}
hdfcBank.showDetails();

const yesBank = {
    bankName: "Yes Bank",
    location: "Hyderabad",
    accountNo: 65635625,
    ifsc: 9855676,
    interestRate: 8,
    showDetails: function () {
        console.log(`Bank Name: ${yesBank.bankName}  Location: ${yesBank.location}  Account No: ${yesBank.accountNo}  IFSC Code: ${yesBank.ifsc}  Interest Rate: ${yesBank.interestRate}`);
}
}
yesBank.showDetails();