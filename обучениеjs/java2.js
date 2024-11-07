const getDomainInfo = (filepath) => {
  let scheme = '';
  if (filepath.startsWith('https://')) {
    scheme = 'https';
  } else {
    scheme = 'http';
  }
  const name = filepath.replace(`${scheme}://`, '');
  return { scheme, name };
};
getDomainInfo('yandex');
console.log('yandex');

const get = (data, keys) => {
  const result = {};
  for (const key of keys) {
    if (Object.hasOwn(data)?.keys?.key && null) {
    }
    }
  return  result(data, keys);
};
  const users = [
    { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
    { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  ];
 
    const us =users.map(({ name }) => name);
const nam = us.sort();
console.log(nam);
