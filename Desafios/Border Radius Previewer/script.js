let board = document.getElementById("board");
let top_Left = document.getElementById("top_left");
let top_Right = document.getElementById("top_right");
let bottom_Left = document.getElementById("bottom_left");
let bottom_Right = document.getElementById("bottom_right");

let topLeftAtribute = document.getElementById("topLeftAtribute");
let topRightAtribute = document.getElementById("topRightAtribute");
let bottomLeftAtribute = document.getElementById("bottomLeftAtribute");
let bottomRightAtribute = document.getElementById("bottomRightAtribute");

function topLeft(){
    if (top_Left.value == "" || top_Left.value == 0){
        board.style.borderTopLeftRadius = "0px";
        topLeftAtribute.innerText = "";
    }else{
        board.style.borderTopLeftRadius = top_Left.value + "px";
        topLeftAtribute.innerText = "border-top-left-radius: " + top_Left.value + "px;"
    }
}
function topRight(){
    if (top_Right.value == "" || top_Right.value ==0){
        board.style.borderTopRightRadius = "0px";
        topRightAtribute.innerText = "";
    }else{
        board.style.borderTopRightRadius = top_Right.value + "px";
        topRightAtribute.innerText = "border-top-right-radius: " + top_Right.value + "px;"
    }
}
function bottomLeft(){
    if (bottom_Left.value == "" || bottom_Left.value == 0){
        board.style.borderBottomLeftRadius = "0px";
        bottomLeftAtribute.innerText = "";
    }else{
        board.style.borderBottomLeftRadius = bottom_Left.value + "px";
        bottomLeftAtribute.innerText = "border-bottom-left-radius: " + bottom_Left.value + "px;"
    }
}
function bottomRight(){
    if (bottom_Right.value == "" || bottom_Right.value == 0){
        board.style.borderBottomRightRadius = "0px";
        bottomRightAtribute.innerText = "";
    }else{
        board.style.borderBottomRightRadius = bottom_Right.value + "px";
        bottomRightAtribute.innerText = "border-bottom-right-radius: " + bottom_Right.value + "px;"
    }
}
