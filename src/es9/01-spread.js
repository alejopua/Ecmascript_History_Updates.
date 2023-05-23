//spread operator
const person = { username: 'John', age: 26 , location: 'USA' , country: 'USA' , code: 'US' };
const { username, ...values } = person;
console.log(username); // John
console.log(values); // {age: 26, location: 'USA' , country: 'USA' , code: 'US'}