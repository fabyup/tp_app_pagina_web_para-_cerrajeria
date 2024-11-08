import { Servicio } from "./Servicio.js";

document.addEventListener("DOMContentLoaded", () => {
  //* Lista de servicios //*

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
      "3306927 caja fuerte.png"
    )
  ];

  //* Contenedor de tarjetas de servicios *//*

  const contenedorTarjetas = document.getElementById("tarjetas-inner");
  servicios.forEach(servicio => {
    contenedorTarjetas.appendChild(servicio.crearTarjeta());
  });

  //* Manejo del formulario de contacto //*

  document.getElementById("form-contacto").addEventListener("submit", e => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    alert(
      `¡Gracias, ${nombre}! Nos pondremos en contacto al ${telefono} pronto.`
    );
    document.getElementById("form-contacto").reset();
  });
});
