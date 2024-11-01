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
      "cambiar_cerradura-imgEs20230315012353Peq.jpg"
    ),
    new Servicio(
      "Duplicado de llaves",
      "Realizamos duplicados de llaves en el momento.",
      "keys-8877747_640.png"
    ),
    new Servicio(
      "Apertura de puertas de autos",
      "Trabajos con eficiencia.",
      "istockphoto-1137285203-612x612_apertura_de_autos.jpg"
    ),
    new Servicio(
      "Apertura de cajas fuertes",
      "Apertura de cajas fuertes y arreglos.",
      "3306927 caja fuerte.png"
    )
  ];

  const contenedorTarjetas = document.querySelector(".tarjetas-container");
  servicios.forEach(servicio => {
    contenedorTarjetas.appendChild(servicio.crearTarjeta());
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
  const serviciosSection = document.getElementById("servicios");
  document
    .querySelector('nav a[href="#servicios"]')
    .addEventListener("click", e => {
      e.preventDefault();
      serviciosSection.style.display =
        serviciosSection.style.display === "none" ||
        serviciosSection.style.display === ""
          ? "block"
          : "none";
    });

  // Ocultar la sección de servicios inicialmente
  serviciosSection.style.display = "none";
});
