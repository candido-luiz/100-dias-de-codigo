function carregar(){
    let menuMobile = document.querySelector(".menuMobile");
    let menu = document.querySelector("nav ul");

    menuMobile.addEventListener('click', ()=>{
        menu.style.width = '40%';
        menu.style.visibility = "visible";
    });

    let close = document.querySelector("#close");
    close.addEventListener('click', ()=>{
            menu.style.width ='0';
    });
}
