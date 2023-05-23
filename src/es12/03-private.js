/* Métodos privados de clases
Consiste en limitar el acceso a propiedades y métodos agregando el carácter numeral ( # ). Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, se puede acceder a ellos fuera de la clase. */

class user {
    constructor (name, city) {
        this.name = name;
        this.city = city;
    }
    //métodos
    speak () {
        return 'Hola, soy';
    }
    
    #greeting () {  
        return `${this.speak()} ${this.name} y vivo en ${this.city}`;
    }

    viewGreeting () {
        return this.#greeting();
    }

    // getters and setters
    get getCity () {
        return this.city;
    }
    set setCity (city) {
        this.city = city;
    }
};

const person2 = new user('Pedro', 'Barcelona');
// console.log(person2.name);
// console.log(person2.getCity);
// console.log(person2.setCity = 'Madrid');
// console.log(person2.getCity);
console.log(person2.viewGreeting());
//console.log(person2.greeting());