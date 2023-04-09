const test1 = {
  input: [3, 29, 38, 12, 57, 74, 40, 85, 61],
  answer: { maxValue: 85, idx: 7 },
};

const test2 = {
  input: [-24, -2, -13, -49, -999999, -17],
  answer: { maxValue: -2, idx: 1 },
};

//최댓값이 중복일 때에는 먼저 나온 최댓값의 인덱스를 유지하도록 설정하였습니다.
const test3 = {
  input: [2, -20, 21, -874, 99, -16, -29, 99],
  answer: { maxValue: 99, idx: 4 },
};

// reduce로 최대, 최소 어떻게 구하지?
// 기억하기 : reduce는 함수 안에서 이용하는 경우에 return을 꼭 앞에 붙여주기.

const solution = (inputArray) => {
  return inputArray.input.reduce(
    (prev, cur, idx) => {
      if (prev.MaxValue < cur) {
        prev.idx = idx;
        prev.MaxValue = cur;
      }
      return prev;
    },
    { idx: 0, MaxValue: inputArray.input[0] }
  );
};

console.log(solution(test1));
console.log(solution(test2));
console.log(solution(test3));
