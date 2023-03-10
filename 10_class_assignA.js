console.log(`----------------------Defined Class Vehicles with Data Member & Constructor----------------------`);
class Vehicle{
    constructor (brandName,model,engine,fuel,color) {
this.brandName = brandName;
this.model = model;
this.engine = engine;
this.fuel = fuel;
this.color = color;
}
}
const toyota = new Vehicle("Toyota","Fortuner","2755cc","Diesel","Sparkling Black");
console.log(toyota);

const hyundai = new Vehicle("Hyundai","Creta","1497cc","Diesel","Titan Grey");
console.log(hyundai);

const tata = new Vehicle("Tata","Harrier","1956 cc","Diesel","Orcus White ");
console.log(tata);

const mahindra = new Vehicle("Mahindra","XUV 400","34.5 kWh","EV","Electric Blue");
console.log(mahindra);

const maruti = new Vehicle("Maruti","Baleno","1197 cc","CNG","Nexa Blue");
console.log(maruti);

console.log(`------------------Added into Array and Traverse using For-Of Loop---------------------`);

const arrayOfVehicles = [toyota,hyundai,tata,mahindra,maruti];
for (const element of arrayOfVehicles) {
    console.log(element);
}

console.log(`-----------------------Traversed Object Function with one Argument using For-In Loop---------------------------------`);

class College{
    constructor(collegeName,department,location,university){
this.collegeName = collegeName;
this.department = department;
this.location = location;
this.university = university;
    }
}
const madras = new College(": IIT Madras"," : Computer Science","   : Madras"," : Autonomous");
const delhi = new College(" : IIT Delhi","  : Electronics","    : Delhi","  : Autonomous");
const bombay = new College(" : IIT Bombay"," : Automobile"," : Bombay"," : Autonomous");
const kanpur = new College(" : IIT Knapur"," : Electrical"," : Kanpur"," : Autonomous");

function traverseObject(object) {
    
    for (const key in object) {
            const element = object[key];
            console.log(key,element);
    
    }
}
traverseObject(madras);
console.log(`-------------------------------------------------------------------------`);
traverseObject(delhi);
// traverseObject(bombay);
// traverseObject(kanpur);

console.log(`----------------------Prime Number------------------------------------`);
function prime(value) {
    if (value%1==0) {
        console.log(`11 is a Prime Number`);
    }
    
}
prime(11);