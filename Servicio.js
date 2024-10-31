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
