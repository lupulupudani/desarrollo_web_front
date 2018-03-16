function verificarNumero(numero) {
    let cadena = ''
    if (Number(numero)) {
        if (numero % 2 === 0) {
            cadena += 'es par'
        } else {
            cadena += 'es impar'
        }

    } else {
        cadena += 'Esto no es numero';
    }
    console.log(cadena)
}

verificarNumero(2)
verificarNumero('a')
verificarNumero(73)

/*Funccion que comprueba si el argumento el par o impar
devolviendo 0, 1, o -1 si el argumento no es un numero*/
function calcPar(n) {
    return isNaN(n / 2) ? -1 : n % 2
}

function calcularPar(n){
    let r = 0
    if (isNaN(n/2)) {
        r = -1
    }else if (parseInt(n) != parseFloat(n)) {
        r = -3
    }else {
        r = n%2
    }
    return r
}

function mostrarEsPar(n) {
    const aMensajes = [
        `El numero ${n} es PAR`,
        `El numero ${n} es IMPAR`,
        `El dato ${n} no es un numero`,
        `El numero ${n} es decimal`];
    //r puede valer 0, 1, -1
    let r = calcularPar(n)
    if (r > 0) { r = -r}
    
    //r = (r === -1) ? 2 : r;
    //si r es -1, lo convierto en 2
    if (r === -1) { r = 2 }
    if (r === -2) { r = 3}
    console.log(aMensajes[r])
}


/* calcularPar(6)
mostrarEsPar(111)
mostrarEsPar('pepe') */


function mostrarEsParCasos(n){
     //r puede valer 0, 1, -2, -3
    let r = calcularPar(n) 
    let mensaje 
    switch (r) {
        case 0:
        mensaje =`El numero ${n} es PAR`
        break
        case 1:
        mensaje =`El numero ${n} es IMPAR`
        break
        case -2:
        mensaje =`El dato ${n} no es un numero`
        break
        case -3:
        mensaje =`El numero ${n} es decimal`
        break
    }
    console.log(mensaje)
}


mostrarEsParCasos('Pepe')
mostrarEsParCasos(12)
mostrarEsParCasos(111)
mostrarEsParCasos(12.5)