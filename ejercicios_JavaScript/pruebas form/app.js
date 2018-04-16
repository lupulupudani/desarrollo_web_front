(function () {


    function inicio() {
        let domInpUsuario = document.getElementById('usuario').value
        let domInpNombre = document.getElementById("nombre").value
        let domInpApellido = document.getElementById("apellido").value
        let domInpApellido2 = document.getElementById("apellido2").value
        let domInpEmail = document.getElementById("correo").value
        let domInpPassword = document.getElementById("clave1").value
        let domInpPassword2 = document.getElementById("clave2").value
        let formulario = document.getElementById("formulario").value
        let domDivResultados = document.querySelector('#resultado')
        let domBtnEnviar = document.querySelector('#enviar')
        let domBtnBorrar = document.querySelector('#borrar')
        /* let expresion = false; */
    }
    function definirBotones() {
        domBtnEnviar.addEventListener('click', enviar)
        domBtnBorrar.addEventListener('click', borrar)
    }

    function guardarDatos() {
        usuario = inicio.domInpUsuario.value
        nombre = inicio.domInpNombre.value
        apellido = inicio.domInpApellido.value
        apellido2 = inicio.domInpApellido2.value
        email = inicio.domInpEmail.value
        password = inicio.domInpPassword.value
        password2 = inicio.domInpPassword2.value

        inicio()
        definirBotones()
    }

    function verificacionP() {
        if (password != password2) {
            alert("No coinciden las contraseñas ")

        } else if (password == password2 && password.length >= 6 && password2.length >= 6) {
            /* this.expresion = true; */
            return datosGuardados();
        }
    }

    function enviar(ev) {
        ev.preventDefault()
        guardarDatos()
        datosGuardados()
    }

    function borrar() {
        usuario.value = ''
        nombre.value = ''
        apellido.value = ''
        apellido2.value = ''
        email.value = ''
        password.value = ''
        password2.value = ''
    }

    function datosGuardados() {
        let resultadoHTML =
            `<h2>Resultados</h2>
        <ul>
            <li>Usuario: ${usuario}</li>
            <li>Nombre: ${nombre}</li>
            <li>Apellido: ${apellido}</li>
            <li>Segundo Apellido: ${apellido2}</li>
            <li>Email: ${email}</li>
            <li>Password: ${password}</li>
        </ul>
        `
        domDivResultados.innerHTML = resultadoHTML
    }

    window.addEventListener('load', inicio)
})()