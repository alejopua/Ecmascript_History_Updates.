/* Promise.any() es otra forma de manejar varias promesas, que retornará la primera promesa que sea resuelta y rebotará si todas las promesas son rechazadas. */

// const promise1 = new Promise( (resolve, reject) => reject('Reject promise 1'));
// const promise2 = new Promise( (resolve) => resolve('Resolve promise 2'));
// const promise3 = new Promise( (resolve) => resolve('Resolve promise 3'));

const promise1 = new Promise( (resolve, reject) => reject('Reject promise 1'));
const promise2 = new Promise( (resolve, reject) => reject('Reject promise 2'));
const promise3 = new Promise( (resolve, reject) => reject('Reject promise 3'));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response))
    .catch(error => console.error(error));
