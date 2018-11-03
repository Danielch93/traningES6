// ANCHOR Segmentos de caracteres - startsWith - endsWith - includes

/**
 * SECTION ES5
 * ? Saber si la primera letra es mayúscula.
 * ? Saber si contiene un carácter.
 */

var saludo = "Hola a todos!"

// * Busca si en el string la posición del 0 al 1 existe un carácter 'H'
console.log(saludo.substr(0, 1) === 'H');
console.log(saludo.substr(0, 1) === 'h');

// * Busca si el carácter 'x' existe en el string
console.log(saludo.indexOf('x')) // ! no es descriptiva la respuesta "-1"

/**
 * * Conclusión: 
 * * 1. Son metodos poco descriptivos.
 * * 2. Son metodos del ES5.
 * * 3. Usan validaciones.
 * * 4. A pesar de hacer lo mismo en el ES6, es recomendable usar los
 * * metodos nuevos ya que por debajo se encuentras optimizados.
 * 
 * ! Evitar su uso y apoyarse el ES6.
 */


/**
 * SECTION ES6
 * ? Saber si la primera letra es mayúscula.
 * ? Saber si contiene un carácter.
 */

var hola = "Hola mundo!"

// * startsWith: Busca si contiene la letra o la palabra al comienzo.
console.log(hola.startsWith('H'));
console.log(hola.startsWith('Hola'));

// * endsWith: Busca si contiene la letra o la palabra al final.
console.log(hola.endsWith('!'));

// * includes: Busca si contiene el carácter en todo el string.
console.log(hola.includes('x'));

// * También se puede pasar un segundo parametro de tipo int para
// * decirle desde que possicion empezar a contar.
console.log(hola.startsWith('mu', 5))
console.log(hola.includes('mu', 5));