export class Servicio {
  #nombre;
  #descripcion;
  #imagen;

  constructor(nombre, descripcion, imagen) {
    this.#nombre = nombre;
    this.#descripcion = descripcion;
    this.#imagen = imagen;
  }

  // Métodos getter para acceder a las propiedades privadas
  get nombre() {
    return this.#nombre;
  }

  get descripcion() {
    return this.#descripcion;
  }

  get imagen() {
    return this.#imagen;
  }
}