// * ANCHOR VAR VS. LET

/**
 * SECTION Var
 * * Permite la creación sin inicialización.
 * ! Genera undefined, NO RECOMENDADO!
 */

var mensaje0;
console.log(mensaje0);

// !SECTION 

/**
 * SECTION Let
 * * Obliga la creación de una variable antes de ser usada.
 */

let mensaje = "Hola mundo";
console.log(mensaje);

// !SECTION 

/**
 * SECTION Scope
 * * Global: si no se encuentra dentro de una función.
 * * Bloque: si esta dentro de una función.
 */

let mensaje2 = "Hola mundo 2"; // * Scope global

if (1 === 1) {
    mensaje2 = "nuevo mensaje 2"; // * Se altera la variable global
    let mensaje3 = "nuevo mensaje 3"; // * Scope de bloque
}

console.log(mensaje2) // * Imprime la variable global
console.log(mensaje3) // ! Error ya que solo existe "mensaje3" en 
                          // ! el scope de la función.

// !SECTION