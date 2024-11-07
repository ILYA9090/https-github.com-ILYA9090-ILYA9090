// eslint-disable-next-line no-unused-vars
function getChildren(users) {
  const result = [];
  const child = users.map(({ children }) => children);
  const name = child.flat(2);
  result.push(name);
  return result;
}

connst num = [1, 2, 3, 4, 5, 6, 7, 8, 12, 15, 18, 20];

const fackfd = (...num) => {
  const result = [];
  const nume = num.filter((item) => item % 2 === 0);
  result.push(nume);
  return result;
};
