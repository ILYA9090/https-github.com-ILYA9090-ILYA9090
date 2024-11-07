
const obj = { name : 'ilya', surname : 'Ovchinnikov', age : 22 };
const ob = Object.entries(obj);
console.log(ob);

const sum = (...numbers) => {
  let result = 0;
  for (const num of numbers) {
    result += num;
  }
  return result;
};
console.log(sum(1, 4, 5, 8, 9, 10));

const printer = {
  name: 'Hexlet',
  print(greeting = 'hello') {
    console.log(`${greeting}, ${this.name}`);
  }
};
console.log(setTimeout(printer.print, 1000));
