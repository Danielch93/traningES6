// ANCHOR FUNCIONES EN CICLO

/**
 * SECTION Var
 * ? Necesitamos que imprima del 0 al 9
 * * usando var es necesario hacer el siguiente proceso.
 */

var funciones = []

for (var i = 0; i < 10; i++) {
    funciones.push(
        (function (valor) {
            return function () {
                console.log("var", valor)
            }
        })(i)
    )
}

funciones.forEach(function (func) {

    func();

});

// !SECTION 

/**
 * SECTION Let
 * ? Necesitamos que imprima del 0 al 9
 * * usando let el código reduce considerablemente.
 */

var funciones = []

for (let j = 0; j < 10; j++) {
    funciones.push(function () { console.log("let", j) })
}

funciones.forEach(function (func) {

    func();

});

// !SECTION 