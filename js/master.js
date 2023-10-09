//Proyecto final
let tarjetasProgramas = document.querySelector(".holoProgramas")

fetch('./datos/holoprogramas.json')
    .then((respuesta) => {
        return respuesta.json()
    })

    .then((programas) => {
        programas.forEach(programa => {
            //console.log(programa.nombre);
            tarjetasProgramas.innerHTML += `   <div class="card p-2 m-2" style="width: 18rem;">
            <img src="${programa.imagen}" class="card-img-top miniatura" alt="${programa.nombre}">
            <div class="card-body">
                <h5 class="card-title">${programa.nombre}</h5>
                <p class="card-text">${programa.descripcion}</p>
                <a  id='${JSON.stringify(programa)}' href="#" class="btn btn-warning btn-floating masInformacion"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg></i> Más información</a>
            </div>
        </div>        `
        })
        //localStorage
        let botonInformacion = document.querySelectorAll('.masInformacion')
        //console.log(botonInformacion);
        let arraymiListaDeProgramas
        let miObjeto
        let codigo

        botonInformacion.forEach(programaSeleccionado => {
            programaSeleccionado.addEventListener('click', function (e) {
                e.preventDefault()

                arraymiListaDeProgramas = [];
                
                console.log(this.id);
                arraymiListaDeProgramas.push(this.id)
                miObjeto = JSON.parse(arraymiListaDeProgramas[0])
                codigo = miObjeto.codigo
                //Aquí guardo en el localStorage el objeto seleccionado
                localStorage.setItem('detallesProgramas', JSON.stringify(arraymiListaDeProgramas))
                location.href = `detalle.html?codigo=${codigo}`

            })
        })


    })

    //Esto es sólo para controlar si existe o no algún error en el llamo del fetch
.catch((error)=>{
    console.log('Ufff ha ocurrido un error '+error )
})

