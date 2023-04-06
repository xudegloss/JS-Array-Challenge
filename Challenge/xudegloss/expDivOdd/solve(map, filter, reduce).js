let sum = 0;

function solution(inputArray) {
  // 1. 모든 요소에 제곱하기 (map)
  let val = inputArray.map((input) => input ** 2);
  // 2. 그 곳에서 나머지가 홀수인 요소만 찾기 (filter)
  let isOdd = val.filter((input) => input % 3 === 1);
  // 3. 누적하여 더하기 (reduce) 반드시 맨 뒤에 초기값 넣어주기
  let answer = isOdd.reduce((prev, curr) => prev + curr, 0);
  return answer;
}

exports.solution = solution;

console.log(solution([3, 6, 1, 5, 6]));
