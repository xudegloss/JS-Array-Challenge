const test1 = {
  input: [1, 40, "라매", "개발자", 51.5, "a", 88],
  answer: [1, 40, 51.5, 88],
};

const test2 = {
  input: [1, 2, 3, "4", 5, "6"],
  answer: [1, 2, 3, 5],
};

const test3 = {
  input: [-3, -2, -1, 0, 1, 2, 3],
  answer: [-3, -2, -1, 0, 1, 2, 3],
};

const isNum = (inputArray) => {
  let result = [];
  // isNaN : Not A Number
  // !isNaN : A Number
  // 문자열 숫자가 자꾸 숫자로 인식된다. (숫자로 변환한 것과 값이 타입이 완전히 일치하는 경우 숫자이다.)
  inputArray.input.forEach((val) => {
    if (!isNaN(val) && val === Number(val)) {
      result.push(val);
    }
  });
  return result;
};

console.log(isNum(test1));
console.log(isNum(test2));
console.log(isNum(test3));
