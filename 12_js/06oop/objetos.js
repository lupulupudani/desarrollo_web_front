//let oDatos = new Object() = {}

let libro1 = {
    autor: 'J. R. R. Tolkien',
    titulo: 'El Señor de los Anillos',
    editorial: 'Minotauro',
    fecha: new Date(1954),
    generos: ['Fantasia'],
    mostrarReferencia : function () {
        let ref = this.autor + `. `
        ref + '"'+ this.titulo + '".'
        ref += this.editorial + ', ' + this.fecha.getFullYear() + ', '
        console.log(ref)
    }
}

libro1.mostrarReferencia()

let miFunction = function(){
    console.log('Soy una funcion')
    console.log(this)
}
//miFunction()

let o = {
    head: 'Soy un objeto',
    metodo: miFunction
}
//o.metodo()

//let oNuevoObjeto = new miFunction()