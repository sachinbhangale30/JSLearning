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

const array_employees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.error(`-----------------------------TCS Employee Details----------------------------------------------`);
array_employees.forEach(element => {
    if (element.emp_company=="TCS") {
        console.log(`Employee Name: ${element.emp_name} Company: ${element.emp_company}`);
    }
});

console.error(`--------------------------Employees with Salary Greater than or Equal to 50000----------------------------`);
array_employees.forEach(element => {
    if (element.emp_salary>=50000) {
        console.log(element);
    }
});

console.error(`-----------------------------Sum Of All Employees Salary------------------------------------`);
let sum = 0;
array_employees.forEach(element => {
    sum = sum + element.emp_salary
});
console.log(`Sum of all Employees Salary: ${sum}`);

console.error(`-------------------------------------Average Salary--------------------------------------------------------`);
let totalSalary = 0;
array_employees.forEach(element => {
    totalSalary = totalSalary + element.emp_salary;
   
});
let average = totalSalary / array_employees.length
console.log(`Total Average Salary: ${average}`);

console.error(`-------------------------------IT or HR department Employees whose salary greater than or equal to 75000----------------------------`);
array_employees.forEach(element => {
    if (  element.emp_dept=="IT" || element.emp_dept=="HR" ) {
      if (element.emp_salary>=75000) {
        console.log(element);
      }
    }
});
