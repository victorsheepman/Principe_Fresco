function animation(){
    let column = document.getElementById("Big");
    column.style.animation="up 1000ms forwards";
}
function animationdown(){
    let column = document.getElementById("Big");
    column.style.animation="down 1000ms forwards";
}
function activeModal(){   
    let modal = document.getElementById("Modal");
    let letras = document.getElementById("letras");
    let main = document.getElementById("Main");
    let producto = document.getElementById("Producto");
    modal.style.display="block";
    letras.style.display="none";
    producto.style.display="none";
    main.style.height="100vh";
}
function exitModal() {
    let modal=document.getElementById("Modal");
    let letras = document.getElementById("letras");
    let producto = document.getElementById("Producto");
    let main = document.getElementById("Main");
    modal.style.display="none";
    letras.style.display="flex";
    producto.style.display="flex";
    main.style.height='3768px';
}