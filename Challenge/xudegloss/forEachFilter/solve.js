const test1 = [1, 40, 55, 82, 31, 11];

// 전에 풀던 방식하고 똑같이 풀면 된다.
// 반복문 + 빈 리스트 + push 방식 이용하기.

const isBigger40 = (inputArray) => {
  let result = [];
  inputArray.forEach((val) => {
    if (val > 40) {
      result.push(val);
    }
  });
  return result;
};

console.log(isBigger40(test1));
