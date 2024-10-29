// Clase Servicio
class Servicio {
  constructor(nombre, descripcion, imagen) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }

  generarHTML() {
    return `
      <li>
        <img src="${this.imagen}" alt="${this.nombre}" class="imagen-servicio">
        <strong>${this.nombre}</strong>: ${this.descripcion}
      </li>`;
  }
}

const servicios = [
  new Servicio(
    "Apertura de puertas",
    "Servicio rápido y eficiente para abrir cualquier tipo de puerta.",
    "imagenes/istockphoto-1357874479-612x612.jpg"
  ),
  new Servicio(
    "Cambio de cerraduras",
    "Instalación y cambio de cerraduras para mayor seguridad.",
    "imagenes/cambiar cerradura-imgEs20230315012353Peq.jpg"
  ),
  new Servicio(
    "Duplicado de llaves",
    "Realizamos duplicados de llaves en el momento.",
    "imagenes/keys-8877747_640.png"
  ),
  new Servicio(
    "Apertura de puertas de autos",
    "Trabajos con eficiencia.",
    "imagenes/istockphoto-1137285203-612x612 apertura de autos.jpg"
  ),
  new Servicio(
    "Reparación de cajas fuertes",
    "Especialistas en reparación de cajas fuertes.",
    "imagenes/3306927 caja fuerte.png"
  )
];

// Exportar la clase para usarla en otros archivos
