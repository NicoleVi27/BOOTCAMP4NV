// Función para validar el correo electrónico
function validacionCorreoElectronico() {
    // Obtener referencias a los elementos del formulario
    const formulario = document.getElementById('formulario');
    const correo = document.getElementById('correo');
    const correoConfirmar = document.getElementById('correo_confirmar');
    const mensajeError = document.getElementById('mensaje-error-correo');

    // Agregar un evento para cuando se ingrese texto en el campo de confirmación de correo electrónico
    correoConfirmar.addEventListener('input', () => {
        // Comprobar si los correos electrónicos coinciden
        if (correo.value !== correoConfirmar.value) {
            // Si no coinciden, mostrar mensaje de error y cambiar color de fondo
            mensajeError.textContent = "Email does not match";
            mensajeError.style.color = '#d14539';  // Aplicar color de texto #d14539
            mensajeError.style.display = 'block';
            correoConfirmar.style.backgroundColor = 'rgba(230, 169, 171, 0.5)';  // Cambiar color de fondo
        } else {
            // Si coinciden, eliminar el mensaje de error y restablecer color de fondo
            mensajeError.style.display = 'none';
            mensajeError.textContent = '';
            correoConfirmar.style.backgroundColor = '';
        }
    });
}

// Ejecutar la función de validación de correo electrónico cuando se cargue la ventana
window.onload = validacionCorreoElectronico;
