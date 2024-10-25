// Clase Servicio
class Servicio {
  constructor(nombre, descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;
  }

  generarHTML() {
    return `<li><strong>${this.nombre}</strong>: ${this.descripcion}</li>`;
  }
}

const servicios = [
  new Servicio(
    "Apertura de puertas",
    "Servicio rápido y eficiente para abrir cualquier tipo de puerta."
  ),
  new Servicio(
    "Cambio de cerraduras",
    "Instalación y cambio de cerraduras para mayor seguridad."
  ),
  new Servicio(
    "Duplicado de llaves",
    "Realizamos duplicados de llaves en el momento."
  ),
  new Servicio(
    "Reparación de puertas",
    "Trabajo de calidad para satisfacer tus necesidades."
  ),
  new Servicio("Apertura de puertas de autos", "Trabajos con eficiencia."),
  new Servicio(
    "Reparación de cajas fuertes",
    "Especialistas en reparación de cajas fuertes."
  )

  // Exportar la clase para usarla en otros archivos
];
