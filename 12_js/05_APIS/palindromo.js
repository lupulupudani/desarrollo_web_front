'use strict'

function palindromo(texto) {
 
    let textoOriginal = texto.toLowerCase()
   
    let letrasEspacios = textoOriginal.split()
   
    let textoSinEspacios = letrasEspacios.join('')
   
    let letras = textoSinEspacios.split("")

    let letrasReves = textoSinEspacios.split("").reverse()
   
    for(let i = letras.length - 1; i > 0; i--) {
        if(letras[i] == letrasReves[i]) {
            console.log("Esto es un palíndromo")
            break
        }
        else {
            console.log("No es un palíndromo")
            break
        }
    }
}   

palindromo("121")