
window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("bajar",this.window.scrollY>0);
})
