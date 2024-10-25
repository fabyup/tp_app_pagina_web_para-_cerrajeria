import Servicio from "./Servicio.js";

// Lista de servicios
const servicios = [
  new Servicio(
    "Apertura de Puertas",
    "Abrimos puertas sin dañar la cerradura.",
    1500
  ),
  new Servicio(
    "Cambio de Cerraduras",
    "Reemplazamos cerraduras con eficiencia y seguridad.",
    2500
  ),
  new Servicio("Copia de Llaves", "Copias de llaves al instante.", 500),
  new Servicio(
    "Instalación de Cerraduras",
    "Instalamos cerraduras de alta seguridad.",
    3000
  ),
  new Servicio(
    "Reparación de Cerraduras",
    "Reparamos cerraduras dañadas para su uso seguro.",
    2000
  ),
  new Servicio(
    "Asesoría en Seguridad",
    "Consultoría para mejorar la seguridad de su hogar o negocio.",
    1000
  ),
  new Servicio(
    "Apertura de Vehículos",
    "Apertura de vehículos sin daños.",
    1800
  )
];

// Mostrar servicios en la página (inicialmente ocultos)
const listaServicios = document.getElementById("lista-servicios");

// Manejador de envío del formulario
document.getElementById("form-contacto").addEventListener("submit", e => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;
  alert(
    `¡Gracias, ${nombre}! Nos pondremos en contacto al ${telefono} pronto.`
  );
  document.getElementById("form-contacto").reset();
});

// Mostrar sección de servicios al hacer clic
document.addEventListener("DOMContentLoaded", function() {
  // Rellenar la lista de servicios al cargar la página
  servicios.forEach(servicio => {
    listaServicios.innerHTML += servicio.mostrarServicio();
  });

  document
    .querySelector('nav a[href="#servicios"]')
    .addEventListener("click", function(e) {
      e.preventDefault(); // Evitar el comportamiento por defecto del enlace
      const serviciosSection = document.getElementById("servicios");

      // Alternar la visibilidad de la sección de servicios
      serviciosSection.style.display =
        serviciosSection.style.display === "none" ||
        serviciosSection.style.display === ""
          ? "block"
          : "none";
    });

  // Asegúrate de que la sección de servicios esté oculta inicialmente
  document.getElementById("servicios").style.display = "none";
});
