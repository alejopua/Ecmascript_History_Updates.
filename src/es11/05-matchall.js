//matchall
const regex = /\b(hola)+\b/g;

const phrase = 'lorem ipsum hola afehofaela hoafaefla dolor sit amet consectetur adipisicing hola.';

for (const match of phrase.matchAll(regex)) {
    console.log(match);
}