// const isEven = (value) => {
//   value % 2 === 0;
// };

// const arr = [1, 2, 4, 3, 19, 20];
// console.log(arr.every(isEven));

function solution(inputArray) {
  let answer = inputArray.every((input) => input % 2 === 0);
  return answer;
}

// 없어도 돌아가기는 하는데, 왜 있는지는 잘 모르겠다.
exports.solution = solution;

console.log(solution([2, 4, 6, 8, 10]));
console.log(solution([2, 3, 6, 8, 10]));
