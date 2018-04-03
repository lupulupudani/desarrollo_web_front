function palindromo(texto) { 
    texto = texto.toLowerCase()  
    let letrasEspacios = texto.split().join('')
    let letrasReves = letrasEspacios.split("").reverse()
   
    for(i in letrasEspacios ) {
        }
    if(letrasEspacios[i] === letrasReves[i]){
        console.log("Es un palindromo")
    }else{
        console.log("No es un palindromo")
    }
}   

palindromo("La ruta nos aporto otro paso natural")