const fn = {
  add: (num1, num2) => {
    return num1 + num2;
  },
  makeUser: (name, age) => ({ name, age, gender: undefined }),
};

module.exports = fn;
