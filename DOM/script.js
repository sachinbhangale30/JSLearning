console.log("====== API getElementsByTagName() to select element by tag name ====="); 
const h2Element = document.getElementsByTagName("h2"); 
console.log(h2Element[1].innerHTML); 
 h2Element[1].innerHTML = "My Hobbies";

 console.log("====== API getElementById() to select element by id ====="); 
 const elementProfile = document.getElementById("profile"); 
 console.log(elementProfile.innerHTML); 

 console.log("====== API getElementsByClassName() to select element class Name ====="); 
 const elementLi =document.getElementsByClassName("liItem");
 console.log(elementLi[1].innerHTML);

 console.log("====== API querySelector() to select element by id ====="); 
 const elementProfileByQuery = document.querySelector("#profile"); 
 console.log(elementProfileByQuery.innerHTML); 
 
 console.log("====== API querySelector() to select element by class ====="); 
 const elementByQuery= document.querySelector(".liItem"); 
 console.log(elementByQuery); 
 
 console.log("====== API querySelectorAll() to select element by class ====="); 
 const elementsByQuery = document.querySelectorAll(".liItem"); 
 console.log(elementsByQuery);

