//----ASINCRONISMO (PROMISES)----

/* Las siguientes características de ES9 o ES2018 que aprenderás son: método finally para promesas y generadores asíncronos.

 El método finally para promesas consiste en ejecutar código después que una promesa haya sido ejecutada como resuelta o rechazada.
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
    .catch(err => console.error(err))
    .finally(() => console.log('Proceso finalizado!!'));