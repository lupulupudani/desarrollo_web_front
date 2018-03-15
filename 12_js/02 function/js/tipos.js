

//un objeto literal
let user = {
    nombre:'Pepe',
    apellido:'Perez',
    direccion: {
        calle:'',
        ciudad:'',
        c_postal:''
    },
    edad:23,
    isCasado:true
}


console.log(typeof user)

user.cargo = "CEO"
console.log(user)

//Otros tipos de objetos

//Array 


let aDatos = [12, 23, 45, 45, 87]
let aDatosChungo = [12, 'Pepe,', true, null, undefined]
console.log(aDatos)
console.log(aDatos[1])
aDatos[15] = 30

console.log(aDatos)



