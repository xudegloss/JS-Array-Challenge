const test1 = {
  input: {
    A: [1, 2, 3, 4, 5],
    B: [3, 4, 5, 6, 7],
  },
};

const solution = (inputArray) => {
  let A = inputArray.input.A;
  let B = inputArray.input.B;
  return A.filter((val) => B.includes(val));
  // 배열.includes(요소)
};

exports.solution = solution;

console.log(solution(test1));
// answer: [3, 4, 5]
