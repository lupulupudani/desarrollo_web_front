
class Formulario {
    constructor() {
        this.datos = {
            usuario: '',
            nombre: '',
            apellido: '',
            apellido2: '', 
            email: '',
            password: '',
            password2: ''
        }
        this.expresion = false
        this.accesoDom()   
        this.manejadores()
    }

    accesoDom(){
        this.domFormulario = document.querySelector('#formulario')
        this.domUsuario = document.getElementById('usuario')
        this.domNombre = document.getElementById('nombre')
        this.domApellido = document.getElementById('apellido')
        this.domApellido2 = document.getElementById('apellido2')
        this.domEmail = document.getElementById('correo')
        this.domPassword = document.getElementById('clave1')
        this.domPassword2 = document.getElementById('clave2')
        this.domResultado = document.getElementById('resultado')
        /* this.domEnviar = document.getElementById('enviar')
        this.domBorrar = document.getElementById('borrar') */
    }
    
    manejadores(){
        this.domFormulario.addEventListener('submit', this.enviar.bind(this))
        /* this.domEnviar.addEventListener('click', this.enviar.bind(this)) */
        this.domBorrar.addEventListener('click', this.borrar.bind(this))
    }

    enviar(ev) {
        ev.preventDefault()
        this.validarClave()       
        this.guardarDatos()
        this.presentarDatos()       
    }

    borrar () {
        document.getElementById("formulario").reset()
    }
    
    validarClave(){
        let aviso
        if (this.domPassword.value !== this.domPassword2.value) {
            aviso = "La clave no coincide"
            return false
            this.domPassword2.setCustomValidity(aviso)
        }else {
            this.expresion = true;
        }       
    }

    
    guardarDatos(){
        this.datos.usuario = this.domUsuario.value
        this.datos.nombre = this.domNombre.value
        this.datos.apellido = this.domApellido.value
        this.datos.apellido2 = this.domApellido2.value
        this.datos.enail = this.domEnviar.value
        this.datos.password = this.domPassword.value
        this.datos.password2 = this.domPassword2.value
    }

    presentarDatos(){
        let resultadoHTML =
        `<h2>Datos guardados:</h2>
        <ul>
            <li>Usuario: ${this.datos.usuario}</li>
            <li>Nombre: ${this.datos.nombre}</li>
            <li>Apellido: ${this.datos.apellido}</li>
            <li>Apellido2: ${this.datos.apellido2}</li>
            <li>e-Mail: ${this.datos.email}</li>
            <li>Password: ${this.datos.password}</li>
            <li>Password2: ${this.datos.password2}</li>
        </ul>
        `
        this.domResultado.innerHTML = resultadoHTML
    }
}