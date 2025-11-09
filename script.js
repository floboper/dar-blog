// Espera a que el contenido HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
	// Selecciona el botón y el párrafo donde se mostrará el mensaje
	const boton = document.getElementByID("mostrarMensaje");
	const mensaje = document.getElementByID("mensaje");

	// Añade un evento al botón para mostrar el mensaje al hacer clic
	boton.addEventListener("click", () => {
		mensaje.textContent = "¡Gracias por visitar mi blog!";
		mensaje.style.color = "#0077b6"
		mensaje.style.fontWeight = "bold";
	});
});