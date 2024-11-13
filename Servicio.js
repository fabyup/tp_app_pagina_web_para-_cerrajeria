export class Servicio {
  constructor(nombre, descripcion, imagen) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }

  crearTarjeta() {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const h3 = document.createElement("h3");
    h3.textContent = this.nombre;
    tarjeta.appendChild(h3);

    const img = document.createElement("img");
    img.src = this.imagen;
    img.alt = this.nombre;
    img.classList.add("imagen-cerrajero");
    tarjeta.appendChild(img);

    const p = document.createElement("p");
    p.textContent = this.descripcion;
    tarjeta.appendChild(p);

    return tarjeta;
  }
};