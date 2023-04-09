const test1 = {
  input: [10, 3, 20, 5, 8, 60],
  answer: 106,
};

const solution = (inputArray) => {
  return inputArray.input.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};

console.log(solution(test1));
