let password = document.querySelector("#password");
let username = document.querySelector("#name");
let email = document.querySelector("#email");
let submit = document.querySelector("#submit");

let passLetter;
let passSymbol;
let passHifen;
let passLetterPatt = /[A-Z]/g;
let passSymbolPatt = /\W/g;
let passHifenPatt = /-/g;

let notValidUsernamePatt = /(\W|\d|\s|\0)/g ;

let emailPatt = /(\w|\d)@gmail.com/;
let passChecked = false;
let usernameChecked = false;
let emailChecked = false;

let usernameSpan = document.querySelector("#usernameAlert");
let passwordSpan = document.querySelector("#passwordAlert");
let emailSpan = document.querySelector("#emailAlert");

password.addEventListener("input", verificaPassword);
username.addEventListener("input", verificaUsername);
email.addEventListener("input", verificaEmail);

function verificaPassword(){

    passLetter = this.value.match(passLetterPatt);
    passSymbol = this.value.match(passSymbolPatt);
    passHifen = this.value.match(passHifenPatt);
    if(
           passLetter == null
        || passSymbol == null 
        || passHifen == null
        || passLetter.length < 5 
        || passSymbol.length < 6 
        || passHifen .length < 2){
        
        passChecked = false;
        passwordSpan.style.display = "block";
    }else{
        passChecked = true;
        passwordSpan.style.display = "none";
    }
    enableSubmit()
}

function verificaUsername(){
    if(notValidUsernamePatt.test(this.value) || this.value == ""){
        usernameChecked = false;
        usernameSpan.style.display = "block";
    }else{
        usernameChecked = true;
        usernameSpan.style.display = "none";
    }
    enableSubmit()
}

function verificaEmail(){
    if(emailPatt.test(this.value)){
        emailSpan.style.display = "none";
        emailChecked = true;
        
    }else{
        emailChecked = false;
        emailSpan.style.display = "block";
    }
    enableSubmit()
}

function enableSubmit(){
    if(passChecked && usernameChecked && emailChecked){
        submit.disabled = false;
    }else{
        submit.disabled = true;
    }
}
