function inicio() {
    let enviar = document.getElementById('enviar')
    enviar.addEventListener('click', enviarFormulario)

    let usuario = document.getElementById("usuario").value;
	let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let apellido2 = document.getElementById("apellido2").value;
	let email = document.getElementById("correo").value;	
	let clave = document.getElementById("clave1").value;
	let clave2 = document.getElementById("clave2").value;
/* 	let formulario = document.getElementById("formulario").value; */
	let expresion = false;

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
}

function mostrar() {

	this.inicio();
	this.validar();
}

function validar() {
	if (clave1 != clave2) {
		alert("No coinciden las contraseñas ")

	} else if (clave1 == clave2 && clave1.length >= 6 && clave2.length >= 6) {
		this.expresion = true;
		return mostrarFinal();
	}
}

function mostrarFinal() {
	if (expresion == false) {
		this.validar();
	}
	else if (this.expresion == true) {
		var f = new Date();

		confirm("Registro Aceptado")
		document.write(
			"<table cellpadding='9' cellspacing='0' border='1'>" +
			"<tr><td>Nombre</td><td>Apellido</td><td>Email</td><td>Usuario</td><td>Tu clave</td></tr>" +
			"<tr><td>" + this.usuario + "</td><td>" + this.nombre + "</td><td>" + this.apellido + "</td><td>" + this.apellido2 + "</td><td>" + this.email + "</td><td>" + this.clave
			+ "</td></tr></table>"
		);
		document.write("<br>" + "Fecha de registro:" + f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
	}
}

function comodin() {
	return false;
}
window.addEventListener('load', iniciar)
    
