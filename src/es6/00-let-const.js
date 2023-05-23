var lastName = 'Pedro';
lastName = 'Alejandro';
console.log(lastName);

let fruit = 'apple';
fruit = 'banana';  
console.log(fruit);

const pet = 'Dog';
pet = 'Cat'; // TypeError: Assignment to constant variable.

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Banana'; // block scope
        const fruit3 = 'Kiwi'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();