// * ANCHOR RE-DECLARACIÓN

/**
 * SECTION Var
 * * Permite la re-declaración de una variable.
 * ! volver a definir una variable con mismo nombre, NO RECOMENDADO.
 * ! re-declarar una variable, NO RECOMENDADO
 */

var mensaje = "1";
var mensaje = "1 2";
var mensaje = "1 2 3";
var mensaje = " Hola mundo";

console.log(mensaje);

// !SECTION

/**
 * SECTION Let
 * * No permite la re-declaración de una variable
 */

let mensaje0 = "1";
//let mensaje0 = "2"; // ! Da error por la duplicación de la variable

console.log(mensaje0);

/**
 * SECTION Re-declaración en diferente Scope
 * * Se permite la re-declaración ya que cada variable let pertenece
 * * a un scope distinto; cada variable es independiente y solo existen
 * * en su scope original.
 */

let texto = "Soy el texto 1";

if (true) {
    let texto = "Soy el texto 2";
    console.log(texto);
}

console.log(texto)

// !SECTION

// !SECTION