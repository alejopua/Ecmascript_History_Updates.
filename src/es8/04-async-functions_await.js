//----ASINCRONISMO (ASYNC-AWAIT)----

/*En ES8 fue añadida ASYNC AWAIT.

La función asíncrona se crea mediante la palabra reservada async y retorna una promesa.

 Opción 1 -> async function asyncFunction () {...}
 Opción 2 -> const asyncFunction = async () => { ... } 

La palabra reservada await significa que espera hasta que una promesa sea resuelta y solo funciona dentro de una función asíncrona. Los bloques try / catch sirven para manejar si la promesa ha sido resuelta o rechazada.

*/

/* const datos = [
    {
        id: 1,
        title: 'Iron Man',
        year: 2008
    },
    {
        id: 2,
        title: 'Spiderman',
        year: 2017
    },
    {
        id: 3,
        title: 'Avengers',
        year: 2019
    }
]; */

const datos = []; // Array vació para probar el error

const getDatos = () => {
    return new Promise((resolve, reject) => {
        (datos.length === 0)  // ternary operator
            ? reject(new Error('No existen datos!!'))
            : setTimeout(() => resolve(datos), 2000);
    }) 
};

// async await
const getDatosAsync = async () => {
    try {
        const datos = await getDatos();
        console.log(datos);
    } catch (error) {
        console.error(error.message);
    }
}

getDatosAsync();

