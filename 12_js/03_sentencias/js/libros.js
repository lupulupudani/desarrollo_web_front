{
    let libro1 = {
        titulo: 'El Señor de los anillos',
        autor: 'J. R. R. Tolkien',
        editorial: 'Minotauto',
        fecha: 1954,
        generos: ['Fantasia'],
    }
    let libro2 = {
        titulo: 'Neuroamante',
        autor: 'William Gibson',
        editorial: 'Minotauto',
        fecha: 1954,
        primera_edicion: {
            editorial: "Acme",
            fecha: 1980
        },
        generos: ['Fantasia']

    }


    /* console.log(libro1)
    console.log(`El autor es ${libro2.autor}`)
    console.log(typeof libro2.autor)
    console.log(libro2.fecha)
    console.log(typeof libro2.fecha)
    console.log(typeof libro2.generos)
    console.log(libro2.primera_edicion.editorial) */
    for (let key in libro1) {
        console.log(`La clave ${key} vale `, libro1[key])

    }
}

