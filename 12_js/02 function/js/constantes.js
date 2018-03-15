'use strict'

// ES6 existen let y cons con ambito {}

function mostrar() {
    const X = 2

    {
        const X = 23
    }
   console.log(X)
}

function calcularCircumferencia(radio) {
    return 2 * Math.PI * radio
}
function mostrarCircumferencia(radio){
    let cir =calcularCircumferencia(radio)
    console.log(`
    La circumferencia de radio ${radio}
    tiene de longitud ${cir}` )
}
const X = 5
mostrar()

mostrarCircumferencia(5)