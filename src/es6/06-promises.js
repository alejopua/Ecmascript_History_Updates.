//----ASINCRONISMO (PROMISES)----

/* En es6 se añadió PROMISES.

Una promesa es una forma de manejar el asincronismo en JavaScript y se representa como un objeto que puede generar un valor único a futuro, que tiene dos estados, o está resuelta o incluye una razón por la cual no ha sido resuelta la solicitud.

Cómo utilizar las promesas
Solamente ten presente que la clase Promise y sus métodos then y catch fueron añadidos en ES6. Esto resuelve un problema del manejo del asincronismo con callbacks, llamado Callback Hell.

El argumento de la clase Promise es una función que recibe dos parámetros:

resolve: cuando la promesa es resuelta.
reject: cuando la promesa es rechazada.
Puedes utilizar cualquier nombre, siempre y cuando sepas su funcionamiento.
*/

const datos = [
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
];

//const datos = []; // Array vació para probar el error

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.length === 0) {
            reject(new Error('No existen datos!!'));
        } else {
            setTimeout(() => {
                resolve(datos);
            }, 2000);
        }
    }) 
};

getDatos()
    .then(datos => console.log(datos))
    .catch(err => console.error(err));


