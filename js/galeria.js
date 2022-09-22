const imagenes = document.querySelectorAll(".img");
const containerFullImg = document.querySelector(".containerFullImg");


imagenes.forEach(imagen =>{
imagen.addEventListener ("click", () => {
    console.log(imagen.getAttribute('alt'));
    mostrarImgGrande(imagen.getAttribute('alt'), imagen.getAttribute('alt'))
})
}); 

function mostrarImgGrande(src, alt){
    containerFullImg.classList.toggle("desplazamiento")
}