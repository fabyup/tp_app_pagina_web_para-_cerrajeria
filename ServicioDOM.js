// Clase para crear la tarjeta de servicio en el DOM
export class ServicioDOM {
  /**
   * Método estático que crea una tarjeta visual para un servicio.
   * @param {Object} servicio - Un objeto que contiene la información de un servicio (nombre, descripción, imagen).
   * @returns {HTMLElement} - Devuelve un elemento de tipo div que representa una tarjeta de servicio en el DOM.
   */

  static crearTarjeta(servicio) {
    const tarjeta = document.createElement("div");

    tarjeta.classList.add("tarjeta");

    const h3 = document.createElement("h3");

    h3.textContent = servicio.nombre;

    tarjeta.appendChild(h3);

    const img = document.createElement("img");

    img.src = servicio.imagen;

    img.alt = servicio.nombre;

    img.classList.add("imagen-cerrajero");

    tarjeta.appendChild(img);

    const p = document.createElement("p");

    p.textContent = servicio.descripcion;

    tarjeta.appendChild(p);

    return tarjeta;
  }
}
