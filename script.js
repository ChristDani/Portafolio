
window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("bajar",this.window.scrollY>0);
})

/* menu hamburguesa */

document.querySelector (".menuIcon") . addEventListener ("click", animateMenu) ;
var linel=document.querySelector(".linea1");
var line2=document.querySelector(".linea2");
var line3=document.querySelector(".linea3");
var menu=document.querySelector(".menu");
var header=document.querySelector("header");

function animateMenu()
{
    linel.classList.toggle ("activeline1");
    line2.classList.toggle ("activeline2");
    line3.classList.toggle ("activeline3");
    menu.classList.toggle ( "activemenu");
    header.classList.toggle ( "active");
}

/* proyectos */


