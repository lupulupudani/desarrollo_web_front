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
	mostrar = document.getElementById('parrafo_1')
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

//cargar los cursos
function cargarCursos(cargarAsignaturas){
	var array = ["Programador Web", "Programador Sistemas", "Programador Objetos", "Programador SQL"]
	array.sort()
	addOptions("curso", array)
}
//agregar opcion a un select
function addOptions(domElement, array){
	var selector = document.getElementsByName(domElement)[0]
	for(curso in array){
		var opcion = document.createElement("option")
		opcion.text = array[curso]
		opcion.value = array[curso].toLowerCase()
		selector.add(opcion);
	}
}
//cargar las asignaturas
function cargarAsignaturas(){
	let cursos = document.getElementById('curso')
	let asignaturas = document.getElementById('asignatura')
	let cursoSeleccionado = cursos.value
	
	let listAsignaturas = {
		web: ["HTML5", "CSS3", "JavaScript", "SQL"],
		sistemas: ["Dreamweaver", "Visual Studio Code", "Bloc Note"],
		objetos: ["php", "hibernate", "spring", "Java"],
		sql: ["sql", "mango"]
	}
	
	asignaturas.innerHTML = '<option value="cargarAsignaturas()">Seleccione una Asignatura...</option>'
	

	if(cursoSeleccionado !== ""){
		cursoSeleccionado = listAsignaturas[cursoSeleccionado]
		cursoSeleccionado.sort()

		cursoSeleccionado.forEach(asignatura => {
			let opcion = document.createElement('option')
			opcion.value = asignatura
			opcion.text = asignatura
			asignaturas.add(opcion)
		});
		
	}
	
}
cargarCursos()

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
			</ul>
			`)		
		document.write("<br>" + "Fecha de registro:" + f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
	}
}

function comodin() {
	return false;
}