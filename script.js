const columnas = document.querySelectorAll('.columna');

// Variable global para guardar la tarjeta que se está moviendo
let tarjetaArrastrada = null; 

const contenedoresVacios = document.querySelectorAll('.contenedorTarjetas');

// Asignamos los eventos a las columnas
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
        
        // Asignar los eventos de arrastre a esta nueva tarjeta
        nuevaTarjeta.addEventListener('dragstart', DragStartElemento);
        nuevaTarjeta.addEventListener('dragend', DragEndElemento);

        // Creamos un párrafo 
        const parrafoTexto = document.createElement('p');
        
        // Le metemos el texto que escribió el usuario
        parrafoTexto.innerText = textareaTarjeta.value;
        
        // Metemos el párrafo DENTRO de la tarjeta
        nuevaTarjeta.appendChild(parrafoTexto);

        // Vaciamos el textarea una vez creada la tarjeta porque si no el texto se queda guardado en el textarea 
        textareaTarjeta.value = '';

        // Creamos el boton de eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.classList.add('botonEliminar');

        botonEliminar.innerHTML = '<i class="bx bx-x"></i>';
        
        // Asignamos el evento de eliminar
        botonEliminar.addEventListener('click', () => {
          nuevaTarjeta.remove();
        });

        nuevaTarjeta.appendChild(botonEliminar);

        // Metemos la nueva tarjeta dentro del contenedor
        contenedorTarjetas.appendChild(nuevaTarjeta);

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

/**
 * Función que se llama cuando se suelta una tarjeta en un contenedor.
 * El parámetro evento es el evento que se pasa a la función.
 * La función agrega la tarjeta que se está moviendo al contenedor en el que se suelta.
 * La variable global tarjetaArrastrada se utiliza para guardar la tarjeta que se está moviendo.
 * La función no devuelve nada.
 */
function DropElemento(evento) {
  //this hace referencia al elemento dónde soltamos
  this.append(tarjetaArrastrada);
}

/**
 * Función que se llama cuando se empieza a arrastrar una tarjeta.
 * Guarda en la variable global tarjetaArrastrada la tarjeta que se está moviendo.
 * Agrega la clase 'dragging' al elemento que se está moviendo.
 * La función no devuelve nada.
 * @param {Event} evento - Evento que se pasa a la función.
 */
function DragStartElemento(evento) {
  // Guardamos en la variable global cuál es la tarjeta que movemos
  tarjetaArrastrada = this;
  this.classList.add('dragging');
}

function DragLeaveElemento(evento) {
}

/**
 * Función que se llama cuando se acaba de arrastrar una tarjeta.
 * Elimina la clase 'dragging' del elemento que se está moviendo.
 * Asigna null a la variable global tarjetaArrastrada.
 * La función no devuelve nada.
 * @param {Event} evento - Evento que se pasa a la función.
 */
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
