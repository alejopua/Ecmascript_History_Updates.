function newUser(name, age, city) {
    var name = name || 'Diana';
    var age = age || 27;
    var city = city || 'Ubate';
    console.log(name, age, city);
}

newUser();
newUser('Pedro', 30, 'Cali');

//-----------------------
function newAdmin(name = 'Lleritos', age = 27, city = 'Ubate') {
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('City:', city);
}

console.log('Before call--------');
newAdmin();
console.log('After call---------');
newAdmin('Alejandro', 30, 'Cali');