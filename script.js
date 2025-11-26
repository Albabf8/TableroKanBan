const columnas = document.querySelectorAll('.columna');

// Variable global para guardar la tarjeta que se está moviendo
let tarjetaArrastrada = null; 

const contenedoresVacios = document.querySelectorAll('.contenedorTarjetas');

// Asignamos los eventos a las las columnas
for (const contenedorVacio of contenedoresVacios) {
  contenedorVacio.addEventListener('drop', DropElemento);
  contenedorVacio.addEventListener('dragover', DragOverElemento);
  contenedorVacio.addEventListener('dragenter', DragEnterElemento);
  contenedorVacio.addEventListener('dragleave', DragLeaveElemento);
}


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

    // Evento para el boton de guardar tarjeta para crear una nueva tarea
    botonGuardar.addEventListener('click', () => {
        const nuevaTarjeta = document.createElement('div');
        nuevaTarjeta.classList.add('tarjeta');

        // Asignar el atributo draggable para poder arrastrarla
        nuevaTarjeta.setAttribute('draggable', 'true');
        nuevaTarjeta.textContent = textareaTarjeta.value;
        
        // Asignar los eventos de arrastre a ESTA nueva tarjeta
        nuevaTarjeta.addEventListener('dragstart', DragStartElemento);
        nuevaTarjeta.addEventListener('dragend', DragEndElemento);

        contenedorTarjetas.appendChild(nuevaTarjeta);

        contenedorNuevaTarjeta.classList.add('hidden');
        botonAgregarTarjeta.classList.remove('hidden');

        // Vaciamos el textarea una vez creada la tarjeta porque si no el texto se queda guardado en el textarea 
        textareaTarjeta.value = '';
    });

    // Evento para el boton de cancelar
    botonCancelar.addEventListener('click', () => {
        contenedorNuevaTarjeta.classList.add('hidden');
        botonAgregarTarjeta.classList.remove('hidden');
    });

});


// FUNCIONES DRAG AND DROP

function DragElemento(evento) {
}

function DropElemento(evento) {
  //this hace referencia al elemento dónde soltamos
  this.append(tarjetaArrastrada);
}

function DragStartElemento(evento) {
  // Guardamos en la variable global cuál es la tarjeta que movemos
  tarjetaArrastrada = this;
  this.classList.add('dragging');
}

function DragLeaveElemento(evento) {
}

function DragEndElemento(evento) {
  this.classList.remove('dragging');
  tarjetaArrastrada = null;
}



// preventDefault se debe poner al menos en los siguientes eventos por ser estos los que permiten que la zona de destino reaccione al arrastre
function DragEnterElemento(evento) {
  evento.preventDefault();
}

function DragOverElemento(evento) {
  evento.preventDefault();
}




