//set add
const list = new Set();
list.add('item 1').add('iteam 2').add('item 3');

console.log(list.size);
console.log(list.has('iteam 2'));
console.log(list);
console.log(list.delete('iteam 2'));
console.log(list);
console.log(list.clear());
console.log(list);