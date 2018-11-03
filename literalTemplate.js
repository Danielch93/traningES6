// ANCHOR LITERAL TEMPLATE
console.log('hola')
/**
 * SECTION ES5
 * ? Imprimir el nombre y el apellido del usuario.
 */

var nombre = "Sebastián"
var apellido = "Herrera"
var nombreCompleto = "Sebastián Herrera"

console.log("El nombre del usuario es:" + " " + nombre + " " + apellido)
console.log("El nombre del usuario es: " + nombreCompleto)

// !SECTION 

/**
 * SECTION ES6
 * * Usando Template Literal
 */

var nombre = "Sebastián"
var apellido = "Herrera"

// * Para Strings
console.log(`El nombre del usuario es: ${nombre} ${apellido}`)

// * funciones
function usuario() {
    return "Andrés Pérez"
}

console.log(`El nombre del usuario es: ${usuario()}`)

// * Operaciones
console.log(`El valor de la operación es: ${(1 + 2 + 3) * 4}`)

/**
 * SECTION Etiquetas
 * * Se usan para procesar los template literal antes de ser ejecutados
 */

function etiqueta(literales, ...variables) {
    console.log(literales)
    console.log(variables)

    let mensaje = ""

    for (let i = 0; i < variables.length; i++){

        mensaje += literales[i]
        mensaje += variables[i] + 10

    }

        return mensaje

}

let unidades = 5
let precioUnidad = 100
let mensaje = etiqueta`${unidades} dulces le cuestan ${unidades * precioUnidad} pesos`

console.log(mensaje)

// * Si queremos usar caracteres especiales o no

let mensaje1 = "hola. \ncomo estas?" 
// * Entiende los caracteres especiales
console.log(mensaje1)

let mensaje2 = String.raw`muy bien \ngracias!`
// * Usa tal cual como se escribe, no entiende caracteres especiales
console.log(mensaje2)

// !SECTION  

// !SECTION 