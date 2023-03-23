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

console.error(`--------------------Employees from Wipro------------------------`);
const wipro = arrayOfEmployees.filter(element => {
if (element.emp_company == "Wipro") {
    return element.emp_company;
}

});

wipro.forEach(element => {
    console.log(`Company Name: ${element.emp_company} Employee Name: ${element.emp_name}`);
   });
   
   console.error(`--------------------Employees from IT or HR------------------------`);
   const arrayItHr = arrayOfEmployees.filter(element => {
    if (element.emp_dept == "IT" || element.emp_dept == "HR") {
        return element.emp_dept;
    }
    
    });
    arrayItHr.forEach(element => {
    console.log(`Employee Name: ${element.emp_name}   Department: ${element.emp_dept}  Company Name: ${element.emp_company}`);
   });

   console.error(`--------------------Employee Id's which are greater than 50------------------------`);
  arrayOfEmployees.filter(element => {
if (element.emp_id >= 50) {
    console.log(`Employee Id: ${element.emp_id} Employee Name: ${element.emp_name} Company Name: ${element.emp_company}`);
}
   });

   console.error(`--------------------Employee Names starts with A or V or M------------------------`);
  arrayOfEmployees.filter(element => {
if (element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M")) {
console.log(`Employee Name: ${element.emp_name}   Company Name: ${element.emp_company}`);
}
   });

   
console.error(`--------------------Average Salary of Employee all Departments------------------------`);
let sum = 0;
  arrayOfEmployees.filter(element =>{
sum = sum + element.emp_salary;

   });
console.log(sum/arrayOfEmployees.length);
  
console.error(`--------------------Average Salary of IT Department------------------------`);
const arrayIt = arrayOfEmployees.filter(element => {
if (element.emp_dept == "IT") {
    return element;
}
});
const arrayReduce = arrayIt.reduce((runningTotal,value) => {
return runningTotal + value.emp_salary;
},0);
console.log(arrayReduce/arrayIt.length);


  