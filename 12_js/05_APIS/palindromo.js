'use strict'

function palindromo(texto) { 
    let textoOriginal = texto.toLowerCase()  
    let letrasEspacios = texto.split().join('')
    let letrasReves = letrasEspacios.split("").reverse() 

    /*let letrasEspacios = textoOriginal.split()   
    let textoSinEspacios = letrasEspacios.join('')   
    let letras = textoSinEspacios.split("")
    let letrasReves = textoSinEspacios.split("").reverse() */
   
    for(let i in letrasEspacios) {
        if(letrasEspacios[i] === letrasReves[i]) {
            console.log("Esto es un palíndromo")
            break
        }
        else {
            console.log("No es un palíndromo")
            break
        }
    }
}   

palindromo("12123")