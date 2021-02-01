let inputs = document.querySelectorAll("input");
let loginButton = document.getElementById("checkLogin");
let cancelButton = document.getElementById("cancel");

loginButton.addEventListener("click", validate);
cancelButton.addEventListener("click",cancel);

function validate(){
    let spaceError = false;
    let checkError = false;

    inputs.forEach(input => {
        if(input.value.includes(" ")){
            input.style.backgroundColor = "var(--light-yellow)";
            spaceError = true;
        }
        else{
            if(input.id == "user" && input.value != "testuser"){
                input.style.backgroundColor = "var(--light-red)";
                checkError = true;
            }
            if(input.id == "pass" && input.value != "mypassword"){
                input.style.backgroundColor = "var(--light-red)";
                checkError = true;
            }
        }
    });

    if(spaceError) {
        alert("Não pode haver espaços nos campos");
    }
    else if(checkError){
        alert("Usuário ou senha não compatíveis");
    }
}
function cancel(){
    inputs.forEach((input)=>{
        input.value = "";
        input.style.backgroundColor = "var(--default-color)";
    })
    
}