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

console.error(`-----------------------Sorted Array in Ascending order of Employee ID's-----------------------------------------------`);

arrayOfEmployees.sort((a, b) => a.emp_id - b.emp_id);

arrayOfEmployees.forEach(employee => {
  console.log(`Employee Id: ${employee.emp_id},  Name: ${employee.emp_name},  Department: ${employee.emp_dept}`);
});


console.error(`-----------------------Sorted Array in Ascending order of Employee Department-----------------------------------------------`);
arrayOfEmployees.sort((a, b) => { 
    return a.emp_dept > b.emp_dept ? 1 : -1;
});

arrayOfEmployees.forEach(employee => {
    console.log(`Employee Id: ${employee.emp_id},  Department: ${employee.emp_dept},     Company Name: ${employee.emp_company}`);
  });
 
  console.error(`------------------Sorted Array in Descending order of Employee Salary----------------------------------------------------`);
  arrayOfEmployees.sort((a, b) => { 
    return a.emp_salary < b.emp_salary ? 1 : -1;
});

arrayOfEmployees.forEach(employee => {
    console.log(`Name: ${employee.emp_name},    Salary: ${employee.emp_salary},   Company Name: ${employee.emp_company}`);
  });