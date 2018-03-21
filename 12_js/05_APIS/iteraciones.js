
/* let oDatos = {
    alto: 2,
    ancho: 5,
    largo: 7,
    peso: 4,
    color: 9
}

console.log("Array con for")
for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i];
    console.log(item)
}
console.log("Objeto")
for (const key in oDatos) {
        const element = oDatos[key];  
        console.log(item) 
    }

console.log("aRRAY CON FOR iN")
let sum = 0
for (const i in oDatos) {
        const element = oDatos[i];  
        console.log(item) 
    }
    console.log(sum)

    //ES6
console.log("Objeto for of")
for (const item of aDatos) {
    console.log(item)
}
 */
let aDatos= [2, 5, 7, 4, 9]
aDatos.forEach(item => console.log(item))

//Map crea un proyección del original
let aCuadrados = aDatos.map(item => item*item)
console.log(aCuadrados)

let aPares = aDatos.filter(item => item % 2 === 0 )
console.log(aPares)

cuadrados = (x) => x*x
let aImparesCuadrado = aDatos.filter(item => item % 2 !==0 ).map(item => item*item)
console.log(aImparesCuadrado)

let total = aDatos.reduce((prev, item) => prev += item)
console.log(total)


//aDatos.reduceRight()

//aDatos.every()
//aDatos.some()