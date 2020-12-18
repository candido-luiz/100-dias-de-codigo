let vetor = []; // Vetor que armazenará o primeiro valor inserido e a operação escolhida
vetor.length = 2;
let display = document.getElementById("display");
let numbers = document.getElementsByClassName("number");
let operations = document.getElementsByClassName("operation");
let equals = document.getElementById("equals");
let clear = document.getElementById("clear");
let result;
let needClearDisplay = false; // Será utilizada para limpar ou não display

for(number of numbers){
    number.addEventListener("click",displayNumber);
}
for(operation of operations){
    operation.addEventListener("click",executeOperation);
}
equals.addEventListener("click", showResult);
clear.addEventListener("click", clearAll);

function displayNumber(){
    if(!needClearDisplay){ //verifica se uma operaçao foi solicitada
        display.innerText += this.innerText;
    }else{
        clearDisplay(); // caso uma operaçao tenha sido solicitada, o display apaga ao inserir novo numero
        needClearDisplay = false;
        display.innerText = this.innerText;
    }
}

function executeOperation(){
    if(vetor[1] != undefined){
        result = calculate(vetor[0],vetor[1],display.innerText);
        vetor[0] = result;
        vetor[1] = this.innerText;
        display.innerText = result;
    }else{
        //antes de fazer a atribuição abaixo, devo verificar se existe uma operação feita anteriormente 
        vetor[0] = display.innerText;
        vetor[1] = this.innerText;
        
    }
    needClearDisplay = true;
}

function clearDisplay(){
    display.innerText = "";
}
function calculate(num1, operation, num2){
    let opResult;
    switch(operation){
        case '+':
            opResult = parseInt(num1) + parseInt(num2);
           break;
        case '-':
            opResult = parseInt(num1) - parseInt(num2);
            break;
        case '*':
            opResult = parseInt(num1) * parseInt(num2);
            break;
        case '/':
            opResult = parseInt(num1) / parseInt(num2);
            break;
        case '%':
            opResult = (parseInt(num1)/100) * parseInt(num2);
            break;
        default:
            alert("Algo deu errado");    
    }
    return opResult;
}

function showResult(){
    display.innerText = calculate(vetor[0],vetor[1],display.innerText);
    vetor[1] = undefined;
    needClearDisplay = true;
}
function clearAll(){
    display.innerText = "";
    vetor[0] = undefined;
    vetor[1] = undefined;
    needClearDisplay = false;
}