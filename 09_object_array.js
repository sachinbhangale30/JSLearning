const sbiBank = {
    bankName: "SBI Bank",
    location: "Mumbai",
    accountNo: 080803809,
    ifsc: 737939,
    interestRate: 5,
}

const axisBank = {
    bankName: "Axis Bank",
    location: "Pune",
    accountNo: 02367647,
    ifsc: 893878,
    interestRate: 6,
}

const hdfcBank = {
    bankName: "HDFC Bank",
    location: "Bangalore",
    accountNo: 23556377,
    ifsc: 76736722,
    interestRate: 7,
}

const yesBank = {
    bankName: "Yes Bank",
    location: "Hyderabad",
    accountNo: 65635625,
    ifsc: 9855676,
    interestRate: 8,
}

const arrayOfBanks = [sbiBank, axisBank, hdfcBank, yesBank ];

for (let index = 0; index < arrayOfBanks.length; index++) {
    const element = arrayOfBanks[index];
    // console.log(`${element.bankName}, ${element.location}, ${element.accountNo}, ${element.interestRate}`);
}


for (const element of arrayOfBanks) {
    console.log(`${element.bankName}, ${element.location}, ${element.accountNo}, ${element.interestRate}`);
}

//const array = [1, 2, 3, 4, 8, 9];
// for (const value of array) {
//    console.log(value); 
// }