//Variables globales
var nombre, apellidos, email, usuario, clave, clave2, expresion;


function inicio() {

	nombre = document.getElementById("nombre").value;
	apellidos = document.getElementById("apellidos").value;
	apellidos2 = document.getElementById("apellidos2").value;
	email = document.getElementById("email").value;
	usuario = document.getElementById("usuario").value;
	clave = document.getElementById("clave").value;
	clave2 = document.getElementById("clave2").value;
	formulario = document.getElementById("formulario").value;
	mostrar1 = document.getElementById('parrafo_1')
	fecha = document.getElementById('fecha').value
	curso = document.getElementById('curso').value
	asignatura = document.getElementById('asignatura')
	aficion = document.getElementsByClassName('aficion')
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

var fecha=new Date();
function insertar () {
	document.fecha.innerHTML = fecha;
}

function mostrarFinal() {
	if (expresion == false) {
		this.validar();
	}
	else if (this.expresion == true) {
		let f = new Date();

		confirm("Registro Aceptado")

		document.write(`<h2>Los datos introducidos:</h2>
			<ul>
				<li>Nombre: ${this.nombre}</li>
				<li>Primer Apellido: ${this.apellidos}</li>
				<li>Segundo Apellido: ${this.apellidos2}</li>
				<li>Email: ${this.email}</li>
				<li>Usuario: ${this.usuario}</li>
				<li>Tu clave: ${this.clave}</li>
				<li>Fecha de nacimiento: ${this.fecha}</li>
				<li>Curso seleccionado: ${this.curso}</li>
				<li>Asignatura: ${this.asignatura}</li>
				<li>Aficion: ${this.aficion}</li>
			</ul>
			`)		
		document.write("<br>" + "Fecha de registro:" + f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
	}
}

function comodin() {
	return false;
}