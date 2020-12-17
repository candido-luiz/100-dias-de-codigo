let result = document.getElementById("result");
let numbers = document.getElementsByClassName("number");

for(number of numbers){
    number.addEventListener("click",displayNumber);
}




function displayNumber(){
    result.innerText += this.innerText;
}