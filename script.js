
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

function animateMenu()
{
    linel.classList.toggle ("activeline1");
    line2.classList.toggle ("activeline2");
    line3.classList.toggle ("activeline3");
    menu.classList.toggle ( "activemenu");
}

/* proyectos */

$(".sitio").click(function(){
    $(".sitio").removeClass("active");
    $(this).addClass("active");
    
 });

$(".app").click(function(){
    $(".app").removeClass("active");
    $(this).addClass("active");
    
 });

/* contactar */

const btn = document.getElementById('enviar');

document.getElementById('formulario')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_zikyrk3';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('¡Mensaje enviado correctamente...!');
      event.target.reset();
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
});
