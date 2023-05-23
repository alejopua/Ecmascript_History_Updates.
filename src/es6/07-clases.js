//class
class user {
    constructor (name, city) {
        this.name = name;
        this.city = city;
    }
    
    //métodos
    speak () {
        return 'Hola, soy';
    }
    greeting () {  
        return `${this.speak()} ${this.name} y vivo en ${this.city}`;
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
console.log(person2.greeting());
console.log(person2.getCity);
console.log(person2.setCity = 'Madrid');


