const test1 = {
  input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  answer: "max : 10, min : 1",
};

const solution = (inputArray) => {
  return `max : ${Math.max(...inputArray.input)}, min : ${Math.min(
    ...inputArray.input
  )}`;
};

console.log(solution(test1));
