/*Este método fue publicado en 2019 es10. 
A continuación aprenderás sobre aplanamiento de arrays y eliminar espacios en blanco de un string.

Qué es el aplanamiento de arrays
El aplanamiento consiste en transformar un array de arrays a una sola dimensión.

MÉTODO FLAT
El método flat devuelve un array donde los sub-arrays han sido propagados hasta una profundidad especificada.

Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original.

Este método recibe un argumento:

La profundidad del aplanamiento, por defecto, tiene un valor de 1.
Si se desea aplanar todos los sub-arrays en una sola dimensión, utiliza el valor de Infinity. 


MÉTODO FLAT MAP


*/


//FLAT
const array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log(array);
console.log('Next 1');
console.log(array.flat(1));
console.log('Next 2');
console.log(array.flat(2));
console.log('Next 3');
console.log(array.flat(Infinity));


//FLAT MAP

const strings = ['Hola mundo', 'como estas', 'cambiando en el tiempo'];
const tex = strings.map();
const text = strings.map(string => string.split(' '));
const text2 =strings.flatMap(string => string.split(' '));
console.log(tex);
console.log(text);
console.log(text2);


const array2 = [1, 2, 3, 4, 5];
const textNumber =array2.map(number => [number * 2]);
const textNumber2 =array2.flatMap(number => [number * 2]);
console.log(textNumber);
console.log(textNumber2);


// Cuidado, primero hace el map y luego el flat
const array3 = [1,[2,3], 4, 5];
const textArray3 = array3.flatMap(number => [number *2]);
console.log(textArray3);

// [ 2, NaN, 8, 10 ]
// * Recuerda: NaN = No a Number