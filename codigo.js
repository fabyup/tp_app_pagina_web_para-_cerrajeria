// Lista de servicios

document.addEventListener("DOMContentLoaded", () => {
  const listaServicios = document.getElementById("lista-servicios");

  // Servicios instanciados
  const servicios = [
    new Servicios(
      "Apertura de puertas",
      "Servicio rápido y eficiente para abrir cualquier tipo de puerta.",
      "istockphoto-1357874479-612x612.jpg"
    ),
    new Servicios(
      "Cambio de cerraduras",
      "Instalación y cambio de cerraduras para mayor seguridad.",
      "cambiar cerradura-imgEs20230315012353Peq.jpg"
    ),
    new Servicios(
      "Duplicado de llaves",
      "Realizamos duplicados de llaves en el momento.",
      "keys-8877747_640.png"
    ),
    new Servicios(
      "Apertura de puertas de autos",
      "Trabajos con eficiencia.",
      "istockphoto-1137285203-612x612 apertura de autos.jpg"
    ),
    new Servicios(
      "Apertura de cajas fuertes",
      "Apertura de cajas fuertes y arreglos.",
      "3306927 caja fuerte.png"
    )
  ];

  // Rellenar la lista de servicios al cargar la página
  servicios.forEach(servicio => {
    listaServicios.innerHTML += servicio.generarHTML();
  });

  // Manejo del formulario de contacto
  document.getElementById("form-contacto").addEventListener("submit", e => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    alert(
      `¡Gracias, ${nombre}! Nos pondremos en contacto al ${telefono} pronto.`
    );
    document.getElementById("form-contacto").reset();
  });

  // Manejo de la sección de servicios
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

  // Ocultar la sección de servicios inicialmente
  document.getElementById("servicios").style.display = "none";
});
document.addEventListener("DOMContentLoaded", () => {
  const servicios = [
    new ServicioCerrajero(
      "Apertura de puertas",
      "Servicio rápido y eficiente para abrir cualquier tipo de puerta.",
      "istockphoto-1357874479-612x612.jpg"
    ),
    new ServicioCerrajero(
      "Cambio de cerraduras",
      "Instalación y cambio de cerraduras para mayor seguridad.",
      "cuanto-cuesta-cambiar-la-cerradura.jpg"
    ),
    new ServicioCerrajero(
      "Duplicado de llaves",
      "Realizamos duplicados de llaves en el momento.",
      "keys-8877747_640.png"
    ),
    new ServicioCerrajero(
      "Apertura de puertas de autos",
      "Trabajos con eficiencia.",
      "istockphoto-1137285203-612x612 apertura de autos.jpg"
    ),
    new ServicioCerrajero(
      "Apertura de cajas fuertes",
      "Reparación de cajas fuertes.",
      "3306927 caja fuerte.png"
    )
  ];

  const agregarTarjetas = () => {
    const contenedor = document.querySelector(".tarjetas-container");
    servicios.forEach(servicio => {
      contenedor.appendChild(servicio.crearTarjeta());
    });
  };

  agregarTarjetas();
});
