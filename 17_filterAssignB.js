class Employee {
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");

const arrayOfEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.error(`--------------------------Employees from TCS using filter()----------------------------------`);

const arrayTcs = arrayOfEmployees.filter(element => {
    if (element.emp_company == "TCS") {
        
        return  element;
    }
   
});
arrayTcs.forEach(element => {
  console.log(`Company Name: ${element.emp_company} Employee Name: ${element.emp_name}`);
 });

console.error(`-------------------------Average Salary of Employees from Wipro using forEach()----------------------------`);
const arrayWipro = arrayOfEmployees.filter(element => element.emp_company == "Wipro");
let sum = 0;
arrayWipro.forEach(element => {
  sum = sum + element.emp_salary;
});
console.log(sum/arrayWipro.length);

console.error(`----------------------------Using Reduce Method--------------------------------------------------------------`);
const reduce1 = arrayWipro.reduce((runningTotal,value) => {
return runningTotal + value.emp_salary;
},0);
console.log(reduce1/arrayWipro.length);



console.error(`-------------------------Average Salary of Employees from Wipro and Infy forEach()----------------------------`);
const arrayWiproInfy = arrayOfEmployees.filter(element => {
if (element.emp_company == "Wipro" || element.emp_company == "Infy") {
    return element;
}
});

let count = 0;
arrayWiproInfy.forEach(element => {
    count = count + element.emp_salary;
});
console.log(count/arrayWiproInfy.length);

console.error(`----------------------------Using Reduce Method--------------------------------------------------------------`);




const sum1 = arrayWiproInfy.reduce((runningTotal,value) => {
    return runningTotal + value.emp_salary;
     
    },0);
   
    console.log(sum1/arrayWiproInfy.length);
   