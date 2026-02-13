function validarFormulario() {
    const form = document.getElementById('form-contacto');

    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');

    if (nombre.value.trim() === "") {
        alert("Ingrese su nombre.");
        nombre.focus();
        return false;
    }

    if (correo.value.trim() === "") {
        alert("Ingrese su correo.");
        correo.focus();
        return false;
    }

    if (asunto.value === "") {
        alert("Seleccione un asunto.");
        asunto.focus();
        return false;
    }

    if (mensaje.value.trim() === "") {
        alert("Escriba su mensaje.");
        mensaje.focus();
        return false;
    }

    // Validación básica de correo
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo.value)) {
        alert("Ingrese un correo electrónico válido.");
        correo.focus();
        return false;
    }

    alert("¡Formulario enviado con éxito! Gracias por contactarnos.");
    form.reset();
    return false;
}
