// Function with no arguments and no return value
console.log("------------Step 1------------");
function myName(){ 
    console.log("My Idol:Dr.A.P.J Abdul Kalam"); 
}
myName()

function myLocation() {
   console.log("My Location:Mumbai"); 
}
myLocation();

console.log("------------Step 2------------");
function personalDetails(firstName,lastName,collegeName){
console.log("First Name:Sachin Last Name:Bhangale College Name:G.H.Raisoni");
}
personalDetails();
console.log("------------Step 3------------");
var str1 = "virat";
var str2 = "anushka";
var num1 = 1000;
var num2 = 2000;
function swapValuesDude(value1,value2){
console.log("Before Swap:",value1,value2);

var temp = value1;
value1=value2;
value2=temp;
console.log("After Swap:",value1,value2);
}
swapValuesDude(str1,str2); 
swapValuesDude(num1,num2);
console.log("------------Step 4------------");
var num1 = 10.23;
var num2 = 600;
var num3 = 40;
var str1 = "hello";
var str2 = "good";
var str3 = "morning";
function addThreeValues(value1,value2,value3){
    var sum = num1+num2+num3;
return sum;
}
var result=addThreeValues(10.23,600,40);
console.log(result);
console.log("hello ","good ","morning ");
