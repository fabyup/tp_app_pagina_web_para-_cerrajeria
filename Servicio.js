import { Servicio } from "./Servicio.js"; // Asegúrate de que la ruta sea correcta

export class Servicio {
  constructor(nombre, descripcion, imagen) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }

  generarHTML() {
    return `
      <li class="tarjeta">
        <h3>${this.nombre}</h3>
        <img src="${this.imagen}" alt="${this.nombre}" class="imagen-cerrajero">
        <p>${this.descripcion}</p>
      </li>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const listaServicios = document.getElementById("lista-servicios");

  // Aquí, instanciamos los servicios
  const servicios = [
    new Servicio(
      "Apertura de puertas",
      "Servicio rápido y eficiente para abrir cualquier tipo de puerta.",
      "istockphoto-1357874479-612x612.jpg"
    ),
    new Servicio(
      "Cambio de cerraduras",
      "Instalación y cambio de cerraduras para mayor seguridad.",
      "cambiar cerradura-imgEs20230315012353Peq.jpg"
    ),
    new Servicio(
      "Duplicado de llaves",
      "Realizamos duplicados de llaves en el momento.",
      "keys-8877747_640.png"
    ),
    new Servicio(
      "Apertura de puertas de autos",
      "Trabajos con eficiencia.",
      "istockphoto-1137285203-612x612 apertura de autos.jpg"
    ),
    new Servicio(
      "Apertura de cajas fuertes",
      "Apertura de cajas fuertes y arreglos.",
      "3306927 caja fuerte.png"
    )
  ];

  // Generar y añadir las tarjetas al contenedor
  servicios.forEach(servicio => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    tarjeta.innerHTML = servicio.generarHTML();
    listaServicios.appendChild(tarjeta);
  });
});
