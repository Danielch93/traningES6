// ANCHOR REPETICIÓN DE STRINGS - REPEAT

/**
 * SECTION Repeat
 * * Se usa para repetir un string el numero de veces que se desee.
 */

let texto = "Hola"

console.log(texto.repeat(3)) // HolaHolaHola

/**
 * SECTION Ejemplo
 * ? Se necesita formatear varios nombres y teléfonos en forma de una tabla.
 * 
 * * Daniel     |11223344
 * * Jaime      |55667788
 * * Manuel     |99001122
 */

const ESPACIO = 12

let nombres = ['Daniel', 'Jaime', 'Manuel']
let telefonos = ['11223344', '55667788', '99001122']

for(i in nombres){
    let diferencia = ESPACIO - nombres[i].length
    console.log(`${nombres[i]}${' '.repeat(diferencia)} | ${telefonos[i]}`)
}