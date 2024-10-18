// Importar la clase Servicio desde el archivo Servicio.js
import Servicio from './Servicio.js';

// Lista de servicios
const servicios = [
  new Servicio("Apertura de Puertas", "Abrimos puertas sin dañar la cerradura.", 1500),
  new Servicio("Cambio de Cerraduras", "Reemplazamos cerraduras con eficiencia y seguridad.", 2500),
  new Servicio("Copia de Llaves", "Copias de llaves al instante.", 500),
];

// Mostrar servicios en la página
const listaServicios = document.getElementById("lista-servicios");
servicios.forEach(servicio => {
  listaServicios.innerHTML += servicio.mostrarServicio();
});

// Manejador de envío del formulario
document.getElementById("form-contacto").addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;

  alert(`¡Gracias, ${nombre}! Nos pondremos en contacto al ${telefono} pronto.`);
  document.getElementById("form-contacto").reset();
});
