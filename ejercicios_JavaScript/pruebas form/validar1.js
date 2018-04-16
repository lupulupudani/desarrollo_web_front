function iniciar(){
    let enviar = document.getElementById('enviar')
    enviar.addEventListener('click', enviarFormulario)

    let usuario = document.getElementById("usuario").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let apellido2 = document.getElementById("apellido2").value;
	let email = document.getElementById("correo").value;
	let clave = document.getElementById("clave1").value;
    let clave2 = document.getElementById("clave2").value;
    let expresion = false;
}

function validar() {
	if (clave != clave2) {
		alert("No coinciden las contraseñas ")

	} else if (clave == clave2 && clave.length >= 6 && clave2.length >= 6) {
		this.expresion = true;
		return true
	}
}

function enviarFormulario(){
    let formulario = document.querySelector('#formulario')
    let valido = formulario.checkValidity()
    if(valido){
        formulario.submit()
        alert("Enviado")
    }else{
        alert("el formulario esta mal")
    }
    validar()
}
window.addEventListener('load', iniciar)