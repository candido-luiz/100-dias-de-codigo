function trocar(p){
    let ul = p.parentElement.children[1];
    ul.classList.toggle("toggle");
}
let flexContainer = document.getElementById("flex-container");

function carregar(){
    let input = document.getElementsByTagName("input");
    for(option of input){
        option.addEventListener("click",addStyle);
    }
}


function addStyle(){
    console.log(this);
}