// ANCHOR DECLARACIÓN DE CONSTANTES

/**
 * SECTION Constantes
 * 
 * * Se nombras con todo en MAYÚSCULA.
 * 
 * * Deben ser inicializadas en el momento en el
 * * que son definidas.
 * ! No inicializarlas genera error.
 * 
 * * Las constantes no pueden mutar.
 * ! Cambiarlas despues de estar definidas generar
 * ! error.
 * 
 * * 
 * 
 */

const IMPUESTOS_SV = 15.4;

// !SECTION

/**
 * SECTION Re-declaración de constantes
 * * Se permite la re-declaración siempre y cuando
 * * estén es scopes distintos.
 */

const PI = 3.14159;

if (true) {
    const PI = 3.1416;
    console.log(PI);
}

console.log(PI);

// !SECTION

/**
 * SECTION Re-declaración de constantes en JSON
 * * Cuando se cambia el valor y no la llave de un objeto json de tipo
 * * constante, es posible hacer una re-declaración solo sobre el valor.
 * 
 * * Pero si cambio o agrego una llave no sera permitido. 
 */

const PERSONA = {
    nombre: "Daniel",
    edad: 24
}

PERSONA.edad = 18; // * Esto es permitido.

// ! La re-inicialización del objeto no esta permitida y sale error.
// PERSONA = {
//     nombre: "Fabián",
//     edad: 38,
//     sexo: 'M'
// }

console.log(PERSONA);

// !SECTION