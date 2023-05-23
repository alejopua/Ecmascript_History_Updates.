//Regex
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const match = regex.exec('2023-07-16');
const fullData = match[0];
const year = match[1];
const month = match[2];
const day = match[3];
console.log(fullData);
console.log(year, month, day);
console.table(match);