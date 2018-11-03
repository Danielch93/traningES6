// ANCHOR VARIABLES EN CICLOS

/**
 * SECTION Var
 * * En el for del var = i, se mantiene en el scope global por lo tanto
 * * i solo mantiene el valor según el for.
 */

for(var i = 0; i<= 10; i ++ ){

}

console.log(i);

/**
 * SECTION Let
 * * En el for del let = j, j solo existe en el contexto del for, por lo
 * * tanto ayuda a no crear variables de manera innecesaria.
 */

for(let j = 0; j<= 10; j ++ ){}

console.log(j);

