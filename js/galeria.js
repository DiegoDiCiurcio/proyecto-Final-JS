
const imagenes = document.querySelectorAll(".img");
const containerFullImg = document.querySelector(".containerFullImg");
const fullImg = document.querySelector (".mostrarImg");
const descripcion = document.querySelector (".descripcion");

imagenes.forEach(imagen =>{
imagen.addEventListener ("click", () => {
    // console.log(imagen.getAttribute('alt'));
    mostrarImgGrande(imagen.getAttribute('src'), imagen.getAttribute('alt'))
})
}); 

function mostrarImgGrande(src, alt){
    containerFullImg.classList.toggle("move");
    containerFullImg.classList.toggle("show");
    fullImg.src= src;
    descripcion.innerHTML = alt;
}

containerFullImg .addEventListener ("click", () => {
    containerFullImg.classList.toggle("move");
    containerFullImg.classList.toggle("show");

});

const btnEliminarCarrito = document.querySelector(".eliminarCarrito");






// SELECCION DE PROPIEDADES DE CUADRO 


let tamañoDeCuadro = [

    {
        nombre: "Seleccionar Tamaño", dimensiones: "Seleccionar Tamaño", precio: ""
    },

    {
        nombre: "A0", dimensiones: "80cm x 110cm", precio: "$10000",
    },

    {
        nombre: "A1", dimensiones: "65cm x 80cm", precio: "$8000",
    },

    {
        nombre: "A2", dimensiones: "40cm x 60cm", precio: "$6000",
    },

    {
        nombre: "A3", dimensiones: "27cm x 40cm", precio: "$4000",
    },

    {
        nombre: "A4", dimensiones: "21cm x 27cm", precio: "$2000",
    },

    {
        nombre: "A5", dimensiones: "15cm x 21cm", precio: "$1000",
    },
]

let papelDeCuadro = [

    {
        nombre: "Seleccionar papel", precio: ""
    },
    {
        nombre: "Fineart 275g", precio: "$3000",
    },

    {
        nombre: "Fineart 260g", precio: "$2500",
    },

    {
        nombre: "Fineart 250g", precio: "$2000",
    },

    {
        nombre: "Mate", precio: "$1500",
    },

    {
        nombre: "Brillo", precio: "$1000",
    },
]

let montajeDeCuadro = [

    {
        nombre: "Seleccionar montaje", precio: ""
    },

    {
        nombre: "Paspartou", precio: "$2500"
    },

    {
        nombre: "Foamboard", precio: "$3000"
    },

    {
        nombre: "Fibrofacil", precio: "$2000"
    },
]

let marcoDeCuadro = [

    {
        nombre: "Seleccionar marco", precio: ""
    },

    {
        nombre: "Marco de nogal", precio: "$1000"
    },

    {
        nombre: "Marco de cipres", precio: "$1200"
    },

    {
        nombre: "Marco de pino", precio: "$800"
    },

    {
        nombre: "Sin marco", precio: ""
    }

]


const carritoDeCompras = []

// Llamado de variables DOM:

let tamañosDisponibles = document.getElementById("tamañosDisponibles");
let papelesDipsonibles = document.getElementById("papelesDisponibles");
let montajesDisponibles = document.querySelector("#montajesDisponibles");
let marcosDisponibles = document.querySelector("#marcosDisponibles");

//llamado de variables tipo BOTON para evento enviar al carrito:

let enviarAlCarritoButton = document.getElementById('enviarAlCarrito');


// inyeccion al DOM de las opciones:

function opcionesDom() {

    tamañoDeCuadro.forEach(
        (el) => (
            tamañosDisponibles.innerHTML += `<option value="${el.dimensiones}">${el.dimensiones} - ${el.precio}</option>`))
    papelDeCuadro.forEach((el) => (
        papelesDipsonibles.innerHTML += `<option value="${el.nombre}">${el.nombre}  - ${el.precio}</option>`
    ));

    montajeDeCuadro.forEach((el) => (
        montajesDisponibles.innerHTML += `<option value="${el.nombre}">${el.nombre} - ${el.precio}</option>`
    ));

    marcoDeCuadro.forEach((el) => (
        marcosDisponibles.innerHTML += `<option value="${el.nombre}">${el.nombre} - ${el.precio}</option>`
    ));


}

opcionesDom();


// funciones que retornan el valor de cada value seleccionado por el usuario para crear un CLASS de cuadro terminado, el cual se pushea al carrito de compras [];


function tamañoSeleccionado() {
    let tamañoSeleccionado = tamañosDisponibles.value;
    return (tamañoSeleccionado);

}

function papelSeleccionado() {
    let papelSeleccionado = papelesDisponibles.value;
    return(papelSeleccionado);

}

function montajeSeleccionado() {
    let montajeSeleccionado = montajesDisponibles.value
    return (montajeSeleccionado);
}

function marcoSeleccionado() {
    let marcoSeleccionado = marcosDisponibles.value;
    return (marcoSeleccionado); 
// crear fn para que cuando seleccione cada uno de los cuadros, este se coloque al rededor de la img mostrando como quedaria.
// crear IF para seleccionar si quieren con vidrio o sin vidrio cada cuadro. 
}

// clase constructora de cada uno de los cuadros con cada una de las propiedades seleccionadas por el usuario. 

class CuadroCreado {

    constructor(tamaño, papel, montaje, marco) {
        this.tamaño = tamaño,
            this.papel = papel,
            this.montaje = montaje,
            this.marco = marco

    }

}

// FUNCION DE EVENTO PARA ENVIAR EL CLASS CON LAS PROPIEDADES AL CARRITO
let cuadroTerminado = ""

function enviarAlCarritoFn() {
    enviarAlCarritoButton.addEventListener("click", () => (
        cuadroTerminado = new CuadroCreado (tamañoSeleccionado(), papelSeleccionado (), montajeSeleccionado(), marcoSeleccionado()),
        carritoDeCompras.push(cuadroTerminado)
    )
    )
}
enviarAlCarritoFn()

            // alert de q se agrego correctamente.

const alertAgregadoCorrectamente = document.querySelector (".alertCarritoEnviado");

alertAgregadoCorrectamente.addEventListener ("click", () => {

            Swal.fire({
                title: '¡EXCELENTE!',
                text: '¡Cuadro añadido Correctamente!',
                icon: 'succes',
                confirmButtonText: 'Continuar comprando',
                cancelButtonText: 'Ir al carrito',
                timer: '6000',
                timerProgressBar: "true"
              })
})

// crea en el HTML CARRITO, un inner donde se muestren todos los cuadros agregados, precio de cada uno, propiedades y precio final sumado. con boton de confirmar compra, eliminar algun cuadro (en cada una si elimina o confirma, sweet alert de re confirmacion.)

// añadir el carrito al local storage  con JSON

const carritoJSON = JSON.stringify(carritoDeCompras);

const guardarLocal = (CarritoDeCompras, CuadrosCreados) => { localStorage.setItem(CarritoDeCompras, CuadrosCreados)};
guardarLocal("Carrito De Compras", JSON.stringify(carritoDeCompras));