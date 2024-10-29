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

document.addEventListener("DOMContentLoaded", function() {
  // Rellenar la lista de servicios al cargar la página
  servicios.forEach(servicio => {
    listaServicios.generarHTML += servicio.generarHTML();
  });

  document
    .querySelector('nav a[href="#servicios"]')
    .addEventListener("click", function(e) {
      e.preventDefault();
      const serviciosSection = document.getElementById("servicios");

      serviciosSection.style.display =
        serviciosSection.style.display === "none" ||
        serviciosSection.style.display === ""
          ? "block"
          : "none";
    });

  document.getElementById("servicios").style.display = "none";
});
