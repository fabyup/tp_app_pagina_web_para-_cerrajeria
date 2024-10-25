// Lista de servicios

const listaServicios = document.getElementById("lista-servicios");

document.getElementById("form-contacto").addEventListener("submit", e => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  alert(
    `¡Gracias, ${nombre}! Nos pondremos en contacto al ${telefono} pronto.`
  );
  document.getElementById("form-contacto").reset();
});

// Mostrar sección de servicios al hacer clic
document.addEventListener("DOMContentLoaded", function() {
  // Rellenar la lista de servicios al cargar la página
  servicios.forEach(servicio => {
    listaServicios.innerHTML += servicio.generarHTML();
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
