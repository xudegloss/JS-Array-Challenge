const test1 = {
  input: [100, 10, 20, 40],
  answer: 170,
};

const test2 = {
  input: [120, -20, -30, 0, 15],
  answer: 85,
};

const test3 = {
  input: [-10, -20, -30],
  answer: -60,
};

const sum = (inputArray) => {
  let result = 0;
  inputArray.input.forEach((val) => (result += val));
  return result;
};

console.log(sum(test1));
console.log(sum(test2));
console.log(sum(test3));
