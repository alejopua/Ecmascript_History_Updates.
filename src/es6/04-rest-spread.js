//arrays destructuring
let fruits = ['apple', 'banana', 'orange'];
let [a, b] = fruits;
console.log(a, fruits[2]); // apple orange


//objects destructuring
let user = {
    username: 'John',
    age: 26,
    location: 'USA'
};

let {username, age, location} = user;
console.log(username, age, location); // John 26 USA

//spread operator
let person = {name: 'John', age: 26};
let country = {country: 'USA', code: 'US'};
let data = {...person, ...country};
console.log(data); // {name: 'John', age: 26, country: 'USA', code: 'US'}

//rest operator
function sum(num,...values) {
    console.log(values); // [2, 3, 4]
    console.log(num + values[0]); // num=10 => num + values[0]=12
    return num + values[0];
}

sum(10, 2, 3, 4);