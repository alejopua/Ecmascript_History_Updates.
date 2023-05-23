//Opcional chaining
const user = {
    diana: {
        age: 25,
        location: 'ubate'
    },
    pedro: {
        age: 30,
        location: 'bogota'
    },
};
console.log(user.diana.age);
console.log(user.pulga?.age); //undefined by opcional chaining