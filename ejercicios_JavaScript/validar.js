//Variables globales
var nombre, apellidos, email, usuario, clave, clave2, expresion;


function inicio() {

	nombre = document.getElementById("nombre").value;
	apellidos = document.getElementById("apellidos").value;
	email = document.getElementById("email").value;
	usuario = document.getElementById("usuario").value;
	clave = document.getElementById("clave").value;
	clave2 = document.getElementById("clave2").value;
	formulario = document.getElementById("formulario").value;
	expresion = false;

}

function mostrar() {

	this.inicio();
	this.validar();
}

function validar() {
	if (clave != clave2) {
		alert("No coinciden las contraseñas ")

	} else if (clave == clave2 && clave.length >= 2 && clave2.length >= 2) {
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
			"<tr><td>" + this.nombre + "</td><td>" + this.apellidos + "</td><td>" + this.email + "</td><td>" + this.usuario + "</td><td>" + this.clave
			+ "</td></tr></table>"
		);
		document.write("<br>" + "Fecha de registro:" + f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
	}
}

function comodin() {
	return false;
}