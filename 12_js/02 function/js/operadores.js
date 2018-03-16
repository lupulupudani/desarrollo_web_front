let x = 25 //Expresion de asignacion

console.log(x) //Instruccion ->side effect

x++  //x = x+1
console.log(x)

x--  //x = x-1
console.log(x)

// let z = ++x
//Operadores aritmeticos
x = 27

y = parseInt(x/5) //5 division entera
console.log(y)
let r =x % 5 //2 division con resto
console.log(r)

y = x/5
console.log(y)


//Operadores de asignación aritmetica

x=12
x += 4 //x=x+4 //16
console.log(x) 

//Operadores relacionales
x=12
y='12'
console.log(x==y)
console.log(x!=y)

console.log(x===y)
console.log(x!==y)


if(x===12) {
    console.log("Estoy dentro del if")
}

console.log(!!x)

x='abc'
y='def'

console.log(x < y)

console.log(x.lenght === y.lenght)

//operador ternario(manera condensada de escribir un if)
// expresion ? true : false

let edad = 32
console.log(edad > 30 ? 'Buenos dias' : 'Hola chaval')



let a = 12
let b = 2
let c = 4

if(a<b && a<z) {
    console.log("Comprobado")
}
{
  let a = {valor : 5}
if(a.valor === 5){
    console.log('comprobado el 5')
}  
}
