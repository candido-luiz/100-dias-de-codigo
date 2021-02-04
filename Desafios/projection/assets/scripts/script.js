function carregar(){
    let menuMobile = document.querySelector(".menuMobile");
    let menu = document.querySelector("nav ul");

    menuMobile.addEventListener('click', ()=>{
        menu.classList.add("fadeIn");
        
    });

    let close = document.querySelector("#close");
    close.addEventListener('click', ()=>{
            menu.classList.remove("fadeIn");
    });
}
