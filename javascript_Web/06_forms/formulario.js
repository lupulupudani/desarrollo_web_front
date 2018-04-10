export class Formulario {
    constructor() {

        this.datos = {
            nombre: '',
            apellido: '',
            email: '',
            password: '',
            datos: '',
            isOk: false,
            isOk2: false,
            turno: '',
            curso: {}
        }

        this.accederDom()
        this.definirManejadores()
    }

    accederDom() {
        this.domBtnSaludar = document.querySelector('#btnSaludar')
        this.domBtnEnviar = document.querySelector('#btnEnviar')
        this.domBtnBorrar = document.querySelector('#btnBorrar')

        this.domInpNombre = document.querySelector('#nombre')
        this.domInpApellido = document.querySelector('#apellido')
        this.domInpEmail = document.querySelector('#email')
        this.domInpPassword = document.querySelector('#password')
        
        this.domAreaDatos = document.querySelector('#datos')
        this.domRadioTurno = document.querySelectorAll("[name='turno']")
        //this.domRadioTurno = document.getElementsByName('turno')
        this.domCbxIsOk = document.querySelector('#isOk')
        this.domCbxIsOk2 = document.querySelector('#isOk2')
        this.domSelectCurso = document.querySelector('#curso')
        this.domDivResultados = document.querySelector('#resultado')        
        this.domFildAcademic = document.querySelector('#academic')
    }

    definirManejadores() {
        this.domBtnSaludar.addEventListener('click', this.saludar.bind(this))
        this.domBtnEnviar.addEventListener('click', this.enviar.bind(this))
        this.domBtnBorrar.addEventListener('click', this.borrar.bind(this))
        this.domCbxIsOk.addEventListener('change', this.completar.bind(this))
    }

    saludar() {
        console.log('Hola amigos')
    }

    enviar(ev) {
        ev.preventDefault()
        this.recogerDatos()
        this.presentarDatos()
    }
    borrar() {
    }

    completar (){
        //this.domFildAcademic.disabled = !this.domFildAcademic.disabled
        this.domFildAcademic.classList.toggle('ocultar')
        if (this.domFildAcademic.classList.contains('ocultar')){
            this.domRadioTurno[0].checked =true
            this.domSelectCurso.selectedIndex = 0
        }
    }

    recogerDatos() {
        this.datos.nombre = this.domInpNombre.value
        this.datos.apellido = this.domInpApellido.value
        this.datos.email = this.domInpEmail.value
        this.datos.password = this.domInpPassword.value
        this.datos.datos = this.domAreaDatos.value
        this.datos.turno = this.procesarRadio(this.domRadioTurno)
        this.datos.isOk = this.domCbxIsOk.checked
        this.datos.isOk2 = this.domCbxIsOk2.checked
        this.datos.curso = this.procesarSelect(this.domSelectCurso)
         
    }

    procesarRadio(nodo) {
        let value
        nodo.forEach((item) => {
            if (item.checked) {
                value = item.value
            }
        })
        return value //"mañana" "tarde" "noche"
    }

    procesarSelect (nodo){
        let index = nodo.selectedIndex
        return {
            code: nodo.options[index].value,
            text: nodo.options[index].textContent
        }
        
    }

    presentarDatos(){
        let resultadoHTML = 
        `<h2>Resultados</h2>
        <ul>
            <li>Nombre: ${this.datos.nombre}</li>
            <li>Apellido: ${this.datos.apellido}</li>
            <li>Email: ${this.datos.email}</li>
            <li>Password: ${this.datos.password}</li>
            <li>Datos: ${this.datos.datos}</li>
            <li>Aceptadas condiciones: ${this.datos.isOk ? 'Si' : 'No'}</li>
            <li>Aceptadas condiciones2: ${this.datos.isOk2 ? 'Si' : 'No'}</li>
            <li>Turno: ${this.datos.turno}</li>
            <li>Curso: ${this.datos.curso.text}</li>

        </ul>
        `

        this.domDivResultados.innerHTML = resultadoHTML
    }


    
}

