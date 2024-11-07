/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
const users = [
  { name: 'Igor', age: 19 },
  { name: 'Danil', age: 1 },
  { name: 'Vovan', age: 4 },
  { name: 'Matvey', age: 16 },
];
// eslint-disable-next-line no-unused-vars
const ages = users.map(({age}) => age);
console.log(ages);

const numbers = [5, 2, 3];
const newNumbers = numbers.map((number) => number ** 2);
console.log(newNumbers);

const names = users.reduce((acc, items) => {
  acc.push(items.name);
  return acc;
}, []);
console.log(names);
// eslint-disable-next-line no-unused-vars
const num = users.reduce((accum, item) => {
  accum.push(item.age);
  return accum;
}, []);
console.log(num);
const nam = [9, 10, -5, 1, ...num];
console.log(nam);
let b = nam.reduce((accum, items) => {
  accum += items;
  return accum;
});
console.log(b);
const terms = ['agg', 'math', 'deagle'];
const echka = terms.slice(1);
console.log(echka);
const city5 = ['moscow', 'samara'];
const sity4 = ['kupino', ...city5, ...echka];
console.log(sity4);
// отработка rest
function matic(a, b, ...rest) {
  return a + b + rest.reduce((a, i) => a + i);
}
const mat = [1, 5, 3, 6, 7];
//console.log(matic(...mat));
const [a, ...other] = mat;
console.log(a, other);
const person = {
  fack: 'max',
  age: 25,
  sity: 'samara'
};
const {fack, age, ...log} = person;
console.log(fack, age, log);
