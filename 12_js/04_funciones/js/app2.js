function calcularCuadrado(a) {
    a *= a
    return a
}

//Los parametros Elementales oasan por valor
let a = 5
console.log(calcularCuadrado(a))
console.log((a))

function calcularCubo(params) {
    let r
    r = params.valor = params.valor * params.valor * params.valor
    return r
}

//LOs parametros  REFERENCIA pasan como si fueran por referencia
//Es habitual pasar un clod del objeto
params = { valor: 5 }
params2 = Object.assign({}, params)
//console.log(calcularCubo(JSON.parse(JSON.stringify(params))))

console.log(calcularCubo(params2))
console.log(params)

let oUser = { nombre: 'Pepe', apellido: 'Perez' }
console.log(oUser)

//Transformar un objeto en String JSON
let sUser = JSON.stringify(oUser)
console.log(sUser)
let oUser2 = JSON.parse(sUser)
console.log(oUser2)

