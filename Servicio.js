// Clase Servicio
class Servicio {
  constructor(nombre, descripcion, precio) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  }

  mostrarServicio() {
    return `
            <div class="servicio">
                <h3>${this.nombre}</h3>
                <p>${this.descripcion}</p>
                <p><strong>Precio:</strong> $${this.precio}</p>
            </div>
        `;
  }
}

// Exportar la clase para usarla en otros archivos
export default Servicio;
