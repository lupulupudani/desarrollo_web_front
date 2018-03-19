//Invocación de la función
mostrar('Pepe')

//Declaración de la función
//Hiting de funciones
function mostrar (n) {
    console.log(`Me han pasado ${n}`)
}


/* //creados por el constructor Function
var suma = new Function("a", "b", "returna+b")
var x = new Object()
var aDatos = new Array */

//Function === Object
//Function anónima
//Ásignación de la función a una variable
let mostrarVariable = function (n) {
    console.log(`Me han pasado ${n}`)
}
//Invocación de la función
mostrarVariable('Juan')