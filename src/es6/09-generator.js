//Generator Example 1
function* getData(array) {
    for (const value of array) {
        yield value;
    }
}

const data = getData([1, 2, 3, 4]);
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);



//Generator Example 2
function* getId() {

    let charArray = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
    let i = 0;
    let y = 100;

    for (const letter of charArray) {
        i++;
        y--;
        yield i + letter + y;
    }
}

const data1 = getId();

console.log(data1.next().value);
console.log(data1.next().value);
console.log(data1.next().value);
console.log(data1.next().value);