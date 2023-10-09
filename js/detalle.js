let codigo = location.search;
let codigoProducto = new URLSearchParams(codigo);
let codigoSeleccionado = codigoProducto.get('codigo');
//Captura
let codigFinal = document.getElementById('codigo');
codigFinal.innerHTML += `Código del Producto: ${codigoSeleccionado}`;

fetch('./datos/holoprogramas.json')
    .then((respuesta) => {
        return respuesta.json()
    })
    .then((programas) => {
        console.log(programas) // [{}, {}, {}]
        console.log(programas.detalle);

        for (let i = 0; i < programas.length; i++) {
            if (programas[i].codigo == codigoSeleccionado) {
                const sectionDetalle = document.querySelector(".detalle")
                sectionDetalle.innerHTML += `
                <h2 class="text-center">${programas[i].nombre}</h2>
                <div class="container m-3">
                <div class="row align-items-start">
                <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                <img class="w-100" src="${programas[i].imagen}" alt="${programas[i].nombre}">
                </div>
                <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                                <p class="fst-italic">${programas[i].detalle}</p>
                                <h5>Precio: ${programas[i].precio} tiras de latinum</h5>
                                <h5>Puntuación: ${programas[i].puntuacion}</h5>
                </div>
                </div>
                </div>
                `
            }
        }
    })
    .catch((error) => {
        console.log('Ufff ha ocurrido un error ' + error)
    })

let botonRegresar = document.querySelector('#botonRegresar');
botonRegresar.addEventListener('click', function () {
    localStorage.clear();
    location.href = './index.html';
})