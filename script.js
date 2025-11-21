const columnas = document.querySelectorAll('.columna');

// Recorremos las columnas y por cada una de ellas añadimos los eventos
columnas.forEach(columna => {

    const contenedorTarjetas = columna.querySelector('.contenedorTarjetas');
    const botonAgregarTarjeta = columna.querySelector('.botonAgregarTarjeta');
    const contenedorNuevaTarjeta = columna.querySelector('.contenedorNuevaTarjeta');
    const textareaTarjeta = columna.querySelector('.textareaTarjeta');
    const botonGuardar = columna.querySelector('.botonGuardar');
    const botonCancelar = columna.querySelector('.botonCancelar');


    // Evento para el boton de agregar tarjeta
    botonAgregarTarjeta.addEventListener('click', () => {
        botonAgregarTarjeta.classList.add('hidden');
        contenedorNuevaTarjeta.classList.remove('hidden');
    });

    // Evento para el boton de guardar tarjeta
    botonGuardar.addEventListener('click', () => {
        const nuevaTarjeta = document.createElement('div');
        nuevaTarjeta.classList.add('tarjeta');
        nuevaTarjeta.textContent = textareaTarjeta.value;
        contenedorTarjetas.appendChild(nuevaTarjeta);
        contenedorNuevaTarjeta.classList.add('hidden');
    });

    // Evento para el boton de cancelar
    botonCancelar.addEventListener('click', () => {
        contenedorNuevaTarjeta.classList.add('hidden');
        botonAgregarTarjeta.classList.remove('hidden');
    });







});





