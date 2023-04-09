const test1 = {
  input: [
    {
      name: "홍길동",
      nickname: "hong",
    },
    {
      name: "둘리",
      nickname: "2li",
    },
    {
      name: "오스트랄로피테쿠스",
      nickname: "1Cin",
    },
  ],
  answer: { hong: "홍길동", "2li": "둘리", "1Cin": "오스트랄로피테쿠스" },
};

// 초기값을 {}라고 지정한다.
// 객체에 키와 값을 지정한다.

const solution = (inputArray) => {
  return inputArray.input.reduce((acc, cur) => {
    acc[cur.nickname] = cur.name;
    return acc;
  }, {});
};

console.log(solution(test1));
