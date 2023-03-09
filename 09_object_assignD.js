console.log(`1.Properties added to the object Professor`);
const professor = {
    name: "Mohit Sharma",
    department: "Computer Science",
    id: "DA564278", 
    city: "Pune",
    pin: 431205,

}
console.log(professor);

professor.degrees = {
    engineering: "CSC",
    PHD: "Adv Computing",
    MBA: "Operations",
}
console.log(`----------------------------------------------------`);
console.log(`2.Included Nested objects Degrees`);
console.log(professor.degrees);

console.log(`----------------------------------------------------`);

console.log(`3.Added Certificates Array`);
professor.certificates = ["Hacker Rank Participation","Certificate in IFE Course","Certificate in Adv Programming"];
console.log(professor.certificates);

console.log(`----------------------------------------------------`);

professor.teachersDegree = function () {
     return `4.Degrees are engineering: ${this.degrees.engineering} , PHD: ${this.degrees.PHD} , MBA: ${this.degrees.MBA}`
 }
let resultDegree = professor.teachersDegree();
console.log(resultDegree);

console.log(`----------------------------------------------------`);

professor.totalExperience = "14Years";
console.log(`5.Total Experience:`,professor.totalExperience);

console.log(`----------------------------------------------------`);

professor.city = "Mumbai";
// console.log(professor.city);

professor.pin = 400001;
console.log(`6.Modified Two Properties: City - ${professor.city} Pin - ${professor.pin}`);

console.log(`----------------------------------------------------`);

professor.certificates.push("Oracle Certified");
console.log(`7.Added New Certification: ${professor.certificates}`);

console.log(`----------------------------------------------------`);

console.log(`8.Last element of the array Certificates: ${professor.certificates[professor.certificates.length-1]}`);