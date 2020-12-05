
let btn = document.getElementById("btn");
let input = document.getElementById("binario");
btn.addEventListener("click",converter);
input.addEventListener("input",verificaNumero);

function converter(){
    let bin = document.getElementById("binario");
    let dec = document.getElementById("decimal");
    let binario = bin.value;
    dec.value = parseInt(binario,2);
}

function verificaNumero(event){
    if (event.data != "1" && event.data != "0" && event.inputType != "deleteContentBackward"){
        alert("Digite apenas 1 ou 0!");
        
        input.value = input.value;
        let lastNumber = (input.value.length)-1;
        input.value = input.value.replace(input.value[lastNumber], "");
    }
}