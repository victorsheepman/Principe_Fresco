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
    let footer = document.getElementById("footer"); 
    let column = document.getElementById("Big");
    animacionBtn();
    
    modal.style.display="block";
    letras.style.display="none";
    producto.style.display="none";

    main.style.height="100%";
    main.style.position="absolute";
    main.style.top="82px";
    main.style.left="0";
    main.style.right="0";
    main.style.bottom="0";

    footer.style.display="none";
   
    column.style.height="100vh";
    column.style.overflow="hidden";
}
function exitModal() {
    let modal=document.getElementById("Modal");
    let letras = document.getElementById("letras");
    let producto = document.getElementById("Producto");
    let main = document.getElementById("Main");
    let column = document.getElementById("Big");

    animationReverse();
    modal.style.display="none";
    letras.style.display="flex";
    producto.style.display="flex";
    main.style.height='3768px';
    footer.style.display="block";
        
    main.style.position="unset";
    main.style.top="0px";
    main.style.left="0";
    main.style.right="0";
    main.style.bottom="0";

    column.style.height="100%";
    column.style.overflow="unset";
}


function animacionBtn() {
    let menuBtn= document.getElementById("Menu__botones");
    let menuSize = document.getElementById("Menu__size");
    menuBtn.style.animation="colum-r .3s linear forwards";
    menuSize.style.animation = "column-size .3s ease-in forwards";

}
function animationReverse() {
    let menuBtn= document.getElementById("Menu__botones");
    let menuSize = document.getElementById("Menu__size");
    menuBtn.style.animation="colum-reverse .3s linear";
    menuSize.style.animation = " columno-size-reverse .5s linear"
}

