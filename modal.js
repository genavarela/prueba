// Seleccionamos el botón y el modal
const boton = document.querySelector('.mi-boton');
const modal = document.getElementById('mi-boton');

// Agregamos un evento de clic al botón
boton.addEventListener('click', () => {
  modal.style.display = 'block'; // Mostrar el modal
});

// Seleccionamos el botón de cerrar
const botonCerrar = document.getElementById('cerrar');

// Agregamos un evento de clic para cerrar el modal
botonCerrar.addEventListener('click', () => {
  modal.style.display = 'none'; // Ocultar el modal
});
