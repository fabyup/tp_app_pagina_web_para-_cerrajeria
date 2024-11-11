import { Servicio } from "./Servicio.js";

//*  cuando se carga el contenido de la página  se ejecuta el evento *//

document.addEventListener("DOMContentLoaded", () => {
  //* Lista de servicios //*

  // *Creamos instancias de la clase Servicio con nombre, descripción e imagen para cada servicio*//

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
      "Apertura  de autos",
      "Trabajos con eficiencia.",
      "istockphoto-1137285203-612x612 apertura de autos.jpg"
    ),
    new Servicio(
      "Apertura de cajas fuertes",
      "Reparación de cajas fuertes.",
      "3306927 caja fuerte copy.png"
    )
  ];

  //* Contenedor de tarjetas de servicios *//

  //* Seleccionamos el contenedor donde se mostrarán las tarjetas de servicios*//

  const contenedorTarjetas = document.getElementById("tarjetas-inner");

  // *Iteramos sobre el array de servicios y creamos cada tarjeta, luego las añadimos al contenedor*//

  servicios.forEach(servicio => {
    contenedorTarjetas.appendChild(servicio.crearTarjeta());
  });

  //* Manejo del formulario de contacto //*

  //* Capturamos el evento de envío del formulario para guardar los datos en LocalStorage*//

  document.getElementById("form-contacto").addEventListener("submit", e => {
    e.preventDefault();

    //* Capturamos los valores de los campos de entrada del formulario*//

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    // *Creamos un objeto con los datos del formulario *//
    const formData = { nombre, telefono, mensaje };

    //* Obtenemos las entradas existentes en LocalStorage o creamos un array vacío*//
    const formEntries = JSON.parse(localStorage.getItem("formEntries")) || [];

    // *Agregamos los nuevos datos al array*//
    formEntries.push(formData);

    // *Guardamos el array actualizado en LocalStorage*//
    localStorage.setItem("formEntries", JSON.stringify(formEntries));

    //* Notificamos al usuario que el formulario se ha enviado correctamente*//
    alert(
      `¡Gracias, ${nombre}! Nos pondremos en contacto al ${telefono} pronto.`
    );

    //* Limpiamos el formulario después de enviar los datos*//

    document.getElementById("form-contacto").reset();
  });

  //* Código para mostrar las entradas guardadas en la página *//
  const displayEntries = () => {
    const savedEntries = JSON.parse(localStorage.getItem("formEntries")) || [];
    const displayArea = document.getElementById("display-area");

    //* Limpiamos el área de visualización para evitar duplicados*//
    displayArea.innerHTML = "";

    // *Mostramos cada entrada guardada*//
    savedEntries.forEach((entry, index) => {
      const entryDiv = document.createElement("div");
      entryDiv.innerHTML = `<p><strong>Nombre:</strong> ${entry.nombre}</p>
                            <p><strong>Teléfono:</strong> ${entry.telefono}</p>
                            <p><strong>Mensaje:</strong> ${entry.mensaje}</p><hr>`;
      displayArea.appendChild(entryDiv);
    });
  };

  // *Llamamos a la función para mostrar las entradas al cargar la página*//
  displayEntries();
});
