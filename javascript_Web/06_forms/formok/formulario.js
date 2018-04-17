export class Formulario{
    constructor(){

        document.querySelector('form').addEventListener('submit', this.enviar.bind(this), false)
        this.crearFecha()
    }
    crearFecha(){
        let meses = new Array("", "", "", "", "", "")
        let diasSemana = new Array("", "", "", "", "", "", "")
        let fecha = new Date()

        let fechaString = diasSemana[fecha.getDay()]
        fechaString += ', ' + fecha.getDate()
        fechaString += 'de '
        fechaString += meses[fecha.getMonth()]
        fechaString += 

        diasSemana[fecha.getDay()]
        fecha.getDate()
        meses[fecha.getMonth()]

            document.write(diasSemana[])
            let template = `Hoy es ..
            La fecha dada es`
            document.querySelector('#div_fecha').innerHTML = template
        
    }
    enviar(ev){
        ev.preventDefault()
        this.recogerDatos()
        this.mostrarDatos()
    }



    recogerDatos(){
        this.datos
        document.querySelector('#email').value
        this.datos.curso = this.selectCurso.option[i].textContent
    }
    mostrarDatos(){
        let template =`
        <ul>
            <li>Correo: ${this.datos.email}</li>


        </ul>
        `

        document.querySelector('#resultados').innerHTML = template
    }
}