// Importa la clase "Servicio" desde otro archivo JavaScript

import { Servicio } from "./Servicio.js";

// Espera a que el DOM se cargue completamente antes de ejecutar el código

document.addEventListener("DOMContentLoaded", () => {
  /**
   * Lista de servicios predefinidos.
   * @type {Array} - Array de objetos de la clase Servicio.
   */
  const servicios = [
    new Servicio(
      "Apertura de puertas",
      "Servicio rápido y eficiente para abrir cualquier tipo de puerta.",
      "istockphoto-1357874479-612x612.jpg"
    ),
    new Servicio(
      "Cambio de cerraduras",
      "Instalación y cambio de cerraduras para mayor seguridad.",
      "cuanto-cuesta-cambiar-la-cerradura.jpg"
    ),
    new Servicio(
      "Duplicado de llaves",
      "Realizamos duplicados de llaves en el acto.",
      "keys-8877747_640.png"
    ),
    new Servicio(
      "Apertura de autos",
      "Trabajos con eficiencia.",
      "istockphoto-1137285203-612x612 apertura de autos.jpg"
    ),
    new Servicio(
      "Apertura de cajas fuertes",
      "Reparación de cajas fuertes.",
      "3306927 caja fuerte copy.png"
    )
  ];

  // Selecciona el contenedor donde estarán las tarjetas del carrusel
  const carouselCards = document.getElementById("carousel-cards");
  let indiceActual = 0;

  // Llena el carrusel con tarjetas de servicios
  servicios.forEach(servicio => {
    // Crea una tarjeta HTML usando el método 'crearTarjeta' de la clase Servicio
    const card = servicio.crearTarjeta();

    // Agrega una clase CSS para darle estilo a la tarjeta
    card.classList.add("carousel-card");

    // Añade la tarjeta al carrusel
    carouselCards.appendChild(card);
  });

  // Función para actualizar la posición del carrusel
  function actualizarCarrusel() {
    const anchoTarjeta = document.querySelector(".carousel-card").offsetWidth;
    carouselCards.style.transform = `translateX(-${indiceActual *
      anchoTarjeta}px)`;
  }

  // Función para mostrar la tarjeta anterior
  window.slideAnterior = function() {
    if (indiceActual > 0) {
      indiceActual--;
      actualizarCarrusel();
    }
  };

  // Función para mostrar la tarjeta siguiente
  window.slideSiguiente = function() {
    if (indiceActual < servicios.length - 1) {
      indiceActual++;
      actualizarCarrusel();
    }
  };

  // Evento para ajustar el carrusel en caso de cambio de tamaño de la ventana
  window.addEventListener("resize", actualizarCarrusel);

  /**
   * Función para mostrar los mensajes de contacto almacenados en LocalStorage.
   * Muestra cada mensaje en el área de visualización de mensajes en el DOM.
   */
  const displayMessages = () => {
    const messagesDisplay = document.getElementById("messages-display");
    messagesDisplay.innerHTML = ""; // Limpia el contenedor de mensajes antes de mostrar

    // Recupera las entradas guardadas en LocalStorage o inicializa un array vacío si no existen
    const savedEntries = JSON.parse(localStorage.getItem("formEntries")) || [];

    // Itera sobre cada mensaje y lo agrega al contenedor de visualización
    savedEntries.forEach((entry, index) => {
      const entryDiv = document.createElement("div");
      entryDiv.classList.add("message-entry");

      entryDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${entry.nombre}</p>
        <p><strong>Teléfono:</strong> ${entry.telefono}</p>
        <p><strong>Mensaje:</strong> ${entry.mensaje}</p>
        <button onclick="deleteMessage(${index})">Eliminar</button>
        <hr>
      `;

      messagesDisplay.appendChild(entryDiv);
    });
  };

  /**
   * Escucha el envío del formulario de contacto, guarda los datos en LocalStorage y actualiza la visualización.
   * Validación previa de campos obligatorios y prevención de recarga de página.
   */
  document.getElementById("form-contacto").addEventListener("submit", e => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario

    // Captura de los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    // Validación para asegurar que todos los campos están completos
    if (!nombre || !telefono || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Crea un objeto que contiene los datos del formulario
    const formData = {
      nombre,
      telefono,
      mensaje
    };

    // Recupera las entradas existentes en LocalStorage o inicializa un array vacío si no existen
    const formEntries = JSON.parse(localStorage.getItem("formEntries")) || [];

    // Añade la nueva entrada al array de entradas
    formEntries.push(formData);

    // Guarda el array actualizado en LocalStorage
    localStorage.setItem("formEntries", JSON.stringify(formEntries));

    // Muestra una alerta de confirmación al usuario
    alert(
      `¡Gracias, ${nombre}! Nos pondremos en contacto al ${telefono} pronto.`
    );

    // Limpia los campos del formulario
    document.getElementById("form-contacto").reset();

    // Llama a displayMessages para actualizar la visualización con el nuevo mensaje
    displayMessages();
  });

  /**
   * Función para eliminar un mensaje de contacto específico tanto de LocalStorage como del DOM.
   * @param {number} index - Índice del mensaje en el array de LocalStorage.
   */
  window.deleteMessage = function(index) {
    let formEntries = JSON.parse(localStorage.getItem("formEntries")) || [];

    // Elimina la entrada especificada por el índice en el array
    formEntries.splice(index, 1);

    // Actualiza LocalStorage con el array modificado
    localStorage.setItem("formEntries", JSON.stringify(formEntries));

    // Llama a displayMessages para actualizar la visualización después de la eliminación
    displayMessages();
  };

  // Llama a displayMessages al cargar la página para mostrar mensajes guardados
  displayMessages();
});

/**
 * Función para mostrar los mensajes si se ingresa la contraseña correcta.
 * Cambia "contraseñaSegura" por la contraseña que prefieras.
 */
function mostrarMensajes() {
  const password = document.getElementById("password").value;

  if (password === "hola") {
    // Cambia "contraseñaSegura" por la contraseña deseada
    document.getElementById("messages-display").style.display = "block";
    displayMessages();
  } else {
    alert("Contraseña incorrecta");
  }
}
window.mostrarMensajes = mostrarMensajes;
