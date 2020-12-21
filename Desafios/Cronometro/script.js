let conjunto = document.getElementById("conjuntos");
let treino = document.getElementById("treino");
let descanso = document.getElementById("descanso");
let timeArray;

function decrease(){
    if(conjunto.innerText > 1){
        conjunto.innerText = parseInt(conjunto.innerText) - 1;
    }
}

function increase(){
    conjunto.innerText = parseInt(conjunto.innerText) + 1;
}
function increaseTime(interval){
    let time = interval.innerText;
    timeArray = [time[0],time[1],time[3],time[4]];
    timeArray[3] = parseInt(timeArray[3]) + 1;
    if(timeArray[3] > 9){
        timeArray[3] = 0;
        timeArray[2] = parseInt(timeArray[2]) + 1;      
    }
    if(timeArray[2] > 5){
        timeArray[2] = 0;
        timeArray[1] = parseInt(timeArray[1]) + 1;
    }
    if(timeArray[1] > 9){
        timeArray[1] = 0;
        timeArray[0] = parseInt(timeArray[1]) + 1;
    }
    interval.innerText = timeArray[0] + "" + timeArray[1] + ":" + timeArray[2] + "" + timeArray[3];
}

