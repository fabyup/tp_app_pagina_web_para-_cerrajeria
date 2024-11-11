import { Servicio } from "./Servicio.js";

document.addEventListener("DOMContentLoaded", () => {
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
  const contenedorTarjetas = document.getElementById("tarjetas-inner");
  servicios.forEach(servicio => {
    contenedorTarjetas.appendChild(servicio.crearTarjeta());
  });

  const displayEntries = () => {
    const savedEntries = JSON.parse(localStorage.getItem("formEntries")) || [];
    const displayArea = document.getElementById("display-area");

    displayArea.innerHTML = "";

    savedEntries.forEach((entry, index) => {
      const entryDiv = document.createElement("div");
      entryDiv.innerHTML = `<p><strong>Nombre:</strong> ${entry.nombre}</p>
                            <p><strong>Teléfono:</strong> ${entry.telefono}</p>
                            <p><strong>Mensaje:</strong> ${entry.mensaje}</p><hr>`;
      displayArea.appendChild(entryDiv);
    });
  };

  document.getElementById("form-contacto").addEventListener("submit", e => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre || !telefono || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const formData = {
      nombre,
      telefono,
      mensaje
    };

    const formEntries = JSON.parse(localStorage.getItem("formEntries")) || [];

    formEntries.push(formData);

    localStorage.setItem("formEntries", JSON.stringify(formEntries));

    alert(
      `¡Gracias, ${nombre}! Nos pondremos en contacto al ${telefono} pronto.`
    );

    document.getElementById("form-contacto").reset();

    displayMessages();
  });

  function displayMessages() {
    const messagesDisplay = document.getElementById("messages-display");
    messagesDisplay.innerHTML = ""; // Limpiar el contenedor antes de mostrar

    const savedEntries = JSON.parse(localStorage.getItem("formEntries")) || [];

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
  }

  window.deleteMessage = function(index) {
    let formEntries = JSON.parse(localStorage.getItem("formEntries"));

    formEntries.splice(index, 1);

    localStorage.setItem("formEntries", JSON.stringify(formEntries));

    displayMessages();
  };

  displayMessages();
});
