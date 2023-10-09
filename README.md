# PROYECTO-INTEGRADOR-FINAL-UNTREFSCHOOL
Para cerrar la cursada del lenguaje JavaScript, te proponemos un proyecto final simple, donde aplicarás los conocimientos adquiridos.
El mismo consiste en desarrollar una landing page de productos o servicios.
Puedes utilizar HTML + CSS, ó BootStrap, o cualquier otro Framework CSS con el cual te sientas más a gusto, para hacer el trabajo de diseño web.
El proyecto debe listar en la página principal, una serie de productos y/o servicios. A su vez, cada uno de estos debe contar con un botón que permita
ver un detalle de la información del producto o del servicio, de acuerdo al interés de quien visita la web.

# Espacio de trabajo
Archivo JSON: en este crearás el contenido de los productos/servicios que serán mostrados en el documento principal de este proyecto. Recuerda que solo debes mostrar un título o código más una breve descripción.
Fetch + asincronismo: utilizarás la API fetch para leer el contenido del archivo JSON, y armar el HTML dinámico, combinando template string + template literals dentro de una función la cual recibe como parámetro cada
producto/servicio del array de objetos.
DOM: En la estructura de template string, agrega un botón, icono o cualquier elemento que definas, para poder ver el detalle del producto/servicio. Utiliza alguna función que te permita identificar qué ítem quiere ver en
detalle el usuario.
Evento: Ante este evento, deberás identificar el objeto literal correspondiente al producto/servicio seleccionado, y almacenarlo en LocalStorage. Luego redireccionas al usuario a la página detalle.
