$(document).ready(function () {
    $("#registroUsuario").submit(function (event) {
        event.preventDefault();
        /* Obtener un campo */
        let txtNombre = $("#txtNombre").val();
        let txtApellido = $("#txtApellido").val();
        let txtCorreo = $("#txtCorreo").val();
        let genero = $("#genero").val();
        let dateFecNac = $("#dateFecNac").val();

        /* Validar el valor del campo nombre */

        if (txtNombre == "" || txtNombre.length > 50 || txtNombre.length < 2) {
            alert("Colocar su nombre correctamente");
            return false;
        }
        if (txtApellido == "" || txtApellido.length > 80 || txtApellido.length < 2) {
            alert("Colocar su apellido correctamente");
            return false;
        }
        if (txtCorreo == "" || txtCorreo.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null) {
            alert("Colocar su correo correctamente");
            return false;
        }
        if (genero == "") {
            alert("Colocar su Genero correctamente");
            return false;
        }
        if (dateFecNac == "") {
            alert("Colocar su nombre correctamente");
            return false;
        }
        // Solicitar permiso para enviar el formulario
        if (!confirm("¿Seguro que deseas enviar?")) {
            return false; // Caso presiona Cancelar
        }
        alert("El formulario ha sido enviado..");
    })

})