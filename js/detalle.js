let codigo = location.search;
let codigoProducto = new URLSearchParams(codigo);
let codigoSeleccionado = codigoProducto.get('codigo');
//Captura
let codigFinal = document.getElementById('codigo');
codigFinal.innerHTML += `Código del Producto: ${codigoSeleccionado}`;

fetch('../datos/holoprogramas.json')
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
                <article class="producto col-12 col-md-6 col-lg-4" >
                <img class="w-100" src="${programas[i].imagen}" alt="${programas[i].nombre}">
                <h2>Nombre: ${programas[i].nombre}</h2>
                <h3>Precio: ${programas[i].precio}</h3>
                </article>
                `
            }
        }
    })
    .catch((error) => {
        console.log('Ufff ha ocurrido un error ' + error)
    })

    let botonRegresar = document.querySelector('#botonRegresar');
    botonRegresar.addEventListener('click', function(){
    localStorage.clear();
    location.href = '../index.html';
})