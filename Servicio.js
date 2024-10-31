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

class ServicioCerrajero {
  constructor(nombre, descripcion, imagen) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }

  crearTarjeta() {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const h2 = document.createElement("h2");
    h2.textContent = this.nombre;
    tarjeta.appendChild(h2);

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
}
