/* MÉTODO ReplaceAll
retorna un nuevo string, reemplazando todos los elementos por otro.

Este método recibe dos argumentos:

 *El patrón a reemplazar, puede ser un string o una expresión regular.
 *El nuevo elemento que sustituye al reemplazado.
Este procedimiento fue creado para solucionar el problema que tenía el método replace, que realizaba la misma función de reemplazar elementos, pero solamente una sola vez por invocación. */

const string = 'JavaScript es tremendo';
const replaceString = string.replace('tremendo', 'genial');
console.log(replaceString); // JavaScript es genial
