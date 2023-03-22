console.error(`---------------List of all Employees Names-----------------------------------------`);
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

const employeesName = arrayOfEmployees.map(element => element.emp_name);
console.log(`${employeesName}`);

console.error(`---------------List of Departments-----------------------------------------`);
const employeesDepartment = arrayOfEmployees.map(element => element.emp_dept);
console.log(`${employeesDepartment}`);

console.error(`-----------------List of Employees ID---------------------------------------`);
const employeesId = arrayOfEmployees.map(element => element.emp_id);
console.log(`${employeesId}`);

console.error(`------------------List of Employees Names working in TCS--------------------------------------`);
const employeesInTcs = arrayOfEmployees.map(element => {
    if (element.emp_company=="TCS") {
    console.log(`Name: ${element.emp_name}, Company Name: ${element.emp_company}`);
    }
});

