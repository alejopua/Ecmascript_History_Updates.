//promise allsettled
const promise1 = new Promise( (resolve, reject) => reject('promise1'));
const promise2 = new Promise( (resolve) => resolve('promise2'));
const promise3 = new Promise( (resolve) => resolve('promise3'));

Promise.allSettled([promise1, promise2, promise3])
    .then( response => console.log(response));
