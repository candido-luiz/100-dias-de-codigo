function trocar(p){
    let ul = p.parentElement.children[1];
    ul.classList.toggle("toggle");
}
let flexContainer = document.getElementById("flex-container");

function carregar(){
    let li = document.getElementsByTagName("li");
    for(option of li){
    option.addEventListener("click",addStyle);
}
}


function addStyle(){
    console.log(this.children[0]);
}