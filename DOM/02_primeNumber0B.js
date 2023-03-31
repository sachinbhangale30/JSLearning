const primeNumber = document.querySelector("#primeNumber");
primeNumber.addEventListener("click", () => {
const inputValue = prompt("Enter The Number","");
if (inputValue <= 1) {
    console.log(`${inputValue} is not a Prime Number`);
}

else if (inputValue==2) {
    console.log(`${inputValue} is a Prime Number`);
}
else {
    for (let index = 2; index < inputValue; index++) {
       if (inputValue%index==0) {
      var res =   `${inputValue} is not a Prime Number`;
      break;
       }else{
        var res = `${inputValue} is a Prime Number`;
       }

    }
}
console.log(res);
});
