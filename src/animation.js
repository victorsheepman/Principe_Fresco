function animation(){
    var column = document.getElementById("Big");
    column.style.animation="up 1000ms forwards";
}
function animationdown(){
    let column = document.getElementById("Big");
    column.style.animation="down 1000ms forwards";
}
function activeModal(){   
    let modal=document.getElementById("Modal");
    modal.style.display="block";
}
function exitModal() {
    let modal=document.getElementById("Modal");
    modal.style.display="none";
}