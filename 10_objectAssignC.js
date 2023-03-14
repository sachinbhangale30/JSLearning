console.log(`******************Shallow Cloning****************`);
const arrayNums = [20,3,4,56,90,400,49];
const sClone_arrayNums = arrayNums;
sClone_arrayNums.push(55,66);
console.log(`Original Array: ${arrayNums}`);
console.log(`Cloned Array: ${sClone_arrayNums}`);

console.log(`******************Deep Cloning*******************`);
const dClone_arrayNums = [...arrayNums]
arrayNums.push(10,25);
console.log(`Original Array: ${arrayNums}`);
console.log(`Cloned Array: ${dClone_arrayNums}`);

console.log(`******************Merged arrayNums & arrayEven using Spread Operator*******************`);
const arrayEven = [2,30,14,8];
const mergedArray = [...arrayNums,...arrayEven];
console.log(`${mergedArray}`);

const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"
    },
    address: {
         locality:{
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli,431202",
         },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    
    },
    mobiles: ["+91 8600 3456 88","1800 4567 32", "+91 9096 5678 77"]
}

console.log(`************************Employee Details************************`);
console.log("Address:",employee_info.address);
console.log(`Mobile Numbers: ${employee_info.mobiles}`);


console.log(`***************************Deep Cloning Using JSON.parse(JSON.stringfy())***************************`);
const deepCopyEmp = JSON.parse(JSON.stringify(employee_info));
deepCopyEmp.salary.july_month = "80,0000INR";
employee_info.address.country = "United Kingdom";
console.log(`Updated property July Month Salary on Cloned Object: ${deepCopyEmp.salary.july_month}`);
console.log(`Updated property Country on Original Object: ${employee_info.address.country}`);

