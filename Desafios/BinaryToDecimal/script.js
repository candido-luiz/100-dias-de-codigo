
let btn = document.getElementById("btn");
btn.addEventListener("click",converter);



function converter(){
    let bin = document.getElementById("binario");
    let dec = document.getElementById("decimal");
    let binario = bin.value;
    dec.value = parseInt(binario,2);
}