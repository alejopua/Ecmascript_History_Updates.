//----STRING PADDING----

/* Consiste en rellenar un string por el principio o por el final, con el carácter especificado, repetido hasta que complete la longitud máxima.

Este método recibe dos argumentos:

 *La longitud máxima a rellenar, incluyendo el string inicial.
 *El string para rellenar, por defecto, es un espacio.

 Si la longitud a rellenar es menor que la longitud del string actual, entonces no agregará nada.

 1. Método -> padStart
 Rellena un string con otro string especificado al inicio hasta tener un total de caracteres especificado.

 2. Método padEnd
 Rellena un string con otro string especificado al final hasta tener un total de caracteres especificado. */

const str = 'hello';
console.log(str.padStart(6, '_'));
console.log(str.padEnd(6, '_'));
