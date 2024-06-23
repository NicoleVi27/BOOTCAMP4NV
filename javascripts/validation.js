function validacionCorreoElectronico() {
    // Obtener referencias a los elementos del formulario
    const formulario = document.getElementById('formulario');
    const correo = document.getElementById('correo');
    const correoConfirmar = document.getElementById('correo_confirmar');
    
    // Agregar un evento para cuando se ingrese texto en el campo de confirmación de correo electrónico
    correoConfirmar.addEventListener('input', () => {
        const mensajeError = document.getElementById('mensaje-error-correo');
        
        // Comprobar si los correos electrónicos coinciden
        if (correo.value !== correoConfirmar.value) {
            // Si no coinciden y no hay un mensaje de error, crear y mostrar uno
            if (!mensajeError) {
                const elemento = document.createElement('p');
                const mensaje = document.createTextNode("Los correos electrónicos no coinciden");
                elemento.appendChild(mensaje);
                elemento.id = 'mensaje-error-correo';
                elemento.classList.add('alerta');
                
                const correoConfirmarTd = correoConfirmar.parentElement;
                correoConfirmarTd.appendChild(elemento);
            }
            // Cambiar el color de fondo del campo de confirmación de correo electrónico
            correoConfirmar.style.backgroundColor = 'rgba(230,169,171,.5)';
        } else {
            // Si los correos electrónicos coinciden, eliminar el mensaje de error (si existe) y restablecer el color de fondo
            if (mensajeError) {
                mensajeError.remove();
            }
            correoConfirmar.style.backgroundColor = '';
        }
    });
}

// Ejecutar la función de validación de correo electrónico cuando se cargue la ventana
window.onload = validacionCorreoElectronico;
