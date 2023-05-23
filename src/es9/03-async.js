//Async Await
async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then((data) => console.log(data.value));
other.next().then((data) => console.log(data.value));
other.next().then((data) => console.log(data.value));
console.log("End of the script");


//Without async Await
function* anotherGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const other1 = anotherGenerator();
console.log(other1.next().value);
console.log(other1.next().value);
console.log(other1.next().value);
console.log("End of the script");



async function arrayOfNames(array) {
    for await (const value of array) {
        console.log(value);
    }
}

arrayOfNames(["John", "Jane", "Jack"]);
console.log('after');
