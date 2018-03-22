
function Libro (autor, titulo, editorial, fecha, generos) {
    this.autor=autor,
    this.titulo=titulo,
    this.editorial= editorial,
    this.fecha = fecha,
    this.generos=generos
}

/* Libro()
console.log(autor) */


let libro1 =new Libro(
    'J. R. R. Tolkien',
    'El Señor de los Anillos',
    'Minotauro',
    new Date('1954'),
    ['Fantasia'])

console.log(libro1) 

let libro2 =new Libro('William Gibson', 'Neuroamante', 'Minotauro', new Date('1954'), ['SyFy'])
//Siempre se puede modificar cualquier objeto
libro2.proprietario="Pepe"


console.log(libro2)

console.log(typeof libro1)
console.log(libro2.constructor.name)




