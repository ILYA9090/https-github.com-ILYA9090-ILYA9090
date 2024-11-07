const emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
];
const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// eslint-disable-next-line no-shadow
const getFreeDomainsCount = (emails) => emails.map((email) => {
  const [, domain] = email.split('@');
  return domain;
})
  .filter((domain) => freeEmailDomains.includes(domain)).reduce((acc, domain) => {
    // eslint-disable-next-line no-undef
    const count = get(acc, domain, 0) + 1;
    return { ...acc, [domain]: count };
  }, {});

// eslint-disable-next-line no-unused-vars
// Рекурсия 
const s = (n) => {
  if (n === 1) 
 
  return n + s(n - 1);
};
console.log(s(5));
// вывела сумму 15 
const d = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * d(n - 1);
};
console.log(s(3));
 // вывела 6 
function sequenceSum (begin, end) {
  if (begin > end) {
    return NaN;
  }
  if (begin === end) {
    return begin;
  }
  return begin + sequenceSum(begin + 1, end);
};
console.log(sequenceSum(2, 7));
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  const iter = (counter, acc) => {
    if (counter === 1) {
      return acc;
    }
    return iter(counter - 1, counter * acc);
  };

  return iter(n, 1);
};
console.log(factorial(3));
// ответ 6
//вот так проходят вычисления
 //iter(3, 1);   // iter(3 - 1, 3 * 1);
 //iter(2, 3);   // iter(2 - 1, 2 * 3);
//iter(1, 6);   // counter === 1, return 6
//6
const k = (n) => {
  if (n === 1) {
    return 1;
  }
  return k(n - 1) + n;
};
console.log(k(5));
const smallestDivisor = (num) => {
  const iter = (acc) => {
    if (acc > num / 2) {
      return num;
    }
    if (num % acc === 0) {
      return acc;
    }
    return iter(acc + 1);
  };
  return iter(2);
};
console.log(smallestDivisor(15));
const capitalize = (text) => {
  const firstChar = text[0].toUpperCase();
  const uperstring = text.slice(1);
  return `${firstChar}${uperstring}`;
};
console.log(capitalize('hello'));
