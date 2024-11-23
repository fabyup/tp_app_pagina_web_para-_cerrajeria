export class Servicio {
  #nombre;
  #imagen;
  #descripcion;

  constructor(nombre, descripcion, imagen) {
    this.#nombre = nombre;
    this.#imagen = imagen;
    this.#descripcion = descripcion;
  }

  // Métodos getter para acceder a las propiedades privadas
  get nombre() {
    return this.#nombre;
  }

  get imagen() {
    return this.#imagen;
  }

  get descripcion() {
    return this.#descripcion;
  }
}